/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SlsPrcgConditionRecordTextRequestBuilder } from './SlsPrcgConditionRecordTextRequestBuilder';
import { AllFields, Constructable, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field, FieldBuilder, OneToOneLink } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "A_SlsPrcgConditionRecordText" of service "API_SLSPRICINGCONDITIONRECORD_SRV".
 */
export class SlsPrcgConditionRecordText extends EntityV2 implements SlsPrcgConditionRecordTextType {
  /**
   * Technical entity name for SlsPrcgConditionRecordText.
   */
  static _entityName = 'A_SlsPrcgConditionRecordText';
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
   * Language Key.
   * Maximum length: 2.
   */
  language!: string;
  /**
   * Description.
   * Maximum length: 40.
   * @nullable
   */
  conditionText?: string;
  /**
   * E Tag.
   * Maximum length: 40.
   * @nullable
   */
  eTag?: string;
  /**
   * One-to-one navigation property to the [[SlsPrcgConditionRecord]] entity.
   */
  toSlsPrcgConditionRecord?: SlsPrcgConditionRecord | null;

  /**
   * Returns an entity builder to construct instances of `SlsPrcgConditionRecordText`.
   * @returns A builder that constructs instances of entity type `SlsPrcgConditionRecordText`.
   */
  static builder(): EntityBuilderType<SlsPrcgConditionRecordText, SlsPrcgConditionRecordTextType> {
    return EntityV2.entityBuilder(SlsPrcgConditionRecordText);
  }

  /**
   * Returns a request builder to construct requests for operations on the `SlsPrcgConditionRecordText` entity type.
   * @returns A `SlsPrcgConditionRecordText` request builder.
   */
  static requestBuilder(): SlsPrcgConditionRecordTextRequestBuilder {
    return new SlsPrcgConditionRecordTextRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `SlsPrcgConditionRecordText`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `SlsPrcgConditionRecordText`.
   */
  static customField(fieldName: string): CustomFieldV2<SlsPrcgConditionRecordText> {
    return EntityV2.customFieldSelector(fieldName, SlsPrcgConditionRecordText);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { SlsPrcgConditionRecord, SlsPrcgConditionRecordType } from './SlsPrcgConditionRecord';

export interface SlsPrcgConditionRecordTextType {
  conditionRecord: string;
  conditionSequentialNumber: string;
  language: string;
  conditionText?: string | null;
  eTag?: string | null;
  toSlsPrcgConditionRecord?: SlsPrcgConditionRecordType | null;
}

export namespace SlsPrcgConditionRecordText {
  const _fieldBuilder: FieldBuilder<Constructable<SlsPrcgConditionRecordText>> = new FieldBuilder(SlsPrcgConditionRecordText);
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
   * Static representation of the [[language]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LANGUAGE = _fieldBuilder.buildEdmTypeField('Language', 'Edm.String', false);
  /**
   * Static representation of the [[conditionText]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONDITION_TEXT = _fieldBuilder.buildEdmTypeField('ConditionText', 'Edm.String', true);
  /**
   * Static representation of the [[eTag]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_TAG = _fieldBuilder.buildEdmTypeField('ETag', 'Edm.String', true);
  /**
   * Static representation of the one-to-one navigation property [[toSlsPrcgConditionRecord]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_SLS_PRCG_CONDITION_RECORD: OneToOneLink<SlsPrcgConditionRecordText, SlsPrcgConditionRecord> = new OneToOneLink('to_SlsPrcgConditionRecord', SlsPrcgConditionRecordText, SlsPrcgConditionRecord);
  /**
   * All fields of the SlsPrcgConditionRecordText entity.
   */
  export const _allFields: Array<EdmTypeField<SlsPrcgConditionRecordText, 'Edm.String', false, true> | EdmTypeField<SlsPrcgConditionRecordText, 'Edm.String', true, true> | OneToOneLink<SlsPrcgConditionRecordText, SlsPrcgConditionRecord>> = [
    SlsPrcgConditionRecordText.CONDITION_RECORD,
    SlsPrcgConditionRecordText.CONDITION_SEQUENTIAL_NUMBER,
    SlsPrcgConditionRecordText.LANGUAGE,
    SlsPrcgConditionRecordText.CONDITION_TEXT,
    SlsPrcgConditionRecordText.E_TAG,
    SlsPrcgConditionRecordText.TO_SLS_PRCG_CONDITION_RECORD
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<SlsPrcgConditionRecordText> = new AllFields('*', SlsPrcgConditionRecordText);
  /**
   * All key fields of the SlsPrcgConditionRecordText entity.
   */
  export const _keyFields: Array<Field<SlsPrcgConditionRecordText, boolean, boolean>> = [SlsPrcgConditionRecordText.CONDITION_RECORD, SlsPrcgConditionRecordText.CONDITION_SEQUENTIAL_NUMBER, SlsPrcgConditionRecordText.LANGUAGE];
  /**
   * Mapping of all key field names to the respective static field property SlsPrcgConditionRecordText.
   */
  export const _keys: { [keys: string]: Field<SlsPrcgConditionRecordText, boolean, boolean> } = SlsPrcgConditionRecordText._keyFields.reduce((acc: { [keys: string]: Field<SlsPrcgConditionRecordText, boolean, boolean> }, field: Field<SlsPrcgConditionRecordText, boolean, boolean>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
