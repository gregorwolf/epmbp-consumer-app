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
exports.BpFinancialServicesReportingRequestBuilder = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var BpFinancialServicesReporting_1 = require("./BpFinancialServicesReporting");
/**
 * Request builder class for operations supported on the [[BpFinancialServicesReporting]] entity.
 */
var BpFinancialServicesReportingRequestBuilder = /** @class */ (function (_super) {
    __extends(BpFinancialServicesReportingRequestBuilder, _super);
    function BpFinancialServicesReportingRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `BpFinancialServicesReporting` entity based on its keys.
     * @param businessPartner Key property. See [[BpFinancialServicesReporting.businessPartner]].
     * @returns A request builder for creating requests to retrieve one `BpFinancialServicesReporting` entity based on its keys.
     */
    BpFinancialServicesReportingRequestBuilder.prototype.getByKey = function (businessPartner) {
        return new core_1.GetByKeyRequestBuilderV2(BpFinancialServicesReporting_1.BpFinancialServicesReporting, { BusinessPartner: businessPartner });
    };
    /**
     * Returns a request builder for querying all `BpFinancialServicesReporting` entities.
     * @returns A request builder for creating requests to retrieve all `BpFinancialServicesReporting` entities.
     */
    BpFinancialServicesReportingRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV2(BpFinancialServicesReporting_1.BpFinancialServicesReporting);
    };
    /**
     * Returns a request builder for creating a `BpFinancialServicesReporting` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BpFinancialServicesReporting`.
     */
    BpFinancialServicesReportingRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV2(BpFinancialServicesReporting_1.BpFinancialServicesReporting, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `BpFinancialServicesReporting`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BpFinancialServicesReporting`.
     */
    BpFinancialServicesReportingRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV2(BpFinancialServicesReporting_1.BpFinancialServicesReporting, entity);
    };
    return BpFinancialServicesReportingRequestBuilder;
}(core_1.RequestBuilder));
exports.BpFinancialServicesReportingRequestBuilder = BpFinancialServicesReportingRequestBuilder;
//# sourceMappingURL=BpFinancialServicesReportingRequestBuilder.js.map