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
exports.BpContactToAddress = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var BpContactToAddressRequestBuilder_1 = require("./BpContactToAddressRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "A_BPContactToAddress" of service "API_BUSINESS_PARTNER".
 */
var BpContactToAddress = /** @class */ (function (_super) {
    __extends(BpContactToAddress, _super);
    function BpContactToAddress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `BpContactToAddress`.
     * @returns A builder that constructs instances of entity type `BpContactToAddress`.
     */
    BpContactToAddress.builder = function () {
        return core_1.Entity.entityBuilder(BpContactToAddress);
    };
    /**
     * Returns a request builder to construct requests for operations on the `BpContactToAddress` entity type.
     * @returns A `BpContactToAddress` request builder.
     */
    BpContactToAddress.requestBuilder = function () {
        return new BpContactToAddressRequestBuilder_1.BpContactToAddressRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `BpContactToAddress`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `BpContactToAddress`.
     */
    BpContactToAddress.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, BpContactToAddress);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    BpContactToAddress.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for BpContactToAddress.
     */
    BpContactToAddress._entityName = 'A_BPContactToAddress';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for BpContactToAddress.
     */
    BpContactToAddress._serviceName = 'API_BUSINESS_PARTNER';
    /**
     * Default url path for the according service.
     */
    BpContactToAddress._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
    return BpContactToAddress;
}(core_1.Entity));
exports.BpContactToAddress = BpContactToAddress;
var AddressEmailAddress_1 = require("./AddressEmailAddress");
var AddressFaxNumber_1 = require("./AddressFaxNumber");
var AddressPhoneNumber_1 = require("./AddressPhoneNumber");
var AddressHomePageUrl_1 = require("./AddressHomePageUrl");
(function (BpContactToAddress) {
    /**
     * Static representation of the [[relationshipNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToAddress.RELATIONSHIP_NUMBER = new core_1.StringField('RelationshipNumber', BpContactToAddress, 'Edm.String');
    /**
     * Static representation of the [[businessPartnerCompany]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToAddress.BUSINESS_PARTNER_COMPANY = new core_1.StringField('BusinessPartnerCompany', BpContactToAddress, 'Edm.String');
    /**
     * Static representation of the [[businessPartnerPerson]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToAddress.BUSINESS_PARTNER_PERSON = new core_1.StringField('BusinessPartnerPerson', BpContactToAddress, 'Edm.String');
    /**
     * Static representation of the [[validityEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToAddress.VALIDITY_END_DATE = new core_1.DateField('ValidityEndDate', BpContactToAddress, 'Edm.DateTime');
    /**
     * Static representation of the [[addressId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToAddress.ADDRESS_ID = new core_1.StringField('AddressID', BpContactToAddress, 'Edm.String');
    /**
     * Static representation of the [[addressNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToAddress.ADDRESS_NUMBER = new core_1.StringField('AddressNumber', BpContactToAddress, 'Edm.String');
    /**
     * Static representation of the [[additionalStreetPrefixName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToAddress.ADDITIONAL_STREET_PREFIX_NAME = new core_1.StringField('AdditionalStreetPrefixName', BpContactToAddress, 'Edm.String');
    /**
     * Static representation of the [[additionalStreetSuffixName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToAddress.ADDITIONAL_STREET_SUFFIX_NAME = new core_1.StringField('AdditionalStreetSuffixName', BpContactToAddress, 'Edm.String');
    /**
     * Static representation of the [[addressTimeZone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToAddress.ADDRESS_TIME_ZONE = new core_1.StringField('AddressTimeZone', BpContactToAddress, 'Edm.String');
    /**
     * Static representation of the [[careOfName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToAddress.CARE_OF_NAME = new core_1.StringField('CareOfName', BpContactToAddress, 'Edm.String');
    /**
     * Static representation of the [[cityCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToAddress.CITY_CODE = new core_1.StringField('CityCode', BpContactToAddress, 'Edm.String');
    /**
     * Static representation of the [[cityName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToAddress.CITY_NAME = new core_1.StringField('CityName', BpContactToAddress, 'Edm.String');
    /**
     * Static representation of the [[companyPostalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToAddress.COMPANY_POSTAL_CODE = new core_1.StringField('CompanyPostalCode', BpContactToAddress, 'Edm.String');
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToAddress.COUNTRY = new core_1.StringField('Country', BpContactToAddress, 'Edm.String');
    /**
     * Static representation of the [[county]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToAddress.COUNTY = new core_1.StringField('County', BpContactToAddress, 'Edm.String');
    /**
     * Static representation of the [[deliveryServiceNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToAddress.DELIVERY_SERVICE_NUMBER = new core_1.StringField('DeliveryServiceNumber', BpContactToAddress, 'Edm.String');
    /**
     * Static representation of the [[deliveryServiceTypeCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToAddress.DELIVERY_SERVICE_TYPE_CODE = new core_1.StringField('DeliveryServiceTypeCode', BpContactToAddress, 'Edm.String');
    /**
     * Static representation of the [[district]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToAddress.DISTRICT = new core_1.StringField('District', BpContactToAddress, 'Edm.String');
    /**
     * Static representation of the [[formOfAddress]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToAddress.FORM_OF_ADDRESS = new core_1.StringField('FormOfAddress', BpContactToAddress, 'Edm.String');
    /**
     * Static representation of the [[fullName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToAddress.FULL_NAME = new core_1.StringField('FullName', BpContactToAddress, 'Edm.String');
    /**
     * Static representation of the [[homeCityName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToAddress.HOME_CITY_NAME = new core_1.StringField('HomeCityName', BpContactToAddress, 'Edm.String');
    /**
     * Static representation of the [[houseNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToAddress.HOUSE_NUMBER = new core_1.StringField('HouseNumber', BpContactToAddress, 'Edm.String');
    /**
     * Static representation of the [[houseNumberSupplementText]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToAddress.HOUSE_NUMBER_SUPPLEMENT_TEXT = new core_1.StringField('HouseNumberSupplementText', BpContactToAddress, 'Edm.String');
    /**
     * Static representation of the [[language]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToAddress.LANGUAGE = new core_1.StringField('Language', BpContactToAddress, 'Edm.String');
    /**
     * Static representation of the [[poBox]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToAddress.PO_BOX = new core_1.StringField('POBox', BpContactToAddress, 'Edm.String');
    /**
     * Static representation of the [[poBoxDeviatingCityName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToAddress.PO_BOX_DEVIATING_CITY_NAME = new core_1.StringField('POBoxDeviatingCityName', BpContactToAddress, 'Edm.String');
    /**
     * Static representation of the [[poBoxDeviatingCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToAddress.PO_BOX_DEVIATING_COUNTRY = new core_1.StringField('POBoxDeviatingCountry', BpContactToAddress, 'Edm.String');
    /**
     * Static representation of the [[poBoxDeviatingRegion]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToAddress.PO_BOX_DEVIATING_REGION = new core_1.StringField('POBoxDeviatingRegion', BpContactToAddress, 'Edm.String');
    /**
     * Static representation of the [[poBoxIsWithoutNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToAddress.PO_BOX_IS_WITHOUT_NUMBER = new core_1.BooleanField('POBoxIsWithoutNumber', BpContactToAddress, 'Edm.Boolean');
    /**
     * Static representation of the [[poBoxLobbyName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToAddress.PO_BOX_LOBBY_NAME = new core_1.StringField('POBoxLobbyName', BpContactToAddress, 'Edm.String');
    /**
     * Static representation of the [[poBoxPostalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToAddress.PO_BOX_POSTAL_CODE = new core_1.StringField('POBoxPostalCode', BpContactToAddress, 'Edm.String');
    /**
     * Static representation of the [[person]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToAddress.PERSON = new core_1.StringField('Person', BpContactToAddress, 'Edm.String');
    /**
     * Static representation of the [[postalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToAddress.POSTAL_CODE = new core_1.StringField('PostalCode', BpContactToAddress, 'Edm.String');
    /**
     * Static representation of the [[prfrdCommMediumType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToAddress.PRFRD_COMM_MEDIUM_TYPE = new core_1.StringField('PrfrdCommMediumType', BpContactToAddress, 'Edm.String');
    /**
     * Static representation of the [[region]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToAddress.REGION = new core_1.StringField('Region', BpContactToAddress, 'Edm.String');
    /**
     * Static representation of the [[streetName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToAddress.STREET_NAME = new core_1.StringField('StreetName', BpContactToAddress, 'Edm.String');
    /**
     * Static representation of the [[streetPrefixName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToAddress.STREET_PREFIX_NAME = new core_1.StringField('StreetPrefixName', BpContactToAddress, 'Edm.String');
    /**
     * Static representation of the [[streetSuffixName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToAddress.STREET_SUFFIX_NAME = new core_1.StringField('StreetSuffixName', BpContactToAddress, 'Edm.String');
    /**
     * Static representation of the [[taxJurisdiction]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToAddress.TAX_JURISDICTION = new core_1.StringField('TaxJurisdiction', BpContactToAddress, 'Edm.String');
    /**
     * Static representation of the [[transportZone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToAddress.TRANSPORT_ZONE = new core_1.StringField('TransportZone', BpContactToAddress, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[toEmailAddress]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToAddress.TO_EMAIL_ADDRESS = new core_1.Link('to_EmailAddress', BpContactToAddress, AddressEmailAddress_1.AddressEmailAddress);
    /**
     * Static representation of the one-to-many navigation property [[toFaxNumber]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToAddress.TO_FAX_NUMBER = new core_1.Link('to_FaxNumber', BpContactToAddress, AddressFaxNumber_1.AddressFaxNumber);
    /**
     * Static representation of the one-to-many navigation property [[toMobilePhoneNumber]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToAddress.TO_MOBILE_PHONE_NUMBER = new core_1.Link('to_MobilePhoneNumber', BpContactToAddress, AddressPhoneNumber_1.AddressPhoneNumber);
    /**
     * Static representation of the one-to-many navigation property [[toPhoneNumber]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToAddress.TO_PHONE_NUMBER = new core_1.Link('to_PhoneNumber', BpContactToAddress, AddressPhoneNumber_1.AddressPhoneNumber);
    /**
     * Static representation of the one-to-many navigation property [[toUrlAddress]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToAddress.TO_URL_ADDRESS = new core_1.Link('to_URLAddress', BpContactToAddress, AddressHomePageUrl_1.AddressHomePageUrl);
    /**
     * All fields of the BpContactToAddress entity.
     */
    BpContactToAddress._allFields = [
        BpContactToAddress.RELATIONSHIP_NUMBER,
        BpContactToAddress.BUSINESS_PARTNER_COMPANY,
        BpContactToAddress.BUSINESS_PARTNER_PERSON,
        BpContactToAddress.VALIDITY_END_DATE,
        BpContactToAddress.ADDRESS_ID,
        BpContactToAddress.ADDRESS_NUMBER,
        BpContactToAddress.ADDITIONAL_STREET_PREFIX_NAME,
        BpContactToAddress.ADDITIONAL_STREET_SUFFIX_NAME,
        BpContactToAddress.ADDRESS_TIME_ZONE,
        BpContactToAddress.CARE_OF_NAME,
        BpContactToAddress.CITY_CODE,
        BpContactToAddress.CITY_NAME,
        BpContactToAddress.COMPANY_POSTAL_CODE,
        BpContactToAddress.COUNTRY,
        BpContactToAddress.COUNTY,
        BpContactToAddress.DELIVERY_SERVICE_NUMBER,
        BpContactToAddress.DELIVERY_SERVICE_TYPE_CODE,
        BpContactToAddress.DISTRICT,
        BpContactToAddress.FORM_OF_ADDRESS,
        BpContactToAddress.FULL_NAME,
        BpContactToAddress.HOME_CITY_NAME,
        BpContactToAddress.HOUSE_NUMBER,
        BpContactToAddress.HOUSE_NUMBER_SUPPLEMENT_TEXT,
        BpContactToAddress.LANGUAGE,
        BpContactToAddress.PO_BOX,
        BpContactToAddress.PO_BOX_DEVIATING_CITY_NAME,
        BpContactToAddress.PO_BOX_DEVIATING_COUNTRY,
        BpContactToAddress.PO_BOX_DEVIATING_REGION,
        BpContactToAddress.PO_BOX_IS_WITHOUT_NUMBER,
        BpContactToAddress.PO_BOX_LOBBY_NAME,
        BpContactToAddress.PO_BOX_POSTAL_CODE,
        BpContactToAddress.PERSON,
        BpContactToAddress.POSTAL_CODE,
        BpContactToAddress.PRFRD_COMM_MEDIUM_TYPE,
        BpContactToAddress.REGION,
        BpContactToAddress.STREET_NAME,
        BpContactToAddress.STREET_PREFIX_NAME,
        BpContactToAddress.STREET_SUFFIX_NAME,
        BpContactToAddress.TAX_JURISDICTION,
        BpContactToAddress.TRANSPORT_ZONE,
        BpContactToAddress.TO_EMAIL_ADDRESS,
        BpContactToAddress.TO_FAX_NUMBER,
        BpContactToAddress.TO_MOBILE_PHONE_NUMBER,
        BpContactToAddress.TO_PHONE_NUMBER,
        BpContactToAddress.TO_URL_ADDRESS
    ];
    /**
     * All fields selector.
     */
    BpContactToAddress.ALL_FIELDS = new core_1.AllFields('*', BpContactToAddress);
    /**
     * All key fields of the BpContactToAddress entity.
     */
    BpContactToAddress._keyFields = [BpContactToAddress.RELATIONSHIP_NUMBER, BpContactToAddress.BUSINESS_PARTNER_COMPANY, BpContactToAddress.BUSINESS_PARTNER_PERSON, BpContactToAddress.VALIDITY_END_DATE, BpContactToAddress.ADDRESS_ID];
    /**
     * Mapping of all key field names to the respective static field property BpContactToAddress.
     */
    BpContactToAddress._keys = BpContactToAddress._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(BpContactToAddress = exports.BpContactToAddress || (exports.BpContactToAddress = {}));
exports.BpContactToAddress = BpContactToAddress;
//# sourceMappingURL=BpContactToAddress.js.map