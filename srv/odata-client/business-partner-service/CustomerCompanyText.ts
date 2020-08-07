/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CustomerCompanyTextRequestBuilder } from './CustomerCompanyTextRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "A_CustomerCompanyText" of service "API_BUSINESS_PARTNER".
 */
export class CustomerCompanyText extends Entity implements CustomerCompanyTextType {
  /**
   * Technical entity name for CustomerCompanyText.
   */
  static _entityName = 'A_CustomerCompanyText';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for CustomerCompanyText.
   */
  static _serviceName = 'API_BUSINESS_PARTNER';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
  /**
   * Customer Number.
   * Gives an alphanumeric key, which clearly identifies the customer or vendor in the SAP system.
   * Maximum length: 10.
   */
  customer!: string;
  /**
   * Company Code.
   * The company code is an organizational unit within financial accounting.
   * Maximum length: 4.
   */
  companyCode!: string;
  /**
   * Language key.
   * The language key is an abbreviation for the language of the object being processed (for example, standard text, form, style).
   * Maximum length: 2.
   */
  language!: string;
  /**
   * Text ID.
   * The text ID defines the various types of texts related to a text object. For example, the object "TEXT" (standard texts) can have the following text IDs:
   * ST for user-specific standard texts (individual texts)SYST for cross-application system textsvarious IDs for specific application departments. You must have the appropriate access authorization in order to access these texts.
   * Maximum length: 4.
   */
  longTextId!: string;
  /**
   * String.
   * @nullable
   */
  longText?: string;

  /**
   * Returns an entity builder to construct instances `CustomerCompanyText`.
   * @returns A builder that constructs instances of entity type `CustomerCompanyText`.
   */
  static builder(): EntityBuilderType<CustomerCompanyText, CustomerCompanyTextTypeForceMandatory> {
    return Entity.entityBuilder(CustomerCompanyText);
  }

  /**
   * Returns a request builder to construct requests for operations on the `CustomerCompanyText` entity type.
   * @returns A `CustomerCompanyText` request builder.
   */
  static requestBuilder(): CustomerCompanyTextRequestBuilder {
    return new CustomerCompanyTextRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `CustomerCompanyText`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `CustomerCompanyText`.
   */
  static customField(fieldName: string): CustomField<CustomerCompanyText> {
    return Entity.customFieldSelector(fieldName, CustomerCompanyText);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface CustomerCompanyTextType {
  customer: string;
  companyCode: string;
  language: string;
  longTextId: string;
  longText?: string;
}

export interface CustomerCompanyTextTypeForceMandatory {
  customer: string;
  companyCode: string;
  language: string;
  longTextId: string;
  longText: string;
}

export namespace CustomerCompanyText {
  /**
   * Static representation of the [[customer]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER: StringField<CustomerCompanyText> = new StringField('Customer', CustomerCompanyText, 'Edm.String');
  /**
   * Static representation of the [[companyCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMPANY_CODE: StringField<CustomerCompanyText> = new StringField('CompanyCode', CustomerCompanyText, 'Edm.String');
  /**
   * Static representation of the [[language]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LANGUAGE: StringField<CustomerCompanyText> = new StringField('Language', CustomerCompanyText, 'Edm.String');
  /**
   * Static representation of the [[longTextId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LONG_TEXT_ID: StringField<CustomerCompanyText> = new StringField('LongTextID', CustomerCompanyText, 'Edm.String');
  /**
   * Static representation of the [[longText]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LONG_TEXT: StringField<CustomerCompanyText> = new StringField('LongText', CustomerCompanyText, 'Edm.String');
  /**
   * All fields of the CustomerCompanyText entity.
   */
  export const _allFields: Array<StringField<CustomerCompanyText>> = [
    CustomerCompanyText.CUSTOMER,
    CustomerCompanyText.COMPANY_CODE,
    CustomerCompanyText.LANGUAGE,
    CustomerCompanyText.LONG_TEXT_ID,
    CustomerCompanyText.LONG_TEXT
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<CustomerCompanyText> = new AllFields('*', CustomerCompanyText);
  /**
   * All key fields of the CustomerCompanyText entity.
   */
  export const _keyFields: Array<Field<CustomerCompanyText>> = [CustomerCompanyText.CUSTOMER, CustomerCompanyText.COMPANY_CODE, CustomerCompanyText.LANGUAGE, CustomerCompanyText.LONG_TEXT_ID];
  /**
   * Mapping of all key field names to the respective static field property CustomerCompanyText.
   */
  export const _keys: { [keys: string]: Field<CustomerCompanyText> } = CustomerCompanyText._keyFields.reduce((acc: { [keys: string]: Field<CustomerCompanyText> }, field: Field<CustomerCompanyText>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
