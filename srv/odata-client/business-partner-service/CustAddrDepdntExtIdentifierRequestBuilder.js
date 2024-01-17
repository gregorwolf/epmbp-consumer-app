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
exports.CustAddrDepdntExtIdentifierRequestBuilder = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var CustAddrDepdntExtIdentifier_1 = require("./CustAddrDepdntExtIdentifier");
/**
 * Request builder class for operations supported on the [[CustAddrDepdntExtIdentifier]] entity.
 */
var CustAddrDepdntExtIdentifierRequestBuilder = /** @class */ (function (_super) {
    __extends(CustAddrDepdntExtIdentifierRequestBuilder, _super);
    function CustAddrDepdntExtIdentifierRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `CustAddrDepdntExtIdentifier` entity based on its keys.
     * @param customer Key property. See [[CustAddrDepdntExtIdentifier.customer]].
     * @param addressId Key property. See [[CustAddrDepdntExtIdentifier.addressId]].
     * @returns A request builder for creating requests to retrieve one `CustAddrDepdntExtIdentifier` entity based on its keys.
     */
    CustAddrDepdntExtIdentifierRequestBuilder.prototype.getByKey = function (customer, addressId) {
        return new core_1.GetByKeyRequestBuilderV2(CustAddrDepdntExtIdentifier_1.CustAddrDepdntExtIdentifier, {
            Customer: customer,
            AddressID: addressId
        });
    };
    /**
     * Returns a request builder for querying all `CustAddrDepdntExtIdentifier` entities.
     * @returns A request builder for creating requests to retrieve all `CustAddrDepdntExtIdentifier` entities.
     */
    CustAddrDepdntExtIdentifierRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV2(CustAddrDepdntExtIdentifier_1.CustAddrDepdntExtIdentifier);
    };
    /**
     * Returns a request builder for creating a `CustAddrDepdntExtIdentifier` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `CustAddrDepdntExtIdentifier`.
     */
    CustAddrDepdntExtIdentifierRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV2(CustAddrDepdntExtIdentifier_1.CustAddrDepdntExtIdentifier, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `CustAddrDepdntExtIdentifier`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `CustAddrDepdntExtIdentifier`.
     */
    CustAddrDepdntExtIdentifierRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV2(CustAddrDepdntExtIdentifier_1.CustAddrDepdntExtIdentifier, entity);
    };
    CustAddrDepdntExtIdentifierRequestBuilder.prototype.delete = function (customerOrEntity, addressId) {
        return new core_1.DeleteRequestBuilderV2(CustAddrDepdntExtIdentifier_1.CustAddrDepdntExtIdentifier, customerOrEntity instanceof CustAddrDepdntExtIdentifier_1.CustAddrDepdntExtIdentifier ? customerOrEntity : {
            Customer: customerOrEntity,
            AddressID: addressId
        });
    };
    return CustAddrDepdntExtIdentifierRequestBuilder;
}(core_1.RequestBuilder));
exports.CustAddrDepdntExtIdentifierRequestBuilder = CustAddrDepdntExtIdentifierRequestBuilder;
//# sourceMappingURL=CustAddrDepdntExtIdentifierRequestBuilder.js.map