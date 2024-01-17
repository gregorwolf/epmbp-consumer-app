import { SupplierPurchasingOrgTextRequestBuilder } from './SupplierPurchasingOrgTextRequestBuilder';
import { AllFields, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "A_SupplierPurchasingOrgText" of service "API_BUSINESS_PARTNER".
 */
export declare class SupplierPurchasingOrgText extends EntityV2 implements SupplierPurchasingOrgTextType {
    /**
     * Technical entity name for SupplierPurchasingOrgText.
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
     * Purchasing Organization.
     * Maximum length: 4.
     */
    purchasingOrganization: string;
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
     * Returns an entity builder to construct instances of `SupplierPurchasingOrgText`.
     * @returns A builder that constructs instances of entity type `SupplierPurchasingOrgText`.
     */
    static builder(): EntityBuilderType<SupplierPurchasingOrgText, SupplierPurchasingOrgTextType>;
    /**
     * Returns a request builder to construct requests for operations on the `SupplierPurchasingOrgText` entity type.
     * @returns A `SupplierPurchasingOrgText` request builder.
     */
    static requestBuilder(): SupplierPurchasingOrgTextRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SupplierPurchasingOrgText`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SupplierPurchasingOrgText`.
     */
    static customField(fieldName: string): CustomFieldV2<SupplierPurchasingOrgText>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface SupplierPurchasingOrgTextType {
    supplier: string;
    purchasingOrganization: string;
    language: string;
    longTextId: string;
    longText?: string | null;
}
export declare namespace SupplierPurchasingOrgText {
    /**
     * Static representation of the [[supplier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUPPLIER: EdmTypeField<SupplierPurchasingOrgText, "Edm.String", false, true>;
    /**
     * Static representation of the [[purchasingOrganization]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASING_ORGANIZATION: EdmTypeField<SupplierPurchasingOrgText, "Edm.String", false, true>;
    /**
     * Static representation of the [[language]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LANGUAGE: EdmTypeField<SupplierPurchasingOrgText, "Edm.String", false, true>;
    /**
     * Static representation of the [[longTextId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LONG_TEXT_ID: EdmTypeField<SupplierPurchasingOrgText, "Edm.String", false, true>;
    /**
     * Static representation of the [[longText]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LONG_TEXT: EdmTypeField<SupplierPurchasingOrgText, "Edm.String", true, true>;
    /**
     * All fields of the SupplierPurchasingOrgText entity.
     */
    const _allFields: Array<EdmTypeField<SupplierPurchasingOrgText, 'Edm.String', false, true> | EdmTypeField<SupplierPurchasingOrgText, 'Edm.String', true, true>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<SupplierPurchasingOrgText>;
    /**
     * All key fields of the SupplierPurchasingOrgText entity.
     */
    const _keyFields: Array<Field<SupplierPurchasingOrgText, boolean, boolean>>;
    /**
     * Mapping of all key field names to the respective static field property SupplierPurchasingOrgText.
     */
    const _keys: {
        [keys: string]: Field<SupplierPurchasingOrgText, boolean, boolean>;
    };
}
//# sourceMappingURL=SupplierPurchasingOrgText.d.ts.map