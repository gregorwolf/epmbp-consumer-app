/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CustomerWithHoldingTaxRequestBuilder } from './CustomerWithHoldingTaxRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, Constructable, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field, FieldBuilder, OrderableEdmTypeField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "A_CustomerWithHoldingTax" of service "API_BUSINESS_PARTNER".
 */
export class CustomerWithHoldingTax extends EntityV2 implements CustomerWithHoldingTaxType {
  /**
   * Technical entity name for CustomerWithHoldingTax.
   */
  static _entityName = 'A_CustomerWithHoldingTax';
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
   * Indicator for Withholding Tax Type.
   * Maximum length: 2.
   */
  withholdingTaxType!: string;
  /**
   * Withholding Tax Code.
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
   * @nullable
   */
  obligationDateBegin?: Moment;
  /**
   * Obligated to Withhold Tax Until.
   * @nullable
   */
  obligationDateEnd?: Moment;
  /**
   * Withholding tax identification number.
   * Maximum length: 16.
   * @nullable
   */
  withholdingTaxNumber?: string;
  /**
   * Exemption Certificate Number.
   * Maximum length: 25.
   * @nullable
   */
  withholdingTaxCertificate?: string;
  /**
   * Exemption Rate.
   * @nullable
   */
  withholdingTaxExmptPercent?: BigNumber;
  /**
   * Date on Which Exemption Begins.
   * @nullable
   */
  exemptionDateBegin?: Moment;
  /**
   * Date on Which Exemption Ends.
   * @nullable
   */
  exemptionDateEnd?: Moment;
  /**
   * Reason for Exemption.
   * Maximum length: 2.
   * @nullable
   */
  exemptionReason?: string;
  /**
   * Authorization Group.
   * Maximum length: 4.
   * @nullable
   */
  authorizationGroup?: string;

  /**
   * Returns an entity builder to construct instances of `CustomerWithHoldingTax`.
   * @returns A builder that constructs instances of entity type `CustomerWithHoldingTax`.
   */
  static builder(): EntityBuilderType<CustomerWithHoldingTax, CustomerWithHoldingTaxType> {
    return EntityV2.entityBuilder(CustomerWithHoldingTax);
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
  static customField(fieldName: string): CustomFieldV2<CustomerWithHoldingTax> {
    return EntityV2.customFieldSelector(fieldName, CustomerWithHoldingTax);
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
  withholdingTaxCode?: string | null;
  withholdingTaxAgent?: boolean | null;
  obligationDateBegin?: Moment | null;
  obligationDateEnd?: Moment | null;
  withholdingTaxNumber?: string | null;
  withholdingTaxCertificate?: string | null;
  withholdingTaxExmptPercent?: BigNumber | null;
  exemptionDateBegin?: Moment | null;
  exemptionDateEnd?: Moment | null;
  exemptionReason?: string | null;
  authorizationGroup?: string | null;
}

export namespace CustomerWithHoldingTax {
  const _fieldBuilder: FieldBuilder<Constructable<CustomerWithHoldingTax>> = new FieldBuilder(CustomerWithHoldingTax);
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
   * Static representation of the [[withholdingTaxType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WITHHOLDING_TAX_TYPE = _fieldBuilder.buildEdmTypeField('WithholdingTaxType', 'Edm.String', false);
  /**
   * Static representation of the [[withholdingTaxCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WITHHOLDING_TAX_CODE = _fieldBuilder.buildEdmTypeField('WithholdingTaxCode', 'Edm.String', true);
  /**
   * Static representation of the [[withholdingTaxAgent]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WITHHOLDING_TAX_AGENT = _fieldBuilder.buildEdmTypeField('WithholdingTaxAgent', 'Edm.Boolean', true);
  /**
   * Static representation of the [[obligationDateBegin]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OBLIGATION_DATE_BEGIN = _fieldBuilder.buildEdmTypeField('ObligationDateBegin', 'Edm.DateTime', true);
  /**
   * Static representation of the [[obligationDateEnd]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OBLIGATION_DATE_END = _fieldBuilder.buildEdmTypeField('ObligationDateEnd', 'Edm.DateTime', true);
  /**
   * Static representation of the [[withholdingTaxNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WITHHOLDING_TAX_NUMBER = _fieldBuilder.buildEdmTypeField('WithholdingTaxNumber', 'Edm.String', true);
  /**
   * Static representation of the [[withholdingTaxCertificate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WITHHOLDING_TAX_CERTIFICATE = _fieldBuilder.buildEdmTypeField('WithholdingTaxCertificate', 'Edm.String', true);
  /**
   * Static representation of the [[withholdingTaxExmptPercent]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WITHHOLDING_TAX_EXMPT_PERCENT = _fieldBuilder.buildEdmTypeField('WithholdingTaxExmptPercent', 'Edm.Decimal', true);
  /**
   * Static representation of the [[exemptionDateBegin]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXEMPTION_DATE_BEGIN = _fieldBuilder.buildEdmTypeField('ExemptionDateBegin', 'Edm.DateTime', true);
  /**
   * Static representation of the [[exemptionDateEnd]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXEMPTION_DATE_END = _fieldBuilder.buildEdmTypeField('ExemptionDateEnd', 'Edm.DateTime', true);
  /**
   * Static representation of the [[exemptionReason]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXEMPTION_REASON = _fieldBuilder.buildEdmTypeField('ExemptionReason', 'Edm.String', true);
  /**
   * Static representation of the [[authorizationGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AUTHORIZATION_GROUP = _fieldBuilder.buildEdmTypeField('AuthorizationGroup', 'Edm.String', true);
  /**
   * All fields of the CustomerWithHoldingTax entity.
   */
  export const _allFields: Array<EdmTypeField<CustomerWithHoldingTax, 'Edm.String', false, true> | EdmTypeField<CustomerWithHoldingTax, 'Edm.String', true, true> | EdmTypeField<CustomerWithHoldingTax, 'Edm.Boolean', true, true> | OrderableEdmTypeField<CustomerWithHoldingTax, 'Edm.DateTime', true, true> | OrderableEdmTypeField<CustomerWithHoldingTax, 'Edm.Decimal', true, true>> = [
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
  export const _keyFields: Array<Field<CustomerWithHoldingTax, boolean, boolean>> = [CustomerWithHoldingTax.CUSTOMER, CustomerWithHoldingTax.COMPANY_CODE, CustomerWithHoldingTax.WITHHOLDING_TAX_TYPE];
  /**
   * Mapping of all key field names to the respective static field property CustomerWithHoldingTax.
   */
  export const _keys: { [keys: string]: Field<CustomerWithHoldingTax, boolean, boolean> } = CustomerWithHoldingTax._keyFields.reduce((acc: { [keys: string]: Field<CustomerWithHoldingTax, boolean, boolean> }, field: Field<CustomerWithHoldingTax, boolean, boolean>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
