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
exports.DimensionUnitsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var DimensionUnits_1 = require("./DimensionUnits");
/**
 * Request builder class for operations supported on the [[DimensionUnits]] entity.
 */
var DimensionUnitsRequestBuilder = /** @class */ (function (_super) {
    __extends(DimensionUnitsRequestBuilder, _super);
    function DimensionUnitsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `DimensionUnits` entity based on its keys.
     * @param unit Key property. See [[DimensionUnits.unit]].
     * @returns A request builder for creating requests to retrieve one `DimensionUnits` entity based on its keys.
     */
    DimensionUnitsRequestBuilder.prototype.getByKey = function (unit) {
        return new core_1.GetByKeyRequestBuilder(DimensionUnits_1.DimensionUnits, { Unit: unit });
    };
    /**
     * Returns a request builder for querying all `DimensionUnits` entities.
     * @returns A request builder for creating requests to retrieve all `DimensionUnits` entities.
     */
    DimensionUnitsRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(DimensionUnits_1.DimensionUnits);
    };
    return DimensionUnitsRequestBuilder;
}(core_1.RequestBuilder));
exports.DimensionUnitsRequestBuilder = DimensionUnitsRequestBuilder;
//# sourceMappingURL=DimensionUnitsRequestBuilder.js.map