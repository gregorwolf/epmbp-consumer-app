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
exports.BusinessPartnerRole = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var BusinessPartnerRoleRequestBuilder_1 = require("./BusinessPartnerRoleRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "A_BusinessPartnerRole" of service "API_BUSINESS_PARTNER".
 */
var BusinessPartnerRole = /** @class */ (function (_super) {
    __extends(BusinessPartnerRole, _super);
    function BusinessPartnerRole() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `BusinessPartnerRole`.
     * @returns A builder that constructs instances of entity type `BusinessPartnerRole`.
     */
    BusinessPartnerRole.builder = function () {
        return core_1.EntityV2.entityBuilder(BusinessPartnerRole);
    };
    /**
     * Returns a request builder to construct requests for operations on the `BusinessPartnerRole` entity type.
     * @returns A `BusinessPartnerRole` request builder.
     */
    BusinessPartnerRole.requestBuilder = function () {
        return new BusinessPartnerRoleRequestBuilder_1.BusinessPartnerRoleRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `BusinessPartnerRole`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `BusinessPartnerRole`.
     */
    BusinessPartnerRole.customField = function (fieldName) {
        return core_1.EntityV2.customFieldSelector(fieldName, BusinessPartnerRole);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    BusinessPartnerRole.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for BusinessPartnerRole.
     */
    BusinessPartnerRole._entityName = 'A_BusinessPartnerRole';
    /**
     * Default url path for the according service.
     */
    BusinessPartnerRole._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
    return BusinessPartnerRole;
}(core_1.EntityV2));
exports.BusinessPartnerRole = BusinessPartnerRole;
(function (BusinessPartnerRole) {
    var _fieldBuilder = new core_1.FieldBuilder(BusinessPartnerRole);
    /**
     * Static representation of the [[businessPartner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerRole.BUSINESS_PARTNER = _fieldBuilder.buildEdmTypeField('BusinessPartner', 'Edm.String', false);
    /**
     * Static representation of the [[businessPartnerRole]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerRole.BUSINESS_PARTNER_ROLE = _fieldBuilder.buildEdmTypeField('BusinessPartnerRole', 'Edm.String', false);
    /**
     * Static representation of the [[validFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerRole.VALID_FROM = _fieldBuilder.buildEdmTypeField('ValidFrom', 'Edm.DateTimeOffset', true);
    /**
     * Static representation of the [[validTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerRole.VALID_TO = _fieldBuilder.buildEdmTypeField('ValidTo', 'Edm.DateTimeOffset', true);
    /**
     * Static representation of the [[authorizationGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerRole.AUTHORIZATION_GROUP = _fieldBuilder.buildEdmTypeField('AuthorizationGroup', 'Edm.String', true);
    /**
     * All fields of the BusinessPartnerRole entity.
     */
    BusinessPartnerRole._allFields = [
        BusinessPartnerRole.BUSINESS_PARTNER,
        BusinessPartnerRole.BUSINESS_PARTNER_ROLE,
        BusinessPartnerRole.VALID_FROM,
        BusinessPartnerRole.VALID_TO,
        BusinessPartnerRole.AUTHORIZATION_GROUP
    ];
    /**
     * All fields selector.
     */
    BusinessPartnerRole.ALL_FIELDS = new core_1.AllFields('*', BusinessPartnerRole);
    /**
     * All key fields of the BusinessPartnerRole entity.
     */
    BusinessPartnerRole._keyFields = [BusinessPartnerRole.BUSINESS_PARTNER, BusinessPartnerRole.BUSINESS_PARTNER_ROLE];
    /**
     * Mapping of all key field names to the respective static field property BusinessPartnerRole.
     */
    BusinessPartnerRole._keys = BusinessPartnerRole._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(BusinessPartnerRole = exports.BusinessPartnerRole || (exports.BusinessPartnerRole = {}));
exports.BusinessPartnerRole = BusinessPartnerRole;
//# sourceMappingURL=BusinessPartnerRole.js.map