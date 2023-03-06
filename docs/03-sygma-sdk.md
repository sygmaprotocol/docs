---
title: Sygma SDK
sidebar_position: 3
description: >-
  A JS SDK that allows users to inject the Sygma UI functionality into an
  existing application. Designed to help developers build their own solutions in
  the Sygma ecosystem.
---

:::info
  A JS SDK that allows users to inject the Sygma UI functionality into an
  existing application. Designed to help developers build their own solutions in
  the Sygma ecosystem.
:::

:::tip
The Sygma SDK documentation can also be found in the [Sygma-SDK README](https://github.com/sygmaprotocol/sygma-sdk/blob/main/README.md).
:::

## Introduction

**Sygma SDK** is an OpenSource (under GNU Lesser General Public License v3.0) library for developers to work with Sygma. The SDK consist of methods that enable bridging capabilities between Ethereum networks.

**NOTE:** the SDK is under an active development, as such you may experience inconsistencies until we have a stable release. We encourage you to [submit issues](https://github.com/sygmaprotocol/sygma-sdk/issues) should you discover any bugs.

The current SDK has one package that comprises the whole bridging logic for transferring ERC20 tokens between Ethereum networks. Alongside this there are [examples](#running-the-examples) that demonstrate the usage of our SDK. If you want to run the examples alongside our bridging infrastructure, please make sure you have the [sygma-relayer ](https://github.com/sygmaprotocol/sygma-relayer)software installed in order for you to run the `make local-setup` command.

### Useful commands

After cloning the repo, simply run:

```
npx lerna bootstrap
```

### Running the Examples

For a React example, after you have run and deployed the contracts using the [sygma-relayer](https://github.com/sygmaprotocol/sygma-relayer), drop into the `examples` directory and run:

```
yarn start
```

For a Node.js example, simply run:

```
yarn run:local-ex
```

## How to Use

### Environment

In order to use our SDK, the [sygma-relayer](https://github.com/sygmaprotocol/sygma-relayer) must be installed on your local machine. The main dependency to run the [sygma-relayer](https://github.com/sygmaprotocol/sygma-relayer) is to have [Go](https://go.dev/) installed on your machine. After that, follow the instructions to run the local example. It will take a couple of minutes for all the setup to be completed.&#x20;

If you want to check the logs of the deployed contracts you can do the following:

```
# inside the root directory of chainbrdige-hub
cd example
docker-compose -f ./docker-compose.yml logs setup
```

You should see something like this:

```
setup       | ===============================================
setup       | 🎉🎉🎉 Sygma Successfully Deployed 🎉🎉🎉
setup       |
setup       | - Chain 1 -
setup       | Bridge: 0xd606A00c1A39dA53EA7Bb3Ab570BBE40b156EB66
setup       | Fee Handler: 0x08CFcF164dc2C4AB1E0966F236E87F913DE77b69 (is basic fee handler: true, fee amount: 100000000000 wei)
setup       | ERC20: 0xb83065680e6AEc805774d8545516dF4e936F0dC0
setup       | ERC20 Handler: 0x3cA3808176Ad060Ad80c4e08F30d85973Ef1d99e
setup       | ERC721: 0x05C5AFACf64A6082D4933752FfB447AED63581b1
setup       | ERC721 Handler: 0x75dF75bcdCa8eA2360c562b4aaDBAF3dfAf5b19b
setup       | Generic Handler: 0xe1588E2c6a002AE93AeD325A910Ed30961874109
setup       | Asset Store: 0x7573B1c6de00a73e98CDac5Cd2c4a252BdC87600
setup       | ERC20 resourceId:
setup       | ERC721 resourceId:
setup       | Generic resourceId:
setup       |
setup       | - Chain 2 -
setup       | Bridge: 0xd606A00c1A39dA53EA7Bb3Ab570BBE40b156EB66
setup       | Fee Handler: 0x08CFcF164dc2C4AB1E0966F236E87F913DE77b69 (is basic fee handler: true, fee amount: 100000000000 wei)
setup       | ERC20: 0xb83065680e6AEc805774d8545516dF4e936F0dC0
setup       | ERC20 Handler: 0x3cA3808176Ad060Ad80c4e08F30d85973Ef1d99e
setup       | ERC721: 0x05C5AFACf64A6082D4933752FfB447AED63581b1
setup       | ERC721 Handler: 0x75dF75bcdCa8eA2360c562b4aaDBAF3dfAf5b19b
setup       | Generic Handler: 0xe1588E2c6a002AE93AeD325A910Ed30961874109
setup       | Asset Store: 0x7573B1c6de00a73e98CDac5Cd2c4a252BdC87600
setup       | ERC20 resourceId:
setup       | ERC721 resourceId:
setup       | Generic resourceId:
setup       |
setup       | ===============================================
```

With this addresses you can use our SDK with the `basic fee` setup.

After that, you can watch the logs and see your funds being transferred from one network to the other.

### Checking the Examples folder

There is a directory with examples ready to be used for the SDK. We have two working examples to choose from for getting started locally:

1. [How to Use From Node.js](#how-to-use-from-nodejs)
2. [How to Use In a Browser](#how-to-use-in-browser)

### How to Use From Node.js

Assuming you are going to use the local setup provider by the [sygma-relayer](https://github.com/sygmaprotocol/sygma-relayer), the setup that you need to pass to the `Sygma` class will have the following structure:

```
import { Sygma } from "@chainsafe/sygma-sdk-core";

const bridgeSetup: BridgeData = {
  chain1: {
      bridgeAddress: "0xd606A00c1A39dA53EA7Bb3Ab570BBE40b156EB66",
      erc20Address: "0xb83065680e6AEc805774d8545516dF4e936F0dC0",
      erc20HandlerAddress: "0x3cA3808176Ad060Ad80c4e08F30d85973Ef1d99e",
      feeHandlerAddress: "0x08CFcF164dc2C4AB1E0966F236E87F913DE77b69",
      rpcURL: "http://localhost:8545",
      domainId: "1",
      erc20ResourceID:
        "0x0000000000000000000000000000000000000000000000000000000000000000",
      decimals: 18
    },
    chain2: {
      bridgeAddress: "0xd606A00c1A39dA53EA7Bb3Ab570BBE40b156EB66",
      erc20Address: "0xb83065680e6AEc805774d8545516dF4e936F0dC0",
      erc20HandlerAddress: "0x3cA3808176Ad060Ad80c4e08F30d85973Ef1d99e",
      feeHandlerAddress: "0x08CFcF164dc2C4AB1E0966F236E87F913DE77b69",
      rpcURL: "http://localhost:8547",
      domainId: "2",
      erc20ResourceID:
        "0x0000000000000000000000000000000000000000000000000000000000000000",
      decimals: 18
    },
}
```

We are going to use the SDK with `Node.js` alongside one of the testing accounts from the local setup:

```
 const testAcc = "0xF4314cb9046bECe6AA54bb9533155434d0c76909";
```

Then we create a `setup` object to pass into the `Sygma` class:

```
const setup = { bridgeSetup }

const sygma = new Sygma(setup)
```

Now we are ready to initialize connection:

```
const bridgeEvents = sygma.initializeConnectionRPC(testAcc)
```

With this we can get the basic Fee rate to use in our first deposit:

```
const basicFeeRate = await sygma.fetchFeeData({
  amount: "1",
  recipientAddress: "0xF4314cb9046bECe6AA54bb9533155434d0c76909",
  from: "chain1",
  to: "chain2"
})
```

Once this is complete, we can approve the amount of tokens to transfer before we make the deposit:

```
const approvalTxReceipt = await (await sygma.approve({
  amountForApproval: "1",
  from: "chain1"
})).wait(1)

const deposit = await sygma.deposit({
  amount: "1",
  recipientAddress: "0xF4314cb9046bECe6AA54bb9533155434d0c76909",
  from: "chain1",
  to: "chain2",
  feeData: basicFee.feeData
})

const txReceipt = await deposit.wait(1)
```

### How to Use In a Browser

For usage in the browser with our local setup, provide the same bridge config that you used for the Node.js context:

```
import { Sygma } from "@chainsafe/sygma-sdk-core";

type LocalData = {
  balance: BigNumber;
  address: string;
  gasPrice: BigNumber;
  balanceOfTokens: BigNumber;
  tokenName: string;
};

const bridgeSetup: BridgeData = {
  chain1: {
      bridgeAddress: "0xd606A00c1A39dA53EA7Bb3Ab570BBE40b156EB66",
      erc20Address: "0xb83065680e6AEc805774d8545516dF4e936F0dC0",
      erc20HandlerAddress: "0x3cA3808176Ad060Ad80c4e08F30d85973Ef1d99e",
      feeHandlerAddress: "0x08CFcF164dc2C4AB1E0966F236E87F913DE77b69",
      rpcURL: "http://localhost:8545",
      domainId: "1",
      erc20ResourceID:
        "0x0000000000000000000000000000000000000000000000000000000000000000",
      decimals: 18
    },
    chain2: {
      bridgeAddress: "0xd606A00c1A39dA53EA7Bb3Ab570BBE40b156EB66",
      erc20Address: "0xb83065680e6AEc805774d8545516dF4e936F0dC0",
      erc20HandlerAddress: "0x3cA3808176Ad060Ad80c4e08F30d85973Ef1d99e",
      feeHandlerAddress: "0x08CFcF164dc2C4AB1E0966F236E87F913DE77b69",
      rpcURL: "http://localhost:8547",
      domainId: "2",
      erc20ResourceID:
        "0x0000000000000000000000000000000000000000000000000000000000000000",
      decimals: 18
    },
}
```

Then, inside your App, create some state variables and functions to get the account data from your wallet (in this example, the wallet is `Metamask`)

```
function App(){
  const [bridge, setBridge] = useState<SetStateAction<any | undefined>>(undefined)

  const [logicConnected, setLogicConnected] = useState<SetStateAction<boolean>>(
    false
  );

  const [sygmaInstance, setSygmaInstance] = useState<
    SetStateAction<Sygma | undefined>
  >(undefined);

  const getAccountData = async (sygma: Sygma) => {
    try {
      const balance =
        (await sygma.getSignerBalance("chain1")) ?? BigNumber.from("0");
      const address = await sygma.getSignerAddress("chain1");
      const gasPrice = await sygma.getSignerGasPrice("chain1");
      const { balanceOfTokens, tokenName } = await sygma.getTokenInfo(
        "chain1"
      );

      setAccountData({
        balance: balance!,
        address: address!,
        gasPrice: gasPrice!,
        balanceOfTokens: balanceOfTokens!,
        tokenName: tokenName!,
      });
      setIsReady(true);
    } catch (e) {
      console.log(e);
      console.log("Perhaps you forget to deploy the bridge?")
    }
  };

  useEffect(() => {
    if (data !== undefined && sygmaInstance !== undefined) {
      getAccountData(sygmaInstance! as Sygma);
      setBridge((sygmaInstance! as Sygma).bridges!['chain2'])
    }
  }, [data, logicConnected]);

  useEffect(() => {
    console.log(metaIsConnected, data);
    if (metaIsConnected && sygmaInstance !== undefined) {
      handleConnect();
      getAccountData(sygmaInstance! as Sygma);
    }
  }, [metaIsConnected]);

}
```

If you are using `Metamask`, you can create a function to trigger the connection to the extension and at the same time instantiate the `Sygma` SDK:

```
// in the App component, below the last useEffect

const handleConnect = () => {
    // IF META IS NOT SIGNIN, TRIGGER POP OF THE WINDOW FOR THE EXTENSION
    if (!metaIsConnected) {
      return window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((r: any) => {
          const [addr] = r;
          setMetaIsConnected(true);
          setAccountData({
            ...(accountData as LocalData),
            address: addr,
          });
        })
        .catch((error: any) => {
          if (error.code === 4001) {
            // EIP-1193 userRejectedRequest error
            console.log("Please connect to MetaMask.");
          } else {
            console.error(error);
          }
        });
    } else if (metaIsConnected) {
      const setup = { bridgeSetup };
      const sygma = new Sygma(setup);

      setSygmaInstance(sygma);

      const data = sygma.initializeConnectionFromWeb3Provider(window.ethereum);

      setData(data);
      setLogicConnected(true);
    }
```

To listen to the deposit events on the home network:

```
// initialization of Sygma class
// ...
sygmaInstance.createHomeChainDepositEventListener((
  destinationDomainId: any,
  resourceId: any,
  depositNonce: any,
  user: any,
  data: any,
  handleResponse: any,
  tx: any
) => {
  console.log(
    `bride deposit event deposit nonce: ${depositNonce.toString()} to contract with ResourceId: ${resourceId}`
  );
  console.log(` transaction hash: ${tx.transactionHash}`);
  console.info("Deposit in transit!");
});
```

To remove the deposit events listener:

```
// initialization of Sygma class
// sygmaInstance.createHomeChainDepositEventListener(...)
// ...
sygmaInstance.removeHomeChainDepositEventListener()
```

To listen for execution events on the destination network:

```
// initialization of Sygma class
// ...
sygmaInstance.destinationProposalExecutionEventListener((
  originDomainId: any,
  despositNonce: any,
  dataHash: any,
  tx: any
) => {
  console.warn("Proposal execution event!")
  console.log({originDomainId, despositNonce, dataHash, tx} )
  console.warn("Transfer complete!")
});
```

To remove the execution events listener:

```
// initialization of Sygma class
// sygmaInstance.createHomeChainDepositEventListener(...)
// ...
sygmaInstance.removeDestinationProposalExecutionEventListener()
```

With this you can use our SDK and create the render logic to show your tokens and list which networks the bridge supports.&#x20;

### Support

[![discord](https://camo.githubusercontent.com/109ba8fa0d4c37cded801188bf2ea4f994518caee7eeb645a99b33385f47cb38/68747470733a2f2f696d672e736869656c64732e696f2f646973636f72642f3539333635353337343436393636303637333f6c6162656c3d446973636f7264266c6f676f3d646973636f7264267374796c653d666c6174)](https://discord.gg/7zmy3J3as5)

### License

GNU Lesser General Public License v3.0
