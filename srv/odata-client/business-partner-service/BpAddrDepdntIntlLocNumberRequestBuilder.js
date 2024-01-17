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
exports.BpAddrDepdntIntlLocNumberRequestBuilder = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var BpAddrDepdntIntlLocNumber_1 = require("./BpAddrDepdntIntlLocNumber");
/**
 * Request builder class for operations supported on the [[BpAddrDepdntIntlLocNumber]] entity.
 */
var BpAddrDepdntIntlLocNumberRequestBuilder = /** @class */ (function (_super) {
    __extends(BpAddrDepdntIntlLocNumberRequestBuilder, _super);
    function BpAddrDepdntIntlLocNumberRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `BpAddrDepdntIntlLocNumber` entity based on its keys.
     * @param businessPartner Key property. See [[BpAddrDepdntIntlLocNumber.businessPartner]].
     * @param addressId Key property. See [[BpAddrDepdntIntlLocNumber.addressId]].
     * @returns A request builder for creating requests to retrieve one `BpAddrDepdntIntlLocNumber` entity based on its keys.
     */
    BpAddrDepdntIntlLocNumberRequestBuilder.prototype.getByKey = function (businessPartner, addressId) {
        return new core_1.GetByKeyRequestBuilderV2(BpAddrDepdntIntlLocNumber_1.BpAddrDepdntIntlLocNumber, {
            BusinessPartner: businessPartner,
            AddressID: addressId
        });
    };
    /**
     * Returns a request builder for querying all `BpAddrDepdntIntlLocNumber` entities.
     * @returns A request builder for creating requests to retrieve all `BpAddrDepdntIntlLocNumber` entities.
     */
    BpAddrDepdntIntlLocNumberRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV2(BpAddrDepdntIntlLocNumber_1.BpAddrDepdntIntlLocNumber);
    };
    /**
     * Returns a request builder for creating a `BpAddrDepdntIntlLocNumber` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BpAddrDepdntIntlLocNumber`.
     */
    BpAddrDepdntIntlLocNumberRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV2(BpAddrDepdntIntlLocNumber_1.BpAddrDepdntIntlLocNumber, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `BpAddrDepdntIntlLocNumber`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BpAddrDepdntIntlLocNumber`.
     */
    BpAddrDepdntIntlLocNumberRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV2(BpAddrDepdntIntlLocNumber_1.BpAddrDepdntIntlLocNumber, entity);
    };
    BpAddrDepdntIntlLocNumberRequestBuilder.prototype.delete = function (businessPartnerOrEntity, addressId) {
        return new core_1.DeleteRequestBuilderV2(BpAddrDepdntIntlLocNumber_1.BpAddrDepdntIntlLocNumber, businessPartnerOrEntity instanceof BpAddrDepdntIntlLocNumber_1.BpAddrDepdntIntlLocNumber ? businessPartnerOrEntity : {
            BusinessPartner: businessPartnerOrEntity,
            AddressID: addressId
        });
    };
    return BpAddrDepdntIntlLocNumberRequestBuilder;
}(core_1.RequestBuilder));
exports.BpAddrDepdntIntlLocNumberRequestBuilder = BpAddrDepdntIntlLocNumberRequestBuilder;
//# sourceMappingURL=BpAddrDepdntIntlLocNumberRequestBuilder.js.map