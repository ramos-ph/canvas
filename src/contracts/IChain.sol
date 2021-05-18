// SPDX-License-Identifier: MIT
pragma solidity >=0.6.8 <=0.8.0;
pragma abicoder v2;

interface IChain {
  struct Block {
    bytes32 root;
    uint32 dataTimestamp;
    uint128 affidavit;
  }

  struct NumericFCD {
    uint256 value;
    uint32 dataTimestamp;
  }

  function blocks(uint256) external view returns (Block memory);
  function numericFCDs(bytes32) external view returns (NumericFCD memory);

  function blocksCount() external view returns (uint32);

  function blocksCountOffset() external view returns (uint32);

  function padding() external view returns (uint16);

  function getName() external pure returns (bytes32);

  function recoverSigner(bytes32 affidavit, uint8 _v, bytes32 _r, bytes32 _s) external pure returns (address);

  function getStatus() external view returns(
    uint256 blockNumber,
    uint16 timePadding,
    uint32 lastDataTimestamp,
    uint32 lastBlockId,
    address nextLeader,
    uint32 nextBlockId,
    address[] memory validators,
    uint256[] memory powers,
    string[] memory locations,
    uint256 staked
  );

  function getBlockId() external view returns (uint32);

  function getLatestBlockId() external view returns (uint32);

  function getLeaderIndex(uint256 _numberOfValidators, uint256 _timestamp) external view returns (uint256);

  function getNextLeaderAddress() external view returns (address);
  
  function getLeaderAddress() external view returns (address);

  function getLeaderAddressAtTime(uint232 _timestamp) external view returns (address);

  function verifyProof(bytes32[] calldata _proof, bytes32 _root, bytes32 _leaf) external pure returns (bool);

  function hashLeaf(bytes calldata _key, bytes calldata _value) external pure returns (bytes32);

  function verifyProofForBlock(
    uint256 _blockId,
    bytes32[] calldata _proof,
    bytes calldata _key,
    bytes calldata _value
  ) external view returns (bool);

  function bytesToBytes32Array(
    bytes calldata _data,
    uint256 _offset,
    uint256 _items
  ) external pure returns (bytes32[] memory);

  function verifyProofs(
    uint256[] calldata _blockIds,
    bytes calldata _proofs,
    uint256[] calldata _proofItemsCounter,
    bytes32[] calldata _leaves
  ) external view returns (bool[] memory results);
  
  function decodeLeafToNumber(bytes calldata _leaf) external pure returns (uint);

  function decodeLeafToFloat(bytes calldata _leaf) external pure returns (uint);

  function verifyProofForBlockForNumber(
    uint256 _blockId,
    bytes32[] calldata _proof,
    bytes calldata _key,
    bytes calldata _value
  ) external returns (bool, uint256);

  function verifyProofForBlockForFloat(
    uint256 _blockId,
    bytes32[] calldata _proof,
    bytes calldata _key,
    bytes calldata _value
  ) external view returns (bool, uint256);

  function getBlockRoot(uint256 _blockId) external view returns (bytes32);

  function getBlockTimestamp(uint32 _blockId) external view returns (uint32);

  function getCurrentValues(bytes32[] calldata _keys)
  external view returns (uint256[] memory values, uint256[] memory timestamps);

  function getCurrentValue(bytes32 _key) external view returns (uint256 value, uint256 timestamp);
}
