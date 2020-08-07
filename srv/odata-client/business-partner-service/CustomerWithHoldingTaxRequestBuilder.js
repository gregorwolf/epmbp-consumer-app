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
exports.CustomerWithHoldingTaxRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var CustomerWithHoldingTax_1 = require("./CustomerWithHoldingTax");
/**
 * Request builder class for operations supported on the [[CustomerWithHoldingTax]] entity.
 */
var CustomerWithHoldingTaxRequestBuilder = /** @class */ (function (_super) {
    __extends(CustomerWithHoldingTaxRequestBuilder, _super);
    function CustomerWithHoldingTaxRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `CustomerWithHoldingTax` entity based on its keys.
     * @param customer Key property. See [[CustomerWithHoldingTax.customer]].
     * @param companyCode Key property. See [[CustomerWithHoldingTax.companyCode]].
     * @param withholdingTaxType Key property. See [[CustomerWithHoldingTax.withholdingTaxType]].
     * @returns A request builder for creating requests to retrieve one `CustomerWithHoldingTax` entity based on its keys.
     */
    CustomerWithHoldingTaxRequestBuilder.prototype.getByKey = function (customer, companyCode, withholdingTaxType) {
        return new core_1.GetByKeyRequestBuilder(CustomerWithHoldingTax_1.CustomerWithHoldingTax, {
            Customer: customer,
            CompanyCode: companyCode,
            WithholdingTaxType: withholdingTaxType
        });
    };
    /**
     * Returns a request builder for querying all `CustomerWithHoldingTax` entities.
     * @returns A request builder for creating requests to retrieve all `CustomerWithHoldingTax` entities.
     */
    CustomerWithHoldingTaxRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(CustomerWithHoldingTax_1.CustomerWithHoldingTax);
    };
    /**
     * Returns a request builder for creating a `CustomerWithHoldingTax` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `CustomerWithHoldingTax`.
     */
    CustomerWithHoldingTaxRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(CustomerWithHoldingTax_1.CustomerWithHoldingTax, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `CustomerWithHoldingTax`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `CustomerWithHoldingTax`.
     */
    CustomerWithHoldingTaxRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(CustomerWithHoldingTax_1.CustomerWithHoldingTax, entity);
    };
    CustomerWithHoldingTaxRequestBuilder.prototype.delete = function (customerOrEntity, companyCode, withholdingTaxType) {
        return new core_1.DeleteRequestBuilder(CustomerWithHoldingTax_1.CustomerWithHoldingTax, customerOrEntity instanceof CustomerWithHoldingTax_1.CustomerWithHoldingTax ? customerOrEntity : {
            Customer: customerOrEntity,
            CompanyCode: companyCode,
            WithholdingTaxType: withholdingTaxType
        });
    };
    return CustomerWithHoldingTaxRequestBuilder;
}(core_1.RequestBuilder));
exports.CustomerWithHoldingTaxRequestBuilder = CustomerWithHoldingTaxRequestBuilder;
//# sourceMappingURL=CustomerWithHoldingTaxRequestBuilder.js.map