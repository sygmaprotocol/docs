---
slug: /sdk/quickstart/transfertoken
id: quickstart-transfertoken
title: EVM token transfers
description: The following section details how to perform a cross-chain token transfer.
sidebar_position: 2
draft: true
---

Transferring a token with `Sygma SDK` is very straigthforward. You need to build the transfer object to pass it to your signer to send the transaction.

```ts
async function buildTransfer(
  wallet: Wallet,
  from: Domain,
  to: Domain,
  resource: Resource,
  recipient: string,
  amount: string
): Promise<Transfer<Fungible>> {
  return {
    sender: await wallet.getAddress(),
    amount: {
      amount,
    },
    from,
    to,
    resource,
    recipient,
  };
};
// use the function
const transfer = await buildTransfer(wallet, from ,to, resource, recipient, amount);
```

You will also need to get the current `fee`. For this is as simple as doing the following:

```ts
const assetTransfer = new EVMAssetTransfer();
await assetTransfer.init(provider, Environment.DEVNET);
const fee = await assetTransfer.getFee()
```

You can check if approvals are required for your transfer. If this is the case and you already have the `fee`, you can sign the transaction and send it.

```ts
  const approvals = await assetTransfer.buildApprovals(transfer, fee);
  if (approvals.len > 0) {
    const transferTransaction = await assetTransfer.buildTransferTransaction(
      transfer,
      fee
    );
    const response = await wallet.sendTransaction(
      transferTx as providers.TransactionRequest
    );
  }
```

Thats it! Your `response` object will have the `hash` property that you can use to query a block explorer and check the transaction

```ts
console.log(`Transfer sent with hash: ${response.hash}`)
```

For a fully detailed examples, jump to the next sections to have a better grasp on how to use the SDK
