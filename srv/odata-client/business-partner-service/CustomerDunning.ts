/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CustomerDunningRequestBuilder } from './CustomerDunningRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Field, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "A_CustomerDunning" of service "API_BUSINESS_PARTNER".
 */
export class CustomerDunning extends Entity implements CustomerDunningType {
  /**
   * Technical entity name for CustomerDunning.
   */
  static _entityName = 'A_CustomerDunning';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for CustomerDunning.
   */
  static _serviceName = 'API_BUSINESS_PARTNER';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
  /**
   * Customer Number.
   * Gives an alphanumeric key, which clearly identifies the customer or vendor in the SAP system.
   * Maximum length: 10.
   */
  customer!: string;
  /**
   * Company Code.
   * The company code is an organizational unit within financial accounting.
   * Maximum length: 4.
   */
  companyCode!: string;
  /**
   * Dunning Area.
   * The dunning area represents an organizational entity that is responsible for dunning. The dunning areas represent a sub-structure of the company codes.
   * If different responsibilities or different dunning procedures exist within a company code, you can set up corresponding dunning areas.All dunning notices are made separately according to dunning areas, and if necessary with different dunning procedures.The dunning area must be noted in the line items. As long as documents are copied from preliminary work areas (billing documents), the dunning area can be derived from details such as division or sales area, if necessary.
   * Maximum length: 2.
   */
  dunningArea!: string;
  /**
   * Dunning Block.
   * Key which reflects the reason for a dunning block indicator.
   * Maximum length: 1.
   * @nullable
   */
  dunningBlock?: string;
  /**
   * Dunning Level.
   * Number that specifies how often an item or account has been dunned.
   * The business partner has received the dunning level from the last dunning run.If you use dunning areas, it is the dunning level that the business partner received from the last dunning run in the dunning area assigned.The dunning program sets the dunning level automatically when the customer or vendor receives a dunning notice.
   * Maximum length: 1.
   * @nullable
   */
  dunningLevel?: string;
  /**
   * Dunning Procedure.
   * This field contains the key for the dunning procedure to be used.
   * Maximum length: 4.
   * @nullable
   */
  dunningProcedure?: string;
  /**
   * Account Number of the Dunning Recipient.
   * Account number of the customer who is to be the recipient of the dunning letters.
   * The account number is only needed if dunning letters are not sent to the customer who owes the  receivables.
   * Maximum length: 10.
   * @nullable
   */
  dunningRecipient?: string;
  /**
   * Date of Last Dunning Notice.
   * Date on which the last dunning notice was made.
   * @nullable
   */
  lastDunnedOn?: Moment;
  /**
   * Date of the Legal Dunning Proceedings.
   * Date on which a legal dunning procedure was initiated.
   * The printing of dunning notices in the legal dunning procedure generates an internal notice about any further account movements. A dunning notice is not created for the customer.If the Legal dunning procedure field in the master record contains a date, this means that the account is involved in a legal dunning procedure. The relationship between this date and the dunning date does not affect how the account is processed.The printing of account movements in the legal dunning procedure differs from the normal printing of dunning notices as follows:You must specify a separate form for your dunning procedure in Customizing. For more information, see Customizing (IMG) under Dunning Forms.The dunning program also displays text element 520 "Legal dunning procedure". This makes it possible to display the date of the legal dunning procedure from the master record.The program also displays the documents blocked for dunning and those with a payment method (automatic debit, bank direct debit).Although dunning notices are printed, the dunning level does not change in the master record or in the items. New dunning level = old dunning level.The program only updates the date of the last dunning run.Enter the date manually.
   * @nullable
   */
  legDunningProcedureOn?: Moment;
  /**
   * Dunning Clerk.
   * Identification code for the accounting clerk dealing with dunning letters.
   * Using this identification code, the accounting clerk whose name is printed on the dunning letters is determined.If this field is not filled, then the entry from the Accounting clerk field is used.
   * Maximum length: 2.
   * @nullable
   */
  dunningClerk?: string;
  /**
   * Authorization Group.
   * The authorization group allows extended authorization protection for particular objects. The authorization groups are freely definable. The authorization groups usually occur in authorization objects together with an activity.
   * Maximum length: 4.
   * @nullable
   */
  authorizationGroup?: string;
  /**
   * Customer Account Group.
   * The account group is a classifying feature within customer master records. The account group determines:
   * in which number range the customer account number should be;whether the number is assigned by the user or by the system;which specifications are necessary or possible in the master record.
   * Maximum length: 4.
   * @nullable
   */
  customerAccountGroup?: string;

  /**
   * Returns an entity builder to construct instances `CustomerDunning`.
   * @returns A builder that constructs instances of entity type `CustomerDunning`.
   */
  static builder(): EntityBuilderType<CustomerDunning, CustomerDunningTypeForceMandatory> {
    return Entity.entityBuilder(CustomerDunning);
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
  static customField(fieldName: string): CustomField<CustomerDunning> {
    return Entity.customFieldSelector(fieldName, CustomerDunning);
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
  dunningBlock?: string;
  dunningLevel?: string;
  dunningProcedure?: string;
  dunningRecipient?: string;
  lastDunnedOn?: Moment;
  legDunningProcedureOn?: Moment;
  dunningClerk?: string;
  authorizationGroup?: string;
  customerAccountGroup?: string;
}

export interface CustomerDunningTypeForceMandatory {
  customer: string;
  companyCode: string;
  dunningArea: string;
  dunningBlock: string;
  dunningLevel: string;
  dunningProcedure: string;
  dunningRecipient: string;
  lastDunnedOn: Moment;
  legDunningProcedureOn: Moment;
  dunningClerk: string;
  authorizationGroup: string;
  customerAccountGroup: string;
}

export namespace CustomerDunning {
  /**
   * Static representation of the [[customer]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER: StringField<CustomerDunning> = new StringField('Customer', CustomerDunning, 'Edm.String');
  /**
   * Static representation of the [[companyCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMPANY_CODE: StringField<CustomerDunning> = new StringField('CompanyCode', CustomerDunning, 'Edm.String');
  /**
   * Static representation of the [[dunningArea]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DUNNING_AREA: StringField<CustomerDunning> = new StringField('DunningArea', CustomerDunning, 'Edm.String');
  /**
   * Static representation of the [[dunningBlock]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DUNNING_BLOCK: StringField<CustomerDunning> = new StringField('DunningBlock', CustomerDunning, 'Edm.String');
  /**
   * Static representation of the [[dunningLevel]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DUNNING_LEVEL: StringField<CustomerDunning> = new StringField('DunningLevel', CustomerDunning, 'Edm.String');
  /**
   * Static representation of the [[dunningProcedure]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DUNNING_PROCEDURE: StringField<CustomerDunning> = new StringField('DunningProcedure', CustomerDunning, 'Edm.String');
  /**
   * Static representation of the [[dunningRecipient]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DUNNING_RECIPIENT: StringField<CustomerDunning> = new StringField('DunningRecipient', CustomerDunning, 'Edm.String');
  /**
   * Static representation of the [[lastDunnedOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_DUNNED_ON: DateField<CustomerDunning> = new DateField('LastDunnedOn', CustomerDunning, 'Edm.DateTime');
  /**
   * Static representation of the [[legDunningProcedureOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LEG_DUNNING_PROCEDURE_ON: DateField<CustomerDunning> = new DateField('LegDunningProcedureOn', CustomerDunning, 'Edm.DateTime');
  /**
   * Static representation of the [[dunningClerk]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DUNNING_CLERK: StringField<CustomerDunning> = new StringField('DunningClerk', CustomerDunning, 'Edm.String');
  /**
   * Static representation of the [[authorizationGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AUTHORIZATION_GROUP: StringField<CustomerDunning> = new StringField('AuthorizationGroup', CustomerDunning, 'Edm.String');
  /**
   * Static representation of the [[customerAccountGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER_ACCOUNT_GROUP: StringField<CustomerDunning> = new StringField('CustomerAccountGroup', CustomerDunning, 'Edm.String');
  /**
   * All fields of the CustomerDunning entity.
   */
  export const _allFields: Array<StringField<CustomerDunning> | DateField<CustomerDunning>> = [
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
  export const _keyFields: Array<Field<CustomerDunning>> = [CustomerDunning.CUSTOMER, CustomerDunning.COMPANY_CODE, CustomerDunning.DUNNING_AREA];
  /**
   * Mapping of all key field names to the respective static field property CustomerDunning.
   */
  export const _keys: { [keys: string]: Field<CustomerDunning> } = CustomerDunning._keyFields.reduce((acc: { [keys: string]: Field<CustomerDunning> }, field: Field<CustomerDunning>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
