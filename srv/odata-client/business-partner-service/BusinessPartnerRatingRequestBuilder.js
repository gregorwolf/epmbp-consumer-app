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
exports.BusinessPartnerRatingRequestBuilder = void 0;
var core_1 = require("@sap-cloud-sdk/core");
var BusinessPartnerRating_1 = require("./BusinessPartnerRating");
/**
 * Request builder class for operations supported on the [[BusinessPartnerRating]] entity.
 */
var BusinessPartnerRatingRequestBuilder = /** @class */ (function (_super) {
    __extends(BusinessPartnerRatingRequestBuilder, _super);
    function BusinessPartnerRatingRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `BusinessPartnerRating` entity based on its keys.
     * @param businessPartner Key property. See [[BusinessPartnerRating.businessPartner]].
     * @param businessPartnerRatingProcedure Key property. See [[BusinessPartnerRating.businessPartnerRatingProcedure]].
     * @param bpRatingValidityEndDate Key property. See [[BusinessPartnerRating.bpRatingValidityEndDate]].
     * @returns A request builder for creating requests to retrieve one `BusinessPartnerRating` entity based on its keys.
     */
    BusinessPartnerRatingRequestBuilder.prototype.getByKey = function (businessPartner, businessPartnerRatingProcedure, bpRatingValidityEndDate) {
        return new core_1.GetByKeyRequestBuilderV2(BusinessPartnerRating_1.BusinessPartnerRating, {
            BusinessPartner: businessPartner,
            BusinessPartnerRatingProcedure: businessPartnerRatingProcedure,
            BPRatingValidityEndDate: bpRatingValidityEndDate
        });
    };
    /**
     * Returns a request builder for querying all `BusinessPartnerRating` entities.
     * @returns A request builder for creating requests to retrieve all `BusinessPartnerRating` entities.
     */
    BusinessPartnerRatingRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV2(BusinessPartnerRating_1.BusinessPartnerRating);
    };
    /**
     * Returns a request builder for creating a `BusinessPartnerRating` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BusinessPartnerRating`.
     */
    BusinessPartnerRatingRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV2(BusinessPartnerRating_1.BusinessPartnerRating, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `BusinessPartnerRating`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BusinessPartnerRating`.
     */
    BusinessPartnerRatingRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV2(BusinessPartnerRating_1.BusinessPartnerRating, entity);
    };
    BusinessPartnerRatingRequestBuilder.prototype.delete = function (businessPartnerOrEntity, businessPartnerRatingProcedure, bpRatingValidityEndDate) {
        return new core_1.DeleteRequestBuilderV2(BusinessPartnerRating_1.BusinessPartnerRating, businessPartnerOrEntity instanceof BusinessPartnerRating_1.BusinessPartnerRating ? businessPartnerOrEntity : {
            BusinessPartner: businessPartnerOrEntity,
            BusinessPartnerRatingProcedure: businessPartnerRatingProcedure,
            BPRatingValidityEndDate: bpRatingValidityEndDate
        });
    };
    return BusinessPartnerRatingRequestBuilder;
}(core_1.RequestBuilder));
exports.BusinessPartnerRatingRequestBuilder = BusinessPartnerRatingRequestBuilder;
//# sourceMappingURL=BusinessPartnerRatingRequestBuilder.js.map