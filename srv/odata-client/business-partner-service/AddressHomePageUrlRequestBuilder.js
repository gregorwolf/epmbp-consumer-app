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
exports.AddressHomePageUrlRequestBuilder = void 0;
var core_1 = require("@sap-cloud-sdk/core");
var AddressHomePageUrl_1 = require("./AddressHomePageUrl");
/**
 * Request builder class for operations supported on the [[AddressHomePageUrl]] entity.
 */
var AddressHomePageUrlRequestBuilder = /** @class */ (function (_super) {
    __extends(AddressHomePageUrlRequestBuilder, _super);
    function AddressHomePageUrlRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `AddressHomePageUrl` entity based on its keys.
     * @param addressId Key property. See [[AddressHomePageUrl.addressId]].
     * @param person Key property. See [[AddressHomePageUrl.person]].
     * @param ordinalNumber Key property. See [[AddressHomePageUrl.ordinalNumber]].
     * @param validityStartDate Key property. See [[AddressHomePageUrl.validityStartDate]].
     * @param isDefaultUrlAddress Key property. See [[AddressHomePageUrl.isDefaultUrlAddress]].
     * @returns A request builder for creating requests to retrieve one `AddressHomePageUrl` entity based on its keys.
     */
    AddressHomePageUrlRequestBuilder.prototype.getByKey = function (addressId, person, ordinalNumber, validityStartDate, isDefaultUrlAddress) {
        return new core_1.GetByKeyRequestBuilder(AddressHomePageUrl_1.AddressHomePageUrl, {
            AddressID: addressId,
            Person: person,
            OrdinalNumber: ordinalNumber,
            ValidityStartDate: validityStartDate,
            IsDefaultURLAddress: isDefaultUrlAddress
        });
    };
    /**
     * Returns a request builder for querying all `AddressHomePageUrl` entities.
     * @returns A request builder for creating requests to retrieve all `AddressHomePageUrl` entities.
     */
    AddressHomePageUrlRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(AddressHomePageUrl_1.AddressHomePageUrl);
    };
    /**
     * Returns a request builder for creating a `AddressHomePageUrl` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `AddressHomePageUrl`.
     */
    AddressHomePageUrlRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(AddressHomePageUrl_1.AddressHomePageUrl, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `AddressHomePageUrl`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `AddressHomePageUrl`.
     */
    AddressHomePageUrlRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(AddressHomePageUrl_1.AddressHomePageUrl, entity);
    };
    AddressHomePageUrlRequestBuilder.prototype.delete = function (addressIdOrEntity, person, ordinalNumber, validityStartDate, isDefaultUrlAddress) {
        return new core_1.DeleteRequestBuilder(AddressHomePageUrl_1.AddressHomePageUrl, addressIdOrEntity instanceof AddressHomePageUrl_1.AddressHomePageUrl ? addressIdOrEntity : {
            AddressID: addressIdOrEntity,
            Person: person,
            OrdinalNumber: ordinalNumber,
            ValidityStartDate: validityStartDate,
            IsDefaultURLAddress: isDefaultUrlAddress
        });
    };
    return AddressHomePageUrlRequestBuilder;
}(core_1.RequestBuilder));
exports.AddressHomePageUrlRequestBuilder = AddressHomePageUrlRequestBuilder;
//# sourceMappingURL=AddressHomePageUrlRequestBuilder.js.map