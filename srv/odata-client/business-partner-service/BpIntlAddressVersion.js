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
exports.BpIntlAddressVersion = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var BpIntlAddressVersionRequestBuilder_1 = require("./BpIntlAddressVersionRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "A_BPIntlAddressVersion" of service "API_BUSINESS_PARTNER".
 */
var BpIntlAddressVersion = /** @class */ (function (_super) {
    __extends(BpIntlAddressVersion, _super);
    function BpIntlAddressVersion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `BpIntlAddressVersion`.
     * @returns A builder that constructs instances of entity type `BpIntlAddressVersion`.
     */
    BpIntlAddressVersion.builder = function () {
        return core_1.EntityV2.entityBuilder(BpIntlAddressVersion);
    };
    /**
     * Returns a request builder to construct requests for operations on the `BpIntlAddressVersion` entity type.
     * @returns A `BpIntlAddressVersion` request builder.
     */
    BpIntlAddressVersion.requestBuilder = function () {
        return new BpIntlAddressVersionRequestBuilder_1.BpIntlAddressVersionRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `BpIntlAddressVersion`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `BpIntlAddressVersion`.
     */
    BpIntlAddressVersion.customField = function (fieldName) {
        return core_1.EntityV2.customFieldSelector(fieldName, BpIntlAddressVersion);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    BpIntlAddressVersion.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for BpIntlAddressVersion.
     */
    BpIntlAddressVersion._entityName = 'A_BPIntlAddressVersion';
    /**
     * Default url path for the according service.
     */
    BpIntlAddressVersion._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
    return BpIntlAddressVersion;
}(core_1.EntityV2));
exports.BpIntlAddressVersion = BpIntlAddressVersion;
(function (BpIntlAddressVersion) {
    var _fieldBuilder = new core_1.FieldBuilder(BpIntlAddressVersion);
    /**
     * Static representation of the [[businessPartner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpIntlAddressVersion.BUSINESS_PARTNER = _fieldBuilder.buildEdmTypeField('BusinessPartner', 'Edm.String', false);
    /**
     * Static representation of the [[addressId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpIntlAddressVersion.ADDRESS_ID = _fieldBuilder.buildEdmTypeField('AddressID', 'Edm.String', false);
    /**
     * Static representation of the [[addressRepresentationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpIntlAddressVersion.ADDRESS_REPRESENTATION_CODE = _fieldBuilder.buildEdmTypeField('AddressRepresentationCode', 'Edm.String', false);
    /**
     * Static representation of the [[addresseeFullName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpIntlAddressVersion.ADDRESSEE_FULL_NAME = _fieldBuilder.buildEdmTypeField('AddresseeFullName', 'Edm.String', true);
    /**
     * Static representation of the [[addressIdByExternalSystem]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpIntlAddressVersion.ADDRESS_ID_BY_EXTERNAL_SYSTEM = _fieldBuilder.buildEdmTypeField('AddressIDByExternalSystem', 'Edm.String', true);
    /**
     * Static representation of the [[addressPersonId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpIntlAddressVersion.ADDRESS_PERSON_ID = _fieldBuilder.buildEdmTypeField('AddressPersonID', 'Edm.String', true);
    /**
     * Static representation of the [[addressSearchTerm1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpIntlAddressVersion.ADDRESS_SEARCH_TERM_1 = _fieldBuilder.buildEdmTypeField('AddressSearchTerm1', 'Edm.String', true);
    /**
     * Static representation of the [[addressSearchTerm2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpIntlAddressVersion.ADDRESS_SEARCH_TERM_2 = _fieldBuilder.buildEdmTypeField('AddressSearchTerm2', 'Edm.String', true);
    /**
     * Static representation of the [[addressTimeZone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpIntlAddressVersion.ADDRESS_TIME_ZONE = _fieldBuilder.buildEdmTypeField('AddressTimeZone', 'Edm.String', true);
    /**
     * Static representation of the [[careOfName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpIntlAddressVersion.CARE_OF_NAME = _fieldBuilder.buildEdmTypeField('CareOfName', 'Edm.String', true);
    /**
     * Static representation of the [[cityName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpIntlAddressVersion.CITY_NAME = _fieldBuilder.buildEdmTypeField('CityName', 'Edm.String', true);
    /**
     * Static representation of the [[cityNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpIntlAddressVersion.CITY_NUMBER = _fieldBuilder.buildEdmTypeField('CityNumber', 'Edm.String', true);
    /**
     * Static representation of the [[companyPostalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpIntlAddressVersion.COMPANY_POSTAL_CODE = _fieldBuilder.buildEdmTypeField('CompanyPostalCode', 'Edm.String', true);
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpIntlAddressVersion.COUNTRY = _fieldBuilder.buildEdmTypeField('Country', 'Edm.String', true);
    /**
     * Static representation of the [[deliveryServiceNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpIntlAddressVersion.DELIVERY_SERVICE_NUMBER = _fieldBuilder.buildEdmTypeField('DeliveryServiceNumber', 'Edm.String', true);
    /**
     * Static representation of the [[deliveryServiceTypeCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpIntlAddressVersion.DELIVERY_SERVICE_TYPE_CODE = _fieldBuilder.buildEdmTypeField('DeliveryServiceTypeCode', 'Edm.String', true);
    /**
     * Static representation of the [[districtName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpIntlAddressVersion.DISTRICT_NAME = _fieldBuilder.buildEdmTypeField('DistrictName', 'Edm.String', true);
    /**
     * Static representation of the [[formOfAddress]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpIntlAddressVersion.FORM_OF_ADDRESS = _fieldBuilder.buildEdmTypeField('FormOfAddress', 'Edm.String', true);
    /**
     * Static representation of the [[houseNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpIntlAddressVersion.HOUSE_NUMBER = _fieldBuilder.buildEdmTypeField('HouseNumber', 'Edm.String', true);
    /**
     * Static representation of the [[houseNumberSupplementText]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpIntlAddressVersion.HOUSE_NUMBER_SUPPLEMENT_TEXT = _fieldBuilder.buildEdmTypeField('HouseNumberSupplementText', 'Edm.String', true);
    /**
     * Static representation of the [[language]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpIntlAddressVersion.LANGUAGE = _fieldBuilder.buildEdmTypeField('Language', 'Edm.String', true);
    /**
     * Static representation of the [[organizationName1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpIntlAddressVersion.ORGANIZATION_NAME_1 = _fieldBuilder.buildEdmTypeField('OrganizationName1', 'Edm.String', true);
    /**
     * Static representation of the [[organizationName2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpIntlAddressVersion.ORGANIZATION_NAME_2 = _fieldBuilder.buildEdmTypeField('OrganizationName2', 'Edm.String', true);
    /**
     * Static representation of the [[organizationName3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpIntlAddressVersion.ORGANIZATION_NAME_3 = _fieldBuilder.buildEdmTypeField('OrganizationName3', 'Edm.String', true);
    /**
     * Static representation of the [[organizationName4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpIntlAddressVersion.ORGANIZATION_NAME_4 = _fieldBuilder.buildEdmTypeField('OrganizationName4', 'Edm.String', true);
    /**
     * Static representation of the [[personFamilyName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpIntlAddressVersion.PERSON_FAMILY_NAME = _fieldBuilder.buildEdmTypeField('PersonFamilyName', 'Edm.String', true);
    /**
     * Static representation of the [[personGivenName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpIntlAddressVersion.PERSON_GIVEN_NAME = _fieldBuilder.buildEdmTypeField('PersonGivenName', 'Edm.String', true);
    /**
     * Static representation of the [[poBox]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpIntlAddressVersion.PO_BOX = _fieldBuilder.buildEdmTypeField('POBox', 'Edm.String', true);
    /**
     * Static representation of the [[poBoxDeviatingCityName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpIntlAddressVersion.PO_BOX_DEVIATING_CITY_NAME = _fieldBuilder.buildEdmTypeField('POBoxDeviatingCityName', 'Edm.String', true);
    /**
     * Static representation of the [[poBoxDeviatingCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpIntlAddressVersion.PO_BOX_DEVIATING_COUNTRY = _fieldBuilder.buildEdmTypeField('POBoxDeviatingCountry', 'Edm.String', true);
    /**
     * Static representation of the [[poBoxDeviatingRegion]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpIntlAddressVersion.PO_BOX_DEVIATING_REGION = _fieldBuilder.buildEdmTypeField('POBoxDeviatingRegion', 'Edm.String', true);
    /**
     * Static representation of the [[poBoxIsWithoutNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpIntlAddressVersion.PO_BOX_IS_WITHOUT_NUMBER = _fieldBuilder.buildEdmTypeField('POBoxIsWithoutNumber', 'Edm.Boolean', true);
    /**
     * Static representation of the [[poBoxLobbyName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpIntlAddressVersion.PO_BOX_LOBBY_NAME = _fieldBuilder.buildEdmTypeField('POBoxLobbyName', 'Edm.String', true);
    /**
     * Static representation of the [[poBoxPostalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpIntlAddressVersion.PO_BOX_POSTAL_CODE = _fieldBuilder.buildEdmTypeField('POBoxPostalCode', 'Edm.String', true);
    /**
     * Static representation of the [[postalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpIntlAddressVersion.POSTAL_CODE = _fieldBuilder.buildEdmTypeField('PostalCode', 'Edm.String', true);
    /**
     * Static representation of the [[prfrdCommMediumType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpIntlAddressVersion.PRFRD_COMM_MEDIUM_TYPE = _fieldBuilder.buildEdmTypeField('PrfrdCommMediumType', 'Edm.String', true);
    /**
     * Static representation of the [[region]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpIntlAddressVersion.REGION = _fieldBuilder.buildEdmTypeField('Region', 'Edm.String', true);
    /**
     * Static representation of the [[secondaryRegion]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpIntlAddressVersion.SECONDARY_REGION = _fieldBuilder.buildEdmTypeField('SecondaryRegion', 'Edm.String', true);
    /**
     * Static representation of the [[secondaryRegionName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpIntlAddressVersion.SECONDARY_REGION_NAME = _fieldBuilder.buildEdmTypeField('SecondaryRegionName', 'Edm.String', true);
    /**
     * Static representation of the [[streetName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpIntlAddressVersion.STREET_NAME = _fieldBuilder.buildEdmTypeField('StreetName', 'Edm.String', true);
    /**
     * Static representation of the [[streetPrefixName1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpIntlAddressVersion.STREET_PREFIX_NAME_1 = _fieldBuilder.buildEdmTypeField('StreetPrefixName1', 'Edm.String', true);
    /**
     * Static representation of the [[streetPrefixName2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpIntlAddressVersion.STREET_PREFIX_NAME_2 = _fieldBuilder.buildEdmTypeField('StreetPrefixName2', 'Edm.String', true);
    /**
     * Static representation of the [[streetSuffixName1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpIntlAddressVersion.STREET_SUFFIX_NAME_1 = _fieldBuilder.buildEdmTypeField('StreetSuffixName1', 'Edm.String', true);
    /**
     * Static representation of the [[streetSuffixName2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpIntlAddressVersion.STREET_SUFFIX_NAME_2 = _fieldBuilder.buildEdmTypeField('StreetSuffixName2', 'Edm.String', true);
    /**
     * Static representation of the [[taxJurisdiction]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpIntlAddressVersion.TAX_JURISDICTION = _fieldBuilder.buildEdmTypeField('TaxJurisdiction', 'Edm.String', true);
    /**
     * Static representation of the [[tertiaryRegion]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpIntlAddressVersion.TERTIARY_REGION = _fieldBuilder.buildEdmTypeField('TertiaryRegion', 'Edm.String', true);
    /**
     * Static representation of the [[tertiaryRegionName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpIntlAddressVersion.TERTIARY_REGION_NAME = _fieldBuilder.buildEdmTypeField('TertiaryRegionName', 'Edm.String', true);
    /**
     * Static representation of the [[transportZone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpIntlAddressVersion.TRANSPORT_ZONE = _fieldBuilder.buildEdmTypeField('TransportZone', 'Edm.String', true);
    /**
     * Static representation of the [[villageName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpIntlAddressVersion.VILLAGE_NAME = _fieldBuilder.buildEdmTypeField('VillageName', 'Edm.String', true);
    /**
     * All fields of the BpIntlAddressVersion entity.
     */
    BpIntlAddressVersion._allFields = [
        BpIntlAddressVersion.BUSINESS_PARTNER,
        BpIntlAddressVersion.ADDRESS_ID,
        BpIntlAddressVersion.ADDRESS_REPRESENTATION_CODE,
        BpIntlAddressVersion.ADDRESSEE_FULL_NAME,
        BpIntlAddressVersion.ADDRESS_ID_BY_EXTERNAL_SYSTEM,
        BpIntlAddressVersion.ADDRESS_PERSON_ID,
        BpIntlAddressVersion.ADDRESS_SEARCH_TERM_1,
        BpIntlAddressVersion.ADDRESS_SEARCH_TERM_2,
        BpIntlAddressVersion.ADDRESS_TIME_ZONE,
        BpIntlAddressVersion.CARE_OF_NAME,
        BpIntlAddressVersion.CITY_NAME,
        BpIntlAddressVersion.CITY_NUMBER,
        BpIntlAddressVersion.COMPANY_POSTAL_CODE,
        BpIntlAddressVersion.COUNTRY,
        BpIntlAddressVersion.DELIVERY_SERVICE_NUMBER,
        BpIntlAddressVersion.DELIVERY_SERVICE_TYPE_CODE,
        BpIntlAddressVersion.DISTRICT_NAME,
        BpIntlAddressVersion.FORM_OF_ADDRESS,
        BpIntlAddressVersion.HOUSE_NUMBER,
        BpIntlAddressVersion.HOUSE_NUMBER_SUPPLEMENT_TEXT,
        BpIntlAddressVersion.LANGUAGE,
        BpIntlAddressVersion.ORGANIZATION_NAME_1,
        BpIntlAddressVersion.ORGANIZATION_NAME_2,
        BpIntlAddressVersion.ORGANIZATION_NAME_3,
        BpIntlAddressVersion.ORGANIZATION_NAME_4,
        BpIntlAddressVersion.PERSON_FAMILY_NAME,
        BpIntlAddressVersion.PERSON_GIVEN_NAME,
        BpIntlAddressVersion.PO_BOX,
        BpIntlAddressVersion.PO_BOX_DEVIATING_CITY_NAME,
        BpIntlAddressVersion.PO_BOX_DEVIATING_COUNTRY,
        BpIntlAddressVersion.PO_BOX_DEVIATING_REGION,
        BpIntlAddressVersion.PO_BOX_IS_WITHOUT_NUMBER,
        BpIntlAddressVersion.PO_BOX_LOBBY_NAME,
        BpIntlAddressVersion.PO_BOX_POSTAL_CODE,
        BpIntlAddressVersion.POSTAL_CODE,
        BpIntlAddressVersion.PRFRD_COMM_MEDIUM_TYPE,
        BpIntlAddressVersion.REGION,
        BpIntlAddressVersion.SECONDARY_REGION,
        BpIntlAddressVersion.SECONDARY_REGION_NAME,
        BpIntlAddressVersion.STREET_NAME,
        BpIntlAddressVersion.STREET_PREFIX_NAME_1,
        BpIntlAddressVersion.STREET_PREFIX_NAME_2,
        BpIntlAddressVersion.STREET_SUFFIX_NAME_1,
        BpIntlAddressVersion.STREET_SUFFIX_NAME_2,
        BpIntlAddressVersion.TAX_JURISDICTION,
        BpIntlAddressVersion.TERTIARY_REGION,
        BpIntlAddressVersion.TERTIARY_REGION_NAME,
        BpIntlAddressVersion.TRANSPORT_ZONE,
        BpIntlAddressVersion.VILLAGE_NAME
    ];
    /**
     * All fields selector.
     */
    BpIntlAddressVersion.ALL_FIELDS = new core_1.AllFields('*', BpIntlAddressVersion);
    /**
     * All key fields of the BpIntlAddressVersion entity.
     */
    BpIntlAddressVersion._keyFields = [BpIntlAddressVersion.BUSINESS_PARTNER, BpIntlAddressVersion.ADDRESS_ID, BpIntlAddressVersion.ADDRESS_REPRESENTATION_CODE];
    /**
     * Mapping of all key field names to the respective static field property BpIntlAddressVersion.
     */
    BpIntlAddressVersion._keys = BpIntlAddressVersion._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(BpIntlAddressVersion = exports.BpIntlAddressVersion || (exports.BpIntlAddressVersion = {}));
exports.BpIntlAddressVersion = BpIntlAddressVersion;
//# sourceMappingURL=BpIntlAddressVersion.js.map