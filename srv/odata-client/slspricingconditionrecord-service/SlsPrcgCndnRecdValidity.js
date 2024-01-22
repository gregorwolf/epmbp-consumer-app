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
exports.SlsPrcgCndnRecdValidity = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var SlsPrcgCndnRecdValidityRequestBuilder_1 = require("./SlsPrcgCndnRecdValidityRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "A_SlsPrcgCndnRecdValidity" of service "API_SLSPRICINGCONDITIONRECORD_SRV".
 */
var SlsPrcgCndnRecdValidity = /** @class */ (function (_super) {
    __extends(SlsPrcgCndnRecdValidity, _super);
    function SlsPrcgCndnRecdValidity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `SlsPrcgCndnRecdValidity`.
     * @returns A builder that constructs instances of entity type `SlsPrcgCndnRecdValidity`.
     */
    SlsPrcgCndnRecdValidity.builder = function () {
        return core_1.EntityV2.entityBuilder(SlsPrcgCndnRecdValidity);
    };
    /**
     * Returns a request builder to construct requests for operations on the `SlsPrcgCndnRecdValidity` entity type.
     * @returns A `SlsPrcgCndnRecdValidity` request builder.
     */
    SlsPrcgCndnRecdValidity.requestBuilder = function () {
        return new SlsPrcgCndnRecdValidityRequestBuilder_1.SlsPrcgCndnRecdValidityRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SlsPrcgCndnRecdValidity`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SlsPrcgCndnRecdValidity`.
     */
    SlsPrcgCndnRecdValidity.customField = function (fieldName) {
        return core_1.EntityV2.customFieldSelector(fieldName, SlsPrcgCndnRecdValidity);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    SlsPrcgCndnRecdValidity.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for SlsPrcgCndnRecdValidity.
     */
    SlsPrcgCndnRecdValidity._entityName = 'A_SlsPrcgCndnRecdValidity';
    /**
     * Default url path for the according service.
     */
    SlsPrcgCndnRecdValidity._defaultServicePath = '/sap/opu/odata/sap/API_SLSPRICINGCONDITIONRECORD_SRV';
    return SlsPrcgCndnRecdValidity;
}(core_1.EntityV2));
exports.SlsPrcgCndnRecdValidity = SlsPrcgCndnRecdValidity;
var SlsPrcgCndnRecdSuplmnt_1 = require("./SlsPrcgCndnRecdSuplmnt");
var SlsPrcgConditionRecord_1 = require("./SlsPrcgConditionRecord");
(function (SlsPrcgCndnRecdValidity) {
    var _fieldBuilder = new core_1.FieldBuilder(SlsPrcgCndnRecdValidity);
    /**
     * Static representation of the [[conditionRecord]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.CONDITION_RECORD = _fieldBuilder.buildEdmTypeField('ConditionRecord', 'Edm.String', false);
    /**
     * Static representation of the [[conditionValidityEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.CONDITION_VALIDITY_END_DATE = _fieldBuilder.buildEdmTypeField('ConditionValidityEndDate', 'Edm.DateTime', false);
    /**
     * Static representation of the [[conditionValidityStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.CONDITION_VALIDITY_START_DATE = _fieldBuilder.buildEdmTypeField('ConditionValidityStartDate', 'Edm.DateTime', true);
    /**
     * Static representation of the [[conditionApplication]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.CONDITION_APPLICATION = _fieldBuilder.buildEdmTypeField('ConditionApplication', 'Edm.String', true);
    /**
     * Static representation of the [[conditionType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.CONDITION_TYPE = _fieldBuilder.buildEdmTypeField('ConditionType', 'Edm.String', true);
    /**
     * Static representation of the [[conditionReleaseStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.CONDITION_RELEASE_STATUS = _fieldBuilder.buildEdmTypeField('ConditionReleaseStatus', 'Edm.String', true);
    /**
     * Static representation of the [[departureCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.DEPARTURE_COUNTRY = _fieldBuilder.buildEdmTypeField('DepartureCountry', 'Edm.String', true);
    /**
     * Static representation of the [[salesDocument]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.SALES_DOCUMENT = _fieldBuilder.buildEdmTypeField('SalesDocument', 'Edm.String', true);
    /**
     * Static representation of the [[salesDocumentItem]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.SALES_DOCUMENT_ITEM = _fieldBuilder.buildEdmTypeField('SalesDocumentItem', 'Edm.String', true);
    /**
     * Static representation of the [[billableControl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.BILLABLE_CONTROL = _fieldBuilder.buildEdmTypeField('BillableControl', 'Edm.String', true);
    /**
     * Static representation of the [[industry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.INDUSTRY = _fieldBuilder.buildEdmTypeField('Industry', 'Edm.String', true);
    /**
     * Static representation of the [[cityCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.CITY_CODE = _fieldBuilder.buildEdmTypeField('CityCode', 'Edm.String', true);
    /**
     * Static representation of the [[conditionContract]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.CONDITION_CONTRACT = _fieldBuilder.buildEdmTypeField('ConditionContract', 'Edm.String', true);
    /**
     * Static representation of the [[county]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.COUNTY = _fieldBuilder.buildEdmTypeField('County', 'Edm.String', true);
    /**
     * Static representation of the [[engagementProject]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.ENGAGEMENT_PROJECT = _fieldBuilder.buildEdmTypeField('EngagementProject', 'Edm.String', true);
    /**
     * Static representation of the [[configurationNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.CONFIGURATION_NUMBER = _fieldBuilder.buildEdmTypeField('ConfigurationNumber', 'Edm.String', true);
    /**
     * Static representation of the [[brNfDocumentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.BR_NF_DOCUMENT_TYPE = _fieldBuilder.buildEdmTypeField('BR_NFDocumentType', 'Edm.String', true);
    /**
     * Static representation of the [[brSpcfcFreeDefinedField1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.BR_SPCFC_FREE_DEFINED_FIELD_1 = _fieldBuilder.buildEdmTypeField('BRSpcfcFreeDefinedField1', 'Edm.String', true);
    /**
     * Static representation of the [[brSpcfcFreeDefinedField2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.BR_SPCFC_FREE_DEFINED_FIELD_2 = _fieldBuilder.buildEdmTypeField('BRSpcfcFreeDefinedField2', 'Edm.String', true);
    /**
     * Static representation of the [[brSpcfcFreeDefinedField3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.BR_SPCFC_FREE_DEFINED_FIELD_3 = _fieldBuilder.buildEdmTypeField('BRSpcfcFreeDefinedField3', 'Edm.String', true);
    /**
     * Static representation of the [[internationalArticleNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.INTERNATIONAL_ARTICLE_NUMBER = _fieldBuilder.buildEdmTypeField('InternationalArticleNumber', 'Edm.String', true);
    /**
     * Static representation of the [[technicalObjectType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.TECHNICAL_OBJECT_TYPE = _fieldBuilder.buildEdmTypeField('TechnicalObjectType', 'Edm.String', true);
    /**
     * Static representation of the [[equipment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.EQUIPMENT = _fieldBuilder.buildEdmTypeField('Equipment', 'Edm.String', true);
    /**
     * Static representation of the [[customerHierarchy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.CUSTOMER_HIERARCHY = _fieldBuilder.buildEdmTypeField('CustomerHierarchy', 'Edm.String', true);
    /**
     * Static representation of the [[incotermsClassification]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.INCOTERMS_CLASSIFICATION = _fieldBuilder.buildEdmTypeField('IncotermsClassification', 'Edm.String', true);
    /**
     * Static representation of the [[incotermsTransferLocation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.INCOTERMS_TRANSFER_LOCATION = _fieldBuilder.buildEdmTypeField('IncotermsTransferLocation', 'Edm.String', true);
    /**
     * Static representation of the [[accountTaxType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.ACCOUNT_TAX_TYPE = _fieldBuilder.buildEdmTypeField('AccountTaxType', 'Edm.String', true);
    /**
     * Static representation of the [[txRlvnceClassfctnForArgentina]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.TX_RLVNCE_CLASSFCTN_FOR_ARGENTINA = _fieldBuilder.buildEdmTypeField('TxRlvnceClassfctnForArgentina', 'Edm.String', true);
    /**
     * Static representation of the [[brTaxCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.BR_TAX_CODE = _fieldBuilder.buildEdmTypeField('BR_TaxCode', 'Edm.String', true);
    /**
     * Static representation of the [[localSalesTaxApplicabilityCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.LOCAL_SALES_TAX_APPLICABILITY_CODE = _fieldBuilder.buildEdmTypeField('LocalSalesTaxApplicabilityCode', 'Edm.String', true);
    /**
     * Static representation of the [[customerGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.CUSTOMER_GROUP = _fieldBuilder.buildEdmTypeField('CustomerGroup', 'Edm.String', true);
    /**
     * Static representation of the [[customerPriceGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.CUSTOMER_PRICE_GROUP = _fieldBuilder.buildEdmTypeField('CustomerPriceGroup', 'Edm.String', true);
    /**
     * Static representation of the [[materialPricingGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.MATERIAL_PRICING_GROUP = _fieldBuilder.buildEdmTypeField('MaterialPricingGroup', 'Edm.String', true);
    /**
     * Static representation of the [[soldToParty]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.SOLD_TO_PARTY = _fieldBuilder.buildEdmTypeField('SoldToParty', 'Edm.String', true);
    /**
     * Static representation of the [[bpForSoldToParty]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.BP_FOR_SOLD_TO_PARTY = _fieldBuilder.buildEdmTypeField('BPForSoldToParty', 'Edm.String', true);
    /**
     * Static representation of the [[customer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.CUSTOMER = _fieldBuilder.buildEdmTypeField('Customer', 'Edm.String', true);
    /**
     * Static representation of the [[bpForCustomer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.BP_FOR_CUSTOMER = _fieldBuilder.buildEdmTypeField('BPForCustomer', 'Edm.String', true);
    /**
     * Static representation of the [[payerParty]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.PAYER_PARTY = _fieldBuilder.buildEdmTypeField('PayerParty', 'Edm.String', true);
    /**
     * Static representation of the [[bpForPayerParty]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.BP_FOR_PAYER_PARTY = _fieldBuilder.buildEdmTypeField('BPForPayerParty', 'Edm.String', true);
    /**
     * Static representation of the [[shipToParty]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.SHIP_TO_PARTY = _fieldBuilder.buildEdmTypeField('ShipToParty', 'Edm.String', true);
    /**
     * Static representation of the [[bpForShipToParty]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.BP_FOR_SHIP_TO_PARTY = _fieldBuilder.buildEdmTypeField('BPForShipToParty', 'Edm.String', true);
    /**
     * Static representation of the [[supplier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.SUPPLIER = _fieldBuilder.buildEdmTypeField('Supplier', 'Edm.String', true);
    /**
     * Static representation of the [[bpForSupplier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.BP_FOR_SUPPLIER = _fieldBuilder.buildEdmTypeField('BPForSupplier', 'Edm.String', true);
    /**
     * Static representation of the [[destinationCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.DESTINATION_COUNTRY = _fieldBuilder.buildEdmTypeField('DestinationCountry', 'Edm.String', true);
    /**
     * Static representation of the [[materialGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.MATERIAL_GROUP = _fieldBuilder.buildEdmTypeField('MaterialGroup', 'Edm.String', true);
    /**
     * Static representation of the [[material]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.MATERIAL = _fieldBuilder.buildEdmTypeField('Material', 'Edm.String', true);
    /**
     * Static representation of the [[returnsRefundExtent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.RETURNS_REFUND_EXTENT = _fieldBuilder.buildEdmTypeField('ReturnsRefundExtent', 'Edm.String', true);
    /**
     * Static representation of the [[additionalMaterialGroup1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.ADDITIONAL_MATERIAL_GROUP_1 = _fieldBuilder.buildEdmTypeField('AdditionalMaterialGroup1', 'Edm.String', true);
    /**
     * Static representation of the [[additionalMaterialGroup2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.ADDITIONAL_MATERIAL_GROUP_2 = _fieldBuilder.buildEdmTypeField('AdditionalMaterialGroup2', 'Edm.String', true);
    /**
     * Static representation of the [[additionalMaterialGroup3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.ADDITIONAL_MATERIAL_GROUP_3 = _fieldBuilder.buildEdmTypeField('AdditionalMaterialGroup3', 'Edm.String', true);
    /**
     * Static representation of the [[additionalMaterialGroup4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.ADDITIONAL_MATERIAL_GROUP_4 = _fieldBuilder.buildEdmTypeField('AdditionalMaterialGroup4', 'Edm.String', true);
    /**
     * Static representation of the [[additionalMaterialGroup5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.ADDITIONAL_MATERIAL_GROUP_5 = _fieldBuilder.buildEdmTypeField('AdditionalMaterialGroup5', 'Edm.String', true);
    /**
     * Static representation of the [[personnel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.PERSONNEL = _fieldBuilder.buildEdmTypeField('Personnel', 'Edm.String', true);
    /**
     * Static representation of the [[priceListType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.PRICE_LIST_TYPE = _fieldBuilder.buildEdmTypeField('PriceListType', 'Edm.String', true);
    /**
     * Static representation of the [[postalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.POSTAL_CODE = _fieldBuilder.buildEdmTypeField('PostalCode', 'Edm.String', true);
    /**
     * Static representation of the [[region]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.REGION = _fieldBuilder.buildEdmTypeField('Region', 'Edm.String', true);
    /**
     * Static representation of the [[engagementProjectServiceOrg]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.ENGAGEMENT_PROJECT_SERVICE_ORG = _fieldBuilder.buildEdmTypeField('EngagementProjectServiceOrg', 'Edm.String', true);
    /**
     * Static representation of the [[requirementSegment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.REQUIREMENT_SEGMENT = _fieldBuilder.buildEdmTypeField('RequirementSegment', 'Edm.String', true);
    /**
     * Static representation of the [[stockSegment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.STOCK_SEGMENT = _fieldBuilder.buildEdmTypeField('StockSegment', 'Edm.String', true);
    /**
     * Static representation of the [[division]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.DIVISION = _fieldBuilder.buildEdmTypeField('Division', 'Edm.String', true);
    /**
     * Static representation of the [[commodityCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.COMMODITY_CODE = _fieldBuilder.buildEdmTypeField('CommodityCode', 'Edm.String', true);
    /**
     * Static representation of the [[consumptionTaxCtrlCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.CONSUMPTION_TAX_CTRL_CODE = _fieldBuilder.buildEdmTypeField('ConsumptionTaxCtrlCode', 'Edm.String', true);
    /**
     * Static representation of the [[brSpcfcTaxBasePercentageCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.BR_SPCFC_TAX_BASE_PERCENTAGE_CODE = _fieldBuilder.buildEdmTypeField('BRSpcfcTaxBasePercentageCode', 'Edm.String', true);
    /**
     * Static representation of the [[brSpcfcTxGrpDynTaxExceptions]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.BR_SPCFC_TX_GRP_DYN_TAX_EXCEPTIONS = _fieldBuilder.buildEdmTypeField('BRSpcfcTxGrpDynTaxExceptions', 'Edm.String', true);
    /**
     * Static representation of the [[customerTaxClassification1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.CUSTOMER_TAX_CLASSIFICATION_1 = _fieldBuilder.buildEdmTypeField('CustomerTaxClassification1', 'Edm.String', true);
    /**
     * Static representation of the [[customerTaxClassification2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.CUSTOMER_TAX_CLASSIFICATION_2 = _fieldBuilder.buildEdmTypeField('CustomerTaxClassification2', 'Edm.String', true);
    /**
     * Static representation of the [[customerTaxClassification3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.CUSTOMER_TAX_CLASSIFICATION_3 = _fieldBuilder.buildEdmTypeField('CustomerTaxClassification3', 'Edm.String', true);
    /**
     * Static representation of the [[customerTaxClassification4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.CUSTOMER_TAX_CLASSIFICATION_4 = _fieldBuilder.buildEdmTypeField('CustomerTaxClassification4', 'Edm.String', true);
    /**
     * Static representation of the [[customerTaxClassification5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.CUSTOMER_TAX_CLASSIFICATION_5 = _fieldBuilder.buildEdmTypeField('CustomerTaxClassification5', 'Edm.String', true);
    /**
     * Static representation of the [[customerTaxClassification6]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.CUSTOMER_TAX_CLASSIFICATION_6 = _fieldBuilder.buildEdmTypeField('CustomerTaxClassification6', 'Edm.String', true);
    /**
     * Static representation of the [[customerTaxClassification7]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.CUSTOMER_TAX_CLASSIFICATION_7 = _fieldBuilder.buildEdmTypeField('CustomerTaxClassification7', 'Edm.String', true);
    /**
     * Static representation of the [[customerTaxClassification8]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.CUSTOMER_TAX_CLASSIFICATION_8 = _fieldBuilder.buildEdmTypeField('CustomerTaxClassification8', 'Edm.String', true);
    /**
     * Static representation of the [[customerTaxClassification9]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.CUSTOMER_TAX_CLASSIFICATION_9 = _fieldBuilder.buildEdmTypeField('CustomerTaxClassification9', 'Edm.String', true);
    /**
     * Static representation of the [[productTaxClassification1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.PRODUCT_TAX_CLASSIFICATION_1 = _fieldBuilder.buildEdmTypeField('ProductTaxClassification1', 'Edm.String', true);
    /**
     * Static representation of the [[productTaxClassification2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.PRODUCT_TAX_CLASSIFICATION_2 = _fieldBuilder.buildEdmTypeField('ProductTaxClassification2', 'Edm.String', true);
    /**
     * Static representation of the [[productTaxClassification3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.PRODUCT_TAX_CLASSIFICATION_3 = _fieldBuilder.buildEdmTypeField('ProductTaxClassification3', 'Edm.String', true);
    /**
     * Static representation of the [[productTaxClassification4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.PRODUCT_TAX_CLASSIFICATION_4 = _fieldBuilder.buildEdmTypeField('ProductTaxClassification4', 'Edm.String', true);
    /**
     * Static representation of the [[productTaxClassification5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.PRODUCT_TAX_CLASSIFICATION_5 = _fieldBuilder.buildEdmTypeField('ProductTaxClassification5', 'Edm.String', true);
    /**
     * Static representation of the [[productTaxClassification6]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.PRODUCT_TAX_CLASSIFICATION_6 = _fieldBuilder.buildEdmTypeField('ProductTaxClassification6', 'Edm.String', true);
    /**
     * Static representation of the [[productTaxClassification7]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.PRODUCT_TAX_CLASSIFICATION_7 = _fieldBuilder.buildEdmTypeField('ProductTaxClassification7', 'Edm.String', true);
    /**
     * Static representation of the [[productTaxClassification8]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.PRODUCT_TAX_CLASSIFICATION_8 = _fieldBuilder.buildEdmTypeField('ProductTaxClassification8', 'Edm.String', true);
    /**
     * Static representation of the [[productTaxClassification9]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.PRODUCT_TAX_CLASSIFICATION_9 = _fieldBuilder.buildEdmTypeField('ProductTaxClassification9', 'Edm.String', true);
    /**
     * Static representation of the [[tradingContract]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.TRADING_CONTRACT = _fieldBuilder.buildEdmTypeField('TradingContract', 'Edm.String', true);
    /**
     * Static representation of the [[tradingContractItem]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.TRADING_CONTRACT_ITEM = _fieldBuilder.buildEdmTypeField('TradingContractItem', 'Edm.String', true);
    /**
     * Static representation of the [[taxJurisdiction]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.TAX_JURISDICTION = _fieldBuilder.buildEdmTypeField('TaxJurisdiction', 'Edm.String', true);
    /**
     * Static representation of the [[brSpcfcTaxDepartureRegion]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.BR_SPCFC_TAX_DEPARTURE_REGION = _fieldBuilder.buildEdmTypeField('BRSpcfcTaxDepartureRegion', 'Edm.String', true);
    /**
     * Static representation of the [[brSpcfcTaxDestinationRegion]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.BR_SPCFC_TAX_DESTINATION_REGION = _fieldBuilder.buildEdmTypeField('BRSpcfcTaxDestinationRegion', 'Edm.String', true);
    /**
     * Static representation of the [[mainItemMaterialPricingGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.MAIN_ITEM_MATERIAL_PRICING_GROUP = _fieldBuilder.buildEdmTypeField('MainItemMaterialPricingGroup', 'Edm.String', true);
    /**
     * Static representation of the [[mainItemPricingRefMaterial]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.MAIN_ITEM_PRICING_REF_MATERIAL = _fieldBuilder.buildEdmTypeField('MainItemPricingRefMaterial', 'Edm.String', true);
    /**
     * Static representation of the [[variantCondition]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.VARIANT_CONDITION = _fieldBuilder.buildEdmTypeField('VariantCondition', 'Edm.String', true);
    /**
     * Static representation of the [[valueAddedServiceChargeCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.VALUE_ADDED_SERVICE_CHARGE_CODE = _fieldBuilder.buildEdmTypeField('ValueAddedServiceChargeCode', 'Edm.String', true);
    /**
     * Static representation of the [[sdDocument]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.SD_DOCUMENT = _fieldBuilder.buildEdmTypeField('SDDocument', 'Edm.String', true);
    /**
     * Static representation of the [[referenceSdDocument]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.REFERENCE_SD_DOCUMENT = _fieldBuilder.buildEdmTypeField('ReferenceSDDocument', 'Edm.String', true);
    /**
     * Static representation of the [[referenceSdDocumentItem]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.REFERENCE_SD_DOCUMENT_ITEM = _fieldBuilder.buildEdmTypeField('ReferenceSDDocumentItem', 'Edm.String', true);
    /**
     * Static representation of the [[salesOffice]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.SALES_OFFICE = _fieldBuilder.buildEdmTypeField('SalesOffice', 'Edm.String', true);
    /**
     * Static representation of the [[salesGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.SALES_GROUP = _fieldBuilder.buildEdmTypeField('SalesGroup', 'Edm.String', true);
    /**
     * Static representation of the [[salesOrganization]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.SALES_ORGANIZATION = _fieldBuilder.buildEdmTypeField('SalesOrganization', 'Edm.String', true);
    /**
     * Static representation of the [[salesOrderSalesOrganization]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.SALES_ORDER_SALES_ORGANIZATION = _fieldBuilder.buildEdmTypeField('SalesOrderSalesOrganization', 'Edm.String', true);
    /**
     * Static representation of the [[orderQuantityUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.ORDER_QUANTITY_UNIT = _fieldBuilder.buildEdmTypeField('OrderQuantityUnit', 'Edm.String', true);
    /**
     * Static representation of the [[distributionChannel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.DISTRIBUTION_CHANNEL = _fieldBuilder.buildEdmTypeField('DistributionChannel', 'Edm.String', true);
    /**
     * Static representation of the [[transactionCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.TRANSACTION_CURRENCY = _fieldBuilder.buildEdmTypeField('TransactionCurrency', 'Edm.String', true);
    /**
     * Static representation of the [[wbsElementInternalId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.WBS_ELEMENT_INTERNAL_ID = _fieldBuilder.buildEdmTypeField('WBSElementInternalID', 'Edm.String', true);
    /**
     * Static representation of the [[wbsElementExternalId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.WBS_ELEMENT_EXTERNAL_ID = _fieldBuilder.buildEdmTypeField('WBSElementExternalID', 'Edm.String', true);
    /**
     * Static representation of the [[workPackage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.WORK_PACKAGE = _fieldBuilder.buildEdmTypeField('WorkPackage', 'Edm.String', true);
    /**
     * Static representation of the [[plant]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.PLANT = _fieldBuilder.buildEdmTypeField('Plant', 'Edm.String', true);
    /**
     * Static representation of the [[plantRegion]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.PLANT_REGION = _fieldBuilder.buildEdmTypeField('PlantRegion', 'Edm.String', true);
    /**
     * Static representation of the [[workItem]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.WORK_ITEM = _fieldBuilder.buildEdmTypeField('WorkItem', 'Edm.String', true);
    /**
     * Static representation of the [[conditionProcessingStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.CONDITION_PROCESSING_STATUS = _fieldBuilder.buildEdmTypeField('ConditionProcessingStatus', 'Edm.String', true);
    /**
     * Static representation of the [[pricingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.PRICING_DATE = _fieldBuilder.buildEdmTypeField('PricingDate', 'Edm.DateTime', true);
    /**
     * Static representation of the [[conditionIsExclusive]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.CONDITION_IS_EXCLUSIVE = _fieldBuilder.buildEdmTypeField('ConditionIsExclusive', 'Edm.Boolean', true);
    /**
     * Static representation of the [[conditionScaleBasisValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.CONDITION_SCALE_BASIS_VALUE = _fieldBuilder.buildEdmTypeField('ConditionScaleBasisValue', 'Edm.String', true);
    /**
     * Static representation of the [[taxCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.TAX_CODE = _fieldBuilder.buildEdmTypeField('TaxCode', 'Edm.String', true);
    /**
     * Static representation of the [[serviceDocument]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.SERVICE_DOCUMENT = _fieldBuilder.buildEdmTypeField('ServiceDocument', 'Edm.String', true);
    /**
     * Static representation of the [[serviceDocumentItem]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.SERVICE_DOCUMENT_ITEM = _fieldBuilder.buildEdmTypeField('ServiceDocumentItem', 'Edm.String', true);
    /**
     * Static representation of the [[timeSheetOvertimeCategory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.TIME_SHEET_OVERTIME_CATEGORY = _fieldBuilder.buildEdmTypeField('TimeSheetOvertimeCategory', 'Edm.String', true);
    /**
     * Static representation of the [[salesSdDocumentCategory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.SALES_SD_DOCUMENT_CATEGORY = _fieldBuilder.buildEdmTypeField('SalesSDDocumentCategory', 'Edm.String', true);
    /**
     * Static representation of the [[returnReason]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.RETURN_REASON = _fieldBuilder.buildEdmTypeField('ReturnReason', 'Edm.String', true);
    /**
     * Static representation of the [[prodUnivHierarchyNode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.PROD_UNIV_HIERARCHY_NODE = _fieldBuilder.buildEdmTypeField('ProdUnivHierarchyNode', 'Edm.String', true);
    /**
     * Static representation of the [[productHierarchyNode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.PRODUCT_HIERARCHY_NODE = _fieldBuilder.buildEdmTypeField('ProductHierarchyNode', 'Edm.String', true);
    /**
     * Static representation of the [[customerConditionGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.CUSTOMER_CONDITION_GROUP = _fieldBuilder.buildEdmTypeField('CustomerConditionGroup', 'Edm.String', true);
    /**
     * Static representation of the [[shippingType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.SHIPPING_TYPE = _fieldBuilder.buildEdmTypeField('ShippingType', 'Edm.String', true);
    /**
     * Static representation of the [[subscriptionContractDuration]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.SUBSCRIPTION_CONTRACT_DURATION = _fieldBuilder.buildEdmTypeField('SubscriptionContractDuration', 'Edm.String', true);
    /**
     * Static representation of the [[subscrpnContrDurationUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.SUBSCRPN_CONTR_DURATION_UNIT = _fieldBuilder.buildEdmTypeField('SubscrpnContrDurationUnit', 'Edm.String', true);
    /**
     * Static representation of the [[subscriptionContractLockReason]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.SUBSCRIPTION_CONTRACT_LOCK_REASON = _fieldBuilder.buildEdmTypeField('SubscriptionContractLockReason', 'Edm.String', true);
    /**
     * Static representation of the [[crsCtlgMappgPriceVersionNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.CRS_CTLG_MAPPG_PRICE_VERSION_NUMBER = _fieldBuilder.buildEdmTypeField('CrsCtlgMappgPriceVersionNumber', 'Edm.String', true);
    /**
     * Static representation of the [[orderType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.ORDER_TYPE = _fieldBuilder.buildEdmTypeField('OrderType', 'Edm.String', true);
    /**
     * Static representation of the [[salesDocumentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.SALES_DOCUMENT_TYPE = _fieldBuilder.buildEdmTypeField('SalesDocumentType', 'Edm.String', true);
    /**
     * Static representation of the [[sdDocumentReason]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.SD_DOCUMENT_REASON = _fieldBuilder.buildEdmTypeField('SDDocumentReason', 'Edm.String', true);
    /**
     * Static representation of the [[volumeRebateGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.VOLUME_REBATE_GROUP = _fieldBuilder.buildEdmTypeField('VolumeRebateGroup', 'Edm.String', true);
    /**
     * Static representation of the [[valuationType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.VALUATION_TYPE = _fieldBuilder.buildEdmTypeField('ValuationType', 'Edm.String', true);
    /**
     * Static representation of the [[salesDistrict]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.SALES_DISTRICT = _fieldBuilder.buildEdmTypeField('SalesDistrict', 'Edm.String', true);
    /**
     * Static representation of the [[batch]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.BATCH = _fieldBuilder.buildEdmTypeField('Batch', 'Edm.String', true);
    /**
     * Static representation of the [[purgDocSupplyingPlant]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.PURG_DOC_SUPPLYING_PLANT = _fieldBuilder.buildEdmTypeField('PurgDocSupplyingPlant', 'Edm.String', true);
    /**
     * Static representation of the [[matUsageIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.MAT_USAGE_INDICATOR = _fieldBuilder.buildEdmTypeField('MatUsageIndicator', 'Edm.String', true);
    /**
     * Static representation of the [[shippingCondition]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.SHIPPING_CONDITION = _fieldBuilder.buildEdmTypeField('ShippingCondition', 'Edm.String', true);
    /**
     * Static representation of the [[plantCounty]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.PLANT_COUNTY = _fieldBuilder.buildEdmTypeField('PlantCounty', 'Edm.String', true);
    /**
     * Static representation of the [[plantCity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.PLANT_CITY = _fieldBuilder.buildEdmTypeField('PlantCity', 'Edm.String', true);
    /**
     * Static representation of the [[materialExternalGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.MATERIAL_EXTERNAL_GROUP = _fieldBuilder.buildEdmTypeField('MaterialExternalGroup', 'Edm.String', true);
    /**
     * Static representation of the [[customerHierarchyRootNode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.CUSTOMER_HIERARCHY_ROOT_NODE = _fieldBuilder.buildEdmTypeField('CustomerHierarchyRootNode', 'Edm.String', true);
    /**
     * Static representation of the [[customerHierarchyNodeId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.CUSTOMER_HIERARCHY_NODE_ID = _fieldBuilder.buildEdmTypeField('CustomerHierarchyNodeID', 'Edm.String', true);
    /**
     * Static representation of the [[customerHierarchyNodeType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.CUSTOMER_HIERARCHY_NODE_TYPE = _fieldBuilder.buildEdmTypeField('CustomerHierarchyNodeType', 'Edm.String', true);
    /**
     * Static representation of the [[additionalCustomerGroup1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.ADDITIONAL_CUSTOMER_GROUP_1 = _fieldBuilder.buildEdmTypeField('AdditionalCustomerGroup1', 'Edm.String', true);
    /**
     * Static representation of the [[additionalCustomerGroup2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.ADDITIONAL_CUSTOMER_GROUP_2 = _fieldBuilder.buildEdmTypeField('AdditionalCustomerGroup2', 'Edm.String', true);
    /**
     * Static representation of the [[additionalCustomerGroup3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.ADDITIONAL_CUSTOMER_GROUP_3 = _fieldBuilder.buildEdmTypeField('AdditionalCustomerGroup3', 'Edm.String', true);
    /**
     * Static representation of the [[additionalCustomerGroup4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.ADDITIONAL_CUSTOMER_GROUP_4 = _fieldBuilder.buildEdmTypeField('AdditionalCustomerGroup4', 'Edm.String', true);
    /**
     * Static representation of the [[additionalCustomerGroup5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.ADDITIONAL_CUSTOMER_GROUP_5 = _fieldBuilder.buildEdmTypeField('AdditionalCustomerGroup5', 'Edm.String', true);
    /**
     * Static representation of the [[sdDocumentItem]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.SD_DOCUMENT_ITEM = _fieldBuilder.buildEdmTypeField('SDDocumentItem', 'Edm.String', true);
    /**
     * Static representation of the [[cndnBillingDocumentCategory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.CNDN_BILLING_DOCUMENT_CATEGORY = _fieldBuilder.buildEdmTypeField('CndnBillingDocumentCategory', 'Edm.String', true);
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.COUNTRY = _fieldBuilder.buildEdmTypeField('Country', 'Edm.String', true);
    /**
     * Static representation of the [[praContract]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.PRA_CONTRACT = _fieldBuilder.buildEdmTypeField('PRAContract', 'Edm.String', true);
    /**
     * Static representation of the [[well]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.WELL = _fieldBuilder.buildEdmTypeField('Well', 'Edm.String', true);
    /**
     * Static representation of the [[wellCompletion]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.WELL_COMPLETION = _fieldBuilder.buildEdmTypeField('WellCompletion', 'Edm.String', true);
    /**
     * Static representation of the [[measurementPoint]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.MEASUREMENT_POINT = _fieldBuilder.buildEdmTypeField('MeasurementPoint', 'Edm.String', true);
    /**
     * Static representation of the [[pricingFormulaNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.PRICING_FORMULA_NUMBER = _fieldBuilder.buildEdmTypeField('PricingFormulaNumber', 'Edm.String', true);
    /**
     * Static representation of the [[eTag]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.E_TAG = _fieldBuilder.buildEdmTypeField('ETag', 'Edm.String', true);
    /**
     * Static representation of the one-to-many navigation property [[toSlsPrcgCndnRecdSuplmnt]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.TO_SLS_PRCG_CNDN_RECD_SUPLMNT = new core_1.Link('to_SlsPrcgCndnRecdSuplmnt', SlsPrcgCndnRecdValidity, SlsPrcgCndnRecdSuplmnt_1.SlsPrcgCndnRecdSuplmnt);
    /**
     * Static representation of the one-to-one navigation property [[toSlsPrcgConditionRecord]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdValidity.TO_SLS_PRCG_CONDITION_RECORD = new core_1.OneToOneLink('to_SlsPrcgConditionRecord', SlsPrcgCndnRecdValidity, SlsPrcgConditionRecord_1.SlsPrcgConditionRecord);
    /**
     * All fields of the SlsPrcgCndnRecdValidity entity.
     */
    SlsPrcgCndnRecdValidity._allFields = [
        SlsPrcgCndnRecdValidity.CONDITION_RECORD,
        SlsPrcgCndnRecdValidity.CONDITION_VALIDITY_END_DATE,
        SlsPrcgCndnRecdValidity.CONDITION_VALIDITY_START_DATE,
        SlsPrcgCndnRecdValidity.CONDITION_APPLICATION,
        SlsPrcgCndnRecdValidity.CONDITION_TYPE,
        SlsPrcgCndnRecdValidity.CONDITION_RELEASE_STATUS,
        SlsPrcgCndnRecdValidity.DEPARTURE_COUNTRY,
        SlsPrcgCndnRecdValidity.SALES_DOCUMENT,
        SlsPrcgCndnRecdValidity.SALES_DOCUMENT_ITEM,
        SlsPrcgCndnRecdValidity.BILLABLE_CONTROL,
        SlsPrcgCndnRecdValidity.INDUSTRY,
        SlsPrcgCndnRecdValidity.CITY_CODE,
        SlsPrcgCndnRecdValidity.CONDITION_CONTRACT,
        SlsPrcgCndnRecdValidity.COUNTY,
        SlsPrcgCndnRecdValidity.ENGAGEMENT_PROJECT,
        SlsPrcgCndnRecdValidity.CONFIGURATION_NUMBER,
        SlsPrcgCndnRecdValidity.BR_NF_DOCUMENT_TYPE,
        SlsPrcgCndnRecdValidity.BR_SPCFC_FREE_DEFINED_FIELD_1,
        SlsPrcgCndnRecdValidity.BR_SPCFC_FREE_DEFINED_FIELD_2,
        SlsPrcgCndnRecdValidity.BR_SPCFC_FREE_DEFINED_FIELD_3,
        SlsPrcgCndnRecdValidity.INTERNATIONAL_ARTICLE_NUMBER,
        SlsPrcgCndnRecdValidity.TECHNICAL_OBJECT_TYPE,
        SlsPrcgCndnRecdValidity.EQUIPMENT,
        SlsPrcgCndnRecdValidity.CUSTOMER_HIERARCHY,
        SlsPrcgCndnRecdValidity.INCOTERMS_CLASSIFICATION,
        SlsPrcgCndnRecdValidity.INCOTERMS_TRANSFER_LOCATION,
        SlsPrcgCndnRecdValidity.ACCOUNT_TAX_TYPE,
        SlsPrcgCndnRecdValidity.TX_RLVNCE_CLASSFCTN_FOR_ARGENTINA,
        SlsPrcgCndnRecdValidity.BR_TAX_CODE,
        SlsPrcgCndnRecdValidity.LOCAL_SALES_TAX_APPLICABILITY_CODE,
        SlsPrcgCndnRecdValidity.CUSTOMER_GROUP,
        SlsPrcgCndnRecdValidity.CUSTOMER_PRICE_GROUP,
        SlsPrcgCndnRecdValidity.MATERIAL_PRICING_GROUP,
        SlsPrcgCndnRecdValidity.SOLD_TO_PARTY,
        SlsPrcgCndnRecdValidity.BP_FOR_SOLD_TO_PARTY,
        SlsPrcgCndnRecdValidity.CUSTOMER,
        SlsPrcgCndnRecdValidity.BP_FOR_CUSTOMER,
        SlsPrcgCndnRecdValidity.PAYER_PARTY,
        SlsPrcgCndnRecdValidity.BP_FOR_PAYER_PARTY,
        SlsPrcgCndnRecdValidity.SHIP_TO_PARTY,
        SlsPrcgCndnRecdValidity.BP_FOR_SHIP_TO_PARTY,
        SlsPrcgCndnRecdValidity.SUPPLIER,
        SlsPrcgCndnRecdValidity.BP_FOR_SUPPLIER,
        SlsPrcgCndnRecdValidity.DESTINATION_COUNTRY,
        SlsPrcgCndnRecdValidity.MATERIAL_GROUP,
        SlsPrcgCndnRecdValidity.MATERIAL,
        SlsPrcgCndnRecdValidity.RETURNS_REFUND_EXTENT,
        SlsPrcgCndnRecdValidity.ADDITIONAL_MATERIAL_GROUP_1,
        SlsPrcgCndnRecdValidity.ADDITIONAL_MATERIAL_GROUP_2,
        SlsPrcgCndnRecdValidity.ADDITIONAL_MATERIAL_GROUP_3,
        SlsPrcgCndnRecdValidity.ADDITIONAL_MATERIAL_GROUP_4,
        SlsPrcgCndnRecdValidity.ADDITIONAL_MATERIAL_GROUP_5,
        SlsPrcgCndnRecdValidity.PERSONNEL,
        SlsPrcgCndnRecdValidity.PRICE_LIST_TYPE,
        SlsPrcgCndnRecdValidity.POSTAL_CODE,
        SlsPrcgCndnRecdValidity.REGION,
        SlsPrcgCndnRecdValidity.ENGAGEMENT_PROJECT_SERVICE_ORG,
        SlsPrcgCndnRecdValidity.REQUIREMENT_SEGMENT,
        SlsPrcgCndnRecdValidity.STOCK_SEGMENT,
        SlsPrcgCndnRecdValidity.DIVISION,
        SlsPrcgCndnRecdValidity.COMMODITY_CODE,
        SlsPrcgCndnRecdValidity.CONSUMPTION_TAX_CTRL_CODE,
        SlsPrcgCndnRecdValidity.BR_SPCFC_TAX_BASE_PERCENTAGE_CODE,
        SlsPrcgCndnRecdValidity.BR_SPCFC_TX_GRP_DYN_TAX_EXCEPTIONS,
        SlsPrcgCndnRecdValidity.CUSTOMER_TAX_CLASSIFICATION_1,
        SlsPrcgCndnRecdValidity.CUSTOMER_TAX_CLASSIFICATION_2,
        SlsPrcgCndnRecdValidity.CUSTOMER_TAX_CLASSIFICATION_3,
        SlsPrcgCndnRecdValidity.CUSTOMER_TAX_CLASSIFICATION_4,
        SlsPrcgCndnRecdValidity.CUSTOMER_TAX_CLASSIFICATION_5,
        SlsPrcgCndnRecdValidity.CUSTOMER_TAX_CLASSIFICATION_6,
        SlsPrcgCndnRecdValidity.CUSTOMER_TAX_CLASSIFICATION_7,
        SlsPrcgCndnRecdValidity.CUSTOMER_TAX_CLASSIFICATION_8,
        SlsPrcgCndnRecdValidity.CUSTOMER_TAX_CLASSIFICATION_9,
        SlsPrcgCndnRecdValidity.PRODUCT_TAX_CLASSIFICATION_1,
        SlsPrcgCndnRecdValidity.PRODUCT_TAX_CLASSIFICATION_2,
        SlsPrcgCndnRecdValidity.PRODUCT_TAX_CLASSIFICATION_3,
        SlsPrcgCndnRecdValidity.PRODUCT_TAX_CLASSIFICATION_4,
        SlsPrcgCndnRecdValidity.PRODUCT_TAX_CLASSIFICATION_5,
        SlsPrcgCndnRecdValidity.PRODUCT_TAX_CLASSIFICATION_6,
        SlsPrcgCndnRecdValidity.PRODUCT_TAX_CLASSIFICATION_7,
        SlsPrcgCndnRecdValidity.PRODUCT_TAX_CLASSIFICATION_8,
        SlsPrcgCndnRecdValidity.PRODUCT_TAX_CLASSIFICATION_9,
        SlsPrcgCndnRecdValidity.TRADING_CONTRACT,
        SlsPrcgCndnRecdValidity.TRADING_CONTRACT_ITEM,
        SlsPrcgCndnRecdValidity.TAX_JURISDICTION,
        SlsPrcgCndnRecdValidity.BR_SPCFC_TAX_DEPARTURE_REGION,
        SlsPrcgCndnRecdValidity.BR_SPCFC_TAX_DESTINATION_REGION,
        SlsPrcgCndnRecdValidity.MAIN_ITEM_MATERIAL_PRICING_GROUP,
        SlsPrcgCndnRecdValidity.MAIN_ITEM_PRICING_REF_MATERIAL,
        SlsPrcgCndnRecdValidity.VARIANT_CONDITION,
        SlsPrcgCndnRecdValidity.VALUE_ADDED_SERVICE_CHARGE_CODE,
        SlsPrcgCndnRecdValidity.SD_DOCUMENT,
        SlsPrcgCndnRecdValidity.REFERENCE_SD_DOCUMENT,
        SlsPrcgCndnRecdValidity.REFERENCE_SD_DOCUMENT_ITEM,
        SlsPrcgCndnRecdValidity.SALES_OFFICE,
        SlsPrcgCndnRecdValidity.SALES_GROUP,
        SlsPrcgCndnRecdValidity.SALES_ORGANIZATION,
        SlsPrcgCndnRecdValidity.SALES_ORDER_SALES_ORGANIZATION,
        SlsPrcgCndnRecdValidity.ORDER_QUANTITY_UNIT,
        SlsPrcgCndnRecdValidity.DISTRIBUTION_CHANNEL,
        SlsPrcgCndnRecdValidity.TRANSACTION_CURRENCY,
        SlsPrcgCndnRecdValidity.WBS_ELEMENT_INTERNAL_ID,
        SlsPrcgCndnRecdValidity.WBS_ELEMENT_EXTERNAL_ID,
        SlsPrcgCndnRecdValidity.WORK_PACKAGE,
        SlsPrcgCndnRecdValidity.PLANT,
        SlsPrcgCndnRecdValidity.PLANT_REGION,
        SlsPrcgCndnRecdValidity.WORK_ITEM,
        SlsPrcgCndnRecdValidity.CONDITION_PROCESSING_STATUS,
        SlsPrcgCndnRecdValidity.PRICING_DATE,
        SlsPrcgCndnRecdValidity.CONDITION_IS_EXCLUSIVE,
        SlsPrcgCndnRecdValidity.CONDITION_SCALE_BASIS_VALUE,
        SlsPrcgCndnRecdValidity.TAX_CODE,
        SlsPrcgCndnRecdValidity.SERVICE_DOCUMENT,
        SlsPrcgCndnRecdValidity.SERVICE_DOCUMENT_ITEM,
        SlsPrcgCndnRecdValidity.TIME_SHEET_OVERTIME_CATEGORY,
        SlsPrcgCndnRecdValidity.SALES_SD_DOCUMENT_CATEGORY,
        SlsPrcgCndnRecdValidity.RETURN_REASON,
        SlsPrcgCndnRecdValidity.PROD_UNIV_HIERARCHY_NODE,
        SlsPrcgCndnRecdValidity.PRODUCT_HIERARCHY_NODE,
        SlsPrcgCndnRecdValidity.CUSTOMER_CONDITION_GROUP,
        SlsPrcgCndnRecdValidity.SHIPPING_TYPE,
        SlsPrcgCndnRecdValidity.SUBSCRIPTION_CONTRACT_DURATION,
        SlsPrcgCndnRecdValidity.SUBSCRPN_CONTR_DURATION_UNIT,
        SlsPrcgCndnRecdValidity.SUBSCRIPTION_CONTRACT_LOCK_REASON,
        SlsPrcgCndnRecdValidity.CRS_CTLG_MAPPG_PRICE_VERSION_NUMBER,
        SlsPrcgCndnRecdValidity.ORDER_TYPE,
        SlsPrcgCndnRecdValidity.SALES_DOCUMENT_TYPE,
        SlsPrcgCndnRecdValidity.SD_DOCUMENT_REASON,
        SlsPrcgCndnRecdValidity.VOLUME_REBATE_GROUP,
        SlsPrcgCndnRecdValidity.VALUATION_TYPE,
        SlsPrcgCndnRecdValidity.SALES_DISTRICT,
        SlsPrcgCndnRecdValidity.BATCH,
        SlsPrcgCndnRecdValidity.PURG_DOC_SUPPLYING_PLANT,
        SlsPrcgCndnRecdValidity.MAT_USAGE_INDICATOR,
        SlsPrcgCndnRecdValidity.SHIPPING_CONDITION,
        SlsPrcgCndnRecdValidity.PLANT_COUNTY,
        SlsPrcgCndnRecdValidity.PLANT_CITY,
        SlsPrcgCndnRecdValidity.MATERIAL_EXTERNAL_GROUP,
        SlsPrcgCndnRecdValidity.CUSTOMER_HIERARCHY_ROOT_NODE,
        SlsPrcgCndnRecdValidity.CUSTOMER_HIERARCHY_NODE_ID,
        SlsPrcgCndnRecdValidity.CUSTOMER_HIERARCHY_NODE_TYPE,
        SlsPrcgCndnRecdValidity.ADDITIONAL_CUSTOMER_GROUP_1,
        SlsPrcgCndnRecdValidity.ADDITIONAL_CUSTOMER_GROUP_2,
        SlsPrcgCndnRecdValidity.ADDITIONAL_CUSTOMER_GROUP_3,
        SlsPrcgCndnRecdValidity.ADDITIONAL_CUSTOMER_GROUP_4,
        SlsPrcgCndnRecdValidity.ADDITIONAL_CUSTOMER_GROUP_5,
        SlsPrcgCndnRecdValidity.SD_DOCUMENT_ITEM,
        SlsPrcgCndnRecdValidity.CNDN_BILLING_DOCUMENT_CATEGORY,
        SlsPrcgCndnRecdValidity.COUNTRY,
        SlsPrcgCndnRecdValidity.PRA_CONTRACT,
        SlsPrcgCndnRecdValidity.WELL,
        SlsPrcgCndnRecdValidity.WELL_COMPLETION,
        SlsPrcgCndnRecdValidity.MEASUREMENT_POINT,
        SlsPrcgCndnRecdValidity.PRICING_FORMULA_NUMBER,
        SlsPrcgCndnRecdValidity.E_TAG,
        SlsPrcgCndnRecdValidity.TO_SLS_PRCG_CNDN_RECD_SUPLMNT,
        SlsPrcgCndnRecdValidity.TO_SLS_PRCG_CONDITION_RECORD
    ];
    /**
     * All fields selector.
     */
    SlsPrcgCndnRecdValidity.ALL_FIELDS = new core_1.AllFields('*', SlsPrcgCndnRecdValidity);
    /**
     * All key fields of the SlsPrcgCndnRecdValidity entity.
     */
    SlsPrcgCndnRecdValidity._keyFields = [SlsPrcgCndnRecdValidity.CONDITION_RECORD, SlsPrcgCndnRecdValidity.CONDITION_VALIDITY_END_DATE];
    /**
     * Mapping of all key field names to the respective static field property SlsPrcgCndnRecdValidity.
     */
    SlsPrcgCndnRecdValidity._keys = SlsPrcgCndnRecdValidity._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(SlsPrcgCndnRecdValidity = exports.SlsPrcgCndnRecdValidity || (exports.SlsPrcgCndnRecdValidity = {}));
exports.SlsPrcgCndnRecdValidity = SlsPrcgCndnRecdValidity;
//# sourceMappingURL=SlsPrcgCndnRecdValidity.js.map