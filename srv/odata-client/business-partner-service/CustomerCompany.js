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
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
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
     * Returns an entity builder to construct instances `CustomerCompany`.
     * @returns A builder that constructs instances of entity type `CustomerCompany`.
     */
    CustomerCompany.builder = function () {
        return core_1.Entity.entityBuilder(CustomerCompany);
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
        return core_1.Entity.customFieldSelector(fieldName, CustomerCompany);
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
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for CustomerCompany.
     */
    CustomerCompany._serviceName = 'API_BUSINESS_PARTNER';
    /**
     * Default url path for the according service.
     */
    CustomerCompany._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
    return CustomerCompany;
}(core_1.Entity));
exports.CustomerCompany = CustomerCompany;
var CustomerCompanyText_1 = require("./CustomerCompanyText");
var CustomerDunning_1 = require("./CustomerDunning");
var CustomerWithHoldingTax_1 = require("./CustomerWithHoldingTax");
(function (CustomerCompany) {
    /**
     * Static representation of the [[customer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerCompany.CUSTOMER = new core_1.StringField('Customer', CustomerCompany, 'Edm.String');
    /**
     * Static representation of the [[companyCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerCompany.COMPANY_CODE = new core_1.StringField('CompanyCode', CustomerCompany, 'Edm.String');
    /**
     * Static representation of the [[aparToleranceGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerCompany.APAR_TOLERANCE_GROUP = new core_1.StringField('APARToleranceGroup', CustomerCompany, 'Edm.String');
    /**
     * Static representation of the [[accountByCustomer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerCompany.ACCOUNT_BY_CUSTOMER = new core_1.StringField('AccountByCustomer', CustomerCompany, 'Edm.String');
    /**
     * Static representation of the [[accountingClerk]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerCompany.ACCOUNTING_CLERK = new core_1.StringField('AccountingClerk', CustomerCompany, 'Edm.String');
    /**
     * Static representation of the [[accountingClerkFaxNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerCompany.ACCOUNTING_CLERK_FAX_NUMBER = new core_1.StringField('AccountingClerkFaxNumber', CustomerCompany, 'Edm.String');
    /**
     * Static representation of the [[accountingClerkInternetAddress]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerCompany.ACCOUNTING_CLERK_INTERNET_ADDRESS = new core_1.StringField('AccountingClerkInternetAddress', CustomerCompany, 'Edm.String');
    /**
     * Static representation of the [[accountingClerkPhoneNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerCompany.ACCOUNTING_CLERK_PHONE_NUMBER = new core_1.StringField('AccountingClerkPhoneNumber', CustomerCompany, 'Edm.String');
    /**
     * Static representation of the [[alternativePayerAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerCompany.ALTERNATIVE_PAYER_ACCOUNT = new core_1.StringField('AlternativePayerAccount', CustomerCompany, 'Edm.String');
    /**
     * Static representation of the [[authorizationGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerCompany.AUTHORIZATION_GROUP = new core_1.StringField('AuthorizationGroup', CustomerCompany, 'Edm.String');
    /**
     * Static representation of the [[collectiveInvoiceVariant]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerCompany.COLLECTIVE_INVOICE_VARIANT = new core_1.StringField('CollectiveInvoiceVariant', CustomerCompany, 'Edm.String');
    /**
     * Static representation of the [[customerAccountNote]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerCompany.CUSTOMER_ACCOUNT_NOTE = new core_1.StringField('CustomerAccountNote', CustomerCompany, 'Edm.String');
    /**
     * Static representation of the [[customerHeadOffice]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerCompany.CUSTOMER_HEAD_OFFICE = new core_1.StringField('CustomerHeadOffice', CustomerCompany, 'Edm.String');
    /**
     * Static representation of the [[customerSupplierClearingIsUsed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerCompany.CUSTOMER_SUPPLIER_CLEARING_IS_USED = new core_1.BooleanField('CustomerSupplierClearingIsUsed', CustomerCompany, 'Edm.Boolean');
    /**
     * Static representation of the [[houseBank]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerCompany.HOUSE_BANK = new core_1.StringField('HouseBank', CustomerCompany, 'Edm.String');
    /**
     * Static representation of the [[interestCalculationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerCompany.INTEREST_CALCULATION_CODE = new core_1.StringField('InterestCalculationCode', CustomerCompany, 'Edm.String');
    /**
     * Static representation of the [[interestCalculationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerCompany.INTEREST_CALCULATION_DATE = new core_1.DateField('InterestCalculationDate', CustomerCompany, 'Edm.DateTime');
    /**
     * Static representation of the [[intrstCalcFrequencyInMonths]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerCompany.INTRST_CALC_FREQUENCY_IN_MONTHS = new core_1.StringField('IntrstCalcFrequencyInMonths', CustomerCompany, 'Edm.String');
    /**
     * Static representation of the [[isToBeLocallyProcessed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerCompany.IS_TO_BE_LOCALLY_PROCESSED = new core_1.BooleanField('IsToBeLocallyProcessed', CustomerCompany, 'Edm.Boolean');
    /**
     * Static representation of the [[itemIsToBePaidSeparately]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerCompany.ITEM_IS_TO_BE_PAID_SEPARATELY = new core_1.BooleanField('ItemIsToBePaidSeparately', CustomerCompany, 'Edm.Boolean');
    /**
     * Static representation of the [[layoutSortingRule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerCompany.LAYOUT_SORTING_RULE = new core_1.StringField('LayoutSortingRule', CustomerCompany, 'Edm.String');
    /**
     * Static representation of the [[paymentBlockingReason]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerCompany.PAYMENT_BLOCKING_REASON = new core_1.StringField('PaymentBlockingReason', CustomerCompany, 'Edm.String');
    /**
     * Static representation of the [[paymentMethodsList]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerCompany.PAYMENT_METHODS_LIST = new core_1.StringField('PaymentMethodsList', CustomerCompany, 'Edm.String');
    /**
     * Static representation of the [[paymentTerms]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerCompany.PAYMENT_TERMS = new core_1.StringField('PaymentTerms', CustomerCompany, 'Edm.String');
    /**
     * Static representation of the [[paytAdviceIsSentbyEdi]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerCompany.PAYT_ADVICE_IS_SENTBY_EDI = new core_1.BooleanField('PaytAdviceIsSentbyEDI', CustomerCompany, 'Edm.Boolean');
    /**
     * Static representation of the [[physicalInventoryBlockInd]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerCompany.PHYSICAL_INVENTORY_BLOCK_IND = new core_1.BooleanField('PhysicalInventoryBlockInd', CustomerCompany, 'Edm.Boolean');
    /**
     * Static representation of the [[reconciliationAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerCompany.RECONCILIATION_ACCOUNT = new core_1.StringField('ReconciliationAccount', CustomerCompany, 'Edm.String');
    /**
     * Static representation of the [[recordPaymentHistoryIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerCompany.RECORD_PAYMENT_HISTORY_INDICATOR = new core_1.BooleanField('RecordPaymentHistoryIndicator', CustomerCompany, 'Edm.Boolean');
    /**
     * Static representation of the [[userAtCustomer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerCompany.USER_AT_CUSTOMER = new core_1.StringField('UserAtCustomer', CustomerCompany, 'Edm.String');
    /**
     * Static representation of the [[deletionIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerCompany.DELETION_INDICATOR = new core_1.BooleanField('DeletionIndicator', CustomerCompany, 'Edm.Boolean');
    /**
     * Static representation of the [[cashPlanningGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerCompany.CASH_PLANNING_GROUP = new core_1.StringField('CashPlanningGroup', CustomerCompany, 'Edm.String');
    /**
     * Static representation of the [[knownOrNegotiatedLeave]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerCompany.KNOWN_OR_NEGOTIATED_LEAVE = new core_1.StringField('KnownOrNegotiatedLeave', CustomerCompany, 'Edm.String');
    /**
     * Static representation of the [[valueAdjustmentKey]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerCompany.VALUE_ADJUSTMENT_KEY = new core_1.StringField('ValueAdjustmentKey', CustomerCompany, 'Edm.String');
    /**
     * Static representation of the [[customerAccountGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerCompany.CUSTOMER_ACCOUNT_GROUP = new core_1.StringField('CustomerAccountGroup', CustomerCompany, 'Edm.String');
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