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
exports.CustomerSalesAreaTextRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var CustomerSalesAreaText_1 = require("./CustomerSalesAreaText");
/**
 * Request builder class for operations supported on the [[CustomerSalesAreaText]] entity.
 */
var CustomerSalesAreaTextRequestBuilder = /** @class */ (function (_super) {
    __extends(CustomerSalesAreaTextRequestBuilder, _super);
    function CustomerSalesAreaTextRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `CustomerSalesAreaText` entity based on its keys.
     * @param customer Key property. See [[CustomerSalesAreaText.customer]].
     * @param salesOrganization Key property. See [[CustomerSalesAreaText.salesOrganization]].
     * @param distributionChannel Key property. See [[CustomerSalesAreaText.distributionChannel]].
     * @param division Key property. See [[CustomerSalesAreaText.division]].
     * @param language Key property. See [[CustomerSalesAreaText.language]].
     * @param longTextId Key property. See [[CustomerSalesAreaText.longTextId]].
     * @returns A request builder for creating requests to retrieve one `CustomerSalesAreaText` entity based on its keys.
     */
    CustomerSalesAreaTextRequestBuilder.prototype.getByKey = function (customer, salesOrganization, distributionChannel, division, language, longTextId) {
        return new core_1.GetByKeyRequestBuilder(CustomerSalesAreaText_1.CustomerSalesAreaText, {
            Customer: customer,
            SalesOrganization: salesOrganization,
            DistributionChannel: distributionChannel,
            Division: division,
            Language: language,
            LongTextID: longTextId
        });
    };
    /**
     * Returns a request builder for querying all `CustomerSalesAreaText` entities.
     * @returns A request builder for creating requests to retrieve all `CustomerSalesAreaText` entities.
     */
    CustomerSalesAreaTextRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(CustomerSalesAreaText_1.CustomerSalesAreaText);
    };
    /**
     * Returns a request builder for creating a `CustomerSalesAreaText` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `CustomerSalesAreaText`.
     */
    CustomerSalesAreaTextRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(CustomerSalesAreaText_1.CustomerSalesAreaText, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `CustomerSalesAreaText`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `CustomerSalesAreaText`.
     */
    CustomerSalesAreaTextRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(CustomerSalesAreaText_1.CustomerSalesAreaText, entity);
    };
    CustomerSalesAreaTextRequestBuilder.prototype.delete = function (customerOrEntity, salesOrganization, distributionChannel, division, language, longTextId) {
        return new core_1.DeleteRequestBuilder(CustomerSalesAreaText_1.CustomerSalesAreaText, customerOrEntity instanceof CustomerSalesAreaText_1.CustomerSalesAreaText ? customerOrEntity : {
            Customer: customerOrEntity,
            SalesOrganization: salesOrganization,
            DistributionChannel: distributionChannel,
            Division: division,
            Language: language,
            LongTextID: longTextId
        });
    };
    return CustomerSalesAreaTextRequestBuilder;
}(core_1.RequestBuilder));
exports.CustomerSalesAreaTextRequestBuilder = CustomerSalesAreaTextRequestBuilder;
//# sourceMappingURL=CustomerSalesAreaTextRequestBuilder.js.map