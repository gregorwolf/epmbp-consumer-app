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
exports.SlsPrcgConditionRecordRequestBuilder = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var SlsPrcgConditionRecord_1 = require("./SlsPrcgConditionRecord");
/**
 * Request builder class for operations supported on the [[SlsPrcgConditionRecord]] entity.
 */
var SlsPrcgConditionRecordRequestBuilder = /** @class */ (function (_super) {
    __extends(SlsPrcgConditionRecordRequestBuilder, _super);
    function SlsPrcgConditionRecordRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `SlsPrcgConditionRecord` entity based on its keys.
     * @param conditionRecord Key property. See [[SlsPrcgConditionRecord.conditionRecord]].
     * @returns A request builder for creating requests to retrieve one `SlsPrcgConditionRecord` entity based on its keys.
     */
    SlsPrcgConditionRecordRequestBuilder.prototype.getByKey = function (conditionRecord) {
        return new core_1.GetByKeyRequestBuilderV2(SlsPrcgConditionRecord_1.SlsPrcgConditionRecord, { ConditionRecord: conditionRecord });
    };
    /**
     * Returns a request builder for querying all `SlsPrcgConditionRecord` entities.
     * @returns A request builder for creating requests to retrieve all `SlsPrcgConditionRecord` entities.
     */
    SlsPrcgConditionRecordRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV2(SlsPrcgConditionRecord_1.SlsPrcgConditionRecord);
    };
    /**
     * Returns a request builder for creating a `SlsPrcgConditionRecord` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `SlsPrcgConditionRecord`.
     */
    SlsPrcgConditionRecordRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV2(SlsPrcgConditionRecord_1.SlsPrcgConditionRecord, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `SlsPrcgConditionRecord`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SlsPrcgConditionRecord`.
     */
    SlsPrcgConditionRecordRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV2(SlsPrcgConditionRecord_1.SlsPrcgConditionRecord, entity);
    };
    SlsPrcgConditionRecordRequestBuilder.prototype.delete = function (conditionRecordOrEntity) {
        return new core_1.DeleteRequestBuilderV2(SlsPrcgConditionRecord_1.SlsPrcgConditionRecord, conditionRecordOrEntity instanceof SlsPrcgConditionRecord_1.SlsPrcgConditionRecord ? conditionRecordOrEntity : { ConditionRecord: conditionRecordOrEntity });
    };
    return SlsPrcgConditionRecordRequestBuilder;
}(core_1.RequestBuilder));
exports.SlsPrcgConditionRecordRequestBuilder = SlsPrcgConditionRecordRequestBuilder;
//# sourceMappingURL=SlsPrcgConditionRecordRequestBuilder.js.map