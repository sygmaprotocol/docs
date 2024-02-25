import { Environment, Config } from '@buildwithsygma/sygma-sdk-core';

// Assuming the Config type has a method getDomains() that returns an array of domains
// and each domain has an id property

export function explorerUrls(env: Environment, config: Config): Record<number, string> {
    let urls: Record<number, string> = {};

    switch(env) {
        case Environment.TESTNET:
            urls[2] = 'https://sepolia.etherscan.io/address/';
            break;
        case Environment.MAINNET:
            config.getDomains().forEach(domain => {
                // Example URL logic for mainnet, adjust according to actual domain and URL structure
                urls[domain.id] = `https://mainnet.explorer.domain.com/${domain.id}`;
            });
            break;
        // Optionally handle other environments
        default:
            console.warn(`Unsupported environment: ${env}`);
            break;
    }

    return urls;
}

export function capName (name: string): string {
    return name
      .split('_')
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(' ');
  };