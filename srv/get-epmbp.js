// get-epmbp.js

const { EpmBusinessPartnerSet } = require('./odata-client/EPM_REF_APPS_PROD_MAN_SRV');

function getEpmBusinessPartners() {
  return EpmBusinessPartnerSet.requestBuilder()
    .getAll()
    .top(20) // look at the top 10 bp's only
    .select(EpmBusinessPartnerSet.BP_ID, EpmBusinessPartnerSet.COMPANY_NAME)
    .execute({ destinationName: "ES5" });
}

module.exports.getEpmBusinessPartners = getEpmBusinessPartners;
getEpmBusinessPartners().then((epmbp) => {
  console.log(epmbp);
});