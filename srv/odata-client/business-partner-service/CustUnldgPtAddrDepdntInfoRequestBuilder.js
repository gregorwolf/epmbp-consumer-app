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
exports.CustUnldgPtAddrDepdntInfoRequestBuilder = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var CustUnldgPtAddrDepdntInfo_1 = require("./CustUnldgPtAddrDepdntInfo");
/**
 * Request builder class for operations supported on the [[CustUnldgPtAddrDepdntInfo]] entity.
 */
var CustUnldgPtAddrDepdntInfoRequestBuilder = /** @class */ (function (_super) {
    __extends(CustUnldgPtAddrDepdntInfoRequestBuilder, _super);
    function CustUnldgPtAddrDepdntInfoRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `CustUnldgPtAddrDepdntInfo` entity based on its keys.
     * @param customer Key property. See [[CustUnldgPtAddrDepdntInfo.customer]].
     * @param addressId Key property. See [[CustUnldgPtAddrDepdntInfo.addressId]].
     * @param unloadingPointName Key property. See [[CustUnldgPtAddrDepdntInfo.unloadingPointName]].
     * @returns A request builder for creating requests to retrieve one `CustUnldgPtAddrDepdntInfo` entity based on its keys.
     */
    CustUnldgPtAddrDepdntInfoRequestBuilder.prototype.getByKey = function (customer, addressId, unloadingPointName) {
        return new core_1.GetByKeyRequestBuilderV2(CustUnldgPtAddrDepdntInfo_1.CustUnldgPtAddrDepdntInfo, {
            Customer: customer,
            AddressID: addressId,
            UnloadingPointName: unloadingPointName
        });
    };
    /**
     * Returns a request builder for querying all `CustUnldgPtAddrDepdntInfo` entities.
     * @returns A request builder for creating requests to retrieve all `CustUnldgPtAddrDepdntInfo` entities.
     */
    CustUnldgPtAddrDepdntInfoRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV2(CustUnldgPtAddrDepdntInfo_1.CustUnldgPtAddrDepdntInfo);
    };
    /**
     * Returns a request builder for creating a `CustUnldgPtAddrDepdntInfo` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `CustUnldgPtAddrDepdntInfo`.
     */
    CustUnldgPtAddrDepdntInfoRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV2(CustUnldgPtAddrDepdntInfo_1.CustUnldgPtAddrDepdntInfo, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `CustUnldgPtAddrDepdntInfo`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `CustUnldgPtAddrDepdntInfo`.
     */
    CustUnldgPtAddrDepdntInfoRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV2(CustUnldgPtAddrDepdntInfo_1.CustUnldgPtAddrDepdntInfo, entity);
    };
    CustUnldgPtAddrDepdntInfoRequestBuilder.prototype.delete = function (customerOrEntity, addressId, unloadingPointName) {
        return new core_1.DeleteRequestBuilderV2(CustUnldgPtAddrDepdntInfo_1.CustUnldgPtAddrDepdntInfo, customerOrEntity instanceof CustUnldgPtAddrDepdntInfo_1.CustUnldgPtAddrDepdntInfo ? customerOrEntity : {
            Customer: customerOrEntity,
            AddressID: addressId,
            UnloadingPointName: unloadingPointName
        });
    };
    return CustUnldgPtAddrDepdntInfoRequestBuilder;
}(core_1.RequestBuilder));
exports.CustUnldgPtAddrDepdntInfoRequestBuilder = CustUnldgPtAddrDepdntInfoRequestBuilder;
//# sourceMappingURL=CustUnldgPtAddrDepdntInfoRequestBuilder.js.map