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
exports.SupplierDunningRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var SupplierDunning_1 = require("./SupplierDunning");
/**
 * Request builder class for operations supported on the [[SupplierDunning]] entity.
 */
var SupplierDunningRequestBuilder = /** @class */ (function (_super) {
    __extends(SupplierDunningRequestBuilder, _super);
    function SupplierDunningRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `SupplierDunning` entity based on its keys.
     * @param supplier Key property. See [[SupplierDunning.supplier]].
     * @param companyCode Key property. See [[SupplierDunning.companyCode]].
     * @param dunningArea Key property. See [[SupplierDunning.dunningArea]].
     * @returns A request builder for creating requests to retrieve one `SupplierDunning` entity based on its keys.
     */
    SupplierDunningRequestBuilder.prototype.getByKey = function (supplier, companyCode, dunningArea) {
        return new core_1.GetByKeyRequestBuilder(SupplierDunning_1.SupplierDunning, {
            Supplier: supplier,
            CompanyCode: companyCode,
            DunningArea: dunningArea
        });
    };
    /**
     * Returns a request builder for querying all `SupplierDunning` entities.
     * @returns A request builder for creating requests to retrieve all `SupplierDunning` entities.
     */
    SupplierDunningRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(SupplierDunning_1.SupplierDunning);
    };
    /**
     * Returns a request builder for creating a `SupplierDunning` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `SupplierDunning`.
     */
    SupplierDunningRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(SupplierDunning_1.SupplierDunning, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `SupplierDunning`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SupplierDunning`.
     */
    SupplierDunningRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(SupplierDunning_1.SupplierDunning, entity);
    };
    SupplierDunningRequestBuilder.prototype.delete = function (supplierOrEntity, companyCode, dunningArea) {
        return new core_1.DeleteRequestBuilder(SupplierDunning_1.SupplierDunning, supplierOrEntity instanceof SupplierDunning_1.SupplierDunning ? supplierOrEntity : {
            Supplier: supplierOrEntity,
            CompanyCode: companyCode,
            DunningArea: dunningArea
        });
    };
    return SupplierDunningRequestBuilder;
}(core_1.RequestBuilder));
exports.SupplierDunningRequestBuilder = SupplierDunningRequestBuilder;
//# sourceMappingURL=SupplierDunningRequestBuilder.js.map