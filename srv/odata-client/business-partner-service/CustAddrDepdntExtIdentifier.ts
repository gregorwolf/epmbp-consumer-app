/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CustAddrDepdntExtIdentifierRequestBuilder } from './CustAddrDepdntExtIdentifierRequestBuilder';
import { AllFields, Constructable, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field, FieldBuilder } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "A_CustAddrDepdntExtIdentifier" of service "API_BUSINESS_PARTNER".
 */
export class CustAddrDepdntExtIdentifier extends EntityV2 implements CustAddrDepdntExtIdentifierType {
  /**
   * Technical entity name for CustAddrDepdntExtIdentifier.
   */
  static _entityName = 'A_CustAddrDepdntExtIdentifier';
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
   * Business Partner Address Number (from BUT020).
   * Maximum length: 10.
   */
  addressId!: string;
  /**
   * Seller-Defined Customer Address ID for EDI.
   * Maximum length: 12.
   * @nullable
   */
  customerExternalRefId?: string;

  /**
   * Returns an entity builder to construct instances of `CustAddrDepdntExtIdentifier`.
   * @returns A builder that constructs instances of entity type `CustAddrDepdntExtIdentifier`.
   */
  static builder(): EntityBuilderType<CustAddrDepdntExtIdentifier, CustAddrDepdntExtIdentifierType> {
    return EntityV2.entityBuilder(CustAddrDepdntExtIdentifier);
  }

  /**
   * Returns a request builder to construct requests for operations on the `CustAddrDepdntExtIdentifier` entity type.
   * @returns A `CustAddrDepdntExtIdentifier` request builder.
   */
  static requestBuilder(): CustAddrDepdntExtIdentifierRequestBuilder {
    return new CustAddrDepdntExtIdentifierRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `CustAddrDepdntExtIdentifier`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `CustAddrDepdntExtIdentifier`.
   */
  static customField(fieldName: string): CustomFieldV2<CustAddrDepdntExtIdentifier> {
    return EntityV2.customFieldSelector(fieldName, CustAddrDepdntExtIdentifier);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface CustAddrDepdntExtIdentifierType {
  customer: string;
  addressId: string;
  customerExternalRefId?: string | null;
}

export namespace CustAddrDepdntExtIdentifier {
  const _fieldBuilder: FieldBuilder<Constructable<CustAddrDepdntExtIdentifier>> = new FieldBuilder(CustAddrDepdntExtIdentifier);
  /**
   * Static representation of the [[customer]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER = _fieldBuilder.buildEdmTypeField('Customer', 'Edm.String', false);
  /**
   * Static representation of the [[addressId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_ID = _fieldBuilder.buildEdmTypeField('AddressID', 'Edm.String', false);
  /**
   * Static representation of the [[customerExternalRefId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER_EXTERNAL_REF_ID = _fieldBuilder.buildEdmTypeField('CustomerExternalRefID', 'Edm.String', true);
  /**
   * All fields of the CustAddrDepdntExtIdentifier entity.
   */
  export const _allFields: Array<EdmTypeField<CustAddrDepdntExtIdentifier, 'Edm.String', false, true> | EdmTypeField<CustAddrDepdntExtIdentifier, 'Edm.String', true, true>> = [
    CustAddrDepdntExtIdentifier.CUSTOMER,
    CustAddrDepdntExtIdentifier.ADDRESS_ID,
    CustAddrDepdntExtIdentifier.CUSTOMER_EXTERNAL_REF_ID
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<CustAddrDepdntExtIdentifier> = new AllFields('*', CustAddrDepdntExtIdentifier);
  /**
   * All key fields of the CustAddrDepdntExtIdentifier entity.
   */
  export const _keyFields: Array<Field<CustAddrDepdntExtIdentifier, boolean, boolean>> = [CustAddrDepdntExtIdentifier.CUSTOMER, CustAddrDepdntExtIdentifier.ADDRESS_ID];
  /**
   * Mapping of all key field names to the respective static field property CustAddrDepdntExtIdentifier.
   */
  export const _keys: { [keys: string]: Field<CustAddrDepdntExtIdentifier, boolean, boolean> } = CustAddrDepdntExtIdentifier._keyFields.reduce((acc: { [keys: string]: Field<CustAddrDepdntExtIdentifier, boolean, boolean> }, field: Field<CustAddrDepdntExtIdentifier, boolean, boolean>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
