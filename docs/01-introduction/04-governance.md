---
slug: /readme/governance
title: Governance
description: The following section describes governance of the Sygma protocol.
draft: false
---

## Introduction

We believe that in order to be a trustworthy and reliable backbone for cross-chain applications, Sygma has to be governed in a fair, transparent, and pluralist way. We believe that the cross-chain space can only prosper if the respective protocols are governed by a diverse group of contributors with dedicated measures in place that prevent accumulation of governance power.

We are very mindful about the current tendency in the space to allow large financial institutions and liquidity providers to exercise significant control over infrastructure-type protocols. The Governance-as-Capital ideology has proven to lead to suboptimal and biased governance decisions.

:::note 
See [Cryptonetwork Governance As Capital](https://www.placeholder.vc/blog/2019/2/19/cryptonetwork-governance-as-capital) for an introduction on Governance-as-Capital and [this Uniswap governance vote](https://www.coindesk.com/tech/2023/02/08/contentious-uniswap-vote-highlights-the-opaqueness-of-decentralized-governance/) for an example on what can go wrong.
:::

### Protocol Administration

Administration of the Sygma protocol is currently handled by a consortium of early contributors, and will be extended to other network operators over the coming weeks. The Sygma protocol is currently administered by the following set of multi-signature accounts (Multisigs):

#### Administrative Multisigs 

The admin multisig is a 3-of-5 and includes actions such as:
- Registering resources and routes 
- Withdrawing fees
- Changing fees
- Changing a fee handler

As these actions may have significant financial impact, the admin governance process follows a strict off-chain preparation and review and on-chain review and signing. The admin multisig also covers a set of super administrative privileges, such as pausing the bridge, that is required in order to be able to reduce the impact of security incidents.

#### Community Multisigs

The community multisig is a 4-of-6 and includes one action:
- *adminWithdraw* (withdraw liquidity from the handler)
 
The community multisig is listed at the following Gnosis Safe Proxy contract address [0xc4d8b2F5501C765dE0C5E12550118F397B197D05](https://etherscan.io/address/0xc4d8b2F5501C765dE0C5E12550118F397B197D05), and is currently made up of members from **ChainSafe Systems** and **Phala Network**:

| Name            | Organization      |  
|-----------------|-------------------|
| David Ansermino | ChainSafe Systems |  
| Greg Markou     | ChainSafe Systems |  
| Hatcher Lipton  | ChainSafe Systems |  
| Marvin Tong     | Phala Network     |   
| Wengfeng Wang   | Phala Network     |  
| Hang Yin        | Phala Network     | 

To maintain transparency of the community multisig governance process, all proposals are expected to be defined as a PR inside the Sygma [community multisig execution](https://github.com/sygmaprotocol/community-executions) repo. These proposals, consisting of one (or more) transactions/extrinsics, are expected to be prepared in a predefined format and created as separate files inside the repo.

### Relayer Network Administration

Becoming a relayer in the Sygma network is currently a permissioned process. You can find more information around the current relaying partners as well as how to become a partner in [Becoming A Relayer Partner](../04-ecosystem/03-relayer-partner.md).

### Decentralizing Sygma's Governance

Our vision is that Sygma becomes the ‘Builders' Bridge’. In order to deliver on that vision, we plan to follow a path of gradual decentralization of the protocol. We plan to decentralize in two steps:

1. Governance by Network Operators (Q3/2023)
The goal of this phase is to enable all parties that operate a relayer for Sygma to participate in protocol governance. Every relaying partner that is onboarded to Sygma will participate in the protocol administration as outlined in [Protocol Administration](#protocol-administration) below.

1. Extend Governance to Contributors 
In this phase, we will extend Sygma governance to other contributors such as builders, community members, and projects that have integrated Sygma and contributed to its usage. Furthermore, we aim to make ‘Becoming a Relayer’ a permissionless process enabling anybody to participate in protocol operation and governance.

We are extremely excited about starting conversations around governance with our community soon. Based on those discussions, we plan to announce our roadmap for decentralizing the protocol governance in Q3/2023. 