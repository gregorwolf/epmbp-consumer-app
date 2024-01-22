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
exports.SlsPrcgCndnSupplementTextRequestBuilder = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var SlsPrcgCndnSupplementText_1 = require("./SlsPrcgCndnSupplementText");
/**
 * Request builder class for operations supported on the [[SlsPrcgCndnSupplementText]] entity.
 */
var SlsPrcgCndnSupplementTextRequestBuilder = /** @class */ (function (_super) {
    __extends(SlsPrcgCndnSupplementTextRequestBuilder, _super);
    function SlsPrcgCndnSupplementTextRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `SlsPrcgCndnSupplementText` entity based on its keys.
     * @param conditionRecord Key property. See [[SlsPrcgCndnSupplementText.conditionRecord]].
     * @param conditionSequentialNumber Key property. See [[SlsPrcgCndnSupplementText.conditionSequentialNumber]].
     * @param language Key property. See [[SlsPrcgCndnSupplementText.language]].
     * @returns A request builder for creating requests to retrieve one `SlsPrcgCndnSupplementText` entity based on its keys.
     */
    SlsPrcgCndnSupplementTextRequestBuilder.prototype.getByKey = function (conditionRecord, conditionSequentialNumber, language) {
        return new core_1.GetByKeyRequestBuilderV2(SlsPrcgCndnSupplementText_1.SlsPrcgCndnSupplementText, {
            ConditionRecord: conditionRecord,
            ConditionSequentialNumber: conditionSequentialNumber,
            Language: language
        });
    };
    /**
     * Returns a request builder for querying all `SlsPrcgCndnSupplementText` entities.
     * @returns A request builder for creating requests to retrieve all `SlsPrcgCndnSupplementText` entities.
     */
    SlsPrcgCndnSupplementTextRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV2(SlsPrcgCndnSupplementText_1.SlsPrcgCndnSupplementText);
    };
    /**
     * Returns a request builder for creating a `SlsPrcgCndnSupplementText` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `SlsPrcgCndnSupplementText`.
     */
    SlsPrcgCndnSupplementTextRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV2(SlsPrcgCndnSupplementText_1.SlsPrcgCndnSupplementText, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `SlsPrcgCndnSupplementText`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SlsPrcgCndnSupplementText`.
     */
    SlsPrcgCndnSupplementTextRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV2(SlsPrcgCndnSupplementText_1.SlsPrcgCndnSupplementText, entity);
    };
    SlsPrcgCndnSupplementTextRequestBuilder.prototype.delete = function (conditionRecordOrEntity, conditionSequentialNumber, language) {
        return new core_1.DeleteRequestBuilderV2(SlsPrcgCndnSupplementText_1.SlsPrcgCndnSupplementText, conditionRecordOrEntity instanceof SlsPrcgCndnSupplementText_1.SlsPrcgCndnSupplementText ? conditionRecordOrEntity : {
            ConditionRecord: conditionRecordOrEntity,
            ConditionSequentialNumber: conditionSequentialNumber,
            Language: language
        });
    };
    return SlsPrcgCndnSupplementTextRequestBuilder;
}(core_1.RequestBuilder));
exports.SlsPrcgCndnSupplementTextRequestBuilder = SlsPrcgCndnSupplementTextRequestBuilder;
//# sourceMappingURL=SlsPrcgCndnSupplementTextRequestBuilder.js.map