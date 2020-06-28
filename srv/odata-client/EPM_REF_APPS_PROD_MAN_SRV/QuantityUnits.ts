/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { QuantityUnitsRequestBuilder } from './QuantityUnitsRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "QuantityUnits" of service "EPM_REF_APPS_PROD_MAN_SRV".
 */
export class QuantityUnits extends Entity implements QuantityUnitsType {
  /**
   * Technical entity name for QuantityUnits.
   */
  static _entityName = 'QuantityUnits';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for QuantityUnits.
   */
  static _serviceName = 'EPM_REF_APPS_PROD_MAN_SRV';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/sap/opu/odata/sap/EPM_REF_APPS_PROD_MAN_SRV';
  /**
   * ISO-Code.
   * Maximum length: 3.
   */
  unit!: string;
  /**
   * Shorttext.
   * Maximum length: 10.
   */
  shorttext!: string;
  /**
   * Text.
   * Maximum length: 30.
   */
  text!: string;

  /**
   * Returns an entity builder to construct instances `QuantityUnits`.
   * @returns A builder that constructs instances of entity type `QuantityUnits`.
   */
  static builder(): EntityBuilderType<QuantityUnits, QuantityUnitsTypeForceMandatory> {
    return Entity.entityBuilder(QuantityUnits);
  }

  /**
   * Returns a request builder to construct requests for operations on the `QuantityUnits` entity type.
   * @returns A `QuantityUnits` request builder.
   */
  static requestBuilder(): QuantityUnitsRequestBuilder {
    return new QuantityUnitsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `QuantityUnits`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `QuantityUnits`.
   */
  static customField(fieldName: string): CustomField<QuantityUnits> {
    return Entity.customFieldSelector(fieldName, QuantityUnits);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface QuantityUnitsType {
  unit: string;
  shorttext: string;
  text: string;
}

export interface QuantityUnitsTypeForceMandatory {
  unit: string;
  shorttext: string;
  text: string;
}

export namespace QuantityUnits {
  /**
   * Static representation of the [[unit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UNIT: StringField<QuantityUnits> = new StringField('Unit', QuantityUnits, 'Edm.String');
  /**
   * Static representation of the [[shorttext]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SHORTTEXT: StringField<QuantityUnits> = new StringField('Shorttext', QuantityUnits, 'Edm.String');
  /**
   * Static representation of the [[text]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TEXT: StringField<QuantityUnits> = new StringField('Text', QuantityUnits, 'Edm.String');
  /**
   * All fields of the QuantityUnits entity.
   */
  export const _allFields: Array<StringField<QuantityUnits>> = [
    QuantityUnits.UNIT,
    QuantityUnits.SHORTTEXT,
    QuantityUnits.TEXT
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<QuantityUnits> = new AllFields('*', QuantityUnits);
  /**
   * All key fields of the QuantityUnits entity.
   */
  export const _keyFields: Array<Field<QuantityUnits>> = [QuantityUnits.UNIT];
  /**
   * Mapping of all key field names to the respective static field property QuantityUnits.
   */
  export const _keys: { [keys: string]: Field<QuantityUnits> } = QuantityUnits._keyFields.reduce((acc: { [keys: string]: Field<QuantityUnits> }, field: Field<QuantityUnits>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
