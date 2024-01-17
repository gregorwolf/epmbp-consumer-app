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
exports.CustSalesPartnerFunc = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var CustSalesPartnerFuncRequestBuilder_1 = require("./CustSalesPartnerFuncRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "A_CustSalesPartnerFunc" of service "API_BUSINESS_PARTNER".
 */
var CustSalesPartnerFunc = /** @class */ (function (_super) {
    __extends(CustSalesPartnerFunc, _super);
    function CustSalesPartnerFunc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `CustSalesPartnerFunc`.
     * @returns A builder that constructs instances of entity type `CustSalesPartnerFunc`.
     */
    CustSalesPartnerFunc.builder = function () {
        return core_1.EntityV2.entityBuilder(CustSalesPartnerFunc);
    };
    /**
     * Returns a request builder to construct requests for operations on the `CustSalesPartnerFunc` entity type.
     * @returns A `CustSalesPartnerFunc` request builder.
     */
    CustSalesPartnerFunc.requestBuilder = function () {
        return new CustSalesPartnerFuncRequestBuilder_1.CustSalesPartnerFuncRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CustSalesPartnerFunc`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CustSalesPartnerFunc`.
     */
    CustSalesPartnerFunc.customField = function (fieldName) {
        return core_1.EntityV2.customFieldSelector(fieldName, CustSalesPartnerFunc);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    CustSalesPartnerFunc.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for CustSalesPartnerFunc.
     */
    CustSalesPartnerFunc._entityName = 'A_CustSalesPartnerFunc';
    /**
     * Default url path for the according service.
     */
    CustSalesPartnerFunc._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
    return CustSalesPartnerFunc;
}(core_1.EntityV2));
exports.CustSalesPartnerFunc = CustSalesPartnerFunc;
(function (CustSalesPartnerFunc) {
    var _fieldBuilder = new core_1.FieldBuilder(CustSalesPartnerFunc);
    /**
     * Static representation of the [[customer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustSalesPartnerFunc.CUSTOMER = _fieldBuilder.buildEdmTypeField('Customer', 'Edm.String', false);
    /**
     * Static representation of the [[salesOrganization]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustSalesPartnerFunc.SALES_ORGANIZATION = _fieldBuilder.buildEdmTypeField('SalesOrganization', 'Edm.String', false);
    /**
     * Static representation of the [[distributionChannel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustSalesPartnerFunc.DISTRIBUTION_CHANNEL = _fieldBuilder.buildEdmTypeField('DistributionChannel', 'Edm.String', false);
    /**
     * Static representation of the [[division]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustSalesPartnerFunc.DIVISION = _fieldBuilder.buildEdmTypeField('Division', 'Edm.String', false);
    /**
     * Static representation of the [[partnerCounter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustSalesPartnerFunc.PARTNER_COUNTER = _fieldBuilder.buildEdmTypeField('PartnerCounter', 'Edm.String', false);
    /**
     * Static representation of the [[partnerFunction]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustSalesPartnerFunc.PARTNER_FUNCTION = _fieldBuilder.buildEdmTypeField('PartnerFunction', 'Edm.String', false);
    /**
     * Static representation of the [[bpCustomerNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustSalesPartnerFunc.BP_CUSTOMER_NUMBER = _fieldBuilder.buildEdmTypeField('BPCustomerNumber', 'Edm.String', true);
    /**
     * Static representation of the [[customerPartnerDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustSalesPartnerFunc.CUSTOMER_PARTNER_DESCRIPTION = _fieldBuilder.buildEdmTypeField('CustomerPartnerDescription', 'Edm.String', true);
    /**
     * Static representation of the [[defaultPartner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustSalesPartnerFunc.DEFAULT_PARTNER = _fieldBuilder.buildEdmTypeField('DefaultPartner', 'Edm.Boolean', true);
    /**
     * Static representation of the [[supplier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustSalesPartnerFunc.SUPPLIER = _fieldBuilder.buildEdmTypeField('Supplier', 'Edm.String', true);
    /**
     * Static representation of the [[personnelNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustSalesPartnerFunc.PERSONNEL_NUMBER = _fieldBuilder.buildEdmTypeField('PersonnelNumber', 'Edm.String', true);
    /**
     * Static representation of the [[contactPerson]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustSalesPartnerFunc.CONTACT_PERSON = _fieldBuilder.buildEdmTypeField('ContactPerson', 'Edm.String', true);
    /**
     * Static representation of the [[addressId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustSalesPartnerFunc.ADDRESS_ID = _fieldBuilder.buildEdmTypeField('AddressID', 'Edm.String', true);
    /**
     * Static representation of the [[authorizationGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustSalesPartnerFunc.AUTHORIZATION_GROUP = _fieldBuilder.buildEdmTypeField('AuthorizationGroup', 'Edm.String', true);
    /**
     * All fields of the CustSalesPartnerFunc entity.
     */
    CustSalesPartnerFunc._allFields = [
        CustSalesPartnerFunc.CUSTOMER,
        CustSalesPartnerFunc.SALES_ORGANIZATION,
        CustSalesPartnerFunc.DISTRIBUTION_CHANNEL,
        CustSalesPartnerFunc.DIVISION,
        CustSalesPartnerFunc.PARTNER_COUNTER,
        CustSalesPartnerFunc.PARTNER_FUNCTION,
        CustSalesPartnerFunc.BP_CUSTOMER_NUMBER,
        CustSalesPartnerFunc.CUSTOMER_PARTNER_DESCRIPTION,
        CustSalesPartnerFunc.DEFAULT_PARTNER,
        CustSalesPartnerFunc.SUPPLIER,
        CustSalesPartnerFunc.PERSONNEL_NUMBER,
        CustSalesPartnerFunc.CONTACT_PERSON,
        CustSalesPartnerFunc.ADDRESS_ID,
        CustSalesPartnerFunc.AUTHORIZATION_GROUP
    ];
    /**
     * All fields selector.
     */
    CustSalesPartnerFunc.ALL_FIELDS = new core_1.AllFields('*', CustSalesPartnerFunc);
    /**
     * All key fields of the CustSalesPartnerFunc entity.
     */
    CustSalesPartnerFunc._keyFields = [CustSalesPartnerFunc.CUSTOMER, CustSalesPartnerFunc.SALES_ORGANIZATION, CustSalesPartnerFunc.DISTRIBUTION_CHANNEL, CustSalesPartnerFunc.DIVISION, CustSalesPartnerFunc.PARTNER_COUNTER, CustSalesPartnerFunc.PARTNER_FUNCTION];
    /**
     * Mapping of all key field names to the respective static field property CustSalesPartnerFunc.
     */
    CustSalesPartnerFunc._keys = CustSalesPartnerFunc._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(CustSalesPartnerFunc = exports.CustSalesPartnerFunc || (exports.CustSalesPartnerFunc = {}));
exports.CustSalesPartnerFunc = CustSalesPartnerFunc;
//# sourceMappingURL=CustSalesPartnerFunc.js.map