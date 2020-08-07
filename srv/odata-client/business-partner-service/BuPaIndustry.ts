/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BuPaIndustryRequestBuilder } from './BuPaIndustryRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "A_BuPaIndustry" of service "API_BUSINESS_PARTNER".
 */
export class BuPaIndustry extends Entity implements BuPaIndustryType {
  /**
   * Technical entity name for BuPaIndustry.
   */
  static _entityName = 'A_BuPaIndustry';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for BuPaIndustry.
   */
  static _serviceName = 'API_BUSINESS_PARTNER';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
  /**
   * Industry.
   * Describes an industry.
   * An industry is a classification of companies according to their main business activity. For example, you can use Commerce, Banking, Services, Industry, Healthcare, Public Sector, Media, and so on, as industries.You can define industries along with their descriptions in Customizing.Assign the industry key to an industry key system.
   * Maximum length: 10.
   */
  industrySector!: string;
  /**
   * Industry System.
   * Serves to combine and categorize several industries into a group.
   * You can create different industry systems, each with its own catalog of industries, whereby an industry can be assigned to several industry systems.You have to select one industry system as the standard industry system. This is then automatically displayed in the initial screen for the maintenance of industry data.You can define an industry system along with its description in Customizing. You can assign several industry systems to a business partner.If you choose the button All Industry Systems, you can access all the industry systems defined in the Customizing using the input help.
   * Maximum length: 4.
   */
  industrySystemType!: string;
  /**
   * Business Partner Number.
   * Key identifying a business partner in the SAP system. The key is unique within a client.
   * Maximum length: 10.
   */
  businessPartner!: string;
  /**
   * Industry is Standard for BP in Industry System.
   * Identifies the industry in an industry system that can be defined as the standard industry.
   * It is recommended that you define an industry within an industry system as the standard industry, because only the standard industries can be determined at the interfaces to BW or the APIs, for example.This means that even if only one industry exists within an industry system, it should be indicated as the standard industry as this this information cannot be determined otherwise.
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
   * Returns an entity builder to construct instances `BuPaIndustry`.
   * @returns A builder that constructs instances of entity type `BuPaIndustry`.
   */
  static builder(): EntityBuilderType<BuPaIndustry, BuPaIndustryTypeForceMandatory> {
    return Entity.entityBuilder(BuPaIndustry);
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
  static customField(fieldName: string): CustomField<BuPaIndustry> {
    return Entity.customFieldSelector(fieldName, BuPaIndustry);
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
  isStandardIndustry?: string;
  industryKeyDescription?: string;
}

export interface BuPaIndustryTypeForceMandatory {
  industrySector: string;
  industrySystemType: string;
  businessPartner: string;
  isStandardIndustry: string;
  industryKeyDescription: string;
}

export namespace BuPaIndustry {
  /**
   * Static representation of the [[industrySector]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INDUSTRY_SECTOR: StringField<BuPaIndustry> = new StringField('IndustrySector', BuPaIndustry, 'Edm.String');
  /**
   * Static representation of the [[industrySystemType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INDUSTRY_SYSTEM_TYPE: StringField<BuPaIndustry> = new StringField('IndustrySystemType', BuPaIndustry, 'Edm.String');
  /**
   * Static representation of the [[businessPartner]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER: StringField<BuPaIndustry> = new StringField('BusinessPartner', BuPaIndustry, 'Edm.String');
  /**
   * Static representation of the [[isStandardIndustry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_STANDARD_INDUSTRY: StringField<BuPaIndustry> = new StringField('IsStandardIndustry', BuPaIndustry, 'Edm.String');
  /**
   * Static representation of the [[industryKeyDescription]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INDUSTRY_KEY_DESCRIPTION: StringField<BuPaIndustry> = new StringField('IndustryKeyDescription', BuPaIndustry, 'Edm.String');
  /**
   * All fields of the BuPaIndustry entity.
   */
  export const _allFields: Array<StringField<BuPaIndustry>> = [
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
  export const _keyFields: Array<Field<BuPaIndustry>> = [BuPaIndustry.INDUSTRY_SECTOR, BuPaIndustry.INDUSTRY_SYSTEM_TYPE, BuPaIndustry.BUSINESS_PARTNER];
  /**
   * Mapping of all key field names to the respective static field property BuPaIndustry.
   */
  export const _keys: { [keys: string]: Field<BuPaIndustry> } = BuPaIndustry._keyFields.reduce((acc: { [keys: string]: Field<BuPaIndustry> }, field: Field<BuPaIndustry>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
