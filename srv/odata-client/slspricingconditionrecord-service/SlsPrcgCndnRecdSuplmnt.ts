/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SlsPrcgCndnRecdSuplmntRequestBuilder } from './SlsPrcgCndnRecdSuplmntRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, Constructable, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field, FieldBuilder, Link, OneToOneLink, OrderableEdmTypeField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "A_SlsPrcgCndnRecdSuplmnt" of service "API_SLSPRICINGCONDITIONRECORD_SRV".
 */
export class SlsPrcgCndnRecdSuplmnt extends EntityV2 implements SlsPrcgCndnRecdSuplmntType {
  /**
   * Technical entity name for SlsPrcgCndnRecdSuplmnt.
   */
  static _entityName = 'A_SlsPrcgCndnRecdSuplmnt';
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
   */
  conditionSequentialNumber!: string;
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
   * E Tag.
   * Maximum length: 40.
   * @nullable
   */
  eTag?: string;
  /**
   * One-to-many navigation property to the [[SlsPrcgCndnRecdValidity]] entity.
   */
  toSlsPrcgCndnRecdValidity!: SlsPrcgCndnRecdValidity[];
  /**
   * One-to-many navigation property to the [[SlsPrcgCndnRecordScale]] entity.
   */
  toSlsPrcgCndnRecordScale!: SlsPrcgCndnRecordScale[];
  /**
   * One-to-many navigation property to the [[SlsPrcgCndnSupplementText]] entity.
   */
  toSlsPrcgCndnSupplementText!: SlsPrcgCndnSupplementText[];
  /**
   * One-to-one navigation property to the [[SlsPrcgConditionRecord]] entity.
   */
  toSlsPrcgConditionRecord?: SlsPrcgConditionRecord | null;

  /**
   * Returns an entity builder to construct instances of `SlsPrcgCndnRecdSuplmnt`.
   * @returns A builder that constructs instances of entity type `SlsPrcgCndnRecdSuplmnt`.
   */
  static builder(): EntityBuilderType<SlsPrcgCndnRecdSuplmnt, SlsPrcgCndnRecdSuplmntType> {
    return EntityV2.entityBuilder(SlsPrcgCndnRecdSuplmnt);
  }

  /**
   * Returns a request builder to construct requests for operations on the `SlsPrcgCndnRecdSuplmnt` entity type.
   * @returns A `SlsPrcgCndnRecdSuplmnt` request builder.
   */
  static requestBuilder(): SlsPrcgCndnRecdSuplmntRequestBuilder {
    return new SlsPrcgCndnRecdSuplmntRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `SlsPrcgCndnRecdSuplmnt`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `SlsPrcgCndnRecdSuplmnt`.
   */
  static customField(fieldName: string): CustomFieldV2<SlsPrcgCndnRecdSuplmnt> {
    return EntityV2.customFieldSelector(fieldName, SlsPrcgCndnRecdSuplmnt);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { SlsPrcgCndnRecdValidity, SlsPrcgCndnRecdValidityType } from './SlsPrcgCndnRecdValidity';
import { SlsPrcgCndnRecordScale, SlsPrcgCndnRecordScaleType } from './SlsPrcgCndnRecordScale';
import { SlsPrcgCndnSupplementText, SlsPrcgCndnSupplementTextType } from './SlsPrcgCndnSupplementText';
import { SlsPrcgConditionRecord, SlsPrcgConditionRecordType } from './SlsPrcgConditionRecord';

export interface SlsPrcgCndnRecdSuplmntType {
  conditionRecord: string;
  conditionSequentialNumber: string;
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
  eTag?: string | null;
  toSlsPrcgCndnRecdValidity: SlsPrcgCndnRecdValidityType[];
  toSlsPrcgCndnRecordScale: SlsPrcgCndnRecordScaleType[];
  toSlsPrcgCndnSupplementText: SlsPrcgCndnSupplementTextType[];
  toSlsPrcgConditionRecord?: SlsPrcgConditionRecordType | null;
}

export namespace SlsPrcgCndnRecdSuplmnt {
  const _fieldBuilder: FieldBuilder<Constructable<SlsPrcgCndnRecdSuplmnt>> = new FieldBuilder(SlsPrcgCndnRecdSuplmnt);
  /**
   * Static representation of the [[conditionRecord]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONDITION_RECORD = _fieldBuilder.buildEdmTypeField('ConditionRecord', 'Edm.String', false);
  /**
   * Static representation of the [[conditionSequentialNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONDITION_SEQUENTIAL_NUMBER = _fieldBuilder.buildEdmTypeField('ConditionSequentialNumber', 'Edm.String', false);
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
   * Static representation of the [[eTag]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_TAG = _fieldBuilder.buildEdmTypeField('ETag', 'Edm.String', true);
  /**
   * Static representation of the one-to-many navigation property [[toSlsPrcgCndnRecdValidity]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_SLS_PRCG_CNDN_RECD_VALIDITY: Link<SlsPrcgCndnRecdSuplmnt, SlsPrcgCndnRecdValidity> = new Link('to_SlsPrcgCndnRecdValidity', SlsPrcgCndnRecdSuplmnt, SlsPrcgCndnRecdValidity);
  /**
   * Static representation of the one-to-many navigation property [[toSlsPrcgCndnRecordScale]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_SLS_PRCG_CNDN_RECORD_SCALE: Link<SlsPrcgCndnRecdSuplmnt, SlsPrcgCndnRecordScale> = new Link('to_SlsPrcgCndnRecordScale', SlsPrcgCndnRecdSuplmnt, SlsPrcgCndnRecordScale);
  /**
   * Static representation of the one-to-many navigation property [[toSlsPrcgCndnSupplementText]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_SLS_PRCG_CNDN_SUPPLEMENT_TEXT: Link<SlsPrcgCndnRecdSuplmnt, SlsPrcgCndnSupplementText> = new Link('to_SlsPrcgCndnSupplementText', SlsPrcgCndnRecdSuplmnt, SlsPrcgCndnSupplementText);
  /**
   * Static representation of the one-to-one navigation property [[toSlsPrcgConditionRecord]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_SLS_PRCG_CONDITION_RECORD: OneToOneLink<SlsPrcgCndnRecdSuplmnt, SlsPrcgConditionRecord> = new OneToOneLink('to_SlsPrcgConditionRecord', SlsPrcgCndnRecdSuplmnt, SlsPrcgConditionRecord);
  /**
   * All fields of the SlsPrcgCndnRecdSuplmnt entity.
   */
  export const _allFields: Array<EdmTypeField<SlsPrcgCndnRecdSuplmnt, 'Edm.String', false, true> | EdmTypeField<SlsPrcgCndnRecdSuplmnt, 'Edm.String', true, true> | OrderableEdmTypeField<SlsPrcgCndnRecdSuplmnt, 'Edm.DateTime', true, true> | OrderableEdmTypeField<SlsPrcgCndnRecdSuplmnt, 'Edm.Decimal', true, true> | EdmTypeField<SlsPrcgCndnRecdSuplmnt, 'Edm.Boolean', true, true> | Link<SlsPrcgCndnRecdSuplmnt, SlsPrcgCndnRecdValidity> | Link<SlsPrcgCndnRecdSuplmnt, SlsPrcgCndnRecordScale> | Link<SlsPrcgCndnRecdSuplmnt, SlsPrcgCndnSupplementText> | OneToOneLink<SlsPrcgCndnRecdSuplmnt, SlsPrcgConditionRecord>> = [
    SlsPrcgCndnRecdSuplmnt.CONDITION_RECORD,
    SlsPrcgCndnRecdSuplmnt.CONDITION_SEQUENTIAL_NUMBER,
    SlsPrcgCndnRecdSuplmnt.CONDITION_TABLE,
    SlsPrcgCndnRecdSuplmnt.CONDITION_APPLICATION,
    SlsPrcgCndnRecdSuplmnt.CONDITION_TYPE,
    SlsPrcgCndnRecdSuplmnt.CONDITION_VALIDITY_END_DATE,
    SlsPrcgCndnRecdSuplmnt.CONDITION_VALIDITY_START_DATE,
    SlsPrcgCndnRecdSuplmnt.CREATED_BY_USER,
    SlsPrcgCndnRecdSuplmnt.CREATION_DATE,
    SlsPrcgCndnRecdSuplmnt.CONDITION_TEXT_ID,
    SlsPrcgCndnRecdSuplmnt.PRICING_SCALE_TYPE,
    SlsPrcgCndnRecdSuplmnt.PRICING_SCALE_BASIS,
    SlsPrcgCndnRecdSuplmnt.CONDITION_SCALE_QUANTITY,
    SlsPrcgCndnRecdSuplmnt.CONDITION_SCALE_QUANTITY_UNIT,
    SlsPrcgCndnRecdSuplmnt.CONDITION_SCALE_AMOUNT,
    SlsPrcgCndnRecdSuplmnt.CONDITION_SCALE_AMOUNT_CURRENCY,
    SlsPrcgCndnRecdSuplmnt.CONDITION_CALCULATION_TYPE,
    SlsPrcgCndnRecdSuplmnt.CONDITION_RATE_VALUE,
    SlsPrcgCndnRecdSuplmnt.CONDITION_RATE_VALUE_UNIT,
    SlsPrcgCndnRecdSuplmnt.CONDITION_RATE_RATIO,
    SlsPrcgCndnRecdSuplmnt.CONDITION_RATE_RATIO_UNIT,
    SlsPrcgCndnRecdSuplmnt.CONDITION_RATE_AMOUNT,
    SlsPrcgCndnRecdSuplmnt.CONDITION_CURRENCY,
    SlsPrcgCndnRecdSuplmnt.CONDITION_QUANTITY,
    SlsPrcgCndnRecdSuplmnt.CONDITION_QUANTITY_UNIT,
    SlsPrcgCndnRecdSuplmnt.CONDITION_TO_BASE_QTY_NMRTR,
    SlsPrcgCndnRecdSuplmnt.CONDITION_TO_BASE_QTY_DNMNTR,
    SlsPrcgCndnRecdSuplmnt.BASE_UNIT,
    SlsPrcgCndnRecdSuplmnt.CONDITION_LOWER_LIMIT,
    SlsPrcgCndnRecdSuplmnt.CONDITION_LOWER_LIMIT_AMOUNT,
    SlsPrcgCndnRecdSuplmnt.CONDITION_LOWER_LIMIT_RATIO,
    SlsPrcgCndnRecdSuplmnt.CONDITION_UPPER_LIMIT,
    SlsPrcgCndnRecdSuplmnt.CONDITION_UPPER_LIMIT_AMOUNT,
    SlsPrcgCndnRecdSuplmnt.CONDITION_UPPER_LIMIT_RATIO,
    SlsPrcgCndnRecdSuplmnt.CONDITION_ALTERNATIVE_CURRENCY,
    SlsPrcgCndnRecdSuplmnt.CONDITION_EXCLUSION,
    SlsPrcgCndnRecdSuplmnt.CONDITION_IS_DELETED,
    SlsPrcgCndnRecdSuplmnt.ADDITIONAL_VALUE_DAYS,
    SlsPrcgCndnRecdSuplmnt.FIXED_VALUE_DATE,
    SlsPrcgCndnRecdSuplmnt.PAYMENT_TERMS,
    SlsPrcgCndnRecdSuplmnt.CNDN_MAX_NUMBER_OF_SALES_ORDERS,
    SlsPrcgCndnRecdSuplmnt.MINIMUM_CONDITION_BASIS_VALUE,
    SlsPrcgCndnRecdSuplmnt.MAXIMUM_CONDITION_BASIS_VALUE,
    SlsPrcgCndnRecdSuplmnt.MAXIMUM_CONDITION_AMOUNT,
    SlsPrcgCndnRecdSuplmnt.INCREMENTAL_SCALE,
    SlsPrcgCndnRecdSuplmnt.PRICING_SCALE_LINE,
    SlsPrcgCndnRecdSuplmnt.CONDITION_RELEASE_STATUS,
    SlsPrcgCndnRecdSuplmnt.SALES_PRICE_APPROVAL_REQUEST,
    SlsPrcgCndnRecdSuplmnt.CONDITION_CHANGE_REASON,
    SlsPrcgCndnRecdSuplmnt.PREV_APPROVED_CONDITION_RECORD,
    SlsPrcgCndnRecdSuplmnt.E_TAG,
    SlsPrcgCndnRecdSuplmnt.TO_SLS_PRCG_CNDN_RECD_VALIDITY,
    SlsPrcgCndnRecdSuplmnt.TO_SLS_PRCG_CNDN_RECORD_SCALE,
    SlsPrcgCndnRecdSuplmnt.TO_SLS_PRCG_CNDN_SUPPLEMENT_TEXT,
    SlsPrcgCndnRecdSuplmnt.TO_SLS_PRCG_CONDITION_RECORD
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<SlsPrcgCndnRecdSuplmnt> = new AllFields('*', SlsPrcgCndnRecdSuplmnt);
  /**
   * All key fields of the SlsPrcgCndnRecdSuplmnt entity.
   */
  export const _keyFields: Array<Field<SlsPrcgCndnRecdSuplmnt, boolean, boolean>> = [SlsPrcgCndnRecdSuplmnt.CONDITION_RECORD, SlsPrcgCndnRecdSuplmnt.CONDITION_SEQUENTIAL_NUMBER];
  /**
   * Mapping of all key field names to the respective static field property SlsPrcgCndnRecdSuplmnt.
   */
  export const _keys: { [keys: string]: Field<SlsPrcgCndnRecdSuplmnt, boolean, boolean> } = SlsPrcgCndnRecdSuplmnt._keyFields.reduce((acc: { [keys: string]: Field<SlsPrcgCndnRecdSuplmnt, boolean, boolean> }, field: Field<SlsPrcgCndnRecdSuplmnt, boolean, boolean>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
