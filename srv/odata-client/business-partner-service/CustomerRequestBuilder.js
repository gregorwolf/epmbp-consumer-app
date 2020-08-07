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
exports.CustomerRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var Customer_1 = require("./Customer");
/**
 * Request builder class for operations supported on the [[Customer]] entity.
 */
var CustomerRequestBuilder = /** @class */ (function (_super) {
    __extends(CustomerRequestBuilder, _super);
    function CustomerRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Customer` entity based on its keys.
     * @param customer Key property. See [[Customer.customer]].
     * @returns A request builder for creating requests to retrieve one `Customer` entity based on its keys.
     */
    CustomerRequestBuilder.prototype.getByKey = function (customer) {
        return new core_1.GetByKeyRequestBuilder(Customer_1.Customer, { Customer: customer });
    };
    /**
     * Returns a request builder for querying all `Customer` entities.
     * @returns A request builder for creating requests to retrieve all `Customer` entities.
     */
    CustomerRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(Customer_1.Customer);
    };
    /**
     * Returns a request builder for updating an entity of type `Customer`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Customer`.
     */
    CustomerRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(Customer_1.Customer, entity);
    };
    return CustomerRequestBuilder;
}(core_1.RequestBuilder));
exports.CustomerRequestBuilder = CustomerRequestBuilder;
//# sourceMappingURL=CustomerRequestBuilder.js.map