/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BpRelationshipRequestBuilder } from './BpRelationshipRequestBuilder';
import { Moment } from 'moment';
import { AllFields, Constructable, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field, FieldBuilder, OrderableEdmTypeField, Time } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "A_BPRelationship" of service "API_BUSINESS_PARTNER".
 */
export class BpRelationship extends EntityV2 implements BpRelationshipType {
  /**
   * Technical entity name for BpRelationship.
   */
  static _entityName = 'A_BPRelationship';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
  /**
   * BP Relationship Number.
   * Maximum length: 12.
   */
  relationshipNumber!: string;
  /**
   * Business Partner Number.
   * Maximum length: 10.
   */
  businessPartner1!: string;
  /**
   * Business Partner Number.
   * Maximum length: 10.
   */
  businessPartner2!: string;
  /**
   * Validity Date (Valid To).
   */
  validityEndDate!: Moment;
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
  static builder(): EntityBuilderType<BpRelationship, BpRelationshipType> {
    return EntityV2.entityBuilder(BpRelationship);
  }

  /**
   * Returns a request builder to construct requests for operations on the `BpRelationship` entity type.
   * @returns A `BpRelationship` request builder.
   */
  static requestBuilder(): BpRelationshipRequestBuilder {
    return new BpRelationshipRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `BpRelationship`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `BpRelationship`.
   */
  static customField(fieldName: string): CustomFieldV2<BpRelationship> {
    return EntityV2.customFieldSelector(fieldName, BpRelationship);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
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

export namespace BpRelationship {
  const _fieldBuilder: FieldBuilder<Constructable<BpRelationship>> = new FieldBuilder(BpRelationship);
  /**
   * Static representation of the [[relationshipNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RELATIONSHIP_NUMBER = _fieldBuilder.buildEdmTypeField('RelationshipNumber', 'Edm.String', false);
  /**
   * Static representation of the [[businessPartner1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER_1 = _fieldBuilder.buildEdmTypeField('BusinessPartner1', 'Edm.String', false);
  /**
   * Static representation of the [[businessPartner2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER_2 = _fieldBuilder.buildEdmTypeField('BusinessPartner2', 'Edm.String', false);
  /**
   * Static representation of the [[validityEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VALIDITY_END_DATE = _fieldBuilder.buildEdmTypeField('ValidityEndDate', 'Edm.DateTime', false);
  /**
   * Static representation of the [[validityStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VALIDITY_START_DATE = _fieldBuilder.buildEdmTypeField('ValidityStartDate', 'Edm.DateTime', true);
  /**
   * Static representation of the [[isStandardRelationship]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_STANDARD_RELATIONSHIP = _fieldBuilder.buildEdmTypeField('IsStandardRelationship', 'Edm.Boolean', true);
  /**
   * Static representation of the [[relationshipCategory]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RELATIONSHIP_CATEGORY = _fieldBuilder.buildEdmTypeField('RelationshipCategory', 'Edm.String', true);
  /**
   * Static representation of the [[bpRelationshipType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_RELATIONSHIP_TYPE = _fieldBuilder.buildEdmTypeField('BPRelationshipType', 'Edm.String', true);
  /**
   * Static representation of the [[createdByUser]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_USER = _fieldBuilder.buildEdmTypeField('CreatedByUser', 'Edm.String', true);
  /**
   * Static representation of the [[creationDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATION_DATE = _fieldBuilder.buildEdmTypeField('CreationDate', 'Edm.DateTime', true);
  /**
   * Static representation of the [[creationTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATION_TIME = _fieldBuilder.buildEdmTypeField('CreationTime', 'Edm.Time', true);
  /**
   * Static representation of the [[lastChangedByUser]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_CHANGED_BY_USER = _fieldBuilder.buildEdmTypeField('LastChangedByUser', 'Edm.String', true);
  /**
   * Static representation of the [[lastChangeDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_CHANGE_DATE = _fieldBuilder.buildEdmTypeField('LastChangeDate', 'Edm.DateTime', true);
  /**
   * Static representation of the [[lastChangeTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_CHANGE_TIME = _fieldBuilder.buildEdmTypeField('LastChangeTime', 'Edm.Time', true);
  /**
   * All fields of the BpRelationship entity.
   */
  export const _allFields: Array<EdmTypeField<BpRelationship, 'Edm.String', false, true> | OrderableEdmTypeField<BpRelationship, 'Edm.DateTime', false, true> | OrderableEdmTypeField<BpRelationship, 'Edm.DateTime', true, true> | EdmTypeField<BpRelationship, 'Edm.Boolean', true, true> | EdmTypeField<BpRelationship, 'Edm.String', true, true> | OrderableEdmTypeField<BpRelationship, 'Edm.Time', true, true>> = [
    BpRelationship.RELATIONSHIP_NUMBER,
    BpRelationship.BUSINESS_PARTNER_1,
    BpRelationship.BUSINESS_PARTNER_2,
    BpRelationship.VALIDITY_END_DATE,
    BpRelationship.VALIDITY_START_DATE,
    BpRelationship.IS_STANDARD_RELATIONSHIP,
    BpRelationship.RELATIONSHIP_CATEGORY,
    BpRelationship.BP_RELATIONSHIP_TYPE,
    BpRelationship.CREATED_BY_USER,
    BpRelationship.CREATION_DATE,
    BpRelationship.CREATION_TIME,
    BpRelationship.LAST_CHANGED_BY_USER,
    BpRelationship.LAST_CHANGE_DATE,
    BpRelationship.LAST_CHANGE_TIME
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<BpRelationship> = new AllFields('*', BpRelationship);
  /**
   * All key fields of the BpRelationship entity.
   */
  export const _keyFields: Array<Field<BpRelationship, boolean, boolean>> = [BpRelationship.RELATIONSHIP_NUMBER, BpRelationship.BUSINESS_PARTNER_1, BpRelationship.BUSINESS_PARTNER_2, BpRelationship.VALIDITY_END_DATE];
  /**
   * Mapping of all key field names to the respective static field property BpRelationship.
   */
  export const _keys: { [keys: string]: Field<BpRelationship, boolean, boolean> } = BpRelationship._keyFields.reduce((acc: { [keys: string]: Field<BpRelationship, boolean, boolean> }, field: Field<BpRelationship, boolean, boolean>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
