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
exports.BpIntlAddressVersionRequestBuilder = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var BpIntlAddressVersion_1 = require("./BpIntlAddressVersion");
/**
 * Request builder class for operations supported on the [[BpIntlAddressVersion]] entity.
 */
var BpIntlAddressVersionRequestBuilder = /** @class */ (function (_super) {
    __extends(BpIntlAddressVersionRequestBuilder, _super);
    function BpIntlAddressVersionRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `BpIntlAddressVersion` entity based on its keys.
     * @param businessPartner Key property. See [[BpIntlAddressVersion.businessPartner]].
     * @param addressId Key property. See [[BpIntlAddressVersion.addressId]].
     * @param addressRepresentationCode Key property. See [[BpIntlAddressVersion.addressRepresentationCode]].
     * @returns A request builder for creating requests to retrieve one `BpIntlAddressVersion` entity based on its keys.
     */
    BpIntlAddressVersionRequestBuilder.prototype.getByKey = function (businessPartner, addressId, addressRepresentationCode) {
        return new core_1.GetByKeyRequestBuilderV2(BpIntlAddressVersion_1.BpIntlAddressVersion, {
            BusinessPartner: businessPartner,
            AddressID: addressId,
            AddressRepresentationCode: addressRepresentationCode
        });
    };
    /**
     * Returns a request builder for querying all `BpIntlAddressVersion` entities.
     * @returns A request builder for creating requests to retrieve all `BpIntlAddressVersion` entities.
     */
    BpIntlAddressVersionRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV2(BpIntlAddressVersion_1.BpIntlAddressVersion);
    };
    /**
     * Returns a request builder for creating a `BpIntlAddressVersion` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BpIntlAddressVersion`.
     */
    BpIntlAddressVersionRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV2(BpIntlAddressVersion_1.BpIntlAddressVersion, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `BpIntlAddressVersion`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BpIntlAddressVersion`.
     */
    BpIntlAddressVersionRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV2(BpIntlAddressVersion_1.BpIntlAddressVersion, entity);
    };
    BpIntlAddressVersionRequestBuilder.prototype.delete = function (businessPartnerOrEntity, addressId, addressRepresentationCode) {
        return new core_1.DeleteRequestBuilderV2(BpIntlAddressVersion_1.BpIntlAddressVersion, businessPartnerOrEntity instanceof BpIntlAddressVersion_1.BpIntlAddressVersion ? businessPartnerOrEntity : {
            BusinessPartner: businessPartnerOrEntity,
            AddressID: addressId,
            AddressRepresentationCode: addressRepresentationCode
        });
    };
    return BpIntlAddressVersionRequestBuilder;
}(core_1.RequestBuilder));
exports.BpIntlAddressVersionRequestBuilder = BpIntlAddressVersionRequestBuilder;
//# sourceMappingURL=BpIntlAddressVersionRequestBuilder.js.map