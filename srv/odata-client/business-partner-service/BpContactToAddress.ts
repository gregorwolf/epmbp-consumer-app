/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BpContactToAddressRequestBuilder } from './BpContactToAddressRequestBuilder';
import { Moment } from 'moment';
import { AllFields, Constructable, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field, FieldBuilder, Link, OrderableEdmTypeField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "A_BPContactToAddress" of service "API_BUSINESS_PARTNER".
 */
export class BpContactToAddress extends EntityV2 implements BpContactToAddressType {
  /**
   * Technical entity name for BpContactToAddress.
   */
  static _entityName = 'A_BPContactToAddress';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
  /**
   * BP Relationship Number.
   * Maximum length: 12.
   */
  relationshipNumber!: string;
  /**
   * Business Partner Number.
   * Maximum length: 10.
   */
  businessPartnerCompany!: string;
  /**
   * Business Partner Number.
   * Maximum length: 10.
   */
  businessPartnerPerson!: string;
  /**
   * Validity Date (Valid To).
   */
  validityEndDate!: Moment;
  /**
   * Address Number.
   * Maximum length: 10.
   */
  addressId!: string;
  /**
   * Address Number.
   * Maximum length: 10.
   * @nullable
   */
  addressNumber?: string;
  /**
   * Street 3.
   * Maximum length: 40.
   * @nullable
   */
  additionalStreetPrefixName?: string;
  /**
   * Street 5.
   * Maximum length: 40.
   * @nullable
   */
  additionalStreetSuffixName?: string;
  /**
   * Address Time Zone.
   * Maximum length: 6.
   * @nullable
   */
  addressTimeZone?: string;
  /**
   * c/o name.
   * Maximum length: 40.
   * @nullable
   */
  careOfName?: string;
  /**
   * City code for city/street file.
   * Maximum length: 12.
   * @nullable
   */
  cityCode?: string;
  /**
   * City.
   * Maximum length: 40.
   * @nullable
   */
  cityName?: string;
  /**
   * Company Postal Code (for Large Customers).
   * Maximum length: 10.
   * @nullable
   */
  companyPostalCode?: string;
  /**
   * Country/Region Key.
   * Maximum length: 3.
   * @nullable
   */
  country?: string;
  /**
   * County.
   * Maximum length: 40.
   * @nullable
   */
  county?: string;
  /**
   * Number of Delivery Service.
   * Maximum length: 10.
   * @nullable
   */
  deliveryServiceNumber?: string;
  /**
   * Type of Delivery Service.
   * Maximum length: 4.
   * @nullable
   */
  deliveryServiceTypeCode?: string;
  /**
   * District.
   * Maximum length: 40.
   * @nullable
   */
  district?: string;
  /**
   * Form-of-Address Key.
   * Maximum length: 4.
   * @nullable
   */
  formOfAddress?: string;
  /**
   * Full name of a party (Bus. Partner, Org. Unit, Doc. address).
   * Maximum length: 80.
   * @nullable
   */
  fullName?: string;
  /**
   * City (different from postal city).
   * Maximum length: 40.
   * @nullable
   */
  homeCityName?: string;
  /**
   * House Number.
   * Maximum length: 10.
   * @nullable
   */
  houseNumber?: string;
  /**
   * House number supplement.
   * Maximum length: 10.
   * @nullable
   */
  houseNumberSupplementText?: string;
  /**
   * Language Key.
   * Maximum length: 2.
   * @nullable
   */
  language?: string;
  /**
   * PO Box.
   * Maximum length: 10.
   * @nullable
   */
  poBox?: string;
  /**
   * PO Box city.
   * Maximum length: 40.
   * @nullable
   */
  poBoxDeviatingCityName?: string;
  /**
   * PO Box of Country/Region.
   * Maximum length: 3.
   * @nullable
   */
  poBoxDeviatingCountry?: string;
  /**
   * Region for PO Box (Country/Region, State, Province, ...).
   * Maximum length: 3.
   * @nullable
   */
  poBoxDeviatingRegion?: string;
  /**
   * Flag: PO Box Without Number.
   * @nullable
   */
  poBoxIsWithoutNumber?: boolean;
  /**
   * PO Box Lobby.
   * Maximum length: 40.
   * @nullable
   */
  poBoxLobbyName?: string;
  /**
   * PO Box Postal Code.
   * Maximum length: 10.
   * @nullable
   */
  poBoxPostalCode?: string;
  /**
   * Person Number.
   * Maximum length: 10.
   * @nullable
   */
  person?: string;
  /**
   * City Postal Code.
   * Maximum length: 10.
   * @nullable
   */
  postalCode?: string;
  /**
   * Communication Method (Key) (Business Address Services).
   * Maximum length: 3.
   * @nullable
   */
  prfrdCommMediumType?: string;
  /**
   * Region (State, Province, County).
   * Maximum length: 3.
   * @nullable
   */
  region?: string;
  /**
   * Street.
   * Maximum length: 60.
   * @nullable
   */
  streetName?: string;
  /**
   * Street 2.
   * Maximum length: 40.
   * @nullable
   */
  streetPrefixName?: string;
  /**
   * Street 4.
   * Maximum length: 40.
   * @nullable
   */
  streetSuffixName?: string;
  /**
   * Tax Jurisdiction.
   * Maximum length: 15.
   * @nullable
   */
  taxJurisdiction?: string;
  /**
   * Transportation zone to or from which the goods are delivered.
   * Maximum length: 10.
   * @nullable
   */
  transportZone?: string;
  /**
   * Version ID for International Addresses.
   * Maximum length: 1.
   * @nullable
   */
  addressRepresentationCode?: string;
  /**
   * Building (number or code).
   * Maximum length: 10.
   * @nullable
   */
  contactPersonBuilding?: string;
  /**
   * Communication Method (Key) (Business Address Services).
   * Maximum length: 3.
   * @nullable
   */
  contactPersonPrfrdCommMedium?: string;
  /**
   * Department.
   * Maximum length: 40.
   * @nullable
   */
  contactRelationshipDepartment?: string;
  /**
   * Function.
   * Maximum length: 40.
   * @nullable
   */
  contactRelationshipFunction?: string;
  /**
   * Short name for correspondence.
   * Maximum length: 10.
   * @nullable
   */
  correspondenceShortName?: string;
  /**
   * Floor in building.
   * Maximum length: 10.
   * @nullable
   */
  floor?: string;
  /**
   * Internal Mail Postal Code.
   * Maximum length: 10.
   * @nullable
   */
  inhouseMail?: string;
  /**
   * Indicator: Address is standard address.
   * @nullable
   */
  isDefaultAddress?: boolean;
  /**
   * Room or Apartment Number.
   * Maximum length: 10.
   * @nullable
   */
  roomNumber?: string;
  /**
   * One-to-many navigation property to the [[AddressEmailAddress]] entity.
   */
  toEmailAddress!: AddressEmailAddress[];
  /**
   * One-to-many navigation property to the [[AddressFaxNumber]] entity.
   */
  toFaxNumber!: AddressFaxNumber[];
  /**
   * One-to-many navigation property to the [[AddressPhoneNumber]] entity.
   */
  toMobilePhoneNumber!: AddressPhoneNumber[];
  /**
   * One-to-many navigation property to the [[AddressPhoneNumber]] entity.
   */
  toPhoneNumber!: AddressPhoneNumber[];
  /**
   * One-to-many navigation property to the [[AddressHomePageUrl]] entity.
   */
  toUrlAddress!: AddressHomePageUrl[];

  /**
   * Returns an entity builder to construct instances of `BpContactToAddress`.
   * @returns A builder that constructs instances of entity type `BpContactToAddress`.
   */
  static builder(): EntityBuilderType<BpContactToAddress, BpContactToAddressType> {
    return EntityV2.entityBuilder(BpContactToAddress);
  }

  /**
   * Returns a request builder to construct requests for operations on the `BpContactToAddress` entity type.
   * @returns A `BpContactToAddress` request builder.
   */
  static requestBuilder(): BpContactToAddressRequestBuilder {
    return new BpContactToAddressRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `BpContactToAddress`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `BpContactToAddress`.
   */
  static customField(fieldName: string): CustomFieldV2<BpContactToAddress> {
    return EntityV2.customFieldSelector(fieldName, BpContactToAddress);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { AddressEmailAddress, AddressEmailAddressType } from './AddressEmailAddress';
import { AddressFaxNumber, AddressFaxNumberType } from './AddressFaxNumber';
import { AddressPhoneNumber, AddressPhoneNumberType } from './AddressPhoneNumber';
import { AddressHomePageUrl, AddressHomePageUrlType } from './AddressHomePageUrl';

export interface BpContactToAddressType {
  relationshipNumber: string;
  businessPartnerCompany: string;
  businessPartnerPerson: string;
  validityEndDate: Moment;
  addressId: string;
  addressNumber?: string | null;
  additionalStreetPrefixName?: string | null;
  additionalStreetSuffixName?: string | null;
  addressTimeZone?: string | null;
  careOfName?: string | null;
  cityCode?: string | null;
  cityName?: string | null;
  companyPostalCode?: string | null;
  country?: string | null;
  county?: string | null;
  deliveryServiceNumber?: string | null;
  deliveryServiceTypeCode?: string | null;
  district?: string | null;
  formOfAddress?: string | null;
  fullName?: string | null;
  homeCityName?: string | null;
  houseNumber?: string | null;
  houseNumberSupplementText?: string | null;
  language?: string | null;
  poBox?: string | null;
  poBoxDeviatingCityName?: string | null;
  poBoxDeviatingCountry?: string | null;
  poBoxDeviatingRegion?: string | null;
  poBoxIsWithoutNumber?: boolean | null;
  poBoxLobbyName?: string | null;
  poBoxPostalCode?: string | null;
  person?: string | null;
  postalCode?: string | null;
  prfrdCommMediumType?: string | null;
  region?: string | null;
  streetName?: string | null;
  streetPrefixName?: string | null;
  streetSuffixName?: string | null;
  taxJurisdiction?: string | null;
  transportZone?: string | null;
  addressRepresentationCode?: string | null;
  contactPersonBuilding?: string | null;
  contactPersonPrfrdCommMedium?: string | null;
  contactRelationshipDepartment?: string | null;
  contactRelationshipFunction?: string | null;
  correspondenceShortName?: string | null;
  floor?: string | null;
  inhouseMail?: string | null;
  isDefaultAddress?: boolean | null;
  roomNumber?: string | null;
  toEmailAddress: AddressEmailAddressType[];
  toFaxNumber: AddressFaxNumberType[];
  toMobilePhoneNumber: AddressPhoneNumberType[];
  toPhoneNumber: AddressPhoneNumberType[];
  toUrlAddress: AddressHomePageUrlType[];
}

export namespace BpContactToAddress {
  const _fieldBuilder: FieldBuilder<Constructable<BpContactToAddress>> = new FieldBuilder(BpContactToAddress);
  /**
   * Static representation of the [[relationshipNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RELATIONSHIP_NUMBER = _fieldBuilder.buildEdmTypeField('RelationshipNumber', 'Edm.String', false);
  /**
   * Static representation of the [[businessPartnerCompany]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER_COMPANY = _fieldBuilder.buildEdmTypeField('BusinessPartnerCompany', 'Edm.String', false);
  /**
   * Static representation of the [[businessPartnerPerson]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER_PERSON = _fieldBuilder.buildEdmTypeField('BusinessPartnerPerson', 'Edm.String', false);
  /**
   * Static representation of the [[validityEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VALIDITY_END_DATE = _fieldBuilder.buildEdmTypeField('ValidityEndDate', 'Edm.DateTime', false);
  /**
   * Static representation of the [[addressId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_ID = _fieldBuilder.buildEdmTypeField('AddressID', 'Edm.String', false);
  /**
   * Static representation of the [[addressNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_NUMBER = _fieldBuilder.buildEdmTypeField('AddressNumber', 'Edm.String', true);
  /**
   * Static representation of the [[additionalStreetPrefixName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDITIONAL_STREET_PREFIX_NAME = _fieldBuilder.buildEdmTypeField('AdditionalStreetPrefixName', 'Edm.String', true);
  /**
   * Static representation of the [[additionalStreetSuffixName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDITIONAL_STREET_SUFFIX_NAME = _fieldBuilder.buildEdmTypeField('AdditionalStreetSuffixName', 'Edm.String', true);
  /**
   * Static representation of the [[addressTimeZone]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_TIME_ZONE = _fieldBuilder.buildEdmTypeField('AddressTimeZone', 'Edm.String', true);
  /**
   * Static representation of the [[careOfName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CARE_OF_NAME = _fieldBuilder.buildEdmTypeField('CareOfName', 'Edm.String', true);
  /**
   * Static representation of the [[cityCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CITY_CODE = _fieldBuilder.buildEdmTypeField('CityCode', 'Edm.String', true);
  /**
   * Static representation of the [[cityName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CITY_NAME = _fieldBuilder.buildEdmTypeField('CityName', 'Edm.String', true);
  /**
   * Static representation of the [[companyPostalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMPANY_POSTAL_CODE = _fieldBuilder.buildEdmTypeField('CompanyPostalCode', 'Edm.String', true);
  /**
   * Static representation of the [[country]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY = _fieldBuilder.buildEdmTypeField('Country', 'Edm.String', true);
  /**
   * Static representation of the [[county]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTY = _fieldBuilder.buildEdmTypeField('County', 'Edm.String', true);
  /**
   * Static representation of the [[deliveryServiceNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DELIVERY_SERVICE_NUMBER = _fieldBuilder.buildEdmTypeField('DeliveryServiceNumber', 'Edm.String', true);
  /**
   * Static representation of the [[deliveryServiceTypeCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DELIVERY_SERVICE_TYPE_CODE = _fieldBuilder.buildEdmTypeField('DeliveryServiceTypeCode', 'Edm.String', true);
  /**
   * Static representation of the [[district]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DISTRICT = _fieldBuilder.buildEdmTypeField('District', 'Edm.String', true);
  /**
   * Static representation of the [[formOfAddress]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_OF_ADDRESS = _fieldBuilder.buildEdmTypeField('FormOfAddress', 'Edm.String', true);
  /**
   * Static representation of the [[fullName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FULL_NAME = _fieldBuilder.buildEdmTypeField('FullName', 'Edm.String', true);
  /**
   * Static representation of the [[homeCityName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HOME_CITY_NAME = _fieldBuilder.buildEdmTypeField('HomeCityName', 'Edm.String', true);
  /**
   * Static representation of the [[houseNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HOUSE_NUMBER = _fieldBuilder.buildEdmTypeField('HouseNumber', 'Edm.String', true);
  /**
   * Static representation of the [[houseNumberSupplementText]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HOUSE_NUMBER_SUPPLEMENT_TEXT = _fieldBuilder.buildEdmTypeField('HouseNumberSupplementText', 'Edm.String', true);
  /**
   * Static representation of the [[language]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LANGUAGE = _fieldBuilder.buildEdmTypeField('Language', 'Edm.String', true);
  /**
   * Static representation of the [[poBox]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PO_BOX = _fieldBuilder.buildEdmTypeField('POBox', 'Edm.String', true);
  /**
   * Static representation of the [[poBoxDeviatingCityName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PO_BOX_DEVIATING_CITY_NAME = _fieldBuilder.buildEdmTypeField('POBoxDeviatingCityName', 'Edm.String', true);
  /**
   * Static representation of the [[poBoxDeviatingCountry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PO_BOX_DEVIATING_COUNTRY = _fieldBuilder.buildEdmTypeField('POBoxDeviatingCountry', 'Edm.String', true);
  /**
   * Static representation of the [[poBoxDeviatingRegion]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PO_BOX_DEVIATING_REGION = _fieldBuilder.buildEdmTypeField('POBoxDeviatingRegion', 'Edm.String', true);
  /**
   * Static representation of the [[poBoxIsWithoutNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PO_BOX_IS_WITHOUT_NUMBER = _fieldBuilder.buildEdmTypeField('POBoxIsWithoutNumber', 'Edm.Boolean', true);
  /**
   * Static representation of the [[poBoxLobbyName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PO_BOX_LOBBY_NAME = _fieldBuilder.buildEdmTypeField('POBoxLobbyName', 'Edm.String', true);
  /**
   * Static representation of the [[poBoxPostalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PO_BOX_POSTAL_CODE = _fieldBuilder.buildEdmTypeField('POBoxPostalCode', 'Edm.String', true);
  /**
   * Static representation of the [[person]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERSON = _fieldBuilder.buildEdmTypeField('Person', 'Edm.String', true);
  /**
   * Static representation of the [[postalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POSTAL_CODE = _fieldBuilder.buildEdmTypeField('PostalCode', 'Edm.String', true);
  /**
   * Static representation of the [[prfrdCommMediumType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRFRD_COMM_MEDIUM_TYPE = _fieldBuilder.buildEdmTypeField('PrfrdCommMediumType', 'Edm.String', true);
  /**
   * Static representation of the [[region]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REGION = _fieldBuilder.buildEdmTypeField('Region', 'Edm.String', true);
  /**
   * Static representation of the [[streetName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STREET_NAME = _fieldBuilder.buildEdmTypeField('StreetName', 'Edm.String', true);
  /**
   * Static representation of the [[streetPrefixName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STREET_PREFIX_NAME = _fieldBuilder.buildEdmTypeField('StreetPrefixName', 'Edm.String', true);
  /**
   * Static representation of the [[streetSuffixName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STREET_SUFFIX_NAME = _fieldBuilder.buildEdmTypeField('StreetSuffixName', 'Edm.String', true);
  /**
   * Static representation of the [[taxJurisdiction]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_JURISDICTION = _fieldBuilder.buildEdmTypeField('TaxJurisdiction', 'Edm.String', true);
  /**
   * Static representation of the [[transportZone]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TRANSPORT_ZONE = _fieldBuilder.buildEdmTypeField('TransportZone', 'Edm.String', true);
  /**
   * Static representation of the [[addressRepresentationCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_REPRESENTATION_CODE = _fieldBuilder.buildEdmTypeField('AddressRepresentationCode', 'Edm.String', true);
  /**
   * Static representation of the [[contactPersonBuilding]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTACT_PERSON_BUILDING = _fieldBuilder.buildEdmTypeField('ContactPersonBuilding', 'Edm.String', true);
  /**
   * Static representation of the [[contactPersonPrfrdCommMedium]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTACT_PERSON_PRFRD_COMM_MEDIUM = _fieldBuilder.buildEdmTypeField('ContactPersonPrfrdCommMedium', 'Edm.String', true);
  /**
   * Static representation of the [[contactRelationshipDepartment]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTACT_RELATIONSHIP_DEPARTMENT = _fieldBuilder.buildEdmTypeField('ContactRelationshipDepartment', 'Edm.String', true);
  /**
   * Static representation of the [[contactRelationshipFunction]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTACT_RELATIONSHIP_FUNCTION = _fieldBuilder.buildEdmTypeField('ContactRelationshipFunction', 'Edm.String', true);
  /**
   * Static representation of the [[correspondenceShortName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CORRESPONDENCE_SHORT_NAME = _fieldBuilder.buildEdmTypeField('CorrespondenceShortName', 'Edm.String', true);
  /**
   * Static representation of the [[floor]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FLOOR = _fieldBuilder.buildEdmTypeField('Floor', 'Edm.String', true);
  /**
   * Static representation of the [[inhouseMail]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INHOUSE_MAIL = _fieldBuilder.buildEdmTypeField('InhouseMail', 'Edm.String', true);
  /**
   * Static representation of the [[isDefaultAddress]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_DEFAULT_ADDRESS = _fieldBuilder.buildEdmTypeField('IsDefaultAddress', 'Edm.Boolean', true);
  /**
   * Static representation of the [[roomNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ROOM_NUMBER = _fieldBuilder.buildEdmTypeField('RoomNumber', 'Edm.String', true);
  /**
   * Static representation of the one-to-many navigation property [[toEmailAddress]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_EMAIL_ADDRESS: Link<BpContactToAddress, AddressEmailAddress> = new Link('to_EmailAddress', BpContactToAddress, AddressEmailAddress);
  /**
   * Static representation of the one-to-many navigation property [[toFaxNumber]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_FAX_NUMBER: Link<BpContactToAddress, AddressFaxNumber> = new Link('to_FaxNumber', BpContactToAddress, AddressFaxNumber);
  /**
   * Static representation of the one-to-many navigation property [[toMobilePhoneNumber]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_MOBILE_PHONE_NUMBER: Link<BpContactToAddress, AddressPhoneNumber> = new Link('to_MobilePhoneNumber', BpContactToAddress, AddressPhoneNumber);
  /**
   * Static representation of the one-to-many navigation property [[toPhoneNumber]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_PHONE_NUMBER: Link<BpContactToAddress, AddressPhoneNumber> = new Link('to_PhoneNumber', BpContactToAddress, AddressPhoneNumber);
  /**
   * Static representation of the one-to-many navigation property [[toUrlAddress]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_URL_ADDRESS: Link<BpContactToAddress, AddressHomePageUrl> = new Link('to_URLAddress', BpContactToAddress, AddressHomePageUrl);
  /**
   * All fields of the BpContactToAddress entity.
   */
  export const _allFields: Array<EdmTypeField<BpContactToAddress, 'Edm.String', false, true> | OrderableEdmTypeField<BpContactToAddress, 'Edm.DateTime', false, true> | EdmTypeField<BpContactToAddress, 'Edm.String', true, true> | EdmTypeField<BpContactToAddress, 'Edm.Boolean', true, true> | Link<BpContactToAddress, AddressEmailAddress> | Link<BpContactToAddress, AddressFaxNumber> | Link<BpContactToAddress, AddressPhoneNumber> | Link<BpContactToAddress, AddressHomePageUrl>> = [
    BpContactToAddress.RELATIONSHIP_NUMBER,
    BpContactToAddress.BUSINESS_PARTNER_COMPANY,
    BpContactToAddress.BUSINESS_PARTNER_PERSON,
    BpContactToAddress.VALIDITY_END_DATE,
    BpContactToAddress.ADDRESS_ID,
    BpContactToAddress.ADDRESS_NUMBER,
    BpContactToAddress.ADDITIONAL_STREET_PREFIX_NAME,
    BpContactToAddress.ADDITIONAL_STREET_SUFFIX_NAME,
    BpContactToAddress.ADDRESS_TIME_ZONE,
    BpContactToAddress.CARE_OF_NAME,
    BpContactToAddress.CITY_CODE,
    BpContactToAddress.CITY_NAME,
    BpContactToAddress.COMPANY_POSTAL_CODE,
    BpContactToAddress.COUNTRY,
    BpContactToAddress.COUNTY,
    BpContactToAddress.DELIVERY_SERVICE_NUMBER,
    BpContactToAddress.DELIVERY_SERVICE_TYPE_CODE,
    BpContactToAddress.DISTRICT,
    BpContactToAddress.FORM_OF_ADDRESS,
    BpContactToAddress.FULL_NAME,
    BpContactToAddress.HOME_CITY_NAME,
    BpContactToAddress.HOUSE_NUMBER,
    BpContactToAddress.HOUSE_NUMBER_SUPPLEMENT_TEXT,
    BpContactToAddress.LANGUAGE,
    BpContactToAddress.PO_BOX,
    BpContactToAddress.PO_BOX_DEVIATING_CITY_NAME,
    BpContactToAddress.PO_BOX_DEVIATING_COUNTRY,
    BpContactToAddress.PO_BOX_DEVIATING_REGION,
    BpContactToAddress.PO_BOX_IS_WITHOUT_NUMBER,
    BpContactToAddress.PO_BOX_LOBBY_NAME,
    BpContactToAddress.PO_BOX_POSTAL_CODE,
    BpContactToAddress.PERSON,
    BpContactToAddress.POSTAL_CODE,
    BpContactToAddress.PRFRD_COMM_MEDIUM_TYPE,
    BpContactToAddress.REGION,
    BpContactToAddress.STREET_NAME,
    BpContactToAddress.STREET_PREFIX_NAME,
    BpContactToAddress.STREET_SUFFIX_NAME,
    BpContactToAddress.TAX_JURISDICTION,
    BpContactToAddress.TRANSPORT_ZONE,
    BpContactToAddress.ADDRESS_REPRESENTATION_CODE,
    BpContactToAddress.CONTACT_PERSON_BUILDING,
    BpContactToAddress.CONTACT_PERSON_PRFRD_COMM_MEDIUM,
    BpContactToAddress.CONTACT_RELATIONSHIP_DEPARTMENT,
    BpContactToAddress.CONTACT_RELATIONSHIP_FUNCTION,
    BpContactToAddress.CORRESPONDENCE_SHORT_NAME,
    BpContactToAddress.FLOOR,
    BpContactToAddress.INHOUSE_MAIL,
    BpContactToAddress.IS_DEFAULT_ADDRESS,
    BpContactToAddress.ROOM_NUMBER,
    BpContactToAddress.TO_EMAIL_ADDRESS,
    BpContactToAddress.TO_FAX_NUMBER,
    BpContactToAddress.TO_MOBILE_PHONE_NUMBER,
    BpContactToAddress.TO_PHONE_NUMBER,
    BpContactToAddress.TO_URL_ADDRESS
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<BpContactToAddress> = new AllFields('*', BpContactToAddress);
  /**
   * All key fields of the BpContactToAddress entity.
   */
  export const _keyFields: Array<Field<BpContactToAddress, boolean, boolean>> = [BpContactToAddress.RELATIONSHIP_NUMBER, BpContactToAddress.BUSINESS_PARTNER_COMPANY, BpContactToAddress.BUSINESS_PARTNER_PERSON, BpContactToAddress.VALIDITY_END_DATE, BpContactToAddress.ADDRESS_ID];
  /**
   * Mapping of all key field names to the respective static field property BpContactToAddress.
   */
  export const _keys: { [keys: string]: Field<BpContactToAddress, boolean, boolean> } = BpContactToAddress._keyFields.reduce((acc: { [keys: string]: Field<BpContactToAddress, boolean, boolean> }, field: Field<BpContactToAddress, boolean, boolean>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
