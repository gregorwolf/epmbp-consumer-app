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
exports.CustomerDunningRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var CustomerDunning_1 = require("./CustomerDunning");
/**
 * Request builder class for operations supported on the [[CustomerDunning]] entity.
 */
var CustomerDunningRequestBuilder = /** @class */ (function (_super) {
    __extends(CustomerDunningRequestBuilder, _super);
    function CustomerDunningRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `CustomerDunning` entity based on its keys.
     * @param customer Key property. See [[CustomerDunning.customer]].
     * @param companyCode Key property. See [[CustomerDunning.companyCode]].
     * @param dunningArea Key property. See [[CustomerDunning.dunningArea]].
     * @returns A request builder for creating requests to retrieve one `CustomerDunning` entity based on its keys.
     */
    CustomerDunningRequestBuilder.prototype.getByKey = function (customer, companyCode, dunningArea) {
        return new core_1.GetByKeyRequestBuilder(CustomerDunning_1.CustomerDunning, {
            Customer: customer,
            CompanyCode: companyCode,
            DunningArea: dunningArea
        });
    };
    /**
     * Returns a request builder for querying all `CustomerDunning` entities.
     * @returns A request builder for creating requests to retrieve all `CustomerDunning` entities.
     */
    CustomerDunningRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(CustomerDunning_1.CustomerDunning);
    };
    /**
     * Returns a request builder for creating a `CustomerDunning` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `CustomerDunning`.
     */
    CustomerDunningRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(CustomerDunning_1.CustomerDunning, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `CustomerDunning`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `CustomerDunning`.
     */
    CustomerDunningRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(CustomerDunning_1.CustomerDunning, entity);
    };
    CustomerDunningRequestBuilder.prototype.delete = function (customerOrEntity, companyCode, dunningArea) {
        return new core_1.DeleteRequestBuilder(CustomerDunning_1.CustomerDunning, customerOrEntity instanceof CustomerDunning_1.CustomerDunning ? customerOrEntity : {
            Customer: customerOrEntity,
            CompanyCode: companyCode,
            DunningArea: dunningArea
        });
    };
    return CustomerDunningRequestBuilder;
}(core_1.RequestBuilder));
exports.CustomerDunningRequestBuilder = CustomerDunningRequestBuilder;
//# sourceMappingURL=CustomerDunningRequestBuilder.js.map