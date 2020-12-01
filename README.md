# EPM Business Partner - Consumer App

This example application demonstrates how to use an OData Service available on the [SAP Gateway Demo Server - ES5](https://developers.sap.com/tutorials/gateway-demo-signup.html) with the SAP Cloud SDK for NodeJS and the SAP Cloud Application Programming Model.

You can also run this app against your on premise [ABAP Developer Edition](https://blogs.sap.com/2019/07/01/as-abap-752-sp04-developer-edition-to-download/) using the SAP Cloud Connector to establish the connection. Here you can then configure end-to-end authentication with principal propagation. In that case the service in the ABAP Backend is called not with a technical user, but with the user that was authenticated in the SAP Cloud Platform.

This example wouldn't work without the help of [Dennis Hempfing](https://github.com/mr-flannery) who steped in to help in this questions:

- [First letter of entity attributes converted to lowercase by @sap/cloud-sdk-generator](https://answers.sap.com/questions/12973825/first-letter-of-entity-attributes-converted-to-low.html)
- [Using destination from package.json / default-env.json in implementation](https://answers.sap.com/questions/12973947/using-destination-from-packagejson-default-envjson.html)
- [Unable to build destination for service binding: Unable to find a service binding for given name](https://answers.sap.com/questions/12982450/unable-to-create-sap-connectivity-authentication-h.html)

## Run local

To run against the local mock service [epmbp-mock-service](https://github.com/gregorwolf/epmbp-mock-service) you have to create a file named *default-env.json* with the following content:

```json
{
  "VCAP_SERVICES": {
  },
  "destinations": [
    {
      "name": "ES5",
      "url": "http://localhost:3000/sap/opu/odata/sap/EPM_REF_APPS_PROD_MAN_SRV"
    }
  ]
}
```

If you want to da a local test against the ES5 system then use this content for the *default-env.json*

```json
{
  "VCAP_SERVICES": {
  },
  "destinations": [
    {
      "name": "ES5",
      "url": "https://sapes5.sapdevcenter.com/sap/opu/odata/sap/EPM_REF_APPS_PROD_MAN_SRV",
      "username": "<Your ES5 Username>",
      "password": "<Your ES5 Password>"
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
- Three destinations either to the ES5 or your local ABAP system

Optional

- You've connected a SAP Cloud Connector to your subaccount
- Principal Propagation is setup in the Cloud Connector to the ABAP Backend

### Preperation for a Connection to ES5

Destination ES5 used by the approuter, CAP and SAP Cloud SDK:

```properties
Description=SAP Gateway Demo System
Type=HTTP
Authentication=BasicAuthentication
WebIDEUsage=odata_abap,ui5_execute_abap,dev_abap,bsp_execute_abap
Name=ES5
WebIDEEnabled=true
URL=https\://sapes5.sapdevcenter.com
ProxyType=Internet
User=<Your ES5 Username>
WebIDESystem=ES5
```

### Preperation for on premise connection with principal propagation

Destination ES5 used by the approuter, CAP and SAP Cloud SDK:

```properties
URL=http\://<Virtual Hostname of your ABAP Backend>\:<Virtual Port of your ABAP Backend>
Name=ES5
ProxyType=OnPremise
Type=HTTP
sap-client=001
Authentication=PrincipalPropagation
```

### Build

`npm run build:cf`

### Deploy

`npm run deploy:cf`

## Deploy to SAP HANA XSA on Premise

It's possible to deploy this application also to an on Premise instance of SAP HANA. 

### Preperation

The connection information to the ES5 system is provided via a user-provided service. Such a services needs a configuration file. The actual content can't be used in the destination. Please create *default-es5destination.json* in the root folder of the project and fill it with:

```JSON
{
  "name": "ES5",
  "url": "https://sapes5.sapdevcenter.com"
}
```

The credentials for the backend access should never appear in a Git repository. That is why I suggest to use a MTA extension. Please create the file *xsa.mtaext* in the root folder with the following content. Replace YourES5user and YourES5password with your own credentials.

```YAML
_schema-version: '3.1'
ID: epmbp-consumer-app.extension
extends: epmbp-consumer-app

resources:
  - name: es5destination
    properties:
      name: ES5
      username: YourES5user
      password: YourES5password
```

### Build

`npm run build:xsa`

### Deploy

`npm run deploy:xsa:user`

### Test

Start the Application: epmbp-consumer-app-app via the created Application Route from the SAP HANA XS Advanced Cockpit. You should be able to open the Link */catalog/SEPMRA_I_Product_E - Public Service from ES5* and see a list of Products returned as JSON. 