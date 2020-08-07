"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
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
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
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
     * Returns an entity builder to construct instances `AddressPhoneNumber`.
     * @returns A builder that constructs instances of entity type `AddressPhoneNumber`.
     */
    AddressPhoneNumber.builder = function () {
        return core_1.Entity.entityBuilder(AddressPhoneNumber);
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
        return core_1.Entity.customFieldSelector(fieldName, AddressPhoneNumber);
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
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for AddressPhoneNumber.
     */
    AddressPhoneNumber._serviceName = 'API_BUSINESS_PARTNER';
    /**
     * Default url path for the according service.
     */
    AddressPhoneNumber._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
    return AddressPhoneNumber;
}(core_1.Entity));
exports.AddressPhoneNumber = AddressPhoneNumber;
(function (AddressPhoneNumber) {
    /**
     * Static representation of the [[addressId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AddressPhoneNumber.ADDRESS_ID = new core_1.StringField('AddressID', AddressPhoneNumber, 'Edm.String');
    /**
     * Static representation of the [[person]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AddressPhoneNumber.PERSON = new core_1.StringField('Person', AddressPhoneNumber, 'Edm.String');
    /**
     * Static representation of the [[ordinalNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AddressPhoneNumber.ORDINAL_NUMBER = new core_1.StringField('OrdinalNumber', AddressPhoneNumber, 'Edm.String');
    /**
     * Static representation of the [[destinationLocationCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AddressPhoneNumber.DESTINATION_LOCATION_COUNTRY = new core_1.StringField('DestinationLocationCountry', AddressPhoneNumber, 'Edm.String');
    /**
     * Static representation of the [[isDefaultPhoneNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AddressPhoneNumber.IS_DEFAULT_PHONE_NUMBER = new core_1.BooleanField('IsDefaultPhoneNumber', AddressPhoneNumber, 'Edm.Boolean');
    /**
     * Static representation of the [[phoneNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AddressPhoneNumber.PHONE_NUMBER = new core_1.StringField('PhoneNumber', AddressPhoneNumber, 'Edm.String');
    /**
     * Static representation of the [[phoneNumberExtension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AddressPhoneNumber.PHONE_NUMBER_EXTENSION = new core_1.StringField('PhoneNumberExtension', AddressPhoneNumber, 'Edm.String');
    /**
     * Static representation of the [[internationalPhoneNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AddressPhoneNumber.INTERNATIONAL_PHONE_NUMBER = new core_1.StringField('InternationalPhoneNumber', AddressPhoneNumber, 'Edm.String');
    /**
     * Static representation of the [[phoneNumberType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AddressPhoneNumber.PHONE_NUMBER_TYPE = new core_1.StringField('PhoneNumberType', AddressPhoneNumber, 'Edm.String');
    /**
     * Static representation of the [[addressCommunicationRemarkText]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AddressPhoneNumber.ADDRESS_COMMUNICATION_REMARK_TEXT = new core_1.StringField('AddressCommunicationRemarkText', AddressPhoneNumber, 'Edm.String');
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