/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CustomerWithHoldingTaxRequestBuilder } from './CustomerWithHoldingTaxRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Field, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "A_CustomerWithHoldingTax" of service "API_BUSINESS_PARTNER".
 */
export class CustomerWithHoldingTax extends Entity implements CustomerWithHoldingTaxType {
  /**
   * Technical entity name for CustomerWithHoldingTax.
   */
  static _entityName = 'A_CustomerWithHoldingTax';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for CustomerWithHoldingTax.
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
   * Indicator for Withholding Tax Type.
   * This indicator is used to classify the different types of withholding tax.
   * Withholding tax types classify particular features of a withholding tax including:The time at which the withholding tax is postedThe basis on which the base amount is calculatedThe basis for accumulation (if applicable)Withholding tax types are to be distinguished from withholding tax codes, to which are allocated the withholding tax percentage rate example.Whether a withholding tax can be defined as an existing type by means of a new code, or if a new type needs to be defined will depend on the type of transaction (see below).Note that a business transaction can only be assigned one withholding tax code per withholding tax type. If the business transaction is subject to several withholding taxes simultaneously, these must be represented by different types.This is the case in Argentina for example, where up to four kinds of withholding tax per business transaction are possible.
   * Maximum length: 2.
   */
  withholdingTaxType!: string;
  /**
   * Withholding Tax Code.
   * One or more "withholding tax codes" are assigned to each withholding tax type. One of the things these codes determine is the various percentage rates for the withholding tax type.
   * Note that when processing a business transaction, no more than one withholding tax code can be assigned per withholding tax type. If the business transaction is subject to more than one withholding taxes, these must be represented in the system by defining various withholding tax types.
   * Maximum length: 2.
   * @nullable
   */
  withholdingTaxCode?: string;
  /**
   * Indicator: Withholding Tax Agent?.
   * @nullable
   */
  withholdingTaxAgent?: boolean;
  /**
   * Obligated to Withhold Tax From.
   * Date from which:
   * The company code is obligated to withhold tax for the given withholding tax type.This date must be entered in Customizing under the withholding tax information for the company code.The customer is obligated to withhold tax for the withholding tax type.This date must be defined in the customer master record.
   * @nullable
   */
  obligationDateBegin?: Moment;
  /**
   * Obligated to Withhold Tax Until.
   * Date to which:
   * The company code is obligated to withhold tax for the withholding tax type.This date must be entered in Customizing under the withholding tax information for the company code.The customer is obigated to withhold tax for the withholding tax type.
   * @nullable
   */
  obligationDateEnd?: Moment;
  /**
   * Withholding tax identification number.
   * This is a number issued by the tax authorities per withholding tax type.
   * This number must be specified in Customizing either:(a) As part of the withholding tax information defined for the company code, or(b) As part of the withholding tax information defined in the customer or vendor master record.
   * Maximum length: 16.
   * @nullable
   */
  withholdingTaxNumber?: string;
  /**
   * Exemption Certificate Number.
   * Numbered assigned by the relevant authorities for exemption from withholding tax.
   * This number must be entered in the system as follows:In the vendor master record in the case of vendorsFor customers, in Customizing under the settings for withholding tax information for the company code per withholding tax type.
   * Maximum length: 25.
   * @nullable
   */
  withholdingTaxCertificate?: string;
  /**
   * Exemption Rate.
   * Rate of exemption from withholding tax.
   * Those persons/activities subject to withholding tax can be exempted from withholding tax up to the percentage rate you enter here. This exemption rate refers to the withholding tax amount itself and not to the whole amount liable to withholding tax (withholding tax base amount).The gross amount of an invoice is 100.00 and the withholding tax base amount is defined as gross. The withholding tax rate is 10% meaning that the withholding tax amount is 10.00. Given an exemption rate of 30%, the withholding tax amount is reduced to 7.00.
   * @nullable
   */
  withholdingTaxExmptPercent?: BigNumber;
  /**
   * Date on Which Exemption Begins.
   * Date from which withholding tax exemption applies.
   * @nullable
   */
  exemptionDateBegin?: Moment;
  /**
   * Date on Which Exemption Ends.
   * Date on which withholding tax exemption expires.
   * @nullable
   */
  exemptionDateEnd?: Moment;
  /**
   * Reason for Exemption.
   * Indicator used to classify different types of exemption from liability to a particular withholding tax.
   * These indicators can be defined per withholding tax type in the vendor master record.
   * Maximum length: 2.
   * @nullable
   */
  exemptionReason?: string;
  /**
   * Authorization Group.
   * The authorization group allows extended authorization protection for particular objects. The authorization groups are freely definable. The authorization groups usually occur in authorization objects together with an activity.
   * Maximum length: 4.
   * @nullable
   */
  authorizationGroup?: string;

  /**
   * Returns an entity builder to construct instances `CustomerWithHoldingTax`.
   * @returns A builder that constructs instances of entity type `CustomerWithHoldingTax`.
   */
  static builder(): EntityBuilderType<CustomerWithHoldingTax, CustomerWithHoldingTaxTypeForceMandatory> {
    return Entity.entityBuilder(CustomerWithHoldingTax);
  }

  /**
   * Returns a request builder to construct requests for operations on the `CustomerWithHoldingTax` entity type.
   * @returns A `CustomerWithHoldingTax` request builder.
   */
  static requestBuilder(): CustomerWithHoldingTaxRequestBuilder {
    return new CustomerWithHoldingTaxRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `CustomerWithHoldingTax`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `CustomerWithHoldingTax`.
   */
  static customField(fieldName: string): CustomField<CustomerWithHoldingTax> {
    return Entity.customFieldSelector(fieldName, CustomerWithHoldingTax);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface CustomerWithHoldingTaxType {
  customer: string;
  companyCode: string;
  withholdingTaxType: string;
  withholdingTaxCode?: string;
  withholdingTaxAgent?: boolean;
  obligationDateBegin?: Moment;
  obligationDateEnd?: Moment;
  withholdingTaxNumber?: string;
  withholdingTaxCertificate?: string;
  withholdingTaxExmptPercent?: BigNumber;
  exemptionDateBegin?: Moment;
  exemptionDateEnd?: Moment;
  exemptionReason?: string;
  authorizationGroup?: string;
}

export interface CustomerWithHoldingTaxTypeForceMandatory {
  customer: string;
  companyCode: string;
  withholdingTaxType: string;
  withholdingTaxCode: string;
  withholdingTaxAgent: boolean;
  obligationDateBegin: Moment;
  obligationDateEnd: Moment;
  withholdingTaxNumber: string;
  withholdingTaxCertificate: string;
  withholdingTaxExmptPercent: BigNumber;
  exemptionDateBegin: Moment;
  exemptionDateEnd: Moment;
  exemptionReason: string;
  authorizationGroup: string;
}

export namespace CustomerWithHoldingTax {
  /**
   * Static representation of the [[customer]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER: StringField<CustomerWithHoldingTax> = new StringField('Customer', CustomerWithHoldingTax, 'Edm.String');
  /**
   * Static representation of the [[companyCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMPANY_CODE: StringField<CustomerWithHoldingTax> = new StringField('CompanyCode', CustomerWithHoldingTax, 'Edm.String');
  /**
   * Static representation of the [[withholdingTaxType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WITHHOLDING_TAX_TYPE: StringField<CustomerWithHoldingTax> = new StringField('WithholdingTaxType', CustomerWithHoldingTax, 'Edm.String');
  /**
   * Static representation of the [[withholdingTaxCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WITHHOLDING_TAX_CODE: StringField<CustomerWithHoldingTax> = new StringField('WithholdingTaxCode', CustomerWithHoldingTax, 'Edm.String');
  /**
   * Static representation of the [[withholdingTaxAgent]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WITHHOLDING_TAX_AGENT: BooleanField<CustomerWithHoldingTax> = new BooleanField('WithholdingTaxAgent', CustomerWithHoldingTax, 'Edm.Boolean');
  /**
   * Static representation of the [[obligationDateBegin]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OBLIGATION_DATE_BEGIN: DateField<CustomerWithHoldingTax> = new DateField('ObligationDateBegin', CustomerWithHoldingTax, 'Edm.DateTime');
  /**
   * Static representation of the [[obligationDateEnd]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OBLIGATION_DATE_END: DateField<CustomerWithHoldingTax> = new DateField('ObligationDateEnd', CustomerWithHoldingTax, 'Edm.DateTime');
  /**
   * Static representation of the [[withholdingTaxNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WITHHOLDING_TAX_NUMBER: StringField<CustomerWithHoldingTax> = new StringField('WithholdingTaxNumber', CustomerWithHoldingTax, 'Edm.String');
  /**
   * Static representation of the [[withholdingTaxCertificate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WITHHOLDING_TAX_CERTIFICATE: StringField<CustomerWithHoldingTax> = new StringField('WithholdingTaxCertificate', CustomerWithHoldingTax, 'Edm.String');
  /**
   * Static representation of the [[withholdingTaxExmptPercent]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WITHHOLDING_TAX_EXMPT_PERCENT: BigNumberField<CustomerWithHoldingTax> = new BigNumberField('WithholdingTaxExmptPercent', CustomerWithHoldingTax, 'Edm.Decimal');
  /**
   * Static representation of the [[exemptionDateBegin]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXEMPTION_DATE_BEGIN: DateField<CustomerWithHoldingTax> = new DateField('ExemptionDateBegin', CustomerWithHoldingTax, 'Edm.DateTime');
  /**
   * Static representation of the [[exemptionDateEnd]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXEMPTION_DATE_END: DateField<CustomerWithHoldingTax> = new DateField('ExemptionDateEnd', CustomerWithHoldingTax, 'Edm.DateTime');
  /**
   * Static representation of the [[exemptionReason]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXEMPTION_REASON: StringField<CustomerWithHoldingTax> = new StringField('ExemptionReason', CustomerWithHoldingTax, 'Edm.String');
  /**
   * Static representation of the [[authorizationGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AUTHORIZATION_GROUP: StringField<CustomerWithHoldingTax> = new StringField('AuthorizationGroup', CustomerWithHoldingTax, 'Edm.String');
  /**
   * All fields of the CustomerWithHoldingTax entity.
   */
  export const _allFields: Array<StringField<CustomerWithHoldingTax> | BooleanField<CustomerWithHoldingTax> | DateField<CustomerWithHoldingTax> | BigNumberField<CustomerWithHoldingTax>> = [
    CustomerWithHoldingTax.CUSTOMER,
    CustomerWithHoldingTax.COMPANY_CODE,
    CustomerWithHoldingTax.WITHHOLDING_TAX_TYPE,
    CustomerWithHoldingTax.WITHHOLDING_TAX_CODE,
    CustomerWithHoldingTax.WITHHOLDING_TAX_AGENT,
    CustomerWithHoldingTax.OBLIGATION_DATE_BEGIN,
    CustomerWithHoldingTax.OBLIGATION_DATE_END,
    CustomerWithHoldingTax.WITHHOLDING_TAX_NUMBER,
    CustomerWithHoldingTax.WITHHOLDING_TAX_CERTIFICATE,
    CustomerWithHoldingTax.WITHHOLDING_TAX_EXMPT_PERCENT,
    CustomerWithHoldingTax.EXEMPTION_DATE_BEGIN,
    CustomerWithHoldingTax.EXEMPTION_DATE_END,
    CustomerWithHoldingTax.EXEMPTION_REASON,
    CustomerWithHoldingTax.AUTHORIZATION_GROUP
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<CustomerWithHoldingTax> = new AllFields('*', CustomerWithHoldingTax);
  /**
   * All key fields of the CustomerWithHoldingTax entity.
   */
  export const _keyFields: Array<Field<CustomerWithHoldingTax>> = [CustomerWithHoldingTax.CUSTOMER, CustomerWithHoldingTax.COMPANY_CODE, CustomerWithHoldingTax.WITHHOLDING_TAX_TYPE];
  /**
   * Mapping of all key field names to the respective static field property CustomerWithHoldingTax.
   */
  export const _keys: { [keys: string]: Field<CustomerWithHoldingTax> } = CustomerWithHoldingTax._keyFields.reduce((acc: { [keys: string]: Field<CustomerWithHoldingTax> }, field: Field<CustomerWithHoldingTax>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
