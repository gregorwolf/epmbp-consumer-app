const cds = require("@sap/cds");
const LOG = cds.log("condition-service");

const { setGlobalLogLevel } = require("@sap-cloud-sdk/util");

const {
  SlsPrcgCndnRecdValidity: sdkSlsPrcgCndnRecdValidity,
  SlsPrcgConditionRecord: sdkSlsPrcgConditionRecord,
} = require("./odata-client/slspricingconditionrecord-service");
const { or, and } = require("@sap-cloud-sdk/core");

module.exports = async function () {
  this.on("getConditionValidityForTable", async (req) => {
    LOG._info && LOG.info("getConditionValidityForTable");
    setGlobalLogLevel("debug");

    const queryBuilderCondVal = sdkSlsPrcgCndnRecdValidity
      .requestBuilder()
      .getAll()
      .top(10)
      .select(
        sdkSlsPrcgCndnRecdValidity.MATERIAL,
        sdkSlsPrcgCndnRecdValidity.CONDITION_TYPE,
        sdkSlsPrcgCndnRecdValidity.CONDITION_VALIDITY_START_DATE,
        sdkSlsPrcgCndnRecdValidity.CONDITION_VALIDITY_END_DATE,
        sdkSlsPrcgCndnRecdValidity.TO_SLS_PRCG_CONDITION_RECORD.select(
          sdkSlsPrcgConditionRecord.CONDITION_TABLE
        )
      )
      .filter(
        and(
          or(sdkSlsPrcgCndnRecdValidity.MATERIAL.equals("TG11")),
          or(sdkSlsPrcgCndnRecdValidity.CONDITION_TYPE.equals("PPR0")),
          or(
            sdkSlsPrcgCndnRecdValidity.TO_SLS_PRCG_CONDITION_RECORD.filter(
              sdkSlsPrcgConditionRecord.CONDITION_TABLE.equals("304")
            )
          )
        )
      );
    const responseCondVal = await queryBuilderCondVal.execute({
      destinationName: "APIBusinessHub",
    });
    return responseCondVal;
  });
};
