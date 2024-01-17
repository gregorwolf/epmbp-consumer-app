import { BusinessPartnerAddressRequestBuilder } from './BusinessPartnerAddressRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field, Link, OneToOneLink, OrderableEdmTypeField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "A_BusinessPartnerAddress" of service "API_BUSINESS_PARTNER".
 */
export declare class BusinessPartnerAddress extends EntityV2 implements BusinessPartnerAddressType {
    /**
     * Technical entity name for BusinessPartnerAddress.
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
     * Validity Start of a Business Partner Address.
     * @nullable
     */
    validityStartDate?: Moment;
    /**
     * Validity End of a Business Partner Address.
     * @nullable
     */
    validityEndDate?: Moment;
    /**
     * Authorization Group.
     * Maximum length: 4.
     * @nullable
     */
    authorizationGroup?: string;
    /**
     * GUID of a Business Partner Address.
     * @nullable
     */
    addressUuid?: string;
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
     * Address number in external system.
     * Maximum length: 20.
     * @nullable
     */
    addressIdByExternalSystem?: string;
    /**
     * County code for county.
     * Maximum length: 8.
     * @nullable
     */
    countyCode?: string;
    /**
     * Township code for Township.
     * Maximum length: 8.
     * @nullable
     */
    townshipCode?: string;
    /**
     * Township.
     * Maximum length: 40.
     * @nullable
     */
    townshipName?: string;
    /**
     * One-to-many navigation property to the [[BuPaAddressUsage]] entity.
     */
    toAddressUsage: BuPaAddressUsage[];
    /**
     * One-to-one navigation property to the [[BpAddrDepdntIntlLocNumber]] entity.
     */
    toBpAddrDepdntIntlLocNumber?: BpAddrDepdntIntlLocNumber | null;
    /**
     * One-to-many navigation property to the [[BpIntlAddressVersion]] entity.
     */
    toBpIntlAddressVersion: BpIntlAddressVersion[];
    /**
     * One-to-many navigation property to the [[AddressEmailAddress]] entity.
     */
    toEmailAddress: AddressEmailAddress[];
    /**
     * One-to-many navigation property to the [[AddressFaxNumber]] entity.
     */
    toFaxNumber: AddressFaxNumber[];
    /**
     * One-to-many navigation property to the [[AddressPhoneNumber]] entity.
     */
    toMobilePhoneNumber: AddressPhoneNumber[];
    /**
     * One-to-many navigation property to the [[AddressPhoneNumber]] entity.
     */
    toPhoneNumber: AddressPhoneNumber[];
    /**
     * One-to-many navigation property to the [[AddressHomePageUrl]] entity.
     */
    toUrlAddress: AddressHomePageUrl[];
    /**
     * Returns an entity builder to construct instances of `BusinessPartnerAddress`.
     * @returns A builder that constructs instances of entity type `BusinessPartnerAddress`.
     */
    static builder(): EntityBuilderType<BusinessPartnerAddress, BusinessPartnerAddressType>;
    /**
     * Returns a request builder to construct requests for operations on the `BusinessPartnerAddress` entity type.
     * @returns A `BusinessPartnerAddress` request builder.
     */
    static requestBuilder(): BusinessPartnerAddressRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `BusinessPartnerAddress`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `BusinessPartnerAddress`.
     */
    static customField(fieldName: string): CustomFieldV2<BusinessPartnerAddress>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { BuPaAddressUsage, BuPaAddressUsageType } from './BuPaAddressUsage';
import { BpAddrDepdntIntlLocNumber, BpAddrDepdntIntlLocNumberType } from './BpAddrDepdntIntlLocNumber';
import { BpIntlAddressVersion, BpIntlAddressVersionType } from './BpIntlAddressVersion';
import { AddressEmailAddress, AddressEmailAddressType } from './AddressEmailAddress';
import { AddressFaxNumber, AddressFaxNumberType } from './AddressFaxNumber';
import { AddressPhoneNumber, AddressPhoneNumberType } from './AddressPhoneNumber';
import { AddressHomePageUrl, AddressHomePageUrlType } from './AddressHomePageUrl';
export interface BusinessPartnerAddressType {
    businessPartner: string;
    addressId: string;
    validityStartDate?: Moment | null;
    validityEndDate?: Moment | null;
    authorizationGroup?: string | null;
    addressUuid?: string | null;
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
    addressIdByExternalSystem?: string | null;
    countyCode?: string | null;
    townshipCode?: string | null;
    townshipName?: string | null;
    toAddressUsage: BuPaAddressUsageType[];
    toBpAddrDepdntIntlLocNumber?: BpAddrDepdntIntlLocNumberType | null;
    toBpIntlAddressVersion: BpIntlAddressVersionType[];
    toEmailAddress: AddressEmailAddressType[];
    toFaxNumber: AddressFaxNumberType[];
    toMobilePhoneNumber: AddressPhoneNumberType[];
    toPhoneNumber: AddressPhoneNumberType[];
    toUrlAddress: AddressHomePageUrlType[];
}
export declare namespace BusinessPartnerAddress {
    /**
     * Static representation of the [[businessPartner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER: EdmTypeField<BusinessPartnerAddress, "Edm.String", false, true>;
    /**
     * Static representation of the [[addressId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_ID: EdmTypeField<BusinessPartnerAddress, "Edm.String", false, true>;
    /**
     * Static representation of the [[validityStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VALIDITY_START_DATE: OrderableEdmTypeField<BusinessPartnerAddress, "Edm.DateTimeOffset", true, true>;
    /**
     * Static representation of the [[validityEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VALIDITY_END_DATE: OrderableEdmTypeField<BusinessPartnerAddress, "Edm.DateTimeOffset", true, true>;
    /**
     * Static representation of the [[authorizationGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AUTHORIZATION_GROUP: EdmTypeField<BusinessPartnerAddress, "Edm.String", true, true>;
    /**
     * Static representation of the [[addressUuid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_UUID: EdmTypeField<BusinessPartnerAddress, "Edm.Guid", true, true>;
    /**
     * Static representation of the [[additionalStreetPrefixName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDITIONAL_STREET_PREFIX_NAME: EdmTypeField<BusinessPartnerAddress, "Edm.String", true, true>;
    /**
     * Static representation of the [[additionalStreetSuffixName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDITIONAL_STREET_SUFFIX_NAME: EdmTypeField<BusinessPartnerAddress, "Edm.String", true, true>;
    /**
     * Static representation of the [[addressTimeZone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_TIME_ZONE: EdmTypeField<BusinessPartnerAddress, "Edm.String", true, true>;
    /**
     * Static representation of the [[careOfName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CARE_OF_NAME: EdmTypeField<BusinessPartnerAddress, "Edm.String", true, true>;
    /**
     * Static representation of the [[cityCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CITY_CODE: EdmTypeField<BusinessPartnerAddress, "Edm.String", true, true>;
    /**
     * Static representation of the [[cityName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CITY_NAME: EdmTypeField<BusinessPartnerAddress, "Edm.String", true, true>;
    /**
     * Static representation of the [[companyPostalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMPANY_POSTAL_CODE: EdmTypeField<BusinessPartnerAddress, "Edm.String", true, true>;
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY: EdmTypeField<BusinessPartnerAddress, "Edm.String", true, true>;
    /**
     * Static representation of the [[county]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTY: EdmTypeField<BusinessPartnerAddress, "Edm.String", true, true>;
    /**
     * Static representation of the [[deliveryServiceNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DELIVERY_SERVICE_NUMBER: EdmTypeField<BusinessPartnerAddress, "Edm.String", true, true>;
    /**
     * Static representation of the [[deliveryServiceTypeCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DELIVERY_SERVICE_TYPE_CODE: EdmTypeField<BusinessPartnerAddress, "Edm.String", true, true>;
    /**
     * Static representation of the [[district]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DISTRICT: EdmTypeField<BusinessPartnerAddress, "Edm.String", true, true>;
    /**
     * Static representation of the [[formOfAddress]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_OF_ADDRESS: EdmTypeField<BusinessPartnerAddress, "Edm.String", true, true>;
    /**
     * Static representation of the [[fullName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FULL_NAME: EdmTypeField<BusinessPartnerAddress, "Edm.String", true, true>;
    /**
     * Static representation of the [[homeCityName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HOME_CITY_NAME: EdmTypeField<BusinessPartnerAddress, "Edm.String", true, true>;
    /**
     * Static representation of the [[houseNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HOUSE_NUMBER: EdmTypeField<BusinessPartnerAddress, "Edm.String", true, true>;
    /**
     * Static representation of the [[houseNumberSupplementText]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HOUSE_NUMBER_SUPPLEMENT_TEXT: EdmTypeField<BusinessPartnerAddress, "Edm.String", true, true>;
    /**
     * Static representation of the [[language]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LANGUAGE: EdmTypeField<BusinessPartnerAddress, "Edm.String", true, true>;
    /**
     * Static representation of the [[poBox]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PO_BOX: EdmTypeField<BusinessPartnerAddress, "Edm.String", true, true>;
    /**
     * Static representation of the [[poBoxDeviatingCityName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PO_BOX_DEVIATING_CITY_NAME: EdmTypeField<BusinessPartnerAddress, "Edm.String", true, true>;
    /**
     * Static representation of the [[poBoxDeviatingCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PO_BOX_DEVIATING_COUNTRY: EdmTypeField<BusinessPartnerAddress, "Edm.String", true, true>;
    /**
     * Static representation of the [[poBoxDeviatingRegion]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PO_BOX_DEVIATING_REGION: EdmTypeField<BusinessPartnerAddress, "Edm.String", true, true>;
    /**
     * Static representation of the [[poBoxIsWithoutNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PO_BOX_IS_WITHOUT_NUMBER: EdmTypeField<BusinessPartnerAddress, "Edm.Boolean", true, true>;
    /**
     * Static representation of the [[poBoxLobbyName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PO_BOX_LOBBY_NAME: EdmTypeField<BusinessPartnerAddress, "Edm.String", true, true>;
    /**
     * Static representation of the [[poBoxPostalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PO_BOX_POSTAL_CODE: EdmTypeField<BusinessPartnerAddress, "Edm.String", true, true>;
    /**
     * Static representation of the [[person]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERSON: EdmTypeField<BusinessPartnerAddress, "Edm.String", true, true>;
    /**
     * Static representation of the [[postalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const POSTAL_CODE: EdmTypeField<BusinessPartnerAddress, "Edm.String", true, true>;
    /**
     * Static representation of the [[prfrdCommMediumType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRFRD_COMM_MEDIUM_TYPE: EdmTypeField<BusinessPartnerAddress, "Edm.String", true, true>;
    /**
     * Static representation of the [[region]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REGION: EdmTypeField<BusinessPartnerAddress, "Edm.String", true, true>;
    /**
     * Static representation of the [[streetName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STREET_NAME: EdmTypeField<BusinessPartnerAddress, "Edm.String", true, true>;
    /**
     * Static representation of the [[streetPrefixName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STREET_PREFIX_NAME: EdmTypeField<BusinessPartnerAddress, "Edm.String", true, true>;
    /**
     * Static representation of the [[streetSuffixName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STREET_SUFFIX_NAME: EdmTypeField<BusinessPartnerAddress, "Edm.String", true, true>;
    /**
     * Static representation of the [[taxJurisdiction]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TAX_JURISDICTION: EdmTypeField<BusinessPartnerAddress, "Edm.String", true, true>;
    /**
     * Static representation of the [[transportZone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TRANSPORT_ZONE: EdmTypeField<BusinessPartnerAddress, "Edm.String", true, true>;
    /**
     * Static representation of the [[addressIdByExternalSystem]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_ID_BY_EXTERNAL_SYSTEM: EdmTypeField<BusinessPartnerAddress, "Edm.String", true, true>;
    /**
     * Static representation of the [[countyCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTY_CODE: EdmTypeField<BusinessPartnerAddress, "Edm.String", true, true>;
    /**
     * Static representation of the [[townshipCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TOWNSHIP_CODE: EdmTypeField<BusinessPartnerAddress, "Edm.String", true, true>;
    /**
     * Static representation of the [[townshipName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TOWNSHIP_NAME: EdmTypeField<BusinessPartnerAddress, "Edm.String", true, true>;
    /**
     * Static representation of the one-to-many navigation property [[toAddressUsage]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_ADDRESS_USAGE: Link<BusinessPartnerAddress, BuPaAddressUsage>;
    /**
     * Static representation of the one-to-one navigation property [[toBpAddrDepdntIntlLocNumber]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_BP_ADDR_DEPDNT_INTL_LOC_NUMBER: OneToOneLink<BusinessPartnerAddress, BpAddrDepdntIntlLocNumber>;
    /**
     * Static representation of the one-to-many navigation property [[toBpIntlAddressVersion]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_BP_INTL_ADDRESS_VERSION: Link<BusinessPartnerAddress, BpIntlAddressVersion>;
    /**
     * Static representation of the one-to-many navigation property [[toEmailAddress]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_EMAIL_ADDRESS: Link<BusinessPartnerAddress, AddressEmailAddress>;
    /**
     * Static representation of the one-to-many navigation property [[toFaxNumber]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_FAX_NUMBER: Link<BusinessPartnerAddress, AddressFaxNumber>;
    /**
     * Static representation of the one-to-many navigation property [[toMobilePhoneNumber]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_MOBILE_PHONE_NUMBER: Link<BusinessPartnerAddress, AddressPhoneNumber>;
    /**
     * Static representation of the one-to-many navigation property [[toPhoneNumber]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_PHONE_NUMBER: Link<BusinessPartnerAddress, AddressPhoneNumber>;
    /**
     * Static representation of the one-to-many navigation property [[toUrlAddress]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_URL_ADDRESS: Link<BusinessPartnerAddress, AddressHomePageUrl>;
    /**
     * All fields of the BusinessPartnerAddress entity.
     */
    const _allFields: Array<EdmTypeField<BusinessPartnerAddress, 'Edm.String', false, true> | OrderableEdmTypeField<BusinessPartnerAddress, 'Edm.DateTimeOffset', true, true> | EdmTypeField<BusinessPartnerAddress, 'Edm.String', true, true> | EdmTypeField<BusinessPartnerAddress, 'Edm.Guid', true, true> | EdmTypeField<BusinessPartnerAddress, 'Edm.Boolean', true, true> | Link<BusinessPartnerAddress, BuPaAddressUsage> | OneToOneLink<BusinessPartnerAddress, BpAddrDepdntIntlLocNumber> | Link<BusinessPartnerAddress, BpIntlAddressVersion> | Link<BusinessPartnerAddress, AddressEmailAddress> | Link<BusinessPartnerAddress, AddressFaxNumber> | Link<BusinessPartnerAddress, AddressPhoneNumber> | Link<BusinessPartnerAddress, AddressHomePageUrl>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<BusinessPartnerAddress>;
    /**
     * All key fields of the BusinessPartnerAddress entity.
     */
    const _keyFields: Array<Field<BusinessPartnerAddress, boolean, boolean>>;
    /**
     * Mapping of all key field names to the respective static field property BusinessPartnerAddress.
     */
    const _keys: {
        [keys: string]: Field<BusinessPartnerAddress, boolean, boolean>;
    };
}
//# sourceMappingURL=BusinessPartnerAddress.d.ts.map