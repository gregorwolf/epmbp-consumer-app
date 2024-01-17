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
exports.BpFinancialServicesReporting = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var BpFinancialServicesReportingRequestBuilder_1 = require("./BpFinancialServicesReportingRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "A_BPFinancialServicesReporting" of service "API_BUSINESS_PARTNER".
 */
var BpFinancialServicesReporting = /** @class */ (function (_super) {
    __extends(BpFinancialServicesReporting, _super);
    function BpFinancialServicesReporting() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `BpFinancialServicesReporting`.
     * @returns A builder that constructs instances of entity type `BpFinancialServicesReporting`.
     */
    BpFinancialServicesReporting.builder = function () {
        return core_1.EntityV2.entityBuilder(BpFinancialServicesReporting);
    };
    /**
     * Returns a request builder to construct requests for operations on the `BpFinancialServicesReporting` entity type.
     * @returns A `BpFinancialServicesReporting` request builder.
     */
    BpFinancialServicesReporting.requestBuilder = function () {
        return new BpFinancialServicesReportingRequestBuilder_1.BpFinancialServicesReportingRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `BpFinancialServicesReporting`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `BpFinancialServicesReporting`.
     */
    BpFinancialServicesReporting.customField = function (fieldName) {
        return core_1.EntityV2.customFieldSelector(fieldName, BpFinancialServicesReporting);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    BpFinancialServicesReporting.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for BpFinancialServicesReporting.
     */
    BpFinancialServicesReporting._entityName = 'A_BPFinancialServicesReporting';
    /**
     * Default url path for the according service.
     */
    BpFinancialServicesReporting._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
    return BpFinancialServicesReporting;
}(core_1.EntityV2));
exports.BpFinancialServicesReporting = BpFinancialServicesReporting;
(function (BpFinancialServicesReporting) {
    var _fieldBuilder = new core_1.FieldBuilder(BpFinancialServicesReporting);
    /**
     * Static representation of the [[businessPartner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpFinancialServicesReporting.BUSINESS_PARTNER = _fieldBuilder.buildEdmTypeField('BusinessPartner', 'Edm.String', false);
    /**
     * Static representation of the [[bpIsNonResident]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpFinancialServicesReporting.BP_IS_NON_RESIDENT = _fieldBuilder.buildEdmTypeField('BPIsNonResident', 'Edm.Boolean', true);
    /**
     * Static representation of the [[bpNonResidencyStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpFinancialServicesReporting.BP_NON_RESIDENCY_START_DATE = _fieldBuilder.buildEdmTypeField('BPNonResidencyStartDate', 'Edm.DateTime', true);
    /**
     * Static representation of the [[bpIsMultimillionLoanRecipient]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpFinancialServicesReporting.BP_IS_MULTIMILLION_LOAN_RECIPIENT = _fieldBuilder.buildEdmTypeField('BPIsMultimillionLoanRecipient', 'Edm.Boolean', true);
    /**
     * Static representation of the [[bpLoanReportingBorrowerNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpFinancialServicesReporting.BP_LOAN_REPORTING_BORROWER_NUMBER = _fieldBuilder.buildEdmTypeField('BPLoanReportingBorrowerNumber', 'Edm.String', true);
    /**
     * Static representation of the [[bpLoanRptgBorrowerEntityNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpFinancialServicesReporting.BP_LOAN_RPTG_BORROWER_ENTITY_NUMBER = _fieldBuilder.buildEdmTypeField('BPLoanRptgBorrowerEntityNumber', 'Edm.String', true);
    /**
     * Static representation of the [[bpCreditStandingReview]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpFinancialServicesReporting.BP_CREDIT_STANDING_REVIEW = _fieldBuilder.buildEdmTypeField('BPCreditStandingReview', 'Edm.String', true);
    /**
     * Static representation of the [[bpCreditStandingReviewDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpFinancialServicesReporting.BP_CREDIT_STANDING_REVIEW_DATE = _fieldBuilder.buildEdmTypeField('BPCreditStandingReviewDate', 'Edm.DateTime', true);
    /**
     * Static representation of the [[businessPartnerLoanToManager]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpFinancialServicesReporting.BUSINESS_PARTNER_LOAN_TO_MANAGER = _fieldBuilder.buildEdmTypeField('BusinessPartnerLoanToManager', 'Edm.String', true);
    /**
     * Static representation of the [[bpCompanyRelationship]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpFinancialServicesReporting.BP_COMPANY_RELATIONSHIP = _fieldBuilder.buildEdmTypeField('BPCompanyRelationship', 'Edm.String', true);
    /**
     * Static representation of the [[bpLoanReportingCreditorNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpFinancialServicesReporting.BP_LOAN_REPORTING_CREDITOR_NUMBER = _fieldBuilder.buildEdmTypeField('BPLoanReportingCreditorNumber', 'Edm.String', true);
    /**
     * Static representation of the [[bpOeNbIdentNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpFinancialServicesReporting.BP_OE_NB_IDENT_NUMBER = _fieldBuilder.buildEdmTypeField('BPOeNBIdentNumber', 'Edm.String', true);
    /**
     * Static representation of the [[bpOeNbTargetGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpFinancialServicesReporting.BP_OE_NB_TARGET_GROUP = _fieldBuilder.buildEdmTypeField('BPOeNBTargetGroup', 'Edm.String', true);
    /**
     * Static representation of the [[bpOeNbIdentNumberAssigned]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpFinancialServicesReporting.BP_OE_NB_IDENT_NUMBER_ASSIGNED = _fieldBuilder.buildEdmTypeField('BPOeNBIdentNumberAssigned', 'Edm.String', true);
    /**
     * Static representation of the [[bpOeNbInstituteNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpFinancialServicesReporting.BP_OE_NB_INSTITUTE_NUMBER = _fieldBuilder.buildEdmTypeField('BPOeNBInstituteNumber', 'Edm.String', true);
    /**
     * Static representation of the [[businessPartnerIsOeNbInstitute]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpFinancialServicesReporting.BUSINESS_PARTNER_IS_OE_NB_INSTITUTE = _fieldBuilder.buildEdmTypeField('BusinessPartnerIsOeNBInstitute', 'Edm.Boolean', true);
    /**
     * Static representation of the [[businessPartnerGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpFinancialServicesReporting.BUSINESS_PARTNER_GROUP = _fieldBuilder.buildEdmTypeField('BusinessPartnerGroup', 'Edm.String', true);
    /**
     * Static representation of the [[bpGroupAssignmentCategory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpFinancialServicesReporting.BP_GROUP_ASSIGNMENT_CATEGORY = _fieldBuilder.buildEdmTypeField('BPGroupAssignmentCategory', 'Edm.String', true);
    /**
     * Static representation of the [[businessPartnerGroupName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpFinancialServicesReporting.BUSINESS_PARTNER_GROUP_NAME = _fieldBuilder.buildEdmTypeField('BusinessPartnerGroupName', 'Edm.String', true);
    /**
     * Static representation of the [[businessPartnerLegalEntity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpFinancialServicesReporting.BUSINESS_PARTNER_LEGAL_ENTITY = _fieldBuilder.buildEdmTypeField('BusinessPartnerLegalEntity', 'Edm.String', true);
    /**
     * Static representation of the [[bpGerAstRglnRestrictedAstQuota]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpFinancialServicesReporting.BP_GER_AST_RGLN_RESTRICTED_AST_QUOTA = _fieldBuilder.buildEdmTypeField('BPGerAstRglnRestrictedAstQuota', 'Edm.String', true);
    /**
     * Static representation of the [[businessPartnerDebtorGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpFinancialServicesReporting.BUSINESS_PARTNER_DEBTOR_GROUP = _fieldBuilder.buildEdmTypeField('BusinessPartnerDebtorGroup', 'Edm.String', true);
    /**
     * Static representation of the [[businessPartnerBusinessPurpose]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpFinancialServicesReporting.BUSINESS_PARTNER_BUSINESS_PURPOSE = _fieldBuilder.buildEdmTypeField('BusinessPartnerBusinessPurpose', 'Edm.String', true);
    /**
     * Static representation of the [[businessPartnerRiskGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpFinancialServicesReporting.BUSINESS_PARTNER_RISK_GROUP = _fieldBuilder.buildEdmTypeField('BusinessPartnerRiskGroup', 'Edm.String', true);
    /**
     * Static representation of the [[bpRiskGroupingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpFinancialServicesReporting.BP_RISK_GROUPING_DATE = _fieldBuilder.buildEdmTypeField('BPRiskGroupingDate', 'Edm.DateTime', true);
    /**
     * Static representation of the [[bpHasGroupAffiliation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpFinancialServicesReporting.BP_HAS_GROUP_AFFILIATION = _fieldBuilder.buildEdmTypeField('BPHasGroupAffiliation', 'Edm.Boolean', true);
    /**
     * Static representation of the [[bpIsMonetaryFinInstitution]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpFinancialServicesReporting.BP_IS_MONETARY_FIN_INSTITUTION = _fieldBuilder.buildEdmTypeField('BPIsMonetaryFinInstitution', 'Edm.Boolean', true);
    /**
     * Static representation of the [[bpCrdtStandingReviewIsRequired]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpFinancialServicesReporting.BP_CRDT_STANDING_REVIEW_IS_REQUIRED = _fieldBuilder.buildEdmTypeField('BPCrdtStandingReviewIsRequired', 'Edm.Boolean', true);
    /**
     * Static representation of the [[bpLoanMonitoringIsRequired]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpFinancialServicesReporting.BP_LOAN_MONITORING_IS_REQUIRED = _fieldBuilder.buildEdmTypeField('BPLoanMonitoringIsRequired', 'Edm.Boolean', true);
    /**
     * Static representation of the [[bpHasCreditingRelief]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpFinancialServicesReporting.BP_HAS_CREDITING_RELIEF = _fieldBuilder.buildEdmTypeField('BPHasCreditingRelief', 'Edm.Boolean', true);
    /**
     * Static representation of the [[bpInvestInRstrcdAstIsAuthzd]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpFinancialServicesReporting.BP_INVEST_IN_RSTRCD_AST_IS_AUTHZD = _fieldBuilder.buildEdmTypeField('BPInvestInRstrcdAstIsAuthzd', 'Edm.Boolean', true);
    /**
     * Static representation of the [[bpCentralBankCountryRegion]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpFinancialServicesReporting.BP_CENTRAL_BANK_COUNTRY_REGION = _fieldBuilder.buildEdmTypeField('BPCentralBankCountryRegion', 'Edm.String', true);
    /**
     * All fields of the BpFinancialServicesReporting entity.
     */
    BpFinancialServicesReporting._allFields = [
        BpFinancialServicesReporting.BUSINESS_PARTNER,
        BpFinancialServicesReporting.BP_IS_NON_RESIDENT,
        BpFinancialServicesReporting.BP_NON_RESIDENCY_START_DATE,
        BpFinancialServicesReporting.BP_IS_MULTIMILLION_LOAN_RECIPIENT,
        BpFinancialServicesReporting.BP_LOAN_REPORTING_BORROWER_NUMBER,
        BpFinancialServicesReporting.BP_LOAN_RPTG_BORROWER_ENTITY_NUMBER,
        BpFinancialServicesReporting.BP_CREDIT_STANDING_REVIEW,
        BpFinancialServicesReporting.BP_CREDIT_STANDING_REVIEW_DATE,
        BpFinancialServicesReporting.BUSINESS_PARTNER_LOAN_TO_MANAGER,
        BpFinancialServicesReporting.BP_COMPANY_RELATIONSHIP,
        BpFinancialServicesReporting.BP_LOAN_REPORTING_CREDITOR_NUMBER,
        BpFinancialServicesReporting.BP_OE_NB_IDENT_NUMBER,
        BpFinancialServicesReporting.BP_OE_NB_TARGET_GROUP,
        BpFinancialServicesReporting.BP_OE_NB_IDENT_NUMBER_ASSIGNED,
        BpFinancialServicesReporting.BP_OE_NB_INSTITUTE_NUMBER,
        BpFinancialServicesReporting.BUSINESS_PARTNER_IS_OE_NB_INSTITUTE,
        BpFinancialServicesReporting.BUSINESS_PARTNER_GROUP,
        BpFinancialServicesReporting.BP_GROUP_ASSIGNMENT_CATEGORY,
        BpFinancialServicesReporting.BUSINESS_PARTNER_GROUP_NAME,
        BpFinancialServicesReporting.BUSINESS_PARTNER_LEGAL_ENTITY,
        BpFinancialServicesReporting.BP_GER_AST_RGLN_RESTRICTED_AST_QUOTA,
        BpFinancialServicesReporting.BUSINESS_PARTNER_DEBTOR_GROUP,
        BpFinancialServicesReporting.BUSINESS_PARTNER_BUSINESS_PURPOSE,
        BpFinancialServicesReporting.BUSINESS_PARTNER_RISK_GROUP,
        BpFinancialServicesReporting.BP_RISK_GROUPING_DATE,
        BpFinancialServicesReporting.BP_HAS_GROUP_AFFILIATION,
        BpFinancialServicesReporting.BP_IS_MONETARY_FIN_INSTITUTION,
        BpFinancialServicesReporting.BP_CRDT_STANDING_REVIEW_IS_REQUIRED,
        BpFinancialServicesReporting.BP_LOAN_MONITORING_IS_REQUIRED,
        BpFinancialServicesReporting.BP_HAS_CREDITING_RELIEF,
        BpFinancialServicesReporting.BP_INVEST_IN_RSTRCD_AST_IS_AUTHZD,
        BpFinancialServicesReporting.BP_CENTRAL_BANK_COUNTRY_REGION
    ];
    /**
     * All fields selector.
     */
    BpFinancialServicesReporting.ALL_FIELDS = new core_1.AllFields('*', BpFinancialServicesReporting);
    /**
     * All key fields of the BpFinancialServicesReporting entity.
     */
    BpFinancialServicesReporting._keyFields = [BpFinancialServicesReporting.BUSINESS_PARTNER];
    /**
     * Mapping of all key field names to the respective static field property BpFinancialServicesReporting.
     */
    BpFinancialServicesReporting._keys = BpFinancialServicesReporting._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(BpFinancialServicesReporting = exports.BpFinancialServicesReporting || (exports.BpFinancialServicesReporting = {}));
exports.BpFinancialServicesReporting = BpFinancialServicesReporting;
//# sourceMappingURL=BpFinancialServicesReporting.js.map