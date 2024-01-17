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
exports.BusPartAddrDepdntTaxNmbr = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var BusPartAddrDepdntTaxNmbrRequestBuilder_1 = require("./BusPartAddrDepdntTaxNmbrRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "A_BusPartAddrDepdntTaxNmbr" of service "API_BUSINESS_PARTNER".
 */
var BusPartAddrDepdntTaxNmbr = /** @class */ (function (_super) {
    __extends(BusPartAddrDepdntTaxNmbr, _super);
    function BusPartAddrDepdntTaxNmbr() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `BusPartAddrDepdntTaxNmbr`.
     * @returns A builder that constructs instances of entity type `BusPartAddrDepdntTaxNmbr`.
     */
    BusPartAddrDepdntTaxNmbr.builder = function () {
        return core_1.EntityV2.entityBuilder(BusPartAddrDepdntTaxNmbr);
    };
    /**
     * Returns a request builder to construct requests for operations on the `BusPartAddrDepdntTaxNmbr` entity type.
     * @returns A `BusPartAddrDepdntTaxNmbr` request builder.
     */
    BusPartAddrDepdntTaxNmbr.requestBuilder = function () {
        return new BusPartAddrDepdntTaxNmbrRequestBuilder_1.BusPartAddrDepdntTaxNmbrRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `BusPartAddrDepdntTaxNmbr`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `BusPartAddrDepdntTaxNmbr`.
     */
    BusPartAddrDepdntTaxNmbr.customField = function (fieldName) {
        return core_1.EntityV2.customFieldSelector(fieldName, BusPartAddrDepdntTaxNmbr);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    BusPartAddrDepdntTaxNmbr.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for BusPartAddrDepdntTaxNmbr.
     */
    BusPartAddrDepdntTaxNmbr._entityName = 'A_BusPartAddrDepdntTaxNmbr';
    /**
     * Default url path for the according service.
     */
    BusPartAddrDepdntTaxNmbr._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
    return BusPartAddrDepdntTaxNmbr;
}(core_1.EntityV2));
exports.BusPartAddrDepdntTaxNmbr = BusPartAddrDepdntTaxNmbr;
(function (BusPartAddrDepdntTaxNmbr) {
    var _fieldBuilder = new core_1.FieldBuilder(BusPartAddrDepdntTaxNmbr);
    /**
     * Static representation of the [[businessPartner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusPartAddrDepdntTaxNmbr.BUSINESS_PARTNER = _fieldBuilder.buildEdmTypeField('BusinessPartner', 'Edm.String', false);
    /**
     * Static representation of the [[addressId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusPartAddrDepdntTaxNmbr.ADDRESS_ID = _fieldBuilder.buildEdmTypeField('AddressID', 'Edm.String', false);
    /**
     * Static representation of the [[bpTaxType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusPartAddrDepdntTaxNmbr.BP_TAX_TYPE = _fieldBuilder.buildEdmTypeField('BPTaxType', 'Edm.String', false);
    /**
     * Static representation of the [[bpTaxNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusPartAddrDepdntTaxNmbr.BP_TAX_NUMBER = _fieldBuilder.buildEdmTypeField('BPTaxNumber', 'Edm.String', true);
    /**
     * Static representation of the [[bpTaxLongNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusPartAddrDepdntTaxNmbr.BP_TAX_LONG_NUMBER = _fieldBuilder.buildEdmTypeField('BPTaxLongNumber', 'Edm.String', true);
    /**
     * Static representation of the [[authorizationGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusPartAddrDepdntTaxNmbr.AUTHORIZATION_GROUP = _fieldBuilder.buildEdmTypeField('AuthorizationGroup', 'Edm.String', true);
    /**
     * All fields of the BusPartAddrDepdntTaxNmbr entity.
     */
    BusPartAddrDepdntTaxNmbr._allFields = [
        BusPartAddrDepdntTaxNmbr.BUSINESS_PARTNER,
        BusPartAddrDepdntTaxNmbr.ADDRESS_ID,
        BusPartAddrDepdntTaxNmbr.BP_TAX_TYPE,
        BusPartAddrDepdntTaxNmbr.BP_TAX_NUMBER,
        BusPartAddrDepdntTaxNmbr.BP_TAX_LONG_NUMBER,
        BusPartAddrDepdntTaxNmbr.AUTHORIZATION_GROUP
    ];
    /**
     * All fields selector.
     */
    BusPartAddrDepdntTaxNmbr.ALL_FIELDS = new core_1.AllFields('*', BusPartAddrDepdntTaxNmbr);
    /**
     * All key fields of the BusPartAddrDepdntTaxNmbr entity.
     */
    BusPartAddrDepdntTaxNmbr._keyFields = [BusPartAddrDepdntTaxNmbr.BUSINESS_PARTNER, BusPartAddrDepdntTaxNmbr.ADDRESS_ID, BusPartAddrDepdntTaxNmbr.BP_TAX_TYPE];
    /**
     * Mapping of all key field names to the respective static field property BusPartAddrDepdntTaxNmbr.
     */
    BusPartAddrDepdntTaxNmbr._keys = BusPartAddrDepdntTaxNmbr._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(BusPartAddrDepdntTaxNmbr = exports.BusPartAddrDepdntTaxNmbr || (exports.BusPartAddrDepdntTaxNmbr = {}));
exports.BusPartAddrDepdntTaxNmbr = BusPartAddrDepdntTaxNmbr;
//# sourceMappingURL=BusPartAddrDepdntTaxNmbr.js.map