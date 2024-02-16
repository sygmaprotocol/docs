import React, { useState, useEffect } from 'react';
import { Environment, Route, Config, getRoutes, getEnvironmentMetadata, EnvironmentMetadata } from '@buildwithsygma/sygma-sdk-core';

const RouteTable: React.FC = () => {
  const [routes, setRoutes] = useState<Route[]>([]);
  const [config, setConfig] = useState<Config | null>(null); // Store Config object instead of domains
  const [domainMetadata, setDomainMetadata] = useState<EnvironmentMetadata>({});
  const [selectedDomainId, setSelectedDomainId] = useState<number | null>(null);
  const [selectedEnvironment, setSelectedEnvironment] = useState<Environment>(Environment.TESTNET);

  useEffect(() => {
    const initializeConfigAndFetchMetadata = async () => {
      try {
        const newConfig = new Config();
        await newConfig.init(1, selectedEnvironment);
        setConfig(newConfig);

        const fetchedDomainMetadata = await getEnvironmentMetadata(selectedEnvironment);
        console.log(fetchedDomainMetadata);
        setDomainMetadata(fetchedDomainMetadata);

        // Automatically select the first domain's ID if available
        const fetchedDomains = newConfig.getDomains();
        if (fetchedDomains.length > 0) {
          setSelectedDomainId(fetchedDomains[0].chainId); // Adjusted to chainId for initial selection
        }
      } catch (error) {
        console.error('Error initializing config or fetching metadata: ', error);
      }
    };

    initializeConfigAndFetchMetadata();
  }, [selectedEnvironment]);

  useEffect(() => {
    if (selectedDomainId !== null && config) {
      const fetchRoutes = async () => {
        try {
          const fetchedRoutes = await getRoutes(selectedEnvironment, config.getDomainConfig(selectedDomainId).chainId); // Ensure 'all' is passed if you want all types of routes
          setRoutes(fetchedRoutes);
        } catch (error) {
          console.error('Error fetching routes: ', error);
        }
      };

      fetchRoutes();
    }
  }, [selectedEnvironment, selectedDomainId, config]);

  const handleDomainChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log("Selecting new domain: " + event.target.value);
    setSelectedDomainId(Number(event.target.value));
  };

  const handleEnvironmentChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedEnvironment(event.target.value as Environment);
  };

  return (
    <>
    <div className="selection-container">
      <select id="environment-selector" onChange={handleEnvironmentChange} value={selectedEnvironment}>
        <option value={Environment.TESTNET}>Testnet</option>
        <option value={Environment.MAINNET}>Mainnet</option>
      </select>

      {config && (
        <div>
          <select id="domain-selector" onChange={handleDomainChange} value={selectedDomainId || undefined}>
            {config.getDomains().map((domain) => (
              <option key={domain.id} value={domain.id}>
                {domain.name}
              </option>
            ))}
          </select>
          <img id="domain-icon" src={domainMetadata[selectedDomainId]?.url} alt="" style={{ width: '20px', height: '20px', marginRight: '5px' }} />
        </div>
      )}
    </div>
    <table>
      <thead>
        <tr>
          <th>From Domain</th>
          <th>To Domain</th>
          <th>Resource Type</th>
          <th>Resource Symbol</th>
        </tr>
      </thead>
      <tbody>
        {routes.map((route, index) => (
          <tr key={index}>
            <td>{route.fromDomain.name}</td>
            <td>{route.toDomain.name}</td>
            <td>{route.resource.type}</td>
            <td>{route.resource.symbol || 'N/A'}</td>
          </tr>
        ))}
      </tbody>
    </table>
      
    </>
    
  );
};

export default RouteTable;
