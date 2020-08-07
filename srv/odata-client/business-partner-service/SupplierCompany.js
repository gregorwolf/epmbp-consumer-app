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
exports.SupplierCompany = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var SupplierCompanyRequestBuilder_1 = require("./SupplierCompanyRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "A_SupplierCompany" of service "API_BUSINESS_PARTNER".
 */
var SupplierCompany = /** @class */ (function (_super) {
    __extends(SupplierCompany, _super);
    function SupplierCompany() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `SupplierCompany`.
     * @returns A builder that constructs instances of entity type `SupplierCompany`.
     */
    SupplierCompany.builder = function () {
        return core_1.Entity.entityBuilder(SupplierCompany);
    };
    /**
     * Returns a request builder to construct requests for operations on the `SupplierCompany` entity type.
     * @returns A `SupplierCompany` request builder.
     */
    SupplierCompany.requestBuilder = function () {
        return new SupplierCompanyRequestBuilder_1.SupplierCompanyRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SupplierCompany`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SupplierCompany`.
     */
    SupplierCompany.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, SupplierCompany);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    SupplierCompany.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for SupplierCompany.
     */
    SupplierCompany._entityName = 'A_SupplierCompany';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for SupplierCompany.
     */
    SupplierCompany._serviceName = 'API_BUSINESS_PARTNER';
    /**
     * Default url path for the according service.
     */
    SupplierCompany._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
    return SupplierCompany;
}(core_1.Entity));
exports.SupplierCompany = SupplierCompany;
var SupplierCompanyText_1 = require("./SupplierCompanyText");
var Supplier_1 = require("./Supplier");
var SupplierDunning_1 = require("./SupplierDunning");
var SupplierWithHoldingTax_1 = require("./SupplierWithHoldingTax");
(function (SupplierCompany) {
    /**
     * Static representation of the [[supplier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierCompany.SUPPLIER = new core_1.StringField('Supplier', SupplierCompany, 'Edm.String');
    /**
     * Static representation of the [[companyCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierCompany.COMPANY_CODE = new core_1.StringField('CompanyCode', SupplierCompany, 'Edm.String');
    /**
     * Static representation of the [[authorizationGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierCompany.AUTHORIZATION_GROUP = new core_1.StringField('AuthorizationGroup', SupplierCompany, 'Edm.String');
    /**
     * Static representation of the [[companyCodeName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierCompany.COMPANY_CODE_NAME = new core_1.StringField('CompanyCodeName', SupplierCompany, 'Edm.String');
    /**
     * Static representation of the [[paymentBlockingReason]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierCompany.PAYMENT_BLOCKING_REASON = new core_1.StringField('PaymentBlockingReason', SupplierCompany, 'Edm.String');
    /**
     * Static representation of the [[supplierIsBlockedForPosting]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierCompany.SUPPLIER_IS_BLOCKED_FOR_POSTING = new core_1.BooleanField('SupplierIsBlockedForPosting', SupplierCompany, 'Edm.Boolean');
    /**
     * Static representation of the [[accountingClerk]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierCompany.ACCOUNTING_CLERK = new core_1.StringField('AccountingClerk', SupplierCompany, 'Edm.String');
    /**
     * Static representation of the [[accountingClerkFaxNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierCompany.ACCOUNTING_CLERK_FAX_NUMBER = new core_1.StringField('AccountingClerkFaxNumber', SupplierCompany, 'Edm.String');
    /**
     * Static representation of the [[accountingClerkPhoneNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierCompany.ACCOUNTING_CLERK_PHONE_NUMBER = new core_1.StringField('AccountingClerkPhoneNumber', SupplierCompany, 'Edm.String');
    /**
     * Static representation of the [[supplierClerk]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierCompany.SUPPLIER_CLERK = new core_1.StringField('SupplierClerk', SupplierCompany, 'Edm.String');
    /**
     * Static representation of the [[supplierClerkUrl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierCompany.SUPPLIER_CLERK_URL = new core_1.StringField('SupplierClerkURL', SupplierCompany, 'Edm.String');
    /**
     * Static representation of the [[paymentMethodsList]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierCompany.PAYMENT_METHODS_LIST = new core_1.StringField('PaymentMethodsList', SupplierCompany, 'Edm.String');
    /**
     * Static representation of the [[paymentTerms]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierCompany.PAYMENT_TERMS = new core_1.StringField('PaymentTerms', SupplierCompany, 'Edm.String');
    /**
     * Static representation of the [[clearCustomerSupplier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierCompany.CLEAR_CUSTOMER_SUPPLIER = new core_1.BooleanField('ClearCustomerSupplier', SupplierCompany, 'Edm.Boolean');
    /**
     * Static representation of the [[isToBeLocallyProcessed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierCompany.IS_TO_BE_LOCALLY_PROCESSED = new core_1.BooleanField('IsToBeLocallyProcessed', SupplierCompany, 'Edm.Boolean');
    /**
     * Static representation of the [[itemIsToBePaidSeparately]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierCompany.ITEM_IS_TO_BE_PAID_SEPARATELY = new core_1.BooleanField('ItemIsToBePaidSeparately', SupplierCompany, 'Edm.Boolean');
    /**
     * Static representation of the [[paymentIsToBeSentByEdi]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierCompany.PAYMENT_IS_TO_BE_SENT_BY_EDI = new core_1.BooleanField('PaymentIsToBeSentByEDI', SupplierCompany, 'Edm.Boolean');
    /**
     * Static representation of the [[houseBank]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierCompany.HOUSE_BANK = new core_1.StringField('HouseBank', SupplierCompany, 'Edm.String');
    /**
     * Static representation of the [[checkPaidDurationInDays]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierCompany.CHECK_PAID_DURATION_IN_DAYS = new core_1.BigNumberField('CheckPaidDurationInDays', SupplierCompany, 'Edm.Decimal');
    /**
     * Static representation of the [[currency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierCompany.CURRENCY = new core_1.StringField('Currency', SupplierCompany, 'Edm.String');
    /**
     * Static representation of the [[billOfExchLmtAmtInCoCodeCrcy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierCompany.BILL_OF_EXCH_LMT_AMT_IN_CO_CODE_CRCY = new core_1.BigNumberField('BillOfExchLmtAmtInCoCodeCrcy', SupplierCompany, 'Edm.Decimal');
    /**
     * Static representation of the [[supplierClerkIdBySupplier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierCompany.SUPPLIER_CLERK_ID_BY_SUPPLIER = new core_1.StringField('SupplierClerkIDBySupplier', SupplierCompany, 'Edm.String');
    /**
     * Static representation of the [[reconciliationAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierCompany.RECONCILIATION_ACCOUNT = new core_1.StringField('ReconciliationAccount', SupplierCompany, 'Edm.String');
    /**
     * Static representation of the [[interestCalculationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierCompany.INTEREST_CALCULATION_CODE = new core_1.StringField('InterestCalculationCode', SupplierCompany, 'Edm.String');
    /**
     * Static representation of the [[interestCalculationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierCompany.INTEREST_CALCULATION_DATE = new core_1.DateField('InterestCalculationDate', SupplierCompany, 'Edm.DateTime');
    /**
     * Static representation of the [[intrstCalcFrequencyInMonths]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierCompany.INTRST_CALC_FREQUENCY_IN_MONTHS = new core_1.StringField('IntrstCalcFrequencyInMonths', SupplierCompany, 'Edm.String');
    /**
     * Static representation of the [[supplierHeadOffice]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierCompany.SUPPLIER_HEAD_OFFICE = new core_1.StringField('SupplierHeadOffice', SupplierCompany, 'Edm.String');
    /**
     * Static representation of the [[alternativePayee]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierCompany.ALTERNATIVE_PAYEE = new core_1.StringField('AlternativePayee', SupplierCompany, 'Edm.String');
    /**
     * Static representation of the [[layoutSortingRule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierCompany.LAYOUT_SORTING_RULE = new core_1.StringField('LayoutSortingRule', SupplierCompany, 'Edm.String');
    /**
     * Static representation of the [[aparToleranceGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierCompany.APAR_TOLERANCE_GROUP = new core_1.StringField('APARToleranceGroup', SupplierCompany, 'Edm.String');
    /**
     * Static representation of the [[supplierCertificationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierCompany.SUPPLIER_CERTIFICATION_DATE = new core_1.DateField('SupplierCertificationDate', SupplierCompany, 'Edm.DateTime');
    /**
     * Static representation of the [[supplierAccountNote]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierCompany.SUPPLIER_ACCOUNT_NOTE = new core_1.StringField('SupplierAccountNote', SupplierCompany, 'Edm.String');
    /**
     * Static representation of the [[withholdingTaxCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierCompany.WITHHOLDING_TAX_COUNTRY = new core_1.StringField('WithholdingTaxCountry', SupplierCompany, 'Edm.String');
    /**
     * Static representation of the [[deletionIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierCompany.DELETION_INDICATOR = new core_1.BooleanField('DeletionIndicator', SupplierCompany, 'Edm.Boolean');
    /**
     * Static representation of the [[cashPlanningGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierCompany.CASH_PLANNING_GROUP = new core_1.StringField('CashPlanningGroup', SupplierCompany, 'Edm.String');
    /**
     * Static representation of the [[isToBeCheckedForDuplicates]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierCompany.IS_TO_BE_CHECKED_FOR_DUPLICATES = new core_1.BooleanField('IsToBeCheckedForDuplicates', SupplierCompany, 'Edm.Boolean');
    /**
     * Static representation of the [[minorityGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierCompany.MINORITY_GROUP = new core_1.StringField('MinorityGroup', SupplierCompany, 'Edm.String');
    /**
     * Static representation of the [[supplierAccountGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierCompany.SUPPLIER_ACCOUNT_GROUP = new core_1.StringField('SupplierAccountGroup', SupplierCompany, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[toCompanyText]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierCompany.TO_COMPANY_TEXT = new core_1.Link('to_CompanyText', SupplierCompany, SupplierCompanyText_1.SupplierCompanyText);
    /**
     * Static representation of the one-to-one navigation property [[toSupplier]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierCompany.TO_SUPPLIER = new core_1.OneToOneLink('to_Supplier', SupplierCompany, Supplier_1.Supplier);
    /**
     * Static representation of the one-to-many navigation property [[toSupplierDunning]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierCompany.TO_SUPPLIER_DUNNING = new core_1.Link('to_SupplierDunning', SupplierCompany, SupplierDunning_1.SupplierDunning);
    /**
     * Static representation of the one-to-many navigation property [[toSupplierWithHoldingTax]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierCompany.TO_SUPPLIER_WITH_HOLDING_TAX = new core_1.Link('to_SupplierWithHoldingTax', SupplierCompany, SupplierWithHoldingTax_1.SupplierWithHoldingTax);
    /**
     * All fields of the SupplierCompany entity.
     */
    SupplierCompany._allFields = [
        SupplierCompany.SUPPLIER,
        SupplierCompany.COMPANY_CODE,
        SupplierCompany.AUTHORIZATION_GROUP,
        SupplierCompany.COMPANY_CODE_NAME,
        SupplierCompany.PAYMENT_BLOCKING_REASON,
        SupplierCompany.SUPPLIER_IS_BLOCKED_FOR_POSTING,
        SupplierCompany.ACCOUNTING_CLERK,
        SupplierCompany.ACCOUNTING_CLERK_FAX_NUMBER,
        SupplierCompany.ACCOUNTING_CLERK_PHONE_NUMBER,
        SupplierCompany.SUPPLIER_CLERK,
        SupplierCompany.SUPPLIER_CLERK_URL,
        SupplierCompany.PAYMENT_METHODS_LIST,
        SupplierCompany.PAYMENT_TERMS,
        SupplierCompany.CLEAR_CUSTOMER_SUPPLIER,
        SupplierCompany.IS_TO_BE_LOCALLY_PROCESSED,
        SupplierCompany.ITEM_IS_TO_BE_PAID_SEPARATELY,
        SupplierCompany.PAYMENT_IS_TO_BE_SENT_BY_EDI,
        SupplierCompany.HOUSE_BANK,
        SupplierCompany.CHECK_PAID_DURATION_IN_DAYS,
        SupplierCompany.CURRENCY,
        SupplierCompany.BILL_OF_EXCH_LMT_AMT_IN_CO_CODE_CRCY,
        SupplierCompany.SUPPLIER_CLERK_ID_BY_SUPPLIER,
        SupplierCompany.RECONCILIATION_ACCOUNT,
        SupplierCompany.INTEREST_CALCULATION_CODE,
        SupplierCompany.INTEREST_CALCULATION_DATE,
        SupplierCompany.INTRST_CALC_FREQUENCY_IN_MONTHS,
        SupplierCompany.SUPPLIER_HEAD_OFFICE,
        SupplierCompany.ALTERNATIVE_PAYEE,
        SupplierCompany.LAYOUT_SORTING_RULE,
        SupplierCompany.APAR_TOLERANCE_GROUP,
        SupplierCompany.SUPPLIER_CERTIFICATION_DATE,
        SupplierCompany.SUPPLIER_ACCOUNT_NOTE,
        SupplierCompany.WITHHOLDING_TAX_COUNTRY,
        SupplierCompany.DELETION_INDICATOR,
        SupplierCompany.CASH_PLANNING_GROUP,
        SupplierCompany.IS_TO_BE_CHECKED_FOR_DUPLICATES,
        SupplierCompany.MINORITY_GROUP,
        SupplierCompany.SUPPLIER_ACCOUNT_GROUP,
        SupplierCompany.TO_COMPANY_TEXT,
        SupplierCompany.TO_SUPPLIER,
        SupplierCompany.TO_SUPPLIER_DUNNING,
        SupplierCompany.TO_SUPPLIER_WITH_HOLDING_TAX
    ];
    /**
     * All fields selector.
     */
    SupplierCompany.ALL_FIELDS = new core_1.AllFields('*', SupplierCompany);
    /**
     * All key fields of the SupplierCompany entity.
     */
    SupplierCompany._keyFields = [SupplierCompany.SUPPLIER, SupplierCompany.COMPANY_CODE];
    /**
     * Mapping of all key field names to the respective static field property SupplierCompany.
     */
    SupplierCompany._keys = SupplierCompany._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(SupplierCompany = exports.SupplierCompany || (exports.SupplierCompany = {}));
exports.SupplierCompany = SupplierCompany;
//# sourceMappingURL=SupplierCompany.js.map