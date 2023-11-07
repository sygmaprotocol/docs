---
slug: /sdk/examples/evm-example-gmp
id:  examples-evm-example-gmp
title: EVM To EVM GMP Example
description: An EVM to EVM example of GMP
sidebar_position: 4
draft: false
---

:::info 
In the following example, we will use the `TESTNET` environment to pass a generic message from Ethereum Sepolia to Ethereum Goerli. Specifically, the `deposit` method will be called on Sepolia, passing the details of the function to be called (the `store` function, or function signature `0xa271ced2`) on a smart contract deployed on Goerli "[0xdFA5621F95675D37248bAc9e536Aab4D86766663](https://goerli.etherscan.io/address/0xdFA5621F95675D37248bAc9e536Aab4D86766663)". The method will store the current UNIX timestamp in the destination chain and can be read by calling the `retrieve` function by querying the depositor address (derived by the private key).
:::

### EVM-to-EVM GMP Example

This is an example script that demonstrates the functionality of the Sygma SDK and the wider Sygma ecosystem of bridges, fee handlers, and relayers. The script showcases a GMP example between two networks using the Sygma SDK. The complete example can be found in this [repo](
https://github.com/sygmaprotocol/sygma-sdk/tree/main/examples/evm-to-evm-generic-mesage-passing).

### Prerequisites

Before running the script, ensure that you have the following:

- Node.js installed on your machine
- Yarn (version 3.4.1 or higher)
- Access to an Ethereum provider
- [Sepolia ETH](https://sepolia-faucet.pk910.de/) for gas 

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
   
To call the function on the destination chain contract, `cd` into the example folder `examples/evm-to-evm-fungible-transfer` and run:

```bash
cd examples/evm-to-evm-generic-mesage-passing
yarn run transfer
```

The example will use `ethers` in conjuction with the sygma-sdk to call a function on a smart contract on Goerli by calling the `Deposit` method on Sepolia and passing the details of the function to be called.

Replace the placeholder values in the `.env` file with your own Ethereum wallet private key and provider URL.

