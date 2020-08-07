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
exports.CustomerTaxGroupingRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var CustomerTaxGrouping_1 = require("./CustomerTaxGrouping");
/**
 * Request builder class for operations supported on the [[CustomerTaxGrouping]] entity.
 */
var CustomerTaxGroupingRequestBuilder = /** @class */ (function (_super) {
    __extends(CustomerTaxGroupingRequestBuilder, _super);
    function CustomerTaxGroupingRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `CustomerTaxGrouping` entity based on its keys.
     * @param customer Key property. See [[CustomerTaxGrouping.customer]].
     * @param customerTaxGroupingCode Key property. See [[CustomerTaxGrouping.customerTaxGroupingCode]].
     * @returns A request builder for creating requests to retrieve one `CustomerTaxGrouping` entity based on its keys.
     */
    CustomerTaxGroupingRequestBuilder.prototype.getByKey = function (customer, customerTaxGroupingCode) {
        return new core_1.GetByKeyRequestBuilder(CustomerTaxGrouping_1.CustomerTaxGrouping, {
            Customer: customer,
            CustomerTaxGroupingCode: customerTaxGroupingCode
        });
    };
    /**
     * Returns a request builder for querying all `CustomerTaxGrouping` entities.
     * @returns A request builder for creating requests to retrieve all `CustomerTaxGrouping` entities.
     */
    CustomerTaxGroupingRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(CustomerTaxGrouping_1.CustomerTaxGrouping);
    };
    /**
     * Returns a request builder for updating an entity of type `CustomerTaxGrouping`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `CustomerTaxGrouping`.
     */
    CustomerTaxGroupingRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(CustomerTaxGrouping_1.CustomerTaxGrouping, entity);
    };
    CustomerTaxGroupingRequestBuilder.prototype.delete = function (customerOrEntity, customerTaxGroupingCode) {
        return new core_1.DeleteRequestBuilder(CustomerTaxGrouping_1.CustomerTaxGrouping, customerOrEntity instanceof CustomerTaxGrouping_1.CustomerTaxGrouping ? customerOrEntity : {
            Customer: customerOrEntity,
            CustomerTaxGroupingCode: customerTaxGroupingCode
        });
    };
    return CustomerTaxGroupingRequestBuilder;
}(core_1.RequestBuilder));
exports.CustomerTaxGroupingRequestBuilder = CustomerTaxGroupingRequestBuilder;
//# sourceMappingURL=CustomerTaxGroupingRequestBuilder.js.map