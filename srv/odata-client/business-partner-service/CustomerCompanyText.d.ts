import { CustomerCompanyTextRequestBuilder } from './CustomerCompanyTextRequestBuilder';
import { AllFields, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "A_CustomerCompanyText" of service "API_BUSINESS_PARTNER".
 */
export declare class CustomerCompanyText extends EntityV2 implements CustomerCompanyTextType {
    /**
     * Technical entity name for CustomerCompanyText.
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
     * Returns an entity builder to construct instances of `CustomerCompanyText`.
     * @returns A builder that constructs instances of entity type `CustomerCompanyText`.
     */
    static builder(): EntityBuilderType<CustomerCompanyText, CustomerCompanyTextType>;
    /**
     * Returns a request builder to construct requests for operations on the `CustomerCompanyText` entity type.
     * @returns A `CustomerCompanyText` request builder.
     */
    static requestBuilder(): CustomerCompanyTextRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CustomerCompanyText`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CustomerCompanyText`.
     */
    static customField(fieldName: string): CustomFieldV2<CustomerCompanyText>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface CustomerCompanyTextType {
    customer: string;
    companyCode: string;
    language: string;
    longTextId: string;
    longText?: string | null;
}
export declare namespace CustomerCompanyText {
    /**
     * Static representation of the [[customer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER: EdmTypeField<CustomerCompanyText, "Edm.String", false, true>;
    /**
     * Static representation of the [[companyCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMPANY_CODE: EdmTypeField<CustomerCompanyText, "Edm.String", false, true>;
    /**
     * Static representation of the [[language]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LANGUAGE: EdmTypeField<CustomerCompanyText, "Edm.String", false, true>;
    /**
     * Static representation of the [[longTextId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LONG_TEXT_ID: EdmTypeField<CustomerCompanyText, "Edm.String", false, true>;
    /**
     * Static representation of the [[longText]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LONG_TEXT: EdmTypeField<CustomerCompanyText, "Edm.String", true, true>;
    /**
     * All fields of the CustomerCompanyText entity.
     */
    const _allFields: Array<EdmTypeField<CustomerCompanyText, 'Edm.String', false, true> | EdmTypeField<CustomerCompanyText, 'Edm.String', true, true>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<CustomerCompanyText>;
    /**
     * All key fields of the CustomerCompanyText entity.
     */
    const _keyFields: Array<Field<CustomerCompanyText, boolean, boolean>>;
    /**
     * Mapping of all key field names to the respective static field property CustomerCompanyText.
     */
    const _keys: {
        [keys: string]: Field<CustomerCompanyText, boolean, boolean>;
    };
}
//# sourceMappingURL=CustomerCompanyText.d.ts.map