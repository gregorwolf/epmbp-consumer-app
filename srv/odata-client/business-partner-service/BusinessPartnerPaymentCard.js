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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessPartnerPaymentCard = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var BusinessPartnerPaymentCardRequestBuilder_1 = require("./BusinessPartnerPaymentCardRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "A_BusinessPartnerPaymentCard" of service "API_BUSINESS_PARTNER".
 */
var BusinessPartnerPaymentCard = /** @class */ (function (_super) {
    __extends(BusinessPartnerPaymentCard, _super);
    function BusinessPartnerPaymentCard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `BusinessPartnerPaymentCard`.
     * @returns A builder that constructs instances of entity type `BusinessPartnerPaymentCard`.
     */
    BusinessPartnerPaymentCard.builder = function () {
        return core_1.EntityV2.entityBuilder(BusinessPartnerPaymentCard);
    };
    /**
     * Returns a request builder to construct requests for operations on the `BusinessPartnerPaymentCard` entity type.
     * @returns A `BusinessPartnerPaymentCard` request builder.
     */
    BusinessPartnerPaymentCard.requestBuilder = function () {
        return new BusinessPartnerPaymentCardRequestBuilder_1.BusinessPartnerPaymentCardRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `BusinessPartnerPaymentCard`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `BusinessPartnerPaymentCard`.
     */
    BusinessPartnerPaymentCard.customField = function (fieldName) {
        return core_1.EntityV2.customFieldSelector(fieldName, BusinessPartnerPaymentCard);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    BusinessPartnerPaymentCard.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for BusinessPartnerPaymentCard.
     */
    BusinessPartnerPaymentCard._entityName = 'A_BusinessPartnerPaymentCard';
    /**
     * Default url path for the according service.
     */
    BusinessPartnerPaymentCard._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
    return BusinessPartnerPaymentCard;
}(core_1.EntityV2));
exports.BusinessPartnerPaymentCard = BusinessPartnerPaymentCard;
(function (BusinessPartnerPaymentCard) {
    var _fieldBuilder = new core_1.FieldBuilder(BusinessPartnerPaymentCard);
    /**
     * Static representation of the [[businessPartner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerPaymentCard.BUSINESS_PARTNER = _fieldBuilder.buildEdmTypeField('BusinessPartner', 'Edm.String', false);
    /**
     * Static representation of the [[paymentCardId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerPaymentCard.PAYMENT_CARD_ID = _fieldBuilder.buildEdmTypeField('PaymentCardID', 'Edm.String', false);
    /**
     * Static representation of the [[paymentCardType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerPaymentCard.PAYMENT_CARD_TYPE = _fieldBuilder.buildEdmTypeField('PaymentCardType', 'Edm.String', false);
    /**
     * Static representation of the [[cardNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerPaymentCard.CARD_NUMBER = _fieldBuilder.buildEdmTypeField('CardNumber', 'Edm.String', false);
    /**
     * Static representation of the [[isStandardCard]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerPaymentCard.IS_STANDARD_CARD = _fieldBuilder.buildEdmTypeField('IsStandardCard', 'Edm.Boolean', true);
    /**
     * Static representation of the [[cardDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerPaymentCard.CARD_DESCRIPTION = _fieldBuilder.buildEdmTypeField('CardDescription', 'Edm.String', true);
    /**
     * Static representation of the [[validityDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerPaymentCard.VALIDITY_DATE = _fieldBuilder.buildEdmTypeField('ValidityDate', 'Edm.DateTime', true);
    /**
     * Static representation of the [[validityEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerPaymentCard.VALIDITY_END_DATE = _fieldBuilder.buildEdmTypeField('ValidityEndDate', 'Edm.DateTime', true);
    /**
     * Static representation of the [[cardHolder]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerPaymentCard.CARD_HOLDER = _fieldBuilder.buildEdmTypeField('CardHolder', 'Edm.String', true);
    /**
     * Static representation of the [[cardIssuingBank]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerPaymentCard.CARD_ISSUING_BANK = _fieldBuilder.buildEdmTypeField('CardIssuingBank', 'Edm.String', true);
    /**
     * Static representation of the [[cardIssueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerPaymentCard.CARD_ISSUE_DATE = _fieldBuilder.buildEdmTypeField('CardIssueDate', 'Edm.DateTime', true);
    /**
     * Static representation of the [[paymentCardLock]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerPaymentCard.PAYMENT_CARD_LOCK = _fieldBuilder.buildEdmTypeField('PaymentCardLock', 'Edm.String', true);
    /**
     * Static representation of the [[maskedCardNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerPaymentCard.MASKED_CARD_NUMBER = _fieldBuilder.buildEdmTypeField('MaskedCardNumber', 'Edm.String', true);
    /**
     * All fields of the BusinessPartnerPaymentCard entity.
     */
    BusinessPartnerPaymentCard._allFields = [
        BusinessPartnerPaymentCard.BUSINESS_PARTNER,
        BusinessPartnerPaymentCard.PAYMENT_CARD_ID,
        BusinessPartnerPaymentCard.PAYMENT_CARD_TYPE,
        BusinessPartnerPaymentCard.CARD_NUMBER,
        BusinessPartnerPaymentCard.IS_STANDARD_CARD,
        BusinessPartnerPaymentCard.CARD_DESCRIPTION,
        BusinessPartnerPaymentCard.VALIDITY_DATE,
        BusinessPartnerPaymentCard.VALIDITY_END_DATE,
        BusinessPartnerPaymentCard.CARD_HOLDER,
        BusinessPartnerPaymentCard.CARD_ISSUING_BANK,
        BusinessPartnerPaymentCard.CARD_ISSUE_DATE,
        BusinessPartnerPaymentCard.PAYMENT_CARD_LOCK,
        BusinessPartnerPaymentCard.MASKED_CARD_NUMBER
    ];
    /**
     * All fields selector.
     */
    BusinessPartnerPaymentCard.ALL_FIELDS = new core_1.AllFields('*', BusinessPartnerPaymentCard);
    /**
     * All key fields of the BusinessPartnerPaymentCard entity.
     */
    BusinessPartnerPaymentCard._keyFields = [BusinessPartnerPaymentCard.BUSINESS_PARTNER, BusinessPartnerPaymentCard.PAYMENT_CARD_ID, BusinessPartnerPaymentCard.PAYMENT_CARD_TYPE, BusinessPartnerPaymentCard.CARD_NUMBER];
    /**
     * Mapping of all key field names to the respective static field property BusinessPartnerPaymentCard.
     */
    BusinessPartnerPaymentCard._keys = BusinessPartnerPaymentCard._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(BusinessPartnerPaymentCard = exports.BusinessPartnerPaymentCard || (exports.BusinessPartnerPaymentCard = {}));
exports.BusinessPartnerPaymentCard = BusinessPartnerPaymentCard;
//# sourceMappingURL=BusinessPartnerPaymentCard.js.map