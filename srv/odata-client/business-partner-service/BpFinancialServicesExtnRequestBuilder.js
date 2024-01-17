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
exports.BpFinancialServicesExtnRequestBuilder = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var BpFinancialServicesExtn_1 = require("./BpFinancialServicesExtn");
/**
 * Request builder class for operations supported on the [[BpFinancialServicesExtn]] entity.
 */
var BpFinancialServicesExtnRequestBuilder = /** @class */ (function (_super) {
    __extends(BpFinancialServicesExtnRequestBuilder, _super);
    function BpFinancialServicesExtnRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `BpFinancialServicesExtn` entity based on its keys.
     * @param businessPartner Key property. See [[BpFinancialServicesExtn.businessPartner]].
     * @returns A request builder for creating requests to retrieve one `BpFinancialServicesExtn` entity based on its keys.
     */
    BpFinancialServicesExtnRequestBuilder.prototype.getByKey = function (businessPartner) {
        return new core_1.GetByKeyRequestBuilderV2(BpFinancialServicesExtn_1.BpFinancialServicesExtn, { BusinessPartner: businessPartner });
    };
    /**
     * Returns a request builder for querying all `BpFinancialServicesExtn` entities.
     * @returns A request builder for creating requests to retrieve all `BpFinancialServicesExtn` entities.
     */
    BpFinancialServicesExtnRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV2(BpFinancialServicesExtn_1.BpFinancialServicesExtn);
    };
    /**
     * Returns a request builder for creating a `BpFinancialServicesExtn` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BpFinancialServicesExtn`.
     */
    BpFinancialServicesExtnRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV2(BpFinancialServicesExtn_1.BpFinancialServicesExtn, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `BpFinancialServicesExtn`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BpFinancialServicesExtn`.
     */
    BpFinancialServicesExtnRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV2(BpFinancialServicesExtn_1.BpFinancialServicesExtn, entity);
    };
    return BpFinancialServicesExtnRequestBuilder;
}(core_1.RequestBuilder));
exports.BpFinancialServicesExtnRequestBuilder = BpFinancialServicesExtnRequestBuilder;
//# sourceMappingURL=BpFinancialServicesExtnRequestBuilder.js.map