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
exports.SupplierCompanyText = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var SupplierCompanyTextRequestBuilder_1 = require("./SupplierCompanyTextRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "A_SupplierCompanyText" of service "API_BUSINESS_PARTNER".
 */
var SupplierCompanyText = /** @class */ (function (_super) {
    __extends(SupplierCompanyText, _super);
    function SupplierCompanyText() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `SupplierCompanyText`.
     * @returns A builder that constructs instances of entity type `SupplierCompanyText`.
     */
    SupplierCompanyText.builder = function () {
        return core_1.EntityV2.entityBuilder(SupplierCompanyText);
    };
    /**
     * Returns a request builder to construct requests for operations on the `SupplierCompanyText` entity type.
     * @returns A `SupplierCompanyText` request builder.
     */
    SupplierCompanyText.requestBuilder = function () {
        return new SupplierCompanyTextRequestBuilder_1.SupplierCompanyTextRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SupplierCompanyText`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SupplierCompanyText`.
     */
    SupplierCompanyText.customField = function (fieldName) {
        return core_1.EntityV2.customFieldSelector(fieldName, SupplierCompanyText);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    SupplierCompanyText.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for SupplierCompanyText.
     */
    SupplierCompanyText._entityName = 'A_SupplierCompanyText';
    /**
     * Default url path for the according service.
     */
    SupplierCompanyText._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
    return SupplierCompanyText;
}(core_1.EntityV2));
exports.SupplierCompanyText = SupplierCompanyText;
(function (SupplierCompanyText) {
    var _fieldBuilder = new core_1.FieldBuilder(SupplierCompanyText);
    /**
     * Static representation of the [[supplier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierCompanyText.SUPPLIER = _fieldBuilder.buildEdmTypeField('Supplier', 'Edm.String', false);
    /**
     * Static representation of the [[companyCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierCompanyText.COMPANY_CODE = _fieldBuilder.buildEdmTypeField('CompanyCode', 'Edm.String', false);
    /**
     * Static representation of the [[language]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierCompanyText.LANGUAGE = _fieldBuilder.buildEdmTypeField('Language', 'Edm.String', false);
    /**
     * Static representation of the [[longTextId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierCompanyText.LONG_TEXT_ID = _fieldBuilder.buildEdmTypeField('LongTextID', 'Edm.String', false);
    /**
     * Static representation of the [[longText]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierCompanyText.LONG_TEXT = _fieldBuilder.buildEdmTypeField('LongText', 'Edm.String', true);
    /**
     * All fields of the SupplierCompanyText entity.
     */
    SupplierCompanyText._allFields = [
        SupplierCompanyText.SUPPLIER,
        SupplierCompanyText.COMPANY_CODE,
        SupplierCompanyText.LANGUAGE,
        SupplierCompanyText.LONG_TEXT_ID,
        SupplierCompanyText.LONG_TEXT
    ];
    /**
     * All fields selector.
     */
    SupplierCompanyText.ALL_FIELDS = new core_1.AllFields('*', SupplierCompanyText);
    /**
     * All key fields of the SupplierCompanyText entity.
     */
    SupplierCompanyText._keyFields = [SupplierCompanyText.SUPPLIER, SupplierCompanyText.COMPANY_CODE, SupplierCompanyText.LANGUAGE, SupplierCompanyText.LONG_TEXT_ID];
    /**
     * Mapping of all key field names to the respective static field property SupplierCompanyText.
     */
    SupplierCompanyText._keys = SupplierCompanyText._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(SupplierCompanyText = exports.SupplierCompanyText || (exports.SupplierCompanyText = {}));
exports.SupplierCompanyText = SupplierCompanyText;
//# sourceMappingURL=SupplierCompanyText.js.map