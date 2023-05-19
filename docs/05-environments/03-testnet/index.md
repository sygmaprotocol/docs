---
title: Testnet
id: testnet-index
description: The following details a list of resources to support the Testnet environment.
---

:::info
The following details a list of resources to support the Testnet environment.
:::

:::danger Status
**Active**
:::

**Sygma Transfer UI**

The transfer UI allows users with a visual interface to connect their wallets and bridge tokens.

[https://transfer-ui.test.buildwithsygma.com](https://transfer-ui.test.buildwithsygma.com/transfer)

**Faucet UI**

The faucet allows users with a visual interface to mint tokens.

[https://faucet-ui-stage.buildwithsygma.com](https://faucet-ui-stage.buildwithsygma.com)

### Contract Addresses


| Domain ID | Network Name    | Bridge                                     | Control Segregator                         | Fee Router                                 | Dynamic ERC20 Fee Handler                    | ERC20 Handler                              | ERC721 Handler                             | Generic Handler                            |
| --------- | --------------- | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| 1         | Ethereum Goerli | 0xc26335a9f16398b5fDA4bC05b62C1429D8a4d755 | 0x2754646256b845441Aa95a9983d30785c786843F | 0xBcE136Ec4510BA4D748994d057637A5B4FaDb614 | 0xFFe695A0CBB0492942323d8164C9d923c11d087A | 0x7Ed4B14a82B2F2C4DfB13DC4Eac00205EDEff6C2 | 0xf6477020C0881879Bb8140089a63122c561a151F | 0x56826b015911E2E14AE64fc5d7996cbDDea906cd |
| 2         | Ethereum Sepolia | 0xBcE812D24255d94BBb5f5C51e384640a492ac178 | 0x6Ce0B56969aE171F893A7E7233A92EDB4C26EfA6 | 0xa7bE76F57329207Ed886281d20DD7DC3804f3d51 | 0x9efbd1BA6F0ed4a6E1f30296e7f231d200906129 | 0xa5b71C034a8370AAF0326a5B646A36A9d7C821E7 | 0x76A4557Bd3bc6088Cc94f8aCb6a8006f1F592B3f | 0x023aE1Eeb892983a26F77D83D8fFf1447dD311aa |
| 3         | Rhala  | 0x0 | 0x0 | 0x0 | 0x0 | 0x0 | 0x0 | 0x0 |

### Registered Resources


| Type    | Name | Registered Fee Handler      | Registered Handler | Bridging Strategy | Resource ID                                                        | Goerli Contract Address                    | Sepolia Contract Address                    | Rhala Contract Address                  |
| ------- | ------------- | ------------- | ------------- | -------------- | ------------------------------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| ERC20   | ERC20TST      | FeeHandlerWithOracle | ERC20Handler | Mint/Burn      | 0x0000000000000000000000000000000000000000000000000000000000000000 | 0x0 | 0x0 | 0x0 |
| ERC20   | ERC20LRTest   | BasicFeeHandler      | ERC20Handler | Lock/Release   | 0x0000000000000000000000000000000000000000000000000000000000000300 | 0x0 | 0x0 | 0x0 |
| ERC721  | ERC721TST     | BasicFeeHandler      | ERC721Handler | Mint/Burn      | 0x0000000000000000000000000000000000000000000000000000000000000200 | 0x0 | 0x0 | 0x0 |
| Generic | Permissionless Generic       | BasicFeeHandler     | PermissionlessGenericHandler | N/A            | 0x0000000000000000000000000000000000000000000000000000000000000500 | N/A                                        | N/A                                        | N/A                                        | 0x0

### Fee Schemes


| Resource ID                                                        | Fee Type   | Fee Percent/Amount |
| ------------------------------------------------------------------ | ---------- | ------------------ |
| 0x0000000000000000000000000000000000000000000000000000000000000000 | Fee oracle | 3%                 |
| 0x0000000000000000000000000000000000000000000000000000000000000200 | Base fee   | 0.0001 Base tokens |
| 0x0000000000000000000000000000000000000000000000000000000000000300 | Base fee   | 0.0001 Base tokens |
| 0x0000000000000000000000000000000000000000000000000000000000000500 | Base fee   | 0.0001 Base tokens |
