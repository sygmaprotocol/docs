---
slug: /readme/architecture/security/reshare
id: security-reshare
title: Key Resharing
description: The following details the process for key resharing.
sidebar_position: 5
draft: false
---

:::info
The following details the process for key resharing.
:::

Key resharing is an operation that makes multi-party threshold signing truly practical and secure under the realistic dynamic environment. 

This operation allows for both:
- Onboarding new relayers with new private key shares, and 
- Recalibrating threshold requirements 

This is done without the need to change the underlying private key, which is a delicate and expensive procedure.

:::warning
Our observations in the blockchain bridging space reveal that a big portion of vulnerabilities found are exploits of the key resharing mechanism and the lack of well-defined protocols at their implementation. For ECDSA, the well studied resharing protocol was only introduced in the latest revision - [CGGMP21](https://eprint.iacr.org/2021/060). We presume that these vulnerabilities are a result of sharing sensitive key material as well as the operation needing to be repeated regularly.
:::

:::info
By regularly updating private key shares, the resharing mechanism can act as a defense measure from a proactive adversary. Such a key share refresh mechanism aims to prevent an attacker from consecutively compromising relayers and ultimately recovering the full private key.
:::

Similar to the initial keygen operation, resharing can also be triggered by the same governance contract onchain and propagated to the MPC relayers via emitted events. 

However, we note that the resharing protocol requires peer discovery for both new and old relayer subsets to take place before the interactive protocol itself. Hence, onboarding relayers are required to advertise themselves to bootstrapping nodes, while the existing ones must refresh their local address books soon after that specific onchain event has been observed.

Also note that during this procedure, the entire set of new relayers must be active, but only a threshold number of old relayers are required to participate. The interaction flow of the resharing scheme leaves all control in the hands of old committee (relayer) participants. It is this committee that decides with whom they are gonna interact with in order to send cryptographic materials needed to eventually generate key shares. Old committee relayers must identify relayers from the new committee as prescribed by the governance contract state. For this, communication channels are required to be authenticated by the public keys that constitutes to the address stored onchain.

## Flow

1. Party starts a relayer node for the first time
    1. fetches public parameters from `Bridge.sol`
    2. connects to bootstrapping nodes to discover other peers address
    3. advertises itself to the rest of the network
    4. go through Setup steps
2. Admin checks whether new party is online and calls `adminAddRelayer()` of `Bridge.sol` which ends emitting `RelayerAdded` event
3. All relayers including new ones initiate `Reshare` protocol
  ![](<../../../static/assets/keyshare_flow.png>)
