/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CustomerTaxGroupingRequestBuilder } from './CustomerTaxGroupingRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Field, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "A_CustomerTaxGrouping" of service "API_BUSINESS_PARTNER".
 */
export class CustomerTaxGrouping extends Entity implements CustomerTaxGroupingType {
  /**
   * Technical entity name for CustomerTaxGrouping.
   */
  static _entityName = 'A_CustomerTaxGrouping';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for CustomerTaxGrouping.
   */
  static _serviceName = 'API_BUSINESS_PARTNER';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
  /**
   * Customer Number.
   * Gives an alphanumeric key, which clearly identifies the customer or vendor in the SAP system.
   * Maximum length: 10.
   */
  customer!: string;
  /**
   * Category Indicator for Tax Codes.
   * This indicator is used to allocate customers and vendors to different tax categories. The system evaluates this information during document entry to assist users in selecting the tax code.
   * Maximum length: 3.
   */
  customerTaxGroupingCode!: string;
  /**
   * Number of exemption certificate.
   * The exemption information are displayed while posting a document to help the user find the correct tax code. If the posting date lies within an exemption interval the corresponding tax category will be highlighted.
   * Maximum length: 15.
   * @nullable
   */
  custTaxGrpExemptionCertificate?: string;
  /**
   * Exemption rate.
   * Tax categories
   * The exemption information is used by the system to help the user find the correct tax code while posting a document.The system will not apply the exemption rate to a tax amount previously calculated. This has to be done by defining a special tax code with a reduced percentage rate.Withholding taxThe exemption percentage is applied to the calculated withholding tax amount.
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
   * This field gives the start date of the status of being subjected.
   * @nullable
   */
  custTaxGroupSubjectedStartDate?: Moment;
  /**
   * Subjected until.
   * This field gives the end date of the status of being subjected.
   * @nullable
   */
  custTaxGroupSubjectedEndDate?: Moment;

  /**
   * Returns an entity builder to construct instances `CustomerTaxGrouping`.
   * @returns A builder that constructs instances of entity type `CustomerTaxGrouping`.
   */
  static builder(): EntityBuilderType<CustomerTaxGrouping, CustomerTaxGroupingTypeForceMandatory> {
    return Entity.entityBuilder(CustomerTaxGrouping);
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
  static customField(fieldName: string): CustomField<CustomerTaxGrouping> {
    return Entity.customFieldSelector(fieldName, CustomerTaxGrouping);
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
  custTaxGrpExemptionCertificate?: string;
  custTaxGroupExemptionRate?: BigNumber;
  custTaxGroupExemptionStartDate?: Moment;
  custTaxGroupExemptionEndDate?: Moment;
  custTaxGroupSubjectedStartDate?: Moment;
  custTaxGroupSubjectedEndDate?: Moment;
}

export interface CustomerTaxGroupingTypeForceMandatory {
  customer: string;
  customerTaxGroupingCode: string;
  custTaxGrpExemptionCertificate: string;
  custTaxGroupExemptionRate: BigNumber;
  custTaxGroupExemptionStartDate: Moment;
  custTaxGroupExemptionEndDate: Moment;
  custTaxGroupSubjectedStartDate: Moment;
  custTaxGroupSubjectedEndDate: Moment;
}

export namespace CustomerTaxGrouping {
  /**
   * Static representation of the [[customer]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER: StringField<CustomerTaxGrouping> = new StringField('Customer', CustomerTaxGrouping, 'Edm.String');
  /**
   * Static representation of the [[customerTaxGroupingCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER_TAX_GROUPING_CODE: StringField<CustomerTaxGrouping> = new StringField('CustomerTaxGroupingCode', CustomerTaxGrouping, 'Edm.String');
  /**
   * Static representation of the [[custTaxGrpExemptionCertificate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_TAX_GRP_EXEMPTION_CERTIFICATE: StringField<CustomerTaxGrouping> = new StringField('CustTaxGrpExemptionCertificate', CustomerTaxGrouping, 'Edm.String');
  /**
   * Static representation of the [[custTaxGroupExemptionRate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_TAX_GROUP_EXEMPTION_RATE: BigNumberField<CustomerTaxGrouping> = new BigNumberField('CustTaxGroupExemptionRate', CustomerTaxGrouping, 'Edm.Decimal');
  /**
   * Static representation of the [[custTaxGroupExemptionStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_TAX_GROUP_EXEMPTION_START_DATE: DateField<CustomerTaxGrouping> = new DateField('CustTaxGroupExemptionStartDate', CustomerTaxGrouping, 'Edm.DateTime');
  /**
   * Static representation of the [[custTaxGroupExemptionEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_TAX_GROUP_EXEMPTION_END_DATE: DateField<CustomerTaxGrouping> = new DateField('CustTaxGroupExemptionEndDate', CustomerTaxGrouping, 'Edm.DateTime');
  /**
   * Static representation of the [[custTaxGroupSubjectedStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_TAX_GROUP_SUBJECTED_START_DATE: DateField<CustomerTaxGrouping> = new DateField('CustTaxGroupSubjectedStartDate', CustomerTaxGrouping, 'Edm.DateTime');
  /**
   * Static representation of the [[custTaxGroupSubjectedEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_TAX_GROUP_SUBJECTED_END_DATE: DateField<CustomerTaxGrouping> = new DateField('CustTaxGroupSubjectedEndDate', CustomerTaxGrouping, 'Edm.DateTime');
  /**
   * All fields of the CustomerTaxGrouping entity.
   */
  export const _allFields: Array<StringField<CustomerTaxGrouping> | BigNumberField<CustomerTaxGrouping> | DateField<CustomerTaxGrouping>> = [
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
  export const _keyFields: Array<Field<CustomerTaxGrouping>> = [CustomerTaxGrouping.CUSTOMER, CustomerTaxGrouping.CUSTOMER_TAX_GROUPING_CODE];
  /**
   * Mapping of all key field names to the respective static field property CustomerTaxGrouping.
   */
  export const _keys: { [keys: string]: Field<CustomerTaxGrouping> } = CustomerTaxGrouping._keyFields.reduce((acc: { [keys: string]: Field<CustomerTaxGrouping> }, field: Field<CustomerTaxGrouping>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
