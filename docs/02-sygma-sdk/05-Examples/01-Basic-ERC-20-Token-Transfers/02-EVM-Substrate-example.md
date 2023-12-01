---
slug: /sdk/examples/erc20/evm-substrate-example
id:  examples-erc20-evm-substrate-example
title: EVM To Substrate Token Transfer
description: Section that describes how to perform an EVM to Substrate token transfer.
sidebar_position: 2
draft: false
---

### EVM-to-Substrate Token Transfer Example

In the following example, we will use the `TESTNET` environment to perform a cross-chain ERC-20 transfer with 0.5 Goerli Phala `gPHA` tokens. The transfer will be initiated on the EVM-side via the Goerli Ethereum testnet and received on the Substrate-side via the Rococo-Phala testnet.

This is an example script that demonstrates the functionality of the Sygma SDK and the wider Sygma ecosystem of relayers and bridge and handler contracts/pallets. The complete example can be found in this [repo](
https://github.com/sygmaprotocol/sygma-sdk/tree/main/examples/evm-to-substrate-fungible-transfer#sygma-sdk-erc20-example).

### Prerequisites

Before running the script, ensure that you have the following:

- Node.js installed on your machine
- Yarn (version 3.4.1 or higher)
- A wallet funded with `gPHA` tokens from the [Sygma faucet](https://faucet-ui-stage.buildwithsygma.com/)
- [Goerli ETH](https://goerlifaucet.com/) for gas 

:::danger
We make use of the dotenv module to manage exported private keys with environment variables. Please note that accidentally committing a .env file containing private keys to a wallet with real funds, onto GitHub, could result in the complete loss of your funds. **Never expose your private keys.**
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

This example uses the `dotenv` module to manage private keys. To run the example, you will need to configure your environment variable to include your test development account's [exported private key](https://support.metamask.io/hc/en-us/articles/360015289632-How-to-export-an-account-s-private-key). A `.env.sample` is provided as a template.

**DO NOT COMMIT PRIVATE KEYS WITH REAL FUNDS TO GITHUB. DOING SO COULD RESULT IN COMPLETE LOSS OF YOUR FUNDS.**

Create a `.env` file in the evm-to-substrate example folder:

```bash
cd examples/evm-to-substrate-fungible-transfer
touch .env
```

Replace between the quotation marks your exported private key:

`PRIVATE_KEY="YOUR_PRIVATE_KEY_HERE"`

Replace the placeholder value in the script for `DESTINATION_ADDRESS` with your preferred destination Substrate address.
   
To send an ERC-20 example transfer from EVM to Substrate, run:

```bash
cd examples/evm-to-substrate-fungible-transfer
yarn run transfer
```

The example will use `ethers` in conjunction with the sygma-sdk to create a transfer from Goerli to Rococo-Phala with a `gPHA` token. It will be received on Rococo-Phala as the native `PHA` token.

### Script Functionality

This example script performs the following steps:

- Initializes the SDK by importing the required packages and defining the constants for the script.

```ts
import { EVMAssetTransfer, Environment, getTransferStatusData } from "@buildwithsygma/sygma-sdk-core";
import { Wallet, providers } from "ethers";

const ROCOCO_PHALA_CHAIN_ID = 5231;
const DESTINATION_ADDRESS = "5CDQJk6kxvBcjauhrogUc9B8vhbdXhRscp1tGEUmniryF1Vt"; // replace this value for your preferred Substrate address
const RESOURCE_ID =
  "0x0000000000000000000000000000000000000000000000000000000000001000"; // This is the resource ID for the gPHA token according to Sygma's testnet environment 
```

- Configures the dotenv module and sets the `privateKey` as a value to be pulled from the `.env` file.

```ts
import dotenv from "dotenv";

dotenv.config()

const privateKey = process.env.PRIVATE_KEY;

if (!privateKey) {
  throw new Error("Missing environment variable: PRIVATE_KEY");
}
```

- Defines the ERC-20 transfer function.

```ts
export async function erc20Transfer(): Promise<void> {
```
- Set up the provider, wallet, and asset transfer objects using the TESTNET environment.

```ts
  const provider = new providers.JsonRpcProvider(
    "https://rpc.goerli.eth.gateway.fm/"
  );
  const wallet = new Wallet(
    privateKey as string,
    provider
  );
  const assetTransfer = new EVMAssetTransfer();
  await assetTransfer.init(provider, Environment.TESTNET);
```

- Constructs a `transfer` object that defines the details of the ERC-20 token transfer using the previously declared constants, as well as the amount to be transferred. 
  
```ts
  const transfer = assetTransfer.createFungibleTransfer(
    await wallet.getAddress(),
    ROCOCO_PHALA_CHAIN_ID,
    DESTINATION_ADDRESS,
    RESOURCE_ID,
    "500000000000000000" // 18 decimal places, so in this case, 0.5 gPHA tokens
  );
```

- Retrieves the fee required to complete the transfer from the SDK.
- Builds the necessary approval transactions for the transfer and sends them using the Ethereum wallet. The approval transactions are required to authorize the transfer of ERC-20 tokens.

```ts
  const fee = await assetTransfer.getFee(transfer);
  const approvals = await assetTransfer.buildApprovals(transfer, fee);
  for (const approval of approvals) {
    const response = await wallet.sendTransaction(
      approval as providers.TransactionRequest
    );
    console.log("Sent approval with hash: ", response.hash);
  }
```

- Builds the final `transfer` transaction and sends it using the Ethereum wallet.
  
```ts
  const transferTx = await assetTransfer.buildTransferTransaction(
    transfer,
    fee
  );
  const response = await wallet.sendTransaction(
    transferTx as providers.TransactionRequest
  );
  console.log("Sent transfer with hash: ", response.hash);
}
```