---
description: The following details how relayers are defined and managed by Sygma.
---

# Relayers

_Relayers are entities that ensure bridge decentralization and execute asset bridging._

At the core of Sygma exists a **set of relayers** that are distributed among several legal entities and operate under a trusted federation model. Spreading the relayer set across several legal entities creates a distribution of responsibilities and mitigates risk by disincentivizing relayers in the set to act in an unfair manner.

Each relayer within the set listens to both the source and destination chains that are being bridged by Sygma. Based on events that are emitted, these relayers then execute relevant actions. To ensure full integrity of the relayer set, each relayer must be registered on the Bridge contract by the bridge administrator.

This multi-relayer set is responsible for relaying messages from a source network to a destination network. Relayers are operating with private key share and execution happens on the destination network with [MPC](mpc.md) private key.&#x20;

Communication between relayer parties happens in a [p2p](https://en.wikipedia.org/wiki/Peer-to-peer) manner; and participants of [p2p](https://en.wikipedia.org/wiki/Peer-to-peer) and [MPC](mpc.md) communication are strictly defined by a configuration file this allows us to prevent [Sybil Attacks](https://en.wikipedia.org/wiki/Sybil\_attack).
