const cds = require("@sap/cds");
const LOG = cds.log("bp-service");

const {
  BusinessPartner: sdkBusinessPartner,
  BusinessPartnerAddress: sdkBusinessPartnerAddress,
  batch: bpBatch,
} = require("./odata-client/business-partner-service");
const { or, and } = require("@sap-cloud-sdk/core");

module.exports = async function () {
  this.on("READ", "BusinessPartner", async (req) => {
    const bpService = await cds.connect.to("API_BUSINESS_PARTNER");
    return bpService.run(req.query);
  });

  this.on("getAllBusinessPartners", async (req) => {
    LOG._info && LOG.info("getAllBusinessPartners");
    // Mock filter data
    const bps = ["203", "1018"];
    const countries = ["DE", "US"];

    // Create SAP Cloud SDK Filter for BusinessPartner
    const bpFilter = bps.map((bp) =>
      sdkBusinessPartnerAddress.BUSINESS_PARTNER.equals(bp)
    );
    const filter = [or(...bpFilter)];
    
    // Create SAP Cloud SDK Filter for Country
    if (countries.length > 0) {
      const countryFilter = countries.map((country) =>
        sdkBusinessPartnerAddress.COUNTRY.equals(country)
      );
      filter.push(or(...countryFilter));
    }
    LOG._debug && LOG.debug("filter", JSON.stringify(filter));
    const queryBuilderBPAddress = sdkBusinessPartnerAddress
      .requestBuilder()
      .getAll()
      .select(
        sdkBusinessPartnerAddress.BUSINESS_PARTNER,
        sdkBusinessPartnerAddress.COUNTRY,
        sdkBusinessPartnerAddress.FULL_NAME
      )
      // TODO: Add filter filterBusinessPartnerAddress
      .filter(and(filter));
    const batchResponsesBPAddress = await bpBatch(queryBuilderBPAddress).execute({
      destinationName: "APIBusinessHub",
    });
    return batchResponsesBPAddress;
  });
};
