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
exports.SlsPrcgConditionRecordTextRequestBuilder = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var SlsPrcgConditionRecordText_1 = require("./SlsPrcgConditionRecordText");
/**
 * Request builder class for operations supported on the [[SlsPrcgConditionRecordText]] entity.
 */
var SlsPrcgConditionRecordTextRequestBuilder = /** @class */ (function (_super) {
    __extends(SlsPrcgConditionRecordTextRequestBuilder, _super);
    function SlsPrcgConditionRecordTextRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `SlsPrcgConditionRecordText` entity based on its keys.
     * @param conditionRecord Key property. See [[SlsPrcgConditionRecordText.conditionRecord]].
     * @param conditionSequentialNumber Key property. See [[SlsPrcgConditionRecordText.conditionSequentialNumber]].
     * @param language Key property. See [[SlsPrcgConditionRecordText.language]].
     * @returns A request builder for creating requests to retrieve one `SlsPrcgConditionRecordText` entity based on its keys.
     */
    SlsPrcgConditionRecordTextRequestBuilder.prototype.getByKey = function (conditionRecord, conditionSequentialNumber, language) {
        return new core_1.GetByKeyRequestBuilderV2(SlsPrcgConditionRecordText_1.SlsPrcgConditionRecordText, {
            ConditionRecord: conditionRecord,
            ConditionSequentialNumber: conditionSequentialNumber,
            Language: language
        });
    };
    /**
     * Returns a request builder for querying all `SlsPrcgConditionRecordText` entities.
     * @returns A request builder for creating requests to retrieve all `SlsPrcgConditionRecordText` entities.
     */
    SlsPrcgConditionRecordTextRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV2(SlsPrcgConditionRecordText_1.SlsPrcgConditionRecordText);
    };
    /**
     * Returns a request builder for creating a `SlsPrcgConditionRecordText` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `SlsPrcgConditionRecordText`.
     */
    SlsPrcgConditionRecordTextRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV2(SlsPrcgConditionRecordText_1.SlsPrcgConditionRecordText, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `SlsPrcgConditionRecordText`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SlsPrcgConditionRecordText`.
     */
    SlsPrcgConditionRecordTextRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV2(SlsPrcgConditionRecordText_1.SlsPrcgConditionRecordText, entity);
    };
    SlsPrcgConditionRecordTextRequestBuilder.prototype.delete = function (conditionRecordOrEntity, conditionSequentialNumber, language) {
        return new core_1.DeleteRequestBuilderV2(SlsPrcgConditionRecordText_1.SlsPrcgConditionRecordText, conditionRecordOrEntity instanceof SlsPrcgConditionRecordText_1.SlsPrcgConditionRecordText ? conditionRecordOrEntity : {
            ConditionRecord: conditionRecordOrEntity,
            ConditionSequentialNumber: conditionSequentialNumber,
            Language: language
        });
    };
    return SlsPrcgConditionRecordTextRequestBuilder;
}(core_1.RequestBuilder));
exports.SlsPrcgConditionRecordTextRequestBuilder = SlsPrcgConditionRecordTextRequestBuilder;
//# sourceMappingURL=SlsPrcgConditionRecordTextRequestBuilder.js.map