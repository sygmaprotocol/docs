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
We will make use of an example Substrate wallet ("5FNHV5TZAQ1AofSPbP7agn5UesXSYDX9JycUSCJpNuwgoYTS", which derives to "43vNPAxiYuWSvxapizZJ9xtNu3out1xu3gxu3zbCpeoqRZRK" in Rococo-Phala), using a hardcoded 12-word seed (`MNEMONIC`), as well as an Ethereum address ("0xD31E89feccCf6f2DE10EaC92ADffF48D802b695C"). Please note that these are for example use only. **Never expose your private key, it could result in the complete loss of your funds.**
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

The example will use `@polkadot/keyring` in conjunction with the sygma-sdk to create a transfer from Rococo-Phala to Goerli with the `PHA` token. It will be received on Goerli as a `gPHA` token.

Replace the placeholder values in the script with your own Substrate wallet mnemonic and destination EVM address.

### Script Functionality

This example script performs the following steps:

- Initializes the SDK and establishes a connection to the Substrate node.
- Retrieves the list of supported domains and resources from the SDK configuration.
- Searches for the Substrate asset resource with the specified ResourceId
- Searches for the Goerli and Sepolia domains in the list of supported domains based on their chain IDs
- Constructs a transfer object that defines the details of the Substrate asset transfer
- Retrieves the fee required for the transfer from the SDK.
- Builds the final transfer transaction and sends it using the Substrate account.