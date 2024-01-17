/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BuPaIndustryRequestBuilder } from './BuPaIndustryRequestBuilder';
import { AllFields, Constructable, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field, FieldBuilder } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "A_BuPaIndustry" of service "API_BUSINESS_PARTNER".
 */
export class BuPaIndustry extends EntityV2 implements BuPaIndustryType {
  /**
   * Technical entity name for BuPaIndustry.
   */
  static _entityName = 'A_BuPaIndustry';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
  /**
   * Industry.
   * Maximum length: 10.
   */
  industrySector!: string;
  /**
   * Industry System.
   * Maximum length: 4.
   */
  industrySystemType!: string;
  /**
   * Business Partner Number.
   * Maximum length: 10.
   */
  businessPartner!: string;
  /**
   * Industry is Standard for BP in Industry System.
   * Maximum length: 1.
   * @nullable
   */
  isStandardIndustry?: string;
  /**
   * Description.
   * Maximum length: 100.
   * @nullable
   */
  industryKeyDescription?: string;

  /**
   * Returns an entity builder to construct instances of `BuPaIndustry`.
   * @returns A builder that constructs instances of entity type `BuPaIndustry`.
   */
  static builder(): EntityBuilderType<BuPaIndustry, BuPaIndustryType> {
    return EntityV2.entityBuilder(BuPaIndustry);
  }

  /**
   * Returns a request builder to construct requests for operations on the `BuPaIndustry` entity type.
   * @returns A `BuPaIndustry` request builder.
   */
  static requestBuilder(): BuPaIndustryRequestBuilder {
    return new BuPaIndustryRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `BuPaIndustry`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `BuPaIndustry`.
   */
  static customField(fieldName: string): CustomFieldV2<BuPaIndustry> {
    return EntityV2.customFieldSelector(fieldName, BuPaIndustry);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface BuPaIndustryType {
  industrySector: string;
  industrySystemType: string;
  businessPartner: string;
  isStandardIndustry?: string | null;
  industryKeyDescription?: string | null;
}

export namespace BuPaIndustry {
  const _fieldBuilder: FieldBuilder<Constructable<BuPaIndustry>> = new FieldBuilder(BuPaIndustry);
  /**
   * Static representation of the [[industrySector]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INDUSTRY_SECTOR = _fieldBuilder.buildEdmTypeField('IndustrySector', 'Edm.String', false);
  /**
   * Static representation of the [[industrySystemType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INDUSTRY_SYSTEM_TYPE = _fieldBuilder.buildEdmTypeField('IndustrySystemType', 'Edm.String', false);
  /**
   * Static representation of the [[businessPartner]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER = _fieldBuilder.buildEdmTypeField('BusinessPartner', 'Edm.String', false);
  /**
   * Static representation of the [[isStandardIndustry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_STANDARD_INDUSTRY = _fieldBuilder.buildEdmTypeField('IsStandardIndustry', 'Edm.String', true);
  /**
   * Static representation of the [[industryKeyDescription]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INDUSTRY_KEY_DESCRIPTION = _fieldBuilder.buildEdmTypeField('IndustryKeyDescription', 'Edm.String', true);
  /**
   * All fields of the BuPaIndustry entity.
   */
  export const _allFields: Array<EdmTypeField<BuPaIndustry, 'Edm.String', false, true> | EdmTypeField<BuPaIndustry, 'Edm.String', true, true>> = [
    BuPaIndustry.INDUSTRY_SECTOR,
    BuPaIndustry.INDUSTRY_SYSTEM_TYPE,
    BuPaIndustry.BUSINESS_PARTNER,
    BuPaIndustry.IS_STANDARD_INDUSTRY,
    BuPaIndustry.INDUSTRY_KEY_DESCRIPTION
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<BuPaIndustry> = new AllFields('*', BuPaIndustry);
  /**
   * All key fields of the BuPaIndustry entity.
   */
  export const _keyFields: Array<Field<BuPaIndustry, boolean, boolean>> = [BuPaIndustry.INDUSTRY_SECTOR, BuPaIndustry.INDUSTRY_SYSTEM_TYPE, BuPaIndustry.BUSINESS_PARTNER];
  /**
   * Mapping of all key field names to the respective static field property BuPaIndustry.
   */
  export const _keys: { [keys: string]: Field<BuPaIndustry, boolean, boolean> } = BuPaIndustry._keyFields.reduce((acc: { [keys: string]: Field<BuPaIndustry, boolean, boolean> }, field: Field<BuPaIndustry, boolean, boolean>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
