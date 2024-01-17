/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BuPaAddressUsageRequestBuilder } from './BuPaAddressUsageRequestBuilder';
import { Moment } from 'moment';
import { AllFields, Constructable, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field, FieldBuilder, OrderableEdmTypeField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "A_BuPaAddressUsage" of service "API_BUSINESS_PARTNER".
 */
export class BuPaAddressUsage extends EntityV2 implements BuPaAddressUsageType {
  /**
   * Technical entity name for BuPaAddressUsage.
   */
  static _entityName = 'A_BuPaAddressUsage';
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
   * Validity End of a Business Partner Address Usage.
   */
  validityEndDate!: Moment;
  /**
   * Address Type.
   * Maximum length: 10.
   */
  addressUsage!: string;
  /**
   * Address Number.
   * Maximum length: 10.
   */
  addressId!: string;
  /**
   * Validity Start of a Business Partner Address Usage.
   * @nullable
   */
  validityStartDate?: Moment;
  /**
   * Indicator: Standard Address Usage.
   * @nullable
   */
  standardUsage?: boolean;
  /**
   * Authorization Group.
   * Maximum length: 4.
   * @nullable
   */
  authorizationGroup?: string;

  /**
   * Returns an entity builder to construct instances of `BuPaAddressUsage`.
   * @returns A builder that constructs instances of entity type `BuPaAddressUsage`.
   */
  static builder(): EntityBuilderType<BuPaAddressUsage, BuPaAddressUsageType> {
    return EntityV2.entityBuilder(BuPaAddressUsage);
  }

  /**
   * Returns a request builder to construct requests for operations on the `BuPaAddressUsage` entity type.
   * @returns A `BuPaAddressUsage` request builder.
   */
  static requestBuilder(): BuPaAddressUsageRequestBuilder {
    return new BuPaAddressUsageRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `BuPaAddressUsage`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `BuPaAddressUsage`.
   */
  static customField(fieldName: string): CustomFieldV2<BuPaAddressUsage> {
    return EntityV2.customFieldSelector(fieldName, BuPaAddressUsage);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface BuPaAddressUsageType {
  businessPartner: string;
  validityEndDate: Moment;
  addressUsage: string;
  addressId: string;
  validityStartDate?: Moment | null;
  standardUsage?: boolean | null;
  authorizationGroup?: string | null;
}

export namespace BuPaAddressUsage {
  const _fieldBuilder: FieldBuilder<Constructable<BuPaAddressUsage>> = new FieldBuilder(BuPaAddressUsage);
  /**
   * Static representation of the [[businessPartner]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER = _fieldBuilder.buildEdmTypeField('BusinessPartner', 'Edm.String', false);
  /**
   * Static representation of the [[validityEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VALIDITY_END_DATE = _fieldBuilder.buildEdmTypeField('ValidityEndDate', 'Edm.DateTimeOffset', false);
  /**
   * Static representation of the [[addressUsage]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_USAGE = _fieldBuilder.buildEdmTypeField('AddressUsage', 'Edm.String', false);
  /**
   * Static representation of the [[addressId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_ID = _fieldBuilder.buildEdmTypeField('AddressID', 'Edm.String', false);
  /**
   * Static representation of the [[validityStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VALIDITY_START_DATE = _fieldBuilder.buildEdmTypeField('ValidityStartDate', 'Edm.DateTimeOffset', true);
  /**
   * Static representation of the [[standardUsage]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STANDARD_USAGE = _fieldBuilder.buildEdmTypeField('StandardUsage', 'Edm.Boolean', true);
  /**
   * Static representation of the [[authorizationGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AUTHORIZATION_GROUP = _fieldBuilder.buildEdmTypeField('AuthorizationGroup', 'Edm.String', true);
  /**
   * All fields of the BuPaAddressUsage entity.
   */
  export const _allFields: Array<EdmTypeField<BuPaAddressUsage, 'Edm.String', false, true> | OrderableEdmTypeField<BuPaAddressUsage, 'Edm.DateTimeOffset', false, true> | OrderableEdmTypeField<BuPaAddressUsage, 'Edm.DateTimeOffset', true, true> | EdmTypeField<BuPaAddressUsage, 'Edm.Boolean', true, true> | EdmTypeField<BuPaAddressUsage, 'Edm.String', true, true>> = [
    BuPaAddressUsage.BUSINESS_PARTNER,
    BuPaAddressUsage.VALIDITY_END_DATE,
    BuPaAddressUsage.ADDRESS_USAGE,
    BuPaAddressUsage.ADDRESS_ID,
    BuPaAddressUsage.VALIDITY_START_DATE,
    BuPaAddressUsage.STANDARD_USAGE,
    BuPaAddressUsage.AUTHORIZATION_GROUP
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<BuPaAddressUsage> = new AllFields('*', BuPaAddressUsage);
  /**
   * All key fields of the BuPaAddressUsage entity.
   */
  export const _keyFields: Array<Field<BuPaAddressUsage, boolean, boolean>> = [BuPaAddressUsage.BUSINESS_PARTNER, BuPaAddressUsage.VALIDITY_END_DATE, BuPaAddressUsage.ADDRESS_USAGE, BuPaAddressUsage.ADDRESS_ID];
  /**
   * Mapping of all key field names to the respective static field property BuPaAddressUsage.
   */
  export const _keys: { [keys: string]: Field<BuPaAddressUsage, boolean, boolean> } = BuPaAddressUsage._keyFields.reduce((acc: { [keys: string]: Field<BuPaAddressUsage, boolean, boolean> }, field: Field<BuPaAddressUsage, boolean, boolean>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
