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
exports.SupplierWithHoldingTax = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
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
     * Returns an entity builder to construct instances of `SupplierWithHoldingTax`.
     * @returns A builder that constructs instances of entity type `SupplierWithHoldingTax`.
     */
    SupplierWithHoldingTax.builder = function () {
        return core_1.EntityV2.entityBuilder(SupplierWithHoldingTax);
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
        return core_1.EntityV2.customFieldSelector(fieldName, SupplierWithHoldingTax);
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
     * Default url path for the according service.
     */
    SupplierWithHoldingTax._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
    return SupplierWithHoldingTax;
}(core_1.EntityV2));
exports.SupplierWithHoldingTax = SupplierWithHoldingTax;
(function (SupplierWithHoldingTax) {
    var _fieldBuilder = new core_1.FieldBuilder(SupplierWithHoldingTax);
    /**
     * Static representation of the [[supplier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierWithHoldingTax.SUPPLIER = _fieldBuilder.buildEdmTypeField('Supplier', 'Edm.String', false);
    /**
     * Static representation of the [[companyCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierWithHoldingTax.COMPANY_CODE = _fieldBuilder.buildEdmTypeField('CompanyCode', 'Edm.String', false);
    /**
     * Static representation of the [[withholdingTaxType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierWithHoldingTax.WITHHOLDING_TAX_TYPE = _fieldBuilder.buildEdmTypeField('WithholdingTaxType', 'Edm.String', false);
    /**
     * Static representation of the [[exemptionDateBegin]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierWithHoldingTax.EXEMPTION_DATE_BEGIN = _fieldBuilder.buildEdmTypeField('ExemptionDateBegin', 'Edm.DateTime', true);
    /**
     * Static representation of the [[exemptionDateEnd]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierWithHoldingTax.EXEMPTION_DATE_END = _fieldBuilder.buildEdmTypeField('ExemptionDateEnd', 'Edm.DateTime', true);
    /**
     * Static representation of the [[exemptionReason]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierWithHoldingTax.EXEMPTION_REASON = _fieldBuilder.buildEdmTypeField('ExemptionReason', 'Edm.String', true);
    /**
     * Static representation of the [[isWithholdingTaxSubject]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierWithHoldingTax.IS_WITHHOLDING_TAX_SUBJECT = _fieldBuilder.buildEdmTypeField('IsWithholdingTaxSubject', 'Edm.Boolean', true);
    /**
     * Static representation of the [[recipientType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierWithHoldingTax.RECIPIENT_TYPE = _fieldBuilder.buildEdmTypeField('RecipientType', 'Edm.String', true);
    /**
     * Static representation of the [[withholdingTaxCertificate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierWithHoldingTax.WITHHOLDING_TAX_CERTIFICATE = _fieldBuilder.buildEdmTypeField('WithholdingTaxCertificate', 'Edm.String', true);
    /**
     * Static representation of the [[withholdingTaxCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierWithHoldingTax.WITHHOLDING_TAX_CODE = _fieldBuilder.buildEdmTypeField('WithholdingTaxCode', 'Edm.String', true);
    /**
     * Static representation of the [[withholdingTaxExmptPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierWithHoldingTax.WITHHOLDING_TAX_EXMPT_PERCENT = _fieldBuilder.buildEdmTypeField('WithholdingTaxExmptPercent', 'Edm.Decimal', true);
    /**
     * Static representation of the [[withholdingTaxNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierWithHoldingTax.WITHHOLDING_TAX_NUMBER = _fieldBuilder.buildEdmTypeField('WithholdingTaxNumber', 'Edm.String', true);
    /**
     * Static representation of the [[authorizationGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierWithHoldingTax.AUTHORIZATION_GROUP = _fieldBuilder.buildEdmTypeField('AuthorizationGroup', 'Edm.String', true);
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