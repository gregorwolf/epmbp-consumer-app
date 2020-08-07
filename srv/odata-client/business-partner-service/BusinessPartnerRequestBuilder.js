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
exports.BusinessPartnerRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var BusinessPartner_1 = require("./BusinessPartner");
/**
 * Request builder class for operations supported on the [[BusinessPartner]] entity.
 */
var BusinessPartnerRequestBuilder = /** @class */ (function (_super) {
    __extends(BusinessPartnerRequestBuilder, _super);
    function BusinessPartnerRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `BusinessPartner` entity based on its keys.
     * @param businessPartner Key property. See [[BusinessPartner.businessPartner]].
     * @returns A request builder for creating requests to retrieve one `BusinessPartner` entity based on its keys.
     */
    BusinessPartnerRequestBuilder.prototype.getByKey = function (businessPartner) {
        return new core_1.GetByKeyRequestBuilder(BusinessPartner_1.BusinessPartner, { BusinessPartner: businessPartner });
    };
    /**
     * Returns a request builder for querying all `BusinessPartner` entities.
     * @returns A request builder for creating requests to retrieve all `BusinessPartner` entities.
     */
    BusinessPartnerRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(BusinessPartner_1.BusinessPartner);
    };
    /**
     * Returns a request builder for creating a `BusinessPartner` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BusinessPartner`.
     */
    BusinessPartnerRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(BusinessPartner_1.BusinessPartner, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `BusinessPartner`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BusinessPartner`.
     */
    BusinessPartnerRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(BusinessPartner_1.BusinessPartner, entity);
    };
    return BusinessPartnerRequestBuilder;
}(core_1.RequestBuilder));
exports.BusinessPartnerRequestBuilder = BusinessPartnerRequestBuilder;
//# sourceMappingURL=BusinessPartnerRequestBuilder.js.map