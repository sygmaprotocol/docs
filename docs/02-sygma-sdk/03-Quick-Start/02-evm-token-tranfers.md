---
slug: /sdk/quickstart/transfertoken
id: quickstart-transfertoken
title: EVM Token Transfers
description: The following section details how to perform a cross-chain token transfer.
sidebar_position: 2
draft: false
---

#### Build The Transfer Object

Transferring a token with the `Sygma SDK` is very straightforward. You will need to build the transfer object first, which is then passed onto the signer to send the transaction.

```ts
// Declares the 'buildTransfer' function which accepts six parameters
async function buildTransfer(
  wallet: Wallet,
  from: Domain,
  to: Domain,
  resource: Resource,
  recipient: string,
  amount: string
): Promise<Transfer<Fungible>> {
  
  // Returns an object containing the details for the transfer
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
// Call 'buildTransfer' function with the appropriate parameters and stores the object in `transfer`
const transfer = await buildTransfer(wallet, from ,to, resource, recipient, amount);
```

#### Get Fee

You will need to obtain the current transaction `fee` through the `getFee` method.

```ts
// Create a new instance of EVMAssetTransfer
const assetTransfer = new EVMAssetTransfer();

// Initialize the instance with the desired provider and network environment
// In this case, we're using the provider variable and the DEVNET environment
await assetTransfer.init(provider, Environment.DEVNET);

// Call the getFee method on the instance to get the current fee
const fee = await assetTransfer.getFee();
```

#### Check Approvals 

You can check if approvals are required for your transfer. If there are approvals required for the transfer and the `fee` has been obtained, you can sign the transaction and send it.

```ts
// Build approvals given the `transfer` and `fee` parameters
  const approvals = await assetTransfer.buildApprovals(transfer, fee);

// Check if approvals are needed
if (approvals.length) {
  for (const approval of approvals) {
    const signedApproval = await wallet.signMessage(approval);
    const tx = await provider.sendTransaction(signedApproval);
    await tx.wait();
  }

  // Build the transfer transaction
  const transferTransaction = await assetTransfer.buildTransferTransaction(
    transfer,
    fee,
  );
  // Send the transaction using the wallet
  const response = await wallet.sendTransaction(
    transferTx as providers.TransactionRequest,
  );
}
```

#### Check Transaction Hash

The `response` object returned by the `sendTransaction` method contains a `hash` property. This transaction hash is logged to the console, and it can be used to look up the transaction on a block explorer.

```ts
// Print the transaction hash
console.log(`Transfer sent with hash: ${response.hash}`)
```

For detailed examples, jump ahead to the next few sections to have a better grasp on how to use the SDK.
