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
exports.BusinessPartnerBankRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var BusinessPartnerBank_1 = require("./BusinessPartnerBank");
/**
 * Request builder class for operations supported on the [[BusinessPartnerBank]] entity.
 */
var BusinessPartnerBankRequestBuilder = /** @class */ (function (_super) {
    __extends(BusinessPartnerBankRequestBuilder, _super);
    function BusinessPartnerBankRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `BusinessPartnerBank` entity based on its keys.
     * @param businessPartner Key property. See [[BusinessPartnerBank.businessPartner]].
     * @param bankIdentification Key property. See [[BusinessPartnerBank.bankIdentification]].
     * @returns A request builder for creating requests to retrieve one `BusinessPartnerBank` entity based on its keys.
     */
    BusinessPartnerBankRequestBuilder.prototype.getByKey = function (businessPartner, bankIdentification) {
        return new core_1.GetByKeyRequestBuilder(BusinessPartnerBank_1.BusinessPartnerBank, {
            BusinessPartner: businessPartner,
            BankIdentification: bankIdentification
        });
    };
    /**
     * Returns a request builder for querying all `BusinessPartnerBank` entities.
     * @returns A request builder for creating requests to retrieve all `BusinessPartnerBank` entities.
     */
    BusinessPartnerBankRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(BusinessPartnerBank_1.BusinessPartnerBank);
    };
    /**
     * Returns a request builder for creating a `BusinessPartnerBank` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BusinessPartnerBank`.
     */
    BusinessPartnerBankRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(BusinessPartnerBank_1.BusinessPartnerBank, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `BusinessPartnerBank`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BusinessPartnerBank`.
     */
    BusinessPartnerBankRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(BusinessPartnerBank_1.BusinessPartnerBank, entity);
    };
    BusinessPartnerBankRequestBuilder.prototype.delete = function (businessPartnerOrEntity, bankIdentification) {
        return new core_1.DeleteRequestBuilder(BusinessPartnerBank_1.BusinessPartnerBank, businessPartnerOrEntity instanceof BusinessPartnerBank_1.BusinessPartnerBank ? businessPartnerOrEntity : {
            BusinessPartner: businessPartnerOrEntity,
            BankIdentification: bankIdentification
        });
    };
    return BusinessPartnerBankRequestBuilder;
}(core_1.RequestBuilder));
exports.BusinessPartnerBankRequestBuilder = BusinessPartnerBankRequestBuilder;
//# sourceMappingURL=BusinessPartnerBankRequestBuilder.js.map