/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BusinessPartnerRoleRequestBuilder } from './BusinessPartnerRoleRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Field, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "A_BusinessPartnerRole" of service "API_BUSINESS_PARTNER".
 */
export class BusinessPartnerRole extends Entity implements BusinessPartnerRoleType {
  /**
   * Technical entity name for BusinessPartnerRole.
   */
  static _entityName = 'A_BusinessPartnerRole';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for BusinessPartnerRole.
   */
  static _serviceName = 'API_BUSINESS_PARTNER';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
  /**
   * Business Partner Number.
   * Key identifying a business partner in the SAP system. The key is unique within a client.
   * Maximum length: 10.
   */
  businessPartner!: string;
  /**
   * BP Role.
   * Function that a business partner takes on, depending on a business transaction.
   * You can define business partner roles along with their attributes in Customizing.You can create an alphanumeric, 6-digit key for the BP role. You can also choose a title as the short form and a description as the long form for the role text.Screen control in the dialog takes place by assigning a BP view.A program can access specific business partner roles for a business partner using thebusiness partner role category . The role categories are also in the TB003 table.
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
  static builder(): EntityBuilderType<BusinessPartnerRole, BusinessPartnerRoleTypeForceMandatory> {
    return Entity.entityBuilder(BusinessPartnerRole);
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
  static customField(fieldName: string): CustomField<BusinessPartnerRole> {
    return Entity.customFieldSelector(fieldName, BusinessPartnerRole);
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

export namespace BusinessPartnerRole {
  /**
   * Static representation of the [[businessPartner]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER: StringField<BusinessPartnerRole> = new StringField('BusinessPartner', BusinessPartnerRole, 'Edm.String');
  /**
   * Static representation of the [[businessPartnerRole]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER_ROLE: StringField<BusinessPartnerRole> = new StringField('BusinessPartnerRole', BusinessPartnerRole, 'Edm.String');
  /**
   * Static representation of the [[validFrom]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VALID_FROM: DateField<BusinessPartnerRole> = new DateField('ValidFrom', BusinessPartnerRole, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[validTo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VALID_TO: DateField<BusinessPartnerRole> = new DateField('ValidTo', BusinessPartnerRole, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[authorizationGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AUTHORIZATION_GROUP: StringField<BusinessPartnerRole> = new StringField('AuthorizationGroup', BusinessPartnerRole, 'Edm.String');
  /**
   * All fields of the BusinessPartnerRole entity.
   */
  export const _allFields: Array<StringField<BusinessPartnerRole> | DateField<BusinessPartnerRole>> = [
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
  export const _keyFields: Array<Field<BusinessPartnerRole>> = [BusinessPartnerRole.BUSINESS_PARTNER, BusinessPartnerRole.BUSINESS_PARTNER_ROLE];
  /**
   * Mapping of all key field names to the respective static field property BusinessPartnerRole.
   */
  export const _keys: { [keys: string]: Field<BusinessPartnerRole> } = BusinessPartnerRole._keyFields.reduce((acc: { [keys: string]: Field<BusinessPartnerRole> }, field: Field<BusinessPartnerRole>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
