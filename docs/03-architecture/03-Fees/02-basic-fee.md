---
slug: /architecture/basic
id: architecture-basic
title: Basic Fee Strategy
description: The following section details how basic fee strategies work in Sygma.
sidebar_position: 2
---

:::info
The following section details how basic fee strategies work in Sygma.
:::

The Basic Fee strategy always requires a predefined static fee amount per deposit. It can only collect fees in the native currency (e.g. ETH, MATIC) of the source chain.

The diagram below shows the flow for basic fee strategies, beginning with the Sygma SDK, which initiates the interaction for all services:

![](../../../static/assets/static-fee-general.png)

### Deposit flow
1. Calculate the final fee
     - Based on `resourceID` and `domainID`, request a final fee amount that will be required to execute the deposit.
2. Execute deposit
     - Send the appropriate base currency amount based on the calculated final fee when executing the deposit.