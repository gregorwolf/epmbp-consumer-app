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
exports.SlsPrcgConditionRecord = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var SlsPrcgConditionRecordRequestBuilder_1 = require("./SlsPrcgConditionRecordRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "A_SlsPrcgConditionRecord" of service "API_SLSPRICINGCONDITIONRECORD_SRV".
 */
var SlsPrcgConditionRecord = /** @class */ (function (_super) {
    __extends(SlsPrcgConditionRecord, _super);
    function SlsPrcgConditionRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `SlsPrcgConditionRecord`.
     * @returns A builder that constructs instances of entity type `SlsPrcgConditionRecord`.
     */
    SlsPrcgConditionRecord.builder = function () {
        return core_1.EntityV2.entityBuilder(SlsPrcgConditionRecord);
    };
    /**
     * Returns a request builder to construct requests for operations on the `SlsPrcgConditionRecord` entity type.
     * @returns A `SlsPrcgConditionRecord` request builder.
     */
    SlsPrcgConditionRecord.requestBuilder = function () {
        return new SlsPrcgConditionRecordRequestBuilder_1.SlsPrcgConditionRecordRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SlsPrcgConditionRecord`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SlsPrcgConditionRecord`.
     */
    SlsPrcgConditionRecord.customField = function (fieldName) {
        return core_1.EntityV2.customFieldSelector(fieldName, SlsPrcgConditionRecord);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    SlsPrcgConditionRecord.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for SlsPrcgConditionRecord.
     */
    SlsPrcgConditionRecord._entityName = 'A_SlsPrcgConditionRecord';
    /**
     * Default url path for the according service.
     */
    SlsPrcgConditionRecord._defaultServicePath = '/sap/opu/odata/sap/API_SLSPRICINGCONDITIONRECORD_SRV';
    return SlsPrcgConditionRecord;
}(core_1.EntityV2));
exports.SlsPrcgConditionRecord = SlsPrcgConditionRecord;
var SlsPrcgCndnRecdSuplmnt_1 = require("./SlsPrcgCndnRecdSuplmnt");
var SlsPrcgCndnRecdValidity_1 = require("./SlsPrcgCndnRecdValidity");
var SlsPrcgCndnRecordScale_1 = require("./SlsPrcgCndnRecordScale");
var SlsPrcgConditionRecordText_1 = require("./SlsPrcgConditionRecordText");
(function (SlsPrcgConditionRecord) {
    var _fieldBuilder = new core_1.FieldBuilder(SlsPrcgConditionRecord);
    /**
     * Static representation of the [[conditionRecord]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgConditionRecord.CONDITION_RECORD = _fieldBuilder.buildEdmTypeField('ConditionRecord', 'Edm.String', false);
    /**
     * Static representation of the [[conditionSequentialNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgConditionRecord.CONDITION_SEQUENTIAL_NUMBER = _fieldBuilder.buildEdmTypeField('ConditionSequentialNumber', 'Edm.String', true);
    /**
     * Static representation of the [[conditionTable]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgConditionRecord.CONDITION_TABLE = _fieldBuilder.buildEdmTypeField('ConditionTable', 'Edm.String', true);
    /**
     * Static representation of the [[conditionApplication]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgConditionRecord.CONDITION_APPLICATION = _fieldBuilder.buildEdmTypeField('ConditionApplication', 'Edm.String', true);
    /**
     * Static representation of the [[conditionType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgConditionRecord.CONDITION_TYPE = _fieldBuilder.buildEdmTypeField('ConditionType', 'Edm.String', true);
    /**
     * Static representation of the [[conditionValidityEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgConditionRecord.CONDITION_VALIDITY_END_DATE = _fieldBuilder.buildEdmTypeField('ConditionValidityEndDate', 'Edm.DateTime', true);
    /**
     * Static representation of the [[conditionValidityStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgConditionRecord.CONDITION_VALIDITY_START_DATE = _fieldBuilder.buildEdmTypeField('ConditionValidityStartDate', 'Edm.DateTime', true);
    /**
     * Static representation of the [[createdByUser]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgConditionRecord.CREATED_BY_USER = _fieldBuilder.buildEdmTypeField('CreatedByUser', 'Edm.String', true);
    /**
     * Static representation of the [[creationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgConditionRecord.CREATION_DATE = _fieldBuilder.buildEdmTypeField('CreationDate', 'Edm.DateTime', true);
    /**
     * Static representation of the [[conditionTextId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgConditionRecord.CONDITION_TEXT_ID = _fieldBuilder.buildEdmTypeField('ConditionTextID', 'Edm.String', true);
    /**
     * Static representation of the [[pricingScaleType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgConditionRecord.PRICING_SCALE_TYPE = _fieldBuilder.buildEdmTypeField('PricingScaleType', 'Edm.String', true);
    /**
     * Static representation of the [[pricingScaleBasis]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgConditionRecord.PRICING_SCALE_BASIS = _fieldBuilder.buildEdmTypeField('PricingScaleBasis', 'Edm.String', true);
    /**
     * Static representation of the [[conditionScaleQuantity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgConditionRecord.CONDITION_SCALE_QUANTITY = _fieldBuilder.buildEdmTypeField('ConditionScaleQuantity', 'Edm.Decimal', true);
    /**
     * Static representation of the [[conditionScaleQuantityUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgConditionRecord.CONDITION_SCALE_QUANTITY_UNIT = _fieldBuilder.buildEdmTypeField('ConditionScaleQuantityUnit', 'Edm.String', true);
    /**
     * Static representation of the [[conditionScaleAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgConditionRecord.CONDITION_SCALE_AMOUNT = _fieldBuilder.buildEdmTypeField('ConditionScaleAmount', 'Edm.Decimal', true);
    /**
     * Static representation of the [[conditionScaleAmountCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgConditionRecord.CONDITION_SCALE_AMOUNT_CURRENCY = _fieldBuilder.buildEdmTypeField('ConditionScaleAmountCurrency', 'Edm.String', true);
    /**
     * Static representation of the [[conditionCalculationType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgConditionRecord.CONDITION_CALCULATION_TYPE = _fieldBuilder.buildEdmTypeField('ConditionCalculationType', 'Edm.String', true);
    /**
     * Static representation of the [[conditionRateValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgConditionRecord.CONDITION_RATE_VALUE = _fieldBuilder.buildEdmTypeField('ConditionRateValue', 'Edm.Decimal', true);
    /**
     * Static representation of the [[conditionRateValueUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgConditionRecord.CONDITION_RATE_VALUE_UNIT = _fieldBuilder.buildEdmTypeField('ConditionRateValueUnit', 'Edm.String', true);
    /**
     * Static representation of the [[conditionRateRatio]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgConditionRecord.CONDITION_RATE_RATIO = _fieldBuilder.buildEdmTypeField('ConditionRateRatio', 'Edm.Decimal', true);
    /**
     * Static representation of the [[conditionRateRatioUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgConditionRecord.CONDITION_RATE_RATIO_UNIT = _fieldBuilder.buildEdmTypeField('ConditionRateRatioUnit', 'Edm.String', true);
    /**
     * Static representation of the [[conditionRateAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgConditionRecord.CONDITION_RATE_AMOUNT = _fieldBuilder.buildEdmTypeField('ConditionRateAmount', 'Edm.Decimal', true);
    /**
     * Static representation of the [[conditionCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgConditionRecord.CONDITION_CURRENCY = _fieldBuilder.buildEdmTypeField('ConditionCurrency', 'Edm.String', true);
    /**
     * Static representation of the [[conditionQuantity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgConditionRecord.CONDITION_QUANTITY = _fieldBuilder.buildEdmTypeField('ConditionQuantity', 'Edm.Decimal', true);
    /**
     * Static representation of the [[conditionQuantityUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgConditionRecord.CONDITION_QUANTITY_UNIT = _fieldBuilder.buildEdmTypeField('ConditionQuantityUnit', 'Edm.String', true);
    /**
     * Static representation of the [[conditionToBaseQtyNmrtr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgConditionRecord.CONDITION_TO_BASE_QTY_NMRTR = _fieldBuilder.buildEdmTypeField('ConditionToBaseQtyNmrtr', 'Edm.Decimal', true);
    /**
     * Static representation of the [[conditionToBaseQtyDnmntr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgConditionRecord.CONDITION_TO_BASE_QTY_DNMNTR = _fieldBuilder.buildEdmTypeField('ConditionToBaseQtyDnmntr', 'Edm.Decimal', true);
    /**
     * Static representation of the [[baseUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgConditionRecord.BASE_UNIT = _fieldBuilder.buildEdmTypeField('BaseUnit', 'Edm.String', true);
    /**
     * Static representation of the [[conditionLowerLimit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgConditionRecord.CONDITION_LOWER_LIMIT = _fieldBuilder.buildEdmTypeField('ConditionLowerLimit', 'Edm.Decimal', true);
    /**
     * Static representation of the [[conditionLowerLimitAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgConditionRecord.CONDITION_LOWER_LIMIT_AMOUNT = _fieldBuilder.buildEdmTypeField('ConditionLowerLimitAmount', 'Edm.Decimal', true);
    /**
     * Static representation of the [[conditionLowerLimitRatio]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgConditionRecord.CONDITION_LOWER_LIMIT_RATIO = _fieldBuilder.buildEdmTypeField('ConditionLowerLimitRatio', 'Edm.Decimal', true);
    /**
     * Static representation of the [[conditionUpperLimit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgConditionRecord.CONDITION_UPPER_LIMIT = _fieldBuilder.buildEdmTypeField('ConditionUpperLimit', 'Edm.Decimal', true);
    /**
     * Static representation of the [[conditionUpperLimitAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgConditionRecord.CONDITION_UPPER_LIMIT_AMOUNT = _fieldBuilder.buildEdmTypeField('ConditionUpperLimitAmount', 'Edm.Decimal', true);
    /**
     * Static representation of the [[conditionUpperLimitRatio]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgConditionRecord.CONDITION_UPPER_LIMIT_RATIO = _fieldBuilder.buildEdmTypeField('ConditionUpperLimitRatio', 'Edm.Decimal', true);
    /**
     * Static representation of the [[conditionAlternativeCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgConditionRecord.CONDITION_ALTERNATIVE_CURRENCY = _fieldBuilder.buildEdmTypeField('ConditionAlternativeCurrency', 'Edm.String', true);
    /**
     * Static representation of the [[conditionExclusion]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgConditionRecord.CONDITION_EXCLUSION = _fieldBuilder.buildEdmTypeField('ConditionExclusion', 'Edm.String', true);
    /**
     * Static representation of the [[conditionIsDeleted]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgConditionRecord.CONDITION_IS_DELETED = _fieldBuilder.buildEdmTypeField('ConditionIsDeleted', 'Edm.Boolean', true);
    /**
     * Static representation of the [[additionalValueDays]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgConditionRecord.ADDITIONAL_VALUE_DAYS = _fieldBuilder.buildEdmTypeField('AdditionalValueDays', 'Edm.String', true);
    /**
     * Static representation of the [[fixedValueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgConditionRecord.FIXED_VALUE_DATE = _fieldBuilder.buildEdmTypeField('FixedValueDate', 'Edm.DateTime', true);
    /**
     * Static representation of the [[paymentTerms]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgConditionRecord.PAYMENT_TERMS = _fieldBuilder.buildEdmTypeField('PaymentTerms', 'Edm.String', true);
    /**
     * Static representation of the [[cndnMaxNumberOfSalesOrders]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgConditionRecord.CNDN_MAX_NUMBER_OF_SALES_ORDERS = _fieldBuilder.buildEdmTypeField('CndnMaxNumberOfSalesOrders', 'Edm.String', true);
    /**
     * Static representation of the [[minimumConditionBasisValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgConditionRecord.MINIMUM_CONDITION_BASIS_VALUE = _fieldBuilder.buildEdmTypeField('MinimumConditionBasisValue', 'Edm.Decimal', true);
    /**
     * Static representation of the [[maximumConditionBasisValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgConditionRecord.MAXIMUM_CONDITION_BASIS_VALUE = _fieldBuilder.buildEdmTypeField('MaximumConditionBasisValue', 'Edm.Decimal', true);
    /**
     * Static representation of the [[maximumConditionAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgConditionRecord.MAXIMUM_CONDITION_AMOUNT = _fieldBuilder.buildEdmTypeField('MaximumConditionAmount', 'Edm.Decimal', true);
    /**
     * Static representation of the [[incrementalScale]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgConditionRecord.INCREMENTAL_SCALE = _fieldBuilder.buildEdmTypeField('IncrementalScale', 'Edm.String', true);
    /**
     * Static representation of the [[pricingScaleLine]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgConditionRecord.PRICING_SCALE_LINE = _fieldBuilder.buildEdmTypeField('PricingScaleLine', 'Edm.String', true);
    /**
     * Static representation of the [[conditionReleaseStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgConditionRecord.CONDITION_RELEASE_STATUS = _fieldBuilder.buildEdmTypeField('ConditionReleaseStatus', 'Edm.String', true);
    /**
     * Static representation of the [[salesPriceApprovalRequest]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgConditionRecord.SALES_PRICE_APPROVAL_REQUEST = _fieldBuilder.buildEdmTypeField('SalesPriceApprovalRequest', 'Edm.String', true);
    /**
     * Static representation of the [[conditionChangeReason]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgConditionRecord.CONDITION_CHANGE_REASON = _fieldBuilder.buildEdmTypeField('ConditionChangeReason', 'Edm.String', true);
    /**
     * Static representation of the [[prevApprovedConditionRecord]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgConditionRecord.PREV_APPROVED_CONDITION_RECORD = _fieldBuilder.buildEdmTypeField('PrevApprovedConditionRecord', 'Edm.String', true);
    /**
     * Static representation of the [[conditionTaxCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgConditionRecord.CONDITION_TAX_CODE = _fieldBuilder.buildEdmTypeField('ConditionTaxCode', 'Edm.String', true);
    /**
     * Static representation of the [[conditionWithholdingTaxCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgConditionRecord.CONDITION_WITHHOLDING_TAX_CODE = _fieldBuilder.buildEdmTypeField('ConditionWithholdingTaxCode', 'Edm.String', true);
    /**
     * Static representation of the [[taxExemptionLicense]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgConditionRecord.TAX_EXEMPTION_LICENSE = _fieldBuilder.buildEdmTypeField('TaxExemptionLicense', 'Edm.String', true);
    /**
     * Static representation of the [[licenseGrantDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgConditionRecord.LICENSE_GRANT_DATE = _fieldBuilder.buildEdmTypeField('LicenseGrantDate', 'Edm.DateTime', true);
    /**
     * Static representation of the [[eTag]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgConditionRecord.E_TAG = _fieldBuilder.buildEdmTypeField('ETag', 'Edm.String', true);
    /**
     * Static representation of the one-to-many navigation property [[toSlsPrcgCndnRecdSuplmnt]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgConditionRecord.TO_SLS_PRCG_CNDN_RECD_SUPLMNT = new core_1.Link('to_SlsPrcgCndnRecdSuplmnt', SlsPrcgConditionRecord, SlsPrcgCndnRecdSuplmnt_1.SlsPrcgCndnRecdSuplmnt);
    /**
     * Static representation of the one-to-many navigation property [[toSlsPrcgCndnRecdValidity]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgConditionRecord.TO_SLS_PRCG_CNDN_RECD_VALIDITY = new core_1.Link('to_SlsPrcgCndnRecdValidity', SlsPrcgConditionRecord, SlsPrcgCndnRecdValidity_1.SlsPrcgCndnRecdValidity);
    /**
     * Static representation of the one-to-many navigation property [[toSlsPrcgCndnRecordScale]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgConditionRecord.TO_SLS_PRCG_CNDN_RECORD_SCALE = new core_1.Link('to_SlsPrcgCndnRecordScale', SlsPrcgConditionRecord, SlsPrcgCndnRecordScale_1.SlsPrcgCndnRecordScale);
    /**
     * Static representation of the one-to-many navigation property [[toSlsPrcgConditionRecordText]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgConditionRecord.TO_SLS_PRCG_CONDITION_RECORD_TEXT = new core_1.Link('to_SlsPrcgConditionRecordText', SlsPrcgConditionRecord, SlsPrcgConditionRecordText_1.SlsPrcgConditionRecordText);
    /**
     * All fields of the SlsPrcgConditionRecord entity.
     */
    SlsPrcgConditionRecord._allFields = [
        SlsPrcgConditionRecord.CONDITION_RECORD,
        SlsPrcgConditionRecord.CONDITION_SEQUENTIAL_NUMBER,
        SlsPrcgConditionRecord.CONDITION_TABLE,
        SlsPrcgConditionRecord.CONDITION_APPLICATION,
        SlsPrcgConditionRecord.CONDITION_TYPE,
        SlsPrcgConditionRecord.CONDITION_VALIDITY_END_DATE,
        SlsPrcgConditionRecord.CONDITION_VALIDITY_START_DATE,
        SlsPrcgConditionRecord.CREATED_BY_USER,
        SlsPrcgConditionRecord.CREATION_DATE,
        SlsPrcgConditionRecord.CONDITION_TEXT_ID,
        SlsPrcgConditionRecord.PRICING_SCALE_TYPE,
        SlsPrcgConditionRecord.PRICING_SCALE_BASIS,
        SlsPrcgConditionRecord.CONDITION_SCALE_QUANTITY,
        SlsPrcgConditionRecord.CONDITION_SCALE_QUANTITY_UNIT,
        SlsPrcgConditionRecord.CONDITION_SCALE_AMOUNT,
        SlsPrcgConditionRecord.CONDITION_SCALE_AMOUNT_CURRENCY,
        SlsPrcgConditionRecord.CONDITION_CALCULATION_TYPE,
        SlsPrcgConditionRecord.CONDITION_RATE_VALUE,
        SlsPrcgConditionRecord.CONDITION_RATE_VALUE_UNIT,
        SlsPrcgConditionRecord.CONDITION_RATE_RATIO,
        SlsPrcgConditionRecord.CONDITION_RATE_RATIO_UNIT,
        SlsPrcgConditionRecord.CONDITION_RATE_AMOUNT,
        SlsPrcgConditionRecord.CONDITION_CURRENCY,
        SlsPrcgConditionRecord.CONDITION_QUANTITY,
        SlsPrcgConditionRecord.CONDITION_QUANTITY_UNIT,
        SlsPrcgConditionRecord.CONDITION_TO_BASE_QTY_NMRTR,
        SlsPrcgConditionRecord.CONDITION_TO_BASE_QTY_DNMNTR,
        SlsPrcgConditionRecord.BASE_UNIT,
        SlsPrcgConditionRecord.CONDITION_LOWER_LIMIT,
        SlsPrcgConditionRecord.CONDITION_LOWER_LIMIT_AMOUNT,
        SlsPrcgConditionRecord.CONDITION_LOWER_LIMIT_RATIO,
        SlsPrcgConditionRecord.CONDITION_UPPER_LIMIT,
        SlsPrcgConditionRecord.CONDITION_UPPER_LIMIT_AMOUNT,
        SlsPrcgConditionRecord.CONDITION_UPPER_LIMIT_RATIO,
        SlsPrcgConditionRecord.CONDITION_ALTERNATIVE_CURRENCY,
        SlsPrcgConditionRecord.CONDITION_EXCLUSION,
        SlsPrcgConditionRecord.CONDITION_IS_DELETED,
        SlsPrcgConditionRecord.ADDITIONAL_VALUE_DAYS,
        SlsPrcgConditionRecord.FIXED_VALUE_DATE,
        SlsPrcgConditionRecord.PAYMENT_TERMS,
        SlsPrcgConditionRecord.CNDN_MAX_NUMBER_OF_SALES_ORDERS,
        SlsPrcgConditionRecord.MINIMUM_CONDITION_BASIS_VALUE,
        SlsPrcgConditionRecord.MAXIMUM_CONDITION_BASIS_VALUE,
        SlsPrcgConditionRecord.MAXIMUM_CONDITION_AMOUNT,
        SlsPrcgConditionRecord.INCREMENTAL_SCALE,
        SlsPrcgConditionRecord.PRICING_SCALE_LINE,
        SlsPrcgConditionRecord.CONDITION_RELEASE_STATUS,
        SlsPrcgConditionRecord.SALES_PRICE_APPROVAL_REQUEST,
        SlsPrcgConditionRecord.CONDITION_CHANGE_REASON,
        SlsPrcgConditionRecord.PREV_APPROVED_CONDITION_RECORD,
        SlsPrcgConditionRecord.CONDITION_TAX_CODE,
        SlsPrcgConditionRecord.CONDITION_WITHHOLDING_TAX_CODE,
        SlsPrcgConditionRecord.TAX_EXEMPTION_LICENSE,
        SlsPrcgConditionRecord.LICENSE_GRANT_DATE,
        SlsPrcgConditionRecord.E_TAG,
        SlsPrcgConditionRecord.TO_SLS_PRCG_CNDN_RECD_SUPLMNT,
        SlsPrcgConditionRecord.TO_SLS_PRCG_CNDN_RECD_VALIDITY,
        SlsPrcgConditionRecord.TO_SLS_PRCG_CNDN_RECORD_SCALE,
        SlsPrcgConditionRecord.TO_SLS_PRCG_CONDITION_RECORD_TEXT
    ];
    /**
     * All fields selector.
     */
    SlsPrcgConditionRecord.ALL_FIELDS = new core_1.AllFields('*', SlsPrcgConditionRecord);
    /**
     * All key fields of the SlsPrcgConditionRecord entity.
     */
    SlsPrcgConditionRecord._keyFields = [SlsPrcgConditionRecord.CONDITION_RECORD];
    /**
     * Mapping of all key field names to the respective static field property SlsPrcgConditionRecord.
     */
    SlsPrcgConditionRecord._keys = SlsPrcgConditionRecord._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(SlsPrcgConditionRecord = exports.SlsPrcgConditionRecord || (exports.SlsPrcgConditionRecord = {}));
exports.SlsPrcgConditionRecord = SlsPrcgConditionRecord;
//# sourceMappingURL=SlsPrcgConditionRecord.js.map