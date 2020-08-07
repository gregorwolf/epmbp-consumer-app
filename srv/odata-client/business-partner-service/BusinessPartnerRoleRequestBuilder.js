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
exports.BusinessPartnerRoleRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var BusinessPartnerRole_1 = require("./BusinessPartnerRole");
/**
 * Request builder class for operations supported on the [[BusinessPartnerRole]] entity.
 */
var BusinessPartnerRoleRequestBuilder = /** @class */ (function (_super) {
    __extends(BusinessPartnerRoleRequestBuilder, _super);
    function BusinessPartnerRoleRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `BusinessPartnerRole` entity based on its keys.
     * @param businessPartner Key property. See [[BusinessPartnerRole.businessPartner]].
     * @param businessPartnerRole Key property. See [[BusinessPartnerRole.businessPartnerRole]].
     * @returns A request builder for creating requests to retrieve one `BusinessPartnerRole` entity based on its keys.
     */
    BusinessPartnerRoleRequestBuilder.prototype.getByKey = function (businessPartner, businessPartnerRole) {
        return new core_1.GetByKeyRequestBuilder(BusinessPartnerRole_1.BusinessPartnerRole, {
            BusinessPartner: businessPartner,
            BusinessPartnerRole: businessPartnerRole
        });
    };
    /**
     * Returns a request builder for querying all `BusinessPartnerRole` entities.
     * @returns A request builder for creating requests to retrieve all `BusinessPartnerRole` entities.
     */
    BusinessPartnerRoleRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(BusinessPartnerRole_1.BusinessPartnerRole);
    };
    /**
     * Returns a request builder for creating a `BusinessPartnerRole` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BusinessPartnerRole`.
     */
    BusinessPartnerRoleRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(BusinessPartnerRole_1.BusinessPartnerRole, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `BusinessPartnerRole`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BusinessPartnerRole`.
     */
    BusinessPartnerRoleRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(BusinessPartnerRole_1.BusinessPartnerRole, entity);
    };
    return BusinessPartnerRoleRequestBuilder;
}(core_1.RequestBuilder));
exports.BusinessPartnerRoleRequestBuilder = BusinessPartnerRoleRequestBuilder;
//# sourceMappingURL=BusinessPartnerRoleRequestBuilder.js.map