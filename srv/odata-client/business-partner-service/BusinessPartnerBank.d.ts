import { BusinessPartnerBankRequestBuilder } from './BusinessPartnerBankRequestBuilder';
import { Moment } from 'moment';
import { AllFields, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Field, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "A_BusinessPartnerBank" of service "API_BUSINESS_PARTNER".
 */
export declare class BusinessPartnerBank extends Entity implements BusinessPartnerBankType {
    /**
     * Technical entity name for BusinessPartnerBank.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for BusinessPartnerBank.
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
     * Bank details ID.
     * Key identifying a business partner's bank details.
     * Enter a bank details ID for each separate set of bank details for a business partner.Business Partner: H. MillerBD-ID Fin.institution   Acct no. 0001 Chemical Bank, NYC 56234560002 Chemical Bank, NYC 56231220003 First Bank of Pittsburgh ...Business partner: T.Wolsey and Co.BD-ID Fin.institution   Acct no.GIR0 Citibank, Charleston ...GIR1 Chemical Bank, NYC ...
     * Maximum length: 4.
     */
    bankIdentification: string;
    /**
     * Bank Country Key.
     * Identifies the country in which the bank is based.
     * The country key determines according to which rules the remaining bank data (for example, bank number and bank account number) is checked.
     * Maximum length: 3.
     * @nullable
     */
    bankCountryKey?: string;
    /**
     * Bank Name.
     * The name under which the bank operates.
     * Maximum length: 60.
     * @nullable
     */
    bankName?: string;
    /**
     * Bank Key.
     * The bank key (under which the bank data is stored in the appropriate country) is specified in this field.
     * The country-specific meaning of this bank key is specified when defining country key.Normally banks have a bank number, which then also appears in the control data of the bank.In certain countries the bank account number assumes this function; in such a case there would be no bank numbers, the bank details are then under the account number.For data medium exchange it can be useful to be able create banks for foreign business partners without a bank number, even if the country in question has bank numbers. In such cases the bank key can be assigned internally.If the bank data is under another key, such as the SWIFT code for example, numbers can also be assigned externally.
     * Maximum length: 15.
     * @nullable
     */
    bankNumber?: string;
    /**
     * SWIFT/BIC for International Payments.
     * Uniquely identifies a bank throughout the world.
     * SWIFT stands for Society for Worldwide Interbank Financial Telecommunication.BIC stands for Bank Identifier Code.This globally unique code can be used in international payment transactions to identify the bank without the need to specify an address or bank number. Specification of the SWIFT code/BIC is mainly relevant for automatic payment transactions.
     * Maximum length: 11.
     * @nullable
     */
    swiftCode?: string;
    /**
     * Bank Control Key.
     * Brazil, France, Spain, Portugal and Italy
     * The field contains a check key for the combination bank number and bank account number.USAIn USA this field is used to differentiate between a savings and a current account (if no value is entered, the default value 01 is used).01 Current account02 Savings account03 Loan account04 General ledgerJapanIn Japan this field specifies the type of account. This information is is copied from the payment medium print program into payment medium. The following is an example of the account types used:01 FUTSU (similar to a savings account)02 TOUZA (similar to a current account)04 CHOCHIKU (similar to an investment account)09 Other types of bank accountsSouth AfricaIn South Africa this field specifies the type of account. The information entered here is forwarded to the bank that carries out the payment order. The following account types are permitted in ABC format:01 Current (Cheque) Account02 Savings Account03 Transmission Account04 Bond Account06 Subscription Share AccountArgentinaIn Argentina this field specifies the type of account:CC Current Account (Cuenta corriente)CA Saving Account (Caja de ahorro)CE Special Saving Account (Caja de ahorro especial)CS Salary Account (Cuenta sueldos)VenezuelaIn Venezuela this field specifies the type of account:CC Checking Account (Cuenta corriente)CA Saving Account (Cuenta de ahorro)CE Special Saving Account (Cuenta de ahorro especial)CS Salary Account (Cuenta sueldos)MexicoIn Mexico this field contains a two-digit key for classifying the bank account (for example, as a savings or current account). This key have different definitions, depending on the bank.NoteFor countries that are not listed here, this field can be used for account-specific information.
     * Maximum length: 2.
     * @nullable
     */
    bankControlKey?: string;
    /**
     * Account Holder Name.
     * Here you can enter another name that the payment program can use if the name of the account holder is not the same as the name of the Business Partner.
     * Maximum length: 60.
     * @nullable
     */
    bankAccountHolderName?: string;
    /**
     * Name of Bank Account.
     * Maximum length: 40.
     * @nullable
     */
    bankAccountName?: string;
    /**
     * Validity Start of Business Partner Bank Details.
     * @nullable
     */
    validityStartDate?: Moment;
    /**
     * Validity End of Business Partner Bank Details.
     * @nullable
     */
    validityEndDate?: Moment;
    /**
     * IBAN (International Bank Account Number).
     * A uniform standardized ID number for representing bank details that is in accordance with the ECBS (European Committee for Banking Standards). An IBAN has a maximum of 34 alphanumeric characters and is a combination of the following elements:
     * Country key of the bank (ISO code)Two-digit check numberCountry-specific account number (in Germany this consists of the bank number and account number, in France the bank number, account number and check key).The IBAN not only makes international payments easier, in some countries it has advantages for domestic payments as well. Depending on the country, it can mean advantages for value and fees.The IBAN can be maintained in parallel with the bank details but does not replace them. It is stored under the master data of the business partner and can then be used when creating the payment medium.Since it is only the bank that has the account that may generate the IBAN corresponding to an account number, the SAP system only generates a proposal. You can confirm or change this proposal. If no proposal is generated, enter the IBAN manually.An IBAN in Belgium may look like this:Electronic Form:BE62510007547061Printed form, as it would appear on an invoice:IBAN BE62 5100 0754 7061.
     * Maximum length: 34.
     * @nullable
     */
    iban?: string;
    /**
     * Validity start of IBAN.
     * @nullable
     */
    ibanValidityStartDate?: Moment;
    /**
     * Bank Account Number.
     * This field contains the number under which the account is managed at the bank.
     * Maximum length: 18.
     * @nullable
     */
    bankAccount?: string;
    /**
     * Reference Details for Bank Details.
     * Additional details for the bank details of the business partner.
     * In some countries the data for the bank details of the business partner (bank number, bank account number, name of the account holder) have to supplemented by other details in order to be able to use certain payment processes. This supplementary details are defined here.If additional data is required for the bank details for payment transactions in your country (see the following examples), enter the reference information.If for an automatic debit the bank requires the reference number of the collection authorization in Norway or Great Britain, specify this number here.In Great Britain when making payments to an account in a 'Building Society' you must specify which number payment recipient has. These details must be defined in the reference field, whereas the fields Bank Key and Account Number are to be used for the bank details of the 'Building Society'.In Great Britain when entering a building society account number, the name of the building society should also be maintained in the system.
     * Maximum length: 20.
     * @nullable
     */
    bankAccountReferenceText?: string;
    /**
     * Indicator: Collection Authorization.
     * States that the bank has collection authorization from the business partner for the account.
     * Set this indicator if the bank has collection authorization.Note for Accounts Receivable (FI-AR)If this indicator is not set, there is no bank collection.Note for Contract Accounts Receivable and Payable (FI-CA)This indicator is not relevant.
     * @nullable
     */
    collectionAuthInd?: boolean;
    /**
     * City.
     * Name of the city as a part of the address.
     * Maximum length: 35.
     * @nullable
     */
    cityName?: string;
    /**
     * Authorization Group.
     * You can use authorization groups to stipulate which business partners a user is allowed to process.
     * Use the following authorization object:'Business partners: authorization groups' (B_BUPA_GRP).The system only checks this authorization if you made an entry in the "Authorization group" field for the business partner. Otherwise, any user may process the business partner.
     * Maximum length: 4.
     * @nullable
     */
    authorizationGroup?: string;
    /**
     * Returns an entity builder to construct instances `BusinessPartnerBank`.
     * @returns A builder that constructs instances of entity type `BusinessPartnerBank`.
     */
    static builder(): EntityBuilderType<BusinessPartnerBank, BusinessPartnerBankTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `BusinessPartnerBank` entity type.
     * @returns A `BusinessPartnerBank` request builder.
     */
    static requestBuilder(): BusinessPartnerBankRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `BusinessPartnerBank`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `BusinessPartnerBank`.
     */
    static customField(fieldName: string): CustomField<BusinessPartnerBank>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface BusinessPartnerBankType {
    businessPartner: string;
    bankIdentification: string;
    bankCountryKey?: string;
    bankName?: string;
    bankNumber?: string;
    swiftCode?: string;
    bankControlKey?: string;
    bankAccountHolderName?: string;
    bankAccountName?: string;
    validityStartDate?: Moment;
    validityEndDate?: Moment;
    iban?: string;
    ibanValidityStartDate?: Moment;
    bankAccount?: string;
    bankAccountReferenceText?: string;
    collectionAuthInd?: boolean;
    cityName?: string;
    authorizationGroup?: string;
}
export interface BusinessPartnerBankTypeForceMandatory {
    businessPartner: string;
    bankIdentification: string;
    bankCountryKey: string;
    bankName: string;
    bankNumber: string;
    swiftCode: string;
    bankControlKey: string;
    bankAccountHolderName: string;
    bankAccountName: string;
    validityStartDate: Moment;
    validityEndDate: Moment;
    iban: string;
    ibanValidityStartDate: Moment;
    bankAccount: string;
    bankAccountReferenceText: string;
    collectionAuthInd: boolean;
    cityName: string;
    authorizationGroup: string;
}
export declare namespace BusinessPartnerBank {
    /**
     * Static representation of the [[businessPartner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER: StringField<BusinessPartnerBank>;
    /**
     * Static representation of the [[bankIdentification]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BANK_IDENTIFICATION: StringField<BusinessPartnerBank>;
    /**
     * Static representation of the [[bankCountryKey]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BANK_COUNTRY_KEY: StringField<BusinessPartnerBank>;
    /**
     * Static representation of the [[bankName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BANK_NAME: StringField<BusinessPartnerBank>;
    /**
     * Static representation of the [[bankNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BANK_NUMBER: StringField<BusinessPartnerBank>;
    /**
     * Static representation of the [[swiftCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SWIFT_CODE: StringField<BusinessPartnerBank>;
    /**
     * Static representation of the [[bankControlKey]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BANK_CONTROL_KEY: StringField<BusinessPartnerBank>;
    /**
     * Static representation of the [[bankAccountHolderName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BANK_ACCOUNT_HOLDER_NAME: StringField<BusinessPartnerBank>;
    /**
     * Static representation of the [[bankAccountName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BANK_ACCOUNT_NAME: StringField<BusinessPartnerBank>;
    /**
     * Static representation of the [[validityStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VALIDITY_START_DATE: DateField<BusinessPartnerBank>;
    /**
     * Static representation of the [[validityEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VALIDITY_END_DATE: DateField<BusinessPartnerBank>;
    /**
     * Static representation of the [[iban]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IBAN: StringField<BusinessPartnerBank>;
    /**
     * Static representation of the [[ibanValidityStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IBAN_VALIDITY_START_DATE: DateField<BusinessPartnerBank>;
    /**
     * Static representation of the [[bankAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BANK_ACCOUNT: StringField<BusinessPartnerBank>;
    /**
     * Static representation of the [[bankAccountReferenceText]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BANK_ACCOUNT_REFERENCE_TEXT: StringField<BusinessPartnerBank>;
    /**
     * Static representation of the [[collectionAuthInd]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COLLECTION_AUTH_IND: BooleanField<BusinessPartnerBank>;
    /**
     * Static representation of the [[cityName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CITY_NAME: StringField<BusinessPartnerBank>;
    /**
     * Static representation of the [[authorizationGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AUTHORIZATION_GROUP: StringField<BusinessPartnerBank>;
    /**
     * All fields of the BusinessPartnerBank entity.
     */
    const _allFields: Array<StringField<BusinessPartnerBank> | DateField<BusinessPartnerBank> | BooleanField<BusinessPartnerBank>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<BusinessPartnerBank>;
    /**
     * All key fields of the BusinessPartnerBank entity.
     */
    const _keyFields: Array<Field<BusinessPartnerBank>>;
    /**
     * Mapping of all key field names to the respective static field property BusinessPartnerBank.
     */
    const _keys: {
        [keys: string]: Field<BusinessPartnerBank>;
    };
}
//# sourceMappingURL=BusinessPartnerBank.d.ts.map