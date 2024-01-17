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
exports.BusinessPartnerPaymentCardRequestBuilder = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var BusinessPartnerPaymentCard_1 = require("./BusinessPartnerPaymentCard");
/**
 * Request builder class for operations supported on the [[BusinessPartnerPaymentCard]] entity.
 */
var BusinessPartnerPaymentCardRequestBuilder = /** @class */ (function (_super) {
    __extends(BusinessPartnerPaymentCardRequestBuilder, _super);
    function BusinessPartnerPaymentCardRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `BusinessPartnerPaymentCard` entity based on its keys.
     * @param businessPartner Key property. See [[BusinessPartnerPaymentCard.businessPartner]].
     * @param paymentCardId Key property. See [[BusinessPartnerPaymentCard.paymentCardId]].
     * @param paymentCardType Key property. See [[BusinessPartnerPaymentCard.paymentCardType]].
     * @param cardNumber Key property. See [[BusinessPartnerPaymentCard.cardNumber]].
     * @returns A request builder for creating requests to retrieve one `BusinessPartnerPaymentCard` entity based on its keys.
     */
    BusinessPartnerPaymentCardRequestBuilder.prototype.getByKey = function (businessPartner, paymentCardId, paymentCardType, cardNumber) {
        return new core_1.GetByKeyRequestBuilderV2(BusinessPartnerPaymentCard_1.BusinessPartnerPaymentCard, {
            BusinessPartner: businessPartner,
            PaymentCardID: paymentCardId,
            PaymentCardType: paymentCardType,
            CardNumber: cardNumber
        });
    };
    /**
     * Returns a request builder for querying all `BusinessPartnerPaymentCard` entities.
     * @returns A request builder for creating requests to retrieve all `BusinessPartnerPaymentCard` entities.
     */
    BusinessPartnerPaymentCardRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV2(BusinessPartnerPaymentCard_1.BusinessPartnerPaymentCard);
    };
    /**
     * Returns a request builder for creating a `BusinessPartnerPaymentCard` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BusinessPartnerPaymentCard`.
     */
    BusinessPartnerPaymentCardRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV2(BusinessPartnerPaymentCard_1.BusinessPartnerPaymentCard, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `BusinessPartnerPaymentCard`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BusinessPartnerPaymentCard`.
     */
    BusinessPartnerPaymentCardRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV2(BusinessPartnerPaymentCard_1.BusinessPartnerPaymentCard, entity);
    };
    BusinessPartnerPaymentCardRequestBuilder.prototype.delete = function (businessPartnerOrEntity, paymentCardId, paymentCardType, cardNumber) {
        return new core_1.DeleteRequestBuilderV2(BusinessPartnerPaymentCard_1.BusinessPartnerPaymentCard, businessPartnerOrEntity instanceof BusinessPartnerPaymentCard_1.BusinessPartnerPaymentCard ? businessPartnerOrEntity : {
            BusinessPartner: businessPartnerOrEntity,
            PaymentCardID: paymentCardId,
            PaymentCardType: paymentCardType,
            CardNumber: cardNumber
        });
    };
    return BusinessPartnerPaymentCardRequestBuilder;
}(core_1.RequestBuilder));
exports.BusinessPartnerPaymentCardRequestBuilder = BusinessPartnerPaymentCardRequestBuilder;
//# sourceMappingURL=BusinessPartnerPaymentCardRequestBuilder.js.map