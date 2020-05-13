# EPM Business Partner - Consumer App

This example application demonstrates how to use an OData Service available on the [SAP Gateway Demo Server - ES5](https://developers.sap.com/tutorials/gateway-demo-signup.html) with the SAP Cloud SDK for NodeJS and the SAP Cloud Application Programming Model. 

You can also run this app against your on premise [ABAP Developer Edition](https://blogs.sap.com/2019/07/01/as-abap-752-sp04-developer-edition-to-download/) using the SAP Cloud Connection. Here you can then configure end-to-end authentication with principal propagation. In that case the service in the ABAP Backend is called not with a technical user, but with the user that was authenticated in the SAP Cloud Platform.

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
      "name": "ES5",
      "url": "http://localhost:3000/sap/opu/odata/sap/EPM_REF_APPS_PROD_MAN_SRV"
    },
    {
      "name": "ES5_SDK",
      "url": "http://localhost:3000/"
    }
  ]
}
```

If you want to da a local test against the ES5 system then use this content for the *default-env.json*

```
{
  "VCAP_SERVICES": {
  },
  "destinations": [
    {
      "name": "ES5",
      "url": "https://sapes5.sapdevcenter.com/sap/opu/odata/sap/EPM_REF_APPS_PROD_MAN_SRV",
      "username": "<Your ES5 Username>",
      "password": "<Your ES5 Password>"
    },
    {
      "name": "ES5_SDK",
      "url": "https://sapes5.sapdevcenter.com",
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

Destination ES5 used by the approuter:

```
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

Destination ES5 used by the CAP:

```
Description=SAP Gateway Demo System
Type=HTTP
Authentication=BasicAuthentication
WebIDEUsage=odata_abap,ui5_execute_abap,dev_abap,bsp_execute_abap
Name=ES5_CAP
WebIDEEnabled=true
URL=https\://sapes5.sapdevcenter.com/sap/opu/odata/sap/EPM_REF_APPS_PROD_MAN_SRV
ProxyType=Internet
User=<Your ES5 Username>
WebIDESystem=ES5_CAP
```

Destination ES5_SDK used by the SAP Cloud SDK:

```
Description=SAP Gateway Demo System
Type=HTTP
Authentication=BasicAuthentication
WebIDEUsage=odata_abap,ui5_execute_abap,dev_abap,bsp_execute_abap
Name=ES5_SDK
WebIDEEnabled=true
URL=https\://sapes5.sapdevcenter.com
ProxyType=Internet
User=<Your ES5 Username>
WebIDESystem=ES5_SDK
```

### Preperation for on premise connection with principal propagation

Destination ES5 used by the approuter:

```
URL=http\://<Virtual Hostname of your ABAP Backend>\:<Virtual Port of your ABAP Backend>
Name=ES5
ProxyType=OnPremise
Type=HTTP
sap-client=001
Authentication=PrincipalPropagation
```

Destination ES5 used by the CAP:

```
URL=http\://<Virtual Hostname of your ABAP Backend>\:<Virtual Port of your ABAP Backend>/sap/opu/odata/sap/EPM_REF_APPS_PROD_MAN_SRV
Name=ES5_CAP
ProxyType=OnPremise
Type=HTTP
sap-client=001
Authentication=PrincipalPropagation
```

Destination ES5_SDK used by the SAP Cloud SDK:

```
URL=http\://<Virtual Hostname of your ABAP Backend>\:<Virtual Port of your ABAP Backend>
Name=ES5_SDK
ProxyType=OnPremise
Type=HTTP
sap-client=001
Authentication=NoAuthentication
```

### Build

`npm run build:cf`

### Deploy

`npm run deploy:cf`
