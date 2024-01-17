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
exports.AddressPhoneNumber = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var AddressPhoneNumberRequestBuilder_1 = require("./AddressPhoneNumberRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "A_AddressPhoneNumber" of service "API_BUSINESS_PARTNER".
 */
var AddressPhoneNumber = /** @class */ (function (_super) {
    __extends(AddressPhoneNumber, _super);
    function AddressPhoneNumber() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `AddressPhoneNumber`.
     * @returns A builder that constructs instances of entity type `AddressPhoneNumber`.
     */
    AddressPhoneNumber.builder = function () {
        return core_1.EntityV2.entityBuilder(AddressPhoneNumber);
    };
    /**
     * Returns a request builder to construct requests for operations on the `AddressPhoneNumber` entity type.
     * @returns A `AddressPhoneNumber` request builder.
     */
    AddressPhoneNumber.requestBuilder = function () {
        return new AddressPhoneNumberRequestBuilder_1.AddressPhoneNumberRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `AddressPhoneNumber`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `AddressPhoneNumber`.
     */
    AddressPhoneNumber.customField = function (fieldName) {
        return core_1.EntityV2.customFieldSelector(fieldName, AddressPhoneNumber);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    AddressPhoneNumber.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for AddressPhoneNumber.
     */
    AddressPhoneNumber._entityName = 'A_AddressPhoneNumber';
    /**
     * Default url path for the according service.
     */
    AddressPhoneNumber._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
    return AddressPhoneNumber;
}(core_1.EntityV2));
exports.AddressPhoneNumber = AddressPhoneNumber;
(function (AddressPhoneNumber) {
    var _fieldBuilder = new core_1.FieldBuilder(AddressPhoneNumber);
    /**
     * Static representation of the [[addressId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AddressPhoneNumber.ADDRESS_ID = _fieldBuilder.buildEdmTypeField('AddressID', 'Edm.String', false);
    /**
     * Static representation of the [[person]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AddressPhoneNumber.PERSON = _fieldBuilder.buildEdmTypeField('Person', 'Edm.String', false);
    /**
     * Static representation of the [[ordinalNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AddressPhoneNumber.ORDINAL_NUMBER = _fieldBuilder.buildEdmTypeField('OrdinalNumber', 'Edm.String', false);
    /**
     * Static representation of the [[destinationLocationCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AddressPhoneNumber.DESTINATION_LOCATION_COUNTRY = _fieldBuilder.buildEdmTypeField('DestinationLocationCountry', 'Edm.String', true);
    /**
     * Static representation of the [[isDefaultPhoneNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AddressPhoneNumber.IS_DEFAULT_PHONE_NUMBER = _fieldBuilder.buildEdmTypeField('IsDefaultPhoneNumber', 'Edm.Boolean', true);
    /**
     * Static representation of the [[phoneNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AddressPhoneNumber.PHONE_NUMBER = _fieldBuilder.buildEdmTypeField('PhoneNumber', 'Edm.String', true);
    /**
     * Static representation of the [[phoneNumberExtension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AddressPhoneNumber.PHONE_NUMBER_EXTENSION = _fieldBuilder.buildEdmTypeField('PhoneNumberExtension', 'Edm.String', true);
    /**
     * Static representation of the [[internationalPhoneNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AddressPhoneNumber.INTERNATIONAL_PHONE_NUMBER = _fieldBuilder.buildEdmTypeField('InternationalPhoneNumber', 'Edm.String', true);
    /**
     * Static representation of the [[phoneNumberType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AddressPhoneNumber.PHONE_NUMBER_TYPE = _fieldBuilder.buildEdmTypeField('PhoneNumberType', 'Edm.String', true);
    /**
     * Static representation of the [[addressCommunicationRemarkText]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AddressPhoneNumber.ADDRESS_COMMUNICATION_REMARK_TEXT = _fieldBuilder.buildEdmTypeField('AddressCommunicationRemarkText', 'Edm.String', true);
    /**
     * All fields of the AddressPhoneNumber entity.
     */
    AddressPhoneNumber._allFields = [
        AddressPhoneNumber.ADDRESS_ID,
        AddressPhoneNumber.PERSON,
        AddressPhoneNumber.ORDINAL_NUMBER,
        AddressPhoneNumber.DESTINATION_LOCATION_COUNTRY,
        AddressPhoneNumber.IS_DEFAULT_PHONE_NUMBER,
        AddressPhoneNumber.PHONE_NUMBER,
        AddressPhoneNumber.PHONE_NUMBER_EXTENSION,
        AddressPhoneNumber.INTERNATIONAL_PHONE_NUMBER,
        AddressPhoneNumber.PHONE_NUMBER_TYPE,
        AddressPhoneNumber.ADDRESS_COMMUNICATION_REMARK_TEXT
    ];
    /**
     * All fields selector.
     */
    AddressPhoneNumber.ALL_FIELDS = new core_1.AllFields('*', AddressPhoneNumber);
    /**
     * All key fields of the AddressPhoneNumber entity.
     */
    AddressPhoneNumber._keyFields = [AddressPhoneNumber.ADDRESS_ID, AddressPhoneNumber.PERSON, AddressPhoneNumber.ORDINAL_NUMBER];
    /**
     * Mapping of all key field names to the respective static field property AddressPhoneNumber.
     */
    AddressPhoneNumber._keys = AddressPhoneNumber._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(AddressPhoneNumber = exports.AddressPhoneNumber || (exports.AddressPhoneNumber = {}));
exports.AddressPhoneNumber = AddressPhoneNumber;
//# sourceMappingURL=AddressPhoneNumber.js.map