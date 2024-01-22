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
exports.SlsPrcgCndnSupplementText = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var SlsPrcgCndnSupplementTextRequestBuilder_1 = require("./SlsPrcgCndnSupplementTextRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "A_SlsPrcgCndnSupplementText" of service "API_SLSPRICINGCONDITIONRECORD_SRV".
 */
var SlsPrcgCndnSupplementText = /** @class */ (function (_super) {
    __extends(SlsPrcgCndnSupplementText, _super);
    function SlsPrcgCndnSupplementText() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `SlsPrcgCndnSupplementText`.
     * @returns A builder that constructs instances of entity type `SlsPrcgCndnSupplementText`.
     */
    SlsPrcgCndnSupplementText.builder = function () {
        return core_1.EntityV2.entityBuilder(SlsPrcgCndnSupplementText);
    };
    /**
     * Returns a request builder to construct requests for operations on the `SlsPrcgCndnSupplementText` entity type.
     * @returns A `SlsPrcgCndnSupplementText` request builder.
     */
    SlsPrcgCndnSupplementText.requestBuilder = function () {
        return new SlsPrcgCndnSupplementTextRequestBuilder_1.SlsPrcgCndnSupplementTextRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SlsPrcgCndnSupplementText`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SlsPrcgCndnSupplementText`.
     */
    SlsPrcgCndnSupplementText.customField = function (fieldName) {
        return core_1.EntityV2.customFieldSelector(fieldName, SlsPrcgCndnSupplementText);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    SlsPrcgCndnSupplementText.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for SlsPrcgCndnSupplementText.
     */
    SlsPrcgCndnSupplementText._entityName = 'A_SlsPrcgCndnSupplementText';
    /**
     * Default url path for the according service.
     */
    SlsPrcgCndnSupplementText._defaultServicePath = '/sap/opu/odata/sap/API_SLSPRICINGCONDITIONRECORD_SRV';
    return SlsPrcgCndnSupplementText;
}(core_1.EntityV2));
exports.SlsPrcgCndnSupplementText = SlsPrcgCndnSupplementText;
var SlsPrcgCndnRecdSuplmnt_1 = require("./SlsPrcgCndnRecdSuplmnt");
(function (SlsPrcgCndnSupplementText) {
    var _fieldBuilder = new core_1.FieldBuilder(SlsPrcgCndnSupplementText);
    /**
     * Static representation of the [[conditionRecord]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnSupplementText.CONDITION_RECORD = _fieldBuilder.buildEdmTypeField('ConditionRecord', 'Edm.String', false);
    /**
     * Static representation of the [[conditionSequentialNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnSupplementText.CONDITION_SEQUENTIAL_NUMBER = _fieldBuilder.buildEdmTypeField('ConditionSequentialNumber', 'Edm.String', false);
    /**
     * Static representation of the [[language]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnSupplementText.LANGUAGE = _fieldBuilder.buildEdmTypeField('Language', 'Edm.String', false);
    /**
     * Static representation of the [[conditionText]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnSupplementText.CONDITION_TEXT = _fieldBuilder.buildEdmTypeField('ConditionText', 'Edm.String', true);
    /**
     * Static representation of the [[eTag]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnSupplementText.E_TAG = _fieldBuilder.buildEdmTypeField('ETag', 'Edm.String', true);
    /**
     * Static representation of the one-to-one navigation property [[toSlsPrcgCndnRecdSuplmnt]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SlsPrcgCndnSupplementText.TO_SLS_PRCG_CNDN_RECD_SUPLMNT = new core_1.OneToOneLink('to_SlsPrcgCndnRecdSuplmnt', SlsPrcgCndnSupplementText, SlsPrcgCndnRecdSuplmnt_1.SlsPrcgCndnRecdSuplmnt);
    /**
     * All fields of the SlsPrcgCndnSupplementText entity.
     */
    SlsPrcgCndnSupplementText._allFields = [
        SlsPrcgCndnSupplementText.CONDITION_RECORD,
        SlsPrcgCndnSupplementText.CONDITION_SEQUENTIAL_NUMBER,
        SlsPrcgCndnSupplementText.LANGUAGE,
        SlsPrcgCndnSupplementText.CONDITION_TEXT,
        SlsPrcgCndnSupplementText.E_TAG,
        SlsPrcgCndnSupplementText.TO_SLS_PRCG_CNDN_RECD_SUPLMNT
    ];
    /**
     * All fields selector.
     */
    SlsPrcgCndnSupplementText.ALL_FIELDS = new core_1.AllFields('*', SlsPrcgCndnSupplementText);
    /**
     * All key fields of the SlsPrcgCndnSupplementText entity.
     */
    SlsPrcgCndnSupplementText._keyFields = [SlsPrcgCndnSupplementText.CONDITION_RECORD, SlsPrcgCndnSupplementText.CONDITION_SEQUENTIAL_NUMBER, SlsPrcgCndnSupplementText.LANGUAGE];
    /**
     * Mapping of all key field names to the respective static field property SlsPrcgCndnSupplementText.
     */
    SlsPrcgCndnSupplementText._keys = SlsPrcgCndnSupplementText._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(SlsPrcgCndnSupplementText = exports.SlsPrcgCndnSupplementText || (exports.SlsPrcgCndnSupplementText = {}));
exports.SlsPrcgCndnSupplementText = SlsPrcgCndnSupplementText;
//# sourceMappingURL=SlsPrcgCndnSupplementText.js.map