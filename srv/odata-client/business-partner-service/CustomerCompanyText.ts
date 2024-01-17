/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CustomerCompanyTextRequestBuilder } from './CustomerCompanyTextRequestBuilder';
import { AllFields, Constructable, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field, FieldBuilder } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "A_CustomerCompanyText" of service "API_BUSINESS_PARTNER".
 */
export class CustomerCompanyText extends EntityV2 implements CustomerCompanyTextType {
  /**
   * Technical entity name for CustomerCompanyText.
   */
  static _entityName = 'A_CustomerCompanyText';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
  /**
   * Customer Number.
   * Maximum length: 10.
   */
  customer!: string;
  /**
   * Company Code.
   * Maximum length: 4.
   */
  companyCode!: string;
  /**
   * Language key.
   * Maximum length: 2.
   */
  language!: string;
  /**
   * Text ID.
   * Maximum length: 4.
   */
  longTextId!: string;
  /**
   * String.
   * @nullable
   */
  longText?: string;

  /**
   * Returns an entity builder to construct instances of `CustomerCompanyText`.
   * @returns A builder that constructs instances of entity type `CustomerCompanyText`.
   */
  static builder(): EntityBuilderType<CustomerCompanyText, CustomerCompanyTextType> {
    return EntityV2.entityBuilder(CustomerCompanyText);
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
  static customField(fieldName: string): CustomFieldV2<CustomerCompanyText> {
    return EntityV2.customFieldSelector(fieldName, CustomerCompanyText);
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
  longText?: string | null;
}

export namespace CustomerCompanyText {
  const _fieldBuilder: FieldBuilder<Constructable<CustomerCompanyText>> = new FieldBuilder(CustomerCompanyText);
  /**
   * Static representation of the [[customer]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER = _fieldBuilder.buildEdmTypeField('Customer', 'Edm.String', false);
  /**
   * Static representation of the [[companyCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMPANY_CODE = _fieldBuilder.buildEdmTypeField('CompanyCode', 'Edm.String', false);
  /**
   * Static representation of the [[language]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LANGUAGE = _fieldBuilder.buildEdmTypeField('Language', 'Edm.String', false);
  /**
   * Static representation of the [[longTextId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LONG_TEXT_ID = _fieldBuilder.buildEdmTypeField('LongTextID', 'Edm.String', false);
  /**
   * Static representation of the [[longText]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LONG_TEXT = _fieldBuilder.buildEdmTypeField('LongText', 'Edm.String', true);
  /**
   * All fields of the CustomerCompanyText entity.
   */
  export const _allFields: Array<EdmTypeField<CustomerCompanyText, 'Edm.String', false, true> | EdmTypeField<CustomerCompanyText, 'Edm.String', true, true>> = [
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
  export const _keyFields: Array<Field<CustomerCompanyText, boolean, boolean>> = [CustomerCompanyText.CUSTOMER, CustomerCompanyText.COMPANY_CODE, CustomerCompanyText.LANGUAGE, CustomerCompanyText.LONG_TEXT_ID];
  /**
   * Mapping of all key field names to the respective static field property CustomerCompanyText.
   */
  export const _keys: { [keys: string]: Field<CustomerCompanyText, boolean, boolean> } = CustomerCompanyText._keyFields.reduce((acc: { [keys: string]: Field<CustomerCompanyText, boolean, boolean> }, field: Field<CustomerCompanyText, boolean, boolean>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
