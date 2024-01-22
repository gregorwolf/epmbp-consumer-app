/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SlsPrcgConditionRecordRequestBuilder } from './SlsPrcgConditionRecordRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, Constructable, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field, FieldBuilder, Link, OrderableEdmTypeField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "A_SlsPrcgConditionRecord" of service "API_SLSPRICINGCONDITIONRECORD_SRV".
 */
export class SlsPrcgConditionRecord extends EntityV2 implements SlsPrcgConditionRecordType {
  /**
   * Technical entity name for SlsPrcgConditionRecord.
   */
  static _entityName = 'A_SlsPrcgConditionRecord';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/sap/opu/odata/sap/API_SLSPRICINGCONDITIONRECORD_SRV';
  /**
   * Number of Condition Record.
   * Maximum length: 10.
   */
  conditionRecord!: string;
  /**
   * Sequential number of the condition.
   * Maximum length: 2.
   * @nullable
   */
  conditionSequentialNumber?: string;
  /**
   * Condition Table.
   * Maximum length: 3.
   * @nullable
   */
  conditionTable?: string;
  /**
   * Application.
   * Maximum length: 2.
   * @nullable
   */
  conditionApplication?: string;
  /**
   * Condition Type.
   * Maximum length: 4.
   * @nullable
   */
  conditionType?: string;
  /**
   * Valid To Date.
   * @nullable
   */
  conditionValidityEndDate?: Moment;
  /**
   * Valid-From Date.
   * @nullable
   */
  conditionValidityStartDate?: Moment;
  /**
   * Name of Person Responsible for Creating the Object.
   * Maximum length: 12.
   * @nullable
   */
  createdByUser?: string;
  /**
   * Record Created On.
   * @nullable
   */
  creationDate?: Moment;
  /**
   * Number of texts.
   * Maximum length: 10.
   * @nullable
   */
  conditionTextId?: string;
  /**
   * Scale Type.
   * Maximum length: 1.
   * @nullable
   */
  pricingScaleType?: string;
  /**
   * Scale Base Type.
   * Maximum length: 1.
   * @nullable
   */
  pricingScaleBasis?: string;
  /**
   * Condition Scale Quantity.
   * @nullable
   */
  conditionScaleQuantity?: BigNumber;
  /**
   * Condition Scale Unit of Measure.
   * Maximum length: 3.
   * @nullable
   */
  conditionScaleQuantityUnit?: string;
  /**
   * Scale Value.
   * @nullable
   */
  conditionScaleAmount?: BigNumber;
  /**
   * Scale Currency.
   * Maximum length: 5.
   * @nullable
   */
  conditionScaleAmountCurrency?: string;
  /**
   * Calculation Type for Condition.
   * Maximum length: 1.
   * @nullable
   */
  conditionCalculationType?: string;
  /**
   * Condition amount or percentage where no scale exists.
   * @nullable
   */
  conditionRateValue?: BigNumber;
  /**
   * Condition Unit (Currency or Percentage).
   * Maximum length: 5.
   * @nullable
   */
  conditionRateValueUnit?: string;
  /**
   * Condition Ratio (in Percent or Per Mille).
   * @nullable
   */
  conditionRateRatio?: BigNumber;
  /**
   * Unit of Measure.
   * Maximum length: 3.
   * @nullable
   */
  conditionRateRatioUnit?: string;
  /**
   * Condition Amount or Percentage.
   * @nullable
   */
  conditionRateAmount?: BigNumber;
  /**
   * Condition Unit (Currency or Percentage).
   * Maximum length: 5.
   * @nullable
   */
  conditionCurrency?: string;
  /**
   * Condition Pricing Unit.
   * @nullable
   */
  conditionQuantity?: BigNumber;
  /**
   * Condition Unit.
   * Maximum length: 3.
   * @nullable
   */
  conditionQuantityUnit?: string;
  /**
   * Numerator for converting condition units to base units.
   * @nullable
   */
  conditionToBaseQtyNmrtr?: BigNumber;
  /**
   * Denominator for converting condition units to base units.
   * @nullable
   */
  conditionToBaseQtyDnmntr?: BigNumber;
  /**
   * Base Unit of Measure.
   * Maximum length: 3.
   * @nullable
   */
  baseUnit?: string;
  /**
   * Lower limit of the condition rate/amount.
   * @nullable
   */
  conditionLowerLimit?: BigNumber;
  /**
   * Condition Amount or Percentage.
   * @nullable
   */
  conditionLowerLimitAmount?: BigNumber;
  /**
   * Condition Ratio (in Percent or Per Mille).
   * @nullable
   */
  conditionLowerLimitRatio?: BigNumber;
  /**
   * Upper limit for the condition rate.
   * @nullable
   */
  conditionUpperLimit?: BigNumber;
  /**
   * Condition Amount or Percentage.
   * @nullable
   */
  conditionUpperLimitAmount?: BigNumber;
  /**
   * Condition Ratio (in Percent or Per Mille).
   * @nullable
   */
  conditionUpperLimitRatio?: BigNumber;
  /**
   * Condition Currency (for Cumulation Fields).
   * Maximum length: 5.
   * @nullable
   */
  conditionAlternativeCurrency?: string;
  /**
   * Condition exclusion indicator.
   * Maximum length: 1.
   * @nullable
   */
  conditionExclusion?: string;
  /**
   * Deletion Indicator for Condition Record.
   * @nullable
   */
  conditionIsDeleted?: boolean;
  /**
   * Additional Value Days.
   * Maximum length: 2.
   * @nullable
   */
  additionalValueDays?: string;
  /**
   * Fixed Value Date.
   * @nullable
   */
  fixedValueDate?: Moment;
  /**
   * Key for Terms of Payment.
   * Maximum length: 4.
   * @nullable
   */
  paymentTerms?: string;
  /**
   * Maximum number of sales orders per condition record.
   * Maximum length: 2.
   * @nullable
   */
  cndnMaxNumberOfSalesOrders?: string;
  /**
   * Minimum condition base value.
   * @nullable
   */
  minimumConditionBasisValue?: BigNumber;
  /**
   * Maximum condition base value.
   * @nullable
   */
  maximumConditionBasisValue?: BigNumber;
  /**
   * Maximum condition value.
   * @nullable
   */
  maximumConditionAmount?: BigNumber;
  /**
   * Number of incremental scale.
   * Maximum length: 4.
   * @nullable
   */
  incrementalScale?: string;
  /**
   * Scale number for pricing.
   * Maximum length: 4.
   * @nullable
   */
  pricingScaleLine?: string;
  /**
   * Release Status.
   * Maximum length: 1.
   * @nullable
   */
  conditionReleaseStatus?: string;
  /**
   * Approval Request for Price Conditions.
   * Maximum length: 10.
   * @nullable
   */
  salesPriceApprovalRequest?: string;
  /**
   * Reason for Changing Condition Record.
   * Maximum length: 3.
   * @nullable
   */
  conditionChangeReason?: string;
  /**
   * Previously Approved Condition Record.
   * Maximum length: 10.
   * @nullable
   */
  prevApprovedConditionRecord?: string;
  /**
   * Tax on Sales/Purchases Code.
   * Maximum length: 2.
   * @nullable
   */
  conditionTaxCode?: string;
  /**
   * Withholding Tax Code.
   * Maximum length: 2.
   * @nullable
   */
  conditionWithholdingTaxCode?: string;
  /**
   * Tax Exemption License Number.
   * Maximum length: 24.
   * @nullable
   */
  taxExemptionLicense?: string;
  /**
   * Date License Granted.
   * @nullable
   */
  licenseGrantDate?: Moment;
  /**
   * E Tag.
   * Maximum length: 40.
   * @nullable
   */
  eTag?: string;
  /**
   * One-to-many navigation property to the [[SlsPrcgCndnRecdSuplmnt]] entity.
   */
  toSlsPrcgCndnRecdSuplmnt!: SlsPrcgCndnRecdSuplmnt[];
  /**
   * One-to-many navigation property to the [[SlsPrcgCndnRecdValidity]] entity.
   */
  toSlsPrcgCndnRecdValidity!: SlsPrcgCndnRecdValidity[];
  /**
   * One-to-many navigation property to the [[SlsPrcgCndnRecordScale]] entity.
   */
  toSlsPrcgCndnRecordScale!: SlsPrcgCndnRecordScale[];
  /**
   * One-to-many navigation property to the [[SlsPrcgConditionRecordText]] entity.
   */
  toSlsPrcgConditionRecordText!: SlsPrcgConditionRecordText[];

  /**
   * Returns an entity builder to construct instances of `SlsPrcgConditionRecord`.
   * @returns A builder that constructs instances of entity type `SlsPrcgConditionRecord`.
   */
  static builder(): EntityBuilderType<SlsPrcgConditionRecord, SlsPrcgConditionRecordType> {
    return EntityV2.entityBuilder(SlsPrcgConditionRecord);
  }

  /**
   * Returns a request builder to construct requests for operations on the `SlsPrcgConditionRecord` entity type.
   * @returns A `SlsPrcgConditionRecord` request builder.
   */
  static requestBuilder(): SlsPrcgConditionRecordRequestBuilder {
    return new SlsPrcgConditionRecordRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `SlsPrcgConditionRecord`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `SlsPrcgConditionRecord`.
   */
  static customField(fieldName: string): CustomFieldV2<SlsPrcgConditionRecord> {
    return EntityV2.customFieldSelector(fieldName, SlsPrcgConditionRecord);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { SlsPrcgCndnRecdSuplmnt, SlsPrcgCndnRecdSuplmntType } from './SlsPrcgCndnRecdSuplmnt';
import { SlsPrcgCndnRecdValidity, SlsPrcgCndnRecdValidityType } from './SlsPrcgCndnRecdValidity';
import { SlsPrcgCndnRecordScale, SlsPrcgCndnRecordScaleType } from './SlsPrcgCndnRecordScale';
import { SlsPrcgConditionRecordText, SlsPrcgConditionRecordTextType } from './SlsPrcgConditionRecordText';

export interface SlsPrcgConditionRecordType {
  conditionRecord: string;
  conditionSequentialNumber?: string | null;
  conditionTable?: string | null;
  conditionApplication?: string | null;
  conditionType?: string | null;
  conditionValidityEndDate?: Moment | null;
  conditionValidityStartDate?: Moment | null;
  createdByUser?: string | null;
  creationDate?: Moment | null;
  conditionTextId?: string | null;
  pricingScaleType?: string | null;
  pricingScaleBasis?: string | null;
  conditionScaleQuantity?: BigNumber | null;
  conditionScaleQuantityUnit?: string | null;
  conditionScaleAmount?: BigNumber | null;
  conditionScaleAmountCurrency?: string | null;
  conditionCalculationType?: string | null;
  conditionRateValue?: BigNumber | null;
  conditionRateValueUnit?: string | null;
  conditionRateRatio?: BigNumber | null;
  conditionRateRatioUnit?: string | null;
  conditionRateAmount?: BigNumber | null;
  conditionCurrency?: string | null;
  conditionQuantity?: BigNumber | null;
  conditionQuantityUnit?: string | null;
  conditionToBaseQtyNmrtr?: BigNumber | null;
  conditionToBaseQtyDnmntr?: BigNumber | null;
  baseUnit?: string | null;
  conditionLowerLimit?: BigNumber | null;
  conditionLowerLimitAmount?: BigNumber | null;
  conditionLowerLimitRatio?: BigNumber | null;
  conditionUpperLimit?: BigNumber | null;
  conditionUpperLimitAmount?: BigNumber | null;
  conditionUpperLimitRatio?: BigNumber | null;
  conditionAlternativeCurrency?: string | null;
  conditionExclusion?: string | null;
  conditionIsDeleted?: boolean | null;
  additionalValueDays?: string | null;
  fixedValueDate?: Moment | null;
  paymentTerms?: string | null;
  cndnMaxNumberOfSalesOrders?: string | null;
  minimumConditionBasisValue?: BigNumber | null;
  maximumConditionBasisValue?: BigNumber | null;
  maximumConditionAmount?: BigNumber | null;
  incrementalScale?: string | null;
  pricingScaleLine?: string | null;
  conditionReleaseStatus?: string | null;
  salesPriceApprovalRequest?: string | null;
  conditionChangeReason?: string | null;
  prevApprovedConditionRecord?: string | null;
  conditionTaxCode?: string | null;
  conditionWithholdingTaxCode?: string | null;
  taxExemptionLicense?: string | null;
  licenseGrantDate?: Moment | null;
  eTag?: string | null;
  toSlsPrcgCndnRecdSuplmnt: SlsPrcgCndnRecdSuplmntType[];
  toSlsPrcgCndnRecdValidity: SlsPrcgCndnRecdValidityType[];
  toSlsPrcgCndnRecordScale: SlsPrcgCndnRecordScaleType[];
  toSlsPrcgConditionRecordText: SlsPrcgConditionRecordTextType[];
}

export namespace SlsPrcgConditionRecord {
  const _fieldBuilder: FieldBuilder<Constructable<SlsPrcgConditionRecord>> = new FieldBuilder(SlsPrcgConditionRecord);
  /**
   * Static representation of the [[conditionRecord]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONDITION_RECORD = _fieldBuilder.buildEdmTypeField('ConditionRecord', 'Edm.String', false);
  /**
   * Static representation of the [[conditionSequentialNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONDITION_SEQUENTIAL_NUMBER = _fieldBuilder.buildEdmTypeField('ConditionSequentialNumber', 'Edm.String', true);
  /**
   * Static representation of the [[conditionTable]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONDITION_TABLE = _fieldBuilder.buildEdmTypeField('ConditionTable', 'Edm.String', true);
  /**
   * Static representation of the [[conditionApplication]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONDITION_APPLICATION = _fieldBuilder.buildEdmTypeField('ConditionApplication', 'Edm.String', true);
  /**
   * Static representation of the [[conditionType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONDITION_TYPE = _fieldBuilder.buildEdmTypeField('ConditionType', 'Edm.String', true);
  /**
   * Static representation of the [[conditionValidityEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONDITION_VALIDITY_END_DATE = _fieldBuilder.buildEdmTypeField('ConditionValidityEndDate', 'Edm.DateTime', true);
  /**
   * Static representation of the [[conditionValidityStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONDITION_VALIDITY_START_DATE = _fieldBuilder.buildEdmTypeField('ConditionValidityStartDate', 'Edm.DateTime', true);
  /**
   * Static representation of the [[createdByUser]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_USER = _fieldBuilder.buildEdmTypeField('CreatedByUser', 'Edm.String', true);
  /**
   * Static representation of the [[creationDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATION_DATE = _fieldBuilder.buildEdmTypeField('CreationDate', 'Edm.DateTime', true);
  /**
   * Static representation of the [[conditionTextId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONDITION_TEXT_ID = _fieldBuilder.buildEdmTypeField('ConditionTextID', 'Edm.String', true);
  /**
   * Static representation of the [[pricingScaleType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRICING_SCALE_TYPE = _fieldBuilder.buildEdmTypeField('PricingScaleType', 'Edm.String', true);
  /**
   * Static representation of the [[pricingScaleBasis]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRICING_SCALE_BASIS = _fieldBuilder.buildEdmTypeField('PricingScaleBasis', 'Edm.String', true);
  /**
   * Static representation of the [[conditionScaleQuantity]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONDITION_SCALE_QUANTITY = _fieldBuilder.buildEdmTypeField('ConditionScaleQuantity', 'Edm.Decimal', true);
  /**
   * Static representation of the [[conditionScaleQuantityUnit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONDITION_SCALE_QUANTITY_UNIT = _fieldBuilder.buildEdmTypeField('ConditionScaleQuantityUnit', 'Edm.String', true);
  /**
   * Static representation of the [[conditionScaleAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONDITION_SCALE_AMOUNT = _fieldBuilder.buildEdmTypeField('ConditionScaleAmount', 'Edm.Decimal', true);
  /**
   * Static representation of the [[conditionScaleAmountCurrency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONDITION_SCALE_AMOUNT_CURRENCY = _fieldBuilder.buildEdmTypeField('ConditionScaleAmountCurrency', 'Edm.String', true);
  /**
   * Static representation of the [[conditionCalculationType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONDITION_CALCULATION_TYPE = _fieldBuilder.buildEdmTypeField('ConditionCalculationType', 'Edm.String', true);
  /**
   * Static representation of the [[conditionRateValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONDITION_RATE_VALUE = _fieldBuilder.buildEdmTypeField('ConditionRateValue', 'Edm.Decimal', true);
  /**
   * Static representation of the [[conditionRateValueUnit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONDITION_RATE_VALUE_UNIT = _fieldBuilder.buildEdmTypeField('ConditionRateValueUnit', 'Edm.String', true);
  /**
   * Static representation of the [[conditionRateRatio]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONDITION_RATE_RATIO = _fieldBuilder.buildEdmTypeField('ConditionRateRatio', 'Edm.Decimal', true);
  /**
   * Static representation of the [[conditionRateRatioUnit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONDITION_RATE_RATIO_UNIT = _fieldBuilder.buildEdmTypeField('ConditionRateRatioUnit', 'Edm.String', true);
  /**
   * Static representation of the [[conditionRateAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONDITION_RATE_AMOUNT = _fieldBuilder.buildEdmTypeField('ConditionRateAmount', 'Edm.Decimal', true);
  /**
   * Static representation of the [[conditionCurrency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONDITION_CURRENCY = _fieldBuilder.buildEdmTypeField('ConditionCurrency', 'Edm.String', true);
  /**
   * Static representation of the [[conditionQuantity]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONDITION_QUANTITY = _fieldBuilder.buildEdmTypeField('ConditionQuantity', 'Edm.Decimal', true);
  /**
   * Static representation of the [[conditionQuantityUnit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONDITION_QUANTITY_UNIT = _fieldBuilder.buildEdmTypeField('ConditionQuantityUnit', 'Edm.String', true);
  /**
   * Static representation of the [[conditionToBaseQtyNmrtr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONDITION_TO_BASE_QTY_NMRTR = _fieldBuilder.buildEdmTypeField('ConditionToBaseQtyNmrtr', 'Edm.Decimal', true);
  /**
   * Static representation of the [[conditionToBaseQtyDnmntr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONDITION_TO_BASE_QTY_DNMNTR = _fieldBuilder.buildEdmTypeField('ConditionToBaseQtyDnmntr', 'Edm.Decimal', true);
  /**
   * Static representation of the [[baseUnit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BASE_UNIT = _fieldBuilder.buildEdmTypeField('BaseUnit', 'Edm.String', true);
  /**
   * Static representation of the [[conditionLowerLimit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONDITION_LOWER_LIMIT = _fieldBuilder.buildEdmTypeField('ConditionLowerLimit', 'Edm.Decimal', true);
  /**
   * Static representation of the [[conditionLowerLimitAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONDITION_LOWER_LIMIT_AMOUNT = _fieldBuilder.buildEdmTypeField('ConditionLowerLimitAmount', 'Edm.Decimal', true);
  /**
   * Static representation of the [[conditionLowerLimitRatio]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONDITION_LOWER_LIMIT_RATIO = _fieldBuilder.buildEdmTypeField('ConditionLowerLimitRatio', 'Edm.Decimal', true);
  /**
   * Static representation of the [[conditionUpperLimit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONDITION_UPPER_LIMIT = _fieldBuilder.buildEdmTypeField('ConditionUpperLimit', 'Edm.Decimal', true);
  /**
   * Static representation of the [[conditionUpperLimitAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONDITION_UPPER_LIMIT_AMOUNT = _fieldBuilder.buildEdmTypeField('ConditionUpperLimitAmount', 'Edm.Decimal', true);
  /**
   * Static representation of the [[conditionUpperLimitRatio]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONDITION_UPPER_LIMIT_RATIO = _fieldBuilder.buildEdmTypeField('ConditionUpperLimitRatio', 'Edm.Decimal', true);
  /**
   * Static representation of the [[conditionAlternativeCurrency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONDITION_ALTERNATIVE_CURRENCY = _fieldBuilder.buildEdmTypeField('ConditionAlternativeCurrency', 'Edm.String', true);
  /**
   * Static representation of the [[conditionExclusion]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONDITION_EXCLUSION = _fieldBuilder.buildEdmTypeField('ConditionExclusion', 'Edm.String', true);
  /**
   * Static representation of the [[conditionIsDeleted]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONDITION_IS_DELETED = _fieldBuilder.buildEdmTypeField('ConditionIsDeleted', 'Edm.Boolean', true);
  /**
   * Static representation of the [[additionalValueDays]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDITIONAL_VALUE_DAYS = _fieldBuilder.buildEdmTypeField('AdditionalValueDays', 'Edm.String', true);
  /**
   * Static representation of the [[fixedValueDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FIXED_VALUE_DATE = _fieldBuilder.buildEdmTypeField('FixedValueDate', 'Edm.DateTime', true);
  /**
   * Static representation of the [[paymentTerms]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_TERMS = _fieldBuilder.buildEdmTypeField('PaymentTerms', 'Edm.String', true);
  /**
   * Static representation of the [[cndnMaxNumberOfSalesOrders]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CNDN_MAX_NUMBER_OF_SALES_ORDERS = _fieldBuilder.buildEdmTypeField('CndnMaxNumberOfSalesOrders', 'Edm.String', true);
  /**
   * Static representation of the [[minimumConditionBasisValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MINIMUM_CONDITION_BASIS_VALUE = _fieldBuilder.buildEdmTypeField('MinimumConditionBasisValue', 'Edm.Decimal', true);
  /**
   * Static representation of the [[maximumConditionBasisValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MAXIMUM_CONDITION_BASIS_VALUE = _fieldBuilder.buildEdmTypeField('MaximumConditionBasisValue', 'Edm.Decimal', true);
  /**
   * Static representation of the [[maximumConditionAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MAXIMUM_CONDITION_AMOUNT = _fieldBuilder.buildEdmTypeField('MaximumConditionAmount', 'Edm.Decimal', true);
  /**
   * Static representation of the [[incrementalScale]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INCREMENTAL_SCALE = _fieldBuilder.buildEdmTypeField('IncrementalScale', 'Edm.String', true);
  /**
   * Static representation of the [[pricingScaleLine]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRICING_SCALE_LINE = _fieldBuilder.buildEdmTypeField('PricingScaleLine', 'Edm.String', true);
  /**
   * Static representation of the [[conditionReleaseStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONDITION_RELEASE_STATUS = _fieldBuilder.buildEdmTypeField('ConditionReleaseStatus', 'Edm.String', true);
  /**
   * Static representation of the [[salesPriceApprovalRequest]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_PRICE_APPROVAL_REQUEST = _fieldBuilder.buildEdmTypeField('SalesPriceApprovalRequest', 'Edm.String', true);
  /**
   * Static representation of the [[conditionChangeReason]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONDITION_CHANGE_REASON = _fieldBuilder.buildEdmTypeField('ConditionChangeReason', 'Edm.String', true);
  /**
   * Static representation of the [[prevApprovedConditionRecord]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PREV_APPROVED_CONDITION_RECORD = _fieldBuilder.buildEdmTypeField('PrevApprovedConditionRecord', 'Edm.String', true);
  /**
   * Static representation of the [[conditionTaxCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONDITION_TAX_CODE = _fieldBuilder.buildEdmTypeField('ConditionTaxCode', 'Edm.String', true);
  /**
   * Static representation of the [[conditionWithholdingTaxCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONDITION_WITHHOLDING_TAX_CODE = _fieldBuilder.buildEdmTypeField('ConditionWithholdingTaxCode', 'Edm.String', true);
  /**
   * Static representation of the [[taxExemptionLicense]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_EXEMPTION_LICENSE = _fieldBuilder.buildEdmTypeField('TaxExemptionLicense', 'Edm.String', true);
  /**
   * Static representation of the [[licenseGrantDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LICENSE_GRANT_DATE = _fieldBuilder.buildEdmTypeField('LicenseGrantDate', 'Edm.DateTime', true);
  /**
   * Static representation of the [[eTag]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_TAG = _fieldBuilder.buildEdmTypeField('ETag', 'Edm.String', true);
  /**
   * Static representation of the one-to-many navigation property [[toSlsPrcgCndnRecdSuplmnt]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_SLS_PRCG_CNDN_RECD_SUPLMNT: Link<SlsPrcgConditionRecord, SlsPrcgCndnRecdSuplmnt> = new Link('to_SlsPrcgCndnRecdSuplmnt', SlsPrcgConditionRecord, SlsPrcgCndnRecdSuplmnt);
  /**
   * Static representation of the one-to-many navigation property [[toSlsPrcgCndnRecdValidity]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_SLS_PRCG_CNDN_RECD_VALIDITY: Link<SlsPrcgConditionRecord, SlsPrcgCndnRecdValidity> = new Link('to_SlsPrcgCndnRecdValidity', SlsPrcgConditionRecord, SlsPrcgCndnRecdValidity);
  /**
   * Static representation of the one-to-many navigation property [[toSlsPrcgCndnRecordScale]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_SLS_PRCG_CNDN_RECORD_SCALE: Link<SlsPrcgConditionRecord, SlsPrcgCndnRecordScale> = new Link('to_SlsPrcgCndnRecordScale', SlsPrcgConditionRecord, SlsPrcgCndnRecordScale);
  /**
   * Static representation of the one-to-many navigation property [[toSlsPrcgConditionRecordText]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_SLS_PRCG_CONDITION_RECORD_TEXT: Link<SlsPrcgConditionRecord, SlsPrcgConditionRecordText> = new Link('to_SlsPrcgConditionRecordText', SlsPrcgConditionRecord, SlsPrcgConditionRecordText);
  /**
   * All fields of the SlsPrcgConditionRecord entity.
   */
  export const _allFields: Array<EdmTypeField<SlsPrcgConditionRecord, 'Edm.String', false, true> | EdmTypeField<SlsPrcgConditionRecord, 'Edm.String', true, true> | OrderableEdmTypeField<SlsPrcgConditionRecord, 'Edm.DateTime', true, true> | OrderableEdmTypeField<SlsPrcgConditionRecord, 'Edm.Decimal', true, true> | EdmTypeField<SlsPrcgConditionRecord, 'Edm.Boolean', true, true> | Link<SlsPrcgConditionRecord, SlsPrcgCndnRecdSuplmnt> | Link<SlsPrcgConditionRecord, SlsPrcgCndnRecdValidity> | Link<SlsPrcgConditionRecord, SlsPrcgCndnRecordScale> | Link<SlsPrcgConditionRecord, SlsPrcgConditionRecordText>> = [
    SlsPrcgConditionRecord.CONDITION_RECORD,
    SlsPrcgConditionRecord.CONDITION_SEQUENTIAL_NUMBER,
    SlsPrcgConditionRecord.CONDITION_TABLE,
    SlsPrcgConditionRecord.CONDITION_APPLICATION,
    SlsPrcgConditionRecord.CONDITION_TYPE,
    SlsPrcgConditionRecord.CONDITION_VALIDITY_END_DATE,
    SlsPrcgConditionRecord.CONDITION_VALIDITY_START_DATE,
    SlsPrcgConditionRecord.CREATED_BY_USER,
    SlsPrcgConditionRecord.CREATION_DATE,
    SlsPrcgConditionRecord.CONDITION_TEXT_ID,
    SlsPrcgConditionRecord.PRICING_SCALE_TYPE,
    SlsPrcgConditionRecord.PRICING_SCALE_BASIS,
    SlsPrcgConditionRecord.CONDITION_SCALE_QUANTITY,
    SlsPrcgConditionRecord.CONDITION_SCALE_QUANTITY_UNIT,
    SlsPrcgConditionRecord.CONDITION_SCALE_AMOUNT,
    SlsPrcgConditionRecord.CONDITION_SCALE_AMOUNT_CURRENCY,
    SlsPrcgConditionRecord.CONDITION_CALCULATION_TYPE,
    SlsPrcgConditionRecord.CONDITION_RATE_VALUE,
    SlsPrcgConditionRecord.CONDITION_RATE_VALUE_UNIT,
    SlsPrcgConditionRecord.CONDITION_RATE_RATIO,
    SlsPrcgConditionRecord.CONDITION_RATE_RATIO_UNIT,
    SlsPrcgConditionRecord.CONDITION_RATE_AMOUNT,
    SlsPrcgConditionRecord.CONDITION_CURRENCY,
    SlsPrcgConditionRecord.CONDITION_QUANTITY,
    SlsPrcgConditionRecord.CONDITION_QUANTITY_UNIT,
    SlsPrcgConditionRecord.CONDITION_TO_BASE_QTY_NMRTR,
    SlsPrcgConditionRecord.CONDITION_TO_BASE_QTY_DNMNTR,
    SlsPrcgConditionRecord.BASE_UNIT,
    SlsPrcgConditionRecord.CONDITION_LOWER_LIMIT,
    SlsPrcgConditionRecord.CONDITION_LOWER_LIMIT_AMOUNT,
    SlsPrcgConditionRecord.CONDITION_LOWER_LIMIT_RATIO,
    SlsPrcgConditionRecord.CONDITION_UPPER_LIMIT,
    SlsPrcgConditionRecord.CONDITION_UPPER_LIMIT_AMOUNT,
    SlsPrcgConditionRecord.CONDITION_UPPER_LIMIT_RATIO,
    SlsPrcgConditionRecord.CONDITION_ALTERNATIVE_CURRENCY,
    SlsPrcgConditionRecord.CONDITION_EXCLUSION,
    SlsPrcgConditionRecord.CONDITION_IS_DELETED,
    SlsPrcgConditionRecord.ADDITIONAL_VALUE_DAYS,
    SlsPrcgConditionRecord.FIXED_VALUE_DATE,
    SlsPrcgConditionRecord.PAYMENT_TERMS,
    SlsPrcgConditionRecord.CNDN_MAX_NUMBER_OF_SALES_ORDERS,
    SlsPrcgConditionRecord.MINIMUM_CONDITION_BASIS_VALUE,
    SlsPrcgConditionRecord.MAXIMUM_CONDITION_BASIS_VALUE,
    SlsPrcgConditionRecord.MAXIMUM_CONDITION_AMOUNT,
    SlsPrcgConditionRecord.INCREMENTAL_SCALE,
    SlsPrcgConditionRecord.PRICING_SCALE_LINE,
    SlsPrcgConditionRecord.CONDITION_RELEASE_STATUS,
    SlsPrcgConditionRecord.SALES_PRICE_APPROVAL_REQUEST,
    SlsPrcgConditionRecord.CONDITION_CHANGE_REASON,
    SlsPrcgConditionRecord.PREV_APPROVED_CONDITION_RECORD,
    SlsPrcgConditionRecord.CONDITION_TAX_CODE,
    SlsPrcgConditionRecord.CONDITION_WITHHOLDING_TAX_CODE,
    SlsPrcgConditionRecord.TAX_EXEMPTION_LICENSE,
    SlsPrcgConditionRecord.LICENSE_GRANT_DATE,
    SlsPrcgConditionRecord.E_TAG,
    SlsPrcgConditionRecord.TO_SLS_PRCG_CNDN_RECD_SUPLMNT,
    SlsPrcgConditionRecord.TO_SLS_PRCG_CNDN_RECD_VALIDITY,
    SlsPrcgConditionRecord.TO_SLS_PRCG_CNDN_RECORD_SCALE,
    SlsPrcgConditionRecord.TO_SLS_PRCG_CONDITION_RECORD_TEXT
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<SlsPrcgConditionRecord> = new AllFields('*', SlsPrcgConditionRecord);
  /**
   * All key fields of the SlsPrcgConditionRecord entity.
   */
  export const _keyFields: Array<Field<SlsPrcgConditionRecord, boolean, boolean>> = [SlsPrcgConditionRecord.CONDITION_RECORD];
  /**
   * Mapping of all key field names to the respective static field property SlsPrcgConditionRecord.
   */
  export const _keys: { [keys: string]: Field<SlsPrcgConditionRecord, boolean, boolean> } = SlsPrcgConditionRecord._keyFields.reduce((acc: { [keys: string]: Field<SlsPrcgConditionRecord, boolean, boolean> }, field: Field<SlsPrcgConditionRecord, boolean, boolean>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
