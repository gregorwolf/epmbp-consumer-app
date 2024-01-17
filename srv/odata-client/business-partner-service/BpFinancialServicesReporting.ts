/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BpFinancialServicesReportingRequestBuilder } from './BpFinancialServicesReportingRequestBuilder';
import { Moment } from 'moment';
import { AllFields, Constructable, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field, FieldBuilder, OrderableEdmTypeField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "A_BPFinancialServicesReporting" of service "API_BUSINESS_PARTNER".
 */
export class BpFinancialServicesReporting extends EntityV2 implements BpFinancialServicesReportingType {
  /**
   * Technical entity name for BpFinancialServicesReporting.
   */
  static _entityName = 'A_BPFinancialServicesReporting';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
  /**
   * Business Partner Number.
   * Maximum length: 10.
   */
  businessPartner!: string;
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
  static builder(): EntityBuilderType<BpFinancialServicesReporting, BpFinancialServicesReportingType> {
    return EntityV2.entityBuilder(BpFinancialServicesReporting);
  }

  /**
   * Returns a request builder to construct requests for operations on the `BpFinancialServicesReporting` entity type.
   * @returns A `BpFinancialServicesReporting` request builder.
   */
  static requestBuilder(): BpFinancialServicesReportingRequestBuilder {
    return new BpFinancialServicesReportingRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `BpFinancialServicesReporting`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `BpFinancialServicesReporting`.
   */
  static customField(fieldName: string): CustomFieldV2<BpFinancialServicesReporting> {
    return EntityV2.customFieldSelector(fieldName, BpFinancialServicesReporting);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
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

export namespace BpFinancialServicesReporting {
  const _fieldBuilder: FieldBuilder<Constructable<BpFinancialServicesReporting>> = new FieldBuilder(BpFinancialServicesReporting);
  /**
   * Static representation of the [[businessPartner]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER = _fieldBuilder.buildEdmTypeField('BusinessPartner', 'Edm.String', false);
  /**
   * Static representation of the [[bpIsNonResident]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_IS_NON_RESIDENT = _fieldBuilder.buildEdmTypeField('BPIsNonResident', 'Edm.Boolean', true);
  /**
   * Static representation of the [[bpNonResidencyStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_NON_RESIDENCY_START_DATE = _fieldBuilder.buildEdmTypeField('BPNonResidencyStartDate', 'Edm.DateTime', true);
  /**
   * Static representation of the [[bpIsMultimillionLoanRecipient]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_IS_MULTIMILLION_LOAN_RECIPIENT = _fieldBuilder.buildEdmTypeField('BPIsMultimillionLoanRecipient', 'Edm.Boolean', true);
  /**
   * Static representation of the [[bpLoanReportingBorrowerNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_LOAN_REPORTING_BORROWER_NUMBER = _fieldBuilder.buildEdmTypeField('BPLoanReportingBorrowerNumber', 'Edm.String', true);
  /**
   * Static representation of the [[bpLoanRptgBorrowerEntityNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_LOAN_RPTG_BORROWER_ENTITY_NUMBER = _fieldBuilder.buildEdmTypeField('BPLoanRptgBorrowerEntityNumber', 'Edm.String', true);
  /**
   * Static representation of the [[bpCreditStandingReview]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_CREDIT_STANDING_REVIEW = _fieldBuilder.buildEdmTypeField('BPCreditStandingReview', 'Edm.String', true);
  /**
   * Static representation of the [[bpCreditStandingReviewDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_CREDIT_STANDING_REVIEW_DATE = _fieldBuilder.buildEdmTypeField('BPCreditStandingReviewDate', 'Edm.DateTime', true);
  /**
   * Static representation of the [[businessPartnerLoanToManager]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER_LOAN_TO_MANAGER = _fieldBuilder.buildEdmTypeField('BusinessPartnerLoanToManager', 'Edm.String', true);
  /**
   * Static representation of the [[bpCompanyRelationship]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_COMPANY_RELATIONSHIP = _fieldBuilder.buildEdmTypeField('BPCompanyRelationship', 'Edm.String', true);
  /**
   * Static representation of the [[bpLoanReportingCreditorNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_LOAN_REPORTING_CREDITOR_NUMBER = _fieldBuilder.buildEdmTypeField('BPLoanReportingCreditorNumber', 'Edm.String', true);
  /**
   * Static representation of the [[bpOeNbIdentNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_OE_NB_IDENT_NUMBER = _fieldBuilder.buildEdmTypeField('BPOeNBIdentNumber', 'Edm.String', true);
  /**
   * Static representation of the [[bpOeNbTargetGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_OE_NB_TARGET_GROUP = _fieldBuilder.buildEdmTypeField('BPOeNBTargetGroup', 'Edm.String', true);
  /**
   * Static representation of the [[bpOeNbIdentNumberAssigned]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_OE_NB_IDENT_NUMBER_ASSIGNED = _fieldBuilder.buildEdmTypeField('BPOeNBIdentNumberAssigned', 'Edm.String', true);
  /**
   * Static representation of the [[bpOeNbInstituteNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_OE_NB_INSTITUTE_NUMBER = _fieldBuilder.buildEdmTypeField('BPOeNBInstituteNumber', 'Edm.String', true);
  /**
   * Static representation of the [[businessPartnerIsOeNbInstitute]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER_IS_OE_NB_INSTITUTE = _fieldBuilder.buildEdmTypeField('BusinessPartnerIsOeNBInstitute', 'Edm.Boolean', true);
  /**
   * Static representation of the [[businessPartnerGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER_GROUP = _fieldBuilder.buildEdmTypeField('BusinessPartnerGroup', 'Edm.String', true);
  /**
   * Static representation of the [[bpGroupAssignmentCategory]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_GROUP_ASSIGNMENT_CATEGORY = _fieldBuilder.buildEdmTypeField('BPGroupAssignmentCategory', 'Edm.String', true);
  /**
   * Static representation of the [[businessPartnerGroupName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER_GROUP_NAME = _fieldBuilder.buildEdmTypeField('BusinessPartnerGroupName', 'Edm.String', true);
  /**
   * Static representation of the [[businessPartnerLegalEntity]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER_LEGAL_ENTITY = _fieldBuilder.buildEdmTypeField('BusinessPartnerLegalEntity', 'Edm.String', true);
  /**
   * Static representation of the [[bpGerAstRglnRestrictedAstQuota]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_GER_AST_RGLN_RESTRICTED_AST_QUOTA = _fieldBuilder.buildEdmTypeField('BPGerAstRglnRestrictedAstQuota', 'Edm.String', true);
  /**
   * Static representation of the [[businessPartnerDebtorGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER_DEBTOR_GROUP = _fieldBuilder.buildEdmTypeField('BusinessPartnerDebtorGroup', 'Edm.String', true);
  /**
   * Static representation of the [[businessPartnerBusinessPurpose]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER_BUSINESS_PURPOSE = _fieldBuilder.buildEdmTypeField('BusinessPartnerBusinessPurpose', 'Edm.String', true);
  /**
   * Static representation of the [[businessPartnerRiskGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER_RISK_GROUP = _fieldBuilder.buildEdmTypeField('BusinessPartnerRiskGroup', 'Edm.String', true);
  /**
   * Static representation of the [[bpRiskGroupingDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_RISK_GROUPING_DATE = _fieldBuilder.buildEdmTypeField('BPRiskGroupingDate', 'Edm.DateTime', true);
  /**
   * Static representation of the [[bpHasGroupAffiliation]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_HAS_GROUP_AFFILIATION = _fieldBuilder.buildEdmTypeField('BPHasGroupAffiliation', 'Edm.Boolean', true);
  /**
   * Static representation of the [[bpIsMonetaryFinInstitution]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_IS_MONETARY_FIN_INSTITUTION = _fieldBuilder.buildEdmTypeField('BPIsMonetaryFinInstitution', 'Edm.Boolean', true);
  /**
   * Static representation of the [[bpCrdtStandingReviewIsRequired]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_CRDT_STANDING_REVIEW_IS_REQUIRED = _fieldBuilder.buildEdmTypeField('BPCrdtStandingReviewIsRequired', 'Edm.Boolean', true);
  /**
   * Static representation of the [[bpLoanMonitoringIsRequired]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_LOAN_MONITORING_IS_REQUIRED = _fieldBuilder.buildEdmTypeField('BPLoanMonitoringIsRequired', 'Edm.Boolean', true);
  /**
   * Static representation of the [[bpHasCreditingRelief]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_HAS_CREDITING_RELIEF = _fieldBuilder.buildEdmTypeField('BPHasCreditingRelief', 'Edm.Boolean', true);
  /**
   * Static representation of the [[bpInvestInRstrcdAstIsAuthzd]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_INVEST_IN_RSTRCD_AST_IS_AUTHZD = _fieldBuilder.buildEdmTypeField('BPInvestInRstrcdAstIsAuthzd', 'Edm.Boolean', true);
  /**
   * Static representation of the [[bpCentralBankCountryRegion]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_CENTRAL_BANK_COUNTRY_REGION = _fieldBuilder.buildEdmTypeField('BPCentralBankCountryRegion', 'Edm.String', true);
  /**
   * All fields of the BpFinancialServicesReporting entity.
   */
  export const _allFields: Array<EdmTypeField<BpFinancialServicesReporting, 'Edm.String', false, true> | EdmTypeField<BpFinancialServicesReporting, 'Edm.Boolean', true, true> | OrderableEdmTypeField<BpFinancialServicesReporting, 'Edm.DateTime', true, true> | EdmTypeField<BpFinancialServicesReporting, 'Edm.String', true, true>> = [
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
  export const ALL_FIELDS: AllFields<BpFinancialServicesReporting> = new AllFields('*', BpFinancialServicesReporting);
  /**
   * All key fields of the BpFinancialServicesReporting entity.
   */
  export const _keyFields: Array<Field<BpFinancialServicesReporting, boolean, boolean>> = [BpFinancialServicesReporting.BUSINESS_PARTNER];
  /**
   * Mapping of all key field names to the respective static field property BpFinancialServicesReporting.
   */
  export const _keys: { [keys: string]: Field<BpFinancialServicesReporting, boolean, boolean> } = BpFinancialServicesReporting._keyFields.reduce((acc: { [keys: string]: Field<BpFinancialServicesReporting, boolean, boolean> }, field: Field<BpFinancialServicesReporting, boolean, boolean>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
