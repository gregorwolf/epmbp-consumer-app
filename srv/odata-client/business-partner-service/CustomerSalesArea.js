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
exports.CustomerSalesArea = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
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
     * Returns an entity builder to construct instances `CustomerSalesArea`.
     * @returns A builder that constructs instances of entity type `CustomerSalesArea`.
     */
    CustomerSalesArea.builder = function () {
        return core_1.Entity.entityBuilder(CustomerSalesArea);
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
        return core_1.Entity.customFieldSelector(fieldName, CustomerSalesArea);
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
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for CustomerSalesArea.
     */
    CustomerSalesArea._serviceName = 'API_BUSINESS_PARTNER';
    /**
     * Default url path for the according service.
     */
    CustomerSalesArea._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
    return CustomerSalesArea;
}(core_1.Entity));
exports.CustomerSalesArea = CustomerSalesArea;
var CustSalesPartnerFunc_1 = require("./CustSalesPartnerFunc");
var CustomerSalesAreaTax_1 = require("./CustomerSalesAreaTax");
var CustomerSalesAreaText_1 = require("./CustomerSalesAreaText");
(function (CustomerSalesArea) {
    /**
     * Static representation of the [[customer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.CUSTOMER = new core_1.StringField('Customer', CustomerSalesArea, 'Edm.String');
    /**
     * Static representation of the [[salesOrganization]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.SALES_ORGANIZATION = new core_1.StringField('SalesOrganization', CustomerSalesArea, 'Edm.String');
    /**
     * Static representation of the [[distributionChannel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.DISTRIBUTION_CHANNEL = new core_1.StringField('DistributionChannel', CustomerSalesArea, 'Edm.String');
    /**
     * Static representation of the [[division]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.DIVISION = new core_1.StringField('Division', CustomerSalesArea, 'Edm.String');
    /**
     * Static representation of the [[accountByCustomer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.ACCOUNT_BY_CUSTOMER = new core_1.StringField('AccountByCustomer', CustomerSalesArea, 'Edm.String');
    /**
     * Static representation of the [[authorizationGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.AUTHORIZATION_GROUP = new core_1.StringField('AuthorizationGroup', CustomerSalesArea, 'Edm.String');
    /**
     * Static representation of the [[billingIsBlockedForCustomer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.BILLING_IS_BLOCKED_FOR_CUSTOMER = new core_1.StringField('BillingIsBlockedForCustomer', CustomerSalesArea, 'Edm.String');
    /**
     * Static representation of the [[completeDeliveryIsDefined]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.COMPLETE_DELIVERY_IS_DEFINED = new core_1.BooleanField('CompleteDeliveryIsDefined', CustomerSalesArea, 'Edm.Boolean');
    /**
     * Static representation of the [[currency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.CURRENCY = new core_1.StringField('Currency', CustomerSalesArea, 'Edm.String');
    /**
     * Static representation of the [[customerAbcClassification]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.CUSTOMER_ABC_CLASSIFICATION = new core_1.StringField('CustomerABCClassification', CustomerSalesArea, 'Edm.String');
    /**
     * Static representation of the [[customerAccountAssignmentGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.CUSTOMER_ACCOUNT_ASSIGNMENT_GROUP = new core_1.StringField('CustomerAccountAssignmentGroup', CustomerSalesArea, 'Edm.String');
    /**
     * Static representation of the [[customerGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.CUSTOMER_GROUP = new core_1.StringField('CustomerGroup', CustomerSalesArea, 'Edm.String');
    /**
     * Static representation of the [[customerPaymentTerms]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.CUSTOMER_PAYMENT_TERMS = new core_1.StringField('CustomerPaymentTerms', CustomerSalesArea, 'Edm.String');
    /**
     * Static representation of the [[customerPriceGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.CUSTOMER_PRICE_GROUP = new core_1.StringField('CustomerPriceGroup', CustomerSalesArea, 'Edm.String');
    /**
     * Static representation of the [[customerPricingProcedure]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.CUSTOMER_PRICING_PROCEDURE = new core_1.StringField('CustomerPricingProcedure', CustomerSalesArea, 'Edm.String');
    /**
     * Static representation of the [[deliveryIsBlockedForCustomer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.DELIVERY_IS_BLOCKED_FOR_CUSTOMER = new core_1.StringField('DeliveryIsBlockedForCustomer', CustomerSalesArea, 'Edm.String');
    /**
     * Static representation of the [[deliveryPriority]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.DELIVERY_PRIORITY = new core_1.StringField('DeliveryPriority', CustomerSalesArea, 'Edm.String');
    /**
     * Static representation of the [[incotermsClassification]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.INCOTERMS_CLASSIFICATION = new core_1.StringField('IncotermsClassification', CustomerSalesArea, 'Edm.String');
    /**
     * Static representation of the [[incotermsLocation2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.INCOTERMS_LOCATION_2 = new core_1.StringField('IncotermsLocation2', CustomerSalesArea, 'Edm.String');
    /**
     * Static representation of the [[incotermsVersion]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.INCOTERMS_VERSION = new core_1.StringField('IncotermsVersion', CustomerSalesArea, 'Edm.String');
    /**
     * Static representation of the [[incotermsLocation1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.INCOTERMS_LOCATION_1 = new core_1.StringField('IncotermsLocation1', CustomerSalesArea, 'Edm.String');
    /**
     * Static representation of the [[deletionIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.DELETION_INDICATOR = new core_1.BooleanField('DeletionIndicator', CustomerSalesArea, 'Edm.Boolean');
    /**
     * Static representation of the [[incotermsTransferLocation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.INCOTERMS_TRANSFER_LOCATION = new core_1.StringField('IncotermsTransferLocation', CustomerSalesArea, 'Edm.String');
    /**
     * Static representation of the [[invoiceDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.INVOICE_DATE = new core_1.StringField('InvoiceDate', CustomerSalesArea, 'Edm.String');
    /**
     * Static representation of the [[itemOrderProbabilityInPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.ITEM_ORDER_PROBABILITY_IN_PERCENT = new core_1.StringField('ItemOrderProbabilityInPercent', CustomerSalesArea, 'Edm.String');
    /**
     * Static representation of the [[orderCombinationIsAllowed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.ORDER_COMBINATION_IS_ALLOWED = new core_1.BooleanField('OrderCombinationIsAllowed', CustomerSalesArea, 'Edm.Boolean');
    /**
     * Static representation of the [[orderIsBlockedForCustomer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.ORDER_IS_BLOCKED_FOR_CUSTOMER = new core_1.StringField('OrderIsBlockedForCustomer', CustomerSalesArea, 'Edm.String');
    /**
     * Static representation of the [[partialDeliveryIsAllowed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.PARTIAL_DELIVERY_IS_ALLOWED = new core_1.StringField('PartialDeliveryIsAllowed', CustomerSalesArea, 'Edm.String');
    /**
     * Static representation of the [[priceListType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.PRICE_LIST_TYPE = new core_1.StringField('PriceListType', CustomerSalesArea, 'Edm.String');
    /**
     * Static representation of the [[salesGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.SALES_GROUP = new core_1.StringField('SalesGroup', CustomerSalesArea, 'Edm.String');
    /**
     * Static representation of the [[salesOffice]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.SALES_OFFICE = new core_1.StringField('SalesOffice', CustomerSalesArea, 'Edm.String');
    /**
     * Static representation of the [[shippingCondition]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.SHIPPING_CONDITION = new core_1.StringField('ShippingCondition', CustomerSalesArea, 'Edm.String');
    /**
     * Static representation of the [[supplyingPlant]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.SUPPLYING_PLANT = new core_1.StringField('SupplyingPlant', CustomerSalesArea, 'Edm.String');
    /**
     * Static representation of the [[salesDistrict]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.SALES_DISTRICT = new core_1.StringField('SalesDistrict', CustomerSalesArea, 'Edm.String');
    /**
     * Static representation of the [[invoiceListSchedule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.INVOICE_LIST_SCHEDULE = new core_1.StringField('InvoiceListSchedule', CustomerSalesArea, 'Edm.String');
    /**
     * Static representation of the [[exchangeRateType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.EXCHANGE_RATE_TYPE = new core_1.StringField('ExchangeRateType', CustomerSalesArea, 'Edm.String');
    /**
     * Static representation of the [[additionalCustomerGroup1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.ADDITIONAL_CUSTOMER_GROUP_1 = new core_1.StringField('AdditionalCustomerGroup1', CustomerSalesArea, 'Edm.String');
    /**
     * Static representation of the [[additionalCustomerGroup2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.ADDITIONAL_CUSTOMER_GROUP_2 = new core_1.StringField('AdditionalCustomerGroup2', CustomerSalesArea, 'Edm.String');
    /**
     * Static representation of the [[additionalCustomerGroup3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.ADDITIONAL_CUSTOMER_GROUP_3 = new core_1.StringField('AdditionalCustomerGroup3', CustomerSalesArea, 'Edm.String');
    /**
     * Static representation of the [[additionalCustomerGroup4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.ADDITIONAL_CUSTOMER_GROUP_4 = new core_1.StringField('AdditionalCustomerGroup4', CustomerSalesArea, 'Edm.String');
    /**
     * Static representation of the [[additionalCustomerGroup5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.ADDITIONAL_CUSTOMER_GROUP_5 = new core_1.StringField('AdditionalCustomerGroup5', CustomerSalesArea, 'Edm.String');
    /**
     * Static representation of the [[paymentGuaranteeProcedure]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.PAYMENT_GUARANTEE_PROCEDURE = new core_1.StringField('PaymentGuaranteeProcedure', CustomerSalesArea, 'Edm.String');
    /**
     * Static representation of the [[customerAccountGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesArea.CUSTOMER_ACCOUNT_GROUP = new core_1.StringField('CustomerAccountGroup', CustomerSalesArea, 'Edm.String');
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
        CustomerSalesArea.CURRENCY,
        CustomerSalesArea.CUSTOMER_ABC_CLASSIFICATION,
        CustomerSalesArea.CUSTOMER_ACCOUNT_ASSIGNMENT_GROUP,
        CustomerSalesArea.CUSTOMER_GROUP,
        CustomerSalesArea.CUSTOMER_PAYMENT_TERMS,
        CustomerSalesArea.CUSTOMER_PRICE_GROUP,
        CustomerSalesArea.CUSTOMER_PRICING_PROCEDURE,
        CustomerSalesArea.DELIVERY_IS_BLOCKED_FOR_CUSTOMER,
        CustomerSalesArea.DELIVERY_PRIORITY,
        CustomerSalesArea.INCOTERMS_CLASSIFICATION,
        CustomerSalesArea.INCOTERMS_LOCATION_2,
        CustomerSalesArea.INCOTERMS_VERSION,
        CustomerSalesArea.INCOTERMS_LOCATION_1,
        CustomerSalesArea.DELETION_INDICATOR,
        CustomerSalesArea.INCOTERMS_TRANSFER_LOCATION,
        CustomerSalesArea.INVOICE_DATE,
        CustomerSalesArea.ITEM_ORDER_PROBABILITY_IN_PERCENT,
        CustomerSalesArea.ORDER_COMBINATION_IS_ALLOWED,
        CustomerSalesArea.ORDER_IS_BLOCKED_FOR_CUSTOMER,
        CustomerSalesArea.PARTIAL_DELIVERY_IS_ALLOWED,
        CustomerSalesArea.PRICE_LIST_TYPE,
        CustomerSalesArea.SALES_GROUP,
        CustomerSalesArea.SALES_OFFICE,
        CustomerSalesArea.SHIPPING_CONDITION,
        CustomerSalesArea.SUPPLYING_PLANT,
        CustomerSalesArea.SALES_DISTRICT,
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
        CustomerSalesArea.TO_SALES_AREA_TEXT
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