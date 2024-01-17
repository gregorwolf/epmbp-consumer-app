import { SupplierTextRequestBuilder } from './SupplierTextRequestBuilder';
import { AllFields, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "A_SupplierText" of service "API_BUSINESS_PARTNER".
 */
export declare class SupplierText extends EntityV2 implements SupplierTextType {
    /**
     * Technical entity name for SupplierText.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Account Number of Supplier.
     * Maximum length: 10.
     */
    supplier: string;
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
     * Returns an entity builder to construct instances of `SupplierText`.
     * @returns A builder that constructs instances of entity type `SupplierText`.
     */
    static builder(): EntityBuilderType<SupplierText, SupplierTextType>;
    /**
     * Returns a request builder to construct requests for operations on the `SupplierText` entity type.
     * @returns A `SupplierText` request builder.
     */
    static requestBuilder(): SupplierTextRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SupplierText`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SupplierText`.
     */
    static customField(fieldName: string): CustomFieldV2<SupplierText>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface SupplierTextType {
    supplier: string;
    language: string;
    longTextId: string;
    longText?: string | null;
}
export declare namespace SupplierText {
    /**
     * Static representation of the [[supplier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUPPLIER: EdmTypeField<SupplierText, "Edm.String", false, true>;
    /**
     * Static representation of the [[language]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LANGUAGE: EdmTypeField<SupplierText, "Edm.String", false, true>;
    /**
     * Static representation of the [[longTextId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LONG_TEXT_ID: EdmTypeField<SupplierText, "Edm.String", false, true>;
    /**
     * Static representation of the [[longText]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LONG_TEXT: EdmTypeField<SupplierText, "Edm.String", true, true>;
    /**
     * All fields of the SupplierText entity.
     */
    const _allFields: Array<EdmTypeField<SupplierText, 'Edm.String', false, true> | EdmTypeField<SupplierText, 'Edm.String', true, true>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<SupplierText>;
    /**
     * All key fields of the SupplierText entity.
     */
    const _keyFields: Array<Field<SupplierText, boolean, boolean>>;
    /**
     * Mapping of all key field names to the respective static field property SupplierText.
     */
    const _keys: {
        [keys: string]: Field<SupplierText, boolean, boolean>;
    };
}
//# sourceMappingURL=SupplierText.d.ts.map