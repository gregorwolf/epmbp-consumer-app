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
exports.BusinessPartnerAddress = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var BusinessPartnerAddressRequestBuilder_1 = require("./BusinessPartnerAddressRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "A_BusinessPartnerAddress" of service "API_BUSINESS_PARTNER".
 */
var BusinessPartnerAddress = /** @class */ (function (_super) {
    __extends(BusinessPartnerAddress, _super);
    function BusinessPartnerAddress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `BusinessPartnerAddress`.
     * @returns A builder that constructs instances of entity type `BusinessPartnerAddress`.
     */
    BusinessPartnerAddress.builder = function () {
        return core_1.Entity.entityBuilder(BusinessPartnerAddress);
    };
    /**
     * Returns a request builder to construct requests for operations on the `BusinessPartnerAddress` entity type.
     * @returns A `BusinessPartnerAddress` request builder.
     */
    BusinessPartnerAddress.requestBuilder = function () {
        return new BusinessPartnerAddressRequestBuilder_1.BusinessPartnerAddressRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `BusinessPartnerAddress`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `BusinessPartnerAddress`.
     */
    BusinessPartnerAddress.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, BusinessPartnerAddress);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    BusinessPartnerAddress.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for BusinessPartnerAddress.
     */
    BusinessPartnerAddress._entityName = 'A_BusinessPartnerAddress';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for BusinessPartnerAddress.
     */
    BusinessPartnerAddress._serviceName = 'API_BUSINESS_PARTNER';
    /**
     * Default url path for the according service.
     */
    BusinessPartnerAddress._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
    return BusinessPartnerAddress;
}(core_1.Entity));
exports.BusinessPartnerAddress = BusinessPartnerAddress;
var BuPaAddressUsage_1 = require("./BuPaAddressUsage");
var AddressEmailAddress_1 = require("./AddressEmailAddress");
var AddressFaxNumber_1 = require("./AddressFaxNumber");
var AddressPhoneNumber_1 = require("./AddressPhoneNumber");
var AddressHomePageUrl_1 = require("./AddressHomePageUrl");
(function (BusinessPartnerAddress) {
    /**
     * Static representation of the [[businessPartner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerAddress.BUSINESS_PARTNER = new core_1.StringField('BusinessPartner', BusinessPartnerAddress, 'Edm.String');
    /**
     * Static representation of the [[addressId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerAddress.ADDRESS_ID = new core_1.StringField('AddressID', BusinessPartnerAddress, 'Edm.String');
    /**
     * Static representation of the [[validityStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerAddress.VALIDITY_START_DATE = new core_1.DateField('ValidityStartDate', BusinessPartnerAddress, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[validityEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerAddress.VALIDITY_END_DATE = new core_1.DateField('ValidityEndDate', BusinessPartnerAddress, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[authorizationGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerAddress.AUTHORIZATION_GROUP = new core_1.StringField('AuthorizationGroup', BusinessPartnerAddress, 'Edm.String');
    /**
     * Static representation of the [[addressUuid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerAddress.ADDRESS_UUID = new core_1.StringField('AddressUUID', BusinessPartnerAddress, 'Edm.Guid');
    /**
     * Static representation of the [[additionalStreetPrefixName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerAddress.ADDITIONAL_STREET_PREFIX_NAME = new core_1.StringField('AdditionalStreetPrefixName', BusinessPartnerAddress, 'Edm.String');
    /**
     * Static representation of the [[additionalStreetSuffixName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerAddress.ADDITIONAL_STREET_SUFFIX_NAME = new core_1.StringField('AdditionalStreetSuffixName', BusinessPartnerAddress, 'Edm.String');
    /**
     * Static representation of the [[addressTimeZone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerAddress.ADDRESS_TIME_ZONE = new core_1.StringField('AddressTimeZone', BusinessPartnerAddress, 'Edm.String');
    /**
     * Static representation of the [[careOfName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerAddress.CARE_OF_NAME = new core_1.StringField('CareOfName', BusinessPartnerAddress, 'Edm.String');
    /**
     * Static representation of the [[cityCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerAddress.CITY_CODE = new core_1.StringField('CityCode', BusinessPartnerAddress, 'Edm.String');
    /**
     * Static representation of the [[cityName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerAddress.CITY_NAME = new core_1.StringField('CityName', BusinessPartnerAddress, 'Edm.String');
    /**
     * Static representation of the [[companyPostalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerAddress.COMPANY_POSTAL_CODE = new core_1.StringField('CompanyPostalCode', BusinessPartnerAddress, 'Edm.String');
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerAddress.COUNTRY = new core_1.StringField('Country', BusinessPartnerAddress, 'Edm.String');
    /**
     * Static representation of the [[county]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerAddress.COUNTY = new core_1.StringField('County', BusinessPartnerAddress, 'Edm.String');
    /**
     * Static representation of the [[deliveryServiceNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerAddress.DELIVERY_SERVICE_NUMBER = new core_1.StringField('DeliveryServiceNumber', BusinessPartnerAddress, 'Edm.String');
    /**
     * Static representation of the [[deliveryServiceTypeCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerAddress.DELIVERY_SERVICE_TYPE_CODE = new core_1.StringField('DeliveryServiceTypeCode', BusinessPartnerAddress, 'Edm.String');
    /**
     * Static representation of the [[district]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerAddress.DISTRICT = new core_1.StringField('District', BusinessPartnerAddress, 'Edm.String');
    /**
     * Static representation of the [[formOfAddress]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerAddress.FORM_OF_ADDRESS = new core_1.StringField('FormOfAddress', BusinessPartnerAddress, 'Edm.String');
    /**
     * Static representation of the [[fullName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerAddress.FULL_NAME = new core_1.StringField('FullName', BusinessPartnerAddress, 'Edm.String');
    /**
     * Static representation of the [[homeCityName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerAddress.HOME_CITY_NAME = new core_1.StringField('HomeCityName', BusinessPartnerAddress, 'Edm.String');
    /**
     * Static representation of the [[houseNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerAddress.HOUSE_NUMBER = new core_1.StringField('HouseNumber', BusinessPartnerAddress, 'Edm.String');
    /**
     * Static representation of the [[houseNumberSupplementText]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerAddress.HOUSE_NUMBER_SUPPLEMENT_TEXT = new core_1.StringField('HouseNumberSupplementText', BusinessPartnerAddress, 'Edm.String');
    /**
     * Static representation of the [[language]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerAddress.LANGUAGE = new core_1.StringField('Language', BusinessPartnerAddress, 'Edm.String');
    /**
     * Static representation of the [[poBox]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerAddress.PO_BOX = new core_1.StringField('POBox', BusinessPartnerAddress, 'Edm.String');
    /**
     * Static representation of the [[poBoxDeviatingCityName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerAddress.PO_BOX_DEVIATING_CITY_NAME = new core_1.StringField('POBoxDeviatingCityName', BusinessPartnerAddress, 'Edm.String');
    /**
     * Static representation of the [[poBoxDeviatingCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerAddress.PO_BOX_DEVIATING_COUNTRY = new core_1.StringField('POBoxDeviatingCountry', BusinessPartnerAddress, 'Edm.String');
    /**
     * Static representation of the [[poBoxDeviatingRegion]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerAddress.PO_BOX_DEVIATING_REGION = new core_1.StringField('POBoxDeviatingRegion', BusinessPartnerAddress, 'Edm.String');
    /**
     * Static representation of the [[poBoxIsWithoutNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerAddress.PO_BOX_IS_WITHOUT_NUMBER = new core_1.BooleanField('POBoxIsWithoutNumber', BusinessPartnerAddress, 'Edm.Boolean');
    /**
     * Static representation of the [[poBoxLobbyName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerAddress.PO_BOX_LOBBY_NAME = new core_1.StringField('POBoxLobbyName', BusinessPartnerAddress, 'Edm.String');
    /**
     * Static representation of the [[poBoxPostalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerAddress.PO_BOX_POSTAL_CODE = new core_1.StringField('POBoxPostalCode', BusinessPartnerAddress, 'Edm.String');
    /**
     * Static representation of the [[person]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerAddress.PERSON = new core_1.StringField('Person', BusinessPartnerAddress, 'Edm.String');
    /**
     * Static representation of the [[postalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerAddress.POSTAL_CODE = new core_1.StringField('PostalCode', BusinessPartnerAddress, 'Edm.String');
    /**
     * Static representation of the [[prfrdCommMediumType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerAddress.PRFRD_COMM_MEDIUM_TYPE = new core_1.StringField('PrfrdCommMediumType', BusinessPartnerAddress, 'Edm.String');
    /**
     * Static representation of the [[region]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerAddress.REGION = new core_1.StringField('Region', BusinessPartnerAddress, 'Edm.String');
    /**
     * Static representation of the [[streetName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerAddress.STREET_NAME = new core_1.StringField('StreetName', BusinessPartnerAddress, 'Edm.String');
    /**
     * Static representation of the [[streetPrefixName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerAddress.STREET_PREFIX_NAME = new core_1.StringField('StreetPrefixName', BusinessPartnerAddress, 'Edm.String');
    /**
     * Static representation of the [[streetSuffixName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerAddress.STREET_SUFFIX_NAME = new core_1.StringField('StreetSuffixName', BusinessPartnerAddress, 'Edm.String');
    /**
     * Static representation of the [[taxJurisdiction]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerAddress.TAX_JURISDICTION = new core_1.StringField('TaxJurisdiction', BusinessPartnerAddress, 'Edm.String');
    /**
     * Static representation of the [[transportZone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerAddress.TRANSPORT_ZONE = new core_1.StringField('TransportZone', BusinessPartnerAddress, 'Edm.String');
    /**
     * Static representation of the [[addressIdByExternalSystem]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerAddress.ADDRESS_ID_BY_EXTERNAL_SYSTEM = new core_1.StringField('AddressIDByExternalSystem', BusinessPartnerAddress, 'Edm.String');
    /**
     * Static representation of the [[countyCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerAddress.COUNTY_CODE = new core_1.StringField('CountyCode', BusinessPartnerAddress, 'Edm.String');
    /**
     * Static representation of the [[townshipCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerAddress.TOWNSHIP_CODE = new core_1.StringField('TownshipCode', BusinessPartnerAddress, 'Edm.String');
    /**
     * Static representation of the [[townshipName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerAddress.TOWNSHIP_NAME = new core_1.StringField('TownshipName', BusinessPartnerAddress, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[toAddressUsage]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerAddress.TO_ADDRESS_USAGE = new core_1.Link('to_AddressUsage', BusinessPartnerAddress, BuPaAddressUsage_1.BuPaAddressUsage);
    /**
     * Static representation of the one-to-many navigation property [[toEmailAddress]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerAddress.TO_EMAIL_ADDRESS = new core_1.Link('to_EmailAddress', BusinessPartnerAddress, AddressEmailAddress_1.AddressEmailAddress);
    /**
     * Static representation of the one-to-many navigation property [[toFaxNumber]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerAddress.TO_FAX_NUMBER = new core_1.Link('to_FaxNumber', BusinessPartnerAddress, AddressFaxNumber_1.AddressFaxNumber);
    /**
     * Static representation of the one-to-many navigation property [[toMobilePhoneNumber]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerAddress.TO_MOBILE_PHONE_NUMBER = new core_1.Link('to_MobilePhoneNumber', BusinessPartnerAddress, AddressPhoneNumber_1.AddressPhoneNumber);
    /**
     * Static representation of the one-to-many navigation property [[toPhoneNumber]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerAddress.TO_PHONE_NUMBER = new core_1.Link('to_PhoneNumber', BusinessPartnerAddress, AddressPhoneNumber_1.AddressPhoneNumber);
    /**
     * Static representation of the one-to-many navigation property [[toUrlAddress]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerAddress.TO_URL_ADDRESS = new core_1.Link('to_URLAddress', BusinessPartnerAddress, AddressHomePageUrl_1.AddressHomePageUrl);
    /**
     * All fields of the BusinessPartnerAddress entity.
     */
    BusinessPartnerAddress._allFields = [
        BusinessPartnerAddress.BUSINESS_PARTNER,
        BusinessPartnerAddress.ADDRESS_ID,
        BusinessPartnerAddress.VALIDITY_START_DATE,
        BusinessPartnerAddress.VALIDITY_END_DATE,
        BusinessPartnerAddress.AUTHORIZATION_GROUP,
        BusinessPartnerAddress.ADDRESS_UUID,
        BusinessPartnerAddress.ADDITIONAL_STREET_PREFIX_NAME,
        BusinessPartnerAddress.ADDITIONAL_STREET_SUFFIX_NAME,
        BusinessPartnerAddress.ADDRESS_TIME_ZONE,
        BusinessPartnerAddress.CARE_OF_NAME,
        BusinessPartnerAddress.CITY_CODE,
        BusinessPartnerAddress.CITY_NAME,
        BusinessPartnerAddress.COMPANY_POSTAL_CODE,
        BusinessPartnerAddress.COUNTRY,
        BusinessPartnerAddress.COUNTY,
        BusinessPartnerAddress.DELIVERY_SERVICE_NUMBER,
        BusinessPartnerAddress.DELIVERY_SERVICE_TYPE_CODE,
        BusinessPartnerAddress.DISTRICT,
        BusinessPartnerAddress.FORM_OF_ADDRESS,
        BusinessPartnerAddress.FULL_NAME,
        BusinessPartnerAddress.HOME_CITY_NAME,
        BusinessPartnerAddress.HOUSE_NUMBER,
        BusinessPartnerAddress.HOUSE_NUMBER_SUPPLEMENT_TEXT,
        BusinessPartnerAddress.LANGUAGE,
        BusinessPartnerAddress.PO_BOX,
        BusinessPartnerAddress.PO_BOX_DEVIATING_CITY_NAME,
        BusinessPartnerAddress.PO_BOX_DEVIATING_COUNTRY,
        BusinessPartnerAddress.PO_BOX_DEVIATING_REGION,
        BusinessPartnerAddress.PO_BOX_IS_WITHOUT_NUMBER,
        BusinessPartnerAddress.PO_BOX_LOBBY_NAME,
        BusinessPartnerAddress.PO_BOX_POSTAL_CODE,
        BusinessPartnerAddress.PERSON,
        BusinessPartnerAddress.POSTAL_CODE,
        BusinessPartnerAddress.PRFRD_COMM_MEDIUM_TYPE,
        BusinessPartnerAddress.REGION,
        BusinessPartnerAddress.STREET_NAME,
        BusinessPartnerAddress.STREET_PREFIX_NAME,
        BusinessPartnerAddress.STREET_SUFFIX_NAME,
        BusinessPartnerAddress.TAX_JURISDICTION,
        BusinessPartnerAddress.TRANSPORT_ZONE,
        BusinessPartnerAddress.ADDRESS_ID_BY_EXTERNAL_SYSTEM,
        BusinessPartnerAddress.COUNTY_CODE,
        BusinessPartnerAddress.TOWNSHIP_CODE,
        BusinessPartnerAddress.TOWNSHIP_NAME,
        BusinessPartnerAddress.TO_ADDRESS_USAGE,
        BusinessPartnerAddress.TO_EMAIL_ADDRESS,
        BusinessPartnerAddress.TO_FAX_NUMBER,
        BusinessPartnerAddress.TO_MOBILE_PHONE_NUMBER,
        BusinessPartnerAddress.TO_PHONE_NUMBER,
        BusinessPartnerAddress.TO_URL_ADDRESS
    ];
    /**
     * All fields selector.
     */
    BusinessPartnerAddress.ALL_FIELDS = new core_1.AllFields('*', BusinessPartnerAddress);
    /**
     * All key fields of the BusinessPartnerAddress entity.
     */
    BusinessPartnerAddress._keyFields = [BusinessPartnerAddress.BUSINESS_PARTNER, BusinessPartnerAddress.ADDRESS_ID];
    /**
     * Mapping of all key field names to the respective static field property BusinessPartnerAddress.
     */
    BusinessPartnerAddress._keys = BusinessPartnerAddress._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(BusinessPartnerAddress = exports.BusinessPartnerAddress || (exports.BusinessPartnerAddress = {}));
exports.BusinessPartnerAddress = BusinessPartnerAddress;
//# sourceMappingURL=BusinessPartnerAddress.js.map