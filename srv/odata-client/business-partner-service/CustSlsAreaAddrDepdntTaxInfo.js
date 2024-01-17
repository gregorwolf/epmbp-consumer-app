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
exports.CustSlsAreaAddrDepdntTaxInfo = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var CustSlsAreaAddrDepdntTaxInfoRequestBuilder_1 = require("./CustSlsAreaAddrDepdntTaxInfoRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "A_CustSlsAreaAddrDepdntTaxInfo" of service "API_BUSINESS_PARTNER".
 */
var CustSlsAreaAddrDepdntTaxInfo = /** @class */ (function (_super) {
    __extends(CustSlsAreaAddrDepdntTaxInfo, _super);
    function CustSlsAreaAddrDepdntTaxInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `CustSlsAreaAddrDepdntTaxInfo`.
     * @returns A builder that constructs instances of entity type `CustSlsAreaAddrDepdntTaxInfo`.
     */
    CustSlsAreaAddrDepdntTaxInfo.builder = function () {
        return core_1.EntityV2.entityBuilder(CustSlsAreaAddrDepdntTaxInfo);
    };
    /**
     * Returns a request builder to construct requests for operations on the `CustSlsAreaAddrDepdntTaxInfo` entity type.
     * @returns A `CustSlsAreaAddrDepdntTaxInfo` request builder.
     */
    CustSlsAreaAddrDepdntTaxInfo.requestBuilder = function () {
        return new CustSlsAreaAddrDepdntTaxInfoRequestBuilder_1.CustSlsAreaAddrDepdntTaxInfoRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CustSlsAreaAddrDepdntTaxInfo`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CustSlsAreaAddrDepdntTaxInfo`.
     */
    CustSlsAreaAddrDepdntTaxInfo.customField = function (fieldName) {
        return core_1.EntityV2.customFieldSelector(fieldName, CustSlsAreaAddrDepdntTaxInfo);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    CustSlsAreaAddrDepdntTaxInfo.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for CustSlsAreaAddrDepdntTaxInfo.
     */
    CustSlsAreaAddrDepdntTaxInfo._entityName = 'A_CustSlsAreaAddrDepdntTaxInfo';
    /**
     * Default url path for the according service.
     */
    CustSlsAreaAddrDepdntTaxInfo._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
    return CustSlsAreaAddrDepdntTaxInfo;
}(core_1.EntityV2));
exports.CustSlsAreaAddrDepdntTaxInfo = CustSlsAreaAddrDepdntTaxInfo;
(function (CustSlsAreaAddrDepdntTaxInfo) {
    var _fieldBuilder = new core_1.FieldBuilder(CustSlsAreaAddrDepdntTaxInfo);
    /**
     * Static representation of the [[customer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustSlsAreaAddrDepdntTaxInfo.CUSTOMER = _fieldBuilder.buildEdmTypeField('Customer', 'Edm.String', false);
    /**
     * Static representation of the [[salesOrganization]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustSlsAreaAddrDepdntTaxInfo.SALES_ORGANIZATION = _fieldBuilder.buildEdmTypeField('SalesOrganization', 'Edm.String', false);
    /**
     * Static representation of the [[distributionChannel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustSlsAreaAddrDepdntTaxInfo.DISTRIBUTION_CHANNEL = _fieldBuilder.buildEdmTypeField('DistributionChannel', 'Edm.String', false);
    /**
     * Static representation of the [[division]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustSlsAreaAddrDepdntTaxInfo.DIVISION = _fieldBuilder.buildEdmTypeField('Division', 'Edm.String', false);
    /**
     * Static representation of the [[addressId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustSlsAreaAddrDepdntTaxInfo.ADDRESS_ID = _fieldBuilder.buildEdmTypeField('AddressID', 'Edm.String', false);
    /**
     * Static representation of the [[departureCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustSlsAreaAddrDepdntTaxInfo.DEPARTURE_COUNTRY = _fieldBuilder.buildEdmTypeField('DepartureCountry', 'Edm.String', false);
    /**
     * Static representation of the [[customerTaxCategory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustSlsAreaAddrDepdntTaxInfo.CUSTOMER_TAX_CATEGORY = _fieldBuilder.buildEdmTypeField('CustomerTaxCategory', 'Edm.String', false);
    /**
     * Static representation of the [[customerTaxClassification]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustSlsAreaAddrDepdntTaxInfo.CUSTOMER_TAX_CLASSIFICATION = _fieldBuilder.buildEdmTypeField('CustomerTaxClassification', 'Edm.String', true);
    /**
     * All fields of the CustSlsAreaAddrDepdntTaxInfo entity.
     */
    CustSlsAreaAddrDepdntTaxInfo._allFields = [
        CustSlsAreaAddrDepdntTaxInfo.CUSTOMER,
        CustSlsAreaAddrDepdntTaxInfo.SALES_ORGANIZATION,
        CustSlsAreaAddrDepdntTaxInfo.DISTRIBUTION_CHANNEL,
        CustSlsAreaAddrDepdntTaxInfo.DIVISION,
        CustSlsAreaAddrDepdntTaxInfo.ADDRESS_ID,
        CustSlsAreaAddrDepdntTaxInfo.DEPARTURE_COUNTRY,
        CustSlsAreaAddrDepdntTaxInfo.CUSTOMER_TAX_CATEGORY,
        CustSlsAreaAddrDepdntTaxInfo.CUSTOMER_TAX_CLASSIFICATION
    ];
    /**
     * All fields selector.
     */
    CustSlsAreaAddrDepdntTaxInfo.ALL_FIELDS = new core_1.AllFields('*', CustSlsAreaAddrDepdntTaxInfo);
    /**
     * All key fields of the CustSlsAreaAddrDepdntTaxInfo entity.
     */
    CustSlsAreaAddrDepdntTaxInfo._keyFields = [CustSlsAreaAddrDepdntTaxInfo.CUSTOMER, CustSlsAreaAddrDepdntTaxInfo.SALES_ORGANIZATION, CustSlsAreaAddrDepdntTaxInfo.DISTRIBUTION_CHANNEL, CustSlsAreaAddrDepdntTaxInfo.DIVISION, CustSlsAreaAddrDepdntTaxInfo.ADDRESS_ID, CustSlsAreaAddrDepdntTaxInfo.DEPARTURE_COUNTRY, CustSlsAreaAddrDepdntTaxInfo.CUSTOMER_TAX_CATEGORY];
    /**
     * Mapping of all key field names to the respective static field property CustSlsAreaAddrDepdntTaxInfo.
     */
    CustSlsAreaAddrDepdntTaxInfo._keys = CustSlsAreaAddrDepdntTaxInfo._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(CustSlsAreaAddrDepdntTaxInfo = exports.CustSlsAreaAddrDepdntTaxInfo || (exports.CustSlsAreaAddrDepdntTaxInfo = {}));
exports.CustSlsAreaAddrDepdntTaxInfo = CustSlsAreaAddrDepdntTaxInfo;
//# sourceMappingURL=CustSlsAreaAddrDepdntTaxInfo.js.map