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
exports.BpContactToAddress = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
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
     * Returns an entity builder to construct instances of `BpContactToAddress`.
     * @returns A builder that constructs instances of entity type `BpContactToAddress`.
     */
    BpContactToAddress.builder = function () {
        return core_1.EntityV2.entityBuilder(BpContactToAddress);
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
        return core_1.EntityV2.customFieldSelector(fieldName, BpContactToAddress);
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
     * Default url path for the according service.
     */
    BpContactToAddress._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
    return BpContactToAddress;
}(core_1.EntityV2));
exports.BpContactToAddress = BpContactToAddress;
var AddressEmailAddress_1 = require("./AddressEmailAddress");
var AddressFaxNumber_1 = require("./AddressFaxNumber");
var AddressPhoneNumber_1 = require("./AddressPhoneNumber");
var AddressHomePageUrl_1 = require("./AddressHomePageUrl");
(function (BpContactToAddress) {
    var _fieldBuilder = new core_1.FieldBuilder(BpContactToAddress);
    /**
     * Static representation of the [[relationshipNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToAddress.RELATIONSHIP_NUMBER = _fieldBuilder.buildEdmTypeField('RelationshipNumber', 'Edm.String', false);
    /**
     * Static representation of the [[businessPartnerCompany]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToAddress.BUSINESS_PARTNER_COMPANY = _fieldBuilder.buildEdmTypeField('BusinessPartnerCompany', 'Edm.String', false);
    /**
     * Static representation of the [[businessPartnerPerson]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToAddress.BUSINESS_PARTNER_PERSON = _fieldBuilder.buildEdmTypeField('BusinessPartnerPerson', 'Edm.String', false);
    /**
     * Static representation of the [[validityEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToAddress.VALIDITY_END_DATE = _fieldBuilder.buildEdmTypeField('ValidityEndDate', 'Edm.DateTime', false);
    /**
     * Static representation of the [[addressId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToAddress.ADDRESS_ID = _fieldBuilder.buildEdmTypeField('AddressID', 'Edm.String', false);
    /**
     * Static representation of the [[addressNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToAddress.ADDRESS_NUMBER = _fieldBuilder.buildEdmTypeField('AddressNumber', 'Edm.String', true);
    /**
     * Static representation of the [[additionalStreetPrefixName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToAddress.ADDITIONAL_STREET_PREFIX_NAME = _fieldBuilder.buildEdmTypeField('AdditionalStreetPrefixName', 'Edm.String', true);
    /**
     * Static representation of the [[additionalStreetSuffixName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToAddress.ADDITIONAL_STREET_SUFFIX_NAME = _fieldBuilder.buildEdmTypeField('AdditionalStreetSuffixName', 'Edm.String', true);
    /**
     * Static representation of the [[addressTimeZone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToAddress.ADDRESS_TIME_ZONE = _fieldBuilder.buildEdmTypeField('AddressTimeZone', 'Edm.String', true);
    /**
     * Static representation of the [[careOfName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToAddress.CARE_OF_NAME = _fieldBuilder.buildEdmTypeField('CareOfName', 'Edm.String', true);
    /**
     * Static representation of the [[cityCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToAddress.CITY_CODE = _fieldBuilder.buildEdmTypeField('CityCode', 'Edm.String', true);
    /**
     * Static representation of the [[cityName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToAddress.CITY_NAME = _fieldBuilder.buildEdmTypeField('CityName', 'Edm.String', true);
    /**
     * Static representation of the [[companyPostalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToAddress.COMPANY_POSTAL_CODE = _fieldBuilder.buildEdmTypeField('CompanyPostalCode', 'Edm.String', true);
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToAddress.COUNTRY = _fieldBuilder.buildEdmTypeField('Country', 'Edm.String', true);
    /**
     * Static representation of the [[county]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToAddress.COUNTY = _fieldBuilder.buildEdmTypeField('County', 'Edm.String', true);
    /**
     * Static representation of the [[deliveryServiceNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToAddress.DELIVERY_SERVICE_NUMBER = _fieldBuilder.buildEdmTypeField('DeliveryServiceNumber', 'Edm.String', true);
    /**
     * Static representation of the [[deliveryServiceTypeCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToAddress.DELIVERY_SERVICE_TYPE_CODE = _fieldBuilder.buildEdmTypeField('DeliveryServiceTypeCode', 'Edm.String', true);
    /**
     * Static representation of the [[district]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToAddress.DISTRICT = _fieldBuilder.buildEdmTypeField('District', 'Edm.String', true);
    /**
     * Static representation of the [[formOfAddress]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToAddress.FORM_OF_ADDRESS = _fieldBuilder.buildEdmTypeField('FormOfAddress', 'Edm.String', true);
    /**
     * Static representation of the [[fullName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToAddress.FULL_NAME = _fieldBuilder.buildEdmTypeField('FullName', 'Edm.String', true);
    /**
     * Static representation of the [[homeCityName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToAddress.HOME_CITY_NAME = _fieldBuilder.buildEdmTypeField('HomeCityName', 'Edm.String', true);
    /**
     * Static representation of the [[houseNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToAddress.HOUSE_NUMBER = _fieldBuilder.buildEdmTypeField('HouseNumber', 'Edm.String', true);
    /**
     * Static representation of the [[houseNumberSupplementText]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToAddress.HOUSE_NUMBER_SUPPLEMENT_TEXT = _fieldBuilder.buildEdmTypeField('HouseNumberSupplementText', 'Edm.String', true);
    /**
     * Static representation of the [[language]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToAddress.LANGUAGE = _fieldBuilder.buildEdmTypeField('Language', 'Edm.String', true);
    /**
     * Static representation of the [[poBox]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToAddress.PO_BOX = _fieldBuilder.buildEdmTypeField('POBox', 'Edm.String', true);
    /**
     * Static representation of the [[poBoxDeviatingCityName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToAddress.PO_BOX_DEVIATING_CITY_NAME = _fieldBuilder.buildEdmTypeField('POBoxDeviatingCityName', 'Edm.String', true);
    /**
     * Static representation of the [[poBoxDeviatingCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToAddress.PO_BOX_DEVIATING_COUNTRY = _fieldBuilder.buildEdmTypeField('POBoxDeviatingCountry', 'Edm.String', true);
    /**
     * Static representation of the [[poBoxDeviatingRegion]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToAddress.PO_BOX_DEVIATING_REGION = _fieldBuilder.buildEdmTypeField('POBoxDeviatingRegion', 'Edm.String', true);
    /**
     * Static representation of the [[poBoxIsWithoutNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToAddress.PO_BOX_IS_WITHOUT_NUMBER = _fieldBuilder.buildEdmTypeField('POBoxIsWithoutNumber', 'Edm.Boolean', true);
    /**
     * Static representation of the [[poBoxLobbyName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToAddress.PO_BOX_LOBBY_NAME = _fieldBuilder.buildEdmTypeField('POBoxLobbyName', 'Edm.String', true);
    /**
     * Static representation of the [[poBoxPostalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToAddress.PO_BOX_POSTAL_CODE = _fieldBuilder.buildEdmTypeField('POBoxPostalCode', 'Edm.String', true);
    /**
     * Static representation of the [[person]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToAddress.PERSON = _fieldBuilder.buildEdmTypeField('Person', 'Edm.String', true);
    /**
     * Static representation of the [[postalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToAddress.POSTAL_CODE = _fieldBuilder.buildEdmTypeField('PostalCode', 'Edm.String', true);
    /**
     * Static representation of the [[prfrdCommMediumType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToAddress.PRFRD_COMM_MEDIUM_TYPE = _fieldBuilder.buildEdmTypeField('PrfrdCommMediumType', 'Edm.String', true);
    /**
     * Static representation of the [[region]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToAddress.REGION = _fieldBuilder.buildEdmTypeField('Region', 'Edm.String', true);
    /**
     * Static representation of the [[streetName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToAddress.STREET_NAME = _fieldBuilder.buildEdmTypeField('StreetName', 'Edm.String', true);
    /**
     * Static representation of the [[streetPrefixName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToAddress.STREET_PREFIX_NAME = _fieldBuilder.buildEdmTypeField('StreetPrefixName', 'Edm.String', true);
    /**
     * Static representation of the [[streetSuffixName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToAddress.STREET_SUFFIX_NAME = _fieldBuilder.buildEdmTypeField('StreetSuffixName', 'Edm.String', true);
    /**
     * Static representation of the [[taxJurisdiction]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToAddress.TAX_JURISDICTION = _fieldBuilder.buildEdmTypeField('TaxJurisdiction', 'Edm.String', true);
    /**
     * Static representation of the [[transportZone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToAddress.TRANSPORT_ZONE = _fieldBuilder.buildEdmTypeField('TransportZone', 'Edm.String', true);
    /**
     * Static representation of the [[addressRepresentationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToAddress.ADDRESS_REPRESENTATION_CODE = _fieldBuilder.buildEdmTypeField('AddressRepresentationCode', 'Edm.String', true);
    /**
     * Static representation of the [[contactPersonBuilding]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToAddress.CONTACT_PERSON_BUILDING = _fieldBuilder.buildEdmTypeField('ContactPersonBuilding', 'Edm.String', true);
    /**
     * Static representation of the [[contactPersonPrfrdCommMedium]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToAddress.CONTACT_PERSON_PRFRD_COMM_MEDIUM = _fieldBuilder.buildEdmTypeField('ContactPersonPrfrdCommMedium', 'Edm.String', true);
    /**
     * Static representation of the [[contactRelationshipDepartment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToAddress.CONTACT_RELATIONSHIP_DEPARTMENT = _fieldBuilder.buildEdmTypeField('ContactRelationshipDepartment', 'Edm.String', true);
    /**
     * Static representation of the [[contactRelationshipFunction]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToAddress.CONTACT_RELATIONSHIP_FUNCTION = _fieldBuilder.buildEdmTypeField('ContactRelationshipFunction', 'Edm.String', true);
    /**
     * Static representation of the [[correspondenceShortName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToAddress.CORRESPONDENCE_SHORT_NAME = _fieldBuilder.buildEdmTypeField('CorrespondenceShortName', 'Edm.String', true);
    /**
     * Static representation of the [[floor]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToAddress.FLOOR = _fieldBuilder.buildEdmTypeField('Floor', 'Edm.String', true);
    /**
     * Static representation of the [[inhouseMail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToAddress.INHOUSE_MAIL = _fieldBuilder.buildEdmTypeField('InhouseMail', 'Edm.String', true);
    /**
     * Static representation of the [[isDefaultAddress]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToAddress.IS_DEFAULT_ADDRESS = _fieldBuilder.buildEdmTypeField('IsDefaultAddress', 'Edm.Boolean', true);
    /**
     * Static representation of the [[roomNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToAddress.ROOM_NUMBER = _fieldBuilder.buildEdmTypeField('RoomNumber', 'Edm.String', true);
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
        BpContactToAddress.ADDRESS_REPRESENTATION_CODE,
        BpContactToAddress.CONTACT_PERSON_BUILDING,
        BpContactToAddress.CONTACT_PERSON_PRFRD_COMM_MEDIUM,
        BpContactToAddress.CONTACT_RELATIONSHIP_DEPARTMENT,
        BpContactToAddress.CONTACT_RELATIONSHIP_FUNCTION,
        BpContactToAddress.CORRESPONDENCE_SHORT_NAME,
        BpContactToAddress.FLOOR,
        BpContactToAddress.INHOUSE_MAIL,
        BpContactToAddress.IS_DEFAULT_ADDRESS,
        BpContactToAddress.ROOM_NUMBER,
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