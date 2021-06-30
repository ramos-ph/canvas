import { expect } from 'chai';
import { ethers } from 'ethers';
import { LeafValueCoder } from '../../src';
import { FIXED_NUMBER_PREFIX } from '../../src/constants';

describe('LeafValueCoder', () => {
  describe('.encode()', () => {
    it('expect to encode hex data', () => {
      expect(LeafValueCoder.encodeHex('0')).to.eql(Buffer.from('0'.repeat(64), 'hex'));
      expect(LeafValueCoder.encodeHex('01A')).to.eql(Buffer.from('1a'.padStart(64, '0'), 'hex'));
    });

    describe('number to Uint256', () => {
      const dataToTest: [number, string][] = [
        [0, ''],
        [1e-18, '1'],
        [1, '0de0b6b3a7640000'],
        [10, '0000000000000000000000000000000000000000000000008ac7230489e80000'],
        [10.01, '0000000000000000000000000000000000000000000000008aeaa9f6f9a90000'],
        [255, '0dd2d5fcf3bc9c0000'],
        [255, '0dd2d5fcf3bc9c0000'],
        [255.00255, '0dd2df0c29e0c96000'],
        [9007199254740991, '01bc16d674ec7ff21f494c589c0000'],
        [900719925474099.1, '2c68af0bb13ffe9cba87a2760000'],
        [1.900719925474099, '1a60b6b3a763ff38'],
      ];

      dataToTest.forEach(([toConvert, expected]) => {
        it(`expect to convert ${toConvert} to solidity uint256`, () => {
          const encoded = LeafValueCoder.encode(toConvert, '').toString('hex');
          expect(encoded.length).to.eql(64);
          expect(encoded).to.eql(expected.padStart(64, '0'));
        });
      });

      it('expect converted number to be treated as uint', () => {
        const uint256Bytes = ethers.utils.defaultAbiCoder.encode(
          ['uint256'],
          [LeafValueCoder.encode(9007199254740991, '')]
        );
        expect(uint256Bytes).to.eql('0x000000000000000000000000000000000001bc16d674ec7ff21f494c589c0000');
      });
    });

    describe('string/fixed to Uint256', () => {
      const dataToTest: [string, string][] = [
        ['', '0'],
        ['1e18', 'de0b6b3a7640000'],
        ['1', '1'],
        ['0xFF', 'ff'],
      ];

      dataToTest.forEach(([toConvert, expected]) => {
        it(`expect to convert ${toConvert} to solidity uint256`, () => {
          const encoded = LeafValueCoder.encode(toConvert, FIXED_NUMBER_PREFIX).toString('hex');
          expect(encoded.length).to.eql(64);
          expect(encoded).to.eql(expected.padStart(64, '0'));
        });
      });

      it('expect converted string to be treated as uint', () => {
        const uint256Bytes = ethers.utils.defaultAbiCoder.encode(
          ['uint256'],
          [LeafValueCoder.encode(9007199254740991, FIXED_NUMBER_PREFIX)]
        );
        expect(uint256Bytes).to.eql('0x000000000000000000000000000000000000000000000000001fffffffffffff');
      });
    });
  });

  describe('.decode()', () => {
    describe('Uint to number', () => {
      const dataToTest: [string, number][] = [
        ['', 0],
        ['01', 1e-18],
        ['0x11', 1.7e-17],
        ['0de0b6b3a7640000', 1],
        ['0x0dd2d5fcf3bc9c0000', 255],
        ['0dd2d5fcf3bc9c0000', 255],
        ['0x0dd2df0c29e0c96000', 255.00255],
        ['01bc16d674ec7ff21f494c589c0000', 9007199254740991],
        ['2c68af0bb13ffe9cba87a2760000', 900719925474099.1],
        ['0x1a60b6b3a763ff38', 1.900719925474099],
      ];

      dataToTest.forEach(([toConvert, expected]) => {
        it(`expect to convert ${toConvert} to ${expected}`, () => {
          expect(LeafValueCoder.decode(toConvert, '')).to.eql(expected);
        });
      });
    });

    describe('Uint to fixed', () => {
      const dataToTest: [string, string][] = [
        ['', '0'],
        ['1', '1'],
        ['0xa', '10'],
        [
          '0x' + ethers.constants.MaxUint256.toHexString(),
          '115792089237316195423570985008687907853269984665640564039457584007913129639935',
        ],
      ];

      dataToTest.forEach(([toConvert, expected]) => {
        it(`expect to convert ${toConvert} to ${expected}`, () => {
          expect(LeafValueCoder.decode(toConvert, FIXED_NUMBER_PREFIX)).to.eql(expected);
        });
      });
    });
  });
});
