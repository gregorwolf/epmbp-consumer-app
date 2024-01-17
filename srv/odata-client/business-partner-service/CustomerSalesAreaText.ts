/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CustomerSalesAreaTextRequestBuilder } from './CustomerSalesAreaTextRequestBuilder';
import { AllFields, Constructable, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field, FieldBuilder } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "A_CustomerSalesAreaText" of service "API_BUSINESS_PARTNER".
 */
export class CustomerSalesAreaText extends EntityV2 implements CustomerSalesAreaTextType {
  /**
   * Technical entity name for CustomerSalesAreaText.
   */
  static _entityName = 'A_CustomerSalesAreaText';
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
   * Sales Organization.
   * Maximum length: 4.
   */
  salesOrganization!: string;
  /**
   * Distribution Channel.
   * Maximum length: 2.
   */
  distributionChannel!: string;
  /**
   * Division.
   * Maximum length: 2.
   */
  division!: string;
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
   * Returns an entity builder to construct instances of `CustomerSalesAreaText`.
   * @returns A builder that constructs instances of entity type `CustomerSalesAreaText`.
   */
  static builder(): EntityBuilderType<CustomerSalesAreaText, CustomerSalesAreaTextType> {
    return EntityV2.entityBuilder(CustomerSalesAreaText);
  }

  /**
   * Returns a request builder to construct requests for operations on the `CustomerSalesAreaText` entity type.
   * @returns A `CustomerSalesAreaText` request builder.
   */
  static requestBuilder(): CustomerSalesAreaTextRequestBuilder {
    return new CustomerSalesAreaTextRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `CustomerSalesAreaText`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `CustomerSalesAreaText`.
   */
  static customField(fieldName: string): CustomFieldV2<CustomerSalesAreaText> {
    return EntityV2.customFieldSelector(fieldName, CustomerSalesAreaText);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface CustomerSalesAreaTextType {
  customer: string;
  salesOrganization: string;
  distributionChannel: string;
  division: string;
  language: string;
  longTextId: string;
  longText?: string | null;
}

export namespace CustomerSalesAreaText {
  const _fieldBuilder: FieldBuilder<Constructable<CustomerSalesAreaText>> = new FieldBuilder(CustomerSalesAreaText);
  /**
   * Static representation of the [[customer]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER = _fieldBuilder.buildEdmTypeField('Customer', 'Edm.String', false);
  /**
   * Static representation of the [[salesOrganization]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_ORGANIZATION = _fieldBuilder.buildEdmTypeField('SalesOrganization', 'Edm.String', false);
  /**
   * Static representation of the [[distributionChannel]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DISTRIBUTION_CHANNEL = _fieldBuilder.buildEdmTypeField('DistributionChannel', 'Edm.String', false);
  /**
   * Static representation of the [[division]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DIVISION = _fieldBuilder.buildEdmTypeField('Division', 'Edm.String', false);
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
   * All fields of the CustomerSalesAreaText entity.
   */
  export const _allFields: Array<EdmTypeField<CustomerSalesAreaText, 'Edm.String', false, true> | EdmTypeField<CustomerSalesAreaText, 'Edm.String', true, true>> = [
    CustomerSalesAreaText.CUSTOMER,
    CustomerSalesAreaText.SALES_ORGANIZATION,
    CustomerSalesAreaText.DISTRIBUTION_CHANNEL,
    CustomerSalesAreaText.DIVISION,
    CustomerSalesAreaText.LANGUAGE,
    CustomerSalesAreaText.LONG_TEXT_ID,
    CustomerSalesAreaText.LONG_TEXT
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<CustomerSalesAreaText> = new AllFields('*', CustomerSalesAreaText);
  /**
   * All key fields of the CustomerSalesAreaText entity.
   */
  export const _keyFields: Array<Field<CustomerSalesAreaText, boolean, boolean>> = [CustomerSalesAreaText.CUSTOMER, CustomerSalesAreaText.SALES_ORGANIZATION, CustomerSalesAreaText.DISTRIBUTION_CHANNEL, CustomerSalesAreaText.DIVISION, CustomerSalesAreaText.LANGUAGE, CustomerSalesAreaText.LONG_TEXT_ID];
  /**
   * Mapping of all key field names to the respective static field property CustomerSalesAreaText.
   */
  export const _keys: { [keys: string]: Field<CustomerSalesAreaText, boolean, boolean> } = CustomerSalesAreaText._keyFields.reduce((acc: { [keys: string]: Field<CustomerSalesAreaText, boolean, boolean> }, field: Field<CustomerSalesAreaText, boolean, boolean>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
