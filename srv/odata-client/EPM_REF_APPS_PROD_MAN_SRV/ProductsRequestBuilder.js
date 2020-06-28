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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var Products_1 = require("./Products");
/**
 * Request builder class for operations supported on the [[Products]] entity.
 */
var ProductsRequestBuilder = /** @class */ (function (_super) {
    __extends(ProductsRequestBuilder, _super);
    function ProductsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Products` entity based on its keys.
     * @param id Key property. See [[Products.id]].
     * @returns A request builder for creating requests to retrieve one `Products` entity based on its keys.
     */
    ProductsRequestBuilder.prototype.getByKey = function (id) {
        return new core_1.GetByKeyRequestBuilder(Products_1.Products, { Id: id });
    };
    /**
     * Returns a request builder for querying all `Products` entities.
     * @returns A request builder for creating requests to retrieve all `Products` entities.
     */
    ProductsRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(Products_1.Products);
    };
    return ProductsRequestBuilder;
}(core_1.RequestBuilder));
exports.ProductsRequestBuilder = ProductsRequestBuilder;
//# sourceMappingURL=ProductsRequestBuilder.js.map