/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SupplierPurchasingOrgTextRequestBuilder } from './SupplierPurchasingOrgTextRequestBuilder';
import { AllFields, Constructable, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field, FieldBuilder } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "A_SupplierPurchasingOrgText" of service "API_BUSINESS_PARTNER".
 */
export class SupplierPurchasingOrgText extends EntityV2 implements SupplierPurchasingOrgTextType {
  /**
   * Technical entity name for SupplierPurchasingOrgText.
   */
  static _entityName = 'A_SupplierPurchasingOrgText';
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
   * Purchasing Organization.
   * Maximum length: 4.
   */
  purchasingOrganization!: string;
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
   * Returns an entity builder to construct instances of `SupplierPurchasingOrgText`.
   * @returns A builder that constructs instances of entity type `SupplierPurchasingOrgText`.
   */
  static builder(): EntityBuilderType<SupplierPurchasingOrgText, SupplierPurchasingOrgTextType> {
    return EntityV2.entityBuilder(SupplierPurchasingOrgText);
  }

  /**
   * Returns a request builder to construct requests for operations on the `SupplierPurchasingOrgText` entity type.
   * @returns A `SupplierPurchasingOrgText` request builder.
   */
  static requestBuilder(): SupplierPurchasingOrgTextRequestBuilder {
    return new SupplierPurchasingOrgTextRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `SupplierPurchasingOrgText`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `SupplierPurchasingOrgText`.
   */
  static customField(fieldName: string): CustomFieldV2<SupplierPurchasingOrgText> {
    return EntityV2.customFieldSelector(fieldName, SupplierPurchasingOrgText);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface SupplierPurchasingOrgTextType {
  supplier: string;
  purchasingOrganization: string;
  language: string;
  longTextId: string;
  longText?: string | null;
}

export namespace SupplierPurchasingOrgText {
  const _fieldBuilder: FieldBuilder<Constructable<SupplierPurchasingOrgText>> = new FieldBuilder(SupplierPurchasingOrgText);
  /**
   * Static representation of the [[supplier]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPPLIER = _fieldBuilder.buildEdmTypeField('Supplier', 'Edm.String', false);
  /**
   * Static representation of the [[purchasingOrganization]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASING_ORGANIZATION = _fieldBuilder.buildEdmTypeField('PurchasingOrganization', 'Edm.String', false);
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
   * All fields of the SupplierPurchasingOrgText entity.
   */
  export const _allFields: Array<EdmTypeField<SupplierPurchasingOrgText, 'Edm.String', false, true> | EdmTypeField<SupplierPurchasingOrgText, 'Edm.String', true, true>> = [
    SupplierPurchasingOrgText.SUPPLIER,
    SupplierPurchasingOrgText.PURCHASING_ORGANIZATION,
    SupplierPurchasingOrgText.LANGUAGE,
    SupplierPurchasingOrgText.LONG_TEXT_ID,
    SupplierPurchasingOrgText.LONG_TEXT
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<SupplierPurchasingOrgText> = new AllFields('*', SupplierPurchasingOrgText);
  /**
   * All key fields of the SupplierPurchasingOrgText entity.
   */
  export const _keyFields: Array<Field<SupplierPurchasingOrgText, boolean, boolean>> = [SupplierPurchasingOrgText.SUPPLIER, SupplierPurchasingOrgText.PURCHASING_ORGANIZATION, SupplierPurchasingOrgText.LANGUAGE, SupplierPurchasingOrgText.LONG_TEXT_ID];
  /**
   * Mapping of all key field names to the respective static field property SupplierPurchasingOrgText.
   */
  export const _keys: { [keys: string]: Field<SupplierPurchasingOrgText, boolean, boolean> } = SupplierPurchasingOrgText._keyFields.reduce((acc: { [keys: string]: Field<SupplierPurchasingOrgText, boolean, boolean> }, field: Field<SupplierPurchasingOrgText, boolean, boolean>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
