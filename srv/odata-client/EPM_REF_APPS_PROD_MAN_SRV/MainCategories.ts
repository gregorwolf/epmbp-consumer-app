/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MainCategoriesRequestBuilder } from './MainCategoriesRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, Link, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "MainCategories" of service "EPM_REF_APPS_PROD_MAN_SRV".
 */
export class MainCategories extends Entity implements MainCategoriesType {
  /**
   * Technical entity name for MainCategories.
   */
  static _entityName = 'MainCategories';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for MainCategories.
   */
  static _serviceName = 'EPM_REF_APPS_PROD_MAN_SRV';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/sap/opu/odata/sap/EPM_REF_APPS_PROD_MAN_SRV';
  /**
   * Hauptkategorie.
   * Maximum length: 40.
   */
  id!: string;
  /**
   * Hauptkategorie.
   * Maximum length: 40.
   */
  name!: string;
  /**
   * One-to-many navigation property to the [[SubCategories]] entity.
   */
  subCategories!: SubCategories[];

  /**
   * Returns an entity builder to construct instances `MainCategories`.
   * @returns A builder that constructs instances of entity type `MainCategories`.
   */
  static builder(): EntityBuilderType<MainCategories, MainCategoriesTypeForceMandatory> {
    return Entity.entityBuilder(MainCategories);
  }

  /**
   * Returns a request builder to construct requests for operations on the `MainCategories` entity type.
   * @returns A `MainCategories` request builder.
   */
  static requestBuilder(): MainCategoriesRequestBuilder {
    return new MainCategoriesRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `MainCategories`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `MainCategories`.
   */
  static customField(fieldName: string): CustomField<MainCategories> {
    return Entity.customFieldSelector(fieldName, MainCategories);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { SubCategories, SubCategoriesType } from './SubCategories';

export interface MainCategoriesType {
  id: string;
  name: string;
  subCategories: SubCategoriesType[];
}

export interface MainCategoriesTypeForceMandatory {
  id: string;
  name: string;
  subCategories: SubCategoriesType[];
}

export namespace MainCategories {
  /**
   * Static representation of the [[id]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ID: StringField<MainCategories> = new StringField('Id', MainCategories, 'Edm.String');
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<MainCategories> = new StringField('Name', MainCategories, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[subCategories]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUB_CATEGORIES: Link<MainCategories, SubCategories> = new Link('SubCategories', MainCategories, SubCategories);
  /**
   * All fields of the MainCategories entity.
   */
  export const _allFields: Array<StringField<MainCategories> | Link<MainCategories, SubCategories>> = [
    MainCategories.ID,
    MainCategories.NAME,
    MainCategories.SUB_CATEGORIES
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<MainCategories> = new AllFields('*', MainCategories);
  /**
   * All key fields of the MainCategories entity.
   */
  export const _keyFields: Array<Field<MainCategories>> = [MainCategories.ID];
  /**
   * Mapping of all key field names to the respective static field property MainCategories.
   */
  export const _keys: { [keys: string]: Field<MainCategories> } = MainCategories._keyFields.reduce((acc: { [keys: string]: Field<MainCategories> }, field: Field<MainCategories>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
