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
exports.SupplierPartnerFuncRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var SupplierPartnerFunc_1 = require("./SupplierPartnerFunc");
/**
 * Request builder class for operations supported on the [[SupplierPartnerFunc]] entity.
 */
var SupplierPartnerFuncRequestBuilder = /** @class */ (function (_super) {
    __extends(SupplierPartnerFuncRequestBuilder, _super);
    function SupplierPartnerFuncRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `SupplierPartnerFunc` entity based on its keys.
     * @param supplier Key property. See [[SupplierPartnerFunc.supplier]].
     * @param purchasingOrganization Key property. See [[SupplierPartnerFunc.purchasingOrganization]].
     * @param supplierSubrange Key property. See [[SupplierPartnerFunc.supplierSubrange]].
     * @param plant Key property. See [[SupplierPartnerFunc.plant]].
     * @param partnerFunction Key property. See [[SupplierPartnerFunc.partnerFunction]].
     * @param partnerCounter Key property. See [[SupplierPartnerFunc.partnerCounter]].
     * @returns A request builder for creating requests to retrieve one `SupplierPartnerFunc` entity based on its keys.
     */
    SupplierPartnerFuncRequestBuilder.prototype.getByKey = function (supplier, purchasingOrganization, supplierSubrange, plant, partnerFunction, partnerCounter) {
        return new core_1.GetByKeyRequestBuilder(SupplierPartnerFunc_1.SupplierPartnerFunc, {
            Supplier: supplier,
            PurchasingOrganization: purchasingOrganization,
            SupplierSubrange: supplierSubrange,
            Plant: plant,
            PartnerFunction: partnerFunction,
            PartnerCounter: partnerCounter
        });
    };
    /**
     * Returns a request builder for querying all `SupplierPartnerFunc` entities.
     * @returns A request builder for creating requests to retrieve all `SupplierPartnerFunc` entities.
     */
    SupplierPartnerFuncRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(SupplierPartnerFunc_1.SupplierPartnerFunc);
    };
    /**
     * Returns a request builder for creating a `SupplierPartnerFunc` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `SupplierPartnerFunc`.
     */
    SupplierPartnerFuncRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(SupplierPartnerFunc_1.SupplierPartnerFunc, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `SupplierPartnerFunc`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SupplierPartnerFunc`.
     */
    SupplierPartnerFuncRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(SupplierPartnerFunc_1.SupplierPartnerFunc, entity);
    };
    SupplierPartnerFuncRequestBuilder.prototype.delete = function (supplierOrEntity, purchasingOrganization, supplierSubrange, plant, partnerFunction, partnerCounter) {
        return new core_1.DeleteRequestBuilder(SupplierPartnerFunc_1.SupplierPartnerFunc, supplierOrEntity instanceof SupplierPartnerFunc_1.SupplierPartnerFunc ? supplierOrEntity : {
            Supplier: supplierOrEntity,
            PurchasingOrganization: purchasingOrganization,
            SupplierSubrange: supplierSubrange,
            Plant: plant,
            PartnerFunction: partnerFunction,
            PartnerCounter: partnerCounter
        });
    };
    return SupplierPartnerFuncRequestBuilder;
}(core_1.RequestBuilder));
exports.SupplierPartnerFuncRequestBuilder = SupplierPartnerFuncRequestBuilder;
//# sourceMappingURL=SupplierPartnerFuncRequestBuilder.js.map