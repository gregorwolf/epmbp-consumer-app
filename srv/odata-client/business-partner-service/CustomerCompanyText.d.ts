import { CustomerCompanyTextRequestBuilder } from './CustomerCompanyTextRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "A_CustomerCompanyText" of service "API_BUSINESS_PARTNER".
 */
export declare class CustomerCompanyText extends Entity implements CustomerCompanyTextType {
    /**
     * Technical entity name for CustomerCompanyText.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for CustomerCompanyText.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Customer Number.
     * Gives an alphanumeric key, which clearly identifies the customer or vendor in the SAP system.
     * Maximum length: 10.
     */
    customer: string;
    /**
     * Company Code.
     * The company code is an organizational unit within financial accounting.
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
     * Returns an entity builder to construct instances `CustomerCompanyText`.
     * @returns A builder that constructs instances of entity type `CustomerCompanyText`.
     */
    static builder(): EntityBuilderType<CustomerCompanyText, CustomerCompanyTextTypeForceMandatory>;
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
    static customField(fieldName: string): CustomField<CustomerCompanyText>;
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
    longText?: string;
}
export interface CustomerCompanyTextTypeForceMandatory {
    customer: string;
    companyCode: string;
    language: string;
    longTextId: string;
    longText: string;
}
export declare namespace CustomerCompanyText {
    /**
     * Static representation of the [[customer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER: StringField<CustomerCompanyText>;
    /**
     * Static representation of the [[companyCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMPANY_CODE: StringField<CustomerCompanyText>;
    /**
     * Static representation of the [[language]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LANGUAGE: StringField<CustomerCompanyText>;
    /**
     * Static representation of the [[longTextId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LONG_TEXT_ID: StringField<CustomerCompanyText>;
    /**
     * Static representation of the [[longText]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LONG_TEXT: StringField<CustomerCompanyText>;
    /**
     * All fields of the CustomerCompanyText entity.
     */
    const _allFields: Array<StringField<CustomerCompanyText>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<CustomerCompanyText>;
    /**
     * All key fields of the CustomerCompanyText entity.
     */
    const _keyFields: Array<Field<CustomerCompanyText>>;
    /**
     * Mapping of all key field names to the respective static field property CustomerCompanyText.
     */
    const _keys: {
        [keys: string]: Field<CustomerCompanyText>;
    };
}
//# sourceMappingURL=CustomerCompanyText.d.ts.map