import { CustSlsAreaAddrDepdntTaxInfoRequestBuilder } from './CustSlsAreaAddrDepdntTaxInfoRequestBuilder';
import { AllFields, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "A_CustSlsAreaAddrDepdntTaxInfo" of service "API_BUSINESS_PARTNER".
 */
export declare class CustSlsAreaAddrDepdntTaxInfo extends EntityV2 implements CustSlsAreaAddrDepdntTaxInfoType {
    /**
     * Technical entity name for CustSlsAreaAddrDepdntTaxInfo.
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
     * Business Partner Address Number (from BUT020).
     * Maximum length: 10.
     */
    addressId: string;
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
     * Returns an entity builder to construct instances of `CustSlsAreaAddrDepdntTaxInfo`.
     * @returns A builder that constructs instances of entity type `CustSlsAreaAddrDepdntTaxInfo`.
     */
    static builder(): EntityBuilderType<CustSlsAreaAddrDepdntTaxInfo, CustSlsAreaAddrDepdntTaxInfoType>;
    /**
     * Returns a request builder to construct requests for operations on the `CustSlsAreaAddrDepdntTaxInfo` entity type.
     * @returns A `CustSlsAreaAddrDepdntTaxInfo` request builder.
     */
    static requestBuilder(): CustSlsAreaAddrDepdntTaxInfoRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CustSlsAreaAddrDepdntTaxInfo`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CustSlsAreaAddrDepdntTaxInfo`.
     */
    static customField(fieldName: string): CustomFieldV2<CustSlsAreaAddrDepdntTaxInfo>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface CustSlsAreaAddrDepdntTaxInfoType {
    customer: string;
    salesOrganization: string;
    distributionChannel: string;
    division: string;
    addressId: string;
    departureCountry: string;
    customerTaxCategory: string;
    customerTaxClassification?: string | null;
}
export declare namespace CustSlsAreaAddrDepdntTaxInfo {
    /**
     * Static representation of the [[customer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER: EdmTypeField<CustSlsAreaAddrDepdntTaxInfo, "Edm.String", false, true>;
    /**
     * Static representation of the [[salesOrganization]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_ORGANIZATION: EdmTypeField<CustSlsAreaAddrDepdntTaxInfo, "Edm.String", false, true>;
    /**
     * Static representation of the [[distributionChannel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DISTRIBUTION_CHANNEL: EdmTypeField<CustSlsAreaAddrDepdntTaxInfo, "Edm.String", false, true>;
    /**
     * Static representation of the [[division]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DIVISION: EdmTypeField<CustSlsAreaAddrDepdntTaxInfo, "Edm.String", false, true>;
    /**
     * Static representation of the [[addressId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_ID: EdmTypeField<CustSlsAreaAddrDepdntTaxInfo, "Edm.String", false, true>;
    /**
     * Static representation of the [[departureCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEPARTURE_COUNTRY: EdmTypeField<CustSlsAreaAddrDepdntTaxInfo, "Edm.String", false, true>;
    /**
     * Static representation of the [[customerTaxCategory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER_TAX_CATEGORY: EdmTypeField<CustSlsAreaAddrDepdntTaxInfo, "Edm.String", false, true>;
    /**
     * Static representation of the [[customerTaxClassification]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER_TAX_CLASSIFICATION: EdmTypeField<CustSlsAreaAddrDepdntTaxInfo, "Edm.String", true, true>;
    /**
     * All fields of the CustSlsAreaAddrDepdntTaxInfo entity.
     */
    const _allFields: Array<EdmTypeField<CustSlsAreaAddrDepdntTaxInfo, 'Edm.String', false, true> | EdmTypeField<CustSlsAreaAddrDepdntTaxInfo, 'Edm.String', true, true>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<CustSlsAreaAddrDepdntTaxInfo>;
    /**
     * All key fields of the CustSlsAreaAddrDepdntTaxInfo entity.
     */
    const _keyFields: Array<Field<CustSlsAreaAddrDepdntTaxInfo, boolean, boolean>>;
    /**
     * Mapping of all key field names to the respective static field property CustSlsAreaAddrDepdntTaxInfo.
     */
    const _keys: {
        [keys: string]: Field<CustSlsAreaAddrDepdntTaxInfo, boolean, boolean>;
    };
}
//# sourceMappingURL=CustSlsAreaAddrDepdntTaxInfo.d.ts.map