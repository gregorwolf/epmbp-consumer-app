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
exports.BpRelationshipRequestBuilder = void 0;
var core_1 = require("@sap-cloud-sdk/core");
var BpRelationship_1 = require("./BpRelationship");
/**
 * Request builder class for operations supported on the [[BpRelationship]] entity.
 */
var BpRelationshipRequestBuilder = /** @class */ (function (_super) {
    __extends(BpRelationshipRequestBuilder, _super);
    function BpRelationshipRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `BpRelationship` entity based on its keys.
     * @param relationshipNumber Key property. See [[BpRelationship.relationshipNumber]].
     * @param businessPartner1 Key property. See [[BpRelationship.businessPartner1]].
     * @param businessPartner2 Key property. See [[BpRelationship.businessPartner2]].
     * @param validityEndDate Key property. See [[BpRelationship.validityEndDate]].
     * @returns A request builder for creating requests to retrieve one `BpRelationship` entity based on its keys.
     */
    BpRelationshipRequestBuilder.prototype.getByKey = function (relationshipNumber, businessPartner1, businessPartner2, validityEndDate) {
        return new core_1.GetByKeyRequestBuilderV2(BpRelationship_1.BpRelationship, {
            RelationshipNumber: relationshipNumber,
            BusinessPartner1: businessPartner1,
            BusinessPartner2: businessPartner2,
            ValidityEndDate: validityEndDate
        });
    };
    /**
     * Returns a request builder for querying all `BpRelationship` entities.
     * @returns A request builder for creating requests to retrieve all `BpRelationship` entities.
     */
    BpRelationshipRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV2(BpRelationship_1.BpRelationship);
    };
    /**
     * Returns a request builder for creating a `BpRelationship` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BpRelationship`.
     */
    BpRelationshipRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV2(BpRelationship_1.BpRelationship, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `BpRelationship`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BpRelationship`.
     */
    BpRelationshipRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV2(BpRelationship_1.BpRelationship, entity);
    };
    BpRelationshipRequestBuilder.prototype.delete = function (relationshipNumberOrEntity, businessPartner1, businessPartner2, validityEndDate) {
        return new core_1.DeleteRequestBuilderV2(BpRelationship_1.BpRelationship, relationshipNumberOrEntity instanceof BpRelationship_1.BpRelationship ? relationshipNumberOrEntity : {
            RelationshipNumber: relationshipNumberOrEntity,
            BusinessPartner1: businessPartner1,
            BusinessPartner2: businessPartner2,
            ValidityEndDate: validityEndDate
        });
    };
    return BpRelationshipRequestBuilder;
}(core_1.RequestBuilder));
exports.BpRelationshipRequestBuilder = BpRelationshipRequestBuilder;
//# sourceMappingURL=BpRelationshipRequestBuilder.js.map