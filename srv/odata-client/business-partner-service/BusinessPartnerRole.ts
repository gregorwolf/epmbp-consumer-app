/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BusinessPartnerRoleRequestBuilder } from './BusinessPartnerRoleRequestBuilder';
import { Moment } from 'moment';
import { AllFields, Constructable, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field, FieldBuilder, OrderableEdmTypeField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "A_BusinessPartnerRole" of service "API_BUSINESS_PARTNER".
 */
export class BusinessPartnerRole extends EntityV2 implements BusinessPartnerRoleType {
  /**
   * Technical entity name for BusinessPartnerRole.
   */
  static _entityName = 'A_BusinessPartnerRole';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
  /**
   * Business Partner Number.
   * Maximum length: 10.
   */
  businessPartner!: string;
  /**
   * BP Role.
   * Maximum length: 6.
   */
  businessPartnerRole!: string;
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
  static builder(): EntityBuilderType<BusinessPartnerRole, BusinessPartnerRoleType> {
    return EntityV2.entityBuilder(BusinessPartnerRole);
  }

  /**
   * Returns a request builder to construct requests for operations on the `BusinessPartnerRole` entity type.
   * @returns A `BusinessPartnerRole` request builder.
   */
  static requestBuilder(): BusinessPartnerRoleRequestBuilder {
    return new BusinessPartnerRoleRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `BusinessPartnerRole`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `BusinessPartnerRole`.
   */
  static customField(fieldName: string): CustomFieldV2<BusinessPartnerRole> {
    return EntityV2.customFieldSelector(fieldName, BusinessPartnerRole);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface BusinessPartnerRoleType {
  businessPartner: string;
  businessPartnerRole: string;
  validFrom?: Moment | null;
  validTo?: Moment | null;
  authorizationGroup?: string | null;
}

export namespace BusinessPartnerRole {
  const _fieldBuilder: FieldBuilder<Constructable<BusinessPartnerRole>> = new FieldBuilder(BusinessPartnerRole);
  /**
   * Static representation of the [[businessPartner]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER = _fieldBuilder.buildEdmTypeField('BusinessPartner', 'Edm.String', false);
  /**
   * Static representation of the [[businessPartnerRole]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER_ROLE = _fieldBuilder.buildEdmTypeField('BusinessPartnerRole', 'Edm.String', false);
  /**
   * Static representation of the [[validFrom]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VALID_FROM = _fieldBuilder.buildEdmTypeField('ValidFrom', 'Edm.DateTimeOffset', true);
  /**
   * Static representation of the [[validTo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VALID_TO = _fieldBuilder.buildEdmTypeField('ValidTo', 'Edm.DateTimeOffset', true);
  /**
   * Static representation of the [[authorizationGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AUTHORIZATION_GROUP = _fieldBuilder.buildEdmTypeField('AuthorizationGroup', 'Edm.String', true);
  /**
   * All fields of the BusinessPartnerRole entity.
   */
  export const _allFields: Array<EdmTypeField<BusinessPartnerRole, 'Edm.String', false, true> | OrderableEdmTypeField<BusinessPartnerRole, 'Edm.DateTimeOffset', true, true> | EdmTypeField<BusinessPartnerRole, 'Edm.String', true, true>> = [
    BusinessPartnerRole.BUSINESS_PARTNER,
    BusinessPartnerRole.BUSINESS_PARTNER_ROLE,
    BusinessPartnerRole.VALID_FROM,
    BusinessPartnerRole.VALID_TO,
    BusinessPartnerRole.AUTHORIZATION_GROUP
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<BusinessPartnerRole> = new AllFields('*', BusinessPartnerRole);
  /**
   * All key fields of the BusinessPartnerRole entity.
   */
  export const _keyFields: Array<Field<BusinessPartnerRole, boolean, boolean>> = [BusinessPartnerRole.BUSINESS_PARTNER, BusinessPartnerRole.BUSINESS_PARTNER_ROLE];
  /**
   * Mapping of all key field names to the respective static field property BusinessPartnerRole.
   */
  export const _keys: { [keys: string]: Field<BusinessPartnerRole, boolean, boolean> } = BusinessPartnerRole._keyFields.reduce((acc: { [keys: string]: Field<BusinessPartnerRole, boolean, boolean> }, field: Field<BusinessPartnerRole, boolean, boolean>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
