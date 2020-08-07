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
exports.SupplierWithHoldingTaxRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var SupplierWithHoldingTax_1 = require("./SupplierWithHoldingTax");
/**
 * Request builder class for operations supported on the [[SupplierWithHoldingTax]] entity.
 */
var SupplierWithHoldingTaxRequestBuilder = /** @class */ (function (_super) {
    __extends(SupplierWithHoldingTaxRequestBuilder, _super);
    function SupplierWithHoldingTaxRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `SupplierWithHoldingTax` entity based on its keys.
     * @param supplier Key property. See [[SupplierWithHoldingTax.supplier]].
     * @param companyCode Key property. See [[SupplierWithHoldingTax.companyCode]].
     * @param withholdingTaxType Key property. See [[SupplierWithHoldingTax.withholdingTaxType]].
     * @returns A request builder for creating requests to retrieve one `SupplierWithHoldingTax` entity based on its keys.
     */
    SupplierWithHoldingTaxRequestBuilder.prototype.getByKey = function (supplier, companyCode, withholdingTaxType) {
        return new core_1.GetByKeyRequestBuilder(SupplierWithHoldingTax_1.SupplierWithHoldingTax, {
            Supplier: supplier,
            CompanyCode: companyCode,
            WithholdingTaxType: withholdingTaxType
        });
    };
    /**
     * Returns a request builder for querying all `SupplierWithHoldingTax` entities.
     * @returns A request builder for creating requests to retrieve all `SupplierWithHoldingTax` entities.
     */
    SupplierWithHoldingTaxRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(SupplierWithHoldingTax_1.SupplierWithHoldingTax);
    };
    /**
     * Returns a request builder for creating a `SupplierWithHoldingTax` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `SupplierWithHoldingTax`.
     */
    SupplierWithHoldingTaxRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(SupplierWithHoldingTax_1.SupplierWithHoldingTax, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `SupplierWithHoldingTax`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SupplierWithHoldingTax`.
     */
    SupplierWithHoldingTaxRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(SupplierWithHoldingTax_1.SupplierWithHoldingTax, entity);
    };
    SupplierWithHoldingTaxRequestBuilder.prototype.delete = function (supplierOrEntity, companyCode, withholdingTaxType) {
        return new core_1.DeleteRequestBuilder(SupplierWithHoldingTax_1.SupplierWithHoldingTax, supplierOrEntity instanceof SupplierWithHoldingTax_1.SupplierWithHoldingTax ? supplierOrEntity : {
            Supplier: supplierOrEntity,
            CompanyCode: companyCode,
            WithholdingTaxType: withholdingTaxType
        });
    };
    return SupplierWithHoldingTaxRequestBuilder;
}(core_1.RequestBuilder));
exports.SupplierWithHoldingTaxRequestBuilder = SupplierWithHoldingTaxRequestBuilder;
//# sourceMappingURL=SupplierWithHoldingTaxRequestBuilder.js.map