/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AddressFaxNumberRequestBuilder } from './AddressFaxNumberRequestBuilder';
import { AllFields, BooleanField, CustomField, Entity, EntityBuilderType, Field, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "A_AddressFaxNumber" of service "API_BUSINESS_PARTNER".
 */
export class AddressFaxNumber extends Entity implements AddressFaxNumberType {
  /**
   * Technical entity name for AddressFaxNumber.
   */
  static _entityName = 'A_AddressFaxNumber';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for AddressFaxNumber.
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
   * Standard Sender Address in this Communication Type.
   * If several addresses are maintained for one communication type, the user in the SAP System can be reached under one of these addresses. One address can be set as theStandard Address.
   * The standard address is used for the following functions:When sending using the  SMTP nodein SAPconnect, the home address of the communication type used is the one set as the sender address. The recipient can see this address in the sender information and can also reply directly to this address. The standard address is also transferred and can be used for incoming status notifications, for example.When sending using an RFC node in SAPconnect, the standard address of the communication type used is the one set as the sender address. The structure defined in the case of the RFC does not permit another address to be transferred, so the standard address is used for incoming status notifications too.The SAP users have the addresses of their exchange P.O. boxes in their standard communication type 'Internet Mail' as the home address and their Internet address in the SAP system as their standard address. Example:Home address: Bernard.Brown@Company.comStandard address: Bernard.Brown@System.Company.comSending using an SMTP nodeThe home address of the communication type 'Internet Mail' (Bernard.Brown@Company.com) is used as the sender address. If a reply is sent to this address the user receives directly in the exchange postbox.Sending using the RFC nodeThe standard address of the communication type 'Internet Mail' (Bernard.Brown@System.Company.com) is used as the sender address. If a reply is sent to this address, it arrives back to the SAP system.Example using a mail system groupThe users should get all messages in their Microsoft Exchange postboxes. In the SAP system the mail system group is activated for this using the setting "Send Messages to the Home Address".The address settings of the SAP users remain unchanged:Home address: Bernard.Brown@Company.comStandard address: Bernard.Brown@System.Company.comSending using an SMTP nodeThe home address of the communication type 'Internet Mail' (Bernard.Brown@Company.com) is used as the sender address. If a reply is sent to this address the user receives directly in the exchange postbox.Sending using the RFC nodeThe standard address of the communication type 'Internet Mail' (Bernard.Brown@System.Company.com) is used as the sender address. If a reply is sent to this address it arrives back in the SAP system. It is then forwarded using the mail system group to the home address and the user gets it in the exchange postbox.
   * @nullable
   */
  isDefaultFaxNumber?: boolean;
  /**
   * Country for telephone/fax number.
   * The country for the telephone number or fax number is maintained here.
   * This specification is used to determine the correct country code. A normalized form of the telephone number or fax number is then derived and stored in a field for a program-driven search.In most cases, the telephone number or fax number refers directly to an address.If this is the case, when a new number is created, the country of the address is proposed.If this is not the case (for example, with address-independent communication data for a business partner), the country from the user parameter LND is proposed (if it is maintained). If the user parameter LND is not maintained, the country of the company address assigned in the user master data is proposed.If the country of the address changes, the country of the corresponding telephone number and fax address is not changed automatically.Example: A business partner moves abroad.If the telephone number is for a permanent connection, the telephone number also changes when the business partner moves and has to be maintained again in the system.If the telephone number is for a mobile telephone and the number is retained, the original country for this telephone number also has to be retained and must not be changed automatically to the new country of the address.
   * Maximum length: 3.
   * @nullable
   */
  faxCountry?: string;
  /**
   * Fax number: dialling code+number.
   * Fax number, consisting of dialling code and number, but without country dialling code.
   * If the fax number consists of a company number and an extension, the extension must be entered in the field extension.Fax number, as it is to be dialled from within the same country.Enter the following for the number "01234/567-0":Fax: 01234/567Extension: 0Enter the following for the number "01234/567-891":Fax: 01234/567Extension: 891For the number "012-345-678" (678 as extension) enter the following:Fax: 012-345Extension: 678In the following cases, enter the complete number (without country dialing code) in the field Fax:No part of the number can be considered as an extension.You are not sure which part of the number can be considered as an extension.
   * Maximum length: 30.
   * @nullable
   */
  faxNumber?: string;
  /**
   * Fax no.: Extension.
   * Fax extension number
   * If the fax number consists of a company number and an extension, the extension must be entered here.Enter the extensionThe following rules apply for the format of telephone and fax numbers:The length of the entries in the field Telephone and Extension (Fax and Extension) cannot be more than 24 characters in total.Leading spaces are not allowed in the field Telephone or Fax or in the field Extension.Valid characters are:Numbers (0123456789)Letters (ABCDEFGHIJKLMNOPQRSTUVWXYZ)Following other characters:  /, (, ), - *, # and " " (space), but not as a leading space.If an + is entered as the first character, the system checks whether the specified number starts with a country code. If so, a warning message is displayed because the country code is automatically determined by the system and should not be stored in the Telephone number (Fax number) field.If an &amp; is entered as the first character, the automatic check and formatting of the telephone number (fax number), as well as the determination of the country code, is suppressed.Enter the following for the number "01234/567-0":Fax: 01234/567Extension: 0Enter the following for the number "01234/567-891":Fax: 01234/567Extension: 891For the number "012-345-678" (678 as extension) enter the following:Fax: 012-345Extension: 678In the following cases, enter the complete number (without country dialing code) in the field Fax:No part of the number can be considered as an extension.You are not sure which part of the number can be considered as an extension.
   * Maximum length: 10.
   * @nullable
   */
  faxNumberExtension?: string;
  /**
   * Complete Number: Dialling Code+Number+Extension.
   * The content of this field is automatically calculated by the system based on fax number and country code components.
   * This field is therefore not to be filled when Business Address Services function modules are called.
   * Maximum length: 30.
   * @nullable
   */
  internationalFaxNumber?: string;
  /**
   * Communication link notes.
   * Additional information about the communication connection
   * You can maintain further information about the communication connection here. In the case of telephone numbers, for example, you can maintain the times at which the call recipient is available and those at which they are not, or you can specify whether the number is that of the secretary.The information is stored in table ADRT, regardless of language.
   * Maximum length: 50.
   * @nullable
   */
  addressCommunicationRemarkText?: string;

  /**
   * Returns an entity builder to construct instances `AddressFaxNumber`.
   * @returns A builder that constructs instances of entity type `AddressFaxNumber`.
   */
  static builder(): EntityBuilderType<AddressFaxNumber, AddressFaxNumberTypeForceMandatory> {
    return Entity.entityBuilder(AddressFaxNumber);
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
  static customField(fieldName: string): CustomField<AddressFaxNumber> {
    return Entity.customFieldSelector(fieldName, AddressFaxNumber);
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
  isDefaultFaxNumber?: boolean;
  faxCountry?: string;
  faxNumber?: string;
  faxNumberExtension?: string;
  internationalFaxNumber?: string;
  addressCommunicationRemarkText?: string;
}

export interface AddressFaxNumberTypeForceMandatory {
  addressId: string;
  person: string;
  ordinalNumber: string;
  isDefaultFaxNumber: boolean;
  faxCountry: string;
  faxNumber: string;
  faxNumberExtension: string;
  internationalFaxNumber: string;
  addressCommunicationRemarkText: string;
}

export namespace AddressFaxNumber {
  /**
   * Static representation of the [[addressId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_ID: StringField<AddressFaxNumber> = new StringField('AddressID', AddressFaxNumber, 'Edm.String');
  /**
   * Static representation of the [[person]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERSON: StringField<AddressFaxNumber> = new StringField('Person', AddressFaxNumber, 'Edm.String');
  /**
   * Static representation of the [[ordinalNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORDINAL_NUMBER: StringField<AddressFaxNumber> = new StringField('OrdinalNumber', AddressFaxNumber, 'Edm.String');
  /**
   * Static representation of the [[isDefaultFaxNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_DEFAULT_FAX_NUMBER: BooleanField<AddressFaxNumber> = new BooleanField('IsDefaultFaxNumber', AddressFaxNumber, 'Edm.Boolean');
  /**
   * Static representation of the [[faxCountry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FAX_COUNTRY: StringField<AddressFaxNumber> = new StringField('FaxCountry', AddressFaxNumber, 'Edm.String');
  /**
   * Static representation of the [[faxNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FAX_NUMBER: StringField<AddressFaxNumber> = new StringField('FaxNumber', AddressFaxNumber, 'Edm.String');
  /**
   * Static representation of the [[faxNumberExtension]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FAX_NUMBER_EXTENSION: StringField<AddressFaxNumber> = new StringField('FaxNumberExtension', AddressFaxNumber, 'Edm.String');
  /**
   * Static representation of the [[internationalFaxNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INTERNATIONAL_FAX_NUMBER: StringField<AddressFaxNumber> = new StringField('InternationalFaxNumber', AddressFaxNumber, 'Edm.String');
  /**
   * Static representation of the [[addressCommunicationRemarkText]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_COMMUNICATION_REMARK_TEXT: StringField<AddressFaxNumber> = new StringField('AddressCommunicationRemarkText', AddressFaxNumber, 'Edm.String');
  /**
   * All fields of the AddressFaxNumber entity.
   */
  export const _allFields: Array<StringField<AddressFaxNumber> | BooleanField<AddressFaxNumber>> = [
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
  export const _keyFields: Array<Field<AddressFaxNumber>> = [AddressFaxNumber.ADDRESS_ID, AddressFaxNumber.PERSON, AddressFaxNumber.ORDINAL_NUMBER];
  /**
   * Mapping of all key field names to the respective static field property AddressFaxNumber.
   */
  export const _keys: { [keys: string]: Field<AddressFaxNumber> } = AddressFaxNumber._keyFields.reduce((acc: { [keys: string]: Field<AddressFaxNumber> }, field: Field<AddressFaxNumber>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
