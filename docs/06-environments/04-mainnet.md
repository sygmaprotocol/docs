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

| Domain ID | Network Name     | Bridge | Fee Router | Dynamic ERC-20 Fee Handler | Dynamic Generic ERC20 Fee Handler | ERC-20 Handler | ERC-721 Handler | Permissionless Generic Handler |
| --------- | ---------------- | ------ | ---------- | -------------------------- | --------------------------------- | -------------- | --------------- | ------------------------------ |
| 1         | Ethereum Mainnet | 0x0    | 0x0        | 0x0                        | 0x0                               | 0x0            | 0x0             | 0x0                            |
| 2         | Phala            | 0x0    | 0x0        | 0x0                        | 0x0                               | 0x0            | 0x0             | 0x0                            |


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


