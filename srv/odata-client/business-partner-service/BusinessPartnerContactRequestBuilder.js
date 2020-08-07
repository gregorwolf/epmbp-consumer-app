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
exports.BusinessPartnerContactRequestBuilder = void 0;
var core_1 = require("@sap-cloud-sdk/core");
var BusinessPartnerContact_1 = require("./BusinessPartnerContact");
/**
 * Request builder class for operations supported on the [[BusinessPartnerContact]] entity.
 */
var BusinessPartnerContactRequestBuilder = /** @class */ (function (_super) {
    __extends(BusinessPartnerContactRequestBuilder, _super);
    function BusinessPartnerContactRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `BusinessPartnerContact` entity based on its keys.
     * @param relationshipNumber Key property. See [[BusinessPartnerContact.relationshipNumber]].
     * @param businessPartnerCompany Key property. See [[BusinessPartnerContact.businessPartnerCompany]].
     * @param businessPartnerPerson Key property. See [[BusinessPartnerContact.businessPartnerPerson]].
     * @param validityEndDate Key property. See [[BusinessPartnerContact.validityEndDate]].
     * @returns A request builder for creating requests to retrieve one `BusinessPartnerContact` entity based on its keys.
     */
    BusinessPartnerContactRequestBuilder.prototype.getByKey = function (relationshipNumber, businessPartnerCompany, businessPartnerPerson, validityEndDate) {
        return new core_1.GetByKeyRequestBuilder(BusinessPartnerContact_1.BusinessPartnerContact, {
            RelationshipNumber: relationshipNumber,
            BusinessPartnerCompany: businessPartnerCompany,
            BusinessPartnerPerson: businessPartnerPerson,
            ValidityEndDate: validityEndDate
        });
    };
    /**
     * Returns a request builder for querying all `BusinessPartnerContact` entities.
     * @returns A request builder for creating requests to retrieve all `BusinessPartnerContact` entities.
     */
    BusinessPartnerContactRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(BusinessPartnerContact_1.BusinessPartnerContact);
    };
    /**
     * Returns a request builder for creating a `BusinessPartnerContact` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BusinessPartnerContact`.
     */
    BusinessPartnerContactRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(BusinessPartnerContact_1.BusinessPartnerContact, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `BusinessPartnerContact`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BusinessPartnerContact`.
     */
    BusinessPartnerContactRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(BusinessPartnerContact_1.BusinessPartnerContact, entity);
    };
    BusinessPartnerContactRequestBuilder.prototype.delete = function (relationshipNumberOrEntity, businessPartnerCompany, businessPartnerPerson, validityEndDate) {
        return new core_1.DeleteRequestBuilder(BusinessPartnerContact_1.BusinessPartnerContact, relationshipNumberOrEntity instanceof BusinessPartnerContact_1.BusinessPartnerContact ? relationshipNumberOrEntity : {
            RelationshipNumber: relationshipNumberOrEntity,
            BusinessPartnerCompany: businessPartnerCompany,
            BusinessPartnerPerson: businessPartnerPerson,
            ValidityEndDate: validityEndDate
        });
    };
    return BusinessPartnerContactRequestBuilder;
}(core_1.RequestBuilder));
exports.BusinessPartnerContactRequestBuilder = BusinessPartnerContactRequestBuilder;
//# sourceMappingURL=BusinessPartnerContactRequestBuilder.js.map