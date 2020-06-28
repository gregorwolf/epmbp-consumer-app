/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SubCategoriesRequestBuilder } from './SubCategoriesRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, OneToOneLink, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "SubCategories" of service "EPM_REF_APPS_PROD_MAN_SRV".
 */
export class SubCategories extends Entity implements SubCategoriesType {
  /**
   * Technical entity name for SubCategories.
   */
  static _entityName = 'SubCategories';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for SubCategories.
   */
  static _serviceName = 'EPM_REF_APPS_PROD_MAN_SRV';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/sap/opu/odata/sap/EPM_REF_APPS_PROD_MAN_SRV';
  /**
   * Kategorie.
   * Maximum length: 40.
   */
  id!: string;
  /**
   * Kategorie.
   * Maximum length: 40.
   */
  name!: string;
  /**
   * Hauptkategorie.
   * Maximum length: 40.
   */
  mainCategoryId!: string;
  /**
   * Hauptkategorie.
   * Maximum length: 40.
   */
  mainCategoryName!: string;
  /**
   * One-to-one navigation property to the [[MainCategories]] entity.
   */
  mainCategory!: MainCategories;

  /**
   * Returns an entity builder to construct instances `SubCategories`.
   * @returns A builder that constructs instances of entity type `SubCategories`.
   */
  static builder(): EntityBuilderType<SubCategories, SubCategoriesTypeForceMandatory> {
    return Entity.entityBuilder(SubCategories);
  }

  /**
   * Returns a request builder to construct requests for operations on the `SubCategories` entity type.
   * @returns A `SubCategories` request builder.
   */
  static requestBuilder(): SubCategoriesRequestBuilder {
    return new SubCategoriesRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `SubCategories`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `SubCategories`.
   */
  static customField(fieldName: string): CustomField<SubCategories> {
    return Entity.customFieldSelector(fieldName, SubCategories);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { MainCategories, MainCategoriesType } from './MainCategories';

export interface SubCategoriesType {
  id: string;
  name: string;
  mainCategoryId: string;
  mainCategoryName: string;
  mainCategory: MainCategoriesType;
}

export interface SubCategoriesTypeForceMandatory {
  id: string;
  name: string;
  mainCategoryId: string;
  mainCategoryName: string;
  mainCategory: MainCategoriesType;
}

export namespace SubCategories {
  /**
   * Static representation of the [[id]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ID: StringField<SubCategories> = new StringField('Id', SubCategories, 'Edm.String');
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<SubCategories> = new StringField('Name', SubCategories, 'Edm.String');
  /**
   * Static representation of the [[mainCategoryId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MAIN_CATEGORY_ID: StringField<SubCategories> = new StringField('MainCategoryId', SubCategories, 'Edm.String');
  /**
   * Static representation of the [[mainCategoryName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MAIN_CATEGORY_NAME: StringField<SubCategories> = new StringField('MainCategoryName', SubCategories, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[mainCategory]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MAIN_CATEGORY: OneToOneLink<SubCategories, MainCategories> = new OneToOneLink('MainCategory', SubCategories, MainCategories);
  /**
   * All fields of the SubCategories entity.
   */
  export const _allFields: Array<StringField<SubCategories> | OneToOneLink<SubCategories, MainCategories>> = [
    SubCategories.ID,
    SubCategories.NAME,
    SubCategories.MAIN_CATEGORY_ID,
    SubCategories.MAIN_CATEGORY_NAME,
    SubCategories.MAIN_CATEGORY
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<SubCategories> = new AllFields('*', SubCategories);
  /**
   * All key fields of the SubCategories entity.
   */
  export const _keyFields: Array<Field<SubCategories>> = [SubCategories.ID];
  /**
   * Mapping of all key field names to the respective static field property SubCategories.
   */
  export const _keys: { [keys: string]: Field<SubCategories> } = SubCategories._keyFields.reduce((acc: { [keys: string]: Field<SubCategories> }, field: Field<SubCategories>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
