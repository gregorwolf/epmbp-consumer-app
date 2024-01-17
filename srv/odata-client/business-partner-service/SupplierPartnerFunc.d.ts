import { SupplierPartnerFuncRequestBuilder } from './SupplierPartnerFuncRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field, OrderableEdmTypeField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "A_SupplierPartnerFunc" of service "API_BUSINESS_PARTNER".
 */
export declare class SupplierPartnerFunc extends EntityV2 implements SupplierPartnerFuncType {
    /**
     * Technical entity name for SupplierPartnerFunc.
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
     * Supplier Subrange.
     * Maximum length: 6.
     */
    supplierSubrange: string;
    /**
     * Plant.
     * Maximum length: 4.
     */
    plant: string;
    /**
     * Partner Function.
     * Maximum length: 2.
     */
    partnerFunction: string;
    /**
     * Partner counter.
     * Maximum length: 3.
     */
    partnerCounter: string;
    /**
     * Default Partner.
     * @nullable
     */
    defaultPartner?: boolean;
    /**
     * Record Created On.
     * @nullable
     */
    creationDate?: Moment;
    /**
     * Name of Person Responsible for Creating the Object.
     * Maximum length: 12.
     * @nullable
     */
    createdByUser?: string;
    /**
     * Reference to other supplier.
     * Maximum length: 10.
     * @nullable
     */
    referenceSupplier?: string;
    /**
     * Authorization Group.
     * Maximum length: 4.
     * @nullable
     */
    authorizationGroup?: string;
    /**
     * Returns an entity builder to construct instances of `SupplierPartnerFunc`.
     * @returns A builder that constructs instances of entity type `SupplierPartnerFunc`.
     */
    static builder(): EntityBuilderType<SupplierPartnerFunc, SupplierPartnerFuncType>;
    /**
     * Returns a request builder to construct requests for operations on the `SupplierPartnerFunc` entity type.
     * @returns A `SupplierPartnerFunc` request builder.
     */
    static requestBuilder(): SupplierPartnerFuncRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SupplierPartnerFunc`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SupplierPartnerFunc`.
     */
    static customField(fieldName: string): CustomFieldV2<SupplierPartnerFunc>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface SupplierPartnerFuncType {
    supplier: string;
    purchasingOrganization: string;
    supplierSubrange: string;
    plant: string;
    partnerFunction: string;
    partnerCounter: string;
    defaultPartner?: boolean | null;
    creationDate?: Moment | null;
    createdByUser?: string | null;
    referenceSupplier?: string | null;
    authorizationGroup?: string | null;
}
export declare namespace SupplierPartnerFunc {
    /**
     * Static representation of the [[supplier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUPPLIER: EdmTypeField<SupplierPartnerFunc, "Edm.String", false, true>;
    /**
     * Static representation of the [[purchasingOrganization]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASING_ORGANIZATION: EdmTypeField<SupplierPartnerFunc, "Edm.String", false, true>;
    /**
     * Static representation of the [[supplierSubrange]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUPPLIER_SUBRANGE: EdmTypeField<SupplierPartnerFunc, "Edm.String", false, true>;
    /**
     * Static representation of the [[plant]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PLANT: EdmTypeField<SupplierPartnerFunc, "Edm.String", false, true>;
    /**
     * Static representation of the [[partnerFunction]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PARTNER_FUNCTION: EdmTypeField<SupplierPartnerFunc, "Edm.String", false, true>;
    /**
     * Static representation of the [[partnerCounter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PARTNER_COUNTER: EdmTypeField<SupplierPartnerFunc, "Edm.String", false, true>;
    /**
     * Static representation of the [[defaultPartner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEFAULT_PARTNER: EdmTypeField<SupplierPartnerFunc, "Edm.Boolean", true, true>;
    /**
     * Static representation of the [[creationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATION_DATE: OrderableEdmTypeField<SupplierPartnerFunc, "Edm.DateTime", true, true>;
    /**
     * Static representation of the [[createdByUser]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_USER: EdmTypeField<SupplierPartnerFunc, "Edm.String", true, true>;
    /**
     * Static representation of the [[referenceSupplier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REFERENCE_SUPPLIER: EdmTypeField<SupplierPartnerFunc, "Edm.String", true, true>;
    /**
     * Static representation of the [[authorizationGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AUTHORIZATION_GROUP: EdmTypeField<SupplierPartnerFunc, "Edm.String", true, true>;
    /**
     * All fields of the SupplierPartnerFunc entity.
     */
    const _allFields: Array<EdmTypeField<SupplierPartnerFunc, 'Edm.String', false, true> | EdmTypeField<SupplierPartnerFunc, 'Edm.Boolean', true, true> | OrderableEdmTypeField<SupplierPartnerFunc, 'Edm.DateTime', true, true> | EdmTypeField<SupplierPartnerFunc, 'Edm.String', true, true>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<SupplierPartnerFunc>;
    /**
     * All key fields of the SupplierPartnerFunc entity.
     */
    const _keyFields: Array<Field<SupplierPartnerFunc, boolean, boolean>>;
    /**
     * Mapping of all key field names to the respective static field property SupplierPartnerFunc.
     */
    const _keys: {
        [keys: string]: Field<SupplierPartnerFunc, boolean, boolean>;
    };
}
//# sourceMappingURL=SupplierPartnerFunc.d.ts.map