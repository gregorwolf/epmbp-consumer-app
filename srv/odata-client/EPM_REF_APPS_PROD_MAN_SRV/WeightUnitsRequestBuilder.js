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
exports.WeightUnitsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var WeightUnits_1 = require("./WeightUnits");
/**
 * Request builder class for operations supported on the [[WeightUnits]] entity.
 */
var WeightUnitsRequestBuilder = /** @class */ (function (_super) {
    __extends(WeightUnitsRequestBuilder, _super);
    function WeightUnitsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `WeightUnits` entity based on its keys.
     * @param unit Key property. See [[WeightUnits.unit]].
     * @returns A request builder for creating requests to retrieve one `WeightUnits` entity based on its keys.
     */
    WeightUnitsRequestBuilder.prototype.getByKey = function (unit) {
        return new core_1.GetByKeyRequestBuilder(WeightUnits_1.WeightUnits, { Unit: unit });
    };
    /**
     * Returns a request builder for querying all `WeightUnits` entities.
     * @returns A request builder for creating requests to retrieve all `WeightUnits` entities.
     */
    WeightUnitsRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(WeightUnits_1.WeightUnits);
    };
    return WeightUnitsRequestBuilder;
}(core_1.RequestBuilder));
exports.WeightUnitsRequestBuilder = WeightUnitsRequestBuilder;
//# sourceMappingURL=WeightUnitsRequestBuilder.js.map