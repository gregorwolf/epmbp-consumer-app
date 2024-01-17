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
exports.BusinessPartner = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
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
     * Returns an entity builder to construct instances of `BusinessPartner`.
     * @returns A builder that constructs instances of entity type `BusinessPartner`.
     */
    BusinessPartner.builder = function () {
        return core_1.EntityV2.entityBuilder(BusinessPartner);
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
        return core_1.EntityV2.customFieldSelector(fieldName, BusinessPartner);
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
     * Default url path for the according service.
     */
    BusinessPartner._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
    return BusinessPartner;
}(core_1.EntityV2));
exports.BusinessPartner = BusinessPartner;
var BpCreditWorthiness_1 = require("./BpCreditWorthiness");
var BpDataController_1 = require("./BpDataController");
var BpFinancialServicesReporting_1 = require("./BpFinancialServicesReporting");
var BpFiscalYearInformation_1 = require("./BpFiscalYearInformation");
var BpRelationship_1 = require("./BpRelationship");
var BuPaIdentification_1 = require("./BuPaIdentification");
var BuPaIndustry_1 = require("./BuPaIndustry");
var BpFinancialServicesExtn_1 = require("./BpFinancialServicesExtn");
var BusinessPartnerAddress_1 = require("./BusinessPartnerAddress");
var BusinessPartnerBank_1 = require("./BusinessPartnerBank");
var BusinessPartnerContact_1 = require("./BusinessPartnerContact");
var BusinessPartnerRating_1 = require("./BusinessPartnerRating");
var BusinessPartnerRole_1 = require("./BusinessPartnerRole");
var BusinessPartnerTaxNumber_1 = require("./BusinessPartnerTaxNumber");
var BusPartAddrDepdntTaxNmbr_1 = require("./BusPartAddrDepdntTaxNmbr");
var Customer_1 = require("./Customer");
var BusinessPartnerPaymentCard_1 = require("./BusinessPartnerPaymentCard");
var Supplier_1 = require("./Supplier");
(function (BusinessPartner) {
    var _fieldBuilder = new core_1.FieldBuilder(BusinessPartner);
    /**
     * Static representation of the [[businessPartner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.BUSINESS_PARTNER = _fieldBuilder.buildEdmTypeField('BusinessPartner', 'Edm.String', false);
    /**
     * Static representation of the [[customer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.CUSTOMER = _fieldBuilder.buildEdmTypeField('Customer', 'Edm.String', true);
    /**
     * Static representation of the [[supplier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.SUPPLIER = _fieldBuilder.buildEdmTypeField('Supplier', 'Edm.String', true);
    /**
     * Static representation of the [[academicTitle]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.ACADEMIC_TITLE = _fieldBuilder.buildEdmTypeField('AcademicTitle', 'Edm.String', true);
    /**
     * Static representation of the [[authorizationGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.AUTHORIZATION_GROUP = _fieldBuilder.buildEdmTypeField('AuthorizationGroup', 'Edm.String', true);
    /**
     * Static representation of the [[businessPartnerCategory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.BUSINESS_PARTNER_CATEGORY = _fieldBuilder.buildEdmTypeField('BusinessPartnerCategory', 'Edm.String', true);
    /**
     * Static representation of the [[businessPartnerFullName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.BUSINESS_PARTNER_FULL_NAME = _fieldBuilder.buildEdmTypeField('BusinessPartnerFullName', 'Edm.String', true);
    /**
     * Static representation of the [[businessPartnerGrouping]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.BUSINESS_PARTNER_GROUPING = _fieldBuilder.buildEdmTypeField('BusinessPartnerGrouping', 'Edm.String', true);
    /**
     * Static representation of the [[businessPartnerName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.BUSINESS_PARTNER_NAME = _fieldBuilder.buildEdmTypeField('BusinessPartnerName', 'Edm.String', true);
    /**
     * Static representation of the [[businessPartnerUuid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.BUSINESS_PARTNER_UUID = _fieldBuilder.buildEdmTypeField('BusinessPartnerUUID', 'Edm.Guid', true);
    /**
     * Static representation of the [[correspondenceLanguage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.CORRESPONDENCE_LANGUAGE = _fieldBuilder.buildEdmTypeField('CorrespondenceLanguage', 'Edm.String', true);
    /**
     * Static representation of the [[createdByUser]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.CREATED_BY_USER = _fieldBuilder.buildEdmTypeField('CreatedByUser', 'Edm.String', true);
    /**
     * Static representation of the [[creationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.CREATION_DATE = _fieldBuilder.buildEdmTypeField('CreationDate', 'Edm.DateTime', true);
    /**
     * Static representation of the [[creationTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.CREATION_TIME = _fieldBuilder.buildEdmTypeField('CreationTime', 'Edm.Time', true);
    /**
     * Static representation of the [[firstName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.FIRST_NAME = _fieldBuilder.buildEdmTypeField('FirstName', 'Edm.String', true);
    /**
     * Static representation of the [[formOfAddress]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.FORM_OF_ADDRESS = _fieldBuilder.buildEdmTypeField('FormOfAddress', 'Edm.String', true);
    /**
     * Static representation of the [[industry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.INDUSTRY = _fieldBuilder.buildEdmTypeField('Industry', 'Edm.String', true);
    /**
     * Static representation of the [[internationalLocationNumber1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.INTERNATIONAL_LOCATION_NUMBER_1 = _fieldBuilder.buildEdmTypeField('InternationalLocationNumber1', 'Edm.String', true);
    /**
     * Static representation of the [[internationalLocationNumber2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.INTERNATIONAL_LOCATION_NUMBER_2 = _fieldBuilder.buildEdmTypeField('InternationalLocationNumber2', 'Edm.String', true);
    /**
     * Static representation of the [[isFemale]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.IS_FEMALE = _fieldBuilder.buildEdmTypeField('IsFemale', 'Edm.Boolean', true);
    /**
     * Static representation of the [[isMale]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.IS_MALE = _fieldBuilder.buildEdmTypeField('IsMale', 'Edm.Boolean', true);
    /**
     * Static representation of the [[isNaturalPerson]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.IS_NATURAL_PERSON = _fieldBuilder.buildEdmTypeField('IsNaturalPerson', 'Edm.String', true);
    /**
     * Static representation of the [[isSexUnknown]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.IS_SEX_UNKNOWN = _fieldBuilder.buildEdmTypeField('IsSexUnknown', 'Edm.Boolean', true);
    /**
     * Static representation of the [[genderCodeName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.GENDER_CODE_NAME = _fieldBuilder.buildEdmTypeField('GenderCodeName', 'Edm.String', true);
    /**
     * Static representation of the [[language]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.LANGUAGE = _fieldBuilder.buildEdmTypeField('Language', 'Edm.String', true);
    /**
     * Static representation of the [[lastChangeDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.LAST_CHANGE_DATE = _fieldBuilder.buildEdmTypeField('LastChangeDate', 'Edm.DateTime', true);
    /**
     * Static representation of the [[lastChangeTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.LAST_CHANGE_TIME = _fieldBuilder.buildEdmTypeField('LastChangeTime', 'Edm.Time', true);
    /**
     * Static representation of the [[lastChangedByUser]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.LAST_CHANGED_BY_USER = _fieldBuilder.buildEdmTypeField('LastChangedByUser', 'Edm.String', true);
    /**
     * Static representation of the [[lastName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.LAST_NAME = _fieldBuilder.buildEdmTypeField('LastName', 'Edm.String', true);
    /**
     * Static representation of the [[legalForm]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.LEGAL_FORM = _fieldBuilder.buildEdmTypeField('LegalForm', 'Edm.String', true);
    /**
     * Static representation of the [[organizationBpName1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.ORGANIZATION_BP_NAME_1 = _fieldBuilder.buildEdmTypeField('OrganizationBPName1', 'Edm.String', true);
    /**
     * Static representation of the [[organizationBpName2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.ORGANIZATION_BP_NAME_2 = _fieldBuilder.buildEdmTypeField('OrganizationBPName2', 'Edm.String', true);
    /**
     * Static representation of the [[organizationBpName3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.ORGANIZATION_BP_NAME_3 = _fieldBuilder.buildEdmTypeField('OrganizationBPName3', 'Edm.String', true);
    /**
     * Static representation of the [[organizationBpName4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.ORGANIZATION_BP_NAME_4 = _fieldBuilder.buildEdmTypeField('OrganizationBPName4', 'Edm.String', true);
    /**
     * Static representation of the [[organizationFoundationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.ORGANIZATION_FOUNDATION_DATE = _fieldBuilder.buildEdmTypeField('OrganizationFoundationDate', 'Edm.DateTime', true);
    /**
     * Static representation of the [[organizationLiquidationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.ORGANIZATION_LIQUIDATION_DATE = _fieldBuilder.buildEdmTypeField('OrganizationLiquidationDate', 'Edm.DateTime', true);
    /**
     * Static representation of the [[searchTerm1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.SEARCH_TERM_1 = _fieldBuilder.buildEdmTypeField('SearchTerm1', 'Edm.String', true);
    /**
     * Static representation of the [[searchTerm2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.SEARCH_TERM_2 = _fieldBuilder.buildEdmTypeField('SearchTerm2', 'Edm.String', true);
    /**
     * Static representation of the [[additionalLastName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.ADDITIONAL_LAST_NAME = _fieldBuilder.buildEdmTypeField('AdditionalLastName', 'Edm.String', true);
    /**
     * Static representation of the [[birthDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.BIRTH_DATE = _fieldBuilder.buildEdmTypeField('BirthDate', 'Edm.DateTime', true);
    /**
     * Static representation of the [[businessPartnerBirthDateStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.BUSINESS_PARTNER_BIRTH_DATE_STATUS = _fieldBuilder.buildEdmTypeField('BusinessPartnerBirthDateStatus', 'Edm.String', true);
    /**
     * Static representation of the [[businessPartnerBirthplaceName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.BUSINESS_PARTNER_BIRTHPLACE_NAME = _fieldBuilder.buildEdmTypeField('BusinessPartnerBirthplaceName', 'Edm.String', true);
    /**
     * Static representation of the [[businessPartnerDeathDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.BUSINESS_PARTNER_DEATH_DATE = _fieldBuilder.buildEdmTypeField('BusinessPartnerDeathDate', 'Edm.DateTime', true);
    /**
     * Static representation of the [[businessPartnerIsBlocked]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.BUSINESS_PARTNER_IS_BLOCKED = _fieldBuilder.buildEdmTypeField('BusinessPartnerIsBlocked', 'Edm.Boolean', true);
    /**
     * Static representation of the [[businessPartnerType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.BUSINESS_PARTNER_TYPE = _fieldBuilder.buildEdmTypeField('BusinessPartnerType', 'Edm.String', true);
    /**
     * Static representation of the [[eTag]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.E_TAG = _fieldBuilder.buildEdmTypeField('ETag', 'Edm.String', true);
    /**
     * Static representation of the [[groupBusinessPartnerName1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.GROUP_BUSINESS_PARTNER_NAME_1 = _fieldBuilder.buildEdmTypeField('GroupBusinessPartnerName1', 'Edm.String', true);
    /**
     * Static representation of the [[groupBusinessPartnerName2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.GROUP_BUSINESS_PARTNER_NAME_2 = _fieldBuilder.buildEdmTypeField('GroupBusinessPartnerName2', 'Edm.String', true);
    /**
     * Static representation of the [[independentAddressId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.INDEPENDENT_ADDRESS_ID = _fieldBuilder.buildEdmTypeField('IndependentAddressID', 'Edm.String', true);
    /**
     * Static representation of the [[internationalLocationNumber3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.INTERNATIONAL_LOCATION_NUMBER_3 = _fieldBuilder.buildEdmTypeField('InternationalLocationNumber3', 'Edm.String', true);
    /**
     * Static representation of the [[middleName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.MIDDLE_NAME = _fieldBuilder.buildEdmTypeField('MiddleName', 'Edm.String', true);
    /**
     * Static representation of the [[nameCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.NAME_COUNTRY = _fieldBuilder.buildEdmTypeField('NameCountry', 'Edm.String', true);
    /**
     * Static representation of the [[nameFormat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.NAME_FORMAT = _fieldBuilder.buildEdmTypeField('NameFormat', 'Edm.String', true);
    /**
     * Static representation of the [[personFullName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.PERSON_FULL_NAME = _fieldBuilder.buildEdmTypeField('PersonFullName', 'Edm.String', true);
    /**
     * Static representation of the [[personNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.PERSON_NUMBER = _fieldBuilder.buildEdmTypeField('PersonNumber', 'Edm.String', true);
    /**
     * Static representation of the [[isMarkedForArchiving]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.IS_MARKED_FOR_ARCHIVING = _fieldBuilder.buildEdmTypeField('IsMarkedForArchiving', 'Edm.Boolean', true);
    /**
     * Static representation of the [[businessPartnerIdByExtSystem]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.BUSINESS_PARTNER_ID_BY_EXT_SYSTEM = _fieldBuilder.buildEdmTypeField('BusinessPartnerIDByExtSystem', 'Edm.String', true);
    /**
     * Static representation of the [[businessPartnerPrintFormat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.BUSINESS_PARTNER_PRINT_FORMAT = _fieldBuilder.buildEdmTypeField('BusinessPartnerPrintFormat', 'Edm.String', true);
    /**
     * Static representation of the [[businessPartnerOccupation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.BUSINESS_PARTNER_OCCUPATION = _fieldBuilder.buildEdmTypeField('BusinessPartnerOccupation', 'Edm.String', true);
    /**
     * Static representation of the [[busPartMaritalStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.BUS_PART_MARITAL_STATUS = _fieldBuilder.buildEdmTypeField('BusPartMaritalStatus', 'Edm.String', true);
    /**
     * Static representation of the [[busPartNationality]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.BUS_PART_NATIONALITY = _fieldBuilder.buildEdmTypeField('BusPartNationality', 'Edm.String', true);
    /**
     * Static representation of the [[businessPartnerBirthName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.BUSINESS_PARTNER_BIRTH_NAME = _fieldBuilder.buildEdmTypeField('BusinessPartnerBirthName', 'Edm.String', true);
    /**
     * Static representation of the [[businessPartnerSupplementName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.BUSINESS_PARTNER_SUPPLEMENT_NAME = _fieldBuilder.buildEdmTypeField('BusinessPartnerSupplementName', 'Edm.String', true);
    /**
     * Static representation of the [[naturalPersonEmployerName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.NATURAL_PERSON_EMPLOYER_NAME = _fieldBuilder.buildEdmTypeField('NaturalPersonEmployerName', 'Edm.String', true);
    /**
     * Static representation of the [[lastNamePrefix]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.LAST_NAME_PREFIX = _fieldBuilder.buildEdmTypeField('LastNamePrefix', 'Edm.String', true);
    /**
     * Static representation of the [[lastNameSecondPrefix]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.LAST_NAME_SECOND_PREFIX = _fieldBuilder.buildEdmTypeField('LastNameSecondPrefix', 'Edm.String', true);
    /**
     * Static representation of the [[initials]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.INITIALS = _fieldBuilder.buildEdmTypeField('Initials', 'Edm.String', true);
    /**
     * Static representation of the [[bpDataControllerIsNotRequired]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.BP_DATA_CONTROLLER_IS_NOT_REQUIRED = _fieldBuilder.buildEdmTypeField('BPDataControllerIsNotRequired', 'Edm.Boolean', true);
    /**
     * Static representation of the [[tradingPartner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.TRADING_PARTNER = _fieldBuilder.buildEdmTypeField('TradingPartner', 'Edm.String', true);
    /**
     * Static representation of the one-to-one navigation property [[toBpCreditWorthiness]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.TO_BP_CREDIT_WORTHINESS = new core_1.OneToOneLink('to_BPCreditWorthiness', BusinessPartner, BpCreditWorthiness_1.BpCreditWorthiness);
    /**
     * Static representation of the one-to-many navigation property [[toBpDataController]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.TO_BP_DATA_CONTROLLER = new core_1.Link('to_BPDataController', BusinessPartner, BpDataController_1.BpDataController);
    /**
     * Static representation of the one-to-one navigation property [[toBpFinServicesReporting]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.TO_BP_FIN_SERVICES_REPORTING = new core_1.OneToOneLink('to_BPFinServicesReporting', BusinessPartner, BpFinancialServicesReporting_1.BpFinancialServicesReporting);
    /**
     * Static representation of the one-to-many navigation property [[toBpFiscalYearInformation]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.TO_BP_FISCAL_YEAR_INFORMATION = new core_1.Link('to_BPFiscalYearInformation', BusinessPartner, BpFiscalYearInformation_1.BpFiscalYearInformation);
    /**
     * Static representation of the one-to-many navigation property [[toBpRelationship]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.TO_BP_RELATIONSHIP = new core_1.Link('to_BPRelationship', BusinessPartner, BpRelationship_1.BpRelationship);
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
     * Static representation of the one-to-one navigation property [[toBusinessPartner]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.TO_BUSINESS_PARTNER = new core_1.OneToOneLink('to_BusinessPartner', BusinessPartner, BpFinancialServicesExtn_1.BpFinancialServicesExtn);
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
     * Static representation of the one-to-many navigation property [[toBusinessPartnerRating]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.TO_BUSINESS_PARTNER_RATING = new core_1.Link('to_BusinessPartnerRating', BusinessPartner, BusinessPartnerRating_1.BusinessPartnerRating);
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
     * Static representation of the one-to-many navigation property [[toBusPartAddrDepdntTaxNmbr]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.TO_BUS_PART_ADDR_DEPDNT_TAX_NMBR = new core_1.Link('to_BusPartAddrDepdntTaxNmbr', BusinessPartner, BusPartAddrDepdntTaxNmbr_1.BusPartAddrDepdntTaxNmbr);
    /**
     * Static representation of the one-to-one navigation property [[toCustomer]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.TO_CUSTOMER = new core_1.OneToOneLink('to_Customer', BusinessPartner, Customer_1.Customer);
    /**
     * Static representation of the one-to-many navigation property [[toPaymentCard]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartner.TO_PAYMENT_CARD = new core_1.Link('to_PaymentCard', BusinessPartner, BusinessPartnerPaymentCard_1.BusinessPartnerPaymentCard);
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
        BusinessPartner.BUSINESS_PARTNER_BIRTH_DATE_STATUS,
        BusinessPartner.BUSINESS_PARTNER_BIRTHPLACE_NAME,
        BusinessPartner.BUSINESS_PARTNER_DEATH_DATE,
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
        BusinessPartner.BUSINESS_PARTNER_PRINT_FORMAT,
        BusinessPartner.BUSINESS_PARTNER_OCCUPATION,
        BusinessPartner.BUS_PART_MARITAL_STATUS,
        BusinessPartner.BUS_PART_NATIONALITY,
        BusinessPartner.BUSINESS_PARTNER_BIRTH_NAME,
        BusinessPartner.BUSINESS_PARTNER_SUPPLEMENT_NAME,
        BusinessPartner.NATURAL_PERSON_EMPLOYER_NAME,
        BusinessPartner.LAST_NAME_PREFIX,
        BusinessPartner.LAST_NAME_SECOND_PREFIX,
        BusinessPartner.INITIALS,
        BusinessPartner.BP_DATA_CONTROLLER_IS_NOT_REQUIRED,
        BusinessPartner.TRADING_PARTNER,
        BusinessPartner.TO_BP_CREDIT_WORTHINESS,
        BusinessPartner.TO_BP_DATA_CONTROLLER,
        BusinessPartner.TO_BP_FIN_SERVICES_REPORTING,
        BusinessPartner.TO_BP_FISCAL_YEAR_INFORMATION,
        BusinessPartner.TO_BP_RELATIONSHIP,
        BusinessPartner.TO_BU_PA_IDENTIFICATION,
        BusinessPartner.TO_BU_PA_INDUSTRY,
        BusinessPartner.TO_BUSINESS_PARTNER,
        BusinessPartner.TO_BUSINESS_PARTNER_ADDRESS,
        BusinessPartner.TO_BUSINESS_PARTNER_BANK,
        BusinessPartner.TO_BUSINESS_PARTNER_CONTACT,
        BusinessPartner.TO_BUSINESS_PARTNER_RATING,
        BusinessPartner.TO_BUSINESS_PARTNER_ROLE,
        BusinessPartner.TO_BUSINESS_PARTNER_TAX,
        BusinessPartner.TO_BUS_PART_ADDR_DEPDNT_TAX_NMBR,
        BusinessPartner.TO_CUSTOMER,
        BusinessPartner.TO_PAYMENT_CARD,
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