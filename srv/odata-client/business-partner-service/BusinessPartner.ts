/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BusinessPartnerRequestBuilder } from './BusinessPartnerRequestBuilder';
import { Moment } from 'moment';
import { AllFields, Constructable, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field, FieldBuilder, Link, OneToOneLink, OrderableEdmTypeField, Time } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "A_BusinessPartner" of service "API_BUSINESS_PARTNER".
 */
export class BusinessPartner extends EntityV2 implements BusinessPartnerType {
  /**
   * Technical entity name for BusinessPartner.
   */
  static _entityName = 'A_BusinessPartner';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
  /**
   * Business Partner Number.
   * Maximum length: 10.
   */
  businessPartner!: string;
  /**
   * Customer Number.
   * Maximum length: 10.
   * @nullable
   */
  customer?: string;
  /**
   * Account Number of Supplier.
   * Maximum length: 10.
   * @nullable
   */
  supplier?: string;
  /**
   * Academic Title: Key.
   * Maximum length: 4.
   * @nullable
   */
  academicTitle?: string;
  /**
   * Authorization Group.
   * Maximum length: 4.
   * @nullable
   */
  authorizationGroup?: string;
  /**
   * Business Partner Category.
   * Maximum length: 1.
   * @nullable
   */
  businessPartnerCategory?: string;
  /**
   * Business Partner Full Name.
   * Maximum length: 81.
   * @nullable
   */
  businessPartnerFullName?: string;
  /**
   * Business Partner Grouping.
   * Maximum length: 4.
   * @nullable
   */
  businessPartnerGrouping?: string;
  /**
   * Business Partner Name.
   * Maximum length: 81.
   * @nullable
   */
  businessPartnerName?: string;
  /**
   * Business Partner GUID.
   * @nullable
   */
  businessPartnerUuid?: string;
  /**
   * Business Partner: Correspondence Language.
   * Maximum length: 2.
   * @nullable
   */
  correspondenceLanguage?: string;
  /**
   * User who created the object.
   * Maximum length: 12.
   * @nullable
   */
  createdByUser?: string;
  /**
   * Date on which the object was created.
   * @nullable
   */
  creationDate?: Moment;
  /**
   * Time at which the object was created.
   * @nullable
   */
  creationTime?: Time;
  /**
   * First Name of Business Partner (Person).
   * Maximum length: 40.
   * @nullable
   */
  firstName?: string;
  /**
   * Form-of-Address Key.
   * Maximum length: 4.
   * @nullable
   */
  formOfAddress?: string;
  /**
   * Industry sector.
   * Maximum length: 10.
   * @nullable
   */
  industry?: string;
  /**
   * International location number  (part 1).
   * Maximum length: 7.
   * @nullable
   */
  internationalLocationNumber1?: string;
  /**
   * International location number (Part 2).
   * Maximum length: 5.
   * @nullable
   */
  internationalLocationNumber2?: string;
  /**
   * Selection: Business partner is female.
   * @nullable
   */
  isFemale?: boolean;
  /**
   * Selection: Business partner is male.
   * @nullable
   */
  isMale?: boolean;
  /**
   * Business Partner Is a Natural Person Under the Tax Laws.
   * Maximum length: 1.
   * @nullable
   */
  isNaturalPerson?: string;
  /**
   * Selection: Sex of business partner is not known.
   * @nullable
   */
  isSexUnknown?: boolean;
  /**
   * Gender of Business Partner (Person).
   * Maximum length: 1.
   * @nullable
   */
  genderCodeName?: string;
  /**
   * Business partner: Language.
   * Maximum length: 2.
   * @nullable
   */
  language?: string;
  /**
   * Date when object was last changed.
   * @nullable
   */
  lastChangeDate?: Moment;
  /**
   * Time at which object was last changed.
   * @nullable
   */
  lastChangeTime?: Time;
  /**
   * Last user to change object.
   * Maximum length: 12.
   * @nullable
   */
  lastChangedByUser?: string;
  /**
   * Last Name of Business Partner (Person).
   * Maximum length: 40.
   * @nullable
   */
  lastName?: string;
  /**
   * BP: Legal form of organization.
   * Maximum length: 2.
   * @nullable
   */
  legalForm?: string;
  /**
   * Name 1 of organization.
   * Maximum length: 40.
   * @nullable
   */
  organizationBpName1?: string;
  /**
   * Name 2 of organization.
   * Maximum length: 40.
   * @nullable
   */
  organizationBpName2?: string;
  /**
   * Name 3 of organization.
   * Maximum length: 40.
   * @nullable
   */
  organizationBpName3?: string;
  /**
   * Name 4 of organization.
   * Maximum length: 40.
   * @nullable
   */
  organizationBpName4?: string;
  /**
   * Date organization founded.
   * @nullable
   */
  organizationFoundationDate?: Moment;
  /**
   * Liquidation date of organization.
   * @nullable
   */
  organizationLiquidationDate?: Moment;
  /**
   * Search Term 1 for Business Partner.
   * Maximum length: 20.
   * @nullable
   */
  searchTerm1?: string;
  /**
   * Search Term 2 for Business Partner.
   * Maximum length: 20.
   * @nullable
   */
  searchTerm2?: string;
  /**
   * Other Last Name of a Person.
   * Maximum length: 40.
   * @nullable
   */
  additionalLastName?: string;
  /**
   * Date of Birth of Business Partner.
   * @nullable
   */
  birthDate?: Moment;
  /**
   * Date of Birth: Status.
   * Maximum length: 1.
   * @nullable
   */
  businessPartnerBirthDateStatus?: string;
  /**
   * Birthplace of business partner.
   * Maximum length: 40.
   * @nullable
   */
  businessPartnerBirthplaceName?: string;
  /**
   * Date of death of business partner.
   * @nullable
   */
  businessPartnerDeathDate?: Moment;
  /**
   * Central Block for Business Partner.
   * @nullable
   */
  businessPartnerIsBlocked?: boolean;
  /**
   * Business Partner Type.
   * Maximum length: 4.
   * @nullable
   */
  businessPartnerType?: string;
  /**
   * E Tag.
   * Maximum length: 26.
   * @nullable
   */
  eTag?: string;
  /**
   * Name 1 (group).
   * Maximum length: 40.
   * @nullable
   */
  groupBusinessPartnerName1?: string;
  /**
   * Name 2 (group).
   * Maximum length: 40.
   * @nullable
   */
  groupBusinessPartnerName2?: string;
  /**
   * Address Number.
   * Maximum length: 10.
   * @nullable
   */
  independentAddressId?: string;
  /**
   * Check digit for the international location number.
   * Maximum length: 1.
   * @nullable
   */
  internationalLocationNumber3?: string;
  /**
   * Middle Name or Second Forename of a Person.
   * Maximum length: 40.
   * @nullable
   */
  middleName?: string;
  /**
   * Country/Region for Name Format Rule.
   * Maximum length: 3.
   * @nullable
   */
  nameCountry?: string;
  /**
   * Name format.
   * Maximum length: 2.
   * @nullable
   */
  nameFormat?: string;
  /**
   * Full Name.
   * Maximum length: 80.
   * @nullable
   */
  personFullName?: string;
  /**
   * Person Number.
   * Maximum length: 10.
   * @nullable
   */
  personNumber?: string;
  /**
   * Central Archiving Flag.
   * @nullable
   */
  isMarkedForArchiving?: boolean;
  /**
   * Business Partner Number in External System.
   * Maximum length: 20.
   * @nullable
   */
  businessPartnerIdByExtSystem?: string;
  /**
   * Business Partner Print Format.
   * Maximum length: 1.
   * @nullable
   */
  businessPartnerPrintFormat?: string;
  /**
   * Occupation/group.
   * Maximum length: 4.
   * @nullable
   */
  businessPartnerOccupation?: string;
  /**
   * Marital Status of Business Partner.
   * Maximum length: 1.
   * @nullable
   */
  busPartMaritalStatus?: string;
  /**
   * Nationality.
   * Maximum length: 3.
   * @nullable
   */
  busPartNationality?: string;
  /**
   * Name at birth of business partner.
   * Maximum length: 40.
   * @nullable
   */
  businessPartnerBirthName?: string;
  /**
   * Name supplement, e.g. noble title (key).
   * Maximum length: 4.
   * @nullable
   */
  businessPartnerSupplementName?: string;
  /**
   * Name of Employer of a Natural Person.
   * Maximum length: 35.
   * @nullable
   */
  naturalPersonEmployerName?: string;
  /**
   * Name Prefix (Key).
   * Maximum length: 4.
   * @nullable
   */
  lastNamePrefix?: string;
  /**
   * 2nd name prefix (key).
   * Maximum length: 4.
   * @nullable
   */
  lastNameSecondPrefix?: string;
  /**
   * "Middle Initial" or personal initials.
   * Maximum length: 10.
   * @nullable
   */
  initials?: string;
  /**
   * BP: Data Controller Not Required.
   * @nullable
   */
  bpDataControllerIsNotRequired?: boolean;
  /**
   * Company ID of Trading Partner.
   * Maximum length: 6.
   * @nullable
   */
  tradingPartner?: string;
  /**
   * One-to-one navigation property to the [[BpCreditWorthiness]] entity.
   */
  toBpCreditWorthiness?: BpCreditWorthiness | null;
  /**
   * One-to-many navigation property to the [[BpDataController]] entity.
   */
  toBpDataController!: BpDataController[];
  /**
   * One-to-one navigation property to the [[BpFinancialServicesReporting]] entity.
   */
  toBpFinServicesReporting?: BpFinancialServicesReporting | null;
  /**
   * One-to-many navigation property to the [[BpFiscalYearInformation]] entity.
   */
  toBpFiscalYearInformation!: BpFiscalYearInformation[];
  /**
   * One-to-many navigation property to the [[BpRelationship]] entity.
   */
  toBpRelationship!: BpRelationship[];
  /**
   * One-to-many navigation property to the [[BuPaIdentification]] entity.
   */
  toBuPaIdentification!: BuPaIdentification[];
  /**
   * One-to-many navigation property to the [[BuPaIndustry]] entity.
   */
  toBuPaIndustry!: BuPaIndustry[];
  /**
   * One-to-one navigation property to the [[BpFinancialServicesExtn]] entity.
   */
  toBusinessPartner?: BpFinancialServicesExtn | null;
  /**
   * One-to-many navigation property to the [[BusinessPartnerAddress]] entity.
   */
  toBusinessPartnerAddress!: BusinessPartnerAddress[];
  /**
   * One-to-many navigation property to the [[BusinessPartnerBank]] entity.
   */
  toBusinessPartnerBank!: BusinessPartnerBank[];
  /**
   * One-to-many navigation property to the [[BusinessPartnerContact]] entity.
   */
  toBusinessPartnerContact!: BusinessPartnerContact[];
  /**
   * One-to-many navigation property to the [[BusinessPartnerRating]] entity.
   */
  toBusinessPartnerRating!: BusinessPartnerRating[];
  /**
   * One-to-many navigation property to the [[BusinessPartnerRole]] entity.
   */
  toBusinessPartnerRole!: BusinessPartnerRole[];
  /**
   * One-to-many navigation property to the [[BusinessPartnerTaxNumber]] entity.
   */
  toBusinessPartnerTax!: BusinessPartnerTaxNumber[];
  /**
   * One-to-many navigation property to the [[BusPartAddrDepdntTaxNmbr]] entity.
   */
  toBusPartAddrDepdntTaxNmbr!: BusPartAddrDepdntTaxNmbr[];
  /**
   * One-to-one navigation property to the [[Customer]] entity.
   */
  toCustomer?: Customer | null;
  /**
   * One-to-many navigation property to the [[BusinessPartnerPaymentCard]] entity.
   */
  toPaymentCard!: BusinessPartnerPaymentCard[];
  /**
   * One-to-one navigation property to the [[Supplier]] entity.
   */
  toSupplier?: Supplier | null;

  /**
   * Returns an entity builder to construct instances of `BusinessPartner`.
   * @returns A builder that constructs instances of entity type `BusinessPartner`.
   */
  static builder(): EntityBuilderType<BusinessPartner, BusinessPartnerType> {
    return EntityV2.entityBuilder(BusinessPartner);
  }

  /**
   * Returns a request builder to construct requests for operations on the `BusinessPartner` entity type.
   * @returns A `BusinessPartner` request builder.
   */
  static requestBuilder(): BusinessPartnerRequestBuilder {
    return new BusinessPartnerRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `BusinessPartner`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `BusinessPartner`.
   */
  static customField(fieldName: string): CustomFieldV2<BusinessPartner> {
    return EntityV2.customFieldSelector(fieldName, BusinessPartner);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { BpCreditWorthiness, BpCreditWorthinessType } from './BpCreditWorthiness';
import { BpDataController, BpDataControllerType } from './BpDataController';
import { BpFinancialServicesReporting, BpFinancialServicesReportingType } from './BpFinancialServicesReporting';
import { BpFiscalYearInformation, BpFiscalYearInformationType } from './BpFiscalYearInformation';
import { BpRelationship, BpRelationshipType } from './BpRelationship';
import { BuPaIdentification, BuPaIdentificationType } from './BuPaIdentification';
import { BuPaIndustry, BuPaIndustryType } from './BuPaIndustry';
import { BpFinancialServicesExtn, BpFinancialServicesExtnType } from './BpFinancialServicesExtn';
import { BusinessPartnerAddress, BusinessPartnerAddressType } from './BusinessPartnerAddress';
import { BusinessPartnerBank, BusinessPartnerBankType } from './BusinessPartnerBank';
import { BusinessPartnerContact, BusinessPartnerContactType } from './BusinessPartnerContact';
import { BusinessPartnerRating, BusinessPartnerRatingType } from './BusinessPartnerRating';
import { BusinessPartnerRole, BusinessPartnerRoleType } from './BusinessPartnerRole';
import { BusinessPartnerTaxNumber, BusinessPartnerTaxNumberType } from './BusinessPartnerTaxNumber';
import { BusPartAddrDepdntTaxNmbr, BusPartAddrDepdntTaxNmbrType } from './BusPartAddrDepdntTaxNmbr';
import { Customer, CustomerType } from './Customer';
import { BusinessPartnerPaymentCard, BusinessPartnerPaymentCardType } from './BusinessPartnerPaymentCard';
import { Supplier, SupplierType } from './Supplier';

export interface BusinessPartnerType {
  businessPartner: string;
  customer?: string | null;
  supplier?: string | null;
  academicTitle?: string | null;
  authorizationGroup?: string | null;
  businessPartnerCategory?: string | null;
  businessPartnerFullName?: string | null;
  businessPartnerGrouping?: string | null;
  businessPartnerName?: string | null;
  businessPartnerUuid?: string | null;
  correspondenceLanguage?: string | null;
  createdByUser?: string | null;
  creationDate?: Moment | null;
  creationTime?: Time | null;
  firstName?: string | null;
  formOfAddress?: string | null;
  industry?: string | null;
  internationalLocationNumber1?: string | null;
  internationalLocationNumber2?: string | null;
  isFemale?: boolean | null;
  isMale?: boolean | null;
  isNaturalPerson?: string | null;
  isSexUnknown?: boolean | null;
  genderCodeName?: string | null;
  language?: string | null;
  lastChangeDate?: Moment | null;
  lastChangeTime?: Time | null;
  lastChangedByUser?: string | null;
  lastName?: string | null;
  legalForm?: string | null;
  organizationBpName1?: string | null;
  organizationBpName2?: string | null;
  organizationBpName3?: string | null;
  organizationBpName4?: string | null;
  organizationFoundationDate?: Moment | null;
  organizationLiquidationDate?: Moment | null;
  searchTerm1?: string | null;
  searchTerm2?: string | null;
  additionalLastName?: string | null;
  birthDate?: Moment | null;
  businessPartnerBirthDateStatus?: string | null;
  businessPartnerBirthplaceName?: string | null;
  businessPartnerDeathDate?: Moment | null;
  businessPartnerIsBlocked?: boolean | null;
  businessPartnerType?: string | null;
  eTag?: string | null;
  groupBusinessPartnerName1?: string | null;
  groupBusinessPartnerName2?: string | null;
  independentAddressId?: string | null;
  internationalLocationNumber3?: string | null;
  middleName?: string | null;
  nameCountry?: string | null;
  nameFormat?: string | null;
  personFullName?: string | null;
  personNumber?: string | null;
  isMarkedForArchiving?: boolean | null;
  businessPartnerIdByExtSystem?: string | null;
  businessPartnerPrintFormat?: string | null;
  businessPartnerOccupation?: string | null;
  busPartMaritalStatus?: string | null;
  busPartNationality?: string | null;
  businessPartnerBirthName?: string | null;
  businessPartnerSupplementName?: string | null;
  naturalPersonEmployerName?: string | null;
  lastNamePrefix?: string | null;
  lastNameSecondPrefix?: string | null;
  initials?: string | null;
  bpDataControllerIsNotRequired?: boolean | null;
  tradingPartner?: string | null;
  toBpCreditWorthiness?: BpCreditWorthinessType | null;
  toBpDataController: BpDataControllerType[];
  toBpFinServicesReporting?: BpFinancialServicesReportingType | null;
  toBpFiscalYearInformation: BpFiscalYearInformationType[];
  toBpRelationship: BpRelationshipType[];
  toBuPaIdentification: BuPaIdentificationType[];
  toBuPaIndustry: BuPaIndustryType[];
  toBusinessPartner?: BpFinancialServicesExtnType | null;
  toBusinessPartnerAddress: BusinessPartnerAddressType[];
  toBusinessPartnerBank: BusinessPartnerBankType[];
  toBusinessPartnerContact: BusinessPartnerContactType[];
  toBusinessPartnerRating: BusinessPartnerRatingType[];
  toBusinessPartnerRole: BusinessPartnerRoleType[];
  toBusinessPartnerTax: BusinessPartnerTaxNumberType[];
  toBusPartAddrDepdntTaxNmbr: BusPartAddrDepdntTaxNmbrType[];
  toCustomer?: CustomerType | null;
  toPaymentCard: BusinessPartnerPaymentCardType[];
  toSupplier?: SupplierType | null;
}

export namespace BusinessPartner {
  const _fieldBuilder: FieldBuilder<Constructable<BusinessPartner>> = new FieldBuilder(BusinessPartner);
  /**
   * Static representation of the [[businessPartner]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER = _fieldBuilder.buildEdmTypeField('BusinessPartner', 'Edm.String', false);
  /**
   * Static representation of the [[customer]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER = _fieldBuilder.buildEdmTypeField('Customer', 'Edm.String', true);
  /**
   * Static representation of the [[supplier]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPPLIER = _fieldBuilder.buildEdmTypeField('Supplier', 'Edm.String', true);
  /**
   * Static representation of the [[academicTitle]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACADEMIC_TITLE = _fieldBuilder.buildEdmTypeField('AcademicTitle', 'Edm.String', true);
  /**
   * Static representation of the [[authorizationGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AUTHORIZATION_GROUP = _fieldBuilder.buildEdmTypeField('AuthorizationGroup', 'Edm.String', true);
  /**
   * Static representation of the [[businessPartnerCategory]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER_CATEGORY = _fieldBuilder.buildEdmTypeField('BusinessPartnerCategory', 'Edm.String', true);
  /**
   * Static representation of the [[businessPartnerFullName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER_FULL_NAME = _fieldBuilder.buildEdmTypeField('BusinessPartnerFullName', 'Edm.String', true);
  /**
   * Static representation of the [[businessPartnerGrouping]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER_GROUPING = _fieldBuilder.buildEdmTypeField('BusinessPartnerGrouping', 'Edm.String', true);
  /**
   * Static representation of the [[businessPartnerName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER_NAME = _fieldBuilder.buildEdmTypeField('BusinessPartnerName', 'Edm.String', true);
  /**
   * Static representation of the [[businessPartnerUuid]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER_UUID = _fieldBuilder.buildEdmTypeField('BusinessPartnerUUID', 'Edm.Guid', true);
  /**
   * Static representation of the [[correspondenceLanguage]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CORRESPONDENCE_LANGUAGE = _fieldBuilder.buildEdmTypeField('CorrespondenceLanguage', 'Edm.String', true);
  /**
   * Static representation of the [[createdByUser]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_USER = _fieldBuilder.buildEdmTypeField('CreatedByUser', 'Edm.String', true);
  /**
   * Static representation of the [[creationDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATION_DATE = _fieldBuilder.buildEdmTypeField('CreationDate', 'Edm.DateTime', true);
  /**
   * Static representation of the [[creationTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATION_TIME = _fieldBuilder.buildEdmTypeField('CreationTime', 'Edm.Time', true);
  /**
   * Static representation of the [[firstName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FIRST_NAME = _fieldBuilder.buildEdmTypeField('FirstName', 'Edm.String', true);
  /**
   * Static representation of the [[formOfAddress]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_OF_ADDRESS = _fieldBuilder.buildEdmTypeField('FormOfAddress', 'Edm.String', true);
  /**
   * Static representation of the [[industry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INDUSTRY = _fieldBuilder.buildEdmTypeField('Industry', 'Edm.String', true);
  /**
   * Static representation of the [[internationalLocationNumber1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INTERNATIONAL_LOCATION_NUMBER_1 = _fieldBuilder.buildEdmTypeField('InternationalLocationNumber1', 'Edm.String', true);
  /**
   * Static representation of the [[internationalLocationNumber2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INTERNATIONAL_LOCATION_NUMBER_2 = _fieldBuilder.buildEdmTypeField('InternationalLocationNumber2', 'Edm.String', true);
  /**
   * Static representation of the [[isFemale]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_FEMALE = _fieldBuilder.buildEdmTypeField('IsFemale', 'Edm.Boolean', true);
  /**
   * Static representation of the [[isMale]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_MALE = _fieldBuilder.buildEdmTypeField('IsMale', 'Edm.Boolean', true);
  /**
   * Static representation of the [[isNaturalPerson]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_NATURAL_PERSON = _fieldBuilder.buildEdmTypeField('IsNaturalPerson', 'Edm.String', true);
  /**
   * Static representation of the [[isSexUnknown]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_SEX_UNKNOWN = _fieldBuilder.buildEdmTypeField('IsSexUnknown', 'Edm.Boolean', true);
  /**
   * Static representation of the [[genderCodeName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENDER_CODE_NAME = _fieldBuilder.buildEdmTypeField('GenderCodeName', 'Edm.String', true);
  /**
   * Static representation of the [[language]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LANGUAGE = _fieldBuilder.buildEdmTypeField('Language', 'Edm.String', true);
  /**
   * Static representation of the [[lastChangeDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_CHANGE_DATE = _fieldBuilder.buildEdmTypeField('LastChangeDate', 'Edm.DateTime', true);
  /**
   * Static representation of the [[lastChangeTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_CHANGE_TIME = _fieldBuilder.buildEdmTypeField('LastChangeTime', 'Edm.Time', true);
  /**
   * Static representation of the [[lastChangedByUser]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_CHANGED_BY_USER = _fieldBuilder.buildEdmTypeField('LastChangedByUser', 'Edm.String', true);
  /**
   * Static representation of the [[lastName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_NAME = _fieldBuilder.buildEdmTypeField('LastName', 'Edm.String', true);
  /**
   * Static representation of the [[legalForm]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LEGAL_FORM = _fieldBuilder.buildEdmTypeField('LegalForm', 'Edm.String', true);
  /**
   * Static representation of the [[organizationBpName1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORGANIZATION_BP_NAME_1 = _fieldBuilder.buildEdmTypeField('OrganizationBPName1', 'Edm.String', true);
  /**
   * Static representation of the [[organizationBpName2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORGANIZATION_BP_NAME_2 = _fieldBuilder.buildEdmTypeField('OrganizationBPName2', 'Edm.String', true);
  /**
   * Static representation of the [[organizationBpName3]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORGANIZATION_BP_NAME_3 = _fieldBuilder.buildEdmTypeField('OrganizationBPName3', 'Edm.String', true);
  /**
   * Static representation of the [[organizationBpName4]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORGANIZATION_BP_NAME_4 = _fieldBuilder.buildEdmTypeField('OrganizationBPName4', 'Edm.String', true);
  /**
   * Static representation of the [[organizationFoundationDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORGANIZATION_FOUNDATION_DATE = _fieldBuilder.buildEdmTypeField('OrganizationFoundationDate', 'Edm.DateTime', true);
  /**
   * Static representation of the [[organizationLiquidationDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORGANIZATION_LIQUIDATION_DATE = _fieldBuilder.buildEdmTypeField('OrganizationLiquidationDate', 'Edm.DateTime', true);
  /**
   * Static representation of the [[searchTerm1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SEARCH_TERM_1 = _fieldBuilder.buildEdmTypeField('SearchTerm1', 'Edm.String', true);
  /**
   * Static representation of the [[searchTerm2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SEARCH_TERM_2 = _fieldBuilder.buildEdmTypeField('SearchTerm2', 'Edm.String', true);
  /**
   * Static representation of the [[additionalLastName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDITIONAL_LAST_NAME = _fieldBuilder.buildEdmTypeField('AdditionalLastName', 'Edm.String', true);
  /**
   * Static representation of the [[birthDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BIRTH_DATE = _fieldBuilder.buildEdmTypeField('BirthDate', 'Edm.DateTime', true);
  /**
   * Static representation of the [[businessPartnerBirthDateStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER_BIRTH_DATE_STATUS = _fieldBuilder.buildEdmTypeField('BusinessPartnerBirthDateStatus', 'Edm.String', true);
  /**
   * Static representation of the [[businessPartnerBirthplaceName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER_BIRTHPLACE_NAME = _fieldBuilder.buildEdmTypeField('BusinessPartnerBirthplaceName', 'Edm.String', true);
  /**
   * Static representation of the [[businessPartnerDeathDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER_DEATH_DATE = _fieldBuilder.buildEdmTypeField('BusinessPartnerDeathDate', 'Edm.DateTime', true);
  /**
   * Static representation of the [[businessPartnerIsBlocked]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER_IS_BLOCKED = _fieldBuilder.buildEdmTypeField('BusinessPartnerIsBlocked', 'Edm.Boolean', true);
  /**
   * Static representation of the [[businessPartnerType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER_TYPE = _fieldBuilder.buildEdmTypeField('BusinessPartnerType', 'Edm.String', true);
  /**
   * Static representation of the [[eTag]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_TAG = _fieldBuilder.buildEdmTypeField('ETag', 'Edm.String', true);
  /**
   * Static representation of the [[groupBusinessPartnerName1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GROUP_BUSINESS_PARTNER_NAME_1 = _fieldBuilder.buildEdmTypeField('GroupBusinessPartnerName1', 'Edm.String', true);
  /**
   * Static representation of the [[groupBusinessPartnerName2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GROUP_BUSINESS_PARTNER_NAME_2 = _fieldBuilder.buildEdmTypeField('GroupBusinessPartnerName2', 'Edm.String', true);
  /**
   * Static representation of the [[independentAddressId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INDEPENDENT_ADDRESS_ID = _fieldBuilder.buildEdmTypeField('IndependentAddressID', 'Edm.String', true);
  /**
   * Static representation of the [[internationalLocationNumber3]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INTERNATIONAL_LOCATION_NUMBER_3 = _fieldBuilder.buildEdmTypeField('InternationalLocationNumber3', 'Edm.String', true);
  /**
   * Static representation of the [[middleName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MIDDLE_NAME = _fieldBuilder.buildEdmTypeField('MiddleName', 'Edm.String', true);
  /**
   * Static representation of the [[nameCountry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_COUNTRY = _fieldBuilder.buildEdmTypeField('NameCountry', 'Edm.String', true);
  /**
   * Static representation of the [[nameFormat]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_FORMAT = _fieldBuilder.buildEdmTypeField('NameFormat', 'Edm.String', true);
  /**
   * Static representation of the [[personFullName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERSON_FULL_NAME = _fieldBuilder.buildEdmTypeField('PersonFullName', 'Edm.String', true);
  /**
   * Static representation of the [[personNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERSON_NUMBER = _fieldBuilder.buildEdmTypeField('PersonNumber', 'Edm.String', true);
  /**
   * Static representation of the [[isMarkedForArchiving]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_MARKED_FOR_ARCHIVING = _fieldBuilder.buildEdmTypeField('IsMarkedForArchiving', 'Edm.Boolean', true);
  /**
   * Static representation of the [[businessPartnerIdByExtSystem]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER_ID_BY_EXT_SYSTEM = _fieldBuilder.buildEdmTypeField('BusinessPartnerIDByExtSystem', 'Edm.String', true);
  /**
   * Static representation of the [[businessPartnerPrintFormat]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER_PRINT_FORMAT = _fieldBuilder.buildEdmTypeField('BusinessPartnerPrintFormat', 'Edm.String', true);
  /**
   * Static representation of the [[businessPartnerOccupation]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER_OCCUPATION = _fieldBuilder.buildEdmTypeField('BusinessPartnerOccupation', 'Edm.String', true);
  /**
   * Static representation of the [[busPartMaritalStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUS_PART_MARITAL_STATUS = _fieldBuilder.buildEdmTypeField('BusPartMaritalStatus', 'Edm.String', true);
  /**
   * Static representation of the [[busPartNationality]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUS_PART_NATIONALITY = _fieldBuilder.buildEdmTypeField('BusPartNationality', 'Edm.String', true);
  /**
   * Static representation of the [[businessPartnerBirthName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER_BIRTH_NAME = _fieldBuilder.buildEdmTypeField('BusinessPartnerBirthName', 'Edm.String', true);
  /**
   * Static representation of the [[businessPartnerSupplementName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER_SUPPLEMENT_NAME = _fieldBuilder.buildEdmTypeField('BusinessPartnerSupplementName', 'Edm.String', true);
  /**
   * Static representation of the [[naturalPersonEmployerName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NATURAL_PERSON_EMPLOYER_NAME = _fieldBuilder.buildEdmTypeField('NaturalPersonEmployerName', 'Edm.String', true);
  /**
   * Static representation of the [[lastNamePrefix]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_NAME_PREFIX = _fieldBuilder.buildEdmTypeField('LastNamePrefix', 'Edm.String', true);
  /**
   * Static representation of the [[lastNameSecondPrefix]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_NAME_SECOND_PREFIX = _fieldBuilder.buildEdmTypeField('LastNameSecondPrefix', 'Edm.String', true);
  /**
   * Static representation of the [[initials]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INITIALS = _fieldBuilder.buildEdmTypeField('Initials', 'Edm.String', true);
  /**
   * Static representation of the [[bpDataControllerIsNotRequired]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_DATA_CONTROLLER_IS_NOT_REQUIRED = _fieldBuilder.buildEdmTypeField('BPDataControllerIsNotRequired', 'Edm.Boolean', true);
  /**
   * Static representation of the [[tradingPartner]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TRADING_PARTNER = _fieldBuilder.buildEdmTypeField('TradingPartner', 'Edm.String', true);
  /**
   * Static representation of the one-to-one navigation property [[toBpCreditWorthiness]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_BP_CREDIT_WORTHINESS: OneToOneLink<BusinessPartner, BpCreditWorthiness> = new OneToOneLink('to_BPCreditWorthiness', BusinessPartner, BpCreditWorthiness);
  /**
   * Static representation of the one-to-many navigation property [[toBpDataController]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_BP_DATA_CONTROLLER: Link<BusinessPartner, BpDataController> = new Link('to_BPDataController', BusinessPartner, BpDataController);
  /**
   * Static representation of the one-to-one navigation property [[toBpFinServicesReporting]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_BP_FIN_SERVICES_REPORTING: OneToOneLink<BusinessPartner, BpFinancialServicesReporting> = new OneToOneLink('to_BPFinServicesReporting', BusinessPartner, BpFinancialServicesReporting);
  /**
   * Static representation of the one-to-many navigation property [[toBpFiscalYearInformation]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_BP_FISCAL_YEAR_INFORMATION: Link<BusinessPartner, BpFiscalYearInformation> = new Link('to_BPFiscalYearInformation', BusinessPartner, BpFiscalYearInformation);
  /**
   * Static representation of the one-to-many navigation property [[toBpRelationship]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_BP_RELATIONSHIP: Link<BusinessPartner, BpRelationship> = new Link('to_BPRelationship', BusinessPartner, BpRelationship);
  /**
   * Static representation of the one-to-many navigation property [[toBuPaIdentification]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_BU_PA_IDENTIFICATION: Link<BusinessPartner, BuPaIdentification> = new Link('to_BuPaIdentification', BusinessPartner, BuPaIdentification);
  /**
   * Static representation of the one-to-many navigation property [[toBuPaIndustry]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_BU_PA_INDUSTRY: Link<BusinessPartner, BuPaIndustry> = new Link('to_BuPaIndustry', BusinessPartner, BuPaIndustry);
  /**
   * Static representation of the one-to-one navigation property [[toBusinessPartner]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_BUSINESS_PARTNER: OneToOneLink<BusinessPartner, BpFinancialServicesExtn> = new OneToOneLink('to_BusinessPartner', BusinessPartner, BpFinancialServicesExtn);
  /**
   * Static representation of the one-to-many navigation property [[toBusinessPartnerAddress]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_BUSINESS_PARTNER_ADDRESS: Link<BusinessPartner, BusinessPartnerAddress> = new Link('to_BusinessPartnerAddress', BusinessPartner, BusinessPartnerAddress);
  /**
   * Static representation of the one-to-many navigation property [[toBusinessPartnerBank]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_BUSINESS_PARTNER_BANK: Link<BusinessPartner, BusinessPartnerBank> = new Link('to_BusinessPartnerBank', BusinessPartner, BusinessPartnerBank);
  /**
   * Static representation of the one-to-many navigation property [[toBusinessPartnerContact]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_BUSINESS_PARTNER_CONTACT: Link<BusinessPartner, BusinessPartnerContact> = new Link('to_BusinessPartnerContact', BusinessPartner, BusinessPartnerContact);
  /**
   * Static representation of the one-to-many navigation property [[toBusinessPartnerRating]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_BUSINESS_PARTNER_RATING: Link<BusinessPartner, BusinessPartnerRating> = new Link('to_BusinessPartnerRating', BusinessPartner, BusinessPartnerRating);
  /**
   * Static representation of the one-to-many navigation property [[toBusinessPartnerRole]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_BUSINESS_PARTNER_ROLE: Link<BusinessPartner, BusinessPartnerRole> = new Link('to_BusinessPartnerRole', BusinessPartner, BusinessPartnerRole);
  /**
   * Static representation of the one-to-many navigation property [[toBusinessPartnerTax]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_BUSINESS_PARTNER_TAX: Link<BusinessPartner, BusinessPartnerTaxNumber> = new Link('to_BusinessPartnerTax', BusinessPartner, BusinessPartnerTaxNumber);
  /**
   * Static representation of the one-to-many navigation property [[toBusPartAddrDepdntTaxNmbr]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_BUS_PART_ADDR_DEPDNT_TAX_NMBR: Link<BusinessPartner, BusPartAddrDepdntTaxNmbr> = new Link('to_BusPartAddrDepdntTaxNmbr', BusinessPartner, BusPartAddrDepdntTaxNmbr);
  /**
   * Static representation of the one-to-one navigation property [[toCustomer]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_CUSTOMER: OneToOneLink<BusinessPartner, Customer> = new OneToOneLink('to_Customer', BusinessPartner, Customer);
  /**
   * Static representation of the one-to-many navigation property [[toPaymentCard]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_PAYMENT_CARD: Link<BusinessPartner, BusinessPartnerPaymentCard> = new Link('to_PaymentCard', BusinessPartner, BusinessPartnerPaymentCard);
  /**
   * Static representation of the one-to-one navigation property [[toSupplier]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_SUPPLIER: OneToOneLink<BusinessPartner, Supplier> = new OneToOneLink('to_Supplier', BusinessPartner, Supplier);
  /**
   * All fields of the BusinessPartner entity.
   */
  export const _allFields: Array<EdmTypeField<BusinessPartner, 'Edm.String', false, true> | EdmTypeField<BusinessPartner, 'Edm.String', true, true> | EdmTypeField<BusinessPartner, 'Edm.Guid', true, true> | OrderableEdmTypeField<BusinessPartner, 'Edm.DateTime', true, true> | OrderableEdmTypeField<BusinessPartner, 'Edm.Time', true, true> | EdmTypeField<BusinessPartner, 'Edm.Boolean', true, true> | OneToOneLink<BusinessPartner, BpCreditWorthiness> | Link<BusinessPartner, BpDataController> | OneToOneLink<BusinessPartner, BpFinancialServicesReporting> | Link<BusinessPartner, BpFiscalYearInformation> | Link<BusinessPartner, BpRelationship> | Link<BusinessPartner, BuPaIdentification> | Link<BusinessPartner, BuPaIndustry> | OneToOneLink<BusinessPartner, BpFinancialServicesExtn> | Link<BusinessPartner, BusinessPartnerAddress> | Link<BusinessPartner, BusinessPartnerBank> | Link<BusinessPartner, BusinessPartnerContact> | Link<BusinessPartner, BusinessPartnerRating> | Link<BusinessPartner, BusinessPartnerRole> | Link<BusinessPartner, BusinessPartnerTaxNumber> | Link<BusinessPartner, BusPartAddrDepdntTaxNmbr> | OneToOneLink<BusinessPartner, Customer> | Link<BusinessPartner, BusinessPartnerPaymentCard> | OneToOneLink<BusinessPartner, Supplier>> = [
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
  export const ALL_FIELDS: AllFields<BusinessPartner> = new AllFields('*', BusinessPartner);
  /**
   * All key fields of the BusinessPartner entity.
   */
  export const _keyFields: Array<Field<BusinessPartner, boolean, boolean>> = [BusinessPartner.BUSINESS_PARTNER];
  /**
   * Mapping of all key field names to the respective static field property BusinessPartner.
   */
  export const _keys: { [keys: string]: Field<BusinessPartner, boolean, boolean> } = BusinessPartner._keyFields.reduce((acc: { [keys: string]: Field<BusinessPartner, boolean, boolean> }, field: Field<BusinessPartner, boolean, boolean>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
