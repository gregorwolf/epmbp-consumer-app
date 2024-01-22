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
exports.SlsPrcgCndnRecdSuplmntRequestBuilder = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var SlsPrcgCndnRecdSuplmnt_1 = require("./SlsPrcgCndnRecdSuplmnt");
/**
 * Request builder class for operations supported on the [[SlsPrcgCndnRecdSuplmnt]] entity.
 */
var SlsPrcgCndnRecdSuplmntRequestBuilder = /** @class */ (function (_super) {
    __extends(SlsPrcgCndnRecdSuplmntRequestBuilder, _super);
    function SlsPrcgCndnRecdSuplmntRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `SlsPrcgCndnRecdSuplmnt` entity based on its keys.
     * @param conditionRecord Key property. See [[SlsPrcgCndnRecdSuplmnt.conditionRecord]].
     * @param conditionSequentialNumber Key property. See [[SlsPrcgCndnRecdSuplmnt.conditionSequentialNumber]].
     * @returns A request builder for creating requests to retrieve one `SlsPrcgCndnRecdSuplmnt` entity based on its keys.
     */
    SlsPrcgCndnRecdSuplmntRequestBuilder.prototype.getByKey = function (conditionRecord, conditionSequentialNumber) {
        return new core_1.GetByKeyRequestBuilderV2(SlsPrcgCndnRecdSuplmnt_1.SlsPrcgCndnRecdSuplmnt, {
            ConditionRecord: conditionRecord,
            ConditionSequentialNumber: conditionSequentialNumber
        });
    };
    /**
     * Returns a request builder for querying all `SlsPrcgCndnRecdSuplmnt` entities.
     * @returns A request builder for creating requests to retrieve all `SlsPrcgCndnRecdSuplmnt` entities.
     */
    SlsPrcgCndnRecdSuplmntRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV2(SlsPrcgCndnRecdSuplmnt_1.SlsPrcgCndnRecdSuplmnt);
    };
    /**
     * Returns a request builder for creating a `SlsPrcgCndnRecdSuplmnt` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `SlsPrcgCndnRecdSuplmnt`.
     */
    SlsPrcgCndnRecdSuplmntRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV2(SlsPrcgCndnRecdSuplmnt_1.SlsPrcgCndnRecdSuplmnt, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `SlsPrcgCndnRecdSuplmnt`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SlsPrcgCndnRecdSuplmnt`.
     */
    SlsPrcgCndnRecdSuplmntRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV2(SlsPrcgCndnRecdSuplmnt_1.SlsPrcgCndnRecdSuplmnt, entity);
    };
    SlsPrcgCndnRecdSuplmntRequestBuilder.prototype.delete = function (conditionRecordOrEntity, conditionSequentialNumber) {
        return new core_1.DeleteRequestBuilderV2(SlsPrcgCndnRecdSuplmnt_1.SlsPrcgCndnRecdSuplmnt, conditionRecordOrEntity instanceof SlsPrcgCndnRecdSuplmnt_1.SlsPrcgCndnRecdSuplmnt ? conditionRecordOrEntity : {
            ConditionRecord: conditionRecordOrEntity,
            ConditionSequentialNumber: conditionSequentialNumber
        });
    };
    return SlsPrcgCndnRecdSuplmntRequestBuilder;
}(core_1.RequestBuilder));
exports.SlsPrcgCndnRecdSuplmntRequestBuilder = SlsPrcgCndnRecdSuplmntRequestBuilder;
//# sourceMappingURL=SlsPrcgCndnRecdSuplmntRequestBuilder.js.map