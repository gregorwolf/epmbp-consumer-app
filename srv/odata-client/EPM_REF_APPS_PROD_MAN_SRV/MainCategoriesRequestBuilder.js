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
exports.MainCategoriesRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var MainCategories_1 = require("./MainCategories");
/**
 * Request builder class for operations supported on the [[MainCategories]] entity.
 */
var MainCategoriesRequestBuilder = /** @class */ (function (_super) {
    __extends(MainCategoriesRequestBuilder, _super);
    function MainCategoriesRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `MainCategories` entity based on its keys.
     * @param id Key property. See [[MainCategories.id]].
     * @returns A request builder for creating requests to retrieve one `MainCategories` entity based on its keys.
     */
    MainCategoriesRequestBuilder.prototype.getByKey = function (id) {
        return new core_1.GetByKeyRequestBuilder(MainCategories_1.MainCategories, { Id: id });
    };
    /**
     * Returns a request builder for querying all `MainCategories` entities.
     * @returns A request builder for creating requests to retrieve all `MainCategories` entities.
     */
    MainCategoriesRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(MainCategories_1.MainCategories);
    };
    return MainCategoriesRequestBuilder;
}(core_1.RequestBuilder));
exports.MainCategoriesRequestBuilder = MainCategoriesRequestBuilder;
//# sourceMappingURL=MainCategoriesRequestBuilder.js.map