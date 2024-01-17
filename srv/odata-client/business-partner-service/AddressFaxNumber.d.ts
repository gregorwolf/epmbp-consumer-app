import { AddressFaxNumberRequestBuilder } from './AddressFaxNumberRequestBuilder';
import { AllFields, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "A_AddressFaxNumber" of service "API_BUSINESS_PARTNER".
 */
export declare class AddressFaxNumber extends EntityV2 implements AddressFaxNumberType {
    /**
     * Technical entity name for AddressFaxNumber.
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
     * Standard Sender Address in this Communication Type.
     * @nullable
     */
    isDefaultFaxNumber?: boolean;
    /**
     * Country/Region for Telephone/Fax Number.
     * Maximum length: 3.
     * @nullable
     */
    faxCountry?: string;
    /**
     * Fax Number: Dialing Code and Number.
     * Maximum length: 30.
     * @nullable
     */
    faxNumber?: string;
    /**
     * Fax no.: Extension.
     * Maximum length: 10.
     * @nullable
     */
    faxNumberExtension?: string;
    /**
     * Complete Number: Dialing Code+Number+Extension.
     * Maximum length: 30.
     * @nullable
     */
    internationalFaxNumber?: string;
    /**
     * Communication link notes.
     * Maximum length: 50.
     * @nullable
     */
    addressCommunicationRemarkText?: string;
    /**
     * Returns an entity builder to construct instances of `AddressFaxNumber`.
     * @returns A builder that constructs instances of entity type `AddressFaxNumber`.
     */
    static builder(): EntityBuilderType<AddressFaxNumber, AddressFaxNumberType>;
    /**
     * Returns a request builder to construct requests for operations on the `AddressFaxNumber` entity type.
     * @returns A `AddressFaxNumber` request builder.
     */
    static requestBuilder(): AddressFaxNumberRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `AddressFaxNumber`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `AddressFaxNumber`.
     */
    static customField(fieldName: string): CustomFieldV2<AddressFaxNumber>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface AddressFaxNumberType {
    addressId: string;
    person: string;
    ordinalNumber: string;
    isDefaultFaxNumber?: boolean | null;
    faxCountry?: string | null;
    faxNumber?: string | null;
    faxNumberExtension?: string | null;
    internationalFaxNumber?: string | null;
    addressCommunicationRemarkText?: string | null;
}
export declare namespace AddressFaxNumber {
    /**
     * Static representation of the [[addressId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_ID: EdmTypeField<AddressFaxNumber, "Edm.String", false, true>;
    /**
     * Static representation of the [[person]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERSON: EdmTypeField<AddressFaxNumber, "Edm.String", false, true>;
    /**
     * Static representation of the [[ordinalNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ORDINAL_NUMBER: EdmTypeField<AddressFaxNumber, "Edm.String", false, true>;
    /**
     * Static representation of the [[isDefaultFaxNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_DEFAULT_FAX_NUMBER: EdmTypeField<AddressFaxNumber, "Edm.Boolean", true, true>;
    /**
     * Static representation of the [[faxCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FAX_COUNTRY: EdmTypeField<AddressFaxNumber, "Edm.String", true, true>;
    /**
     * Static representation of the [[faxNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FAX_NUMBER: EdmTypeField<AddressFaxNumber, "Edm.String", true, true>;
    /**
     * Static representation of the [[faxNumberExtension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FAX_NUMBER_EXTENSION: EdmTypeField<AddressFaxNumber, "Edm.String", true, true>;
    /**
     * Static representation of the [[internationalFaxNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INTERNATIONAL_FAX_NUMBER: EdmTypeField<AddressFaxNumber, "Edm.String", true, true>;
    /**
     * Static representation of the [[addressCommunicationRemarkText]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_COMMUNICATION_REMARK_TEXT: EdmTypeField<AddressFaxNumber, "Edm.String", true, true>;
    /**
     * All fields of the AddressFaxNumber entity.
     */
    const _allFields: Array<EdmTypeField<AddressFaxNumber, 'Edm.String', false, true> | EdmTypeField<AddressFaxNumber, 'Edm.Boolean', true, true> | EdmTypeField<AddressFaxNumber, 'Edm.String', true, true>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<AddressFaxNumber>;
    /**
     * All key fields of the AddressFaxNumber entity.
     */
    const _keyFields: Array<Field<AddressFaxNumber, boolean, boolean>>;
    /**
     * Mapping of all key field names to the respective static field property AddressFaxNumber.
     */
    const _keys: {
        [keys: string]: Field<AddressFaxNumber, boolean, boolean>;
    };
}
//# sourceMappingURL=AddressFaxNumber.d.ts.map