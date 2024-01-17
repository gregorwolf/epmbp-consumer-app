/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SupplierTextRequestBuilder } from './SupplierTextRequestBuilder';
import { AllFields, Constructable, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field, FieldBuilder } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "A_SupplierText" of service "API_BUSINESS_PARTNER".
 */
export class SupplierText extends EntityV2 implements SupplierTextType {
  /**
   * Technical entity name for SupplierText.
   */
  static _entityName = 'A_SupplierText';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
  /**
   * Account Number of Supplier.
   * Maximum length: 10.
   */
  supplier!: string;
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
   * Returns an entity builder to construct instances of `SupplierText`.
   * @returns A builder that constructs instances of entity type `SupplierText`.
   */
  static builder(): EntityBuilderType<SupplierText, SupplierTextType> {
    return EntityV2.entityBuilder(SupplierText);
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
  static customField(fieldName: string): CustomFieldV2<SupplierText> {
    return EntityV2.customFieldSelector(fieldName, SupplierText);
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
  longText?: string | null;
}

export namespace SupplierText {
  const _fieldBuilder: FieldBuilder<Constructable<SupplierText>> = new FieldBuilder(SupplierText);
  /**
   * Static representation of the [[supplier]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPPLIER = _fieldBuilder.buildEdmTypeField('Supplier', 'Edm.String', false);
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
   * All fields of the SupplierText entity.
   */
  export const _allFields: Array<EdmTypeField<SupplierText, 'Edm.String', false, true> | EdmTypeField<SupplierText, 'Edm.String', true, true>> = [
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
  export const _keyFields: Array<Field<SupplierText, boolean, boolean>> = [SupplierText.SUPPLIER, SupplierText.LANGUAGE, SupplierText.LONG_TEXT_ID];
  /**
   * Mapping of all key field names to the respective static field property SupplierText.
   */
  export const _keys: { [keys: string]: Field<SupplierText, boolean, boolean> } = SupplierText._keyFields.reduce((acc: { [keys: string]: Field<SupplierText, boolean, boolean> }, field: Field<SupplierText, boolean, boolean>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
