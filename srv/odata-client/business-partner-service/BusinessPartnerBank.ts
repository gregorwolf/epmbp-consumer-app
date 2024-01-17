/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BusinessPartnerBankRequestBuilder } from './BusinessPartnerBankRequestBuilder';
import { Moment } from 'moment';
import { AllFields, Constructable, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field, FieldBuilder, OrderableEdmTypeField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "A_BusinessPartnerBank" of service "API_BUSINESS_PARTNER".
 */
export class BusinessPartnerBank extends EntityV2 implements BusinessPartnerBankType {
  /**
   * Technical entity name for BusinessPartnerBank.
   */
  static _entityName = 'A_BusinessPartnerBank';
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
   * Bank Details ID.
   * Maximum length: 4.
   */
  bankIdentification!: string;
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
  static builder(): EntityBuilderType<BusinessPartnerBank, BusinessPartnerBankType> {
    return EntityV2.entityBuilder(BusinessPartnerBank);
  }

  /**
   * Returns a request builder to construct requests for operations on the `BusinessPartnerBank` entity type.
   * @returns A `BusinessPartnerBank` request builder.
   */
  static requestBuilder(): BusinessPartnerBankRequestBuilder {
    return new BusinessPartnerBankRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `BusinessPartnerBank`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `BusinessPartnerBank`.
   */
  static customField(fieldName: string): CustomFieldV2<BusinessPartnerBank> {
    return EntityV2.customFieldSelector(fieldName, BusinessPartnerBank);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
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

export namespace BusinessPartnerBank {
  const _fieldBuilder: FieldBuilder<Constructable<BusinessPartnerBank>> = new FieldBuilder(BusinessPartnerBank);
  /**
   * Static representation of the [[businessPartner]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER = _fieldBuilder.buildEdmTypeField('BusinessPartner', 'Edm.String', false);
  /**
   * Static representation of the [[bankIdentification]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BANK_IDENTIFICATION = _fieldBuilder.buildEdmTypeField('BankIdentification', 'Edm.String', false);
  /**
   * Static representation of the [[bankCountryKey]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BANK_COUNTRY_KEY = _fieldBuilder.buildEdmTypeField('BankCountryKey', 'Edm.String', true);
  /**
   * Static representation of the [[bankName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BANK_NAME = _fieldBuilder.buildEdmTypeField('BankName', 'Edm.String', true);
  /**
   * Static representation of the [[bankNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BANK_NUMBER = _fieldBuilder.buildEdmTypeField('BankNumber', 'Edm.String', true);
  /**
   * Static representation of the [[swiftCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SWIFT_CODE = _fieldBuilder.buildEdmTypeField('SWIFTCode', 'Edm.String', true);
  /**
   * Static representation of the [[bankControlKey]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BANK_CONTROL_KEY = _fieldBuilder.buildEdmTypeField('BankControlKey', 'Edm.String', true);
  /**
   * Static representation of the [[bankAccountHolderName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BANK_ACCOUNT_HOLDER_NAME = _fieldBuilder.buildEdmTypeField('BankAccountHolderName', 'Edm.String', true);
  /**
   * Static representation of the [[bankAccountName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BANK_ACCOUNT_NAME = _fieldBuilder.buildEdmTypeField('BankAccountName', 'Edm.String', true);
  /**
   * Static representation of the [[validityStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VALIDITY_START_DATE = _fieldBuilder.buildEdmTypeField('ValidityStartDate', 'Edm.DateTimeOffset', true);
  /**
   * Static representation of the [[validityEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VALIDITY_END_DATE = _fieldBuilder.buildEdmTypeField('ValidityEndDate', 'Edm.DateTimeOffset', true);
  /**
   * Static representation of the [[iban]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IBAN = _fieldBuilder.buildEdmTypeField('IBAN', 'Edm.String', true);
  /**
   * Static representation of the [[ibanValidityStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IBAN_VALIDITY_START_DATE = _fieldBuilder.buildEdmTypeField('IBANValidityStartDate', 'Edm.DateTime', true);
  /**
   * Static representation of the [[bankAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BANK_ACCOUNT = _fieldBuilder.buildEdmTypeField('BankAccount', 'Edm.String', true);
  /**
   * Static representation of the [[bankAccountReferenceText]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BANK_ACCOUNT_REFERENCE_TEXT = _fieldBuilder.buildEdmTypeField('BankAccountReferenceText', 'Edm.String', true);
  /**
   * Static representation of the [[collectionAuthInd]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COLLECTION_AUTH_IND = _fieldBuilder.buildEdmTypeField('CollectionAuthInd', 'Edm.Boolean', true);
  /**
   * Static representation of the [[cityName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CITY_NAME = _fieldBuilder.buildEdmTypeField('CityName', 'Edm.String', true);
  /**
   * Static representation of the [[authorizationGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AUTHORIZATION_GROUP = _fieldBuilder.buildEdmTypeField('AuthorizationGroup', 'Edm.String', true);
  /**
   * All fields of the BusinessPartnerBank entity.
   */
  export const _allFields: Array<EdmTypeField<BusinessPartnerBank, 'Edm.String', false, true> | EdmTypeField<BusinessPartnerBank, 'Edm.String', true, true> | OrderableEdmTypeField<BusinessPartnerBank, 'Edm.DateTimeOffset', true, true> | OrderableEdmTypeField<BusinessPartnerBank, 'Edm.DateTime', true, true> | EdmTypeField<BusinessPartnerBank, 'Edm.Boolean', true, true>> = [
    BusinessPartnerBank.BUSINESS_PARTNER,
    BusinessPartnerBank.BANK_IDENTIFICATION,
    BusinessPartnerBank.BANK_COUNTRY_KEY,
    BusinessPartnerBank.BANK_NAME,
    BusinessPartnerBank.BANK_NUMBER,
    BusinessPartnerBank.SWIFT_CODE,
    BusinessPartnerBank.BANK_CONTROL_KEY,
    BusinessPartnerBank.BANK_ACCOUNT_HOLDER_NAME,
    BusinessPartnerBank.BANK_ACCOUNT_NAME,
    BusinessPartnerBank.VALIDITY_START_DATE,
    BusinessPartnerBank.VALIDITY_END_DATE,
    BusinessPartnerBank.IBAN,
    BusinessPartnerBank.IBAN_VALIDITY_START_DATE,
    BusinessPartnerBank.BANK_ACCOUNT,
    BusinessPartnerBank.BANK_ACCOUNT_REFERENCE_TEXT,
    BusinessPartnerBank.COLLECTION_AUTH_IND,
    BusinessPartnerBank.CITY_NAME,
    BusinessPartnerBank.AUTHORIZATION_GROUP
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<BusinessPartnerBank> = new AllFields('*', BusinessPartnerBank);
  /**
   * All key fields of the BusinessPartnerBank entity.
   */
  export const _keyFields: Array<Field<BusinessPartnerBank, boolean, boolean>> = [BusinessPartnerBank.BUSINESS_PARTNER, BusinessPartnerBank.BANK_IDENTIFICATION];
  /**
   * Mapping of all key field names to the respective static field property BusinessPartnerBank.
   */
  export const _keys: { [keys: string]: Field<BusinessPartnerBank, boolean, boolean> } = BusinessPartnerBank._keyFields.reduce((acc: { [keys: string]: Field<BusinessPartnerBank, boolean, boolean> }, field: Field<BusinessPartnerBank, boolean, boolean>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
