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
exports.SlsPrcgCndnRecordScaleRequestBuilder = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var SlsPrcgCndnRecordScale_1 = require("./SlsPrcgCndnRecordScale");
/**
 * Request builder class for operations supported on the [[SlsPrcgCndnRecordScale]] entity.
 */
var SlsPrcgCndnRecordScaleRequestBuilder = /** @class */ (function (_super) {
    __extends(SlsPrcgCndnRecordScaleRequestBuilder, _super);
    function SlsPrcgCndnRecordScaleRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `SlsPrcgCndnRecordScale` entity based on its keys.
     * @param conditionRecord Key property. See [[SlsPrcgCndnRecordScale.conditionRecord]].
     * @param conditionSequentialNumber Key property. See [[SlsPrcgCndnRecordScale.conditionSequentialNumber]].
     * @param conditionScaleLine Key property. See [[SlsPrcgCndnRecordScale.conditionScaleLine]].
     * @returns A request builder for creating requests to retrieve one `SlsPrcgCndnRecordScale` entity based on its keys.
     */
    SlsPrcgCndnRecordScaleRequestBuilder.prototype.getByKey = function (conditionRecord, conditionSequentialNumber, conditionScaleLine) {
        return new core_1.GetByKeyRequestBuilderV2(SlsPrcgCndnRecordScale_1.SlsPrcgCndnRecordScale, {
            ConditionRecord: conditionRecord,
            ConditionSequentialNumber: conditionSequentialNumber,
            ConditionScaleLine: conditionScaleLine
        });
    };
    /**
     * Returns a request builder for querying all `SlsPrcgCndnRecordScale` entities.
     * @returns A request builder for creating requests to retrieve all `SlsPrcgCndnRecordScale` entities.
     */
    SlsPrcgCndnRecordScaleRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV2(SlsPrcgCndnRecordScale_1.SlsPrcgCndnRecordScale);
    };
    /**
     * Returns a request builder for creating a `SlsPrcgCndnRecordScale` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `SlsPrcgCndnRecordScale`.
     */
    SlsPrcgCndnRecordScaleRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV2(SlsPrcgCndnRecordScale_1.SlsPrcgCndnRecordScale, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `SlsPrcgCndnRecordScale`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SlsPrcgCndnRecordScale`.
     */
    SlsPrcgCndnRecordScaleRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV2(SlsPrcgCndnRecordScale_1.SlsPrcgCndnRecordScale, entity);
    };
    SlsPrcgCndnRecordScaleRequestBuilder.prototype.delete = function (conditionRecordOrEntity, conditionSequentialNumber, conditionScaleLine) {
        return new core_1.DeleteRequestBuilderV2(SlsPrcgCndnRecordScale_1.SlsPrcgCndnRecordScale, conditionRecordOrEntity instanceof SlsPrcgCndnRecordScale_1.SlsPrcgCndnRecordScale ? conditionRecordOrEntity : {
            ConditionRecord: conditionRecordOrEntity,
            ConditionSequentialNumber: conditionSequentialNumber,
            ConditionScaleLine: conditionScaleLine
        });
    };
    return SlsPrcgCndnRecordScaleRequestBuilder;
}(core_1.RequestBuilder));
exports.SlsPrcgCndnRecordScaleRequestBuilder = SlsPrcgCndnRecordScaleRequestBuilder;
//# sourceMappingURL=SlsPrcgCndnRecordScaleRequestBuilder.js.map