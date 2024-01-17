import { BpIntlAddressVersionRequestBuilder } from './BpIntlAddressVersionRequestBuilder';
import { AllFields, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "A_BPIntlAddressVersion" of service "API_BUSINESS_PARTNER".
 */
export declare class BpIntlAddressVersion extends EntityV2 implements BpIntlAddressVersionType {
    /**
     * Technical entity name for BpIntlAddressVersion.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Business Partner Number.
     * Maximum length: 10.
     */
    businessPartner: string;
    /**
     * Address Number.
     * Maximum length: 10.
     */
    addressId: string;
    /**
     * Version ID for International Addresses.
     * Maximum length: 1.
     */
    addressRepresentationCode: string;
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
    static builder(): EntityBuilderType<BpIntlAddressVersion, BpIntlAddressVersionType>;
    /**
     * Returns a request builder to construct requests for operations on the `BpIntlAddressVersion` entity type.
     * @returns A `BpIntlAddressVersion` request builder.
     */
    static requestBuilder(): BpIntlAddressVersionRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `BpIntlAddressVersion`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `BpIntlAddressVersion`.
     */
    static customField(fieldName: string): CustomFieldV2<BpIntlAddressVersion>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
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
export declare namespace BpIntlAddressVersion {
    /**
     * Static representation of the [[businessPartner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER: EdmTypeField<BpIntlAddressVersion, "Edm.String", false, true>;
    /**
     * Static representation of the [[addressId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_ID: EdmTypeField<BpIntlAddressVersion, "Edm.String", false, true>;
    /**
     * Static representation of the [[addressRepresentationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_REPRESENTATION_CODE: EdmTypeField<BpIntlAddressVersion, "Edm.String", false, true>;
    /**
     * Static representation of the [[addresseeFullName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESSEE_FULL_NAME: EdmTypeField<BpIntlAddressVersion, "Edm.String", true, true>;
    /**
     * Static representation of the [[addressIdByExternalSystem]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_ID_BY_EXTERNAL_SYSTEM: EdmTypeField<BpIntlAddressVersion, "Edm.String", true, true>;
    /**
     * Static representation of the [[addressPersonId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_PERSON_ID: EdmTypeField<BpIntlAddressVersion, "Edm.String", true, true>;
    /**
     * Static representation of the [[addressSearchTerm1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_SEARCH_TERM_1: EdmTypeField<BpIntlAddressVersion, "Edm.String", true, true>;
    /**
     * Static representation of the [[addressSearchTerm2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_SEARCH_TERM_2: EdmTypeField<BpIntlAddressVersion, "Edm.String", true, true>;
    /**
     * Static representation of the [[addressTimeZone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_TIME_ZONE: EdmTypeField<BpIntlAddressVersion, "Edm.String", true, true>;
    /**
     * Static representation of the [[careOfName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CARE_OF_NAME: EdmTypeField<BpIntlAddressVersion, "Edm.String", true, true>;
    /**
     * Static representation of the [[cityName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CITY_NAME: EdmTypeField<BpIntlAddressVersion, "Edm.String", true, true>;
    /**
     * Static representation of the [[cityNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CITY_NUMBER: EdmTypeField<BpIntlAddressVersion, "Edm.String", true, true>;
    /**
     * Static representation of the [[companyPostalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMPANY_POSTAL_CODE: EdmTypeField<BpIntlAddressVersion, "Edm.String", true, true>;
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY: EdmTypeField<BpIntlAddressVersion, "Edm.String", true, true>;
    /**
     * Static representation of the [[deliveryServiceNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DELIVERY_SERVICE_NUMBER: EdmTypeField<BpIntlAddressVersion, "Edm.String", true, true>;
    /**
     * Static representation of the [[deliveryServiceTypeCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DELIVERY_SERVICE_TYPE_CODE: EdmTypeField<BpIntlAddressVersion, "Edm.String", true, true>;
    /**
     * Static representation of the [[districtName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DISTRICT_NAME: EdmTypeField<BpIntlAddressVersion, "Edm.String", true, true>;
    /**
     * Static representation of the [[formOfAddress]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_OF_ADDRESS: EdmTypeField<BpIntlAddressVersion, "Edm.String", true, true>;
    /**
     * Static representation of the [[houseNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HOUSE_NUMBER: EdmTypeField<BpIntlAddressVersion, "Edm.String", true, true>;
    /**
     * Static representation of the [[houseNumberSupplementText]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HOUSE_NUMBER_SUPPLEMENT_TEXT: EdmTypeField<BpIntlAddressVersion, "Edm.String", true, true>;
    /**
     * Static representation of the [[language]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LANGUAGE: EdmTypeField<BpIntlAddressVersion, "Edm.String", true, true>;
    /**
     * Static representation of the [[organizationName1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ORGANIZATION_NAME_1: EdmTypeField<BpIntlAddressVersion, "Edm.String", true, true>;
    /**
     * Static representation of the [[organizationName2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ORGANIZATION_NAME_2: EdmTypeField<BpIntlAddressVersion, "Edm.String", true, true>;
    /**
     * Static representation of the [[organizationName3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ORGANIZATION_NAME_3: EdmTypeField<BpIntlAddressVersion, "Edm.String", true, true>;
    /**
     * Static representation of the [[organizationName4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ORGANIZATION_NAME_4: EdmTypeField<BpIntlAddressVersion, "Edm.String", true, true>;
    /**
     * Static representation of the [[personFamilyName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERSON_FAMILY_NAME: EdmTypeField<BpIntlAddressVersion, "Edm.String", true, true>;
    /**
     * Static representation of the [[personGivenName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERSON_GIVEN_NAME: EdmTypeField<BpIntlAddressVersion, "Edm.String", true, true>;
    /**
     * Static representation of the [[poBox]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PO_BOX: EdmTypeField<BpIntlAddressVersion, "Edm.String", true, true>;
    /**
     * Static representation of the [[poBoxDeviatingCityName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PO_BOX_DEVIATING_CITY_NAME: EdmTypeField<BpIntlAddressVersion, "Edm.String", true, true>;
    /**
     * Static representation of the [[poBoxDeviatingCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PO_BOX_DEVIATING_COUNTRY: EdmTypeField<BpIntlAddressVersion, "Edm.String", true, true>;
    /**
     * Static representation of the [[poBoxDeviatingRegion]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PO_BOX_DEVIATING_REGION: EdmTypeField<BpIntlAddressVersion, "Edm.String", true, true>;
    /**
     * Static representation of the [[poBoxIsWithoutNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PO_BOX_IS_WITHOUT_NUMBER: EdmTypeField<BpIntlAddressVersion, "Edm.Boolean", true, true>;
    /**
     * Static representation of the [[poBoxLobbyName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PO_BOX_LOBBY_NAME: EdmTypeField<BpIntlAddressVersion, "Edm.String", true, true>;
    /**
     * Static representation of the [[poBoxPostalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PO_BOX_POSTAL_CODE: EdmTypeField<BpIntlAddressVersion, "Edm.String", true, true>;
    /**
     * Static representation of the [[postalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const POSTAL_CODE: EdmTypeField<BpIntlAddressVersion, "Edm.String", true, true>;
    /**
     * Static representation of the [[prfrdCommMediumType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRFRD_COMM_MEDIUM_TYPE: EdmTypeField<BpIntlAddressVersion, "Edm.String", true, true>;
    /**
     * Static representation of the [[region]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REGION: EdmTypeField<BpIntlAddressVersion, "Edm.String", true, true>;
    /**
     * Static representation of the [[secondaryRegion]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECONDARY_REGION: EdmTypeField<BpIntlAddressVersion, "Edm.String", true, true>;
    /**
     * Static representation of the [[secondaryRegionName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECONDARY_REGION_NAME: EdmTypeField<BpIntlAddressVersion, "Edm.String", true, true>;
    /**
     * Static representation of the [[streetName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STREET_NAME: EdmTypeField<BpIntlAddressVersion, "Edm.String", true, true>;
    /**
     * Static representation of the [[streetPrefixName1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STREET_PREFIX_NAME_1: EdmTypeField<BpIntlAddressVersion, "Edm.String", true, true>;
    /**
     * Static representation of the [[streetPrefixName2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STREET_PREFIX_NAME_2: EdmTypeField<BpIntlAddressVersion, "Edm.String", true, true>;
    /**
     * Static representation of the [[streetSuffixName1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STREET_SUFFIX_NAME_1: EdmTypeField<BpIntlAddressVersion, "Edm.String", true, true>;
    /**
     * Static representation of the [[streetSuffixName2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STREET_SUFFIX_NAME_2: EdmTypeField<BpIntlAddressVersion, "Edm.String", true, true>;
    /**
     * Static representation of the [[taxJurisdiction]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TAX_JURISDICTION: EdmTypeField<BpIntlAddressVersion, "Edm.String", true, true>;
    /**
     * Static representation of the [[tertiaryRegion]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TERTIARY_REGION: EdmTypeField<BpIntlAddressVersion, "Edm.String", true, true>;
    /**
     * Static representation of the [[tertiaryRegionName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TERTIARY_REGION_NAME: EdmTypeField<BpIntlAddressVersion, "Edm.String", true, true>;
    /**
     * Static representation of the [[transportZone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TRANSPORT_ZONE: EdmTypeField<BpIntlAddressVersion, "Edm.String", true, true>;
    /**
     * Static representation of the [[villageName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VILLAGE_NAME: EdmTypeField<BpIntlAddressVersion, "Edm.String", true, true>;
    /**
     * All fields of the BpIntlAddressVersion entity.
     */
    const _allFields: Array<EdmTypeField<BpIntlAddressVersion, 'Edm.String', false, true> | EdmTypeField<BpIntlAddressVersion, 'Edm.String', true, true> | EdmTypeField<BpIntlAddressVersion, 'Edm.Boolean', true, true>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<BpIntlAddressVersion>;
    /**
     * All key fields of the BpIntlAddressVersion entity.
     */
    const _keyFields: Array<Field<BpIntlAddressVersion, boolean, boolean>>;
    /**
     * Mapping of all key field names to the respective static field property BpIntlAddressVersion.
     */
    const _keys: {
        [keys: string]: Field<BpIntlAddressVersion, boolean, boolean>;
    };
}
//# sourceMappingURL=BpIntlAddressVersion.d.ts.map