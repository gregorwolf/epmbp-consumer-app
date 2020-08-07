/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BusinessPartnerRequestBuilder } from './BusinessPartnerRequestBuilder';
import { Moment } from 'moment';
import { AllFields, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Field, Link, OneToOneLink, StringField, Time, TimeField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "A_BusinessPartner" of service "API_BUSINESS_PARTNER".
 */
export class BusinessPartner extends Entity implements BusinessPartnerType {
  /**
   * Technical entity name for BusinessPartner.
   */
  static _entityName = 'A_BusinessPartner';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for BusinessPartner.
   */
  static _serviceName = 'API_BUSINESS_PARTNER';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
  /**
   * Business Partner Number.
   * Key identifying a business partner in the SAP system. The key is unique within a client.
   * Maximum length: 10.
   */
  businessPartner!: string;
  /**
   * Customer Number.
   * Gives an alphanumeric key, which clearly identifies the customer or vendor in the SAP system.
   * Maximum length: 10.
   * @nullable
   */
  customer?: string;
  /**
   * Account Number of Supplier.
   * Specifies an alphanumeric key that uniquely identifies the supplier in the SAP system.
   * Maximum length: 10.
   * @nullable
   */
  supplier?: string;
  /**
   * Academic Title: Key.
   * Key for academic title.
   * You can define a key for an academic title in Customizing.
   * Maximum length: 4.
   * @nullable
   */
  academicTitle?: string;
  /**
   * Authorization Group.
   * You can use authorization groups to stipulate which business partners a user is allowed to process.
   * Use the following authorization object:'Business partners: authorization groups' (B_BUPA_GRP).The system only checks this authorization if you made an entry in the "Authorization group" field for the business partner. Otherwise, any user may process the business partner.
   * Maximum length: 4.
   * @nullable
   */
  authorizationGroup?: string;
  /**
   * Business Partner Category.
   * Category under which a business partner is classified.
   * You can distinguish between the following business partner categories:OrganizationNatural personGroup of natural persons or organizationsThe processing screens for the business partner categories are set up differently.So, for example, the screen for an organization contains the field Legal form, but this is not needed in the screen for a natural person.
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
   * Classification assigned when creating a business partner.
   * Assign each business partner to a grouping when you create the business partner. The grouping determines the number range. You cannot change the assignment afterwards.You can define the groupings, their descriptions, the associated number range and other attributes in Customizing.You can define standard groupings for the internal and the external number assignment.For each grouping create a number range.When you create a business partner, the entry in the grouping field determines whether and how an entry is made in the business partner number field.
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
   * Correspondence language (written) for business partners in the 'Person' category. Maintain the correspondence language for business partners in the 'Organization' and 'Group' category with the address (communication).
   * When transferring data (direct input), make sure that for a'Person', the field 'LANGU_CORR' and for an'Organization' or "Group" the field 'LANGU'has an entry.
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
   * Key for form of address text.
   * You can also define a form of address text in Customizing.The form of address text can be maintained in different languages.
   * Maximum length: 4.
   * @nullable
   */
  formOfAddress?: string;
  /**
   * Industry sector.
   * An industry sector is the term used to classify a company according to its main business activity.
   * You can assign an industry sector to business partners in the category 'Organization'RetailBanksServicesIndustryHealth servicePublic sectorMedia.
   * Maximum length: 10.
   * @nullable
   */
  industry?: string;
  /**
   * International location number  (part 1).
   * Here you enter the first 7 digits of the international location number.
   * The International Location Number (ILN) is assigned (in Germany by the Centrale for Coorganisation GmbH)) when a company is founded. It consists of 13 digits, the last digit being the check digit. There are two categories of location numbers:Participants who only need an ILN to cleary and unmistakably identify themselves for communication with the business partner are given a category 1 ILN. This cannot be used to identify articles by means of EAN.Participants who wish to assign the location numbers for their own enterprise areas are given a category 2 ILN. For a category 2 ILN, digits 1 to 7 are described as basis number. This is used as basis for the creation of article numbers (EAN).
   * Maximum length: 7.
   * @nullable
   */
  internationalLocationNumber1?: string;
  /**
   * International location number (Part 2).
   * Here, you enter digits 8-12 of the 13-digit international location number.
   * The international location number (ILN) is assigned when establishing a company (by the "Zentrale für Coorganisation GmbH" in Germany). It consists of 13 digits, the last of which is the check digit. There are two types of international location numbers:Subscribers who only need one ILN to identify themselves in communication with the business partner are given an ILN of type 1. These cannot be used for identifying articles by means of EAN.Subscribers who need to assign location numbers for their own company areas are given an ILN of type 2. Positions 1 through 7 of the ILN type 2 are known as the basis number. This basis number forms the basis for article numbers (EAN).
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
   * Indicator through which a distinction between natural and legal persons can be made during tax reporting.
   * Is used in Italy and Mexico ,among other countries.Brasil: If the indicator is not set, 'CGC' is relevant in tax number 1. If the indicator is set, 'CPF' is relevant in tax number 2.Colombia: In the case of some natural persons, the NIT number does not have a check digit. In this case you should set this indicator and the check is deactivated.
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
   * Language for verbal communication with a business partner.
   * This language may differ from the language(s) defined for written correspondence.
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
   * Denotes certain legal norms that are of significance for the organization of a company.
   * For business partners in the category "Organization", you can state the legal form of the company. This is for information purposes only.Stock corporation (AG in Germany)Limited liability company (GmbH in Germany).
   * Maximum length: 2.
   * @nullable
   */
  legalForm?: string;
  /**
   * Name 1 of organization.
   * First name field for business partners in the Organization category.
   * Maximum length: 40.
   * @nullable
   */
  organizationBpName1?: string;
  /**
   * Name 2 of organization.
   * Second name field for business partners in the Organization category.
   * Maximum length: 40.
   * @nullable
   */
  organizationBpName2?: string;
  /**
   * Name 3 of organization.
   * Third name field for business partners in the Organization category.
   * Maximum length: 40.
   * @nullable
   */
  organizationBpName3?: string;
  /**
   * Name 4 of organization.
   * Fourth name field for business partners in the Organization category.
   * Maximum length: 40.
   * @nullable
   */
  organizationBpName4?: string;
  /**
   * Date organization founded.
   * Indicates the official registration of a company in the Commercial Register.
   * If a company is not officially registered in the Commercial Register, it has to use some type of text addition, such as foundation pending, when referring to the legal form.
   * @nullable
   */
  organizationFoundationDate?: Moment;
  /**
   * Liquidation date of organization.
   * Term for the end of bankruptcy proceedings.
   * This date also indicates that the company no longer exists.
   * @nullable
   */
  organizationLiquidationDate?: Moment;
  /**
   * Search term 1 for business partner.
   * Denotes the term that you define for a business partner, and via which you can restrict the search for a business partner in the business partner search or in the locator.
   * Maximum length: 20.
   * @nullable
   */
  searchTerm1?: string;
  /**
   * Search term 2 for business partner.
   * Denotes the term that you define for a business partner, and via which you can restrict the search for a business partner in the business partner search or in the locator.
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
   * Birthplace of business partner.
   * Maximum length: 40.
   * @nullable
   */
  businessPartnerBirthplaceName?: string;
  /**
   * Central Block for Business Partner.
   * If the business partner is blocked centrally, certain activities cannot be executed.
   * @nullable
   */
  businessPartnerIsBlocked?: boolean;
  /**
   * Business Partner Type.
   * You can use the business partner type to group business partners according to your own criteria in Customizing (IMG).
   * In Customizing you can show or hide fields for data entry, depending on the requirements of the relevant business partner type.Select a business partner type. You can obtain help by pressing the F4 key.
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
   * First name field for business partners in the Group category.
   * Maximum length: 40.
   * @nullable
   */
  groupBusinessPartnerName1?: string;
  /**
   * Name 2 (group).
   * Second name field for business partners in the Group category.
   * Maximum length: 40.
   * @nullable
   */
  groupBusinessPartnerName2?: string;
  /**
   * Address Number.
   * Internal key for identifying the address for communication data that spans all addresses in Business Partner.
   * For more information on the significance and usage of the address number, see the documentation for Business Address Services (BAS).
   * Maximum length: 10.
   * @nullable
   */
  independentAddressId?: string;
  /**
   * Check digit for the international location number.
   * The check digit is derived from a special check digit procedure from digits of the previous international location numbers. In this way, you can check whether the ILN entered is actually valid.
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
   * Country for Name Format Rule.
   * The name format rule country and the name format rule key together uniquely identify a formatting rule.
   * A country can have several formats which correspond to different rules. Formatting rules describe the format of a person name.
   * Maximum length: 3.
   * @nullable
   */
  nameCountry?: string;
  /**
   * Name format.
   * See Name format.
   * Maximum length: 2.
   * @nullable
   */
  nameFormat?: string;
  /**
   * Full Name.
   * States the complete name of a person.
   * The complete name is generally generated and saved by the Business Address Services (BAS) according to country-specific rules from the individual name components (without the form of address).If, during the formatting of an address, you want to use an alternative name, you can manually format the alternative name here.
   * Maximum length: 80.
   * @nullable
   */
  personFullName?: string;
  /**
   * Person number.
   * Internal key for identifying a person in Business Address Services.
   * For more information about the meaning and use of the person number and Business Address Services concepts, see the function group SZA0 documentation.
   * Maximum length: 10.
   * @nullable
   */
  personNumber?: string;
  /**
   * Central Archiving Flag.
   * Establishes if the business partner is meant to be archived.
   * If the indicator is set, the relevant business partner can be archived from the view of the business partner administration.If the check of the data to be archived shows, for example,  that there are still active business transactions the archiving of the business partner data is prevented even if the indicator is set.If the indicator is not set, the business partner will not be taken into consideration during archiving.
   * @nullable
   */
  isMarkedForArchiving?: boolean;
  /**
   * Business Partner Number in External System.
   * Business partner number from an external system or a legacy system.
   * If the current business partner is known under a different number in an external system, you can store this number here for information purposes.Direct input gives you the option of maintaining a business partner by specifying the external business partner number. If you maintain business partner data in your legacy system, you can transmit changes made to business partners to the SAP system without having to know the SAP business partner number in the legacy system.
   * Maximum length: 20.
   * @nullable
   */
  businessPartnerIdByExtSystem?: string;
  /**
   * Company ID of trading partner.
   * Company ID standard for the whole group.
   * Maximum length: 6.
   * @nullable
   */
  tradingPartner?: string;
  /**
   * One-to-many navigation property to the [[BuPaIdentification]] entity.
   */
  toBuPaIdentification!: BuPaIdentification[];
  /**
   * One-to-many navigation property to the [[BuPaIndustry]] entity.
   */
  toBuPaIndustry!: BuPaIndustry[];
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
   * One-to-many navigation property to the [[BusinessPartnerRole]] entity.
   */
  toBusinessPartnerRole!: BusinessPartnerRole[];
  /**
   * One-to-many navigation property to the [[BusinessPartnerTaxNumber]] entity.
   */
  toBusinessPartnerTax!: BusinessPartnerTaxNumber[];
  /**
   * One-to-one navigation property to the [[Customer]] entity.
   */
  toCustomer!: Customer;
  /**
   * One-to-one navigation property to the [[Supplier]] entity.
   */
  toSupplier!: Supplier;

  /**
   * Returns an entity builder to construct instances `BusinessPartner`.
   * @returns A builder that constructs instances of entity type `BusinessPartner`.
   */
  static builder(): EntityBuilderType<BusinessPartner, BusinessPartnerTypeForceMandatory> {
    return Entity.entityBuilder(BusinessPartner);
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
  static customField(fieldName: string): CustomField<BusinessPartner> {
    return Entity.customFieldSelector(fieldName, BusinessPartner);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { BuPaIdentification, BuPaIdentificationType } from './BuPaIdentification';
import { BuPaIndustry, BuPaIndustryType } from './BuPaIndustry';
import { BusinessPartnerAddress, BusinessPartnerAddressType } from './BusinessPartnerAddress';
import { BusinessPartnerBank, BusinessPartnerBankType } from './BusinessPartnerBank';
import { BusinessPartnerContact, BusinessPartnerContactType } from './BusinessPartnerContact';
import { BusinessPartnerRole, BusinessPartnerRoleType } from './BusinessPartnerRole';
import { BusinessPartnerTaxNumber, BusinessPartnerTaxNumberType } from './BusinessPartnerTaxNumber';
import { Customer, CustomerType } from './Customer';
import { Supplier, SupplierType } from './Supplier';

export interface BusinessPartnerType {
  businessPartner: string;
  customer?: string;
  supplier?: string;
  academicTitle?: string;
  authorizationGroup?: string;
  businessPartnerCategory?: string;
  businessPartnerFullName?: string;
  businessPartnerGrouping?: string;
  businessPartnerName?: string;
  businessPartnerUuid?: string;
  correspondenceLanguage?: string;
  createdByUser?: string;
  creationDate?: Moment;
  creationTime?: Time;
  firstName?: string;
  formOfAddress?: string;
  industry?: string;
  internationalLocationNumber1?: string;
  internationalLocationNumber2?: string;
  isFemale?: boolean;
  isMale?: boolean;
  isNaturalPerson?: string;
  isSexUnknown?: boolean;
  genderCodeName?: string;
  language?: string;
  lastChangeDate?: Moment;
  lastChangeTime?: Time;
  lastChangedByUser?: string;
  lastName?: string;
  legalForm?: string;
  organizationBpName1?: string;
  organizationBpName2?: string;
  organizationBpName3?: string;
  organizationBpName4?: string;
  organizationFoundationDate?: Moment;
  organizationLiquidationDate?: Moment;
  searchTerm1?: string;
  searchTerm2?: string;
  additionalLastName?: string;
  birthDate?: Moment;
  businessPartnerBirthplaceName?: string;
  businessPartnerIsBlocked?: boolean;
  businessPartnerType?: string;
  eTag?: string;
  groupBusinessPartnerName1?: string;
  groupBusinessPartnerName2?: string;
  independentAddressId?: string;
  internationalLocationNumber3?: string;
  middleName?: string;
  nameCountry?: string;
  nameFormat?: string;
  personFullName?: string;
  personNumber?: string;
  isMarkedForArchiving?: boolean;
  businessPartnerIdByExtSystem?: string;
  tradingPartner?: string;
  toBuPaIdentification: BuPaIdentificationType[];
  toBuPaIndustry: BuPaIndustryType[];
  toBusinessPartnerAddress: BusinessPartnerAddressType[];
  toBusinessPartnerBank: BusinessPartnerBankType[];
  toBusinessPartnerContact: BusinessPartnerContactType[];
  toBusinessPartnerRole: BusinessPartnerRoleType[];
  toBusinessPartnerTax: BusinessPartnerTaxNumberType[];
  toCustomer: CustomerType;
  toSupplier: SupplierType;
}

export interface BusinessPartnerTypeForceMandatory {
  businessPartner: string;
  customer: string;
  supplier: string;
  academicTitle: string;
  authorizationGroup: string;
  businessPartnerCategory: string;
  businessPartnerFullName: string;
  businessPartnerGrouping: string;
  businessPartnerName: string;
  businessPartnerUuid: string;
  correspondenceLanguage: string;
  createdByUser: string;
  creationDate: Moment;
  creationTime: Time;
  firstName: string;
  formOfAddress: string;
  industry: string;
  internationalLocationNumber1: string;
  internationalLocationNumber2: string;
  isFemale: boolean;
  isMale: boolean;
  isNaturalPerson: string;
  isSexUnknown: boolean;
  genderCodeName: string;
  language: string;
  lastChangeDate: Moment;
  lastChangeTime: Time;
  lastChangedByUser: string;
  lastName: string;
  legalForm: string;
  organizationBpName1: string;
  organizationBpName2: string;
  organizationBpName3: string;
  organizationBpName4: string;
  organizationFoundationDate: Moment;
  organizationLiquidationDate: Moment;
  searchTerm1: string;
  searchTerm2: string;
  additionalLastName: string;
  birthDate: Moment;
  businessPartnerBirthplaceName: string;
  businessPartnerIsBlocked: boolean;
  businessPartnerType: string;
  eTag: string;
  groupBusinessPartnerName1: string;
  groupBusinessPartnerName2: string;
  independentAddressId: string;
  internationalLocationNumber3: string;
  middleName: string;
  nameCountry: string;
  nameFormat: string;
  personFullName: string;
  personNumber: string;
  isMarkedForArchiving: boolean;
  businessPartnerIdByExtSystem: string;
  tradingPartner: string;
  toBuPaIdentification: BuPaIdentificationType[];
  toBuPaIndustry: BuPaIndustryType[];
  toBusinessPartnerAddress: BusinessPartnerAddressType[];
  toBusinessPartnerBank: BusinessPartnerBankType[];
  toBusinessPartnerContact: BusinessPartnerContactType[];
  toBusinessPartnerRole: BusinessPartnerRoleType[];
  toBusinessPartnerTax: BusinessPartnerTaxNumberType[];
  toCustomer: CustomerType;
  toSupplier: SupplierType;
}

export namespace BusinessPartner {
  /**
   * Static representation of the [[businessPartner]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER: StringField<BusinessPartner> = new StringField('BusinessPartner', BusinessPartner, 'Edm.String');
  /**
   * Static representation of the [[customer]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER: StringField<BusinessPartner> = new StringField('Customer', BusinessPartner, 'Edm.String');
  /**
   * Static representation of the [[supplier]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPPLIER: StringField<BusinessPartner> = new StringField('Supplier', BusinessPartner, 'Edm.String');
  /**
   * Static representation of the [[academicTitle]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACADEMIC_TITLE: StringField<BusinessPartner> = new StringField('AcademicTitle', BusinessPartner, 'Edm.String');
  /**
   * Static representation of the [[authorizationGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AUTHORIZATION_GROUP: StringField<BusinessPartner> = new StringField('AuthorizationGroup', BusinessPartner, 'Edm.String');
  /**
   * Static representation of the [[businessPartnerCategory]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER_CATEGORY: StringField<BusinessPartner> = new StringField('BusinessPartnerCategory', BusinessPartner, 'Edm.String');
  /**
   * Static representation of the [[businessPartnerFullName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER_FULL_NAME: StringField<BusinessPartner> = new StringField('BusinessPartnerFullName', BusinessPartner, 'Edm.String');
  /**
   * Static representation of the [[businessPartnerGrouping]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER_GROUPING: StringField<BusinessPartner> = new StringField('BusinessPartnerGrouping', BusinessPartner, 'Edm.String');
  /**
   * Static representation of the [[businessPartnerName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER_NAME: StringField<BusinessPartner> = new StringField('BusinessPartnerName', BusinessPartner, 'Edm.String');
  /**
   * Static representation of the [[businessPartnerUuid]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER_UUID: StringField<BusinessPartner> = new StringField('BusinessPartnerUUID', BusinessPartner, 'Edm.Guid');
  /**
   * Static representation of the [[correspondenceLanguage]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CORRESPONDENCE_LANGUAGE: StringField<BusinessPartner> = new StringField('CorrespondenceLanguage', BusinessPartner, 'Edm.String');
  /**
   * Static representation of the [[createdByUser]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_USER: StringField<BusinessPartner> = new StringField('CreatedByUser', BusinessPartner, 'Edm.String');
  /**
   * Static representation of the [[creationDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATION_DATE: DateField<BusinessPartner> = new DateField('CreationDate', BusinessPartner, 'Edm.DateTime');
  /**
   * Static representation of the [[creationTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATION_TIME: TimeField<BusinessPartner> = new TimeField('CreationTime', BusinessPartner, 'Edm.Time');
  /**
   * Static representation of the [[firstName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FIRST_NAME: StringField<BusinessPartner> = new StringField('FirstName', BusinessPartner, 'Edm.String');
  /**
   * Static representation of the [[formOfAddress]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_OF_ADDRESS: StringField<BusinessPartner> = new StringField('FormOfAddress', BusinessPartner, 'Edm.String');
  /**
   * Static representation of the [[industry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INDUSTRY: StringField<BusinessPartner> = new StringField('Industry', BusinessPartner, 'Edm.String');
  /**
   * Static representation of the [[internationalLocationNumber1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INTERNATIONAL_LOCATION_NUMBER_1: StringField<BusinessPartner> = new StringField('InternationalLocationNumber1', BusinessPartner, 'Edm.String');
  /**
   * Static representation of the [[internationalLocationNumber2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INTERNATIONAL_LOCATION_NUMBER_2: StringField<BusinessPartner> = new StringField('InternationalLocationNumber2', BusinessPartner, 'Edm.String');
  /**
   * Static representation of the [[isFemale]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_FEMALE: BooleanField<BusinessPartner> = new BooleanField('IsFemale', BusinessPartner, 'Edm.Boolean');
  /**
   * Static representation of the [[isMale]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_MALE: BooleanField<BusinessPartner> = new BooleanField('IsMale', BusinessPartner, 'Edm.Boolean');
  /**
   * Static representation of the [[isNaturalPerson]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_NATURAL_PERSON: StringField<BusinessPartner> = new StringField('IsNaturalPerson', BusinessPartner, 'Edm.String');
  /**
   * Static representation of the [[isSexUnknown]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_SEX_UNKNOWN: BooleanField<BusinessPartner> = new BooleanField('IsSexUnknown', BusinessPartner, 'Edm.Boolean');
  /**
   * Static representation of the [[genderCodeName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENDER_CODE_NAME: StringField<BusinessPartner> = new StringField('GenderCodeName', BusinessPartner, 'Edm.String');
  /**
   * Static representation of the [[language]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LANGUAGE: StringField<BusinessPartner> = new StringField('Language', BusinessPartner, 'Edm.String');
  /**
   * Static representation of the [[lastChangeDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_CHANGE_DATE: DateField<BusinessPartner> = new DateField('LastChangeDate', BusinessPartner, 'Edm.DateTime');
  /**
   * Static representation of the [[lastChangeTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_CHANGE_TIME: TimeField<BusinessPartner> = new TimeField('LastChangeTime', BusinessPartner, 'Edm.Time');
  /**
   * Static representation of the [[lastChangedByUser]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_CHANGED_BY_USER: StringField<BusinessPartner> = new StringField('LastChangedByUser', BusinessPartner, 'Edm.String');
  /**
   * Static representation of the [[lastName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_NAME: StringField<BusinessPartner> = new StringField('LastName', BusinessPartner, 'Edm.String');
  /**
   * Static representation of the [[legalForm]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LEGAL_FORM: StringField<BusinessPartner> = new StringField('LegalForm', BusinessPartner, 'Edm.String');
  /**
   * Static representation of the [[organizationBpName1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORGANIZATION_BP_NAME_1: StringField<BusinessPartner> = new StringField('OrganizationBPName1', BusinessPartner, 'Edm.String');
  /**
   * Static representation of the [[organizationBpName2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORGANIZATION_BP_NAME_2: StringField<BusinessPartner> = new StringField('OrganizationBPName2', BusinessPartner, 'Edm.String');
  /**
   * Static representation of the [[organizationBpName3]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORGANIZATION_BP_NAME_3: StringField<BusinessPartner> = new StringField('OrganizationBPName3', BusinessPartner, 'Edm.String');
  /**
   * Static representation of the [[organizationBpName4]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORGANIZATION_BP_NAME_4: StringField<BusinessPartner> = new StringField('OrganizationBPName4', BusinessPartner, 'Edm.String');
  /**
   * Static representation of the [[organizationFoundationDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORGANIZATION_FOUNDATION_DATE: DateField<BusinessPartner> = new DateField('OrganizationFoundationDate', BusinessPartner, 'Edm.DateTime');
  /**
   * Static representation of the [[organizationLiquidationDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORGANIZATION_LIQUIDATION_DATE: DateField<BusinessPartner> = new DateField('OrganizationLiquidationDate', BusinessPartner, 'Edm.DateTime');
  /**
   * Static representation of the [[searchTerm1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SEARCH_TERM_1: StringField<BusinessPartner> = new StringField('SearchTerm1', BusinessPartner, 'Edm.String');
  /**
   * Static representation of the [[searchTerm2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SEARCH_TERM_2: StringField<BusinessPartner> = new StringField('SearchTerm2', BusinessPartner, 'Edm.String');
  /**
   * Static representation of the [[additionalLastName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDITIONAL_LAST_NAME: StringField<BusinessPartner> = new StringField('AdditionalLastName', BusinessPartner, 'Edm.String');
  /**
   * Static representation of the [[birthDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BIRTH_DATE: DateField<BusinessPartner> = new DateField('BirthDate', BusinessPartner, 'Edm.DateTime');
  /**
   * Static representation of the [[businessPartnerBirthplaceName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER_BIRTHPLACE_NAME: StringField<BusinessPartner> = new StringField('BusinessPartnerBirthplaceName', BusinessPartner, 'Edm.String');
  /**
   * Static representation of the [[businessPartnerIsBlocked]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER_IS_BLOCKED: BooleanField<BusinessPartner> = new BooleanField('BusinessPartnerIsBlocked', BusinessPartner, 'Edm.Boolean');
  /**
   * Static representation of the [[businessPartnerType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER_TYPE: StringField<BusinessPartner> = new StringField('BusinessPartnerType', BusinessPartner, 'Edm.String');
  /**
   * Static representation of the [[eTag]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_TAG: StringField<BusinessPartner> = new StringField('ETag', BusinessPartner, 'Edm.String');
  /**
   * Static representation of the [[groupBusinessPartnerName1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GROUP_BUSINESS_PARTNER_NAME_1: StringField<BusinessPartner> = new StringField('GroupBusinessPartnerName1', BusinessPartner, 'Edm.String');
  /**
   * Static representation of the [[groupBusinessPartnerName2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GROUP_BUSINESS_PARTNER_NAME_2: StringField<BusinessPartner> = new StringField('GroupBusinessPartnerName2', BusinessPartner, 'Edm.String');
  /**
   * Static representation of the [[independentAddressId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INDEPENDENT_ADDRESS_ID: StringField<BusinessPartner> = new StringField('IndependentAddressID', BusinessPartner, 'Edm.String');
  /**
   * Static representation of the [[internationalLocationNumber3]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INTERNATIONAL_LOCATION_NUMBER_3: StringField<BusinessPartner> = new StringField('InternationalLocationNumber3', BusinessPartner, 'Edm.String');
  /**
   * Static representation of the [[middleName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MIDDLE_NAME: StringField<BusinessPartner> = new StringField('MiddleName', BusinessPartner, 'Edm.String');
  /**
   * Static representation of the [[nameCountry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_COUNTRY: StringField<BusinessPartner> = new StringField('NameCountry', BusinessPartner, 'Edm.String');
  /**
   * Static representation of the [[nameFormat]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_FORMAT: StringField<BusinessPartner> = new StringField('NameFormat', BusinessPartner, 'Edm.String');
  /**
   * Static representation of the [[personFullName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERSON_FULL_NAME: StringField<BusinessPartner> = new StringField('PersonFullName', BusinessPartner, 'Edm.String');
  /**
   * Static representation of the [[personNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERSON_NUMBER: StringField<BusinessPartner> = new StringField('PersonNumber', BusinessPartner, 'Edm.String');
  /**
   * Static representation of the [[isMarkedForArchiving]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_MARKED_FOR_ARCHIVING: BooleanField<BusinessPartner> = new BooleanField('IsMarkedForArchiving', BusinessPartner, 'Edm.Boolean');
  /**
   * Static representation of the [[businessPartnerIdByExtSystem]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER_ID_BY_EXT_SYSTEM: StringField<BusinessPartner> = new StringField('BusinessPartnerIDByExtSystem', BusinessPartner, 'Edm.String');
  /**
   * Static representation of the [[tradingPartner]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TRADING_PARTNER: StringField<BusinessPartner> = new StringField('TradingPartner', BusinessPartner, 'Edm.String');
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
   * Static representation of the one-to-one navigation property [[toCustomer]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_CUSTOMER: OneToOneLink<BusinessPartner, Customer> = new OneToOneLink('to_Customer', BusinessPartner, Customer);
  /**
   * Static representation of the one-to-one navigation property [[toSupplier]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_SUPPLIER: OneToOneLink<BusinessPartner, Supplier> = new OneToOneLink('to_Supplier', BusinessPartner, Supplier);
  /**
   * All fields of the BusinessPartner entity.
   */
  export const _allFields: Array<StringField<BusinessPartner> | DateField<BusinessPartner> | TimeField<BusinessPartner> | BooleanField<BusinessPartner> | Link<BusinessPartner, BuPaIdentification> | Link<BusinessPartner, BuPaIndustry> | Link<BusinessPartner, BusinessPartnerAddress> | Link<BusinessPartner, BusinessPartnerBank> | Link<BusinessPartner, BusinessPartnerContact> | Link<BusinessPartner, BusinessPartnerRole> | Link<BusinessPartner, BusinessPartnerTaxNumber> | OneToOneLink<BusinessPartner, Customer> | OneToOneLink<BusinessPartner, Supplier>> = [
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
  export const ALL_FIELDS: AllFields<BusinessPartner> = new AllFields('*', BusinessPartner);
  /**
   * All key fields of the BusinessPartner entity.
   */
  export const _keyFields: Array<Field<BusinessPartner>> = [BusinessPartner.BUSINESS_PARTNER];
  /**
   * Mapping of all key field names to the respective static field property BusinessPartner.
   */
  export const _keys: { [keys: string]: Field<BusinessPartner> } = BusinessPartner._keyFields.reduce((acc: { [keys: string]: Field<BusinessPartner> }, field: Field<BusinessPartner>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
