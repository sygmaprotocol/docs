---
title: Devnet
id: devnet-index
description: The following details a list of resources to support the Devnet environment.
---

:::info
The following details a list of resources to support the Devnet environment.
:::

:::caution Status
**Unstable environment**
:::

#### Sygma Transfer UI

The transfer UI allows users with a visual interface to connect their wallets and bridge tokens.

[https://transfer-ui.develop.buildwithsygma.com](https://transfer-ui-develop.buildwithsygma.com/transfer)

**Faucet UI**

The faucet allows users with a visual interface to mint tokens.

[https://faucet-ui-stage.buildwithsygma.com](https://faucet-ui-stage.buildwithsygma.com)

### Contract Addresses

| Domain ID | Network Name    | Bridge                                     | Control Segregator                         | Fee Router                                 | Dynamic ERC20 Fee Handler                    | ERC20 Handler                              | ERC721 Handler                             | Generic Handler                            |
| --------- | --------------- | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| 1         | Ethereum Goerli | 0x5cEA5130c49dCd262B9482E0A76eCE8b23Ae45Df | 0x46E123aB4c67F35aB046E6B7A9B62b3C10a13457 | 0x860B8a9b84Be8f2bF98d6455699cae5dcecCf43a | 0xD001f527E7C134DA7fe23F3bc6d8ffDd9C03514E | 0x7461F7023F017257039197615a2667dFEb7F21Cd | 0xe938a6fB2D3a8B836Bec896e38919Ec42FB7089B | 0xd938c1053f834B2B6Ad7a7782d60aa00fBb49e46 |
| 2         | Ethereum Sepolia | 0x820d8d0666f85c7c035f471E3D4577F995F310aB | 0xefc933C3A2518909D8bcBeA66006f25965C1dfa8 | 0xe9840ECe4F64DB323E621107b3f0AD5DFaf0570a | 0xd2f4B94e5Ca7c6A105a354C329C2085259FDFeF8 | 0x1928dbf899e3D3635Eb0e6Ea5C8C50EC1a59925F | 0x9A1E9C86a5661038277844788fc4616cb0902f0e | 0x75B142FeaD91A708218ddCd26AcD492eB1674Eeb |
| 100         | Canto  | 0x67c5DAdd58b2a0818B291f292F17f72094952bA9 | 0x03896BaeA3A8CD98E46C576AF6Ceaffb69a51AFB | 0xbfec73a9499F01DF21aE51e9515c6B036B492967 | 0x0c3a5d050d60f424F4D9875138bFF0cA9EdE0766 | 0xF9ab418D23603Ca37794eAe300F130c5d887732C | 0xC2a1E379E2d255F42f3F8cA7Be32E3C3E1767622 | 0xb38E93A4474B83966105c22fa45568a9725FeBfC |
| 101         | Gnosis Chain  | 0xd2d95f7611c83b1f9041539557810033aC7B8742 | 0xBC4c6CAFcf981F38De35D9386e0269fbCDd606dd | 0x24E7f94bcF23A6Ce421a125FEE98AFDd82fa7553 | 0x2C143DafCdDA3289e52909a6Fe10cFa24eC78eFa | 0x32E8D2a6750a10c6b2Fda247187Ce36335da9a52 | 0xe3962002113d684A1Fcd7d319875d75bf483e349 | 0x0c678958A685e028f153bA31e3C348eDbE4D98BA |

### Registered Resources

| Type    | Name | Registered Fee Handler      | Registered Handler | Bridging Strategy | Resource ID                                                        | Goerli Contract Address                    | Sepolia Contract Address                    | Canto Contract Address                  |
| ------- | ------------- | ------------- | ------------- | -------------- | ------------------------------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| ERC20   | ERC20TST      | FeeHandlerWithOracle | ERC20Handler | Mint/Burn      | 0x0000000000000000000000000000000000000000000000000000000000000000 | 0x3D151A97A446C9ea6893038e7C0db73466f3f3af | 0x06f3CE7b93eBE17Df5F46d23934F1125C1dcC5f5 | 0x2d5395aa622DBC7688B2eEeD3E2dC089aE0fd356 |
| ERC20   | ERC20LRTest   | BasicFeeHandler      | ERC20Handler | Lock/Release   | 0x0000000000000000000000000000000000000000000000000000000000000300 | 0x3F9A68fF29B3d86a6928C44dF171A984F6180009 | 0xA9C41B54e635259EB1C72Fde4a6844D82eD00cde | 0xE366E0B707FBF59CF9A3068af34dC519D5fa6e78 |
| ERC721  | ERC721TST     | BasicFeeHandler      | ERC721Handler | Mint/Burn      | 0x0000000000000000000000000000000000000000000000000000000000000200 | 0xe9d3b1433bACDfC26ee097629D238A41BF6dA3aE | 0x37313Ab1701fCfC5050E84B4E7f841abB588a1db | 0xCD246D40f9f91F3cFF83210F2b689c2F126a6ceC |
| Generic | Permissionless Generic       | BasicFeeHandler     | PermissionlessGenericHandler | N/A            | 0x0000000000000000000000000000000000000000000000000000000000000500 | N/A                                        | N/A                                        | N/A                                        | 0xfCf72a42bd1c167a004a4Fa6ea341b0527f02477

### Fee Schemes

| Resource ID                                                        | Fee Type   | Fee Percent/Amount |
| ------------------------------------------------------------------ | ---------- | ------------------ |
| 0x0000000000000000000000000000000000000000000000000000000000000000 | Fee oracle | 3%                 |
| 0x0000000000000000000000000000000000000000000000000000000000000200 | Base fee   | 0.0001 Base tokens |
| 0x0000000000000000000000000000000000000000000000000000000000000300 | Base fee   | 0.0001 Base tokens |
| 0x0000000000000000000000000000000000000000000000000000000000000500 | Base fee   | 0.0001 Base tokens |
