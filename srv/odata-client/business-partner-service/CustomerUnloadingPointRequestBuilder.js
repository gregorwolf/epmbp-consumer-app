"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerUnloadingPointRequestBuilder = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var CustomerUnloadingPoint_1 = require("./CustomerUnloadingPoint");
/**
 * Request builder class for operations supported on the [[CustomerUnloadingPoint]] entity.
 */
var CustomerUnloadingPointRequestBuilder = /** @class */ (function (_super) {
    __extends(CustomerUnloadingPointRequestBuilder, _super);
    function CustomerUnloadingPointRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `CustomerUnloadingPoint` entity based on its keys.
     * @param customer Key property. See [[CustomerUnloadingPoint.customer]].
     * @param unloadingPointName Key property. See [[CustomerUnloadingPoint.unloadingPointName]].
     * @returns A request builder for creating requests to retrieve one `CustomerUnloadingPoint` entity based on its keys.
     */
    CustomerUnloadingPointRequestBuilder.prototype.getByKey = function (customer, unloadingPointName) {
        return new core_1.GetByKeyRequestBuilderV2(CustomerUnloadingPoint_1.CustomerUnloadingPoint, {
            Customer: customer,
            UnloadingPointName: unloadingPointName
        });
    };
    /**
     * Returns a request builder for querying all `CustomerUnloadingPoint` entities.
     * @returns A request builder for creating requests to retrieve all `CustomerUnloadingPoint` entities.
     */
    CustomerUnloadingPointRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV2(CustomerUnloadingPoint_1.CustomerUnloadingPoint);
    };
    /**
     * Returns a request builder for creating a `CustomerUnloadingPoint` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `CustomerUnloadingPoint`.
     */
    CustomerUnloadingPointRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV2(CustomerUnloadingPoint_1.CustomerUnloadingPoint, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `CustomerUnloadingPoint`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `CustomerUnloadingPoint`.
     */
    CustomerUnloadingPointRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV2(CustomerUnloadingPoint_1.CustomerUnloadingPoint, entity);
    };
    CustomerUnloadingPointRequestBuilder.prototype.delete = function (customerOrEntity, unloadingPointName) {
        return new core_1.DeleteRequestBuilderV2(CustomerUnloadingPoint_1.CustomerUnloadingPoint, customerOrEntity instanceof CustomerUnloadingPoint_1.CustomerUnloadingPoint ? customerOrEntity : {
            Customer: customerOrEntity,
            UnloadingPointName: unloadingPointName
        });
    };
    return CustomerUnloadingPointRequestBuilder;
}(core_1.RequestBuilder));
exports.CustomerUnloadingPointRequestBuilder = CustomerUnloadingPointRequestBuilder;
//# sourceMappingURL=CustomerUnloadingPointRequestBuilder.js.map