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
exports.AddressFaxNumberRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var AddressFaxNumber_1 = require("./AddressFaxNumber");
/**
 * Request builder class for operations supported on the [[AddressFaxNumber]] entity.
 */
var AddressFaxNumberRequestBuilder = /** @class */ (function (_super) {
    __extends(AddressFaxNumberRequestBuilder, _super);
    function AddressFaxNumberRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `AddressFaxNumber` entity based on its keys.
     * @param addressId Key property. See [[AddressFaxNumber.addressId]].
     * @param person Key property. See [[AddressFaxNumber.person]].
     * @param ordinalNumber Key property. See [[AddressFaxNumber.ordinalNumber]].
     * @returns A request builder for creating requests to retrieve one `AddressFaxNumber` entity based on its keys.
     */
    AddressFaxNumberRequestBuilder.prototype.getByKey = function (addressId, person, ordinalNumber) {
        return new core_1.GetByKeyRequestBuilder(AddressFaxNumber_1.AddressFaxNumber, {
            AddressID: addressId,
            Person: person,
            OrdinalNumber: ordinalNumber
        });
    };
    /**
     * Returns a request builder for querying all `AddressFaxNumber` entities.
     * @returns A request builder for creating requests to retrieve all `AddressFaxNumber` entities.
     */
    AddressFaxNumberRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(AddressFaxNumber_1.AddressFaxNumber);
    };
    /**
     * Returns a request builder for creating a `AddressFaxNumber` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `AddressFaxNumber`.
     */
    AddressFaxNumberRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(AddressFaxNumber_1.AddressFaxNumber, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `AddressFaxNumber`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `AddressFaxNumber`.
     */
    AddressFaxNumberRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(AddressFaxNumber_1.AddressFaxNumber, entity);
    };
    AddressFaxNumberRequestBuilder.prototype.delete = function (addressIdOrEntity, person, ordinalNumber) {
        return new core_1.DeleteRequestBuilder(AddressFaxNumber_1.AddressFaxNumber, addressIdOrEntity instanceof AddressFaxNumber_1.AddressFaxNumber ? addressIdOrEntity : {
            AddressID: addressIdOrEntity,
            Person: person,
            OrdinalNumber: ordinalNumber
        });
    };
    return AddressFaxNumberRequestBuilder;
}(core_1.RequestBuilder));
exports.AddressFaxNumberRequestBuilder = AddressFaxNumberRequestBuilder;
//# sourceMappingURL=AddressFaxNumberRequestBuilder.js.map