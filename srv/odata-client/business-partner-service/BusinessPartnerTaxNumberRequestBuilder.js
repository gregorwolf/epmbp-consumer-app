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
exports.BusinessPartnerTaxNumberRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var BusinessPartnerTaxNumber_1 = require("./BusinessPartnerTaxNumber");
/**
 * Request builder class for operations supported on the [[BusinessPartnerTaxNumber]] entity.
 */
var BusinessPartnerTaxNumberRequestBuilder = /** @class */ (function (_super) {
    __extends(BusinessPartnerTaxNumberRequestBuilder, _super);
    function BusinessPartnerTaxNumberRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `BusinessPartnerTaxNumber` entity based on its keys.
     * @param businessPartner Key property. See [[BusinessPartnerTaxNumber.businessPartner]].
     * @param bpTaxType Key property. See [[BusinessPartnerTaxNumber.bpTaxType]].
     * @returns A request builder for creating requests to retrieve one `BusinessPartnerTaxNumber` entity based on its keys.
     */
    BusinessPartnerTaxNumberRequestBuilder.prototype.getByKey = function (businessPartner, bpTaxType) {
        return new core_1.GetByKeyRequestBuilder(BusinessPartnerTaxNumber_1.BusinessPartnerTaxNumber, {
            BusinessPartner: businessPartner,
            BPTaxType: bpTaxType
        });
    };
    /**
     * Returns a request builder for querying all `BusinessPartnerTaxNumber` entities.
     * @returns A request builder for creating requests to retrieve all `BusinessPartnerTaxNumber` entities.
     */
    BusinessPartnerTaxNumberRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(BusinessPartnerTaxNumber_1.BusinessPartnerTaxNumber);
    };
    /**
     * Returns a request builder for creating a `BusinessPartnerTaxNumber` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BusinessPartnerTaxNumber`.
     */
    BusinessPartnerTaxNumberRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(BusinessPartnerTaxNumber_1.BusinessPartnerTaxNumber, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `BusinessPartnerTaxNumber`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BusinessPartnerTaxNumber`.
     */
    BusinessPartnerTaxNumberRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(BusinessPartnerTaxNumber_1.BusinessPartnerTaxNumber, entity);
    };
    BusinessPartnerTaxNumberRequestBuilder.prototype.delete = function (businessPartnerOrEntity, bpTaxType) {
        return new core_1.DeleteRequestBuilder(BusinessPartnerTaxNumber_1.BusinessPartnerTaxNumber, businessPartnerOrEntity instanceof BusinessPartnerTaxNumber_1.BusinessPartnerTaxNumber ? businessPartnerOrEntity : {
            BusinessPartner: businessPartnerOrEntity,
            BPTaxType: bpTaxType
        });
    };
    return BusinessPartnerTaxNumberRequestBuilder;
}(core_1.RequestBuilder));
exports.BusinessPartnerTaxNumberRequestBuilder = BusinessPartnerTaxNumberRequestBuilder;
//# sourceMappingURL=BusinessPartnerTaxNumberRequestBuilder.js.map