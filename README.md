# EPM Business Partner - Consumer App

## Deploy to SAP Cloud Platform - Cloud Foundry

### Prerequisite

- You have a [SAP Cloud Platform Trial account](https://hanatrial.ondemand.com/)
- The [Cloud MTA Build Tool (MBT)](https://sap.github.io/cloud-mta-build-tool/) is installed
- The [Cloud Foundry commandline tool](https://docs.cloudfoundry.org/cf-cli/install-go-cli.html) is installed
- The [MultiApps CF CLI Plugin](https://github.com/cloudfoundry-incubator/multiapps-cli-plugin) is installed
- You've connected using `cf login`to your trial account

### Build

`npm run build:cf`

### Deploy

`npm run deploy:cf`
