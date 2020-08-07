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
exports.Customer = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var CustomerRequestBuilder_1 = require("./CustomerRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "A_Customer" of service "API_BUSINESS_PARTNER".
 */
var Customer = /** @class */ (function (_super) {
    __extends(Customer, _super);
    function Customer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `Customer`.
     * @returns A builder that constructs instances of entity type `Customer`.
     */
    Customer.builder = function () {
        return core_1.Entity.entityBuilder(Customer);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Customer` entity type.
     * @returns A `Customer` request builder.
     */
    Customer.requestBuilder = function () {
        return new CustomerRequestBuilder_1.CustomerRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Customer`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Customer`.
     */
    Customer.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, Customer);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Customer.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Customer.
     */
    Customer._entityName = 'A_Customer';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Customer.
     */
    Customer._serviceName = 'API_BUSINESS_PARTNER';
    /**
     * Default url path for the according service.
     */
    Customer._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
    return Customer;
}(core_1.Entity));
exports.Customer = Customer;
var CustomerCompany_1 = require("./CustomerCompany");
var CustomerSalesArea_1 = require("./CustomerSalesArea");
var CustomerTaxGrouping_1 = require("./CustomerTaxGrouping");
var CustomerText_1 = require("./CustomerText");
(function (Customer) {
    /**
     * Static representation of the [[customer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer.CUSTOMER = new core_1.StringField('Customer', Customer, 'Edm.String');
    /**
     * Static representation of the [[authorizationGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer.AUTHORIZATION_GROUP = new core_1.StringField('AuthorizationGroup', Customer, 'Edm.String');
    /**
     * Static representation of the [[billingIsBlockedForCustomer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer.BILLING_IS_BLOCKED_FOR_CUSTOMER = new core_1.StringField('BillingIsBlockedForCustomer', Customer, 'Edm.String');
    /**
     * Static representation of the [[createdByUser]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer.CREATED_BY_USER = new core_1.StringField('CreatedByUser', Customer, 'Edm.String');
    /**
     * Static representation of the [[creationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer.CREATION_DATE = new core_1.DateField('CreationDate', Customer, 'Edm.DateTime');
    /**
     * Static representation of the [[customerAccountGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer.CUSTOMER_ACCOUNT_GROUP = new core_1.StringField('CustomerAccountGroup', Customer, 'Edm.String');
    /**
     * Static representation of the [[customerClassification]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer.CUSTOMER_CLASSIFICATION = new core_1.StringField('CustomerClassification', Customer, 'Edm.String');
    /**
     * Static representation of the [[customerFullName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer.CUSTOMER_FULL_NAME = new core_1.StringField('CustomerFullName', Customer, 'Edm.String');
    /**
     * Static representation of the [[customerName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer.CUSTOMER_NAME = new core_1.StringField('CustomerName', Customer, 'Edm.String');
    /**
     * Static representation of the [[deliveryIsBlocked]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer.DELIVERY_IS_BLOCKED = new core_1.StringField('DeliveryIsBlocked', Customer, 'Edm.String');
    /**
     * Static representation of the [[nfPartnerIsNaturalPerson]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer.NF_PARTNER_IS_NATURAL_PERSON = new core_1.StringField('NFPartnerIsNaturalPerson', Customer, 'Edm.String');
    /**
     * Static representation of the [[orderIsBlockedForCustomer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer.ORDER_IS_BLOCKED_FOR_CUSTOMER = new core_1.StringField('OrderIsBlockedForCustomer', Customer, 'Edm.String');
    /**
     * Static representation of the [[postingIsBlocked]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer.POSTING_IS_BLOCKED = new core_1.BooleanField('PostingIsBlocked', Customer, 'Edm.Boolean');
    /**
     * Static representation of the [[supplier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer.SUPPLIER = new core_1.StringField('Supplier', Customer, 'Edm.String');
    /**
     * Static representation of the [[customerCorporateGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer.CUSTOMER_CORPORATE_GROUP = new core_1.StringField('CustomerCorporateGroup', Customer, 'Edm.String');
    /**
     * Static representation of the [[fiscalAddress]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer.FISCAL_ADDRESS = new core_1.StringField('FiscalAddress', Customer, 'Edm.String');
    /**
     * Static representation of the [[industry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer.INDUSTRY = new core_1.StringField('Industry', Customer, 'Edm.String');
    /**
     * Static representation of the [[industryCode1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer.INDUSTRY_CODE_1 = new core_1.StringField('IndustryCode1', Customer, 'Edm.String');
    /**
     * Static representation of the [[industryCode2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer.INDUSTRY_CODE_2 = new core_1.StringField('IndustryCode2', Customer, 'Edm.String');
    /**
     * Static representation of the [[industryCode3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer.INDUSTRY_CODE_3 = new core_1.StringField('IndustryCode3', Customer, 'Edm.String');
    /**
     * Static representation of the [[industryCode4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer.INDUSTRY_CODE_4 = new core_1.StringField('IndustryCode4', Customer, 'Edm.String');
    /**
     * Static representation of the [[industryCode5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer.INDUSTRY_CODE_5 = new core_1.StringField('IndustryCode5', Customer, 'Edm.String');
    /**
     * Static representation of the [[internationalLocationNumber1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer.INTERNATIONAL_LOCATION_NUMBER_1 = new core_1.StringField('InternationalLocationNumber1', Customer, 'Edm.String');
    /**
     * Static representation of the [[nielsenRegion]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer.NIELSEN_REGION = new core_1.StringField('NielsenRegion', Customer, 'Edm.String');
    /**
     * Static representation of the [[responsibleType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer.RESPONSIBLE_TYPE = new core_1.StringField('ResponsibleType', Customer, 'Edm.String');
    /**
     * Static representation of the [[taxNumber1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer.TAX_NUMBER_1 = new core_1.StringField('TaxNumber1', Customer, 'Edm.String');
    /**
     * Static representation of the [[taxNumber2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer.TAX_NUMBER_2 = new core_1.StringField('TaxNumber2', Customer, 'Edm.String');
    /**
     * Static representation of the [[taxNumber3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer.TAX_NUMBER_3 = new core_1.StringField('TaxNumber3', Customer, 'Edm.String');
    /**
     * Static representation of the [[taxNumber4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer.TAX_NUMBER_4 = new core_1.StringField('TaxNumber4', Customer, 'Edm.String');
    /**
     * Static representation of the [[taxNumber5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer.TAX_NUMBER_5 = new core_1.StringField('TaxNumber5', Customer, 'Edm.String');
    /**
     * Static representation of the [[taxNumberType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer.TAX_NUMBER_TYPE = new core_1.StringField('TaxNumberType', Customer, 'Edm.String');
    /**
     * Static representation of the [[vatRegistration]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer.VAT_REGISTRATION = new core_1.StringField('VATRegistration', Customer, 'Edm.String');
    /**
     * Static representation of the [[deletionIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer.DELETION_INDICATOR = new core_1.BooleanField('DeletionIndicator', Customer, 'Edm.Boolean');
    /**
     * Static representation of the one-to-many navigation property [[toCustomerCompany]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer.TO_CUSTOMER_COMPANY = new core_1.Link('to_CustomerCompany', Customer, CustomerCompany_1.CustomerCompany);
    /**
     * Static representation of the one-to-many navigation property [[toCustomerSalesArea]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer.TO_CUSTOMER_SALES_AREA = new core_1.Link('to_CustomerSalesArea', Customer, CustomerSalesArea_1.CustomerSalesArea);
    /**
     * Static representation of the one-to-many navigation property [[toCustomerTaxGrouping]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer.TO_CUSTOMER_TAX_GROUPING = new core_1.Link('to_CustomerTaxGrouping', Customer, CustomerTaxGrouping_1.CustomerTaxGrouping);
    /**
     * Static representation of the one-to-many navigation property [[toCustomerText]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer.TO_CUSTOMER_TEXT = new core_1.Link('to_CustomerText', Customer, CustomerText_1.CustomerText);
    /**
     * All fields of the Customer entity.
     */
    Customer._allFields = [
        Customer.CUSTOMER,
        Customer.AUTHORIZATION_GROUP,
        Customer.BILLING_IS_BLOCKED_FOR_CUSTOMER,
        Customer.CREATED_BY_USER,
        Customer.CREATION_DATE,
        Customer.CUSTOMER_ACCOUNT_GROUP,
        Customer.CUSTOMER_CLASSIFICATION,
        Customer.CUSTOMER_FULL_NAME,
        Customer.CUSTOMER_NAME,
        Customer.DELIVERY_IS_BLOCKED,
        Customer.NF_PARTNER_IS_NATURAL_PERSON,
        Customer.ORDER_IS_BLOCKED_FOR_CUSTOMER,
        Customer.POSTING_IS_BLOCKED,
        Customer.SUPPLIER,
        Customer.CUSTOMER_CORPORATE_GROUP,
        Customer.FISCAL_ADDRESS,
        Customer.INDUSTRY,
        Customer.INDUSTRY_CODE_1,
        Customer.INDUSTRY_CODE_2,
        Customer.INDUSTRY_CODE_3,
        Customer.INDUSTRY_CODE_4,
        Customer.INDUSTRY_CODE_5,
        Customer.INTERNATIONAL_LOCATION_NUMBER_1,
        Customer.NIELSEN_REGION,
        Customer.RESPONSIBLE_TYPE,
        Customer.TAX_NUMBER_1,
        Customer.TAX_NUMBER_2,
        Customer.TAX_NUMBER_3,
        Customer.TAX_NUMBER_4,
        Customer.TAX_NUMBER_5,
        Customer.TAX_NUMBER_TYPE,
        Customer.VAT_REGISTRATION,
        Customer.DELETION_INDICATOR,
        Customer.TO_CUSTOMER_COMPANY,
        Customer.TO_CUSTOMER_SALES_AREA,
        Customer.TO_CUSTOMER_TAX_GROUPING,
        Customer.TO_CUSTOMER_TEXT
    ];
    /**
     * All fields selector.
     */
    Customer.ALL_FIELDS = new core_1.AllFields('*', Customer);
    /**
     * All key fields of the Customer entity.
     */
    Customer._keyFields = [Customer.CUSTOMER];
    /**
     * Mapping of all key field names to the respective static field property Customer.
     */
    Customer._keys = Customer._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Customer = exports.Customer || (exports.Customer = {}));
exports.Customer = Customer;
//# sourceMappingURL=Customer.js.map