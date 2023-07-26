---
title: Mainnet
description: The following details a list of resources to support the Mainnet environment.
---

:::info
The following details a list of resources to support the Mainnet environment. EVM and Substrate resources are listed in separate sections below.
:::

:::tip Status
**🟢 Active**
:::

## Supported Networks

| Network Name     | Domain ID | Chain ID |
| ---------------- | --------- | -------- |
| Ethereum Mainnet | 1         | 1        |
| Khala            | 2         | 5232     |
| Phala            | 3         | 5233     |

### EVM Contract Addresses

**Ethereum Mainnet (Domain ID: 1)**

| Contract                          | Address                                    |
| --------------------------------- | ------------------------------------------ |
| Bridge                            | 0x4D878E8Fb90178588Cda4cf1DCcdC9a6d2757089 |
| Fee Router                        | 0xC47468aeae431f5D0B7DA50F9f5D8a6c0eca4789 |
| Dynamic ERC-20 Fee Handler        | 0x5573Ae978A10B724705624C620E6a7977935c721 |
| Dynamic Generic ERC20 Fee Handler | 0x4EE82A64Aa9535AE4aABe3B35a12c29a0430A951 |
| ERC-20 Handler                    | 0xC832588193cd5ED2185daDA4A531e0B26eC5B830 |
| Permissionless Generic Handler    | 0xa176F012b3bBD7D4824eB31E8707FcE64F64f29f |

### Registered Resources

**Phala**

| Property                          | Value                                                              |
| --------------------------------- | ------------------------------------------------------------------ |
| Symbol                            | PHA                                                                |
| Type                              | Fungible                                                           |
| Fee strategy                      | Fixed Fee                                                          |
| Registered Handler                | ERC20Handler                                                       |
| Bridging Strategy                 | Lock/Release                                                       |
| Resource ID                       | 0x0000000000000000000000000000000000000000000000000000000000000001 |
| Ethereum Mainnet Contract Address | 0x6c5bA91642F10282b576d91922Ae6448C9d52f4E                         |

**Permissionless Generic Message**

| Details            | Information                                                        |
| ------------------ | ------------------------------------------------------------------ |
| Type               | Generic                                                            |
| Registered Handler | PermissionlessGenericHandler                                       |
| Bridging Strategy  | GMP                                                                |
| Resource ID        | 0x0000000000000000000000000000000000000000000000000000000000000500 |

### Registered routes

| Source Network Name | Destination Network Name | Resource | Fee Percent/Amount | Resource ID |
| ------------------- | ------------------------ | -------- | ------------------ | ---------- |
| Ethereum Mainnet    | Phala                    | PHA      | 0.0001 ETH         | 0x0000000000000000000000000000000000000000000000000000000000000001  |
| Ethereum Mainnet    | Khala                    | PHA      | 0.0001 ETH         | 0x0000000000000000000000000000000000000000000000000000000000000001 |
| Khala               | Ethereum Mainnet         | PHA      | 50 PHA             | 0x0000000000000000000000000000000000000000000000000000000000000001 |
| Phala               | Ethereum Mainnet         | PHA      | 50 PHA             | 0x0000000000000000000000000000000000000000000000000000000000000001 |

## Sygma Explorer

The [explorer UI](https://scan.buildwithsygma.com/) provides users with a cross-chain block explorer that scans for mainnet transactions through the Sygma protocol. 
