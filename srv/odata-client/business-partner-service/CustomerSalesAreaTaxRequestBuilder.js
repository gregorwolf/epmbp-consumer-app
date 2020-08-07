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
exports.CustomerSalesAreaTaxRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var CustomerSalesAreaTax_1 = require("./CustomerSalesAreaTax");
/**
 * Request builder class for operations supported on the [[CustomerSalesAreaTax]] entity.
 */
var CustomerSalesAreaTaxRequestBuilder = /** @class */ (function (_super) {
    __extends(CustomerSalesAreaTaxRequestBuilder, _super);
    function CustomerSalesAreaTaxRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `CustomerSalesAreaTax` entity based on its keys.
     * @param customer Key property. See [[CustomerSalesAreaTax.customer]].
     * @param salesOrganization Key property. See [[CustomerSalesAreaTax.salesOrganization]].
     * @param distributionChannel Key property. See [[CustomerSalesAreaTax.distributionChannel]].
     * @param division Key property. See [[CustomerSalesAreaTax.division]].
     * @param departureCountry Key property. See [[CustomerSalesAreaTax.departureCountry]].
     * @param customerTaxCategory Key property. See [[CustomerSalesAreaTax.customerTaxCategory]].
     * @returns A request builder for creating requests to retrieve one `CustomerSalesAreaTax` entity based on its keys.
     */
    CustomerSalesAreaTaxRequestBuilder.prototype.getByKey = function (customer, salesOrganization, distributionChannel, division, departureCountry, customerTaxCategory) {
        return new core_1.GetByKeyRequestBuilder(CustomerSalesAreaTax_1.CustomerSalesAreaTax, {
            Customer: customer,
            SalesOrganization: salesOrganization,
            DistributionChannel: distributionChannel,
            Division: division,
            DepartureCountry: departureCountry,
            CustomerTaxCategory: customerTaxCategory
        });
    };
    /**
     * Returns a request builder for querying all `CustomerSalesAreaTax` entities.
     * @returns A request builder for creating requests to retrieve all `CustomerSalesAreaTax` entities.
     */
    CustomerSalesAreaTaxRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(CustomerSalesAreaTax_1.CustomerSalesAreaTax);
    };
    /**
     * Returns a request builder for creating a `CustomerSalesAreaTax` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `CustomerSalesAreaTax`.
     */
    CustomerSalesAreaTaxRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(CustomerSalesAreaTax_1.CustomerSalesAreaTax, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `CustomerSalesAreaTax`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `CustomerSalesAreaTax`.
     */
    CustomerSalesAreaTaxRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(CustomerSalesAreaTax_1.CustomerSalesAreaTax, entity);
    };
    return CustomerSalesAreaTaxRequestBuilder;
}(core_1.RequestBuilder));
exports.CustomerSalesAreaTaxRequestBuilder = CustomerSalesAreaTaxRequestBuilder;
//# sourceMappingURL=CustomerSalesAreaTaxRequestBuilder.js.map