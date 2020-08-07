import { CustomerRequestBuilder } from './CustomerRequestBuilder';
import { Moment } from 'moment';
import { AllFields, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Field, Link, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "A_Customer" of service "API_BUSINESS_PARTNER".
 */
export declare class Customer extends Entity implements CustomerType {
    /**
     * Technical entity name for Customer.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Customer.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Customer Number.
     * Gives an alphanumeric key, which clearly identifies the customer or vendor in the SAP system.
     * Maximum length: 10.
     */
    customer: string;
    /**
     * Authorization Group.
     * The authorization group allows extended authorization protection for particular objects. The authorization groups are freely definable. The authorization groups usually occur in authorization objects together with an activity.
     * Maximum length: 4.
     * @nullable
     */
    authorizationGroup?: string;
    /**
     * Central Billing Block for Customer.
     * Indicates if the processing of billing documents is blocked for the customer in all sales areas (company-wide, for example).
     * You can define different kinds of block, according to the needs of your organization. You can, for example, automatically block the processing of all credit memos to a certain customer, pending manual approval.
     * Maximum length: 2.
     * @nullable
     */
    billingIsBlockedForCustomer?: string;
    /**
     * Name of Person who Created the Object.
     * Name with which the user who entered the master record was logged on in the R/3 System.
     * Maximum length: 12.
     * @nullable
     */
    createdByUser?: string;
    /**
     * Date on which the Record Was Created.
     * Date on which the master record, or the part of the master record being viewed, was created.
     * @nullable
     */
    creationDate?: Moment;
    /**
     * Customer Account Group.
     * The account group is a classifying feature within customer master records. The account group determines:
     * in which number range the customer account number should be;whether the number is assigned by the user or by the system;which specifications are necessary or possible in the master record.
     * Maximum length: 4.
     * @nullable
     */
    customerAccountGroup?: string;
    /**
     * Customer Classification.
     * Specifies a classification of the customer (for example, classifies the customer as a bulk purchaser).
     * The classifications are freely definable according to the needs of your organization.
     * Maximum length: 2.
     * @nullable
     */
    customerClassification?: string;
    /**
     * Customer Full Name.
     * Maximum length: 220.
     * @nullable
     */
    customerFullName?: string;
    /**
     * Name of Customer.
     * Maximum length: 80.
     * @nullable
     */
    customerName?: string;
    /**
     * Central delivery block for the customer.
     * Indicates if delivery processing is blocked for the customer in all sales areas (company-wide, for example).
     * You can define different kinds of block, according to the needs of your organization. You can, for example, automatically block all deliveries to a certain customer for credit reasons.
     * Maximum length: 2.
     * @nullable
     */
    deliveryIsBlocked?: string;
    /**
     * Natural Person.
     * Denotes a natural person.
     * In the following countries, the system needs to know whether the taxpayer is a legal or natural person so that it can check the tax numbers correctly:BrazilBulgariaColombiaCroatiaGreeceItalyMexicoPeruSloveniaThailandUkraineThe flag is also used in conjunction with the Statement of Payments to Natural Persons report, as used in the Czech Republic and in Slovakia. This report only covers customers and vendors for whom you have set this indicator.In South Korea, it is used in conjunction with the Generic Withholding Tax Reporting program.
     * Maximum length: 1.
     * @nullable
     */
    nfPartnerIsNaturalPerson?: string;
    /**
     * Central Order Block for Customer.
     * Indicates if sales order processing is blocked for the customer in all sales areas (company-wide, for example).
     * If you block sales order processing, the block counts for the following partner functions of the customer:Sold-to partyShip-to partyPayerIf you want to process an order where the ship-to party differs from the sold-to party, and the ship-to party is blocked, you cannot process the order.You can define different kinds of block, according to the needs of your organization. You can, for example, automatically block all free of charge deliveries and credit memo requests for a certain customer, pending manual approval before further processing can take place.
     * Maximum length: 2.
     * @nullable
     */
    orderIsBlockedForCustomer?: string;
    /**
     * Central Posting Block.
     * Indicates that the account is blocked for posting for all company codes.
     * If you set this indicator, the system prevents users from posting items to this account and issues an error message to inform them that the account is blocked.
     * @nullable
     */
    postingIsBlocked?: boolean;
    /**
     * Account Number of Supplier.
     * Specifies an alphanumeric key that uniquely identifies the supplier in the SAP system.
     * Maximum length: 10.
     * @nullable
     */
    supplier?: string;
    /**
     * Group Key.
     * If the customer or the vendor belongs to a group, you can enter a group key here. The group key is freely assignable.
     * If you create a matchcode using this group key, group evaluations are possible.
     * Maximum length: 10.
     * @nullable
     */
    customerCorporateGroup?: string;
    /**
     * Account number of the master record with the fiscal address.
     * Account number of another master record in which the official address is stored. This address is used, for example, for tax reports to the tax authorities in Italy.
     * Maximum length: 10.
     * @nullable
     */
    fiscalAddress?: string;
    /**
     * Industry key.
     * An industry is a distinct group of companies with the same basic business activity. The industry key is used in selecting data for evaluations (for example, a vendor master data list). You can specify industries such as trade, banking, service, manufacturing, health care, public service, media and so on.
     * The industry field belongs to the general data area of customer and vendor master records.
     * Maximum length: 4.
     * @nullable
     */
    industry?: string;
    /**
     * Industry Code 1.
     * Specifies the code that uniquely identifies the industry (or industries) of the customer.
     * Depending on the standards your organization uses (for example, Standard Industry Codes (SIC)), enter the appropriate code. You can assign more than one industry code to a customer by choosing Create more.
     * Maximum length: 10.
     * @nullable
     */
    industryCode1?: string;
    /**
     * Industry Code 2.
     * Specifies an additional code that identifies the industry (or industries) of the customer.
     * Depending on the standards your organization uses (for example, Standard Industry Codes (SIC)), enter the appropriate code.
     * Maximum length: 10.
     * @nullable
     */
    industryCode2?: string;
    /**
     * Industry Code 3.
     * Specifies an additional code that identifies the industry (or industries) of the customer.
     * Depending on the standards your organization uses (for example, Standard Industry Codes (SIC)), enter the appropriate code.
     * Maximum length: 10.
     * @nullable
     */
    industryCode3?: string;
    /**
     * Industry Code 4.
     * Specifies an additional code that identifies the industry (or industries) of the customer.
     * Depending on the standards your organization uses (for example, Standard Industry Codes (SIC)), enter the appropriate code.
     * Maximum length: 10.
     * @nullable
     */
    industryCode4?: string;
    /**
     * Industry Code 5.
     * Specifies an additional code that identifies the industry (or industries) of the customer.
     * Depending on the standards your organization uses (for example, Standard Industry Codes (SIC)), enter the appropriate code.
     * Maximum length: 10.
     * @nullable
     */
    industryCode5?: string;
    /**
     * International location number  (part 1).
     * Here you enter the first 7 digits of the international location number.
     * The International Location Number (ILN) is assigned (in Germany by the Centrale for Coorganisation GmbH)) when a company is founded. It consists of 13 digits, the last digit being the check digit. There are two categories of location numbers:Participants who only need an ILN to cleary and unmistakably identify themselves for communication with the business partner are given a category 1 ILN. This cannot be used to identify articles by means of EAN.Participants who wish to assign the location numbers for their own enterprise areas are given a category 2 ILN. For a category 2 ILN, digits 1 to 7 are described as basis number. This is used as basis for the creation of article numbers (EAN).
     * Maximum length: 7.
     * @nullable
     */
    internationalLocationNumber1?: string;
    /**
     * Nielsen ID.
     * Specifies a regional division according to the market categories created by the A. C. Nielsen company.
     * By allocating a Nielsen division, you can use the services of the Nielsen Institute to create a market analysis of your customers.
     * Maximum length: 2.
     * @nullable
     */
    nielsenRegion?: string;
    /**
     * Tax type.
     * Classification of companies according to tax aspects.
     * Maximum length: 2.
     * @nullable
     */
    responsibleType?: string;
    /**
     * Tax Number 1.
     * Specifies the tax number.
     * Enter the appropriate tax number:Country/Region Tax NumberArgentina  CUIT number or CUIL numberBelgium Enterprise numberBrazil  CNPJ numberBulgaria Unified identification codeChile RUT numberChina VAT registration number (shui wu deng ji hao)Colombia NIT numberCroatia Legal persons: company identification numberNatural persons: JMBG numberCzech Republic  DIC numberFrance SIRET numberGreece Personal IDHungary  Tax numberItaly Fiscal codeKazakhstan RNN (obsolete)Mexico RFC numberNetherlands SI registration number (Aansluitnummer UWV) of chain- liability vendorNorway VAT numberPeru RUC numberPhilippines Taxpayer identification number (see below)Poland NIP numberPortugal  NIF numberRomania Tax numberRussia INNSlovakia  DIC numberSlovenia Tax numberSouth Korea Natural persons: Personal identification numberLegal persons: Corporation IDSpain NIF numberSwitzerland  UID numberTaiwan GUI registration numberThailand Personal IDTurkey Name of business partner's tax officeUkraine Taxpayer identification numberUnited Kingdom Company registration numberUnited States Social security numberVenezuela  RIF numberIn the Philippines, enter the taxpayer identification number with a V or N at the end, as follows:If the business partner is liable to VAT: 999-999-999-999VIf the business partner is not liable to VAT: 999-999-999-999N.
     * Maximum length: 16.
     * @nullable
     */
    taxNumber1?: string;
    /**
     * Tax Number 2.
     * Specifies the tax number.
     * Enter the appropriate tax number:Country/Region Tax NumberArgentina NIP number or CM numberBelgium VAT numberBrazil  CPF numberBulgaria Legal persons: tax numberNatural persons: personal IDCroatia OIB number Czech Republic  ICO numberFrance SIREN numberGreece AFM numberIndia TINItaly  VAT numberKazakhstan BC (Beneficiary Code)Netherlands BSN numberRussia OKPO codeSlovakia  ICO numberSouth Korea VAT registration numberSweden Organization registration numberSwitzerland VAT numberTaiwan Tax registration numberUkraine Legal persons: USREOU numberNatural persons: SRNP numberTurkey Tax numberUnited Kingdom NI numberUnited States Employer identification numberVenezuela NIT number.
     * Maximum length: 11.
     * @nullable
     */
    taxNumber2?: string;
    /**
     * Tax Number 3.
     * Specifies the tax number.
     * Enter the tax number that applies:Country Tax numberArgentina Withholding agent numberBrazil State tax numberBulgaria Social security numberMexico CURP numberKazakhstan BINNetherlands Tax registration number (Loonbelastingnummer) of the chain-liability vendorRussia KPP numberThailand Tax ID     Ukraine VAT registration number.
     * Maximum length: 18.
     * @nullable
     */
    taxNumber3?: string;
    /**
     * Tax Number 4.
     * Specifies the tax number.
     * Enter the appropriate tax number:Country Tax NumberBrazil Municipal tax numberKazakhstan IINRussia OFK number (for public bodies only).
     * Maximum length: 18.
     * @nullable
     */
    taxNumber4?: string;
    /**
     * Tax Number 5.
     * Kazakhstan
     * Specifies the certificate of registration as VAT payer in the following format: XXXXXYYYYYYYZZZZZZZZ, where: XXXXX is the certificate serial number, YYYYYYY is the certificate number and ZZZZZZZZ is the date of certificate issue.
     * Maximum length: 60.
     * @nullable
     */
    taxNumber5?: string;
    /**
     * Tax Number Type.
     * Taxes in Argentina:
     * The format and the check of tax number 1 depend on the two-digit tax number type.The tax number type is an identification type for tax in Argentina (for example, 80 for CUIT) and is used for the DGI tax report.
     * Maximum length: 2.
     * @nullable
     */
    taxNumberType?: string;
    /**
     * VAT Registration Number.
     * VAT registration number (VAT reg.no.) of the customer, vendor or your company code.
     * The VAT registration number is used within the EU for tax-exempt deliveries for the "EC sales list". The check rules are defined for each EU country and cannot be changed.
     * Maximum length: 20.
     * @nullable
     */
    vatRegistration?: string;
    /**
     * Central Deletion Flag for Master Record.
     * Indicates that all data in this master record is to be deleted.
     * To delete this data, you have to run the archiving program for Accounts Receivable or Payable. This program will archive all master records marked for deletion provided that there is no dependent data in them.Deletion flags can also be used in the program for deleting master data. You should, however, run this program only to delete test data prior to production startup.
     * @nullable
     */
    deletionIndicator?: boolean;
    /**
     * One-to-many navigation property to the [[CustomerCompany]] entity.
     */
    toCustomerCompany: CustomerCompany[];
    /**
     * One-to-many navigation property to the [[CustomerSalesArea]] entity.
     */
    toCustomerSalesArea: CustomerSalesArea[];
    /**
     * One-to-many navigation property to the [[CustomerTaxGrouping]] entity.
     */
    toCustomerTaxGrouping: CustomerTaxGrouping[];
    /**
     * One-to-many navigation property to the [[CustomerText]] entity.
     */
    toCustomerText: CustomerText[];
    /**
     * Returns an entity builder to construct instances `Customer`.
     * @returns A builder that constructs instances of entity type `Customer`.
     */
    static builder(): EntityBuilderType<Customer, CustomerTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `Customer` entity type.
     * @returns A `Customer` request builder.
     */
    static requestBuilder(): CustomerRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Customer`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Customer`.
     */
    static customField(fieldName: string): CustomField<Customer>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { CustomerCompany, CustomerCompanyType } from './CustomerCompany';
import { CustomerSalesArea, CustomerSalesAreaType } from './CustomerSalesArea';
import { CustomerTaxGrouping, CustomerTaxGroupingType } from './CustomerTaxGrouping';
import { CustomerText, CustomerTextType } from './CustomerText';
export interface CustomerType {
    customer: string;
    authorizationGroup?: string;
    billingIsBlockedForCustomer?: string;
    createdByUser?: string;
    creationDate?: Moment;
    customerAccountGroup?: string;
    customerClassification?: string;
    customerFullName?: string;
    customerName?: string;
    deliveryIsBlocked?: string;
    nfPartnerIsNaturalPerson?: string;
    orderIsBlockedForCustomer?: string;
    postingIsBlocked?: boolean;
    supplier?: string;
    customerCorporateGroup?: string;
    fiscalAddress?: string;
    industry?: string;
    industryCode1?: string;
    industryCode2?: string;
    industryCode3?: string;
    industryCode4?: string;
    industryCode5?: string;
    internationalLocationNumber1?: string;
    nielsenRegion?: string;
    responsibleType?: string;
    taxNumber1?: string;
    taxNumber2?: string;
    taxNumber3?: string;
    taxNumber4?: string;
    taxNumber5?: string;
    taxNumberType?: string;
    vatRegistration?: string;
    deletionIndicator?: boolean;
    toCustomerCompany: CustomerCompanyType[];
    toCustomerSalesArea: CustomerSalesAreaType[];
    toCustomerTaxGrouping: CustomerTaxGroupingType[];
    toCustomerText: CustomerTextType[];
}
export interface CustomerTypeForceMandatory {
    customer: string;
    authorizationGroup: string;
    billingIsBlockedForCustomer: string;
    createdByUser: string;
    creationDate: Moment;
    customerAccountGroup: string;
    customerClassification: string;
    customerFullName: string;
    customerName: string;
    deliveryIsBlocked: string;
    nfPartnerIsNaturalPerson: string;
    orderIsBlockedForCustomer: string;
    postingIsBlocked: boolean;
    supplier: string;
    customerCorporateGroup: string;
    fiscalAddress: string;
    industry: string;
    industryCode1: string;
    industryCode2: string;
    industryCode3: string;
    industryCode4: string;
    industryCode5: string;
    internationalLocationNumber1: string;
    nielsenRegion: string;
    responsibleType: string;
    taxNumber1: string;
    taxNumber2: string;
    taxNumber3: string;
    taxNumber4: string;
    taxNumber5: string;
    taxNumberType: string;
    vatRegistration: string;
    deletionIndicator: boolean;
    toCustomerCompany: CustomerCompanyType[];
    toCustomerSalesArea: CustomerSalesAreaType[];
    toCustomerTaxGrouping: CustomerTaxGroupingType[];
    toCustomerText: CustomerTextType[];
}
export declare namespace Customer {
    /**
     * Static representation of the [[customer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER: StringField<Customer>;
    /**
     * Static representation of the [[authorizationGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AUTHORIZATION_GROUP: StringField<Customer>;
    /**
     * Static representation of the [[billingIsBlockedForCustomer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BILLING_IS_BLOCKED_FOR_CUSTOMER: StringField<Customer>;
    /**
     * Static representation of the [[createdByUser]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_USER: StringField<Customer>;
    /**
     * Static representation of the [[creationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATION_DATE: DateField<Customer>;
    /**
     * Static representation of the [[customerAccountGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER_ACCOUNT_GROUP: StringField<Customer>;
    /**
     * Static representation of the [[customerClassification]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER_CLASSIFICATION: StringField<Customer>;
    /**
     * Static representation of the [[customerFullName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER_FULL_NAME: StringField<Customer>;
    /**
     * Static representation of the [[customerName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER_NAME: StringField<Customer>;
    /**
     * Static representation of the [[deliveryIsBlocked]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DELIVERY_IS_BLOCKED: StringField<Customer>;
    /**
     * Static representation of the [[nfPartnerIsNaturalPerson]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NF_PARTNER_IS_NATURAL_PERSON: StringField<Customer>;
    /**
     * Static representation of the [[orderIsBlockedForCustomer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ORDER_IS_BLOCKED_FOR_CUSTOMER: StringField<Customer>;
    /**
     * Static representation of the [[postingIsBlocked]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const POSTING_IS_BLOCKED: BooleanField<Customer>;
    /**
     * Static representation of the [[supplier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUPPLIER: StringField<Customer>;
    /**
     * Static representation of the [[customerCorporateGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER_CORPORATE_GROUP: StringField<Customer>;
    /**
     * Static representation of the [[fiscalAddress]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FISCAL_ADDRESS: StringField<Customer>;
    /**
     * Static representation of the [[industry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INDUSTRY: StringField<Customer>;
    /**
     * Static representation of the [[industryCode1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INDUSTRY_CODE_1: StringField<Customer>;
    /**
     * Static representation of the [[industryCode2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INDUSTRY_CODE_2: StringField<Customer>;
    /**
     * Static representation of the [[industryCode3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INDUSTRY_CODE_3: StringField<Customer>;
    /**
     * Static representation of the [[industryCode4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INDUSTRY_CODE_4: StringField<Customer>;
    /**
     * Static representation of the [[industryCode5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INDUSTRY_CODE_5: StringField<Customer>;
    /**
     * Static representation of the [[internationalLocationNumber1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INTERNATIONAL_LOCATION_NUMBER_1: StringField<Customer>;
    /**
     * Static representation of the [[nielsenRegion]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NIELSEN_REGION: StringField<Customer>;
    /**
     * Static representation of the [[responsibleType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RESPONSIBLE_TYPE: StringField<Customer>;
    /**
     * Static representation of the [[taxNumber1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TAX_NUMBER_1: StringField<Customer>;
    /**
     * Static representation of the [[taxNumber2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TAX_NUMBER_2: StringField<Customer>;
    /**
     * Static representation of the [[taxNumber3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TAX_NUMBER_3: StringField<Customer>;
    /**
     * Static representation of the [[taxNumber4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TAX_NUMBER_4: StringField<Customer>;
    /**
     * Static representation of the [[taxNumber5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TAX_NUMBER_5: StringField<Customer>;
    /**
     * Static representation of the [[taxNumberType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TAX_NUMBER_TYPE: StringField<Customer>;
    /**
     * Static representation of the [[vatRegistration]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VAT_REGISTRATION: StringField<Customer>;
    /**
     * Static representation of the [[deletionIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DELETION_INDICATOR: BooleanField<Customer>;
    /**
     * Static representation of the one-to-many navigation property [[toCustomerCompany]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_CUSTOMER_COMPANY: Link<Customer, CustomerCompany>;
    /**
     * Static representation of the one-to-many navigation property [[toCustomerSalesArea]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_CUSTOMER_SALES_AREA: Link<Customer, CustomerSalesArea>;
    /**
     * Static representation of the one-to-many navigation property [[toCustomerTaxGrouping]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_CUSTOMER_TAX_GROUPING: Link<Customer, CustomerTaxGrouping>;
    /**
     * Static representation of the one-to-many navigation property [[toCustomerText]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_CUSTOMER_TEXT: Link<Customer, CustomerText>;
    /**
     * All fields of the Customer entity.
     */
    const _allFields: Array<StringField<Customer> | DateField<Customer> | BooleanField<Customer> | Link<Customer, CustomerCompany> | Link<Customer, CustomerSalesArea> | Link<Customer, CustomerTaxGrouping> | Link<Customer, CustomerText>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<Customer>;
    /**
     * All key fields of the Customer entity.
     */
    const _keyFields: Array<Field<Customer>>;
    /**
     * Mapping of all key field names to the respective static field property Customer.
     */
    const _keys: {
        [keys: string]: Field<Customer>;
    };
}
//# sourceMappingURL=Customer.d.ts.map