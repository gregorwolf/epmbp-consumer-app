"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BpFiscalYearInformation = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var BpFiscalYearInformationRequestBuilder_1 = require("./BpFiscalYearInformationRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "A_BPFiscalYearInformation" of service "API_BUSINESS_PARTNER".
 */
var BpFiscalYearInformation = /** @class */ (function (_super) {
    __extends(BpFiscalYearInformation, _super);
    function BpFiscalYearInformation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `BpFiscalYearInformation`.
     * @returns A builder that constructs instances of entity type `BpFiscalYearInformation`.
     */
    BpFiscalYearInformation.builder = function () {
        return core_1.EntityV2.entityBuilder(BpFiscalYearInformation);
    };
    /**
     * Returns a request builder to construct requests for operations on the `BpFiscalYearInformation` entity type.
     * @returns A `BpFiscalYearInformation` request builder.
     */
    BpFiscalYearInformation.requestBuilder = function () {
        return new BpFiscalYearInformationRequestBuilder_1.BpFiscalYearInformationRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `BpFiscalYearInformation`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `BpFiscalYearInformation`.
     */
    BpFiscalYearInformation.customField = function (fieldName) {
        return core_1.EntityV2.customFieldSelector(fieldName, BpFiscalYearInformation);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    BpFiscalYearInformation.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for BpFiscalYearInformation.
     */
    BpFiscalYearInformation._entityName = 'A_BPFiscalYearInformation';
    /**
     * Default url path for the according service.
     */
    BpFiscalYearInformation._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
    return BpFiscalYearInformation;
}(core_1.EntityV2));
exports.BpFiscalYearInformation = BpFiscalYearInformation;
(function (BpFiscalYearInformation) {
    var _fieldBuilder = new core_1.FieldBuilder(BpFiscalYearInformation);
    /**
     * Static representation of the [[businessPartner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpFiscalYearInformation.BUSINESS_PARTNER = _fieldBuilder.buildEdmTypeField('BusinessPartner', 'Edm.String', false);
    /**
     * Static representation of the [[businessPartnerFiscalYear]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpFiscalYearInformation.BUSINESS_PARTNER_FISCAL_YEAR = _fieldBuilder.buildEdmTypeField('BusinessPartnerFiscalYear', 'Edm.String', false);
    /**
     * Static representation of the [[bpBalanceSheetCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpFiscalYearInformation.BP_BALANCE_SHEET_CURRENCY = _fieldBuilder.buildEdmTypeField('BPBalanceSheetCurrency', 'Edm.String', true);
    /**
     * Static representation of the [[bpAnnualStockholderMeetingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpFiscalYearInformation.BP_ANNUAL_STOCKHOLDER_MEETING_DATE = _fieldBuilder.buildEdmTypeField('BPAnnualStockholderMeetingDate', 'Edm.DateTime', true);
    /**
     * Static representation of the [[bpFiscalYearStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpFiscalYearInformation.BP_FISCAL_YEAR_START_DATE = _fieldBuilder.buildEdmTypeField('BPFiscalYearStartDate', 'Edm.DateTime', true);
    /**
     * Static representation of the [[bpFiscalYearEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpFiscalYearInformation.BP_FISCAL_YEAR_END_DATE = _fieldBuilder.buildEdmTypeField('BPFiscalYearEndDate', 'Edm.DateTime', true);
    /**
     * Static representation of the [[bpFiscalYearIsClosed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpFiscalYearInformation.BP_FISCAL_YEAR_IS_CLOSED = _fieldBuilder.buildEdmTypeField('BPFiscalYearIsClosed', 'Edm.Boolean', true);
    /**
     * Static representation of the [[bpFiscalYearClosingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpFiscalYearInformation.BP_FISCAL_YEAR_CLOSING_DATE = _fieldBuilder.buildEdmTypeField('BPFiscalYearClosingDate', 'Edm.DateTime', true);
    /**
     * Static representation of the [[bpFsclYrCnsldtdFinStatementDte]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpFiscalYearInformation.BP_FSCL_YR_CNSLDTD_FIN_STATEMENT_DTE = _fieldBuilder.buildEdmTypeField('BPFsclYrCnsldtdFinStatementDte', 'Edm.DateTime', true);
    /**
     * Static representation of the [[bpCapitalStockAmtInBalShtCrcy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpFiscalYearInformation.BP_CAPITAL_STOCK_AMT_IN_BAL_SHT_CRCY = _fieldBuilder.buildEdmTypeField('BPCapitalStockAmtInBalShtCrcy', 'Edm.Decimal', true);
    /**
     * Static representation of the [[bpIssdStockCptlAmtInBalShtCrcy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpFiscalYearInformation.BP_ISSD_STOCK_CPTL_AMT_IN_BAL_SHT_CRCY = _fieldBuilder.buildEdmTypeField('BPIssdStockCptlAmtInBalShtCrcy', 'Edm.Decimal', true);
    /**
     * Static representation of the [[bpPartcipnCertAmtInBalShtCrcy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpFiscalYearInformation.BP_PARTCIPN_CERT_AMT_IN_BAL_SHT_CRCY = _fieldBuilder.buildEdmTypeField('BPPartcipnCertAmtInBalShtCrcy', 'Edm.Decimal', true);
    /**
     * Static representation of the [[bpEquityCapitalAmtInBalShtCrcy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpFiscalYearInformation.BP_EQUITY_CAPITAL_AMT_IN_BAL_SHT_CRCY = _fieldBuilder.buildEdmTypeField('BPEquityCapitalAmtInBalShtCrcy', 'Edm.Decimal', true);
    /**
     * Static representation of the [[bpGrossPremiumAmtInBalShtCrcy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpFiscalYearInformation.BP_GROSS_PREMIUM_AMT_IN_BAL_SHT_CRCY = _fieldBuilder.buildEdmTypeField('BPGrossPremiumAmtInBalShtCrcy', 'Edm.Decimal', true);
    /**
     * Static representation of the [[bpNetPremiumAmtInBalShtCrcy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpFiscalYearInformation.BP_NET_PREMIUM_AMT_IN_BAL_SHT_CRCY = _fieldBuilder.buildEdmTypeField('BPNetPremiumAmtInBalShtCrcy', 'Edm.Decimal', true);
    /**
     * Static representation of the [[bpAnnualSalesAmtInBalShtCrcy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpFiscalYearInformation.BP_ANNUAL_SALES_AMT_IN_BAL_SHT_CRCY = _fieldBuilder.buildEdmTypeField('BPAnnualSalesAmtInBalShtCrcy', 'Edm.Decimal', true);
    /**
     * Static representation of the [[bpAnnualNetIncAmtInBalShtCrcy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpFiscalYearInformation.BP_ANNUAL_NET_INC_AMT_IN_BAL_SHT_CRCY = _fieldBuilder.buildEdmTypeField('BPAnnualNetIncAmtInBalShtCrcy', 'Edm.Decimal', true);
    /**
     * Static representation of the [[bpDividendDistrAmtInBalShtCrcy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpFiscalYearInformation.BP_DIVIDEND_DISTR_AMT_IN_BAL_SHT_CRCY = _fieldBuilder.buildEdmTypeField('BPDividendDistrAmtInBalShtCrcy', 'Edm.Decimal', true);
    /**
     * Static representation of the [[bpDebtRatioInYears]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpFiscalYearInformation.BP_DEBT_RATIO_IN_YEARS = _fieldBuilder.buildEdmTypeField('BPDebtRatioInYears', 'Edm.Decimal', true);
    /**
     * Static representation of the [[bpAnnualPnLAmtInBalShtCrcy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpFiscalYearInformation.BP_ANNUAL_PN_L_AMT_IN_BAL_SHT_CRCY = _fieldBuilder.buildEdmTypeField('BPAnnualPnLAmtInBalShtCrcy', 'Edm.Decimal', true);
    /**
     * Static representation of the [[bpBalSheetTotalAmtInBalShtCrcy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpFiscalYearInformation.BP_BAL_SHEET_TOTAL_AMT_IN_BAL_SHT_CRCY = _fieldBuilder.buildEdmTypeField('BPBalSheetTotalAmtInBalShtCrcy', 'Edm.Decimal', true);
    /**
     * Static representation of the [[bpNumberOfEmployees]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpFiscalYearInformation.BP_NUMBER_OF_EMPLOYEES = _fieldBuilder.buildEdmTypeField('BPNumberOfEmployees', 'Edm.String', true);
    /**
     * Static representation of the [[bpCptlReserveAmtInBalShtCrcy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpFiscalYearInformation.BP_CPTL_RESERVE_AMT_IN_BAL_SHT_CRCY = _fieldBuilder.buildEdmTypeField('BPCptlReserveAmtInBalShtCrcy', 'Edm.Decimal', true);
    /**
     * Static representation of the [[bpLglRevnRsrvAmtInBalShtCrcy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpFiscalYearInformation.BP_LGL_REVN_RSRV_AMT_IN_BAL_SHT_CRCY = _fieldBuilder.buildEdmTypeField('BPLglRevnRsrvAmtInBalShtCrcy', 'Edm.Decimal', true);
    /**
     * Static representation of the [[revnRsrvOwnStkAmtInBalShtCrcy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpFiscalYearInformation.REVN_RSRV_OWN_STK_AMT_IN_BAL_SHT_CRCY = _fieldBuilder.buildEdmTypeField('RevnRsrvOwnStkAmtInBalShtCrcy', 'Edm.Decimal', true);
    /**
     * Static representation of the [[bpStatryReserveAmtInBalShtCrcy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpFiscalYearInformation.BP_STATRY_RESERVE_AMT_IN_BAL_SHT_CRCY = _fieldBuilder.buildEdmTypeField('BPStatryReserveAmtInBalShtCrcy', 'Edm.Decimal', true);
    /**
     * Static representation of the [[bpOthRevnRsrvAmtInBalShtCrcy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpFiscalYearInformation.BP_OTH_REVN_RSRV_AMT_IN_BAL_SHT_CRCY = _fieldBuilder.buildEdmTypeField('BPOthRevnRsrvAmtInBalShtCrcy', 'Edm.Decimal', true);
    /**
     * Static representation of the [[bpPnLCarryfwdAmtInBalShtCrcy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpFiscalYearInformation.BP_PN_L_CARRYFWD_AMT_IN_BAL_SHT_CRCY = _fieldBuilder.buildEdmTypeField('BPPnLCarryfwdAmtInBalShtCrcy', 'Edm.Decimal', true);
    /**
     * Static representation of the [[bpSuborddLbltyAmtInBalShtCrcy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpFiscalYearInformation.BP_SUBORDD_LBLTY_AMT_IN_BAL_SHT_CRCY = _fieldBuilder.buildEdmTypeField('BPSuborddLbltyAmtInBalShtCrcy', 'Edm.Decimal', true);
    /**
     * Static representation of the [[bpRetOnTotalCptlEmpldInPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpFiscalYearInformation.BP_RET_ON_TOTAL_CPTL_EMPLD_IN_PERCENT = _fieldBuilder.buildEdmTypeField('BPRetOnTotalCptlEmpldInPercent', 'Edm.Decimal', true);
    /**
     * Static representation of the [[bpDebtClearancePeriodInYears]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpFiscalYearInformation.BP_DEBT_CLEARANCE_PERIOD_IN_YEARS = _fieldBuilder.buildEdmTypeField('BPDebtClearancePeriodInYears', 'Edm.Decimal', true);
    /**
     * Static representation of the [[bpFinancingCoeffInPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpFiscalYearInformation.BP_FINANCING_COEFF_IN_PERCENT = _fieldBuilder.buildEdmTypeField('BPFinancingCoeffInPercent', 'Edm.Decimal', true);
    /**
     * Static representation of the [[bpEquityRatioInPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpFiscalYearInformation.BP_EQUITY_RATIO_IN_PERCENT = _fieldBuilder.buildEdmTypeField('BPEquityRatioInPercent', 'Edm.Decimal', true);
    /**
     * All fields of the BpFiscalYearInformation entity.
     */
    BpFiscalYearInformation._allFields = [
        BpFiscalYearInformation.BUSINESS_PARTNER,
        BpFiscalYearInformation.BUSINESS_PARTNER_FISCAL_YEAR,
        BpFiscalYearInformation.BP_BALANCE_SHEET_CURRENCY,
        BpFiscalYearInformation.BP_ANNUAL_STOCKHOLDER_MEETING_DATE,
        BpFiscalYearInformation.BP_FISCAL_YEAR_START_DATE,
        BpFiscalYearInformation.BP_FISCAL_YEAR_END_DATE,
        BpFiscalYearInformation.BP_FISCAL_YEAR_IS_CLOSED,
        BpFiscalYearInformation.BP_FISCAL_YEAR_CLOSING_DATE,
        BpFiscalYearInformation.BP_FSCL_YR_CNSLDTD_FIN_STATEMENT_DTE,
        BpFiscalYearInformation.BP_CAPITAL_STOCK_AMT_IN_BAL_SHT_CRCY,
        BpFiscalYearInformation.BP_ISSD_STOCK_CPTL_AMT_IN_BAL_SHT_CRCY,
        BpFiscalYearInformation.BP_PARTCIPN_CERT_AMT_IN_BAL_SHT_CRCY,
        BpFiscalYearInformation.BP_EQUITY_CAPITAL_AMT_IN_BAL_SHT_CRCY,
        BpFiscalYearInformation.BP_GROSS_PREMIUM_AMT_IN_BAL_SHT_CRCY,
        BpFiscalYearInformation.BP_NET_PREMIUM_AMT_IN_BAL_SHT_CRCY,
        BpFiscalYearInformation.BP_ANNUAL_SALES_AMT_IN_BAL_SHT_CRCY,
        BpFiscalYearInformation.BP_ANNUAL_NET_INC_AMT_IN_BAL_SHT_CRCY,
        BpFiscalYearInformation.BP_DIVIDEND_DISTR_AMT_IN_BAL_SHT_CRCY,
        BpFiscalYearInformation.BP_DEBT_RATIO_IN_YEARS,
        BpFiscalYearInformation.BP_ANNUAL_PN_L_AMT_IN_BAL_SHT_CRCY,
        BpFiscalYearInformation.BP_BAL_SHEET_TOTAL_AMT_IN_BAL_SHT_CRCY,
        BpFiscalYearInformation.BP_NUMBER_OF_EMPLOYEES,
        BpFiscalYearInformation.BP_CPTL_RESERVE_AMT_IN_BAL_SHT_CRCY,
        BpFiscalYearInformation.BP_LGL_REVN_RSRV_AMT_IN_BAL_SHT_CRCY,
        BpFiscalYearInformation.REVN_RSRV_OWN_STK_AMT_IN_BAL_SHT_CRCY,
        BpFiscalYearInformation.BP_STATRY_RESERVE_AMT_IN_BAL_SHT_CRCY,
        BpFiscalYearInformation.BP_OTH_REVN_RSRV_AMT_IN_BAL_SHT_CRCY,
        BpFiscalYearInformation.BP_PN_L_CARRYFWD_AMT_IN_BAL_SHT_CRCY,
        BpFiscalYearInformation.BP_SUBORDD_LBLTY_AMT_IN_BAL_SHT_CRCY,
        BpFiscalYearInformation.BP_RET_ON_TOTAL_CPTL_EMPLD_IN_PERCENT,
        BpFiscalYearInformation.BP_DEBT_CLEARANCE_PERIOD_IN_YEARS,
        BpFiscalYearInformation.BP_FINANCING_COEFF_IN_PERCENT,
        BpFiscalYearInformation.BP_EQUITY_RATIO_IN_PERCENT
    ];
    /**
     * All fields selector.
     */
    BpFiscalYearInformation.ALL_FIELDS = new core_1.AllFields('*', BpFiscalYearInformation);
    /**
     * All key fields of the BpFiscalYearInformation entity.
     */
    BpFiscalYearInformation._keyFields = [BpFiscalYearInformation.BUSINESS_PARTNER, BpFiscalYearInformation.BUSINESS_PARTNER_FISCAL_YEAR];
    /**
     * Mapping of all key field names to the respective static field property BpFiscalYearInformation.
     */
    BpFiscalYearInformation._keys = BpFiscalYearInformation._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(BpFiscalYearInformation = exports.BpFiscalYearInformation || (exports.BpFiscalYearInformation = {}));
exports.BpFiscalYearInformation = BpFiscalYearInformation;
//# sourceMappingURL=BpFiscalYearInformation.js.map