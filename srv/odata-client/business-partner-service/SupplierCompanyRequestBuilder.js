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
exports.SupplierCompanyRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var SupplierCompany_1 = require("./SupplierCompany");
/**
 * Request builder class for operations supported on the [[SupplierCompany]] entity.
 */
var SupplierCompanyRequestBuilder = /** @class */ (function (_super) {
    __extends(SupplierCompanyRequestBuilder, _super);
    function SupplierCompanyRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `SupplierCompany` entity based on its keys.
     * @param supplier Key property. See [[SupplierCompany.supplier]].
     * @param companyCode Key property. See [[SupplierCompany.companyCode]].
     * @returns A request builder for creating requests to retrieve one `SupplierCompany` entity based on its keys.
     */
    SupplierCompanyRequestBuilder.prototype.getByKey = function (supplier, companyCode) {
        return new core_1.GetByKeyRequestBuilder(SupplierCompany_1.SupplierCompany, {
            Supplier: supplier,
            CompanyCode: companyCode
        });
    };
    /**
     * Returns a request builder for querying all `SupplierCompany` entities.
     * @returns A request builder for creating requests to retrieve all `SupplierCompany` entities.
     */
    SupplierCompanyRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(SupplierCompany_1.SupplierCompany);
    };
    /**
     * Returns a request builder for creating a `SupplierCompany` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `SupplierCompany`.
     */
    SupplierCompanyRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(SupplierCompany_1.SupplierCompany, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `SupplierCompany`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SupplierCompany`.
     */
    SupplierCompanyRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(SupplierCompany_1.SupplierCompany, entity);
    };
    return SupplierCompanyRequestBuilder;
}(core_1.RequestBuilder));
exports.SupplierCompanyRequestBuilder = SupplierCompanyRequestBuilder;
//# sourceMappingURL=SupplierCompanyRequestBuilder.js.map