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
exports.BuPaAddressUsageRequestBuilder = void 0;
var core_1 = require("@sap-cloud-sdk/core");
var BuPaAddressUsage_1 = require("./BuPaAddressUsage");
/**
 * Request builder class for operations supported on the [[BuPaAddressUsage]] entity.
 */
var BuPaAddressUsageRequestBuilder = /** @class */ (function (_super) {
    __extends(BuPaAddressUsageRequestBuilder, _super);
    function BuPaAddressUsageRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `BuPaAddressUsage` entity based on its keys.
     * @param businessPartner Key property. See [[BuPaAddressUsage.businessPartner]].
     * @param validityEndDate Key property. See [[BuPaAddressUsage.validityEndDate]].
     * @param addressUsage Key property. See [[BuPaAddressUsage.addressUsage]].
     * @param addressId Key property. See [[BuPaAddressUsage.addressId]].
     * @returns A request builder for creating requests to retrieve one `BuPaAddressUsage` entity based on its keys.
     */
    BuPaAddressUsageRequestBuilder.prototype.getByKey = function (businessPartner, validityEndDate, addressUsage, addressId) {
        return new core_1.GetByKeyRequestBuilder(BuPaAddressUsage_1.BuPaAddressUsage, {
            BusinessPartner: businessPartner,
            ValidityEndDate: validityEndDate,
            AddressUsage: addressUsage,
            AddressID: addressId
        });
    };
    /**
     * Returns a request builder for querying all `BuPaAddressUsage` entities.
     * @returns A request builder for creating requests to retrieve all `BuPaAddressUsage` entities.
     */
    BuPaAddressUsageRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(BuPaAddressUsage_1.BuPaAddressUsage);
    };
    /**
     * Returns a request builder for creating a `BuPaAddressUsage` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BuPaAddressUsage`.
     */
    BuPaAddressUsageRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(BuPaAddressUsage_1.BuPaAddressUsage, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `BuPaAddressUsage`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BuPaAddressUsage`.
     */
    BuPaAddressUsageRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(BuPaAddressUsage_1.BuPaAddressUsage, entity);
    };
    BuPaAddressUsageRequestBuilder.prototype.delete = function (businessPartnerOrEntity, validityEndDate, addressUsage, addressId) {
        return new core_1.DeleteRequestBuilder(BuPaAddressUsage_1.BuPaAddressUsage, businessPartnerOrEntity instanceof BuPaAddressUsage_1.BuPaAddressUsage ? businessPartnerOrEntity : {
            BusinessPartner: businessPartnerOrEntity,
            ValidityEndDate: validityEndDate,
            AddressUsage: addressUsage,
            AddressID: addressId
        });
    };
    return BuPaAddressUsageRequestBuilder;
}(core_1.RequestBuilder));
exports.BuPaAddressUsageRequestBuilder = BuPaAddressUsageRequestBuilder;
//# sourceMappingURL=BuPaAddressUsageRequestBuilder.js.map