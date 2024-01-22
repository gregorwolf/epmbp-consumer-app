/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SlsPrcgCndnSupplementTextRequestBuilder } from './SlsPrcgCndnSupplementTextRequestBuilder';
import { AllFields, Constructable, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field, FieldBuilder, OneToOneLink } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "A_SlsPrcgCndnSupplementText" of service "API_SLSPRICINGCONDITIONRECORD_SRV".
 */
export class SlsPrcgCndnSupplementText extends EntityV2 implements SlsPrcgCndnSupplementTextType {
  /**
   * Technical entity name for SlsPrcgCndnSupplementText.
   */
  static _entityName = 'A_SlsPrcgCndnSupplementText';
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
   * One-to-one navigation property to the [[SlsPrcgCndnRecdSuplmnt]] entity.
   */
  toSlsPrcgCndnRecdSuplmnt?: SlsPrcgCndnRecdSuplmnt | null;

  /**
   * Returns an entity builder to construct instances of `SlsPrcgCndnSupplementText`.
   * @returns A builder that constructs instances of entity type `SlsPrcgCndnSupplementText`.
   */
  static builder(): EntityBuilderType<SlsPrcgCndnSupplementText, SlsPrcgCndnSupplementTextType> {
    return EntityV2.entityBuilder(SlsPrcgCndnSupplementText);
  }

  /**
   * Returns a request builder to construct requests for operations on the `SlsPrcgCndnSupplementText` entity type.
   * @returns A `SlsPrcgCndnSupplementText` request builder.
   */
  static requestBuilder(): SlsPrcgCndnSupplementTextRequestBuilder {
    return new SlsPrcgCndnSupplementTextRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `SlsPrcgCndnSupplementText`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `SlsPrcgCndnSupplementText`.
   */
  static customField(fieldName: string): CustomFieldV2<SlsPrcgCndnSupplementText> {
    return EntityV2.customFieldSelector(fieldName, SlsPrcgCndnSupplementText);
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

export interface SlsPrcgCndnSupplementTextType {
  conditionRecord: string;
  conditionSequentialNumber: string;
  language: string;
  conditionText?: string | null;
  eTag?: string | null;
  toSlsPrcgCndnRecdSuplmnt?: SlsPrcgCndnRecdSuplmntType | null;
}

export namespace SlsPrcgCndnSupplementText {
  const _fieldBuilder: FieldBuilder<Constructable<SlsPrcgCndnSupplementText>> = new FieldBuilder(SlsPrcgCndnSupplementText);
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
   * Static representation of the one-to-one navigation property [[toSlsPrcgCndnRecdSuplmnt]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_SLS_PRCG_CNDN_RECD_SUPLMNT: OneToOneLink<SlsPrcgCndnSupplementText, SlsPrcgCndnRecdSuplmnt> = new OneToOneLink('to_SlsPrcgCndnRecdSuplmnt', SlsPrcgCndnSupplementText, SlsPrcgCndnRecdSuplmnt);
  /**
   * All fields of the SlsPrcgCndnSupplementText entity.
   */
  export const _allFields: Array<EdmTypeField<SlsPrcgCndnSupplementText, 'Edm.String', false, true> | EdmTypeField<SlsPrcgCndnSupplementText, 'Edm.String', true, true> | OneToOneLink<SlsPrcgCndnSupplementText, SlsPrcgCndnRecdSuplmnt>> = [
    SlsPrcgCndnSupplementText.CONDITION_RECORD,
    SlsPrcgCndnSupplementText.CONDITION_SEQUENTIAL_NUMBER,
    SlsPrcgCndnSupplementText.LANGUAGE,
    SlsPrcgCndnSupplementText.CONDITION_TEXT,
    SlsPrcgCndnSupplementText.E_TAG,
    SlsPrcgCndnSupplementText.TO_SLS_PRCG_CNDN_RECD_SUPLMNT
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<SlsPrcgCndnSupplementText> = new AllFields('*', SlsPrcgCndnSupplementText);
  /**
   * All key fields of the SlsPrcgCndnSupplementText entity.
   */
  export const _keyFields: Array<Field<SlsPrcgCndnSupplementText, boolean, boolean>> = [SlsPrcgCndnSupplementText.CONDITION_RECORD, SlsPrcgCndnSupplementText.CONDITION_SEQUENTIAL_NUMBER, SlsPrcgCndnSupplementText.LANGUAGE];
  /**
   * Mapping of all key field names to the respective static field property SlsPrcgCndnSupplementText.
   */
  export const _keys: { [keys: string]: Field<SlsPrcgCndnSupplementText, boolean, boolean> } = SlsPrcgCndnSupplementText._keyFields.reduce((acc: { [keys: string]: Field<SlsPrcgCndnSupplementText, boolean, boolean> }, field: Field<SlsPrcgCndnSupplementText, boolean, boolean>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
