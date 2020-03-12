const { EpmBusinessPartnerSet } = require('./odata-client/zepm-bp-service')
const { FilterList, serializeEntity, retrieveJwt } = require('@sap/cloud-sdk-core')

const destinationName = 'NPL_SDK'

const createFilter = xs => {
	const andFilters = xs.map(x => new FilterList([
		EpmBusinessPartnerSet.BP_ID.equals(x.businessPartner),
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

function getJWT (req) {
	if(typeof(req._) !== 'undefined') {
		return retrieveJwt(req._.req)
	} else {
		return ""
	}
}

module.exports = srv => {

	srv.before('READ', 'Orders', async (req) => {

		const { SELECT } = req.query
		SELECT.columns = SELECT.columns.filter(c => !(c.expand && c.ref[0] === 'EPMBusinessPartner'))

	})

	srv.after('READ', 'Orders', async (results, req) => {

		const { EPMBusinessPartners } = srv.entities

		const $expand = req._.odataReq.getQueryOptions() && req._.odataReq.getQueryOptions().$expand || ''
		const result = results[0] || {}

		const entityRE = new RegExp(/([a-zA-Z]+)(?=(\(|$))/g)

		if ($expand){
			if($expand.match(entityRE).includes('EPMBusinessPartner')) {
				if('businessPartner' in result) {
					var jwt = getJWT(req)
					try{
						debugger;
						const epmbps = await EpmBusinessPartnerSet
						.requestBuilder()
						.getAll()
						.filter(createFilter(results))
						.execute({ destinationName: destinationName, jwt: jwt})
						.then(businessPartners => businessPartners.map(bp => serializeEntity(bp, EpmBusinessPartnerSet)))

						results.forEach(order => order.EPMBusinessPartner = SELECT (EPMBusinessPartners.elements) .from (epmbps.find(
							EpmBusinessPartnerSet => order.businessPartner === EpmBusinessPartnerSet.BpId
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

	srv.on('READ', 'EPMBusinessPartners', async (results, req) => {
		var jwt = getJWT(req)
		try{
			const epmbps = await EpmBusinessPartnerSet
			.requestBuilder()
			.getAll()
			.execute({ destinationName: destinationName, jwt: jwt})
			.then(businessPartners => businessPartners.map(bp => serializeEntity(bp, EpmBusinessPartnerSet)))
			return epmbps
		} catch (e) {
			debugger;
			console.log("Error: " + e.message)
			console.log("Stack: " + e.stack)
		}
	})

}