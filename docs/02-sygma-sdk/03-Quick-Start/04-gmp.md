---
slug: /sdk/quickstart/gmp
id: quickstart-gmp
title: Generic Message Passing (GMP)
description: The following section details how to perform GMP.
sidebar_position: 4
draft: true
---

To utilize the `generic message passing` capability of the `Sygma SDK`, you will need to employ the `executeDeposit` function. This function is housed within the `depositFns.ts` file.

The `executeDeposit` function prepares and populates a deposit transaction. The key parameter is `depositData`, which is a string requiring a specific format. Refer to the [Generic Message Passing](../../03-architecture/06-generic.md) documentation for instructions on how to format the `depositData` string correctly.

```ts
// Prepares a deposit transaction which accepts the six parameters
export const executeDeposit = async (
  // domainID refers to the specific blockchain or network
  domainID: string,
  // resourceID is a unique identifier for the specific type of asset or token
  resourceID: string,
  // depositData holds the specially-formatted data necessary for the deposit transaction
  depositData: string,
  // feeData contains information about the transaction fee
  feeData: EvmFee,
  // bridgeInstance is an instance of the Bridge class providing methods for interacting with the Sygma bridge
  bridgeInstance: Bridge,
  // overrides is an optional parameter that can contain any optional overrides for the transaction
  overrides?: ethers.PayableOverrides,
): Promise<PopulatedTransaction> => {
  // Define the settings for the transaction
  // If the fee type is BASIC, use the fee data as the value; otherwise, don't set a value
  // Set a gas limit for the asset transfer
  const transactionSettings = {
    value: feeData.type === FeeHandlerType.BASIC ? feeData.fee : undefined,
    gasLimit: ASSET_TRANSFER_GAS_LIMIT,
  };

// Combine the transaction settings and any overrides into a single object
  const payableOverrides = {
    ...transactionSettings,
    ...overrides,
  };

  // Prepare a transaction with the deposit method of the bridge instance, passing in the parameters
  const tx = await bridgeInstance.populateTransaction.deposit(
    domainID,
    resourceID,
    depositData,
    feeData.feeData ? feeData.feeData : '0x0',
    payableOverrides,
  );

   // Return the prepared transaction, ready to be signed and broadcasted to the network
  return tx;
};
```