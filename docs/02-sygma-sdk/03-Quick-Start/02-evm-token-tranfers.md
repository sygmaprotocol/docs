---
slug: /sdk/quickstart/transfertoken
id: quickstart-transfertoken
title: EVM Token Transfers
description: The following section details how to perform a cross-chain token transfer.
sidebar_position: 2
draft: false
---

### Transferring a fungible asset between EVM chains

Transferring assets between EVM-based chains can be achieved using the Sygma SDK.

To facilitate the transfer, the following steps are required:

1. Create an instance of the EvmAssetTransfer object and initialize it.
2. Determine the fee for the transfer, using the EvmAssetTransfer `getFee()` method
3. Check for any approvals required, and if required sign and broadcast these transactions.
4. Prepare, sign, and send the Transfer transaction to the Source network node


#### 1. Initialize the EvmAssetTransfer object

To initialize the asset transfer object, the following parameters need to be supplied:

- An instance of Ethers provider
- The environment in which the bridge should function

```ts
const assetTransfer = new EvmAssetTransfer();

const provider = new JsonRpcProvider("https://URL-TO-YOUR-RPC")

await assetTransfer.init(
  provider,
  Environment.TESTNET
);
```

#### 2. Get fee

To facilitate the transfer of tokens, a fee must be attached. This fee can be determined by utilizing the asset transfer `GetFee(transfer)` method. You will need to know the destination ChainID as well as the ResourceID that has been configured on the bridge. These details can be determined by inspecting the configurations of the bridge (see [here](https://docs.buildwithsygma.com/environments))


```ts
const wallet = new Wallet(
  "YOUR PRIVATE KEY",
  provider
);

const transfer = assetTransfer.createFungibleTransfer(
  await wallet.getAddress(),
  DESTINATION_CHAINID,
  DESTINATION_ADDRESS,
  RESOURCE_ID,
  AMOUNT
)

const fee = await assetTransfer.getFee(transfer);
```

#### 3. Check Approvals 

You can check if approvals are required for your transfer. If there are approvals required for the transfer and the `fee` has been obtained, you can sign the transaction and send it.

```ts
// Build approvals given the `transfer` and `fee` parameters
const approvals = await assetTransfer.buildApprovals(transfer, fee);

// Check if approvals are needed
if (approvals.length) {
  for (const approval of approvals) {
    const approvalTx = await wallet.sendTransaction(approval as providers.TransactionRequest);
    console.log(`Approval TX Hash: ${approvalTx.hash}`)
  }
}

// Build the transfer transaction
const transferTransaction = await assetTransfer.buildTransferTransaction(
  transfer,
  fee,
);

// Send the transaction using the wallet
const transferTxResponse = await wallet.sendTransaction(
  transferTx as providers.TransactionRequest,
);
```

#### Check Transaction Hash

The `response` object returned by the `sendTransaction` method contains a `hash` property. This transaction hash is logged to the console, and it can be used to look up the transaction on a block explorer.

```ts
// Print the transaction hash
console.log(`Transfer sent with hash: ${transferTxResponse.hash}`)
```

A full example of the above can be found [here](https://github.com/sygmaprotocol/sygma-sdk/blob/main/examples/evm-to-evm-fungible-transfer/src/transfer.ts)