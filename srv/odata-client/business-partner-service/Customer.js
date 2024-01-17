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
exports.Customer = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
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
     * Returns an entity builder to construct instances of `Customer`.
     * @returns A builder that constructs instances of entity type `Customer`.
     */
    Customer.builder = function () {
        return core_1.EntityV2.entityBuilder(Customer);
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
        return core_1.EntityV2.customFieldSelector(fieldName, Customer);
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
     * Default url path for the according service.
     */
    Customer._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
    return Customer;
}(core_1.EntityV2));
exports.Customer = Customer;
var CustAddrDepdntExtIdentifier_1 = require("./CustAddrDepdntExtIdentifier");
var CustAddrDepdntInformation_1 = require("./CustAddrDepdntInformation");
var CustomerCompany_1 = require("./CustomerCompany");
var CustomerSalesArea_1 = require("./CustomerSalesArea");
var CustomerTaxGrouping_1 = require("./CustomerTaxGrouping");
var CustomerText_1 = require("./CustomerText");
var CustomerUnloadingPoint_1 = require("./CustomerUnloadingPoint");
var CustUnldgPtAddrDepdntInfo_1 = require("./CustUnldgPtAddrDepdntInfo");
(function (Customer) {
    var _fieldBuilder = new core_1.FieldBuilder(Customer);
    /**
     * Static representation of the [[customer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer.CUSTOMER = _fieldBuilder.buildEdmTypeField('Customer', 'Edm.String', false);
    /**
     * Static representation of the [[authorizationGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer.AUTHORIZATION_GROUP = _fieldBuilder.buildEdmTypeField('AuthorizationGroup', 'Edm.String', true);
    /**
     * Static representation of the [[billingIsBlockedForCustomer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer.BILLING_IS_BLOCKED_FOR_CUSTOMER = _fieldBuilder.buildEdmTypeField('BillingIsBlockedForCustomer', 'Edm.String', true);
    /**
     * Static representation of the [[createdByUser]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer.CREATED_BY_USER = _fieldBuilder.buildEdmTypeField('CreatedByUser', 'Edm.String', true);
    /**
     * Static representation of the [[creationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer.CREATION_DATE = _fieldBuilder.buildEdmTypeField('CreationDate', 'Edm.DateTime', true);
    /**
     * Static representation of the [[customerAccountGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer.CUSTOMER_ACCOUNT_GROUP = _fieldBuilder.buildEdmTypeField('CustomerAccountGroup', 'Edm.String', true);
    /**
     * Static representation of the [[customerClassification]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer.CUSTOMER_CLASSIFICATION = _fieldBuilder.buildEdmTypeField('CustomerClassification', 'Edm.String', true);
    /**
     * Static representation of the [[customerFullName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer.CUSTOMER_FULL_NAME = _fieldBuilder.buildEdmTypeField('CustomerFullName', 'Edm.String', true);
    /**
     * Static representation of the [[bpCustomerFullName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer.BP_CUSTOMER_FULL_NAME = _fieldBuilder.buildEdmTypeField('BPCustomerFullName', 'Edm.String', true);
    /**
     * Static representation of the [[customerName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer.CUSTOMER_NAME = _fieldBuilder.buildEdmTypeField('CustomerName', 'Edm.String', true);
    /**
     * Static representation of the [[bpCustomerName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer.BP_CUSTOMER_NAME = _fieldBuilder.buildEdmTypeField('BPCustomerName', 'Edm.String', true);
    /**
     * Static representation of the [[deliveryIsBlocked]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer.DELIVERY_IS_BLOCKED = _fieldBuilder.buildEdmTypeField('DeliveryIsBlocked', 'Edm.String', true);
    /**
     * Static representation of the [[freeDefinedAttribute01]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer.FREE_DEFINED_ATTRIBUTE_01 = _fieldBuilder.buildEdmTypeField('FreeDefinedAttribute01', 'Edm.String', true);
    /**
     * Static representation of the [[freeDefinedAttribute02]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer.FREE_DEFINED_ATTRIBUTE_02 = _fieldBuilder.buildEdmTypeField('FreeDefinedAttribute02', 'Edm.String', true);
    /**
     * Static representation of the [[freeDefinedAttribute03]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer.FREE_DEFINED_ATTRIBUTE_03 = _fieldBuilder.buildEdmTypeField('FreeDefinedAttribute03', 'Edm.String', true);
    /**
     * Static representation of the [[freeDefinedAttribute04]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer.FREE_DEFINED_ATTRIBUTE_04 = _fieldBuilder.buildEdmTypeField('FreeDefinedAttribute04', 'Edm.String', true);
    /**
     * Static representation of the [[freeDefinedAttribute05]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer.FREE_DEFINED_ATTRIBUTE_05 = _fieldBuilder.buildEdmTypeField('FreeDefinedAttribute05', 'Edm.String', true);
    /**
     * Static representation of the [[freeDefinedAttribute06]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer.FREE_DEFINED_ATTRIBUTE_06 = _fieldBuilder.buildEdmTypeField('FreeDefinedAttribute06', 'Edm.String', true);
    /**
     * Static representation of the [[freeDefinedAttribute07]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer.FREE_DEFINED_ATTRIBUTE_07 = _fieldBuilder.buildEdmTypeField('FreeDefinedAttribute07', 'Edm.String', true);
    /**
     * Static representation of the [[freeDefinedAttribute08]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer.FREE_DEFINED_ATTRIBUTE_08 = _fieldBuilder.buildEdmTypeField('FreeDefinedAttribute08', 'Edm.String', true);
    /**
     * Static representation of the [[freeDefinedAttribute09]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer.FREE_DEFINED_ATTRIBUTE_09 = _fieldBuilder.buildEdmTypeField('FreeDefinedAttribute09', 'Edm.String', true);
    /**
     * Static representation of the [[freeDefinedAttribute10]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer.FREE_DEFINED_ATTRIBUTE_10 = _fieldBuilder.buildEdmTypeField('FreeDefinedAttribute10', 'Edm.String', true);
    /**
     * Static representation of the [[nfPartnerIsNaturalPerson]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer.NF_PARTNER_IS_NATURAL_PERSON = _fieldBuilder.buildEdmTypeField('NFPartnerIsNaturalPerson', 'Edm.String', true);
    /**
     * Static representation of the [[orderIsBlockedForCustomer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer.ORDER_IS_BLOCKED_FOR_CUSTOMER = _fieldBuilder.buildEdmTypeField('OrderIsBlockedForCustomer', 'Edm.String', true);
    /**
     * Static representation of the [[postingIsBlocked]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer.POSTING_IS_BLOCKED = _fieldBuilder.buildEdmTypeField('PostingIsBlocked', 'Edm.Boolean', true);
    /**
     * Static representation of the [[supplier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer.SUPPLIER = _fieldBuilder.buildEdmTypeField('Supplier', 'Edm.String', true);
    /**
     * Static representation of the [[customerCorporateGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer.CUSTOMER_CORPORATE_GROUP = _fieldBuilder.buildEdmTypeField('CustomerCorporateGroup', 'Edm.String', true);
    /**
     * Static representation of the [[fiscalAddress]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer.FISCAL_ADDRESS = _fieldBuilder.buildEdmTypeField('FiscalAddress', 'Edm.String', true);
    /**
     * Static representation of the [[industry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer.INDUSTRY = _fieldBuilder.buildEdmTypeField('Industry', 'Edm.String', true);
    /**
     * Static representation of the [[industryCode1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer.INDUSTRY_CODE_1 = _fieldBuilder.buildEdmTypeField('IndustryCode1', 'Edm.String', true);
    /**
     * Static representation of the [[industryCode2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer.INDUSTRY_CODE_2 = _fieldBuilder.buildEdmTypeField('IndustryCode2', 'Edm.String', true);
    /**
     * Static representation of the [[industryCode3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer.INDUSTRY_CODE_3 = _fieldBuilder.buildEdmTypeField('IndustryCode3', 'Edm.String', true);
    /**
     * Static representation of the [[industryCode4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer.INDUSTRY_CODE_4 = _fieldBuilder.buildEdmTypeField('IndustryCode4', 'Edm.String', true);
    /**
     * Static representation of the [[industryCode5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer.INDUSTRY_CODE_5 = _fieldBuilder.buildEdmTypeField('IndustryCode5', 'Edm.String', true);
    /**
     * Static representation of the [[internationalLocationNumber1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer.INTERNATIONAL_LOCATION_NUMBER_1 = _fieldBuilder.buildEdmTypeField('InternationalLocationNumber1', 'Edm.String', true);
    /**
     * Static representation of the [[internationalLocationNumber2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer.INTERNATIONAL_LOCATION_NUMBER_2 = _fieldBuilder.buildEdmTypeField('InternationalLocationNumber2', 'Edm.String', true);
    /**
     * Static representation of the [[internationalLocationNumber3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer.INTERNATIONAL_LOCATION_NUMBER_3 = _fieldBuilder.buildEdmTypeField('InternationalLocationNumber3', 'Edm.String', true);
    /**
     * Static representation of the [[nielsenRegion]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer.NIELSEN_REGION = _fieldBuilder.buildEdmTypeField('NielsenRegion', 'Edm.String', true);
    /**
     * Static representation of the [[paymentReason]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer.PAYMENT_REASON = _fieldBuilder.buildEdmTypeField('PaymentReason', 'Edm.String', true);
    /**
     * Static representation of the [[responsibleType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer.RESPONSIBLE_TYPE = _fieldBuilder.buildEdmTypeField('ResponsibleType', 'Edm.String', true);
    /**
     * Static representation of the [[taxNumber1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer.TAX_NUMBER_1 = _fieldBuilder.buildEdmTypeField('TaxNumber1', 'Edm.String', true);
    /**
     * Static representation of the [[taxNumber2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer.TAX_NUMBER_2 = _fieldBuilder.buildEdmTypeField('TaxNumber2', 'Edm.String', true);
    /**
     * Static representation of the [[taxNumber3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer.TAX_NUMBER_3 = _fieldBuilder.buildEdmTypeField('TaxNumber3', 'Edm.String', true);
    /**
     * Static representation of the [[taxNumber4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer.TAX_NUMBER_4 = _fieldBuilder.buildEdmTypeField('TaxNumber4', 'Edm.String', true);
    /**
     * Static representation of the [[taxNumber5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer.TAX_NUMBER_5 = _fieldBuilder.buildEdmTypeField('TaxNumber5', 'Edm.String', true);
    /**
     * Static representation of the [[taxNumberType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer.TAX_NUMBER_TYPE = _fieldBuilder.buildEdmTypeField('TaxNumberType', 'Edm.String', true);
    /**
     * Static representation of the [[vatRegistration]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer.VAT_REGISTRATION = _fieldBuilder.buildEdmTypeField('VATRegistration', 'Edm.String', true);
    /**
     * Static representation of the [[deletionIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer.DELETION_INDICATOR = _fieldBuilder.buildEdmTypeField('DeletionIndicator', 'Edm.Boolean', true);
    /**
     * Static representation of the [[expressTrainStationName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer.EXPRESS_TRAIN_STATION_NAME = _fieldBuilder.buildEdmTypeField('ExpressTrainStationName', 'Edm.String', true);
    /**
     * Static representation of the [[trainStationName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer.TRAIN_STATION_NAME = _fieldBuilder.buildEdmTypeField('TrainStationName', 'Edm.String', true);
    /**
     * Static representation of the [[cityCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer.CITY_CODE = _fieldBuilder.buildEdmTypeField('CityCode', 'Edm.String', true);
    /**
     * Static representation of the [[county]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer.COUNTY = _fieldBuilder.buildEdmTypeField('County', 'Edm.String', true);
    /**
     * Static representation of the one-to-many navigation property [[toCustAddrDepdntExtIdentifier]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer.TO_CUST_ADDR_DEPDNT_EXT_IDENTIFIER = new core_1.Link('to_CustAddrDepdntExtIdentifier', Customer, CustAddrDepdntExtIdentifier_1.CustAddrDepdntExtIdentifier);
    /**
     * Static representation of the one-to-many navigation property [[toCustAddrDepdntInformation]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer.TO_CUST_ADDR_DEPDNT_INFORMATION = new core_1.Link('to_CustAddrDepdntInformation', Customer, CustAddrDepdntInformation_1.CustAddrDepdntInformation);
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
     * Static representation of the one-to-many navigation property [[toCustomerUnloadingPoint]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer.TO_CUSTOMER_UNLOADING_POINT = new core_1.Link('to_CustomerUnloadingPoint', Customer, CustomerUnloadingPoint_1.CustomerUnloadingPoint);
    /**
     * Static representation of the one-to-many navigation property [[toCustUnldgPtAddrDepdntInfo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Customer.TO_CUST_UNLDG_PT_ADDR_DEPDNT_INFO = new core_1.Link('to_CustUnldgPtAddrDepdntInfo', Customer, CustUnldgPtAddrDepdntInfo_1.CustUnldgPtAddrDepdntInfo);
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
        Customer.BP_CUSTOMER_FULL_NAME,
        Customer.CUSTOMER_NAME,
        Customer.BP_CUSTOMER_NAME,
        Customer.DELIVERY_IS_BLOCKED,
        Customer.FREE_DEFINED_ATTRIBUTE_01,
        Customer.FREE_DEFINED_ATTRIBUTE_02,
        Customer.FREE_DEFINED_ATTRIBUTE_03,
        Customer.FREE_DEFINED_ATTRIBUTE_04,
        Customer.FREE_DEFINED_ATTRIBUTE_05,
        Customer.FREE_DEFINED_ATTRIBUTE_06,
        Customer.FREE_DEFINED_ATTRIBUTE_07,
        Customer.FREE_DEFINED_ATTRIBUTE_08,
        Customer.FREE_DEFINED_ATTRIBUTE_09,
        Customer.FREE_DEFINED_ATTRIBUTE_10,
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
        Customer.INTERNATIONAL_LOCATION_NUMBER_2,
        Customer.INTERNATIONAL_LOCATION_NUMBER_3,
        Customer.NIELSEN_REGION,
        Customer.PAYMENT_REASON,
        Customer.RESPONSIBLE_TYPE,
        Customer.TAX_NUMBER_1,
        Customer.TAX_NUMBER_2,
        Customer.TAX_NUMBER_3,
        Customer.TAX_NUMBER_4,
        Customer.TAX_NUMBER_5,
        Customer.TAX_NUMBER_TYPE,
        Customer.VAT_REGISTRATION,
        Customer.DELETION_INDICATOR,
        Customer.EXPRESS_TRAIN_STATION_NAME,
        Customer.TRAIN_STATION_NAME,
        Customer.CITY_CODE,
        Customer.COUNTY,
        Customer.TO_CUST_ADDR_DEPDNT_EXT_IDENTIFIER,
        Customer.TO_CUST_ADDR_DEPDNT_INFORMATION,
        Customer.TO_CUSTOMER_COMPANY,
        Customer.TO_CUSTOMER_SALES_AREA,
        Customer.TO_CUSTOMER_TAX_GROUPING,
        Customer.TO_CUSTOMER_TEXT,
        Customer.TO_CUSTOMER_UNLOADING_POINT,
        Customer.TO_CUST_UNLDG_PT_ADDR_DEPDNT_INFO
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