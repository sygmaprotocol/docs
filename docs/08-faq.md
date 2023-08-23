---
title: FAQs
description: The following section contains frequently asked questions about Sygma
---

## FAQs

### General
1. **Is there a token for Sygma?**  
  We have no plans for a Sygma token. Please be aware of scams and impersonators that suggest otherwise. 

2. **Where can I find help if I have further questions?**  
  You can join our [Discord](https://discord.gg/Qdf6GyNB5J) and ask in any of our support-related channels. Our engineers are generally very responsive to technical queries, and someone will usually be on-call to answer more general questions.

3. **Do you have any live integrations?**  
  We are live on Phala's [SubBridge](https://subbridge.io), allowing **native** token transfers between Ethereum's Mainnet and Phala/Khala. Additionally, with Polkadot's capability for [Cross-Consensus Messaging (XCM)](https://wiki.polkadot.network/docs/learn-xcm) between parachains, users can bridge in and out of [Astar Network](https://astar.network).

4. **How can I make contributions to Sygma?**
  You can submit an application to our [Contributor's Program](https://buildwithsygma.com/contributors) or [Builder's Program](https://buildwithsygma.com/builders-program). We're also eager for developers to jump into our [GitHub](https://github.com/sygmaprotocol) and help test our code and submit issues. Even small contributions, whether that's to our [Discord](https://discord.gg/Qdf6GyNB5J) or to our [documentation](https://docs.buildwithsygma.com) helps tremendously. Make sure to check out our [Contribute](09-contribute.md) page.

### Support
5. **Is my ecosystem/blockchain/token supported?**  
  Sygma is currently built to support EVM and Substrate-based chains. Our [Solidity contracts](https://github.com/sygmaprotocol/sygma-solidity) and [custom-built pallets](https://github.com/sygmaprotocol/sygma-substrate-pallets) can be adapted to most ecosystems built in these environments, whether that's mainnet Ethereum, an EVM L2, a Polkadot/Kusama parachain, or a standalone Substrate chain.

  If your ecosystem/blockchain/token is not supported (e.g. Tendermint), support could be provided in the near-future. It depends on engineering resources and network demand. If you would like to move ahead with an engineering/product consultation, please reach out to [requests@buildwithsygma.com](mailto:requests@buildwithsygma.com).

6. **Can I add my own networks/tokens?**  
  The addition of new networks and tokens to the Sygma protocol is currently a permissioned process that must go through [requests@buildwithsygma.com](mailto:requests@buildwithsygma.com). Engineering is already well underway to enable permissionless additions of networks and tokens by the end of 2023.

7. **Can you build an integration for my project?**  
  It depends. Please take a look at our documentation for [Adding A New Token](04-ecosystem/01-new-token.md) and [Adding A New Network](04-ecosystem/02-new-network.md) and reach out to [requests@buildwithsygma.com](mailto:requests@buildwithsygma.com) when you or your team is ready.

<!-- 9. Is it expensive to bridge with Sygma?
WIP-->

### Protocol
8. **Is the Sygma protocol decentralized?**  
  In its current state, the Sygma protocol operates under a trusted federation bridging model using a set of off-chain relayers. Research and engineering is already well underway to enable a decentralized and trustless Sygma bridging protocol, which includes governance of the respective governance controls. 

9. **Who are the relayers and what do they do?**  
  The Sygma protocol relies on a network of trusted off-chain operators that listen for events on a source chain, and "relay" these events to a destination chain through a cryptographic primitive called [secure multi-party computation](https://blog.buildwithsygma.com/multi-party-computation/). You can find a list of our relaying partners in [Becoming A Relayer Partner](04-ecosystem/03-relayer-partner.md).

<!--9. How are relayers selected? 
WIP-->

10. **What happens when a relayer entity drops off?**
This would be handled by Sygma's "key reshare" sub-protocol. The "Key Reshare" mechanism allows parties from the old set to rotate key shares with new participants without changing the underlying public/private key. This is useful for onboarding new members into the signing committee, recalibrating threshold requirements, and more importantly preventing hackers from corrupting parties one after another, potentially in the course of many sessions (known as proactive adversaries).

11. **What are the mechanisms for token bridging? Are bridged tokens wrapped or synthetic assets?**  
  Depending on the integration of the specific token route, bridged tokens will follow either a lock/release (1:1 backed, wrapped asset) mechanism or a burn/mint (synthetic asset) mechanism.

12.  **How is Sygma currently secured?**  
  The Sygma protocol currently uses secure multi-party computation (MPC) and threshold signature schemes (TSS) to strengthen security and communication within the relayer network. Furthermore, there is ongoing efforts underway to implement optimistic, trust-minimized cross-chain block header oracles (see [Introducing Zipline Casper](https://blog.chainsafe.io/introducing-zipline-casper-6fb6dce44992)), as well as a ZK-based block header oracle to provide selectable security for different bridging use-cases.

<!--### Substrate 
Does Sygma require an EVM pallet to work?-->
