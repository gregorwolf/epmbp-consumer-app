/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SupplierWithHoldingTaxRequestBuilder } from './SupplierWithHoldingTaxRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, Constructable, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field, FieldBuilder, OrderableEdmTypeField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "A_SupplierWithHoldingTax" of service "API_BUSINESS_PARTNER".
 */
export class SupplierWithHoldingTax extends EntityV2 implements SupplierWithHoldingTaxType {
  /**
   * Technical entity name for SupplierWithHoldingTax.
   */
  static _entityName = 'A_SupplierWithHoldingTax';
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
   * Indicator for Withholding Tax Type.
   * Maximum length: 2.
   */
  withholdingTaxType!: string;
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
   * Indicator: Subject to Withholding Tax?.
   * @nullable
   */
  isWithholdingTaxSubject?: boolean;
  /**
   * Type of Recipient.
   * Maximum length: 2.
   * @nullable
   */
  recipientType?: string;
  /**
   * Exemption Certificate Number.
   * Maximum length: 25.
   * @nullable
   */
  withholdingTaxCertificate?: string;
  /**
   * Withholding Tax Code.
   * Maximum length: 2.
   * @nullable
   */
  withholdingTaxCode?: string;
  /**
   * Exemption Rate.
   * @nullable
   */
  withholdingTaxExmptPercent?: BigNumber;
  /**
   * Withholding tax identification number.
   * Maximum length: 16.
   * @nullable
   */
  withholdingTaxNumber?: string;
  /**
   * Authorization Group.
   * Maximum length: 4.
   * @nullable
   */
  authorizationGroup?: string;

  /**
   * Returns an entity builder to construct instances of `SupplierWithHoldingTax`.
   * @returns A builder that constructs instances of entity type `SupplierWithHoldingTax`.
   */
  static builder(): EntityBuilderType<SupplierWithHoldingTax, SupplierWithHoldingTaxType> {
    return EntityV2.entityBuilder(SupplierWithHoldingTax);
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
  static customField(fieldName: string): CustomFieldV2<SupplierWithHoldingTax> {
    return EntityV2.customFieldSelector(fieldName, SupplierWithHoldingTax);
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
  exemptionDateBegin?: Moment | null;
  exemptionDateEnd?: Moment | null;
  exemptionReason?: string | null;
  isWithholdingTaxSubject?: boolean | null;
  recipientType?: string | null;
  withholdingTaxCertificate?: string | null;
  withholdingTaxCode?: string | null;
  withholdingTaxExmptPercent?: BigNumber | null;
  withholdingTaxNumber?: string | null;
  authorizationGroup?: string | null;
}

export namespace SupplierWithHoldingTax {
  const _fieldBuilder: FieldBuilder<Constructable<SupplierWithHoldingTax>> = new FieldBuilder(SupplierWithHoldingTax);
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
   * Static representation of the [[withholdingTaxType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WITHHOLDING_TAX_TYPE = _fieldBuilder.buildEdmTypeField('WithholdingTaxType', 'Edm.String', false);
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
   * Static representation of the [[isWithholdingTaxSubject]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_WITHHOLDING_TAX_SUBJECT = _fieldBuilder.buildEdmTypeField('IsWithholdingTaxSubject', 'Edm.Boolean', true);
  /**
   * Static representation of the [[recipientType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RECIPIENT_TYPE = _fieldBuilder.buildEdmTypeField('RecipientType', 'Edm.String', true);
  /**
   * Static representation of the [[withholdingTaxCertificate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WITHHOLDING_TAX_CERTIFICATE = _fieldBuilder.buildEdmTypeField('WithholdingTaxCertificate', 'Edm.String', true);
  /**
   * Static representation of the [[withholdingTaxCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WITHHOLDING_TAX_CODE = _fieldBuilder.buildEdmTypeField('WithholdingTaxCode', 'Edm.String', true);
  /**
   * Static representation of the [[withholdingTaxExmptPercent]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WITHHOLDING_TAX_EXMPT_PERCENT = _fieldBuilder.buildEdmTypeField('WithholdingTaxExmptPercent', 'Edm.Decimal', true);
  /**
   * Static representation of the [[withholdingTaxNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WITHHOLDING_TAX_NUMBER = _fieldBuilder.buildEdmTypeField('WithholdingTaxNumber', 'Edm.String', true);
  /**
   * Static representation of the [[authorizationGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AUTHORIZATION_GROUP = _fieldBuilder.buildEdmTypeField('AuthorizationGroup', 'Edm.String', true);
  /**
   * All fields of the SupplierWithHoldingTax entity.
   */
  export const _allFields: Array<EdmTypeField<SupplierWithHoldingTax, 'Edm.String', false, true> | OrderableEdmTypeField<SupplierWithHoldingTax, 'Edm.DateTime', true, true> | EdmTypeField<SupplierWithHoldingTax, 'Edm.String', true, true> | EdmTypeField<SupplierWithHoldingTax, 'Edm.Boolean', true, true> | OrderableEdmTypeField<SupplierWithHoldingTax, 'Edm.Decimal', true, true>> = [
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
  export const _keyFields: Array<Field<SupplierWithHoldingTax, boolean, boolean>> = [SupplierWithHoldingTax.SUPPLIER, SupplierWithHoldingTax.COMPANY_CODE, SupplierWithHoldingTax.WITHHOLDING_TAX_TYPE];
  /**
   * Mapping of all key field names to the respective static field property SupplierWithHoldingTax.
   */
  export const _keys: { [keys: string]: Field<SupplierWithHoldingTax, boolean, boolean> } = SupplierWithHoldingTax._keyFields.reduce((acc: { [keys: string]: Field<SupplierWithHoldingTax, boolean, boolean> }, field: Field<SupplierWithHoldingTax, boolean, boolean>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
