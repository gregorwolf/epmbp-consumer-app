import { AddressPhoneNumberRequestBuilder } from './AddressPhoneNumberRequestBuilder';
import { AllFields, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "A_AddressPhoneNumber" of service "API_BUSINESS_PARTNER".
 */
export declare class AddressPhoneNumber extends EntityV2 implements AddressPhoneNumberType {
    /**
     * Technical entity name for AddressPhoneNumber.
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
     * Country/Region for Telephone/Fax Number.
     * Maximum length: 3.
     * @nullable
     */
    destinationLocationCountry?: string;
    /**
     * Standard Sender Address in this Communication Type.
     * @nullable
     */
    isDefaultPhoneNumber?: boolean;
    /**
     * Telephone No.: Dialing Code and Number.
     * Maximum length: 30.
     * @nullable
     */
    phoneNumber?: string;
    /**
     * Telephone no.: Extension.
     * Maximum length: 10.
     * @nullable
     */
    phoneNumberExtension?: string;
    /**
     * Complete Number: Dialing Code+Number+Extension.
     * Maximum length: 30.
     * @nullable
     */
    internationalPhoneNumber?: string;
    /**
     * Indicator: Telephone is a Mobile Telephone.
     * Maximum length: 1.
     * @nullable
     */
    phoneNumberType?: string;
    /**
     * Communication link notes.
     * Maximum length: 50.
     * @nullable
     */
    addressCommunicationRemarkText?: string;
    /**
     * Returns an entity builder to construct instances of `AddressPhoneNumber`.
     * @returns A builder that constructs instances of entity type `AddressPhoneNumber`.
     */
    static builder(): EntityBuilderType<AddressPhoneNumber, AddressPhoneNumberType>;
    /**
     * Returns a request builder to construct requests for operations on the `AddressPhoneNumber` entity type.
     * @returns A `AddressPhoneNumber` request builder.
     */
    static requestBuilder(): AddressPhoneNumberRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `AddressPhoneNumber`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `AddressPhoneNumber`.
     */
    static customField(fieldName: string): CustomFieldV2<AddressPhoneNumber>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface AddressPhoneNumberType {
    addressId: string;
    person: string;
    ordinalNumber: string;
    destinationLocationCountry?: string | null;
    isDefaultPhoneNumber?: boolean | null;
    phoneNumber?: string | null;
    phoneNumberExtension?: string | null;
    internationalPhoneNumber?: string | null;
    phoneNumberType?: string | null;
    addressCommunicationRemarkText?: string | null;
}
export declare namespace AddressPhoneNumber {
    /**
     * Static representation of the [[addressId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_ID: EdmTypeField<AddressPhoneNumber, "Edm.String", false, true>;
    /**
     * Static representation of the [[person]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERSON: EdmTypeField<AddressPhoneNumber, "Edm.String", false, true>;
    /**
     * Static representation of the [[ordinalNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ORDINAL_NUMBER: EdmTypeField<AddressPhoneNumber, "Edm.String", false, true>;
    /**
     * Static representation of the [[destinationLocationCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESTINATION_LOCATION_COUNTRY: EdmTypeField<AddressPhoneNumber, "Edm.String", true, true>;
    /**
     * Static representation of the [[isDefaultPhoneNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_DEFAULT_PHONE_NUMBER: EdmTypeField<AddressPhoneNumber, "Edm.Boolean", true, true>;
    /**
     * Static representation of the [[phoneNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PHONE_NUMBER: EdmTypeField<AddressPhoneNumber, "Edm.String", true, true>;
    /**
     * Static representation of the [[phoneNumberExtension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PHONE_NUMBER_EXTENSION: EdmTypeField<AddressPhoneNumber, "Edm.String", true, true>;
    /**
     * Static representation of the [[internationalPhoneNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INTERNATIONAL_PHONE_NUMBER: EdmTypeField<AddressPhoneNumber, "Edm.String", true, true>;
    /**
     * Static representation of the [[phoneNumberType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PHONE_NUMBER_TYPE: EdmTypeField<AddressPhoneNumber, "Edm.String", true, true>;
    /**
     * Static representation of the [[addressCommunicationRemarkText]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_COMMUNICATION_REMARK_TEXT: EdmTypeField<AddressPhoneNumber, "Edm.String", true, true>;
    /**
     * All fields of the AddressPhoneNumber entity.
     */
    const _allFields: Array<EdmTypeField<AddressPhoneNumber, 'Edm.String', false, true> | EdmTypeField<AddressPhoneNumber, 'Edm.String', true, true> | EdmTypeField<AddressPhoneNumber, 'Edm.Boolean', true, true>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<AddressPhoneNumber>;
    /**
     * All key fields of the AddressPhoneNumber entity.
     */
    const _keyFields: Array<Field<AddressPhoneNumber, boolean, boolean>>;
    /**
     * Mapping of all key field names to the respective static field property AddressPhoneNumber.
     */
    const _keys: {
        [keys: string]: Field<AddressPhoneNumber, boolean, boolean>;
    };
}
//# sourceMappingURL=AddressPhoneNumber.d.ts.map