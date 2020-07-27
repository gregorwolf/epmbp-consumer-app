const cds = require('@sap/cds')
/*
const createFilter = xs => {
  const andFilters = xs.map(x => new FilterList([
    Suppliers.SUPPLIER.equals(x.businessPartner),
  ]))
  return new FilterList(undefined, andFilters).flatten()
}

function SELECT (columns) {
  return { from(a){
      const b = {}
      for (let p in a) if (p in columns) b[p] = a[p]
      return b
  }}
}
*/

function getJWT (req) {
  if(typeof(req._) !== 'undefined') {
    return retrieveJwt(req._.req)
  } else {
    return ""
  }
}

module.exports = async function (){

  const { Suppliers: sdkSuppliers } = require('./odata-client/EPM_REF_APPS_PROD_MAN_SRV')
  const { FilterList, serializeEntity, retrieveJwt } = require('@sap-cloud-sdk/core')
  
  const externalService = await cds.connect.to('EPM_REF_APPS_PROD_MAN_SRV')
  const { Products: externalProducts, Suppliers: externalSuppliers } = externalService.entities
  
  const destinationName = 'ES5_SDK'
  
    
  /*
  this.before('READ', 'Orders', async (req) => {

    const { SELECT } = req.query
    SELECT.columns = SELECT.columns.filter(c => !(c.expand && c.ref[0] === 'EPMBusinessPartner'))

  })
  this.after('READ', 'Orders', async (results, req) => {

    const { EPMBusinessPartners } = this.entities

    const $expand = req._.odataReq.getQueryOptions() && req._.odataReq.getQueryOptions().$expand || ''
    const result = results[0] || {}

    const entityRE = new RegExp(/([a-zA-Z]+)(?=(\(|$))/g)

    if ($expand){
      if($expand.match(entityRE).includes('EPMBusinessPartner')) {
        if('businessPartner' in result) {
          var jwt = getJWT(req)
          try{
            debugger;
            const epmSuppliers = await Suppliers
            .requestBuilder()
            .getAll()
            .filter(createFilter(results))
            .execute({ destinationName: destinationName, jwt: jwt})
            .then(Suppliers => Suppliers.map(bp => serializeEntity(bp, Suppliers)))

            results.forEach(order => order.EPMBusinessPartner = SELECT (EPMBusinessPartners.elements) .from (epmSuppliers.find(
              Suppliers => order.businessPartner === Suppliers.BpId
            )))
          } catch (e) {
            debugger;
            console.log("Error: " + e.message)
            console.log("Stack: " + e.stack)
          }
        }
      }
    }
  })
  */
  this.on('READ', 'sdkSuppliers', async (results, req) => {
    var jwt = getJWT(req)
    try{
      const epmSuppliers = await sdkSuppliers
      .requestBuilder()
      .getAll()
      .execute({ destinationName: destinationName, jwt: jwt})
      // console.log("epmSuppliers: " + JSON.stringify(epmSuppliers))
      let mappedSuppliers = await epmSuppliers.map(bp => serializeEntity(bp, sdkSuppliers))
      // console.log("mappedSuppliers: " + JSON.stringify(mappedSuppliers))
      return mappedSuppliers
    } catch (e) {
      debugger;
      console.error("Error: " + e.message)
      console.log("Stack: " + e.stack)
    }
  })

  this.on ('READ','Suppliers', async req => {
    const tx = externalService.transaction(req)
    const cqn = getCQNforREAD(externalSuppliers, req)
    // const cqn = req.query.SELECT
    try {
      let result = await tx.run(cqn)
      return result
    } catch (error) {
      console.error(error.message)
    }
  })

  this.on('READ', 'Products', async (req) => {
    const tx = externalService.transaction(req)
    var cqn = getCQNforREAD(externalProducts, req)
    try {
      let result = await tx.run(cqn)
      return result
    } catch (error) {
      console.error(error.message)
      console.error(error.request._header)
      req.error(error.message)
    }
  })
}

function getCQNforREAD(entity, req) {
  var cqn = SELECT.from(entity)
  if(req.query.SELECT.limit) {
    cqn.SELECT.limit = req.query.SELECT.limit
  }
  if(req._.query && req._.query.$select) {
    cqn.SELECT.columns = req.query.SELECT.columns
  }
  if(req._.query && req._.query.$filter) {
    cqn.SELECT.where = req.query.SELECT.where
  }
  if(req.query.SELECT.orderBy) {
    cqn.SELECT.orderBy = req.query.SELECT.orderBy
  }
  return cqn
}
