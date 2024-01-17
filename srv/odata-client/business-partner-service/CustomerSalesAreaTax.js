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
exports.CustomerSalesAreaTax = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var CustomerSalesAreaTaxRequestBuilder_1 = require("./CustomerSalesAreaTaxRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "A_CustomerSalesAreaTax" of service "API_BUSINESS_PARTNER".
 */
var CustomerSalesAreaTax = /** @class */ (function (_super) {
    __extends(CustomerSalesAreaTax, _super);
    function CustomerSalesAreaTax() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `CustomerSalesAreaTax`.
     * @returns A builder that constructs instances of entity type `CustomerSalesAreaTax`.
     */
    CustomerSalesAreaTax.builder = function () {
        return core_1.EntityV2.entityBuilder(CustomerSalesAreaTax);
    };
    /**
     * Returns a request builder to construct requests for operations on the `CustomerSalesAreaTax` entity type.
     * @returns A `CustomerSalesAreaTax` request builder.
     */
    CustomerSalesAreaTax.requestBuilder = function () {
        return new CustomerSalesAreaTaxRequestBuilder_1.CustomerSalesAreaTaxRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CustomerSalesAreaTax`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CustomerSalesAreaTax`.
     */
    CustomerSalesAreaTax.customField = function (fieldName) {
        return core_1.EntityV2.customFieldSelector(fieldName, CustomerSalesAreaTax);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    CustomerSalesAreaTax.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for CustomerSalesAreaTax.
     */
    CustomerSalesAreaTax._entityName = 'A_CustomerSalesAreaTax';
    /**
     * Default url path for the according service.
     */
    CustomerSalesAreaTax._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
    return CustomerSalesAreaTax;
}(core_1.EntityV2));
exports.CustomerSalesAreaTax = CustomerSalesAreaTax;
var CustSlsAreaAddrDepdntTaxInfo_1 = require("./CustSlsAreaAddrDepdntTaxInfo");
(function (CustomerSalesAreaTax) {
    var _fieldBuilder = new core_1.FieldBuilder(CustomerSalesAreaTax);
    /**
     * Static representation of the [[customer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesAreaTax.CUSTOMER = _fieldBuilder.buildEdmTypeField('Customer', 'Edm.String', false);
    /**
     * Static representation of the [[salesOrganization]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesAreaTax.SALES_ORGANIZATION = _fieldBuilder.buildEdmTypeField('SalesOrganization', 'Edm.String', false);
    /**
     * Static representation of the [[distributionChannel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesAreaTax.DISTRIBUTION_CHANNEL = _fieldBuilder.buildEdmTypeField('DistributionChannel', 'Edm.String', false);
    /**
     * Static representation of the [[division]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesAreaTax.DIVISION = _fieldBuilder.buildEdmTypeField('Division', 'Edm.String', false);
    /**
     * Static representation of the [[departureCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesAreaTax.DEPARTURE_COUNTRY = _fieldBuilder.buildEdmTypeField('DepartureCountry', 'Edm.String', false);
    /**
     * Static representation of the [[customerTaxCategory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesAreaTax.CUSTOMER_TAX_CATEGORY = _fieldBuilder.buildEdmTypeField('CustomerTaxCategory', 'Edm.String', false);
    /**
     * Static representation of the [[customerTaxClassification]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesAreaTax.CUSTOMER_TAX_CLASSIFICATION = _fieldBuilder.buildEdmTypeField('CustomerTaxClassification', 'Edm.String', true);
    /**
     * Static representation of the one-to-many navigation property [[toSlsAreaAddrDepdntTax]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerSalesAreaTax.TO_SLS_AREA_ADDR_DEPDNT_TAX = new core_1.Link('to_SlsAreaAddrDepdntTax', CustomerSalesAreaTax, CustSlsAreaAddrDepdntTaxInfo_1.CustSlsAreaAddrDepdntTaxInfo);
    /**
     * All fields of the CustomerSalesAreaTax entity.
     */
    CustomerSalesAreaTax._allFields = [
        CustomerSalesAreaTax.CUSTOMER,
        CustomerSalesAreaTax.SALES_ORGANIZATION,
        CustomerSalesAreaTax.DISTRIBUTION_CHANNEL,
        CustomerSalesAreaTax.DIVISION,
        CustomerSalesAreaTax.DEPARTURE_COUNTRY,
        CustomerSalesAreaTax.CUSTOMER_TAX_CATEGORY,
        CustomerSalesAreaTax.CUSTOMER_TAX_CLASSIFICATION,
        CustomerSalesAreaTax.TO_SLS_AREA_ADDR_DEPDNT_TAX
    ];
    /**
     * All fields selector.
     */
    CustomerSalesAreaTax.ALL_FIELDS = new core_1.AllFields('*', CustomerSalesAreaTax);
    /**
     * All key fields of the CustomerSalesAreaTax entity.
     */
    CustomerSalesAreaTax._keyFields = [CustomerSalesAreaTax.CUSTOMER, CustomerSalesAreaTax.SALES_ORGANIZATION, CustomerSalesAreaTax.DISTRIBUTION_CHANNEL, CustomerSalesAreaTax.DIVISION, CustomerSalesAreaTax.DEPARTURE_COUNTRY, CustomerSalesAreaTax.CUSTOMER_TAX_CATEGORY];
    /**
     * Mapping of all key field names to the respective static field property CustomerSalesAreaTax.
     */
    CustomerSalesAreaTax._keys = CustomerSalesAreaTax._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(CustomerSalesAreaTax = exports.CustomerSalesAreaTax || (exports.CustomerSalesAreaTax = {}));
exports.CustomerSalesAreaTax = CustomerSalesAreaTax;
//# sourceMappingURL=CustomerSalesAreaTax.js.map