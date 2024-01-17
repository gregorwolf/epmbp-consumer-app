/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CustomerDunningRequestBuilder } from './CustomerDunningRequestBuilder';
import { Moment } from 'moment';
import { AllFields, Constructable, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field, FieldBuilder, OrderableEdmTypeField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "A_CustomerDunning" of service "API_BUSINESS_PARTNER".
 */
export class CustomerDunning extends EntityV2 implements CustomerDunningType {
  /**
   * Technical entity name for CustomerDunning.
   */
  static _entityName = 'A_CustomerDunning';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
  /**
   * Customer Number.
   * Maximum length: 10.
   */
  customer!: string;
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
   * Account Number of the Dunning Recipient.
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
   * Customer Account Group.
   * Maximum length: 4.
   * @nullable
   */
  customerAccountGroup?: string;

  /**
   * Returns an entity builder to construct instances of `CustomerDunning`.
   * @returns A builder that constructs instances of entity type `CustomerDunning`.
   */
  static builder(): EntityBuilderType<CustomerDunning, CustomerDunningType> {
    return EntityV2.entityBuilder(CustomerDunning);
  }

  /**
   * Returns a request builder to construct requests for operations on the `CustomerDunning` entity type.
   * @returns A `CustomerDunning` request builder.
   */
  static requestBuilder(): CustomerDunningRequestBuilder {
    return new CustomerDunningRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `CustomerDunning`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `CustomerDunning`.
   */
  static customField(fieldName: string): CustomFieldV2<CustomerDunning> {
    return EntityV2.customFieldSelector(fieldName, CustomerDunning);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface CustomerDunningType {
  customer: string;
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
  customerAccountGroup?: string | null;
}

export namespace CustomerDunning {
  const _fieldBuilder: FieldBuilder<Constructable<CustomerDunning>> = new FieldBuilder(CustomerDunning);
  /**
   * Static representation of the [[customer]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER = _fieldBuilder.buildEdmTypeField('Customer', 'Edm.String', false);
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
   * Static representation of the [[customerAccountGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER_ACCOUNT_GROUP = _fieldBuilder.buildEdmTypeField('CustomerAccountGroup', 'Edm.String', true);
  /**
   * All fields of the CustomerDunning entity.
   */
  export const _allFields: Array<EdmTypeField<CustomerDunning, 'Edm.String', false, true> | EdmTypeField<CustomerDunning, 'Edm.String', true, true> | OrderableEdmTypeField<CustomerDunning, 'Edm.DateTime', true, true>> = [
    CustomerDunning.CUSTOMER,
    CustomerDunning.COMPANY_CODE,
    CustomerDunning.DUNNING_AREA,
    CustomerDunning.DUNNING_BLOCK,
    CustomerDunning.DUNNING_LEVEL,
    CustomerDunning.DUNNING_PROCEDURE,
    CustomerDunning.DUNNING_RECIPIENT,
    CustomerDunning.LAST_DUNNED_ON,
    CustomerDunning.LEG_DUNNING_PROCEDURE_ON,
    CustomerDunning.DUNNING_CLERK,
    CustomerDunning.AUTHORIZATION_GROUP,
    CustomerDunning.CUSTOMER_ACCOUNT_GROUP
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<CustomerDunning> = new AllFields('*', CustomerDunning);
  /**
   * All key fields of the CustomerDunning entity.
   */
  export const _keyFields: Array<Field<CustomerDunning, boolean, boolean>> = [CustomerDunning.CUSTOMER, CustomerDunning.COMPANY_CODE, CustomerDunning.DUNNING_AREA];
  /**
   * Mapping of all key field names to the respective static field property CustomerDunning.
   */
  export const _keys: { [keys: string]: Field<CustomerDunning, boolean, boolean> } = CustomerDunning._keyFields.reduce((acc: { [keys: string]: Field<CustomerDunning, boolean, boolean> }, field: Field<CustomerDunning, boolean, boolean>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
