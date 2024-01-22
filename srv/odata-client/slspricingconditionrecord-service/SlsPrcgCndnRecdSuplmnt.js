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
exports.SlsPrcgCndnRecdSuplmnt = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var SlsPrcgCndnRecdSuplmntRequestBuilder_1 = require("./SlsPrcgCndnRecdSuplmntRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "A_SlsPrcgCndnRecdSuplmnt" of service "API_SLSPRICINGCONDITIONRECORD_SRV".
 */
var SlsPrcgCndnRecdSuplmnt = /** @class */ (function (_super) {
    __extends(SlsPrcgCndnRecdSuplmnt, _super);
    function SlsPrcgCndnRecdSuplmnt() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `SlsPrcgCndnRecdSuplmnt`.
     * @returns A builder that constructs instances of entity type `SlsPrcgCndnRecdSuplmnt`.
     */
    SlsPrcgCndnRecdSuplmnt.builder = function () {
        return core_1.EntityV2.entityBuilder(SlsPrcgCndnRecdSuplmnt);
    };
    /**
     * Returns a request builder to construct requests for operations on the `SlsPrcgCndnRecdSuplmnt` entity type.
     * @returns A `SlsPrcgCndnRecdSuplmnt` request builder.
     */
    SlsPrcgCndnRecdSuplmnt.requestBuilder = function () {
        return new SlsPrcgCndnRecdSuplmntRequestBuilder_1.SlsPrcgCndnRecdSuplmntRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SlsPrcgCndnRecdSuplmnt`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SlsPrcgCndnRecdSuplmnt`.
     */
    SlsPrcgCndnRecdSuplmnt.customField = function (fieldName) {
        return core_1.EntityV2.customFieldSelector(fieldName, SlsPrcgCndnRecdSuplmnt);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    SlsPrcgCndnRecdSuplmnt.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for SlsPrcgCndnRecdSuplmnt.
     */
    SlsPrcgCndnRecdSuplmnt._entityName = 'A_SlsPrcgCndnRecdSuplmnt';
    /**
     * Default url path for the according service.
     */
    SlsPrcgCndnRecdSuplmnt._defaultServicePath = '/sap/opu/odata/sap/API_SLSPRICINGCONDITIONRECORD_SRV';
    return SlsPrcgCndnRecdSuplmnt;
}(core_1.EntityV2));
exports.SlsPrcgCndnRecdSuplmnt = SlsPrcgCndnRecdSuplmnt;
var SlsPrcgCndnRecdValidity_1 = require("./SlsPrcgCndnRecdValidity");
var SlsPrcgCndnRecordScale_1 = require("./SlsPrcgCndnRecordScale");
var SlsPrcgCndnSupplementText_1 = require("./SlsPrcgCndnSupplementText");
var SlsPrcgConditionRecord_1 = require("./SlsPrcgConditionRecord");
(function (SlsPrcgCndnRecdSuplmnt) {
    var _fieldBuilder = new core_1.FieldBuilder(SlsPrcgCndnRecdSuplmnt);
    /**
     * Static representation of the [[conditionRecord]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdSuplmnt.CONDITION_RECORD = _fieldBuilder.buildEdmTypeField('ConditionRecord', 'Edm.String', false);
    /**
     * Static representation of the [[conditionSequentialNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdSuplmnt.CONDITION_SEQUENTIAL_NUMBER = _fieldBuilder.buildEdmTypeField('ConditionSequentialNumber', 'Edm.String', false);
    /**
     * Static representation of the [[conditionTable]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdSuplmnt.CONDITION_TABLE = _fieldBuilder.buildEdmTypeField('ConditionTable', 'Edm.String', true);
    /**
     * Static representation of the [[conditionApplication]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdSuplmnt.CONDITION_APPLICATION = _fieldBuilder.buildEdmTypeField('ConditionApplication', 'Edm.String', true);
    /**
     * Static representation of the [[conditionType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdSuplmnt.CONDITION_TYPE = _fieldBuilder.buildEdmTypeField('ConditionType', 'Edm.String', true);
    /**
     * Static representation of the [[conditionValidityEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdSuplmnt.CONDITION_VALIDITY_END_DATE = _fieldBuilder.buildEdmTypeField('ConditionValidityEndDate', 'Edm.DateTime', true);
    /**
     * Static representation of the [[conditionValidityStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdSuplmnt.CONDITION_VALIDITY_START_DATE = _fieldBuilder.buildEdmTypeField('ConditionValidityStartDate', 'Edm.DateTime', true);
    /**
     * Static representation of the [[createdByUser]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdSuplmnt.CREATED_BY_USER = _fieldBuilder.buildEdmTypeField('CreatedByUser', 'Edm.String', true);
    /**
     * Static representation of the [[creationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdSuplmnt.CREATION_DATE = _fieldBuilder.buildEdmTypeField('CreationDate', 'Edm.DateTime', true);
    /**
     * Static representation of the [[conditionTextId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdSuplmnt.CONDITION_TEXT_ID = _fieldBuilder.buildEdmTypeField('ConditionTextID', 'Edm.String', true);
    /**
     * Static representation of the [[pricingScaleType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdSuplmnt.PRICING_SCALE_TYPE = _fieldBuilder.buildEdmTypeField('PricingScaleType', 'Edm.String', true);
    /**
     * Static representation of the [[pricingScaleBasis]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdSuplmnt.PRICING_SCALE_BASIS = _fieldBuilder.buildEdmTypeField('PricingScaleBasis', 'Edm.String', true);
    /**
     * Static representation of the [[conditionScaleQuantity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdSuplmnt.CONDITION_SCALE_QUANTITY = _fieldBuilder.buildEdmTypeField('ConditionScaleQuantity', 'Edm.Decimal', true);
    /**
     * Static representation of the [[conditionScaleQuantityUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdSuplmnt.CONDITION_SCALE_QUANTITY_UNIT = _fieldBuilder.buildEdmTypeField('ConditionScaleQuantityUnit', 'Edm.String', true);
    /**
     * Static representation of the [[conditionScaleAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdSuplmnt.CONDITION_SCALE_AMOUNT = _fieldBuilder.buildEdmTypeField('ConditionScaleAmount', 'Edm.Decimal', true);
    /**
     * Static representation of the [[conditionScaleAmountCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdSuplmnt.CONDITION_SCALE_AMOUNT_CURRENCY = _fieldBuilder.buildEdmTypeField('ConditionScaleAmountCurrency', 'Edm.String', true);
    /**
     * Static representation of the [[conditionCalculationType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdSuplmnt.CONDITION_CALCULATION_TYPE = _fieldBuilder.buildEdmTypeField('ConditionCalculationType', 'Edm.String', true);
    /**
     * Static representation of the [[conditionRateValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdSuplmnt.CONDITION_RATE_VALUE = _fieldBuilder.buildEdmTypeField('ConditionRateValue', 'Edm.Decimal', true);
    /**
     * Static representation of the [[conditionRateValueUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdSuplmnt.CONDITION_RATE_VALUE_UNIT = _fieldBuilder.buildEdmTypeField('ConditionRateValueUnit', 'Edm.String', true);
    /**
     * Static representation of the [[conditionRateRatio]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdSuplmnt.CONDITION_RATE_RATIO = _fieldBuilder.buildEdmTypeField('ConditionRateRatio', 'Edm.Decimal', true);
    /**
     * Static representation of the [[conditionRateRatioUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdSuplmnt.CONDITION_RATE_RATIO_UNIT = _fieldBuilder.buildEdmTypeField('ConditionRateRatioUnit', 'Edm.String', true);
    /**
     * Static representation of the [[conditionRateAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdSuplmnt.CONDITION_RATE_AMOUNT = _fieldBuilder.buildEdmTypeField('ConditionRateAmount', 'Edm.Decimal', true);
    /**
     * Static representation of the [[conditionCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdSuplmnt.CONDITION_CURRENCY = _fieldBuilder.buildEdmTypeField('ConditionCurrency', 'Edm.String', true);
    /**
     * Static representation of the [[conditionQuantity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdSuplmnt.CONDITION_QUANTITY = _fieldBuilder.buildEdmTypeField('ConditionQuantity', 'Edm.Decimal', true);
    /**
     * Static representation of the [[conditionQuantityUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdSuplmnt.CONDITION_QUANTITY_UNIT = _fieldBuilder.buildEdmTypeField('ConditionQuantityUnit', 'Edm.String', true);
    /**
     * Static representation of the [[conditionToBaseQtyNmrtr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdSuplmnt.CONDITION_TO_BASE_QTY_NMRTR = _fieldBuilder.buildEdmTypeField('ConditionToBaseQtyNmrtr', 'Edm.Decimal', true);
    /**
     * Static representation of the [[conditionToBaseQtyDnmntr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdSuplmnt.CONDITION_TO_BASE_QTY_DNMNTR = _fieldBuilder.buildEdmTypeField('ConditionToBaseQtyDnmntr', 'Edm.Decimal', true);
    /**
     * Static representation of the [[baseUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdSuplmnt.BASE_UNIT = _fieldBuilder.buildEdmTypeField('BaseUnit', 'Edm.String', true);
    /**
     * Static representation of the [[conditionLowerLimit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdSuplmnt.CONDITION_LOWER_LIMIT = _fieldBuilder.buildEdmTypeField('ConditionLowerLimit', 'Edm.Decimal', true);
    /**
     * Static representation of the [[conditionLowerLimitAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdSuplmnt.CONDITION_LOWER_LIMIT_AMOUNT = _fieldBuilder.buildEdmTypeField('ConditionLowerLimitAmount', 'Edm.Decimal', true);
    /**
     * Static representation of the [[conditionLowerLimitRatio]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdSuplmnt.CONDITION_LOWER_LIMIT_RATIO = _fieldBuilder.buildEdmTypeField('ConditionLowerLimitRatio', 'Edm.Decimal', true);
    /**
     * Static representation of the [[conditionUpperLimit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdSuplmnt.CONDITION_UPPER_LIMIT = _fieldBuilder.buildEdmTypeField('ConditionUpperLimit', 'Edm.Decimal', true);
    /**
     * Static representation of the [[conditionUpperLimitAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdSuplmnt.CONDITION_UPPER_LIMIT_AMOUNT = _fieldBuilder.buildEdmTypeField('ConditionUpperLimitAmount', 'Edm.Decimal', true);
    /**
     * Static representation of the [[conditionUpperLimitRatio]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdSuplmnt.CONDITION_UPPER_LIMIT_RATIO = _fieldBuilder.buildEdmTypeField('ConditionUpperLimitRatio', 'Edm.Decimal', true);
    /**
     * Static representation of the [[conditionAlternativeCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdSuplmnt.CONDITION_ALTERNATIVE_CURRENCY = _fieldBuilder.buildEdmTypeField('ConditionAlternativeCurrency', 'Edm.String', true);
    /**
     * Static representation of the [[conditionExclusion]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdSuplmnt.CONDITION_EXCLUSION = _fieldBuilder.buildEdmTypeField('ConditionExclusion', 'Edm.String', true);
    /**
     * Static representation of the [[conditionIsDeleted]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdSuplmnt.CONDITION_IS_DELETED = _fieldBuilder.buildEdmTypeField('ConditionIsDeleted', 'Edm.Boolean', true);
    /**
     * Static representation of the [[additionalValueDays]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdSuplmnt.ADDITIONAL_VALUE_DAYS = _fieldBuilder.buildEdmTypeField('AdditionalValueDays', 'Edm.String', true);
    /**
     * Static representation of the [[fixedValueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdSuplmnt.FIXED_VALUE_DATE = _fieldBuilder.buildEdmTypeField('FixedValueDate', 'Edm.DateTime', true);
    /**
     * Static representation of the [[paymentTerms]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdSuplmnt.PAYMENT_TERMS = _fieldBuilder.buildEdmTypeField('PaymentTerms', 'Edm.String', true);
    /**
     * Static representation of the [[cndnMaxNumberOfSalesOrders]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdSuplmnt.CNDN_MAX_NUMBER_OF_SALES_ORDERS = _fieldBuilder.buildEdmTypeField('CndnMaxNumberOfSalesOrders', 'Edm.String', true);
    /**
     * Static representation of the [[minimumConditionBasisValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdSuplmnt.MINIMUM_CONDITION_BASIS_VALUE = _fieldBuilder.buildEdmTypeField('MinimumConditionBasisValue', 'Edm.Decimal', true);
    /**
     * Static representation of the [[maximumConditionBasisValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdSuplmnt.MAXIMUM_CONDITION_BASIS_VALUE = _fieldBuilder.buildEdmTypeField('MaximumConditionBasisValue', 'Edm.Decimal', true);
    /**
     * Static representation of the [[maximumConditionAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdSuplmnt.MAXIMUM_CONDITION_AMOUNT = _fieldBuilder.buildEdmTypeField('MaximumConditionAmount', 'Edm.Decimal', true);
    /**
     * Static representation of the [[incrementalScale]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdSuplmnt.INCREMENTAL_SCALE = _fieldBuilder.buildEdmTypeField('IncrementalScale', 'Edm.String', true);
    /**
     * Static representation of the [[pricingScaleLine]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdSuplmnt.PRICING_SCALE_LINE = _fieldBuilder.buildEdmTypeField('PricingScaleLine', 'Edm.String', true);
    /**
     * Static representation of the [[conditionReleaseStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdSuplmnt.CONDITION_RELEASE_STATUS = _fieldBuilder.buildEdmTypeField('ConditionReleaseStatus', 'Edm.String', true);
    /**
     * Static representation of the [[salesPriceApprovalRequest]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdSuplmnt.SALES_PRICE_APPROVAL_REQUEST = _fieldBuilder.buildEdmTypeField('SalesPriceApprovalRequest', 'Edm.String', true);
    /**
     * Static representation of the [[conditionChangeReason]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdSuplmnt.CONDITION_CHANGE_REASON = _fieldBuilder.buildEdmTypeField('ConditionChangeReason', 'Edm.String', true);
    /**
     * Static representation of the [[prevApprovedConditionRecord]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdSuplmnt.PREV_APPROVED_CONDITION_RECORD = _fieldBuilder.buildEdmTypeField('PrevApprovedConditionRecord', 'Edm.String', true);
    /**
     * Static representation of the [[eTag]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdSuplmnt.E_TAG = _fieldBuilder.buildEdmTypeField('ETag', 'Edm.String', true);
    /**
     * Static representation of the one-to-many navigation property [[toSlsPrcgCndnRecdValidity]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdSuplmnt.TO_SLS_PRCG_CNDN_RECD_VALIDITY = new core_1.Link('to_SlsPrcgCndnRecdValidity', SlsPrcgCndnRecdSuplmnt, SlsPrcgCndnRecdValidity_1.SlsPrcgCndnRecdValidity);
    /**
     * Static representation of the one-to-many navigation property [[toSlsPrcgCndnRecordScale]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdSuplmnt.TO_SLS_PRCG_CNDN_RECORD_SCALE = new core_1.Link('to_SlsPrcgCndnRecordScale', SlsPrcgCndnRecdSuplmnt, SlsPrcgCndnRecordScale_1.SlsPrcgCndnRecordScale);
    /**
     * Static representation of the one-to-many navigation property [[toSlsPrcgCndnSupplementText]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdSuplmnt.TO_SLS_PRCG_CNDN_SUPPLEMENT_TEXT = new core_1.Link('to_SlsPrcgCndnSupplementText', SlsPrcgCndnRecdSuplmnt, SlsPrcgCndnSupplementText_1.SlsPrcgCndnSupplementText);
    /**
     * Static representation of the one-to-one navigation property [[toSlsPrcgConditionRecord]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecdSuplmnt.TO_SLS_PRCG_CONDITION_RECORD = new core_1.OneToOneLink('to_SlsPrcgConditionRecord', SlsPrcgCndnRecdSuplmnt, SlsPrcgConditionRecord_1.SlsPrcgConditionRecord);
    /**
     * All fields of the SlsPrcgCndnRecdSuplmnt entity.
     */
    SlsPrcgCndnRecdSuplmnt._allFields = [
        SlsPrcgCndnRecdSuplmnt.CONDITION_RECORD,
        SlsPrcgCndnRecdSuplmnt.CONDITION_SEQUENTIAL_NUMBER,
        SlsPrcgCndnRecdSuplmnt.CONDITION_TABLE,
        SlsPrcgCndnRecdSuplmnt.CONDITION_APPLICATION,
        SlsPrcgCndnRecdSuplmnt.CONDITION_TYPE,
        SlsPrcgCndnRecdSuplmnt.CONDITION_VALIDITY_END_DATE,
        SlsPrcgCndnRecdSuplmnt.CONDITION_VALIDITY_START_DATE,
        SlsPrcgCndnRecdSuplmnt.CREATED_BY_USER,
        SlsPrcgCndnRecdSuplmnt.CREATION_DATE,
        SlsPrcgCndnRecdSuplmnt.CONDITION_TEXT_ID,
        SlsPrcgCndnRecdSuplmnt.PRICING_SCALE_TYPE,
        SlsPrcgCndnRecdSuplmnt.PRICING_SCALE_BASIS,
        SlsPrcgCndnRecdSuplmnt.CONDITION_SCALE_QUANTITY,
        SlsPrcgCndnRecdSuplmnt.CONDITION_SCALE_QUANTITY_UNIT,
        SlsPrcgCndnRecdSuplmnt.CONDITION_SCALE_AMOUNT,
        SlsPrcgCndnRecdSuplmnt.CONDITION_SCALE_AMOUNT_CURRENCY,
        SlsPrcgCndnRecdSuplmnt.CONDITION_CALCULATION_TYPE,
        SlsPrcgCndnRecdSuplmnt.CONDITION_RATE_VALUE,
        SlsPrcgCndnRecdSuplmnt.CONDITION_RATE_VALUE_UNIT,
        SlsPrcgCndnRecdSuplmnt.CONDITION_RATE_RATIO,
        SlsPrcgCndnRecdSuplmnt.CONDITION_RATE_RATIO_UNIT,
        SlsPrcgCndnRecdSuplmnt.CONDITION_RATE_AMOUNT,
        SlsPrcgCndnRecdSuplmnt.CONDITION_CURRENCY,
        SlsPrcgCndnRecdSuplmnt.CONDITION_QUANTITY,
        SlsPrcgCndnRecdSuplmnt.CONDITION_QUANTITY_UNIT,
        SlsPrcgCndnRecdSuplmnt.CONDITION_TO_BASE_QTY_NMRTR,
        SlsPrcgCndnRecdSuplmnt.CONDITION_TO_BASE_QTY_DNMNTR,
        SlsPrcgCndnRecdSuplmnt.BASE_UNIT,
        SlsPrcgCndnRecdSuplmnt.CONDITION_LOWER_LIMIT,
        SlsPrcgCndnRecdSuplmnt.CONDITION_LOWER_LIMIT_AMOUNT,
        SlsPrcgCndnRecdSuplmnt.CONDITION_LOWER_LIMIT_RATIO,
        SlsPrcgCndnRecdSuplmnt.CONDITION_UPPER_LIMIT,
        SlsPrcgCndnRecdSuplmnt.CONDITION_UPPER_LIMIT_AMOUNT,
        SlsPrcgCndnRecdSuplmnt.CONDITION_UPPER_LIMIT_RATIO,
        SlsPrcgCndnRecdSuplmnt.CONDITION_ALTERNATIVE_CURRENCY,
        SlsPrcgCndnRecdSuplmnt.CONDITION_EXCLUSION,
        SlsPrcgCndnRecdSuplmnt.CONDITION_IS_DELETED,
        SlsPrcgCndnRecdSuplmnt.ADDITIONAL_VALUE_DAYS,
        SlsPrcgCndnRecdSuplmnt.FIXED_VALUE_DATE,
        SlsPrcgCndnRecdSuplmnt.PAYMENT_TERMS,
        SlsPrcgCndnRecdSuplmnt.CNDN_MAX_NUMBER_OF_SALES_ORDERS,
        SlsPrcgCndnRecdSuplmnt.MINIMUM_CONDITION_BASIS_VALUE,
        SlsPrcgCndnRecdSuplmnt.MAXIMUM_CONDITION_BASIS_VALUE,
        SlsPrcgCndnRecdSuplmnt.MAXIMUM_CONDITION_AMOUNT,
        SlsPrcgCndnRecdSuplmnt.INCREMENTAL_SCALE,
        SlsPrcgCndnRecdSuplmnt.PRICING_SCALE_LINE,
        SlsPrcgCndnRecdSuplmnt.CONDITION_RELEASE_STATUS,
        SlsPrcgCndnRecdSuplmnt.SALES_PRICE_APPROVAL_REQUEST,
        SlsPrcgCndnRecdSuplmnt.CONDITION_CHANGE_REASON,
        SlsPrcgCndnRecdSuplmnt.PREV_APPROVED_CONDITION_RECORD,
        SlsPrcgCndnRecdSuplmnt.E_TAG,
        SlsPrcgCndnRecdSuplmnt.TO_SLS_PRCG_CNDN_RECD_VALIDITY,
        SlsPrcgCndnRecdSuplmnt.TO_SLS_PRCG_CNDN_RECORD_SCALE,
        SlsPrcgCndnRecdSuplmnt.TO_SLS_PRCG_CNDN_SUPPLEMENT_TEXT,
        SlsPrcgCndnRecdSuplmnt.TO_SLS_PRCG_CONDITION_RECORD
    ];
    /**
     * All fields selector.
     */
    SlsPrcgCndnRecdSuplmnt.ALL_FIELDS = new core_1.AllFields('*', SlsPrcgCndnRecdSuplmnt);
    /**
     * All key fields of the SlsPrcgCndnRecdSuplmnt entity.
     */
    SlsPrcgCndnRecdSuplmnt._keyFields = [SlsPrcgCndnRecdSuplmnt.CONDITION_RECORD, SlsPrcgCndnRecdSuplmnt.CONDITION_SEQUENTIAL_NUMBER];
    /**
     * Mapping of all key field names to the respective static field property SlsPrcgCndnRecdSuplmnt.
     */
    SlsPrcgCndnRecdSuplmnt._keys = SlsPrcgCndnRecdSuplmnt._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(SlsPrcgCndnRecdSuplmnt = exports.SlsPrcgCndnRecdSuplmnt || (exports.SlsPrcgCndnRecdSuplmnt = {}));
exports.SlsPrcgCndnRecdSuplmnt = SlsPrcgCndnRecdSuplmnt;
//# sourceMappingURL=SlsPrcgCndnRecdSuplmnt.js.map