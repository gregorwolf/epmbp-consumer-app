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
exports.SupplierText = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var SupplierTextRequestBuilder_1 = require("./SupplierTextRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "A_SupplierText" of service "API_BUSINESS_PARTNER".
 */
var SupplierText = /** @class */ (function (_super) {
    __extends(SupplierText, _super);
    function SupplierText() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `SupplierText`.
     * @returns A builder that constructs instances of entity type `SupplierText`.
     */
    SupplierText.builder = function () {
        return core_1.EntityV2.entityBuilder(SupplierText);
    };
    /**
     * Returns a request builder to construct requests for operations on the `SupplierText` entity type.
     * @returns A `SupplierText` request builder.
     */
    SupplierText.requestBuilder = function () {
        return new SupplierTextRequestBuilder_1.SupplierTextRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SupplierText`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SupplierText`.
     */
    SupplierText.customField = function (fieldName) {
        return core_1.EntityV2.customFieldSelector(fieldName, SupplierText);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    SupplierText.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for SupplierText.
     */
    SupplierText._entityName = 'A_SupplierText';
    /**
     * Default url path for the according service.
     */
    SupplierText._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
    return SupplierText;
}(core_1.EntityV2));
exports.SupplierText = SupplierText;
(function (SupplierText) {
    var _fieldBuilder = new core_1.FieldBuilder(SupplierText);
    /**
     * Static representation of the [[supplier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierText.SUPPLIER = _fieldBuilder.buildEdmTypeField('Supplier', 'Edm.String', false);
    /**
     * Static representation of the [[language]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierText.LANGUAGE = _fieldBuilder.buildEdmTypeField('Language', 'Edm.String', false);
    /**
     * Static representation of the [[longTextId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierText.LONG_TEXT_ID = _fieldBuilder.buildEdmTypeField('LongTextID', 'Edm.String', false);
    /**
     * Static representation of the [[longText]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierText.LONG_TEXT = _fieldBuilder.buildEdmTypeField('LongText', 'Edm.String', true);
    /**
     * All fields of the SupplierText entity.
     */
    SupplierText._allFields = [
        SupplierText.SUPPLIER,
        SupplierText.LANGUAGE,
        SupplierText.LONG_TEXT_ID,
        SupplierText.LONG_TEXT
    ];
    /**
     * All fields selector.
     */
    SupplierText.ALL_FIELDS = new core_1.AllFields('*', SupplierText);
    /**
     * All key fields of the SupplierText entity.
     */
    SupplierText._keyFields = [SupplierText.SUPPLIER, SupplierText.LANGUAGE, SupplierText.LONG_TEXT_ID];
    /**
     * Mapping of all key field names to the respective static field property SupplierText.
     */
    SupplierText._keys = SupplierText._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(SupplierText = exports.SupplierText || (exports.SupplierText = {}));
exports.SupplierText = SupplierText;
//# sourceMappingURL=SupplierText.js.map