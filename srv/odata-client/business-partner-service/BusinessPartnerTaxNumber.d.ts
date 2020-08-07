import { BusinessPartnerTaxNumberRequestBuilder } from './BusinessPartnerTaxNumberRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "A_BusinessPartnerTaxNumber" of service "API_BUSINESS_PARTNER".
 */
export declare class BusinessPartnerTaxNumber extends Entity implements BusinessPartnerTaxNumberType {
    /**
     * Technical entity name for BusinessPartnerTaxNumber.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for BusinessPartnerTaxNumber.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Business Partner Number.
     * Key identifying a business partner in the SAP system. The key is unique within a client.
     * Maximum length: 10.
     */
    businessPartner: string;
    /**
     * Tax Number Category.
     * Specifies the tax number category.
     * Maximum length: 4.
     */
    bpTaxType: string;
    /**
     * Business Partner Tax Number.
     * Specifies the tax number.
     * Maximum length: 20.
     * @nullable
     */
    bpTaxNumber?: string;
    /**
     * Business Partner Tax Number.
     * Specifies the tax number.
     * You can enter up to 60 characters in this field.
     * Maximum length: 60.
     * @nullable
     */
    bpTaxLongNumber?: string;
    /**
     * Authorization Group.
     * You can use authorization groups to stipulate which business partners a user is allowed to process.
     * Use the following authorization object:'Business partners: authorization groups' (B_BUPA_GRP).The system only checks this authorization if you made an entry in the "Authorization group" field for the business partner. Otherwise, any user may process the business partner.
     * Maximum length: 4.
     * @nullable
     */
    authorizationGroup?: string;
    /**
     * Returns an entity builder to construct instances `BusinessPartnerTaxNumber`.
     * @returns A builder that constructs instances of entity type `BusinessPartnerTaxNumber`.
     */
    static builder(): EntityBuilderType<BusinessPartnerTaxNumber, BusinessPartnerTaxNumberTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `BusinessPartnerTaxNumber` entity type.
     * @returns A `BusinessPartnerTaxNumber` request builder.
     */
    static requestBuilder(): BusinessPartnerTaxNumberRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `BusinessPartnerTaxNumber`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `BusinessPartnerTaxNumber`.
     */
    static customField(fieldName: string): CustomField<BusinessPartnerTaxNumber>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface BusinessPartnerTaxNumberType {
    businessPartner: string;
    bpTaxType: string;
    bpTaxNumber?: string;
    bpTaxLongNumber?: string;
    authorizationGroup?: string;
}
export interface BusinessPartnerTaxNumberTypeForceMandatory {
    businessPartner: string;
    bpTaxType: string;
    bpTaxNumber: string;
    bpTaxLongNumber: string;
    authorizationGroup: string;
}
export declare namespace BusinessPartnerTaxNumber {
    /**
     * Static representation of the [[businessPartner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER: StringField<BusinessPartnerTaxNumber>;
    /**
     * Static representation of the [[bpTaxType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_TAX_TYPE: StringField<BusinessPartnerTaxNumber>;
    /**
     * Static representation of the [[bpTaxNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_TAX_NUMBER: StringField<BusinessPartnerTaxNumber>;
    /**
     * Static representation of the [[bpTaxLongNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_TAX_LONG_NUMBER: StringField<BusinessPartnerTaxNumber>;
    /**
     * Static representation of the [[authorizationGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AUTHORIZATION_GROUP: StringField<BusinessPartnerTaxNumber>;
    /**
     * All fields of the BusinessPartnerTaxNumber entity.
     */
    const _allFields: Array<StringField<BusinessPartnerTaxNumber>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<BusinessPartnerTaxNumber>;
    /**
     * All key fields of the BusinessPartnerTaxNumber entity.
     */
    const _keyFields: Array<Field<BusinessPartnerTaxNumber>>;
    /**
     * Mapping of all key field names to the respective static field property BusinessPartnerTaxNumber.
     */
    const _keys: {
        [keys: string]: Field<BusinessPartnerTaxNumber>;
    };
}
//# sourceMappingURL=BusinessPartnerTaxNumber.d.ts.map