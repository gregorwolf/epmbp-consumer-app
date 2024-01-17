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
exports.BusinessPartnerTaxNumber = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var BusinessPartnerTaxNumberRequestBuilder_1 = require("./BusinessPartnerTaxNumberRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "A_BusinessPartnerTaxNumber" of service "API_BUSINESS_PARTNER".
 */
var BusinessPartnerTaxNumber = /** @class */ (function (_super) {
    __extends(BusinessPartnerTaxNumber, _super);
    function BusinessPartnerTaxNumber() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `BusinessPartnerTaxNumber`.
     * @returns A builder that constructs instances of entity type `BusinessPartnerTaxNumber`.
     */
    BusinessPartnerTaxNumber.builder = function () {
        return core_1.EntityV2.entityBuilder(BusinessPartnerTaxNumber);
    };
    /**
     * Returns a request builder to construct requests for operations on the `BusinessPartnerTaxNumber` entity type.
     * @returns A `BusinessPartnerTaxNumber` request builder.
     */
    BusinessPartnerTaxNumber.requestBuilder = function () {
        return new BusinessPartnerTaxNumberRequestBuilder_1.BusinessPartnerTaxNumberRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `BusinessPartnerTaxNumber`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `BusinessPartnerTaxNumber`.
     */
    BusinessPartnerTaxNumber.customField = function (fieldName) {
        return core_1.EntityV2.customFieldSelector(fieldName, BusinessPartnerTaxNumber);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    BusinessPartnerTaxNumber.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for BusinessPartnerTaxNumber.
     */
    BusinessPartnerTaxNumber._entityName = 'A_BusinessPartnerTaxNumber';
    /**
     * Default url path for the according service.
     */
    BusinessPartnerTaxNumber._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
    return BusinessPartnerTaxNumber;
}(core_1.EntityV2));
exports.BusinessPartnerTaxNumber = BusinessPartnerTaxNumber;
(function (BusinessPartnerTaxNumber) {
    var _fieldBuilder = new core_1.FieldBuilder(BusinessPartnerTaxNumber);
    /**
     * Static representation of the [[businessPartner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerTaxNumber.BUSINESS_PARTNER = _fieldBuilder.buildEdmTypeField('BusinessPartner', 'Edm.String', false);
    /**
     * Static representation of the [[bpTaxType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerTaxNumber.BP_TAX_TYPE = _fieldBuilder.buildEdmTypeField('BPTaxType', 'Edm.String', false);
    /**
     * Static representation of the [[bpTaxNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerTaxNumber.BP_TAX_NUMBER = _fieldBuilder.buildEdmTypeField('BPTaxNumber', 'Edm.String', true);
    /**
     * Static representation of the [[bpTaxLongNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerTaxNumber.BP_TAX_LONG_NUMBER = _fieldBuilder.buildEdmTypeField('BPTaxLongNumber', 'Edm.String', true);
    /**
     * Static representation of the [[authorizationGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerTaxNumber.AUTHORIZATION_GROUP = _fieldBuilder.buildEdmTypeField('AuthorizationGroup', 'Edm.String', true);
    /**
     * All fields of the BusinessPartnerTaxNumber entity.
     */
    BusinessPartnerTaxNumber._allFields = [
        BusinessPartnerTaxNumber.BUSINESS_PARTNER,
        BusinessPartnerTaxNumber.BP_TAX_TYPE,
        BusinessPartnerTaxNumber.BP_TAX_NUMBER,
        BusinessPartnerTaxNumber.BP_TAX_LONG_NUMBER,
        BusinessPartnerTaxNumber.AUTHORIZATION_GROUP
    ];
    /**
     * All fields selector.
     */
    BusinessPartnerTaxNumber.ALL_FIELDS = new core_1.AllFields('*', BusinessPartnerTaxNumber);
    /**
     * All key fields of the BusinessPartnerTaxNumber entity.
     */
    BusinessPartnerTaxNumber._keyFields = [BusinessPartnerTaxNumber.BUSINESS_PARTNER, BusinessPartnerTaxNumber.BP_TAX_TYPE];
    /**
     * Mapping of all key field names to the respective static field property BusinessPartnerTaxNumber.
     */
    BusinessPartnerTaxNumber._keys = BusinessPartnerTaxNumber._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(BusinessPartnerTaxNumber = exports.BusinessPartnerTaxNumber || (exports.BusinessPartnerTaxNumber = {}));
exports.BusinessPartnerTaxNumber = BusinessPartnerTaxNumber;
//# sourceMappingURL=BusinessPartnerTaxNumber.js.map