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
exports.CustomerWithHoldingTax = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
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
     * Returns an entity builder to construct instances `CustomerWithHoldingTax`.
     * @returns A builder that constructs instances of entity type `CustomerWithHoldingTax`.
     */
    CustomerWithHoldingTax.builder = function () {
        return core_1.Entity.entityBuilder(CustomerWithHoldingTax);
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
        return core_1.Entity.customFieldSelector(fieldName, CustomerWithHoldingTax);
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
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for CustomerWithHoldingTax.
     */
    CustomerWithHoldingTax._serviceName = 'API_BUSINESS_PARTNER';
    /**
     * Default url path for the according service.
     */
    CustomerWithHoldingTax._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
    return CustomerWithHoldingTax;
}(core_1.Entity));
exports.CustomerWithHoldingTax = CustomerWithHoldingTax;
(function (CustomerWithHoldingTax) {
    /**
     * Static representation of the [[customer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerWithHoldingTax.CUSTOMER = new core_1.StringField('Customer', CustomerWithHoldingTax, 'Edm.String');
    /**
     * Static representation of the [[companyCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerWithHoldingTax.COMPANY_CODE = new core_1.StringField('CompanyCode', CustomerWithHoldingTax, 'Edm.String');
    /**
     * Static representation of the [[withholdingTaxType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerWithHoldingTax.WITHHOLDING_TAX_TYPE = new core_1.StringField('WithholdingTaxType', CustomerWithHoldingTax, 'Edm.String');
    /**
     * Static representation of the [[withholdingTaxCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerWithHoldingTax.WITHHOLDING_TAX_CODE = new core_1.StringField('WithholdingTaxCode', CustomerWithHoldingTax, 'Edm.String');
    /**
     * Static representation of the [[withholdingTaxAgent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerWithHoldingTax.WITHHOLDING_TAX_AGENT = new core_1.BooleanField('WithholdingTaxAgent', CustomerWithHoldingTax, 'Edm.Boolean');
    /**
     * Static representation of the [[obligationDateBegin]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerWithHoldingTax.OBLIGATION_DATE_BEGIN = new core_1.DateField('ObligationDateBegin', CustomerWithHoldingTax, 'Edm.DateTime');
    /**
     * Static representation of the [[obligationDateEnd]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerWithHoldingTax.OBLIGATION_DATE_END = new core_1.DateField('ObligationDateEnd', CustomerWithHoldingTax, 'Edm.DateTime');
    /**
     * Static representation of the [[withholdingTaxNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerWithHoldingTax.WITHHOLDING_TAX_NUMBER = new core_1.StringField('WithholdingTaxNumber', CustomerWithHoldingTax, 'Edm.String');
    /**
     * Static representation of the [[withholdingTaxCertificate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerWithHoldingTax.WITHHOLDING_TAX_CERTIFICATE = new core_1.StringField('WithholdingTaxCertificate', CustomerWithHoldingTax, 'Edm.String');
    /**
     * Static representation of the [[withholdingTaxExmptPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerWithHoldingTax.WITHHOLDING_TAX_EXMPT_PERCENT = new core_1.BigNumberField('WithholdingTaxExmptPercent', CustomerWithHoldingTax, 'Edm.Decimal');
    /**
     * Static representation of the [[exemptionDateBegin]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerWithHoldingTax.EXEMPTION_DATE_BEGIN = new core_1.DateField('ExemptionDateBegin', CustomerWithHoldingTax, 'Edm.DateTime');
    /**
     * Static representation of the [[exemptionDateEnd]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerWithHoldingTax.EXEMPTION_DATE_END = new core_1.DateField('ExemptionDateEnd', CustomerWithHoldingTax, 'Edm.DateTime');
    /**
     * Static representation of the [[exemptionReason]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerWithHoldingTax.EXEMPTION_REASON = new core_1.StringField('ExemptionReason', CustomerWithHoldingTax, 'Edm.String');
    /**
     * Static representation of the [[authorizationGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerWithHoldingTax.AUTHORIZATION_GROUP = new core_1.StringField('AuthorizationGroup', CustomerWithHoldingTax, 'Edm.String');
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