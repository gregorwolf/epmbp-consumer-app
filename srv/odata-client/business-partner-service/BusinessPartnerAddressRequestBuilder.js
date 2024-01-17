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
exports.BusinessPartnerAddressRequestBuilder = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var BusinessPartnerAddress_1 = require("./BusinessPartnerAddress");
/**
 * Request builder class for operations supported on the [[BusinessPartnerAddress]] entity.
 */
var BusinessPartnerAddressRequestBuilder = /** @class */ (function (_super) {
    __extends(BusinessPartnerAddressRequestBuilder, _super);
    function BusinessPartnerAddressRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `BusinessPartnerAddress` entity based on its keys.
     * @param businessPartner Key property. See [[BusinessPartnerAddress.businessPartner]].
     * @param addressId Key property. See [[BusinessPartnerAddress.addressId]].
     * @returns A request builder for creating requests to retrieve one `BusinessPartnerAddress` entity based on its keys.
     */
    BusinessPartnerAddressRequestBuilder.prototype.getByKey = function (businessPartner, addressId) {
        return new core_1.GetByKeyRequestBuilderV2(BusinessPartnerAddress_1.BusinessPartnerAddress, {
            BusinessPartner: businessPartner,
            AddressID: addressId
        });
    };
    /**
     * Returns a request builder for querying all `BusinessPartnerAddress` entities.
     * @returns A request builder for creating requests to retrieve all `BusinessPartnerAddress` entities.
     */
    BusinessPartnerAddressRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV2(BusinessPartnerAddress_1.BusinessPartnerAddress);
    };
    /**
     * Returns a request builder for creating a `BusinessPartnerAddress` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BusinessPartnerAddress`.
     */
    BusinessPartnerAddressRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV2(BusinessPartnerAddress_1.BusinessPartnerAddress, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `BusinessPartnerAddress`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BusinessPartnerAddress`.
     */
    BusinessPartnerAddressRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV2(BusinessPartnerAddress_1.BusinessPartnerAddress, entity);
    };
    BusinessPartnerAddressRequestBuilder.prototype.delete = function (businessPartnerOrEntity, addressId) {
        return new core_1.DeleteRequestBuilderV2(BusinessPartnerAddress_1.BusinessPartnerAddress, businessPartnerOrEntity instanceof BusinessPartnerAddress_1.BusinessPartnerAddress ? businessPartnerOrEntity : {
            BusinessPartner: businessPartnerOrEntity,
            AddressID: addressId
        });
    };
    return BusinessPartnerAddressRequestBuilder;
}(core_1.RequestBuilder));
exports.BusinessPartnerAddressRequestBuilder = BusinessPartnerAddressRequestBuilder;
//# sourceMappingURL=BusinessPartnerAddressRequestBuilder.js.map