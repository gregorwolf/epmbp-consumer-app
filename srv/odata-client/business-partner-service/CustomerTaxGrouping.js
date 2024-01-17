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
exports.CustomerTaxGrouping = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var CustomerTaxGroupingRequestBuilder_1 = require("./CustomerTaxGroupingRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "A_CustomerTaxGrouping" of service "API_BUSINESS_PARTNER".
 */
var CustomerTaxGrouping = /** @class */ (function (_super) {
    __extends(CustomerTaxGrouping, _super);
    function CustomerTaxGrouping() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `CustomerTaxGrouping`.
     * @returns A builder that constructs instances of entity type `CustomerTaxGrouping`.
     */
    CustomerTaxGrouping.builder = function () {
        return core_1.EntityV2.entityBuilder(CustomerTaxGrouping);
    };
    /**
     * Returns a request builder to construct requests for operations on the `CustomerTaxGrouping` entity type.
     * @returns A `CustomerTaxGrouping` request builder.
     */
    CustomerTaxGrouping.requestBuilder = function () {
        return new CustomerTaxGroupingRequestBuilder_1.CustomerTaxGroupingRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CustomerTaxGrouping`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CustomerTaxGrouping`.
     */
    CustomerTaxGrouping.customField = function (fieldName) {
        return core_1.EntityV2.customFieldSelector(fieldName, CustomerTaxGrouping);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    CustomerTaxGrouping.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for CustomerTaxGrouping.
     */
    CustomerTaxGrouping._entityName = 'A_CustomerTaxGrouping';
    /**
     * Default url path for the according service.
     */
    CustomerTaxGrouping._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
    return CustomerTaxGrouping;
}(core_1.EntityV2));
exports.CustomerTaxGrouping = CustomerTaxGrouping;
(function (CustomerTaxGrouping) {
    var _fieldBuilder = new core_1.FieldBuilder(CustomerTaxGrouping);
    /**
     * Static representation of the [[customer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerTaxGrouping.CUSTOMER = _fieldBuilder.buildEdmTypeField('Customer', 'Edm.String', false);
    /**
     * Static representation of the [[customerTaxGroupingCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerTaxGrouping.CUSTOMER_TAX_GROUPING_CODE = _fieldBuilder.buildEdmTypeField('CustomerTaxGroupingCode', 'Edm.String', false);
    /**
     * Static representation of the [[custTaxGrpExemptionCertificate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerTaxGrouping.CUST_TAX_GRP_EXEMPTION_CERTIFICATE = _fieldBuilder.buildEdmTypeField('CustTaxGrpExemptionCertificate', 'Edm.String', true);
    /**
     * Static representation of the [[custTaxGroupExemptionRate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerTaxGrouping.CUST_TAX_GROUP_EXEMPTION_RATE = _fieldBuilder.buildEdmTypeField('CustTaxGroupExemptionRate', 'Edm.Decimal', true);
    /**
     * Static representation of the [[custTaxGroupExemptionStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerTaxGrouping.CUST_TAX_GROUP_EXEMPTION_START_DATE = _fieldBuilder.buildEdmTypeField('CustTaxGroupExemptionStartDate', 'Edm.DateTime', true);
    /**
     * Static representation of the [[custTaxGroupExemptionEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerTaxGrouping.CUST_TAX_GROUP_EXEMPTION_END_DATE = _fieldBuilder.buildEdmTypeField('CustTaxGroupExemptionEndDate', 'Edm.DateTime', true);
    /**
     * Static representation of the [[custTaxGroupSubjectedStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerTaxGrouping.CUST_TAX_GROUP_SUBJECTED_START_DATE = _fieldBuilder.buildEdmTypeField('CustTaxGroupSubjectedStartDate', 'Edm.DateTime', true);
    /**
     * Static representation of the [[custTaxGroupSubjectedEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerTaxGrouping.CUST_TAX_GROUP_SUBJECTED_END_DATE = _fieldBuilder.buildEdmTypeField('CustTaxGroupSubjectedEndDate', 'Edm.DateTime', true);
    /**
     * All fields of the CustomerTaxGrouping entity.
     */
    CustomerTaxGrouping._allFields = [
        CustomerTaxGrouping.CUSTOMER,
        CustomerTaxGrouping.CUSTOMER_TAX_GROUPING_CODE,
        CustomerTaxGrouping.CUST_TAX_GRP_EXEMPTION_CERTIFICATE,
        CustomerTaxGrouping.CUST_TAX_GROUP_EXEMPTION_RATE,
        CustomerTaxGrouping.CUST_TAX_GROUP_EXEMPTION_START_DATE,
        CustomerTaxGrouping.CUST_TAX_GROUP_EXEMPTION_END_DATE,
        CustomerTaxGrouping.CUST_TAX_GROUP_SUBJECTED_START_DATE,
        CustomerTaxGrouping.CUST_TAX_GROUP_SUBJECTED_END_DATE
    ];
    /**
     * All fields selector.
     */
    CustomerTaxGrouping.ALL_FIELDS = new core_1.AllFields('*', CustomerTaxGrouping);
    /**
     * All key fields of the CustomerTaxGrouping entity.
     */
    CustomerTaxGrouping._keyFields = [CustomerTaxGrouping.CUSTOMER, CustomerTaxGrouping.CUSTOMER_TAX_GROUPING_CODE];
    /**
     * Mapping of all key field names to the respective static field property CustomerTaxGrouping.
     */
    CustomerTaxGrouping._keys = CustomerTaxGrouping._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(CustomerTaxGrouping = exports.CustomerTaxGrouping || (exports.CustomerTaxGrouping = {}));
exports.CustomerTaxGrouping = CustomerTaxGrouping;
//# sourceMappingURL=CustomerTaxGrouping.js.map