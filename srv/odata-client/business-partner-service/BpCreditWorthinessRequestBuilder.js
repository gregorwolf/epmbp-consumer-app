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
exports.BpCreditWorthinessRequestBuilder = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var BpCreditWorthiness_1 = require("./BpCreditWorthiness");
/**
 * Request builder class for operations supported on the [[BpCreditWorthiness]] entity.
 */
var BpCreditWorthinessRequestBuilder = /** @class */ (function (_super) {
    __extends(BpCreditWorthinessRequestBuilder, _super);
    function BpCreditWorthinessRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `BpCreditWorthiness` entity based on its keys.
     * @param businessPartner Key property. See [[BpCreditWorthiness.businessPartner]].
     * @returns A request builder for creating requests to retrieve one `BpCreditWorthiness` entity based on its keys.
     */
    BpCreditWorthinessRequestBuilder.prototype.getByKey = function (businessPartner) {
        return new core_1.GetByKeyRequestBuilderV2(BpCreditWorthiness_1.BpCreditWorthiness, { BusinessPartner: businessPartner });
    };
    /**
     * Returns a request builder for querying all `BpCreditWorthiness` entities.
     * @returns A request builder for creating requests to retrieve all `BpCreditWorthiness` entities.
     */
    BpCreditWorthinessRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV2(BpCreditWorthiness_1.BpCreditWorthiness);
    };
    /**
     * Returns a request builder for creating a `BpCreditWorthiness` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BpCreditWorthiness`.
     */
    BpCreditWorthinessRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV2(BpCreditWorthiness_1.BpCreditWorthiness, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `BpCreditWorthiness`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BpCreditWorthiness`.
     */
    BpCreditWorthinessRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV2(BpCreditWorthiness_1.BpCreditWorthiness, entity);
    };
    return BpCreditWorthinessRequestBuilder;
}(core_1.RequestBuilder));
exports.BpCreditWorthinessRequestBuilder = BpCreditWorthinessRequestBuilder;
//# sourceMappingURL=BpCreditWorthinessRequestBuilder.js.map