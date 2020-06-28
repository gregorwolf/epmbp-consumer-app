/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CurrenciesRequestBuilder } from './CurrenciesRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "Currencies" of service "EPM_REF_APPS_PROD_MAN_SRV".
 */
export class Currencies extends Entity implements CurrenciesType {
  /**
   * Technical entity name for Currencies.
   */
  static _entityName = 'Currencies';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for Currencies.
   */
  static _serviceName = 'EPM_REF_APPS_PROD_MAN_SRV';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/sap/opu/odata/sap/EPM_REF_APPS_PROD_MAN_SRV';
  /**
   * Iso-Code.
   * Maximum length: 3.
   */
  code!: string;
  /**
   * Text.
   * Maximum length: 40.
   */
  text!: string;

  /**
   * Returns an entity builder to construct instances `Currencies`.
   * @returns A builder that constructs instances of entity type `Currencies`.
   */
  static builder(): EntityBuilderType<Currencies, CurrenciesTypeForceMandatory> {
    return Entity.entityBuilder(Currencies);
  }

  /**
   * Returns a request builder to construct requests for operations on the `Currencies` entity type.
   * @returns A `Currencies` request builder.
   */
  static requestBuilder(): CurrenciesRequestBuilder {
    return new CurrenciesRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `Currencies`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `Currencies`.
   */
  static customField(fieldName: string): CustomField<Currencies> {
    return Entity.customFieldSelector(fieldName, Currencies);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface CurrenciesType {
  code: string;
  text: string;
}

export interface CurrenciesTypeForceMandatory {
  code: string;
  text: string;
}

export namespace Currencies {
  /**
   * Static representation of the [[code]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CODE: StringField<Currencies> = new StringField('Code', Currencies, 'Edm.String');
  /**
   * Static representation of the [[text]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TEXT: StringField<Currencies> = new StringField('Text', Currencies, 'Edm.String');
  /**
   * All fields of the Currencies entity.
   */
  export const _allFields: Array<StringField<Currencies>> = [
    Currencies.CODE,
    Currencies.TEXT
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<Currencies> = new AllFields('*', Currencies);
  /**
   * All key fields of the Currencies entity.
   */
  export const _keyFields: Array<Field<Currencies>> = [Currencies.CODE];
  /**
   * Mapping of all key field names to the respective static field property Currencies.
   */
  export const _keys: { [keys: string]: Field<Currencies> } = Currencies._keyFields.reduce((acc: { [keys: string]: Field<Currencies> }, field: Field<Currencies>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
