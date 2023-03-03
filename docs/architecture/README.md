---
description: The following details the architecture of Sygma.
---

# Architecture

The Sygma messaging protocol is able to transfer arbitrary data. This allows us to transfer not only ERC20 tokens but also ERC721 (eg, NFTs) in additional to something else we refer to as: **Generic data.** Generic data could be used to bridge governance proposals or voting actions, for example, or any other contract call by transferring [calldata](https://ethereum.stackexchange.com/questions/52989/what-is-calldata).

Currently, the Sygma protocol is compatible with EVM networks but is proven to be easily extended to other networks such as Substrate-based chains or Cosmos-based chains (Tendermint) as well.\


Sygma Bridging Flow Diagram&#x20;

![](<../../static/assets/Bridging Diagram.png>)
