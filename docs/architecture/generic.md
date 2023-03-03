---
description: The following details how Generic message passing is handled by Sygma.
---

# Generic message passing

 Sygma allows developers to exchange arbitrary data between networks, we call this Generic Message Passing or GMP. Sygma allows developers to use GMP in permissionless manner and call any smart contract as well as initiate call from any contract. 

![Sygma GMP](../../static/assets/gmp.png)

**Glossary:**

- **data**: encoded data passed as an argument on a deposit function call - holds all information on cross-chain call
    - **metadata depositor**: address that executed deposit on source chain (this address is validated when executing deposit on source chain). First 32 bytes of metadata.
    - **execution data**: arbitrary data being passed as an argument when calling the receiving contract on the destination chain.
    - **metadata**: metadata depositor + execution data
- **receiving contract**: a contract that is being called on the destination chain when executing the cross-chain call
- **receiving function**: function of the **receiving contract** that is called on the destination chain
- **source contract**: a contract that invoked deposit on source chain (in this case, address contract would be metadata depositor). The deposit function can also be called by a specific user; in this case, there is no source contract, but the user address is a metadata depositor.

## Usage guide

On the source network EOA or contract can call [deposit function](https://github.com/sygmaprotocol/sygma-solidity/blob/master/contracts/Bridge.sol#L259).

`calldata data` is necessary execution information on destination chain and should follow next format

```
len(metaData):             uint256                        bytes 0   - 32
executeFuntionSignature:   bytes4    padded to 32 bytes   bytes 32  - 64
executeContractAddress     address   padded to 32 bytes   bytes 64  - 96
maxFee:                    uint256                        bytes 96  - 128
------------------------- metaData -------------------------
metadataDepositor:         address   padded to 32 bytes   bytes 128 - 160
executionData:             bytes               
```
On the source netowrk Bridge contract checks that metadataDepositor == msg.sender, hence this allow destination network contract to authorise the call.

The only interface that  developers should follow is the signature of **receiving function** it should always has first param to be an address of metadataDepositor

```solidity
function recieveExecutionFromSygma(bytes32 metadataDepositor, arg2, arg3)
```

## Fees
Currently we support only **BasicFeeHandler** for GMP, which means that you would need to transfer specified amount of base currency along with deposit request. 
 
