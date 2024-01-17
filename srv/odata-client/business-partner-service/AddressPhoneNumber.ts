/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AddressPhoneNumberRequestBuilder } from './AddressPhoneNumberRequestBuilder';
import { AllFields, Constructable, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field, FieldBuilder } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "A_AddressPhoneNumber" of service "API_BUSINESS_PARTNER".
 */
export class AddressPhoneNumber extends EntityV2 implements AddressPhoneNumberType {
  /**
   * Technical entity name for AddressPhoneNumber.
   */
  static _entityName = 'A_AddressPhoneNumber';
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
   * Country/Region for Telephone/Fax Number.
   * Maximum length: 3.
   * @nullable
   */
  destinationLocationCountry?: string;
  /**
   * Standard Sender Address in this Communication Type.
   * @nullable
   */
  isDefaultPhoneNumber?: boolean;
  /**
   * Telephone No.: Dialing Code and Number.
   * Maximum length: 30.
   * @nullable
   */
  phoneNumber?: string;
  /**
   * Telephone no.: Extension.
   * Maximum length: 10.
   * @nullable
   */
  phoneNumberExtension?: string;
  /**
   * Complete Number: Dialing Code+Number+Extension.
   * Maximum length: 30.
   * @nullable
   */
  internationalPhoneNumber?: string;
  /**
   * Indicator: Telephone is a Mobile Telephone.
   * Maximum length: 1.
   * @nullable
   */
  phoneNumberType?: string;
  /**
   * Communication link notes.
   * Maximum length: 50.
   * @nullable
   */
  addressCommunicationRemarkText?: string;

  /**
   * Returns an entity builder to construct instances of `AddressPhoneNumber`.
   * @returns A builder that constructs instances of entity type `AddressPhoneNumber`.
   */
  static builder(): EntityBuilderType<AddressPhoneNumber, AddressPhoneNumberType> {
    return EntityV2.entityBuilder(AddressPhoneNumber);
  }

  /**
   * Returns a request builder to construct requests for operations on the `AddressPhoneNumber` entity type.
   * @returns A `AddressPhoneNumber` request builder.
   */
  static requestBuilder(): AddressPhoneNumberRequestBuilder {
    return new AddressPhoneNumberRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `AddressPhoneNumber`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `AddressPhoneNumber`.
   */
  static customField(fieldName: string): CustomFieldV2<AddressPhoneNumber> {
    return EntityV2.customFieldSelector(fieldName, AddressPhoneNumber);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface AddressPhoneNumberType {
  addressId: string;
  person: string;
  ordinalNumber: string;
  destinationLocationCountry?: string | null;
  isDefaultPhoneNumber?: boolean | null;
  phoneNumber?: string | null;
  phoneNumberExtension?: string | null;
  internationalPhoneNumber?: string | null;
  phoneNumberType?: string | null;
  addressCommunicationRemarkText?: string | null;
}

export namespace AddressPhoneNumber {
  const _fieldBuilder: FieldBuilder<Constructable<AddressPhoneNumber>> = new FieldBuilder(AddressPhoneNumber);
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
   * Static representation of the [[destinationLocationCountry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESTINATION_LOCATION_COUNTRY = _fieldBuilder.buildEdmTypeField('DestinationLocationCountry', 'Edm.String', true);
  /**
   * Static representation of the [[isDefaultPhoneNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_DEFAULT_PHONE_NUMBER = _fieldBuilder.buildEdmTypeField('IsDefaultPhoneNumber', 'Edm.Boolean', true);
  /**
   * Static representation of the [[phoneNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PHONE_NUMBER = _fieldBuilder.buildEdmTypeField('PhoneNumber', 'Edm.String', true);
  /**
   * Static representation of the [[phoneNumberExtension]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PHONE_NUMBER_EXTENSION = _fieldBuilder.buildEdmTypeField('PhoneNumberExtension', 'Edm.String', true);
  /**
   * Static representation of the [[internationalPhoneNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INTERNATIONAL_PHONE_NUMBER = _fieldBuilder.buildEdmTypeField('InternationalPhoneNumber', 'Edm.String', true);
  /**
   * Static representation of the [[phoneNumberType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PHONE_NUMBER_TYPE = _fieldBuilder.buildEdmTypeField('PhoneNumberType', 'Edm.String', true);
  /**
   * Static representation of the [[addressCommunicationRemarkText]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_COMMUNICATION_REMARK_TEXT = _fieldBuilder.buildEdmTypeField('AddressCommunicationRemarkText', 'Edm.String', true);
  /**
   * All fields of the AddressPhoneNumber entity.
   */
  export const _allFields: Array<EdmTypeField<AddressPhoneNumber, 'Edm.String', false, true> | EdmTypeField<AddressPhoneNumber, 'Edm.String', true, true> | EdmTypeField<AddressPhoneNumber, 'Edm.Boolean', true, true>> = [
    AddressPhoneNumber.ADDRESS_ID,
    AddressPhoneNumber.PERSON,
    AddressPhoneNumber.ORDINAL_NUMBER,
    AddressPhoneNumber.DESTINATION_LOCATION_COUNTRY,
    AddressPhoneNumber.IS_DEFAULT_PHONE_NUMBER,
    AddressPhoneNumber.PHONE_NUMBER,
    AddressPhoneNumber.PHONE_NUMBER_EXTENSION,
    AddressPhoneNumber.INTERNATIONAL_PHONE_NUMBER,
    AddressPhoneNumber.PHONE_NUMBER_TYPE,
    AddressPhoneNumber.ADDRESS_COMMUNICATION_REMARK_TEXT
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<AddressPhoneNumber> = new AllFields('*', AddressPhoneNumber);
  /**
   * All key fields of the AddressPhoneNumber entity.
   */
  export const _keyFields: Array<Field<AddressPhoneNumber, boolean, boolean>> = [AddressPhoneNumber.ADDRESS_ID, AddressPhoneNumber.PERSON, AddressPhoneNumber.ORDINAL_NUMBER];
  /**
   * Mapping of all key field names to the respective static field property AddressPhoneNumber.
   */
  export const _keys: { [keys: string]: Field<AddressPhoneNumber, boolean, boolean> } = AddressPhoneNumber._keyFields.reduce((acc: { [keys: string]: Field<AddressPhoneNumber, boolean, boolean> }, field: Field<AddressPhoneNumber, boolean, boolean>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
