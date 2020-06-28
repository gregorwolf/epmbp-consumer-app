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
exports.SuppliersRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var Suppliers_1 = require("./Suppliers");
/**
 * Request builder class for operations supported on the [[Suppliers]] entity.
 */
var SuppliersRequestBuilder = /** @class */ (function (_super) {
    __extends(SuppliersRequestBuilder, _super);
    function SuppliersRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Suppliers` entity based on its keys.
     * @param id Key property. See [[Suppliers.id]].
     * @returns A request builder for creating requests to retrieve one `Suppliers` entity based on its keys.
     */
    SuppliersRequestBuilder.prototype.getByKey = function (id) {
        return new core_1.GetByKeyRequestBuilder(Suppliers_1.Suppliers, { Id: id });
    };
    /**
     * Returns a request builder for querying all `Suppliers` entities.
     * @returns A request builder for creating requests to retrieve all `Suppliers` entities.
     */
    SuppliersRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(Suppliers_1.Suppliers);
    };
    return SuppliersRequestBuilder;
}(core_1.RequestBuilder));
exports.SuppliersRequestBuilder = SuppliersRequestBuilder;
//# sourceMappingURL=SuppliersRequestBuilder.js.map