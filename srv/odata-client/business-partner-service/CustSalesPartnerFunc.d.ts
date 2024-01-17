import { CustSalesPartnerFuncRequestBuilder } from './CustSalesPartnerFuncRequestBuilder';
import { AllFields, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "A_CustSalesPartnerFunc" of service "API_BUSINESS_PARTNER".
 */
export declare class CustSalesPartnerFunc extends EntityV2 implements CustSalesPartnerFuncType {
    /**
     * Technical entity name for CustSalesPartnerFunc.
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
     * Partner counter.
     * Maximum length: 3.
     */
    partnerCounter: string;
    /**
     * Partner Function.
     * Maximum length: 2.
     */
    partnerFunction: string;
    /**
     * Account Number of Supplier.
     * Maximum length: 10.
     * @nullable
     */
    bpCustomerNumber?: string;
    /**
     * Cust.-Specif. Descr. of Business Partner (Plant, Stor. Loc.).
     * Maximum length: 30.
     * @nullable
     */
    customerPartnerDescription?: string;
    /**
     * Default Partner.
     * @nullable
     */
    defaultPartner?: boolean;
    /**
     * Account Number of Supplier.
     * Maximum length: 10.
     * @nullable
     */
    supplier?: string;
    /**
     * Personnel Number.
     * Maximum length: 8.
     * @nullable
     */
    personnelNumber?: string;
    /**
     * Number of Contact Person.
     * Maximum length: 10.
     * @nullable
     */
    contactPerson?: string;
    /**
     * Business Partner Address Number (from BUT020).
     * Maximum length: 10.
     * @nullable
     */
    addressId?: string;
    /**
     * Authorization Group.
     * Maximum length: 4.
     * @nullable
     */
    authorizationGroup?: string;
    /**
     * Returns an entity builder to construct instances of `CustSalesPartnerFunc`.
     * @returns A builder that constructs instances of entity type `CustSalesPartnerFunc`.
     */
    static builder(): EntityBuilderType<CustSalesPartnerFunc, CustSalesPartnerFuncType>;
    /**
     * Returns a request builder to construct requests for operations on the `CustSalesPartnerFunc` entity type.
     * @returns A `CustSalesPartnerFunc` request builder.
     */
    static requestBuilder(): CustSalesPartnerFuncRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CustSalesPartnerFunc`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CustSalesPartnerFunc`.
     */
    static customField(fieldName: string): CustomFieldV2<CustSalesPartnerFunc>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface CustSalesPartnerFuncType {
    customer: string;
    salesOrganization: string;
    distributionChannel: string;
    division: string;
    partnerCounter: string;
    partnerFunction: string;
    bpCustomerNumber?: string | null;
    customerPartnerDescription?: string | null;
    defaultPartner?: boolean | null;
    supplier?: string | null;
    personnelNumber?: string | null;
    contactPerson?: string | null;
    addressId?: string | null;
    authorizationGroup?: string | null;
}
export declare namespace CustSalesPartnerFunc {
    /**
     * Static representation of the [[customer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER: EdmTypeField<CustSalesPartnerFunc, "Edm.String", false, true>;
    /**
     * Static representation of the [[salesOrganization]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_ORGANIZATION: EdmTypeField<CustSalesPartnerFunc, "Edm.String", false, true>;
    /**
     * Static representation of the [[distributionChannel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DISTRIBUTION_CHANNEL: EdmTypeField<CustSalesPartnerFunc, "Edm.String", false, true>;
    /**
     * Static representation of the [[division]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DIVISION: EdmTypeField<CustSalesPartnerFunc, "Edm.String", false, true>;
    /**
     * Static representation of the [[partnerCounter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PARTNER_COUNTER: EdmTypeField<CustSalesPartnerFunc, "Edm.String", false, true>;
    /**
     * Static representation of the [[partnerFunction]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PARTNER_FUNCTION: EdmTypeField<CustSalesPartnerFunc, "Edm.String", false, true>;
    /**
     * Static representation of the [[bpCustomerNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_CUSTOMER_NUMBER: EdmTypeField<CustSalesPartnerFunc, "Edm.String", true, true>;
    /**
     * Static representation of the [[customerPartnerDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER_PARTNER_DESCRIPTION: EdmTypeField<CustSalesPartnerFunc, "Edm.String", true, true>;
    /**
     * Static representation of the [[defaultPartner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEFAULT_PARTNER: EdmTypeField<CustSalesPartnerFunc, "Edm.Boolean", true, true>;
    /**
     * Static representation of the [[supplier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUPPLIER: EdmTypeField<CustSalesPartnerFunc, "Edm.String", true, true>;
    /**
     * Static representation of the [[personnelNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERSONNEL_NUMBER: EdmTypeField<CustSalesPartnerFunc, "Edm.String", true, true>;
    /**
     * Static representation of the [[contactPerson]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONTACT_PERSON: EdmTypeField<CustSalesPartnerFunc, "Edm.String", true, true>;
    /**
     * Static representation of the [[addressId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_ID: EdmTypeField<CustSalesPartnerFunc, "Edm.String", true, true>;
    /**
     * Static representation of the [[authorizationGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AUTHORIZATION_GROUP: EdmTypeField<CustSalesPartnerFunc, "Edm.String", true, true>;
    /**
     * All fields of the CustSalesPartnerFunc entity.
     */
    const _allFields: Array<EdmTypeField<CustSalesPartnerFunc, 'Edm.String', false, true> | EdmTypeField<CustSalesPartnerFunc, 'Edm.String', true, true> | EdmTypeField<CustSalesPartnerFunc, 'Edm.Boolean', true, true>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<CustSalesPartnerFunc>;
    /**
     * All key fields of the CustSalesPartnerFunc entity.
     */
    const _keyFields: Array<Field<CustSalesPartnerFunc, boolean, boolean>>;
    /**
     * Mapping of all key field names to the respective static field property CustSalesPartnerFunc.
     */
    const _keys: {
        [keys: string]: Field<CustSalesPartnerFunc, boolean, boolean>;
    };
}
//# sourceMappingURL=CustSalesPartnerFunc.d.ts.map