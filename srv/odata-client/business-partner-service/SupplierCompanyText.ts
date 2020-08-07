/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SupplierCompanyTextRequestBuilder } from './SupplierCompanyTextRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "A_SupplierCompanyText" of service "API_BUSINESS_PARTNER".
 */
export class SupplierCompanyText extends Entity implements SupplierCompanyTextType {
  /**
   * Technical entity name for SupplierCompanyText.
   */
  static _entityName = 'A_SupplierCompanyText';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for SupplierCompanyText.
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
   * Company Code.
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
   * Returns an entity builder to construct instances `SupplierCompanyText`.
   * @returns A builder that constructs instances of entity type `SupplierCompanyText`.
   */
  static builder(): EntityBuilderType<SupplierCompanyText, SupplierCompanyTextTypeForceMandatory> {
    return Entity.entityBuilder(SupplierCompanyText);
  }

  /**
   * Returns a request builder to construct requests for operations on the `SupplierCompanyText` entity type.
   * @returns A `SupplierCompanyText` request builder.
   */
  static requestBuilder(): SupplierCompanyTextRequestBuilder {
    return new SupplierCompanyTextRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `SupplierCompanyText`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `SupplierCompanyText`.
   */
  static customField(fieldName: string): CustomField<SupplierCompanyText> {
    return Entity.customFieldSelector(fieldName, SupplierCompanyText);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface SupplierCompanyTextType {
  supplier: string;
  companyCode: string;
  language: string;
  longTextId: string;
  longText?: string;
}

export interface SupplierCompanyTextTypeForceMandatory {
  supplier: string;
  companyCode: string;
  language: string;
  longTextId: string;
  longText: string;
}

export namespace SupplierCompanyText {
  /**
   * Static representation of the [[supplier]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPPLIER: StringField<SupplierCompanyText> = new StringField('Supplier', SupplierCompanyText, 'Edm.String');
  /**
   * Static representation of the [[companyCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMPANY_CODE: StringField<SupplierCompanyText> = new StringField('CompanyCode', SupplierCompanyText, 'Edm.String');
  /**
   * Static representation of the [[language]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LANGUAGE: StringField<SupplierCompanyText> = new StringField('Language', SupplierCompanyText, 'Edm.String');
  /**
   * Static representation of the [[longTextId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LONG_TEXT_ID: StringField<SupplierCompanyText> = new StringField('LongTextID', SupplierCompanyText, 'Edm.String');
  /**
   * Static representation of the [[longText]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LONG_TEXT: StringField<SupplierCompanyText> = new StringField('LongText', SupplierCompanyText, 'Edm.String');
  /**
   * All fields of the SupplierCompanyText entity.
   */
  export const _allFields: Array<StringField<SupplierCompanyText>> = [
    SupplierCompanyText.SUPPLIER,
    SupplierCompanyText.COMPANY_CODE,
    SupplierCompanyText.LANGUAGE,
    SupplierCompanyText.LONG_TEXT_ID,
    SupplierCompanyText.LONG_TEXT
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<SupplierCompanyText> = new AllFields('*', SupplierCompanyText);
  /**
   * All key fields of the SupplierCompanyText entity.
   */
  export const _keyFields: Array<Field<SupplierCompanyText>> = [SupplierCompanyText.SUPPLIER, SupplierCompanyText.COMPANY_CODE, SupplierCompanyText.LANGUAGE, SupplierCompanyText.LONG_TEXT_ID];
  /**
   * Mapping of all key field names to the respective static field property SupplierCompanyText.
   */
  export const _keys: { [keys: string]: Field<SupplierCompanyText> } = SupplierCompanyText._keyFields.reduce((acc: { [keys: string]: Field<SupplierCompanyText> }, field: Field<SupplierCompanyText>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
