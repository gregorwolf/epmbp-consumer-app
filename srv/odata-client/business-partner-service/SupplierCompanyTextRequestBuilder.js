"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplierCompanyTextRequestBuilder = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var SupplierCompanyText_1 = require("./SupplierCompanyText");
/**
 * Request builder class for operations supported on the [[SupplierCompanyText]] entity.
 */
var SupplierCompanyTextRequestBuilder = /** @class */ (function (_super) {
    __extends(SupplierCompanyTextRequestBuilder, _super);
    function SupplierCompanyTextRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `SupplierCompanyText` entity based on its keys.
     * @param supplier Key property. See [[SupplierCompanyText.supplier]].
     * @param companyCode Key property. See [[SupplierCompanyText.companyCode]].
     * @param language Key property. See [[SupplierCompanyText.language]].
     * @param longTextId Key property. See [[SupplierCompanyText.longTextId]].
     * @returns A request builder for creating requests to retrieve one `SupplierCompanyText` entity based on its keys.
     */
    SupplierCompanyTextRequestBuilder.prototype.getByKey = function (supplier, companyCode, language, longTextId) {
        return new core_1.GetByKeyRequestBuilderV2(SupplierCompanyText_1.SupplierCompanyText, {
            Supplier: supplier,
            CompanyCode: companyCode,
            Language: language,
            LongTextID: longTextId
        });
    };
    /**
     * Returns a request builder for querying all `SupplierCompanyText` entities.
     * @returns A request builder for creating requests to retrieve all `SupplierCompanyText` entities.
     */
    SupplierCompanyTextRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV2(SupplierCompanyText_1.SupplierCompanyText);
    };
    /**
     * Returns a request builder for creating a `SupplierCompanyText` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `SupplierCompanyText`.
     */
    SupplierCompanyTextRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV2(SupplierCompanyText_1.SupplierCompanyText, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `SupplierCompanyText`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SupplierCompanyText`.
     */
    SupplierCompanyTextRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV2(SupplierCompanyText_1.SupplierCompanyText, entity);
    };
    SupplierCompanyTextRequestBuilder.prototype.delete = function (supplierOrEntity, companyCode, language, longTextId) {
        return new core_1.DeleteRequestBuilderV2(SupplierCompanyText_1.SupplierCompanyText, supplierOrEntity instanceof SupplierCompanyText_1.SupplierCompanyText ? supplierOrEntity : {
            Supplier: supplierOrEntity,
            CompanyCode: companyCode,
            Language: language,
            LongTextID: longTextId
        });
    };
    return SupplierCompanyTextRequestBuilder;
}(core_1.RequestBuilder));
exports.SupplierCompanyTextRequestBuilder = SupplierCompanyTextRequestBuilder;
//# sourceMappingURL=SupplierCompanyTextRequestBuilder.js.map