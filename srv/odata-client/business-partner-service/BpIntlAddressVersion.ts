/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BpIntlAddressVersionRequestBuilder } from './BpIntlAddressVersionRequestBuilder';
import { AllFields, Constructable, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field, FieldBuilder } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "A_BPIntlAddressVersion" of service "API_BUSINESS_PARTNER".
 */
export class BpIntlAddressVersion extends EntityV2 implements BpIntlAddressVersionType {
  /**
   * Technical entity name for BpIntlAddressVersion.
   */
  static _entityName = 'A_BPIntlAddressVersion';
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
   * Version ID for International Addresses.
   * Maximum length: 1.
   */
  addressRepresentationCode!: string;
  /**
   * Full Name of Person.
   * Maximum length: 80.
   * @nullable
   */
  addresseeFullName?: string;
  /**
   * Address number in external system.
   * Maximum length: 20.
   * @nullable
   */
  addressIdByExternalSystem?: string;
  /**
   * Person Number.
   * Maximum length: 10.
   * @nullable
   */
  addressPersonId?: string;
  /**
   * Search Term 1.
   * Maximum length: 20.
   * @nullable
   */
  addressSearchTerm1?: string;
  /**
   * Search Term 2.
   * Maximum length: 20.
   * @nullable
   */
  addressSearchTerm2?: string;
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
   * City.
   * Maximum length: 40.
   * @nullable
   */
  cityName?: string;
  /**
   * City code for city/street file.
   * Maximum length: 12.
   * @nullable
   */
  cityNumber?: string;
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
  districtName?: string;
  /**
   * Form-of-Address Key.
   * Maximum length: 4.
   * @nullable
   */
  formOfAddress?: string;
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
   * Name 1.
   * Maximum length: 40.
   * @nullable
   */
  organizationName1?: string;
  /**
   * Name 2.
   * Maximum length: 40.
   * @nullable
   */
  organizationName2?: string;
  /**
   * Name 3.
   * Maximum length: 40.
   * @nullable
   */
  organizationName3?: string;
  /**
   * Name 4.
   * Maximum length: 40.
   * @nullable
   */
  organizationName4?: string;
  /**
   * Last Name.
   * Maximum length: 40.
   * @nullable
   */
  personFamilyName?: string;
  /**
   * First Name.
   * Maximum length: 40.
   * @nullable
   */
  personGivenName?: string;
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
   * County code for county.
   * Maximum length: 8.
   * @nullable
   */
  secondaryRegion?: string;
  /**
   * County.
   * Maximum length: 40.
   * @nullable
   */
  secondaryRegionName?: string;
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
  streetPrefixName1?: string;
  /**
   * Street 3.
   * Maximum length: 40.
   * @nullable
   */
  streetPrefixName2?: string;
  /**
   * Street 4.
   * Maximum length: 40.
   * @nullable
   */
  streetSuffixName1?: string;
  /**
   * Street 5.
   * Maximum length: 40.
   * @nullable
   */
  streetSuffixName2?: string;
  /**
   * Tax Jurisdiction.
   * Maximum length: 15.
   * @nullable
   */
  taxJurisdiction?: string;
  /**
   * Township code for Township.
   * Maximum length: 8.
   * @nullable
   */
  tertiaryRegion?: string;
  /**
   * Township.
   * Maximum length: 40.
   * @nullable
   */
  tertiaryRegionName?: string;
  /**
   * Transportation zone to or from which the goods are delivered.
   * Maximum length: 10.
   * @nullable
   */
  transportZone?: string;
  /**
   * City (different from postal city).
   * Maximum length: 40.
   * @nullable
   */
  villageName?: string;

  /**
   * Returns an entity builder to construct instances of `BpIntlAddressVersion`.
   * @returns A builder that constructs instances of entity type `BpIntlAddressVersion`.
   */
  static builder(): EntityBuilderType<BpIntlAddressVersion, BpIntlAddressVersionType> {
    return EntityV2.entityBuilder(BpIntlAddressVersion);
  }

  /**
   * Returns a request builder to construct requests for operations on the `BpIntlAddressVersion` entity type.
   * @returns A `BpIntlAddressVersion` request builder.
   */
  static requestBuilder(): BpIntlAddressVersionRequestBuilder {
    return new BpIntlAddressVersionRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `BpIntlAddressVersion`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `BpIntlAddressVersion`.
   */
  static customField(fieldName: string): CustomFieldV2<BpIntlAddressVersion> {
    return EntityV2.customFieldSelector(fieldName, BpIntlAddressVersion);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface BpIntlAddressVersionType {
  businessPartner: string;
  addressId: string;
  addressRepresentationCode: string;
  addresseeFullName?: string | null;
  addressIdByExternalSystem?: string | null;
  addressPersonId?: string | null;
  addressSearchTerm1?: string | null;
  addressSearchTerm2?: string | null;
  addressTimeZone?: string | null;
  careOfName?: string | null;
  cityName?: string | null;
  cityNumber?: string | null;
  companyPostalCode?: string | null;
  country?: string | null;
  deliveryServiceNumber?: string | null;
  deliveryServiceTypeCode?: string | null;
  districtName?: string | null;
  formOfAddress?: string | null;
  houseNumber?: string | null;
  houseNumberSupplementText?: string | null;
  language?: string | null;
  organizationName1?: string | null;
  organizationName2?: string | null;
  organizationName3?: string | null;
  organizationName4?: string | null;
  personFamilyName?: string | null;
  personGivenName?: string | null;
  poBox?: string | null;
  poBoxDeviatingCityName?: string | null;
  poBoxDeviatingCountry?: string | null;
  poBoxDeviatingRegion?: string | null;
  poBoxIsWithoutNumber?: boolean | null;
  poBoxLobbyName?: string | null;
  poBoxPostalCode?: string | null;
  postalCode?: string | null;
  prfrdCommMediumType?: string | null;
  region?: string | null;
  secondaryRegion?: string | null;
  secondaryRegionName?: string | null;
  streetName?: string | null;
  streetPrefixName1?: string | null;
  streetPrefixName2?: string | null;
  streetSuffixName1?: string | null;
  streetSuffixName2?: string | null;
  taxJurisdiction?: string | null;
  tertiaryRegion?: string | null;
  tertiaryRegionName?: string | null;
  transportZone?: string | null;
  villageName?: string | null;
}

export namespace BpIntlAddressVersion {
  const _fieldBuilder: FieldBuilder<Constructable<BpIntlAddressVersion>> = new FieldBuilder(BpIntlAddressVersion);
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
   * Static representation of the [[addressRepresentationCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_REPRESENTATION_CODE = _fieldBuilder.buildEdmTypeField('AddressRepresentationCode', 'Edm.String', false);
  /**
   * Static representation of the [[addresseeFullName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESSEE_FULL_NAME = _fieldBuilder.buildEdmTypeField('AddresseeFullName', 'Edm.String', true);
  /**
   * Static representation of the [[addressIdByExternalSystem]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_ID_BY_EXTERNAL_SYSTEM = _fieldBuilder.buildEdmTypeField('AddressIDByExternalSystem', 'Edm.String', true);
  /**
   * Static representation of the [[addressPersonId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_PERSON_ID = _fieldBuilder.buildEdmTypeField('AddressPersonID', 'Edm.String', true);
  /**
   * Static representation of the [[addressSearchTerm1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_SEARCH_TERM_1 = _fieldBuilder.buildEdmTypeField('AddressSearchTerm1', 'Edm.String', true);
  /**
   * Static representation of the [[addressSearchTerm2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_SEARCH_TERM_2 = _fieldBuilder.buildEdmTypeField('AddressSearchTerm2', 'Edm.String', true);
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
   * Static representation of the [[cityName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CITY_NAME = _fieldBuilder.buildEdmTypeField('CityName', 'Edm.String', true);
  /**
   * Static representation of the [[cityNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CITY_NUMBER = _fieldBuilder.buildEdmTypeField('CityNumber', 'Edm.String', true);
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
   * Static representation of the [[districtName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DISTRICT_NAME = _fieldBuilder.buildEdmTypeField('DistrictName', 'Edm.String', true);
  /**
   * Static representation of the [[formOfAddress]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_OF_ADDRESS = _fieldBuilder.buildEdmTypeField('FormOfAddress', 'Edm.String', true);
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
   * Static representation of the [[organizationName1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORGANIZATION_NAME_1 = _fieldBuilder.buildEdmTypeField('OrganizationName1', 'Edm.String', true);
  /**
   * Static representation of the [[organizationName2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORGANIZATION_NAME_2 = _fieldBuilder.buildEdmTypeField('OrganizationName2', 'Edm.String', true);
  /**
   * Static representation of the [[organizationName3]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORGANIZATION_NAME_3 = _fieldBuilder.buildEdmTypeField('OrganizationName3', 'Edm.String', true);
  /**
   * Static representation of the [[organizationName4]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORGANIZATION_NAME_4 = _fieldBuilder.buildEdmTypeField('OrganizationName4', 'Edm.String', true);
  /**
   * Static representation of the [[personFamilyName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERSON_FAMILY_NAME = _fieldBuilder.buildEdmTypeField('PersonFamilyName', 'Edm.String', true);
  /**
   * Static representation of the [[personGivenName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERSON_GIVEN_NAME = _fieldBuilder.buildEdmTypeField('PersonGivenName', 'Edm.String', true);
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
   * Static representation of the [[secondaryRegion]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECONDARY_REGION = _fieldBuilder.buildEdmTypeField('SecondaryRegion', 'Edm.String', true);
  /**
   * Static representation of the [[secondaryRegionName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECONDARY_REGION_NAME = _fieldBuilder.buildEdmTypeField('SecondaryRegionName', 'Edm.String', true);
  /**
   * Static representation of the [[streetName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STREET_NAME = _fieldBuilder.buildEdmTypeField('StreetName', 'Edm.String', true);
  /**
   * Static representation of the [[streetPrefixName1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STREET_PREFIX_NAME_1 = _fieldBuilder.buildEdmTypeField('StreetPrefixName1', 'Edm.String', true);
  /**
   * Static representation of the [[streetPrefixName2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STREET_PREFIX_NAME_2 = _fieldBuilder.buildEdmTypeField('StreetPrefixName2', 'Edm.String', true);
  /**
   * Static representation of the [[streetSuffixName1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STREET_SUFFIX_NAME_1 = _fieldBuilder.buildEdmTypeField('StreetSuffixName1', 'Edm.String', true);
  /**
   * Static representation of the [[streetSuffixName2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STREET_SUFFIX_NAME_2 = _fieldBuilder.buildEdmTypeField('StreetSuffixName2', 'Edm.String', true);
  /**
   * Static representation of the [[taxJurisdiction]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_JURISDICTION = _fieldBuilder.buildEdmTypeField('TaxJurisdiction', 'Edm.String', true);
  /**
   * Static representation of the [[tertiaryRegion]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TERTIARY_REGION = _fieldBuilder.buildEdmTypeField('TertiaryRegion', 'Edm.String', true);
  /**
   * Static representation of the [[tertiaryRegionName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TERTIARY_REGION_NAME = _fieldBuilder.buildEdmTypeField('TertiaryRegionName', 'Edm.String', true);
  /**
   * Static representation of the [[transportZone]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TRANSPORT_ZONE = _fieldBuilder.buildEdmTypeField('TransportZone', 'Edm.String', true);
  /**
   * Static representation of the [[villageName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VILLAGE_NAME = _fieldBuilder.buildEdmTypeField('VillageName', 'Edm.String', true);
  /**
   * All fields of the BpIntlAddressVersion entity.
   */
  export const _allFields: Array<EdmTypeField<BpIntlAddressVersion, 'Edm.String', false, true> | EdmTypeField<BpIntlAddressVersion, 'Edm.String', true, true> | EdmTypeField<BpIntlAddressVersion, 'Edm.Boolean', true, true>> = [
    BpIntlAddressVersion.BUSINESS_PARTNER,
    BpIntlAddressVersion.ADDRESS_ID,
    BpIntlAddressVersion.ADDRESS_REPRESENTATION_CODE,
    BpIntlAddressVersion.ADDRESSEE_FULL_NAME,
    BpIntlAddressVersion.ADDRESS_ID_BY_EXTERNAL_SYSTEM,
    BpIntlAddressVersion.ADDRESS_PERSON_ID,
    BpIntlAddressVersion.ADDRESS_SEARCH_TERM_1,
    BpIntlAddressVersion.ADDRESS_SEARCH_TERM_2,
    BpIntlAddressVersion.ADDRESS_TIME_ZONE,
    BpIntlAddressVersion.CARE_OF_NAME,
    BpIntlAddressVersion.CITY_NAME,
    BpIntlAddressVersion.CITY_NUMBER,
    BpIntlAddressVersion.COMPANY_POSTAL_CODE,
    BpIntlAddressVersion.COUNTRY,
    BpIntlAddressVersion.DELIVERY_SERVICE_NUMBER,
    BpIntlAddressVersion.DELIVERY_SERVICE_TYPE_CODE,
    BpIntlAddressVersion.DISTRICT_NAME,
    BpIntlAddressVersion.FORM_OF_ADDRESS,
    BpIntlAddressVersion.HOUSE_NUMBER,
    BpIntlAddressVersion.HOUSE_NUMBER_SUPPLEMENT_TEXT,
    BpIntlAddressVersion.LANGUAGE,
    BpIntlAddressVersion.ORGANIZATION_NAME_1,
    BpIntlAddressVersion.ORGANIZATION_NAME_2,
    BpIntlAddressVersion.ORGANIZATION_NAME_3,
    BpIntlAddressVersion.ORGANIZATION_NAME_4,
    BpIntlAddressVersion.PERSON_FAMILY_NAME,
    BpIntlAddressVersion.PERSON_GIVEN_NAME,
    BpIntlAddressVersion.PO_BOX,
    BpIntlAddressVersion.PO_BOX_DEVIATING_CITY_NAME,
    BpIntlAddressVersion.PO_BOX_DEVIATING_COUNTRY,
    BpIntlAddressVersion.PO_BOX_DEVIATING_REGION,
    BpIntlAddressVersion.PO_BOX_IS_WITHOUT_NUMBER,
    BpIntlAddressVersion.PO_BOX_LOBBY_NAME,
    BpIntlAddressVersion.PO_BOX_POSTAL_CODE,
    BpIntlAddressVersion.POSTAL_CODE,
    BpIntlAddressVersion.PRFRD_COMM_MEDIUM_TYPE,
    BpIntlAddressVersion.REGION,
    BpIntlAddressVersion.SECONDARY_REGION,
    BpIntlAddressVersion.SECONDARY_REGION_NAME,
    BpIntlAddressVersion.STREET_NAME,
    BpIntlAddressVersion.STREET_PREFIX_NAME_1,
    BpIntlAddressVersion.STREET_PREFIX_NAME_2,
    BpIntlAddressVersion.STREET_SUFFIX_NAME_1,
    BpIntlAddressVersion.STREET_SUFFIX_NAME_2,
    BpIntlAddressVersion.TAX_JURISDICTION,
    BpIntlAddressVersion.TERTIARY_REGION,
    BpIntlAddressVersion.TERTIARY_REGION_NAME,
    BpIntlAddressVersion.TRANSPORT_ZONE,
    BpIntlAddressVersion.VILLAGE_NAME
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<BpIntlAddressVersion> = new AllFields('*', BpIntlAddressVersion);
  /**
   * All key fields of the BpIntlAddressVersion entity.
   */
  export const _keyFields: Array<Field<BpIntlAddressVersion, boolean, boolean>> = [BpIntlAddressVersion.BUSINESS_PARTNER, BpIntlAddressVersion.ADDRESS_ID, BpIntlAddressVersion.ADDRESS_REPRESENTATION_CODE];
  /**
   * Mapping of all key field names to the respective static field property BpIntlAddressVersion.
   */
  export const _keys: { [keys: string]: Field<BpIntlAddressVersion, boolean, boolean> } = BpIntlAddressVersion._keyFields.reduce((acc: { [keys: string]: Field<BpIntlAddressVersion, boolean, boolean> }, field: Field<BpIntlAddressVersion, boolean, boolean>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
