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
exports.SupplierPartnerFunc = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
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
     * Returns an entity builder to construct instances `SupplierPartnerFunc`.
     * @returns A builder that constructs instances of entity type `SupplierPartnerFunc`.
     */
    SupplierPartnerFunc.builder = function () {
        return core_1.Entity.entityBuilder(SupplierPartnerFunc);
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
        return core_1.Entity.customFieldSelector(fieldName, SupplierPartnerFunc);
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
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for SupplierPartnerFunc.
     */
    SupplierPartnerFunc._serviceName = 'API_BUSINESS_PARTNER';
    /**
     * Default url path for the according service.
     */
    SupplierPartnerFunc._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
    return SupplierPartnerFunc;
}(core_1.Entity));
exports.SupplierPartnerFunc = SupplierPartnerFunc;
(function (SupplierPartnerFunc) {
    /**
     * Static representation of the [[supplier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierPartnerFunc.SUPPLIER = new core_1.StringField('Supplier', SupplierPartnerFunc, 'Edm.String');
    /**
     * Static representation of the [[purchasingOrganization]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierPartnerFunc.PURCHASING_ORGANIZATION = new core_1.StringField('PurchasingOrganization', SupplierPartnerFunc, 'Edm.String');
    /**
     * Static representation of the [[supplierSubrange]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierPartnerFunc.SUPPLIER_SUBRANGE = new core_1.StringField('SupplierSubrange', SupplierPartnerFunc, 'Edm.String');
    /**
     * Static representation of the [[plant]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierPartnerFunc.PLANT = new core_1.StringField('Plant', SupplierPartnerFunc, 'Edm.String');
    /**
     * Static representation of the [[partnerFunction]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierPartnerFunc.PARTNER_FUNCTION = new core_1.StringField('PartnerFunction', SupplierPartnerFunc, 'Edm.String');
    /**
     * Static representation of the [[partnerCounter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierPartnerFunc.PARTNER_COUNTER = new core_1.StringField('PartnerCounter', SupplierPartnerFunc, 'Edm.String');
    /**
     * Static representation of the [[defaultPartner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierPartnerFunc.DEFAULT_PARTNER = new core_1.BooleanField('DefaultPartner', SupplierPartnerFunc, 'Edm.Boolean');
    /**
     * Static representation of the [[creationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierPartnerFunc.CREATION_DATE = new core_1.DateField('CreationDate', SupplierPartnerFunc, 'Edm.DateTime');
    /**
     * Static representation of the [[createdByUser]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierPartnerFunc.CREATED_BY_USER = new core_1.StringField('CreatedByUser', SupplierPartnerFunc, 'Edm.String');
    /**
     * Static representation of the [[referenceSupplier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierPartnerFunc.REFERENCE_SUPPLIER = new core_1.StringField('ReferenceSupplier', SupplierPartnerFunc, 'Edm.String');
    /**
     * Static representation of the [[authorizationGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierPartnerFunc.AUTHORIZATION_GROUP = new core_1.StringField('AuthorizationGroup', SupplierPartnerFunc, 'Edm.String');
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