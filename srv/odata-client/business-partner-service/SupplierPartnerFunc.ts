/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SupplierPartnerFuncRequestBuilder } from './SupplierPartnerFuncRequestBuilder';
import { Moment } from 'moment';
import { AllFields, Constructable, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field, FieldBuilder, OrderableEdmTypeField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "A_SupplierPartnerFunc" of service "API_BUSINESS_PARTNER".
 */
export class SupplierPartnerFunc extends EntityV2 implements SupplierPartnerFuncType {
  /**
   * Technical entity name for SupplierPartnerFunc.
   */
  static _entityName = 'A_SupplierPartnerFunc';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
  /**
   * Account Number of Supplier.
   * Maximum length: 10.
   */
  supplier!: string;
  /**
   * Purchasing Organization.
   * Maximum length: 4.
   */
  purchasingOrganization!: string;
  /**
   * Supplier Subrange.
   * Maximum length: 6.
   */
  supplierSubrange!: string;
  /**
   * Plant.
   * Maximum length: 4.
   */
  plant!: string;
  /**
   * Partner Function.
   * Maximum length: 2.
   */
  partnerFunction!: string;
  /**
   * Partner counter.
   * Maximum length: 3.
   */
  partnerCounter!: string;
  /**
   * Default Partner.
   * @nullable
   */
  defaultPartner?: boolean;
  /**
   * Record Created On.
   * @nullable
   */
  creationDate?: Moment;
  /**
   * Name of Person Responsible for Creating the Object.
   * Maximum length: 12.
   * @nullable
   */
  createdByUser?: string;
  /**
   * Reference to other supplier.
   * Maximum length: 10.
   * @nullable
   */
  referenceSupplier?: string;
  /**
   * Authorization Group.
   * Maximum length: 4.
   * @nullable
   */
  authorizationGroup?: string;

  /**
   * Returns an entity builder to construct instances of `SupplierPartnerFunc`.
   * @returns A builder that constructs instances of entity type `SupplierPartnerFunc`.
   */
  static builder(): EntityBuilderType<SupplierPartnerFunc, SupplierPartnerFuncType> {
    return EntityV2.entityBuilder(SupplierPartnerFunc);
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
  static customField(fieldName: string): CustomFieldV2<SupplierPartnerFunc> {
    return EntityV2.customFieldSelector(fieldName, SupplierPartnerFunc);
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
  defaultPartner?: boolean | null;
  creationDate?: Moment | null;
  createdByUser?: string | null;
  referenceSupplier?: string | null;
  authorizationGroup?: string | null;
}

export namespace SupplierPartnerFunc {
  const _fieldBuilder: FieldBuilder<Constructable<SupplierPartnerFunc>> = new FieldBuilder(SupplierPartnerFunc);
  /**
   * Static representation of the [[supplier]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPPLIER = _fieldBuilder.buildEdmTypeField('Supplier', 'Edm.String', false);
  /**
   * Static representation of the [[purchasingOrganization]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASING_ORGANIZATION = _fieldBuilder.buildEdmTypeField('PurchasingOrganization', 'Edm.String', false);
  /**
   * Static representation of the [[supplierSubrange]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPPLIER_SUBRANGE = _fieldBuilder.buildEdmTypeField('SupplierSubrange', 'Edm.String', false);
  /**
   * Static representation of the [[plant]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PLANT = _fieldBuilder.buildEdmTypeField('Plant', 'Edm.String', false);
  /**
   * Static representation of the [[partnerFunction]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARTNER_FUNCTION = _fieldBuilder.buildEdmTypeField('PartnerFunction', 'Edm.String', false);
  /**
   * Static representation of the [[partnerCounter]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARTNER_COUNTER = _fieldBuilder.buildEdmTypeField('PartnerCounter', 'Edm.String', false);
  /**
   * Static representation of the [[defaultPartner]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEFAULT_PARTNER = _fieldBuilder.buildEdmTypeField('DefaultPartner', 'Edm.Boolean', true);
  /**
   * Static representation of the [[creationDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATION_DATE = _fieldBuilder.buildEdmTypeField('CreationDate', 'Edm.DateTime', true);
  /**
   * Static representation of the [[createdByUser]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_USER = _fieldBuilder.buildEdmTypeField('CreatedByUser', 'Edm.String', true);
  /**
   * Static representation of the [[referenceSupplier]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REFERENCE_SUPPLIER = _fieldBuilder.buildEdmTypeField('ReferenceSupplier', 'Edm.String', true);
  /**
   * Static representation of the [[authorizationGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AUTHORIZATION_GROUP = _fieldBuilder.buildEdmTypeField('AuthorizationGroup', 'Edm.String', true);
  /**
   * All fields of the SupplierPartnerFunc entity.
   */
  export const _allFields: Array<EdmTypeField<SupplierPartnerFunc, 'Edm.String', false, true> | EdmTypeField<SupplierPartnerFunc, 'Edm.Boolean', true, true> | OrderableEdmTypeField<SupplierPartnerFunc, 'Edm.DateTime', true, true> | EdmTypeField<SupplierPartnerFunc, 'Edm.String', true, true>> = [
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
  export const _keyFields: Array<Field<SupplierPartnerFunc, boolean, boolean>> = [SupplierPartnerFunc.SUPPLIER, SupplierPartnerFunc.PURCHASING_ORGANIZATION, SupplierPartnerFunc.SUPPLIER_SUBRANGE, SupplierPartnerFunc.PLANT, SupplierPartnerFunc.PARTNER_FUNCTION, SupplierPartnerFunc.PARTNER_COUNTER];
  /**
   * Mapping of all key field names to the respective static field property SupplierPartnerFunc.
   */
  export const _keys: { [keys: string]: Field<SupplierPartnerFunc, boolean, boolean> } = SupplierPartnerFunc._keyFields.reduce((acc: { [keys: string]: Field<SupplierPartnerFunc, boolean, boolean> }, field: Field<SupplierPartnerFunc, boolean, boolean>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
