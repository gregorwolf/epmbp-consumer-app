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
exports.BpFinancialServicesExtn = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var BpFinancialServicesExtnRequestBuilder_1 = require("./BpFinancialServicesExtnRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "A_BPFinancialServicesExtn" of service "API_BUSINESS_PARTNER".
 */
var BpFinancialServicesExtn = /** @class */ (function (_super) {
    __extends(BpFinancialServicesExtn, _super);
    function BpFinancialServicesExtn() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `BpFinancialServicesExtn`.
     * @returns A builder that constructs instances of entity type `BpFinancialServicesExtn`.
     */
    BpFinancialServicesExtn.builder = function () {
        return core_1.EntityV2.entityBuilder(BpFinancialServicesExtn);
    };
    /**
     * Returns a request builder to construct requests for operations on the `BpFinancialServicesExtn` entity type.
     * @returns A `BpFinancialServicesExtn` request builder.
     */
    BpFinancialServicesExtn.requestBuilder = function () {
        return new BpFinancialServicesExtnRequestBuilder_1.BpFinancialServicesExtnRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `BpFinancialServicesExtn`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `BpFinancialServicesExtn`.
     */
    BpFinancialServicesExtn.customField = function (fieldName) {
        return core_1.EntityV2.customFieldSelector(fieldName, BpFinancialServicesExtn);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    BpFinancialServicesExtn.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for BpFinancialServicesExtn.
     */
    BpFinancialServicesExtn._entityName = 'A_BPFinancialServicesExtn';
    /**
     * Default url path for the according service.
     */
    BpFinancialServicesExtn._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
    return BpFinancialServicesExtn;
}(core_1.EntityV2));
exports.BpFinancialServicesExtn = BpFinancialServicesExtn;
(function (BpFinancialServicesExtn) {
    var _fieldBuilder = new core_1.FieldBuilder(BpFinancialServicesExtn);
    /**
     * Static representation of the [[businessPartner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpFinancialServicesExtn.BUSINESS_PARTNER = _fieldBuilder.buildEdmTypeField('BusinessPartner', 'Edm.String', false);
    /**
     * Static representation of the [[businessPartnerIsVip]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpFinancialServicesExtn.BUSINESS_PARTNER_IS_VIP = _fieldBuilder.buildEdmTypeField('BusinessPartnerIsVIP', 'Edm.Boolean', true);
    /**
     * Static representation of the [[tradingPartner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpFinancialServicesExtn.TRADING_PARTNER = _fieldBuilder.buildEdmTypeField('TradingPartner', 'Edm.String', true);
    /**
     * Static representation of the [[factoryCalendar]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpFinancialServicesExtn.FACTORY_CALENDAR = _fieldBuilder.buildEdmTypeField('FactoryCalendar', 'Edm.String', true);
    /**
     * Static representation of the [[businessPartnerOfficeCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpFinancialServicesExtn.BUSINESS_PARTNER_OFFICE_COUNTRY = _fieldBuilder.buildEdmTypeField('BusinessPartnerOfficeCountry', 'Edm.String', true);
    /**
     * Static representation of the [[businessPartnerOfficeRegion]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpFinancialServicesExtn.BUSINESS_PARTNER_OFFICE_REGION = _fieldBuilder.buildEdmTypeField('BusinessPartnerOfficeRegion', 'Edm.String', true);
    /**
     * Static representation of the [[bpRegisteredOfficeName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpFinancialServicesExtn.BP_REGISTERED_OFFICE_NAME = _fieldBuilder.buildEdmTypeField('BPRegisteredOfficeName', 'Edm.String', true);
    /**
     * Static representation of the [[bpBalanceSheetCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpFinancialServicesExtn.BP_BALANCE_SHEET_CURRENCY = _fieldBuilder.buildEdmTypeField('BPBalanceSheetCurrency', 'Edm.String', true);
    /**
     * Static representation of the [[bpLastCptlIncrAmtInBalShtCrcy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpFinancialServicesExtn.BP_LAST_CPTL_INCR_AMT_IN_BAL_SHT_CRCY = _fieldBuilder.buildEdmTypeField('BPLastCptlIncrAmtInBalShtCrcy', 'Edm.Decimal', true);
    /**
     * Static representation of the [[bpLastCapitalIncreaseYear]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpFinancialServicesExtn.BP_LAST_CAPITAL_INCREASE_YEAR = _fieldBuilder.buildEdmTypeField('BPLastCapitalIncreaseYear', 'Edm.String', true);
    /**
     * Static representation of the [[bpBalanceSheetDisplayType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpFinancialServicesExtn.BP_BALANCE_SHEET_DISPLAY_TYPE = _fieldBuilder.buildEdmTypeField('BPBalanceSheetDisplayType', 'Edm.String', true);
    /**
     * Static representation of the [[businessPartnerCitizenship]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpFinancialServicesExtn.BUSINESS_PARTNER_CITIZENSHIP = _fieldBuilder.buildEdmTypeField('BusinessPartnerCitizenship', 'Edm.String', true);
    /**
     * Static representation of the [[bpMaritalPropertyRegime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpFinancialServicesExtn.BP_MARITAL_PROPERTY_REGIME = _fieldBuilder.buildEdmTypeField('BPMaritalPropertyRegime', 'Edm.String', true);
    /**
     * Static representation of the [[businessPartnerIncomeCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpFinancialServicesExtn.BUSINESS_PARTNER_INCOME_CURRENCY = _fieldBuilder.buildEdmTypeField('BusinessPartnerIncomeCurrency', 'Edm.String', true);
    /**
     * Static representation of the [[bpNumberOfChildren]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpFinancialServicesExtn.BP_NUMBER_OF_CHILDREN = _fieldBuilder.buildEdmTypeField('BPNumberOfChildren', 'Edm.Decimal', true);
    /**
     * Static representation of the [[bpNumberOfHouseholdMembers]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpFinancialServicesExtn.BP_NUMBER_OF_HOUSEHOLD_MEMBERS = _fieldBuilder.buildEdmTypeField('BPNumberOfHouseholdMembers', 'Edm.Decimal', true);
    /**
     * Static representation of the [[bpAnnualNetIncAmtInIncomeCrcy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpFinancialServicesExtn.BP_ANNUAL_NET_INC_AMT_IN_INCOME_CRCY = _fieldBuilder.buildEdmTypeField('BPAnnualNetIncAmtInIncomeCrcy', 'Edm.Decimal', true);
    /**
     * Static representation of the [[bpMonthlyNetIncAmtInIncomeCrcy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpFinancialServicesExtn.BP_MONTHLY_NET_INC_AMT_IN_INCOME_CRCY = _fieldBuilder.buildEdmTypeField('BPMonthlyNetIncAmtInIncomeCrcy', 'Edm.Decimal', true);
    /**
     * Static representation of the [[bpAnnualNetIncomeYear]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpFinancialServicesExtn.BP_ANNUAL_NET_INCOME_YEAR = _fieldBuilder.buildEdmTypeField('BPAnnualNetIncomeYear', 'Edm.String', true);
    /**
     * Static representation of the [[bpMonthlyNetIncomeMonth]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpFinancialServicesExtn.BP_MONTHLY_NET_INCOME_MONTH = _fieldBuilder.buildEdmTypeField('BPMonthlyNetIncomeMonth', 'Edm.String', true);
    /**
     * Static representation of the [[bpMonthlyNetIncomeYear]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpFinancialServicesExtn.BP_MONTHLY_NET_INCOME_YEAR = _fieldBuilder.buildEdmTypeField('BPMonthlyNetIncomeYear', 'Edm.String', true);
    /**
     * Static representation of the [[bpPlaceOfDeathName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpFinancialServicesExtn.BP_PLACE_OF_DEATH_NAME = _fieldBuilder.buildEdmTypeField('BPPlaceOfDeathName', 'Edm.String', true);
    /**
     * Static representation of the [[customerIsUnwanted]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpFinancialServicesExtn.CUSTOMER_IS_UNWANTED = _fieldBuilder.buildEdmTypeField('CustomerIsUnwanted', 'Edm.Boolean', true);
    /**
     * Static representation of the [[undesirabilityReason]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpFinancialServicesExtn.UNDESIRABILITY_REASON = _fieldBuilder.buildEdmTypeField('UndesirabilityReason', 'Edm.String', true);
    /**
     * Static representation of the [[undesirabilityComment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpFinancialServicesExtn.UNDESIRABILITY_COMMENT = _fieldBuilder.buildEdmTypeField('UndesirabilityComment', 'Edm.String', true);
    /**
     * Static representation of the [[lastCustomerContactDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpFinancialServicesExtn.LAST_CUSTOMER_CONTACT_DATE = _fieldBuilder.buildEdmTypeField('LastCustomerContactDate', 'Edm.DateTime', true);
    /**
     * Static representation of the [[bpGroupingCharacter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpFinancialServicesExtn.BP_GROUPING_CHARACTER = _fieldBuilder.buildEdmTypeField('BPGroupingCharacter', 'Edm.String', true);
    /**
     * Static representation of the [[bpLetterSalutation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpFinancialServicesExtn.BP_LETTER_SALUTATION = _fieldBuilder.buildEdmTypeField('BPLetterSalutation', 'Edm.String', true);
    /**
     * Static representation of the [[businessPartnerTargetGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpFinancialServicesExtn.BUSINESS_PARTNER_TARGET_GROUP = _fieldBuilder.buildEdmTypeField('BusinessPartnerTargetGroup', 'Edm.String', true);
    /**
     * Static representation of the [[businessPartnerEmployeeGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpFinancialServicesExtn.BUSINESS_PARTNER_EMPLOYEE_GROUP = _fieldBuilder.buildEdmTypeField('BusinessPartnerEmployeeGroup', 'Edm.String', true);
    /**
     * Static representation of the [[businessPartnerIsEmployee]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpFinancialServicesExtn.BUSINESS_PARTNER_IS_EMPLOYEE = _fieldBuilder.buildEdmTypeField('BusinessPartnerIsEmployee', 'Edm.Boolean', true);
    /**
     * Static representation of the [[bpTermnBusRelationsBankDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpFinancialServicesExtn.BP_TERMN_BUS_RELATIONS_BANK_DATE = _fieldBuilder.buildEdmTypeField('BPTermnBusRelationsBankDate', 'Edm.DateTime', true);
    /**
     * All fields of the BpFinancialServicesExtn entity.
     */
    BpFinancialServicesExtn._allFields = [
        BpFinancialServicesExtn.BUSINESS_PARTNER,
        BpFinancialServicesExtn.BUSINESS_PARTNER_IS_VIP,
        BpFinancialServicesExtn.TRADING_PARTNER,
        BpFinancialServicesExtn.FACTORY_CALENDAR,
        BpFinancialServicesExtn.BUSINESS_PARTNER_OFFICE_COUNTRY,
        BpFinancialServicesExtn.BUSINESS_PARTNER_OFFICE_REGION,
        BpFinancialServicesExtn.BP_REGISTERED_OFFICE_NAME,
        BpFinancialServicesExtn.BP_BALANCE_SHEET_CURRENCY,
        BpFinancialServicesExtn.BP_LAST_CPTL_INCR_AMT_IN_BAL_SHT_CRCY,
        BpFinancialServicesExtn.BP_LAST_CAPITAL_INCREASE_YEAR,
        BpFinancialServicesExtn.BP_BALANCE_SHEET_DISPLAY_TYPE,
        BpFinancialServicesExtn.BUSINESS_PARTNER_CITIZENSHIP,
        BpFinancialServicesExtn.BP_MARITAL_PROPERTY_REGIME,
        BpFinancialServicesExtn.BUSINESS_PARTNER_INCOME_CURRENCY,
        BpFinancialServicesExtn.BP_NUMBER_OF_CHILDREN,
        BpFinancialServicesExtn.BP_NUMBER_OF_HOUSEHOLD_MEMBERS,
        BpFinancialServicesExtn.BP_ANNUAL_NET_INC_AMT_IN_INCOME_CRCY,
        BpFinancialServicesExtn.BP_MONTHLY_NET_INC_AMT_IN_INCOME_CRCY,
        BpFinancialServicesExtn.BP_ANNUAL_NET_INCOME_YEAR,
        BpFinancialServicesExtn.BP_MONTHLY_NET_INCOME_MONTH,
        BpFinancialServicesExtn.BP_MONTHLY_NET_INCOME_YEAR,
        BpFinancialServicesExtn.BP_PLACE_OF_DEATH_NAME,
        BpFinancialServicesExtn.CUSTOMER_IS_UNWANTED,
        BpFinancialServicesExtn.UNDESIRABILITY_REASON,
        BpFinancialServicesExtn.UNDESIRABILITY_COMMENT,
        BpFinancialServicesExtn.LAST_CUSTOMER_CONTACT_DATE,
        BpFinancialServicesExtn.BP_GROUPING_CHARACTER,
        BpFinancialServicesExtn.BP_LETTER_SALUTATION,
        BpFinancialServicesExtn.BUSINESS_PARTNER_TARGET_GROUP,
        BpFinancialServicesExtn.BUSINESS_PARTNER_EMPLOYEE_GROUP,
        BpFinancialServicesExtn.BUSINESS_PARTNER_IS_EMPLOYEE,
        BpFinancialServicesExtn.BP_TERMN_BUS_RELATIONS_BANK_DATE
    ];
    /**
     * All fields selector.
     */
    BpFinancialServicesExtn.ALL_FIELDS = new core_1.AllFields('*', BpFinancialServicesExtn);
    /**
     * All key fields of the BpFinancialServicesExtn entity.
     */
    BpFinancialServicesExtn._keyFields = [BpFinancialServicesExtn.BUSINESS_PARTNER];
    /**
     * Mapping of all key field names to the respective static field property BpFinancialServicesExtn.
     */
    BpFinancialServicesExtn._keys = BpFinancialServicesExtn._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(BpFinancialServicesExtn = exports.BpFinancialServicesExtn || (exports.BpFinancialServicesExtn = {}));
exports.BpFinancialServicesExtn = BpFinancialServicesExtn;
//# sourceMappingURL=BpFinancialServicesExtn.js.map