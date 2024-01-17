import { CustomerSalesAreaTextRequestBuilder } from './CustomerSalesAreaTextRequestBuilder';
import { AllFields, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "A_CustomerSalesAreaText" of service "API_BUSINESS_PARTNER".
 */
export declare class CustomerSalesAreaText extends EntityV2 implements CustomerSalesAreaTextType {
    /**
     * Technical entity name for CustomerSalesAreaText.
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
     * Sales Organization.
     * Maximum length: 4.
     */
    salesOrganization: string;
    /**
     * Distribution Channel.
     * Maximum length: 2.
     */
    distributionChannel: string;
    /**
     * Division.
     * Maximum length: 2.
     */
    division: string;
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
     * Returns an entity builder to construct instances of `CustomerSalesAreaText`.
     * @returns A builder that constructs instances of entity type `CustomerSalesAreaText`.
     */
    static builder(): EntityBuilderType<CustomerSalesAreaText, CustomerSalesAreaTextType>;
    /**
     * Returns a request builder to construct requests for operations on the `CustomerSalesAreaText` entity type.
     * @returns A `CustomerSalesAreaText` request builder.
     */
    static requestBuilder(): CustomerSalesAreaTextRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CustomerSalesAreaText`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CustomerSalesAreaText`.
     */
    static customField(fieldName: string): CustomFieldV2<CustomerSalesAreaText>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface CustomerSalesAreaTextType {
    customer: string;
    salesOrganization: string;
    distributionChannel: string;
    division: string;
    language: string;
    longTextId: string;
    longText?: string | null;
}
export declare namespace CustomerSalesAreaText {
    /**
     * Static representation of the [[customer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER: EdmTypeField<CustomerSalesAreaText, "Edm.String", false, true>;
    /**
     * Static representation of the [[salesOrganization]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_ORGANIZATION: EdmTypeField<CustomerSalesAreaText, "Edm.String", false, true>;
    /**
     * Static representation of the [[distributionChannel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DISTRIBUTION_CHANNEL: EdmTypeField<CustomerSalesAreaText, "Edm.String", false, true>;
    /**
     * Static representation of the [[division]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DIVISION: EdmTypeField<CustomerSalesAreaText, "Edm.String", false, true>;
    /**
     * Static representation of the [[language]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LANGUAGE: EdmTypeField<CustomerSalesAreaText, "Edm.String", false, true>;
    /**
     * Static representation of the [[longTextId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LONG_TEXT_ID: EdmTypeField<CustomerSalesAreaText, "Edm.String", false, true>;
    /**
     * Static representation of the [[longText]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LONG_TEXT: EdmTypeField<CustomerSalesAreaText, "Edm.String", true, true>;
    /**
     * All fields of the CustomerSalesAreaText entity.
     */
    const _allFields: Array<EdmTypeField<CustomerSalesAreaText, 'Edm.String', false, true> | EdmTypeField<CustomerSalesAreaText, 'Edm.String', true, true>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<CustomerSalesAreaText>;
    /**
     * All key fields of the CustomerSalesAreaText entity.
     */
    const _keyFields: Array<Field<CustomerSalesAreaText, boolean, boolean>>;
    /**
     * Mapping of all key field names to the respective static field property CustomerSalesAreaText.
     */
    const _keys: {
        [keys: string]: Field<CustomerSalesAreaText, boolean, boolean>;
    };
}
//# sourceMappingURL=CustomerSalesAreaText.d.ts.map