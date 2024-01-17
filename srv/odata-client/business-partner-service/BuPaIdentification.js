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
exports.BuPaIdentification = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var BuPaIdentificationRequestBuilder_1 = require("./BuPaIdentificationRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "A_BuPaIdentification" of service "API_BUSINESS_PARTNER".
 */
var BuPaIdentification = /** @class */ (function (_super) {
    __extends(BuPaIdentification, _super);
    function BuPaIdentification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `BuPaIdentification`.
     * @returns A builder that constructs instances of entity type `BuPaIdentification`.
     */
    BuPaIdentification.builder = function () {
        return core_1.EntityV2.entityBuilder(BuPaIdentification);
    };
    /**
     * Returns a request builder to construct requests for operations on the `BuPaIdentification` entity type.
     * @returns A `BuPaIdentification` request builder.
     */
    BuPaIdentification.requestBuilder = function () {
        return new BuPaIdentificationRequestBuilder_1.BuPaIdentificationRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `BuPaIdentification`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `BuPaIdentification`.
     */
    BuPaIdentification.customField = function (fieldName) {
        return core_1.EntityV2.customFieldSelector(fieldName, BuPaIdentification);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    BuPaIdentification.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for BuPaIdentification.
     */
    BuPaIdentification._entityName = 'A_BuPaIdentification';
    /**
     * Default url path for the according service.
     */
    BuPaIdentification._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
    return BuPaIdentification;
}(core_1.EntityV2));
exports.BuPaIdentification = BuPaIdentification;
(function (BuPaIdentification) {
    var _fieldBuilder = new core_1.FieldBuilder(BuPaIdentification);
    /**
     * Static representation of the [[businessPartner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BuPaIdentification.BUSINESS_PARTNER = _fieldBuilder.buildEdmTypeField('BusinessPartner', 'Edm.String', false);
    /**
     * Static representation of the [[bpIdentificationType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BuPaIdentification.BP_IDENTIFICATION_TYPE = _fieldBuilder.buildEdmTypeField('BPIdentificationType', 'Edm.String', false);
    /**
     * Static representation of the [[bpIdentificationNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BuPaIdentification.BP_IDENTIFICATION_NUMBER = _fieldBuilder.buildEdmTypeField('BPIdentificationNumber', 'Edm.String', false);
    /**
     * Static representation of the [[bpIdnNmbrIssuingInstitute]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BuPaIdentification.BP_IDN_NMBR_ISSUING_INSTITUTE = _fieldBuilder.buildEdmTypeField('BPIdnNmbrIssuingInstitute', 'Edm.String', true);
    /**
     * Static representation of the [[bpIdentificationEntryDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BuPaIdentification.BP_IDENTIFICATION_ENTRY_DATE = _fieldBuilder.buildEdmTypeField('BPIdentificationEntryDate', 'Edm.DateTime', true);
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BuPaIdentification.COUNTRY = _fieldBuilder.buildEdmTypeField('Country', 'Edm.String', true);
    /**
     * Static representation of the [[region]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BuPaIdentification.REGION = _fieldBuilder.buildEdmTypeField('Region', 'Edm.String', true);
    /**
     * Static representation of the [[validityStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BuPaIdentification.VALIDITY_START_DATE = _fieldBuilder.buildEdmTypeField('ValidityStartDate', 'Edm.DateTime', true);
    /**
     * Static representation of the [[validityEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BuPaIdentification.VALIDITY_END_DATE = _fieldBuilder.buildEdmTypeField('ValidityEndDate', 'Edm.DateTime', true);
    /**
     * Static representation of the [[authorizationGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BuPaIdentification.AUTHORIZATION_GROUP = _fieldBuilder.buildEdmTypeField('AuthorizationGroup', 'Edm.String', true);
    /**
     * All fields of the BuPaIdentification entity.
     */
    BuPaIdentification._allFields = [
        BuPaIdentification.BUSINESS_PARTNER,
        BuPaIdentification.BP_IDENTIFICATION_TYPE,
        BuPaIdentification.BP_IDENTIFICATION_NUMBER,
        BuPaIdentification.BP_IDN_NMBR_ISSUING_INSTITUTE,
        BuPaIdentification.BP_IDENTIFICATION_ENTRY_DATE,
        BuPaIdentification.COUNTRY,
        BuPaIdentification.REGION,
        BuPaIdentification.VALIDITY_START_DATE,
        BuPaIdentification.VALIDITY_END_DATE,
        BuPaIdentification.AUTHORIZATION_GROUP
    ];
    /**
     * All fields selector.
     */
    BuPaIdentification.ALL_FIELDS = new core_1.AllFields('*', BuPaIdentification);
    /**
     * All key fields of the BuPaIdentification entity.
     */
    BuPaIdentification._keyFields = [BuPaIdentification.BUSINESS_PARTNER, BuPaIdentification.BP_IDENTIFICATION_TYPE, BuPaIdentification.BP_IDENTIFICATION_NUMBER];
    /**
     * Mapping of all key field names to the respective static field property BuPaIdentification.
     */
    BuPaIdentification._keys = BuPaIdentification._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(BuPaIdentification = exports.BuPaIdentification || (exports.BuPaIdentification = {}));
exports.BuPaIdentification = BuPaIdentification;
//# sourceMappingURL=BuPaIdentification.js.map