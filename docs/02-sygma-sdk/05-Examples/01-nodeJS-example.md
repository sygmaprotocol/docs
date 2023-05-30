---
slug: /sdk/examples/node-js-example
id:  quickstart-nodejs-example
title: Node.js example
description: Section that describes how to transfer token using nodeJS.
sidebar_position: 1
draft: true
---

### Sygma SDK Node.js Example
This example demonstrates how to use the Sygma SDK to transfer ERC20 tokens between two Ethereum networks in a Node.js environment.

### Prerequisites

Before you can use the Sygma SDK, you'll need to have Node.js and npm or yarn installed on your project.

Also you will need to provide an `API_KEY` to initialize the `JsonRpcProvider`. You can use `Infura` or `Alchemy` to get one of those api keys.

Last but not least, export your `private key` from metamask.

:::info
  The following example is going to be written in `typescript`. You can use `CommonJS` with our SDK if you prefer to use standard `node.js` for the script.
:::

#### Initializing the project and installing needed dependencies

Create a new directory for your project and navigate to it in your terminal. Initialize a new TypeScript project by running the following command:

```bash
yarn init -y
yarn add -D typescript dotenv ts-node
yarn add ethers@5.7.2
```

Create a tsconfig.json file in the root directory of your project with the following contents:

```json
{
	"compilerOptions": {
		"composite": true,
		"target": "ESNext",
		"module": "CommonJS",
		"allowJs": true,
		"declaration": true,
		"sourceMap": true,
		"declarationMap": true,
		"resolveJsonModule": true,
		"skipLibCheck": true,
		"strict": true,
		"esModuleInterop": true,
		"downlevelIteration": true,
		"allowSyntheticDefaultImports": true,
		"forceConsistentCasingInFileNames": true,
		"moduleResolution": "node",
        "outDir": "dist",
        "baseUrl": "src"
	},
	"ts-node": {
		"esm": true,
		"experimentalSpecifierResolution": "node"
	},
	"include": [
		"src"
	]
}
```

This configuration sets the target to ESNext, enables ES module loading, and sets the output directory to dist. Then, create a `src` folder in the root directory of your project, along with a `index.ts` file

Create also a `src/` folder inside the root directory of your project. In there were are going to place all our code.

Create an `.env` file in the root directory of your project. Paste the following:

```
PROVIDER_API_KEY=your_provider_api_key_here
PRIVATE_KEY=your_private_key_here
```
:::info
  Remember that your private key should no be exposed. Hence, don't commit `.env` files. This just for your usage following this example.
:::

### Usage
To use the Sygma SDK in your Node.js project, you can import the necessary classes and functions from the `@buildwithsygma/sygma-sdk-core` package and ethers package. Here's an example of how to transfer ERC20 tokens between two Ethereum networks:

```ts
// transfer.ts
import { Domain, EVMAssetTransfer, Environment, Fungible, Resource, Transfer } from "@buildwithsygma/sygma-sdk-core";
import { Wallet, providers } from "ethers";
import dotenv from "dotenv";

dotenv.config();

const providerApiKey = process.env.PROVIDER_API_KEY;
const privateKey = process.env.PRIVATE_KEY;

if (!providerApiKey || !privateKey) {
  throw new Error("Missing environment variables");
}
```

Provide the `chain ids` and the symbol of the asset to use

```ts
// transfer.ts
const GOERLI_CHAIN_ID = 5;
const SEPOLIA_CHAIN_ID = 11155111;
const ERC20_TOKEN_SYMBOL = "ERC20LRTest";
```

Now we create a function that will return an `assetTransfer` object. This is the object that we are going to use to make the transfer between `goerli` and `sepolia`

```ts
// transfer.ts
/**
 * Initializes the Sygma SDK asset transfer module.
 * @param provider The Ethereum provider to use.
 * @returns A Promise that resolves when the module is initialized.
 */
async function initAssetTransfer(provider: providers.JsonRpcProvider): Promise<EVMAssetTransfer> {
  const assetTransfer = new EVMAssetTransfer();
  await assetTransfer.init(provider, Environment.DEVNET);
  return assetTransfer;
}
```

Now create a function to find the ERC20 resource that we are going to use. This function will return the ERC20 resource definition.

```ts
// transfer.ts
/**
 * Finds the ERC20 resource to transfer.
 * @param assetTransfer The Sygma SDK asset transfer module.
 * @returns The ERC20 resource, or null if it is not found.
 */
function findERC20Resource(assetTransfer: EVMAssetTransfer): Resource | null {
  const resources: Array<Resource> = assetTransfer.config.getDomainResources();
  const erc20Resource = resources.find(
    (resource) => resource.symbol == ERC20_TOKEN_SYMBOL
  );
  return erc20Resource || null;
}
```

We are going to create a function that finds the domain id passing the `chain id` of the network. We must provide in this case the `asset transfer` as an argument to our function:

```ts
// transfer.ts
/**
 * Finds the domain with the given chain ID.
 * @param assetTransfer The Sygma SDK asset transfer module.
 * @param chainId The chain ID to search for.
 * @returns The domain with the given chain ID, or null if it is not found.
 */
function findDomainByChainId(assetTransfer: EVMAssetTransfer, chainId: number): Domain | null {
  const domains: Array<Domain> = assetTransfer.config.getDomains();
  const domain = domains.find((domain) => domain.chainId == chainId);
  return domain || null;
}
```

To be able to use the SDK we need to build the `transfer` object. For that we create the following function. This function expect several parameters: `wallet`, `from` and `to` destinations, `resource` and `amount`.

```ts
// transfer.ts
/**
 * Builds a transfer object with the necessary parameters.
 * @param wallet The Ethereum wallet to use for the transfer.
 * @param from The domain to transfer from.
 * @param to The domain to transfer to.
 * @param resource The resource to transfer.
 * @param recipient The recipient of the transfer.
 * @param amount The amount to transfer, in wei.
 * @returns The transfer object.
 */
async function buildTransfer(
  wallet: Wallet,
  from: Domain,
  to: Domain,
  resource: Resource,
  recipient: string,
  amount: string
): Promise<Transfer<Fungible>> {
  return {
    sender: await wallet.getAddress(),
    amount: {
      amount,
    },
    from,
    to,
    resource,
    recipient,
  };
}
```

Finally, we create our main function: `erc20Transfer` that will use all the other functions defined above:

```ts
// transfer.ts
/**
 * Transfers ERC20 tokens between two Ethereum networks using the Sygma SDK.
 * @returns A Promise that resolves when the transfer is complete.
 */
export async function erc20Transfer(): Promise<void> {
  const provider = new providers.JsonRpcProvider(
    "<PROVIDER_API_KEY>"
  );
  const wallet = new Wallet(
    "<YOUR_PRIVATE_KEY>",
    provider
  );

  const assetTransfer = await initAssetTransfer(provider);
  const erc20Resource = findERC20Resource(assetTransfer);
  if (!erc20Resource) {
    throw new Error("Resource not found");
  }

  const goerli = findDomainByChainId(assetTransfer, GOERLI_CHAIN_ID);
  if (!goerli) {
    throw new Error("Network goerli not supported");
  }

  const sepolia = findDomainByChainId(assetTransfer, SEPOLIA_CHAIN_ID);
  if (!sepolia) {
    throw new Error("Network sepolia not supported");
  }

  const transfer = await buildTransfer(
    wallet,
    goerli,
    sepolia,
    erc20Resource,
    await wallet.getAddress(),
    "50"
  );

  const fee = await assetTransfer.getFee(transfer);
  const approvals = await assetTransfer.buildApprovals(transfer, fee);
  for (const approval of approvals) {
    const signedApproval = await wallet.signMessage(approval);
    const tx = await provider.sendTransaction(signedApproval);
    await tx.wait();
  }
}
```

Finally we can run our function:

```ts
// index.ts
import { erc20Transfer } from "./transfer";

async function main(): Promise<void> {
  try {
    await erc20Transfer();
    console.log("Transfer complete");
  } catch (error) {
    console.error(error);
  }
}

main();
```

Run it with:

```bash
npx ts-node index.ts
```

Alternatively you can transpile the above adding a build script into the `package.json` file:

```json
"scripts": {
    "build": "tsc"
  },
```

Then you can run it from the terminal:

```bash
yarn build
```

For you to run it, just do:

```bash
node ./dist/index.js
```