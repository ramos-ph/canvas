# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## Unreleased

## [5.9.1] - 2022-04-26
### Changed
- Updated type 1 Gas estimation to use fetched gas price instead of 0.

## [5.9.0] - 2022-04-15
### Added
- Added `GasEstimator` and `GasEstimation`

## [5.8.1] - 2022-04-05
### Changed
- Changed verifyProofForBlock test to search ADA-USD key

## [5.8.0] - 2022-03-22
### Added
- DatumRegistry contract wrapper

## [5.7.0] - 2022-02-16
### Added
- Support for signed numbers
- Passport interface, ABI, and Structs

### Changed
- Updated RPCSelector to throw when no healthy RPC is found

## [5.6.1] - 2022-02-07
### Changed
- Updated RPCSelector Timestamp strategy to not take too much time to run
- Updated RPCSelector timeout to 2.5s

## [5.6.0] - 2022-01-26
### Added
- RPCSelector for choosing the most up to date RPC

## [5.5.1] - 2022-01-24
### Changed
- Downgrade Ethers to 5.4.5

## [5.5.0] - 2021-11-24
### Added
- github workflow for avalanche (avax)

## [5.4.0] - 2021-11-19
### Added
- printableValue and printableKey functions to be used in UI

## [5.3.0] - 2021-11-15
### Changed
- update ethers `~5.5.1`

## [5.2.2] - 2021-10-21
### Fixed
- `IChain` interface

## [5.2.1] - 2021-10-18
### Fixed
- fix polygon workflow

## [5.2.0] - 2021-10-08
### Added
- polygon workflow

## [5.1.0] - 2021-10-08
### Changed
- adjust `SortedMerkleTree` to support squashed root

## [5.0.0] - 2021-09-29
### Added
- multichain support

## [4.2.1] - 2021-09-29
### Added
- Added manual test execution on github actions


## [4.2.0] - 2021-09-24
### Added
- added `OptionsPrice` to feeds schema

## [4.1.1] - 2021-08-12
### Changed
- update type `Block` in `IChain.sol`

## [4.1.0] - 2021-08-12
### Added
- update ethers to version that supports EIP-1559 London

## [4.0.1] - 2021-08-11
### Changed
- update abi

## [4.0.0] - 2021-08-07
## Changed
- update abi for `Chain` and `StakingBank` (`ValidatorRegistry` is deprecated)

## [3.4.1] - 2021-08-03
## Changed
- update `package.json` version to 3.4.1

## [3.4.0] - 2021-08-02
## Added
- add support to `KaikoPriceStream` and `KaikoSpotPrice` fetchers

## [3.3.1] - 2021-07-14
### Fixed
- fix method `ValueDecoder.toUint(bytes32)`

## [3.3.0] - 2021-07-13
### Added
- add method to `ValueDecoder` that converts `bytes32` to `uint256`

## [3.2.1] - 2021-07-13
### Fixed
- update `IChain` interface

## [3.2.0] - 2021-07-13
### Added
- add method to flatten multiple proofs

## [3.1.1] - 2021-07-08
### Updated
- update pipeline for github actions

## [3.1.0] - 2021-07-05
### Added
- New fetcher PolygonIOStockPriceFetcher
- New fetcher PolygonIOCryptoPriceFetcher

## [3.0.1] - 2021-07-01
- New fetcher CoinmarketcapHistoDay
- New fetcher CoinmarketcapHistoHour

## [3.0.0] - 2021-06-29
### Added
- New `OnChainDataFetcher` fetcher definition
- Add support of new numeric type: `FIXED.`

### Changed
- restrict packages versions with `~`

## [2.1.2] - 2021-06-29
### Added
- Added freshness field to CryptoComparePriceWSFetcher

## [2.1.1] - 2021-06-08
### Added
- Add ENV variables to development pipeline

### Changed
- Typo fix on CHANGELOG file

## [2.1.0] - 2021-06-06
### Added
- Add Load Feeds service

## [2.0.2] - 2021-06-04
### Changed
- Update tests
- add back workflow on PR requests

## [2.0.1] - 2021-06-01
### Added
- Improve tests execution
- Add Notifications
- Add Badges for actions

## [2.0.0] - 2021-05-24

### Added
- git action pipeline for develop and production for all blockchains
- `ValueDecoder.sol` library
- `SortedMerkleTree` library

### Changed
- adjust SDK to new way of storing FCD
- update ethers library
- optimise `Chain` storage
- `LeafValuecoder.encode` returns buffer of size 32 (256 bits) by default
- `LeafKeyCoder.encode` returns buffer of size 32

### Removed
- values/leaf types, by default type is numeric
- converters

## [1.0.1] - 2021-05-07
### Added
- gitflow pipeline

## [1.0.0] - 2021-04-15
### Changed
- update `Chain` to version that works based `dataTimestamp` and has `getStatus`

## [0.10.0] - 2021-03-24
### Added
- export `Registry` abi

### Changed
- update contracts abis

## [0.9.0] - 2021-03-18
### Changed
- updated `Chain` to v0.3.0

## [0.8.1] - 2021-03-10
### Changed
- updated `Chain` abi for v0.2.0

## [0.8.0] - 2021-03-10
### Changed
- `Chain` abi v0.2.0

## [0.7.4] - 2021-03-09
### Added
- `IRegistry` interface

## [0.7.3] - 2021-03-09
### Fixed
- package.json version

## [0.7.2] - 2021-03-09
### Fixed
- fixed linters errors for `/abi/*.ts`

### Updated
- `IChain.sol` (with new chain abi)

## [0.7.1] - 2021-03-03
### Fixed
- fix TypeError in `IChain.sol` about calldata

## [0.7.0] - 2021-03-03
### Added
- `IChain.sol` interface

## [0.6.1] - 2021-03-01
### Fixed
- bump version in `package.json`

## [0.6.0] - 2021-02-28
### Added
- API SDK

## [0.5.2] - 2021-02-24
### Fixed
- revert fixed node version

## [0.5.1] - 2021-02-24
### Fixed
- coding/decoding float numbers

## [0.5.0] - 2021-02-21
### Updated
- chain contract abi

## [0.4.0] - 2020-12-17
### Added
- add ABIs for `Chain` and `ValidatorRegistry`

## [0.3.0] - 2020-12-14
### Added
- basic converter methods are available under `toolbox.converters`
- `strToBytes32`
- `numberToUint256`

### Removed
- remove default export

## [0.2.0] - 2020-12-07
### Added
- contract registry

## [0.1.0] - 2020-12-01
### Added
- initial version with support of: hex, integer and float types of data
