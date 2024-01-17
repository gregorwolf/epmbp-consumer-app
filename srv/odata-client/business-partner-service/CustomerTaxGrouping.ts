/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CustomerTaxGroupingRequestBuilder } from './CustomerTaxGroupingRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, Constructable, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field, FieldBuilder, OrderableEdmTypeField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "A_CustomerTaxGrouping" of service "API_BUSINESS_PARTNER".
 */
export class CustomerTaxGrouping extends EntityV2 implements CustomerTaxGroupingType {
  /**
   * Technical entity name for CustomerTaxGrouping.
   */
  static _entityName = 'A_CustomerTaxGrouping';
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
   * Category Indicator for Tax Codes.
   * Maximum length: 3.
   */
  customerTaxGroupingCode!: string;
  /**
   * Number of exemption certificate.
   * Maximum length: 15.
   * @nullable
   */
  custTaxGrpExemptionCertificate?: string;
  /**
   * Exemption rate.
   * @nullable
   */
  custTaxGroupExemptionRate?: BigNumber;
  /**
   * Start date of exemption.
   * @nullable
   */
  custTaxGroupExemptionStartDate?: Moment;
  /**
   * End date of exemption.
   * @nullable
   */
  custTaxGroupExemptionEndDate?: Moment;
  /**
   * Subjected from.
   * @nullable
   */
  custTaxGroupSubjectedStartDate?: Moment;
  /**
   * Subjected until.
   * @nullable
   */
  custTaxGroupSubjectedEndDate?: Moment;

  /**
   * Returns an entity builder to construct instances of `CustomerTaxGrouping`.
   * @returns A builder that constructs instances of entity type `CustomerTaxGrouping`.
   */
  static builder(): EntityBuilderType<CustomerTaxGrouping, CustomerTaxGroupingType> {
    return EntityV2.entityBuilder(CustomerTaxGrouping);
  }

  /**
   * Returns a request builder to construct requests for operations on the `CustomerTaxGrouping` entity type.
   * @returns A `CustomerTaxGrouping` request builder.
   */
  static requestBuilder(): CustomerTaxGroupingRequestBuilder {
    return new CustomerTaxGroupingRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `CustomerTaxGrouping`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `CustomerTaxGrouping`.
   */
  static customField(fieldName: string): CustomFieldV2<CustomerTaxGrouping> {
    return EntityV2.customFieldSelector(fieldName, CustomerTaxGrouping);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface CustomerTaxGroupingType {
  customer: string;
  customerTaxGroupingCode: string;
  custTaxGrpExemptionCertificate?: string | null;
  custTaxGroupExemptionRate?: BigNumber | null;
  custTaxGroupExemptionStartDate?: Moment | null;
  custTaxGroupExemptionEndDate?: Moment | null;
  custTaxGroupSubjectedStartDate?: Moment | null;
  custTaxGroupSubjectedEndDate?: Moment | null;
}

export namespace CustomerTaxGrouping {
  const _fieldBuilder: FieldBuilder<Constructable<CustomerTaxGrouping>> = new FieldBuilder(CustomerTaxGrouping);
  /**
   * Static representation of the [[customer]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER = _fieldBuilder.buildEdmTypeField('Customer', 'Edm.String', false);
  /**
   * Static representation of the [[customerTaxGroupingCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER_TAX_GROUPING_CODE = _fieldBuilder.buildEdmTypeField('CustomerTaxGroupingCode', 'Edm.String', false);
  /**
   * Static representation of the [[custTaxGrpExemptionCertificate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_TAX_GRP_EXEMPTION_CERTIFICATE = _fieldBuilder.buildEdmTypeField('CustTaxGrpExemptionCertificate', 'Edm.String', true);
  /**
   * Static representation of the [[custTaxGroupExemptionRate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_TAX_GROUP_EXEMPTION_RATE = _fieldBuilder.buildEdmTypeField('CustTaxGroupExemptionRate', 'Edm.Decimal', true);
  /**
   * Static representation of the [[custTaxGroupExemptionStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_TAX_GROUP_EXEMPTION_START_DATE = _fieldBuilder.buildEdmTypeField('CustTaxGroupExemptionStartDate', 'Edm.DateTime', true);
  /**
   * Static representation of the [[custTaxGroupExemptionEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_TAX_GROUP_EXEMPTION_END_DATE = _fieldBuilder.buildEdmTypeField('CustTaxGroupExemptionEndDate', 'Edm.DateTime', true);
  /**
   * Static representation of the [[custTaxGroupSubjectedStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_TAX_GROUP_SUBJECTED_START_DATE = _fieldBuilder.buildEdmTypeField('CustTaxGroupSubjectedStartDate', 'Edm.DateTime', true);
  /**
   * Static representation of the [[custTaxGroupSubjectedEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_TAX_GROUP_SUBJECTED_END_DATE = _fieldBuilder.buildEdmTypeField('CustTaxGroupSubjectedEndDate', 'Edm.DateTime', true);
  /**
   * All fields of the CustomerTaxGrouping entity.
   */
  export const _allFields: Array<EdmTypeField<CustomerTaxGrouping, 'Edm.String', false, true> | EdmTypeField<CustomerTaxGrouping, 'Edm.String', true, true> | OrderableEdmTypeField<CustomerTaxGrouping, 'Edm.Decimal', true, true> | OrderableEdmTypeField<CustomerTaxGrouping, 'Edm.DateTime', true, true>> = [
    CustomerTaxGrouping.CUSTOMER,
    CustomerTaxGrouping.CUSTOMER_TAX_GROUPING_CODE,
    CustomerTaxGrouping.CUST_TAX_GRP_EXEMPTION_CERTIFICATE,
    CustomerTaxGrouping.CUST_TAX_GROUP_EXEMPTION_RATE,
    CustomerTaxGrouping.CUST_TAX_GROUP_EXEMPTION_START_DATE,
    CustomerTaxGrouping.CUST_TAX_GROUP_EXEMPTION_END_DATE,
    CustomerTaxGrouping.CUST_TAX_GROUP_SUBJECTED_START_DATE,
    CustomerTaxGrouping.CUST_TAX_GROUP_SUBJECTED_END_DATE
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<CustomerTaxGrouping> = new AllFields('*', CustomerTaxGrouping);
  /**
   * All key fields of the CustomerTaxGrouping entity.
   */
  export const _keyFields: Array<Field<CustomerTaxGrouping, boolean, boolean>> = [CustomerTaxGrouping.CUSTOMER, CustomerTaxGrouping.CUSTOMER_TAX_GROUPING_CODE];
  /**
   * Mapping of all key field names to the respective static field property CustomerTaxGrouping.
   */
  export const _keys: { [keys: string]: Field<CustomerTaxGrouping, boolean, boolean> } = CustomerTaxGrouping._keyFields.reduce((acc: { [keys: string]: Field<CustomerTaxGrouping, boolean, boolean> }, field: Field<CustomerTaxGrouping, boolean, boolean>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
