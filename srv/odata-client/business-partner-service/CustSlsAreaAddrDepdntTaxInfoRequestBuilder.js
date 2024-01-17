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
exports.CustSlsAreaAddrDepdntTaxInfoRequestBuilder = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var CustSlsAreaAddrDepdntTaxInfo_1 = require("./CustSlsAreaAddrDepdntTaxInfo");
/**
 * Request builder class for operations supported on the [[CustSlsAreaAddrDepdntTaxInfo]] entity.
 */
var CustSlsAreaAddrDepdntTaxInfoRequestBuilder = /** @class */ (function (_super) {
    __extends(CustSlsAreaAddrDepdntTaxInfoRequestBuilder, _super);
    function CustSlsAreaAddrDepdntTaxInfoRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `CustSlsAreaAddrDepdntTaxInfo` entity based on its keys.
     * @param customer Key property. See [[CustSlsAreaAddrDepdntTaxInfo.customer]].
     * @param salesOrganization Key property. See [[CustSlsAreaAddrDepdntTaxInfo.salesOrganization]].
     * @param distributionChannel Key property. See [[CustSlsAreaAddrDepdntTaxInfo.distributionChannel]].
     * @param division Key property. See [[CustSlsAreaAddrDepdntTaxInfo.division]].
     * @param addressId Key property. See [[CustSlsAreaAddrDepdntTaxInfo.addressId]].
     * @param departureCountry Key property. See [[CustSlsAreaAddrDepdntTaxInfo.departureCountry]].
     * @param customerTaxCategory Key property. See [[CustSlsAreaAddrDepdntTaxInfo.customerTaxCategory]].
     * @returns A request builder for creating requests to retrieve one `CustSlsAreaAddrDepdntTaxInfo` entity based on its keys.
     */
    CustSlsAreaAddrDepdntTaxInfoRequestBuilder.prototype.getByKey = function (customer, salesOrganization, distributionChannel, division, addressId, departureCountry, customerTaxCategory) {
        return new core_1.GetByKeyRequestBuilderV2(CustSlsAreaAddrDepdntTaxInfo_1.CustSlsAreaAddrDepdntTaxInfo, {
            Customer: customer,
            SalesOrganization: salesOrganization,
            DistributionChannel: distributionChannel,
            Division: division,
            AddressID: addressId,
            DepartureCountry: departureCountry,
            CustomerTaxCategory: customerTaxCategory
        });
    };
    /**
     * Returns a request builder for querying all `CustSlsAreaAddrDepdntTaxInfo` entities.
     * @returns A request builder for creating requests to retrieve all `CustSlsAreaAddrDepdntTaxInfo` entities.
     */
    CustSlsAreaAddrDepdntTaxInfoRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV2(CustSlsAreaAddrDepdntTaxInfo_1.CustSlsAreaAddrDepdntTaxInfo);
    };
    /**
     * Returns a request builder for creating a `CustSlsAreaAddrDepdntTaxInfo` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `CustSlsAreaAddrDepdntTaxInfo`.
     */
    CustSlsAreaAddrDepdntTaxInfoRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV2(CustSlsAreaAddrDepdntTaxInfo_1.CustSlsAreaAddrDepdntTaxInfo, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `CustSlsAreaAddrDepdntTaxInfo`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `CustSlsAreaAddrDepdntTaxInfo`.
     */
    CustSlsAreaAddrDepdntTaxInfoRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV2(CustSlsAreaAddrDepdntTaxInfo_1.CustSlsAreaAddrDepdntTaxInfo, entity);
    };
    CustSlsAreaAddrDepdntTaxInfoRequestBuilder.prototype.delete = function (customerOrEntity, salesOrganization, distributionChannel, division, addressId, departureCountry, customerTaxCategory) {
        return new core_1.DeleteRequestBuilderV2(CustSlsAreaAddrDepdntTaxInfo_1.CustSlsAreaAddrDepdntTaxInfo, customerOrEntity instanceof CustSlsAreaAddrDepdntTaxInfo_1.CustSlsAreaAddrDepdntTaxInfo ? customerOrEntity : {
            Customer: customerOrEntity,
            SalesOrganization: salesOrganization,
            DistributionChannel: distributionChannel,
            Division: division,
            AddressID: addressId,
            DepartureCountry: departureCountry,
            CustomerTaxCategory: customerTaxCategory
        });
    };
    return CustSlsAreaAddrDepdntTaxInfoRequestBuilder;
}(core_1.RequestBuilder));
exports.CustSlsAreaAddrDepdntTaxInfoRequestBuilder = CustSlsAreaAddrDepdntTaxInfoRequestBuilder;
//# sourceMappingURL=CustSlsAreaAddrDepdntTaxInfoRequestBuilder.js.map