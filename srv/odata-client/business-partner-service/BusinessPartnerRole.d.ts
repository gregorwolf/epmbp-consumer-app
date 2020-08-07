import { BusinessPartnerRoleRequestBuilder } from './BusinessPartnerRoleRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Field, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "A_BusinessPartnerRole" of service "API_BUSINESS_PARTNER".
 */
export declare class BusinessPartnerRole extends Entity implements BusinessPartnerRoleType {
    /**
     * Technical entity name for BusinessPartnerRole.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for BusinessPartnerRole.
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
     * BP Role.
     * Function that a business partner takes on, depending on a business transaction.
     * You can define business partner roles along with their attributes in Customizing.You can create an alphanumeric, 6-digit key for the BP role. You can also choose a title as the short form and a description as the long form for the role text.Screen control in the dialog takes place by assigning a BP view.A program can access specific business partner roles for a business partner using thebusiness partner role category . The role categories are also in the TB003 table.
     * Maximum length: 6.
     */
    businessPartnerRole: string;
    /**
     * Validity Start of a BP Role.
     * @nullable
     */
    validFrom?: Moment;
    /**
     * Validity End of a BP Role.
     * @nullable
     */
    validTo?: Moment;
    /**
     * Authorization Group.
     * You can use authorization groups to stipulate which business partners a user is allowed to process.
     * Use the following authorization object:'Business partners: authorization groups' (B_BUPA_GRP).The system only checks this authorization if you made an entry in the "Authorization group" field for the business partner. Otherwise, any user may process the business partner.
     * Maximum length: 4.
     * @nullable
     */
    authorizationGroup?: string;
    /**
     * Returns an entity builder to construct instances `BusinessPartnerRole`.
     * @returns A builder that constructs instances of entity type `BusinessPartnerRole`.
     */
    static builder(): EntityBuilderType<BusinessPartnerRole, BusinessPartnerRoleTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `BusinessPartnerRole` entity type.
     * @returns A `BusinessPartnerRole` request builder.
     */
    static requestBuilder(): BusinessPartnerRoleRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `BusinessPartnerRole`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `BusinessPartnerRole`.
     */
    static customField(fieldName: string): CustomField<BusinessPartnerRole>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface BusinessPartnerRoleType {
    businessPartner: string;
    businessPartnerRole: string;
    validFrom?: Moment;
    validTo?: Moment;
    authorizationGroup?: string;
}
export interface BusinessPartnerRoleTypeForceMandatory {
    businessPartner: string;
    businessPartnerRole: string;
    validFrom: Moment;
    validTo: Moment;
    authorizationGroup: string;
}
export declare namespace BusinessPartnerRole {
    /**
     * Static representation of the [[businessPartner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER: StringField<BusinessPartnerRole>;
    /**
     * Static representation of the [[businessPartnerRole]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER_ROLE: StringField<BusinessPartnerRole>;
    /**
     * Static representation of the [[validFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VALID_FROM: DateField<BusinessPartnerRole>;
    /**
     * Static representation of the [[validTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VALID_TO: DateField<BusinessPartnerRole>;
    /**
     * Static representation of the [[authorizationGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AUTHORIZATION_GROUP: StringField<BusinessPartnerRole>;
    /**
     * All fields of the BusinessPartnerRole entity.
     */
    const _allFields: Array<StringField<BusinessPartnerRole> | DateField<BusinessPartnerRole>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<BusinessPartnerRole>;
    /**
     * All key fields of the BusinessPartnerRole entity.
     */
    const _keyFields: Array<Field<BusinessPartnerRole>>;
    /**
     * Mapping of all key field names to the respective static field property BusinessPartnerRole.
     */
    const _keys: {
        [keys: string]: Field<BusinessPartnerRole>;
    };
}
//# sourceMappingURL=BusinessPartnerRole.d.ts.map