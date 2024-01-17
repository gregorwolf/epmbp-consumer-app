/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BusinessPartnerTaxNumberRequestBuilder } from './BusinessPartnerTaxNumberRequestBuilder';
import { AllFields, Constructable, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field, FieldBuilder } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "A_BusinessPartnerTaxNumber" of service "API_BUSINESS_PARTNER".
 */
export class BusinessPartnerTaxNumber extends EntityV2 implements BusinessPartnerTaxNumberType {
  /**
   * Technical entity name for BusinessPartnerTaxNumber.
   */
  static _entityName = 'A_BusinessPartnerTaxNumber';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
  /**
   * Business Partner Number.
   * Maximum length: 10.
   */
  businessPartner!: string;
  /**
   * Tax Number Category.
   * Maximum length: 4.
   */
  bpTaxType!: string;
  /**
   * Business Partner Tax Number.
   * Maximum length: 20.
   * @nullable
   */
  bpTaxNumber?: string;
  /**
   * Business Partner Tax Number.
   * Maximum length: 60.
   * @nullable
   */
  bpTaxLongNumber?: string;
  /**
   * Authorization Group.
   * Maximum length: 4.
   * @nullable
   */
  authorizationGroup?: string;

  /**
   * Returns an entity builder to construct instances of `BusinessPartnerTaxNumber`.
   * @returns A builder that constructs instances of entity type `BusinessPartnerTaxNumber`.
   */
  static builder(): EntityBuilderType<BusinessPartnerTaxNumber, BusinessPartnerTaxNumberType> {
    return EntityV2.entityBuilder(BusinessPartnerTaxNumber);
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
  static customField(fieldName: string): CustomFieldV2<BusinessPartnerTaxNumber> {
    return EntityV2.customFieldSelector(fieldName, BusinessPartnerTaxNumber);
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
  bpTaxNumber?: string | null;
  bpTaxLongNumber?: string | null;
  authorizationGroup?: string | null;
}

export namespace BusinessPartnerTaxNumber {
  const _fieldBuilder: FieldBuilder<Constructable<BusinessPartnerTaxNumber>> = new FieldBuilder(BusinessPartnerTaxNumber);
  /**
   * Static representation of the [[businessPartner]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER = _fieldBuilder.buildEdmTypeField('BusinessPartner', 'Edm.String', false);
  /**
   * Static representation of the [[bpTaxType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_TAX_TYPE = _fieldBuilder.buildEdmTypeField('BPTaxType', 'Edm.String', false);
  /**
   * Static representation of the [[bpTaxNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_TAX_NUMBER = _fieldBuilder.buildEdmTypeField('BPTaxNumber', 'Edm.String', true);
  /**
   * Static representation of the [[bpTaxLongNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_TAX_LONG_NUMBER = _fieldBuilder.buildEdmTypeField('BPTaxLongNumber', 'Edm.String', true);
  /**
   * Static representation of the [[authorizationGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AUTHORIZATION_GROUP = _fieldBuilder.buildEdmTypeField('AuthorizationGroup', 'Edm.String', true);
  /**
   * All fields of the BusinessPartnerTaxNumber entity.
   */
  export const _allFields: Array<EdmTypeField<BusinessPartnerTaxNumber, 'Edm.String', false, true> | EdmTypeField<BusinessPartnerTaxNumber, 'Edm.String', true, true>> = [
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
  export const _keyFields: Array<Field<BusinessPartnerTaxNumber, boolean, boolean>> = [BusinessPartnerTaxNumber.BUSINESS_PARTNER, BusinessPartnerTaxNumber.BP_TAX_TYPE];
  /**
   * Mapping of all key field names to the respective static field property BusinessPartnerTaxNumber.
   */
  export const _keys: { [keys: string]: Field<BusinessPartnerTaxNumber, boolean, boolean> } = BusinessPartnerTaxNumber._keyFields.reduce((acc: { [keys: string]: Field<BusinessPartnerTaxNumber, boolean, boolean> }, field: Field<BusinessPartnerTaxNumber, boolean, boolean>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
