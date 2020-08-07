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
exports.SupplierRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var Supplier_1 = require("./Supplier");
/**
 * Request builder class for operations supported on the [[Supplier]] entity.
 */
var SupplierRequestBuilder = /** @class */ (function (_super) {
    __extends(SupplierRequestBuilder, _super);
    function SupplierRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Supplier` entity based on its keys.
     * @param supplier Key property. See [[Supplier.supplier]].
     * @returns A request builder for creating requests to retrieve one `Supplier` entity based on its keys.
     */
    SupplierRequestBuilder.prototype.getByKey = function (supplier) {
        return new core_1.GetByKeyRequestBuilder(Supplier_1.Supplier, { Supplier: supplier });
    };
    /**
     * Returns a request builder for querying all `Supplier` entities.
     * @returns A request builder for creating requests to retrieve all `Supplier` entities.
     */
    SupplierRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(Supplier_1.Supplier);
    };
    /**
     * Returns a request builder for updating an entity of type `Supplier`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Supplier`.
     */
    SupplierRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(Supplier_1.Supplier, entity);
    };
    return SupplierRequestBuilder;
}(core_1.RequestBuilder));
exports.SupplierRequestBuilder = SupplierRequestBuilder;
//# sourceMappingURL=SupplierRequestBuilder.js.map