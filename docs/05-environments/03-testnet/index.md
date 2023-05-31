---
title: Testnet
id: testnet-index
description: The following details a list of resources that support the Testnet environment.
---

:::info
The following details a list of resources that support the Testnet environment. EVM and Substrate resources are listed in separate sections below.
:::

:::danger Status
**Active**
:::

#### Sygma Transfer UI

The transfer UI provides users with a visual interface to connect their wallets and bridge tokens.

[https://transfer-ui.test.buildwithsygma.com](https://transfer-ui.test.buildwithsygma.com/transfer)

#### Faucet UI

The faucet UI provides users with a visual interface to mint tokens.

[https://faucet-ui-stage.buildwithsygma.com](https://faucet-ui-stage.buildwithsygma.com)

### EVM Testnet Environment

#### EVM Contract Addresses


| Domain ID | Network Name    | Bridge                                     | Control Segregator                         | Fee Router                                 | Dynamic ERC-20 Fee Handler                    | Dynamic Generic ERC20 Fee Handler                    | ERC-20 Handler                              | ERC-721 Handler                             | Permissionless Generic Handler                            | Permissioned Generic Handler                            |
| --------- | --------------- | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| 1         | Ethereum Goerli | 0xc26335a9f16398b5fDA4bC05b62C1429D8a4d755 | 0x2754646256b845441Aa95a9983d30785c786843F | 0xBcE136Ec4510BA4D748994d057637A5B4FaDb614 | 0xFFe695A0CBB0492942323d8164C9d923c11d087A | 0x307ac28Be1c7225A09D4d93937828Fd7C550CB51 | 0x7Ed4B14a82B2F2C4DfB13DC4Eac00205EDEff6C2 | 0xf6477020C0881879Bb8140089a63122c561a151F | 0x56826b015911E2E14AE64fc5d7996cbDDea906cd | 0x8FBa234373065697dB623F3e3Fe09AA7dbb7E876 |
| 2         | Ethereum Sepolia | 0xBcE812D24255d94BBb5f5C51e384640a492ac178 | 0x6Ce0B56969aE171F893A7E7233A92EDB4C26EfA6 | 0xa7bE76F57329207Ed886281d20DD7DC3804f3d51 | 0x9efbd1BA6F0ed4a6E1f30296e7f231d200906129 | 0xD61bC4532F9E8146922E25b8137D25662feE3f9F | 0xa5b71C034a8370AAF0326a5B646A36A9d7C821E7 | 0x76A4557Bd3bc6088Cc94f8aCb6a8006f1F592B3f | 0x023aE1Eeb892983a26F77D83D8fFf1447dD311aa | 0xc4ECEfc21acD9e52bE384314FCB0cCF08DCdB23b |

#### EVM Registered Resources


| Type    | Name | Registered Fee Handler      | Registered Handler | Bridging Strategy | Resource ID                                                        | Goerli Contract Address                    | Sepolia Contract Address                    | 
| ------- | ------------- | ------------- | ------------- | -------------- | ------------------------------------------------------------------ | ------------------------------------------ | ------------------------------------------ | 
| ERC-20   | ERC20LRTest (Symbol: ERC20TST)  | BasicFeeHandler      | ERC20Handler | Lock/Release   | 0x0000000000000000000000000000000000000000000000000000000000000300 | 0x3F9A68fF29B3d86a6928C44dF171A984F6180009 | 0x7d58589b6C1Ba455c4060a3563b9a0d447Bef9af | 
| ERC-20  | PHA (Symbol: gPHA)     | BasicFeeHandler      | ERC20Handler | Lock/Release      | 0x0000000000000000000000000000000000000000000000000000000000001000 | 0xB376b0Ee6d8202721838e76376e81eEc0e2FE864 | 0x0 |
| Generic | Permissionless Generic Message      | FeeHandlerWithOracle     | PermissionlessGenericHandler | GMP            | 0x0000000000000000000000000000000000000000000000000000000000000500 | N/A                                        | N/A                                        | N/A                                        | 0x0

#### Fee Schemes

Network Name | Fee Oracle Address                                                      | Fee Type   | Fee Percent/Amount | Gas Amount |
| ------- | ------------------------------------------------------------------ | ---------- | ------------------ | ------ |
Goerli Dynamic | 0x0c3d905C909eB5e3243b65b905c96B309266d7BB | Fee oracle | 3% | 100000 |
Goerli Basic | 0xe6CE0ea4eC6ECbdC23eEF9f4fB165aCc979C56b5 | Base fee   | 0.001 ETH | |
Sepolia Dynamic | 0x0c3d905C909eB5e3243b65b905c96B309266d7BB | Fee oracle   | 3% | 100000 |
Sepolia Basic | 0x2278A65a0EaAA664F4491d5bc2EE0F1f6F5052F5 | Base fee   | 0.001 ETH | |

### Substrate Testnet Environment

| Network Name                                                        | Domain ID   | 
| ----- | - |
| Rhala | 3 |