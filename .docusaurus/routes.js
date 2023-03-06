import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '4da'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '6c4'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '17e'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '13d'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '198'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'ec0'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '213'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '0c3'),
    routes: [
      {
        path: '/docs/',
        component: ComponentCreator('/docs/', '88f'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/architecture',
        component: ComponentCreator('/docs/architecture', '747'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/architecture/fees',
        component: ComponentCreator('/docs/architecture/fees', 'af0'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/architecture/generic',
        component: ComponentCreator('/docs/architecture/generic', '8fc'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/architecture/mpc',
        component: ComponentCreator('/docs/architecture/mpc', '840'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/architecture/relayers',
        component: ComponentCreator('/docs/architecture/relayers', 'd4b'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/architecture/security',
        component: ComponentCreator('/docs/architecture/security', 'b39'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/audits/',
        component: ComponentCreator('/docs/audits/', '6e7'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/audits/v1.0-v1.1/',
        component: ComponentCreator('/docs/audits/v1.0-v1.1/', 'd6b'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/environments/devnet/',
        component: ComponentCreator('/docs/environments/devnet/', 'd0b'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/environments/devnet/adding-tokens-to-metamask',
        component: ComponentCreator('/docs/environments/devnet/adding-tokens-to-metamask', 'e35'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/environments/devnet/obtain-devnet-tokens',
        component: ComponentCreator('/docs/environments/devnet/obtain-devnet-tokens', '590'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/environments/environemnts-index',
        component: ComponentCreator('/docs/environments/environemnts-index', '7ac'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/environments/mainnet',
        component: ComponentCreator('/docs/environments/mainnet', '186'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/environments/testnet/',
        component: ComponentCreator('/docs/environments/testnet/', '480'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/environments/testnet/adding-tokens-to-metamask',
        component: ComponentCreator('/docs/environments/testnet/adding-tokens-to-metamask', '054'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/environments/testnet/obtain-testnet-tokens',
        component: ComponentCreator('/docs/environments/testnet/obtain-testnet-tokens', 'b58'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/github-repositories',
        component: ComponentCreator('/docs/github-repositories', '6a4'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/readme/abstract',
        component: ComponentCreator('/docs/readme/abstract', 'e55'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/readme/origins',
        component: ComponentCreator('/docs/readme/origins', 'b2f'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/sygma-sdk',
        component: ComponentCreator('/docs/sygma-sdk', 'ce4'),
        exact: true,
        sidebar: "docs"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
