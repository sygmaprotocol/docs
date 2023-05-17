---
slug: /sdk/introduction
id: sdk-introduction
title: Introduction
description: The following section introduces the Sygma SDK.
sidebar_position: 1
---

## Introduction

**Sygma SDK** is an OpenSource (under GNU Lesser General Public License v3.0) library for developers to work with Sygma. The SDK consist of methods that enable bridging capabilities between Ethereum networks.

**NOTE:** the SDK is under active development, as such you may experience inconsistencies until we have a stable release. We encourage you to [submit issues](https://github.com/sygmaprotocol/sygma-sdk/issues) should you discover any bugs.

The current SDK has one package that comprises the whole bridging logic for transferring ERC20 tokens between Ethereum networks. Alongside this there are [examples](#running-the-examples) that demonstrate the usage of our SDK. If you want to run the examples alongside our bridging infrastructure, please make sure you have the [sygma-relayer](https://github.com/sygmaprotocol/sygma-relayer)software installed in order for you to run the `make local-setup` command.