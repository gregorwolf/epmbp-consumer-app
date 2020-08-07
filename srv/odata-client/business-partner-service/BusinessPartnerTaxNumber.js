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
exports.BusinessPartnerTaxNumber = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
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
     * Returns an entity builder to construct instances `BusinessPartnerTaxNumber`.
     * @returns A builder that constructs instances of entity type `BusinessPartnerTaxNumber`.
     */
    BusinessPartnerTaxNumber.builder = function () {
        return core_1.Entity.entityBuilder(BusinessPartnerTaxNumber);
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
        return core_1.Entity.customFieldSelector(fieldName, BusinessPartnerTaxNumber);
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
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for BusinessPartnerTaxNumber.
     */
    BusinessPartnerTaxNumber._serviceName = 'API_BUSINESS_PARTNER';
    /**
     * Default url path for the according service.
     */
    BusinessPartnerTaxNumber._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
    return BusinessPartnerTaxNumber;
}(core_1.Entity));
exports.BusinessPartnerTaxNumber = BusinessPartnerTaxNumber;
(function (BusinessPartnerTaxNumber) {
    /**
     * Static representation of the [[businessPartner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerTaxNumber.BUSINESS_PARTNER = new core_1.StringField('BusinessPartner', BusinessPartnerTaxNumber, 'Edm.String');
    /**
     * Static representation of the [[bpTaxType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerTaxNumber.BP_TAX_TYPE = new core_1.StringField('BPTaxType', BusinessPartnerTaxNumber, 'Edm.String');
    /**
     * Static representation of the [[bpTaxNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerTaxNumber.BP_TAX_NUMBER = new core_1.StringField('BPTaxNumber', BusinessPartnerTaxNumber, 'Edm.String');
    /**
     * Static representation of the [[bpTaxLongNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerTaxNumber.BP_TAX_LONG_NUMBER = new core_1.StringField('BPTaxLongNumber', BusinessPartnerTaxNumber, 'Edm.String');
    /**
     * Static representation of the [[authorizationGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerTaxNumber.AUTHORIZATION_GROUP = new core_1.StringField('AuthorizationGroup', BusinessPartnerTaxNumber, 'Edm.String');
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