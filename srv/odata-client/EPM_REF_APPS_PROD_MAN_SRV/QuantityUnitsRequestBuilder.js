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
exports.QuantityUnitsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var QuantityUnits_1 = require("./QuantityUnits");
/**
 * Request builder class for operations supported on the [[QuantityUnits]] entity.
 */
var QuantityUnitsRequestBuilder = /** @class */ (function (_super) {
    __extends(QuantityUnitsRequestBuilder, _super);
    function QuantityUnitsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `QuantityUnits` entity based on its keys.
     * @param unit Key property. See [[QuantityUnits.unit]].
     * @returns A request builder for creating requests to retrieve one `QuantityUnits` entity based on its keys.
     */
    QuantityUnitsRequestBuilder.prototype.getByKey = function (unit) {
        return new core_1.GetByKeyRequestBuilder(QuantityUnits_1.QuantityUnits, { Unit: unit });
    };
    /**
     * Returns a request builder for querying all `QuantityUnits` entities.
     * @returns A request builder for creating requests to retrieve all `QuantityUnits` entities.
     */
    QuantityUnitsRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(QuantityUnits_1.QuantityUnits);
    };
    return QuantityUnitsRequestBuilder;
}(core_1.RequestBuilder));
exports.QuantityUnitsRequestBuilder = QuantityUnitsRequestBuilder;
//# sourceMappingURL=QuantityUnitsRequestBuilder.js.map