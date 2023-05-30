---
slug: /sdk/quickstart/gmp
id: quickstart-gmp
title: Generic Message Passing (GMP)
description: The following section details how to perform GMP.
sidebar_position: 4
draft: true
---

If you want to use `Sygma general message passing` with our `SDK` you will need to import our `exsecuteDeposit` function from our `depositFns.ts` file. Shortly, this function is defined as follow:

```ts
export const executeDeposit = async (
  domainId: string,
  resourceId: string,
  depositData: string,
  feeData: EvmFee,
  bridgeInstance: Bridge,
  overrides?: ethers.PayableOverrides,
): Promise<PopulatedTransaction> => {
  const transactionSettings = {
    value: feeData.type === FeeHandlerType.BASIC ? feeData.fee : undefined,
    gasLimit: ASSET_TRANSFER_GAS_LIMIT,
  };

  const payableOverrides = {
    ...transactionSettings,
    ...overrides,
  };
  const tx = await bridgeInstance.populateTransaction.deposit(
    domainId,
    resourceId,
    depositData,
    feeData.feeData ? feeData.feeData : '0x0',
    payableOverrides,
  );
  return tx;
};
```

Where `depositData` is key, since the string has to be formatted in a special way. For reference how to format the deposit data, go to [Generic Message Passing](../../03-architecture/06-generic.md).