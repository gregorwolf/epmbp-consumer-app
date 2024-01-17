/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CustSlsAreaAddrDepdntTaxInfoRequestBuilder } from './CustSlsAreaAddrDepdntTaxInfoRequestBuilder';
import { AllFields, Constructable, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field, FieldBuilder } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "A_CustSlsAreaAddrDepdntTaxInfo" of service "API_BUSINESS_PARTNER".
 */
export class CustSlsAreaAddrDepdntTaxInfo extends EntityV2 implements CustSlsAreaAddrDepdntTaxInfoType {
  /**
   * Technical entity name for CustSlsAreaAddrDepdntTaxInfo.
   */
  static _entityName = 'A_CustSlsAreaAddrDepdntTaxInfo';
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
   * Business Partner Address Number (from BUT020).
   * Maximum length: 10.
   */
  addressId!: string;
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
   * Returns an entity builder to construct instances of `CustSlsAreaAddrDepdntTaxInfo`.
   * @returns A builder that constructs instances of entity type `CustSlsAreaAddrDepdntTaxInfo`.
   */
  static builder(): EntityBuilderType<CustSlsAreaAddrDepdntTaxInfo, CustSlsAreaAddrDepdntTaxInfoType> {
    return EntityV2.entityBuilder(CustSlsAreaAddrDepdntTaxInfo);
  }

  /**
   * Returns a request builder to construct requests for operations on the `CustSlsAreaAddrDepdntTaxInfo` entity type.
   * @returns A `CustSlsAreaAddrDepdntTaxInfo` request builder.
   */
  static requestBuilder(): CustSlsAreaAddrDepdntTaxInfoRequestBuilder {
    return new CustSlsAreaAddrDepdntTaxInfoRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `CustSlsAreaAddrDepdntTaxInfo`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `CustSlsAreaAddrDepdntTaxInfo`.
   */
  static customField(fieldName: string): CustomFieldV2<CustSlsAreaAddrDepdntTaxInfo> {
    return EntityV2.customFieldSelector(fieldName, CustSlsAreaAddrDepdntTaxInfo);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface CustSlsAreaAddrDepdntTaxInfoType {
  customer: string;
  salesOrganization: string;
  distributionChannel: string;
  division: string;
  addressId: string;
  departureCountry: string;
  customerTaxCategory: string;
  customerTaxClassification?: string | null;
}

export namespace CustSlsAreaAddrDepdntTaxInfo {
  const _fieldBuilder: FieldBuilder<Constructable<CustSlsAreaAddrDepdntTaxInfo>> = new FieldBuilder(CustSlsAreaAddrDepdntTaxInfo);
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
   * Static representation of the [[addressId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_ID = _fieldBuilder.buildEdmTypeField('AddressID', 'Edm.String', false);
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
   * All fields of the CustSlsAreaAddrDepdntTaxInfo entity.
   */
  export const _allFields: Array<EdmTypeField<CustSlsAreaAddrDepdntTaxInfo, 'Edm.String', false, true> | EdmTypeField<CustSlsAreaAddrDepdntTaxInfo, 'Edm.String', true, true>> = [
    CustSlsAreaAddrDepdntTaxInfo.CUSTOMER,
    CustSlsAreaAddrDepdntTaxInfo.SALES_ORGANIZATION,
    CustSlsAreaAddrDepdntTaxInfo.DISTRIBUTION_CHANNEL,
    CustSlsAreaAddrDepdntTaxInfo.DIVISION,
    CustSlsAreaAddrDepdntTaxInfo.ADDRESS_ID,
    CustSlsAreaAddrDepdntTaxInfo.DEPARTURE_COUNTRY,
    CustSlsAreaAddrDepdntTaxInfo.CUSTOMER_TAX_CATEGORY,
    CustSlsAreaAddrDepdntTaxInfo.CUSTOMER_TAX_CLASSIFICATION
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<CustSlsAreaAddrDepdntTaxInfo> = new AllFields('*', CustSlsAreaAddrDepdntTaxInfo);
  /**
   * All key fields of the CustSlsAreaAddrDepdntTaxInfo entity.
   */
  export const _keyFields: Array<Field<CustSlsAreaAddrDepdntTaxInfo, boolean, boolean>> = [CustSlsAreaAddrDepdntTaxInfo.CUSTOMER, CustSlsAreaAddrDepdntTaxInfo.SALES_ORGANIZATION, CustSlsAreaAddrDepdntTaxInfo.DISTRIBUTION_CHANNEL, CustSlsAreaAddrDepdntTaxInfo.DIVISION, CustSlsAreaAddrDepdntTaxInfo.ADDRESS_ID, CustSlsAreaAddrDepdntTaxInfo.DEPARTURE_COUNTRY, CustSlsAreaAddrDepdntTaxInfo.CUSTOMER_TAX_CATEGORY];
  /**
   * Mapping of all key field names to the respective static field property CustSlsAreaAddrDepdntTaxInfo.
   */
  export const _keys: { [keys: string]: Field<CustSlsAreaAddrDepdntTaxInfo, boolean, boolean> } = CustSlsAreaAddrDepdntTaxInfo._keyFields.reduce((acc: { [keys: string]: Field<CustSlsAreaAddrDepdntTaxInfo, boolean, boolean> }, field: Field<CustSlsAreaAddrDepdntTaxInfo, boolean, boolean>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
