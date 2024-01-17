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
exports.AddressPhoneNumberRequestBuilder = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var AddressPhoneNumber_1 = require("./AddressPhoneNumber");
/**
 * Request builder class for operations supported on the [[AddressPhoneNumber]] entity.
 */
var AddressPhoneNumberRequestBuilder = /** @class */ (function (_super) {
    __extends(AddressPhoneNumberRequestBuilder, _super);
    function AddressPhoneNumberRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `AddressPhoneNumber` entity based on its keys.
     * @param addressId Key property. See [[AddressPhoneNumber.addressId]].
     * @param person Key property. See [[AddressPhoneNumber.person]].
     * @param ordinalNumber Key property. See [[AddressPhoneNumber.ordinalNumber]].
     * @returns A request builder for creating requests to retrieve one `AddressPhoneNumber` entity based on its keys.
     */
    AddressPhoneNumberRequestBuilder.prototype.getByKey = function (addressId, person, ordinalNumber) {
        return new core_1.GetByKeyRequestBuilderV2(AddressPhoneNumber_1.AddressPhoneNumber, {
            AddressID: addressId,
            Person: person,
            OrdinalNumber: ordinalNumber
        });
    };
    /**
     * Returns a request builder for querying all `AddressPhoneNumber` entities.
     * @returns A request builder for creating requests to retrieve all `AddressPhoneNumber` entities.
     */
    AddressPhoneNumberRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV2(AddressPhoneNumber_1.AddressPhoneNumber);
    };
    /**
     * Returns a request builder for creating a `AddressPhoneNumber` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `AddressPhoneNumber`.
     */
    AddressPhoneNumberRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV2(AddressPhoneNumber_1.AddressPhoneNumber, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `AddressPhoneNumber`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `AddressPhoneNumber`.
     */
    AddressPhoneNumberRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV2(AddressPhoneNumber_1.AddressPhoneNumber, entity);
    };
    AddressPhoneNumberRequestBuilder.prototype.delete = function (addressIdOrEntity, person, ordinalNumber) {
        return new core_1.DeleteRequestBuilderV2(AddressPhoneNumber_1.AddressPhoneNumber, addressIdOrEntity instanceof AddressPhoneNumber_1.AddressPhoneNumber ? addressIdOrEntity : {
            AddressID: addressIdOrEntity,
            Person: person,
            OrdinalNumber: ordinalNumber
        });
    };
    return AddressPhoneNumberRequestBuilder;
}(core_1.RequestBuilder));
exports.AddressPhoneNumberRequestBuilder = AddressPhoneNumberRequestBuilder;
//# sourceMappingURL=AddressPhoneNumberRequestBuilder.js.map