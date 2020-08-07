import { SupplierDunningRequestBuilder } from './SupplierDunningRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Field, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "A_SupplierDunning" of service "API_BUSINESS_PARTNER".
 */
export declare class SupplierDunning extends Entity implements SupplierDunningType {
    /**
     * Technical entity name for SupplierDunning.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for SupplierDunning.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Account Number of Supplier.
     * Specifies an alphanumeric key that uniquely identifies the supplier in the SAP system.
     * Maximum length: 10.
     */
    supplier: string;
    /**
     * Company Code.
     * The company code is an organizational unit within financial accounting.
     * Maximum length: 4.
     */
    companyCode: string;
    /**
     * Dunning Area.
     * The dunning area represents an organizational entity that is responsible for dunning. The dunning areas represent a sub-structure of the company codes.
     * If different responsibilities or different dunning procedures exist within a company code, you can set up corresponding dunning areas.All dunning notices are made separately according to dunning areas, and if necessary with different dunning procedures.The dunning area must be noted in the line items. As long as documents are copied from preliminary work areas (billing documents), the dunning area can be derived from details such as division or sales area, if necessary.
     * Maximum length: 2.
     */
    dunningArea: string;
    /**
     * Dunning Block.
     * Key which reflects the reason for a dunning block indicator.
     * Maximum length: 1.
     * @nullable
     */
    dunningBlock?: string;
    /**
     * Dunning Level.
     * Number that specifies how often an item or account has been dunned.
     * The business partner has received the dunning level from the last dunning run.If you use dunning areas, it is the dunning level that the business partner received from the last dunning run in the dunning area assigned.The dunning program sets the dunning level automatically when the customer or vendor receives a dunning notice.
     * Maximum length: 1.
     * @nullable
     */
    dunningLevel?: string;
    /**
     * Dunning Procedure.
     * This field contains the key for the dunning procedure to be used.
     * Maximum length: 4.
     * @nullable
     */
    dunningProcedure?: string;
    /**
     * Account number of the dunning recipient.
     * Account number of the vendor who is to receive the dunning notice.
     * Note:If an entry is not made in this field, the dunning notice is sent to the address of the vendor to be processed.
     * Maximum length: 10.
     * @nullable
     */
    dunningRecipient?: string;
    /**
     * Date of Last Dunning Notice.
     * Date on which the last dunning notice was made.
     * @nullable
     */
    lastDunnedOn?: Moment;
    /**
     * Date of the Legal Dunning Proceedings.
     * Date on which a legal dunning procedure was initiated.
     * The printing of dunning notices in the legal dunning procedure generates an internal notice about any further account movements. A dunning notice is not created for the customer.If the Legal dunning procedure field in the master record contains a date, this means that the account is involved in a legal dunning procedure. The relationship between this date and the dunning date does not affect how the account is processed.The printing of account movements in the legal dunning procedure differs from the normal printing of dunning notices as follows:You must specify a separate form for your dunning procedure in Customizing. For more information, see Customizing (IMG) under Dunning Forms.The dunning program also displays text element 520 "Legal dunning procedure". This makes it possible to display the date of the legal dunning procedure from the master record.The program also displays the documents blocked for dunning and those with a payment method (automatic debit, bank direct debit).Although dunning notices are printed, the dunning level does not change in the master record or in the items. New dunning level = old dunning level.The program only updates the date of the last dunning run.Enter the date manually.
     * @nullable
     */
    legDunningProcedureOn?: Moment;
    /**
     * Dunning Clerk.
     * Identification code for the accounting clerk dealing with dunning letters.
     * Using this identification code, the accounting clerk whose name is printed on the dunning letters is determined.If this field is not filled, then the entry from the Accounting clerk field is used.
     * Maximum length: 2.
     * @nullable
     */
    dunningClerk?: string;
    /**
     * Authorization Group.
     * The authorization group allows extended authorization protection for particular objects. The authorization groups are freely definable. The authorization groups usually occur in authorization objects together with an activity.
     * Maximum length: 4.
     * @nullable
     */
    authorizationGroup?: string;
    /**
     * Supplier Account Group.
     * The account group is a classifying feature within vendor master records. The account group determines:
     * the number interval for the account number of the vendor,whether the number is assigned by the user or by the system,which specifications are necessary and/or possible in the master record.
     * Maximum length: 4.
     * @nullable
     */
    supplierAccountGroup?: string;
    /**
     * Returns an entity builder to construct instances `SupplierDunning`.
     * @returns A builder that constructs instances of entity type `SupplierDunning`.
     */
    static builder(): EntityBuilderType<SupplierDunning, SupplierDunningTypeForceMandatory>;
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
    static customField(fieldName: string): CustomField<SupplierDunning>;
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
    dunningBlock?: string;
    dunningLevel?: string;
    dunningProcedure?: string;
    dunningRecipient?: string;
    lastDunnedOn?: Moment;
    legDunningProcedureOn?: Moment;
    dunningClerk?: string;
    authorizationGroup?: string;
    supplierAccountGroup?: string;
}
export interface SupplierDunningTypeForceMandatory {
    supplier: string;
    companyCode: string;
    dunningArea: string;
    dunningBlock: string;
    dunningLevel: string;
    dunningProcedure: string;
    dunningRecipient: string;
    lastDunnedOn: Moment;
    legDunningProcedureOn: Moment;
    dunningClerk: string;
    authorizationGroup: string;
    supplierAccountGroup: string;
}
export declare namespace SupplierDunning {
    /**
     * Static representation of the [[supplier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUPPLIER: StringField<SupplierDunning>;
    /**
     * Static representation of the [[companyCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMPANY_CODE: StringField<SupplierDunning>;
    /**
     * Static representation of the [[dunningArea]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DUNNING_AREA: StringField<SupplierDunning>;
    /**
     * Static representation of the [[dunningBlock]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DUNNING_BLOCK: StringField<SupplierDunning>;
    /**
     * Static representation of the [[dunningLevel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DUNNING_LEVEL: StringField<SupplierDunning>;
    /**
     * Static representation of the [[dunningProcedure]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DUNNING_PROCEDURE: StringField<SupplierDunning>;
    /**
     * Static representation of the [[dunningRecipient]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DUNNING_RECIPIENT: StringField<SupplierDunning>;
    /**
     * Static representation of the [[lastDunnedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_DUNNED_ON: DateField<SupplierDunning>;
    /**
     * Static representation of the [[legDunningProcedureOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LEG_DUNNING_PROCEDURE_ON: DateField<SupplierDunning>;
    /**
     * Static representation of the [[dunningClerk]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DUNNING_CLERK: StringField<SupplierDunning>;
    /**
     * Static representation of the [[authorizationGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AUTHORIZATION_GROUP: StringField<SupplierDunning>;
    /**
     * Static representation of the [[supplierAccountGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUPPLIER_ACCOUNT_GROUP: StringField<SupplierDunning>;
    /**
     * All fields of the SupplierDunning entity.
     */
    const _allFields: Array<StringField<SupplierDunning> | DateField<SupplierDunning>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<SupplierDunning>;
    /**
     * All key fields of the SupplierDunning entity.
     */
    const _keyFields: Array<Field<SupplierDunning>>;
    /**
     * Mapping of all key field names to the respective static field property SupplierDunning.
     */
    const _keys: {
        [keys: string]: Field<SupplierDunning>;
    };
}
//# sourceMappingURL=SupplierDunning.d.ts.map