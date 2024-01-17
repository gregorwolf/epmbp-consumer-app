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
exports.CustomerCompany = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var CustomerCompanyRequestBuilder_1 = require("./CustomerCompanyRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "A_CustomerCompany" of service "API_BUSINESS_PARTNER".
 */
var CustomerCompany = /** @class */ (function (_super) {
    __extends(CustomerCompany, _super);
    function CustomerCompany() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `CustomerCompany`.
     * @returns A builder that constructs instances of entity type `CustomerCompany`.
     */
    CustomerCompany.builder = function () {
        return core_1.EntityV2.entityBuilder(CustomerCompany);
    };
    /**
     * Returns a request builder to construct requests for operations on the `CustomerCompany` entity type.
     * @returns A `CustomerCompany` request builder.
     */
    CustomerCompany.requestBuilder = function () {
        return new CustomerCompanyRequestBuilder_1.CustomerCompanyRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CustomerCompany`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CustomerCompany`.
     */
    CustomerCompany.customField = function (fieldName) {
        return core_1.EntityV2.customFieldSelector(fieldName, CustomerCompany);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    CustomerCompany.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for CustomerCompany.
     */
    CustomerCompany._entityName = 'A_CustomerCompany';
    /**
     * Default url path for the according service.
     */
    CustomerCompany._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
    return CustomerCompany;
}(core_1.EntityV2));
exports.CustomerCompany = CustomerCompany;
var CustomerCompanyText_1 = require("./CustomerCompanyText");
var CustomerDunning_1 = require("./CustomerDunning");
var CustomerWithHoldingTax_1 = require("./CustomerWithHoldingTax");
(function (CustomerCompany) {
    var _fieldBuilder = new core_1.FieldBuilder(CustomerCompany);
    /**
     * Static representation of the [[customer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerCompany.CUSTOMER = _fieldBuilder.buildEdmTypeField('Customer', 'Edm.String', false);
    /**
     * Static representation of the [[companyCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerCompany.COMPANY_CODE = _fieldBuilder.buildEdmTypeField('CompanyCode', 'Edm.String', false);
    /**
     * Static representation of the [[aparToleranceGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerCompany.APAR_TOLERANCE_GROUP = _fieldBuilder.buildEdmTypeField('APARToleranceGroup', 'Edm.String', true);
    /**
     * Static representation of the [[accountByCustomer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerCompany.ACCOUNT_BY_CUSTOMER = _fieldBuilder.buildEdmTypeField('AccountByCustomer', 'Edm.String', true);
    /**
     * Static representation of the [[accountingClerk]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerCompany.ACCOUNTING_CLERK = _fieldBuilder.buildEdmTypeField('AccountingClerk', 'Edm.String', true);
    /**
     * Static representation of the [[accountingClerkFaxNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerCompany.ACCOUNTING_CLERK_FAX_NUMBER = _fieldBuilder.buildEdmTypeField('AccountingClerkFaxNumber', 'Edm.String', true);
    /**
     * Static representation of the [[accountingClerkInternetAddress]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerCompany.ACCOUNTING_CLERK_INTERNET_ADDRESS = _fieldBuilder.buildEdmTypeField('AccountingClerkInternetAddress', 'Edm.String', true);
    /**
     * Static representation of the [[accountingClerkPhoneNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerCompany.ACCOUNTING_CLERK_PHONE_NUMBER = _fieldBuilder.buildEdmTypeField('AccountingClerkPhoneNumber', 'Edm.String', true);
    /**
     * Static representation of the [[alternativePayerAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerCompany.ALTERNATIVE_PAYER_ACCOUNT = _fieldBuilder.buildEdmTypeField('AlternativePayerAccount', 'Edm.String', true);
    /**
     * Static representation of the [[authorizationGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerCompany.AUTHORIZATION_GROUP = _fieldBuilder.buildEdmTypeField('AuthorizationGroup', 'Edm.String', true);
    /**
     * Static representation of the [[collectiveInvoiceVariant]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerCompany.COLLECTIVE_INVOICE_VARIANT = _fieldBuilder.buildEdmTypeField('CollectiveInvoiceVariant', 'Edm.String', true);
    /**
     * Static representation of the [[customerAccountNote]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerCompany.CUSTOMER_ACCOUNT_NOTE = _fieldBuilder.buildEdmTypeField('CustomerAccountNote', 'Edm.String', true);
    /**
     * Static representation of the [[customerHeadOffice]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerCompany.CUSTOMER_HEAD_OFFICE = _fieldBuilder.buildEdmTypeField('CustomerHeadOffice', 'Edm.String', true);
    /**
     * Static representation of the [[customerSupplierClearingIsUsed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerCompany.CUSTOMER_SUPPLIER_CLEARING_IS_USED = _fieldBuilder.buildEdmTypeField('CustomerSupplierClearingIsUsed', 'Edm.Boolean', true);
    /**
     * Static representation of the [[houseBank]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerCompany.HOUSE_BANK = _fieldBuilder.buildEdmTypeField('HouseBank', 'Edm.String', true);
    /**
     * Static representation of the [[interestCalculationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerCompany.INTEREST_CALCULATION_CODE = _fieldBuilder.buildEdmTypeField('InterestCalculationCode', 'Edm.String', true);
    /**
     * Static representation of the [[interestCalculationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerCompany.INTEREST_CALCULATION_DATE = _fieldBuilder.buildEdmTypeField('InterestCalculationDate', 'Edm.DateTime', true);
    /**
     * Static representation of the [[intrstCalcFrequencyInMonths]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerCompany.INTRST_CALC_FREQUENCY_IN_MONTHS = _fieldBuilder.buildEdmTypeField('IntrstCalcFrequencyInMonths', 'Edm.String', true);
    /**
     * Static representation of the [[isToBeLocallyProcessed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerCompany.IS_TO_BE_LOCALLY_PROCESSED = _fieldBuilder.buildEdmTypeField('IsToBeLocallyProcessed', 'Edm.Boolean', true);
    /**
     * Static representation of the [[itemIsToBePaidSeparately]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerCompany.ITEM_IS_TO_BE_PAID_SEPARATELY = _fieldBuilder.buildEdmTypeField('ItemIsToBePaidSeparately', 'Edm.Boolean', true);
    /**
     * Static representation of the [[layoutSortingRule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerCompany.LAYOUT_SORTING_RULE = _fieldBuilder.buildEdmTypeField('LayoutSortingRule', 'Edm.String', true);
    /**
     * Static representation of the [[paymentBlockingReason]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerCompany.PAYMENT_BLOCKING_REASON = _fieldBuilder.buildEdmTypeField('PaymentBlockingReason', 'Edm.String', true);
    /**
     * Static representation of the [[paymentMethodsList]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerCompany.PAYMENT_METHODS_LIST = _fieldBuilder.buildEdmTypeField('PaymentMethodsList', 'Edm.String', true);
    /**
     * Static representation of the [[paymentReason]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerCompany.PAYMENT_REASON = _fieldBuilder.buildEdmTypeField('PaymentReason', 'Edm.String', true);
    /**
     * Static representation of the [[paymentTerms]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerCompany.PAYMENT_TERMS = _fieldBuilder.buildEdmTypeField('PaymentTerms', 'Edm.String', true);
    /**
     * Static representation of the [[paytAdviceIsSentbyEdi]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerCompany.PAYT_ADVICE_IS_SENTBY_EDI = _fieldBuilder.buildEdmTypeField('PaytAdviceIsSentbyEDI', 'Edm.Boolean', true);
    /**
     * Static representation of the [[physicalInventoryBlockInd]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerCompany.PHYSICAL_INVENTORY_BLOCK_IND = _fieldBuilder.buildEdmTypeField('PhysicalInventoryBlockInd', 'Edm.Boolean', true);
    /**
     * Static representation of the [[reconciliationAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerCompany.RECONCILIATION_ACCOUNT = _fieldBuilder.buildEdmTypeField('ReconciliationAccount', 'Edm.String', true);
    /**
     * Static representation of the [[recordPaymentHistoryIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerCompany.RECORD_PAYMENT_HISTORY_INDICATOR = _fieldBuilder.buildEdmTypeField('RecordPaymentHistoryIndicator', 'Edm.Boolean', true);
    /**
     * Static representation of the [[userAtCustomer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerCompany.USER_AT_CUSTOMER = _fieldBuilder.buildEdmTypeField('UserAtCustomer', 'Edm.String', true);
    /**
     * Static representation of the [[deletionIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerCompany.DELETION_INDICATOR = _fieldBuilder.buildEdmTypeField('DeletionIndicator', 'Edm.Boolean', true);
    /**
     * Static representation of the [[cashPlanningGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerCompany.CASH_PLANNING_GROUP = _fieldBuilder.buildEdmTypeField('CashPlanningGroup', 'Edm.String', true);
    /**
     * Static representation of the [[knownOrNegotiatedLeave]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerCompany.KNOWN_OR_NEGOTIATED_LEAVE = _fieldBuilder.buildEdmTypeField('KnownOrNegotiatedLeave', 'Edm.String', true);
    /**
     * Static representation of the [[valueAdjustmentKey]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerCompany.VALUE_ADJUSTMENT_KEY = _fieldBuilder.buildEdmTypeField('ValueAdjustmentKey', 'Edm.String', true);
    /**
     * Static representation of the [[customerAccountGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerCompany.CUSTOMER_ACCOUNT_GROUP = _fieldBuilder.buildEdmTypeField('CustomerAccountGroup', 'Edm.String', true);
    /**
     * Static representation of the one-to-many navigation property [[toCompanyText]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerCompany.TO_COMPANY_TEXT = new core_1.Link('to_CompanyText', CustomerCompany, CustomerCompanyText_1.CustomerCompanyText);
    /**
     * Static representation of the one-to-many navigation property [[toCustomerDunning]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerCompany.TO_CUSTOMER_DUNNING = new core_1.Link('to_CustomerDunning', CustomerCompany, CustomerDunning_1.CustomerDunning);
    /**
     * Static representation of the one-to-many navigation property [[toWithHoldingTax]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerCompany.TO_WITH_HOLDING_TAX = new core_1.Link('to_WithHoldingTax', CustomerCompany, CustomerWithHoldingTax_1.CustomerWithHoldingTax);
    /**
     * All fields of the CustomerCompany entity.
     */
    CustomerCompany._allFields = [
        CustomerCompany.CUSTOMER,
        CustomerCompany.COMPANY_CODE,
        CustomerCompany.APAR_TOLERANCE_GROUP,
        CustomerCompany.ACCOUNT_BY_CUSTOMER,
        CustomerCompany.ACCOUNTING_CLERK,
        CustomerCompany.ACCOUNTING_CLERK_FAX_NUMBER,
        CustomerCompany.ACCOUNTING_CLERK_INTERNET_ADDRESS,
        CustomerCompany.ACCOUNTING_CLERK_PHONE_NUMBER,
        CustomerCompany.ALTERNATIVE_PAYER_ACCOUNT,
        CustomerCompany.AUTHORIZATION_GROUP,
        CustomerCompany.COLLECTIVE_INVOICE_VARIANT,
        CustomerCompany.CUSTOMER_ACCOUNT_NOTE,
        CustomerCompany.CUSTOMER_HEAD_OFFICE,
        CustomerCompany.CUSTOMER_SUPPLIER_CLEARING_IS_USED,
        CustomerCompany.HOUSE_BANK,
        CustomerCompany.INTEREST_CALCULATION_CODE,
        CustomerCompany.INTEREST_CALCULATION_DATE,
        CustomerCompany.INTRST_CALC_FREQUENCY_IN_MONTHS,
        CustomerCompany.IS_TO_BE_LOCALLY_PROCESSED,
        CustomerCompany.ITEM_IS_TO_BE_PAID_SEPARATELY,
        CustomerCompany.LAYOUT_SORTING_RULE,
        CustomerCompany.PAYMENT_BLOCKING_REASON,
        CustomerCompany.PAYMENT_METHODS_LIST,
        CustomerCompany.PAYMENT_REASON,
        CustomerCompany.PAYMENT_TERMS,
        CustomerCompany.PAYT_ADVICE_IS_SENTBY_EDI,
        CustomerCompany.PHYSICAL_INVENTORY_BLOCK_IND,
        CustomerCompany.RECONCILIATION_ACCOUNT,
        CustomerCompany.RECORD_PAYMENT_HISTORY_INDICATOR,
        CustomerCompany.USER_AT_CUSTOMER,
        CustomerCompany.DELETION_INDICATOR,
        CustomerCompany.CASH_PLANNING_GROUP,
        CustomerCompany.KNOWN_OR_NEGOTIATED_LEAVE,
        CustomerCompany.VALUE_ADJUSTMENT_KEY,
        CustomerCompany.CUSTOMER_ACCOUNT_GROUP,
        CustomerCompany.TO_COMPANY_TEXT,
        CustomerCompany.TO_CUSTOMER_DUNNING,
        CustomerCompany.TO_WITH_HOLDING_TAX
    ];
    /**
     * All fields selector.
     */
    CustomerCompany.ALL_FIELDS = new core_1.AllFields('*', CustomerCompany);
    /**
     * All key fields of the CustomerCompany entity.
     */
    CustomerCompany._keyFields = [CustomerCompany.CUSTOMER, CustomerCompany.COMPANY_CODE];
    /**
     * Mapping of all key field names to the respective static field property CustomerCompany.
     */
    CustomerCompany._keys = CustomerCompany._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(CustomerCompany = exports.CustomerCompany || (exports.CustomerCompany = {}));
exports.CustomerCompany = CustomerCompany;
//# sourceMappingURL=CustomerCompany.js.map