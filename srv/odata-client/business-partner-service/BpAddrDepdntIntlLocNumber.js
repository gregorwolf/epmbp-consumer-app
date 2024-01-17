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
exports.BpAddrDepdntIntlLocNumber = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var BpAddrDepdntIntlLocNumberRequestBuilder_1 = require("./BpAddrDepdntIntlLocNumberRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "A_BPAddrDepdntIntlLocNumber" of service "API_BUSINESS_PARTNER".
 */
var BpAddrDepdntIntlLocNumber = /** @class */ (function (_super) {
    __extends(BpAddrDepdntIntlLocNumber, _super);
    function BpAddrDepdntIntlLocNumber() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `BpAddrDepdntIntlLocNumber`.
     * @returns A builder that constructs instances of entity type `BpAddrDepdntIntlLocNumber`.
     */
    BpAddrDepdntIntlLocNumber.builder = function () {
        return core_1.EntityV2.entityBuilder(BpAddrDepdntIntlLocNumber);
    };
    /**
     * Returns a request builder to construct requests for operations on the `BpAddrDepdntIntlLocNumber` entity type.
     * @returns A `BpAddrDepdntIntlLocNumber` request builder.
     */
    BpAddrDepdntIntlLocNumber.requestBuilder = function () {
        return new BpAddrDepdntIntlLocNumberRequestBuilder_1.BpAddrDepdntIntlLocNumberRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `BpAddrDepdntIntlLocNumber`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `BpAddrDepdntIntlLocNumber`.
     */
    BpAddrDepdntIntlLocNumber.customField = function (fieldName) {
        return core_1.EntityV2.customFieldSelector(fieldName, BpAddrDepdntIntlLocNumber);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    BpAddrDepdntIntlLocNumber.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for BpAddrDepdntIntlLocNumber.
     */
    BpAddrDepdntIntlLocNumber._entityName = 'A_BPAddrDepdntIntlLocNumber';
    /**
     * Default url path for the according service.
     */
    BpAddrDepdntIntlLocNumber._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
    return BpAddrDepdntIntlLocNumber;
}(core_1.EntityV2));
exports.BpAddrDepdntIntlLocNumber = BpAddrDepdntIntlLocNumber;
(function (BpAddrDepdntIntlLocNumber) {
    var _fieldBuilder = new core_1.FieldBuilder(BpAddrDepdntIntlLocNumber);
    /**
     * Static representation of the [[businessPartner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpAddrDepdntIntlLocNumber.BUSINESS_PARTNER = _fieldBuilder.buildEdmTypeField('BusinessPartner', 'Edm.String', false);
    /**
     * Static representation of the [[addressId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpAddrDepdntIntlLocNumber.ADDRESS_ID = _fieldBuilder.buildEdmTypeField('AddressID', 'Edm.String', false);
    /**
     * Static representation of the [[internationalLocationNumber1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpAddrDepdntIntlLocNumber.INTERNATIONAL_LOCATION_NUMBER_1 = _fieldBuilder.buildEdmTypeField('InternationalLocationNumber1', 'Edm.String', true);
    /**
     * Static representation of the [[internationalLocationNumber2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpAddrDepdntIntlLocNumber.INTERNATIONAL_LOCATION_NUMBER_2 = _fieldBuilder.buildEdmTypeField('InternationalLocationNumber2', 'Edm.String', true);
    /**
     * Static representation of the [[internationalLocationNumber3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpAddrDepdntIntlLocNumber.INTERNATIONAL_LOCATION_NUMBER_3 = _fieldBuilder.buildEdmTypeField('InternationalLocationNumber3', 'Edm.String', true);
    /**
     * All fields of the BpAddrDepdntIntlLocNumber entity.
     */
    BpAddrDepdntIntlLocNumber._allFields = [
        BpAddrDepdntIntlLocNumber.BUSINESS_PARTNER,
        BpAddrDepdntIntlLocNumber.ADDRESS_ID,
        BpAddrDepdntIntlLocNumber.INTERNATIONAL_LOCATION_NUMBER_1,
        BpAddrDepdntIntlLocNumber.INTERNATIONAL_LOCATION_NUMBER_2,
        BpAddrDepdntIntlLocNumber.INTERNATIONAL_LOCATION_NUMBER_3
    ];
    /**
     * All fields selector.
     */
    BpAddrDepdntIntlLocNumber.ALL_FIELDS = new core_1.AllFields('*', BpAddrDepdntIntlLocNumber);
    /**
     * All key fields of the BpAddrDepdntIntlLocNumber entity.
     */
    BpAddrDepdntIntlLocNumber._keyFields = [BpAddrDepdntIntlLocNumber.BUSINESS_PARTNER, BpAddrDepdntIntlLocNumber.ADDRESS_ID];
    /**
     * Mapping of all key field names to the respective static field property BpAddrDepdntIntlLocNumber.
     */
    BpAddrDepdntIntlLocNumber._keys = BpAddrDepdntIntlLocNumber._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(BpAddrDepdntIntlLocNumber = exports.BpAddrDepdntIntlLocNumber || (exports.BpAddrDepdntIntlLocNumber = {}));
exports.BpAddrDepdntIntlLocNumber = BpAddrDepdntIntlLocNumber;
//# sourceMappingURL=BpAddrDepdntIntlLocNumber.js.map