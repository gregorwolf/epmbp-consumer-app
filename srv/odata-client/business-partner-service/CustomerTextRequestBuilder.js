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
exports.CustomerTextRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var CustomerText_1 = require("./CustomerText");
/**
 * Request builder class for operations supported on the [[CustomerText]] entity.
 */
var CustomerTextRequestBuilder = /** @class */ (function (_super) {
    __extends(CustomerTextRequestBuilder, _super);
    function CustomerTextRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `CustomerText` entity based on its keys.
     * @param customer Key property. See [[CustomerText.customer]].
     * @param language Key property. See [[CustomerText.language]].
     * @param longTextId Key property. See [[CustomerText.longTextId]].
     * @returns A request builder for creating requests to retrieve one `CustomerText` entity based on its keys.
     */
    CustomerTextRequestBuilder.prototype.getByKey = function (customer, language, longTextId) {
        return new core_1.GetByKeyRequestBuilder(CustomerText_1.CustomerText, {
            Customer: customer,
            Language: language,
            LongTextID: longTextId
        });
    };
    /**
     * Returns a request builder for querying all `CustomerText` entities.
     * @returns A request builder for creating requests to retrieve all `CustomerText` entities.
     */
    CustomerTextRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(CustomerText_1.CustomerText);
    };
    /**
     * Returns a request builder for creating a `CustomerText` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `CustomerText`.
     */
    CustomerTextRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(CustomerText_1.CustomerText, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `CustomerText`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `CustomerText`.
     */
    CustomerTextRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(CustomerText_1.CustomerText, entity);
    };
    CustomerTextRequestBuilder.prototype.delete = function (customerOrEntity, language, longTextId) {
        return new core_1.DeleteRequestBuilder(CustomerText_1.CustomerText, customerOrEntity instanceof CustomerText_1.CustomerText ? customerOrEntity : {
            Customer: customerOrEntity,
            Language: language,
            LongTextID: longTextId
        });
    };
    return CustomerTextRequestBuilder;
}(core_1.RequestBuilder));
exports.CustomerTextRequestBuilder = CustomerTextRequestBuilder;
//# sourceMappingURL=CustomerTextRequestBuilder.js.map