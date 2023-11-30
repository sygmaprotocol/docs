---
slug: /sdk/examples/erc20/substrate-evm-example
id:  examples-erc20-substrate-evm-example
title: Substrate To EVM Token Transfer
description: Section that describes how to perform a Substrate to EVM token transfer.
sidebar_position: 3
draft: false
---

:::info 
In the following example, we will use the `TESTNET` environment to perform a cross-chain ERC-20 transfer with the Goerli Phala `gPHA` token. The transfer will be initiated on the Substrate-side via the Rococo-Phala testnet and received on the EVM-side via the Goerli Ethereum testnet.
:::

### EVM-to-Substrate Token Transfer Example

This is an example script that demonstrates the functionality of the Sygma SDK and the wider Sygma ecosystem of bridges, fee handlers, and relayers. The script showcases a Substrate asset transfer between a Substrate network and an EVM network using the Sygma SDK. The complete example can be found in this [repo](https://github.com/sygmaprotocol/sygma-sdk/tree/main/examples/substrate-to-evm-fungible-transfer).

### Prerequisites

Before running the script, ensure that you have the following:

- Node.js installed on your machine
- Yarn (version 3.4.1 or higher)
- A wallet funded with `gPHA` tokens from the [Sygma faucet](https://faucet-ui-stage.buildwithsygma.com/)

:::danger
We make use of the dotenv module to manage Substrate's private mnemonics with environment variables. Please note that accidentally committing a .env file containing private mnemonics to a wallet with real funds, onto GitHub, could result in the complete loss of your funds. **Never expose your private keys.**
:::

### Getting Started

1. Clone the repository 

Clone the sygma-sdk repository into a directory of your choice, and then `cd` into the folder:

```bash
git clone git@github.com:sygmaprotocol/sygma-sdk.git
cd sygma-sdk/
```

2. Install dependencies
   
Install the project dependencies by running:

```bash
yarn install
```

3. Build the SDK

Build the SDK by running the following command:

```bash
yarn sdk:build
```

4. Usage

This example uses the `dotenv` module to import the Substrate 12-word private mnemonic. To run the example, you will need to configure your environment variable to include your Substrate test development account's [12-word seed](https://support.polkadot.network/support/solutions/articles/65000169731-polkadot-extension-how-can-i-view-my-mnemonic-phrase-). A `.env.sample` is provided as a template.

**DO NOT COMMIT YOUR MENOMONIC WITH REAL FUNDS TO GITHUB. DOING SO COULD RESULT IN COMPLETE LOSS OF YOUR FUNDS.**

Create a `.env` file in the substrate-to-evm example folder:

```bash
cd examples/substrate-to-evm-fungible-transfer
touch .env
```

Replace between the quotation marks your 12-word mnemonic:

`PRIVATE_MNEMONIC="YOUR TWELVE WORD MNEMONIC HERE WITH SPACES"`

Replace the placeholder value in the script for `recipient` with your preferred destination EVM address.
   
To send a Substrate token transfer from Substrate to EVM, run:

```bash
cd examples/substrate-to-evm-fungible-transfer
yarn run transfer
```

The example will use `@polkadot/keyring` in conjunction with the sygma-sdk to create a transfer from Rococo-Phala to Goerli with the `PHA` token. It will be received on Goerli as a `gPHA` token.

### Script Functionality

This example script performs the following steps:

- Initializes the SDK by importing the required packages and defining the constants for the script.

```ts
import { Keyring } from "@polkadot/keyring";
import { ApiPromise, WsProvider } from "@polkadot/api";
import { cryptoWaitReady } from "@polkadot/util-crypto";
import { Environment, Substrate } from "@buildwithsygma/sygma-sdk-core";

const { SubstrateAssetTransfer } = Substrate;
const GOERLI_CHAIN_ID = 5;
const RESOURCE_ID = "0x0000000000000000000000000000000000000000000000000000000000001000";
const recipient = "0xD31E89feccCf6f2DE10EaC92ADffF48D802b695C";
```

- Configures the dotenv module and sets the `MNEMONIC` as a value to be pulled from the `.env` file.

```ts
import dotenv from "dotenv";

dotenv.config();

const MNEMONIC = process.env.PRIVATE_MNEMONIC;

if (!MNEMONIC) {
  throw new Error("Missing environment variable: PRIVATE_MNEMONIC");
}
```

- Defines the main Substrate transfer function, including the connection to the blockchain using a WebSocket provider, initializing the asset transfer instance, and setting up the keyring and account from the mnemonic phrase.

```ts
const substrateTransfer = async (): Promise<void> => {
  const keyring = new Keyring({ type: "sr25519" });
  await cryptoWaitReady();
  const account = keyring.addFromUri(MNEMONIC as string);
  const wsProvider = new WsProvider("wss://subbridge-test.phala.network/rhala/ws");
  const api = await ApiPromise.create({ provider: wsProvider });
  const assetTransfer = new SubstrateAssetTransfer();
  await assetTransfer.init(api, Environment.TESTNET);
  ...
}
```

- Constructs a transfer object that calculates the fee, then builds, signs, and sends the transaction.

```ts
const transfer = assetTransfer.createFungibleTransfer(
  account.address,
  GOERLI_CHAIN_ID,
  recipient,
  RESOURCE_ID,
  50
);
const fee = await assetTransfer.getFee(transfer);
const transferTx = assetTransfer.buildTransferTransaction(transfer, fee);
const unsub = await transferTx.signAndSend(account, ({ status }) => {
  ...
});
```

- Logs the current status of the transaction, and if it's included in a block or finalized, outputs the respective block hash.

```ts
const unsub = await transferTx.signAndSend(account, ({ status }) => {
  console.log(`Current status is ${status.toString()}`);
  if (status.isInBlock) {
    console.log(`Transaction included at blockHash ${status.asInBlock.toString()}`);
  } else if (status.isFinalized) {
    console.log(`Transaction finalized at blockHash ${status.asFinalized.toString()}`);
    unsub();
  }
});
```