import { BusinessPartnerBankRequestBuilder } from './BusinessPartnerBankRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field, OrderableEdmTypeField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "A_BusinessPartnerBank" of service "API_BUSINESS_PARTNER".
 */
export declare class BusinessPartnerBank extends EntityV2 implements BusinessPartnerBankType {
    /**
     * Technical entity name for BusinessPartnerBank.
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
     * Bank Details ID.
     * Maximum length: 4.
     */
    bankIdentification: string;
    /**
     * Bank Country/Region Key.
     * Maximum length: 3.
     * @nullable
     */
    bankCountryKey?: string;
    /**
     * Name of Financial Institution.
     * Maximum length: 60.
     * @nullable
     */
    bankName?: string;
    /**
     * Bank Key.
     * Maximum length: 15.
     * @nullable
     */
    bankNumber?: string;
    /**
     * SWIFT/BIC for International Payments.
     * Maximum length: 11.
     * @nullable
     */
    swiftCode?: string;
    /**
     * Bank Control Key.
     * Maximum length: 2.
     * @nullable
     */
    bankControlKey?: string;
    /**
     * Account Holder Name.
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
     * Maximum length: 34.
     * @nullable
     */
    iban?: string;
    /**
     * Validity Start of IBAN.
     * @nullable
     */
    ibanValidityStartDate?: Moment;
    /**
     * Bank Account Number.
     * Maximum length: 18.
     * @nullable
     */
    bankAccount?: string;
    /**
     * Reference Details for Bank Details.
     * Maximum length: 20.
     * @nullable
     */
    bankAccountReferenceText?: string;
    /**
     * Indicator: Collection Authorization.
     * @nullable
     */
    collectionAuthInd?: boolean;
    /**
     * City.
     * Maximum length: 35.
     * @nullable
     */
    cityName?: string;
    /**
     * Authorization Group.
     * Maximum length: 4.
     * @nullable
     */
    authorizationGroup?: string;
    /**
     * Returns an entity builder to construct instances of `BusinessPartnerBank`.
     * @returns A builder that constructs instances of entity type `BusinessPartnerBank`.
     */
    static builder(): EntityBuilderType<BusinessPartnerBank, BusinessPartnerBankType>;
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
    static customField(fieldName: string): CustomFieldV2<BusinessPartnerBank>;
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
    bankCountryKey?: string | null;
    bankName?: string | null;
    bankNumber?: string | null;
    swiftCode?: string | null;
    bankControlKey?: string | null;
    bankAccountHolderName?: string | null;
    bankAccountName?: string | null;
    validityStartDate?: Moment | null;
    validityEndDate?: Moment | null;
    iban?: string | null;
    ibanValidityStartDate?: Moment | null;
    bankAccount?: string | null;
    bankAccountReferenceText?: string | null;
    collectionAuthInd?: boolean | null;
    cityName?: string | null;
    authorizationGroup?: string | null;
}
export declare namespace BusinessPartnerBank {
    /**
     * Static representation of the [[businessPartner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER: EdmTypeField<BusinessPartnerBank, "Edm.String", false, true>;
    /**
     * Static representation of the [[bankIdentification]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BANK_IDENTIFICATION: EdmTypeField<BusinessPartnerBank, "Edm.String", false, true>;
    /**
     * Static representation of the [[bankCountryKey]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BANK_COUNTRY_KEY: EdmTypeField<BusinessPartnerBank, "Edm.String", true, true>;
    /**
     * Static representation of the [[bankName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BANK_NAME: EdmTypeField<BusinessPartnerBank, "Edm.String", true, true>;
    /**
     * Static representation of the [[bankNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BANK_NUMBER: EdmTypeField<BusinessPartnerBank, "Edm.String", true, true>;
    /**
     * Static representation of the [[swiftCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SWIFT_CODE: EdmTypeField<BusinessPartnerBank, "Edm.String", true, true>;
    /**
     * Static representation of the [[bankControlKey]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BANK_CONTROL_KEY: EdmTypeField<BusinessPartnerBank, "Edm.String", true, true>;
    /**
     * Static representation of the [[bankAccountHolderName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BANK_ACCOUNT_HOLDER_NAME: EdmTypeField<BusinessPartnerBank, "Edm.String", true, true>;
    /**
     * Static representation of the [[bankAccountName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BANK_ACCOUNT_NAME: EdmTypeField<BusinessPartnerBank, "Edm.String", true, true>;
    /**
     * Static representation of the [[validityStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VALIDITY_START_DATE: OrderableEdmTypeField<BusinessPartnerBank, "Edm.DateTimeOffset", true, true>;
    /**
     * Static representation of the [[validityEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VALIDITY_END_DATE: OrderableEdmTypeField<BusinessPartnerBank, "Edm.DateTimeOffset", true, true>;
    /**
     * Static representation of the [[iban]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IBAN: EdmTypeField<BusinessPartnerBank, "Edm.String", true, true>;
    /**
     * Static representation of the [[ibanValidityStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IBAN_VALIDITY_START_DATE: OrderableEdmTypeField<BusinessPartnerBank, "Edm.DateTime", true, true>;
    /**
     * Static representation of the [[bankAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BANK_ACCOUNT: EdmTypeField<BusinessPartnerBank, "Edm.String", true, true>;
    /**
     * Static representation of the [[bankAccountReferenceText]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BANK_ACCOUNT_REFERENCE_TEXT: EdmTypeField<BusinessPartnerBank, "Edm.String", true, true>;
    /**
     * Static representation of the [[collectionAuthInd]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COLLECTION_AUTH_IND: EdmTypeField<BusinessPartnerBank, "Edm.Boolean", true, true>;
    /**
     * Static representation of the [[cityName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CITY_NAME: EdmTypeField<BusinessPartnerBank, "Edm.String", true, true>;
    /**
     * Static representation of the [[authorizationGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AUTHORIZATION_GROUP: EdmTypeField<BusinessPartnerBank, "Edm.String", true, true>;
    /**
     * All fields of the BusinessPartnerBank entity.
     */
    const _allFields: Array<EdmTypeField<BusinessPartnerBank, 'Edm.String', false, true> | EdmTypeField<BusinessPartnerBank, 'Edm.String', true, true> | OrderableEdmTypeField<BusinessPartnerBank, 'Edm.DateTimeOffset', true, true> | OrderableEdmTypeField<BusinessPartnerBank, 'Edm.DateTime', true, true> | EdmTypeField<BusinessPartnerBank, 'Edm.Boolean', true, true>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<BusinessPartnerBank>;
    /**
     * All key fields of the BusinessPartnerBank entity.
     */
    const _keyFields: Array<Field<BusinessPartnerBank, boolean, boolean>>;
    /**
     * Mapping of all key field names to the respective static field property BusinessPartnerBank.
     */
    const _keys: {
        [keys: string]: Field<BusinessPartnerBank, boolean, boolean>;
    };
}
//# sourceMappingURL=BusinessPartnerBank.d.ts.map