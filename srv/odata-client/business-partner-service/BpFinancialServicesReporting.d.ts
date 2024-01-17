import { BpFinancialServicesReportingRequestBuilder } from './BpFinancialServicesReportingRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field, OrderableEdmTypeField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "A_BPFinancialServicesReporting" of service "API_BUSINESS_PARTNER".
 */
export declare class BpFinancialServicesReporting extends EntityV2 implements BpFinancialServicesReportingType {
    /**
     * Technical entity name for BpFinancialServicesReporting.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Business Partner Number.
     * Maximum length: 10.
     */
    businessPartner: string;
    /**
     * Non-Resident According to Paragraph 4 AWG.
     * @nullable
     */
    bpIsNonResident?: boolean;
    /**
     * Start of Non-Residency According to Paragraph 4 AWG.
     * @nullable
     */
    bpNonResidencyStartDate?: Moment;
    /**
     * Recipient of Multimillion Loan According to Paragraph 14 GBA.
     * @nullable
     */
    bpIsMultimillionLoanRecipient?: boolean;
    /**
     * Borrower Number for Reporting a Loan According to GBA.
     * Maximum length: 8.
     * @nullable
     */
    bpLoanReportingBorrowerNumber?: string;
    /**
     * Borrower Entity Number Used to Report Loan acc. to GBA.
     * Maximum length: 8.
     * @nullable
     */
    bpLoanRptgBorrowerEntityNumber?: string;
    /**
     * Credit Standing Review According to Paragraph 18 GBA.
     * Maximum length: 2.
     * @nullable
     */
    bpCreditStandingReview?: string;
    /**
     * Date of Credit Standing Review According to Paragraph 18 GBA.
     * @nullable
     */
    bpCreditStandingReviewDate?: Moment;
    /**
     * Loan to Manager According to Paragraph 15 German Banking Act.
     * Maximum length: 2.
     * @nullable
     */
    businessPartnerLoanToManager?: string;
    /**
     * Organization Relationship.
     * Maximum length: 1.
     * @nullable
     */
    bpCompanyRelationship?: string;
    /**
     * Creditor Number for Reporting a Loan According to GBA.
     * Maximum length: 8.
     * @nullable
     */
    bpLoanReportingCreditorNumber?: string;
    /**
     * (OeNB) Ident Number.
     * Maximum length: 11.
     * @nullable
     */
    bpOeNbIdentNumber?: string;
    /**
     * Target Group According to OeNB.
     * Maximum length: 2.
     * @nullable
     */
    bpOeNbTargetGroup?: string;
    /**
     * Assign (OeNB) Ident Number.
     * Maximum length: 1.
     * @nullable
     */
    bpOeNbIdentNumberAssigned?: string;
    /**
     * Institute Number According to OeNB.
     * Maximum length: 7.
     * @nullable
     */
    bpOeNbInstituteNumber?: string;
    /**
     * Institute Subject to Austrian Reg. Reporting Requirements.
     * @nullable
     */
    businessPartnerIsOeNbInstitute?: boolean;
    /**
     * Group ID.
     * Maximum length: 15.
     * @nullable
     */
    businessPartnerGroup?: string;
    /**
     * Group Assignment Category.
     * Maximum length: 1.
     * @nullable
     */
    bpGroupAssignmentCategory?: string;
    /**
     * Group Name.
     * Maximum length: 50.
     * @nullable
     */
    businessPartnerGroupName?: string;
    /**
     * Legal Entity for Business Partner.
     * Maximum length: 2.
     * @nullable
     */
    businessPartnerLegalEntity?: string;
    /**
     * Business Partner Acc. to Para. 4, Sec. 2 of Asset Regulation.
     * Maximum length: 1.
     * @nullable
     */
    bpGerAstRglnRestrictedAstQuota?: string;
    /**
     * Debtor Group According to German Law (BerVersV, Template 5).
     * Maximum length: 1.
     * @nullable
     */
    businessPartnerDebtorGroup?: string;
    /**
     * Category of Business Purpose.
     * Maximum length: 2.
     * @nullable
     */
    businessPartnerBusinessPurpose?: string;
    /**
     * Risk Group.
     * Maximum length: 1.
     * @nullable
     */
    businessPartnerRiskGroup?: string;
    /**
     * Date of Risk Grouping.
     * @nullable
     */
    bpRiskGroupingDate?: Moment;
    /**
     * Group Affiliation Exists.
     * @nullable
     */
    bpHasGroupAffiliation?: boolean;
    /**
     * Monetary Financial Institution.
     * @nullable
     */
    bpIsMonetaryFinInstitution?: boolean;
    /**
     * Obligation to Submit to Credit Standing Review - Para.18 GBA.
     * @nullable
     */
    bpCrdtStandingReviewIsRequired?: boolean;
    /**
     * Large-Scale Loan Monitoring According to Paragraph 13b GBA.
     * @nullable
     */
    bpLoanMonitoringIsRequired?: boolean;
    /**
     * Crediting Relief in Accordance with Paragraph 13/3 GBA.
     * @nullable
     */
    bpHasCreditingRelief?: boolean;
    /**
     * Authorized Acc. to Para. 2(1)18b of German Asset Regulation.
     * @nullable
     */
    bpInvestInRstrcdAstIsAuthzd?: boolean;
    /**
     * Numeric Code for State Central Bank Country/Region Indicator.
     * Maximum length: 4.
     * @nullable
     */
    bpCentralBankCountryRegion?: string;
    /**
     * Returns an entity builder to construct instances of `BpFinancialServicesReporting`.
     * @returns A builder that constructs instances of entity type `BpFinancialServicesReporting`.
     */
    static builder(): EntityBuilderType<BpFinancialServicesReporting, BpFinancialServicesReportingType>;
    /**
     * Returns a request builder to construct requests for operations on the `BpFinancialServicesReporting` entity type.
     * @returns A `BpFinancialServicesReporting` request builder.
     */
    static requestBuilder(): BpFinancialServicesReportingRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `BpFinancialServicesReporting`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `BpFinancialServicesReporting`.
     */
    static customField(fieldName: string): CustomFieldV2<BpFinancialServicesReporting>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface BpFinancialServicesReportingType {
    businessPartner: string;
    bpIsNonResident?: boolean | null;
    bpNonResidencyStartDate?: Moment | null;
    bpIsMultimillionLoanRecipient?: boolean | null;
    bpLoanReportingBorrowerNumber?: string | null;
    bpLoanRptgBorrowerEntityNumber?: string | null;
    bpCreditStandingReview?: string | null;
    bpCreditStandingReviewDate?: Moment | null;
    businessPartnerLoanToManager?: string | null;
    bpCompanyRelationship?: string | null;
    bpLoanReportingCreditorNumber?: string | null;
    bpOeNbIdentNumber?: string | null;
    bpOeNbTargetGroup?: string | null;
    bpOeNbIdentNumberAssigned?: string | null;
    bpOeNbInstituteNumber?: string | null;
    businessPartnerIsOeNbInstitute?: boolean | null;
    businessPartnerGroup?: string | null;
    bpGroupAssignmentCategory?: string | null;
    businessPartnerGroupName?: string | null;
    businessPartnerLegalEntity?: string | null;
    bpGerAstRglnRestrictedAstQuota?: string | null;
    businessPartnerDebtorGroup?: string | null;
    businessPartnerBusinessPurpose?: string | null;
    businessPartnerRiskGroup?: string | null;
    bpRiskGroupingDate?: Moment | null;
    bpHasGroupAffiliation?: boolean | null;
    bpIsMonetaryFinInstitution?: boolean | null;
    bpCrdtStandingReviewIsRequired?: boolean | null;
    bpLoanMonitoringIsRequired?: boolean | null;
    bpHasCreditingRelief?: boolean | null;
    bpInvestInRstrcdAstIsAuthzd?: boolean | null;
    bpCentralBankCountryRegion?: string | null;
}
export declare namespace BpFinancialServicesReporting {
    /**
     * Static representation of the [[businessPartner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER: EdmTypeField<BpFinancialServicesReporting, "Edm.String", false, true>;
    /**
     * Static representation of the [[bpIsNonResident]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_IS_NON_RESIDENT: EdmTypeField<BpFinancialServicesReporting, "Edm.Boolean", true, true>;
    /**
     * Static representation of the [[bpNonResidencyStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_NON_RESIDENCY_START_DATE: OrderableEdmTypeField<BpFinancialServicesReporting, "Edm.DateTime", true, true>;
    /**
     * Static representation of the [[bpIsMultimillionLoanRecipient]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_IS_MULTIMILLION_LOAN_RECIPIENT: EdmTypeField<BpFinancialServicesReporting, "Edm.Boolean", true, true>;
    /**
     * Static representation of the [[bpLoanReportingBorrowerNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_LOAN_REPORTING_BORROWER_NUMBER: EdmTypeField<BpFinancialServicesReporting, "Edm.String", true, true>;
    /**
     * Static representation of the [[bpLoanRptgBorrowerEntityNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_LOAN_RPTG_BORROWER_ENTITY_NUMBER: EdmTypeField<BpFinancialServicesReporting, "Edm.String", true, true>;
    /**
     * Static representation of the [[bpCreditStandingReview]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_CREDIT_STANDING_REVIEW: EdmTypeField<BpFinancialServicesReporting, "Edm.String", true, true>;
    /**
     * Static representation of the [[bpCreditStandingReviewDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_CREDIT_STANDING_REVIEW_DATE: OrderableEdmTypeField<BpFinancialServicesReporting, "Edm.DateTime", true, true>;
    /**
     * Static representation of the [[businessPartnerLoanToManager]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER_LOAN_TO_MANAGER: EdmTypeField<BpFinancialServicesReporting, "Edm.String", true, true>;
    /**
     * Static representation of the [[bpCompanyRelationship]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_COMPANY_RELATIONSHIP: EdmTypeField<BpFinancialServicesReporting, "Edm.String", true, true>;
    /**
     * Static representation of the [[bpLoanReportingCreditorNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_LOAN_REPORTING_CREDITOR_NUMBER: EdmTypeField<BpFinancialServicesReporting, "Edm.String", true, true>;
    /**
     * Static representation of the [[bpOeNbIdentNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_OE_NB_IDENT_NUMBER: EdmTypeField<BpFinancialServicesReporting, "Edm.String", true, true>;
    /**
     * Static representation of the [[bpOeNbTargetGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_OE_NB_TARGET_GROUP: EdmTypeField<BpFinancialServicesReporting, "Edm.String", true, true>;
    /**
     * Static representation of the [[bpOeNbIdentNumberAssigned]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_OE_NB_IDENT_NUMBER_ASSIGNED: EdmTypeField<BpFinancialServicesReporting, "Edm.String", true, true>;
    /**
     * Static representation of the [[bpOeNbInstituteNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_OE_NB_INSTITUTE_NUMBER: EdmTypeField<BpFinancialServicesReporting, "Edm.String", true, true>;
    /**
     * Static representation of the [[businessPartnerIsOeNbInstitute]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER_IS_OE_NB_INSTITUTE: EdmTypeField<BpFinancialServicesReporting, "Edm.Boolean", true, true>;
    /**
     * Static representation of the [[businessPartnerGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER_GROUP: EdmTypeField<BpFinancialServicesReporting, "Edm.String", true, true>;
    /**
     * Static representation of the [[bpGroupAssignmentCategory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_GROUP_ASSIGNMENT_CATEGORY: EdmTypeField<BpFinancialServicesReporting, "Edm.String", true, true>;
    /**
     * Static representation of the [[businessPartnerGroupName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER_GROUP_NAME: EdmTypeField<BpFinancialServicesReporting, "Edm.String", true, true>;
    /**
     * Static representation of the [[businessPartnerLegalEntity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER_LEGAL_ENTITY: EdmTypeField<BpFinancialServicesReporting, "Edm.String", true, true>;
    /**
     * Static representation of the [[bpGerAstRglnRestrictedAstQuota]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_GER_AST_RGLN_RESTRICTED_AST_QUOTA: EdmTypeField<BpFinancialServicesReporting, "Edm.String", true, true>;
    /**
     * Static representation of the [[businessPartnerDebtorGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER_DEBTOR_GROUP: EdmTypeField<BpFinancialServicesReporting, "Edm.String", true, true>;
    /**
     * Static representation of the [[businessPartnerBusinessPurpose]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER_BUSINESS_PURPOSE: EdmTypeField<BpFinancialServicesReporting, "Edm.String", true, true>;
    /**
     * Static representation of the [[businessPartnerRiskGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER_RISK_GROUP: EdmTypeField<BpFinancialServicesReporting, "Edm.String", true, true>;
    /**
     * Static representation of the [[bpRiskGroupingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_RISK_GROUPING_DATE: OrderableEdmTypeField<BpFinancialServicesReporting, "Edm.DateTime", true, true>;
    /**
     * Static representation of the [[bpHasGroupAffiliation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_HAS_GROUP_AFFILIATION: EdmTypeField<BpFinancialServicesReporting, "Edm.Boolean", true, true>;
    /**
     * Static representation of the [[bpIsMonetaryFinInstitution]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_IS_MONETARY_FIN_INSTITUTION: EdmTypeField<BpFinancialServicesReporting, "Edm.Boolean", true, true>;
    /**
     * Static representation of the [[bpCrdtStandingReviewIsRequired]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_CRDT_STANDING_REVIEW_IS_REQUIRED: EdmTypeField<BpFinancialServicesReporting, "Edm.Boolean", true, true>;
    /**
     * Static representation of the [[bpLoanMonitoringIsRequired]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_LOAN_MONITORING_IS_REQUIRED: EdmTypeField<BpFinancialServicesReporting, "Edm.Boolean", true, true>;
    /**
     * Static representation of the [[bpHasCreditingRelief]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_HAS_CREDITING_RELIEF: EdmTypeField<BpFinancialServicesReporting, "Edm.Boolean", true, true>;
    /**
     * Static representation of the [[bpInvestInRstrcdAstIsAuthzd]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_INVEST_IN_RSTRCD_AST_IS_AUTHZD: EdmTypeField<BpFinancialServicesReporting, "Edm.Boolean", true, true>;
    /**
     * Static representation of the [[bpCentralBankCountryRegion]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_CENTRAL_BANK_COUNTRY_REGION: EdmTypeField<BpFinancialServicesReporting, "Edm.String", true, true>;
    /**
     * All fields of the BpFinancialServicesReporting entity.
     */
    const _allFields: Array<EdmTypeField<BpFinancialServicesReporting, 'Edm.String', false, true> | EdmTypeField<BpFinancialServicesReporting, 'Edm.Boolean', true, true> | OrderableEdmTypeField<BpFinancialServicesReporting, 'Edm.DateTime', true, true> | EdmTypeField<BpFinancialServicesReporting, 'Edm.String', true, true>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<BpFinancialServicesReporting>;
    /**
     * All key fields of the BpFinancialServicesReporting entity.
     */
    const _keyFields: Array<Field<BpFinancialServicesReporting, boolean, boolean>>;
    /**
     * Mapping of all key field names to the respective static field property BpFinancialServicesReporting.
     */
    const _keys: {
        [keys: string]: Field<BpFinancialServicesReporting, boolean, boolean>;
    };
}
//# sourceMappingURL=BpFinancialServicesReporting.d.ts.map