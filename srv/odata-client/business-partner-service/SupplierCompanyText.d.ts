import { SupplierCompanyTextRequestBuilder } from './SupplierCompanyTextRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "A_SupplierCompanyText" of service "API_BUSINESS_PARTNER".
 */
export declare class SupplierCompanyText extends Entity implements SupplierCompanyTextType {
    /**
     * Technical entity name for SupplierCompanyText.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for SupplierCompanyText.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Supplier.
     * Maximum length: 10.
     */
    supplier: string;
    /**
     * Company Code.
     * Maximum length: 4.
     */
    companyCode: string;
    /**
     * Language key.
     * The language key is an abbreviation for the language of the object being processed (for example, standard text, form, style).
     * Maximum length: 2.
     */
    language: string;
    /**
     * Text ID.
     * The text ID defines the various types of texts related to a text object. For example, the object "TEXT" (standard texts) can have the following text IDs:
     * ST for user-specific standard texts (individual texts)SYST for cross-application system textsvarious IDs for specific application departments. You must have the appropriate access authorization in order to access these texts.
     * Maximum length: 4.
     */
    longTextId: string;
    /**
     * String.
     * @nullable
     */
    longText?: string;
    /**
     * Returns an entity builder to construct instances `SupplierCompanyText`.
     * @returns A builder that constructs instances of entity type `SupplierCompanyText`.
     */
    static builder(): EntityBuilderType<SupplierCompanyText, SupplierCompanyTextTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `SupplierCompanyText` entity type.
     * @returns A `SupplierCompanyText` request builder.
     */
    static requestBuilder(): SupplierCompanyTextRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SupplierCompanyText`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SupplierCompanyText`.
     */
    static customField(fieldName: string): CustomField<SupplierCompanyText>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface SupplierCompanyTextType {
    supplier: string;
    companyCode: string;
    language: string;
    longTextId: string;
    longText?: string;
}
export interface SupplierCompanyTextTypeForceMandatory {
    supplier: string;
    companyCode: string;
    language: string;
    longTextId: string;
    longText: string;
}
export declare namespace SupplierCompanyText {
    /**
     * Static representation of the [[supplier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUPPLIER: StringField<SupplierCompanyText>;
    /**
     * Static representation of the [[companyCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMPANY_CODE: StringField<SupplierCompanyText>;
    /**
     * Static representation of the [[language]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LANGUAGE: StringField<SupplierCompanyText>;
    /**
     * Static representation of the [[longTextId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LONG_TEXT_ID: StringField<SupplierCompanyText>;
    /**
     * Static representation of the [[longText]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LONG_TEXT: StringField<SupplierCompanyText>;
    /**
     * All fields of the SupplierCompanyText entity.
     */
    const _allFields: Array<StringField<SupplierCompanyText>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<SupplierCompanyText>;
    /**
     * All key fields of the SupplierCompanyText entity.
     */
    const _keyFields: Array<Field<SupplierCompanyText>>;
    /**
     * Mapping of all key field names to the respective static field property SupplierCompanyText.
     */
    const _keys: {
        [keys: string]: Field<SupplierCompanyText>;
    };
}
//# sourceMappingURL=SupplierCompanyText.d.ts.map