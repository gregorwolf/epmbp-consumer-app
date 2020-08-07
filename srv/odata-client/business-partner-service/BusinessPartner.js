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
exports.BusinessPartner = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var BusinessPartnerRequestBuilder_1 = require("./BusinessPartnerRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "A_BusinessPartner" of service "API_BUSINESS_PARTNER".
 */
var BusinessPartner = /** @class */ (function (_super) {
    __extends(BusinessPartner, _super);
    function BusinessPartner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `BusinessPartner`.
     * @returns A builder that constructs instances of entity type `BusinessPartner`.
     */
    BusinessPartner.builder = function () {
        return core_1.Entity.entityBuilder(BusinessPartner);
    };
    /**
     * Returns a request builder to construct requests for operations on the `BusinessPartner` entity type.
     * @returns A `BusinessPartner` request builder.
     */
    BusinessPartner.requestBuilder = function () {
        return new BusinessPartnerRequestBuilder_1.BusinessPartnerRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `BusinessPartner`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `BusinessPartner`.
     */
    BusinessPartner.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, BusinessPartner);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    BusinessPartner.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for BusinessPartner.
     */
    BusinessPartner._entityName = 'A_BusinessPartner';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for BusinessPartner.
     */
    BusinessPartner._serviceName = 'API_BUSINESS_PARTNER';
    /**
     * Default url path for the according service.
     */
    BusinessPartner._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
    return BusinessPartner;
}(core_1.Entity));
exports.BusinessPartner = BusinessPartner;
var BuPaIdentification_1 = require("./BuPaIdentification");
var BuPaIndustry_1 = require("./BuPaIndustry");
var BusinessPartnerAddress_1 = require("./BusinessPartnerAddress");
var BusinessPartnerBank_1 = require("./BusinessPartnerBank");
var BusinessPartnerContact_1 = require("./BusinessPartnerContact");
var BusinessPartnerRole_1 = require("./BusinessPartnerRole");
var BusinessPartnerTaxNumber_1 = require("./BusinessPartnerTaxNumber");
var Customer_1 = require("./Customer");
var Supplier_1 = require("./Supplier");
(function (BusinessPartner) {
    /**
     * Static representation of the [[businessPartner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.BUSINESS_PARTNER = new core_1.StringField('BusinessPartner', BusinessPartner, 'Edm.String');
    /**
     * Static representation of the [[customer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.CUSTOMER = new core_1.StringField('Customer', BusinessPartner, 'Edm.String');
    /**
     * Static representation of the [[supplier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.SUPPLIER = new core_1.StringField('Supplier', BusinessPartner, 'Edm.String');
    /**
     * Static representation of the [[academicTitle]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.ACADEMIC_TITLE = new core_1.StringField('AcademicTitle', BusinessPartner, 'Edm.String');
    /**
     * Static representation of the [[authorizationGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.AUTHORIZATION_GROUP = new core_1.StringField('AuthorizationGroup', BusinessPartner, 'Edm.String');
    /**
     * Static representation of the [[businessPartnerCategory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.BUSINESS_PARTNER_CATEGORY = new core_1.StringField('BusinessPartnerCategory', BusinessPartner, 'Edm.String');
    /**
     * Static representation of the [[businessPartnerFullName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.BUSINESS_PARTNER_FULL_NAME = new core_1.StringField('BusinessPartnerFullName', BusinessPartner, 'Edm.String');
    /**
     * Static representation of the [[businessPartnerGrouping]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.BUSINESS_PARTNER_GROUPING = new core_1.StringField('BusinessPartnerGrouping', BusinessPartner, 'Edm.String');
    /**
     * Static representation of the [[businessPartnerName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.BUSINESS_PARTNER_NAME = new core_1.StringField('BusinessPartnerName', BusinessPartner, 'Edm.String');
    /**
     * Static representation of the [[businessPartnerUuid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.BUSINESS_PARTNER_UUID = new core_1.StringField('BusinessPartnerUUID', BusinessPartner, 'Edm.Guid');
    /**
     * Static representation of the [[correspondenceLanguage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.CORRESPONDENCE_LANGUAGE = new core_1.StringField('CorrespondenceLanguage', BusinessPartner, 'Edm.String');
    /**
     * Static representation of the [[createdByUser]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.CREATED_BY_USER = new core_1.StringField('CreatedByUser', BusinessPartner, 'Edm.String');
    /**
     * Static representation of the [[creationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.CREATION_DATE = new core_1.DateField('CreationDate', BusinessPartner, 'Edm.DateTime');
    /**
     * Static representation of the [[creationTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.CREATION_TIME = new core_1.TimeField('CreationTime', BusinessPartner, 'Edm.Time');
    /**
     * Static representation of the [[firstName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.FIRST_NAME = new core_1.StringField('FirstName', BusinessPartner, 'Edm.String');
    /**
     * Static representation of the [[formOfAddress]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.FORM_OF_ADDRESS = new core_1.StringField('FormOfAddress', BusinessPartner, 'Edm.String');
    /**
     * Static representation of the [[industry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.INDUSTRY = new core_1.StringField('Industry', BusinessPartner, 'Edm.String');
    /**
     * Static representation of the [[internationalLocationNumber1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.INTERNATIONAL_LOCATION_NUMBER_1 = new core_1.StringField('InternationalLocationNumber1', BusinessPartner, 'Edm.String');
    /**
     * Static representation of the [[internationalLocationNumber2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.INTERNATIONAL_LOCATION_NUMBER_2 = new core_1.StringField('InternationalLocationNumber2', BusinessPartner, 'Edm.String');
    /**
     * Static representation of the [[isFemale]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.IS_FEMALE = new core_1.BooleanField('IsFemale', BusinessPartner, 'Edm.Boolean');
    /**
     * Static representation of the [[isMale]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.IS_MALE = new core_1.BooleanField('IsMale', BusinessPartner, 'Edm.Boolean');
    /**
     * Static representation of the [[isNaturalPerson]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.IS_NATURAL_PERSON = new core_1.StringField('IsNaturalPerson', BusinessPartner, 'Edm.String');
    /**
     * Static representation of the [[isSexUnknown]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.IS_SEX_UNKNOWN = new core_1.BooleanField('IsSexUnknown', BusinessPartner, 'Edm.Boolean');
    /**
     * Static representation of the [[genderCodeName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.GENDER_CODE_NAME = new core_1.StringField('GenderCodeName', BusinessPartner, 'Edm.String');
    /**
     * Static representation of the [[language]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.LANGUAGE = new core_1.StringField('Language', BusinessPartner, 'Edm.String');
    /**
     * Static representation of the [[lastChangeDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.LAST_CHANGE_DATE = new core_1.DateField('LastChangeDate', BusinessPartner, 'Edm.DateTime');
    /**
     * Static representation of the [[lastChangeTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.LAST_CHANGE_TIME = new core_1.TimeField('LastChangeTime', BusinessPartner, 'Edm.Time');
    /**
     * Static representation of the [[lastChangedByUser]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.LAST_CHANGED_BY_USER = new core_1.StringField('LastChangedByUser', BusinessPartner, 'Edm.String');
    /**
     * Static representation of the [[lastName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.LAST_NAME = new core_1.StringField('LastName', BusinessPartner, 'Edm.String');
    /**
     * Static representation of the [[legalForm]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.LEGAL_FORM = new core_1.StringField('LegalForm', BusinessPartner, 'Edm.String');
    /**
     * Static representation of the [[organizationBpName1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.ORGANIZATION_BP_NAME_1 = new core_1.StringField('OrganizationBPName1', BusinessPartner, 'Edm.String');
    /**
     * Static representation of the [[organizationBpName2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.ORGANIZATION_BP_NAME_2 = new core_1.StringField('OrganizationBPName2', BusinessPartner, 'Edm.String');
    /**
     * Static representation of the [[organizationBpName3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.ORGANIZATION_BP_NAME_3 = new core_1.StringField('OrganizationBPName3', BusinessPartner, 'Edm.String');
    /**
     * Static representation of the [[organizationBpName4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.ORGANIZATION_BP_NAME_4 = new core_1.StringField('OrganizationBPName4', BusinessPartner, 'Edm.String');
    /**
     * Static representation of the [[organizationFoundationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.ORGANIZATION_FOUNDATION_DATE = new core_1.DateField('OrganizationFoundationDate', BusinessPartner, 'Edm.DateTime');
    /**
     * Static representation of the [[organizationLiquidationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.ORGANIZATION_LIQUIDATION_DATE = new core_1.DateField('OrganizationLiquidationDate', BusinessPartner, 'Edm.DateTime');
    /**
     * Static representation of the [[searchTerm1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.SEARCH_TERM_1 = new core_1.StringField('SearchTerm1', BusinessPartner, 'Edm.String');
    /**
     * Static representation of the [[searchTerm2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.SEARCH_TERM_2 = new core_1.StringField('SearchTerm2', BusinessPartner, 'Edm.String');
    /**
     * Static representation of the [[additionalLastName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.ADDITIONAL_LAST_NAME = new core_1.StringField('AdditionalLastName', BusinessPartner, 'Edm.String');
    /**
     * Static representation of the [[birthDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.BIRTH_DATE = new core_1.DateField('BirthDate', BusinessPartner, 'Edm.DateTime');
    /**
     * Static representation of the [[businessPartnerBirthplaceName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.BUSINESS_PARTNER_BIRTHPLACE_NAME = new core_1.StringField('BusinessPartnerBirthplaceName', BusinessPartner, 'Edm.String');
    /**
     * Static representation of the [[businessPartnerIsBlocked]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.BUSINESS_PARTNER_IS_BLOCKED = new core_1.BooleanField('BusinessPartnerIsBlocked', BusinessPartner, 'Edm.Boolean');
    /**
     * Static representation of the [[businessPartnerType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.BUSINESS_PARTNER_TYPE = new core_1.StringField('BusinessPartnerType', BusinessPartner, 'Edm.String');
    /**
     * Static representation of the [[eTag]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.E_TAG = new core_1.StringField('ETag', BusinessPartner, 'Edm.String');
    /**
     * Static representation of the [[groupBusinessPartnerName1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.GROUP_BUSINESS_PARTNER_NAME_1 = new core_1.StringField('GroupBusinessPartnerName1', BusinessPartner, 'Edm.String');
    /**
     * Static representation of the [[groupBusinessPartnerName2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.GROUP_BUSINESS_PARTNER_NAME_2 = new core_1.StringField('GroupBusinessPartnerName2', BusinessPartner, 'Edm.String');
    /**
     * Static representation of the [[independentAddressId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.INDEPENDENT_ADDRESS_ID = new core_1.StringField('IndependentAddressID', BusinessPartner, 'Edm.String');
    /**
     * Static representation of the [[internationalLocationNumber3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.INTERNATIONAL_LOCATION_NUMBER_3 = new core_1.StringField('InternationalLocationNumber3', BusinessPartner, 'Edm.String');
    /**
     * Static representation of the [[middleName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.MIDDLE_NAME = new core_1.StringField('MiddleName', BusinessPartner, 'Edm.String');
    /**
     * Static representation of the [[nameCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.NAME_COUNTRY = new core_1.StringField('NameCountry', BusinessPartner, 'Edm.String');
    /**
     * Static representation of the [[nameFormat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.NAME_FORMAT = new core_1.StringField('NameFormat', BusinessPartner, 'Edm.String');
    /**
     * Static representation of the [[personFullName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.PERSON_FULL_NAME = new core_1.StringField('PersonFullName', BusinessPartner, 'Edm.String');
    /**
     * Static representation of the [[personNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.PERSON_NUMBER = new core_1.StringField('PersonNumber', BusinessPartner, 'Edm.String');
    /**
     * Static representation of the [[isMarkedForArchiving]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.IS_MARKED_FOR_ARCHIVING = new core_1.BooleanField('IsMarkedForArchiving', BusinessPartner, 'Edm.Boolean');
    /**
     * Static representation of the [[businessPartnerIdByExtSystem]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.BUSINESS_PARTNER_ID_BY_EXT_SYSTEM = new core_1.StringField('BusinessPartnerIDByExtSystem', BusinessPartner, 'Edm.String');
    /**
     * Static representation of the [[tradingPartner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.TRADING_PARTNER = new core_1.StringField('TradingPartner', BusinessPartner, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[toBuPaIdentification]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.TO_BU_PA_IDENTIFICATION = new core_1.Link('to_BuPaIdentification', BusinessPartner, BuPaIdentification_1.BuPaIdentification);
    /**
     * Static representation of the one-to-many navigation property [[toBuPaIndustry]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.TO_BU_PA_INDUSTRY = new core_1.Link('to_BuPaIndustry', BusinessPartner, BuPaIndustry_1.BuPaIndustry);
    /**
     * Static representation of the one-to-many navigation property [[toBusinessPartnerAddress]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.TO_BUSINESS_PARTNER_ADDRESS = new core_1.Link('to_BusinessPartnerAddress', BusinessPartner, BusinessPartnerAddress_1.BusinessPartnerAddress);
    /**
     * Static representation of the one-to-many navigation property [[toBusinessPartnerBank]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.TO_BUSINESS_PARTNER_BANK = new core_1.Link('to_BusinessPartnerBank', BusinessPartner, BusinessPartnerBank_1.BusinessPartnerBank);
    /**
     * Static representation of the one-to-many navigation property [[toBusinessPartnerContact]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.TO_BUSINESS_PARTNER_CONTACT = new core_1.Link('to_BusinessPartnerContact', BusinessPartner, BusinessPartnerContact_1.BusinessPartnerContact);
    /**
     * Static representation of the one-to-many navigation property [[toBusinessPartnerRole]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.TO_BUSINESS_PARTNER_ROLE = new core_1.Link('to_BusinessPartnerRole', BusinessPartner, BusinessPartnerRole_1.BusinessPartnerRole);
    /**
     * Static representation of the one-to-many navigation property [[toBusinessPartnerTax]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.TO_BUSINESS_PARTNER_TAX = new core_1.Link('to_BusinessPartnerTax', BusinessPartner, BusinessPartnerTaxNumber_1.BusinessPartnerTaxNumber);
    /**
     * Static representation of the one-to-one navigation property [[toCustomer]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.TO_CUSTOMER = new core_1.OneToOneLink('to_Customer', BusinessPartner, Customer_1.Customer);
    /**
     * Static representation of the one-to-one navigation property [[toSupplier]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.TO_SUPPLIER = new core_1.OneToOneLink('to_Supplier', BusinessPartner, Supplier_1.Supplier);
    /**
     * All fields of the BusinessPartner entity.
     */
    BusinessPartner._allFields = [
        BusinessPartner.BUSINESS_PARTNER,
        BusinessPartner.CUSTOMER,
        BusinessPartner.SUPPLIER,
        BusinessPartner.ACADEMIC_TITLE,
        BusinessPartner.AUTHORIZATION_GROUP,
        BusinessPartner.BUSINESS_PARTNER_CATEGORY,
        BusinessPartner.BUSINESS_PARTNER_FULL_NAME,
        BusinessPartner.BUSINESS_PARTNER_GROUPING,
        BusinessPartner.BUSINESS_PARTNER_NAME,
        BusinessPartner.BUSINESS_PARTNER_UUID,
        BusinessPartner.CORRESPONDENCE_LANGUAGE,
        BusinessPartner.CREATED_BY_USER,
        BusinessPartner.CREATION_DATE,
        BusinessPartner.CREATION_TIME,
        BusinessPartner.FIRST_NAME,
        BusinessPartner.FORM_OF_ADDRESS,
        BusinessPartner.INDUSTRY,
        BusinessPartner.INTERNATIONAL_LOCATION_NUMBER_1,
        BusinessPartner.INTERNATIONAL_LOCATION_NUMBER_2,
        BusinessPartner.IS_FEMALE,
        BusinessPartner.IS_MALE,
        BusinessPartner.IS_NATURAL_PERSON,
        BusinessPartner.IS_SEX_UNKNOWN,
        BusinessPartner.GENDER_CODE_NAME,
        BusinessPartner.LANGUAGE,
        BusinessPartner.LAST_CHANGE_DATE,
        BusinessPartner.LAST_CHANGE_TIME,
        BusinessPartner.LAST_CHANGED_BY_USER,
        BusinessPartner.LAST_NAME,
        BusinessPartner.LEGAL_FORM,
        BusinessPartner.ORGANIZATION_BP_NAME_1,
        BusinessPartner.ORGANIZATION_BP_NAME_2,
        BusinessPartner.ORGANIZATION_BP_NAME_3,
        BusinessPartner.ORGANIZATION_BP_NAME_4,
        BusinessPartner.ORGANIZATION_FOUNDATION_DATE,
        BusinessPartner.ORGANIZATION_LIQUIDATION_DATE,
        BusinessPartner.SEARCH_TERM_1,
        BusinessPartner.SEARCH_TERM_2,
        BusinessPartner.ADDITIONAL_LAST_NAME,
        BusinessPartner.BIRTH_DATE,
        BusinessPartner.BUSINESS_PARTNER_BIRTHPLACE_NAME,
        BusinessPartner.BUSINESS_PARTNER_IS_BLOCKED,
        BusinessPartner.BUSINESS_PARTNER_TYPE,
        BusinessPartner.E_TAG,
        BusinessPartner.GROUP_BUSINESS_PARTNER_NAME_1,
        BusinessPartner.GROUP_BUSINESS_PARTNER_NAME_2,
        BusinessPartner.INDEPENDENT_ADDRESS_ID,
        BusinessPartner.INTERNATIONAL_LOCATION_NUMBER_3,
        BusinessPartner.MIDDLE_NAME,
        BusinessPartner.NAME_COUNTRY,
        BusinessPartner.NAME_FORMAT,
        BusinessPartner.PERSON_FULL_NAME,
        BusinessPartner.PERSON_NUMBER,
        BusinessPartner.IS_MARKED_FOR_ARCHIVING,
        BusinessPartner.BUSINESS_PARTNER_ID_BY_EXT_SYSTEM,
        BusinessPartner.TRADING_PARTNER,
        BusinessPartner.TO_BU_PA_IDENTIFICATION,
        BusinessPartner.TO_BU_PA_INDUSTRY,
        BusinessPartner.TO_BUSINESS_PARTNER_ADDRESS,
        BusinessPartner.TO_BUSINESS_PARTNER_BANK,
        BusinessPartner.TO_BUSINESS_PARTNER_CONTACT,
        BusinessPartner.TO_BUSINESS_PARTNER_ROLE,
        BusinessPartner.TO_BUSINESS_PARTNER_TAX,
        BusinessPartner.TO_CUSTOMER,
        BusinessPartner.TO_SUPPLIER
    ];
    /**
     * All fields selector.
     */
    BusinessPartner.ALL_FIELDS = new core_1.AllFields('*', BusinessPartner);
    /**
     * All key fields of the BusinessPartner entity.
     */
    BusinessPartner._keyFields = [BusinessPartner.BUSINESS_PARTNER];
    /**
     * Mapping of all key field names to the respective static field property BusinessPartner.
     */
    BusinessPartner._keys = BusinessPartner._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(BusinessPartner = exports.BusinessPartner || (exports.BusinessPartner = {}));
exports.BusinessPartner = BusinessPartner;
//# sourceMappingURL=BusinessPartner.js.map