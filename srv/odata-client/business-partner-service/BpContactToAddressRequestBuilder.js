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
exports.BpContactToAddressRequestBuilder = void 0;
var core_1 = require("@sap-cloud-sdk/core");
var BpContactToAddress_1 = require("./BpContactToAddress");
/**
 * Request builder class for operations supported on the [[BpContactToAddress]] entity.
 */
var BpContactToAddressRequestBuilder = /** @class */ (function (_super) {
    __extends(BpContactToAddressRequestBuilder, _super);
    function BpContactToAddressRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `BpContactToAddress` entity based on its keys.
     * @param relationshipNumber Key property. See [[BpContactToAddress.relationshipNumber]].
     * @param businessPartnerCompany Key property. See [[BpContactToAddress.businessPartnerCompany]].
     * @param businessPartnerPerson Key property. See [[BpContactToAddress.businessPartnerPerson]].
     * @param validityEndDate Key property. See [[BpContactToAddress.validityEndDate]].
     * @param addressId Key property. See [[BpContactToAddress.addressId]].
     * @returns A request builder for creating requests to retrieve one `BpContactToAddress` entity based on its keys.
     */
    BpContactToAddressRequestBuilder.prototype.getByKey = function (relationshipNumber, businessPartnerCompany, businessPartnerPerson, validityEndDate, addressId) {
        return new core_1.GetByKeyRequestBuilder(BpContactToAddress_1.BpContactToAddress, {
            RelationshipNumber: relationshipNumber,
            BusinessPartnerCompany: businessPartnerCompany,
            BusinessPartnerPerson: businessPartnerPerson,
            ValidityEndDate: validityEndDate,
            AddressID: addressId
        });
    };
    /**
     * Returns a request builder for querying all `BpContactToAddress` entities.
     * @returns A request builder for creating requests to retrieve all `BpContactToAddress` entities.
     */
    BpContactToAddressRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(BpContactToAddress_1.BpContactToAddress);
    };
    return BpContactToAddressRequestBuilder;
}(core_1.RequestBuilder));
exports.BpContactToAddressRequestBuilder = BpContactToAddressRequestBuilder;
//# sourceMappingURL=BpContactToAddressRequestBuilder.js.map