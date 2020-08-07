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
exports.SupplierPurchasingOrgTextRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var SupplierPurchasingOrgText_1 = require("./SupplierPurchasingOrgText");
/**
 * Request builder class for operations supported on the [[SupplierPurchasingOrgText]] entity.
 */
var SupplierPurchasingOrgTextRequestBuilder = /** @class */ (function (_super) {
    __extends(SupplierPurchasingOrgTextRequestBuilder, _super);
    function SupplierPurchasingOrgTextRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `SupplierPurchasingOrgText` entity based on its keys.
     * @param supplier Key property. See [[SupplierPurchasingOrgText.supplier]].
     * @param purchasingOrganization Key property. See [[SupplierPurchasingOrgText.purchasingOrganization]].
     * @param language Key property. See [[SupplierPurchasingOrgText.language]].
     * @param longTextId Key property. See [[SupplierPurchasingOrgText.longTextId]].
     * @returns A request builder for creating requests to retrieve one `SupplierPurchasingOrgText` entity based on its keys.
     */
    SupplierPurchasingOrgTextRequestBuilder.prototype.getByKey = function (supplier, purchasingOrganization, language, longTextId) {
        return new core_1.GetByKeyRequestBuilder(SupplierPurchasingOrgText_1.SupplierPurchasingOrgText, {
            Supplier: supplier,
            PurchasingOrganization: purchasingOrganization,
            Language: language,
            LongTextID: longTextId
        });
    };
    /**
     * Returns a request builder for querying all `SupplierPurchasingOrgText` entities.
     * @returns A request builder for creating requests to retrieve all `SupplierPurchasingOrgText` entities.
     */
    SupplierPurchasingOrgTextRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(SupplierPurchasingOrgText_1.SupplierPurchasingOrgText);
    };
    /**
     * Returns a request builder for creating a `SupplierPurchasingOrgText` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `SupplierPurchasingOrgText`.
     */
    SupplierPurchasingOrgTextRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(SupplierPurchasingOrgText_1.SupplierPurchasingOrgText, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `SupplierPurchasingOrgText`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SupplierPurchasingOrgText`.
     */
    SupplierPurchasingOrgTextRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(SupplierPurchasingOrgText_1.SupplierPurchasingOrgText, entity);
    };
    SupplierPurchasingOrgTextRequestBuilder.prototype.delete = function (supplierOrEntity, purchasingOrganization, language, longTextId) {
        return new core_1.DeleteRequestBuilder(SupplierPurchasingOrgText_1.SupplierPurchasingOrgText, supplierOrEntity instanceof SupplierPurchasingOrgText_1.SupplierPurchasingOrgText ? supplierOrEntity : {
            Supplier: supplierOrEntity,
            PurchasingOrganization: purchasingOrganization,
            Language: language,
            LongTextID: longTextId
        });
    };
    return SupplierPurchasingOrgTextRequestBuilder;
}(core_1.RequestBuilder));
exports.SupplierPurchasingOrgTextRequestBuilder = SupplierPurchasingOrgTextRequestBuilder;
//# sourceMappingURL=SupplierPurchasingOrgTextRequestBuilder.js.map