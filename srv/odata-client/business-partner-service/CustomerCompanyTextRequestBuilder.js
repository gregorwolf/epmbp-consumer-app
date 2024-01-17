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
exports.CustomerCompanyTextRequestBuilder = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var CustomerCompanyText_1 = require("./CustomerCompanyText");
/**
 * Request builder class for operations supported on the [[CustomerCompanyText]] entity.
 */
var CustomerCompanyTextRequestBuilder = /** @class */ (function (_super) {
    __extends(CustomerCompanyTextRequestBuilder, _super);
    function CustomerCompanyTextRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `CustomerCompanyText` entity based on its keys.
     * @param customer Key property. See [[CustomerCompanyText.customer]].
     * @param companyCode Key property. See [[CustomerCompanyText.companyCode]].
     * @param language Key property. See [[CustomerCompanyText.language]].
     * @param longTextId Key property. See [[CustomerCompanyText.longTextId]].
     * @returns A request builder for creating requests to retrieve one `CustomerCompanyText` entity based on its keys.
     */
    CustomerCompanyTextRequestBuilder.prototype.getByKey = function (customer, companyCode, language, longTextId) {
        return new core_1.GetByKeyRequestBuilderV2(CustomerCompanyText_1.CustomerCompanyText, {
            Customer: customer,
            CompanyCode: companyCode,
            Language: language,
            LongTextID: longTextId
        });
    };
    /**
     * Returns a request builder for querying all `CustomerCompanyText` entities.
     * @returns A request builder for creating requests to retrieve all `CustomerCompanyText` entities.
     */
    CustomerCompanyTextRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV2(CustomerCompanyText_1.CustomerCompanyText);
    };
    /**
     * Returns a request builder for creating a `CustomerCompanyText` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `CustomerCompanyText`.
     */
    CustomerCompanyTextRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV2(CustomerCompanyText_1.CustomerCompanyText, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `CustomerCompanyText`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `CustomerCompanyText`.
     */
    CustomerCompanyTextRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV2(CustomerCompanyText_1.CustomerCompanyText, entity);
    };
    CustomerCompanyTextRequestBuilder.prototype.delete = function (customerOrEntity, companyCode, language, longTextId) {
        return new core_1.DeleteRequestBuilderV2(CustomerCompanyText_1.CustomerCompanyText, customerOrEntity instanceof CustomerCompanyText_1.CustomerCompanyText ? customerOrEntity : {
            Customer: customerOrEntity,
            CompanyCode: companyCode,
            Language: language,
            LongTextID: longTextId
        });
    };
    return CustomerCompanyTextRequestBuilder;
}(core_1.RequestBuilder));
exports.CustomerCompanyTextRequestBuilder = CustomerCompanyTextRequestBuilder;
//# sourceMappingURL=CustomerCompanyTextRequestBuilder.js.map