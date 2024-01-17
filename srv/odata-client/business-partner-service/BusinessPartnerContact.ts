/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BusinessPartnerContactRequestBuilder } from './BusinessPartnerContactRequestBuilder';
import { Moment } from 'moment';
import { AllFields, Constructable, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field, FieldBuilder, Link, OneToOneLink, OrderableEdmTypeField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "A_BusinessPartnerContact" of service "API_BUSINESS_PARTNER".
 */
export class BusinessPartnerContact extends EntityV2 implements BusinessPartnerContactType {
  /**
   * Technical entity name for BusinessPartnerContact.
   */
  static _entityName = 'A_BusinessPartnerContact';
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
  businessPartnerCompany!: string;
  /**
   * Business Partner Number.
   * Maximum length: 10.
   */
  businessPartnerPerson!: string;
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
   * One-to-many navigation property to the [[BpContactToAddress]] entity.
   */
  toContactAddress!: BpContactToAddress[];
  /**
   * One-to-one navigation property to the [[BpContactToFuncAndDept]] entity.
   */
  toContactRelationship?: BpContactToFuncAndDept | null;

  /**
   * Returns an entity builder to construct instances of `BusinessPartnerContact`.
   * @returns A builder that constructs instances of entity type `BusinessPartnerContact`.
   */
  static builder(): EntityBuilderType<BusinessPartnerContact, BusinessPartnerContactType> {
    return EntityV2.entityBuilder(BusinessPartnerContact);
  }

  /**
   * Returns a request builder to construct requests for operations on the `BusinessPartnerContact` entity type.
   * @returns A `BusinessPartnerContact` request builder.
   */
  static requestBuilder(): BusinessPartnerContactRequestBuilder {
    return new BusinessPartnerContactRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `BusinessPartnerContact`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `BusinessPartnerContact`.
   */
  static customField(fieldName: string): CustomFieldV2<BusinessPartnerContact> {
    return EntityV2.customFieldSelector(fieldName, BusinessPartnerContact);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
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

export namespace BusinessPartnerContact {
  const _fieldBuilder: FieldBuilder<Constructable<BusinessPartnerContact>> = new FieldBuilder(BusinessPartnerContact);
  /**
   * Static representation of the [[relationshipNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RELATIONSHIP_NUMBER = _fieldBuilder.buildEdmTypeField('RelationshipNumber', 'Edm.String', false);
  /**
   * Static representation of the [[businessPartnerCompany]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER_COMPANY = _fieldBuilder.buildEdmTypeField('BusinessPartnerCompany', 'Edm.String', false);
  /**
   * Static representation of the [[businessPartnerPerson]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER_PERSON = _fieldBuilder.buildEdmTypeField('BusinessPartnerPerson', 'Edm.String', false);
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
   * Static representation of the one-to-many navigation property [[toContactAddress]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_CONTACT_ADDRESS: Link<BusinessPartnerContact, BpContactToAddress> = new Link('to_ContactAddress', BusinessPartnerContact, BpContactToAddress);
  /**
   * Static representation of the one-to-one navigation property [[toContactRelationship]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_CONTACT_RELATIONSHIP: OneToOneLink<BusinessPartnerContact, BpContactToFuncAndDept> = new OneToOneLink('to_ContactRelationship', BusinessPartnerContact, BpContactToFuncAndDept);
  /**
   * All fields of the BusinessPartnerContact entity.
   */
  export const _allFields: Array<EdmTypeField<BusinessPartnerContact, 'Edm.String', false, true> | OrderableEdmTypeField<BusinessPartnerContact, 'Edm.DateTime', false, true> | OrderableEdmTypeField<BusinessPartnerContact, 'Edm.DateTime', true, true> | EdmTypeField<BusinessPartnerContact, 'Edm.Boolean', true, true> | EdmTypeField<BusinessPartnerContact, 'Edm.String', true, true> | Link<BusinessPartnerContact, BpContactToAddress> | OneToOneLink<BusinessPartnerContact, BpContactToFuncAndDept>> = [
    BusinessPartnerContact.RELATIONSHIP_NUMBER,
    BusinessPartnerContact.BUSINESS_PARTNER_COMPANY,
    BusinessPartnerContact.BUSINESS_PARTNER_PERSON,
    BusinessPartnerContact.VALIDITY_END_DATE,
    BusinessPartnerContact.VALIDITY_START_DATE,
    BusinessPartnerContact.IS_STANDARD_RELATIONSHIP,
    BusinessPartnerContact.RELATIONSHIP_CATEGORY,
    BusinessPartnerContact.TO_CONTACT_ADDRESS,
    BusinessPartnerContact.TO_CONTACT_RELATIONSHIP
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<BusinessPartnerContact> = new AllFields('*', BusinessPartnerContact);
  /**
   * All key fields of the BusinessPartnerContact entity.
   */
  export const _keyFields: Array<Field<BusinessPartnerContact, boolean, boolean>> = [BusinessPartnerContact.RELATIONSHIP_NUMBER, BusinessPartnerContact.BUSINESS_PARTNER_COMPANY, BusinessPartnerContact.BUSINESS_PARTNER_PERSON, BusinessPartnerContact.VALIDITY_END_DATE];
  /**
   * Mapping of all key field names to the respective static field property BusinessPartnerContact.
   */
  export const _keys: { [keys: string]: Field<BusinessPartnerContact, boolean, boolean> } = BusinessPartnerContact._keyFields.reduce((acc: { [keys: string]: Field<BusinessPartnerContact, boolean, boolean> }, field: Field<BusinessPartnerContact, boolean, boolean>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
