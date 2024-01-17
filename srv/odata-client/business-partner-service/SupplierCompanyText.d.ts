import { SupplierCompanyTextRequestBuilder } from './SupplierCompanyTextRequestBuilder';
import { AllFields, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "A_SupplierCompanyText" of service "API_BUSINESS_PARTNER".
 */
export declare class SupplierCompanyText extends EntityV2 implements SupplierCompanyTextType {
    /**
     * Technical entity name for SupplierCompanyText.
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
     * Company Code.
     * Maximum length: 4.
     */
    companyCode: string;
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
     * Returns an entity builder to construct instances of `SupplierCompanyText`.
     * @returns A builder that constructs instances of entity type `SupplierCompanyText`.
     */
    static builder(): EntityBuilderType<SupplierCompanyText, SupplierCompanyTextType>;
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
    static customField(fieldName: string): CustomFieldV2<SupplierCompanyText>;
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
    longText?: string | null;
}
export declare namespace SupplierCompanyText {
    /**
     * Static representation of the [[supplier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUPPLIER: EdmTypeField<SupplierCompanyText, "Edm.String", false, true>;
    /**
     * Static representation of the [[companyCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMPANY_CODE: EdmTypeField<SupplierCompanyText, "Edm.String", false, true>;
    /**
     * Static representation of the [[language]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LANGUAGE: EdmTypeField<SupplierCompanyText, "Edm.String", false, true>;
    /**
     * Static representation of the [[longTextId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LONG_TEXT_ID: EdmTypeField<SupplierCompanyText, "Edm.String", false, true>;
    /**
     * Static representation of the [[longText]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LONG_TEXT: EdmTypeField<SupplierCompanyText, "Edm.String", true, true>;
    /**
     * All fields of the SupplierCompanyText entity.
     */
    const _allFields: Array<EdmTypeField<SupplierCompanyText, 'Edm.String', false, true> | EdmTypeField<SupplierCompanyText, 'Edm.String', true, true>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<SupplierCompanyText>;
    /**
     * All key fields of the SupplierCompanyText entity.
     */
    const _keyFields: Array<Field<SupplierCompanyText, boolean, boolean>>;
    /**
     * Mapping of all key field names to the respective static field property SupplierCompanyText.
     */
    const _keys: {
        [keys: string]: Field<SupplierCompanyText, boolean, boolean>;
    };
}
//# sourceMappingURL=SupplierCompanyText.d.ts.map