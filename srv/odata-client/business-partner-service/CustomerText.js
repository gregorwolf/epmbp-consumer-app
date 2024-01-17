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
exports.CustomerText = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var CustomerTextRequestBuilder_1 = require("./CustomerTextRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "A_CustomerText" of service "API_BUSINESS_PARTNER".
 */
var CustomerText = /** @class */ (function (_super) {
    __extends(CustomerText, _super);
    function CustomerText() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `CustomerText`.
     * @returns A builder that constructs instances of entity type `CustomerText`.
     */
    CustomerText.builder = function () {
        return core_1.EntityV2.entityBuilder(CustomerText);
    };
    /**
     * Returns a request builder to construct requests for operations on the `CustomerText` entity type.
     * @returns A `CustomerText` request builder.
     */
    CustomerText.requestBuilder = function () {
        return new CustomerTextRequestBuilder_1.CustomerTextRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CustomerText`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CustomerText`.
     */
    CustomerText.customField = function (fieldName) {
        return core_1.EntityV2.customFieldSelector(fieldName, CustomerText);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    CustomerText.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for CustomerText.
     */
    CustomerText._entityName = 'A_CustomerText';
    /**
     * Default url path for the according service.
     */
    CustomerText._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
    return CustomerText;
}(core_1.EntityV2));
exports.CustomerText = CustomerText;
(function (CustomerText) {
    var _fieldBuilder = new core_1.FieldBuilder(CustomerText);
    /**
     * Static representation of the [[customer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerText.CUSTOMER = _fieldBuilder.buildEdmTypeField('Customer', 'Edm.String', false);
    /**
     * Static representation of the [[language]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerText.LANGUAGE = _fieldBuilder.buildEdmTypeField('Language', 'Edm.String', false);
    /**
     * Static representation of the [[longTextId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerText.LONG_TEXT_ID = _fieldBuilder.buildEdmTypeField('LongTextID', 'Edm.String', false);
    /**
     * Static representation of the [[longText]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerText.LONG_TEXT = _fieldBuilder.buildEdmTypeField('LongText', 'Edm.String', true);
    /**
     * All fields of the CustomerText entity.
     */
    CustomerText._allFields = [
        CustomerText.CUSTOMER,
        CustomerText.LANGUAGE,
        CustomerText.LONG_TEXT_ID,
        CustomerText.LONG_TEXT
    ];
    /**
     * All fields selector.
     */
    CustomerText.ALL_FIELDS = new core_1.AllFields('*', CustomerText);
    /**
     * All key fields of the CustomerText entity.
     */
    CustomerText._keyFields = [CustomerText.CUSTOMER, CustomerText.LANGUAGE, CustomerText.LONG_TEXT_ID];
    /**
     * Mapping of all key field names to the respective static field property CustomerText.
     */
    CustomerText._keys = CustomerText._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(CustomerText = exports.CustomerText || (exports.CustomerText = {}));
exports.CustomerText = CustomerText;
//# sourceMappingURL=CustomerText.js.map