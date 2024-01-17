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
exports.CustomerWithHoldingTax = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var CustomerWithHoldingTaxRequestBuilder_1 = require("./CustomerWithHoldingTaxRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "A_CustomerWithHoldingTax" of service "API_BUSINESS_PARTNER".
 */
var CustomerWithHoldingTax = /** @class */ (function (_super) {
    __extends(CustomerWithHoldingTax, _super);
    function CustomerWithHoldingTax() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `CustomerWithHoldingTax`.
     * @returns A builder that constructs instances of entity type `CustomerWithHoldingTax`.
     */
    CustomerWithHoldingTax.builder = function () {
        return core_1.EntityV2.entityBuilder(CustomerWithHoldingTax);
    };
    /**
     * Returns a request builder to construct requests for operations on the `CustomerWithHoldingTax` entity type.
     * @returns A `CustomerWithHoldingTax` request builder.
     */
    CustomerWithHoldingTax.requestBuilder = function () {
        return new CustomerWithHoldingTaxRequestBuilder_1.CustomerWithHoldingTaxRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CustomerWithHoldingTax`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CustomerWithHoldingTax`.
     */
    CustomerWithHoldingTax.customField = function (fieldName) {
        return core_1.EntityV2.customFieldSelector(fieldName, CustomerWithHoldingTax);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    CustomerWithHoldingTax.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for CustomerWithHoldingTax.
     */
    CustomerWithHoldingTax._entityName = 'A_CustomerWithHoldingTax';
    /**
     * Default url path for the according service.
     */
    CustomerWithHoldingTax._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
    return CustomerWithHoldingTax;
}(core_1.EntityV2));
exports.CustomerWithHoldingTax = CustomerWithHoldingTax;
(function (CustomerWithHoldingTax) {
    var _fieldBuilder = new core_1.FieldBuilder(CustomerWithHoldingTax);
    /**
     * Static representation of the [[customer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerWithHoldingTax.CUSTOMER = _fieldBuilder.buildEdmTypeField('Customer', 'Edm.String', false);
    /**
     * Static representation of the [[companyCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerWithHoldingTax.COMPANY_CODE = _fieldBuilder.buildEdmTypeField('CompanyCode', 'Edm.String', false);
    /**
     * Static representation of the [[withholdingTaxType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerWithHoldingTax.WITHHOLDING_TAX_TYPE = _fieldBuilder.buildEdmTypeField('WithholdingTaxType', 'Edm.String', false);
    /**
     * Static representation of the [[withholdingTaxCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerWithHoldingTax.WITHHOLDING_TAX_CODE = _fieldBuilder.buildEdmTypeField('WithholdingTaxCode', 'Edm.String', true);
    /**
     * Static representation of the [[withholdingTaxAgent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerWithHoldingTax.WITHHOLDING_TAX_AGENT = _fieldBuilder.buildEdmTypeField('WithholdingTaxAgent', 'Edm.Boolean', true);
    /**
     * Static representation of the [[obligationDateBegin]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerWithHoldingTax.OBLIGATION_DATE_BEGIN = _fieldBuilder.buildEdmTypeField('ObligationDateBegin', 'Edm.DateTime', true);
    /**
     * Static representation of the [[obligationDateEnd]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerWithHoldingTax.OBLIGATION_DATE_END = _fieldBuilder.buildEdmTypeField('ObligationDateEnd', 'Edm.DateTime', true);
    /**
     * Static representation of the [[withholdingTaxNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerWithHoldingTax.WITHHOLDING_TAX_NUMBER = _fieldBuilder.buildEdmTypeField('WithholdingTaxNumber', 'Edm.String', true);
    /**
     * Static representation of the [[withholdingTaxCertificate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerWithHoldingTax.WITHHOLDING_TAX_CERTIFICATE = _fieldBuilder.buildEdmTypeField('WithholdingTaxCertificate', 'Edm.String', true);
    /**
     * Static representation of the [[withholdingTaxExmptPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerWithHoldingTax.WITHHOLDING_TAX_EXMPT_PERCENT = _fieldBuilder.buildEdmTypeField('WithholdingTaxExmptPercent', 'Edm.Decimal', true);
    /**
     * Static representation of the [[exemptionDateBegin]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerWithHoldingTax.EXEMPTION_DATE_BEGIN = _fieldBuilder.buildEdmTypeField('ExemptionDateBegin', 'Edm.DateTime', true);
    /**
     * Static representation of the [[exemptionDateEnd]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerWithHoldingTax.EXEMPTION_DATE_END = _fieldBuilder.buildEdmTypeField('ExemptionDateEnd', 'Edm.DateTime', true);
    /**
     * Static representation of the [[exemptionReason]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerWithHoldingTax.EXEMPTION_REASON = _fieldBuilder.buildEdmTypeField('ExemptionReason', 'Edm.String', true);
    /**
     * Static representation of the [[authorizationGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerWithHoldingTax.AUTHORIZATION_GROUP = _fieldBuilder.buildEdmTypeField('AuthorizationGroup', 'Edm.String', true);
    /**
     * All fields of the CustomerWithHoldingTax entity.
     */
    CustomerWithHoldingTax._allFields = [
        CustomerWithHoldingTax.CUSTOMER,
        CustomerWithHoldingTax.COMPANY_CODE,
        CustomerWithHoldingTax.WITHHOLDING_TAX_TYPE,
        CustomerWithHoldingTax.WITHHOLDING_TAX_CODE,
        CustomerWithHoldingTax.WITHHOLDING_TAX_AGENT,
        CustomerWithHoldingTax.OBLIGATION_DATE_BEGIN,
        CustomerWithHoldingTax.OBLIGATION_DATE_END,
        CustomerWithHoldingTax.WITHHOLDING_TAX_NUMBER,
        CustomerWithHoldingTax.WITHHOLDING_TAX_CERTIFICATE,
        CustomerWithHoldingTax.WITHHOLDING_TAX_EXMPT_PERCENT,
        CustomerWithHoldingTax.EXEMPTION_DATE_BEGIN,
        CustomerWithHoldingTax.EXEMPTION_DATE_END,
        CustomerWithHoldingTax.EXEMPTION_REASON,
        CustomerWithHoldingTax.AUTHORIZATION_GROUP
    ];
    /**
     * All fields selector.
     */
    CustomerWithHoldingTax.ALL_FIELDS = new core_1.AllFields('*', CustomerWithHoldingTax);
    /**
     * All key fields of the CustomerWithHoldingTax entity.
     */
    CustomerWithHoldingTax._keyFields = [CustomerWithHoldingTax.CUSTOMER, CustomerWithHoldingTax.COMPANY_CODE, CustomerWithHoldingTax.WITHHOLDING_TAX_TYPE];
    /**
     * Mapping of all key field names to the respective static field property CustomerWithHoldingTax.
     */
    CustomerWithHoldingTax._keys = CustomerWithHoldingTax._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(CustomerWithHoldingTax = exports.CustomerWithHoldingTax || (exports.CustomerWithHoldingTax = {}));
exports.CustomerWithHoldingTax = CustomerWithHoldingTax;
//# sourceMappingURL=CustomerWithHoldingTax.js.map