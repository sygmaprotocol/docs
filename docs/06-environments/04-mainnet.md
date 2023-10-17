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
| Cronos           | 4         | 25       |
| Base             | 5         | 8453     |

### EVM Contract Addresses

**Ethereum Mainnet (Domain ID: 1)**

| Contract                           | Address                                    |
| ---------------------------------- | ------------------------------------------ |
| Bridge                             | 0x4D878E8Fb90178588Cda4cf1DCcdC9a6d2757089 |
| Fee Router                         | 0xC47468aeae431f5D0B7DA50F9f5D8a6c0eca4789 |
| Fixed Fee Handler (ETH->Phala)     | 0xe43F8245249d7fAF46408723Ab36D071dD85D7BB |
| Fixed Fee Handler (ETH->Cronos)    | 0x0018e0b9062f1A40c1db29652A271cB94354d572 |
| Fixed Fee Handler (ETH->Base)      | 0xcEAB549fdf0Fc263a8DE594e72d9FE38147aFca3 |
| Dynamic ERC-20 Fee Handler         | 0x5573Ae978A10B724705624C620E6a7977935c721 |
| Dynamic Generic ERC-20 Fee Handler | 0x4EE82A64Aa9535AE4aABe3B35a12c29a0430A951 |
| ERC-20 Handler                     | 0xC832588193cd5ED2185daDA4A531e0B26eC5B830 |
| Permissionless Generic Handler     | 0x31282123E7bcd947e2c1Bc364d564839574fAdCD |

**Cronos (Domain ID: 4)**

| Contract                           | Address                                    |
| ---------------------------------- | ------------------------------------------ |
| Bridge                             | 0x44d1Ae962945c5B168282D5002705dE7A9B84657 |
| Fee Router                         | 0xb18fEa28C8C9557aB65b2808c7b323A586687740 |
| Fixed Fee Handler (Cronos->ETH )   | 0x8cb45Fa8B8eAC078f901498886a7655605a3d15a |
| Fixed Fee Handler (Cronos->Base )  | 0x1dac945C9E418D9D07278F2d36e310194BaaB24c |
| Dynamic ERC-20 Fee Handler         |                                            |
| Dynamic Generic ERC-20 Fee Handler |                                            |
| ERC-20 Handler                     | 0x13572649779c8e88bcbbF46E38d6AddaFa6Ba4f1 |
| Permissionless Generic Handler     | 0xB86bAe6A570a52cBc38Cf6Ac6557F169422cDf30 |
 
**Base (Domain ID: 5)**

| Contract                           | Address                                    |
| ---------------------------------- | ------------------------------------------ |
| Bridge                             | 0xC47468aeae431f5D0B7DA50F9f5D8a6c0eca4789 |
| Fee Router                         | 0x5573Ae978A10B724705624C620E6a7977935c721 |
| Fixed Fee Handler (Base->ETH )     | 0x4EE82A64Aa9535AE4aABe3B35a12c29a0430A951 |
| Fixed Fee Handler (Base->Cronos )  | 0x73aB792E6AdF236879a0A2AB1597fa221E736a0d |
| Dynamic ERC-20 Fee Handler         |                                            |
| Dynamic Generic ERC-20 Fee Handler |                                            |
| ERC-20 Handler                     | 0xe43F8245249d7fAF46408723Ab36D071dD85D7BB |
| Permissionless Generic Handler     | 0x2e1eE4153ad2F763ab8C612415AcF0DEe02Bc79B |

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
| Resource ID        | 0x0000000000000000000000000000000000000000000000000000000000000000 |

### Registered routes

| Source Network Name | Destination Network Name | Resource | Fee Percent/Amount | Resource ID                                                        |
| ------------------- | ------------------------ | -------- | ------------------ | ------------------------------------------------------------------ |
| Ethereum Mainnet    | Phala                    | PHA      | 0.0001 ETH         | 0x0000000000000000000000000000000000000000000000000000000000000001 |
| Ethereum Mainnet    | Khala                    | PHA      | 0.0001 ETH         | 0x0000000000000000000000000000000000000000000000000000000000000001 |
| Khala               | Ethereum Mainnet         | PHA      | 50 PHA             | 0x0000000000000000000000000000000000000000000000000000000000000001 |
| Phala               | Ethereum Mainnet         | PHA      | 50 PHA             | 0x0000000000000000000000000000000000000000000000000000000000000001 |
| Ethereum            | Base                     | GMP      | 0.0008 ETH         | 0x0000000000000000000000000000000000000000000000000000000000000000 |
| Ethereum            | Cronos                   | GMP      | 0.0004 ETH         | 0x0000000000000000000000000000000000000000000000000000000000000000 |
| Cronos              | Ethereum                 | GMP      | 200 CRO            | 0x0000000000000000000000000000000000000000000000000000000000000000 |
| Cronos              | Base                     | GMP      | 25 CRO             | 0x0000000000000000000000000000000000000000000000000000000000000000 |
| Base                | Ethereum                 | GMP      | 0.007 ETH          | 0x0000000000000000000000000000000000000000000000000000000000000000 |
| Base                | Cronos                   | GMP      | 0.0004 ETH         | 0x0000000000000000000000000000000000000000000000000000000000000000 |


## Sygma Explorer

The [explorer UI](https://scan.buildwithsygma.com/) provides users with a cross-chain block explorer that scans for mainnet transactions through the Sygma protocol. 
