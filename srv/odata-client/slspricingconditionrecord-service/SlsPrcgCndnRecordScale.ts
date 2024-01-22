/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SlsPrcgCndnRecordScaleRequestBuilder } from './SlsPrcgCndnRecordScaleRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, Constructable, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field, FieldBuilder, OneToOneLink, OrderableEdmTypeField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "A_SlsPrcgCndnRecordScale" of service "API_SLSPRICINGCONDITIONRECORD_SRV".
 */
export class SlsPrcgCndnRecordScale extends EntityV2 implements SlsPrcgCndnRecordScaleType {
  /**
   * Technical entity name for SlsPrcgCndnRecordScale.
   */
  static _entityName = 'A_SlsPrcgCndnRecordScale';
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
   * Current number of the line scale.
   * Maximum length: 4.
   */
  conditionScaleLine!: string;
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
   * Condition Amount or Percentage.
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
   * E Tag.
   * Maximum length: 40.
   * @nullable
   */
  eTag?: string;
  /**
   * One-to-one navigation property to the [[SlsPrcgCndnRecdSuplmnt]] entity.
   */
  toSlsPrcgCndnRecdSuplmnt?: SlsPrcgCndnRecdSuplmnt | null;
  /**
   * One-to-one navigation property to the [[SlsPrcgConditionRecord]] entity.
   */
  toSlsPrcgConditionRecord?: SlsPrcgConditionRecord | null;

  /**
   * Returns an entity builder to construct instances of `SlsPrcgCndnRecordScale`.
   * @returns A builder that constructs instances of entity type `SlsPrcgCndnRecordScale`.
   */
  static builder(): EntityBuilderType<SlsPrcgCndnRecordScale, SlsPrcgCndnRecordScaleType> {
    return EntityV2.entityBuilder(SlsPrcgCndnRecordScale);
  }

  /**
   * Returns a request builder to construct requests for operations on the `SlsPrcgCndnRecordScale` entity type.
   * @returns A `SlsPrcgCndnRecordScale` request builder.
   */
  static requestBuilder(): SlsPrcgCndnRecordScaleRequestBuilder {
    return new SlsPrcgCndnRecordScaleRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `SlsPrcgCndnRecordScale`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `SlsPrcgCndnRecordScale`.
   */
  static customField(fieldName: string): CustomFieldV2<SlsPrcgCndnRecordScale> {
    return EntityV2.customFieldSelector(fieldName, SlsPrcgCndnRecordScale);
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
import { SlsPrcgConditionRecord, SlsPrcgConditionRecordType } from './SlsPrcgConditionRecord';

export interface SlsPrcgCndnRecordScaleType {
  conditionRecord: string;
  conditionSequentialNumber: string;
  conditionScaleLine: string;
  conditionScaleQuantity?: BigNumber | null;
  conditionScaleQuantityUnit?: string | null;
  conditionScaleAmount?: BigNumber | null;
  conditionScaleAmountCurrency?: string | null;
  conditionRateValue?: BigNumber | null;
  conditionRateValueUnit?: string | null;
  conditionRateRatio?: BigNumber | null;
  conditionRateRatioUnit?: string | null;
  conditionRateAmount?: BigNumber | null;
  conditionCurrency?: string | null;
  eTag?: string | null;
  toSlsPrcgCndnRecdSuplmnt?: SlsPrcgCndnRecdSuplmntType | null;
  toSlsPrcgConditionRecord?: SlsPrcgConditionRecordType | null;
}

export namespace SlsPrcgCndnRecordScale {
  const _fieldBuilder: FieldBuilder<Constructable<SlsPrcgCndnRecordScale>> = new FieldBuilder(SlsPrcgCndnRecordScale);
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
   * Static representation of the [[conditionScaleLine]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONDITION_SCALE_LINE = _fieldBuilder.buildEdmTypeField('ConditionScaleLine', 'Edm.String', false);
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
   * Static representation of the [[eTag]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_TAG = _fieldBuilder.buildEdmTypeField('ETag', 'Edm.String', true);
  /**
   * Static representation of the one-to-one navigation property [[toSlsPrcgCndnRecdSuplmnt]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_SLS_PRCG_CNDN_RECD_SUPLMNT: OneToOneLink<SlsPrcgCndnRecordScale, SlsPrcgCndnRecdSuplmnt> = new OneToOneLink('to_SlsPrcgCndnRecdSuplmnt', SlsPrcgCndnRecordScale, SlsPrcgCndnRecdSuplmnt);
  /**
   * Static representation of the one-to-one navigation property [[toSlsPrcgConditionRecord]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_SLS_PRCG_CONDITION_RECORD: OneToOneLink<SlsPrcgCndnRecordScale, SlsPrcgConditionRecord> = new OneToOneLink('to_SlsPrcgConditionRecord', SlsPrcgCndnRecordScale, SlsPrcgConditionRecord);
  /**
   * All fields of the SlsPrcgCndnRecordScale entity.
   */
  export const _allFields: Array<EdmTypeField<SlsPrcgCndnRecordScale, 'Edm.String', false, true> | OrderableEdmTypeField<SlsPrcgCndnRecordScale, 'Edm.Decimal', true, true> | EdmTypeField<SlsPrcgCndnRecordScale, 'Edm.String', true, true> | OneToOneLink<SlsPrcgCndnRecordScale, SlsPrcgCndnRecdSuplmnt> | OneToOneLink<SlsPrcgCndnRecordScale, SlsPrcgConditionRecord>> = [
    SlsPrcgCndnRecordScale.CONDITION_RECORD,
    SlsPrcgCndnRecordScale.CONDITION_SEQUENTIAL_NUMBER,
    SlsPrcgCndnRecordScale.CONDITION_SCALE_LINE,
    SlsPrcgCndnRecordScale.CONDITION_SCALE_QUANTITY,
    SlsPrcgCndnRecordScale.CONDITION_SCALE_QUANTITY_UNIT,
    SlsPrcgCndnRecordScale.CONDITION_SCALE_AMOUNT,
    SlsPrcgCndnRecordScale.CONDITION_SCALE_AMOUNT_CURRENCY,
    SlsPrcgCndnRecordScale.CONDITION_RATE_VALUE,
    SlsPrcgCndnRecordScale.CONDITION_RATE_VALUE_UNIT,
    SlsPrcgCndnRecordScale.CONDITION_RATE_RATIO,
    SlsPrcgCndnRecordScale.CONDITION_RATE_RATIO_UNIT,
    SlsPrcgCndnRecordScale.CONDITION_RATE_AMOUNT,
    SlsPrcgCndnRecordScale.CONDITION_CURRENCY,
    SlsPrcgCndnRecordScale.E_TAG,
    SlsPrcgCndnRecordScale.TO_SLS_PRCG_CNDN_RECD_SUPLMNT,
    SlsPrcgCndnRecordScale.TO_SLS_PRCG_CONDITION_RECORD
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<SlsPrcgCndnRecordScale> = new AllFields('*', SlsPrcgCndnRecordScale);
  /**
   * All key fields of the SlsPrcgCndnRecordScale entity.
   */
  export const _keyFields: Array<Field<SlsPrcgCndnRecordScale, boolean, boolean>> = [SlsPrcgCndnRecordScale.CONDITION_RECORD, SlsPrcgCndnRecordScale.CONDITION_SEQUENTIAL_NUMBER, SlsPrcgCndnRecordScale.CONDITION_SCALE_LINE];
  /**
   * Mapping of all key field names to the respective static field property SlsPrcgCndnRecordScale.
   */
  export const _keys: { [keys: string]: Field<SlsPrcgCndnRecordScale, boolean, boolean> } = SlsPrcgCndnRecordScale._keyFields.reduce((acc: { [keys: string]: Field<SlsPrcgCndnRecordScale, boolean, boolean> }, field: Field<SlsPrcgCndnRecordScale, boolean, boolean>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
