import React, { useEffect, useState } from 'react';
import { Config, Environment } from '@buildwithsygma/sygma-sdk-core';
import { explorerUrls, capName } from '../utils';

type PerDomainInfoTablesProps = {
  environment: Environment;
};

const PerDomainInfoTables: React.FC<PerDomainInfoTablesProps> = ({ environment }) => {
  const [config, setConfig] = useState<Config | null>(null);
  const [urls, setUrls] = useState<Record<number, string>>();

  useEffect(() => {
    const initializeConfig = async () => {
      try {
        const c = new Config();
        await c.init(1, environment);
        setConfig(c);
        const u = explorerUrls(environment, c);
        setUrls(u);
        console.log(u)
      } catch (error) {
        console.error('Error initializing config: ', error);
      }
    };

    initializeConfig();
  }, [environment]); // Ensure environment is included in the dependency array

  const linkToExplorer = (domainID: number, adress: string) => {
    if(!urls) return "";
    console.log("----")
    const u = urls[domainID];
    console.log(domainID)
    console.log(urls)
    console.log(u);
    return u + adress;
  }

  if (!config || !config.environment) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {config.environment.domains.map((domain, index) => (
        <React.Fragment key={index}>
          <h3>{capName(domain.name)}</h3>
          <table>
            <thead>
              <tr>
                <th>Contract</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {/* Bridge */}
              <tr>
                <td>Bridge</td>
                <td><a target='_blank' href={linkToExplorer(domain.id, domain.bridge)}>{domain.bridge}</a></td>
              </tr>
              {/* Fee Router */}
              {'feeRouter' in domain && (
                <tr>
                  <td>Fee Router</td>
                  <td><a target='_blank' href={linkToExplorer(domain.id, domain.feeRouter)}>{domain.feeRouter}</a></td>
                </tr>
              )}
              {/* Fee Handlers */}
              {'feeHandlers' in domain && domain.feeHandlers.map((handler, handlerIndex) => (
                <tr key={`feeHandler-${handlerIndex}`}>
                  <td>{capName(handler.type)} Fee Handler</td>
                  <td><a target='_blank' href={linkToExplorer(domain.id, handler.address)}>{handler.address}</a></td>
                </tr>
              ))}
              {/* Handlers */}
              {domain.handlers.map((handler, handlerIndex) => (
                <tr key={`handler-${handlerIndex}`}>
                  <td>{capName(handler.type)} Handler</td>
                  <td><a target='_blank' href={linkToExplorer(domain.id, handler.address)}>{handler.address}</a></td>
                </tr>
              ))}
            </tbody>
          </table>
        </React.Fragment>
      ))}
    </>
  );
};

export default PerDomainInfoTables;
