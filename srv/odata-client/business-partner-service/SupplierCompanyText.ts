/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SupplierCompanyTextRequestBuilder } from './SupplierCompanyTextRequestBuilder';
import { AllFields, Constructable, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field, FieldBuilder } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "A_SupplierCompanyText" of service "API_BUSINESS_PARTNER".
 */
export class SupplierCompanyText extends EntityV2 implements SupplierCompanyTextType {
  /**
   * Technical entity name for SupplierCompanyText.
   */
  static _entityName = 'A_SupplierCompanyText';
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
   * Returns an entity builder to construct instances of `SupplierCompanyText`.
   * @returns A builder that constructs instances of entity type `SupplierCompanyText`.
   */
  static builder(): EntityBuilderType<SupplierCompanyText, SupplierCompanyTextType> {
    return EntityV2.entityBuilder(SupplierCompanyText);
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
  static customField(fieldName: string): CustomFieldV2<SupplierCompanyText> {
    return EntityV2.customFieldSelector(fieldName, SupplierCompanyText);
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
  longText?: string | null;
}

export namespace SupplierCompanyText {
  const _fieldBuilder: FieldBuilder<Constructable<SupplierCompanyText>> = new FieldBuilder(SupplierCompanyText);
  /**
   * Static representation of the [[supplier]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPPLIER = _fieldBuilder.buildEdmTypeField('Supplier', 'Edm.String', false);
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
   * All fields of the SupplierCompanyText entity.
   */
  export const _allFields: Array<EdmTypeField<SupplierCompanyText, 'Edm.String', false, true> | EdmTypeField<SupplierCompanyText, 'Edm.String', true, true>> = [
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
  export const _keyFields: Array<Field<SupplierCompanyText, boolean, boolean>> = [SupplierCompanyText.SUPPLIER, SupplierCompanyText.COMPANY_CODE, SupplierCompanyText.LANGUAGE, SupplierCompanyText.LONG_TEXT_ID];
  /**
   * Mapping of all key field names to the respective static field property SupplierCompanyText.
   */
  export const _keys: { [keys: string]: Field<SupplierCompanyText, boolean, boolean> } = SupplierCompanyText._keyFields.reduce((acc: { [keys: string]: Field<SupplierCompanyText, boolean, boolean> }, field: Field<SupplierCompanyText, boolean, boolean>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
