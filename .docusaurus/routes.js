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
    path: '/blog',
    component: ComponentCreator('/blog', 'f6c'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '82b'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '006'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '0bc'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', '273'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', 'ad3'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', 'eed'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', 'ab7'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '82d'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '001'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '446'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '93b'),
    routes: [
      {
        path: '/docs/',
        component: ComponentCreator('/docs/', '993'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/architecture/',
        component: ComponentCreator('/docs/architecture/', '677'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/architecture/fees',
        component: ComponentCreator('/docs/architecture/fees', 'd31'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/architecture/generic',
        component: ComponentCreator('/docs/architecture/generic', 'a8f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/architecture/mpc',
        component: ComponentCreator('/docs/architecture/mpc', 'd0c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/architecture/relayers',
        component: ComponentCreator('/docs/architecture/relayers', '696'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/architecture/security',
        component: ComponentCreator('/docs/architecture/security', '3b5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/audits/',
        component: ComponentCreator('/docs/audits/', '2fd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/audits/v1.0-v1.1/',
        component: ComponentCreator('/docs/audits/v1.0-v1.1/', '25e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/audits/v1.0-v1.1/haechi-audit-9-6-22',
        component: ComponentCreator('/docs/audits/v1.0-v1.1/haechi-audit-9-6-22', 'f14'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/architecture',
        component: ComponentCreator('/docs/category/architecture', '1bb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/audits',
        component: ComponentCreator('/docs/category/audits', '48c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/environments',
        component: ComponentCreator('/docs/category/environments', '72a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/introduction',
        component: ComponentCreator('/docs/category/introduction', 'd40'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/tutorial---basics',
        component: ComponentCreator('/docs/category/tutorial---basics', 'd44'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/tutorial---extras',
        component: ComponentCreator('/docs/category/tutorial---extras', 'f09'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/environments/',
        component: ComponentCreator('/docs/environments/', 'ab4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/environments/devnet/',
        component: ComponentCreator('/docs/environments/devnet/', 'e59'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/environments/devnet/adding-tokens-to-metamask',
        component: ComponentCreator('/docs/environments/devnet/adding-tokens-to-metamask', '789'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/environments/devnet/obtain-devnet-tokens',
        component: ComponentCreator('/docs/environments/devnet/obtain-devnet-tokens', '9c9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/environments/mainnet',
        component: ComponentCreator('/docs/environments/mainnet', 'f5d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/environments/testnet',
        component: ComponentCreator('/docs/environments/testnet', '1cb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/github-repositories',
        component: ComponentCreator('/docs/github-repositories', '795'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/introduction/origins',
        component: ComponentCreator('/docs/introduction/origins', '05b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/sygma-sdk',
        component: ComponentCreator('/docs/sygma-sdk', '0ca'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/docs/tutorial-basics/congratulations', '793'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/docs/tutorial-basics/create-a-blog-post', '68e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/docs/tutorial-basics/create-a-document', 'c2d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/docs/tutorial-basics/create-a-page', 'f44'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/docs/tutorial-basics/deploy-your-site', 'e46'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/docs/tutorial-basics/markdown-features', '4b7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/docs/tutorial-extras/manage-docs-versions', 'fdd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/docs/tutorial-extras/translate-your-site', '2d7'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'db6'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
