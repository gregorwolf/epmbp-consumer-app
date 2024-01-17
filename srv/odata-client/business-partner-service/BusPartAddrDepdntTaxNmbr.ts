/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BusPartAddrDepdntTaxNmbrRequestBuilder } from './BusPartAddrDepdntTaxNmbrRequestBuilder';
import { AllFields, Constructable, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field, FieldBuilder } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "A_BusPartAddrDepdntTaxNmbr" of service "API_BUSINESS_PARTNER".
 */
export class BusPartAddrDepdntTaxNmbr extends EntityV2 implements BusPartAddrDepdntTaxNmbrType {
  /**
   * Technical entity name for BusPartAddrDepdntTaxNmbr.
   */
  static _entityName = 'A_BusPartAddrDepdntTaxNmbr';
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
   * Address Number.
   * Maximum length: 10.
   */
  addressId!: string;
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
   * Returns an entity builder to construct instances of `BusPartAddrDepdntTaxNmbr`.
   * @returns A builder that constructs instances of entity type `BusPartAddrDepdntTaxNmbr`.
   */
  static builder(): EntityBuilderType<BusPartAddrDepdntTaxNmbr, BusPartAddrDepdntTaxNmbrType> {
    return EntityV2.entityBuilder(BusPartAddrDepdntTaxNmbr);
  }

  /**
   * Returns a request builder to construct requests for operations on the `BusPartAddrDepdntTaxNmbr` entity type.
   * @returns A `BusPartAddrDepdntTaxNmbr` request builder.
   */
  static requestBuilder(): BusPartAddrDepdntTaxNmbrRequestBuilder {
    return new BusPartAddrDepdntTaxNmbrRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `BusPartAddrDepdntTaxNmbr`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `BusPartAddrDepdntTaxNmbr`.
   */
  static customField(fieldName: string): CustomFieldV2<BusPartAddrDepdntTaxNmbr> {
    return EntityV2.customFieldSelector(fieldName, BusPartAddrDepdntTaxNmbr);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface BusPartAddrDepdntTaxNmbrType {
  businessPartner: string;
  addressId: string;
  bpTaxType: string;
  bpTaxNumber?: string | null;
  bpTaxLongNumber?: string | null;
  authorizationGroup?: string | null;
}

export namespace BusPartAddrDepdntTaxNmbr {
  const _fieldBuilder: FieldBuilder<Constructable<BusPartAddrDepdntTaxNmbr>> = new FieldBuilder(BusPartAddrDepdntTaxNmbr);
  /**
   * Static representation of the [[businessPartner]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER = _fieldBuilder.buildEdmTypeField('BusinessPartner', 'Edm.String', false);
  /**
   * Static representation of the [[addressId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_ID = _fieldBuilder.buildEdmTypeField('AddressID', 'Edm.String', false);
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
   * All fields of the BusPartAddrDepdntTaxNmbr entity.
   */
  export const _allFields: Array<EdmTypeField<BusPartAddrDepdntTaxNmbr, 'Edm.String', false, true> | EdmTypeField<BusPartAddrDepdntTaxNmbr, 'Edm.String', true, true>> = [
    BusPartAddrDepdntTaxNmbr.BUSINESS_PARTNER,
    BusPartAddrDepdntTaxNmbr.ADDRESS_ID,
    BusPartAddrDepdntTaxNmbr.BP_TAX_TYPE,
    BusPartAddrDepdntTaxNmbr.BP_TAX_NUMBER,
    BusPartAddrDepdntTaxNmbr.BP_TAX_LONG_NUMBER,
    BusPartAddrDepdntTaxNmbr.AUTHORIZATION_GROUP
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<BusPartAddrDepdntTaxNmbr> = new AllFields('*', BusPartAddrDepdntTaxNmbr);
  /**
   * All key fields of the BusPartAddrDepdntTaxNmbr entity.
   */
  export const _keyFields: Array<Field<BusPartAddrDepdntTaxNmbr, boolean, boolean>> = [BusPartAddrDepdntTaxNmbr.BUSINESS_PARTNER, BusPartAddrDepdntTaxNmbr.ADDRESS_ID, BusPartAddrDepdntTaxNmbr.BP_TAX_TYPE];
  /**
   * Mapping of all key field names to the respective static field property BusPartAddrDepdntTaxNmbr.
   */
  export const _keys: { [keys: string]: Field<BusPartAddrDepdntTaxNmbr, boolean, boolean> } = BusPartAddrDepdntTaxNmbr._keyFields.reduce((acc: { [keys: string]: Field<BusPartAddrDepdntTaxNmbr, boolean, boolean> }, field: Field<BusPartAddrDepdntTaxNmbr, boolean, boolean>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
