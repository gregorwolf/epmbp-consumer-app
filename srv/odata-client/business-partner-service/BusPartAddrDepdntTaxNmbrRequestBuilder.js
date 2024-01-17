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
exports.BusPartAddrDepdntTaxNmbrRequestBuilder = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var BusPartAddrDepdntTaxNmbr_1 = require("./BusPartAddrDepdntTaxNmbr");
/**
 * Request builder class for operations supported on the [[BusPartAddrDepdntTaxNmbr]] entity.
 */
var BusPartAddrDepdntTaxNmbrRequestBuilder = /** @class */ (function (_super) {
    __extends(BusPartAddrDepdntTaxNmbrRequestBuilder, _super);
    function BusPartAddrDepdntTaxNmbrRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `BusPartAddrDepdntTaxNmbr` entity based on its keys.
     * @param businessPartner Key property. See [[BusPartAddrDepdntTaxNmbr.businessPartner]].
     * @param addressId Key property. See [[BusPartAddrDepdntTaxNmbr.addressId]].
     * @param bpTaxType Key property. See [[BusPartAddrDepdntTaxNmbr.bpTaxType]].
     * @returns A request builder for creating requests to retrieve one `BusPartAddrDepdntTaxNmbr` entity based on its keys.
     */
    BusPartAddrDepdntTaxNmbrRequestBuilder.prototype.getByKey = function (businessPartner, addressId, bpTaxType) {
        return new core_1.GetByKeyRequestBuilderV2(BusPartAddrDepdntTaxNmbr_1.BusPartAddrDepdntTaxNmbr, {
            BusinessPartner: businessPartner,
            AddressID: addressId,
            BPTaxType: bpTaxType
        });
    };
    /**
     * Returns a request builder for querying all `BusPartAddrDepdntTaxNmbr` entities.
     * @returns A request builder for creating requests to retrieve all `BusPartAddrDepdntTaxNmbr` entities.
     */
    BusPartAddrDepdntTaxNmbrRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV2(BusPartAddrDepdntTaxNmbr_1.BusPartAddrDepdntTaxNmbr);
    };
    /**
     * Returns a request builder for creating a `BusPartAddrDepdntTaxNmbr` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BusPartAddrDepdntTaxNmbr`.
     */
    BusPartAddrDepdntTaxNmbrRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV2(BusPartAddrDepdntTaxNmbr_1.BusPartAddrDepdntTaxNmbr, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `BusPartAddrDepdntTaxNmbr`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BusPartAddrDepdntTaxNmbr`.
     */
    BusPartAddrDepdntTaxNmbrRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV2(BusPartAddrDepdntTaxNmbr_1.BusPartAddrDepdntTaxNmbr, entity);
    };
    BusPartAddrDepdntTaxNmbrRequestBuilder.prototype.delete = function (businessPartnerOrEntity, addressId, bpTaxType) {
        return new core_1.DeleteRequestBuilderV2(BusPartAddrDepdntTaxNmbr_1.BusPartAddrDepdntTaxNmbr, businessPartnerOrEntity instanceof BusPartAddrDepdntTaxNmbr_1.BusPartAddrDepdntTaxNmbr ? businessPartnerOrEntity : {
            BusinessPartner: businessPartnerOrEntity,
            AddressID: addressId,
            BPTaxType: bpTaxType
        });
    };
    return BusPartAddrDepdntTaxNmbrRequestBuilder;
}(core_1.RequestBuilder));
exports.BusPartAddrDepdntTaxNmbrRequestBuilder = BusPartAddrDepdntTaxNmbrRequestBuilder;
//# sourceMappingURL=BusPartAddrDepdntTaxNmbrRequestBuilder.js.map