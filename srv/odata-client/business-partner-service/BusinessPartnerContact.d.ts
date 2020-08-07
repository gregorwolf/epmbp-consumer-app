import { BusinessPartnerContactRequestBuilder } from './BusinessPartnerContactRequestBuilder';
import { Moment } from 'moment';
import { AllFields, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Field, Link, OneToOneLink, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "A_BusinessPartnerContact" of service "API_BUSINESS_PARTNER".
 */
export declare class BusinessPartnerContact extends Entity implements BusinessPartnerContactType {
    /**
     * Technical entity name for BusinessPartnerContact.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for BusinessPartnerContact.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * BP Relationship Number.
     * The business partner relationship number is an internal number that identifies the business partner relationship set.
     * Maximum length: 12.
     */
    relationshipNumber: string;
    /**
     * Business Partner Number.
     * Key identifying a business partner in the SAP system. The key is unique within a client.
     * Maximum length: 10.
     */
    businessPartnerCompany: string;
    /**
     * Business Partner Number.
     * Key identifying a business partner in the SAP system. The key is unique within a client.
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
     * States whether the relationship is a standard relationship.
     * If several relationships of the BP relationship category contact person have been defined for, you can set the indicator standard relationship for one of these relationships.A relationship that is marked as a standard relationship can be used whenA certain scenario automatically selects a contact personThe contact person responsible is not knownYou can give this indicator to only one business partner relationship of a BP relationship category for a particular period. Another relationship of the same relationship category can be indicated as the standard relationship only if the periods for the relationship do not overlap or coincide.
     * @nullable
     */
    isStandardRelationship?: boolean;
    /**
     * Business Partner Relationship Category.
     * A relationship may exist between two business partners. The business partner relationship category characterizes the features of the relationship.
     * A distinction is made between a one-way and an undirected business partner relationship category. In a one-way relationship category, the relationship extends from one partner to another, but not vice versa.Marriage (undirected)Employee (one-way)Contact person (one-way).
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
    toContactRelationship: BpContactToFuncAndDept;
    /**
     * Returns an entity builder to construct instances `BusinessPartnerContact`.
     * @returns A builder that constructs instances of entity type `BusinessPartnerContact`.
     */
    static builder(): EntityBuilderType<BusinessPartnerContact, BusinessPartnerContactTypeForceMandatory>;
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
    static customField(fieldName: string): CustomField<BusinessPartnerContact>;
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
    validityStartDate?: Moment;
    isStandardRelationship?: boolean;
    relationshipCategory?: string;
    toContactAddress: BpContactToAddressType[];
    toContactRelationship: BpContactToFuncAndDeptType;
}
export interface BusinessPartnerContactTypeForceMandatory {
    relationshipNumber: string;
    businessPartnerCompany: string;
    businessPartnerPerson: string;
    validityEndDate: Moment;
    validityStartDate: Moment;
    isStandardRelationship: boolean;
    relationshipCategory: string;
    toContactAddress: BpContactToAddressType[];
    toContactRelationship: BpContactToFuncAndDeptType;
}
export declare namespace BusinessPartnerContact {
    /**
     * Static representation of the [[relationshipNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RELATIONSHIP_NUMBER: StringField<BusinessPartnerContact>;
    /**
     * Static representation of the [[businessPartnerCompany]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER_COMPANY: StringField<BusinessPartnerContact>;
    /**
     * Static representation of the [[businessPartnerPerson]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER_PERSON: StringField<BusinessPartnerContact>;
    /**
     * Static representation of the [[validityEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VALIDITY_END_DATE: DateField<BusinessPartnerContact>;
    /**
     * Static representation of the [[validityStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VALIDITY_START_DATE: DateField<BusinessPartnerContact>;
    /**
     * Static representation of the [[isStandardRelationship]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_STANDARD_RELATIONSHIP: BooleanField<BusinessPartnerContact>;
    /**
     * Static representation of the [[relationshipCategory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RELATIONSHIP_CATEGORY: StringField<BusinessPartnerContact>;
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
    const _allFields: Array<StringField<BusinessPartnerContact> | DateField<BusinessPartnerContact> | BooleanField<BusinessPartnerContact> | Link<BusinessPartnerContact, BpContactToAddress> | OneToOneLink<BusinessPartnerContact, BpContactToFuncAndDept>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<BusinessPartnerContact>;
    /**
     * All key fields of the BusinessPartnerContact entity.
     */
    const _keyFields: Array<Field<BusinessPartnerContact>>;
    /**
     * Mapping of all key field names to the respective static field property BusinessPartnerContact.
     */
    const _keys: {
        [keys: string]: Field<BusinessPartnerContact>;
    };
}
//# sourceMappingURL=BusinessPartnerContact.d.ts.map