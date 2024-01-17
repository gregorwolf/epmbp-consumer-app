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
exports.BusinessPartnerContact = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var BusinessPartnerContactRequestBuilder_1 = require("./BusinessPartnerContactRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "A_BusinessPartnerContact" of service "API_BUSINESS_PARTNER".
 */
var BusinessPartnerContact = /** @class */ (function (_super) {
    __extends(BusinessPartnerContact, _super);
    function BusinessPartnerContact() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `BusinessPartnerContact`.
     * @returns A builder that constructs instances of entity type `BusinessPartnerContact`.
     */
    BusinessPartnerContact.builder = function () {
        return core_1.EntityV2.entityBuilder(BusinessPartnerContact);
    };
    /**
     * Returns a request builder to construct requests for operations on the `BusinessPartnerContact` entity type.
     * @returns A `BusinessPartnerContact` request builder.
     */
    BusinessPartnerContact.requestBuilder = function () {
        return new BusinessPartnerContactRequestBuilder_1.BusinessPartnerContactRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `BusinessPartnerContact`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `BusinessPartnerContact`.
     */
    BusinessPartnerContact.customField = function (fieldName) {
        return core_1.EntityV2.customFieldSelector(fieldName, BusinessPartnerContact);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    BusinessPartnerContact.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for BusinessPartnerContact.
     */
    BusinessPartnerContact._entityName = 'A_BusinessPartnerContact';
    /**
     * Default url path for the according service.
     */
    BusinessPartnerContact._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
    return BusinessPartnerContact;
}(core_1.EntityV2));
exports.BusinessPartnerContact = BusinessPartnerContact;
var BpContactToAddress_1 = require("./BpContactToAddress");
var BpContactToFuncAndDept_1 = require("./BpContactToFuncAndDept");
(function (BusinessPartnerContact) {
    var _fieldBuilder = new core_1.FieldBuilder(BusinessPartnerContact);
    /**
     * Static representation of the [[relationshipNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerContact.RELATIONSHIP_NUMBER = _fieldBuilder.buildEdmTypeField('RelationshipNumber', 'Edm.String', false);
    /**
     * Static representation of the [[businessPartnerCompany]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerContact.BUSINESS_PARTNER_COMPANY = _fieldBuilder.buildEdmTypeField('BusinessPartnerCompany', 'Edm.String', false);
    /**
     * Static representation of the [[businessPartnerPerson]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerContact.BUSINESS_PARTNER_PERSON = _fieldBuilder.buildEdmTypeField('BusinessPartnerPerson', 'Edm.String', false);
    /**
     * Static representation of the [[validityEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerContact.VALIDITY_END_DATE = _fieldBuilder.buildEdmTypeField('ValidityEndDate', 'Edm.DateTime', false);
    /**
     * Static representation of the [[validityStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerContact.VALIDITY_START_DATE = _fieldBuilder.buildEdmTypeField('ValidityStartDate', 'Edm.DateTime', true);
    /**
     * Static representation of the [[isStandardRelationship]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerContact.IS_STANDARD_RELATIONSHIP = _fieldBuilder.buildEdmTypeField('IsStandardRelationship', 'Edm.Boolean', true);
    /**
     * Static representation of the [[relationshipCategory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerContact.RELATIONSHIP_CATEGORY = _fieldBuilder.buildEdmTypeField('RelationshipCategory', 'Edm.String', true);
    /**
     * Static representation of the one-to-many navigation property [[toContactAddress]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerContact.TO_CONTACT_ADDRESS = new core_1.Link('to_ContactAddress', BusinessPartnerContact, BpContactToAddress_1.BpContactToAddress);
    /**
     * Static representation of the one-to-one navigation property [[toContactRelationship]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerContact.TO_CONTACT_RELATIONSHIP = new core_1.OneToOneLink('to_ContactRelationship', BusinessPartnerContact, BpContactToFuncAndDept_1.BpContactToFuncAndDept);
    /**
     * All fields of the BusinessPartnerContact entity.
     */
    BusinessPartnerContact._allFields = [
        BusinessPartnerContact.RELATIONSHIP_NUMBER,
        BusinessPartnerContact.BUSINESS_PARTNER_COMPANY,
        BusinessPartnerContact.BUSINESS_PARTNER_PERSON,
        BusinessPartnerContact.VALIDITY_END_DATE,
        BusinessPartnerContact.VALIDITY_START_DATE,
        BusinessPartnerContact.IS_STANDARD_RELATIONSHIP,
        BusinessPartnerContact.RELATIONSHIP_CATEGORY,
        BusinessPartnerContact.TO_CONTACT_ADDRESS,
        BusinessPartnerContact.TO_CONTACT_RELATIONSHIP
    ];
    /**
     * All fields selector.
     */
    BusinessPartnerContact.ALL_FIELDS = new core_1.AllFields('*', BusinessPartnerContact);
    /**
     * All key fields of the BusinessPartnerContact entity.
     */
    BusinessPartnerContact._keyFields = [BusinessPartnerContact.RELATIONSHIP_NUMBER, BusinessPartnerContact.BUSINESS_PARTNER_COMPANY, BusinessPartnerContact.BUSINESS_PARTNER_PERSON, BusinessPartnerContact.VALIDITY_END_DATE];
    /**
     * Mapping of all key field names to the respective static field property BusinessPartnerContact.
     */
    BusinessPartnerContact._keys = BusinessPartnerContact._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(BusinessPartnerContact = exports.BusinessPartnerContact || (exports.BusinessPartnerContact = {}));
exports.BusinessPartnerContact = BusinessPartnerContact;
//# sourceMappingURL=BusinessPartnerContact.js.map