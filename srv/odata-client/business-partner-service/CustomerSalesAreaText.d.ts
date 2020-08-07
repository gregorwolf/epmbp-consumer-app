import { CustomerSalesAreaTextRequestBuilder } from './CustomerSalesAreaTextRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "A_CustomerSalesAreaText" of service "API_BUSINESS_PARTNER".
 */
export declare class CustomerSalesAreaText extends Entity implements CustomerSalesAreaTextType {
    /**
     * Technical entity name for CustomerSalesAreaText.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for CustomerSalesAreaText.
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
     * Sales Organization.
     * An organizational unit responsible for the sale of certain products or services. The responsibility of a sales organization may include legal liability for products and customer claims.
     * You can assign any number of distribution channels and divisions to a sales organization. A particular combination of sales organization, distribution channel, and division is known as a sales area.
     * Maximum length: 4.
     */
    salesOrganization: string;
    /**
     * Distribution Channel.
     * The way in which products or services reach the customer. Typical examples of distribution channels are wholesale, retail, or direct sales.
     * You can maintain information about customers and materials by sales organization and distribution channel. Within a sales organization you can deliver goods to a given customer through more than one distribution channel.You can assign a distribution channel to one or more sales organizations. If, for example, you have numerous sales organizations, each sales organization may use the "Wholesale" distribution channel.For each combination of sales organization and distribution channel, you can further assign one or more of the divisions that are defined for the sales organization. You can, for example, assign "Food" and "Non-food" divisions to the "Wholesale" distribution channel. A particular combination of sales organization, distribution channel, and division is known as a sales area.
     * Maximum length: 2.
     */
    distributionChannel: string;
    /**
     * Division.
     * A way of grouping materials, products, or services. The system uses divisions to determine the sales areas and the business areas for a material, product, or service.
     * A product or service is always assigned to just one division. From the point of view of sales and distribution, the use of divisions lets you organize your sales structure around groups of similar products or product lines. This allows the people in a division who process orders and service customers to specialize within a manageable area of expertise.If a sales organization sells food and non-food products through both retail and wholesaledistribution channels each distribution channel could then be further split into food and non-food divisions.
     * Maximum length: 2.
     */
    division: string;
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
     * Returns an entity builder to construct instances `CustomerSalesAreaText`.
     * @returns A builder that constructs instances of entity type `CustomerSalesAreaText`.
     */
    static builder(): EntityBuilderType<CustomerSalesAreaText, CustomerSalesAreaTextTypeForceMandatory>;
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
    static customField(fieldName: string): CustomField<CustomerSalesAreaText>;
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
    longText?: string;
}
export interface CustomerSalesAreaTextTypeForceMandatory {
    customer: string;
    salesOrganization: string;
    distributionChannel: string;
    division: string;
    language: string;
    longTextId: string;
    longText: string;
}
export declare namespace CustomerSalesAreaText {
    /**
     * Static representation of the [[customer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER: StringField<CustomerSalesAreaText>;
    /**
     * Static representation of the [[salesOrganization]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_ORGANIZATION: StringField<CustomerSalesAreaText>;
    /**
     * Static representation of the [[distributionChannel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DISTRIBUTION_CHANNEL: StringField<CustomerSalesAreaText>;
    /**
     * Static representation of the [[division]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DIVISION: StringField<CustomerSalesAreaText>;
    /**
     * Static representation of the [[language]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LANGUAGE: StringField<CustomerSalesAreaText>;
    /**
     * Static representation of the [[longTextId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LONG_TEXT_ID: StringField<CustomerSalesAreaText>;
    /**
     * Static representation of the [[longText]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LONG_TEXT: StringField<CustomerSalesAreaText>;
    /**
     * All fields of the CustomerSalesAreaText entity.
     */
    const _allFields: Array<StringField<CustomerSalesAreaText>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<CustomerSalesAreaText>;
    /**
     * All key fields of the CustomerSalesAreaText entity.
     */
    const _keyFields: Array<Field<CustomerSalesAreaText>>;
    /**
     * Mapping of all key field names to the respective static field property CustomerSalesAreaText.
     */
    const _keys: {
        [keys: string]: Field<CustomerSalesAreaText>;
    };
}
//# sourceMappingURL=CustomerSalesAreaText.d.ts.map