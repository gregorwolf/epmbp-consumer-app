import { BpRelationshipRequestBuilder } from './BpRelationshipRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field, OrderableEdmTypeField, Time } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "A_BPRelationship" of service "API_BUSINESS_PARTNER".
 */
export declare class BpRelationship extends EntityV2 implements BpRelationshipType {
    /**
     * Technical entity name for BpRelationship.
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
    businessPartner1: string;
    /**
     * Business Partner Number.
     * Maximum length: 10.
     */
    businessPartner2: string;
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
     * Business partner relationship type.
     * Maximum length: 4.
     * @nullable
     */
    bpRelationshipType?: string;
    /**
     * User who created the object.
     * Maximum length: 12.
     * @nullable
     */
    createdByUser?: string;
    /**
     * Date on which the object was created.
     * @nullable
     */
    creationDate?: Moment;
    /**
     * Time at which the object was created.
     * @nullable
     */
    creationTime?: Time;
    /**
     * Last user to change object.
     * Maximum length: 12.
     * @nullable
     */
    lastChangedByUser?: string;
    /**
     * Date when object was last changed.
     * @nullable
     */
    lastChangeDate?: Moment;
    /**
     * Time at which object was last changed.
     * @nullable
     */
    lastChangeTime?: Time;
    /**
     * Returns an entity builder to construct instances of `BpRelationship`.
     * @returns A builder that constructs instances of entity type `BpRelationship`.
     */
    static builder(): EntityBuilderType<BpRelationship, BpRelationshipType>;
    /**
     * Returns a request builder to construct requests for operations on the `BpRelationship` entity type.
     * @returns A `BpRelationship` request builder.
     */
    static requestBuilder(): BpRelationshipRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `BpRelationship`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `BpRelationship`.
     */
    static customField(fieldName: string): CustomFieldV2<BpRelationship>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface BpRelationshipType {
    relationshipNumber: string;
    businessPartner1: string;
    businessPartner2: string;
    validityEndDate: Moment;
    validityStartDate?: Moment | null;
    isStandardRelationship?: boolean | null;
    relationshipCategory?: string | null;
    bpRelationshipType?: string | null;
    createdByUser?: string | null;
    creationDate?: Moment | null;
    creationTime?: Time | null;
    lastChangedByUser?: string | null;
    lastChangeDate?: Moment | null;
    lastChangeTime?: Time | null;
}
export declare namespace BpRelationship {
    /**
     * Static representation of the [[relationshipNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RELATIONSHIP_NUMBER: EdmTypeField<BpRelationship, "Edm.String", false, true>;
    /**
     * Static representation of the [[businessPartner1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER_1: EdmTypeField<BpRelationship, "Edm.String", false, true>;
    /**
     * Static representation of the [[businessPartner2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER_2: EdmTypeField<BpRelationship, "Edm.String", false, true>;
    /**
     * Static representation of the [[validityEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VALIDITY_END_DATE: OrderableEdmTypeField<BpRelationship, "Edm.DateTime", false, true>;
    /**
     * Static representation of the [[validityStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VALIDITY_START_DATE: OrderableEdmTypeField<BpRelationship, "Edm.DateTime", true, true>;
    /**
     * Static representation of the [[isStandardRelationship]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_STANDARD_RELATIONSHIP: EdmTypeField<BpRelationship, "Edm.Boolean", true, true>;
    /**
     * Static representation of the [[relationshipCategory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RELATIONSHIP_CATEGORY: EdmTypeField<BpRelationship, "Edm.String", true, true>;
    /**
     * Static representation of the [[bpRelationshipType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_RELATIONSHIP_TYPE: EdmTypeField<BpRelationship, "Edm.String", true, true>;
    /**
     * Static representation of the [[createdByUser]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_USER: EdmTypeField<BpRelationship, "Edm.String", true, true>;
    /**
     * Static representation of the [[creationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATION_DATE: OrderableEdmTypeField<BpRelationship, "Edm.DateTime", true, true>;
    /**
     * Static representation of the [[creationTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATION_TIME: OrderableEdmTypeField<BpRelationship, "Edm.Time", true, true>;
    /**
     * Static representation of the [[lastChangedByUser]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_CHANGED_BY_USER: EdmTypeField<BpRelationship, "Edm.String", true, true>;
    /**
     * Static representation of the [[lastChangeDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_CHANGE_DATE: OrderableEdmTypeField<BpRelationship, "Edm.DateTime", true, true>;
    /**
     * Static representation of the [[lastChangeTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_CHANGE_TIME: OrderableEdmTypeField<BpRelationship, "Edm.Time", true, true>;
    /**
     * All fields of the BpRelationship entity.
     */
    const _allFields: Array<EdmTypeField<BpRelationship, 'Edm.String', false, true> | OrderableEdmTypeField<BpRelationship, 'Edm.DateTime', false, true> | OrderableEdmTypeField<BpRelationship, 'Edm.DateTime', true, true> | EdmTypeField<BpRelationship, 'Edm.Boolean', true, true> | EdmTypeField<BpRelationship, 'Edm.String', true, true> | OrderableEdmTypeField<BpRelationship, 'Edm.Time', true, true>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<BpRelationship>;
    /**
     * All key fields of the BpRelationship entity.
     */
    const _keyFields: Array<Field<BpRelationship, boolean, boolean>>;
    /**
     * Mapping of all key field names to the respective static field property BpRelationship.
     */
    const _keys: {
        [keys: string]: Field<BpRelationship, boolean, boolean>;
    };
}
//# sourceMappingURL=BpRelationship.d.ts.map