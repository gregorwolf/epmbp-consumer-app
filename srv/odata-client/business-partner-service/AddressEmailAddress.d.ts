import { AddressEmailAddressRequestBuilder } from './AddressEmailAddressRequestBuilder';
import { AllFields, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "A_AddressEmailAddress" of service "API_BUSINESS_PARTNER".
 */
export declare class AddressEmailAddress extends EntityV2 implements AddressEmailAddressType {
    /**
     * Technical entity name for AddressEmailAddress.
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
     * Flag: this address is the default address.
     * @nullable
     */
    isDefaultEmailAddress?: boolean;
    /**
     * Email Address.
     * Maximum length: 241.
     * @nullable
     */
    emailAddress?: string;
    /**
     * E-Mail Address Search Field.
     * Maximum length: 20.
     * @nullable
     */
    searchEmailAddress?: string;
    /**
     * Communication link notes.
     * Maximum length: 50.
     * @nullable
     */
    addressCommunicationRemarkText?: string;
    /**
     * Returns an entity builder to construct instances of `AddressEmailAddress`.
     * @returns A builder that constructs instances of entity type `AddressEmailAddress`.
     */
    static builder(): EntityBuilderType<AddressEmailAddress, AddressEmailAddressType>;
    /**
     * Returns a request builder to construct requests for operations on the `AddressEmailAddress` entity type.
     * @returns A `AddressEmailAddress` request builder.
     */
    static requestBuilder(): AddressEmailAddressRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `AddressEmailAddress`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `AddressEmailAddress`.
     */
    static customField(fieldName: string): CustomFieldV2<AddressEmailAddress>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface AddressEmailAddressType {
    addressId: string;
    person: string;
    ordinalNumber: string;
    isDefaultEmailAddress?: boolean | null;
    emailAddress?: string | null;
    searchEmailAddress?: string | null;
    addressCommunicationRemarkText?: string | null;
}
export declare namespace AddressEmailAddress {
    /**
     * Static representation of the [[addressId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_ID: EdmTypeField<AddressEmailAddress, "Edm.String", false, true>;
    /**
     * Static representation of the [[person]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERSON: EdmTypeField<AddressEmailAddress, "Edm.String", false, true>;
    /**
     * Static representation of the [[ordinalNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ORDINAL_NUMBER: EdmTypeField<AddressEmailAddress, "Edm.String", false, true>;
    /**
     * Static representation of the [[isDefaultEmailAddress]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_DEFAULT_EMAIL_ADDRESS: EdmTypeField<AddressEmailAddress, "Edm.Boolean", true, true>;
    /**
     * Static representation of the [[emailAddress]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMAIL_ADDRESS: EdmTypeField<AddressEmailAddress, "Edm.String", true, true>;
    /**
     * Static representation of the [[searchEmailAddress]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SEARCH_EMAIL_ADDRESS: EdmTypeField<AddressEmailAddress, "Edm.String", true, true>;
    /**
     * Static representation of the [[addressCommunicationRemarkText]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_COMMUNICATION_REMARK_TEXT: EdmTypeField<AddressEmailAddress, "Edm.String", true, true>;
    /**
     * All fields of the AddressEmailAddress entity.
     */
    const _allFields: Array<EdmTypeField<AddressEmailAddress, 'Edm.String', false, true> | EdmTypeField<AddressEmailAddress, 'Edm.Boolean', true, true> | EdmTypeField<AddressEmailAddress, 'Edm.String', true, true>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<AddressEmailAddress>;
    /**
     * All key fields of the AddressEmailAddress entity.
     */
    const _keyFields: Array<Field<AddressEmailAddress, boolean, boolean>>;
    /**
     * Mapping of all key field names to the respective static field property AddressEmailAddress.
     */
    const _keys: {
        [keys: string]: Field<AddressEmailAddress, boolean, boolean>;
    };
}
//# sourceMappingURL=AddressEmailAddress.d.ts.map