---
slug: /readme/governance/substratemultisig
id: governance-substrate-multisig
title: Substrate Governance & Multisigs
description: The following section describes the Substrate multisigs administrating the Sygma protocol.
sidebar_position: 3
draft: true
---

## Substrate Protocol Administration

Administration of the Sygma protocol on Substrate is currently handled by a consortium of early contributors, and will be extended to other network operators over the coming weeks. The Sygma protocol on Substrate is currently administered by the following set of multi-signature accounts (Multisigs):

### Administrative Multisigs 

The admin multisig is a 2-of-3 and includes actions such as:
- *registerDomain* (register a new domain as the supported destination domain, along with its ChainID)
- *setFee* (set fee amount for a supported domain and an asset)
- *setFeeHandler* (set Fee handler type for a domain and an asset)
- *pauseBridge, unpauseBridge* (sygmaBridge) - (pause/unpause the bridge of given destination domain)

The admin multisig covers a set of super administrative privileges, such as pausing the bridge, that may be required in order to be able to reduce the impact of security incidents. As these actions may have significant financial impact, the admin governance process follows a strict off-chain preparation/review and on-chain review/signing. 

The Substrate admin multisig is listed at this address <---xxxxx--->, and is currently made up of members from **ChainSafe Systems**.

| Name            | Organization      | Multisig Address                                                                                                      |
| --------------- | ----------------- | --------------------------------------------------------------------------------------------------------------------- |
| David Ansermino | ChainSafe Systems | (42V4JXDnFURLyLxvzFiuBPMCc2toBsrFVWUksG3B3T2vQRca)[https://phala.subscan.io/account/42V4JXDnFURLyLxvzFiuBPMCc2toBsrFVWUksG3B3T2vQRca] |
| Hatcher Lipton  | ChainSafe Systems | (469h6rDAJBVdJLqLY87at3heZXUYvj5ZyxANz1wyKW1RcUTx)[https://phala.subscan.io/account/469h6rDAJBVdJLqLY87at3heZXUYvj5ZyxANz1wyKW1RcUTx] |
| Greg Markou     | ChainSafe Systems | (44WynSrkzJLNo8FBMCuGh1QptKLQHGSJ5YYqEx7RhHaFQJLj)[https://phala.subscan.io/account/44WynSrkzJLNo8FBMCuGh1QptKLQHGSJ5YYqEx7RhHaFQJLj] |

### Substrate Multisigs And Proxy Addresses

**Changing the set of members participating in the Substrate multisig OR the threshold in order for an action to go through requires the dissolution of the current multisig and the creation of a new one.** Due to this characteristic of multisig accounts on Substrate, it's necessary to use [pure proxies](https://wiki.polkadot.network/docs/learn-proxies#anonymous-proxy-pure-proxy) together with the multisig account. The Sygma protocol currently uses ChainSafe's [Multix](https://multix.chainsafe.io) tool to facilitate this process. 

**Utilizing multisig + pure proxy and proxy as AdminAccount**: Neither the multisig address nor its proxy will be embedded into the runtime. Instead, the proxy will be granted permissions by Phala and will be stored in the Access Segregator pallet storage. If there's a need to deploy a new multisig, the link between the old multisig and the pure proxy can be remapped by adding the new multisig to the pure proxy using **Multix**. The old multisig address would then be removed by the new multisig. Since the proxy address remains unchanged, there's no need to upgrade the runtime. Furthermore, we avoid having two accounts with permissions simultaneously. Only the new multisig will have control over the proxy, and the proxy will maintain all of its permissions.

For more details on Multix, see this [demo video](https://www.youtube.com/watch?v=APxPsawebJw). You can also refer to the following Polkadot [documentation](https://wiki.polkadot.network/docs/learn-account-multisig#multisig-with-multix-tool).