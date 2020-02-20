# EPM Business Partner - Consumer App

This example application demontrates how to use a custom built OData Service with the SAP Cloud SDK for NodeJS and the SAP Cloud Application Programming Model.

## Run local

To run against the local mock service [epmbp-mock-service](https://github.com/gregorwolf/epmbp-mock-service) you have to create a file named *default-env.json* with the following content:

```
{
  "VCAP_SERVICES": {
  },
  "destinations": [
    {
      "name": "NPL_SDK",
      "url": "http://localhost:3000/v2"
    }
  ]
}
```

Then execute:

`npm run setup`

Followed by:

`npm start`

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
