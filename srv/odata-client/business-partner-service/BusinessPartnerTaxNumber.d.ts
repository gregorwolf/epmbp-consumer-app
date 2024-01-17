import { BusinessPartnerTaxNumberRequestBuilder } from './BusinessPartnerTaxNumberRequestBuilder';
import { AllFields, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "A_BusinessPartnerTaxNumber" of service "API_BUSINESS_PARTNER".
 */
export declare class BusinessPartnerTaxNumber extends EntityV2 implements BusinessPartnerTaxNumberType {
    /**
     * Technical entity name for BusinessPartnerTaxNumber.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Business Partner Number.
     * Maximum length: 10.
     */
    businessPartner: string;
    /**
     * Tax Number Category.
     * Maximum length: 4.
     */
    bpTaxType: string;
    /**
     * Business Partner Tax Number.
     * Maximum length: 20.
     * @nullable
     */
    bpTaxNumber?: string;
    /**
     * Business Partner Tax Number.
     * Maximum length: 60.
     * @nullable
     */
    bpTaxLongNumber?: string;
    /**
     * Authorization Group.
     * Maximum length: 4.
     * @nullable
     */
    authorizationGroup?: string;
    /**
     * Returns an entity builder to construct instances of `BusinessPartnerTaxNumber`.
     * @returns A builder that constructs instances of entity type `BusinessPartnerTaxNumber`.
     */
    static builder(): EntityBuilderType<BusinessPartnerTaxNumber, BusinessPartnerTaxNumberType>;
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
    static customField(fieldName: string): CustomFieldV2<BusinessPartnerTaxNumber>;
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
    bpTaxNumber?: string | null;
    bpTaxLongNumber?: string | null;
    authorizationGroup?: string | null;
}
export declare namespace BusinessPartnerTaxNumber {
    /**
     * Static representation of the [[businessPartner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER: EdmTypeField<BusinessPartnerTaxNumber, "Edm.String", false, true>;
    /**
     * Static representation of the [[bpTaxType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_TAX_TYPE: EdmTypeField<BusinessPartnerTaxNumber, "Edm.String", false, true>;
    /**
     * Static representation of the [[bpTaxNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_TAX_NUMBER: EdmTypeField<BusinessPartnerTaxNumber, "Edm.String", true, true>;
    /**
     * Static representation of the [[bpTaxLongNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_TAX_LONG_NUMBER: EdmTypeField<BusinessPartnerTaxNumber, "Edm.String", true, true>;
    /**
     * Static representation of the [[authorizationGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AUTHORIZATION_GROUP: EdmTypeField<BusinessPartnerTaxNumber, "Edm.String", true, true>;
    /**
     * All fields of the BusinessPartnerTaxNumber entity.
     */
    const _allFields: Array<EdmTypeField<BusinessPartnerTaxNumber, 'Edm.String', false, true> | EdmTypeField<BusinessPartnerTaxNumber, 'Edm.String', true, true>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<BusinessPartnerTaxNumber>;
    /**
     * All key fields of the BusinessPartnerTaxNumber entity.
     */
    const _keyFields: Array<Field<BusinessPartnerTaxNumber, boolean, boolean>>;
    /**
     * Mapping of all key field names to the respective static field property BusinessPartnerTaxNumber.
     */
    const _keys: {
        [keys: string]: Field<BusinessPartnerTaxNumber, boolean, boolean>;
    };
}
//# sourceMappingURL=BusinessPartnerTaxNumber.d.ts.map