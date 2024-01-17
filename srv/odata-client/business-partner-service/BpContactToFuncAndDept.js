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
exports.BpContactToFuncAndDept = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var BpContactToFuncAndDeptRequestBuilder_1 = require("./BpContactToFuncAndDeptRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "A_BPContactToFuncAndDept" of service "API_BUSINESS_PARTNER".
 */
var BpContactToFuncAndDept = /** @class */ (function (_super) {
    __extends(BpContactToFuncAndDept, _super);
    function BpContactToFuncAndDept() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `BpContactToFuncAndDept`.
     * @returns A builder that constructs instances of entity type `BpContactToFuncAndDept`.
     */
    BpContactToFuncAndDept.builder = function () {
        return core_1.EntityV2.entityBuilder(BpContactToFuncAndDept);
    };
    /**
     * Returns a request builder to construct requests for operations on the `BpContactToFuncAndDept` entity type.
     * @returns A `BpContactToFuncAndDept` request builder.
     */
    BpContactToFuncAndDept.requestBuilder = function () {
        return new BpContactToFuncAndDeptRequestBuilder_1.BpContactToFuncAndDeptRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `BpContactToFuncAndDept`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `BpContactToFuncAndDept`.
     */
    BpContactToFuncAndDept.customField = function (fieldName) {
        return core_1.EntityV2.customFieldSelector(fieldName, BpContactToFuncAndDept);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    BpContactToFuncAndDept.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for BpContactToFuncAndDept.
     */
    BpContactToFuncAndDept._entityName = 'A_BPContactToFuncAndDept';
    /**
     * Default url path for the according service.
     */
    BpContactToFuncAndDept._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
    return BpContactToFuncAndDept;
}(core_1.EntityV2));
exports.BpContactToFuncAndDept = BpContactToFuncAndDept;
(function (BpContactToFuncAndDept) {
    var _fieldBuilder = new core_1.FieldBuilder(BpContactToFuncAndDept);
    /**
     * Static representation of the [[relationshipNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToFuncAndDept.RELATIONSHIP_NUMBER = _fieldBuilder.buildEdmTypeField('RelationshipNumber', 'Edm.String', false);
    /**
     * Static representation of the [[businessPartnerCompany]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToFuncAndDept.BUSINESS_PARTNER_COMPANY = _fieldBuilder.buildEdmTypeField('BusinessPartnerCompany', 'Edm.String', false);
    /**
     * Static representation of the [[businessPartnerPerson]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToFuncAndDept.BUSINESS_PARTNER_PERSON = _fieldBuilder.buildEdmTypeField('BusinessPartnerPerson', 'Edm.String', false);
    /**
     * Static representation of the [[validityEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToFuncAndDept.VALIDITY_END_DATE = _fieldBuilder.buildEdmTypeField('ValidityEndDate', 'Edm.DateTime', false);
    /**
     * Static representation of the [[contactPersonAuthorityType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToFuncAndDept.CONTACT_PERSON_AUTHORITY_TYPE = _fieldBuilder.buildEdmTypeField('ContactPersonAuthorityType', 'Edm.String', true);
    /**
     * Static representation of the [[contactPersonDepartment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToFuncAndDept.CONTACT_PERSON_DEPARTMENT = _fieldBuilder.buildEdmTypeField('ContactPersonDepartment', 'Edm.String', true);
    /**
     * Static representation of the [[contactPersonDepartmentName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToFuncAndDept.CONTACT_PERSON_DEPARTMENT_NAME = _fieldBuilder.buildEdmTypeField('ContactPersonDepartmentName', 'Edm.String', true);
    /**
     * Static representation of the [[contactPersonFunction]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToFuncAndDept.CONTACT_PERSON_FUNCTION = _fieldBuilder.buildEdmTypeField('ContactPersonFunction', 'Edm.String', true);
    /**
     * Static representation of the [[contactPersonFunctionName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToFuncAndDept.CONTACT_PERSON_FUNCTION_NAME = _fieldBuilder.buildEdmTypeField('ContactPersonFunctionName', 'Edm.String', true);
    /**
     * Static representation of the [[contactPersonRemarkText]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToFuncAndDept.CONTACT_PERSON_REMARK_TEXT = _fieldBuilder.buildEdmTypeField('ContactPersonRemarkText', 'Edm.String', true);
    /**
     * Static representation of the [[contactPersonVipType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToFuncAndDept.CONTACT_PERSON_VIP_TYPE = _fieldBuilder.buildEdmTypeField('ContactPersonVIPType', 'Edm.String', true);
    /**
     * Static representation of the [[emailAddress]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToFuncAndDept.EMAIL_ADDRESS = _fieldBuilder.buildEdmTypeField('EmailAddress', 'Edm.String', true);
    /**
     * Static representation of the [[faxNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToFuncAndDept.FAX_NUMBER = _fieldBuilder.buildEdmTypeField('FaxNumber', 'Edm.String', true);
    /**
     * Static representation of the [[faxNumberExtension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToFuncAndDept.FAX_NUMBER_EXTENSION = _fieldBuilder.buildEdmTypeField('FaxNumberExtension', 'Edm.String', true);
    /**
     * Static representation of the [[phoneNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToFuncAndDept.PHONE_NUMBER = _fieldBuilder.buildEdmTypeField('PhoneNumber', 'Edm.String', true);
    /**
     * Static representation of the [[phoneNumberExtension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToFuncAndDept.PHONE_NUMBER_EXTENSION = _fieldBuilder.buildEdmTypeField('PhoneNumberExtension', 'Edm.String', true);
    /**
     * Static representation of the [[relationshipCategory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpContactToFuncAndDept.RELATIONSHIP_CATEGORY = _fieldBuilder.buildEdmTypeField('RelationshipCategory', 'Edm.String', true);
    /**
     * All fields of the BpContactToFuncAndDept entity.
     */
    BpContactToFuncAndDept._allFields = [
        BpContactToFuncAndDept.RELATIONSHIP_NUMBER,
        BpContactToFuncAndDept.BUSINESS_PARTNER_COMPANY,
        BpContactToFuncAndDept.BUSINESS_PARTNER_PERSON,
        BpContactToFuncAndDept.VALIDITY_END_DATE,
        BpContactToFuncAndDept.CONTACT_PERSON_AUTHORITY_TYPE,
        BpContactToFuncAndDept.CONTACT_PERSON_DEPARTMENT,
        BpContactToFuncAndDept.CONTACT_PERSON_DEPARTMENT_NAME,
        BpContactToFuncAndDept.CONTACT_PERSON_FUNCTION,
        BpContactToFuncAndDept.CONTACT_PERSON_FUNCTION_NAME,
        BpContactToFuncAndDept.CONTACT_PERSON_REMARK_TEXT,
        BpContactToFuncAndDept.CONTACT_PERSON_VIP_TYPE,
        BpContactToFuncAndDept.EMAIL_ADDRESS,
        BpContactToFuncAndDept.FAX_NUMBER,
        BpContactToFuncAndDept.FAX_NUMBER_EXTENSION,
        BpContactToFuncAndDept.PHONE_NUMBER,
        BpContactToFuncAndDept.PHONE_NUMBER_EXTENSION,
        BpContactToFuncAndDept.RELATIONSHIP_CATEGORY
    ];
    /**
     * All fields selector.
     */
    BpContactToFuncAndDept.ALL_FIELDS = new core_1.AllFields('*', BpContactToFuncAndDept);
    /**
     * All key fields of the BpContactToFuncAndDept entity.
     */
    BpContactToFuncAndDept._keyFields = [BpContactToFuncAndDept.RELATIONSHIP_NUMBER, BpContactToFuncAndDept.BUSINESS_PARTNER_COMPANY, BpContactToFuncAndDept.BUSINESS_PARTNER_PERSON, BpContactToFuncAndDept.VALIDITY_END_DATE];
    /**
     * Mapping of all key field names to the respective static field property BpContactToFuncAndDept.
     */
    BpContactToFuncAndDept._keys = BpContactToFuncAndDept._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(BpContactToFuncAndDept = exports.BpContactToFuncAndDept || (exports.BpContactToFuncAndDept = {}));
exports.BpContactToFuncAndDept = BpContactToFuncAndDept;
//# sourceMappingURL=BpContactToFuncAndDept.js.map