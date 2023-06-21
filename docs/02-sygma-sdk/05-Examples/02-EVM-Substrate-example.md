---
slug: /sdk/examples/evm-substrate-example
id:  examples-evm-substrate-example
title: EVM-to-Substrate Token Transfer Example
description: Section that describes how to perform an EVM-to-Substrate token transfer.
sidebar_position: 2
draft: false
---

:::info 
In the following example, we will use the `TESTNET` environment to perform a cross-chain ERC-20 transfer with the Goerli Phala `gPHA` token. The transfer will be initiated on the EVM-side via the Goerli Ethereum testnet and received on the Substrate-side via the Rococo-Phala testnet.
:::

:::danger
 We will make use of an example Ethereum wallet ("0xD31E89feccCf6f2DE10EaC92ADffF48D802b695C"), whose private key is hardcoded into the example, as well as a Phala-derived receiving addresss ("3zupFrv6QYakb76E5GYccsPxcHv94GAR5FppYGRubzAaohQ3"). Please note that these are for example use only. **Never expose your private key, it could result in the complete loss of your funds.**
:::

### EVM-to-Substrate Token Transfer Example

This is an example script that demonstrates the functionality of the SDK using the Sygma ecosystem. The script showcases an ERC-20 token transfer between two networks using the Sygma SDK. The complete example can be found in this [repo](
https://github.com/sygmaprotocol/sygma-sdk/tree/main/examples/evm-to-substrate-fungible-transfer#sygma-sdk-erc20-example).

### Prerequisites

Before running the script, ensure that you have the following:

- Node.js installed on your machine
- Yarn (version 3.4.1 or higher)
- Access to an Ethereum provider

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
   
To send an ERC-20 example transfer from EVM to Substrate, run:

```bash
yarn run transfer
```

The example will use `ethers` in conjuction with the sygma-sdk to create a transfer from Goerli to Rococo-Phala with a `gPHA` token.

Replace the placeholder values in the script with your own Ethereum wallet private key and provider URL.

### Script Functionality

This example script performs the following steps:

- Initializes the SDK and establishes a connection to the Ethereum provider.

```bash
import {
  EVMAssetTransfer,
  Environment,
  Fungible,
  Transfer,
} from "@buildwithsygma/sygma-sdk-core";
import { Wallet, providers } from "ethers";

export const GOERLI_CHAIN_ID = 5;
export const SEPOLIA_CHAIN_ID = 11155111;
export const ERC20_TOKEN_SYMBOL = "ERC20LRTest";
```
```bash
export async function erc20Transfer(): Promise<void> {
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

- Retrieves the list of supported domains and resources from the SDK configuration.
- Searches for the ERC-20 token resource with the specified symbol.
- Searches for the Goerli and Rococo-Phala domains in the list of supported domains, based on the specified chain IDs.

```bash
  const domains = assetTransfer.config.getDomains();
  const resources = assetTransfer.config.getDomainResources();
  const erc20Resource = resources.find(
    (resource) => resource.symbol == ERC20_TOKEN_SYMBOL
  );
  if (!erc20Resource) {
    throw new Error("Resource not found");
  }
  const goerli = domains.find((domain) => domain.chainId == GOERLI_CHAIN_ID);
  if (!goerli) {
    throw new Error("Network goerli not supported");
  }
  const sepolia = domains.find((domain) => domain.chainId == SEPOLIA_CHAIN_ID);
  if (!sepolia) {
    throw new Error("Network sepolia not supported");
  }
```
- Constructs a `transfer` object that defines the details of the ERC-20 token transfer, including sender and recipient addresses, amount to transfer, and the domains and resources involved.

```bash
  const transfer: Transfer<Fungible> = {
    sender: await wallet.getAddress(),
    amount: {
      // amount in wei
      amount: "5000000000000000000",
    },
    from: goerli,
    to: sepolia,
    resource: erc20Resource,
    recipient: await wallet.getAddress(),
  };
```

- Retrieves the fee required to complete the transfer from the SDK.
- Builds the necessary approval transactions for the transfer and sends them using the Ethereum wallet. The approval transactions are required to authorize the transfer of ERC-20 tokens.

```bash
  const fee = await assetTransfer.getFee(transfer);
  const approvals = await assetTransfer.buildApprovals(transfer, fee);
  for (const approval of approvals) {
    const response = await wallet.sendTransaction(
      approval as providers.TransactionRequest
    );
    console.log("Sent approval with hash: " + response.hash);
  }
```

- Builds the final `transfer` transaction and sends it using the Ethereum wallet.

```bash
  const transferTx = await assetTransfer.buildTransferTransaction(
    transfer,
    fee
  );
  const response = await wallet.sendTransaction(
    transferTx as providers.TransactionRequest
  );
  console.log("Sent
```

### Sygma Faucet

To get the `gPHA` tokens needed for the transfer, visit the [Sygma faucet](https://faucet-ui-stage.buildwithsygma.com/).