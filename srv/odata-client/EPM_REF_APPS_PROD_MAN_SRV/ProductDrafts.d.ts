import { ProductDraftsRequestBuilder } from './ProductDraftsRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Field, Link, OneToOneLink, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "ProductDrafts" of service "EPM_REF_APPS_PROD_MAN_SRV".
 */
export declare class ProductDrafts extends Entity implements ProductDraftsType {
    /**
     * Technical entity name for ProductDrafts.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for ProductDrafts.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * ID.
     * Maximum length: 10.
     */
    id: string;
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
    subCategoryName: string;
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
    mainCategoryName: string;
    /**
     * Zeitstempel.
     */
    createdAt: Moment;
    /**
     * Änderer.
     * Maximum length: 12.
     */
    createdBy: string;
    /**
     * Zeitstempel.
     * @nullable
     */
    expiresAt?: Moment;
    /**
     * One-to-many navigation property to the [[ImageDrafts]] entity.
     */
    images: ImageDrafts[];
    /**
     * One-to-one navigation property to the [[SubCategories]] entity.
     */
    subCategory: SubCategories;
    /**
     * Returns an entity builder to construct instances `ProductDrafts`.
     * @returns A builder that constructs instances of entity type `ProductDrafts`.
     */
    static builder(): EntityBuilderType<ProductDrafts, ProductDraftsTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `ProductDrafts` entity type.
     * @returns A `ProductDrafts` request builder.
     */
    static requestBuilder(): ProductDraftsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ProductDrafts`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ProductDrafts`.
     */
    static customField(fieldName: string): CustomField<ProductDrafts>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
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
export declare namespace ProductDrafts {
    /**
     * Static representation of the [[id]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ID: StringField<ProductDrafts>;
    /**
     * Static representation of the [[lastModified]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED: DateField<ProductDrafts>;
    /**
     * Static representation of the [[isNewProduct]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_NEW_PRODUCT: BooleanField<ProductDrafts>;
    /**
     * Static representation of the [[isDirty]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_DIRTY: BooleanField<ProductDrafts>;
    /**
     * Static representation of the [[productId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRODUCT_ID: StringField<ProductDrafts>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<ProductDrafts>;
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION: StringField<ProductDrafts>;
    /**
     * Static representation of the [[dimensionUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DIMENSION_UNIT: StringField<ProductDrafts>;
    /**
     * Static representation of the [[dimensionHeight]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DIMENSION_HEIGHT: BigNumberField<ProductDrafts>;
    /**
     * Static representation of the [[dimensionWidth]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DIMENSION_WIDTH: BigNumberField<ProductDrafts>;
    /**
     * Static representation of the [[dimensionDepth]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DIMENSION_DEPTH: BigNumberField<ProductDrafts>;
    /**
     * Static representation of the [[weightUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WEIGHT_UNIT: StringField<ProductDrafts>;
    /**
     * Static representation of the [[weightMeasure]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WEIGHT_MEASURE: BigNumberField<ProductDrafts>;
    /**
     * Static representation of the [[price]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRICE: BigNumberField<ProductDrafts>;
    /**
     * Static representation of the [[currencyCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CURRENCY_CODE: StringField<ProductDrafts>;
    /**
     * Static representation of the [[quantityUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const QUANTITY_UNIT: StringField<ProductDrafts>;
    /**
     * Static representation of the [[imageUrl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IMAGE_URL: StringField<ProductDrafts>;
    /**
     * Static representation of the [[supplierId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUPPLIER_ID: StringField<ProductDrafts>;
    /**
     * Static representation of the [[supplierName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUPPLIER_NAME: StringField<ProductDrafts>;
    /**
     * Static representation of the [[subCategoryId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUB_CATEGORY_ID: StringField<ProductDrafts>;
    /**
     * Static representation of the [[subCategoryName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUB_CATEGORY_NAME: StringField<ProductDrafts>;
    /**
     * Static representation of the [[mainCategoryId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MAIN_CATEGORY_ID: StringField<ProductDrafts>;
    /**
     * Static representation of the [[mainCategoryName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MAIN_CATEGORY_NAME: StringField<ProductDrafts>;
    /**
     * Static representation of the [[createdAt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_AT: DateField<ProductDrafts>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<ProductDrafts>;
    /**
     * Static representation of the [[expiresAt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXPIRES_AT: DateField<ProductDrafts>;
    /**
     * Static representation of the one-to-many navigation property [[images]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IMAGES: Link<ProductDrafts, ImageDrafts>;
    /**
     * Static representation of the one-to-one navigation property [[subCategory]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUB_CATEGORY: OneToOneLink<ProductDrafts, SubCategories>;
    /**
     * All fields of the ProductDrafts entity.
     */
    const _allFields: Array<StringField<ProductDrafts> | DateField<ProductDrafts> | BooleanField<ProductDrafts> | BigNumberField<ProductDrafts> | Link<ProductDrafts, ImageDrafts> | OneToOneLink<ProductDrafts, SubCategories>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<ProductDrafts>;
    /**
     * All key fields of the ProductDrafts entity.
     */
    const _keyFields: Array<Field<ProductDrafts>>;
    /**
     * Mapping of all key field names to the respective static field property ProductDrafts.
     */
    const _keys: {
        [keys: string]: Field<ProductDrafts>;
    };
}
//# sourceMappingURL=ProductDrafts.d.ts.map