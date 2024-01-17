import { CustomerTextRequestBuilder } from './CustomerTextRequestBuilder';
import { AllFields, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "A_CustomerText" of service "API_BUSINESS_PARTNER".
 */
export declare class CustomerText extends EntityV2 implements CustomerTextType {
    /**
     * Technical entity name for CustomerText.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Customer Number.
     * Maximum length: 10.
     */
    customer: string;
    /**
     * Language key.
     * Maximum length: 2.
     */
    language: string;
    /**
     * Text ID.
     * Maximum length: 4.
     */
    longTextId: string;
    /**
     * String.
     * @nullable
     */
    longText?: string;
    /**
     * Returns an entity builder to construct instances of `CustomerText`.
     * @returns A builder that constructs instances of entity type `CustomerText`.
     */
    static builder(): EntityBuilderType<CustomerText, CustomerTextType>;
    /**
     * Returns a request builder to construct requests for operations on the `CustomerText` entity type.
     * @returns A `CustomerText` request builder.
     */
    static requestBuilder(): CustomerTextRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CustomerText`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CustomerText`.
     */
    static customField(fieldName: string): CustomFieldV2<CustomerText>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface CustomerTextType {
    customer: string;
    language: string;
    longTextId: string;
    longText?: string | null;
}
export declare namespace CustomerText {
    /**
     * Static representation of the [[customer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER: EdmTypeField<CustomerText, "Edm.String", false, true>;
    /**
     * Static representation of the [[language]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LANGUAGE: EdmTypeField<CustomerText, "Edm.String", false, true>;
    /**
     * Static representation of the [[longTextId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LONG_TEXT_ID: EdmTypeField<CustomerText, "Edm.String", false, true>;
    /**
     * Static representation of the [[longText]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LONG_TEXT: EdmTypeField<CustomerText, "Edm.String", true, true>;
    /**
     * All fields of the CustomerText entity.
     */
    const _allFields: Array<EdmTypeField<CustomerText, 'Edm.String', false, true> | EdmTypeField<CustomerText, 'Edm.String', true, true>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<CustomerText>;
    /**
     * All key fields of the CustomerText entity.
     */
    const _keyFields: Array<Field<CustomerText, boolean, boolean>>;
    /**
     * Mapping of all key field names to the respective static field property CustomerText.
     */
    const _keys: {
        [keys: string]: Field<CustomerText, boolean, boolean>;
    };
}
//# sourceMappingURL=CustomerText.d.ts.map