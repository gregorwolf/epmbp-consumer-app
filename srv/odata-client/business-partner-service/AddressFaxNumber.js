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
exports.AddressFaxNumber = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
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
     * Returns an entity builder to construct instances of `AddressFaxNumber`.
     * @returns A builder that constructs instances of entity type `AddressFaxNumber`.
     */
    AddressFaxNumber.builder = function () {
        return core_1.EntityV2.entityBuilder(AddressFaxNumber);
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
        return core_1.EntityV2.customFieldSelector(fieldName, AddressFaxNumber);
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
     * Default url path for the according service.
     */
    AddressFaxNumber._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
    return AddressFaxNumber;
}(core_1.EntityV2));
exports.AddressFaxNumber = AddressFaxNumber;
(function (AddressFaxNumber) {
    var _fieldBuilder = new core_1.FieldBuilder(AddressFaxNumber);
    /**
     * Static representation of the [[addressId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AddressFaxNumber.ADDRESS_ID = _fieldBuilder.buildEdmTypeField('AddressID', 'Edm.String', false);
    /**
     * Static representation of the [[person]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AddressFaxNumber.PERSON = _fieldBuilder.buildEdmTypeField('Person', 'Edm.String', false);
    /**
     * Static representation of the [[ordinalNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AddressFaxNumber.ORDINAL_NUMBER = _fieldBuilder.buildEdmTypeField('OrdinalNumber', 'Edm.String', false);
    /**
     * Static representation of the [[isDefaultFaxNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AddressFaxNumber.IS_DEFAULT_FAX_NUMBER = _fieldBuilder.buildEdmTypeField('IsDefaultFaxNumber', 'Edm.Boolean', true);
    /**
     * Static representation of the [[faxCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AddressFaxNumber.FAX_COUNTRY = _fieldBuilder.buildEdmTypeField('FaxCountry', 'Edm.String', true);
    /**
     * Static representation of the [[faxNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AddressFaxNumber.FAX_NUMBER = _fieldBuilder.buildEdmTypeField('FaxNumber', 'Edm.String', true);
    /**
     * Static representation of the [[faxNumberExtension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AddressFaxNumber.FAX_NUMBER_EXTENSION = _fieldBuilder.buildEdmTypeField('FaxNumberExtension', 'Edm.String', true);
    /**
     * Static representation of the [[internationalFaxNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AddressFaxNumber.INTERNATIONAL_FAX_NUMBER = _fieldBuilder.buildEdmTypeField('InternationalFaxNumber', 'Edm.String', true);
    /**
     * Static representation of the [[addressCommunicationRemarkText]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AddressFaxNumber.ADDRESS_COMMUNICATION_REMARK_TEXT = _fieldBuilder.buildEdmTypeField('AddressCommunicationRemarkText', 'Edm.String', true);
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