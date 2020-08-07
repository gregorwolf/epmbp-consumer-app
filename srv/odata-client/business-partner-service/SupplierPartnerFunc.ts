/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SupplierPartnerFuncRequestBuilder } from './SupplierPartnerFuncRequestBuilder';
import { Moment } from 'moment';
import { AllFields, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Field, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "A_SupplierPartnerFunc" of service "API_BUSINESS_PARTNER".
 */
export class SupplierPartnerFunc extends Entity implements SupplierPartnerFuncType {
  /**
   * Technical entity name for SupplierPartnerFunc.
   */
  static _entityName = 'A_SupplierPartnerFunc';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for SupplierPartnerFunc.
   */
  static _serviceName = 'API_BUSINESS_PARTNER';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
  /**
   * Account Number of Supplier.
   * Specifies an alphanumeric key that uniquely identifies the supplier in the SAP system.
   * Maximum length: 10.
   */
  supplier!: string;
  /**
   * Purchasing Organization.
   * Denotes the purchasing organization.
   * Maximum length: 4.
   */
  purchasingOrganization!: string;
  /**
   * Supplier Subrange.
   * Subdivision of a supplier's overall product range according to various criteria.
   * For each supplier sub-range:The master data is kept on a common basisCertain conditions applyIn the supplier master, you can create different purchasing data and different  partner functions for each  supplier sub-range.You can also maintain and change the conditions for each supplier sub-range. You assign a material to a supplier sub-range in the info record.In the supplier master, you can maintain different data for particular supplier sub-ranges, such as ordering addresses or terms of payment, for example.When creating a purchase order with a known supplier, different data is only determined if the supplier sub-range is entered in the initial screen.Your supplier Smith in Houston has two sub-ranges: paint and glue.All materials from the "paint" sub-range are ordered in Houston.You have maintained an alternative ordering address in Detroit for the "glue" sub-range.If you order materials from the "glue" sub-range, the supplier sub-range finds the Detroit ordering address.
   * Maximum length: 6.
   */
  supplierSubrange!: string;
  /**
   * Plant.
   * Key uniquely identifying a plant.
   * Maximum length: 4.
   */
  plant!: string;
  /**
   * Partner Function.
   * The abbreviated form of the name that identifies the partner function.
   * Maximum length: 2.
   */
  partnerFunction!: string;
  /**
   * Partner counter.
   * The sequential number that the system applies when there is more than one partner for a particular partner function.
   * When you create a sales order for a particular customer, there may be more than one ship-to party defined. The different ship-to parties are numbered sequentially.
   * Maximum length: 3.
   */
  partnerCounter!: string;
  /**
   * Default Partner.
   * Specifies a partner as the default for a particular partner function.
   * When you enter more than one partner for a particular partner function (for example, you define three different ship-to parties), you can select one partner as the default. During sales or purchasing processing, if you have defined multiple partners for a partner function, the system prompts you to choose just one partner. The system presents the default partner as the first choice in the pop-up window.
   * @nullable
   */
  defaultPartner?: boolean;
  /**
   * Date on Which Record Was Created.
   * @nullable
   */
  creationDate?: Moment;
  /**
   * Name of Person Who Created Object.
   * Maximum length: 12.
   * @nullable
   */
  createdByUser?: string;
  /**
   * Reference to other vendor.
   * Maximum length: 10.
   * @nullable
   */
  referenceSupplier?: string;
  /**
   * Authorization Group.
   * The authorization group allows extended authorization protection for particular objects. The authorization groups are freely definable. The authorization groups usually occur in authorization objects together with an activity.
   * Maximum length: 4.
   * @nullable
   */
  authorizationGroup?: string;

  /**
   * Returns an entity builder to construct instances `SupplierPartnerFunc`.
   * @returns A builder that constructs instances of entity type `SupplierPartnerFunc`.
   */
  static builder(): EntityBuilderType<SupplierPartnerFunc, SupplierPartnerFuncTypeForceMandatory> {
    return Entity.entityBuilder(SupplierPartnerFunc);
  }

  /**
   * Returns a request builder to construct requests for operations on the `SupplierPartnerFunc` entity type.
   * @returns A `SupplierPartnerFunc` request builder.
   */
  static requestBuilder(): SupplierPartnerFuncRequestBuilder {
    return new SupplierPartnerFuncRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `SupplierPartnerFunc`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `SupplierPartnerFunc`.
   */
  static customField(fieldName: string): CustomField<SupplierPartnerFunc> {
    return Entity.customFieldSelector(fieldName, SupplierPartnerFunc);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface SupplierPartnerFuncType {
  supplier: string;
  purchasingOrganization: string;
  supplierSubrange: string;
  plant: string;
  partnerFunction: string;
  partnerCounter: string;
  defaultPartner?: boolean;
  creationDate?: Moment;
  createdByUser?: string;
  referenceSupplier?: string;
  authorizationGroup?: string;
}

export interface SupplierPartnerFuncTypeForceMandatory {
  supplier: string;
  purchasingOrganization: string;
  supplierSubrange: string;
  plant: string;
  partnerFunction: string;
  partnerCounter: string;
  defaultPartner: boolean;
  creationDate: Moment;
  createdByUser: string;
  referenceSupplier: string;
  authorizationGroup: string;
}

export namespace SupplierPartnerFunc {
  /**
   * Static representation of the [[supplier]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPPLIER: StringField<SupplierPartnerFunc> = new StringField('Supplier', SupplierPartnerFunc, 'Edm.String');
  /**
   * Static representation of the [[purchasingOrganization]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASING_ORGANIZATION: StringField<SupplierPartnerFunc> = new StringField('PurchasingOrganization', SupplierPartnerFunc, 'Edm.String');
  /**
   * Static representation of the [[supplierSubrange]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPPLIER_SUBRANGE: StringField<SupplierPartnerFunc> = new StringField('SupplierSubrange', SupplierPartnerFunc, 'Edm.String');
  /**
   * Static representation of the [[plant]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PLANT: StringField<SupplierPartnerFunc> = new StringField('Plant', SupplierPartnerFunc, 'Edm.String');
  /**
   * Static representation of the [[partnerFunction]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARTNER_FUNCTION: StringField<SupplierPartnerFunc> = new StringField('PartnerFunction', SupplierPartnerFunc, 'Edm.String');
  /**
   * Static representation of the [[partnerCounter]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARTNER_COUNTER: StringField<SupplierPartnerFunc> = new StringField('PartnerCounter', SupplierPartnerFunc, 'Edm.String');
  /**
   * Static representation of the [[defaultPartner]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEFAULT_PARTNER: BooleanField<SupplierPartnerFunc> = new BooleanField('DefaultPartner', SupplierPartnerFunc, 'Edm.Boolean');
  /**
   * Static representation of the [[creationDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATION_DATE: DateField<SupplierPartnerFunc> = new DateField('CreationDate', SupplierPartnerFunc, 'Edm.DateTime');
  /**
   * Static representation of the [[createdByUser]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_USER: StringField<SupplierPartnerFunc> = new StringField('CreatedByUser', SupplierPartnerFunc, 'Edm.String');
  /**
   * Static representation of the [[referenceSupplier]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REFERENCE_SUPPLIER: StringField<SupplierPartnerFunc> = new StringField('ReferenceSupplier', SupplierPartnerFunc, 'Edm.String');
  /**
   * Static representation of the [[authorizationGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AUTHORIZATION_GROUP: StringField<SupplierPartnerFunc> = new StringField('AuthorizationGroup', SupplierPartnerFunc, 'Edm.String');
  /**
   * All fields of the SupplierPartnerFunc entity.
   */
  export const _allFields: Array<StringField<SupplierPartnerFunc> | BooleanField<SupplierPartnerFunc> | DateField<SupplierPartnerFunc>> = [
    SupplierPartnerFunc.SUPPLIER,
    SupplierPartnerFunc.PURCHASING_ORGANIZATION,
    SupplierPartnerFunc.SUPPLIER_SUBRANGE,
    SupplierPartnerFunc.PLANT,
    SupplierPartnerFunc.PARTNER_FUNCTION,
    SupplierPartnerFunc.PARTNER_COUNTER,
    SupplierPartnerFunc.DEFAULT_PARTNER,
    SupplierPartnerFunc.CREATION_DATE,
    SupplierPartnerFunc.CREATED_BY_USER,
    SupplierPartnerFunc.REFERENCE_SUPPLIER,
    SupplierPartnerFunc.AUTHORIZATION_GROUP
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<SupplierPartnerFunc> = new AllFields('*', SupplierPartnerFunc);
  /**
   * All key fields of the SupplierPartnerFunc entity.
   */
  export const _keyFields: Array<Field<SupplierPartnerFunc>> = [SupplierPartnerFunc.SUPPLIER, SupplierPartnerFunc.PURCHASING_ORGANIZATION, SupplierPartnerFunc.SUPPLIER_SUBRANGE, SupplierPartnerFunc.PLANT, SupplierPartnerFunc.PARTNER_FUNCTION, SupplierPartnerFunc.PARTNER_COUNTER];
  /**
   * Mapping of all key field names to the respective static field property SupplierPartnerFunc.
   */
  export const _keys: { [keys: string]: Field<SupplierPartnerFunc> } = SupplierPartnerFunc._keyFields.reduce((acc: { [keys: string]: Field<SupplierPartnerFunc> }, field: Field<SupplierPartnerFunc>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
