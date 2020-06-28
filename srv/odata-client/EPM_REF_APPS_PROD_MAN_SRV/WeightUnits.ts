/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WeightUnitsRequestBuilder } from './WeightUnitsRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "WeightUnits" of service "EPM_REF_APPS_PROD_MAN_SRV".
 */
export class WeightUnits extends Entity implements WeightUnitsType {
  /**
   * Technical entity name for WeightUnits.
   */
  static _entityName = 'WeightUnits';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for WeightUnits.
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
   * Returns an entity builder to construct instances `WeightUnits`.
   * @returns A builder that constructs instances of entity type `WeightUnits`.
   */
  static builder(): EntityBuilderType<WeightUnits, WeightUnitsTypeForceMandatory> {
    return Entity.entityBuilder(WeightUnits);
  }

  /**
   * Returns a request builder to construct requests for operations on the `WeightUnits` entity type.
   * @returns A `WeightUnits` request builder.
   */
  static requestBuilder(): WeightUnitsRequestBuilder {
    return new WeightUnitsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `WeightUnits`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `WeightUnits`.
   */
  static customField(fieldName: string): CustomField<WeightUnits> {
    return Entity.customFieldSelector(fieldName, WeightUnits);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface WeightUnitsType {
  unit: string;
  shorttext: string;
  text: string;
}

export interface WeightUnitsTypeForceMandatory {
  unit: string;
  shorttext: string;
  text: string;
}

export namespace WeightUnits {
  /**
   * Static representation of the [[unit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UNIT: StringField<WeightUnits> = new StringField('Unit', WeightUnits, 'Edm.String');
  /**
   * Static representation of the [[shorttext]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SHORTTEXT: StringField<WeightUnits> = new StringField('Shorttext', WeightUnits, 'Edm.String');
  /**
   * Static representation of the [[text]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TEXT: StringField<WeightUnits> = new StringField('Text', WeightUnits, 'Edm.String');
  /**
   * All fields of the WeightUnits entity.
   */
  export const _allFields: Array<StringField<WeightUnits>> = [
    WeightUnits.UNIT,
    WeightUnits.SHORTTEXT,
    WeightUnits.TEXT
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<WeightUnits> = new AllFields('*', WeightUnits);
  /**
   * All key fields of the WeightUnits entity.
   */
  export const _keyFields: Array<Field<WeightUnits>> = [WeightUnits.UNIT];
  /**
   * Mapping of all key field names to the respective static field property WeightUnits.
   */
  export const _keys: { [keys: string]: Field<WeightUnits> } = WeightUnits._keyFields.reduce((acc: { [keys: string]: Field<WeightUnits> }, field: Field<WeightUnits>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
