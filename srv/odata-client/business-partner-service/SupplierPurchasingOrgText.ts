/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SupplierPurchasingOrgTextRequestBuilder } from './SupplierPurchasingOrgTextRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "A_SupplierPurchasingOrgText" of service "API_BUSINESS_PARTNER".
 */
export class SupplierPurchasingOrgText extends Entity implements SupplierPurchasingOrgTextType {
  /**
   * Technical entity name for SupplierPurchasingOrgText.
   */
  static _entityName = 'A_SupplierPurchasingOrgText';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for SupplierPurchasingOrgText.
   */
  static _serviceName = 'API_BUSINESS_PARTNER';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
  /**
   * Supplier.
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
   * Returns an entity builder to construct instances `SupplierPurchasingOrgText`.
   * @returns A builder that constructs instances of entity type `SupplierPurchasingOrgText`.
   */
  static builder(): EntityBuilderType<SupplierPurchasingOrgText, SupplierPurchasingOrgTextTypeForceMandatory> {
    return Entity.entityBuilder(SupplierPurchasingOrgText);
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
  static customField(fieldName: string): CustomField<SupplierPurchasingOrgText> {
    return Entity.customFieldSelector(fieldName, SupplierPurchasingOrgText);
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
  longText?: string;
}

export interface SupplierPurchasingOrgTextTypeForceMandatory {
  supplier: string;
  purchasingOrganization: string;
  language: string;
  longTextId: string;
  longText: string;
}

export namespace SupplierPurchasingOrgText {
  /**
   * Static representation of the [[supplier]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPPLIER: StringField<SupplierPurchasingOrgText> = new StringField('Supplier', SupplierPurchasingOrgText, 'Edm.String');
  /**
   * Static representation of the [[purchasingOrganization]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASING_ORGANIZATION: StringField<SupplierPurchasingOrgText> = new StringField('PurchasingOrganization', SupplierPurchasingOrgText, 'Edm.String');
  /**
   * Static representation of the [[language]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LANGUAGE: StringField<SupplierPurchasingOrgText> = new StringField('Language', SupplierPurchasingOrgText, 'Edm.String');
  /**
   * Static representation of the [[longTextId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LONG_TEXT_ID: StringField<SupplierPurchasingOrgText> = new StringField('LongTextID', SupplierPurchasingOrgText, 'Edm.String');
  /**
   * Static representation of the [[longText]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LONG_TEXT: StringField<SupplierPurchasingOrgText> = new StringField('LongText', SupplierPurchasingOrgText, 'Edm.String');
  /**
   * All fields of the SupplierPurchasingOrgText entity.
   */
  export const _allFields: Array<StringField<SupplierPurchasingOrgText>> = [
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
  export const _keyFields: Array<Field<SupplierPurchasingOrgText>> = [SupplierPurchasingOrgText.SUPPLIER, SupplierPurchasingOrgText.PURCHASING_ORGANIZATION, SupplierPurchasingOrgText.LANGUAGE, SupplierPurchasingOrgText.LONG_TEXT_ID];
  /**
   * Mapping of all key field names to the respective static field property SupplierPurchasingOrgText.
   */
  export const _keys: { [keys: string]: Field<SupplierPurchasingOrgText> } = SupplierPurchasingOrgText._keyFields.reduce((acc: { [keys: string]: Field<SupplierPurchasingOrgText> }, field: Field<SupplierPurchasingOrgText>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
