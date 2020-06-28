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
exports.ProductDraftsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var ProductDrafts_1 = require("./ProductDrafts");
/**
 * Request builder class for operations supported on the [[ProductDrafts]] entity.
 */
var ProductDraftsRequestBuilder = /** @class */ (function (_super) {
    __extends(ProductDraftsRequestBuilder, _super);
    function ProductDraftsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `ProductDrafts` entity based on its keys.
     * @param id Key property. See [[ProductDrafts.id]].
     * @returns A request builder for creating requests to retrieve one `ProductDrafts` entity based on its keys.
     */
    ProductDraftsRequestBuilder.prototype.getByKey = function (id) {
        return new core_1.GetByKeyRequestBuilder(ProductDrafts_1.ProductDrafts, { Id: id });
    };
    /**
     * Returns a request builder for querying all `ProductDrafts` entities.
     * @returns A request builder for creating requests to retrieve all `ProductDrafts` entities.
     */
    ProductDraftsRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(ProductDrafts_1.ProductDrafts);
    };
    /**
     * Returns a request builder for creating a `ProductDrafts` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ProductDrafts`.
     */
    ProductDraftsRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(ProductDrafts_1.ProductDrafts, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `ProductDrafts`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ProductDrafts`.
     */
    ProductDraftsRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(ProductDrafts_1.ProductDrafts, entity);
    };
    ProductDraftsRequestBuilder.prototype.delete = function (idOrEntity) {
        return new core_1.DeleteRequestBuilder(ProductDrafts_1.ProductDrafts, idOrEntity instanceof ProductDrafts_1.ProductDrafts ? idOrEntity : { Id: idOrEntity });
    };
    return ProductDraftsRequestBuilder;
}(core_1.RequestBuilder));
exports.ProductDraftsRequestBuilder = ProductDraftsRequestBuilder;
//# sourceMappingURL=ProductDraftsRequestBuilder.js.map