import React, { useState, useEffect } from 'react';
import { Environment, Route, Config, getRoutes, getEnvironmentMetadata, EnvironmentMetadata } from '@buildwithsygma/sygma-sdk-core';
import { capName } from '../utils';

const resourceTypeMap = {
  "fungible": "Fungible",
  "permissionlessGeneric": "GMP",
}

type RouteTableProps = {
  environment: Environment;
};


const RouteTable: React.FC<RouteTableProps> = ({ environment }) => {
  const [routes, setRoutes] = useState<Route[]>([]);
  const [config, setConfig] = useState<Config | null>(null); // Store Config object instead of domains
  const [domainMetadata, setDomainMetadata] = useState<EnvironmentMetadata>({});
  const [selectedDomainId, setSelectedDomainId] = useState<number | null>(null);
  const [selectedResourceType, setSelectedResourceType] = useState<string>("fungible");


  useEffect(() => {
    const initializeConfigAndFetchMetadata = async () => {
      try {
        const newConfig = new Config();
        await newConfig.init(1, environment);
        setConfig(newConfig);

        const fetchedDomainMetadata = await getEnvironmentMetadata(environment);
        console.log(fetchedDomainMetadata);
        setDomainMetadata(fetchedDomainMetadata);

        // Automatically select the first domain's ID if available
        const fetchedDomains = newConfig.getDomains();
        console.log(fetchedDomains);
        if (fetchedDomains.length > 0) {
          setSelectedDomainId(fetchedDomains[0].id); // Adjusted to chainId for initial selection
        }
      } catch (error) {
        console.error('Error initializing config or fetching metadata: ', error);
      }
    };

    initializeConfigAndFetchMetadata();
  }, []);

  useEffect(() => {
    if (selectedDomainId !== null && config) {
      const fetchRoutes = async () => {
        try {
          const fetchedRoutes = await getRoutes(environment, config.getDomainConfig(selectedDomainId).chainId, selectedResourceType as 'fungible' | 'gmp');
          setRoutes(fetchedRoutes);
        } catch (error) {
          console.error('Error fetching routes: ', error);
        }
      };

      fetchRoutes();
    }
  }, [environment, selectedDomainId, config]);

  const handleDomainChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log("Selecting new domain: " + event.target.value);
    setSelectedDomainId(Number(event.target.value));
  };

  const handleResourceTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedResourceType(event.target.value);
  };
  

  return (
    <>
    <div className="selection-container">
      {config && (
        <div>
          <img id="domain-icon" src={domainMetadata[selectedDomainId]?.url} alt="" style={{ width: '20px', height: '20px', marginRight: '5px' }} />
          <select id="domain-selector" onChange={handleDomainChange} value={selectedDomainId || undefined}>
            {config.getDomains().map((domain) => (
              <option key={domain.id} value={domain.id}>
                {capName(domain.name)}
              </option>
            ))}
          </select>
        </div>
      )}

      <select id="resource-type-selector" onChange={handleResourceTypeChange} value={selectedResourceType}>
        {Object.entries(resourceTypeMap).map(([value, label]) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
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
            <td>{capName(route.fromDomain.name)}</td>
            <td>{capName(route.toDomain.name)}</td>
            <td>{resourceTypeMap[route.resource.type]}</td>
            <td>{route.resource.symbol || 'N/A'}</td>
          </tr>
        ))}
      </tbody>
    </table>
      
    </>
    
  );
};

export default RouteTable;
