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
exports.CurrenciesRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var Currencies_1 = require("./Currencies");
/**
 * Request builder class for operations supported on the [[Currencies]] entity.
 */
var CurrenciesRequestBuilder = /** @class */ (function (_super) {
    __extends(CurrenciesRequestBuilder, _super);
    function CurrenciesRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Currencies` entity based on its keys.
     * @param code Key property. See [[Currencies.code]].
     * @returns A request builder for creating requests to retrieve one `Currencies` entity based on its keys.
     */
    CurrenciesRequestBuilder.prototype.getByKey = function (code) {
        return new core_1.GetByKeyRequestBuilder(Currencies_1.Currencies, { Code: code });
    };
    /**
     * Returns a request builder for querying all `Currencies` entities.
     * @returns A request builder for creating requests to retrieve all `Currencies` entities.
     */
    CurrenciesRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(Currencies_1.Currencies);
    };
    return CurrenciesRequestBuilder;
}(core_1.RequestBuilder));
exports.CurrenciesRequestBuilder = CurrenciesRequestBuilder;
//# sourceMappingURL=CurrenciesRequestBuilder.js.map