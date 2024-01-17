/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AddressFaxNumberRequestBuilder } from './AddressFaxNumberRequestBuilder';
import { AllFields, Constructable, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field, FieldBuilder } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "A_AddressFaxNumber" of service "API_BUSINESS_PARTNER".
 */
export class AddressFaxNumber extends EntityV2 implements AddressFaxNumberType {
  /**
   * Technical entity name for AddressFaxNumber.
   */
  static _entityName = 'A_AddressFaxNumber';
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
   * Standard Sender Address in this Communication Type.
   * @nullable
   */
  isDefaultFaxNumber?: boolean;
  /**
   * Country/Region for Telephone/Fax Number.
   * Maximum length: 3.
   * @nullable
   */
  faxCountry?: string;
  /**
   * Fax Number: Dialing Code and Number.
   * Maximum length: 30.
   * @nullable
   */
  faxNumber?: string;
  /**
   * Fax no.: Extension.
   * Maximum length: 10.
   * @nullable
   */
  faxNumberExtension?: string;
  /**
   * Complete Number: Dialing Code+Number+Extension.
   * Maximum length: 30.
   * @nullable
   */
  internationalFaxNumber?: string;
  /**
   * Communication link notes.
   * Maximum length: 50.
   * @nullable
   */
  addressCommunicationRemarkText?: string;

  /**
   * Returns an entity builder to construct instances of `AddressFaxNumber`.
   * @returns A builder that constructs instances of entity type `AddressFaxNumber`.
   */
  static builder(): EntityBuilderType<AddressFaxNumber, AddressFaxNumberType> {
    return EntityV2.entityBuilder(AddressFaxNumber);
  }

  /**
   * Returns a request builder to construct requests for operations on the `AddressFaxNumber` entity type.
   * @returns A `AddressFaxNumber` request builder.
   */
  static requestBuilder(): AddressFaxNumberRequestBuilder {
    return new AddressFaxNumberRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `AddressFaxNumber`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `AddressFaxNumber`.
   */
  static customField(fieldName: string): CustomFieldV2<AddressFaxNumber> {
    return EntityV2.customFieldSelector(fieldName, AddressFaxNumber);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface AddressFaxNumberType {
  addressId: string;
  person: string;
  ordinalNumber: string;
  isDefaultFaxNumber?: boolean | null;
  faxCountry?: string | null;
  faxNumber?: string | null;
  faxNumberExtension?: string | null;
  internationalFaxNumber?: string | null;
  addressCommunicationRemarkText?: string | null;
}

export namespace AddressFaxNumber {
  const _fieldBuilder: FieldBuilder<Constructable<AddressFaxNumber>> = new FieldBuilder(AddressFaxNumber);
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
   * Static representation of the [[isDefaultFaxNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_DEFAULT_FAX_NUMBER = _fieldBuilder.buildEdmTypeField('IsDefaultFaxNumber', 'Edm.Boolean', true);
  /**
   * Static representation of the [[faxCountry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FAX_COUNTRY = _fieldBuilder.buildEdmTypeField('FaxCountry', 'Edm.String', true);
  /**
   * Static representation of the [[faxNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FAX_NUMBER = _fieldBuilder.buildEdmTypeField('FaxNumber', 'Edm.String', true);
  /**
   * Static representation of the [[faxNumberExtension]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FAX_NUMBER_EXTENSION = _fieldBuilder.buildEdmTypeField('FaxNumberExtension', 'Edm.String', true);
  /**
   * Static representation of the [[internationalFaxNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INTERNATIONAL_FAX_NUMBER = _fieldBuilder.buildEdmTypeField('InternationalFaxNumber', 'Edm.String', true);
  /**
   * Static representation of the [[addressCommunicationRemarkText]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_COMMUNICATION_REMARK_TEXT = _fieldBuilder.buildEdmTypeField('AddressCommunicationRemarkText', 'Edm.String', true);
  /**
   * All fields of the AddressFaxNumber entity.
   */
  export const _allFields: Array<EdmTypeField<AddressFaxNumber, 'Edm.String', false, true> | EdmTypeField<AddressFaxNumber, 'Edm.Boolean', true, true> | EdmTypeField<AddressFaxNumber, 'Edm.String', true, true>> = [
    AddressFaxNumber.ADDRESS_ID,
    AddressFaxNumber.PERSON,
    AddressFaxNumber.ORDINAL_NUMBER,
    AddressFaxNumber.IS_DEFAULT_FAX_NUMBER,
    AddressFaxNumber.FAX_COUNTRY,
    AddressFaxNumber.FAX_NUMBER,
    AddressFaxNumber.FAX_NUMBER_EXTENSION,
    AddressFaxNumber.INTERNATIONAL_FAX_NUMBER,
    AddressFaxNumber.ADDRESS_COMMUNICATION_REMARK_TEXT
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<AddressFaxNumber> = new AllFields('*', AddressFaxNumber);
  /**
   * All key fields of the AddressFaxNumber entity.
   */
  export const _keyFields: Array<Field<AddressFaxNumber, boolean, boolean>> = [AddressFaxNumber.ADDRESS_ID, AddressFaxNumber.PERSON, AddressFaxNumber.ORDINAL_NUMBER];
  /**
   * Mapping of all key field names to the respective static field property AddressFaxNumber.
   */
  export const _keys: { [keys: string]: Field<AddressFaxNumber, boolean, boolean> } = AddressFaxNumber._keyFields.reduce((acc: { [keys: string]: Field<AddressFaxNumber, boolean, boolean> }, field: Field<AddressFaxNumber, boolean, boolean>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
