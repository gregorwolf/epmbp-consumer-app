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
exports.SlsPrcgCndnRecdValidityRequestBuilder = void 0;
var core_1 = require("@sap-cloud-sdk/core");
var SlsPrcgCndnRecdValidity_1 = require("./SlsPrcgCndnRecdValidity");
/**
 * Request builder class for operations supported on the [[SlsPrcgCndnRecdValidity]] entity.
 */
var SlsPrcgCndnRecdValidityRequestBuilder = /** @class */ (function (_super) {
    __extends(SlsPrcgCndnRecdValidityRequestBuilder, _super);
    function SlsPrcgCndnRecdValidityRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `SlsPrcgCndnRecdValidity` entity based on its keys.
     * @param conditionRecord Key property. See [[SlsPrcgCndnRecdValidity.conditionRecord]].
     * @param conditionValidityEndDate Key property. See [[SlsPrcgCndnRecdValidity.conditionValidityEndDate]].
     * @returns A request builder for creating requests to retrieve one `SlsPrcgCndnRecdValidity` entity based on its keys.
     */
    SlsPrcgCndnRecdValidityRequestBuilder.prototype.getByKey = function (conditionRecord, conditionValidityEndDate) {
        return new core_1.GetByKeyRequestBuilderV2(SlsPrcgCndnRecdValidity_1.SlsPrcgCndnRecdValidity, {
            ConditionRecord: conditionRecord,
            ConditionValidityEndDate: conditionValidityEndDate
        });
    };
    /**
     * Returns a request builder for querying all `SlsPrcgCndnRecdValidity` entities.
     * @returns A request builder for creating requests to retrieve all `SlsPrcgCndnRecdValidity` entities.
     */
    SlsPrcgCndnRecdValidityRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV2(SlsPrcgCndnRecdValidity_1.SlsPrcgCndnRecdValidity);
    };
    /**
     * Returns a request builder for updating an entity of type `SlsPrcgCndnRecdValidity`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SlsPrcgCndnRecdValidity`.
     */
    SlsPrcgCndnRecdValidityRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV2(SlsPrcgCndnRecdValidity_1.SlsPrcgCndnRecdValidity, entity);
    };
    return SlsPrcgCndnRecdValidityRequestBuilder;
}(core_1.RequestBuilder));
exports.SlsPrcgCndnRecdValidityRequestBuilder = SlsPrcgCndnRecdValidityRequestBuilder;
//# sourceMappingURL=SlsPrcgCndnRecdValidityRequestBuilder.js.map