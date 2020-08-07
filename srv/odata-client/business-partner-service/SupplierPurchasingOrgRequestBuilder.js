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
exports.SupplierPurchasingOrgRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var SupplierPurchasingOrg_1 = require("./SupplierPurchasingOrg");
/**
 * Request builder class for operations supported on the [[SupplierPurchasingOrg]] entity.
 */
var SupplierPurchasingOrgRequestBuilder = /** @class */ (function (_super) {
    __extends(SupplierPurchasingOrgRequestBuilder, _super);
    function SupplierPurchasingOrgRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `SupplierPurchasingOrg` entity based on its keys.
     * @param supplier Key property. See [[SupplierPurchasingOrg.supplier]].
     * @param purchasingOrganization Key property. See [[SupplierPurchasingOrg.purchasingOrganization]].
     * @returns A request builder for creating requests to retrieve one `SupplierPurchasingOrg` entity based on its keys.
     */
    SupplierPurchasingOrgRequestBuilder.prototype.getByKey = function (supplier, purchasingOrganization) {
        return new core_1.GetByKeyRequestBuilder(SupplierPurchasingOrg_1.SupplierPurchasingOrg, {
            Supplier: supplier,
            PurchasingOrganization: purchasingOrganization
        });
    };
    /**
     * Returns a request builder for querying all `SupplierPurchasingOrg` entities.
     * @returns A request builder for creating requests to retrieve all `SupplierPurchasingOrg` entities.
     */
    SupplierPurchasingOrgRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(SupplierPurchasingOrg_1.SupplierPurchasingOrg);
    };
    /**
     * Returns a request builder for creating a `SupplierPurchasingOrg` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `SupplierPurchasingOrg`.
     */
    SupplierPurchasingOrgRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(SupplierPurchasingOrg_1.SupplierPurchasingOrg, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `SupplierPurchasingOrg`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SupplierPurchasingOrg`.
     */
    SupplierPurchasingOrgRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(SupplierPurchasingOrg_1.SupplierPurchasingOrg, entity);
    };
    return SupplierPurchasingOrgRequestBuilder;
}(core_1.RequestBuilder));
exports.SupplierPurchasingOrgRequestBuilder = SupplierPurchasingOrgRequestBuilder;
//# sourceMappingURL=SupplierPurchasingOrgRequestBuilder.js.map