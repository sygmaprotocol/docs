---
description: >-
  The following details a list of deployed smart contract addresses for our
  Testnet environment.
---

# Testnet

**Status:** Inactive

### Contract addresses

| chainID | Network name    | Bridge                                     | ControlSegragator                          | FeeRouter                                  | FeeHandlerWithOracle                       | Erc20Hander                                |
| ------- | --------------- | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| 1       | Ethereum Goerli | 0x95ECF5ae000e0fe0e0dE63aDE9b7D82a372038b4 | 0x8893c9dC9fc3D10d99f2fD93e1f1295A49f98243 | 0xC3ea0Fbaa708D225BD2575dC4A57e0eaE8aFc77F | 0x7350e258Cb88a22572Edefe5d80BAD21b42Cc124 | 0xea24Bb5500fE670d1ce1B9EaEbA942a5ca85e5Ea |
| 2       | Moonbase Alpha  | 0xd8681e9c2bA2fdfE6690F59bc726C657ed8B494D | 0xea24Bb5500fE670d1ce1B9EaEbA942a5ca85e5Ea | 0x6593d8aF009d35d0BbB6eDe1dd29dF55b73F9A98 | 0x0693FeBE4766b85CcecB0C5168b39c81E0251366 | 0xC3ea0Fbaa708D225BD2575dC4A57e0eaE8aFc77F |
| 3       | Polygon Mumbai  | 0x9a8F70222FB768e16FE343c9EbA8634e4bd6524A | 0x1716b5BD0829b5d37BbB2F236296a7E4a5E31eA0 | 0x2247c836CC252F0D7D06883350e902996Ddb442D | 0x0B4Befb569dEa0cA11f0bFeF6919a28Ae7d829E1 | 0xb76A581fc20020675651EABC465ECaA311474186 |

### Registered resources

| Type  | Resource name | Fee type | liquidity type | ResourceID | Goerli Contract address | Mumbai contract address |
| ----- | ------------- | -------- | -------------- | ---------- | ----------------------- | ----------------------- |
| ERC20 |               | ERC20    | Lock/Release   |            |                         |                         |
| ERC20 |               | ERC20    | Mint/Burn      |            |                         |                         |

### Fee schemas

| ResourceID | Fee type   | Fee percent\amount |
| ---------- | ---------- | ------------------ |
|            | Fee oracle |                    |
|            | Base fee   |                    |
