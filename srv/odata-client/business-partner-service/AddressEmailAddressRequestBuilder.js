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
exports.AddressEmailAddressRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var AddressEmailAddress_1 = require("./AddressEmailAddress");
/**
 * Request builder class for operations supported on the [[AddressEmailAddress]] entity.
 */
var AddressEmailAddressRequestBuilder = /** @class */ (function (_super) {
    __extends(AddressEmailAddressRequestBuilder, _super);
    function AddressEmailAddressRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `AddressEmailAddress` entity based on its keys.
     * @param addressId Key property. See [[AddressEmailAddress.addressId]].
     * @param person Key property. See [[AddressEmailAddress.person]].
     * @param ordinalNumber Key property. See [[AddressEmailAddress.ordinalNumber]].
     * @returns A request builder for creating requests to retrieve one `AddressEmailAddress` entity based on its keys.
     */
    AddressEmailAddressRequestBuilder.prototype.getByKey = function (addressId, person, ordinalNumber) {
        return new core_1.GetByKeyRequestBuilder(AddressEmailAddress_1.AddressEmailAddress, {
            AddressID: addressId,
            Person: person,
            OrdinalNumber: ordinalNumber
        });
    };
    /**
     * Returns a request builder for querying all `AddressEmailAddress` entities.
     * @returns A request builder for creating requests to retrieve all `AddressEmailAddress` entities.
     */
    AddressEmailAddressRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(AddressEmailAddress_1.AddressEmailAddress);
    };
    /**
     * Returns a request builder for creating a `AddressEmailAddress` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `AddressEmailAddress`.
     */
    AddressEmailAddressRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(AddressEmailAddress_1.AddressEmailAddress, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `AddressEmailAddress`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `AddressEmailAddress`.
     */
    AddressEmailAddressRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(AddressEmailAddress_1.AddressEmailAddress, entity);
    };
    AddressEmailAddressRequestBuilder.prototype.delete = function (addressIdOrEntity, person, ordinalNumber) {
        return new core_1.DeleteRequestBuilder(AddressEmailAddress_1.AddressEmailAddress, addressIdOrEntity instanceof AddressEmailAddress_1.AddressEmailAddress ? addressIdOrEntity : {
            AddressID: addressIdOrEntity,
            Person: person,
            OrdinalNumber: ordinalNumber
        });
    };
    return AddressEmailAddressRequestBuilder;
}(core_1.RequestBuilder));
exports.AddressEmailAddressRequestBuilder = AddressEmailAddressRequestBuilder;
//# sourceMappingURL=AddressEmailAddressRequestBuilder.js.map