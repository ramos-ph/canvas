export const chainAbi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_contractRegistry',
        type: 'address',
      },
      {
        internalType: 'uint16',
        name: '_padding',
        type: 'uint16',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'minter',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'blockId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'staked',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'power',
        type: 'uint256',
      },
    ],
    name: 'LogMint',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'executor',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint16',
        name: 'timePadding',
        type: 'uint16',
      },
    ],
    name: 'LogPadding',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'blockId',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'voter',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'vote',
        type: 'uint256',
      },
    ],
    name: 'LogVoter',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    inputs: [],
    name: 'ETH_PREFIX',
    outputs: [
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'blocks',
    outputs: [
      {
        internalType: 'bytes32',
        name: 'root',
        type: 'bytes32',
      },
      {
        internalType: 'uint32',
        name: 'dataTimestamp',
        type: 'uint32',
      },
      {
        internalType: 'uint128',
        name: 'affidavit',
        type: 'uint128',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'blocksCount',
    outputs: [
      {
        internalType: 'uint32',
        name: '',
        type: 'uint32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'blocksCountOffset',
    outputs: [
      {
        internalType: 'uint32',
        name: '',
        type: 'uint32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
      {
        internalType: 'uint256',
        name: '_offset',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_items',
        type: 'uint256',
      },
    ],
    name: 'bytesToBytes32Array',
    outputs: [
      {
        internalType: 'bytes32[]',
        name: '',
        type: 'bytes32[]',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [],
    name: 'contractRegistry',
    outputs: [
      {
        internalType: 'contract IRegistry',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    name: 'fcds',
    outputs: [
      {
        internalType: 'uint224',
        name: 'value',
        type: 'uint224',
      },
      {
        internalType: 'uint32',
        name: 'dataTimestamp',
        type: 'uint32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getBlockId',
    outputs: [
      {
        internalType: 'uint32',
        name: '',
        type: 'uint32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint32',
        name: '_blockId',
        type: 'uint32',
      },
    ],
    name: 'getBlockRoot',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint32',
        name: '_blockId',
        type: 'uint32',
      },
    ],
    name: 'getBlockTimestamp',
    outputs: [
      {
        internalType: 'uint32',
        name: '',
        type: 'uint32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '_key',
        type: 'bytes32',
      },
    ],
    name: 'getCurrentValue',
    outputs: [
      {
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'timestamp',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32[]',
        name: '_keys',
        type: 'bytes32[]',
      },
    ],
    name: 'getCurrentValues',
    outputs: [
      {
        internalType: 'uint256[]',
        name: 'values',
        type: 'uint256[]',
      },
      {
        internalType: 'uint32[]',
        name: 'timestamps',
        type: 'uint32[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getLatestBlockId',
    outputs: [
      {
        internalType: 'uint32',
        name: '',
        type: 'uint32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getLeaderAddress',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_timestamp',
        type: 'uint256',
      },
    ],
    name: 'getLeaderAddressAtTime',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_numberOfValidators',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_timestamp',
        type: 'uint256',
      },
    ],
    name: 'getLeaderIndex',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getName',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getNextLeaderAddress',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getStatus',
    outputs: [
      {
        internalType: 'uint256',
        name: 'blockNumber',
        type: 'uint256',
      },
      {
        internalType: 'uint16',
        name: 'timePadding',
        type: 'uint16',
      },
      {
        internalType: 'uint32',
        name: 'lastDataTimestamp',
        type: 'uint32',
      },
      {
        internalType: 'uint32',
        name: 'lastBlockId',
        type: 'uint32',
      },
      {
        internalType: 'address',
        name: 'nextLeader',
        type: 'address',
      },
      {
        internalType: 'uint32',
        name: 'nextBlockId',
        type: 'uint32',
      },
      {
        internalType: 'address[]',
        name: 'validators',
        type: 'address[]',
      },
      {
        internalType: 'uint256[]',
        name: 'powers',
        type: 'uint256[]',
      },
      {
        internalType: 'string[]',
        name: 'locations',
        type: 'string[]',
      },
      {
        internalType: 'uint256',
        name: 'staked',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes',
        name: '_key',
        type: 'bytes',
      },
      {
        internalType: 'bytes',
        name: '_value',
        type: 'bytes',
      },
    ],
    name: 'hashLeaf',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'padding',
    outputs: [
      {
        internalType: 'uint16',
        name: '',
        type: 'uint16',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '_affidavit',
        type: 'bytes32',
      },
      {
        internalType: 'uint8',
        name: '_v',
        type: 'uint8',
      },
      {
        internalType: 'bytes32',
        name: '_r',
        type: 'bytes32',
      },
      {
        internalType: 'bytes32',
        name: '_s',
        type: 'bytes32',
      },
    ],
    name: 'recoverSigner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint16',
        name: '_padding',
        type: 'uint16',
      },
    ],
    name: 'setPadding',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'stakingBankContract',
    outputs: [
      {
        internalType: 'contract IStakingBank',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint32',
        name: '_dataTimestamp',
        type: 'uint32',
      },
      {
        internalType: 'bytes32',
        name: '_root',
        type: 'bytes32',
      },
      {
        internalType: 'bytes32[]',
        name: '_keys',
        type: 'bytes32[]',
      },
      {
        internalType: 'uint256[]',
        name: '_values',
        type: 'uint256[]',
      },
      {
        internalType: 'uint8[]',
        name: '_v',
        type: 'uint8[]',
      },
      {
        internalType: 'bytes32[]',
        name: '_r',
        type: 'bytes32[]',
      },
      {
        internalType: 'bytes32[]',
        name: '_s',
        type: 'bytes32[]',
      },
    ],
    name: 'submit',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'tokenContract',
    outputs: [
      {
        internalType: 'contract ERC20',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'validatorRegistryContract',
    outputs: [
      {
        internalType: 'contract IValidatorRegistry',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32[]',
        name: '_proof',
        type: 'bytes32[]',
      },
      {
        internalType: 'bytes32',
        name: '_root',
        type: 'bytes32',
      },
      {
        internalType: 'bytes32',
        name: '_leaf',
        type: 'bytes32',
      },
    ],
    name: 'verifyProof',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_blockId',
        type: 'uint256',
      },
      {
        internalType: 'bytes32[]',
        name: '_proof',
        type: 'bytes32[]',
      },
      {
        internalType: 'bytes',
        name: '_key',
        type: 'bytes',
      },
      {
        internalType: 'bytes',
        name: '_value',
        type: 'bytes',
      },
    ],
    name: 'verifyProofForBlock',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint32',
        name: '_blockId',
        type: 'uint32',
      },
      {
        internalType: 'bytes32[]',
        name: '_proof',
        type: 'bytes32[]',
      },
      {
        internalType: 'bytes',
        name: '_key',
        type: 'bytes',
      },
      {
        internalType: 'bytes',
        name: '_value',
        type: 'bytes',
      },
    ],
    name: 'verifyProofForBlockForNumber',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint32[]',
        name: '_blockIds',
        type: 'uint32[]',
      },
      {
        internalType: 'bytes',
        name: '_proofs',
        type: 'bytes',
      },
      {
        internalType: 'uint256[]',
        name: '_proofItemsCounter',
        type: 'uint256[]',
      },
      {
        internalType: 'bytes32[]',
        name: '_leaves',
        type: 'bytes32[]',
      },
    ],
    name: 'verifyProofs',
    outputs: [
      {
        internalType: 'bool[]',
        name: 'results',
        type: 'bool[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];
