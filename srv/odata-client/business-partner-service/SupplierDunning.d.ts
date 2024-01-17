import { SupplierDunningRequestBuilder } from './SupplierDunningRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field, OrderableEdmTypeField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "A_SupplierDunning" of service "API_BUSINESS_PARTNER".
 */
export declare class SupplierDunning extends EntityV2 implements SupplierDunningType {
    /**
     * Technical entity name for SupplierDunning.
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
     * Company Code.
     * Maximum length: 4.
     */
    companyCode: string;
    /**
     * Dunning Area.
     * Maximum length: 2.
     */
    dunningArea: string;
    /**
     * Dunning Block.
     * Maximum length: 1.
     * @nullable
     */
    dunningBlock?: string;
    /**
     * Dunning Level.
     * Maximum length: 1.
     * @nullable
     */
    dunningLevel?: string;
    /**
     * Dunning Procedure.
     * Maximum length: 4.
     * @nullable
     */
    dunningProcedure?: string;
    /**
     * Account number of the dunning recipient.
     * Maximum length: 10.
     * @nullable
     */
    dunningRecipient?: string;
    /**
     * Date of Last Dunning Notice.
     * @nullable
     */
    lastDunnedOn?: Moment;
    /**
     * Date of the Legal Dunning Proceedings.
     * @nullable
     */
    legDunningProcedureOn?: Moment;
    /**
     * Dunning Clerk.
     * Maximum length: 2.
     * @nullable
     */
    dunningClerk?: string;
    /**
     * Authorization Group.
     * Maximum length: 4.
     * @nullable
     */
    authorizationGroup?: string;
    /**
     * Supplier Account Group.
     * Maximum length: 4.
     * @nullable
     */
    supplierAccountGroup?: string;
    /**
     * Returns an entity builder to construct instances of `SupplierDunning`.
     * @returns A builder that constructs instances of entity type `SupplierDunning`.
     */
    static builder(): EntityBuilderType<SupplierDunning, SupplierDunningType>;
    /**
     * Returns a request builder to construct requests for operations on the `SupplierDunning` entity type.
     * @returns A `SupplierDunning` request builder.
     */
    static requestBuilder(): SupplierDunningRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SupplierDunning`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SupplierDunning`.
     */
    static customField(fieldName: string): CustomFieldV2<SupplierDunning>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface SupplierDunningType {
    supplier: string;
    companyCode: string;
    dunningArea: string;
    dunningBlock?: string | null;
    dunningLevel?: string | null;
    dunningProcedure?: string | null;
    dunningRecipient?: string | null;
    lastDunnedOn?: Moment | null;
    legDunningProcedureOn?: Moment | null;
    dunningClerk?: string | null;
    authorizationGroup?: string | null;
    supplierAccountGroup?: string | null;
}
export declare namespace SupplierDunning {
    /**
     * Static representation of the [[supplier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUPPLIER: EdmTypeField<SupplierDunning, "Edm.String", false, true>;
    /**
     * Static representation of the [[companyCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMPANY_CODE: EdmTypeField<SupplierDunning, "Edm.String", false, true>;
    /**
     * Static representation of the [[dunningArea]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DUNNING_AREA: EdmTypeField<SupplierDunning, "Edm.String", false, true>;
    /**
     * Static representation of the [[dunningBlock]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DUNNING_BLOCK: EdmTypeField<SupplierDunning, "Edm.String", true, true>;
    /**
     * Static representation of the [[dunningLevel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DUNNING_LEVEL: EdmTypeField<SupplierDunning, "Edm.String", true, true>;
    /**
     * Static representation of the [[dunningProcedure]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DUNNING_PROCEDURE: EdmTypeField<SupplierDunning, "Edm.String", true, true>;
    /**
     * Static representation of the [[dunningRecipient]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DUNNING_RECIPIENT: EdmTypeField<SupplierDunning, "Edm.String", true, true>;
    /**
     * Static representation of the [[lastDunnedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_DUNNED_ON: OrderableEdmTypeField<SupplierDunning, "Edm.DateTime", true, true>;
    /**
     * Static representation of the [[legDunningProcedureOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LEG_DUNNING_PROCEDURE_ON: OrderableEdmTypeField<SupplierDunning, "Edm.DateTime", true, true>;
    /**
     * Static representation of the [[dunningClerk]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DUNNING_CLERK: EdmTypeField<SupplierDunning, "Edm.String", true, true>;
    /**
     * Static representation of the [[authorizationGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AUTHORIZATION_GROUP: EdmTypeField<SupplierDunning, "Edm.String", true, true>;
    /**
     * Static representation of the [[supplierAccountGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUPPLIER_ACCOUNT_GROUP: EdmTypeField<SupplierDunning, "Edm.String", true, true>;
    /**
     * All fields of the SupplierDunning entity.
     */
    const _allFields: Array<EdmTypeField<SupplierDunning, 'Edm.String', false, true> | EdmTypeField<SupplierDunning, 'Edm.String', true, true> | OrderableEdmTypeField<SupplierDunning, 'Edm.DateTime', true, true>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<SupplierDunning>;
    /**
     * All key fields of the SupplierDunning entity.
     */
    const _keyFields: Array<Field<SupplierDunning, boolean, boolean>>;
    /**
     * Mapping of all key field names to the respective static field property SupplierDunning.
     */
    const _keys: {
        [keys: string]: Field<SupplierDunning, boolean, boolean>;
    };
}
//# sourceMappingURL=SupplierDunning.d.ts.map