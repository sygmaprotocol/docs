---
description: The following details a list of resources to support the Devnet environment.
---

# Devnet

**Status:** Active

#### Sygma Transfer UI

The transfer UI allows users with a visual interface to connect their wallets and bridge tokens.

[https://transfer-ui-develop.buildwithsygma.com/transfer](https://transfer-ui-develop.buildwithsygma.com/transfer)

**Faucet UI**

The faucet allows users with a visual interface to mint tokens.

[https://faucet-ui-stage.buildwithsygma.com](https://faucet-ui-stage.buildwithsygma.com)

**Faucet API**

The faucet API allows users to programmatically interact with the faucet.

[https://faucet-api-stage.buildwithsygma.com/](https://faucet-api-stage.buildwithsygma.com/)

###

### Contract Addresses

| Domain ID | Network name    | Bridge                                     | Control Segragator                         | Fee Router                                 | Fee Handler With Oracle                    | ERC20 Handler                              | ERC721 Handler                             | Generic Handler                            |
| --------- | --------------- | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| 0         | Ethereum Goerli | 0x72B1C644066233511f8F805894Bd9C9bDc8A18bd | 0x0738Bb785Fdf3161E497927835001C685Ae6aF3F | 0x6840BADdFA2a0d74f37bAe445127749e0937bB43 | 0x15f3DD97c87c5848f446e44A07D999e36F77E542 | 0xAAC25f02aeafa90a2E5985604A2b27D70edc9aE2 | 0xEABcd72E0662D3fEbd2e9148a841cD18FFCe49Ea | 0xaE299Ee7999FB708f8ADD517f329417FB7284DcB |
| 1         | Polygon Mumbai  | 0x2C143DafCdDA3289e52909a6Fe10cFa24eC78eFa | 0x24E7f94bcF23A6Ce421a125FEE98AFDd82fa7553 | 0x03E479aBaE403F9e276a8e25DB4d39F10F8584f4 | 0x8Ed0fC96d7163b06F40E420cC81f6F525D40A954 | 0x0c678958A685e028f153bA31e3C348eDbE4D98BA | 0x385Ad090F69CfCa0c2AA4A8345D61935d129f2a2 | 0x6c033C5C704634cC2b43b71E07740f2AE03563Ff |
| 2         | Moonbase Alpha  | 0xc52C264877f17481a1859f2afB5793E4a9d2088b | 0x373242b4721796bcc98e5affe03d424cde28bee2 | 0xAAC25f02aeafa90a2E5985604A2b27D70edc9aE2 | 0xf462b18aDAC00dda60343C674491C83EFa20E3fF | 0x3F9A68fF29B3d86a6928C44dF171A984F6180009 | 0xe9d3b1433bACDfC26ee097629D238A41BF6dA3aE | 0xF1bFBbE4174E2E6595E095BDF3ac8b97aF7796aA |

### Registered Resources

| Type    | Resource name | Fee type      | Liquidity Type | Resource ID                                                        | Goerli Contract Address                    | Mumbai Contract Address                    | Moonbase Contract Address                  |
| ------- | ------------- | ------------- | -------------- | ------------------------------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| ERC20   | ERC20TST      | FeeWithOracle | Mint/Burn      | 0x0000000000000000000000000000000000000000000000000000000000000000 | 0x3D151A97A446C9ea6893038e7C0db73466f3f3af | 0x2465c8F84bDB7130ACDf31d694bc9c820F70ac06 | 0xAc693E44E1EDe5f66A4e1406F65b904450932fB3 |
| ERC20   | ERC20LRTest   | BasicFee      | Lock/Release   | 0x0000000000000000000000000000000000000000000000000000000000000300 | 0x3F9A68fF29B3d86a6928C44dF171A984F6180009 | 0xFC072Aa8ABB5646aFD0c22994bdE30dB57B1BF1C | 0x3690601896C289be2d894c3d1213405310D0a25C |
| ERC721  | ERC721TST     | BasicFee      | Mint/Burn      | 0x0000000000000000000000000000000000000000000000000000000000000200 | 0xe9d3b1433bACDfC26ee097629D238A41BF6dA3aE | 0x4beD477d1f5D338855A521ABa2A88c9a15e2eA5d | 0x3D151A97A446C9ea6893038e7C0db73466f3f3af |
| Generic | Generic       | Basic Fee     | n/a            | 0x0000000000000000000000000000000000000000000000000000000000000500 | n/a                                        | n/a                                        | n/a                                        |

### Fee Schemas

| ResourceID                                                         | Fee type   | Fee percent\amount |
| ------------------------------------------------------------------ | ---------- | ------------------ |
| 0x0000000000000000000000000000000000000000000000000000000000000000 | Fee oracle | 3%                 |
| 0x0000000000000000000000000000000000000000000000000000000000000300 | Base fee   | 0.0001 Base tokens |
| 0x0000000000000000000000000000000000000000000000000000000000000200 | Base fee   | 0.0001 Base tokens |
| 0x0000000000000000000000000000000000000000000000000000000000000500 | Base fee   | 0.0001 Base tokens |
