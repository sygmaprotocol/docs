---
title: Testnet
id: testnet-index
description: The following details a list of resources that support the Testnet environment.
---

:::info
The following details a list of resources that support the Testnet environment. EVM and Substrate resources are listed in separate sections below.
:::

:::tip Status
**🟢 Active**
:::

## Sygma Transfer UI

The [transfer UI](https://transfer-ui.test.buildwithsygma.com) provides users with a visual interface to connect their wallets and bridge tokens.

## Faucet UI

The [faucet UI](https://faucet-ui-stage.buildwithsygma.com) provides users with a visual interface to mint tokens.

## Sygma Explorer

The [explorer UI](https://scan.test.buildwithsygma.com/) provides users with a cross-chain block explorer that scans for testnet transactions through the Sygma protocol. 

## Supported Networks

| Network Name | Framework   | Domain ID |
| ------------ | ----------- | --------- | 
| Goerli       | EVM         | 1         |
| Sepolia      | EVM         | 2         |
| Rhala        | Substrate   | 3         |
| Base         | EVM         | x         |
| Cronos       | EVM         | x         |

### EVM Contract Addresses

**Goerli (Domain ID: 1)**

| Contract                          | Address                                    |
| --------------------------------- | ------------------------------------------ |
| Bridge                            | 0xc26335a9f16398b5fDA4bC05b62C1429D8a4d755 |
| Fee Router                        | 0xBcE136Ec4510BA4D748994d057637A5B4FaDb614 |
| Dynamic ERC-20 Fee Handler        | 0xFFe695A0CBB0492942323d8164C9d923c11d087A |
| Dynamic Generic ERC20 Fee Handler | 0x307ac28Be1c7225A09D4d93937828Fd7C550CB51 |
| ERC-20 Handler                    | 0x7Ed4B14a82B2F2C4DfB13DC4Eac00205EDEff6C2 |
| ERC-721 Handler                   | 0xf6477020C0881879Bb8140089a63122c561a151F |
| Permissionless Generic Handler    | 0x56826b015911E2E14AE64fc5d7996cbDDea906cd |

**Sepolia (Domain ID: 2)**

| Contract                          | Address                                    |
| --------------------------------- | ------------------------------------------ |
| Bridge                            | 0xBcE812D24255d94BBb5f5C51e384640a492ac178 |
| Fee Router                        | 0xa7bE76F57329207Ed886281d20DD7DC3804f3d51 |
| Dynamic ERC-20 Fee Handler        | 0x9efbd1BA6F0ed4a6E1f30296e7f231d200906129 |
| Dynamic Generic ERC20 Fee Handler | 0xD61bC4532F9E8146922E25b8137D25662feE3f9F |
| ERC-20 Handler                    | 0xa5b71C034a8370AAF0326a5B646A36A9d7C821E7 |
| ERC-721 Handler                   | 0x76A4557Bd3bc6088Cc94f8aCb6a8006f1F592B3f |
| Permissionless Generic Handler    | 0x023aE1Eeb892983a26F77D83D8fFf1447dD311aa |

**Base (Domain ID: x)**

| Contract                          | Address                                    |
| --------------------------------- | ------------------------------------------ |
| Bridge                            |  |
| Fee Router                        |  |
| Dynamic ERC-20 Fee Handler        |  |
| Dynamic Generic ERC20 Fee Handler |  |
| ERC-20 Handler                    |  |
| ERC-721 Handler                   |  |
| Permissionless Generic Handler    |  |

**Cronos (Domain ID: x)**

| Contract                          | Address                                    |
| --------------------------------- | ------------------------------------------ |
| Bridge                            |  |
| Fee Router                        |  |
| Dynamic ERC-20 Fee Handler        |  |
| Dynamic Generic ERC20 Fee Handler |  |
| ERC-20 Handler                    |  |
| ERC-721 Handler                   |  |
| Permissionless Generic Handler    |  |

### Registered Resources

**ERC20LRTest**

| Property                 | Value                                                              |
| ------------------------ | ------------------------------------------------------------------ |
| Symbol                   | ERC20LRTST                                                         |
| Type                     | ERC-20                                                             |
| Registered Fee Handler   | BasicFeeHandler                                                    |
| Registered Handler       | ERC20Handler                                                       |
| Bridging Strategy        | Lock/Release                                                       |
| Resource ID              | 0x0000000000000000000000000000000000000000000000000000000000000300 |
| Goerli Contract Address  | 0x3F9A68fF29B3d86a6928C44dF171A984F6180009                         |
| Sepolia Contract Address | 0x7d58589b6C1Ba455c4060a3563b9a0d447Bef9af                         |       
| Base Contract Address    | 0xA5278861d2352fd8eD59b985a29ad46E40930F12                         |
| Cronos Contract Address  | 0x                                                                 |

**Phala**

| Details                  | Information                                                        |
| ------------------------ | ------------------------------------------------------------------ |
| Symbol                   | gPHA                                                               |
| Type                     | ERC-20                                                             |
| Registered Fee Handler   | BasicFeeHandler                                                    |
| Registered Handler       | ERC20Handler                                                       |
| Bridging Strategy        | Lock/Release                                                       |
| Resource ID              | 0x0000000000000000000000000000000000000000000000000000000000001000 |
| Goerli Contract Address  | 0xB376b0Ee6d8202721838e76376e81eEc0e2FE864                         |
| Sepolia Contract Address | N/A                                                                |

**Permissionless Generic Message**

| Details                  | Information                                                        |
| ------------------------ | ------------------------------------------------------------------ |
| Type                     | Generic                                                            |
| Registered Fee Handler   | FeeHandlerWithOracle                                               |
| Registered Handler       | PermissionlessGenericHandler                                       |
| Bridging Strategy        | GMP                                                                |
| Resource ID              | 0x0000000000000000000000000000000000000000000000000000000000000500 |
| Goerli Contract Address  | N/A                                                                |
| Sepolia Contract Address | N/A                                                                |

### Fee Schemes

| Network Name    | Fee Oracle Address                         | Fee Type    | Fee Percent/Amount | Gas Amount |
| --------------- | ------------------------------------------ | ----------- | ------------------ | ---------- |
| Goerli Dynamic  | 0x0c3d905C909eB5e3243b65b905c96B309266d7BB | Fee oracle  | 3%                 | 100000     |
| Goerli Fixed    | 0xe6CE0ea4eC6ECbdC23eEF9f4fB165aCc979C56b5 | Fixed fee   | 0.001 ETH          |            |
| Sepolia Dynamic | 0x0c3d905C909eB5e3243b65b905c96B309266d7BB | Fee oracle  | 3%                 | 100000     |
| Sepolia Fixed   | 0x2278A65a0EaAA664F4491d5bc2EE0F1f6F5052F5 | Fixed fee   | 0.001 ETH          |            |


