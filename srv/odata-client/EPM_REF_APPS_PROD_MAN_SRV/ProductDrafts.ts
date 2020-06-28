/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductDraftsRequestBuilder } from './ProductDraftsRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Field, Link, OneToOneLink, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "ProductDrafts" of service "EPM_REF_APPS_PROD_MAN_SRV".
 */
export class ProductDrafts extends Entity implements ProductDraftsType {
  /**
   * Technical entity name for ProductDrafts.
   */
  static _entityName = 'ProductDrafts';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for ProductDrafts.
   */
  static _serviceName = 'EPM_REF_APPS_PROD_MAN_SRV';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/sap/opu/odata/sap/EPM_REF_APPS_PROD_MAN_SRV';
  /**
   * ID.
   * Maximum length: 10.
   */
  id!: string;
  /**
   * Zeitstempel.
   * @nullable
   */
  lastModified?: Moment;
  /**
   * Ist neu.
   * @nullable
   */
  isNewProduct?: boolean;
  /**
   * Ist dirty.
   * @nullable
   */
  isDirty?: boolean;
  /**
   * Produkt-ID.
   * Maximum length: 10.
   * @nullable
   */
  productId?: string;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  name?: string;
  /**
   * Beschreib.
   * Maximum length: 255.
   * @nullable
   */
  description?: string;
  /**
   * Maßeinheit.
   * Maximum length: 3.
   * @nullable
   */
  dimensionUnit?: string;
  /**
   * Maßangaben.
   * @nullable
   */
  dimensionHeight?: BigNumber;
  /**
   * Maßangaben.
   * @nullable
   */
  dimensionWidth?: BigNumber;
  /**
   * Maßangaben.
   * @nullable
   */
  dimensionDepth?: BigNumber;
  /**
   * Maßeinheit.
   * Maximum length: 3.
   * @nullable
   */
  weightUnit?: string;
  /**
   * Gewicht.
   * @nullable
   */
  weightMeasure?: BigNumber;
  /**
   * Preis.
   * @nullable
   */
  price?: BigNumber;
  /**
   * Währung.
   * Maximum length: 5.
   * @nullable
   */
  currencyCode?: string;
  /**
   * Maßeinheit.
   * Maximum length: 3.
   * @nullable
   */
  quantityUnit?: string;
  /**
   * Bild.
   * Maximum length: 255.
   * @nullable
   */
  imageUrl?: string;
  /**
   * Geschäftspartner-ID.
   * Maximum length: 10.
   * @nullable
   */
  supplierId?: string;
  /**
   * Firma.
   * Maximum length: 80.
   * @nullable
   */
  supplierName?: string;
  /**
   * Kategorie.
   * Maximum length: 40.
   * @nullable
   */
  subCategoryId?: string;
  /**
   * Kategorie.
   * Maximum length: 40.
   */
  subCategoryName!: string;
  /**
   * Hauptkategorie.
   * Maximum length: 40.
   * @nullable
   */
  mainCategoryId?: string;
  /**
   * Hauptkategorie.
   * Maximum length: 40.
   */
  mainCategoryName!: string;
  /**
   * Zeitstempel.
   */
  createdAt!: Moment;
  /**
   * Änderer.
   * Maximum length: 12.
   */
  createdBy!: string;
  /**
   * Zeitstempel.
   * @nullable
   */
  expiresAt?: Moment;
  /**
   * One-to-many navigation property to the [[ImageDrafts]] entity.
   */
  images!: ImageDrafts[];
  /**
   * One-to-one navigation property to the [[SubCategories]] entity.
   */
  subCategory!: SubCategories;

  /**
   * Returns an entity builder to construct instances `ProductDrafts`.
   * @returns A builder that constructs instances of entity type `ProductDrafts`.
   */
  static builder(): EntityBuilderType<ProductDrafts, ProductDraftsTypeForceMandatory> {
    return Entity.entityBuilder(ProductDrafts);
  }

  /**
   * Returns a request builder to construct requests for operations on the `ProductDrafts` entity type.
   * @returns A `ProductDrafts` request builder.
   */
  static requestBuilder(): ProductDraftsRequestBuilder {
    return new ProductDraftsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `ProductDrafts`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `ProductDrafts`.
   */
  static customField(fieldName: string): CustomField<ProductDrafts> {
    return Entity.customFieldSelector(fieldName, ProductDrafts);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { ImageDrafts, ImageDraftsType } from './ImageDrafts';
import { SubCategories, SubCategoriesType } from './SubCategories';

export interface ProductDraftsType {
  id: string;
  lastModified?: Moment;
  isNewProduct?: boolean;
  isDirty?: boolean;
  productId?: string;
  name?: string;
  description?: string;
  dimensionUnit?: string;
  dimensionHeight?: BigNumber;
  dimensionWidth?: BigNumber;
  dimensionDepth?: BigNumber;
  weightUnit?: string;
  weightMeasure?: BigNumber;
  price?: BigNumber;
  currencyCode?: string;
  quantityUnit?: string;
  imageUrl?: string;
  supplierId?: string;
  supplierName?: string;
  subCategoryId?: string;
  subCategoryName: string;
  mainCategoryId?: string;
  mainCategoryName: string;
  createdAt: Moment;
  createdBy: string;
  expiresAt?: Moment;
  images: ImageDraftsType[];
  subCategory: SubCategoriesType;
}

export interface ProductDraftsTypeForceMandatory {
  id: string;
  lastModified: Moment;
  isNewProduct: boolean;
  isDirty: boolean;
  productId: string;
  name: string;
  description: string;
  dimensionUnit: string;
  dimensionHeight: BigNumber;
  dimensionWidth: BigNumber;
  dimensionDepth: BigNumber;
  weightUnit: string;
  weightMeasure: BigNumber;
  price: BigNumber;
  currencyCode: string;
  quantityUnit: string;
  imageUrl: string;
  supplierId: string;
  supplierName: string;
  subCategoryId: string;
  subCategoryName: string;
  mainCategoryId: string;
  mainCategoryName: string;
  createdAt: Moment;
  createdBy: string;
  expiresAt: Moment;
  images: ImageDraftsType[];
  subCategory: SubCategoriesType;
}

export namespace ProductDrafts {
  /**
   * Static representation of the [[id]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ID: StringField<ProductDrafts> = new StringField('Id', ProductDrafts, 'Edm.String');
  /**
   * Static representation of the [[lastModified]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED: DateField<ProductDrafts> = new DateField('LastModified', ProductDrafts, 'Edm.DateTime');
  /**
   * Static representation of the [[isNewProduct]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_NEW_PRODUCT: BooleanField<ProductDrafts> = new BooleanField('IsNewProduct', ProductDrafts, 'Edm.Boolean');
  /**
   * Static representation of the [[isDirty]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_DIRTY: BooleanField<ProductDrafts> = new BooleanField('IsDirty', ProductDrafts, 'Edm.Boolean');
  /**
   * Static representation of the [[productId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRODUCT_ID: StringField<ProductDrafts> = new StringField('ProductId', ProductDrafts, 'Edm.String');
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<ProductDrafts> = new StringField('Name', ProductDrafts, 'Edm.String');
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<ProductDrafts> = new StringField('Description', ProductDrafts, 'Edm.String');
  /**
   * Static representation of the [[dimensionUnit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DIMENSION_UNIT: StringField<ProductDrafts> = new StringField('DimensionUnit', ProductDrafts, 'Edm.String');
  /**
   * Static representation of the [[dimensionHeight]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DIMENSION_HEIGHT: BigNumberField<ProductDrafts> = new BigNumberField('DimensionHeight', ProductDrafts, 'Edm.Decimal');
  /**
   * Static representation of the [[dimensionWidth]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DIMENSION_WIDTH: BigNumberField<ProductDrafts> = new BigNumberField('DimensionWidth', ProductDrafts, 'Edm.Decimal');
  /**
   * Static representation of the [[dimensionDepth]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DIMENSION_DEPTH: BigNumberField<ProductDrafts> = new BigNumberField('DimensionDepth', ProductDrafts, 'Edm.Decimal');
  /**
   * Static representation of the [[weightUnit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WEIGHT_UNIT: StringField<ProductDrafts> = new StringField('WeightUnit', ProductDrafts, 'Edm.String');
  /**
   * Static representation of the [[weightMeasure]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WEIGHT_MEASURE: BigNumberField<ProductDrafts> = new BigNumberField('WeightMeasure', ProductDrafts, 'Edm.Decimal');
  /**
   * Static representation of the [[price]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRICE: BigNumberField<ProductDrafts> = new BigNumberField('Price', ProductDrafts, 'Edm.Decimal');
  /**
   * Static representation of the [[currencyCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENCY_CODE: StringField<ProductDrafts> = new StringField('CurrencyCode', ProductDrafts, 'Edm.String');
  /**
   * Static representation of the [[quantityUnit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const QUANTITY_UNIT: StringField<ProductDrafts> = new StringField('QuantityUnit', ProductDrafts, 'Edm.String');
  /**
   * Static representation of the [[imageUrl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IMAGE_URL: StringField<ProductDrafts> = new StringField('ImageUrl', ProductDrafts, 'Edm.String');
  /**
   * Static representation of the [[supplierId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPPLIER_ID: StringField<ProductDrafts> = new StringField('SupplierId', ProductDrafts, 'Edm.String');
  /**
   * Static representation of the [[supplierName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPPLIER_NAME: StringField<ProductDrafts> = new StringField('SupplierName', ProductDrafts, 'Edm.String');
  /**
   * Static representation of the [[subCategoryId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUB_CATEGORY_ID: StringField<ProductDrafts> = new StringField('SubCategoryId', ProductDrafts, 'Edm.String');
  /**
   * Static representation of the [[subCategoryName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUB_CATEGORY_NAME: StringField<ProductDrafts> = new StringField('SubCategoryName', ProductDrafts, 'Edm.String');
  /**
   * Static representation of the [[mainCategoryId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MAIN_CATEGORY_ID: StringField<ProductDrafts> = new StringField('MainCategoryId', ProductDrafts, 'Edm.String');
  /**
   * Static representation of the [[mainCategoryName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MAIN_CATEGORY_NAME: StringField<ProductDrafts> = new StringField('MainCategoryName', ProductDrafts, 'Edm.String');
  /**
   * Static representation of the [[createdAt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_AT: DateField<ProductDrafts> = new DateField('CreatedAt', ProductDrafts, 'Edm.DateTime');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<ProductDrafts> = new StringField('CreatedBy', ProductDrafts, 'Edm.String');
  /**
   * Static representation of the [[expiresAt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXPIRES_AT: DateField<ProductDrafts> = new DateField('ExpiresAt', ProductDrafts, 'Edm.DateTime');
  /**
   * Static representation of the one-to-many navigation property [[images]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IMAGES: Link<ProductDrafts, ImageDrafts> = new Link('Images', ProductDrafts, ImageDrafts);
  /**
   * Static representation of the one-to-one navigation property [[subCategory]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUB_CATEGORY: OneToOneLink<ProductDrafts, SubCategories> = new OneToOneLink('SubCategory', ProductDrafts, SubCategories);
  /**
   * All fields of the ProductDrafts entity.
   */
  export const _allFields: Array<StringField<ProductDrafts> | DateField<ProductDrafts> | BooleanField<ProductDrafts> | BigNumberField<ProductDrafts> | Link<ProductDrafts, ImageDrafts> | OneToOneLink<ProductDrafts, SubCategories>> = [
    ProductDrafts.ID,
    ProductDrafts.LAST_MODIFIED,
    ProductDrafts.IS_NEW_PRODUCT,
    ProductDrafts.IS_DIRTY,
    ProductDrafts.PRODUCT_ID,
    ProductDrafts.NAME,
    ProductDrafts.DESCRIPTION,
    ProductDrafts.DIMENSION_UNIT,
    ProductDrafts.DIMENSION_HEIGHT,
    ProductDrafts.DIMENSION_WIDTH,
    ProductDrafts.DIMENSION_DEPTH,
    ProductDrafts.WEIGHT_UNIT,
    ProductDrafts.WEIGHT_MEASURE,
    ProductDrafts.PRICE,
    ProductDrafts.CURRENCY_CODE,
    ProductDrafts.QUANTITY_UNIT,
    ProductDrafts.IMAGE_URL,
    ProductDrafts.SUPPLIER_ID,
    ProductDrafts.SUPPLIER_NAME,
    ProductDrafts.SUB_CATEGORY_ID,
    ProductDrafts.SUB_CATEGORY_NAME,
    ProductDrafts.MAIN_CATEGORY_ID,
    ProductDrafts.MAIN_CATEGORY_NAME,
    ProductDrafts.CREATED_AT,
    ProductDrafts.CREATED_BY,
    ProductDrafts.EXPIRES_AT,
    ProductDrafts.IMAGES,
    ProductDrafts.SUB_CATEGORY
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<ProductDrafts> = new AllFields('*', ProductDrafts);
  /**
   * All key fields of the ProductDrafts entity.
   */
  export const _keyFields: Array<Field<ProductDrafts>> = [ProductDrafts.ID];
  /**
   * Mapping of all key field names to the respective static field property ProductDrafts.
   */
  export const _keys: { [keys: string]: Field<ProductDrafts> } = ProductDrafts._keyFields.reduce((acc: { [keys: string]: Field<ProductDrafts> }, field: Field<ProductDrafts>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
