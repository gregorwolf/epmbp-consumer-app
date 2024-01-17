import { BusinessPartnerContactRequestBuilder } from './BusinessPartnerContactRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field, Link, OneToOneLink, OrderableEdmTypeField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "A_BusinessPartnerContact" of service "API_BUSINESS_PARTNER".
 */
export declare class BusinessPartnerContact extends EntityV2 implements BusinessPartnerContactType {
    /**
     * Technical entity name for BusinessPartnerContact.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * BP Relationship Number.
     * Maximum length: 12.
     */
    relationshipNumber: string;
    /**
     * Business Partner Number.
     * Maximum length: 10.
     */
    businessPartnerCompany: string;
    /**
     * Business Partner Number.
     * Maximum length: 10.
     */
    businessPartnerPerson: string;
    /**
     * Validity Date (Valid To).
     */
    validityEndDate: Moment;
    /**
     * Validity Date (Valid From).
     * @nullable
     */
    validityStartDate?: Moment;
    /**
     * Standard Relationship.
     * @nullable
     */
    isStandardRelationship?: boolean;
    /**
     * Business Partner Relationship Category.
     * Maximum length: 6.
     * @nullable
     */
    relationshipCategory?: string;
    /**
     * One-to-many navigation property to the [[BpContactToAddress]] entity.
     */
    toContactAddress: BpContactToAddress[];
    /**
     * One-to-one navigation property to the [[BpContactToFuncAndDept]] entity.
     */
    toContactRelationship?: BpContactToFuncAndDept | null;
    /**
     * Returns an entity builder to construct instances of `BusinessPartnerContact`.
     * @returns A builder that constructs instances of entity type `BusinessPartnerContact`.
     */
    static builder(): EntityBuilderType<BusinessPartnerContact, BusinessPartnerContactType>;
    /**
     * Returns a request builder to construct requests for operations on the `BusinessPartnerContact` entity type.
     * @returns A `BusinessPartnerContact` request builder.
     */
    static requestBuilder(): BusinessPartnerContactRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `BusinessPartnerContact`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `BusinessPartnerContact`.
     */
    static customField(fieldName: string): CustomFieldV2<BusinessPartnerContact>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { BpContactToAddress, BpContactToAddressType } from './BpContactToAddress';
import { BpContactToFuncAndDept, BpContactToFuncAndDeptType } from './BpContactToFuncAndDept';
export interface BusinessPartnerContactType {
    relationshipNumber: string;
    businessPartnerCompany: string;
    businessPartnerPerson: string;
    validityEndDate: Moment;
    validityStartDate?: Moment | null;
    isStandardRelationship?: boolean | null;
    relationshipCategory?: string | null;
    toContactAddress: BpContactToAddressType[];
    toContactRelationship?: BpContactToFuncAndDeptType | null;
}
export declare namespace BusinessPartnerContact {
    /**
     * Static representation of the [[relationshipNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RELATIONSHIP_NUMBER: EdmTypeField<BusinessPartnerContact, "Edm.String", false, true>;
    /**
     * Static representation of the [[businessPartnerCompany]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER_COMPANY: EdmTypeField<BusinessPartnerContact, "Edm.String", false, true>;
    /**
     * Static representation of the [[businessPartnerPerson]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER_PERSON: EdmTypeField<BusinessPartnerContact, "Edm.String", false, true>;
    /**
     * Static representation of the [[validityEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VALIDITY_END_DATE: OrderableEdmTypeField<BusinessPartnerContact, "Edm.DateTime", false, true>;
    /**
     * Static representation of the [[validityStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VALIDITY_START_DATE: OrderableEdmTypeField<BusinessPartnerContact, "Edm.DateTime", true, true>;
    /**
     * Static representation of the [[isStandardRelationship]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_STANDARD_RELATIONSHIP: EdmTypeField<BusinessPartnerContact, "Edm.Boolean", true, true>;
    /**
     * Static representation of the [[relationshipCategory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RELATIONSHIP_CATEGORY: EdmTypeField<BusinessPartnerContact, "Edm.String", true, true>;
    /**
     * Static representation of the one-to-many navigation property [[toContactAddress]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_CONTACT_ADDRESS: Link<BusinessPartnerContact, BpContactToAddress>;
    /**
     * Static representation of the one-to-one navigation property [[toContactRelationship]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_CONTACT_RELATIONSHIP: OneToOneLink<BusinessPartnerContact, BpContactToFuncAndDept>;
    /**
     * All fields of the BusinessPartnerContact entity.
     */
    const _allFields: Array<EdmTypeField<BusinessPartnerContact, 'Edm.String', false, true> | OrderableEdmTypeField<BusinessPartnerContact, 'Edm.DateTime', false, true> | OrderableEdmTypeField<BusinessPartnerContact, 'Edm.DateTime', true, true> | EdmTypeField<BusinessPartnerContact, 'Edm.Boolean', true, true> | EdmTypeField<BusinessPartnerContact, 'Edm.String', true, true> | Link<BusinessPartnerContact, BpContactToAddress> | OneToOneLink<BusinessPartnerContact, BpContactToFuncAndDept>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<BusinessPartnerContact>;
    /**
     * All key fields of the BusinessPartnerContact entity.
     */
    const _keyFields: Array<Field<BusinessPartnerContact, boolean, boolean>>;
    /**
     * Mapping of all key field names to the respective static field property BusinessPartnerContact.
     */
    const _keys: {
        [keys: string]: Field<BusinessPartnerContact, boolean, boolean>;
    };
}
//# sourceMappingURL=BusinessPartnerContact.d.ts.map