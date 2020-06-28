"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Products = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var ProductsRequestBuilder_1 = require("./ProductsRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "Products" of service "EPM_REF_APPS_PROD_MAN_SRV".
 */
var Products = /** @class */ (function (_super) {
    __extends(Products, _super);
    function Products() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `Products`.
     * @returns A builder that constructs instances of entity type `Products`.
     */
    Products.builder = function () {
        return core_1.Entity.entityBuilder(Products);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Products` entity type.
     * @returns A `Products` request builder.
     */
    Products.requestBuilder = function () {
        return new ProductsRequestBuilder_1.ProductsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Products`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Products`.
     */
    Products.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, Products);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Products.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Products.
     */
    Products._entityName = 'Products';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Products.
     */
    Products._serviceName = 'EPM_REF_APPS_PROD_MAN_SRV';
    /**
     * Default url path for the according service.
     */
    Products._defaultServicePath = '/sap/opu/odata/sap/EPM_REF_APPS_PROD_MAN_SRV';
    return Products;
}(core_1.Entity));
exports.Products = Products;
var Suppliers_1 = require("./Suppliers");
(function (Products) {
    /**
     * Static representation of the [[currencyCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Products.CURRENCY_CODE = new core_1.StringField('CurrencyCode', Products, 'Edm.String');
    /**
     * Static representation of the [[id]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Products.ID = new core_1.StringField('Id', Products, 'Edm.String');
    /**
     * Static representation of the [[stockQuantity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Products.STOCK_QUANTITY = new core_1.NumberField('StockQuantity', Products, 'Edm.Int32');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Products.NAME = new core_1.StringField('Name', Products, 'Edm.String');
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Products.DESCRIPTION = new core_1.StringField('Description', Products, 'Edm.String');
    /**
     * Static representation of the [[subCategoryId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Products.SUB_CATEGORY_ID = new core_1.StringField('SubCategoryId', Products, 'Edm.String');
    /**
     * Static representation of the [[subCategoryName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Products.SUB_CATEGORY_NAME = new core_1.StringField('SubCategoryName', Products, 'Edm.String');
    /**
     * Static representation of the [[mainCategoryId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Products.MAIN_CATEGORY_ID = new core_1.StringField('MainCategoryId', Products, 'Edm.String');
    /**
     * Static representation of the [[mainCategoryName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Products.MAIN_CATEGORY_NAME = new core_1.StringField('MainCategoryName', Products, 'Edm.String');
    /**
     * Static representation of the [[supplierId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Products.SUPPLIER_ID = new core_1.StringField('SupplierId', Products, 'Edm.String');
    /**
     * Static representation of the [[supplierName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Products.SUPPLIER_NAME = new core_1.StringField('SupplierName', Products, 'Edm.String');
    /**
     * Static representation of the [[lastModified]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Products.LAST_MODIFIED = new core_1.DateField('LastModified', Products, 'Edm.DateTime');
    /**
     * Static representation of the [[price]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Products.PRICE = new core_1.BigNumberField('Price', Products, 'Edm.Decimal');
    /**
     * Static representation of the [[dimensionHeight]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Products.DIMENSION_HEIGHT = new core_1.BigNumberField('DimensionHeight', Products, 'Edm.Decimal');
    /**
     * Static representation of the [[dimensionWidth]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Products.DIMENSION_WIDTH = new core_1.BigNumberField('DimensionWidth', Products, 'Edm.Decimal');
    /**
     * Static representation of the [[dimensionDepth]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Products.DIMENSION_DEPTH = new core_1.BigNumberField('DimensionDepth', Products, 'Edm.Decimal');
    /**
     * Static representation of the [[dimensionUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Products.DIMENSION_UNIT = new core_1.StringField('DimensionUnit', Products, 'Edm.String');
    /**
     * Static representation of the [[imageUrl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Products.IMAGE_URL = new core_1.StringField('ImageUrl', Products, 'Edm.String');
    /**
     * Static representation of the [[quantityUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Products.QUANTITY_UNIT = new core_1.StringField('QuantityUnit', Products, 'Edm.String');
    /**
     * Static representation of the [[measureUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Products.MEASURE_UNIT = new core_1.StringField('MeasureUnit', Products, 'Edm.String');
    /**
     * Static representation of the [[averageRating]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Products.AVERAGE_RATING = new core_1.BigNumberField('AverageRating', Products, 'Edm.Decimal');
    /**
     * Static representation of the [[ratingCount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Products.RATING_COUNT = new core_1.NumberField('RatingCount', Products, 'Edm.Int32');
    /**
     * Static representation of the [[weightMeasure]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Products.WEIGHT_MEASURE = new core_1.BigNumberField('WeightMeasure', Products, 'Edm.Decimal');
    /**
     * Static representation of the [[weightUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Products.WEIGHT_UNIT = new core_1.StringField('WeightUnit', Products, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[supplier]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Products.SUPPLIER = new core_1.OneToOneLink('Supplier', Products, Suppliers_1.Suppliers);
    /**
     * All fields of the Products entity.
     */
    Products._allFields = [
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
    Products.ALL_FIELDS = new core_1.AllFields('*', Products);
    /**
     * All key fields of the Products entity.
     */
    Products._keyFields = [Products.ID];
    /**
     * Mapping of all key field names to the respective static field property Products.
     */
    Products._keys = Products._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Products = exports.Products || (exports.Products = {}));
exports.Products = Products;
//# sourceMappingURL=Products.js.map