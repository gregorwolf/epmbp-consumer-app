/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AddressEmailAddressRequestBuilder } from './AddressEmailAddressRequestBuilder';
import { AllFields, Constructable, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field, FieldBuilder } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "A_AddressEmailAddress" of service "API_BUSINESS_PARTNER".
 */
export class AddressEmailAddress extends EntityV2 implements AddressEmailAddressType {
  /**
   * Technical entity name for AddressEmailAddress.
   */
  static _entityName = 'A_AddressEmailAddress';
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
   * Flag: this address is the default address.
   * @nullable
   */
  isDefaultEmailAddress?: boolean;
  /**
   * Email Address.
   * Maximum length: 241.
   * @nullable
   */
  emailAddress?: string;
  /**
   * E-Mail Address Search Field.
   * Maximum length: 20.
   * @nullable
   */
  searchEmailAddress?: string;
  /**
   * Communication link notes.
   * Maximum length: 50.
   * @nullable
   */
  addressCommunicationRemarkText?: string;

  /**
   * Returns an entity builder to construct instances of `AddressEmailAddress`.
   * @returns A builder that constructs instances of entity type `AddressEmailAddress`.
   */
  static builder(): EntityBuilderType<AddressEmailAddress, AddressEmailAddressType> {
    return EntityV2.entityBuilder(AddressEmailAddress);
  }

  /**
   * Returns a request builder to construct requests for operations on the `AddressEmailAddress` entity type.
   * @returns A `AddressEmailAddress` request builder.
   */
  static requestBuilder(): AddressEmailAddressRequestBuilder {
    return new AddressEmailAddressRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `AddressEmailAddress`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `AddressEmailAddress`.
   */
  static customField(fieldName: string): CustomFieldV2<AddressEmailAddress> {
    return EntityV2.customFieldSelector(fieldName, AddressEmailAddress);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface AddressEmailAddressType {
  addressId: string;
  person: string;
  ordinalNumber: string;
  isDefaultEmailAddress?: boolean | null;
  emailAddress?: string | null;
  searchEmailAddress?: string | null;
  addressCommunicationRemarkText?: string | null;
}

export namespace AddressEmailAddress {
  const _fieldBuilder: FieldBuilder<Constructable<AddressEmailAddress>> = new FieldBuilder(AddressEmailAddress);
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
   * Static representation of the [[isDefaultEmailAddress]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_DEFAULT_EMAIL_ADDRESS = _fieldBuilder.buildEdmTypeField('IsDefaultEmailAddress', 'Edm.Boolean', true);
  /**
   * Static representation of the [[emailAddress]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMAIL_ADDRESS = _fieldBuilder.buildEdmTypeField('EmailAddress', 'Edm.String', true);
  /**
   * Static representation of the [[searchEmailAddress]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SEARCH_EMAIL_ADDRESS = _fieldBuilder.buildEdmTypeField('SearchEmailAddress', 'Edm.String', true);
  /**
   * Static representation of the [[addressCommunicationRemarkText]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_COMMUNICATION_REMARK_TEXT = _fieldBuilder.buildEdmTypeField('AddressCommunicationRemarkText', 'Edm.String', true);
  /**
   * All fields of the AddressEmailAddress entity.
   */
  export const _allFields: Array<EdmTypeField<AddressEmailAddress, 'Edm.String', false, true> | EdmTypeField<AddressEmailAddress, 'Edm.Boolean', true, true> | EdmTypeField<AddressEmailAddress, 'Edm.String', true, true>> = [
    AddressEmailAddress.ADDRESS_ID,
    AddressEmailAddress.PERSON,
    AddressEmailAddress.ORDINAL_NUMBER,
    AddressEmailAddress.IS_DEFAULT_EMAIL_ADDRESS,
    AddressEmailAddress.EMAIL_ADDRESS,
    AddressEmailAddress.SEARCH_EMAIL_ADDRESS,
    AddressEmailAddress.ADDRESS_COMMUNICATION_REMARK_TEXT
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<AddressEmailAddress> = new AllFields('*', AddressEmailAddress);
  /**
   * All key fields of the AddressEmailAddress entity.
   */
  export const _keyFields: Array<Field<AddressEmailAddress, boolean, boolean>> = [AddressEmailAddress.ADDRESS_ID, AddressEmailAddress.PERSON, AddressEmailAddress.ORDINAL_NUMBER];
  /**
   * Mapping of all key field names to the respective static field property AddressEmailAddress.
   */
  export const _keys: { [keys: string]: Field<AddressEmailAddress, boolean, boolean> } = AddressEmailAddress._keyFields.reduce((acc: { [keys: string]: Field<AddressEmailAddress, boolean, boolean> }, field: Field<AddressEmailAddress, boolean, boolean>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
