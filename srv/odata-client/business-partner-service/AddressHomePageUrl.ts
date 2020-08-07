/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AddressHomePageUrlRequestBuilder } from './AddressHomePageUrlRequestBuilder';
import { Moment } from 'moment';
import { AllFields, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Field, NumberField, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "A_AddressHomePageURL" of service "API_BUSINESS_PARTNER".
 */
export class AddressHomePageUrl extends Entity implements AddressHomePageUrlType {
  /**
   * Technical entity name for AddressHomePageUrl.
   */
  static _entityName = 'A_AddressHomePageURL';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for AddressHomePageUrl.
   */
  static _serviceName = 'API_BUSINESS_PARTNER';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
  /**
   * Address Number.
   * Internal key for identifying a Business Address Services address.
   * For more information about the meaning and use of the address number and the Business Address Services concepts, see the function group SZA0 documentation.
   * Maximum length: 10.
   */
  addressId!: string;
  /**
   * Person number.
   * Internal key for identifying a person in Business Address Services.
   * For more information about the meaning and use of the person number and Business Address Services concepts, see the function group SZA0 documentation.
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
   * Additional information about the communication connection
   * You can maintain further information about the communication connection here. In the case of telephone numbers, for example, you can maintain the times at which the call recipient is available and those at which they are not, or you can specify whether the number is that of the secretary.The information is stored in table ADRT, regardless of language.
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
   * Returns an entity builder to construct instances `AddressHomePageUrl`.
   * @returns A builder that constructs instances of entity type `AddressHomePageUrl`.
   */
  static builder(): EntityBuilderType<AddressHomePageUrl, AddressHomePageUrlTypeForceMandatory> {
    return Entity.entityBuilder(AddressHomePageUrl);
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
  static customField(fieldName: string): CustomField<AddressHomePageUrl> {
    return Entity.customFieldSelector(fieldName, AddressHomePageUrl);
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
  searchUrlAddress?: string;
  addressCommunicationRemarkText?: string;
  urlFieldLength?: number;
  websiteUrl?: string;
}

export interface AddressHomePageUrlTypeForceMandatory {
  addressId: string;
  person: string;
  ordinalNumber: string;
  validityStartDate: Moment;
  isDefaultUrlAddress: boolean;
  searchUrlAddress: string;
  addressCommunicationRemarkText: string;
  urlFieldLength: number;
  websiteUrl: string;
}

export namespace AddressHomePageUrl {
  /**
   * Static representation of the [[addressId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_ID: StringField<AddressHomePageUrl> = new StringField('AddressID', AddressHomePageUrl, 'Edm.String');
  /**
   * Static representation of the [[person]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERSON: StringField<AddressHomePageUrl> = new StringField('Person', AddressHomePageUrl, 'Edm.String');
  /**
   * Static representation of the [[ordinalNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORDINAL_NUMBER: StringField<AddressHomePageUrl> = new StringField('OrdinalNumber', AddressHomePageUrl, 'Edm.String');
  /**
   * Static representation of the [[validityStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VALIDITY_START_DATE: DateField<AddressHomePageUrl> = new DateField('ValidityStartDate', AddressHomePageUrl, 'Edm.DateTime');
  /**
   * Static representation of the [[isDefaultUrlAddress]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_DEFAULT_URL_ADDRESS: BooleanField<AddressHomePageUrl> = new BooleanField('IsDefaultURLAddress', AddressHomePageUrl, 'Edm.Boolean');
  /**
   * Static representation of the [[searchUrlAddress]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SEARCH_URL_ADDRESS: StringField<AddressHomePageUrl> = new StringField('SearchURLAddress', AddressHomePageUrl, 'Edm.String');
  /**
   * Static representation of the [[addressCommunicationRemarkText]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_COMMUNICATION_REMARK_TEXT: StringField<AddressHomePageUrl> = new StringField('AddressCommunicationRemarkText', AddressHomePageUrl, 'Edm.String');
  /**
   * Static representation of the [[urlFieldLength]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const URL_FIELD_LENGTH: NumberField<AddressHomePageUrl> = new NumberField('URLFieldLength', AddressHomePageUrl, 'Edm.Int16');
  /**
   * Static representation of the [[websiteUrl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WEBSITE_URL: StringField<AddressHomePageUrl> = new StringField('WebsiteURL', AddressHomePageUrl, 'Edm.String');
  /**
   * All fields of the AddressHomePageUrl entity.
   */
  export const _allFields: Array<StringField<AddressHomePageUrl> | DateField<AddressHomePageUrl> | BooleanField<AddressHomePageUrl> | NumberField<AddressHomePageUrl>> = [
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
  export const _keyFields: Array<Field<AddressHomePageUrl>> = [AddressHomePageUrl.ADDRESS_ID, AddressHomePageUrl.PERSON, AddressHomePageUrl.ORDINAL_NUMBER, AddressHomePageUrl.VALIDITY_START_DATE, AddressHomePageUrl.IS_DEFAULT_URL_ADDRESS];
  /**
   * Mapping of all key field names to the respective static field property AddressHomePageUrl.
   */
  export const _keys: { [keys: string]: Field<AddressHomePageUrl> } = AddressHomePageUrl._keyFields.reduce((acc: { [keys: string]: Field<AddressHomePageUrl> }, field: Field<AddressHomePageUrl>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
