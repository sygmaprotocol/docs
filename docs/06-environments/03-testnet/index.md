---
title: Testnet
id: testnet-index
description: The following details a list of resources that support the Testnet environment.
---

import SupportedDomains from '../../../src/components/SupportedDomains';
import { Environment } from '@buildwithsygma/sygma-sdk-core';

:::tip Status
**🟢 Active**
:::

The following section details Sygma's testnet deployment, including the protocol's:
- [Testnet transfer UI](#testnet-transfer-ui)
- [Testnet faucet](#testnet-faucet)
- [Supported networks](#supported-networks)
- [EVM contract addresses](#evm-contract-addresses)
- [Registered resources](#registered-resources)
- [Fee schemes](#fee-schemes)
- [Sygma Explorer](#sygma-explorer)

Many of the values found below will be important if you are a developer working with the [Sygma SDK](../../02-sygma-sdk/01-index.md)

## Testnet transfer UI

The [transfer UI](https://transfer-ui.test.buildwithsygma.com) provides users with a visual interface to connect their wallets and bridge tokens.

## Testnet faucet

The [faucet UI](https://faucet-ui-stage.buildwithsygma.com) provides users with a visual interface to mint tokens.

## Supported networks

<SupportedDomains environment={Environment.TESTNET} />


## EVM contract addresses

**Sepolia (Domain ID: 2)**

| Contract                          | Address                                    |
| --------------------------------- | ------------------------------------------ |
| Bridge                            | [0x4CF326d3817558038D1DEF9e76b727202c3E8492](https://sepolia.etherscan.io/address/0x4CF326d3817558038D1DEF9e76b727202c3E8492) |
| Fee Router                        | [0x9D45e9bE1E70735Ee78052717107d5dc59C1EaCE](https://sepolia.etherscan.io/address/0x9D45e9bE1E70735Ee78052717107d5dc59C1EaCE) |
| Fixed Fee Handler                 | [0xDcBA3f691eF406415556C802163C265Db56208cF](https://sepolia.etherscan.io/address/0xDcBA3f691eF406415556C802163C265Db56208cF) |
| Percentage Fee Handler            | [0x2e77dEa116117eCF44a427064260D16D488ccff2](https://sepolia.etherscan.io/address/0x2e77dEa116117eCF44a427064260D16D488ccff2) |
| ERC-20 Handler                    | [0xa65387feCb172ffF8A0aabA323A10c63757BBFA6](https://sepolia.etherscan.io/address/0xa65387feCb172ffF8A0aabA323A10c63757BBFA6) |
| ERC-721 Handler                   | [0x669F52487ffA6f9aBf722082f735537A98Ec0E4b](https://sepolia.etherscan.io/address/0x669F52487ffA6f9aBf722082f735537A98Ec0E4b) |
| Permissionless Generic Handler    | [0x7dCBdb9cBA0Bb1871EECafAB290E5a2e45077479](https://sepolia.etherscan.io/address/0x7dCBdb9cBA0Bb1871EECafAB290E5a2e45077479) |
| Storage (GMP testing contract)    | [0x0e963aEe445EDC19034e9938570E5E7BE4Ee19Cd](https://sepolia.etherscan.io/address/0x0e963aEe445EDC19034e9938570E5E7BE4Ee19Cd) |


**Cronos Testnet (Domain ID: 5)**

| Contract                          | Address                                    |
| --------------------------------- | ------------------------------------------ |
| Bridge                            | [0x816bb9E810b6b97840F6818bF21Fa25DD7364132](https://explorer.cronos.org/testnet/address/0x816bb9E810b6b97840F6818bF21Fa25DD7364132) |
| Fee Router                        | [0x8b8F51bB26Eb521ac33dD6DcAA97f5d052977746](https://explorer.cronos.org/testnet/address/0x8b8F51bB26Eb521ac33dD6DcAA97f5d052977746) |
| Fixed Fee Handler                 | [0x8eDab7563C618a3F1e5021677640565468C706d8](https://explorer.cronos.org/testnet/address/0x8eDab7563C618a3F1e5021677640565468C706d8) |
| Percentage Fee Handler            | [0x26545905a3a63B9ffB37926e909a827bDd088512](https://explorer.cronos.org/testnet/address/0x26545905a3a63B9ffB37926e909a827bDd088512) |
| ERC-20 Handler                    | [0x39D1Aea5F01138940F19A15049E2073D4df1dc9E](https://explorer.cronos.org/testnet/address/0x39D1Aea5F01138940F19A15049E2073D4df1dc9E) |
| ERC-721 Handler                   | [0x52757D9c1a8f8b496cf1e688bbB8055f9F3DfC8a](https://explorer.cronos.org/testnet/address/0x52757D9c1a8f8b496cf1e688bbB8055f9F3DfC8a) |
| Permissionless Generic Handler    | [0x3CBbC542d10CD037cafb1632B29B5B0F59B08A48](https://explorer.cronos.org/testnet/address/0x3CBbC542d10CD037cafb1632B29B5B0F59B08A48) |
| Storage (GMP testing contract)    | [0xcb9eb2b2abbd51945a82f77e789c26720b3835bf](https://explorer.cronos.org/testnet/address/0xcb9eb2b2abbd51945a82f77e789c26720b3835bf) |

**Holesky (Domain ID: 6)**

| Contract                          | Address                                    |
| --------------------------------- | ------------------------------------------ |
| Bridge                            | [0xE366E0B707FBF59CF9A3068af34dC519D5fa6e78](https://holesky.etherscan.io/address/0xE366E0B707FBF59CF9A3068af34dC519D5fa6e78) |
| Fee Router                        | [0x5626A5a7b65E3d851c693AC583068e75853fE0C8](https://holesky.etherscan.io/address/0x5626A5a7b65E3d851c693AC583068e75853fE0C8) |
| Fixed Fee Handler                 | [0xEE7946aE5f7287a39Bc67207868EDD4a95f96795](https://holesky.etherscan.io/address/0xEE7946aE5f7287a39Bc67207868EDD4a95f96795) |
| Percentage Fee Handler            | [0x9535484111383531BB9D6922B309Bf316Cec9A19](https://holesky.etherscan.io/address/0x9535484111383531BB9D6922B309Bf316Cec9A19) |
| ERC-20 Handler                    | [0xEeFBd08769Ab1e369a04a17180E91E4549938d4c](https://holesky.etherscan.io/address/0xEeFBd08769Ab1e369a04a17180E91E4549938d4c) |
| ERC-721 Handler                   |                                                                                                                               |
| Permissionless Generic Handler    | [0xc1154781Fa12a845aCaf276Bf2030040Ba9DAec8](https://holesky.etherscan.io/address/0xc1154781Fa12a845aCaf276Bf2030040Ba9DAec8) |
| Storage (GMP testing contract)    | [0x58476c75b48c86c05ccad9ae82ac76145bc9119d](https://holesky.etherscan.io/address/0x58476c75b48c86c05ccad9ae82ac76145bc9119d) |

**Mumbai (Domain ID: 7)**

| Contract                          | Address                                    |
| --------------------------------- | ------------------------------------------ |
| Bridge                            | [0xeAEffbadF776Da90D8e0a94D918E1CB83c12242d](https://mumbai.polygonscan.com/address/0xeAEffbadF776Da90D8e0a94D918E1CB83c12242d) |
| Fee Router                        | [0xa5007DF9379b88d62108b061702c1408459FFF3b](https://mumbai.polygonscan.com/address/0xa5007DF9379b88d62108b061702c1408459FFF3b) |
| Fixed Fee Handler                 | [0x68812fAA580212a29Fa562ECBFf9C7cBfF1bf5AD](https://mumbai.polygonscan.com/address/0x68812fAA580212a29Fa562ECBFf9C7cBfF1bf5AD) |
| Percentage Fee Handler            | [0x850c0Dfaf1E8489b6699F7D490f8B5693B226De4](https://mumbai.polygonscan.com/address/0x850c0Dfaf1E8489b6699F7D490f8B5693B226De4) |
| ERC-20 Handler                    | [0x49780Df8982ADeC1989c50c3d2A7f96037f0E937](https://mumbai.polygonscan.com/address/0x49780Df8982ADeC1989c50c3d2A7f96037f0E937) |
| ERC-721 Handler                   |                                                                                                                                 |
| Permissionless Generic Handler    | [0x2f2a45CF84D67F22f4925C70612B2506De7a4efB](https://mumbai.polygonscan.com/address/0x2f2a45CF84D67F22f4925C70612B2506De7a4efB) |
| Storage (GMP testing contract)    | [0x6f250a12f9a2d6f72b6e8ef5b93484da04cdb69e](https://mumbai.polygonscan.com/address/0x6f250a12f9a2d6f72b6e8ef5b93484da04cdb69e) |

**Arbitrum Sepolia (Domain ID: 8)**

| Contract                          | Address                                    |
| --------------------------------- | ------------------------------------------ |
| Bridge                            | [0xFB2530Fb3f5801aD35ccd6fdA29715D9330b7F9f](https://sepolia.arbiscan.io/address/0xFB2530Fb3f5801aD35ccd6fdA29715D9330b7F9f) |
| Fee Router                        | [0x723366b1Cfff44ebddCB1E1FE569a439363E3B80](https://sepolia.arbiscan.io/address/0x723366b1Cfff44ebddCB1E1FE569a439363E3B80) |
| Fixed Fee Handler                 | [0xE366E0B707FBF59CF9A3068af34dC519D5fa6e78](https://sepolia.arbiscan.io/address/0xE366E0B707FBF59CF9A3068af34dC519D5fa6e78) |
| Percentage Fee Handler            | [0xEeFBd08769Ab1e369a04a17180E91E4549938d4c](https://sepolia.arbiscan.io/address/0xEeFBd08769Ab1e369a04a17180E91E4549938d4c) |
| ERC-20 Handler                    | [0x5AF405550De00b38cAC1ED7276d0A09114831bCB](https://sepolia.arbiscan.io/address/0x5AF405550De00b38cAC1ED7276d0A09114831bCB) |
| ERC-721 Handler                   |  |
| Permissionless Generic Handler    | [0x5ffB6Dc54221371CcBDb9850A283488e12aDf97D](https://sepolia.arbiscan.io/address/0x5ffB6Dc54221371CcBDb9850A283488e12aDf97D) |
| Storage (GMP testing contract)    | [0xd2973aca263e088bb3c9c0daf80ae2afebec1386](https://sepolia.arbiscan.io/address/0xd2973aca263e088bb3c9c0daf80ae2afebec1386) |

**Gnosis Chiado (Domain ID: 9)**

| Contract                          | Address                                    |
| --------------------------------- | ------------------------------------------ |
| Bridge                            | [0x668fad90DeAd0F8f04346A735875b62eF9c65f0B](https://gnosis-chiado.blockscout.com/address/0x668fad90DeAd0F8f04346A735875b62eF9c65f0B) |
| Fee Router                        | [0x3F22ae1e689561Fb36013e40b464482EFA8ec465](https://gnosis-chiado.blockscout.com/address/0x3F22ae1e689561Fb36013e40b464482EFA8ec465) |
| Fixed Fee Handler                 | [0x9F5efb442d6F24704dB85569876D9c0CA65aed40](https://gnosis-chiado.blockscout.com/address/0x9F5efb442d6F24704dB85569876D9c0CA65aed40) |
| Percentage Fee Handler            | [0x95735f49808502C31375F49583c4DFc26cccF0e5](https://gnosis-chiado.blockscout.com/address/0x95735f49808502C31375F49583c4DFc26cccF0e5) |
| ERC-20 Handler                    | [0xb947F89269F0cF54CC721BcDE298a46930f3418b](https://gnosis-chiado.blockscout.com/address/0xb947F89269F0cF54CC721BcDE298a46930f3418b) |
| Permissionless Generic Handler    | [0xe4B86b1B07bBdB0C47940b9B3bD4954A0deAdaBE](https://gnosis-chiado.blockscout.com/address/0xe4B86b1B07bBdB0C47940b9B3bD4954A0deAdaBE) |
| Storage (GMP testing contract)    | [0x38ee9a4590035fc9506600f4d5c3f75fc8d15406](https://gnosis-chiado.blockscout.com/address/0x38ee9a4590035fc9506600f4d5c3f75fc8d15406) |

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
| Sepolia Contract Address | [0x7d58589b6C1Ba455c4060a3563b9a0d447Bef9af](https://sepolia.etherscan.io/address/0x7d58589b6C1Ba455c4060a3563b9a0d447Bef9af)        |
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
| Sepolia Contract Address | N/A                                                                                                                          |

**Permissionless generic message**

| Details                           | Information                                                        |
| --------------------------------- | ------------------------------------------------------------------ |
| Type                              | Generic                                                            |
| Registered Fee Handler            | BasicFeeHandler                                                    |
| Registered Handler                | PermissionlessGenericHandler                                       |
| Bridging Strategy                 | GMP                                                                |
| Resource ID                       | 0x0000000000000000000000000000000000000000000000000000000000000500 |
| Sepolia Contract Address          | N/A                                                                |
| Cronos-Testnet Contract Address   | N/A                                                                |
| Holesky Contract Address          | N/A                                                                |
| Mumbai Contract Address           | N/A                                                                |
| Arbitrum-Sepolia Contract Address | N/A                                                                |

**Permissionless generic message**

| Details                           | Information                                                        |
| --------------------------------- | ------------------------------------------------------------------ |
| Type                              | Generic                                                            |
| Registered Fee Handler            | BasicFeeHandler                                                    |
| Registered Handler                | PermissionlessGenericHandler                                       |
| Bridging Strategy                 | GMP                                                                |
| Resource ID                       | 0x0000000000000000000000000000000000000000000000000000000000000600 |
| Sepolia Contract Address          | N/A                                                                |
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
| Sepolia Contract Address | [0xA9F30c6B5E7996D1bAd51D213277c30750bcBB36](https://sepolia.etherscan.io/address/0xA9F30c6B5E7996D1bAd51D213277c30750bcBB36) |

## Fee schemes


| Network Name                    | Handler Address                                                                                                                      | Fee Type   | Fee Percent/Amount | Gas Amount |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ---------- | ------------------ | ---------- |
| Sepolia Fixed                   | N/A                                                                                                                                  | Fixed fee  | 0.001 ETH          |            |
| Sepolia Percentage-based        | [0x2e77dEa116117eCF44a427064260D16D488ccff2](https://sepolia.etherscan.io/address/0x2e77dEa116117eCF44a427064260D16D488ccff2)        | Percentage | 10 BPS (or 0.1%)   |            |
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