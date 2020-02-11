// get-epmbp.js

const { EpmBusinessPartnerSet } = require('../odata-client/zepm-bp-service');

function getEpmBusinessPartners() {
  return EpmBusinessPartnerSet.requestBuilder()
    .getAll()
    .top(20) // look at the top 10 bp's only
    .select(EpmBusinessPartnerSet.BP_ID, EpmBusinessPartnerSet.COMPANY_NAME)
    .execute({
      url: 'http://localhost:3000/v2'
    });
}

module.exports.getEpmBusinessPartners = getEpmBusinessPartners;
getEpmBusinessPartners().then((epmbp) => {
  console.log(epmbp);
});