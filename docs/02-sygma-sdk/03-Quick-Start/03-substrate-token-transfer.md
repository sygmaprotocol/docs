---
slug: /sdk/quickstart/substrate-token-transfer
id: quickstart-substrate-token-transfer
title: Substrate Token Transfers
description: Section that describes how to transfer token from or to a Substrate network.
sidebar_position: 3
draft: false
---

### Transferring an asset from Substrate to EVM

Transferring assets from Substrate-based chains to EVM-based chains can be achieved using the Sygma SDK.

To facilitate the transfer, the following steps are required:

1. Create an instance of the SubstrateAssetTransfer object and initialize it
2. Determine the fee for the transfer, using the SubstrateAssetTransfer `getFee()` method
3. Prepare, sign, and send the Transfer transaction to the Substrate node

#### 1. Initialize the SubstrateAssetTransfer object

To initialize the asset transfer object, the following parameters need to be supplied:

- An instance of the PolkadotJS ApiPromise object
- The Substrate parachain ID of the source chain
- The environment in which the bridge should function

```ts
// Initialize the instance with the desired PolkadotJS ApiPromise, the source parachain ID
// and network environment. In this case, we're using the API variable and the TESTNET environment.

const assetTransfer = new SubstrateAssetTransfer();

const wsProvider = new WsProvider("wss://URL-TO-YOUR-SUBSTRATE-INSTANCE");

// Create an instance of the PolkadotJS ApiPromise
const api = await ApiPromise.create({ provider: wsProvider });

await assetTransfer.init(
  api,
  SubstrateParachain.ROCOCO_PHALA,
  Environment.TESTNET
);
```

#### 2. Get fee

To facilitate the transfer of tokens, a fee must be attached. This fee can be determined by utilizing the asset transfer `GetFee(transfer)` method. You will need to know the source parachain ID, destination ChainId as well as the ResourceID that has been configured on the bridge. These details can be determined by inspecting the configurations of the bridge.

A helper function, which will generate a correct transfer object, can be implemented as described below:

```ts
const generateFungibleTransfer = (
  assetTransfer: SubstrateAssetTransfer,
  account: KeyRingPair, // Substrate Keyring Pair that will be signing the transaction
  resourceID: string,
  sourceParachainID: number,
  destinationChainID: number
  amount: number // Amount to be transferred
  recipient: string // Address of the recipient on the destination chain
) => {
  const resources = assetTransfer.config.getDomainResources();
  const selectedResource = resources.find(
      (resource) => resource.resourceID == resourceID
  );
  if (!selectedResource) {
      throw new Error("Resource not found");
  }
  const domains = assetTransfer.config.getDomains();
  const sourceDomain = domains.find((domain) => domain.chainID == sourceParachainID);
  if (!sourceDomain) {
    throw new Error("Network Rococo-Phala not supported");
  }
  const destinationDomain = domains.find((domain) => domain.chainID == destinationChainID);
  if (!destinationDomain) {
    throw new Error("Network Sepolia not supported");
  }

  return {
    sender: account.address,
    amount: {
      amount,
    },
    from: rococo,
    to: goerli,
    resource: selectedResource,
    recipient: recipient,
  } as Transfer<Fungible>
}

const keyring = new Keyring({ type: "sr25519" });
await cryptoWaitReady();
const account = keyring.addFromUri(MNEMONIC);

const transfer = generateFungibleTransfer(
  assetTransfer,
  account,
  "0x0000000000000000000000000000000000000000000000000000000000001000",
  SubstrateParachain.ROCOCO_PHALA.valueOf(),
  5
  100
  "0x0000000000000000000000000000000000000000",
)

const fee = await assetTransfer.getFee(transfer);

```

#### Prepare the transfer transaction

Now that the fee has been determined, the transaction to deposit assets into the bridge should be generated, signed, and broadcast to the network.

```ts
// Build the transfer transaction
const transferTransaction = await assetTransfer.buildTransferTransaction(
  transfer,
  fee
);

// Sign and broadcast the transfer transaction
const unsub = await transferTransaction.signAndSend(account, ({ status }) => {
  console.log(`Current status is ${status.toString()}`);
  if (status.isInBlock) {
    console.log(
      `Transaction included at blockHash ${status.asInBlock.toString()}`
    );
  } else if (status.isFinalized) {
    console.log(
      `Transaction finalized at blockHash ${status.asFinalized.toString()}`
    );
    unsub();
  }
});
```
