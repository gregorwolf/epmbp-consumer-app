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
exports.AddressHomePageUrl = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var AddressHomePageUrlRequestBuilder_1 = require("./AddressHomePageUrlRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "A_AddressHomePageURL" of service "API_BUSINESS_PARTNER".
 */
var AddressHomePageUrl = /** @class */ (function (_super) {
    __extends(AddressHomePageUrl, _super);
    function AddressHomePageUrl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `AddressHomePageUrl`.
     * @returns A builder that constructs instances of entity type `AddressHomePageUrl`.
     */
    AddressHomePageUrl.builder = function () {
        return core_1.Entity.entityBuilder(AddressHomePageUrl);
    };
    /**
     * Returns a request builder to construct requests for operations on the `AddressHomePageUrl` entity type.
     * @returns A `AddressHomePageUrl` request builder.
     */
    AddressHomePageUrl.requestBuilder = function () {
        return new AddressHomePageUrlRequestBuilder_1.AddressHomePageUrlRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `AddressHomePageUrl`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `AddressHomePageUrl`.
     */
    AddressHomePageUrl.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, AddressHomePageUrl);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    AddressHomePageUrl.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for AddressHomePageUrl.
     */
    AddressHomePageUrl._entityName = 'A_AddressHomePageURL';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for AddressHomePageUrl.
     */
    AddressHomePageUrl._serviceName = 'API_BUSINESS_PARTNER';
    /**
     * Default url path for the according service.
     */
    AddressHomePageUrl._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
    return AddressHomePageUrl;
}(core_1.Entity));
exports.AddressHomePageUrl = AddressHomePageUrl;
(function (AddressHomePageUrl) {
    /**
     * Static representation of the [[addressId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AddressHomePageUrl.ADDRESS_ID = new core_1.StringField('AddressID', AddressHomePageUrl, 'Edm.String');
    /**
     * Static representation of the [[person]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AddressHomePageUrl.PERSON = new core_1.StringField('Person', AddressHomePageUrl, 'Edm.String');
    /**
     * Static representation of the [[ordinalNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AddressHomePageUrl.ORDINAL_NUMBER = new core_1.StringField('OrdinalNumber', AddressHomePageUrl, 'Edm.String');
    /**
     * Static representation of the [[validityStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AddressHomePageUrl.VALIDITY_START_DATE = new core_1.DateField('ValidityStartDate', AddressHomePageUrl, 'Edm.DateTime');
    /**
     * Static representation of the [[isDefaultUrlAddress]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AddressHomePageUrl.IS_DEFAULT_URL_ADDRESS = new core_1.BooleanField('IsDefaultURLAddress', AddressHomePageUrl, 'Edm.Boolean');
    /**
     * Static representation of the [[searchUrlAddress]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AddressHomePageUrl.SEARCH_URL_ADDRESS = new core_1.StringField('SearchURLAddress', AddressHomePageUrl, 'Edm.String');
    /**
     * Static representation of the [[addressCommunicationRemarkText]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AddressHomePageUrl.ADDRESS_COMMUNICATION_REMARK_TEXT = new core_1.StringField('AddressCommunicationRemarkText', AddressHomePageUrl, 'Edm.String');
    /**
     * Static representation of the [[urlFieldLength]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AddressHomePageUrl.URL_FIELD_LENGTH = new core_1.NumberField('URLFieldLength', AddressHomePageUrl, 'Edm.Int16');
    /**
     * Static representation of the [[websiteUrl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AddressHomePageUrl.WEBSITE_URL = new core_1.StringField('WebsiteURL', AddressHomePageUrl, 'Edm.String');
    /**
     * All fields of the AddressHomePageUrl entity.
     */
    AddressHomePageUrl._allFields = [
        AddressHomePageUrl.ADDRESS_ID,
        AddressHomePageUrl.PERSON,
        AddressHomePageUrl.ORDINAL_NUMBER,
        AddressHomePageUrl.VALIDITY_START_DATE,
        AddressHomePageUrl.IS_DEFAULT_URL_ADDRESS,
        AddressHomePageUrl.SEARCH_URL_ADDRESS,
        AddressHomePageUrl.ADDRESS_COMMUNICATION_REMARK_TEXT,
        AddressHomePageUrl.URL_FIELD_LENGTH,
        AddressHomePageUrl.WEBSITE_URL
    ];
    /**
     * All fields selector.
     */
    AddressHomePageUrl.ALL_FIELDS = new core_1.AllFields('*', AddressHomePageUrl);
    /**
     * All key fields of the AddressHomePageUrl entity.
     */
    AddressHomePageUrl._keyFields = [AddressHomePageUrl.ADDRESS_ID, AddressHomePageUrl.PERSON, AddressHomePageUrl.ORDINAL_NUMBER, AddressHomePageUrl.VALIDITY_START_DATE, AddressHomePageUrl.IS_DEFAULT_URL_ADDRESS];
    /**
     * Mapping of all key field names to the respective static field property AddressHomePageUrl.
     */
    AddressHomePageUrl._keys = AddressHomePageUrl._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(AddressHomePageUrl = exports.AddressHomePageUrl || (exports.AddressHomePageUrl = {}));
exports.AddressHomePageUrl = AddressHomePageUrl;
//# sourceMappingURL=AddressHomePageUrl.js.map