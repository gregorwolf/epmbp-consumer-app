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
exports.CustSalesPartnerFuncRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var CustSalesPartnerFunc_1 = require("./CustSalesPartnerFunc");
/**
 * Request builder class for operations supported on the [[CustSalesPartnerFunc]] entity.
 */
var CustSalesPartnerFuncRequestBuilder = /** @class */ (function (_super) {
    __extends(CustSalesPartnerFuncRequestBuilder, _super);
    function CustSalesPartnerFuncRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `CustSalesPartnerFunc` entity based on its keys.
     * @param customer Key property. See [[CustSalesPartnerFunc.customer]].
     * @param salesOrganization Key property. See [[CustSalesPartnerFunc.salesOrganization]].
     * @param distributionChannel Key property. See [[CustSalesPartnerFunc.distributionChannel]].
     * @param division Key property. See [[CustSalesPartnerFunc.division]].
     * @param partnerCounter Key property. See [[CustSalesPartnerFunc.partnerCounter]].
     * @param partnerFunction Key property. See [[CustSalesPartnerFunc.partnerFunction]].
     * @returns A request builder for creating requests to retrieve one `CustSalesPartnerFunc` entity based on its keys.
     */
    CustSalesPartnerFuncRequestBuilder.prototype.getByKey = function (customer, salesOrganization, distributionChannel, division, partnerCounter, partnerFunction) {
        return new core_1.GetByKeyRequestBuilder(CustSalesPartnerFunc_1.CustSalesPartnerFunc, {
            Customer: customer,
            SalesOrganization: salesOrganization,
            DistributionChannel: distributionChannel,
            Division: division,
            PartnerCounter: partnerCounter,
            PartnerFunction: partnerFunction
        });
    };
    /**
     * Returns a request builder for querying all `CustSalesPartnerFunc` entities.
     * @returns A request builder for creating requests to retrieve all `CustSalesPartnerFunc` entities.
     */
    CustSalesPartnerFuncRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(CustSalesPartnerFunc_1.CustSalesPartnerFunc);
    };
    /**
     * Returns a request builder for creating a `CustSalesPartnerFunc` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `CustSalesPartnerFunc`.
     */
    CustSalesPartnerFuncRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(CustSalesPartnerFunc_1.CustSalesPartnerFunc, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `CustSalesPartnerFunc`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `CustSalesPartnerFunc`.
     */
    CustSalesPartnerFuncRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(CustSalesPartnerFunc_1.CustSalesPartnerFunc, entity);
    };
    CustSalesPartnerFuncRequestBuilder.prototype.delete = function (customerOrEntity, salesOrganization, distributionChannel, division, partnerCounter, partnerFunction) {
        return new core_1.DeleteRequestBuilder(CustSalesPartnerFunc_1.CustSalesPartnerFunc, customerOrEntity instanceof CustSalesPartnerFunc_1.CustSalesPartnerFunc ? customerOrEntity : {
            Customer: customerOrEntity,
            SalesOrganization: salesOrganization,
            DistributionChannel: distributionChannel,
            Division: division,
            PartnerCounter: partnerCounter,
            PartnerFunction: partnerFunction
        });
    };
    return CustSalesPartnerFuncRequestBuilder;
}(core_1.RequestBuilder));
exports.CustSalesPartnerFuncRequestBuilder = CustSalesPartnerFuncRequestBuilder;
//# sourceMappingURL=CustSalesPartnerFuncRequestBuilder.js.map