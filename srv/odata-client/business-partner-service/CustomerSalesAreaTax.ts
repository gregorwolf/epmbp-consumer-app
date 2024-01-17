/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CustomerSalesAreaTaxRequestBuilder } from './CustomerSalesAreaTaxRequestBuilder';
import { AllFields, Constructable, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field, FieldBuilder, Link } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "A_CustomerSalesAreaTax" of service "API_BUSINESS_PARTNER".
 */
export class CustomerSalesAreaTax extends EntityV2 implements CustomerSalesAreaTaxType {
  /**
   * Technical entity name for CustomerSalesAreaTax.
   */
  static _entityName = 'A_CustomerSalesAreaTax';
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
   * Reference distrib.channel for cust.and material masters.
   * Maximum length: 2.
   */
  distributionChannel!: string;
  /**
   * Division.
   * Maximum length: 2.
   */
  division!: string;
  /**
   * Departure Country/Region (from which the goods are sent).
   * Maximum length: 3.
   */
  departureCountry!: string;
  /**
   * Tax Condition Type (Sales Tax, Value-Added Tax,...).
   * Maximum length: 4.
   */
  customerTaxCategory!: string;
  /**
   * Tax classification for customer.
   * Maximum length: 1.
   * @nullable
   */
  customerTaxClassification?: string;
  /**
   * One-to-many navigation property to the [[CustSlsAreaAddrDepdntTaxInfo]] entity.
   */
  toSlsAreaAddrDepdntTax!: CustSlsAreaAddrDepdntTaxInfo[];

  /**
   * Returns an entity builder to construct instances of `CustomerSalesAreaTax`.
   * @returns A builder that constructs instances of entity type `CustomerSalesAreaTax`.
   */
  static builder(): EntityBuilderType<CustomerSalesAreaTax, CustomerSalesAreaTaxType> {
    return EntityV2.entityBuilder(CustomerSalesAreaTax);
  }

  /**
   * Returns a request builder to construct requests for operations on the `CustomerSalesAreaTax` entity type.
   * @returns A `CustomerSalesAreaTax` request builder.
   */
  static requestBuilder(): CustomerSalesAreaTaxRequestBuilder {
    return new CustomerSalesAreaTaxRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `CustomerSalesAreaTax`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `CustomerSalesAreaTax`.
   */
  static customField(fieldName: string): CustomFieldV2<CustomerSalesAreaTax> {
    return EntityV2.customFieldSelector(fieldName, CustomerSalesAreaTax);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { CustSlsAreaAddrDepdntTaxInfo, CustSlsAreaAddrDepdntTaxInfoType } from './CustSlsAreaAddrDepdntTaxInfo';

export interface CustomerSalesAreaTaxType {
  customer: string;
  salesOrganization: string;
  distributionChannel: string;
  division: string;
  departureCountry: string;
  customerTaxCategory: string;
  customerTaxClassification?: string | null;
  toSlsAreaAddrDepdntTax: CustSlsAreaAddrDepdntTaxInfoType[];
}

export namespace CustomerSalesAreaTax {
  const _fieldBuilder: FieldBuilder<Constructable<CustomerSalesAreaTax>> = new FieldBuilder(CustomerSalesAreaTax);
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
   * Static representation of the [[departureCountry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEPARTURE_COUNTRY = _fieldBuilder.buildEdmTypeField('DepartureCountry', 'Edm.String', false);
  /**
   * Static representation of the [[customerTaxCategory]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER_TAX_CATEGORY = _fieldBuilder.buildEdmTypeField('CustomerTaxCategory', 'Edm.String', false);
  /**
   * Static representation of the [[customerTaxClassification]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER_TAX_CLASSIFICATION = _fieldBuilder.buildEdmTypeField('CustomerTaxClassification', 'Edm.String', true);
  /**
   * Static representation of the one-to-many navigation property [[toSlsAreaAddrDepdntTax]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_SLS_AREA_ADDR_DEPDNT_TAX: Link<CustomerSalesAreaTax, CustSlsAreaAddrDepdntTaxInfo> = new Link('to_SlsAreaAddrDepdntTax', CustomerSalesAreaTax, CustSlsAreaAddrDepdntTaxInfo);
  /**
   * All fields of the CustomerSalesAreaTax entity.
   */
  export const _allFields: Array<EdmTypeField<CustomerSalesAreaTax, 'Edm.String', false, true> | EdmTypeField<CustomerSalesAreaTax, 'Edm.String', true, true> | Link<CustomerSalesAreaTax, CustSlsAreaAddrDepdntTaxInfo>> = [
    CustomerSalesAreaTax.CUSTOMER,
    CustomerSalesAreaTax.SALES_ORGANIZATION,
    CustomerSalesAreaTax.DISTRIBUTION_CHANNEL,
    CustomerSalesAreaTax.DIVISION,
    CustomerSalesAreaTax.DEPARTURE_COUNTRY,
    CustomerSalesAreaTax.CUSTOMER_TAX_CATEGORY,
    CustomerSalesAreaTax.CUSTOMER_TAX_CLASSIFICATION,
    CustomerSalesAreaTax.TO_SLS_AREA_ADDR_DEPDNT_TAX
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<CustomerSalesAreaTax> = new AllFields('*', CustomerSalesAreaTax);
  /**
   * All key fields of the CustomerSalesAreaTax entity.
   */
  export const _keyFields: Array<Field<CustomerSalesAreaTax, boolean, boolean>> = [CustomerSalesAreaTax.CUSTOMER, CustomerSalesAreaTax.SALES_ORGANIZATION, CustomerSalesAreaTax.DISTRIBUTION_CHANNEL, CustomerSalesAreaTax.DIVISION, CustomerSalesAreaTax.DEPARTURE_COUNTRY, CustomerSalesAreaTax.CUSTOMER_TAX_CATEGORY];
  /**
   * Mapping of all key field names to the respective static field property CustomerSalesAreaTax.
   */
  export const _keys: { [keys: string]: Field<CustomerSalesAreaTax, boolean, boolean> } = CustomerSalesAreaTax._keyFields.reduce((acc: { [keys: string]: Field<CustomerSalesAreaTax, boolean, boolean> }, field: Field<CustomerSalesAreaTax, boolean, boolean>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
