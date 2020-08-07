import { AddressHomePageUrlRequestBuilder } from './AddressHomePageUrlRequestBuilder';
import { Moment } from 'moment';
import { AllFields, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Field, NumberField, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "A_AddressHomePageURL" of service "API_BUSINESS_PARTNER".
 */
export declare class AddressHomePageUrl extends Entity implements AddressHomePageUrlType {
    /**
     * Technical entity name for AddressHomePageUrl.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for AddressHomePageUrl.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Address Number.
     * Internal key for identifying a Business Address Services address.
     * For more information about the meaning and use of the address number and the Business Address Services concepts, see the function group SZA0 documentation.
     * Maximum length: 10.
     */
    addressId: string;
    /**
     * Person number.
     * Internal key for identifying a person in Business Address Services.
     * For more information about the meaning and use of the person number and Business Address Services concepts, see the function group SZA0 documentation.
     * Maximum length: 10.
     */
    person: string;
    /**
     * Sequence Number.
     * Maximum length: 3.
     */
    ordinalNumber: string;
    /**
     * Valid-from date - in current Release only 00010101 possible.
     */
    validityStartDate: Moment;
    /**
     * Flag: this address is the default address.
     */
    isDefaultUrlAddress: boolean;
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
    static builder(): EntityBuilderType<AddressHomePageUrl, AddressHomePageUrlTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `AddressHomePageUrl` entity type.
     * @returns A `AddressHomePageUrl` request builder.
     */
    static requestBuilder(): AddressHomePageUrlRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `AddressHomePageUrl`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `AddressHomePageUrl`.
     */
    static customField(fieldName: string): CustomField<AddressHomePageUrl>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
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
export declare namespace AddressHomePageUrl {
    /**
     * Static representation of the [[addressId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_ID: StringField<AddressHomePageUrl>;
    /**
     * Static representation of the [[person]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERSON: StringField<AddressHomePageUrl>;
    /**
     * Static representation of the [[ordinalNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ORDINAL_NUMBER: StringField<AddressHomePageUrl>;
    /**
     * Static representation of the [[validityStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VALIDITY_START_DATE: DateField<AddressHomePageUrl>;
    /**
     * Static representation of the [[isDefaultUrlAddress]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_DEFAULT_URL_ADDRESS: BooleanField<AddressHomePageUrl>;
    /**
     * Static representation of the [[searchUrlAddress]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SEARCH_URL_ADDRESS: StringField<AddressHomePageUrl>;
    /**
     * Static representation of the [[addressCommunicationRemarkText]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_COMMUNICATION_REMARK_TEXT: StringField<AddressHomePageUrl>;
    /**
     * Static representation of the [[urlFieldLength]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const URL_FIELD_LENGTH: NumberField<AddressHomePageUrl>;
    /**
     * Static representation of the [[websiteUrl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WEBSITE_URL: StringField<AddressHomePageUrl>;
    /**
     * All fields of the AddressHomePageUrl entity.
     */
    const _allFields: Array<StringField<AddressHomePageUrl> | DateField<AddressHomePageUrl> | BooleanField<AddressHomePageUrl> | NumberField<AddressHomePageUrl>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<AddressHomePageUrl>;
    /**
     * All key fields of the AddressHomePageUrl entity.
     */
    const _keyFields: Array<Field<AddressHomePageUrl>>;
    /**
     * Mapping of all key field names to the respective static field property AddressHomePageUrl.
     */
    const _keys: {
        [keys: string]: Field<AddressHomePageUrl>;
    };
}
//# sourceMappingURL=AddressHomePageUrl.d.ts.map