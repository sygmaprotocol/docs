---
title: Testnet
id: testnet-index
description: The following details a list of resources that support the Testnet environment.
---

import RouteTable from '../../../src/components/RouteTable';
import DomainInfo from '../../../src/components/DomainInfo';
import SupportedDomains from '../../../src/components/SupportedDomains';
import { Environment } from '@buildwithsygma/sygma-sdk-core';

:::tip Status
**🟢 Active**
:::

The following section details Sygma's testnet deployment, including the protocol's:
- [Testnet transfer UI](#testnet-transfer-ui)
- [Testnet faucet](#testnet-faucet)
- [Supported networks](#supported-networks)
- [Contract addresses](#contract-addresses)
- [Registered resources](#registered-resources)
- [Fee schemes](#fee-schemes)
- [Sygma Explorer](#sygma-explorer)
- [Routes](#routes)


Many of the values found below will be important if you are a developer working with the [Sygma SDK](../../02-sygma-sdk/01-index.md)

## Testnet transfer UI

The [transfer UI](https://transfer-ui.test.buildwithsygma.com) provides users with a visual interface to connect their wallets and bridge tokens.

## Testnet faucet

The [faucet UI](https://faucet-ui-stage.buildwithsygma.com) provides users with a visual interface to mint tokens.

## Supported networks

<SupportedDomains environment={Environment.TESTNET} />

## Contract addresses
This only includes EVM networks

<DomainInfo environment={Environment.TESTNET} />

## Registered resources

**ERC20LRTest**

| Property                 | Value                                                                                                                                |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| Symbol                   | ERC20LRTST                                                                                                                           |
| Type                     | ERC-20                                                                                                                               |
| Registered Fee Handler   | BasicFeeHandler                                                                                                                      |
| Registered Handler       | ERC20Handler                                                                                                                         |
| Bridging Strategy        | Lock/Release                                                                                                                         |
| Resource ID              | 0x0000000000000000000000000000000000000000000000000000000000000300                                                                   |
| Goerli Contract Address  | [0x3F9A68fF29B3d86a6928C44dF171A984F6180009](https://goerli.etherscan.io/address/0x3F9A68fF29B3d86a6928C44dF171A984F6180009)         |
| Sepolia Contract Address | [0x7d58589b6C1Ba455c4060a3563b9a0d447Bef9af](https://sepolia.etherscan.io/address/0x7d58589b6C1Ba455c4060a3563b9a0d447Bef9af)        |
| Base Contract Address    | [0xA5278861d2352fd8eD59b985a29ad46E40930F12](https://goerli.basescan.org/address/0xA5278861d2352fd8eD59b985a29ad46E40930F12)         |
| Cronos Contract Address  | [0x2938ed97ef9d897dac7b21c48e045f34a3a02846](https://explorer.cronos.org/testnet/address/0x2938ed97ef9d897dac7b21c48e045f34a3a02846) |
| Mumbai Contract Address  | [0x75811b960c7acB255f9091bBAC401700E407CDB6](https://mumbai.polygonscan.com/address/0x75811b960c7acB255f9091bBAC401700E407CDB6)      |

**Phala**

| Details                  | Information                                                                                                                  |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------- |
| Symbol                   | gPHA                                                                                                                         |
| Type                     | ERC-20                                                                                                                       |
| Registered Fee Handler   | BasicFeeHandler                                                                                                              |
| Registered Handler       | ERC20Handler                                                                                                                 |
| Bridging Strategy        | Lock/Release                                                                                                                 |
| Resource ID              | 0x0000000000000000000000000000000000000000000000000000000000001000                                                           |
| Goerli Contract Address  | [0xB376b0Ee6d8202721838e76376e81eEc0e2FE864](https://goerli.etherscan.io/address/0xB376b0Ee6d8202721838e76376e81eEc0e2FE864) |
| Sepolia Contract Address | N/A                                                                                                                          |

**Permissionless generic message**

| Details                           | Information                                                        |
| --------------------------------- | ------------------------------------------------------------------ |
| Type                              | Generic                                                            |
| Registered Fee Handler            | FeeHandlerWithOracle                                               |
| Registered Handler                | PermissionlessGenericHandler                                       |
| Bridging Strategy                 | GMP                                                                |
| Resource ID                       | 0x0000000000000000000000000000000000000000000000000000000000000500 |
| Goerli Contract Address           | N/A                                                                |
| Sepolia Contract Address          | N/A                                                                |
| Base-Goerli Contract Address      | N/A                                                                |
| Cronos-Testnet Contract Address   | N/A                                                                |
| Holesky Contract Address          | N/A                                                                |
| Mumbai Contract Address           | N/A                                                                |
| Arbitrum-Sepolia Contract Address | N/A                                                                |

**SygmaUSD**

| Details                  | Information                                                                                                                   |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------  |
| Symbol                   | sygUSD                                                                                                                        |
| Type                     | ERC-20                                                                                                                        |
| Registered Fee Handler   | PercentageFeeHandler                                                                                                          |
| Registered Handler       | ERC20Handler                                                                                                                  |
| Bridging Strategy        | Lock/Release                                                                                                                  |
| Resource ID              | 0x0000000000000000000000000000000000000000000000000000000000001100                                                            |
| Goerli Contract Address  | [0xc00621087a20484DFB0F892ed1cE37fC2ABf72c8](https://goerli.etherscan.io/address/0xc00621087a20484DFB0F892ed1cE37fC2ABf72c8)  |
| Sepolia Contract Address | [0xA9F30c6B5E7996D1bAd51D213277c30750bcBB36](https://sepolia.etherscan.io/address/0xA9F30c6B5E7996D1bAd51D213277c30750bcBB36) |
| Base Contract Address    | [0xA56419ECdb71acE442a6FbfC8E50c5F993667938](https://basescan.org/address/0xA56419ECdb71acE442a6FbfC8E50c5F993667938) |

## Fee schemes


| Network Name                    | Handler Address                                                                                                                      | Fee Type   | Fee Percent/Amount | Gas Amount |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ---------- | ------------------ | ---------- |
| Goerli Fixed                    | N/A                                                                                                                                  | Fixed fee  | 0.001 ETH          |            |
| Sepolia Fixed                   | N/A                                                                                                                                  | Fixed fee  | 0.001 ETH          |            |
| Sepolia Percentage-based        | [0x2e77dEa116117eCF44a427064260D16D488ccff2](https://sepolia.etherscan.io/address/0x2e77dEa116117eCF44a427064260D16D488ccff2)        | Percentage | 10 BPS (or 0.1%)   |            |
| Base-Goerli Fixed               | [0x7dCBdb9cBA0Bb1871EECafAB290E5a2e45077479](https://goerli.basescan.org/address/0x7dCBdb9cBA0Bb1871EECafAB290E5a2e45077479)         | Fixed fee  | 0.001 ETH          |            |
| Base-Goerli Percentage-based    | [0x117689D3BD6b5Cf32cE1d971Dd879eF17209193A](https://goerli.basescan.org/address/0x117689D3BD6b5Cf32cE1d971Dd879eF17209193A)         | Percentage | 1 BPS (or 0.01%)   |            |
| Cronos-Testnet Fixed            | [0x8eDab7563C618a3F1e5021677640565468C706d8](https://explorer.cronos.org/testnet/address/0x8eDab7563C618a3F1e5021677640565468C706d8) | Fixed fee  | 0.001 ETH          |            |
| Cronos-Testnet Percentage-based | [0x26545905a3a63B9ffB37926e909a827bDd088512](https://explorer.cronos.org/testnet/address/0x26545905a3a63B9ffB37926e909a827bDd088512) | Percentage | 1 BPS (or 0.01%)   |            |
| Holesky Fixed                   | [0xEE7946aE5f7287a39Bc67207868EDD4a95f96795](https://holesky.etherscan.io/address/0xEE7946aE5f7287a39Bc67207868EDD4a95f96795)        | Fixed fee  | 0.001 ETH          |            |
| Holesky Percentage-based        | [0x9535484111383531BB9D6922B309Bf316Cec9A19](https://holesky.etherscan.io/address/0x9535484111383531BB9D6922B309Bf316Cec9A19)        | Percentage | 1 BPS (or 0.01%)   |            |
| Mumbai Fixed                    | [0x68812fAA580212a29Fa562ECBFf9C7cBfF1bf5AD](https://mumbai.polygonscan.com/address/0x68812fAA580212a29Fa562ECBFf9C7cBfF1bf5AD)      | Fixed fee  | 0.001 ETH          |            |
| Mumbai Percentage-based         | [0x850c0Dfaf1E8489b6699F7D490f8B5693B226De4](https://mumbai.polygonscan.com/address/0x850c0Dfaf1E8489b6699F7D490f8B5693B226De4)      | Percentage | 1 BPS (or 0.01%)   |            |
| Arbitrum-Sepolia Fixed          | [0xE366E0B707FBF59CF9A3068af34dC519D5fa6e78](https://sepolia.arbiscan.io/address/0xE366E0B707FBF59CF9A3068af34dC519D5fa6e78)         | Fixed fee  | 0.001 ETH          |            |
| Gnosis-Chiado Fixed             | [0x9F5efb442d6F24704dB85569876D9c0CA65aed40](https://gnosis-chiado.blockscout.com/address/0x9F5efb442d6F24704dB85569876D9c0CA65aed40)| Fixed fee  | 0.001 xDAI         |            |

## Sygma Explorer

The [explorer UI](https://scan.test.buildwithsygma.com/) provides users with a cross-chain block explorer that scans for testnet transactions through the Sygma protocol. 


## Routes

<RouteTable environment={Environment.TESTNET} />