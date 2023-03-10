---
title: Security
description:   The following details how Sygma addresses security concerns relating to various signature schemes.
---

:::info
  The following details how Sygma addresses security concerns relating to
  various signature schemes.
:::

**Threshold Signature Schemes (TSS)** is an area of [MPC](./mpc) that is particularly useful for the crypto domain as it facilitates the distribution of a private key to multiple parties, introducing redundancy for assets management security.&#x20;

In other words, it enables a set of parties to perform certain cryptographic operations, like signing transactions, while none of them hold a full private key. Instead, the key is split across the parties, and it can only be used only when a subset of those parties — the size of which is larger than a certain threshold— combines their key shares.

When talking about security, [MPC](./mpc) algorithms generally provide guarantees based on the threshold number of corrupted parties a system can tolerate. This places TSS in a unique position, as such schemes place control of their robustness directly in the hands of their developers. Furthermore, this allows the system to withstand even a dishonest majority — an extreme state where adversaries can corrupt up to all but one participant.

Instead of relying on [Multisigs](https://en.wikipedia.org/wiki/Multisignature) or other, older ways of key management that either expose [relayer](./relayers) identities or introduce easily exploitable single points-of-failure, [relayers](./relayers) for Sygma run a secure [MPC](./mpc) ceremony each time a user wishes to bridge funds or transfer arbitrary data.&#x20;

While designing Sygma, we were convinced that having [MPC](./mpc) for [relayer](./relayers) communication would not only strengthen the overall security of the system but would also significantly reduce fees for the users making the experience much more appealing.
