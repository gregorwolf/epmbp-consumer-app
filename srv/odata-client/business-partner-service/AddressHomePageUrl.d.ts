import { AddressHomePageUrlRequestBuilder } from './AddressHomePageUrlRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field, OrderableEdmTypeField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "A_AddressHomePageURL" of service "API_BUSINESS_PARTNER".
 */
export declare class AddressHomePageUrl extends EntityV2 implements AddressHomePageUrlType {
    /**
     * Technical entity name for AddressHomePageUrl.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Address Number.
     * Maximum length: 10.
     */
    addressId: string;
    /**
     * Person Number.
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
     * Returns an entity builder to construct instances of `AddressHomePageUrl`.
     * @returns A builder that constructs instances of entity type `AddressHomePageUrl`.
     */
    static builder(): EntityBuilderType<AddressHomePageUrl, AddressHomePageUrlType>;
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
    static customField(fieldName: string): CustomFieldV2<AddressHomePageUrl>;
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
    searchUrlAddress?: string | null;
    addressCommunicationRemarkText?: string | null;
    urlFieldLength?: number | null;
    websiteUrl?: string | null;
}
export declare namespace AddressHomePageUrl {
    /**
     * Static representation of the [[addressId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_ID: EdmTypeField<AddressHomePageUrl, "Edm.String", false, true>;
    /**
     * Static representation of the [[person]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERSON: EdmTypeField<AddressHomePageUrl, "Edm.String", false, true>;
    /**
     * Static representation of the [[ordinalNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ORDINAL_NUMBER: EdmTypeField<AddressHomePageUrl, "Edm.String", false, true>;
    /**
     * Static representation of the [[validityStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VALIDITY_START_DATE: OrderableEdmTypeField<AddressHomePageUrl, "Edm.DateTime", false, true>;
    /**
     * Static representation of the [[isDefaultUrlAddress]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_DEFAULT_URL_ADDRESS: EdmTypeField<AddressHomePageUrl, "Edm.Boolean", false, true>;
    /**
     * Static representation of the [[searchUrlAddress]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SEARCH_URL_ADDRESS: EdmTypeField<AddressHomePageUrl, "Edm.String", true, true>;
    /**
     * Static representation of the [[addressCommunicationRemarkText]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_COMMUNICATION_REMARK_TEXT: EdmTypeField<AddressHomePageUrl, "Edm.String", true, true>;
    /**
     * Static representation of the [[urlFieldLength]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const URL_FIELD_LENGTH: OrderableEdmTypeField<AddressHomePageUrl, "Edm.Int16", true, true>;
    /**
     * Static representation of the [[websiteUrl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WEBSITE_URL: EdmTypeField<AddressHomePageUrl, "Edm.String", true, true>;
    /**
     * All fields of the AddressHomePageUrl entity.
     */
    const _allFields: Array<EdmTypeField<AddressHomePageUrl, 'Edm.String', false, true> | OrderableEdmTypeField<AddressHomePageUrl, 'Edm.DateTime', false, true> | EdmTypeField<AddressHomePageUrl, 'Edm.Boolean', false, true> | EdmTypeField<AddressHomePageUrl, 'Edm.String', true, true> | OrderableEdmTypeField<AddressHomePageUrl, 'Edm.Int16', true, true>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<AddressHomePageUrl>;
    /**
     * All key fields of the AddressHomePageUrl entity.
     */
    const _keyFields: Array<Field<AddressHomePageUrl, boolean, boolean>>;
    /**
     * Mapping of all key field names to the respective static field property AddressHomePageUrl.
     */
    const _keys: {
        [keys: string]: Field<AddressHomePageUrl, boolean, boolean>;
    };
}
//# sourceMappingURL=AddressHomePageUrl.d.ts.map