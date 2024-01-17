import { CustomerDunningRequestBuilder } from './CustomerDunningRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field, OrderableEdmTypeField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "A_CustomerDunning" of service "API_BUSINESS_PARTNER".
 */
export declare class CustomerDunning extends EntityV2 implements CustomerDunningType {
    /**
     * Technical entity name for CustomerDunning.
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
     * Account Number of the Dunning Recipient.
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
     * Customer Account Group.
     * Maximum length: 4.
     * @nullable
     */
    customerAccountGroup?: string;
    /**
     * Returns an entity builder to construct instances of `CustomerDunning`.
     * @returns A builder that constructs instances of entity type `CustomerDunning`.
     */
    static builder(): EntityBuilderType<CustomerDunning, CustomerDunningType>;
    /**
     * Returns a request builder to construct requests for operations on the `CustomerDunning` entity type.
     * @returns A `CustomerDunning` request builder.
     */
    static requestBuilder(): CustomerDunningRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CustomerDunning`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CustomerDunning`.
     */
    static customField(fieldName: string): CustomFieldV2<CustomerDunning>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface CustomerDunningType {
    customer: string;
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
    customerAccountGroup?: string | null;
}
export declare namespace CustomerDunning {
    /**
     * Static representation of the [[customer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER: EdmTypeField<CustomerDunning, "Edm.String", false, true>;
    /**
     * Static representation of the [[companyCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMPANY_CODE: EdmTypeField<CustomerDunning, "Edm.String", false, true>;
    /**
     * Static representation of the [[dunningArea]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DUNNING_AREA: EdmTypeField<CustomerDunning, "Edm.String", false, true>;
    /**
     * Static representation of the [[dunningBlock]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DUNNING_BLOCK: EdmTypeField<CustomerDunning, "Edm.String", true, true>;
    /**
     * Static representation of the [[dunningLevel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DUNNING_LEVEL: EdmTypeField<CustomerDunning, "Edm.String", true, true>;
    /**
     * Static representation of the [[dunningProcedure]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DUNNING_PROCEDURE: EdmTypeField<CustomerDunning, "Edm.String", true, true>;
    /**
     * Static representation of the [[dunningRecipient]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DUNNING_RECIPIENT: EdmTypeField<CustomerDunning, "Edm.String", true, true>;
    /**
     * Static representation of the [[lastDunnedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_DUNNED_ON: OrderableEdmTypeField<CustomerDunning, "Edm.DateTime", true, true>;
    /**
     * Static representation of the [[legDunningProcedureOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LEG_DUNNING_PROCEDURE_ON: OrderableEdmTypeField<CustomerDunning, "Edm.DateTime", true, true>;
    /**
     * Static representation of the [[dunningClerk]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DUNNING_CLERK: EdmTypeField<CustomerDunning, "Edm.String", true, true>;
    /**
     * Static representation of the [[authorizationGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AUTHORIZATION_GROUP: EdmTypeField<CustomerDunning, "Edm.String", true, true>;
    /**
     * Static representation of the [[customerAccountGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER_ACCOUNT_GROUP: EdmTypeField<CustomerDunning, "Edm.String", true, true>;
    /**
     * All fields of the CustomerDunning entity.
     */
    const _allFields: Array<EdmTypeField<CustomerDunning, 'Edm.String', false, true> | EdmTypeField<CustomerDunning, 'Edm.String', true, true> | OrderableEdmTypeField<CustomerDunning, 'Edm.DateTime', true, true>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<CustomerDunning>;
    /**
     * All key fields of the CustomerDunning entity.
     */
    const _keyFields: Array<Field<CustomerDunning, boolean, boolean>>;
    /**
     * Mapping of all key field names to the respective static field property CustomerDunning.
     */
    const _keys: {
        [keys: string]: Field<CustomerDunning, boolean, boolean>;
    };
}
//# sourceMappingURL=CustomerDunning.d.ts.map