import { BusinessPartnerRoleRequestBuilder } from './BusinessPartnerRoleRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field, OrderableEdmTypeField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "A_BusinessPartnerRole" of service "API_BUSINESS_PARTNER".
 */
export declare class BusinessPartnerRole extends EntityV2 implements BusinessPartnerRoleType {
    /**
     * Technical entity name for BusinessPartnerRole.
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
     * BP Role.
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
     * Maximum length: 4.
     * @nullable
     */
    authorizationGroup?: string;
    /**
     * Returns an entity builder to construct instances of `BusinessPartnerRole`.
     * @returns A builder that constructs instances of entity type `BusinessPartnerRole`.
     */
    static builder(): EntityBuilderType<BusinessPartnerRole, BusinessPartnerRoleType>;
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
    static customField(fieldName: string): CustomFieldV2<BusinessPartnerRole>;
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
    validFrom?: Moment | null;
    validTo?: Moment | null;
    authorizationGroup?: string | null;
}
export declare namespace BusinessPartnerRole {
    /**
     * Static representation of the [[businessPartner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER: EdmTypeField<BusinessPartnerRole, "Edm.String", false, true>;
    /**
     * Static representation of the [[businessPartnerRole]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER_ROLE: EdmTypeField<BusinessPartnerRole, "Edm.String", false, true>;
    /**
     * Static representation of the [[validFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VALID_FROM: OrderableEdmTypeField<BusinessPartnerRole, "Edm.DateTimeOffset", true, true>;
    /**
     * Static representation of the [[validTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VALID_TO: OrderableEdmTypeField<BusinessPartnerRole, "Edm.DateTimeOffset", true, true>;
    /**
     * Static representation of the [[authorizationGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AUTHORIZATION_GROUP: EdmTypeField<BusinessPartnerRole, "Edm.String", true, true>;
    /**
     * All fields of the BusinessPartnerRole entity.
     */
    const _allFields: Array<EdmTypeField<BusinessPartnerRole, 'Edm.String', false, true> | OrderableEdmTypeField<BusinessPartnerRole, 'Edm.DateTimeOffset', true, true> | EdmTypeField<BusinessPartnerRole, 'Edm.String', true, true>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<BusinessPartnerRole>;
    /**
     * All key fields of the BusinessPartnerRole entity.
     */
    const _keyFields: Array<Field<BusinessPartnerRole, boolean, boolean>>;
    /**
     * Mapping of all key field names to the respective static field property BusinessPartnerRole.
     */
    const _keys: {
        [keys: string]: Field<BusinessPartnerRole, boolean, boolean>;
    };
}
//# sourceMappingURL=BusinessPartnerRole.d.ts.map