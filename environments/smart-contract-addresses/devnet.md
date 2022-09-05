---
description: >-
  The following details a list of deployed smart contract addresses for our
  Devnet environment.
---

# Devnet

**Status:** Active

### Contract addresses

| chainID | Network name    | Bridge                                     | ControlSegragator                          | FeeRouter                                  | FeeHandlerWithOracle                       | Erc20Hander                                |
| ------- | --------------- | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| 0       | Ethereum Goerli | 0xf1e5641D7Eaaa1643B6360195eA900E420A05dd4 | 0x8153dBFdfeA083d3Ed12652F5a5E282377d33235 | 0x2FfD779236AA08800ab2545A8a66551b10051bC5 | 0x22CB1426c7Eaaa6f5a29B7F502Cbe9125E209D65 | 0xE052D0338C84113A92202F3F950D2564eaE8a4A2 |
| 1       | Polygon Mumbai  | 0x49d9bF8DB4a915F264210F4FE2E316FF4Ec08f85 | 0xF7E33AC2A89A3cD7D20971b365048e4716eA8589 | 0x9784E36D80d7267397395F09155d81C236e143F2 | 0x9b8E05C14eB2Cd06ccFEd160EB974499B9Df4aAd | 0xBaf6a74DCA7c9043F9879f1577b32D64246E8223 |

### Registered resources

| Type  | Resource name | Fee type | liquidity type | ResourceID                                                         | Goerli Contract address                    | Mumbai contract address                    |
| ----- | ------------- | -------- | -------------- | ------------------------------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| ERC20 | csUSD         | ERC20    | Lock/Release   | 0x0000000000000000000000000000000000000000000000000000000000000001 | 0x6320aE6240C0c7405D5b5128Ec01c780e2074D34 | 0x56DBf43D478DB6b68f0b46CfCB4EeDecd08571E8 |
| ERC20 | csERC20       | ERC20    | Mint/Burn      | 0x0000000000000000000000000000000000000000000000000000000000000002 | 0x28a15fab77a4Dd74023DfB782Fbd52f541d270E6 | 0x429b8171Eb89a866c885375C7490B1996f923f26 |

### Fee schemas

| ResourceID                                                         | Fee type   | Fee percent\amount |
| ------------------------------------------------------------------ | ---------- | ------------------ |
| 0x0000000000000000000000000000000000000000000000000000000000000001 | Fee oracle | 3%                 |
| 0x0000000000000000000000000000000000000000000000000000000000000002 | Base fee   | 0.0001 Base tokens |
