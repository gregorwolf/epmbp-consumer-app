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
exports.BusinessPartnerAddress = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
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
     * Returns an entity builder to construct instances of `BusinessPartnerAddress`.
     * @returns A builder that constructs instances of entity type `BusinessPartnerAddress`.
     */
    BusinessPartnerAddress.builder = function () {
        return core_1.EntityV2.entityBuilder(BusinessPartnerAddress);
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
        return core_1.EntityV2.customFieldSelector(fieldName, BusinessPartnerAddress);
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
     * Default url path for the according service.
     */
    BusinessPartnerAddress._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
    return BusinessPartnerAddress;
}(core_1.EntityV2));
exports.BusinessPartnerAddress = BusinessPartnerAddress;
var BuPaAddressUsage_1 = require("./BuPaAddressUsage");
var BpAddrDepdntIntlLocNumber_1 = require("./BpAddrDepdntIntlLocNumber");
var BpIntlAddressVersion_1 = require("./BpIntlAddressVersion");
var AddressEmailAddress_1 = require("./AddressEmailAddress");
var AddressFaxNumber_1 = require("./AddressFaxNumber");
var AddressPhoneNumber_1 = require("./AddressPhoneNumber");
var AddressHomePageUrl_1 = require("./AddressHomePageUrl");
(function (BusinessPartnerAddress) {
    var _fieldBuilder = new core_1.FieldBuilder(BusinessPartnerAddress);
    /**
     * Static representation of the [[businessPartner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerAddress.BUSINESS_PARTNER = _fieldBuilder.buildEdmTypeField('BusinessPartner', 'Edm.String', false);
    /**
     * Static representation of the [[addressId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerAddress.ADDRESS_ID = _fieldBuilder.buildEdmTypeField('AddressID', 'Edm.String', false);
    /**
     * Static representation of the [[validityStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerAddress.VALIDITY_START_DATE = _fieldBuilder.buildEdmTypeField('ValidityStartDate', 'Edm.DateTimeOffset', true);
    /**
     * Static representation of the [[validityEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerAddress.VALIDITY_END_DATE = _fieldBuilder.buildEdmTypeField('ValidityEndDate', 'Edm.DateTimeOffset', true);
    /**
     * Static representation of the [[authorizationGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerAddress.AUTHORIZATION_GROUP = _fieldBuilder.buildEdmTypeField('AuthorizationGroup', 'Edm.String', true);
    /**
     * Static representation of the [[addressUuid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerAddress.ADDRESS_UUID = _fieldBuilder.buildEdmTypeField('AddressUUID', 'Edm.Guid', true);
    /**
     * Static representation of the [[additionalStreetPrefixName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerAddress.ADDITIONAL_STREET_PREFIX_NAME = _fieldBuilder.buildEdmTypeField('AdditionalStreetPrefixName', 'Edm.String', true);
    /**
     * Static representation of the [[additionalStreetSuffixName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerAddress.ADDITIONAL_STREET_SUFFIX_NAME = _fieldBuilder.buildEdmTypeField('AdditionalStreetSuffixName', 'Edm.String', true);
    /**
     * Static representation of the [[addressTimeZone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerAddress.ADDRESS_TIME_ZONE = _fieldBuilder.buildEdmTypeField('AddressTimeZone', 'Edm.String', true);
    /**
     * Static representation of the [[careOfName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerAddress.CARE_OF_NAME = _fieldBuilder.buildEdmTypeField('CareOfName', 'Edm.String', true);
    /**
     * Static representation of the [[cityCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerAddress.CITY_CODE = _fieldBuilder.buildEdmTypeField('CityCode', 'Edm.String', true);
    /**
     * Static representation of the [[cityName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerAddress.CITY_NAME = _fieldBuilder.buildEdmTypeField('CityName', 'Edm.String', true);
    /**
     * Static representation of the [[companyPostalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerAddress.COMPANY_POSTAL_CODE = _fieldBuilder.buildEdmTypeField('CompanyPostalCode', 'Edm.String', true);
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerAddress.COUNTRY = _fieldBuilder.buildEdmTypeField('Country', 'Edm.String', true);
    /**
     * Static representation of the [[county]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerAddress.COUNTY = _fieldBuilder.buildEdmTypeField('County', 'Edm.String', true);
    /**
     * Static representation of the [[deliveryServiceNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerAddress.DELIVERY_SERVICE_NUMBER = _fieldBuilder.buildEdmTypeField('DeliveryServiceNumber', 'Edm.String', true);
    /**
     * Static representation of the [[deliveryServiceTypeCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerAddress.DELIVERY_SERVICE_TYPE_CODE = _fieldBuilder.buildEdmTypeField('DeliveryServiceTypeCode', 'Edm.String', true);
    /**
     * Static representation of the [[district]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerAddress.DISTRICT = _fieldBuilder.buildEdmTypeField('District', 'Edm.String', true);
    /**
     * Static representation of the [[formOfAddress]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerAddress.FORM_OF_ADDRESS = _fieldBuilder.buildEdmTypeField('FormOfAddress', 'Edm.String', true);
    /**
     * Static representation of the [[fullName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerAddress.FULL_NAME = _fieldBuilder.buildEdmTypeField('FullName', 'Edm.String', true);
    /**
     * Static representation of the [[homeCityName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerAddress.HOME_CITY_NAME = _fieldBuilder.buildEdmTypeField('HomeCityName', 'Edm.String', true);
    /**
     * Static representation of the [[houseNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerAddress.HOUSE_NUMBER = _fieldBuilder.buildEdmTypeField('HouseNumber', 'Edm.String', true);
    /**
     * Static representation of the [[houseNumberSupplementText]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerAddress.HOUSE_NUMBER_SUPPLEMENT_TEXT = _fieldBuilder.buildEdmTypeField('HouseNumberSupplementText', 'Edm.String', true);
    /**
     * Static representation of the [[language]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerAddress.LANGUAGE = _fieldBuilder.buildEdmTypeField('Language', 'Edm.String', true);
    /**
     * Static representation of the [[poBox]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerAddress.PO_BOX = _fieldBuilder.buildEdmTypeField('POBox', 'Edm.String', true);
    /**
     * Static representation of the [[poBoxDeviatingCityName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerAddress.PO_BOX_DEVIATING_CITY_NAME = _fieldBuilder.buildEdmTypeField('POBoxDeviatingCityName', 'Edm.String', true);
    /**
     * Static representation of the [[poBoxDeviatingCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerAddress.PO_BOX_DEVIATING_COUNTRY = _fieldBuilder.buildEdmTypeField('POBoxDeviatingCountry', 'Edm.String', true);
    /**
     * Static representation of the [[poBoxDeviatingRegion]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerAddress.PO_BOX_DEVIATING_REGION = _fieldBuilder.buildEdmTypeField('POBoxDeviatingRegion', 'Edm.String', true);
    /**
     * Static representation of the [[poBoxIsWithoutNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerAddress.PO_BOX_IS_WITHOUT_NUMBER = _fieldBuilder.buildEdmTypeField('POBoxIsWithoutNumber', 'Edm.Boolean', true);
    /**
     * Static representation of the [[poBoxLobbyName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerAddress.PO_BOX_LOBBY_NAME = _fieldBuilder.buildEdmTypeField('POBoxLobbyName', 'Edm.String', true);
    /**
     * Static representation of the [[poBoxPostalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerAddress.PO_BOX_POSTAL_CODE = _fieldBuilder.buildEdmTypeField('POBoxPostalCode', 'Edm.String', true);
    /**
     * Static representation of the [[person]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerAddress.PERSON = _fieldBuilder.buildEdmTypeField('Person', 'Edm.String', true);
    /**
     * Static representation of the [[postalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerAddress.POSTAL_CODE = _fieldBuilder.buildEdmTypeField('PostalCode', 'Edm.String', true);
    /**
     * Static representation of the [[prfrdCommMediumType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerAddress.PRFRD_COMM_MEDIUM_TYPE = _fieldBuilder.buildEdmTypeField('PrfrdCommMediumType', 'Edm.String', true);
    /**
     * Static representation of the [[region]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerAddress.REGION = _fieldBuilder.buildEdmTypeField('Region', 'Edm.String', true);
    /**
     * Static representation of the [[streetName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerAddress.STREET_NAME = _fieldBuilder.buildEdmTypeField('StreetName', 'Edm.String', true);
    /**
     * Static representation of the [[streetPrefixName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerAddress.STREET_PREFIX_NAME = _fieldBuilder.buildEdmTypeField('StreetPrefixName', 'Edm.String', true);
    /**
     * Static representation of the [[streetSuffixName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerAddress.STREET_SUFFIX_NAME = _fieldBuilder.buildEdmTypeField('StreetSuffixName', 'Edm.String', true);
    /**
     * Static representation of the [[taxJurisdiction]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerAddress.TAX_JURISDICTION = _fieldBuilder.buildEdmTypeField('TaxJurisdiction', 'Edm.String', true);
    /**
     * Static representation of the [[transportZone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerAddress.TRANSPORT_ZONE = _fieldBuilder.buildEdmTypeField('TransportZone', 'Edm.String', true);
    /**
     * Static representation of the [[addressIdByExternalSystem]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerAddress.ADDRESS_ID_BY_EXTERNAL_SYSTEM = _fieldBuilder.buildEdmTypeField('AddressIDByExternalSystem', 'Edm.String', true);
    /**
     * Static representation of the [[countyCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerAddress.COUNTY_CODE = _fieldBuilder.buildEdmTypeField('CountyCode', 'Edm.String', true);
    /**
     * Static representation of the [[townshipCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerAddress.TOWNSHIP_CODE = _fieldBuilder.buildEdmTypeField('TownshipCode', 'Edm.String', true);
    /**
     * Static representation of the [[townshipName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerAddress.TOWNSHIP_NAME = _fieldBuilder.buildEdmTypeField('TownshipName', 'Edm.String', true);
    /**
     * Static representation of the one-to-many navigation property [[toAddressUsage]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerAddress.TO_ADDRESS_USAGE = new core_1.Link('to_AddressUsage', BusinessPartnerAddress, BuPaAddressUsage_1.BuPaAddressUsage);
    /**
     * Static representation of the one-to-one navigation property [[toBpAddrDepdntIntlLocNumber]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerAddress.TO_BP_ADDR_DEPDNT_INTL_LOC_NUMBER = new core_1.OneToOneLink('to_BPAddrDepdntIntlLocNumber', BusinessPartnerAddress, BpAddrDepdntIntlLocNumber_1.BpAddrDepdntIntlLocNumber);
    /**
     * Static representation of the one-to-many navigation property [[toBpIntlAddressVersion]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerAddress.TO_BP_INTL_ADDRESS_VERSION = new core_1.Link('to_BPIntlAddressVersion', BusinessPartnerAddress, BpIntlAddressVersion_1.BpIntlAddressVersion);
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
        BusinessPartnerAddress.TO_BP_ADDR_DEPDNT_INTL_LOC_NUMBER,
        BusinessPartnerAddress.TO_BP_INTL_ADDRESS_VERSION,
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