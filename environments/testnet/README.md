---
description: The following details a list of resources to support the Testnet environment.
---
# Testnet

**Status:** Inactive\

**Sygma Transfer UI**

The transfer UI allows users with a visual interface to connect their wallets and bridge tokens.

[https://transfer-ui.test.buildwithsygma.com](https://transfer-ui-develop.buildwithsygma.com/transfer)

**Faucet UI**

The faucet allows users with a visual interface to mint tokens.

[https://faucet-ui-stage.buildwithsygma.com](https://faucet-ui-stage.buildwithsygma.com)

**Faucet API**

The faucet API allows users to programmatically interact with the faucet.

[https://faucet-api-stage.buildwithsygma.com](https://faucet-api-stage.buildwithsygma.com/)\

### Contract Addresses


| Domain ID | Network Name    | Bridge                                     | Control Segregator                         | Fee Router                                 | Fee Handler With Oracle                    | ERC20 Handler                              | ERC721 Handler                             | Generic Handler                            |
| --------- | --------------- | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| 1         | Ethereum Goerli | 0x95ECF5ae000e0fe0e0dE63aDE9b7D82a372038b4 | 0x8893c9dC9fc3D10d99f2fD93e1f1295A49f98243 | 0xC3ea0Fbaa708D225BD2575dC4A57e0eaE8aFc77F | 0x7350e258Cb88a22572Edefe5d80BAD21b42Cc124 | 0xea24Bb5500fE670d1ce1B9EaEbA942a5ca85e5Ea | 0xC2aae1ac76eD2Bb37bF4AdD72A82165bD2bf99F3 | 0x8DeCB677dAD03F07b5647eAA0B502d8f44B645eF |
| 2         | Moonbase Alpha  | 0xd8681e9c2bA2fdfE6690F59bc726C657ed8B494D | 0xea24Bb5500fE670d1ce1B9EaEbA942a5ca85e5Ea | 0x6593d8aF009d35d0BbB6eDe1dd29dF55b73F9A98 | 0x0693FeBE4766b85CcecB0C5168b39c81E0251366 | 0xC3ea0Fbaa708D225BD2575dC4A57e0eaE8aFc77F | 0x530Ca8291856c727cc6a33c2ACD50f79184AFA3d | 0x06f3CE7b93eBE17Df5F46d23934F1125C1dcC5f5 |
| 3         | Polygon Mumbai  | 0x9a8F70222FB768e16FE343c9EbA8634e4bd6524A | 0x1716b5BD0829b5d37BbB2F236296a7E4a5E31eA0 | 0x2247c836CC252F0D7D06883350e902996Ddb442D | 0x0B4Befb569dEa0cA11f0bFeF6919a28Ae7d829E1 | 0xb76A581fc20020675651EABC465ECaA311474186 | 0x5D7fc7407F00C415a13C43076e7Db82b357DE658 | 0x314c8b3C6643D237213381ee3a6D5bDaeDFaD477 |

### Registered Resources


| Type           | Resource Name | Fee Type             | Liquidity Type | Resource ID                                                        | Goerli Contract Address                    | Mumbai Contract Address                    | Moonbase Contract Address                  |
| -------------- | ------------- | -------------------- | -------------- | ------------------------------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| ERC20          | ERC20LRTest   | BasicFeeHandler      | Lock/Release   | 0x0000000000000000000000000000000000000000000000000000000000000300 | 0x3F9A68fF29B3d86a6928C44dF171A984F6180009 | 0xFC072Aa8ABB5646aFD0c22994bdE30dB57B1BF1C | 0x3690601896C289be2d894c3d1213405310D0a25C |
| ERC20          | ERC20TST      | FeeHandlerWithOracle | Mint/Burn      | 0x0000000000000000000000000000000000000000000000000000000000000000 | 0x3D151A97A446C9ea6893038e7C0db73466f3f3af | 0x2465c8F84bDB7130ACDf31d694bc9c820F70ac06 | 0xAc693E44E1EDe5f66A4e1406F65b904450932fB3 |
| ERC721         | ERC721TST     | BasicFeeHandler      | Mint/Burn      | 0x0000000000000000000000000000000000000000000000000000000000000200 | 0xe9d3b1433bACDfC26ee097629D238A41BF6dA3aE | 0x4beD477d1f5D338855A521ABa2A88c9a15e2eA5d | 0x3D151A97A446C9ea6893038e7C0db73466f3f3af |
| GenericMessage | N/A           | BasicFeeHandler      | Message        | 0x0000000000000000000000000000000000000000000000000000000000000500 | 0x530Ca8291856c727cc6a33c2ACD50f79184AFA3d | 0xe255cA458925c26d3E05004e247579A64b020cEF | 0xe7Ed7AAd072ACd23bA36F906C2515DF8eD43d482 |

### Fee Schemas


| Resource ID                                                        | Fee Type   | Fee Percent/Amount |
| ------------------------------------------------------------------ | ---------- | ------------------ |
| 0x0000000000000000000000000000000000000000000000000000000000000000 | Fee oracle | 3%                 |
| 0x0000000000000000000000000000000000000000000000000000000000000200 | Base fee   | 0.0001 Base tokens |
| 0x0000000000000000000000000000000000000000000000000000000000000300 | Base fee   | 0.0001 Base tokens |
| 0x0000000000000000000000000000000000000000000000000000000000000500 | Base fee   | 0.0001 Base tokens |
