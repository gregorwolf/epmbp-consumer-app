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
exports.BusinessPartnerBank = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var BusinessPartnerBankRequestBuilder_1 = require("./BusinessPartnerBankRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "A_BusinessPartnerBank" of service "API_BUSINESS_PARTNER".
 */
var BusinessPartnerBank = /** @class */ (function (_super) {
    __extends(BusinessPartnerBank, _super);
    function BusinessPartnerBank() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `BusinessPartnerBank`.
     * @returns A builder that constructs instances of entity type `BusinessPartnerBank`.
     */
    BusinessPartnerBank.builder = function () {
        return core_1.Entity.entityBuilder(BusinessPartnerBank);
    };
    /**
     * Returns a request builder to construct requests for operations on the `BusinessPartnerBank` entity type.
     * @returns A `BusinessPartnerBank` request builder.
     */
    BusinessPartnerBank.requestBuilder = function () {
        return new BusinessPartnerBankRequestBuilder_1.BusinessPartnerBankRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `BusinessPartnerBank`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `BusinessPartnerBank`.
     */
    BusinessPartnerBank.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, BusinessPartnerBank);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    BusinessPartnerBank.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for BusinessPartnerBank.
     */
    BusinessPartnerBank._entityName = 'A_BusinessPartnerBank';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for BusinessPartnerBank.
     */
    BusinessPartnerBank._serviceName = 'API_BUSINESS_PARTNER';
    /**
     * Default url path for the according service.
     */
    BusinessPartnerBank._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
    return BusinessPartnerBank;
}(core_1.Entity));
exports.BusinessPartnerBank = BusinessPartnerBank;
(function (BusinessPartnerBank) {
    /**
     * Static representation of the [[businessPartner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerBank.BUSINESS_PARTNER = new core_1.StringField('BusinessPartner', BusinessPartnerBank, 'Edm.String');
    /**
     * Static representation of the [[bankIdentification]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerBank.BANK_IDENTIFICATION = new core_1.StringField('BankIdentification', BusinessPartnerBank, 'Edm.String');
    /**
     * Static representation of the [[bankCountryKey]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerBank.BANK_COUNTRY_KEY = new core_1.StringField('BankCountryKey', BusinessPartnerBank, 'Edm.String');
    /**
     * Static representation of the [[bankName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerBank.BANK_NAME = new core_1.StringField('BankName', BusinessPartnerBank, 'Edm.String');
    /**
     * Static representation of the [[bankNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerBank.BANK_NUMBER = new core_1.StringField('BankNumber', BusinessPartnerBank, 'Edm.String');
    /**
     * Static representation of the [[swiftCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerBank.SWIFT_CODE = new core_1.StringField('SWIFTCode', BusinessPartnerBank, 'Edm.String');
    /**
     * Static representation of the [[bankControlKey]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerBank.BANK_CONTROL_KEY = new core_1.StringField('BankControlKey', BusinessPartnerBank, 'Edm.String');
    /**
     * Static representation of the [[bankAccountHolderName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerBank.BANK_ACCOUNT_HOLDER_NAME = new core_1.StringField('BankAccountHolderName', BusinessPartnerBank, 'Edm.String');
    /**
     * Static representation of the [[bankAccountName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerBank.BANK_ACCOUNT_NAME = new core_1.StringField('BankAccountName', BusinessPartnerBank, 'Edm.String');
    /**
     * Static representation of the [[validityStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerBank.VALIDITY_START_DATE = new core_1.DateField('ValidityStartDate', BusinessPartnerBank, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[validityEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerBank.VALIDITY_END_DATE = new core_1.DateField('ValidityEndDate', BusinessPartnerBank, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[iban]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerBank.IBAN = new core_1.StringField('IBAN', BusinessPartnerBank, 'Edm.String');
    /**
     * Static representation of the [[ibanValidityStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerBank.IBAN_VALIDITY_START_DATE = new core_1.DateField('IBANValidityStartDate', BusinessPartnerBank, 'Edm.DateTime');
    /**
     * Static representation of the [[bankAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerBank.BANK_ACCOUNT = new core_1.StringField('BankAccount', BusinessPartnerBank, 'Edm.String');
    /**
     * Static representation of the [[bankAccountReferenceText]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerBank.BANK_ACCOUNT_REFERENCE_TEXT = new core_1.StringField('BankAccountReferenceText', BusinessPartnerBank, 'Edm.String');
    /**
     * Static representation of the [[collectionAuthInd]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerBank.COLLECTION_AUTH_IND = new core_1.BooleanField('CollectionAuthInd', BusinessPartnerBank, 'Edm.Boolean');
    /**
     * Static representation of the [[cityName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerBank.CITY_NAME = new core_1.StringField('CityName', BusinessPartnerBank, 'Edm.String');
    /**
     * Static representation of the [[authorizationGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerBank.AUTHORIZATION_GROUP = new core_1.StringField('AuthorizationGroup', BusinessPartnerBank, 'Edm.String');
    /**
     * All fields of the BusinessPartnerBank entity.
     */
    BusinessPartnerBank._allFields = [
        BusinessPartnerBank.BUSINESS_PARTNER,
        BusinessPartnerBank.BANK_IDENTIFICATION,
        BusinessPartnerBank.BANK_COUNTRY_KEY,
        BusinessPartnerBank.BANK_NAME,
        BusinessPartnerBank.BANK_NUMBER,
        BusinessPartnerBank.SWIFT_CODE,
        BusinessPartnerBank.BANK_CONTROL_KEY,
        BusinessPartnerBank.BANK_ACCOUNT_HOLDER_NAME,
        BusinessPartnerBank.BANK_ACCOUNT_NAME,
        BusinessPartnerBank.VALIDITY_START_DATE,
        BusinessPartnerBank.VALIDITY_END_DATE,
        BusinessPartnerBank.IBAN,
        BusinessPartnerBank.IBAN_VALIDITY_START_DATE,
        BusinessPartnerBank.BANK_ACCOUNT,
        BusinessPartnerBank.BANK_ACCOUNT_REFERENCE_TEXT,
        BusinessPartnerBank.COLLECTION_AUTH_IND,
        BusinessPartnerBank.CITY_NAME,
        BusinessPartnerBank.AUTHORIZATION_GROUP
    ];
    /**
     * All fields selector.
     */
    BusinessPartnerBank.ALL_FIELDS = new core_1.AllFields('*', BusinessPartnerBank);
    /**
     * All key fields of the BusinessPartnerBank entity.
     */
    BusinessPartnerBank._keyFields = [BusinessPartnerBank.BUSINESS_PARTNER, BusinessPartnerBank.BANK_IDENTIFICATION];
    /**
     * Mapping of all key field names to the respective static field property BusinessPartnerBank.
     */
    BusinessPartnerBank._keys = BusinessPartnerBank._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(BusinessPartnerBank = exports.BusinessPartnerBank || (exports.BusinessPartnerBank = {}));
exports.BusinessPartnerBank = BusinessPartnerBank;
//# sourceMappingURL=BusinessPartnerBank.js.map