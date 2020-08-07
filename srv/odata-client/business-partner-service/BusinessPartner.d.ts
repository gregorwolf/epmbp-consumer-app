import { BusinessPartnerRequestBuilder } from './BusinessPartnerRequestBuilder';
import { Moment } from 'moment';
import { AllFields, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Field, Link, OneToOneLink, StringField, Time, TimeField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "A_BusinessPartner" of service "API_BUSINESS_PARTNER".
 */
export declare class BusinessPartner extends Entity implements BusinessPartnerType {
    /**
     * Technical entity name for BusinessPartner.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for BusinessPartner.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Business Partner Number.
     * Key identifying a business partner in the SAP system. The key is unique within a client.
     * Maximum length: 10.
     */
    businessPartner: string;
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
    toBuPaIdentification: BuPaIdentification[];
    /**
     * One-to-many navigation property to the [[BuPaIndustry]] entity.
     */
    toBuPaIndustry: BuPaIndustry[];
    /**
     * One-to-many navigation property to the [[BusinessPartnerAddress]] entity.
     */
    toBusinessPartnerAddress: BusinessPartnerAddress[];
    /**
     * One-to-many navigation property to the [[BusinessPartnerBank]] entity.
     */
    toBusinessPartnerBank: BusinessPartnerBank[];
    /**
     * One-to-many navigation property to the [[BusinessPartnerContact]] entity.
     */
    toBusinessPartnerContact: BusinessPartnerContact[];
    /**
     * One-to-many navigation property to the [[BusinessPartnerRole]] entity.
     */
    toBusinessPartnerRole: BusinessPartnerRole[];
    /**
     * One-to-many navigation property to the [[BusinessPartnerTaxNumber]] entity.
     */
    toBusinessPartnerTax: BusinessPartnerTaxNumber[];
    /**
     * One-to-one navigation property to the [[Customer]] entity.
     */
    toCustomer: Customer;
    /**
     * One-to-one navigation property to the [[Supplier]] entity.
     */
    toSupplier: Supplier;
    /**
     * Returns an entity builder to construct instances `BusinessPartner`.
     * @returns A builder that constructs instances of entity type `BusinessPartner`.
     */
    static builder(): EntityBuilderType<BusinessPartner, BusinessPartnerTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `BusinessPartner` entity type.
     * @returns A `BusinessPartner` request builder.
     */
    static requestBuilder(): BusinessPartnerRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `BusinessPartner`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `BusinessPartner`.
     */
    static customField(fieldName: string): CustomField<BusinessPartner>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
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
export declare namespace BusinessPartner {
    /**
     * Static representation of the [[businessPartner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER: StringField<BusinessPartner>;
    /**
     * Static representation of the [[customer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER: StringField<BusinessPartner>;
    /**
     * Static representation of the [[supplier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUPPLIER: StringField<BusinessPartner>;
    /**
     * Static representation of the [[academicTitle]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACADEMIC_TITLE: StringField<BusinessPartner>;
    /**
     * Static representation of the [[authorizationGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AUTHORIZATION_GROUP: StringField<BusinessPartner>;
    /**
     * Static representation of the [[businessPartnerCategory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER_CATEGORY: StringField<BusinessPartner>;
    /**
     * Static representation of the [[businessPartnerFullName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER_FULL_NAME: StringField<BusinessPartner>;
    /**
     * Static representation of the [[businessPartnerGrouping]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER_GROUPING: StringField<BusinessPartner>;
    /**
     * Static representation of the [[businessPartnerName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER_NAME: StringField<BusinessPartner>;
    /**
     * Static representation of the [[businessPartnerUuid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER_UUID: StringField<BusinessPartner>;
    /**
     * Static representation of the [[correspondenceLanguage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CORRESPONDENCE_LANGUAGE: StringField<BusinessPartner>;
    /**
     * Static representation of the [[createdByUser]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_USER: StringField<BusinessPartner>;
    /**
     * Static representation of the [[creationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATION_DATE: DateField<BusinessPartner>;
    /**
     * Static representation of the [[creationTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATION_TIME: TimeField<BusinessPartner>;
    /**
     * Static representation of the [[firstName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FIRST_NAME: StringField<BusinessPartner>;
    /**
     * Static representation of the [[formOfAddress]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_OF_ADDRESS: StringField<BusinessPartner>;
    /**
     * Static representation of the [[industry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INDUSTRY: StringField<BusinessPartner>;
    /**
     * Static representation of the [[internationalLocationNumber1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INTERNATIONAL_LOCATION_NUMBER_1: StringField<BusinessPartner>;
    /**
     * Static representation of the [[internationalLocationNumber2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INTERNATIONAL_LOCATION_NUMBER_2: StringField<BusinessPartner>;
    /**
     * Static representation of the [[isFemale]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_FEMALE: BooleanField<BusinessPartner>;
    /**
     * Static representation of the [[isMale]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_MALE: BooleanField<BusinessPartner>;
    /**
     * Static representation of the [[isNaturalPerson]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_NATURAL_PERSON: StringField<BusinessPartner>;
    /**
     * Static representation of the [[isSexUnknown]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_SEX_UNKNOWN: BooleanField<BusinessPartner>;
    /**
     * Static representation of the [[genderCodeName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GENDER_CODE_NAME: StringField<BusinessPartner>;
    /**
     * Static representation of the [[language]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LANGUAGE: StringField<BusinessPartner>;
    /**
     * Static representation of the [[lastChangeDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_CHANGE_DATE: DateField<BusinessPartner>;
    /**
     * Static representation of the [[lastChangeTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_CHANGE_TIME: TimeField<BusinessPartner>;
    /**
     * Static representation of the [[lastChangedByUser]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_CHANGED_BY_USER: StringField<BusinessPartner>;
    /**
     * Static representation of the [[lastName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_NAME: StringField<BusinessPartner>;
    /**
     * Static representation of the [[legalForm]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LEGAL_FORM: StringField<BusinessPartner>;
    /**
     * Static representation of the [[organizationBpName1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ORGANIZATION_BP_NAME_1: StringField<BusinessPartner>;
    /**
     * Static representation of the [[organizationBpName2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ORGANIZATION_BP_NAME_2: StringField<BusinessPartner>;
    /**
     * Static representation of the [[organizationBpName3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ORGANIZATION_BP_NAME_3: StringField<BusinessPartner>;
    /**
     * Static representation of the [[organizationBpName4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ORGANIZATION_BP_NAME_4: StringField<BusinessPartner>;
    /**
     * Static representation of the [[organizationFoundationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ORGANIZATION_FOUNDATION_DATE: DateField<BusinessPartner>;
    /**
     * Static representation of the [[organizationLiquidationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ORGANIZATION_LIQUIDATION_DATE: DateField<BusinessPartner>;
    /**
     * Static representation of the [[searchTerm1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SEARCH_TERM_1: StringField<BusinessPartner>;
    /**
     * Static representation of the [[searchTerm2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SEARCH_TERM_2: StringField<BusinessPartner>;
    /**
     * Static representation of the [[additionalLastName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDITIONAL_LAST_NAME: StringField<BusinessPartner>;
    /**
     * Static representation of the [[birthDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BIRTH_DATE: DateField<BusinessPartner>;
    /**
     * Static representation of the [[businessPartnerBirthplaceName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER_BIRTHPLACE_NAME: StringField<BusinessPartner>;
    /**
     * Static representation of the [[businessPartnerIsBlocked]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER_IS_BLOCKED: BooleanField<BusinessPartner>;
    /**
     * Static representation of the [[businessPartnerType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER_TYPE: StringField<BusinessPartner>;
    /**
     * Static representation of the [[eTag]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const E_TAG: StringField<BusinessPartner>;
    /**
     * Static representation of the [[groupBusinessPartnerName1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GROUP_BUSINESS_PARTNER_NAME_1: StringField<BusinessPartner>;
    /**
     * Static representation of the [[groupBusinessPartnerName2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GROUP_BUSINESS_PARTNER_NAME_2: StringField<BusinessPartner>;
    /**
     * Static representation of the [[independentAddressId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INDEPENDENT_ADDRESS_ID: StringField<BusinessPartner>;
    /**
     * Static representation of the [[internationalLocationNumber3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INTERNATIONAL_LOCATION_NUMBER_3: StringField<BusinessPartner>;
    /**
     * Static representation of the [[middleName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MIDDLE_NAME: StringField<BusinessPartner>;
    /**
     * Static representation of the [[nameCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_COUNTRY: StringField<BusinessPartner>;
    /**
     * Static representation of the [[nameFormat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_FORMAT: StringField<BusinessPartner>;
    /**
     * Static representation of the [[personFullName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERSON_FULL_NAME: StringField<BusinessPartner>;
    /**
     * Static representation of the [[personNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERSON_NUMBER: StringField<BusinessPartner>;
    /**
     * Static representation of the [[isMarkedForArchiving]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_MARKED_FOR_ARCHIVING: BooleanField<BusinessPartner>;
    /**
     * Static representation of the [[businessPartnerIdByExtSystem]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER_ID_BY_EXT_SYSTEM: StringField<BusinessPartner>;
    /**
     * Static representation of the [[tradingPartner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TRADING_PARTNER: StringField<BusinessPartner>;
    /**
     * Static representation of the one-to-many navigation property [[toBuPaIdentification]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_BU_PA_IDENTIFICATION: Link<BusinessPartner, BuPaIdentification>;
    /**
     * Static representation of the one-to-many navigation property [[toBuPaIndustry]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_BU_PA_INDUSTRY: Link<BusinessPartner, BuPaIndustry>;
    /**
     * Static representation of the one-to-many navigation property [[toBusinessPartnerAddress]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_BUSINESS_PARTNER_ADDRESS: Link<BusinessPartner, BusinessPartnerAddress>;
    /**
     * Static representation of the one-to-many navigation property [[toBusinessPartnerBank]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_BUSINESS_PARTNER_BANK: Link<BusinessPartner, BusinessPartnerBank>;
    /**
     * Static representation of the one-to-many navigation property [[toBusinessPartnerContact]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_BUSINESS_PARTNER_CONTACT: Link<BusinessPartner, BusinessPartnerContact>;
    /**
     * Static representation of the one-to-many navigation property [[toBusinessPartnerRole]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_BUSINESS_PARTNER_ROLE: Link<BusinessPartner, BusinessPartnerRole>;
    /**
     * Static representation of the one-to-many navigation property [[toBusinessPartnerTax]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_BUSINESS_PARTNER_TAX: Link<BusinessPartner, BusinessPartnerTaxNumber>;
    /**
     * Static representation of the one-to-one navigation property [[toCustomer]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_CUSTOMER: OneToOneLink<BusinessPartner, Customer>;
    /**
     * Static representation of the one-to-one navigation property [[toSupplier]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_SUPPLIER: OneToOneLink<BusinessPartner, Supplier>;
    /**
     * All fields of the BusinessPartner entity.
     */
    const _allFields: Array<StringField<BusinessPartner> | DateField<BusinessPartner> | TimeField<BusinessPartner> | BooleanField<BusinessPartner> | Link<BusinessPartner, BuPaIdentification> | Link<BusinessPartner, BuPaIndustry> | Link<BusinessPartner, BusinessPartnerAddress> | Link<BusinessPartner, BusinessPartnerBank> | Link<BusinessPartner, BusinessPartnerContact> | Link<BusinessPartner, BusinessPartnerRole> | Link<BusinessPartner, BusinessPartnerTaxNumber> | OneToOneLink<BusinessPartner, Customer> | OneToOneLink<BusinessPartner, Supplier>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<BusinessPartner>;
    /**
     * All key fields of the BusinessPartner entity.
     */
    const _keyFields: Array<Field<BusinessPartner>>;
    /**
     * Mapping of all key field names to the respective static field property BusinessPartner.
     */
    const _keys: {
        [keys: string]: Field<BusinessPartner>;
    };
}
//# sourceMappingURL=BusinessPartner.d.ts.map