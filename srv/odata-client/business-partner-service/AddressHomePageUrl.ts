/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AddressHomePageUrlRequestBuilder } from './AddressHomePageUrlRequestBuilder';
import { Moment } from 'moment';
import { AllFields, Constructable, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field, FieldBuilder, OrderableEdmTypeField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "A_AddressHomePageURL" of service "API_BUSINESS_PARTNER".
 */
export class AddressHomePageUrl extends EntityV2 implements AddressHomePageUrlType {
  /**
   * Technical entity name for AddressHomePageUrl.
   */
  static _entityName = 'A_AddressHomePageURL';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
  /**
   * Address Number.
   * Maximum length: 10.
   */
  addressId!: string;
  /**
   * Person Number.
   * Maximum length: 10.
   */
  person!: string;
  /**
   * Sequence Number.
   * Maximum length: 3.
   */
  ordinalNumber!: string;
  /**
   * Valid-from date - in current Release only 00010101 possible.
   */
  validityStartDate!: Moment;
  /**
   * Flag: this address is the default address.
   */
  isDefaultUrlAddress!: boolean;
  /**
   * URI address search field.
   * Maximum length: 50.
   * @nullable
   */
  searchUrlAddress?: string;
  /**
   * Communication link notes.
   * Maximum length: 50.
   * @nullable
   */
  addressCommunicationRemarkText?: string;
  /**
   * URI field length.
   * @nullable
   */
  urlFieldLength?: number;
  /**
   * Universal Resource Identifier (URI).
   * Maximum length: 2048.
   * @nullable
   */
  websiteUrl?: string;

  /**
   * Returns an entity builder to construct instances of `AddressHomePageUrl`.
   * @returns A builder that constructs instances of entity type `AddressHomePageUrl`.
   */
  static builder(): EntityBuilderType<AddressHomePageUrl, AddressHomePageUrlType> {
    return EntityV2.entityBuilder(AddressHomePageUrl);
  }

  /**
   * Returns a request builder to construct requests for operations on the `AddressHomePageUrl` entity type.
   * @returns A `AddressHomePageUrl` request builder.
   */
  static requestBuilder(): AddressHomePageUrlRequestBuilder {
    return new AddressHomePageUrlRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `AddressHomePageUrl`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `AddressHomePageUrl`.
   */
  static customField(fieldName: string): CustomFieldV2<AddressHomePageUrl> {
    return EntityV2.customFieldSelector(fieldName, AddressHomePageUrl);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface AddressHomePageUrlType {
  addressId: string;
  person: string;
  ordinalNumber: string;
  validityStartDate: Moment;
  isDefaultUrlAddress: boolean;
  searchUrlAddress?: string | null;
  addressCommunicationRemarkText?: string | null;
  urlFieldLength?: number | null;
  websiteUrl?: string | null;
}

export namespace AddressHomePageUrl {
  const _fieldBuilder: FieldBuilder<Constructable<AddressHomePageUrl>> = new FieldBuilder(AddressHomePageUrl);
  /**
   * Static representation of the [[addressId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_ID = _fieldBuilder.buildEdmTypeField('AddressID', 'Edm.String', false);
  /**
   * Static representation of the [[person]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERSON = _fieldBuilder.buildEdmTypeField('Person', 'Edm.String', false);
  /**
   * Static representation of the [[ordinalNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORDINAL_NUMBER = _fieldBuilder.buildEdmTypeField('OrdinalNumber', 'Edm.String', false);
  /**
   * Static representation of the [[validityStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VALIDITY_START_DATE = _fieldBuilder.buildEdmTypeField('ValidityStartDate', 'Edm.DateTime', false);
  /**
   * Static representation of the [[isDefaultUrlAddress]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_DEFAULT_URL_ADDRESS = _fieldBuilder.buildEdmTypeField('IsDefaultURLAddress', 'Edm.Boolean', false);
  /**
   * Static representation of the [[searchUrlAddress]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SEARCH_URL_ADDRESS = _fieldBuilder.buildEdmTypeField('SearchURLAddress', 'Edm.String', true);
  /**
   * Static representation of the [[addressCommunicationRemarkText]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_COMMUNICATION_REMARK_TEXT = _fieldBuilder.buildEdmTypeField('AddressCommunicationRemarkText', 'Edm.String', true);
  /**
   * Static representation of the [[urlFieldLength]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const URL_FIELD_LENGTH = _fieldBuilder.buildEdmTypeField('URLFieldLength', 'Edm.Int16', true);
  /**
   * Static representation of the [[websiteUrl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WEBSITE_URL = _fieldBuilder.buildEdmTypeField('WebsiteURL', 'Edm.String', true);
  /**
   * All fields of the AddressHomePageUrl entity.
   */
  export const _allFields: Array<EdmTypeField<AddressHomePageUrl, 'Edm.String', false, true> | OrderableEdmTypeField<AddressHomePageUrl, 'Edm.DateTime', false, true> | EdmTypeField<AddressHomePageUrl, 'Edm.Boolean', false, true> | EdmTypeField<AddressHomePageUrl, 'Edm.String', true, true> | OrderableEdmTypeField<AddressHomePageUrl, 'Edm.Int16', true, true>> = [
    AddressHomePageUrl.ADDRESS_ID,
    AddressHomePageUrl.PERSON,
    AddressHomePageUrl.ORDINAL_NUMBER,
    AddressHomePageUrl.VALIDITY_START_DATE,
    AddressHomePageUrl.IS_DEFAULT_URL_ADDRESS,
    AddressHomePageUrl.SEARCH_URL_ADDRESS,
    AddressHomePageUrl.ADDRESS_COMMUNICATION_REMARK_TEXT,
    AddressHomePageUrl.URL_FIELD_LENGTH,
    AddressHomePageUrl.WEBSITE_URL
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<AddressHomePageUrl> = new AllFields('*', AddressHomePageUrl);
  /**
   * All key fields of the AddressHomePageUrl entity.
   */
  export const _keyFields: Array<Field<AddressHomePageUrl, boolean, boolean>> = [AddressHomePageUrl.ADDRESS_ID, AddressHomePageUrl.PERSON, AddressHomePageUrl.ORDINAL_NUMBER, AddressHomePageUrl.VALIDITY_START_DATE, AddressHomePageUrl.IS_DEFAULT_URL_ADDRESS];
  /**
   * Mapping of all key field names to the respective static field property AddressHomePageUrl.
   */
  export const _keys: { [keys: string]: Field<AddressHomePageUrl, boolean, boolean> } = AddressHomePageUrl._keyFields.reduce((acc: { [keys: string]: Field<AddressHomePageUrl, boolean, boolean> }, field: Field<AddressHomePageUrl, boolean, boolean>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
