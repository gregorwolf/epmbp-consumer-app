/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CustSalesPartnerFuncRequestBuilder } from './CustSalesPartnerFuncRequestBuilder';
import { AllFields, BooleanField, CustomField, Entity, EntityBuilderType, Field, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "A_CustSalesPartnerFunc" of service "API_BUSINESS_PARTNER".
 */
export class CustSalesPartnerFunc extends Entity implements CustSalesPartnerFuncType {
  /**
   * Technical entity name for CustSalesPartnerFunc.
   */
  static _entityName = 'A_CustSalesPartnerFunc';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for CustSalesPartnerFunc.
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
   * Distribution Channel.
   * The way in which products or services reach the customer. Typical examples of distribution channels are wholesale, retail, or direct sales.
   * You can maintain information about customers and materials by sales organization and distribution channel. Within a sales organization you can deliver goods to a given customer through more than one distribution channel.You can assign a distribution channel to one or more sales organizations. If, for example, you have numerous sales organizations, each sales organization may use the "Wholesale" distribution channel.For each combination of sales organization and distribution channel, you can further assign one or more of the divisions that are defined for the sales organization. You can, for example, assign "Food" and "Non-food" divisions to the "Wholesale" distribution channel. A particular combination of sales organization, distribution channel, and division is known as a sales area.
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
   * Partner counter.
   * The sequential number that the system applies when there is more than one partner for a particular partner function.
   * When you create a sales order for a particular customer, there may be more than one ship-to party defined. The different ship-to parties are numbered sequentially.
   * Maximum length: 3.
   */
  partnerCounter!: string;
  /**
   * Partner Function.
   * The abbreviated form of the name that identifies the partner function.
   * Maximum length: 2.
   */
  partnerFunction!: string;
  /**
   * Customer number of business partner.
   * Maximum length: 10.
   * @nullable
   */
  bpCustomerNumber?: string;
  /**
   * Cust.-Specif. Descr. of Business Partner (Plant, Stor. Loc.).
   * Sold-to party number sent in by the customer in delivery schedules.
   * The system uses this number to automatically determine the ship-to party.
   * Maximum length: 30.
   * @nullable
   */
  customerPartnerDescription?: string;
  /**
   * Default Partner.
   * Specifies a partner as the default for a particular partner function.
   * When you enter more than one partner for a particular partner function (for example, you define three different ship-to parties), you can select one partner as the default. During sales or purchasing processing, if you have defined multiple partners for a partner function, the system prompts you to choose just one partner. The system presents the default partner as the first choice in the pop-up window.
   * @nullable
   */
  defaultPartner?: boolean;
  /**
   * Account Number of Supplier.
   * Specifies an alphanumeric key that uniquely identifies the supplier in the SAP system.
   * Maximum length: 10.
   * @nullable
   */
  supplier?: string;
  /**
   * Personnel Number.
   * The personnel number is the only feature within a client which is unique to an employee. You have to enter a personnel number before you can display and maintain an employee's master data and time data.
   * Maximum length: 8.
   * @nullable
   */
  personnelNumber?: string;
  /**
   * Number of contact person.
   * The number that uniquely identifies the contact person.
   * Maximum length: 10.
   * @nullable
   */
  contactPerson?: string;
  /**
   * Authorization Group.
   * The authorization group allows extended authorization protection for particular objects. The authorization groups are freely definable. The authorization groups usually occur in authorization objects together with an activity.
   * Maximum length: 4.
   * @nullable
   */
  authorizationGroup?: string;

  /**
   * Returns an entity builder to construct instances `CustSalesPartnerFunc`.
   * @returns A builder that constructs instances of entity type `CustSalesPartnerFunc`.
   */
  static builder(): EntityBuilderType<CustSalesPartnerFunc, CustSalesPartnerFuncTypeForceMandatory> {
    return Entity.entityBuilder(CustSalesPartnerFunc);
  }

  /**
   * Returns a request builder to construct requests for operations on the `CustSalesPartnerFunc` entity type.
   * @returns A `CustSalesPartnerFunc` request builder.
   */
  static requestBuilder(): CustSalesPartnerFuncRequestBuilder {
    return new CustSalesPartnerFuncRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `CustSalesPartnerFunc`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `CustSalesPartnerFunc`.
   */
  static customField(fieldName: string): CustomField<CustSalesPartnerFunc> {
    return Entity.customFieldSelector(fieldName, CustSalesPartnerFunc);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface CustSalesPartnerFuncType {
  customer: string;
  salesOrganization: string;
  distributionChannel: string;
  division: string;
  partnerCounter: string;
  partnerFunction: string;
  bpCustomerNumber?: string;
  customerPartnerDescription?: string;
  defaultPartner?: boolean;
  supplier?: string;
  personnelNumber?: string;
  contactPerson?: string;
  authorizationGroup?: string;
}

export interface CustSalesPartnerFuncTypeForceMandatory {
  customer: string;
  salesOrganization: string;
  distributionChannel: string;
  division: string;
  partnerCounter: string;
  partnerFunction: string;
  bpCustomerNumber: string;
  customerPartnerDescription: string;
  defaultPartner: boolean;
  supplier: string;
  personnelNumber: string;
  contactPerson: string;
  authorizationGroup: string;
}

export namespace CustSalesPartnerFunc {
  /**
   * Static representation of the [[customer]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER: StringField<CustSalesPartnerFunc> = new StringField('Customer', CustSalesPartnerFunc, 'Edm.String');
  /**
   * Static representation of the [[salesOrganization]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_ORGANIZATION: StringField<CustSalesPartnerFunc> = new StringField('SalesOrganization', CustSalesPartnerFunc, 'Edm.String');
  /**
   * Static representation of the [[distributionChannel]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DISTRIBUTION_CHANNEL: StringField<CustSalesPartnerFunc> = new StringField('DistributionChannel', CustSalesPartnerFunc, 'Edm.String');
  /**
   * Static representation of the [[division]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DIVISION: StringField<CustSalesPartnerFunc> = new StringField('Division', CustSalesPartnerFunc, 'Edm.String');
  /**
   * Static representation of the [[partnerCounter]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARTNER_COUNTER: StringField<CustSalesPartnerFunc> = new StringField('PartnerCounter', CustSalesPartnerFunc, 'Edm.String');
  /**
   * Static representation of the [[partnerFunction]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARTNER_FUNCTION: StringField<CustSalesPartnerFunc> = new StringField('PartnerFunction', CustSalesPartnerFunc, 'Edm.String');
  /**
   * Static representation of the [[bpCustomerNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_CUSTOMER_NUMBER: StringField<CustSalesPartnerFunc> = new StringField('BPCustomerNumber', CustSalesPartnerFunc, 'Edm.String');
  /**
   * Static representation of the [[customerPartnerDescription]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER_PARTNER_DESCRIPTION: StringField<CustSalesPartnerFunc> = new StringField('CustomerPartnerDescription', CustSalesPartnerFunc, 'Edm.String');
  /**
   * Static representation of the [[defaultPartner]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEFAULT_PARTNER: BooleanField<CustSalesPartnerFunc> = new BooleanField('DefaultPartner', CustSalesPartnerFunc, 'Edm.Boolean');
  /**
   * Static representation of the [[supplier]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPPLIER: StringField<CustSalesPartnerFunc> = new StringField('Supplier', CustSalesPartnerFunc, 'Edm.String');
  /**
   * Static representation of the [[personnelNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERSONNEL_NUMBER: StringField<CustSalesPartnerFunc> = new StringField('PersonnelNumber', CustSalesPartnerFunc, 'Edm.String');
  /**
   * Static representation of the [[contactPerson]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTACT_PERSON: StringField<CustSalesPartnerFunc> = new StringField('ContactPerson', CustSalesPartnerFunc, 'Edm.String');
  /**
   * Static representation of the [[authorizationGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AUTHORIZATION_GROUP: StringField<CustSalesPartnerFunc> = new StringField('AuthorizationGroup', CustSalesPartnerFunc, 'Edm.String');
  /**
   * All fields of the CustSalesPartnerFunc entity.
   */
  export const _allFields: Array<StringField<CustSalesPartnerFunc> | BooleanField<CustSalesPartnerFunc>> = [
    CustSalesPartnerFunc.CUSTOMER,
    CustSalesPartnerFunc.SALES_ORGANIZATION,
    CustSalesPartnerFunc.DISTRIBUTION_CHANNEL,
    CustSalesPartnerFunc.DIVISION,
    CustSalesPartnerFunc.PARTNER_COUNTER,
    CustSalesPartnerFunc.PARTNER_FUNCTION,
    CustSalesPartnerFunc.BP_CUSTOMER_NUMBER,
    CustSalesPartnerFunc.CUSTOMER_PARTNER_DESCRIPTION,
    CustSalesPartnerFunc.DEFAULT_PARTNER,
    CustSalesPartnerFunc.SUPPLIER,
    CustSalesPartnerFunc.PERSONNEL_NUMBER,
    CustSalesPartnerFunc.CONTACT_PERSON,
    CustSalesPartnerFunc.AUTHORIZATION_GROUP
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<CustSalesPartnerFunc> = new AllFields('*', CustSalesPartnerFunc);
  /**
   * All key fields of the CustSalesPartnerFunc entity.
   */
  export const _keyFields: Array<Field<CustSalesPartnerFunc>> = [CustSalesPartnerFunc.CUSTOMER, CustSalesPartnerFunc.SALES_ORGANIZATION, CustSalesPartnerFunc.DISTRIBUTION_CHANNEL, CustSalesPartnerFunc.DIVISION, CustSalesPartnerFunc.PARTNER_COUNTER, CustSalesPartnerFunc.PARTNER_FUNCTION];
  /**
   * Mapping of all key field names to the respective static field property CustSalesPartnerFunc.
   */
  export const _keys: { [keys: string]: Field<CustSalesPartnerFunc> } = CustSalesPartnerFunc._keyFields.reduce((acc: { [keys: string]: Field<CustSalesPartnerFunc> }, field: Field<CustSalesPartnerFunc>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
