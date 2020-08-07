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
exports.BpContactToFuncAndDeptRequestBuilder = void 0;
var core_1 = require("@sap-cloud-sdk/core");
var BpContactToFuncAndDept_1 = require("./BpContactToFuncAndDept");
/**
 * Request builder class for operations supported on the [[BpContactToFuncAndDept]] entity.
 */
var BpContactToFuncAndDeptRequestBuilder = /** @class */ (function (_super) {
    __extends(BpContactToFuncAndDeptRequestBuilder, _super);
    function BpContactToFuncAndDeptRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `BpContactToFuncAndDept` entity based on its keys.
     * @param relationshipNumber Key property. See [[BpContactToFuncAndDept.relationshipNumber]].
     * @param businessPartnerCompany Key property. See [[BpContactToFuncAndDept.businessPartnerCompany]].
     * @param businessPartnerPerson Key property. See [[BpContactToFuncAndDept.businessPartnerPerson]].
     * @param validityEndDate Key property. See [[BpContactToFuncAndDept.validityEndDate]].
     * @returns A request builder for creating requests to retrieve one `BpContactToFuncAndDept` entity based on its keys.
     */
    BpContactToFuncAndDeptRequestBuilder.prototype.getByKey = function (relationshipNumber, businessPartnerCompany, businessPartnerPerson, validityEndDate) {
        return new core_1.GetByKeyRequestBuilder(BpContactToFuncAndDept_1.BpContactToFuncAndDept, {
            RelationshipNumber: relationshipNumber,
            BusinessPartnerCompany: businessPartnerCompany,
            BusinessPartnerPerson: businessPartnerPerson,
            ValidityEndDate: validityEndDate
        });
    };
    /**
     * Returns a request builder for querying all `BpContactToFuncAndDept` entities.
     * @returns A request builder for creating requests to retrieve all `BpContactToFuncAndDept` entities.
     */
    BpContactToFuncAndDeptRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(BpContactToFuncAndDept_1.BpContactToFuncAndDept);
    };
    /**
     * Returns a request builder for updating an entity of type `BpContactToFuncAndDept`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BpContactToFuncAndDept`.
     */
    BpContactToFuncAndDeptRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(BpContactToFuncAndDept_1.BpContactToFuncAndDept, entity);
    };
    return BpContactToFuncAndDeptRequestBuilder;
}(core_1.RequestBuilder));
exports.BpContactToFuncAndDeptRequestBuilder = BpContactToFuncAndDeptRequestBuilder;
//# sourceMappingURL=BpContactToFuncAndDeptRequestBuilder.js.map