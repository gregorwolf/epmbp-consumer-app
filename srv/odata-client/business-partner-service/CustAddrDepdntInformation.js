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
exports.CustAddrDepdntInformation = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var CustAddrDepdntInformationRequestBuilder_1 = require("./CustAddrDepdntInformationRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "A_CustAddrDepdntInformation" of service "API_BUSINESS_PARTNER".
 */
var CustAddrDepdntInformation = /** @class */ (function (_super) {
    __extends(CustAddrDepdntInformation, _super);
    function CustAddrDepdntInformation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `CustAddrDepdntInformation`.
     * @returns A builder that constructs instances of entity type `CustAddrDepdntInformation`.
     */
    CustAddrDepdntInformation.builder = function () {
        return core_1.EntityV2.entityBuilder(CustAddrDepdntInformation);
    };
    /**
     * Returns a request builder to construct requests for operations on the `CustAddrDepdntInformation` entity type.
     * @returns A `CustAddrDepdntInformation` request builder.
     */
    CustAddrDepdntInformation.requestBuilder = function () {
        return new CustAddrDepdntInformationRequestBuilder_1.CustAddrDepdntInformationRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CustAddrDepdntInformation`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CustAddrDepdntInformation`.
     */
    CustAddrDepdntInformation.customField = function (fieldName) {
        return core_1.EntityV2.customFieldSelector(fieldName, CustAddrDepdntInformation);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    CustAddrDepdntInformation.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for CustAddrDepdntInformation.
     */
    CustAddrDepdntInformation._entityName = 'A_CustAddrDepdntInformation';
    /**
     * Default url path for the according service.
     */
    CustAddrDepdntInformation._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
    return CustAddrDepdntInformation;
}(core_1.EntityV2));
exports.CustAddrDepdntInformation = CustAddrDepdntInformation;
(function (CustAddrDepdntInformation) {
    var _fieldBuilder = new core_1.FieldBuilder(CustAddrDepdntInformation);
    /**
     * Static representation of the [[customer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustAddrDepdntInformation.CUSTOMER = _fieldBuilder.buildEdmTypeField('Customer', 'Edm.String', false);
    /**
     * Static representation of the [[addressId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustAddrDepdntInformation.ADDRESS_ID = _fieldBuilder.buildEdmTypeField('AddressID', 'Edm.String', false);
    /**
     * Static representation of the [[expressTrainStationName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustAddrDepdntInformation.EXPRESS_TRAIN_STATION_NAME = _fieldBuilder.buildEdmTypeField('ExpressTrainStationName', 'Edm.String', true);
    /**
     * Static representation of the [[trainStationName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustAddrDepdntInformation.TRAIN_STATION_NAME = _fieldBuilder.buildEdmTypeField('TrainStationName', 'Edm.String', true);
    /**
     * Static representation of the [[cityCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustAddrDepdntInformation.CITY_CODE = _fieldBuilder.buildEdmTypeField('CityCode', 'Edm.String', true);
    /**
     * Static representation of the [[county]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustAddrDepdntInformation.COUNTY = _fieldBuilder.buildEdmTypeField('County', 'Edm.String', true);
    /**
     * All fields of the CustAddrDepdntInformation entity.
     */
    CustAddrDepdntInformation._allFields = [
        CustAddrDepdntInformation.CUSTOMER,
        CustAddrDepdntInformation.ADDRESS_ID,
        CustAddrDepdntInformation.EXPRESS_TRAIN_STATION_NAME,
        CustAddrDepdntInformation.TRAIN_STATION_NAME,
        CustAddrDepdntInformation.CITY_CODE,
        CustAddrDepdntInformation.COUNTY
    ];
    /**
     * All fields selector.
     */
    CustAddrDepdntInformation.ALL_FIELDS = new core_1.AllFields('*', CustAddrDepdntInformation);
    /**
     * All key fields of the CustAddrDepdntInformation entity.
     */
    CustAddrDepdntInformation._keyFields = [CustAddrDepdntInformation.CUSTOMER, CustAddrDepdntInformation.ADDRESS_ID];
    /**
     * Mapping of all key field names to the respective static field property CustAddrDepdntInformation.
     */
    CustAddrDepdntInformation._keys = CustAddrDepdntInformation._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(CustAddrDepdntInformation = exports.CustAddrDepdntInformation || (exports.CustAddrDepdntInformation = {}));
exports.CustAddrDepdntInformation = CustAddrDepdntInformation;
//# sourceMappingURL=CustAddrDepdntInformation.js.map