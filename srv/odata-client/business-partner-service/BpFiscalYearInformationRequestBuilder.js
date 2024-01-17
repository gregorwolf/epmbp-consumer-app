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
exports.BpFiscalYearInformationRequestBuilder = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var BpFiscalYearInformation_1 = require("./BpFiscalYearInformation");
/**
 * Request builder class for operations supported on the [[BpFiscalYearInformation]] entity.
 */
var BpFiscalYearInformationRequestBuilder = /** @class */ (function (_super) {
    __extends(BpFiscalYearInformationRequestBuilder, _super);
    function BpFiscalYearInformationRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `BpFiscalYearInformation` entity based on its keys.
     * @param businessPartner Key property. See [[BpFiscalYearInformation.businessPartner]].
     * @param businessPartnerFiscalYear Key property. See [[BpFiscalYearInformation.businessPartnerFiscalYear]].
     * @returns A request builder for creating requests to retrieve one `BpFiscalYearInformation` entity based on its keys.
     */
    BpFiscalYearInformationRequestBuilder.prototype.getByKey = function (businessPartner, businessPartnerFiscalYear) {
        return new core_1.GetByKeyRequestBuilderV2(BpFiscalYearInformation_1.BpFiscalYearInformation, {
            BusinessPartner: businessPartner,
            BusinessPartnerFiscalYear: businessPartnerFiscalYear
        });
    };
    /**
     * Returns a request builder for querying all `BpFiscalYearInformation` entities.
     * @returns A request builder for creating requests to retrieve all `BpFiscalYearInformation` entities.
     */
    BpFiscalYearInformationRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV2(BpFiscalYearInformation_1.BpFiscalYearInformation);
    };
    /**
     * Returns a request builder for creating a `BpFiscalYearInformation` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BpFiscalYearInformation`.
     */
    BpFiscalYearInformationRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV2(BpFiscalYearInformation_1.BpFiscalYearInformation, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `BpFiscalYearInformation`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BpFiscalYearInformation`.
     */
    BpFiscalYearInformationRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV2(BpFiscalYearInformation_1.BpFiscalYearInformation, entity);
    };
    BpFiscalYearInformationRequestBuilder.prototype.delete = function (businessPartnerOrEntity, businessPartnerFiscalYear) {
        return new core_1.DeleteRequestBuilderV2(BpFiscalYearInformation_1.BpFiscalYearInformation, businessPartnerOrEntity instanceof BpFiscalYearInformation_1.BpFiscalYearInformation ? businessPartnerOrEntity : {
            BusinessPartner: businessPartnerOrEntity,
            BusinessPartnerFiscalYear: businessPartnerFiscalYear
        });
    };
    return BpFiscalYearInformationRequestBuilder;
}(core_1.RequestBuilder));
exports.BpFiscalYearInformationRequestBuilder = BpFiscalYearInformationRequestBuilder;
//# sourceMappingURL=BpFiscalYearInformationRequestBuilder.js.map