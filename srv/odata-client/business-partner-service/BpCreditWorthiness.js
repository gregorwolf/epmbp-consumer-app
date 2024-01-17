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
exports.BpCreditWorthiness = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var BpCreditWorthinessRequestBuilder_1 = require("./BpCreditWorthinessRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "A_BPCreditWorthiness" of service "API_BUSINESS_PARTNER".
 */
var BpCreditWorthiness = /** @class */ (function (_super) {
    __extends(BpCreditWorthiness, _super);
    function BpCreditWorthiness() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `BpCreditWorthiness`.
     * @returns A builder that constructs instances of entity type `BpCreditWorthiness`.
     */
    BpCreditWorthiness.builder = function () {
        return core_1.EntityV2.entityBuilder(BpCreditWorthiness);
    };
    /**
     * Returns a request builder to construct requests for operations on the `BpCreditWorthiness` entity type.
     * @returns A `BpCreditWorthiness` request builder.
     */
    BpCreditWorthiness.requestBuilder = function () {
        return new BpCreditWorthinessRequestBuilder_1.BpCreditWorthinessRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `BpCreditWorthiness`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `BpCreditWorthiness`.
     */
    BpCreditWorthiness.customField = function (fieldName) {
        return core_1.EntityV2.customFieldSelector(fieldName, BpCreditWorthiness);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    BpCreditWorthiness.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for BpCreditWorthiness.
     */
    BpCreditWorthiness._entityName = 'A_BPCreditWorthiness';
    /**
     * Default url path for the according service.
     */
    BpCreditWorthiness._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
    return BpCreditWorthiness;
}(core_1.EntityV2));
exports.BpCreditWorthiness = BpCreditWorthiness;
(function (BpCreditWorthiness) {
    var _fieldBuilder = new core_1.FieldBuilder(BpCreditWorthiness);
    /**
     * Static representation of the [[businessPartner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpCreditWorthiness.BUSINESS_PARTNER = _fieldBuilder.buildEdmTypeField('BusinessPartner', 'Edm.String', false);
    /**
     * Static representation of the [[busPartCreditStanding]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpCreditWorthiness.BUS_PART_CREDIT_STANDING = _fieldBuilder.buildEdmTypeField('BusPartCreditStanding', 'Edm.String', true);
    /**
     * Static representation of the [[bpCreditStandingStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpCreditWorthiness.BP_CREDIT_STANDING_STATUS = _fieldBuilder.buildEdmTypeField('BPCreditStandingStatus', 'Edm.String', true);
    /**
     * Static representation of the [[creditRatingAgency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpCreditWorthiness.CREDIT_RATING_AGENCY = _fieldBuilder.buildEdmTypeField('CreditRatingAgency', 'Edm.String', true);
    /**
     * Static representation of the [[bpCreditStandingComment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpCreditWorthiness.BP_CREDIT_STANDING_COMMENT = _fieldBuilder.buildEdmTypeField('BPCreditStandingComment', 'Edm.String', true);
    /**
     * Static representation of the [[bpCreditStandingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpCreditWorthiness.BP_CREDIT_STANDING_DATE = _fieldBuilder.buildEdmTypeField('BPCreditStandingDate', 'Edm.DateTime', true);
    /**
     * Static representation of the [[bpCreditStandingRating]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpCreditWorthiness.BP_CREDIT_STANDING_RATING = _fieldBuilder.buildEdmTypeField('BPCreditStandingRating', 'Edm.String', true);
    /**
     * Static representation of the [[bpLegalProceedingStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpCreditWorthiness.BP_LEGAL_PROCEEDING_STATUS = _fieldBuilder.buildEdmTypeField('BPLegalProceedingStatus', 'Edm.String', true);
    /**
     * Static representation of the [[bpLglProceedingInitiationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpCreditWorthiness.BP_LGL_PROCEEDING_INITIATION_DATE = _fieldBuilder.buildEdmTypeField('BPLglProceedingInitiationDate', 'Edm.DateTime', true);
    /**
     * Static representation of the [[businessPartnerIsUnderOath]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpCreditWorthiness.BUSINESS_PARTNER_IS_UNDER_OATH = _fieldBuilder.buildEdmTypeField('BusinessPartnerIsUnderOath', 'Edm.Boolean', true);
    /**
     * Static representation of the [[businessPartnerOathDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpCreditWorthiness.BUSINESS_PARTNER_OATH_DATE = _fieldBuilder.buildEdmTypeField('BusinessPartnerOathDate', 'Edm.DateTime', true);
    /**
     * Static representation of the [[businessPartnerIsBankrupt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpCreditWorthiness.BUSINESS_PARTNER_IS_BANKRUPT = _fieldBuilder.buildEdmTypeField('BusinessPartnerIsBankrupt', 'Edm.Boolean', true);
    /**
     * Static representation of the [[businessPartnerBankruptcyDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpCreditWorthiness.BUSINESS_PARTNER_BANKRUPTCY_DATE = _fieldBuilder.buildEdmTypeField('BusinessPartnerBankruptcyDate', 'Edm.DateTime', true);
    /**
     * Static representation of the [[bpForeclosureIsInitiated]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpCreditWorthiness.BP_FORECLOSURE_IS_INITIATED = _fieldBuilder.buildEdmTypeField('BPForeclosureIsInitiated', 'Edm.Boolean', true);
    /**
     * Static representation of the [[bpForeclosureDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpCreditWorthiness.BP_FORECLOSURE_DATE = _fieldBuilder.buildEdmTypeField('BPForeclosureDate', 'Edm.DateTime', true);
    /**
     * Static representation of the [[bpCrdtWrthnssAccessChkIsActive]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpCreditWorthiness.BP_CRDT_WRTHNSS_ACCESS_CHK_IS_ACTIVE = _fieldBuilder.buildEdmTypeField('BPCrdtWrthnssAccessChkIsActive', 'Edm.String', true);
    /**
     * All fields of the BpCreditWorthiness entity.
     */
    BpCreditWorthiness._allFields = [
        BpCreditWorthiness.BUSINESS_PARTNER,
        BpCreditWorthiness.BUS_PART_CREDIT_STANDING,
        BpCreditWorthiness.BP_CREDIT_STANDING_STATUS,
        BpCreditWorthiness.CREDIT_RATING_AGENCY,
        BpCreditWorthiness.BP_CREDIT_STANDING_COMMENT,
        BpCreditWorthiness.BP_CREDIT_STANDING_DATE,
        BpCreditWorthiness.BP_CREDIT_STANDING_RATING,
        BpCreditWorthiness.BP_LEGAL_PROCEEDING_STATUS,
        BpCreditWorthiness.BP_LGL_PROCEEDING_INITIATION_DATE,
        BpCreditWorthiness.BUSINESS_PARTNER_IS_UNDER_OATH,
        BpCreditWorthiness.BUSINESS_PARTNER_OATH_DATE,
        BpCreditWorthiness.BUSINESS_PARTNER_IS_BANKRUPT,
        BpCreditWorthiness.BUSINESS_PARTNER_BANKRUPTCY_DATE,
        BpCreditWorthiness.BP_FORECLOSURE_IS_INITIATED,
        BpCreditWorthiness.BP_FORECLOSURE_DATE,
        BpCreditWorthiness.BP_CRDT_WRTHNSS_ACCESS_CHK_IS_ACTIVE
    ];
    /**
     * All fields selector.
     */
    BpCreditWorthiness.ALL_FIELDS = new core_1.AllFields('*', BpCreditWorthiness);
    /**
     * All key fields of the BpCreditWorthiness entity.
     */
    BpCreditWorthiness._keyFields = [BpCreditWorthiness.BUSINESS_PARTNER];
    /**
     * Mapping of all key field names to the respective static field property BpCreditWorthiness.
     */
    BpCreditWorthiness._keys = BpCreditWorthiness._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(BpCreditWorthiness = exports.BpCreditWorthiness || (exports.BpCreditWorthiness = {}));
exports.BpCreditWorthiness = BpCreditWorthiness;
//# sourceMappingURL=BpCreditWorthiness.js.map