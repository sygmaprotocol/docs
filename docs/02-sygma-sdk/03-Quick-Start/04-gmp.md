---
slug: /sdk/quickstart/gmp
id: quickstart-gmp
title: Generic Message Passing (GMP)
description: The following section details how to perform GMP transfers.
sidebar_position: 4
draft: false
---

:::info
In the examples below `Ethers` v5 was used. If you were to use v6, keep in mind the differences between versions.
:::

### Transferring a message between EVM chains

Generic messages can be transferred between EVM chains, using the Sygma SDK.

To facilitate the transfer, the following steps are required:

1. Create an instance of the `EVMGenericMessageTransfer` object and initialize it.
2. Determine the fee for the transfer, using the  `EVMGenericMessageTransfer.getFee()` method
3. Prepare, sign, and send the Transfer transaction to the Source network node

The `executeDeposit` function prepares and populates a deposit transaction. The key parameter is `depositData`, which is a string requiring a specific format. Refer to the [Generic Message Passing](../../03-architecture/06-generic.md) documentation for instructions on how to format the `depositData` string correctly.

There are a few requirements for the Destination chain contract function that gets called. Refer to the [Generic Message Passing](../../03-architecture/06-generic.md) documentation for details.

#### 1. Initialize the EvmAssetTransfer object

To initialize the generic message transfer object, the following parameters need to be supplied:

- An instance of Ethers provider
- The environment in which the bridge should function

```ts
const genericMessageTransfer = new EVMGenericMessageTransfer();

const provider = new JsonRpcProvider("https://URL-TO-YOUR-RPC")

await genericMessageTransfer.init(
  provider,
  Environment.TESTNET
);
```

#### 2. Get fee

To facilitate the transfer of a generic message, a fee must be paid. This fee can be determined by utilizing the `genericMessageTransfer.GetFee(transfer)` method. You will need to know the destination ChainID as well as the ResourceID that has been configured on the bridge. These details can be determined by inspecting the configurations of the bridge (see [here](https://docs.buildwithsygma.com/environments))


```ts
const wallet = new Wallet(
  "YOUR PRIVATE KEY",
  provider
);

const transfer = genericMessageTransfer.createGenericMessageTransfer(
  await wallet.getAddress(),
  DESTINATION_CHAINID,
  RESOURCE_ID,
  DESTINATION_CONTRACT_ADDRESS,
  DESTINATION_FUNCTION_SIGNATURE,
  EXECUTION_DATA,
  MAX_FEE
)

const fee = await genericMessageTransfer.getFee(transfer);
```
### 3. Prepare, sign, and send the Transfer transaction to the Source network node

```ts
const transferTransaction = await genericMessageTransfer.buildTransferTransaction(
  transfer,
  fee,
);

// Send the transaction using the wallet
const transferTxResponse = await wallet.sendTransaction(
  transferTransaction as providers.TransactionRequest,
);
```

A full example of the above can be found [here](https://github.com/sygmaprotocol/sygma-sdk/blob/main/examples/evm-to-evm-generic-mesage-passing/src/transfer.ts)