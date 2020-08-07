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
exports.CustomerSalesAreaRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var CustomerSalesArea_1 = require("./CustomerSalesArea");
/**
 * Request builder class for operations supported on the [[CustomerSalesArea]] entity.
 */
var CustomerSalesAreaRequestBuilder = /** @class */ (function (_super) {
    __extends(CustomerSalesAreaRequestBuilder, _super);
    function CustomerSalesAreaRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `CustomerSalesArea` entity based on its keys.
     * @param customer Key property. See [[CustomerSalesArea.customer]].
     * @param salesOrganization Key property. See [[CustomerSalesArea.salesOrganization]].
     * @param distributionChannel Key property. See [[CustomerSalesArea.distributionChannel]].
     * @param division Key property. See [[CustomerSalesArea.division]].
     * @returns A request builder for creating requests to retrieve one `CustomerSalesArea` entity based on its keys.
     */
    CustomerSalesAreaRequestBuilder.prototype.getByKey = function (customer, salesOrganization, distributionChannel, division) {
        return new core_1.GetByKeyRequestBuilder(CustomerSalesArea_1.CustomerSalesArea, {
            Customer: customer,
            SalesOrganization: salesOrganization,
            DistributionChannel: distributionChannel,
            Division: division
        });
    };
    /**
     * Returns a request builder for querying all `CustomerSalesArea` entities.
     * @returns A request builder for creating requests to retrieve all `CustomerSalesArea` entities.
     */
    CustomerSalesAreaRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(CustomerSalesArea_1.CustomerSalesArea);
    };
    /**
     * Returns a request builder for creating a `CustomerSalesArea` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `CustomerSalesArea`.
     */
    CustomerSalesAreaRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(CustomerSalesArea_1.CustomerSalesArea, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `CustomerSalesArea`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `CustomerSalesArea`.
     */
    CustomerSalesAreaRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(CustomerSalesArea_1.CustomerSalesArea, entity);
    };
    return CustomerSalesAreaRequestBuilder;
}(core_1.RequestBuilder));
exports.CustomerSalesAreaRequestBuilder = CustomerSalesAreaRequestBuilder;
//# sourceMappingURL=CustomerSalesAreaRequestBuilder.js.map