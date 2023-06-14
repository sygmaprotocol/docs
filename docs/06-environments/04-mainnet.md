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

## Supported Networks

| Network Name     | Domain ID |
| ---------------- | --------- |
| Ethereum Mainnet | 1         |
| Phala            | N/A       |

### EVM Contract Addresses

**Ethereum Mainnet (Domain ID: 1)**

| Contract                          | Address                                    |
| --------------------------------- | ------------------------------------------ |
| Bridge                            | 0x0 |
| Fee Router                        | 0x0 |
| Dynamic ERC-20 Fee Handler        | 0x0 |
| Dynamic Generic ERC20 Fee Handler | 0x0 |
| ERC-20 Handler                    | 0x0 |
| ERC-721 Handler                   | 0x0 |
| Permissionless Generic Handler    | 0x0 |

**Phala (Domain ID: N/A)**

| Contract                          | Address                                    |
| --------------------------------- | ------------------------------------------ |
| Bridge                            | 0x0 |
| Fee Router                        | 0x0 |
| Dynamic ERC-20 Fee Handler        | 0x0 |
| Dynamic Generic ERC20 Fee Handler | 0x0 |
| ERC-20 Handler                    | 0x0 |
| ERC-721 Handler                   | 0x0 |
| Permissionless Generic Handler    | 0x0 |

### Registered Resources

**Phala**

| Property                          | Value                                                              |
| --------------------------------- | ------------------------------------------------------------------ |
| Symbol                            | PHA                                                                |
| Type                              | ERC-20                                                             |
| Registered Fee Handler            | BasicFeeHandler                                                    |
| Registered Handler                | ERC20Handler                                                       |
| Bridging Strategy                 | Lock/Release                                                       |
| Resource ID                       | 0x0000000000000000000000000000000000000000000000000000000000000001 |
| Ethereum Mainnet Contract Address | 0x6c5bA91642F10282b576d91922Ae6448C9d52f4E                         |

**Permissionless Generic Message**

| Details                  | Information                                                        |
| ------------------------ | ------------------------------------------------------------------ |
| Type                     | Generic                                                            |
| Registered Fee Handler   | FeeHandlerWithOracle                                               |
| Registered Handler       | PermissionlessGenericHandler                                       |
| Bridging Strategy        | GMP                                                                |
| Resource ID              | 0x0000000000000000000000000000000000000000000000000000000000000500 |

### Fee Schemes

| Network Name             | Fee Oracle Address | Fee Type   | Fee Percent/Amount | Gas Amount |
| ------------------------ | ------------------ | ---------- | ------------------ | ---------- |
| Ethereum Mainnet Dynamic | 0x0                | Fee oracle | 3%                 | 100000     |
| Ethereum Mainnet Basic   | 0x0                | Base fee   | 0.001 ETH          |            |
| Phala Dynamic            | 0x0                | Fee oracle | 3%                 | 100000     |
| Phala Basic              | 0x0                | Base fee   | 0.001 ETH          |            |


