/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BpAddrDepdntIntlLocNumberRequestBuilder } from './BpAddrDepdntIntlLocNumberRequestBuilder';
import { AllFields, Constructable, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field, FieldBuilder } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "A_BPAddrDepdntIntlLocNumber" of service "API_BUSINESS_PARTNER".
 */
export class BpAddrDepdntIntlLocNumber extends EntityV2 implements BpAddrDepdntIntlLocNumberType {
  /**
   * Technical entity name for BpAddrDepdntIntlLocNumber.
   */
  static _entityName = 'A_BPAddrDepdntIntlLocNumber';
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
   * International location number  (part 1).
   * Maximum length: 7.
   * @nullable
   */
  internationalLocationNumber1?: string;
  /**
   * International location number (Part 2).
   * Maximum length: 5.
   * @nullable
   */
  internationalLocationNumber2?: string;
  /**
   * Check digit for the international location number.
   * Maximum length: 1.
   * @nullable
   */
  internationalLocationNumber3?: string;

  /**
   * Returns an entity builder to construct instances of `BpAddrDepdntIntlLocNumber`.
   * @returns A builder that constructs instances of entity type `BpAddrDepdntIntlLocNumber`.
   */
  static builder(): EntityBuilderType<BpAddrDepdntIntlLocNumber, BpAddrDepdntIntlLocNumberType> {
    return EntityV2.entityBuilder(BpAddrDepdntIntlLocNumber);
  }

  /**
   * Returns a request builder to construct requests for operations on the `BpAddrDepdntIntlLocNumber` entity type.
   * @returns A `BpAddrDepdntIntlLocNumber` request builder.
   */
  static requestBuilder(): BpAddrDepdntIntlLocNumberRequestBuilder {
    return new BpAddrDepdntIntlLocNumberRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `BpAddrDepdntIntlLocNumber`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `BpAddrDepdntIntlLocNumber`.
   */
  static customField(fieldName: string): CustomFieldV2<BpAddrDepdntIntlLocNumber> {
    return EntityV2.customFieldSelector(fieldName, BpAddrDepdntIntlLocNumber);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface BpAddrDepdntIntlLocNumberType {
  businessPartner: string;
  addressId: string;
  internationalLocationNumber1?: string | null;
  internationalLocationNumber2?: string | null;
  internationalLocationNumber3?: string | null;
}

export namespace BpAddrDepdntIntlLocNumber {
  const _fieldBuilder: FieldBuilder<Constructable<BpAddrDepdntIntlLocNumber>> = new FieldBuilder(BpAddrDepdntIntlLocNumber);
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
   * Static representation of the [[internationalLocationNumber1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INTERNATIONAL_LOCATION_NUMBER_1 = _fieldBuilder.buildEdmTypeField('InternationalLocationNumber1', 'Edm.String', true);
  /**
   * Static representation of the [[internationalLocationNumber2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INTERNATIONAL_LOCATION_NUMBER_2 = _fieldBuilder.buildEdmTypeField('InternationalLocationNumber2', 'Edm.String', true);
  /**
   * Static representation of the [[internationalLocationNumber3]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INTERNATIONAL_LOCATION_NUMBER_3 = _fieldBuilder.buildEdmTypeField('InternationalLocationNumber3', 'Edm.String', true);
  /**
   * All fields of the BpAddrDepdntIntlLocNumber entity.
   */
  export const _allFields: Array<EdmTypeField<BpAddrDepdntIntlLocNumber, 'Edm.String', false, true> | EdmTypeField<BpAddrDepdntIntlLocNumber, 'Edm.String', true, true>> = [
    BpAddrDepdntIntlLocNumber.BUSINESS_PARTNER,
    BpAddrDepdntIntlLocNumber.ADDRESS_ID,
    BpAddrDepdntIntlLocNumber.INTERNATIONAL_LOCATION_NUMBER_1,
    BpAddrDepdntIntlLocNumber.INTERNATIONAL_LOCATION_NUMBER_2,
    BpAddrDepdntIntlLocNumber.INTERNATIONAL_LOCATION_NUMBER_3
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<BpAddrDepdntIntlLocNumber> = new AllFields('*', BpAddrDepdntIntlLocNumber);
  /**
   * All key fields of the BpAddrDepdntIntlLocNumber entity.
   */
  export const _keyFields: Array<Field<BpAddrDepdntIntlLocNumber, boolean, boolean>> = [BpAddrDepdntIntlLocNumber.BUSINESS_PARTNER, BpAddrDepdntIntlLocNumber.ADDRESS_ID];
  /**
   * Mapping of all key field names to the respective static field property BpAddrDepdntIntlLocNumber.
   */
  export const _keys: { [keys: string]: Field<BpAddrDepdntIntlLocNumber, boolean, boolean> } = BpAddrDepdntIntlLocNumber._keyFields.reduce((acc: { [keys: string]: Field<BpAddrDepdntIntlLocNumber, boolean, boolean> }, field: Field<BpAddrDepdntIntlLocNumber, boolean, boolean>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
