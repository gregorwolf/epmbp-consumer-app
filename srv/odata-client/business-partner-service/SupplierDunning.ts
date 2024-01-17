/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SupplierDunningRequestBuilder } from './SupplierDunningRequestBuilder';
import { Moment } from 'moment';
import { AllFields, Constructable, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field, FieldBuilder, OrderableEdmTypeField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "A_SupplierDunning" of service "API_BUSINESS_PARTNER".
 */
export class SupplierDunning extends EntityV2 implements SupplierDunningType {
  /**
   * Technical entity name for SupplierDunning.
   */
  static _entityName = 'A_SupplierDunning';
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
   * Company Code.
   * Maximum length: 4.
   */
  companyCode!: string;
  /**
   * Dunning Area.
   * Maximum length: 2.
   */
  dunningArea!: string;
  /**
   * Dunning Block.
   * Maximum length: 1.
   * @nullable
   */
  dunningBlock?: string;
  /**
   * Dunning Level.
   * Maximum length: 1.
   * @nullable
   */
  dunningLevel?: string;
  /**
   * Dunning Procedure.
   * Maximum length: 4.
   * @nullable
   */
  dunningProcedure?: string;
  /**
   * Account number of the dunning recipient.
   * Maximum length: 10.
   * @nullable
   */
  dunningRecipient?: string;
  /**
   * Date of Last Dunning Notice.
   * @nullable
   */
  lastDunnedOn?: Moment;
  /**
   * Date of the Legal Dunning Proceedings.
   * @nullable
   */
  legDunningProcedureOn?: Moment;
  /**
   * Dunning Clerk.
   * Maximum length: 2.
   * @nullable
   */
  dunningClerk?: string;
  /**
   * Authorization Group.
   * Maximum length: 4.
   * @nullable
   */
  authorizationGroup?: string;
  /**
   * Supplier Account Group.
   * Maximum length: 4.
   * @nullable
   */
  supplierAccountGroup?: string;

  /**
   * Returns an entity builder to construct instances of `SupplierDunning`.
   * @returns A builder that constructs instances of entity type `SupplierDunning`.
   */
  static builder(): EntityBuilderType<SupplierDunning, SupplierDunningType> {
    return EntityV2.entityBuilder(SupplierDunning);
  }

  /**
   * Returns a request builder to construct requests for operations on the `SupplierDunning` entity type.
   * @returns A `SupplierDunning` request builder.
   */
  static requestBuilder(): SupplierDunningRequestBuilder {
    return new SupplierDunningRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `SupplierDunning`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `SupplierDunning`.
   */
  static customField(fieldName: string): CustomFieldV2<SupplierDunning> {
    return EntityV2.customFieldSelector(fieldName, SupplierDunning);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface SupplierDunningType {
  supplier: string;
  companyCode: string;
  dunningArea: string;
  dunningBlock?: string | null;
  dunningLevel?: string | null;
  dunningProcedure?: string | null;
  dunningRecipient?: string | null;
  lastDunnedOn?: Moment | null;
  legDunningProcedureOn?: Moment | null;
  dunningClerk?: string | null;
  authorizationGroup?: string | null;
  supplierAccountGroup?: string | null;
}

export namespace SupplierDunning {
  const _fieldBuilder: FieldBuilder<Constructable<SupplierDunning>> = new FieldBuilder(SupplierDunning);
  /**
   * Static representation of the [[supplier]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPPLIER = _fieldBuilder.buildEdmTypeField('Supplier', 'Edm.String', false);
  /**
   * Static representation of the [[companyCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMPANY_CODE = _fieldBuilder.buildEdmTypeField('CompanyCode', 'Edm.String', false);
  /**
   * Static representation of the [[dunningArea]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DUNNING_AREA = _fieldBuilder.buildEdmTypeField('DunningArea', 'Edm.String', false);
  /**
   * Static representation of the [[dunningBlock]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DUNNING_BLOCK = _fieldBuilder.buildEdmTypeField('DunningBlock', 'Edm.String', true);
  /**
   * Static representation of the [[dunningLevel]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DUNNING_LEVEL = _fieldBuilder.buildEdmTypeField('DunningLevel', 'Edm.String', true);
  /**
   * Static representation of the [[dunningProcedure]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DUNNING_PROCEDURE = _fieldBuilder.buildEdmTypeField('DunningProcedure', 'Edm.String', true);
  /**
   * Static representation of the [[dunningRecipient]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DUNNING_RECIPIENT = _fieldBuilder.buildEdmTypeField('DunningRecipient', 'Edm.String', true);
  /**
   * Static representation of the [[lastDunnedOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_DUNNED_ON = _fieldBuilder.buildEdmTypeField('LastDunnedOn', 'Edm.DateTime', true);
  /**
   * Static representation of the [[legDunningProcedureOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LEG_DUNNING_PROCEDURE_ON = _fieldBuilder.buildEdmTypeField('LegDunningProcedureOn', 'Edm.DateTime', true);
  /**
   * Static representation of the [[dunningClerk]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DUNNING_CLERK = _fieldBuilder.buildEdmTypeField('DunningClerk', 'Edm.String', true);
  /**
   * Static representation of the [[authorizationGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AUTHORIZATION_GROUP = _fieldBuilder.buildEdmTypeField('AuthorizationGroup', 'Edm.String', true);
  /**
   * Static representation of the [[supplierAccountGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPPLIER_ACCOUNT_GROUP = _fieldBuilder.buildEdmTypeField('SupplierAccountGroup', 'Edm.String', true);
  /**
   * All fields of the SupplierDunning entity.
   */
  export const _allFields: Array<EdmTypeField<SupplierDunning, 'Edm.String', false, true> | EdmTypeField<SupplierDunning, 'Edm.String', true, true> | OrderableEdmTypeField<SupplierDunning, 'Edm.DateTime', true, true>> = [
    SupplierDunning.SUPPLIER,
    SupplierDunning.COMPANY_CODE,
    SupplierDunning.DUNNING_AREA,
    SupplierDunning.DUNNING_BLOCK,
    SupplierDunning.DUNNING_LEVEL,
    SupplierDunning.DUNNING_PROCEDURE,
    SupplierDunning.DUNNING_RECIPIENT,
    SupplierDunning.LAST_DUNNED_ON,
    SupplierDunning.LEG_DUNNING_PROCEDURE_ON,
    SupplierDunning.DUNNING_CLERK,
    SupplierDunning.AUTHORIZATION_GROUP,
    SupplierDunning.SUPPLIER_ACCOUNT_GROUP
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<SupplierDunning> = new AllFields('*', SupplierDunning);
  /**
   * All key fields of the SupplierDunning entity.
   */
  export const _keyFields: Array<Field<SupplierDunning, boolean, boolean>> = [SupplierDunning.SUPPLIER, SupplierDunning.COMPANY_CODE, SupplierDunning.DUNNING_AREA];
  /**
   * Mapping of all key field names to the respective static field property SupplierDunning.
   */
  export const _keys: { [keys: string]: Field<SupplierDunning, boolean, boolean> } = SupplierDunning._keyFields.reduce((acc: { [keys: string]: Field<SupplierDunning, boolean, boolean> }, field: Field<SupplierDunning, boolean, boolean>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
