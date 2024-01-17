import { CustomerSalesAreaTaxRequestBuilder } from './CustomerSalesAreaTaxRequestBuilder';
import { AllFields, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field, Link } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "A_CustomerSalesAreaTax" of service "API_BUSINESS_PARTNER".
 */
export declare class CustomerSalesAreaTax extends EntityV2 implements CustomerSalesAreaTaxType {
    /**
     * Technical entity name for CustomerSalesAreaTax.
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
     * Reference distrib.channel for cust.and material masters.
     * Maximum length: 2.
     */
    distributionChannel: string;
    /**
     * Division.
     * Maximum length: 2.
     */
    division: string;
    /**
     * Departure Country/Region (from which the goods are sent).
     * Maximum length: 3.
     */
    departureCountry: string;
    /**
     * Tax Condition Type (Sales Tax, Value-Added Tax,...).
     * Maximum length: 4.
     */
    customerTaxCategory: string;
    /**
     * Tax classification for customer.
     * Maximum length: 1.
     * @nullable
     */
    customerTaxClassification?: string;
    /**
     * One-to-many navigation property to the [[CustSlsAreaAddrDepdntTaxInfo]] entity.
     */
    toSlsAreaAddrDepdntTax: CustSlsAreaAddrDepdntTaxInfo[];
    /**
     * Returns an entity builder to construct instances of `CustomerSalesAreaTax`.
     * @returns A builder that constructs instances of entity type `CustomerSalesAreaTax`.
     */
    static builder(): EntityBuilderType<CustomerSalesAreaTax, CustomerSalesAreaTaxType>;
    /**
     * Returns a request builder to construct requests for operations on the `CustomerSalesAreaTax` entity type.
     * @returns A `CustomerSalesAreaTax` request builder.
     */
    static requestBuilder(): CustomerSalesAreaTaxRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CustomerSalesAreaTax`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CustomerSalesAreaTax`.
     */
    static customField(fieldName: string): CustomFieldV2<CustomerSalesAreaTax>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { CustSlsAreaAddrDepdntTaxInfo, CustSlsAreaAddrDepdntTaxInfoType } from './CustSlsAreaAddrDepdntTaxInfo';
export interface CustomerSalesAreaTaxType {
    customer: string;
    salesOrganization: string;
    distributionChannel: string;
    division: string;
    departureCountry: string;
    customerTaxCategory: string;
    customerTaxClassification?: string | null;
    toSlsAreaAddrDepdntTax: CustSlsAreaAddrDepdntTaxInfoType[];
}
export declare namespace CustomerSalesAreaTax {
    /**
     * Static representation of the [[customer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER: EdmTypeField<CustomerSalesAreaTax, "Edm.String", false, true>;
    /**
     * Static representation of the [[salesOrganization]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_ORGANIZATION: EdmTypeField<CustomerSalesAreaTax, "Edm.String", false, true>;
    /**
     * Static representation of the [[distributionChannel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DISTRIBUTION_CHANNEL: EdmTypeField<CustomerSalesAreaTax, "Edm.String", false, true>;
    /**
     * Static representation of the [[division]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DIVISION: EdmTypeField<CustomerSalesAreaTax, "Edm.String", false, true>;
    /**
     * Static representation of the [[departureCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEPARTURE_COUNTRY: EdmTypeField<CustomerSalesAreaTax, "Edm.String", false, true>;
    /**
     * Static representation of the [[customerTaxCategory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER_TAX_CATEGORY: EdmTypeField<CustomerSalesAreaTax, "Edm.String", false, true>;
    /**
     * Static representation of the [[customerTaxClassification]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER_TAX_CLASSIFICATION: EdmTypeField<CustomerSalesAreaTax, "Edm.String", true, true>;
    /**
     * Static representation of the one-to-many navigation property [[toSlsAreaAddrDepdntTax]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_SLS_AREA_ADDR_DEPDNT_TAX: Link<CustomerSalesAreaTax, CustSlsAreaAddrDepdntTaxInfo>;
    /**
     * All fields of the CustomerSalesAreaTax entity.
     */
    const _allFields: Array<EdmTypeField<CustomerSalesAreaTax, 'Edm.String', false, true> | EdmTypeField<CustomerSalesAreaTax, 'Edm.String', true, true> | Link<CustomerSalesAreaTax, CustSlsAreaAddrDepdntTaxInfo>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<CustomerSalesAreaTax>;
    /**
     * All key fields of the CustomerSalesAreaTax entity.
     */
    const _keyFields: Array<Field<CustomerSalesAreaTax, boolean, boolean>>;
    /**
     * Mapping of all key field names to the respective static field property CustomerSalesAreaTax.
     */
    const _keys: {
        [keys: string]: Field<CustomerSalesAreaTax, boolean, boolean>;
    };
}
//# sourceMappingURL=CustomerSalesAreaTax.d.ts.map