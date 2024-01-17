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
exports.CustAddrDepdntExtIdentifier = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var CustAddrDepdntExtIdentifierRequestBuilder_1 = require("./CustAddrDepdntExtIdentifierRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "A_CustAddrDepdntExtIdentifier" of service "API_BUSINESS_PARTNER".
 */
var CustAddrDepdntExtIdentifier = /** @class */ (function (_super) {
    __extends(CustAddrDepdntExtIdentifier, _super);
    function CustAddrDepdntExtIdentifier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `CustAddrDepdntExtIdentifier`.
     * @returns A builder that constructs instances of entity type `CustAddrDepdntExtIdentifier`.
     */
    CustAddrDepdntExtIdentifier.builder = function () {
        return core_1.EntityV2.entityBuilder(CustAddrDepdntExtIdentifier);
    };
    /**
     * Returns a request builder to construct requests for operations on the `CustAddrDepdntExtIdentifier` entity type.
     * @returns A `CustAddrDepdntExtIdentifier` request builder.
     */
    CustAddrDepdntExtIdentifier.requestBuilder = function () {
        return new CustAddrDepdntExtIdentifierRequestBuilder_1.CustAddrDepdntExtIdentifierRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CustAddrDepdntExtIdentifier`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CustAddrDepdntExtIdentifier`.
     */
    CustAddrDepdntExtIdentifier.customField = function (fieldName) {
        return core_1.EntityV2.customFieldSelector(fieldName, CustAddrDepdntExtIdentifier);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    CustAddrDepdntExtIdentifier.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for CustAddrDepdntExtIdentifier.
     */
    CustAddrDepdntExtIdentifier._entityName = 'A_CustAddrDepdntExtIdentifier';
    /**
     * Default url path for the according service.
     */
    CustAddrDepdntExtIdentifier._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
    return CustAddrDepdntExtIdentifier;
}(core_1.EntityV2));
exports.CustAddrDepdntExtIdentifier = CustAddrDepdntExtIdentifier;
(function (CustAddrDepdntExtIdentifier) {
    var _fieldBuilder = new core_1.FieldBuilder(CustAddrDepdntExtIdentifier);
    /**
     * Static representation of the [[customer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustAddrDepdntExtIdentifier.CUSTOMER = _fieldBuilder.buildEdmTypeField('Customer', 'Edm.String', false);
    /**
     * Static representation of the [[addressId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustAddrDepdntExtIdentifier.ADDRESS_ID = _fieldBuilder.buildEdmTypeField('AddressID', 'Edm.String', false);
    /**
     * Static representation of the [[customerExternalRefId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustAddrDepdntExtIdentifier.CUSTOMER_EXTERNAL_REF_ID = _fieldBuilder.buildEdmTypeField('CustomerExternalRefID', 'Edm.String', true);
    /**
     * All fields of the CustAddrDepdntExtIdentifier entity.
     */
    CustAddrDepdntExtIdentifier._allFields = [
        CustAddrDepdntExtIdentifier.CUSTOMER,
        CustAddrDepdntExtIdentifier.ADDRESS_ID,
        CustAddrDepdntExtIdentifier.CUSTOMER_EXTERNAL_REF_ID
    ];
    /**
     * All fields selector.
     */
    CustAddrDepdntExtIdentifier.ALL_FIELDS = new core_1.AllFields('*', CustAddrDepdntExtIdentifier);
    /**
     * All key fields of the CustAddrDepdntExtIdentifier entity.
     */
    CustAddrDepdntExtIdentifier._keyFields = [CustAddrDepdntExtIdentifier.CUSTOMER, CustAddrDepdntExtIdentifier.ADDRESS_ID];
    /**
     * Mapping of all key field names to the respective static field property CustAddrDepdntExtIdentifier.
     */
    CustAddrDepdntExtIdentifier._keys = CustAddrDepdntExtIdentifier._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(CustAddrDepdntExtIdentifier = exports.CustAddrDepdntExtIdentifier || (exports.CustAddrDepdntExtIdentifier = {}));
exports.CustAddrDepdntExtIdentifier = CustAddrDepdntExtIdentifier;
//# sourceMappingURL=CustAddrDepdntExtIdentifier.js.map