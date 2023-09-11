---
title: Testnet
id: testnet-index
description: The following details a list of resources that support the Testnet environment.
---

:::info
The following details a list of resources that support the Testnet environment. EVM and Substrate resources are listed in separate sections below.
:::

:::danger Status
**🔴 Temporary Down**
:::

## Sygma Transfer UI

The [transfer UI](https://transfer-ui.test.buildwithsygma.com) provides users with a visual interface to connect their wallets and bridge tokens.

## Faucet UI

The [faucet UI](https://faucet-ui-stage.buildwithsygma.com) provides users with a visual interface to mint tokens.

## Sygma Explorer

The [explorer UI](https://scan.test.buildwithsygma.com/) provides users with a cross-chain block explorer that scans for testnet transactions through the Sygma protocol. 

## Supported Networks

| Network Name   | Framework | Domain ID |
| -------------- | --------- | --------- |
| Goerli         | EVM       | 1         |
| Sepolia        | EVM       | 2         |
| Rhala          | Substrate | 3         |
| Base-Goerli    | EVM       | 4         |
| Cronos-Testnet | EVM       | 5         |

### EVM Contract Addresses

**Goerli (Domain ID: 1)**

| Contract                          | Address                                    |
| --------------------------------- | ------------------------------------------ |
| Bridge                            | 0xc26335a9f16398b5fDA4bC05b62C1429D8a4d755 |
| Fee Router                        | 0xBcE136Ec4510BA4D748994d057637A5B4FaDb614 |
| Fixed Fee Handler                 | 0xe6CE0ea4eC6ECbdC23eEF9f4fB165aCc979C56b5 |
| Dynamic ERC-20 Fee Handler        | 0xFFe695A0CBB0492942323d8164C9d923c11d087A |
| Dynamic Generic ERC20 Fee Handler | 0x307ac28Be1c7225A09D4d93937828Fd7C550CB51 |
| Percentage Fee Handler            | 0x                                         |
| ERC-20 Handler                    | 0x7Ed4B14a82B2F2C4DfB13DC4Eac00205EDEff6C2 |
| ERC-721 Handler                   | 0xf6477020C0881879Bb8140089a63122c561a151F |
| Permissionless Generic Handler    | 0x56826b015911E2E14AE64fc5d7996cbDDea906cd |

**Sepolia (Domain ID: 2)**

| Contract                          | Address                                    |
| --------------------------------- | ------------------------------------------ |
| Bridge                            | 0xBcE812D24255d94BBb5f5C51e384640a492ac178 |
| Fee Router                        | 0xa7bE76F57329207Ed886281d20DD7DC3804f3d51 |
| Fixed Fee Handler                 | 0xDcBA3f691eF406415556C802163C265Db56208cF |
| Dynamic ERC-20 Fee Handler        | 0x9efbd1BA6F0ed4a6E1f30296e7f231d200906129 |
| Dynamic Generic ERC20 Fee Handler | 0xD61bC4532F9E8146922E25b8137D25662feE3f9F |
| Percentage Fee Handler            | 0x2e77dEa116117eCF44a427064260D16D488ccff2 |
| ERC-20 Handler                    | 0xa5b71C034a8370AAF0326a5B646A36A9d7C821E7 |
| ERC-721 Handler                   | 0x76A4557Bd3bc6088Cc94f8aCb6a8006f1F592B3f |
| Permissionless Generic Handler    | 0x023aE1Eeb892983a26F77D83D8fFf1447dD311aa |

**Base-Goerli (Domain ID: 4)**

| Contract                          | Address                                    |
| --------------------------------- | ------------------------------------------ |
| Bridge                            | 0x5e2bed941Ed40251ffb8F7B3B7ab3459464A2aad |
| Fee Router                        | 0xad3961FF8a445FF9EF4A85f450DcE1690c51Ce98 |
| Fixed Fee Handler                 | 0x7dCBdb9cBA0Bb1871EECafAB290E5a2e45077479 |
| Dynamic ERC-20 Fee Handler        | 0xF97F5A81c77310C36EF042cf21CE8F43809B4334 |
| Dynamic Generic ERC20 Fee Handler | 0xA30Ad3e57b33149cd31EE2E9Dd37e327ad1e65C3 |
| Percentage Fee Handler            | 0x117689D3BD6b5Cf32cE1d971Dd879eF17209193A |
| ERC-20 Handler                    | 0x2C0ae7Fb251ec0772793d480d31B4bc8E3b498a7 |
| ERC-721 Handler                   | 0x38218916813A0f6ca32AcA1324381C0A810b728a |
| Permissionless Generic Handler    | 0x14d1cA88277E13B5615C2C727415a1B94E90264F |

**Cronos Testnet (Domain ID: 5)**

| Contract                          | Address                                    |
| --------------------------------- | ------------------------------------------ |
| Bridge                            | 0x816bb9E810b6b97840F6818bF21Fa25DD7364132 |
| Fee Router                        | 0x8b8F51bB26Eb521ac33dD6DcAA97f5d052977746 |
| Fixed Fee Handler                 | 0x8eDab7563C618a3F1e5021677640565468C706d8 |
| Dynamic ERC-20 Fee Handler        | 0xa128fAd3Ea89BCdea67053164fC8D10d29f18c81 |
| Dynamic Generic ERC20 Fee Handler | 0x055CEe6D441f0c913D863776356C12FfA2FCDc47 |
| Percentage Fee Handler            | 0x26545905a3a63B9ffB37926e909a827bDd088512 |
| ERC-20 Handler                    | 0x39D1Aea5F01138940F19A15049E2073D4df1dc9E |
| ERC-721 Handler                   | 0x52757D9c1a8f8b496cf1e688bbB8055f9F3DfC8a |
| Permissionless Generic Handler    | 0x3CBbC542d10CD037cafb1632B29B5B0F59B08A48 |

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

| Network Name                    | Handler Address                            | Fee Type    | Fee Percent/Amount | Gas Amount |
| --------------------------------| ------------------------------------------ | ----------- | ------------------ | ---------- |
| Goerli Dynamic                  | 0x0c3d905C909eB5e3243b65b905c96B309266d7BB | Fee oracle  | 3%                 | 100000     |
| Goerli Fixed                    | N/A                                        | Fixed fee   | 0.001 ETH          |            |
| Sepolia Dynamic                 | 0x0c3d905C909eB5e3243b65b905c96B309266d7BB | Fee oracle  | 3%                 | 100000     |
| Sepolia Fixed                   | N/A                                        | Fixed fee   | 0.001 ETH          |            |
| Sepolia Percentage-based        | 0x2e77dEa116117eCF44a427064260D16D488ccff2 | Percentage  | 10 BPS (or 0.1%)   |            |
| Base-Goerli Dynamic             | N/A                                        | Fee oracle  | N/A                |            |
| Base-Goerli Fixed               | 0x7dCBdb9cBA0Bb1871EECafAB290E5a2e45077479 | Fixed fee   | 0.001 ETH          |            |
| Base-Goerli Percentage-based    | 0x117689D3BD6b5Cf32cE1d971Dd879eF17209193A | Percentage  | 1 BPS (or 0.01%)   |            |
| Cronos-Testnet Dynamic          | N/A                                        | Fee oracle  | N/A                |            |
| Cronos-Testnet Fixed            | 0x8eDab7563C618a3F1e5021677640565468C706d8 | Fixed fee   | 0.001 ETH          |            |
| Cronos-Testnet Percentage-based | 0x26545905a3a63B9ffB37926e909a827bDd088512 | Percentage  | 1 BPS (or 0.01%)   |            |

