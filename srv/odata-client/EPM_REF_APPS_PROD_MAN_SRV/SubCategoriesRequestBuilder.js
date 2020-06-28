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
exports.SubCategoriesRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var SubCategories_1 = require("./SubCategories");
/**
 * Request builder class for operations supported on the [[SubCategories]] entity.
 */
var SubCategoriesRequestBuilder = /** @class */ (function (_super) {
    __extends(SubCategoriesRequestBuilder, _super);
    function SubCategoriesRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `SubCategories` entity based on its keys.
     * @param id Key property. See [[SubCategories.id]].
     * @returns A request builder for creating requests to retrieve one `SubCategories` entity based on its keys.
     */
    SubCategoriesRequestBuilder.prototype.getByKey = function (id) {
        return new core_1.GetByKeyRequestBuilder(SubCategories_1.SubCategories, { Id: id });
    };
    /**
     * Returns a request builder for querying all `SubCategories` entities.
     * @returns A request builder for creating requests to retrieve all `SubCategories` entities.
     */
    SubCategoriesRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(SubCategories_1.SubCategories);
    };
    return SubCategoriesRequestBuilder;
}(core_1.RequestBuilder));
exports.SubCategoriesRequestBuilder = SubCategoriesRequestBuilder;
//# sourceMappingURL=SubCategoriesRequestBuilder.js.map