import dotenv from 'dotenv';
import {APIClient} from '../../src';
import {expect} from 'chai';
import {ethers} from 'ethers';
import {Registry} from '../../src/contracts/Registry';
import {ChainContract} from '../../src';

dotenv.config();

const {REGISTRY_CONTRACT_ADDRESS, BLOCKCHAIN_PROVIDER_URL, API_BASE_URL, API_KEY} = process.env;


describe('APIClient()', async () => {
  const apiClient = new APIClient({
    baseURL: API_BASE_URL as string,
    apiKey: API_KEY as string,
  });

  // These are integration tests that do not require api key
  describe('#getBlocks', () => {
    it('expect to return a valid list of blocks', async () => {
      const blocks = await apiClient.getBlocks();
      expect(blocks).be.an('array');

      blocks.forEach((block) => {
        expect(block).be.an('object');
        expect(block).to.have.property('_id').that.is.a('string');
      });
    });
  });

  describe('#getBlock', () => {
    it('expect to return a valid block', async () => {
      const blocks = await apiClient.getBlocks();
      const blockId = blocks[0]._id;

      const block = await apiClient.getBlock(blockId);

      expect(block).be.an('object');
      expect(block).to.have.property('_id').that.is.a('string');
    });
  });

  describe('#getNewestBlock', () => {
    it('expect to return a valid block', async () => {
      const block = await apiClient.getNewestBlock();

      expect(block).be.an('object');
      expect(block).to.have.property('_id').that.is.a('string');
    });
  });

  describe('#getLeavesOfBlock', () => {
    it('expect to return a valid list of leaves', async () => {
      const blocks = await apiClient.getBlocks();
      const blockId = blocks[0]._id;

      const leaves = await apiClient.getLeavesOfBlock(blockId);
      expect(leaves).be.an('array');

      leaves.forEach((leaf) => {
        expect(leaf).be.an('object');
        expect(leaf).to.have.property('_id').that.is.a('string');
      });
    });
  });
});

describe('APIClient() with chain settings', () => {
  let chainContractAddress: string;
  let chainContract: ChainContract;
  let apiClient: APIClient;

  before(async () => {
    const provider = new ethers.providers.JsonRpcProvider(BLOCKCHAIN_PROVIDER_URL || 'ws://127.0.0.1:8545');

    const registry = new Registry(provider, REGISTRY_CONTRACT_ADDRESS as string);

    chainContractAddress = await registry.getAddress('Chain');
    chainContract = new ChainContract(provider, chainContractAddress);

    apiClient = new APIClient({
      baseURL: API_BASE_URL as string,
      apiKey: API_KEY as string,
      chainContract,
    });
  });

  describe('#getProofs', () => {
    it('expect to return valid result when api key is set', async () => {
      const [lastBlock] = await apiClient.getBlocks({limit: 1});

      const proofs = await apiClient.getProofs(lastBlock.numericFcdKeys);

      expect(proofs).be.an('object');
      expect(proofs).to.have.nested.property('block._id').that.is.a('string');
      expect(proofs).to.have.property('keys').that.is.an('array');
      expect(proofs).to.have.property('leaves').that.is.an('array');
    });
  });

  describe('#verifyProofForBlock', () => {
    it('expect to return valid result', async () => {
      const verificationResult = await apiClient.verifyProofForNewestBlock('ETH-USD');

      expect(verificationResult).be.an('object');
      expect(verificationResult)
        .to.have.property('success')
        .that.is.a('boolean');
      expect(verificationResult).to.have.property('value');
    });
  });
});
