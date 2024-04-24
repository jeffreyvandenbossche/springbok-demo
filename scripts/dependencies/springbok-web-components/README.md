# @springbokagency/bridgestone-web-components

Web Components to test the integration with Bridgestone&#x27;s AEM, built with
[Stencil.js](https://stenciljs.com/) and [Storybook](https://storybook.js.org/).

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed [Git LFS](https://git-lfs.github.com/).
- You have installed [NVM](https://github.com/nvm-sh/nvm).

## Installation

Install and start the project:

```bash
scripts/start.sh
```

Scaffold a component:

```bash
npm run plop
```

## Integration

Before installing the package, run following commands in your projet root:

```bash
npm config set --location project @springbokagency:registry https://registry.springbok.agency/
npm config set --location project //registry.springbok.agency/:_authToken {NPM_TOKEN}
```

> The read only token can be found on [LastPass](https://www.lastpass.com/).

Install the package:

```bash
npm i -S @springbokagency/bridgestone-web-components
```

Then, follow the installation instructions in the
[Framework Integration](https://stenciljs.com/docs/overview) section.

## Chromatic

Pull requests and commits on the `main` branch are published automatically to
[Chromatic](https://www.chromatic.com/) through
[Pipelines](https://bitbucket.org/bridbitbucket/bridbitbucket.bitbucket.io/pipelines).

## Publishing

To bump the version of the package and publish it, run the custom pipeline
`bump-version-and-publish`.

The package will be published to [registry.springbok.agency](https://registry.springbok.agency/).

> The pipeline can only be executed on the `main` branch.

## Guidelines

### Version Control

Please refer to our
[Version Control Guidelines](https://springbokagency.atlassian.net/l/cp/fGY8zkEu).

### Front-end

Please refer to our [Front-end Guidelines](https://springbokagency.atlassian.net/l/cp/2rbKVjfX).

## Application

Application specific documentation.
