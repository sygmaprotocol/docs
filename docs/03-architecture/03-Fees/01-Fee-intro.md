---
slug: /architecture/Fee-intro
id: architecture-Fee-intro
title: Fee Strategies
description: The following details how fees are handled by Sygma.
sidebar_position: 1
---

:::info
The following section details how fees are handled by Sygma.
:::

Sygma allows granular control of handling fees for any resource (ERC-20, ERC-721, GMP) that can be bridged from one network to another. Even though specific implementations will differ based on chain architecture (e.g. EVM or Substrate), general functionality of fees will work the same across implementations. 

Each resource is assigned a **fee strategy** for every potential destination network (i.e. domain), where the mapping between the fee strategy and the domain outlines all potential bridging routes for a given resource.

The Sygma protocol allows for two fee strategies:
- **Basic fee strategy**
- **Dynamic fee strategy**

Fee strategy defines a set of rules on how fees should be charged when executing deposits on the source chain.

![](../../../static/assets/fee-router-general.png)