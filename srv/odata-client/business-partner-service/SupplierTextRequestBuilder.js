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
exports.SupplierTextRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var SupplierText_1 = require("./SupplierText");
/**
 * Request builder class for operations supported on the [[SupplierText]] entity.
 */
var SupplierTextRequestBuilder = /** @class */ (function (_super) {
    __extends(SupplierTextRequestBuilder, _super);
    function SupplierTextRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `SupplierText` entity based on its keys.
     * @param supplier Key property. See [[SupplierText.supplier]].
     * @param language Key property. See [[SupplierText.language]].
     * @param longTextId Key property. See [[SupplierText.longTextId]].
     * @returns A request builder for creating requests to retrieve one `SupplierText` entity based on its keys.
     */
    SupplierTextRequestBuilder.prototype.getByKey = function (supplier, language, longTextId) {
        return new core_1.GetByKeyRequestBuilder(SupplierText_1.SupplierText, {
            Supplier: supplier,
            Language: language,
            LongTextID: longTextId
        });
    };
    /**
     * Returns a request builder for querying all `SupplierText` entities.
     * @returns A request builder for creating requests to retrieve all `SupplierText` entities.
     */
    SupplierTextRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(SupplierText_1.SupplierText);
    };
    /**
     * Returns a request builder for creating a `SupplierText` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `SupplierText`.
     */
    SupplierTextRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(SupplierText_1.SupplierText, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `SupplierText`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SupplierText`.
     */
    SupplierTextRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(SupplierText_1.SupplierText, entity);
    };
    SupplierTextRequestBuilder.prototype.delete = function (supplierOrEntity, language, longTextId) {
        return new core_1.DeleteRequestBuilder(SupplierText_1.SupplierText, supplierOrEntity instanceof SupplierText_1.SupplierText ? supplierOrEntity : {
            Supplier: supplierOrEntity,
            Language: language,
            LongTextID: longTextId
        });
    };
    return SupplierTextRequestBuilder;
}(core_1.RequestBuilder));
exports.SupplierTextRequestBuilder = SupplierTextRequestBuilder;
//# sourceMappingURL=SupplierTextRequestBuilder.js.map