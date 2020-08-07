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
exports.AddressFaxNumber = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var AddressFaxNumberRequestBuilder_1 = require("./AddressFaxNumberRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "A_AddressFaxNumber" of service "API_BUSINESS_PARTNER".
 */
var AddressFaxNumber = /** @class */ (function (_super) {
    __extends(AddressFaxNumber, _super);
    function AddressFaxNumber() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `AddressFaxNumber`.
     * @returns A builder that constructs instances of entity type `AddressFaxNumber`.
     */
    AddressFaxNumber.builder = function () {
        return core_1.Entity.entityBuilder(AddressFaxNumber);
    };
    /**
     * Returns a request builder to construct requests for operations on the `AddressFaxNumber` entity type.
     * @returns A `AddressFaxNumber` request builder.
     */
    AddressFaxNumber.requestBuilder = function () {
        return new AddressFaxNumberRequestBuilder_1.AddressFaxNumberRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `AddressFaxNumber`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `AddressFaxNumber`.
     */
    AddressFaxNumber.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, AddressFaxNumber);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    AddressFaxNumber.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for AddressFaxNumber.
     */
    AddressFaxNumber._entityName = 'A_AddressFaxNumber';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for AddressFaxNumber.
     */
    AddressFaxNumber._serviceName = 'API_BUSINESS_PARTNER';
    /**
     * Default url path for the according service.
     */
    AddressFaxNumber._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
    return AddressFaxNumber;
}(core_1.Entity));
exports.AddressFaxNumber = AddressFaxNumber;
(function (AddressFaxNumber) {
    /**
     * Static representation of the [[addressId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AddressFaxNumber.ADDRESS_ID = new core_1.StringField('AddressID', AddressFaxNumber, 'Edm.String');
    /**
     * Static representation of the [[person]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AddressFaxNumber.PERSON = new core_1.StringField('Person', AddressFaxNumber, 'Edm.String');
    /**
     * Static representation of the [[ordinalNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AddressFaxNumber.ORDINAL_NUMBER = new core_1.StringField('OrdinalNumber', AddressFaxNumber, 'Edm.String');
    /**
     * Static representation of the [[isDefaultFaxNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AddressFaxNumber.IS_DEFAULT_FAX_NUMBER = new core_1.BooleanField('IsDefaultFaxNumber', AddressFaxNumber, 'Edm.Boolean');
    /**
     * Static representation of the [[faxCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AddressFaxNumber.FAX_COUNTRY = new core_1.StringField('FaxCountry', AddressFaxNumber, 'Edm.String');
    /**
     * Static representation of the [[faxNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AddressFaxNumber.FAX_NUMBER = new core_1.StringField('FaxNumber', AddressFaxNumber, 'Edm.String');
    /**
     * Static representation of the [[faxNumberExtension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AddressFaxNumber.FAX_NUMBER_EXTENSION = new core_1.StringField('FaxNumberExtension', AddressFaxNumber, 'Edm.String');
    /**
     * Static representation of the [[internationalFaxNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AddressFaxNumber.INTERNATIONAL_FAX_NUMBER = new core_1.StringField('InternationalFaxNumber', AddressFaxNumber, 'Edm.String');
    /**
     * Static representation of the [[addressCommunicationRemarkText]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AddressFaxNumber.ADDRESS_COMMUNICATION_REMARK_TEXT = new core_1.StringField('AddressCommunicationRemarkText', AddressFaxNumber, 'Edm.String');
    /**
     * All fields of the AddressFaxNumber entity.
     */
    AddressFaxNumber._allFields = [
        AddressFaxNumber.ADDRESS_ID,
        AddressFaxNumber.PERSON,
        AddressFaxNumber.ORDINAL_NUMBER,
        AddressFaxNumber.IS_DEFAULT_FAX_NUMBER,
        AddressFaxNumber.FAX_COUNTRY,
        AddressFaxNumber.FAX_NUMBER,
        AddressFaxNumber.FAX_NUMBER_EXTENSION,
        AddressFaxNumber.INTERNATIONAL_FAX_NUMBER,
        AddressFaxNumber.ADDRESS_COMMUNICATION_REMARK_TEXT
    ];
    /**
     * All fields selector.
     */
    AddressFaxNumber.ALL_FIELDS = new core_1.AllFields('*', AddressFaxNumber);
    /**
     * All key fields of the AddressFaxNumber entity.
     */
    AddressFaxNumber._keyFields = [AddressFaxNumber.ADDRESS_ID, AddressFaxNumber.PERSON, AddressFaxNumber.ORDINAL_NUMBER];
    /**
     * Mapping of all key field names to the respective static field property AddressFaxNumber.
     */
    AddressFaxNumber._keys = AddressFaxNumber._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(AddressFaxNumber = exports.AddressFaxNumber || (exports.AddressFaxNumber = {}));
exports.AddressFaxNumber = AddressFaxNumber;
//# sourceMappingURL=AddressFaxNumber.js.map