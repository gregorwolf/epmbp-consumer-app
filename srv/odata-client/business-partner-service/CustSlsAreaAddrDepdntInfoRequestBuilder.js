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
exports.CustSlsAreaAddrDepdntInfoRequestBuilder = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var CustSlsAreaAddrDepdntInfo_1 = require("./CustSlsAreaAddrDepdntInfo");
/**
 * Request builder class for operations supported on the [[CustSlsAreaAddrDepdntInfo]] entity.
 */
var CustSlsAreaAddrDepdntInfoRequestBuilder = /** @class */ (function (_super) {
    __extends(CustSlsAreaAddrDepdntInfoRequestBuilder, _super);
    function CustSlsAreaAddrDepdntInfoRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `CustSlsAreaAddrDepdntInfo` entity based on its keys.
     * @param customer Key property. See [[CustSlsAreaAddrDepdntInfo.customer]].
     * @param salesOrganization Key property. See [[CustSlsAreaAddrDepdntInfo.salesOrganization]].
     * @param distributionChannel Key property. See [[CustSlsAreaAddrDepdntInfo.distributionChannel]].
     * @param division Key property. See [[CustSlsAreaAddrDepdntInfo.division]].
     * @param addressId Key property. See [[CustSlsAreaAddrDepdntInfo.addressId]].
     * @returns A request builder for creating requests to retrieve one `CustSlsAreaAddrDepdntInfo` entity based on its keys.
     */
    CustSlsAreaAddrDepdntInfoRequestBuilder.prototype.getByKey = function (customer, salesOrganization, distributionChannel, division, addressId) {
        return new core_1.GetByKeyRequestBuilderV2(CustSlsAreaAddrDepdntInfo_1.CustSlsAreaAddrDepdntInfo, {
            Customer: customer,
            SalesOrganization: salesOrganization,
            DistributionChannel: distributionChannel,
            Division: division,
            AddressID: addressId
        });
    };
    /**
     * Returns a request builder for querying all `CustSlsAreaAddrDepdntInfo` entities.
     * @returns A request builder for creating requests to retrieve all `CustSlsAreaAddrDepdntInfo` entities.
     */
    CustSlsAreaAddrDepdntInfoRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV2(CustSlsAreaAddrDepdntInfo_1.CustSlsAreaAddrDepdntInfo);
    };
    /**
     * Returns a request builder for creating a `CustSlsAreaAddrDepdntInfo` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `CustSlsAreaAddrDepdntInfo`.
     */
    CustSlsAreaAddrDepdntInfoRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV2(CustSlsAreaAddrDepdntInfo_1.CustSlsAreaAddrDepdntInfo, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `CustSlsAreaAddrDepdntInfo`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `CustSlsAreaAddrDepdntInfo`.
     */
    CustSlsAreaAddrDepdntInfoRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV2(CustSlsAreaAddrDepdntInfo_1.CustSlsAreaAddrDepdntInfo, entity);
    };
    CustSlsAreaAddrDepdntInfoRequestBuilder.prototype.delete = function (customerOrEntity, salesOrganization, distributionChannel, division, addressId) {
        return new core_1.DeleteRequestBuilderV2(CustSlsAreaAddrDepdntInfo_1.CustSlsAreaAddrDepdntInfo, customerOrEntity instanceof CustSlsAreaAddrDepdntInfo_1.CustSlsAreaAddrDepdntInfo ? customerOrEntity : {
            Customer: customerOrEntity,
            SalesOrganization: salesOrganization,
            DistributionChannel: distributionChannel,
            Division: division,
            AddressID: addressId
        });
    };
    return CustSlsAreaAddrDepdntInfoRequestBuilder;
}(core_1.RequestBuilder));
exports.CustSlsAreaAddrDepdntInfoRequestBuilder = CustSlsAreaAddrDepdntInfoRequestBuilder;
//# sourceMappingURL=CustSlsAreaAddrDepdntInfoRequestBuilder.js.map