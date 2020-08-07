/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SupplierTextRequestBuilder } from './SupplierTextRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "A_SupplierText" of service "API_BUSINESS_PARTNER".
 */
export class SupplierText extends Entity implements SupplierTextType {
  /**
   * Technical entity name for SupplierText.
   */
  static _entityName = 'A_SupplierText';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for SupplierText.
   */
  static _serviceName = 'API_BUSINESS_PARTNER';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
  /**
   * Account Number of Supplier.
   * Specifies an alphanumeric key that uniquely identifies the supplier in the SAP system.
   * Maximum length: 10.
   */
  supplier!: string;
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
   * Returns an entity builder to construct instances `SupplierText`.
   * @returns A builder that constructs instances of entity type `SupplierText`.
   */
  static builder(): EntityBuilderType<SupplierText, SupplierTextTypeForceMandatory> {
    return Entity.entityBuilder(SupplierText);
  }

  /**
   * Returns a request builder to construct requests for operations on the `SupplierText` entity type.
   * @returns A `SupplierText` request builder.
   */
  static requestBuilder(): SupplierTextRequestBuilder {
    return new SupplierTextRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `SupplierText`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `SupplierText`.
   */
  static customField(fieldName: string): CustomField<SupplierText> {
    return Entity.customFieldSelector(fieldName, SupplierText);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface SupplierTextType {
  supplier: string;
  language: string;
  longTextId: string;
  longText?: string;
}

export interface SupplierTextTypeForceMandatory {
  supplier: string;
  language: string;
  longTextId: string;
  longText: string;
}

export namespace SupplierText {
  /**
   * Static representation of the [[supplier]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPPLIER: StringField<SupplierText> = new StringField('Supplier', SupplierText, 'Edm.String');
  /**
   * Static representation of the [[language]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LANGUAGE: StringField<SupplierText> = new StringField('Language', SupplierText, 'Edm.String');
  /**
   * Static representation of the [[longTextId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LONG_TEXT_ID: StringField<SupplierText> = new StringField('LongTextID', SupplierText, 'Edm.String');
  /**
   * Static representation of the [[longText]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LONG_TEXT: StringField<SupplierText> = new StringField('LongText', SupplierText, 'Edm.String');
  /**
   * All fields of the SupplierText entity.
   */
  export const _allFields: Array<StringField<SupplierText>> = [
    SupplierText.SUPPLIER,
    SupplierText.LANGUAGE,
    SupplierText.LONG_TEXT_ID,
    SupplierText.LONG_TEXT
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<SupplierText> = new AllFields('*', SupplierText);
  /**
   * All key fields of the SupplierText entity.
   */
  export const _keyFields: Array<Field<SupplierText>> = [SupplierText.SUPPLIER, SupplierText.LANGUAGE, SupplierText.LONG_TEXT_ID];
  /**
   * Mapping of all key field names to the respective static field property SupplierText.
   */
  export const _keys: { [keys: string]: Field<SupplierText> } = SupplierText._keyFields.reduce((acc: { [keys: string]: Field<SupplierText> }, field: Field<SupplierText>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
