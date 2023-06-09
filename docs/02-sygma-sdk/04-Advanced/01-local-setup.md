---
slug: /sdk/advanced/localsetup
id: advanced-localsetup
title: Setting Up Locally
description: The following section details how to setup Sygma locally.
sidebar_position: 1
draft: false
---

### Local Sygma setup

This setup contains preconfigured resources including: two EVM networks with Sygma contracts, one Substrate network with Sygma pallets, three relayers and a fee oracle. More detail can be found in local configuration.

You can easily access it through the SDK. Simply select `LOCAL` environment on initialization.

```ts
const assetTransfer = new EVMAssetTransfer();
await assetTransfer.init(provider, Environment.LOCAL);
```

### Run example on local setup:

#### 1) Clone relayers repository

First, clone the Sygma relayer repository by running:

```
git clone https://github.com/sygmaprotocol/sygma-relayer.git
```

#### 2) Start local setup

This will start the dockerized setup:

```
make example
```

#### 3) Clone SDK repository

Examples can be found in the SDK repository, so first step is to clone the Sygma SDK repository by running:

```bash
git clone git@github.com:sygmaprotocol/sygma-sdk.git
cd sygma-sdk/
```

#### 4) Build the SDK

If you haven't already done so, install dependecies with:

```
yarn install
```

and build the SDK by running:

```
yarn sdk:build
```

#### 4) Run examples

Then, navigate to `local-fungible-transfer` inside examples in the SDK repository, and run:

```bash
yarn run transfer:evm-substrate
```

This will start a local transfer example using the local Sygma setup. It will use `ethers` in conjuction with the sygma-sdk to create a transfer from `EVM1` to `Substrate` network.

You can also run:

```bash
yarn run transfer:substrate-evm
```

Similarly, this will use `@polkadot/api` in conjuction with the sygma-sdk to create a transfer from `Substrate` to `EVM1` network.

#### Local configuration
TODO - add information on all registered resources on local setup

#### Make changes to on-chain Sygma setup
Once you start local setup, it is possible to additionaly configure Sygma contracts or pallet as nodes RPC endpoints are exposed and you can interact with them as with any regular node.

##### EVM1 - http://127.0.0.1:8545 
##### EVM2 - http://127.0.0.1:8547
##### Substrate - ws://127.0.0.1:9944
