/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CustomerTextRequestBuilder } from './CustomerTextRequestBuilder';
import { AllFields, Constructable, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field, FieldBuilder } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "A_CustomerText" of service "API_BUSINESS_PARTNER".
 */
export class CustomerText extends EntityV2 implements CustomerTextType {
  /**
   * Technical entity name for CustomerText.
   */
  static _entityName = 'A_CustomerText';
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
   * Returns an entity builder to construct instances of `CustomerText`.
   * @returns A builder that constructs instances of entity type `CustomerText`.
   */
  static builder(): EntityBuilderType<CustomerText, CustomerTextType> {
    return EntityV2.entityBuilder(CustomerText);
  }

  /**
   * Returns a request builder to construct requests for operations on the `CustomerText` entity type.
   * @returns A `CustomerText` request builder.
   */
  static requestBuilder(): CustomerTextRequestBuilder {
    return new CustomerTextRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `CustomerText`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `CustomerText`.
   */
  static customField(fieldName: string): CustomFieldV2<CustomerText> {
    return EntityV2.customFieldSelector(fieldName, CustomerText);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface CustomerTextType {
  customer: string;
  language: string;
  longTextId: string;
  longText?: string | null;
}

export namespace CustomerText {
  const _fieldBuilder: FieldBuilder<Constructable<CustomerText>> = new FieldBuilder(CustomerText);
  /**
   * Static representation of the [[customer]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER = _fieldBuilder.buildEdmTypeField('Customer', 'Edm.String', false);
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
   * All fields of the CustomerText entity.
   */
  export const _allFields: Array<EdmTypeField<CustomerText, 'Edm.String', false, true> | EdmTypeField<CustomerText, 'Edm.String', true, true>> = [
    CustomerText.CUSTOMER,
    CustomerText.LANGUAGE,
    CustomerText.LONG_TEXT_ID,
    CustomerText.LONG_TEXT
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<CustomerText> = new AllFields('*', CustomerText);
  /**
   * All key fields of the CustomerText entity.
   */
  export const _keyFields: Array<Field<CustomerText, boolean, boolean>> = [CustomerText.CUSTOMER, CustomerText.LANGUAGE, CustomerText.LONG_TEXT_ID];
  /**
   * Mapping of all key field names to the respective static field property CustomerText.
   */
  export const _keys: { [keys: string]: Field<CustomerText, boolean, boolean> } = CustomerText._keyFields.reduce((acc: { [keys: string]: Field<CustomerText, boolean, boolean> }, field: Field<CustomerText, boolean, boolean>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
