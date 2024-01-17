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
exports.CustSlsAreaAddrDepdntInfo = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var CustSlsAreaAddrDepdntInfoRequestBuilder_1 = require("./CustSlsAreaAddrDepdntInfoRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "A_CustSlsAreaAddrDepdntInfo" of service "API_BUSINESS_PARTNER".
 */
var CustSlsAreaAddrDepdntInfo = /** @class */ (function (_super) {
    __extends(CustSlsAreaAddrDepdntInfo, _super);
    function CustSlsAreaAddrDepdntInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `CustSlsAreaAddrDepdntInfo`.
     * @returns A builder that constructs instances of entity type `CustSlsAreaAddrDepdntInfo`.
     */
    CustSlsAreaAddrDepdntInfo.builder = function () {
        return core_1.EntityV2.entityBuilder(CustSlsAreaAddrDepdntInfo);
    };
    /**
     * Returns a request builder to construct requests for operations on the `CustSlsAreaAddrDepdntInfo` entity type.
     * @returns A `CustSlsAreaAddrDepdntInfo` request builder.
     */
    CustSlsAreaAddrDepdntInfo.requestBuilder = function () {
        return new CustSlsAreaAddrDepdntInfoRequestBuilder_1.CustSlsAreaAddrDepdntInfoRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CustSlsAreaAddrDepdntInfo`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CustSlsAreaAddrDepdntInfo`.
     */
    CustSlsAreaAddrDepdntInfo.customField = function (fieldName) {
        return core_1.EntityV2.customFieldSelector(fieldName, CustSlsAreaAddrDepdntInfo);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    CustSlsAreaAddrDepdntInfo.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for CustSlsAreaAddrDepdntInfo.
     */
    CustSlsAreaAddrDepdntInfo._entityName = 'A_CustSlsAreaAddrDepdntInfo';
    /**
     * Default url path for the according service.
     */
    CustSlsAreaAddrDepdntInfo._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
    return CustSlsAreaAddrDepdntInfo;
}(core_1.EntityV2));
exports.CustSlsAreaAddrDepdntInfo = CustSlsAreaAddrDepdntInfo;
(function (CustSlsAreaAddrDepdntInfo) {
    var _fieldBuilder = new core_1.FieldBuilder(CustSlsAreaAddrDepdntInfo);
    /**
     * Static representation of the [[customer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustSlsAreaAddrDepdntInfo.CUSTOMER = _fieldBuilder.buildEdmTypeField('Customer', 'Edm.String', false);
    /**
     * Static representation of the [[salesOrganization]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustSlsAreaAddrDepdntInfo.SALES_ORGANIZATION = _fieldBuilder.buildEdmTypeField('SalesOrganization', 'Edm.String', false);
    /**
     * Static representation of the [[distributionChannel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustSlsAreaAddrDepdntInfo.DISTRIBUTION_CHANNEL = _fieldBuilder.buildEdmTypeField('DistributionChannel', 'Edm.String', false);
    /**
     * Static representation of the [[division]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustSlsAreaAddrDepdntInfo.DIVISION = _fieldBuilder.buildEdmTypeField('Division', 'Edm.String', false);
    /**
     * Static representation of the [[addressId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustSlsAreaAddrDepdntInfo.ADDRESS_ID = _fieldBuilder.buildEdmTypeField('AddressID', 'Edm.String', false);
    /**
     * Static representation of the [[incotermsClassification]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustSlsAreaAddrDepdntInfo.INCOTERMS_CLASSIFICATION = _fieldBuilder.buildEdmTypeField('IncotermsClassification', 'Edm.String', true);
    /**
     * Static representation of the [[incotermsLocation1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustSlsAreaAddrDepdntInfo.INCOTERMS_LOCATION_1 = _fieldBuilder.buildEdmTypeField('IncotermsLocation1', 'Edm.String', true);
    /**
     * Static representation of the [[incotermsLocation2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustSlsAreaAddrDepdntInfo.INCOTERMS_LOCATION_2 = _fieldBuilder.buildEdmTypeField('IncotermsLocation2', 'Edm.String', true);
    /**
     * Static representation of the [[incotermsSupChnLoc1AddlUuid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustSlsAreaAddrDepdntInfo.INCOTERMS_SUP_CHN_LOC_1_ADDL_UUID = _fieldBuilder.buildEdmTypeField('IncotermsSupChnLoc1AddlUUID', 'Edm.Guid', true);
    /**
     * Static representation of the [[incotermsSupChnLoc2AddlUuid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustSlsAreaAddrDepdntInfo.INCOTERMS_SUP_CHN_LOC_2_ADDL_UUID = _fieldBuilder.buildEdmTypeField('IncotermsSupChnLoc2AddlUUID', 'Edm.Guid', true);
    /**
     * Static representation of the [[incotermsSupChnDvtgLocAddlUuid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustSlsAreaAddrDepdntInfo.INCOTERMS_SUP_CHN_DVTG_LOC_ADDL_UUID = _fieldBuilder.buildEdmTypeField('IncotermsSupChnDvtgLocAddlUUID', 'Edm.Guid', true);
    /**
     * Static representation of the [[deliveryIsBlocked]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustSlsAreaAddrDepdntInfo.DELIVERY_IS_BLOCKED = _fieldBuilder.buildEdmTypeField('DeliveryIsBlocked', 'Edm.String', true);
    /**
     * Static representation of the [[salesOffice]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustSlsAreaAddrDepdntInfo.SALES_OFFICE = _fieldBuilder.buildEdmTypeField('SalesOffice', 'Edm.String', true);
    /**
     * Static representation of the [[salesGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustSlsAreaAddrDepdntInfo.SALES_GROUP = _fieldBuilder.buildEdmTypeField('SalesGroup', 'Edm.String', true);
    /**
     * Static representation of the [[shippingCondition]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustSlsAreaAddrDepdntInfo.SHIPPING_CONDITION = _fieldBuilder.buildEdmTypeField('ShippingCondition', 'Edm.String', true);
    /**
     * Static representation of the [[supplyingPlant]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustSlsAreaAddrDepdntInfo.SUPPLYING_PLANT = _fieldBuilder.buildEdmTypeField('SupplyingPlant', 'Edm.String', true);
    /**
     * Static representation of the [[incotermsVersion]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustSlsAreaAddrDepdntInfo.INCOTERMS_VERSION = _fieldBuilder.buildEdmTypeField('IncotermsVersion', 'Edm.String', true);
    /**
     * All fields of the CustSlsAreaAddrDepdntInfo entity.
     */
    CustSlsAreaAddrDepdntInfo._allFields = [
        CustSlsAreaAddrDepdntInfo.CUSTOMER,
        CustSlsAreaAddrDepdntInfo.SALES_ORGANIZATION,
        CustSlsAreaAddrDepdntInfo.DISTRIBUTION_CHANNEL,
        CustSlsAreaAddrDepdntInfo.DIVISION,
        CustSlsAreaAddrDepdntInfo.ADDRESS_ID,
        CustSlsAreaAddrDepdntInfo.INCOTERMS_CLASSIFICATION,
        CustSlsAreaAddrDepdntInfo.INCOTERMS_LOCATION_1,
        CustSlsAreaAddrDepdntInfo.INCOTERMS_LOCATION_2,
        CustSlsAreaAddrDepdntInfo.INCOTERMS_SUP_CHN_LOC_1_ADDL_UUID,
        CustSlsAreaAddrDepdntInfo.INCOTERMS_SUP_CHN_LOC_2_ADDL_UUID,
        CustSlsAreaAddrDepdntInfo.INCOTERMS_SUP_CHN_DVTG_LOC_ADDL_UUID,
        CustSlsAreaAddrDepdntInfo.DELIVERY_IS_BLOCKED,
        CustSlsAreaAddrDepdntInfo.SALES_OFFICE,
        CustSlsAreaAddrDepdntInfo.SALES_GROUP,
        CustSlsAreaAddrDepdntInfo.SHIPPING_CONDITION,
        CustSlsAreaAddrDepdntInfo.SUPPLYING_PLANT,
        CustSlsAreaAddrDepdntInfo.INCOTERMS_VERSION
    ];
    /**
     * All fields selector.
     */
    CustSlsAreaAddrDepdntInfo.ALL_FIELDS = new core_1.AllFields('*', CustSlsAreaAddrDepdntInfo);
    /**
     * All key fields of the CustSlsAreaAddrDepdntInfo entity.
     */
    CustSlsAreaAddrDepdntInfo._keyFields = [CustSlsAreaAddrDepdntInfo.CUSTOMER, CustSlsAreaAddrDepdntInfo.SALES_ORGANIZATION, CustSlsAreaAddrDepdntInfo.DISTRIBUTION_CHANNEL, CustSlsAreaAddrDepdntInfo.DIVISION, CustSlsAreaAddrDepdntInfo.ADDRESS_ID];
    /**
     * Mapping of all key field names to the respective static field property CustSlsAreaAddrDepdntInfo.
     */
    CustSlsAreaAddrDepdntInfo._keys = CustSlsAreaAddrDepdntInfo._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(CustSlsAreaAddrDepdntInfo = exports.CustSlsAreaAddrDepdntInfo || (exports.CustSlsAreaAddrDepdntInfo = {}));
exports.CustSlsAreaAddrDepdntInfo = CustSlsAreaAddrDepdntInfo;
//# sourceMappingURL=CustSlsAreaAddrDepdntInfo.js.map