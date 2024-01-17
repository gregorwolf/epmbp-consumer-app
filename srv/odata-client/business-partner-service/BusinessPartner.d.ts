import { BusinessPartnerRequestBuilder } from './BusinessPartnerRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field, Link, OneToOneLink, OrderableEdmTypeField, Time } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "A_BusinessPartner" of service "API_BUSINESS_PARTNER".
 */
export declare class BusinessPartner extends EntityV2 implements BusinessPartnerType {
    /**
     * Technical entity name for BusinessPartner.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Business Partner Number.
     * Maximum length: 10.
     */
    businessPartner: string;
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
    toBpDataController: BpDataController[];
    /**
     * One-to-one navigation property to the [[BpFinancialServicesReporting]] entity.
     */
    toBpFinServicesReporting?: BpFinancialServicesReporting | null;
    /**
     * One-to-many navigation property to the [[BpFiscalYearInformation]] entity.
     */
    toBpFiscalYearInformation: BpFiscalYearInformation[];
    /**
     * One-to-many navigation property to the [[BpRelationship]] entity.
     */
    toBpRelationship: BpRelationship[];
    /**
     * One-to-many navigation property to the [[BuPaIdentification]] entity.
     */
    toBuPaIdentification: BuPaIdentification[];
    /**
     * One-to-many navigation property to the [[BuPaIndustry]] entity.
     */
    toBuPaIndustry: BuPaIndustry[];
    /**
     * One-to-one navigation property to the [[BpFinancialServicesExtn]] entity.
     */
    toBusinessPartner?: BpFinancialServicesExtn | null;
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
     * One-to-many navigation property to the [[BusinessPartnerRating]] entity.
     */
    toBusinessPartnerRating: BusinessPartnerRating[];
    /**
     * One-to-many navigation property to the [[BusinessPartnerRole]] entity.
     */
    toBusinessPartnerRole: BusinessPartnerRole[];
    /**
     * One-to-many navigation property to the [[BusinessPartnerTaxNumber]] entity.
     */
    toBusinessPartnerTax: BusinessPartnerTaxNumber[];
    /**
     * One-to-many navigation property to the [[BusPartAddrDepdntTaxNmbr]] entity.
     */
    toBusPartAddrDepdntTaxNmbr: BusPartAddrDepdntTaxNmbr[];
    /**
     * One-to-one navigation property to the [[Customer]] entity.
     */
    toCustomer?: Customer | null;
    /**
     * One-to-many navigation property to the [[BusinessPartnerPaymentCard]] entity.
     */
    toPaymentCard: BusinessPartnerPaymentCard[];
    /**
     * One-to-one navigation property to the [[Supplier]] entity.
     */
    toSupplier?: Supplier | null;
    /**
     * Returns an entity builder to construct instances of `BusinessPartner`.
     * @returns A builder that constructs instances of entity type `BusinessPartner`.
     */
    static builder(): EntityBuilderType<BusinessPartner, BusinessPartnerType>;
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
    static customField(fieldName: string): CustomFieldV2<BusinessPartner>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
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
export declare namespace BusinessPartner {
    /**
     * Static representation of the [[businessPartner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER: EdmTypeField<BusinessPartner, "Edm.String", false, true>;
    /**
     * Static representation of the [[customer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER: EdmTypeField<BusinessPartner, "Edm.String", true, true>;
    /**
     * Static representation of the [[supplier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUPPLIER: EdmTypeField<BusinessPartner, "Edm.String", true, true>;
    /**
     * Static representation of the [[academicTitle]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACADEMIC_TITLE: EdmTypeField<BusinessPartner, "Edm.String", true, true>;
    /**
     * Static representation of the [[authorizationGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AUTHORIZATION_GROUP: EdmTypeField<BusinessPartner, "Edm.String", true, true>;
    /**
     * Static representation of the [[businessPartnerCategory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER_CATEGORY: EdmTypeField<BusinessPartner, "Edm.String", true, true>;
    /**
     * Static representation of the [[businessPartnerFullName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER_FULL_NAME: EdmTypeField<BusinessPartner, "Edm.String", true, true>;
    /**
     * Static representation of the [[businessPartnerGrouping]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER_GROUPING: EdmTypeField<BusinessPartner, "Edm.String", true, true>;
    /**
     * Static representation of the [[businessPartnerName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER_NAME: EdmTypeField<BusinessPartner, "Edm.String", true, true>;
    /**
     * Static representation of the [[businessPartnerUuid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER_UUID: EdmTypeField<BusinessPartner, "Edm.Guid", true, true>;
    /**
     * Static representation of the [[correspondenceLanguage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CORRESPONDENCE_LANGUAGE: EdmTypeField<BusinessPartner, "Edm.String", true, true>;
    /**
     * Static representation of the [[createdByUser]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_USER: EdmTypeField<BusinessPartner, "Edm.String", true, true>;
    /**
     * Static representation of the [[creationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATION_DATE: OrderableEdmTypeField<BusinessPartner, "Edm.DateTime", true, true>;
    /**
     * Static representation of the [[creationTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATION_TIME: OrderableEdmTypeField<BusinessPartner, "Edm.Time", true, true>;
    /**
     * Static representation of the [[firstName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FIRST_NAME: EdmTypeField<BusinessPartner, "Edm.String", true, true>;
    /**
     * Static representation of the [[formOfAddress]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_OF_ADDRESS: EdmTypeField<BusinessPartner, "Edm.String", true, true>;
    /**
     * Static representation of the [[industry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INDUSTRY: EdmTypeField<BusinessPartner, "Edm.String", true, true>;
    /**
     * Static representation of the [[internationalLocationNumber1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INTERNATIONAL_LOCATION_NUMBER_1: EdmTypeField<BusinessPartner, "Edm.String", true, true>;
    /**
     * Static representation of the [[internationalLocationNumber2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INTERNATIONAL_LOCATION_NUMBER_2: EdmTypeField<BusinessPartner, "Edm.String", true, true>;
    /**
     * Static representation of the [[isFemale]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_FEMALE: EdmTypeField<BusinessPartner, "Edm.Boolean", true, true>;
    /**
     * Static representation of the [[isMale]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_MALE: EdmTypeField<BusinessPartner, "Edm.Boolean", true, true>;
    /**
     * Static representation of the [[isNaturalPerson]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_NATURAL_PERSON: EdmTypeField<BusinessPartner, "Edm.String", true, true>;
    /**
     * Static representation of the [[isSexUnknown]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_SEX_UNKNOWN: EdmTypeField<BusinessPartner, "Edm.Boolean", true, true>;
    /**
     * Static representation of the [[genderCodeName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GENDER_CODE_NAME: EdmTypeField<BusinessPartner, "Edm.String", true, true>;
    /**
     * Static representation of the [[language]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LANGUAGE: EdmTypeField<BusinessPartner, "Edm.String", true, true>;
    /**
     * Static representation of the [[lastChangeDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_CHANGE_DATE: OrderableEdmTypeField<BusinessPartner, "Edm.DateTime", true, true>;
    /**
     * Static representation of the [[lastChangeTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_CHANGE_TIME: OrderableEdmTypeField<BusinessPartner, "Edm.Time", true, true>;
    /**
     * Static representation of the [[lastChangedByUser]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_CHANGED_BY_USER: EdmTypeField<BusinessPartner, "Edm.String", true, true>;
    /**
     * Static representation of the [[lastName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_NAME: EdmTypeField<BusinessPartner, "Edm.String", true, true>;
    /**
     * Static representation of the [[legalForm]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LEGAL_FORM: EdmTypeField<BusinessPartner, "Edm.String", true, true>;
    /**
     * Static representation of the [[organizationBpName1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ORGANIZATION_BP_NAME_1: EdmTypeField<BusinessPartner, "Edm.String", true, true>;
    /**
     * Static representation of the [[organizationBpName2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ORGANIZATION_BP_NAME_2: EdmTypeField<BusinessPartner, "Edm.String", true, true>;
    /**
     * Static representation of the [[organizationBpName3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ORGANIZATION_BP_NAME_3: EdmTypeField<BusinessPartner, "Edm.String", true, true>;
    /**
     * Static representation of the [[organizationBpName4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ORGANIZATION_BP_NAME_4: EdmTypeField<BusinessPartner, "Edm.String", true, true>;
    /**
     * Static representation of the [[organizationFoundationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ORGANIZATION_FOUNDATION_DATE: OrderableEdmTypeField<BusinessPartner, "Edm.DateTime", true, true>;
    /**
     * Static representation of the [[organizationLiquidationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ORGANIZATION_LIQUIDATION_DATE: OrderableEdmTypeField<BusinessPartner, "Edm.DateTime", true, true>;
    /**
     * Static representation of the [[searchTerm1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SEARCH_TERM_1: EdmTypeField<BusinessPartner, "Edm.String", true, true>;
    /**
     * Static representation of the [[searchTerm2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SEARCH_TERM_2: EdmTypeField<BusinessPartner, "Edm.String", true, true>;
    /**
     * Static representation of the [[additionalLastName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDITIONAL_LAST_NAME: EdmTypeField<BusinessPartner, "Edm.String", true, true>;
    /**
     * Static representation of the [[birthDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BIRTH_DATE: OrderableEdmTypeField<BusinessPartner, "Edm.DateTime", true, true>;
    /**
     * Static representation of the [[businessPartnerBirthDateStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER_BIRTH_DATE_STATUS: EdmTypeField<BusinessPartner, "Edm.String", true, true>;
    /**
     * Static representation of the [[businessPartnerBirthplaceName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER_BIRTHPLACE_NAME: EdmTypeField<BusinessPartner, "Edm.String", true, true>;
    /**
     * Static representation of the [[businessPartnerDeathDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER_DEATH_DATE: OrderableEdmTypeField<BusinessPartner, "Edm.DateTime", true, true>;
    /**
     * Static representation of the [[businessPartnerIsBlocked]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER_IS_BLOCKED: EdmTypeField<BusinessPartner, "Edm.Boolean", true, true>;
    /**
     * Static representation of the [[businessPartnerType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER_TYPE: EdmTypeField<BusinessPartner, "Edm.String", true, true>;
    /**
     * Static representation of the [[eTag]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const E_TAG: EdmTypeField<BusinessPartner, "Edm.String", true, true>;
    /**
     * Static representation of the [[groupBusinessPartnerName1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GROUP_BUSINESS_PARTNER_NAME_1: EdmTypeField<BusinessPartner, "Edm.String", true, true>;
    /**
     * Static representation of the [[groupBusinessPartnerName2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GROUP_BUSINESS_PARTNER_NAME_2: EdmTypeField<BusinessPartner, "Edm.String", true, true>;
    /**
     * Static representation of the [[independentAddressId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INDEPENDENT_ADDRESS_ID: EdmTypeField<BusinessPartner, "Edm.String", true, true>;
    /**
     * Static representation of the [[internationalLocationNumber3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INTERNATIONAL_LOCATION_NUMBER_3: EdmTypeField<BusinessPartner, "Edm.String", true, true>;
    /**
     * Static representation of the [[middleName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MIDDLE_NAME: EdmTypeField<BusinessPartner, "Edm.String", true, true>;
    /**
     * Static representation of the [[nameCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_COUNTRY: EdmTypeField<BusinessPartner, "Edm.String", true, true>;
    /**
     * Static representation of the [[nameFormat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_FORMAT: EdmTypeField<BusinessPartner, "Edm.String", true, true>;
    /**
     * Static representation of the [[personFullName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERSON_FULL_NAME: EdmTypeField<BusinessPartner, "Edm.String", true, true>;
    /**
     * Static representation of the [[personNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERSON_NUMBER: EdmTypeField<BusinessPartner, "Edm.String", true, true>;
    /**
     * Static representation of the [[isMarkedForArchiving]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_MARKED_FOR_ARCHIVING: EdmTypeField<BusinessPartner, "Edm.Boolean", true, true>;
    /**
     * Static representation of the [[businessPartnerIdByExtSystem]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER_ID_BY_EXT_SYSTEM: EdmTypeField<BusinessPartner, "Edm.String", true, true>;
    /**
     * Static representation of the [[businessPartnerPrintFormat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER_PRINT_FORMAT: EdmTypeField<BusinessPartner, "Edm.String", true, true>;
    /**
     * Static representation of the [[businessPartnerOccupation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER_OCCUPATION: EdmTypeField<BusinessPartner, "Edm.String", true, true>;
    /**
     * Static representation of the [[busPartMaritalStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUS_PART_MARITAL_STATUS: EdmTypeField<BusinessPartner, "Edm.String", true, true>;
    /**
     * Static representation of the [[busPartNationality]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUS_PART_NATIONALITY: EdmTypeField<BusinessPartner, "Edm.String", true, true>;
    /**
     * Static representation of the [[businessPartnerBirthName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER_BIRTH_NAME: EdmTypeField<BusinessPartner, "Edm.String", true, true>;
    /**
     * Static representation of the [[businessPartnerSupplementName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER_SUPPLEMENT_NAME: EdmTypeField<BusinessPartner, "Edm.String", true, true>;
    /**
     * Static representation of the [[naturalPersonEmployerName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NATURAL_PERSON_EMPLOYER_NAME: EdmTypeField<BusinessPartner, "Edm.String", true, true>;
    /**
     * Static representation of the [[lastNamePrefix]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_NAME_PREFIX: EdmTypeField<BusinessPartner, "Edm.String", true, true>;
    /**
     * Static representation of the [[lastNameSecondPrefix]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_NAME_SECOND_PREFIX: EdmTypeField<BusinessPartner, "Edm.String", true, true>;
    /**
     * Static representation of the [[initials]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INITIALS: EdmTypeField<BusinessPartner, "Edm.String", true, true>;
    /**
     * Static representation of the [[bpDataControllerIsNotRequired]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_DATA_CONTROLLER_IS_NOT_REQUIRED: EdmTypeField<BusinessPartner, "Edm.Boolean", true, true>;
    /**
     * Static representation of the [[tradingPartner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TRADING_PARTNER: EdmTypeField<BusinessPartner, "Edm.String", true, true>;
    /**
     * Static representation of the one-to-one navigation property [[toBpCreditWorthiness]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_BP_CREDIT_WORTHINESS: OneToOneLink<BusinessPartner, BpCreditWorthiness>;
    /**
     * Static representation of the one-to-many navigation property [[toBpDataController]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_BP_DATA_CONTROLLER: Link<BusinessPartner, BpDataController>;
    /**
     * Static representation of the one-to-one navigation property [[toBpFinServicesReporting]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_BP_FIN_SERVICES_REPORTING: OneToOneLink<BusinessPartner, BpFinancialServicesReporting>;
    /**
     * Static representation of the one-to-many navigation property [[toBpFiscalYearInformation]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_BP_FISCAL_YEAR_INFORMATION: Link<BusinessPartner, BpFiscalYearInformation>;
    /**
     * Static representation of the one-to-many navigation property [[toBpRelationship]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_BP_RELATIONSHIP: Link<BusinessPartner, BpRelationship>;
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
     * Static representation of the one-to-one navigation property [[toBusinessPartner]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_BUSINESS_PARTNER: OneToOneLink<BusinessPartner, BpFinancialServicesExtn>;
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
     * Static representation of the one-to-many navigation property [[toBusinessPartnerRating]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_BUSINESS_PARTNER_RATING: Link<BusinessPartner, BusinessPartnerRating>;
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
     * Static representation of the one-to-many navigation property [[toBusPartAddrDepdntTaxNmbr]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_BUS_PART_ADDR_DEPDNT_TAX_NMBR: Link<BusinessPartner, BusPartAddrDepdntTaxNmbr>;
    /**
     * Static representation of the one-to-one navigation property [[toCustomer]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_CUSTOMER: OneToOneLink<BusinessPartner, Customer>;
    /**
     * Static representation of the one-to-many navigation property [[toPaymentCard]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_PAYMENT_CARD: Link<BusinessPartner, BusinessPartnerPaymentCard>;
    /**
     * Static representation of the one-to-one navigation property [[toSupplier]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_SUPPLIER: OneToOneLink<BusinessPartner, Supplier>;
    /**
     * All fields of the BusinessPartner entity.
     */
    const _allFields: Array<EdmTypeField<BusinessPartner, 'Edm.String', false, true> | EdmTypeField<BusinessPartner, 'Edm.String', true, true> | EdmTypeField<BusinessPartner, 'Edm.Guid', true, true> | OrderableEdmTypeField<BusinessPartner, 'Edm.DateTime', true, true> | OrderableEdmTypeField<BusinessPartner, 'Edm.Time', true, true> | EdmTypeField<BusinessPartner, 'Edm.Boolean', true, true> | OneToOneLink<BusinessPartner, BpCreditWorthiness> | Link<BusinessPartner, BpDataController> | OneToOneLink<BusinessPartner, BpFinancialServicesReporting> | Link<BusinessPartner, BpFiscalYearInformation> | Link<BusinessPartner, BpRelationship> | Link<BusinessPartner, BuPaIdentification> | Link<BusinessPartner, BuPaIndustry> | OneToOneLink<BusinessPartner, BpFinancialServicesExtn> | Link<BusinessPartner, BusinessPartnerAddress> | Link<BusinessPartner, BusinessPartnerBank> | Link<BusinessPartner, BusinessPartnerContact> | Link<BusinessPartner, BusinessPartnerRating> | Link<BusinessPartner, BusinessPartnerRole> | Link<BusinessPartner, BusinessPartnerTaxNumber> | Link<BusinessPartner, BusPartAddrDepdntTaxNmbr> | OneToOneLink<BusinessPartner, Customer> | Link<BusinessPartner, BusinessPartnerPaymentCard> | OneToOneLink<BusinessPartner, Supplier>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<BusinessPartner>;
    /**
     * All key fields of the BusinessPartner entity.
     */
    const _keyFields: Array<Field<BusinessPartner, boolean, boolean>>;
    /**
     * Mapping of all key field names to the respective static field property BusinessPartner.
     */
    const _keys: {
        [keys: string]: Field<BusinessPartner, boolean, boolean>;
    };
}
//# sourceMappingURL=BusinessPartner.d.ts.map