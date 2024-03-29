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
exports.AddressEmailAddress = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var AddressEmailAddressRequestBuilder_1 = require("./AddressEmailAddressRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "A_AddressEmailAddress" of service "API_BUSINESS_PARTNER".
 */
var AddressEmailAddress = /** @class */ (function (_super) {
    __extends(AddressEmailAddress, _super);
    function AddressEmailAddress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `AddressEmailAddress`.
     * @returns A builder that constructs instances of entity type `AddressEmailAddress`.
     */
    AddressEmailAddress.builder = function () {
        return core_1.EntityV2.entityBuilder(AddressEmailAddress);
    };
    /**
     * Returns a request builder to construct requests for operations on the `AddressEmailAddress` entity type.
     * @returns A `AddressEmailAddress` request builder.
     */
    AddressEmailAddress.requestBuilder = function () {
        return new AddressEmailAddressRequestBuilder_1.AddressEmailAddressRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `AddressEmailAddress`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `AddressEmailAddress`.
     */
    AddressEmailAddress.customField = function (fieldName) {
        return core_1.EntityV2.customFieldSelector(fieldName, AddressEmailAddress);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    AddressEmailAddress.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for AddressEmailAddress.
     */
    AddressEmailAddress._entityName = 'A_AddressEmailAddress';
    /**
     * Default url path for the according service.
     */
    AddressEmailAddress._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
    return AddressEmailAddress;
}(core_1.EntityV2));
exports.AddressEmailAddress = AddressEmailAddress;
(function (AddressEmailAddress) {
    var _fieldBuilder = new core_1.FieldBuilder(AddressEmailAddress);
    /**
     * Static representation of the [[addressId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AddressEmailAddress.ADDRESS_ID = _fieldBuilder.buildEdmTypeField('AddressID', 'Edm.String', false);
    /**
     * Static representation of the [[person]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AddressEmailAddress.PERSON = _fieldBuilder.buildEdmTypeField('Person', 'Edm.String', false);
    /**
     * Static representation of the [[ordinalNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AddressEmailAddress.ORDINAL_NUMBER = _fieldBuilder.buildEdmTypeField('OrdinalNumber', 'Edm.String', false);
    /**
     * Static representation of the [[isDefaultEmailAddress]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AddressEmailAddress.IS_DEFAULT_EMAIL_ADDRESS = _fieldBuilder.buildEdmTypeField('IsDefaultEmailAddress', 'Edm.Boolean', true);
    /**
     * Static representation of the [[emailAddress]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AddressEmailAddress.EMAIL_ADDRESS = _fieldBuilder.buildEdmTypeField('EmailAddress', 'Edm.String', true);
    /**
     * Static representation of the [[searchEmailAddress]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AddressEmailAddress.SEARCH_EMAIL_ADDRESS = _fieldBuilder.buildEdmTypeField('SearchEmailAddress', 'Edm.String', true);
    /**
     * Static representation of the [[addressCommunicationRemarkText]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AddressEmailAddress.ADDRESS_COMMUNICATION_REMARK_TEXT = _fieldBuilder.buildEdmTypeField('AddressCommunicationRemarkText', 'Edm.String', true);
    /**
     * All fields of the AddressEmailAddress entity.
     */
    AddressEmailAddress._allFields = [
        AddressEmailAddress.ADDRESS_ID,
        AddressEmailAddress.PERSON,
        AddressEmailAddress.ORDINAL_NUMBER,
        AddressEmailAddress.IS_DEFAULT_EMAIL_ADDRESS,
        AddressEmailAddress.EMAIL_ADDRESS,
        AddressEmailAddress.SEARCH_EMAIL_ADDRESS,
        AddressEmailAddress.ADDRESS_COMMUNICATION_REMARK_TEXT
    ];
    /**
     * All fields selector.
     */
    AddressEmailAddress.ALL_FIELDS = new core_1.AllFields('*', AddressEmailAddress);
    /**
     * All key fields of the AddressEmailAddress entity.
     */
    AddressEmailAddress._keyFields = [AddressEmailAddress.ADDRESS_ID, AddressEmailAddress.PERSON, AddressEmailAddress.ORDINAL_NUMBER];
    /**
     * Mapping of all key field names to the respective static field property AddressEmailAddress.
     */
    AddressEmailAddress._keys = AddressEmailAddress._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(AddressEmailAddress = exports.AddressEmailAddress || (exports.AddressEmailAddress = {}));
exports.AddressEmailAddress = AddressEmailAddress;
//# sourceMappingURL=AddressEmailAddress.js.map