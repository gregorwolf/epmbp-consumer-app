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
exports.SupplierWithHoldingTax = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var SupplierWithHoldingTaxRequestBuilder_1 = require("./SupplierWithHoldingTaxRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "A_SupplierWithHoldingTax" of service "API_BUSINESS_PARTNER".
 */
var SupplierWithHoldingTax = /** @class */ (function (_super) {
    __extends(SupplierWithHoldingTax, _super);
    function SupplierWithHoldingTax() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `SupplierWithHoldingTax`.
     * @returns A builder that constructs instances of entity type `SupplierWithHoldingTax`.
     */
    SupplierWithHoldingTax.builder = function () {
        return core_1.Entity.entityBuilder(SupplierWithHoldingTax);
    };
    /**
     * Returns a request builder to construct requests for operations on the `SupplierWithHoldingTax` entity type.
     * @returns A `SupplierWithHoldingTax` request builder.
     */
    SupplierWithHoldingTax.requestBuilder = function () {
        return new SupplierWithHoldingTaxRequestBuilder_1.SupplierWithHoldingTaxRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SupplierWithHoldingTax`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SupplierWithHoldingTax`.
     */
    SupplierWithHoldingTax.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, SupplierWithHoldingTax);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    SupplierWithHoldingTax.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for SupplierWithHoldingTax.
     */
    SupplierWithHoldingTax._entityName = 'A_SupplierWithHoldingTax';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for SupplierWithHoldingTax.
     */
    SupplierWithHoldingTax._serviceName = 'API_BUSINESS_PARTNER';
    /**
     * Default url path for the according service.
     */
    SupplierWithHoldingTax._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
    return SupplierWithHoldingTax;
}(core_1.Entity));
exports.SupplierWithHoldingTax = SupplierWithHoldingTax;
(function (SupplierWithHoldingTax) {
    /**
     * Static representation of the [[supplier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierWithHoldingTax.SUPPLIER = new core_1.StringField('Supplier', SupplierWithHoldingTax, 'Edm.String');
    /**
     * Static representation of the [[companyCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierWithHoldingTax.COMPANY_CODE = new core_1.StringField('CompanyCode', SupplierWithHoldingTax, 'Edm.String');
    /**
     * Static representation of the [[withholdingTaxType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierWithHoldingTax.WITHHOLDING_TAX_TYPE = new core_1.StringField('WithholdingTaxType', SupplierWithHoldingTax, 'Edm.String');
    /**
     * Static representation of the [[exemptionDateBegin]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierWithHoldingTax.EXEMPTION_DATE_BEGIN = new core_1.DateField('ExemptionDateBegin', SupplierWithHoldingTax, 'Edm.DateTime');
    /**
     * Static representation of the [[exemptionDateEnd]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierWithHoldingTax.EXEMPTION_DATE_END = new core_1.DateField('ExemptionDateEnd', SupplierWithHoldingTax, 'Edm.DateTime');
    /**
     * Static representation of the [[exemptionReason]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierWithHoldingTax.EXEMPTION_REASON = new core_1.StringField('ExemptionReason', SupplierWithHoldingTax, 'Edm.String');
    /**
     * Static representation of the [[isWithholdingTaxSubject]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierWithHoldingTax.IS_WITHHOLDING_TAX_SUBJECT = new core_1.BooleanField('IsWithholdingTaxSubject', SupplierWithHoldingTax, 'Edm.Boolean');
    /**
     * Static representation of the [[recipientType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierWithHoldingTax.RECIPIENT_TYPE = new core_1.StringField('RecipientType', SupplierWithHoldingTax, 'Edm.String');
    /**
     * Static representation of the [[withholdingTaxCertificate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierWithHoldingTax.WITHHOLDING_TAX_CERTIFICATE = new core_1.StringField('WithholdingTaxCertificate', SupplierWithHoldingTax, 'Edm.String');
    /**
     * Static representation of the [[withholdingTaxCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierWithHoldingTax.WITHHOLDING_TAX_CODE = new core_1.StringField('WithholdingTaxCode', SupplierWithHoldingTax, 'Edm.String');
    /**
     * Static representation of the [[withholdingTaxExmptPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierWithHoldingTax.WITHHOLDING_TAX_EXMPT_PERCENT = new core_1.BigNumberField('WithholdingTaxExmptPercent', SupplierWithHoldingTax, 'Edm.Decimal');
    /**
     * Static representation of the [[withholdingTaxNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierWithHoldingTax.WITHHOLDING_TAX_NUMBER = new core_1.StringField('WithholdingTaxNumber', SupplierWithHoldingTax, 'Edm.String');
    /**
     * Static representation of the [[authorizationGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierWithHoldingTax.AUTHORIZATION_GROUP = new core_1.StringField('AuthorizationGroup', SupplierWithHoldingTax, 'Edm.String');
    /**
     * All fields of the SupplierWithHoldingTax entity.
     */
    SupplierWithHoldingTax._allFields = [
        SupplierWithHoldingTax.SUPPLIER,
        SupplierWithHoldingTax.COMPANY_CODE,
        SupplierWithHoldingTax.WITHHOLDING_TAX_TYPE,
        SupplierWithHoldingTax.EXEMPTION_DATE_BEGIN,
        SupplierWithHoldingTax.EXEMPTION_DATE_END,
        SupplierWithHoldingTax.EXEMPTION_REASON,
        SupplierWithHoldingTax.IS_WITHHOLDING_TAX_SUBJECT,
        SupplierWithHoldingTax.RECIPIENT_TYPE,
        SupplierWithHoldingTax.WITHHOLDING_TAX_CERTIFICATE,
        SupplierWithHoldingTax.WITHHOLDING_TAX_CODE,
        SupplierWithHoldingTax.WITHHOLDING_TAX_EXMPT_PERCENT,
        SupplierWithHoldingTax.WITHHOLDING_TAX_NUMBER,
        SupplierWithHoldingTax.AUTHORIZATION_GROUP
    ];
    /**
     * All fields selector.
     */
    SupplierWithHoldingTax.ALL_FIELDS = new core_1.AllFields('*', SupplierWithHoldingTax);
    /**
     * All key fields of the SupplierWithHoldingTax entity.
     */
    SupplierWithHoldingTax._keyFields = [SupplierWithHoldingTax.SUPPLIER, SupplierWithHoldingTax.COMPANY_CODE, SupplierWithHoldingTax.WITHHOLDING_TAX_TYPE];
    /**
     * Mapping of all key field names to the respective static field property SupplierWithHoldingTax.
     */
    SupplierWithHoldingTax._keys = SupplierWithHoldingTax._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(SupplierWithHoldingTax = exports.SupplierWithHoldingTax || (exports.SupplierWithHoldingTax = {}));
exports.SupplierWithHoldingTax = SupplierWithHoldingTax;
//# sourceMappingURL=SupplierWithHoldingTax.js.map