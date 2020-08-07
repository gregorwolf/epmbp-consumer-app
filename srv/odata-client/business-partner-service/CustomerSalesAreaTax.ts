/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CustomerSalesAreaTaxRequestBuilder } from './CustomerSalesAreaTaxRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "A_CustomerSalesAreaTax" of service "API_BUSINESS_PARTNER".
 */
export class CustomerSalesAreaTax extends Entity implements CustomerSalesAreaTaxType {
  /**
   * Technical entity name for CustomerSalesAreaTax.
   */
  static _entityName = 'A_CustomerSalesAreaTax';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for CustomerSalesAreaTax.
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
   * Sales Organization.
   * An organizational unit responsible for the sale of certain products or services. The responsibility of a sales organization may include legal liability for products and customer claims.
   * You can assign any number of distribution channels and divisions to a sales organization. A particular combination of sales organization, distribution channel, and division is known as a sales area.
   * Maximum length: 4.
   */
  salesOrganization!: string;
  /**
   * Reference distrib.channel for cust.and material masters.
   * Specifies a distribution channel that you want to use as a reference for customer and material master data for other distribution channels.
   * You can specify one distribution channel as the source of customer and material master data for other distribution channels. You need then only to maintain the data in one place.Distrib.channel Ref.distrib.channel01 0102 0103 0104 04In this example, only distribution channels 01 and 04 have customer and material master data defined. Distribution channels 01, 02, and 03 share the master data that you defined for distribution channel 01. Distribution channel 04 has its own master data. When you create a sales order in distribution channel 03, the system checks the customer and material master data against the data defined for distribution channel 01.
   * Maximum length: 2.
   */
  distributionChannel!: string;
  /**
   * Division.
   * A way of grouping materials, products, or services. The system uses divisions to determine the sales areas and the business areas for a material, product, or service.
   * A product or service is always assigned to just one division. From the point of view of sales and distribution, the use of divisions lets you organize your sales structure around groups of similar products or product lines. This allows the people in a division who process orders and service customers to specialize within a manageable area of expertise.If a sales organization sells food and non-food products through both retail and wholesaledistribution channels each distribution channel could then be further split into food and non-food divisions.
   * Maximum length: 2.
   */
  division!: string;
  /**
   * Departure country (country from which the goods are sent).
   * Identifies the country in which the delivery originates.
   * You can define the country key in a table. As a rule, it is a good idea to use the existing international standards for identifying vehicles from different countries (for example: USA = United States, I = Italy, and so on). The system uses the key tohelp determine the relevant taxes during pricingdetermine important country-specific standards (the length of postal codes and bank account numbers, for example).
   * Maximum length: 3.
   */
  departureCountry!: string;
  /**
   * Tax category (sales tax, federal sales tax,...).
   * Identifies the condition that the system uses to automatically determine country-specific taxes during pricing.
   * You can define one or more tax categories for each country. During sales order processing, the system applies the tax category according tothe geographical location of your delivering plant and the location of the customer receiving the goodstax classifications in the customer master record and the material master record.In the USA, for example, you can define tax categories for Federal Sales Tax and Federal Excise Tax. In the U.K., you can define a tax category for Value Added Tax (VAT).
   * Maximum length: 4.
   */
  customerTaxCategory!: string;
  /**
   * Tax classification for customer.
   * Specifies the tax liability of the customer, based on the tax structure of the customer's country.
   * You can use the tax classification to specify, for example, whether a customer is liable for sales taxes, such as VAT or state sales taxes.During sales order processing, the system copies the tax classification from the tax information stored in thecustomer master record of the payer, if the payer is different from the sold-to party and the sales tax identification number is maintained for the payer.ship to party, if the sales tax identification number of the ship-to party is maintained.sold-to party, if none of the criteria for the payer or the ship-to party are met.During pricing, the system calculates any relevant taxes by taking the following factors into account:The tax classification of the customer and the materialThe country keys of the customer and the delivering plant.
   * Maximum length: 1.
   * @nullable
   */
  customerTaxClassification?: string;

  /**
   * Returns an entity builder to construct instances `CustomerSalesAreaTax`.
   * @returns A builder that constructs instances of entity type `CustomerSalesAreaTax`.
   */
  static builder(): EntityBuilderType<CustomerSalesAreaTax, CustomerSalesAreaTaxTypeForceMandatory> {
    return Entity.entityBuilder(CustomerSalesAreaTax);
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
  static customField(fieldName: string): CustomField<CustomerSalesAreaTax> {
    return Entity.customFieldSelector(fieldName, CustomerSalesAreaTax);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface CustomerSalesAreaTaxType {
  customer: string;
  salesOrganization: string;
  distributionChannel: string;
  division: string;
  departureCountry: string;
  customerTaxCategory: string;
  customerTaxClassification?: string;
}

export interface CustomerSalesAreaTaxTypeForceMandatory {
  customer: string;
  salesOrganization: string;
  distributionChannel: string;
  division: string;
  departureCountry: string;
  customerTaxCategory: string;
  customerTaxClassification: string;
}

export namespace CustomerSalesAreaTax {
  /**
   * Static representation of the [[customer]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER: StringField<CustomerSalesAreaTax> = new StringField('Customer', CustomerSalesAreaTax, 'Edm.String');
  /**
   * Static representation of the [[salesOrganization]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_ORGANIZATION: StringField<CustomerSalesAreaTax> = new StringField('SalesOrganization', CustomerSalesAreaTax, 'Edm.String');
  /**
   * Static representation of the [[distributionChannel]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DISTRIBUTION_CHANNEL: StringField<CustomerSalesAreaTax> = new StringField('DistributionChannel', CustomerSalesAreaTax, 'Edm.String');
  /**
   * Static representation of the [[division]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DIVISION: StringField<CustomerSalesAreaTax> = new StringField('Division', CustomerSalesAreaTax, 'Edm.String');
  /**
   * Static representation of the [[departureCountry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEPARTURE_COUNTRY: StringField<CustomerSalesAreaTax> = new StringField('DepartureCountry', CustomerSalesAreaTax, 'Edm.String');
  /**
   * Static representation of the [[customerTaxCategory]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER_TAX_CATEGORY: StringField<CustomerSalesAreaTax> = new StringField('CustomerTaxCategory', CustomerSalesAreaTax, 'Edm.String');
  /**
   * Static representation of the [[customerTaxClassification]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER_TAX_CLASSIFICATION: StringField<CustomerSalesAreaTax> = new StringField('CustomerTaxClassification', CustomerSalesAreaTax, 'Edm.String');
  /**
   * All fields of the CustomerSalesAreaTax entity.
   */
  export const _allFields: Array<StringField<CustomerSalesAreaTax>> = [
    CustomerSalesAreaTax.CUSTOMER,
    CustomerSalesAreaTax.SALES_ORGANIZATION,
    CustomerSalesAreaTax.DISTRIBUTION_CHANNEL,
    CustomerSalesAreaTax.DIVISION,
    CustomerSalesAreaTax.DEPARTURE_COUNTRY,
    CustomerSalesAreaTax.CUSTOMER_TAX_CATEGORY,
    CustomerSalesAreaTax.CUSTOMER_TAX_CLASSIFICATION
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<CustomerSalesAreaTax> = new AllFields('*', CustomerSalesAreaTax);
  /**
   * All key fields of the CustomerSalesAreaTax entity.
   */
  export const _keyFields: Array<Field<CustomerSalesAreaTax>> = [CustomerSalesAreaTax.CUSTOMER, CustomerSalesAreaTax.SALES_ORGANIZATION, CustomerSalesAreaTax.DISTRIBUTION_CHANNEL, CustomerSalesAreaTax.DIVISION, CustomerSalesAreaTax.DEPARTURE_COUNTRY, CustomerSalesAreaTax.CUSTOMER_TAX_CATEGORY];
  /**
   * Mapping of all key field names to the respective static field property CustomerSalesAreaTax.
   */
  export const _keys: { [keys: string]: Field<CustomerSalesAreaTax> } = CustomerSalesAreaTax._keyFields.reduce((acc: { [keys: string]: Field<CustomerSalesAreaTax> }, field: Field<CustomerSalesAreaTax>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
