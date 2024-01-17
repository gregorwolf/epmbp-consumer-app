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
exports.CustAddrDepdntInformationRequestBuilder = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var CustAddrDepdntInformation_1 = require("./CustAddrDepdntInformation");
/**
 * Request builder class for operations supported on the [[CustAddrDepdntInformation]] entity.
 */
var CustAddrDepdntInformationRequestBuilder = /** @class */ (function (_super) {
    __extends(CustAddrDepdntInformationRequestBuilder, _super);
    function CustAddrDepdntInformationRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `CustAddrDepdntInformation` entity based on its keys.
     * @param customer Key property. See [[CustAddrDepdntInformation.customer]].
     * @param addressId Key property. See [[CustAddrDepdntInformation.addressId]].
     * @returns A request builder for creating requests to retrieve one `CustAddrDepdntInformation` entity based on its keys.
     */
    CustAddrDepdntInformationRequestBuilder.prototype.getByKey = function (customer, addressId) {
        return new core_1.GetByKeyRequestBuilderV2(CustAddrDepdntInformation_1.CustAddrDepdntInformation, {
            Customer: customer,
            AddressID: addressId
        });
    };
    /**
     * Returns a request builder for querying all `CustAddrDepdntInformation` entities.
     * @returns A request builder for creating requests to retrieve all `CustAddrDepdntInformation` entities.
     */
    CustAddrDepdntInformationRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV2(CustAddrDepdntInformation_1.CustAddrDepdntInformation);
    };
    /**
     * Returns a request builder for creating a `CustAddrDepdntInformation` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `CustAddrDepdntInformation`.
     */
    CustAddrDepdntInformationRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV2(CustAddrDepdntInformation_1.CustAddrDepdntInformation, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `CustAddrDepdntInformation`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `CustAddrDepdntInformation`.
     */
    CustAddrDepdntInformationRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV2(CustAddrDepdntInformation_1.CustAddrDepdntInformation, entity);
    };
    CustAddrDepdntInformationRequestBuilder.prototype.delete = function (customerOrEntity, addressId) {
        return new core_1.DeleteRequestBuilderV2(CustAddrDepdntInformation_1.CustAddrDepdntInformation, customerOrEntity instanceof CustAddrDepdntInformation_1.CustAddrDepdntInformation ? customerOrEntity : {
            Customer: customerOrEntity,
            AddressID: addressId
        });
    };
    return CustAddrDepdntInformationRequestBuilder;
}(core_1.RequestBuilder));
exports.CustAddrDepdntInformationRequestBuilder = CustAddrDepdntInformationRequestBuilder;
//# sourceMappingURL=CustAddrDepdntInformationRequestBuilder.js.map