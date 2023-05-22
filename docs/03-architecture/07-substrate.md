---
slug: /architecture/substrate
id: architecture-substrate
title: Substrate Support
description: The following details Substrate support on Sygma.
---

:::info
The following section details Sygma's compatibility with Polkadot and Kusama parachains via its Substrate pallet support. 
:::

### Substrate Support

A unique feature of the Sygma protocol is its ability to provide interoperability between EVM-based and Substrate-based blockchains. This includes those [parachains](https://wiki.polkadot.network/docs/learn-parachains) deployed under Polkadot and Kusama's [shared security model](https://wiki.polkadot.network/docs/learn-architecture).

Similar to how Sygma enables EVM support by invoking various smart contracts, Sygma provides Substrate support via interactions with [custom Sygma pallets](https://github.com/sygmaprotocol/sygma-substrate-pallets). 

:::info
Substrate pallets provide a modular approach to building Substrate-based blockchains and contain runtime logic which can be used, modified, and extended accordingly. 
:::

---

### Key Concepts

Sygma's custom pallets contains a multitude of different identifiers with complex interrelationships. These may appear overwhelming at first for EVM developers crossing the chasm, but we will explain the concepts below:

- **MultiLocation**: `MultiLocation` is a cross-consensus message format (XCM) concept used to identify any single entity location that exists within the world of Polkadot consensus. `MultiLocation` always expresses a relative location to the current location. Practically, `MultiLocations` are used to identify places to send XCM messages. In Sygma pallets, it is used to identify the destination when depositing.
- **MultiAsset**: `MultiAsset` is a Substrate type that identifies whether assets are fungible or non-fungible, native or foreign, etc. It is used to handle multiple assets in the Polkadot world. In Sygma, `MultiAsset` is used to identify the asset despite its location and fungibility. 
-  **DomainID & ChainID**: In the context of the Sygma pallets, a `DomainID` is a unique identifier for a particular domain, and a `ChainID` is a unique identifier for a specific blockchain. These IDs are registered together, so each `DomainID` is associated with a specific `ChainID`. This information is stored in the chain's storage, and you can look up which `ChainID` is associated with a particular `DomainID`.
-  **ResourceID**: This is a unique identifier for an asset in Sygma. It's linked with an XCM asset through a mapping defined in the runtime, which associates an `AssetId` with a `ResourceID`.
-  **AssetId**: This can refer to two different types of `AssetIds`, one of u32 type and the other of XCM type.

    - *AssetId of u32*: This is an identifier assigned to an asset in a Substrate blockchain. It's displayed in the assets page on the Polkadot JS App and is used when transferring the asset between accounts within the same parachain.

    - *AssetId of XCM*: This is a type of `AssetId` used in the context of XCM (Cross-Chain Message) communication. It's an alias for `XcmAssetId` in Sygma pallets and serves as the asset identifier within the entire Polkadot ecosystem. It's linked with the asset's `MultiLocation`, which is a data structure that describes where the asset is located.
- **SimpleForeignAssetConverter**: This is a structure that binds the u32 `AssetId` with the Asset's `MultiLocation`, establishing a link between the two.

- **ResourcePairs**: This is a mapping defined in the runtime that links the `XcmAssetId` and the `ResourceID`.

Practically speaking, the `MultiLocation` of an asset plays a key role in the relationship between the asset, its different IDs (u32 `AssetId` and `XcmAssetId`), the basic fee associated with the asset, and how the asset is linked with a `ResourceID`.

---

### Architecture Diagram

Architecture diagram coming soon...

---

For more on Substrate, please refer to their [docs](https://docs.substrate.io/quick-start/). For more on the Polkadot ecosystem, please refer to their [wiki](https://wiki.polkadot.network/docs/getting-started).



