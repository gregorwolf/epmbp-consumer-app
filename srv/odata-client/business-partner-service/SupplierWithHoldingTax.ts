/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SupplierWithHoldingTaxRequestBuilder } from './SupplierWithHoldingTaxRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Field, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "A_SupplierWithHoldingTax" of service "API_BUSINESS_PARTNER".
 */
export class SupplierWithHoldingTax extends Entity implements SupplierWithHoldingTaxType {
  /**
   * Technical entity name for SupplierWithHoldingTax.
   */
  static _entityName = 'A_SupplierWithHoldingTax';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for SupplierWithHoldingTax.
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
   * Indicator: Subject to Withholding Tax?.
   * @nullable
   */
  isWithholdingTaxSubject?: boolean;
  /**
   * Type of Recipient.
   * The type of recipient can be defined in the vendor master record.
   * It is used to group vendors together according to particular characteristics such as occupations that may be subject to the same withholding tax type, but which are required to pay different percentage rates (as defined by the withholding tax code).Application in ThailandThis corresponds to the official Thai form number (Phaw.Ngor.Daw) and is used to determine the sequential numbering of a withholding tax certificate. The form number is defined in the vendor master record.
   * Maximum length: 2.
   * @nullable
   */
  recipientType?: string;
  /**
   * Exemption Certificate Number.
   * Numbered assigned by the relevant authorities for exemption from withholding tax.
   * This number must be entered in the system as follows:In the vendor master record in the case of vendorsFor customers, in Customizing under the settings for withholding tax information for the company code per withholding tax type.
   * Maximum length: 25.
   * @nullable
   */
  withholdingTaxCertificate?: string;
  /**
   * Withholding Tax Code.
   * One or more "withholding tax codes" are assigned to each withholding tax type. One of the things these codes determine is the various percentage rates for the withholding tax type.
   * Note that when processing a business transaction, no more than one withholding tax code can be assigned per withholding tax type. If the business transaction is subject to more than one withholding taxes, these must be represented in the system by defining various withholding tax types.
   * Maximum length: 2.
   * @nullable
   */
  withholdingTaxCode?: string;
  /**
   * Exemption Rate.
   * Rate of exemption from withholding tax.
   * Those persons/activities subject to withholding tax can be exempted from withholding tax up to the percentage rate you enter here. This exemption rate refers to the withholding tax amount itself and not to the whole amount liable to withholding tax (withholding tax base amount).The gross amount of an invoice is 100.00 and the withholding tax base amount is defined as gross. The withholding tax rate is 10% meaning that the withholding tax amount is 10.00. Given an exemption rate of 30%, the withholding tax amount is reduced to 7.00.
   * @nullable
   */
  withholdingTaxExmptPercent?: BigNumber;
  /**
   * Withholding tax identification number.
   * This is a number issued by the tax authorities per withholding tax type.
   * This number must be specified in Customizing either:(a) As part of the withholding tax information defined for the company code, or(b) As part of the withholding tax information defined in the customer or vendor master record.
   * Maximum length: 16.
   * @nullable
   */
  withholdingTaxNumber?: string;
  /**
   * Authorization Group.
   * The authorization group allows extended authorization protection for particular objects. The authorization groups are freely definable. The authorization groups usually occur in authorization objects together with an activity.
   * Maximum length: 4.
   * @nullable
   */
  authorizationGroup?: string;

  /**
   * Returns an entity builder to construct instances `SupplierWithHoldingTax`.
   * @returns A builder that constructs instances of entity type `SupplierWithHoldingTax`.
   */
  static builder(): EntityBuilderType<SupplierWithHoldingTax, SupplierWithHoldingTaxTypeForceMandatory> {
    return Entity.entityBuilder(SupplierWithHoldingTax);
  }

  /**
   * Returns a request builder to construct requests for operations on the `SupplierWithHoldingTax` entity type.
   * @returns A `SupplierWithHoldingTax` request builder.
   */
  static requestBuilder(): SupplierWithHoldingTaxRequestBuilder {
    return new SupplierWithHoldingTaxRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `SupplierWithHoldingTax`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `SupplierWithHoldingTax`.
   */
  static customField(fieldName: string): CustomField<SupplierWithHoldingTax> {
    return Entity.customFieldSelector(fieldName, SupplierWithHoldingTax);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface SupplierWithHoldingTaxType {
  supplier: string;
  companyCode: string;
  withholdingTaxType: string;
  exemptionDateBegin?: Moment;
  exemptionDateEnd?: Moment;
  exemptionReason?: string;
  isWithholdingTaxSubject?: boolean;
  recipientType?: string;
  withholdingTaxCertificate?: string;
  withholdingTaxCode?: string;
  withholdingTaxExmptPercent?: BigNumber;
  withholdingTaxNumber?: string;
  authorizationGroup?: string;
}

export interface SupplierWithHoldingTaxTypeForceMandatory {
  supplier: string;
  companyCode: string;
  withholdingTaxType: string;
  exemptionDateBegin: Moment;
  exemptionDateEnd: Moment;
  exemptionReason: string;
  isWithholdingTaxSubject: boolean;
  recipientType: string;
  withholdingTaxCertificate: string;
  withholdingTaxCode: string;
  withholdingTaxExmptPercent: BigNumber;
  withholdingTaxNumber: string;
  authorizationGroup: string;
}

export namespace SupplierWithHoldingTax {
  /**
   * Static representation of the [[supplier]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPPLIER: StringField<SupplierWithHoldingTax> = new StringField('Supplier', SupplierWithHoldingTax, 'Edm.String');
  /**
   * Static representation of the [[companyCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMPANY_CODE: StringField<SupplierWithHoldingTax> = new StringField('CompanyCode', SupplierWithHoldingTax, 'Edm.String');
  /**
   * Static representation of the [[withholdingTaxType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WITHHOLDING_TAX_TYPE: StringField<SupplierWithHoldingTax> = new StringField('WithholdingTaxType', SupplierWithHoldingTax, 'Edm.String');
  /**
   * Static representation of the [[exemptionDateBegin]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXEMPTION_DATE_BEGIN: DateField<SupplierWithHoldingTax> = new DateField('ExemptionDateBegin', SupplierWithHoldingTax, 'Edm.DateTime');
  /**
   * Static representation of the [[exemptionDateEnd]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXEMPTION_DATE_END: DateField<SupplierWithHoldingTax> = new DateField('ExemptionDateEnd', SupplierWithHoldingTax, 'Edm.DateTime');
  /**
   * Static representation of the [[exemptionReason]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXEMPTION_REASON: StringField<SupplierWithHoldingTax> = new StringField('ExemptionReason', SupplierWithHoldingTax, 'Edm.String');
  /**
   * Static representation of the [[isWithholdingTaxSubject]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_WITHHOLDING_TAX_SUBJECT: BooleanField<SupplierWithHoldingTax> = new BooleanField('IsWithholdingTaxSubject', SupplierWithHoldingTax, 'Edm.Boolean');
  /**
   * Static representation of the [[recipientType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RECIPIENT_TYPE: StringField<SupplierWithHoldingTax> = new StringField('RecipientType', SupplierWithHoldingTax, 'Edm.String');
  /**
   * Static representation of the [[withholdingTaxCertificate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WITHHOLDING_TAX_CERTIFICATE: StringField<SupplierWithHoldingTax> = new StringField('WithholdingTaxCertificate', SupplierWithHoldingTax, 'Edm.String');
  /**
   * Static representation of the [[withholdingTaxCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WITHHOLDING_TAX_CODE: StringField<SupplierWithHoldingTax> = new StringField('WithholdingTaxCode', SupplierWithHoldingTax, 'Edm.String');
  /**
   * Static representation of the [[withholdingTaxExmptPercent]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WITHHOLDING_TAX_EXMPT_PERCENT: BigNumberField<SupplierWithHoldingTax> = new BigNumberField('WithholdingTaxExmptPercent', SupplierWithHoldingTax, 'Edm.Decimal');
  /**
   * Static representation of the [[withholdingTaxNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WITHHOLDING_TAX_NUMBER: StringField<SupplierWithHoldingTax> = new StringField('WithholdingTaxNumber', SupplierWithHoldingTax, 'Edm.String');
  /**
   * Static representation of the [[authorizationGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AUTHORIZATION_GROUP: StringField<SupplierWithHoldingTax> = new StringField('AuthorizationGroup', SupplierWithHoldingTax, 'Edm.String');
  /**
   * All fields of the SupplierWithHoldingTax entity.
   */
  export const _allFields: Array<StringField<SupplierWithHoldingTax> | DateField<SupplierWithHoldingTax> | BooleanField<SupplierWithHoldingTax> | BigNumberField<SupplierWithHoldingTax>> = [
    SupplierWithHoldingTax.SUPPLIER,
    SupplierWithHoldingTax.COMPANY_CODE,
    SupplierWithHoldingTax.WITHHOLDING_TAX_TYPE,
    SupplierWithHoldingTax.EXEMPTION_DATE_BEGIN,
    SupplierWithHoldingTax.EXEMPTION_DATE_END,
    SupplierWithHoldingTax.EXEMPTION_REASON,
    SupplierWithHoldingTax.IS_WITHHOLDING_TAX_SUBJECT,
    SupplierWithHoldingTax.RECIPIENT_TYPE,
    SupplierWithHoldingTax.WITHHOLDING_TAX_CERTIFICATE,
    SupplierWithHoldingTax.WITHHOLDING_TAX_CODE,
    SupplierWithHoldingTax.WITHHOLDING_TAX_EXMPT_PERCENT,
    SupplierWithHoldingTax.WITHHOLDING_TAX_NUMBER,
    SupplierWithHoldingTax.AUTHORIZATION_GROUP
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<SupplierWithHoldingTax> = new AllFields('*', SupplierWithHoldingTax);
  /**
   * All key fields of the SupplierWithHoldingTax entity.
   */
  export const _keyFields: Array<Field<SupplierWithHoldingTax>> = [SupplierWithHoldingTax.SUPPLIER, SupplierWithHoldingTax.COMPANY_CODE, SupplierWithHoldingTax.WITHHOLDING_TAX_TYPE];
  /**
   * Mapping of all key field names to the respective static field property SupplierWithHoldingTax.
   */
  export const _keys: { [keys: string]: Field<SupplierWithHoldingTax> } = SupplierWithHoldingTax._keyFields.reduce((acc: { [keys: string]: Field<SupplierWithHoldingTax> }, field: Field<SupplierWithHoldingTax>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
