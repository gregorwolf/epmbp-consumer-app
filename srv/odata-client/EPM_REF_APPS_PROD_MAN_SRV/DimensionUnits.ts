/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DimensionUnitsRequestBuilder } from './DimensionUnitsRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "DimensionUnits" of service "EPM_REF_APPS_PROD_MAN_SRV".
 */
export class DimensionUnits extends Entity implements DimensionUnitsType {
  /**
   * Technical entity name for DimensionUnits.
   */
  static _entityName = 'DimensionUnits';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for DimensionUnits.
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
   * Returns an entity builder to construct instances `DimensionUnits`.
   * @returns A builder that constructs instances of entity type `DimensionUnits`.
   */
  static builder(): EntityBuilderType<DimensionUnits, DimensionUnitsTypeForceMandatory> {
    return Entity.entityBuilder(DimensionUnits);
  }

  /**
   * Returns a request builder to construct requests for operations on the `DimensionUnits` entity type.
   * @returns A `DimensionUnits` request builder.
   */
  static requestBuilder(): DimensionUnitsRequestBuilder {
    return new DimensionUnitsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `DimensionUnits`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `DimensionUnits`.
   */
  static customField(fieldName: string): CustomField<DimensionUnits> {
    return Entity.customFieldSelector(fieldName, DimensionUnits);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface DimensionUnitsType {
  unit: string;
  shorttext: string;
  text: string;
}

export interface DimensionUnitsTypeForceMandatory {
  unit: string;
  shorttext: string;
  text: string;
}

export namespace DimensionUnits {
  /**
   * Static representation of the [[unit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UNIT: StringField<DimensionUnits> = new StringField('Unit', DimensionUnits, 'Edm.String');
  /**
   * Static representation of the [[shorttext]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SHORTTEXT: StringField<DimensionUnits> = new StringField('Shorttext', DimensionUnits, 'Edm.String');
  /**
   * Static representation of the [[text]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TEXT: StringField<DimensionUnits> = new StringField('Text', DimensionUnits, 'Edm.String');
  /**
   * All fields of the DimensionUnits entity.
   */
  export const _allFields: Array<StringField<DimensionUnits>> = [
    DimensionUnits.UNIT,
    DimensionUnits.SHORTTEXT,
    DimensionUnits.TEXT
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<DimensionUnits> = new AllFields('*', DimensionUnits);
  /**
   * All key fields of the DimensionUnits entity.
   */
  export const _keyFields: Array<Field<DimensionUnits>> = [DimensionUnits.UNIT];
  /**
   * Mapping of all key field names to the respective static field property DimensionUnits.
   */
  export const _keys: { [keys: string]: Field<DimensionUnits> } = DimensionUnits._keyFields.reduce((acc: { [keys: string]: Field<DimensionUnits> }, field: Field<DimensionUnits>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
