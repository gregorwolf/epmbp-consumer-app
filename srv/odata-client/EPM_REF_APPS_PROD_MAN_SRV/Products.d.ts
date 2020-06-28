import { ProductsRequestBuilder } from './ProductsRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Field, NumberField, OneToOneLink, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "Products" of service "EPM_REF_APPS_PROD_MAN_SRV".
 */
export declare class Products extends Entity implements ProductsType {
    /**
     * Technical entity name for Products.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Products.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Währungscode.
     * Maximum length: 5.
     */
    currencyCode: string;
    /**
     * Id.
     * Maximum length: 10.
     */
    id: string;
    /**
     * Verfügbarkeit.
     */
    stockQuantity: number;
    /**
     * Name.
     * Maximum length: 255.
     */
    name: string;
    /**
     * Beschreibung.
     * Maximum length: 255.
     */
    description: string;
    /**
     * Kategorie.
     * Maximum length: 40.
     */
    subCategoryId: string;
    /**
     * Kategorie.
     * Maximum length: 40.
     */
    subCategoryName: string;
    /**
     * Hauptkategorie.
     * Maximum length: 40.
     */
    mainCategoryId: string;
    /**
     * Hauptkategorie.
     * Maximum length: 40.
     */
    mainCategoryName: string;
    /**
     * Supplier Id.
     * Maximum length: 10.
     */
    supplierId: string;
    /**
     * Lieferant.
     * Maximum length: 80.
     */
    supplierName: string;
    /**
     * Geändert um.
     * @nullable
     */
    lastModified?: Moment;
    /**
     * Preis.
     */
    price: BigNumber;
    /**
     * Höhe.
     */
    dimensionHeight: BigNumber;
    /**
     * Breite.
     */
    dimensionWidth: BigNumber;
    /**
     * Dimension Depth.
     */
    dimensionDepth: BigNumber;
    /**
     * Dimension Unit.
     * Maximum length: 10.
     */
    dimensionUnit: string;
    /**
     * Bild.
     * Maximum length: 255.
     */
    imageUrl: string;
    /**
     * Quantity Unit.
     * Maximum length: 3.
     */
    quantityUnit: string;
    /**
     * Measure Unit.
     * Maximum length: 10.
     */
    measureUnit: string;
    /**
     * Durchschn. Bewertung.
     */
    averageRating: BigNumber;
    /**
     * Anzahl der Prüfungen.
     */
    ratingCount: number;
    /**
     * Gewicht.
     */
    weightMeasure: BigNumber;
    /**
     * Weight Unit.
     * Maximum length: 10.
     */
    weightUnit: string;
    /**
     * One-to-one navigation property to the [[Suppliers]] entity.
     */
    supplier: Suppliers;
    /**
     * Returns an entity builder to construct instances `Products`.
     * @returns A builder that constructs instances of entity type `Products`.
     */
    static builder(): EntityBuilderType<Products, ProductsTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `Products` entity type.
     * @returns A `Products` request builder.
     */
    static requestBuilder(): ProductsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Products`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Products`.
     */
    static customField(fieldName: string): CustomField<Products>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
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
export declare namespace Products {
    /**
     * Static representation of the [[currencyCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CURRENCY_CODE: StringField<Products>;
    /**
     * Static representation of the [[id]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ID: StringField<Products>;
    /**
     * Static representation of the [[stockQuantity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STOCK_QUANTITY: NumberField<Products>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<Products>;
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION: StringField<Products>;
    /**
     * Static representation of the [[subCategoryId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUB_CATEGORY_ID: StringField<Products>;
    /**
     * Static representation of the [[subCategoryName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUB_CATEGORY_NAME: StringField<Products>;
    /**
     * Static representation of the [[mainCategoryId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MAIN_CATEGORY_ID: StringField<Products>;
    /**
     * Static representation of the [[mainCategoryName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MAIN_CATEGORY_NAME: StringField<Products>;
    /**
     * Static representation of the [[supplierId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUPPLIER_ID: StringField<Products>;
    /**
     * Static representation of the [[supplierName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUPPLIER_NAME: StringField<Products>;
    /**
     * Static representation of the [[lastModified]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED: DateField<Products>;
    /**
     * Static representation of the [[price]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRICE: BigNumberField<Products>;
    /**
     * Static representation of the [[dimensionHeight]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DIMENSION_HEIGHT: BigNumberField<Products>;
    /**
     * Static representation of the [[dimensionWidth]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DIMENSION_WIDTH: BigNumberField<Products>;
    /**
     * Static representation of the [[dimensionDepth]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DIMENSION_DEPTH: BigNumberField<Products>;
    /**
     * Static representation of the [[dimensionUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DIMENSION_UNIT: StringField<Products>;
    /**
     * Static representation of the [[imageUrl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IMAGE_URL: StringField<Products>;
    /**
     * Static representation of the [[quantityUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const QUANTITY_UNIT: StringField<Products>;
    /**
     * Static representation of the [[measureUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MEASURE_UNIT: StringField<Products>;
    /**
     * Static representation of the [[averageRating]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AVERAGE_RATING: BigNumberField<Products>;
    /**
     * Static representation of the [[ratingCount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RATING_COUNT: NumberField<Products>;
    /**
     * Static representation of the [[weightMeasure]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WEIGHT_MEASURE: BigNumberField<Products>;
    /**
     * Static representation of the [[weightUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WEIGHT_UNIT: StringField<Products>;
    /**
     * Static representation of the one-to-one navigation property [[supplier]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUPPLIER: OneToOneLink<Products, Suppliers>;
    /**
     * All fields of the Products entity.
     */
    const _allFields: Array<StringField<Products> | NumberField<Products> | DateField<Products> | BigNumberField<Products> | OneToOneLink<Products, Suppliers>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<Products>;
    /**
     * All key fields of the Products entity.
     */
    const _keyFields: Array<Field<Products>>;
    /**
     * Mapping of all key field names to the respective static field property Products.
     */
    const _keys: {
        [keys: string]: Field<Products>;
    };
}
//# sourceMappingURL=Products.d.ts.map