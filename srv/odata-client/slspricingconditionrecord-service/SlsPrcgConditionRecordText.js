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
exports.SlsPrcgConditionRecordText = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var SlsPrcgConditionRecordTextRequestBuilder_1 = require("./SlsPrcgConditionRecordTextRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "A_SlsPrcgConditionRecordText" of service "API_SLSPRICINGCONDITIONRECORD_SRV".
 */
var SlsPrcgConditionRecordText = /** @class */ (function (_super) {
    __extends(SlsPrcgConditionRecordText, _super);
    function SlsPrcgConditionRecordText() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `SlsPrcgConditionRecordText`.
     * @returns A builder that constructs instances of entity type `SlsPrcgConditionRecordText`.
     */
    SlsPrcgConditionRecordText.builder = function () {
        return core_1.EntityV2.entityBuilder(SlsPrcgConditionRecordText);
    };
    /**
     * Returns a request builder to construct requests for operations on the `SlsPrcgConditionRecordText` entity type.
     * @returns A `SlsPrcgConditionRecordText` request builder.
     */
    SlsPrcgConditionRecordText.requestBuilder = function () {
        return new SlsPrcgConditionRecordTextRequestBuilder_1.SlsPrcgConditionRecordTextRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SlsPrcgConditionRecordText`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SlsPrcgConditionRecordText`.
     */
    SlsPrcgConditionRecordText.customField = function (fieldName) {
        return core_1.EntityV2.customFieldSelector(fieldName, SlsPrcgConditionRecordText);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    SlsPrcgConditionRecordText.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for SlsPrcgConditionRecordText.
     */
    SlsPrcgConditionRecordText._entityName = 'A_SlsPrcgConditionRecordText';
    /**
     * Default url path for the according service.
     */
    SlsPrcgConditionRecordText._defaultServicePath = '/sap/opu/odata/sap/API_SLSPRICINGCONDITIONRECORD_SRV';
    return SlsPrcgConditionRecordText;
}(core_1.EntityV2));
exports.SlsPrcgConditionRecordText = SlsPrcgConditionRecordText;
var SlsPrcgConditionRecord_1 = require("./SlsPrcgConditionRecord");
(function (SlsPrcgConditionRecordText) {
    var _fieldBuilder = new core_1.FieldBuilder(SlsPrcgConditionRecordText);
    /**
     * Static representation of the [[conditionRecord]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgConditionRecordText.CONDITION_RECORD = _fieldBuilder.buildEdmTypeField('ConditionRecord', 'Edm.String', false);
    /**
     * Static representation of the [[conditionSequentialNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgConditionRecordText.CONDITION_SEQUENTIAL_NUMBER = _fieldBuilder.buildEdmTypeField('ConditionSequentialNumber', 'Edm.String', false);
    /**
     * Static representation of the [[language]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgConditionRecordText.LANGUAGE = _fieldBuilder.buildEdmTypeField('Language', 'Edm.String', false);
    /**
     * Static representation of the [[conditionText]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgConditionRecordText.CONDITION_TEXT = _fieldBuilder.buildEdmTypeField('ConditionText', 'Edm.String', true);
    /**
     * Static representation of the [[eTag]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgConditionRecordText.E_TAG = _fieldBuilder.buildEdmTypeField('ETag', 'Edm.String', true);
    /**
     * Static representation of the one-to-one navigation property [[toSlsPrcgConditionRecord]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgConditionRecordText.TO_SLS_PRCG_CONDITION_RECORD = new core_1.OneToOneLink('to_SlsPrcgConditionRecord', SlsPrcgConditionRecordText, SlsPrcgConditionRecord_1.SlsPrcgConditionRecord);
    /**
     * All fields of the SlsPrcgConditionRecordText entity.
     */
    SlsPrcgConditionRecordText._allFields = [
        SlsPrcgConditionRecordText.CONDITION_RECORD,
        SlsPrcgConditionRecordText.CONDITION_SEQUENTIAL_NUMBER,
        SlsPrcgConditionRecordText.LANGUAGE,
        SlsPrcgConditionRecordText.CONDITION_TEXT,
        SlsPrcgConditionRecordText.E_TAG,
        SlsPrcgConditionRecordText.TO_SLS_PRCG_CONDITION_RECORD
    ];
    /**
     * All fields selector.
     */
    SlsPrcgConditionRecordText.ALL_FIELDS = new core_1.AllFields('*', SlsPrcgConditionRecordText);
    /**
     * All key fields of the SlsPrcgConditionRecordText entity.
     */
    SlsPrcgConditionRecordText._keyFields = [SlsPrcgConditionRecordText.CONDITION_RECORD, SlsPrcgConditionRecordText.CONDITION_SEQUENTIAL_NUMBER, SlsPrcgConditionRecordText.LANGUAGE];
    /**
     * Mapping of all key field names to the respective static field property SlsPrcgConditionRecordText.
     */
    SlsPrcgConditionRecordText._keys = SlsPrcgConditionRecordText._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(SlsPrcgConditionRecordText = exports.SlsPrcgConditionRecordText || (exports.SlsPrcgConditionRecordText = {}));
exports.SlsPrcgConditionRecordText = SlsPrcgConditionRecordText;
//# sourceMappingURL=SlsPrcgConditionRecordText.js.map