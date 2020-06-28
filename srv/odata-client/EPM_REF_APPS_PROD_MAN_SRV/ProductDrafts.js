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
exports.ProductDrafts = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var ProductDraftsRequestBuilder_1 = require("./ProductDraftsRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "ProductDrafts" of service "EPM_REF_APPS_PROD_MAN_SRV".
 */
var ProductDrafts = /** @class */ (function (_super) {
    __extends(ProductDrafts, _super);
    function ProductDrafts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `ProductDrafts`.
     * @returns A builder that constructs instances of entity type `ProductDrafts`.
     */
    ProductDrafts.builder = function () {
        return core_1.Entity.entityBuilder(ProductDrafts);
    };
    /**
     * Returns a request builder to construct requests for operations on the `ProductDrafts` entity type.
     * @returns A `ProductDrafts` request builder.
     */
    ProductDrafts.requestBuilder = function () {
        return new ProductDraftsRequestBuilder_1.ProductDraftsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ProductDrafts`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ProductDrafts`.
     */
    ProductDrafts.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, ProductDrafts);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    ProductDrafts.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for ProductDrafts.
     */
    ProductDrafts._entityName = 'ProductDrafts';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for ProductDrafts.
     */
    ProductDrafts._serviceName = 'EPM_REF_APPS_PROD_MAN_SRV';
    /**
     * Default url path for the according service.
     */
    ProductDrafts._defaultServicePath = '/sap/opu/odata/sap/EPM_REF_APPS_PROD_MAN_SRV';
    return ProductDrafts;
}(core_1.Entity));
exports.ProductDrafts = ProductDrafts;
var ImageDrafts_1 = require("./ImageDrafts");
var SubCategories_1 = require("./SubCategories");
(function (ProductDrafts) {
    /**
     * Static representation of the [[id]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProductDrafts.ID = new core_1.StringField('Id', ProductDrafts, 'Edm.String');
    /**
     * Static representation of the [[lastModified]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProductDrafts.LAST_MODIFIED = new core_1.DateField('LastModified', ProductDrafts, 'Edm.DateTime');
    /**
     * Static representation of the [[isNewProduct]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProductDrafts.IS_NEW_PRODUCT = new core_1.BooleanField('IsNewProduct', ProductDrafts, 'Edm.Boolean');
    /**
     * Static representation of the [[isDirty]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProductDrafts.IS_DIRTY = new core_1.BooleanField('IsDirty', ProductDrafts, 'Edm.Boolean');
    /**
     * Static representation of the [[productId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProductDrafts.PRODUCT_ID = new core_1.StringField('ProductId', ProductDrafts, 'Edm.String');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProductDrafts.NAME = new core_1.StringField('Name', ProductDrafts, 'Edm.String');
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProductDrafts.DESCRIPTION = new core_1.StringField('Description', ProductDrafts, 'Edm.String');
    /**
     * Static representation of the [[dimensionUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProductDrafts.DIMENSION_UNIT = new core_1.StringField('DimensionUnit', ProductDrafts, 'Edm.String');
    /**
     * Static representation of the [[dimensionHeight]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProductDrafts.DIMENSION_HEIGHT = new core_1.BigNumberField('DimensionHeight', ProductDrafts, 'Edm.Decimal');
    /**
     * Static representation of the [[dimensionWidth]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProductDrafts.DIMENSION_WIDTH = new core_1.BigNumberField('DimensionWidth', ProductDrafts, 'Edm.Decimal');
    /**
     * Static representation of the [[dimensionDepth]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProductDrafts.DIMENSION_DEPTH = new core_1.BigNumberField('DimensionDepth', ProductDrafts, 'Edm.Decimal');
    /**
     * Static representation of the [[weightUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProductDrafts.WEIGHT_UNIT = new core_1.StringField('WeightUnit', ProductDrafts, 'Edm.String');
    /**
     * Static representation of the [[weightMeasure]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProductDrafts.WEIGHT_MEASURE = new core_1.BigNumberField('WeightMeasure', ProductDrafts, 'Edm.Decimal');
    /**
     * Static representation of the [[price]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProductDrafts.PRICE = new core_1.BigNumberField('Price', ProductDrafts, 'Edm.Decimal');
    /**
     * Static representation of the [[currencyCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProductDrafts.CURRENCY_CODE = new core_1.StringField('CurrencyCode', ProductDrafts, 'Edm.String');
    /**
     * Static representation of the [[quantityUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProductDrafts.QUANTITY_UNIT = new core_1.StringField('QuantityUnit', ProductDrafts, 'Edm.String');
    /**
     * Static representation of the [[imageUrl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProductDrafts.IMAGE_URL = new core_1.StringField('ImageUrl', ProductDrafts, 'Edm.String');
    /**
     * Static representation of the [[supplierId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProductDrafts.SUPPLIER_ID = new core_1.StringField('SupplierId', ProductDrafts, 'Edm.String');
    /**
     * Static representation of the [[supplierName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProductDrafts.SUPPLIER_NAME = new core_1.StringField('SupplierName', ProductDrafts, 'Edm.String');
    /**
     * Static representation of the [[subCategoryId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProductDrafts.SUB_CATEGORY_ID = new core_1.StringField('SubCategoryId', ProductDrafts, 'Edm.String');
    /**
     * Static representation of the [[subCategoryName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProductDrafts.SUB_CATEGORY_NAME = new core_1.StringField('SubCategoryName', ProductDrafts, 'Edm.String');
    /**
     * Static representation of the [[mainCategoryId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProductDrafts.MAIN_CATEGORY_ID = new core_1.StringField('MainCategoryId', ProductDrafts, 'Edm.String');
    /**
     * Static representation of the [[mainCategoryName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProductDrafts.MAIN_CATEGORY_NAME = new core_1.StringField('MainCategoryName', ProductDrafts, 'Edm.String');
    /**
     * Static representation of the [[createdAt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProductDrafts.CREATED_AT = new core_1.DateField('CreatedAt', ProductDrafts, 'Edm.DateTime');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProductDrafts.CREATED_BY = new core_1.StringField('CreatedBy', ProductDrafts, 'Edm.String');
    /**
     * Static representation of the [[expiresAt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProductDrafts.EXPIRES_AT = new core_1.DateField('ExpiresAt', ProductDrafts, 'Edm.DateTime');
    /**
     * Static representation of the one-to-many navigation property [[images]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProductDrafts.IMAGES = new core_1.Link('Images', ProductDrafts, ImageDrafts_1.ImageDrafts);
    /**
     * Static representation of the one-to-one navigation property [[subCategory]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProductDrafts.SUB_CATEGORY = new core_1.OneToOneLink('SubCategory', ProductDrafts, SubCategories_1.SubCategories);
    /**
     * All fields of the ProductDrafts entity.
     */
    ProductDrafts._allFields = [
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
    ProductDrafts.ALL_FIELDS = new core_1.AllFields('*', ProductDrafts);
    /**
     * All key fields of the ProductDrafts entity.
     */
    ProductDrafts._keyFields = [ProductDrafts.ID];
    /**
     * Mapping of all key field names to the respective static field property ProductDrafts.
     */
    ProductDrafts._keys = ProductDrafts._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(ProductDrafts = exports.ProductDrafts || (exports.ProductDrafts = {}));
exports.ProductDrafts = ProductDrafts;
//# sourceMappingURL=ProductDrafts.js.map