/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BusinessPartnerTaxNumberRequestBuilder } from './BusinessPartnerTaxNumberRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "A_BusinessPartnerTaxNumber" of service "API_BUSINESS_PARTNER".
 */
export class BusinessPartnerTaxNumber extends Entity implements BusinessPartnerTaxNumberType {
  /**
   * Technical entity name for BusinessPartnerTaxNumber.
   */
  static _entityName = 'A_BusinessPartnerTaxNumber';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for BusinessPartnerTaxNumber.
   */
  static _serviceName = 'API_BUSINESS_PARTNER';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
  /**
   * Business Partner Number.
   * Key identifying a business partner in the SAP system. The key is unique within a client.
   * Maximum length: 10.
   */
  businessPartner!: string;
  /**
   * Tax Number Category.
   * Specifies the tax number category.
   * Maximum length: 4.
   */
  bpTaxType!: string;
  /**
   * Business Partner Tax Number.
   * Specifies the tax number.
   * Maximum length: 20.
   * @nullable
   */
  bpTaxNumber?: string;
  /**
   * Business Partner Tax Number.
   * Specifies the tax number.
   * You can enter up to 60 characters in this field.
   * Maximum length: 60.
   * @nullable
   */
  bpTaxLongNumber?: string;
  /**
   * Authorization Group.
   * You can use authorization groups to stipulate which business partners a user is allowed to process.
   * Use the following authorization object:'Business partners: authorization groups' (B_BUPA_GRP).The system only checks this authorization if you made an entry in the "Authorization group" field for the business partner. Otherwise, any user may process the business partner.
   * Maximum length: 4.
   * @nullable
   */
  authorizationGroup?: string;

  /**
   * Returns an entity builder to construct instances `BusinessPartnerTaxNumber`.
   * @returns A builder that constructs instances of entity type `BusinessPartnerTaxNumber`.
   */
  static builder(): EntityBuilderType<BusinessPartnerTaxNumber, BusinessPartnerTaxNumberTypeForceMandatory> {
    return Entity.entityBuilder(BusinessPartnerTaxNumber);
  }

  /**
   * Returns a request builder to construct requests for operations on the `BusinessPartnerTaxNumber` entity type.
   * @returns A `BusinessPartnerTaxNumber` request builder.
   */
  static requestBuilder(): BusinessPartnerTaxNumberRequestBuilder {
    return new BusinessPartnerTaxNumberRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `BusinessPartnerTaxNumber`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `BusinessPartnerTaxNumber`.
   */
  static customField(fieldName: string): CustomField<BusinessPartnerTaxNumber> {
    return Entity.customFieldSelector(fieldName, BusinessPartnerTaxNumber);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface BusinessPartnerTaxNumberType {
  businessPartner: string;
  bpTaxType: string;
  bpTaxNumber?: string;
  bpTaxLongNumber?: string;
  authorizationGroup?: string;
}

export interface BusinessPartnerTaxNumberTypeForceMandatory {
  businessPartner: string;
  bpTaxType: string;
  bpTaxNumber: string;
  bpTaxLongNumber: string;
  authorizationGroup: string;
}

export namespace BusinessPartnerTaxNumber {
  /**
   * Static representation of the [[businessPartner]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER: StringField<BusinessPartnerTaxNumber> = new StringField('BusinessPartner', BusinessPartnerTaxNumber, 'Edm.String');
  /**
   * Static representation of the [[bpTaxType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_TAX_TYPE: StringField<BusinessPartnerTaxNumber> = new StringField('BPTaxType', BusinessPartnerTaxNumber, 'Edm.String');
  /**
   * Static representation of the [[bpTaxNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_TAX_NUMBER: StringField<BusinessPartnerTaxNumber> = new StringField('BPTaxNumber', BusinessPartnerTaxNumber, 'Edm.String');
  /**
   * Static representation of the [[bpTaxLongNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_TAX_LONG_NUMBER: StringField<BusinessPartnerTaxNumber> = new StringField('BPTaxLongNumber', BusinessPartnerTaxNumber, 'Edm.String');
  /**
   * Static representation of the [[authorizationGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AUTHORIZATION_GROUP: StringField<BusinessPartnerTaxNumber> = new StringField('AuthorizationGroup', BusinessPartnerTaxNumber, 'Edm.String');
  /**
   * All fields of the BusinessPartnerTaxNumber entity.
   */
  export const _allFields: Array<StringField<BusinessPartnerTaxNumber>> = [
    BusinessPartnerTaxNumber.BUSINESS_PARTNER,
    BusinessPartnerTaxNumber.BP_TAX_TYPE,
    BusinessPartnerTaxNumber.BP_TAX_NUMBER,
    BusinessPartnerTaxNumber.BP_TAX_LONG_NUMBER,
    BusinessPartnerTaxNumber.AUTHORIZATION_GROUP
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<BusinessPartnerTaxNumber> = new AllFields('*', BusinessPartnerTaxNumber);
  /**
   * All key fields of the BusinessPartnerTaxNumber entity.
   */
  export const _keyFields: Array<Field<BusinessPartnerTaxNumber>> = [BusinessPartnerTaxNumber.BUSINESS_PARTNER, BusinessPartnerTaxNumber.BP_TAX_TYPE];
  /**
   * Mapping of all key field names to the respective static field property BusinessPartnerTaxNumber.
   */
  export const _keys: { [keys: string]: Field<BusinessPartnerTaxNumber> } = BusinessPartnerTaxNumber._keyFields.reduce((acc: { [keys: string]: Field<BusinessPartnerTaxNumber> }, field: Field<BusinessPartnerTaxNumber>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
