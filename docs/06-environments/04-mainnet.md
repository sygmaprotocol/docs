---
title: Mainnet
description: The following details a list of resources to support the Mainnet environment.
---

:::info
The following details a list of resources to support the Mainnet environment. EVM and Substrate resources are listed in separate sections below.
:::

:::danger Status
**Inactive**
:::

## Supported networks

| Network Name     | Domain ID |
| ---------------- | --------- |
| Ethereum Mainnet | N/A       |
| Phala            | N/A       |

### EVM Contract Addresses

| Domain ID | Network Name     | Bridge                                     | Fee Router                                 | Dynamic ERC-20 Fee Handler                 | Dynamic Generic ERC20 Fee Handler          | ERC-20 Handler                             | ERC-721 Handler                            | Permissionless Generic Handler             |
| --------- | ---------------- | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| 1         | Ethereum Goerli  | 0xc26335a9f16398b5fDA4bC05b62C1429D8a4d755 | 0xBcE136Ec4510BA4D748994d057637A5B4FaDb614 | 0xFFe695A0CBB0492942323d8164C9d923c11d087A | 0x307ac28Be1c7225A09D4d93937828Fd7C550CB51 | 0x7Ed4B14a82B2F2C4DfB13DC4Eac00205EDEff6C2 | 0xf6477020C0881879Bb8140089a63122c561a151F | 0x56826b015911E2E14AE64fc5d7996cbDDea906cd |
| 2         | Ethereum Sepolia | 0xBcE812D24255d94BBb5f5C51e384640a492ac178 | 0xa7bE76F57329207Ed886281d20DD7DC3804f3d51 | 0x9efbd1BA6F0ed4a6E1f30296e7f231d200906129 | 0xD61bC4532F9E8146922E25b8137D25662feE3f9F | 0xa5b71C034a8370AAF0326a5B646A36A9d7C821E7 | 0x76A4557Bd3bc6088Cc94f8aCb6a8006f1F592B3f | 0x023aE1Eeb892983a26F77D83D8fFf1447dD311aa |


### Registered Resources

| Name                           | Type    | Registered Fee Handler | Registered Handler           | Bridging Strategy | Resource ID                                                        | Mainnet Contract Address                   | 
| ------------------------------ | ------- | ---------------------- | ---------------------------- | ----------------- | ------------------------------------------------------------------ | ------------------------------------------ | --- | --- |
| Phala (Symbol: PHA)            | ERC-20  | BasicFeeHandler        | ERC20Handler                 | Lock/Release      | 0x0000000000000000000000000000000000000000000000000000000000000001 | 0x0 | 
| Permissionless Generic Message | Generic | FeeHandlerWithOracle   | PermissionlessGenericHandler | GMP               | 0x0000000000000000000000000000000000000000000000000000000000000000 | N/A                                        |  

### Fee Schemes

| Network Name             | Fee Oracle Address | Fee Type   | Fee Percent/Amount | Gas Amount |
| ------------------------ | ------------------ | ---------- | ------------------ | ---------- |
| Ethereum Mainnet Dynamic | 0x0                | Fee oracle | 3%                 | 100000     |
| Ethereum Mainnet Basic   | 0x0                | Base fee   | 0.001 ETH          |            |
| Phala Dynamic            | 0x0                | Fee oracle | 3%                 | 100000     |
| Phala Basic              | 0x0                | Base fee   | 0.001 ETH          |            |


