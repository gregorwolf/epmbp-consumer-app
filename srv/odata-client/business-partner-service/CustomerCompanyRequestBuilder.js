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
exports.CustomerCompanyRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var CustomerCompany_1 = require("./CustomerCompany");
/**
 * Request builder class for operations supported on the [[CustomerCompany]] entity.
 */
var CustomerCompanyRequestBuilder = /** @class */ (function (_super) {
    __extends(CustomerCompanyRequestBuilder, _super);
    function CustomerCompanyRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `CustomerCompany` entity based on its keys.
     * @param customer Key property. See [[CustomerCompany.customer]].
     * @param companyCode Key property. See [[CustomerCompany.companyCode]].
     * @returns A request builder for creating requests to retrieve one `CustomerCompany` entity based on its keys.
     */
    CustomerCompanyRequestBuilder.prototype.getByKey = function (customer, companyCode) {
        return new core_1.GetByKeyRequestBuilder(CustomerCompany_1.CustomerCompany, {
            Customer: customer,
            CompanyCode: companyCode
        });
    };
    /**
     * Returns a request builder for querying all `CustomerCompany` entities.
     * @returns A request builder for creating requests to retrieve all `CustomerCompany` entities.
     */
    CustomerCompanyRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(CustomerCompany_1.CustomerCompany);
    };
    /**
     * Returns a request builder for creating a `CustomerCompany` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `CustomerCompany`.
     */
    CustomerCompanyRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(CustomerCompany_1.CustomerCompany, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `CustomerCompany`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `CustomerCompany`.
     */
    CustomerCompanyRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(CustomerCompany_1.CustomerCompany, entity);
    };
    return CustomerCompanyRequestBuilder;
}(core_1.RequestBuilder));
exports.CustomerCompanyRequestBuilder = CustomerCompanyRequestBuilder;
//# sourceMappingURL=CustomerCompanyRequestBuilder.js.map