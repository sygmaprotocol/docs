---
slug: /sdk/examples/substrate-evm-example
id:  examples-substrate-evm-example
title: Substrate To EVM Token Transfer Example
description: Section that describes how to perform a Substrate to EVM token transfer.
sidebar_position: 3
draft: false
---

:::info 
In the following example, we will use the `TESTNET` environment to perform a cross-chain ERC-20 transfer with the Goerli Phala `gPHA` token. The transfer will be initiated on the Substrate-side via the Rococo-Phala testnet and received on the EVM-side via the Goerli Ethereum testnet.
:::

:::danger
We will make use of an example Substrate wallet ("5FNHV5TZAQ1AofSPbP7agn5UesXSYDX9JycUSCJpNuwgoYTS", which derives to "43vNPAxiYuWSvxapizZJ9xtNu3out1xu3gxu3zbCpeoqRZRK" in Phala-Rococo), using a hardcoded 12-word seed (`MNEMONIC`), as well as an Ethereum address ("0xD31E89feccCf6f2DE10EaC92ADffF48D802b695C"). Please note that these are for example use only. **Never expose your private key, it could result in the complete loss of your funds.**
:::

### EVM-to-Substrate Token Transfer Example

This is an example script that demonstrates the functionality of the SDK using the Sygma ecosystem. The script showcases a Substrate asset transfer between Substrate and EVM using the Sygma SDK. The complete example can be found in this [repo](https://github.com/sygmaprotocol/sygma-sdk/tree/main/examples/substrate-to-evm-fungible-transfer).

### Prerequisites

Before running the script, ensure that you have the following:

- Node.js installed on your machine
- Yarn (version 3.4.1 or higher)
- Access to a custom Substrate WSS endpoint
- A wallet funded with `gPHA` tokens from the [Sygma faucet](https://faucet-ui-stage.buildwithsygma.com/) (our example provides both Substrate and EVM wallets)

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
   
To send an ERC-20 example transfer from EVM to Substrate, `cd` into the example folder `examples/substrate-to-evm-fungible-transfer` and run:

```bash
cd examples/substrate-to-evm-fungible-transfer
yarn run transfer
```

The example will use `@polkadot/keyring` in conjuction with the sygma-sdk to create a transfer from Roccoco-Phala to Goerli with the `PHA` token. It will be received on Goerli as a `gPHA` token.

Replace the placeholder values in the script with your own Substrate wallet mnemonic and destination EVM address.

### Script Functionality

This example script performs the following steps:

- Initializes the SDK and establishes a connection to the Substrate node. ***************************************WORKING HERE
- Initializes the SDK by importing the required packages and defining the constants for the script.

```ts
import { EVMAssetTransfer, Environment } from "@buildwithsygma/sygma-sdk-core";
import { Wallet, providers } from "ethers";

const ROCOCO_PHALA_CHAIN_ID = 5231;
const DESTINATION_ADDRESS = "5CDQJk6kxvBcjauhrogUc9B8vhbdXhRscp1tGEUmniryF1Vt";
const RESOURCE_ID =
  "0x0000000000000000000000000000000000000000000000000000000000001000"; // This is the resource ID for gPHA token according to Sygma's test environment 
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
    "9574830b950b9ce5b66836e77ea18739258682ca08d4e65ca26b03dfe3742cf9",
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
    500000000 
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