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
exports.SupplierPartnerFunc = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var SupplierPartnerFuncRequestBuilder_1 = require("./SupplierPartnerFuncRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "A_SupplierPartnerFunc" of service "API_BUSINESS_PARTNER".
 */
var SupplierPartnerFunc = /** @class */ (function (_super) {
    __extends(SupplierPartnerFunc, _super);
    function SupplierPartnerFunc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `SupplierPartnerFunc`.
     * @returns A builder that constructs instances of entity type `SupplierPartnerFunc`.
     */
    SupplierPartnerFunc.builder = function () {
        return core_1.EntityV2.entityBuilder(SupplierPartnerFunc);
    };
    /**
     * Returns a request builder to construct requests for operations on the `SupplierPartnerFunc` entity type.
     * @returns A `SupplierPartnerFunc` request builder.
     */
    SupplierPartnerFunc.requestBuilder = function () {
        return new SupplierPartnerFuncRequestBuilder_1.SupplierPartnerFuncRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SupplierPartnerFunc`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SupplierPartnerFunc`.
     */
    SupplierPartnerFunc.customField = function (fieldName) {
        return core_1.EntityV2.customFieldSelector(fieldName, SupplierPartnerFunc);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    SupplierPartnerFunc.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for SupplierPartnerFunc.
     */
    SupplierPartnerFunc._entityName = 'A_SupplierPartnerFunc';
    /**
     * Default url path for the according service.
     */
    SupplierPartnerFunc._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
    return SupplierPartnerFunc;
}(core_1.EntityV2));
exports.SupplierPartnerFunc = SupplierPartnerFunc;
(function (SupplierPartnerFunc) {
    var _fieldBuilder = new core_1.FieldBuilder(SupplierPartnerFunc);
    /**
     * Static representation of the [[supplier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierPartnerFunc.SUPPLIER = _fieldBuilder.buildEdmTypeField('Supplier', 'Edm.String', false);
    /**
     * Static representation of the [[purchasingOrganization]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierPartnerFunc.PURCHASING_ORGANIZATION = _fieldBuilder.buildEdmTypeField('PurchasingOrganization', 'Edm.String', false);
    /**
     * Static representation of the [[supplierSubrange]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierPartnerFunc.SUPPLIER_SUBRANGE = _fieldBuilder.buildEdmTypeField('SupplierSubrange', 'Edm.String', false);
    /**
     * Static representation of the [[plant]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierPartnerFunc.PLANT = _fieldBuilder.buildEdmTypeField('Plant', 'Edm.String', false);
    /**
     * Static representation of the [[partnerFunction]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierPartnerFunc.PARTNER_FUNCTION = _fieldBuilder.buildEdmTypeField('PartnerFunction', 'Edm.String', false);
    /**
     * Static representation of the [[partnerCounter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierPartnerFunc.PARTNER_COUNTER = _fieldBuilder.buildEdmTypeField('PartnerCounter', 'Edm.String', false);
    /**
     * Static representation of the [[defaultPartner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierPartnerFunc.DEFAULT_PARTNER = _fieldBuilder.buildEdmTypeField('DefaultPartner', 'Edm.Boolean', true);
    /**
     * Static representation of the [[creationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierPartnerFunc.CREATION_DATE = _fieldBuilder.buildEdmTypeField('CreationDate', 'Edm.DateTime', true);
    /**
     * Static representation of the [[createdByUser]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierPartnerFunc.CREATED_BY_USER = _fieldBuilder.buildEdmTypeField('CreatedByUser', 'Edm.String', true);
    /**
     * Static representation of the [[referenceSupplier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierPartnerFunc.REFERENCE_SUPPLIER = _fieldBuilder.buildEdmTypeField('ReferenceSupplier', 'Edm.String', true);
    /**
     * Static representation of the [[authorizationGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierPartnerFunc.AUTHORIZATION_GROUP = _fieldBuilder.buildEdmTypeField('AuthorizationGroup', 'Edm.String', true);
    /**
     * All fields of the SupplierPartnerFunc entity.
     */
    SupplierPartnerFunc._allFields = [
        SupplierPartnerFunc.SUPPLIER,
        SupplierPartnerFunc.PURCHASING_ORGANIZATION,
        SupplierPartnerFunc.SUPPLIER_SUBRANGE,
        SupplierPartnerFunc.PLANT,
        SupplierPartnerFunc.PARTNER_FUNCTION,
        SupplierPartnerFunc.PARTNER_COUNTER,
        SupplierPartnerFunc.DEFAULT_PARTNER,
        SupplierPartnerFunc.CREATION_DATE,
        SupplierPartnerFunc.CREATED_BY_USER,
        SupplierPartnerFunc.REFERENCE_SUPPLIER,
        SupplierPartnerFunc.AUTHORIZATION_GROUP
    ];
    /**
     * All fields selector.
     */
    SupplierPartnerFunc.ALL_FIELDS = new core_1.AllFields('*', SupplierPartnerFunc);
    /**
     * All key fields of the SupplierPartnerFunc entity.
     */
    SupplierPartnerFunc._keyFields = [SupplierPartnerFunc.SUPPLIER, SupplierPartnerFunc.PURCHASING_ORGANIZATION, SupplierPartnerFunc.SUPPLIER_SUBRANGE, SupplierPartnerFunc.PLANT, SupplierPartnerFunc.PARTNER_FUNCTION, SupplierPartnerFunc.PARTNER_COUNTER];
    /**
     * Mapping of all key field names to the respective static field property SupplierPartnerFunc.
     */
    SupplierPartnerFunc._keys = SupplierPartnerFunc._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(SupplierPartnerFunc = exports.SupplierPartnerFunc || (exports.SupplierPartnerFunc = {}));
exports.SupplierPartnerFunc = SupplierPartnerFunc;
//# sourceMappingURL=SupplierPartnerFunc.js.map