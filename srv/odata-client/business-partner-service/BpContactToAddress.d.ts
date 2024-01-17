import { BpContactToAddressRequestBuilder } from './BpContactToAddressRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field, Link, OrderableEdmTypeField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "A_BPContactToAddress" of service "API_BUSINESS_PARTNER".
 */
export declare class BpContactToAddress extends EntityV2 implements BpContactToAddressType {
    /**
     * Technical entity name for BpContactToAddress.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * BP Relationship Number.
     * Maximum length: 12.
     */
    relationshipNumber: string;
    /**
     * Business Partner Number.
     * Maximum length: 10.
     */
    businessPartnerCompany: string;
    /**
     * Business Partner Number.
     * Maximum length: 10.
     */
    businessPartnerPerson: string;
    /**
     * Validity Date (Valid To).
     */
    validityEndDate: Moment;
    /**
     * Address Number.
     * Maximum length: 10.
     */
    addressId: string;
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
     * Returns an entity builder to construct instances of `BpContactToAddress`.
     * @returns A builder that constructs instances of entity type `BpContactToAddress`.
     */
    static builder(): EntityBuilderType<BpContactToAddress, BpContactToAddressType>;
    /**
     * Returns a request builder to construct requests for operations on the `BpContactToAddress` entity type.
     * @returns A `BpContactToAddress` request builder.
     */
    static requestBuilder(): BpContactToAddressRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `BpContactToAddress`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `BpContactToAddress`.
     */
    static customField(fieldName: string): CustomFieldV2<BpContactToAddress>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
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
export declare namespace BpContactToAddress {
    /**
     * Static representation of the [[relationshipNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RELATIONSHIP_NUMBER: EdmTypeField<BpContactToAddress, "Edm.String", false, true>;
    /**
     * Static representation of the [[businessPartnerCompany]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER_COMPANY: EdmTypeField<BpContactToAddress, "Edm.String", false, true>;
    /**
     * Static representation of the [[businessPartnerPerson]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER_PERSON: EdmTypeField<BpContactToAddress, "Edm.String", false, true>;
    /**
     * Static representation of the [[validityEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VALIDITY_END_DATE: OrderableEdmTypeField<BpContactToAddress, "Edm.DateTime", false, true>;
    /**
     * Static representation of the [[addressId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_ID: EdmTypeField<BpContactToAddress, "Edm.String", false, true>;
    /**
     * Static representation of the [[addressNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_NUMBER: EdmTypeField<BpContactToAddress, "Edm.String", true, true>;
    /**
     * Static representation of the [[additionalStreetPrefixName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDITIONAL_STREET_PREFIX_NAME: EdmTypeField<BpContactToAddress, "Edm.String", true, true>;
    /**
     * Static representation of the [[additionalStreetSuffixName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDITIONAL_STREET_SUFFIX_NAME: EdmTypeField<BpContactToAddress, "Edm.String", true, true>;
    /**
     * Static representation of the [[addressTimeZone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_TIME_ZONE: EdmTypeField<BpContactToAddress, "Edm.String", true, true>;
    /**
     * Static representation of the [[careOfName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CARE_OF_NAME: EdmTypeField<BpContactToAddress, "Edm.String", true, true>;
    /**
     * Static representation of the [[cityCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CITY_CODE: EdmTypeField<BpContactToAddress, "Edm.String", true, true>;
    /**
     * Static representation of the [[cityName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CITY_NAME: EdmTypeField<BpContactToAddress, "Edm.String", true, true>;
    /**
     * Static representation of the [[companyPostalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMPANY_POSTAL_CODE: EdmTypeField<BpContactToAddress, "Edm.String", true, true>;
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY: EdmTypeField<BpContactToAddress, "Edm.String", true, true>;
    /**
     * Static representation of the [[county]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTY: EdmTypeField<BpContactToAddress, "Edm.String", true, true>;
    /**
     * Static representation of the [[deliveryServiceNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DELIVERY_SERVICE_NUMBER: EdmTypeField<BpContactToAddress, "Edm.String", true, true>;
    /**
     * Static representation of the [[deliveryServiceTypeCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DELIVERY_SERVICE_TYPE_CODE: EdmTypeField<BpContactToAddress, "Edm.String", true, true>;
    /**
     * Static representation of the [[district]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DISTRICT: EdmTypeField<BpContactToAddress, "Edm.String", true, true>;
    /**
     * Static representation of the [[formOfAddress]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_OF_ADDRESS: EdmTypeField<BpContactToAddress, "Edm.String", true, true>;
    /**
     * Static representation of the [[fullName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FULL_NAME: EdmTypeField<BpContactToAddress, "Edm.String", true, true>;
    /**
     * Static representation of the [[homeCityName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HOME_CITY_NAME: EdmTypeField<BpContactToAddress, "Edm.String", true, true>;
    /**
     * Static representation of the [[houseNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HOUSE_NUMBER: EdmTypeField<BpContactToAddress, "Edm.String", true, true>;
    /**
     * Static representation of the [[houseNumberSupplementText]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HOUSE_NUMBER_SUPPLEMENT_TEXT: EdmTypeField<BpContactToAddress, "Edm.String", true, true>;
    /**
     * Static representation of the [[language]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LANGUAGE: EdmTypeField<BpContactToAddress, "Edm.String", true, true>;
    /**
     * Static representation of the [[poBox]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PO_BOX: EdmTypeField<BpContactToAddress, "Edm.String", true, true>;
    /**
     * Static representation of the [[poBoxDeviatingCityName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PO_BOX_DEVIATING_CITY_NAME: EdmTypeField<BpContactToAddress, "Edm.String", true, true>;
    /**
     * Static representation of the [[poBoxDeviatingCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PO_BOX_DEVIATING_COUNTRY: EdmTypeField<BpContactToAddress, "Edm.String", true, true>;
    /**
     * Static representation of the [[poBoxDeviatingRegion]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PO_BOX_DEVIATING_REGION: EdmTypeField<BpContactToAddress, "Edm.String", true, true>;
    /**
     * Static representation of the [[poBoxIsWithoutNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PO_BOX_IS_WITHOUT_NUMBER: EdmTypeField<BpContactToAddress, "Edm.Boolean", true, true>;
    /**
     * Static representation of the [[poBoxLobbyName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PO_BOX_LOBBY_NAME: EdmTypeField<BpContactToAddress, "Edm.String", true, true>;
    /**
     * Static representation of the [[poBoxPostalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PO_BOX_POSTAL_CODE: EdmTypeField<BpContactToAddress, "Edm.String", true, true>;
    /**
     * Static representation of the [[person]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERSON: EdmTypeField<BpContactToAddress, "Edm.String", true, true>;
    /**
     * Static representation of the [[postalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const POSTAL_CODE: EdmTypeField<BpContactToAddress, "Edm.String", true, true>;
    /**
     * Static representation of the [[prfrdCommMediumType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRFRD_COMM_MEDIUM_TYPE: EdmTypeField<BpContactToAddress, "Edm.String", true, true>;
    /**
     * Static representation of the [[region]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REGION: EdmTypeField<BpContactToAddress, "Edm.String", true, true>;
    /**
     * Static representation of the [[streetName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STREET_NAME: EdmTypeField<BpContactToAddress, "Edm.String", true, true>;
    /**
     * Static representation of the [[streetPrefixName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STREET_PREFIX_NAME: EdmTypeField<BpContactToAddress, "Edm.String", true, true>;
    /**
     * Static representation of the [[streetSuffixName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STREET_SUFFIX_NAME: EdmTypeField<BpContactToAddress, "Edm.String", true, true>;
    /**
     * Static representation of the [[taxJurisdiction]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TAX_JURISDICTION: EdmTypeField<BpContactToAddress, "Edm.String", true, true>;
    /**
     * Static representation of the [[transportZone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TRANSPORT_ZONE: EdmTypeField<BpContactToAddress, "Edm.String", true, true>;
    /**
     * Static representation of the [[addressRepresentationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_REPRESENTATION_CODE: EdmTypeField<BpContactToAddress, "Edm.String", true, true>;
    /**
     * Static representation of the [[contactPersonBuilding]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONTACT_PERSON_BUILDING: EdmTypeField<BpContactToAddress, "Edm.String", true, true>;
    /**
     * Static representation of the [[contactPersonPrfrdCommMedium]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONTACT_PERSON_PRFRD_COMM_MEDIUM: EdmTypeField<BpContactToAddress, "Edm.String", true, true>;
    /**
     * Static representation of the [[contactRelationshipDepartment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONTACT_RELATIONSHIP_DEPARTMENT: EdmTypeField<BpContactToAddress, "Edm.String", true, true>;
    /**
     * Static representation of the [[contactRelationshipFunction]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONTACT_RELATIONSHIP_FUNCTION: EdmTypeField<BpContactToAddress, "Edm.String", true, true>;
    /**
     * Static representation of the [[correspondenceShortName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CORRESPONDENCE_SHORT_NAME: EdmTypeField<BpContactToAddress, "Edm.String", true, true>;
    /**
     * Static representation of the [[floor]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FLOOR: EdmTypeField<BpContactToAddress, "Edm.String", true, true>;
    /**
     * Static representation of the [[inhouseMail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INHOUSE_MAIL: EdmTypeField<BpContactToAddress, "Edm.String", true, true>;
    /**
     * Static representation of the [[isDefaultAddress]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_DEFAULT_ADDRESS: EdmTypeField<BpContactToAddress, "Edm.Boolean", true, true>;
    /**
     * Static representation of the [[roomNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ROOM_NUMBER: EdmTypeField<BpContactToAddress, "Edm.String", true, true>;
    /**
     * Static representation of the one-to-many navigation property [[toEmailAddress]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_EMAIL_ADDRESS: Link<BpContactToAddress, AddressEmailAddress>;
    /**
     * Static representation of the one-to-many navigation property [[toFaxNumber]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_FAX_NUMBER: Link<BpContactToAddress, AddressFaxNumber>;
    /**
     * Static representation of the one-to-many navigation property [[toMobilePhoneNumber]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_MOBILE_PHONE_NUMBER: Link<BpContactToAddress, AddressPhoneNumber>;
    /**
     * Static representation of the one-to-many navigation property [[toPhoneNumber]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_PHONE_NUMBER: Link<BpContactToAddress, AddressPhoneNumber>;
    /**
     * Static representation of the one-to-many navigation property [[toUrlAddress]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_URL_ADDRESS: Link<BpContactToAddress, AddressHomePageUrl>;
    /**
     * All fields of the BpContactToAddress entity.
     */
    const _allFields: Array<EdmTypeField<BpContactToAddress, 'Edm.String', false, true> | OrderableEdmTypeField<BpContactToAddress, 'Edm.DateTime', false, true> | EdmTypeField<BpContactToAddress, 'Edm.String', true, true> | EdmTypeField<BpContactToAddress, 'Edm.Boolean', true, true> | Link<BpContactToAddress, AddressEmailAddress> | Link<BpContactToAddress, AddressFaxNumber> | Link<BpContactToAddress, AddressPhoneNumber> | Link<BpContactToAddress, AddressHomePageUrl>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<BpContactToAddress>;
    /**
     * All key fields of the BpContactToAddress entity.
     */
    const _keyFields: Array<Field<BpContactToAddress, boolean, boolean>>;
    /**
     * Mapping of all key field names to the respective static field property BpContactToAddress.
     */
    const _keys: {
        [keys: string]: Field<BpContactToAddress, boolean, boolean>;
    };
}
//# sourceMappingURL=BpContactToAddress.d.ts.map