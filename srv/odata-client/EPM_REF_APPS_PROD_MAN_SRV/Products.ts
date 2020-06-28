/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductsRequestBuilder } from './ProductsRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Field, NumberField, OneToOneLink, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "Products" of service "EPM_REF_APPS_PROD_MAN_SRV".
 */
export class Products extends Entity implements ProductsType {
  /**
   * Technical entity name for Products.
   */
  static _entityName = 'Products';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for Products.
   */
  static _serviceName = 'EPM_REF_APPS_PROD_MAN_SRV';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/sap/opu/odata/sap/EPM_REF_APPS_PROD_MAN_SRV';
  /**
   * Währungscode.
   * Maximum length: 5.
   */
  currencyCode!: string;
  /**
   * Id.
   * Maximum length: 10.
   */
  id!: string;
  /**
   * Verfügbarkeit.
   */
  stockQuantity!: number;
  /**
   * Name.
   * Maximum length: 255.
   */
  name!: string;
  /**
   * Beschreibung.
   * Maximum length: 255.
   */
  description!: string;
  /**
   * Kategorie.
   * Maximum length: 40.
   */
  subCategoryId!: string;
  /**
   * Kategorie.
   * Maximum length: 40.
   */
  subCategoryName!: string;
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
   * Supplier Id.
   * Maximum length: 10.
   */
  supplierId!: string;
  /**
   * Lieferant.
   * Maximum length: 80.
   */
  supplierName!: string;
  /**
   * Geändert um.
   * @nullable
   */
  lastModified?: Moment;
  /**
   * Preis.
   */
  price!: BigNumber;
  /**
   * Höhe.
   */
  dimensionHeight!: BigNumber;
  /**
   * Breite.
   */
  dimensionWidth!: BigNumber;
  /**
   * Dimension Depth.
   */
  dimensionDepth!: BigNumber;
  /**
   * Dimension Unit.
   * Maximum length: 10.
   */
  dimensionUnit!: string;
  /**
   * Bild.
   * Maximum length: 255.
   */
  imageUrl!: string;
  /**
   * Quantity Unit.
   * Maximum length: 3.
   */
  quantityUnit!: string;
  /**
   * Measure Unit.
   * Maximum length: 10.
   */
  measureUnit!: string;
  /**
   * Durchschn. Bewertung.
   */
  averageRating!: BigNumber;
  /**
   * Anzahl der Prüfungen.
   */
  ratingCount!: number;
  /**
   * Gewicht.
   */
  weightMeasure!: BigNumber;
  /**
   * Weight Unit.
   * Maximum length: 10.
   */
  weightUnit!: string;
  /**
   * One-to-one navigation property to the [[Suppliers]] entity.
   */
  supplier!: Suppliers;

  /**
   * Returns an entity builder to construct instances `Products`.
   * @returns A builder that constructs instances of entity type `Products`.
   */
  static builder(): EntityBuilderType<Products, ProductsTypeForceMandatory> {
    return Entity.entityBuilder(Products);
  }

  /**
   * Returns a request builder to construct requests for operations on the `Products` entity type.
   * @returns A `Products` request builder.
   */
  static requestBuilder(): ProductsRequestBuilder {
    return new ProductsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `Products`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `Products`.
   */
  static customField(fieldName: string): CustomField<Products> {
    return Entity.customFieldSelector(fieldName, Products);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { Suppliers, SuppliersType } from './Suppliers';

export interface ProductsType {
  currencyCode: string;
  id: string;
  stockQuantity: number;
  name: string;
  description: string;
  subCategoryId: string;
  subCategoryName: string;
  mainCategoryId: string;
  mainCategoryName: string;
  supplierId: string;
  supplierName: string;
  lastModified?: Moment;
  price: BigNumber;
  dimensionHeight: BigNumber;
  dimensionWidth: BigNumber;
  dimensionDepth: BigNumber;
  dimensionUnit: string;
  imageUrl: string;
  quantityUnit: string;
  measureUnit: string;
  averageRating: BigNumber;
  ratingCount: number;
  weightMeasure: BigNumber;
  weightUnit: string;
  supplier: SuppliersType;
}

export interface ProductsTypeForceMandatory {
  currencyCode: string;
  id: string;
  stockQuantity: number;
  name: string;
  description: string;
  subCategoryId: string;
  subCategoryName: string;
  mainCategoryId: string;
  mainCategoryName: string;
  supplierId: string;
  supplierName: string;
  lastModified: Moment;
  price: BigNumber;
  dimensionHeight: BigNumber;
  dimensionWidth: BigNumber;
  dimensionDepth: BigNumber;
  dimensionUnit: string;
  imageUrl: string;
  quantityUnit: string;
  measureUnit: string;
  averageRating: BigNumber;
  ratingCount: number;
  weightMeasure: BigNumber;
  weightUnit: string;
  supplier: SuppliersType;
}

export namespace Products {
  /**
   * Static representation of the [[currencyCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENCY_CODE: StringField<Products> = new StringField('CurrencyCode', Products, 'Edm.String');
  /**
   * Static representation of the [[id]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ID: StringField<Products> = new StringField('Id', Products, 'Edm.String');
  /**
   * Static representation of the [[stockQuantity]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STOCK_QUANTITY: NumberField<Products> = new NumberField('StockQuantity', Products, 'Edm.Int32');
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<Products> = new StringField('Name', Products, 'Edm.String');
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<Products> = new StringField('Description', Products, 'Edm.String');
  /**
   * Static representation of the [[subCategoryId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUB_CATEGORY_ID: StringField<Products> = new StringField('SubCategoryId', Products, 'Edm.String');
  /**
   * Static representation of the [[subCategoryName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUB_CATEGORY_NAME: StringField<Products> = new StringField('SubCategoryName', Products, 'Edm.String');
  /**
   * Static representation of the [[mainCategoryId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MAIN_CATEGORY_ID: StringField<Products> = new StringField('MainCategoryId', Products, 'Edm.String');
  /**
   * Static representation of the [[mainCategoryName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MAIN_CATEGORY_NAME: StringField<Products> = new StringField('MainCategoryName', Products, 'Edm.String');
  /**
   * Static representation of the [[supplierId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPPLIER_ID: StringField<Products> = new StringField('SupplierId', Products, 'Edm.String');
  /**
   * Static representation of the [[supplierName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPPLIER_NAME: StringField<Products> = new StringField('SupplierName', Products, 'Edm.String');
  /**
   * Static representation of the [[lastModified]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED: DateField<Products> = new DateField('LastModified', Products, 'Edm.DateTime');
  /**
   * Static representation of the [[price]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRICE: BigNumberField<Products> = new BigNumberField('Price', Products, 'Edm.Decimal');
  /**
   * Static representation of the [[dimensionHeight]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DIMENSION_HEIGHT: BigNumberField<Products> = new BigNumberField('DimensionHeight', Products, 'Edm.Decimal');
  /**
   * Static representation of the [[dimensionWidth]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DIMENSION_WIDTH: BigNumberField<Products> = new BigNumberField('DimensionWidth', Products, 'Edm.Decimal');
  /**
   * Static representation of the [[dimensionDepth]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DIMENSION_DEPTH: BigNumberField<Products> = new BigNumberField('DimensionDepth', Products, 'Edm.Decimal');
  /**
   * Static representation of the [[dimensionUnit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DIMENSION_UNIT: StringField<Products> = new StringField('DimensionUnit', Products, 'Edm.String');
  /**
   * Static representation of the [[imageUrl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IMAGE_URL: StringField<Products> = new StringField('ImageUrl', Products, 'Edm.String');
  /**
   * Static representation of the [[quantityUnit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const QUANTITY_UNIT: StringField<Products> = new StringField('QuantityUnit', Products, 'Edm.String');
  /**
   * Static representation of the [[measureUnit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MEASURE_UNIT: StringField<Products> = new StringField('MeasureUnit', Products, 'Edm.String');
  /**
   * Static representation of the [[averageRating]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AVERAGE_RATING: BigNumberField<Products> = new BigNumberField('AverageRating', Products, 'Edm.Decimal');
  /**
   * Static representation of the [[ratingCount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RATING_COUNT: NumberField<Products> = new NumberField('RatingCount', Products, 'Edm.Int32');
  /**
   * Static representation of the [[weightMeasure]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WEIGHT_MEASURE: BigNumberField<Products> = new BigNumberField('WeightMeasure', Products, 'Edm.Decimal');
  /**
   * Static representation of the [[weightUnit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WEIGHT_UNIT: StringField<Products> = new StringField('WeightUnit', Products, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[supplier]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPPLIER: OneToOneLink<Products, Suppliers> = new OneToOneLink('Supplier', Products, Suppliers);
  /**
   * All fields of the Products entity.
   */
  export const _allFields: Array<StringField<Products> | NumberField<Products> | DateField<Products> | BigNumberField<Products> | OneToOneLink<Products, Suppliers>> = [
    Products.CURRENCY_CODE,
    Products.ID,
    Products.STOCK_QUANTITY,
    Products.NAME,
    Products.DESCRIPTION,
    Products.SUB_CATEGORY_ID,
    Products.SUB_CATEGORY_NAME,
    Products.MAIN_CATEGORY_ID,
    Products.MAIN_CATEGORY_NAME,
    Products.SUPPLIER_ID,
    Products.SUPPLIER_NAME,
    Products.LAST_MODIFIED,
    Products.PRICE,
    Products.DIMENSION_HEIGHT,
    Products.DIMENSION_WIDTH,
    Products.DIMENSION_DEPTH,
    Products.DIMENSION_UNIT,
    Products.IMAGE_URL,
    Products.QUANTITY_UNIT,
    Products.MEASURE_UNIT,
    Products.AVERAGE_RATING,
    Products.RATING_COUNT,
    Products.WEIGHT_MEASURE,
    Products.WEIGHT_UNIT,
    Products.SUPPLIER
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<Products> = new AllFields('*', Products);
  /**
   * All key fields of the Products entity.
   */
  export const _keyFields: Array<Field<Products>> = [Products.ID];
  /**
   * Mapping of all key field names to the respective static field property Products.
   */
  export const _keys: { [keys: string]: Field<Products> } = Products._keyFields.reduce((acc: { [keys: string]: Field<Products> }, field: Field<Products>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
