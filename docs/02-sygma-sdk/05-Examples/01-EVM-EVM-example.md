---
slug: /sdk/examples/evm-example
id:  examples-evm-example
title: EVM To EVM Token Transfer Example
description: Section that describes how to perform an EVM to EVM token transfer.
sidebar_position: 1
draft: false
---

:::info 
In the following example, we will use the `TESTNET` environment to perform a cross-chain ERC-20 transfer with an `ERC20LRTST` token. The transfer will be initiated on the EVM-side via the Goerli Ethereum testnet and received on the EVM-side via the Sepolia Ethereum testnet.
:::

:::danger
 We will make use of an example Ethereum wallet ("0xD31E89feccCf6f2DE10EaC92ADffF48D802b695C"), whose private key is hardcoded into the example. As we specify the `getAddress` method from the Ethers wallet module for our recipient, the recipient will be the same address but on a different test network. Please note that these are for example use only. **Never expose your private key, it could result in the complete loss of your funds.**
:::

### EVM-to-EVM Token Transfer Example

This is an example script that demonstrates the functionality of the Sygma SDK and the wider Sygma ecosystem of bridges, fee handlers, and relayers. The script showcases an ERC-20 token transfer between two networks using the Sygma SDK. The complete example can be found in this [repo](
https://github.com/sygmaprotocol/sygma-sdk/tree/main/examples/evm-to-evm-fungible-transfer).

### Prerequisites

Before running the script, ensure that you have the following:

- Node.js installed on your machine
- Yarn (version 3.4.1 or higher)
- Access to an Ethereum provider
- A wallet funded with `ERC20LRTest` or `gPHA` tokens from the [Sygma faucet](https://faucet-ui-stage.buildwithsygma.com/)
- [Goerli ETH](https://goerlifaucet.com/) for gas (our example provides an EVM wallet already)

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
   
To send an ERC-20 example transfer from EVM to Substrate, `cd` into the example folder `examples/evm-to-evm-fungible-transfer` and run:

```bash
cd examples/evm-to-evm-fungible-transfer
yarn run transfer
```

The example will use `ethers` in conjunction with the sygma-sdk to create a transfer from Goerli to Sepolia with the `ERC20LRTST` token. It will be received on Sepolia as the `ERC20LRTST` token.

<!--Replace the placeholder values in the script with your own Ethereum wallet private key and provider URL.-->

### Script Functionality

This example script performs the following steps:

- Initializes the SDK by importing the required packages and defining the constants for the script.

```ts
import { EVMAssetTransfer, Environment } from "@buildwithsygma/sygma-sdk-core";
import { Wallet, providers } from "ethers";

const SEPOLIA_CHAIN_ID = 11155111;
const RESOURCE_ID =
  "0x0000000000000000000000000000000000000000000000000000000000000300";
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
    SEPOLIA_CHAIN_ID,
    await wallet.getAddress(), // Sending to the same address on a different chain
    RESOURCE_ID,
    "50000000000000000000" // 18 decimal places
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