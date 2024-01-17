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
exports.CustomerSalesArea = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var CustomerSalesAreaRequestBuilder_1 = require("./CustomerSalesAreaRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "A_CustomerSalesArea" of service "API_BUSINESS_PARTNER".
 */
var CustomerSalesArea = /** @class */ (function (_super) {
    __extends(CustomerSalesArea, _super);
    function CustomerSalesArea() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `CustomerSalesArea`.
     * @returns A builder that constructs instances of entity type `CustomerSalesArea`.
     */
    CustomerSalesArea.builder = function () {
        return core_1.EntityV2.entityBuilder(CustomerSalesArea);
    };
    /**
     * Returns a request builder to construct requests for operations on the `CustomerSalesArea` entity type.
     * @returns A `CustomerSalesArea` request builder.
     */
    CustomerSalesArea.requestBuilder = function () {
        return new CustomerSalesAreaRequestBuilder_1.CustomerSalesAreaRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CustomerSalesArea`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CustomerSalesArea`.
     */
    CustomerSalesArea.customField = function (fieldName) {
        return core_1.EntityV2.customFieldSelector(fieldName, CustomerSalesArea);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    CustomerSalesArea.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for CustomerSalesArea.
     */
    CustomerSalesArea._entityName = 'A_CustomerSalesArea';
    /**
     * Default url path for the according service.
     */
    CustomerSalesArea._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
    return CustomerSalesArea;
}(core_1.EntityV2));
exports.CustomerSalesArea = CustomerSalesArea;
var CustSalesPartnerFunc_1 = require("./CustSalesPartnerFunc");
var CustomerSalesAreaTax_1 = require("./CustomerSalesAreaTax");
var CustomerSalesAreaText_1 = require("./CustomerSalesAreaText");
var CustSlsAreaAddrDepdntInfo_1 = require("./CustSlsAreaAddrDepdntInfo");
(function (CustomerSalesArea) {
    var _fieldBuilder = new core_1.FieldBuilder(CustomerSalesArea);
    /**
     * Static representation of the [[customer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.CUSTOMER = _fieldBuilder.buildEdmTypeField('Customer', 'Edm.String', false);
    /**
     * Static representation of the [[salesOrganization]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.SALES_ORGANIZATION = _fieldBuilder.buildEdmTypeField('SalesOrganization', 'Edm.String', false);
    /**
     * Static representation of the [[distributionChannel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.DISTRIBUTION_CHANNEL = _fieldBuilder.buildEdmTypeField('DistributionChannel', 'Edm.String', false);
    /**
     * Static representation of the [[division]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.DIVISION = _fieldBuilder.buildEdmTypeField('Division', 'Edm.String', false);
    /**
     * Static representation of the [[accountByCustomer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.ACCOUNT_BY_CUSTOMER = _fieldBuilder.buildEdmTypeField('AccountByCustomer', 'Edm.String', true);
    /**
     * Static representation of the [[authorizationGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.AUTHORIZATION_GROUP = _fieldBuilder.buildEdmTypeField('AuthorizationGroup', 'Edm.String', true);
    /**
     * Static representation of the [[billingIsBlockedForCustomer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.BILLING_IS_BLOCKED_FOR_CUSTOMER = _fieldBuilder.buildEdmTypeField('BillingIsBlockedForCustomer', 'Edm.String', true);
    /**
     * Static representation of the [[completeDeliveryIsDefined]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.COMPLETE_DELIVERY_IS_DEFINED = _fieldBuilder.buildEdmTypeField('CompleteDeliveryIsDefined', 'Edm.Boolean', true);
    /**
     * Static representation of the [[creditControlArea]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.CREDIT_CONTROL_AREA = _fieldBuilder.buildEdmTypeField('CreditControlArea', 'Edm.String', true);
    /**
     * Static representation of the [[currency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.CURRENCY = _fieldBuilder.buildEdmTypeField('Currency', 'Edm.String', true);
    /**
     * Static representation of the [[custIsRlvtForSettlmtMgmt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.CUST_IS_RLVT_FOR_SETTLMT_MGMT = _fieldBuilder.buildEdmTypeField('CustIsRlvtForSettlmtMgmt', 'Edm.Boolean', true);
    /**
     * Static representation of the [[customerAbcClassification]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.CUSTOMER_ABC_CLASSIFICATION = _fieldBuilder.buildEdmTypeField('CustomerABCClassification', 'Edm.String', true);
    /**
     * Static representation of the [[customerAccountAssignmentGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.CUSTOMER_ACCOUNT_ASSIGNMENT_GROUP = _fieldBuilder.buildEdmTypeField('CustomerAccountAssignmentGroup', 'Edm.String', true);
    /**
     * Static representation of the [[customerGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.CUSTOMER_GROUP = _fieldBuilder.buildEdmTypeField('CustomerGroup', 'Edm.String', true);
    /**
     * Static representation of the [[customerIsRebateRelevant]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.CUSTOMER_IS_REBATE_RELEVANT = _fieldBuilder.buildEdmTypeField('CustomerIsRebateRelevant', 'Edm.Boolean', true);
    /**
     * Static representation of the [[customerPaymentTerms]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.CUSTOMER_PAYMENT_TERMS = _fieldBuilder.buildEdmTypeField('CustomerPaymentTerms', 'Edm.String', true);
    /**
     * Static representation of the [[customerPriceGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.CUSTOMER_PRICE_GROUP = _fieldBuilder.buildEdmTypeField('CustomerPriceGroup', 'Edm.String', true);
    /**
     * Static representation of the [[customerPricingProcedure]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.CUSTOMER_PRICING_PROCEDURE = _fieldBuilder.buildEdmTypeField('CustomerPricingProcedure', 'Edm.String', true);
    /**
     * Static representation of the [[custProdProposalProcedure]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.CUST_PROD_PROPOSAL_PROCEDURE = _fieldBuilder.buildEdmTypeField('CustProdProposalProcedure', 'Edm.String', true);
    /**
     * Static representation of the [[deliveryIsBlockedForCustomer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.DELIVERY_IS_BLOCKED_FOR_CUSTOMER = _fieldBuilder.buildEdmTypeField('DeliveryIsBlockedForCustomer', 'Edm.String', true);
    /**
     * Static representation of the [[deliveryPriority]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.DELIVERY_PRIORITY = _fieldBuilder.buildEdmTypeField('DeliveryPriority', 'Edm.String', true);
    /**
     * Static representation of the [[incotermsClassification]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.INCOTERMS_CLASSIFICATION = _fieldBuilder.buildEdmTypeField('IncotermsClassification', 'Edm.String', true);
    /**
     * Static representation of the [[incotermsLocation2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.INCOTERMS_LOCATION_2 = _fieldBuilder.buildEdmTypeField('IncotermsLocation2', 'Edm.String', true);
    /**
     * Static representation of the [[incotermsVersion]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.INCOTERMS_VERSION = _fieldBuilder.buildEdmTypeField('IncotermsVersion', 'Edm.String', true);
    /**
     * Static representation of the [[incotermsLocation1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.INCOTERMS_LOCATION_1 = _fieldBuilder.buildEdmTypeField('IncotermsLocation1', 'Edm.String', true);
    /**
     * Static representation of the [[incotermsSupChnLoc1AddlUuid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.INCOTERMS_SUP_CHN_LOC_1_ADDL_UUID = _fieldBuilder.buildEdmTypeField('IncotermsSupChnLoc1AddlUUID', 'Edm.Guid', true);
    /**
     * Static representation of the [[incotermsSupChnLoc2AddlUuid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.INCOTERMS_SUP_CHN_LOC_2_ADDL_UUID = _fieldBuilder.buildEdmTypeField('IncotermsSupChnLoc2AddlUUID', 'Edm.Guid', true);
    /**
     * Static representation of the [[incotermsSupChnDvtgLocAddlUuid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.INCOTERMS_SUP_CHN_DVTG_LOC_ADDL_UUID = _fieldBuilder.buildEdmTypeField('IncotermsSupChnDvtgLocAddlUUID', 'Edm.Guid', true);
    /**
     * Static representation of the [[deletionIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.DELETION_INDICATOR = _fieldBuilder.buildEdmTypeField('DeletionIndicator', 'Edm.Boolean', true);
    /**
     * Static representation of the [[incotermsTransferLocation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.INCOTERMS_TRANSFER_LOCATION = _fieldBuilder.buildEdmTypeField('IncotermsTransferLocation', 'Edm.String', true);
    /**
     * Static representation of the [[inspSbstHasNoTimeOrQuantity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.INSP_SBST_HAS_NO_TIME_OR_QUANTITY = _fieldBuilder.buildEdmTypeField('InspSbstHasNoTimeOrQuantity', 'Edm.Boolean', true);
    /**
     * Static representation of the [[invoiceDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.INVOICE_DATE = _fieldBuilder.buildEdmTypeField('InvoiceDate', 'Edm.String', true);
    /**
     * Static representation of the [[itemOrderProbabilityInPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.ITEM_ORDER_PROBABILITY_IN_PERCENT = _fieldBuilder.buildEdmTypeField('ItemOrderProbabilityInPercent', 'Edm.String', true);
    /**
     * Static representation of the [[manualInvoiceMaintIsRelevant]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.MANUAL_INVOICE_MAINT_IS_RELEVANT = _fieldBuilder.buildEdmTypeField('ManualInvoiceMaintIsRelevant', 'Edm.Boolean', true);
    /**
     * Static representation of the [[maxNmbrOfPartialDelivery]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.MAX_NMBR_OF_PARTIAL_DELIVERY = _fieldBuilder.buildEdmTypeField('MaxNmbrOfPartialDelivery', 'Edm.Decimal', true);
    /**
     * Static representation of the [[orderCombinationIsAllowed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.ORDER_COMBINATION_IS_ALLOWED = _fieldBuilder.buildEdmTypeField('OrderCombinationIsAllowed', 'Edm.Boolean', true);
    /**
     * Static representation of the [[orderIsBlockedForCustomer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.ORDER_IS_BLOCKED_FOR_CUSTOMER = _fieldBuilder.buildEdmTypeField('OrderIsBlockedForCustomer', 'Edm.String', true);
    /**
     * Static representation of the [[overdelivTolrtdLmtRatioInPct]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.OVERDELIV_TOLRTD_LMT_RATIO_IN_PCT = _fieldBuilder.buildEdmTypeField('OverdelivTolrtdLmtRatioInPct', 'Edm.Decimal', true);
    /**
     * Static representation of the [[partialDeliveryIsAllowed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.PARTIAL_DELIVERY_IS_ALLOWED = _fieldBuilder.buildEdmTypeField('PartialDeliveryIsAllowed', 'Edm.String', true);
    /**
     * Static representation of the [[priceListType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.PRICE_LIST_TYPE = _fieldBuilder.buildEdmTypeField('PriceListType', 'Edm.String', true);
    /**
     * Static representation of the [[productUnitGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.PRODUCT_UNIT_GROUP = _fieldBuilder.buildEdmTypeField('ProductUnitGroup', 'Edm.String', true);
    /**
     * Static representation of the [[proofOfDeliveryTimeValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.PROOF_OF_DELIVERY_TIME_VALUE = _fieldBuilder.buildEdmTypeField('ProofOfDeliveryTimeValue', 'Edm.Decimal', true);
    /**
     * Static representation of the [[salesGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.SALES_GROUP = _fieldBuilder.buildEdmTypeField('SalesGroup', 'Edm.String', true);
    /**
     * Static representation of the [[salesItemProposal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.SALES_ITEM_PROPOSAL = _fieldBuilder.buildEdmTypeField('SalesItemProposal', 'Edm.String', true);
    /**
     * Static representation of the [[salesOffice]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.SALES_OFFICE = _fieldBuilder.buildEdmTypeField('SalesOffice', 'Edm.String', true);
    /**
     * Static representation of the [[shippingCondition]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.SHIPPING_CONDITION = _fieldBuilder.buildEdmTypeField('ShippingCondition', 'Edm.String', true);
    /**
     * Static representation of the [[slsDocIsRlvtForProofOfDeliv]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.SLS_DOC_IS_RLVT_FOR_PROOF_OF_DELIV = _fieldBuilder.buildEdmTypeField('SlsDocIsRlvtForProofOfDeliv', 'Edm.Boolean', true);
    /**
     * Static representation of the [[slsUnlmtdOvrdelivIsAllwd]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.SLS_UNLMTD_OVRDELIV_IS_ALLWD = _fieldBuilder.buildEdmTypeField('SlsUnlmtdOvrdelivIsAllwd', 'Edm.Boolean', true);
    /**
     * Static representation of the [[supplyingPlant]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.SUPPLYING_PLANT = _fieldBuilder.buildEdmTypeField('SupplyingPlant', 'Edm.String', true);
    /**
     * Static representation of the [[salesDistrict]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.SALES_DISTRICT = _fieldBuilder.buildEdmTypeField('SalesDistrict', 'Edm.String', true);
    /**
     * Static representation of the [[underdelivTolrtdLmtRatioInPct]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.UNDERDELIV_TOLRTD_LMT_RATIO_IN_PCT = _fieldBuilder.buildEdmTypeField('UnderdelivTolrtdLmtRatioInPct', 'Edm.Decimal', true);
    /**
     * Static representation of the [[invoiceListSchedule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.INVOICE_LIST_SCHEDULE = _fieldBuilder.buildEdmTypeField('InvoiceListSchedule', 'Edm.String', true);
    /**
     * Static representation of the [[exchangeRateType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.EXCHANGE_RATE_TYPE = _fieldBuilder.buildEdmTypeField('ExchangeRateType', 'Edm.String', true);
    /**
     * Static representation of the [[additionalCustomerGroup1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.ADDITIONAL_CUSTOMER_GROUP_1 = _fieldBuilder.buildEdmTypeField('AdditionalCustomerGroup1', 'Edm.String', true);
    /**
     * Static representation of the [[additionalCustomerGroup2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.ADDITIONAL_CUSTOMER_GROUP_2 = _fieldBuilder.buildEdmTypeField('AdditionalCustomerGroup2', 'Edm.String', true);
    /**
     * Static representation of the [[additionalCustomerGroup3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.ADDITIONAL_CUSTOMER_GROUP_3 = _fieldBuilder.buildEdmTypeField('AdditionalCustomerGroup3', 'Edm.String', true);
    /**
     * Static representation of the [[additionalCustomerGroup4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.ADDITIONAL_CUSTOMER_GROUP_4 = _fieldBuilder.buildEdmTypeField('AdditionalCustomerGroup4', 'Edm.String', true);
    /**
     * Static representation of the [[additionalCustomerGroup5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.ADDITIONAL_CUSTOMER_GROUP_5 = _fieldBuilder.buildEdmTypeField('AdditionalCustomerGroup5', 'Edm.String', true);
    /**
     * Static representation of the [[paymentGuaranteeProcedure]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.PAYMENT_GUARANTEE_PROCEDURE = _fieldBuilder.buildEdmTypeField('PaymentGuaranteeProcedure', 'Edm.String', true);
    /**
     * Static representation of the [[customerAccountGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.CUSTOMER_ACCOUNT_GROUP = _fieldBuilder.buildEdmTypeField('CustomerAccountGroup', 'Edm.String', true);
    /**
     * Static representation of the one-to-many navigation property [[toPartnerFunction]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.TO_PARTNER_FUNCTION = new core_1.Link('to_PartnerFunction', CustomerSalesArea, CustSalesPartnerFunc_1.CustSalesPartnerFunc);
    /**
     * Static representation of the one-to-many navigation property [[toSalesAreaTax]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.TO_SALES_AREA_TAX = new core_1.Link('to_SalesAreaTax', CustomerSalesArea, CustomerSalesAreaTax_1.CustomerSalesAreaTax);
    /**
     * Static representation of the one-to-many navigation property [[toSalesAreaText]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.TO_SALES_AREA_TEXT = new core_1.Link('to_SalesAreaText', CustomerSalesArea, CustomerSalesAreaText_1.CustomerSalesAreaText);
    /**
     * Static representation of the one-to-many navigation property [[toSlsAreaAddrDepdntInfo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.TO_SLS_AREA_ADDR_DEPDNT_INFO = new core_1.Link('to_SlsAreaAddrDepdntInfo', CustomerSalesArea, CustSlsAreaAddrDepdntInfo_1.CustSlsAreaAddrDepdntInfo);
    /**
     * All fields of the CustomerSalesArea entity.
     */
    CustomerSalesArea._allFields = [
        CustomerSalesArea.CUSTOMER,
        CustomerSalesArea.SALES_ORGANIZATION,
        CustomerSalesArea.DISTRIBUTION_CHANNEL,
        CustomerSalesArea.DIVISION,
        CustomerSalesArea.ACCOUNT_BY_CUSTOMER,
        CustomerSalesArea.AUTHORIZATION_GROUP,
        CustomerSalesArea.BILLING_IS_BLOCKED_FOR_CUSTOMER,
        CustomerSalesArea.COMPLETE_DELIVERY_IS_DEFINED,
        CustomerSalesArea.CREDIT_CONTROL_AREA,
        CustomerSalesArea.CURRENCY,
        CustomerSalesArea.CUST_IS_RLVT_FOR_SETTLMT_MGMT,
        CustomerSalesArea.CUSTOMER_ABC_CLASSIFICATION,
        CustomerSalesArea.CUSTOMER_ACCOUNT_ASSIGNMENT_GROUP,
        CustomerSalesArea.CUSTOMER_GROUP,
        CustomerSalesArea.CUSTOMER_IS_REBATE_RELEVANT,
        CustomerSalesArea.CUSTOMER_PAYMENT_TERMS,
        CustomerSalesArea.CUSTOMER_PRICE_GROUP,
        CustomerSalesArea.CUSTOMER_PRICING_PROCEDURE,
        CustomerSalesArea.CUST_PROD_PROPOSAL_PROCEDURE,
        CustomerSalesArea.DELIVERY_IS_BLOCKED_FOR_CUSTOMER,
        CustomerSalesArea.DELIVERY_PRIORITY,
        CustomerSalesArea.INCOTERMS_CLASSIFICATION,
        CustomerSalesArea.INCOTERMS_LOCATION_2,
        CustomerSalesArea.INCOTERMS_VERSION,
        CustomerSalesArea.INCOTERMS_LOCATION_1,
        CustomerSalesArea.INCOTERMS_SUP_CHN_LOC_1_ADDL_UUID,
        CustomerSalesArea.INCOTERMS_SUP_CHN_LOC_2_ADDL_UUID,
        CustomerSalesArea.INCOTERMS_SUP_CHN_DVTG_LOC_ADDL_UUID,
        CustomerSalesArea.DELETION_INDICATOR,
        CustomerSalesArea.INCOTERMS_TRANSFER_LOCATION,
        CustomerSalesArea.INSP_SBST_HAS_NO_TIME_OR_QUANTITY,
        CustomerSalesArea.INVOICE_DATE,
        CustomerSalesArea.ITEM_ORDER_PROBABILITY_IN_PERCENT,
        CustomerSalesArea.MANUAL_INVOICE_MAINT_IS_RELEVANT,
        CustomerSalesArea.MAX_NMBR_OF_PARTIAL_DELIVERY,
        CustomerSalesArea.ORDER_COMBINATION_IS_ALLOWED,
        CustomerSalesArea.ORDER_IS_BLOCKED_FOR_CUSTOMER,
        CustomerSalesArea.OVERDELIV_TOLRTD_LMT_RATIO_IN_PCT,
        CustomerSalesArea.PARTIAL_DELIVERY_IS_ALLOWED,
        CustomerSalesArea.PRICE_LIST_TYPE,
        CustomerSalesArea.PRODUCT_UNIT_GROUP,
        CustomerSalesArea.PROOF_OF_DELIVERY_TIME_VALUE,
        CustomerSalesArea.SALES_GROUP,
        CustomerSalesArea.SALES_ITEM_PROPOSAL,
        CustomerSalesArea.SALES_OFFICE,
        CustomerSalesArea.SHIPPING_CONDITION,
        CustomerSalesArea.SLS_DOC_IS_RLVT_FOR_PROOF_OF_DELIV,
        CustomerSalesArea.SLS_UNLMTD_OVRDELIV_IS_ALLWD,
        CustomerSalesArea.SUPPLYING_PLANT,
        CustomerSalesArea.SALES_DISTRICT,
        CustomerSalesArea.UNDERDELIV_TOLRTD_LMT_RATIO_IN_PCT,
        CustomerSalesArea.INVOICE_LIST_SCHEDULE,
        CustomerSalesArea.EXCHANGE_RATE_TYPE,
        CustomerSalesArea.ADDITIONAL_CUSTOMER_GROUP_1,
        CustomerSalesArea.ADDITIONAL_CUSTOMER_GROUP_2,
        CustomerSalesArea.ADDITIONAL_CUSTOMER_GROUP_3,
        CustomerSalesArea.ADDITIONAL_CUSTOMER_GROUP_4,
        CustomerSalesArea.ADDITIONAL_CUSTOMER_GROUP_5,
        CustomerSalesArea.PAYMENT_GUARANTEE_PROCEDURE,
        CustomerSalesArea.CUSTOMER_ACCOUNT_GROUP,
        CustomerSalesArea.TO_PARTNER_FUNCTION,
        CustomerSalesArea.TO_SALES_AREA_TAX,
        CustomerSalesArea.TO_SALES_AREA_TEXT,
        CustomerSalesArea.TO_SLS_AREA_ADDR_DEPDNT_INFO
    ];
    /**
     * All fields selector.
     */
    CustomerSalesArea.ALL_FIELDS = new core_1.AllFields('*', CustomerSalesArea);
    /**
     * All key fields of the CustomerSalesArea entity.
     */
    CustomerSalesArea._keyFields = [CustomerSalesArea.CUSTOMER, CustomerSalesArea.SALES_ORGANIZATION, CustomerSalesArea.DISTRIBUTION_CHANNEL, CustomerSalesArea.DIVISION];
    /**
     * Mapping of all key field names to the respective static field property CustomerSalesArea.
     */
    CustomerSalesArea._keys = CustomerSalesArea._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(CustomerSalesArea = exports.CustomerSalesArea || (exports.CustomerSalesArea = {}));
exports.CustomerSalesArea = CustomerSalesArea;
//# sourceMappingURL=CustomerSalesArea.js.map