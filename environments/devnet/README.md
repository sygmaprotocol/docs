---
description: The following details a list of resources to support the Devnet environment.
---

# Devnet

**Status:** Active



###

### Contract addresses

| chainID | Network name    | Bridge                                     | ControlSegragator                          | FeeRouter                                  | FeeHandlerWithOracle                       | Erc20Hander                                | ERC721Handler                              | Generic Handler |
| ------- | --------------- | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | --------------- |
| 0       | Ethereum Goerli | 0xEeFBd08769Ab1e369a04a17180E91E4549938d4c | 0x59EdCD60B388bd263241Eff2257E1442E1c48766 | 0x10E0FFaA870d51AAcdCA053f39792a42F53b39De | 0x466f7b5f7d1e4e1D506Be9A612A2A1BB8960dE58 | 0xE052D0338C84113A92202F3F950D2564eaE8a4A2 | 0x79746C217Def8B6614B22D4998D6280aDDAA174C | todo            |
| 1       | Polygon Mumbai  | 0x2C143DafCdDA3289e52909a6Fe10cFa24eC78eFa | 0x24E7f94bcF23A6Ce421a125FEE98AFDd82fa7553 | 0x03E479aBaE403F9e276a8e25DB4d39F10F8584f4 | 0x8Ed0fC96d7163b06F40E420cC81f6F525D40A954 | 0x0c678958A685e028f153bA31e3C348eDbE4D98BA | 0x385Ad090F69CfCa0c2AA4A8345D61935d129f2a2 | todo            |
| 2       | Moonbase        | 0xc52C264877f17481a1859f2afB5793E4a9d2088b | 0x24E7f94bcF23A6Ce421a125FEE98AFDd82fa7553 | 0xAAC25f02aeafa90a2E5985604A2b27D70edc9aE2 | 0xf462b18aDAC00dda60343C674491C83EFa20E3fF | 0x3F9A68fF29B3d86a6928C44dF171A984F6180009 | 0xe9d3b1433bACDfC26ee097629D238A41BF6dA3aE | todo            |

### Registered resources

| Type   | Resource name | Fee type      | liquidity type | ResourceID                                                         | Goerli Contract address                    | Mumbai contract address                    | Moonase contract address                   |
| ------ | ------------- | ------------- | -------------- | ------------------------------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| ERC20  | csUSD         | FeeWithOracle | Lock/Release   | 0x0000000000000000000000000000000000000000000000000000000000000300 | 0x5ffB6Dc54221371CcBDb9850A283488e12aDf97D | 0xFC072Aa8ABB5646aFD0c22994bdE30dB57B1BF1C | 0x3690601896C289be2d894c3d1213405310D0a25C |
| ERC20  | csERC20       | BasicFee      | Mint/Burn      | 0x0000000000000000000000000000000000000000000000000000000000000000 | 0xEE7946aE5f7287a39Bc67207868EDD4a95f96795 | 0x2465c8F84bDB7130ACDf31d694bc9c820F70ac06 | 0xAc693E44E1EDe5f66A4e1406F65b904450932fB3 |
| ERC721 | ERC721TST     | BasicFee      | Mint/Burn      | 0x0000000000000000000000000000000000000000000000000000000000000200 | 0x424735601273aEe229A51D8DEfF15798351B736D | 0x4beD477d1f5D338855A521ABa2A88c9a15e2eA5d | 0x3D151A97A446C9ea6893038e7C0db73466f3f3af |

### Fee schemas

| ResourceID                                                         | Fee type   | Fee percent\amount |
| ------------------------------------------------------------------ | ---------- | ------------------ |
| 0x0000000000000000000000000000000000000000000000000000000000000300 | Fee oracle | 3%                 |
| 0x0000000000000000000000000000000000000000000000000000000000000200 | Base fee   | 0.0001 Base tokens |
| 0x0000000000000000000000000000000000000000000000000000000000000000 | Base fee   | 0.0001 Base tokens |
