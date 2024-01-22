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
exports.SlsPrcgCndnRecordScale = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var SlsPrcgCndnRecordScaleRequestBuilder_1 = require("./SlsPrcgCndnRecordScaleRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "A_SlsPrcgCndnRecordScale" of service "API_SLSPRICINGCONDITIONRECORD_SRV".
 */
var SlsPrcgCndnRecordScale = /** @class */ (function (_super) {
    __extends(SlsPrcgCndnRecordScale, _super);
    function SlsPrcgCndnRecordScale() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `SlsPrcgCndnRecordScale`.
     * @returns A builder that constructs instances of entity type `SlsPrcgCndnRecordScale`.
     */
    SlsPrcgCndnRecordScale.builder = function () {
        return core_1.EntityV2.entityBuilder(SlsPrcgCndnRecordScale);
    };
    /**
     * Returns a request builder to construct requests for operations on the `SlsPrcgCndnRecordScale` entity type.
     * @returns A `SlsPrcgCndnRecordScale` request builder.
     */
    SlsPrcgCndnRecordScale.requestBuilder = function () {
        return new SlsPrcgCndnRecordScaleRequestBuilder_1.SlsPrcgCndnRecordScaleRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SlsPrcgCndnRecordScale`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SlsPrcgCndnRecordScale`.
     */
    SlsPrcgCndnRecordScale.customField = function (fieldName) {
        return core_1.EntityV2.customFieldSelector(fieldName, SlsPrcgCndnRecordScale);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    SlsPrcgCndnRecordScale.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for SlsPrcgCndnRecordScale.
     */
    SlsPrcgCndnRecordScale._entityName = 'A_SlsPrcgCndnRecordScale';
    /**
     * Default url path for the according service.
     */
    SlsPrcgCndnRecordScale._defaultServicePath = '/sap/opu/odata/sap/API_SLSPRICINGCONDITIONRECORD_SRV';
    return SlsPrcgCndnRecordScale;
}(core_1.EntityV2));
exports.SlsPrcgCndnRecordScale = SlsPrcgCndnRecordScale;
var SlsPrcgCndnRecdSuplmnt_1 = require("./SlsPrcgCndnRecdSuplmnt");
var SlsPrcgConditionRecord_1 = require("./SlsPrcgConditionRecord");
(function (SlsPrcgCndnRecordScale) {
    var _fieldBuilder = new core_1.FieldBuilder(SlsPrcgCndnRecordScale);
    /**
     * Static representation of the [[conditionRecord]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecordScale.CONDITION_RECORD = _fieldBuilder.buildEdmTypeField('ConditionRecord', 'Edm.String', false);
    /**
     * Static representation of the [[conditionSequentialNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecordScale.CONDITION_SEQUENTIAL_NUMBER = _fieldBuilder.buildEdmTypeField('ConditionSequentialNumber', 'Edm.String', false);
    /**
     * Static representation of the [[conditionScaleLine]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecordScale.CONDITION_SCALE_LINE = _fieldBuilder.buildEdmTypeField('ConditionScaleLine', 'Edm.String', false);
    /**
     * Static representation of the [[conditionScaleQuantity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecordScale.CONDITION_SCALE_QUANTITY = _fieldBuilder.buildEdmTypeField('ConditionScaleQuantity', 'Edm.Decimal', true);
    /**
     * Static representation of the [[conditionScaleQuantityUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecordScale.CONDITION_SCALE_QUANTITY_UNIT = _fieldBuilder.buildEdmTypeField('ConditionScaleQuantityUnit', 'Edm.String', true);
    /**
     * Static representation of the [[conditionScaleAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecordScale.CONDITION_SCALE_AMOUNT = _fieldBuilder.buildEdmTypeField('ConditionScaleAmount', 'Edm.Decimal', true);
    /**
     * Static representation of the [[conditionScaleAmountCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecordScale.CONDITION_SCALE_AMOUNT_CURRENCY = _fieldBuilder.buildEdmTypeField('ConditionScaleAmountCurrency', 'Edm.String', true);
    /**
     * Static representation of the [[conditionRateValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecordScale.CONDITION_RATE_VALUE = _fieldBuilder.buildEdmTypeField('ConditionRateValue', 'Edm.Decimal', true);
    /**
     * Static representation of the [[conditionRateValueUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecordScale.CONDITION_RATE_VALUE_UNIT = _fieldBuilder.buildEdmTypeField('ConditionRateValueUnit', 'Edm.String', true);
    /**
     * Static representation of the [[conditionRateRatio]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecordScale.CONDITION_RATE_RATIO = _fieldBuilder.buildEdmTypeField('ConditionRateRatio', 'Edm.Decimal', true);
    /**
     * Static representation of the [[conditionRateRatioUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecordScale.CONDITION_RATE_RATIO_UNIT = _fieldBuilder.buildEdmTypeField('ConditionRateRatioUnit', 'Edm.String', true);
    /**
     * Static representation of the [[conditionRateAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecordScale.CONDITION_RATE_AMOUNT = _fieldBuilder.buildEdmTypeField('ConditionRateAmount', 'Edm.Decimal', true);
    /**
     * Static representation of the [[conditionCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecordScale.CONDITION_CURRENCY = _fieldBuilder.buildEdmTypeField('ConditionCurrency', 'Edm.String', true);
    /**
     * Static representation of the [[eTag]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecordScale.E_TAG = _fieldBuilder.buildEdmTypeField('ETag', 'Edm.String', true);
    /**
     * Static representation of the one-to-one navigation property [[toSlsPrcgCndnRecdSuplmnt]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecordScale.TO_SLS_PRCG_CNDN_RECD_SUPLMNT = new core_1.OneToOneLink('to_SlsPrcgCndnRecdSuplmnt', SlsPrcgCndnRecordScale, SlsPrcgCndnRecdSuplmnt_1.SlsPrcgCndnRecdSuplmnt);
    /**
     * Static representation of the one-to-one navigation property [[toSlsPrcgConditionRecord]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnRecordScale.TO_SLS_PRCG_CONDITION_RECORD = new core_1.OneToOneLink('to_SlsPrcgConditionRecord', SlsPrcgCndnRecordScale, SlsPrcgConditionRecord_1.SlsPrcgConditionRecord);
    /**
     * All fields of the SlsPrcgCndnRecordScale entity.
     */
    SlsPrcgCndnRecordScale._allFields = [
        SlsPrcgCndnRecordScale.CONDITION_RECORD,
        SlsPrcgCndnRecordScale.CONDITION_SEQUENTIAL_NUMBER,
        SlsPrcgCndnRecordScale.CONDITION_SCALE_LINE,
        SlsPrcgCndnRecordScale.CONDITION_SCALE_QUANTITY,
        SlsPrcgCndnRecordScale.CONDITION_SCALE_QUANTITY_UNIT,
        SlsPrcgCndnRecordScale.CONDITION_SCALE_AMOUNT,
        SlsPrcgCndnRecordScale.CONDITION_SCALE_AMOUNT_CURRENCY,
        SlsPrcgCndnRecordScale.CONDITION_RATE_VALUE,
        SlsPrcgCndnRecordScale.CONDITION_RATE_VALUE_UNIT,
        SlsPrcgCndnRecordScale.CONDITION_RATE_RATIO,
        SlsPrcgCndnRecordScale.CONDITION_RATE_RATIO_UNIT,
        SlsPrcgCndnRecordScale.CONDITION_RATE_AMOUNT,
        SlsPrcgCndnRecordScale.CONDITION_CURRENCY,
        SlsPrcgCndnRecordScale.E_TAG,
        SlsPrcgCndnRecordScale.TO_SLS_PRCG_CNDN_RECD_SUPLMNT,
        SlsPrcgCndnRecordScale.TO_SLS_PRCG_CONDITION_RECORD
    ];
    /**
     * All fields selector.
     */
    SlsPrcgCndnRecordScale.ALL_FIELDS = new core_1.AllFields('*', SlsPrcgCndnRecordScale);
    /**
     * All key fields of the SlsPrcgCndnRecordScale entity.
     */
    SlsPrcgCndnRecordScale._keyFields = [SlsPrcgCndnRecordScale.CONDITION_RECORD, SlsPrcgCndnRecordScale.CONDITION_SEQUENTIAL_NUMBER, SlsPrcgCndnRecordScale.CONDITION_SCALE_LINE];
    /**
     * Mapping of all key field names to the respective static field property SlsPrcgCndnRecordScale.
     */
    SlsPrcgCndnRecordScale._keys = SlsPrcgCndnRecordScale._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(SlsPrcgCndnRecordScale = exports.SlsPrcgCndnRecordScale || (exports.SlsPrcgCndnRecordScale = {}));
exports.SlsPrcgCndnRecordScale = SlsPrcgCndnRecordScale;
//# sourceMappingURL=SlsPrcgCndnRecordScale.js.map