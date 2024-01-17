/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CustSalesPartnerFuncRequestBuilder } from './CustSalesPartnerFuncRequestBuilder';
import { AllFields, Constructable, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field, FieldBuilder } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "A_CustSalesPartnerFunc" of service "API_BUSINESS_PARTNER".
 */
export class CustSalesPartnerFunc extends EntityV2 implements CustSalesPartnerFuncType {
  /**
   * Technical entity name for CustSalesPartnerFunc.
   */
  static _entityName = 'A_CustSalesPartnerFunc';
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
   * Partner counter.
   * Maximum length: 3.
   */
  partnerCounter!: string;
  /**
   * Partner Function.
   * Maximum length: 2.
   */
  partnerFunction!: string;
  /**
   * Account Number of Supplier.
   * Maximum length: 10.
   * @nullable
   */
  bpCustomerNumber?: string;
  /**
   * Cust.-Specif. Descr. of Business Partner (Plant, Stor. Loc.).
   * Maximum length: 30.
   * @nullable
   */
  customerPartnerDescription?: string;
  /**
   * Default Partner.
   * @nullable
   */
  defaultPartner?: boolean;
  /**
   * Account Number of Supplier.
   * Maximum length: 10.
   * @nullable
   */
  supplier?: string;
  /**
   * Personnel Number.
   * Maximum length: 8.
   * @nullable
   */
  personnelNumber?: string;
  /**
   * Number of Contact Person.
   * Maximum length: 10.
   * @nullable
   */
  contactPerson?: string;
  /**
   * Business Partner Address Number (from BUT020).
   * Maximum length: 10.
   * @nullable
   */
  addressId?: string;
  /**
   * Authorization Group.
   * Maximum length: 4.
   * @nullable
   */
  authorizationGroup?: string;

  /**
   * Returns an entity builder to construct instances of `CustSalesPartnerFunc`.
   * @returns A builder that constructs instances of entity type `CustSalesPartnerFunc`.
   */
  static builder(): EntityBuilderType<CustSalesPartnerFunc, CustSalesPartnerFuncType> {
    return EntityV2.entityBuilder(CustSalesPartnerFunc);
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
  static customField(fieldName: string): CustomFieldV2<CustSalesPartnerFunc> {
    return EntityV2.customFieldSelector(fieldName, CustSalesPartnerFunc);
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
  bpCustomerNumber?: string | null;
  customerPartnerDescription?: string | null;
  defaultPartner?: boolean | null;
  supplier?: string | null;
  personnelNumber?: string | null;
  contactPerson?: string | null;
  addressId?: string | null;
  authorizationGroup?: string | null;
}

export namespace CustSalesPartnerFunc {
  const _fieldBuilder: FieldBuilder<Constructable<CustSalesPartnerFunc>> = new FieldBuilder(CustSalesPartnerFunc);
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
   * Static representation of the [[partnerCounter]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARTNER_COUNTER = _fieldBuilder.buildEdmTypeField('PartnerCounter', 'Edm.String', false);
  /**
   * Static representation of the [[partnerFunction]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARTNER_FUNCTION = _fieldBuilder.buildEdmTypeField('PartnerFunction', 'Edm.String', false);
  /**
   * Static representation of the [[bpCustomerNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_CUSTOMER_NUMBER = _fieldBuilder.buildEdmTypeField('BPCustomerNumber', 'Edm.String', true);
  /**
   * Static representation of the [[customerPartnerDescription]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER_PARTNER_DESCRIPTION = _fieldBuilder.buildEdmTypeField('CustomerPartnerDescription', 'Edm.String', true);
  /**
   * Static representation of the [[defaultPartner]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEFAULT_PARTNER = _fieldBuilder.buildEdmTypeField('DefaultPartner', 'Edm.Boolean', true);
  /**
   * Static representation of the [[supplier]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPPLIER = _fieldBuilder.buildEdmTypeField('Supplier', 'Edm.String', true);
  /**
   * Static representation of the [[personnelNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERSONNEL_NUMBER = _fieldBuilder.buildEdmTypeField('PersonnelNumber', 'Edm.String', true);
  /**
   * Static representation of the [[contactPerson]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTACT_PERSON = _fieldBuilder.buildEdmTypeField('ContactPerson', 'Edm.String', true);
  /**
   * Static representation of the [[addressId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_ID = _fieldBuilder.buildEdmTypeField('AddressID', 'Edm.String', true);
  /**
   * Static representation of the [[authorizationGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AUTHORIZATION_GROUP = _fieldBuilder.buildEdmTypeField('AuthorizationGroup', 'Edm.String', true);
  /**
   * All fields of the CustSalesPartnerFunc entity.
   */
  export const _allFields: Array<EdmTypeField<CustSalesPartnerFunc, 'Edm.String', false, true> | EdmTypeField<CustSalesPartnerFunc, 'Edm.String', true, true> | EdmTypeField<CustSalesPartnerFunc, 'Edm.Boolean', true, true>> = [
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
    CustSalesPartnerFunc.ADDRESS_ID,
    CustSalesPartnerFunc.AUTHORIZATION_GROUP
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<CustSalesPartnerFunc> = new AllFields('*', CustSalesPartnerFunc);
  /**
   * All key fields of the CustSalesPartnerFunc entity.
   */
  export const _keyFields: Array<Field<CustSalesPartnerFunc, boolean, boolean>> = [CustSalesPartnerFunc.CUSTOMER, CustSalesPartnerFunc.SALES_ORGANIZATION, CustSalesPartnerFunc.DISTRIBUTION_CHANNEL, CustSalesPartnerFunc.DIVISION, CustSalesPartnerFunc.PARTNER_COUNTER, CustSalesPartnerFunc.PARTNER_FUNCTION];
  /**
   * Mapping of all key field names to the respective static field property CustSalesPartnerFunc.
   */
  export const _keys: { [keys: string]: Field<CustSalesPartnerFunc, boolean, boolean> } = CustSalesPartnerFunc._keyFields.reduce((acc: { [keys: string]: Field<CustSalesPartnerFunc, boolean, boolean> }, field: Field<CustSalesPartnerFunc, boolean, boolean>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
