# EPM Business Partner - Consumer App

This example application demontrates how to use a custom built OData Service with the SAP Cloud SDK for NodeJS and the SAP Cloud Application Programming Model.

This example wouldn't work without the help of [Dennis Hempfing](https://github.com/mr-flannery) who steped in to help in this questions:

- [First letter of entity attributes converted to lowercase by @sap/cloud-sdk-generator](https://answers.sap.com/questions/12973825/first-letter-of-entity-attributes-converted-to-low.html)
- [Using destination from package.json / default-env.json in implementation](https://answers.sap.com/questions/12973947/using-destination-from-packagejson-default-envjson.html)
- [Unable to build destination for service binding: Unable to find a service binding for given name](https://answers.sap.com/questions/12982450/unable-to-create-sap-connectivity-authentication-h.html)

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
- You've connected a SAP Cloud Connector to your subaccount
- Principal Propagation is setup in the Cloud Connector to the ABAP Backend

### Preperation

Before you can deploy the application to your Cloud Foundry account two destinations must be created. Please find here what I've used in my environment:

Destination NPL used by the approuter:

```
URL=http\://npl752.virtual\:44300
Name=NPL
ProxyType=OnPremise
Type=HTTP
sap-client=001
Authentication=PrincipalPropagation
```

Destination NPL_SDK used by the SAP Cloud SDK:

```
URL=http\://npl752.virtual\:44300
Name=NPL_SDK
ProxyType=OnPremise
Type=HTTP
sap-client=001
Authentication=NoAuthentication
```

### Build

`npm run build:cf`

### Deploy

`npm run deploy:cf`
