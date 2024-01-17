/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BpFiscalYearInformationRequestBuilder } from './BpFiscalYearInformationRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, Constructable, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field, FieldBuilder, OrderableEdmTypeField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "A_BPFiscalYearInformation" of service "API_BUSINESS_PARTNER".
 */
export class BpFiscalYearInformation extends EntityV2 implements BpFiscalYearInformationType {
  /**
   * Technical entity name for BpFiscalYearInformation.
   */
  static _entityName = 'A_BPFiscalYearInformation';
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
   * Fiscal year.
   * Maximum length: 4.
   */
  businessPartnerFiscalYear!: string;
  /**
   * Balance Sheet Currency.
   * Maximum length: 5.
   * @nullable
   */
  bpBalanceSheetCurrency?: string;
  /**
   * Date of Annual Stockholders Meeting.
   * @nullable
   */
  bpAnnualStockholderMeetingDate?: Moment;
  /**
   * Fiscal Year Start Date.
   * @nullable
   */
  bpFiscalYearStartDate?: Moment;
  /**
   * Fiscal Year End Date.
   * @nullable
   */
  bpFiscalYearEndDate?: Moment;
  /**
   * Year-End Closing.
   * @nullable
   */
  bpFiscalYearIsClosed?: boolean;
  /**
   * Year-End Closing Date for Fiscal Year.
   * @nullable
   */
  bpFiscalYearClosingDate?: Moment;
  /**
   * Date of Consolidated Financial Statements of Group Company.
   * @nullable
   */
  bpFsclYrCnsldtdFinStatementDte?: Moment;
  /**
   * Amount of Authorized Capital Stock for Company.
   * @nullable
   */
  bpCapitalStockAmtInBalShtCrcy?: BigNumber;
  /**
   * Amount of Issued Stock Capital for Company.
   * @nullable
   */
  bpIssdStockCptlAmtInBalShtCrcy?: BigNumber;
  /**
   * Amount of Participation Certificates Outstanding for Company.
   * @nullable
   */
  bpPartcipnCertAmtInBalShtCrcy?: BigNumber;
  /**
   * Amount of Equity Capital for Company.
   * @nullable
   */
  bpEquityCapitalAmtInBalShtCrcy?: BigNumber;
  /**
   * Gross Premium.
   * @nullable
   */
  bpGrossPremiumAmtInBalShtCrcy?: BigNumber;
  /**
   * Net Premium.
   * @nullable
   */
  bpNetPremiumAmtInBalShtCrcy?: BigNumber;
  /**
   * Amount of Annual Sales for Company.
   * @nullable
   */
  bpAnnualSalesAmtInBalShtCrcy?: BigNumber;
  /**
   * Amount of Annual Net Income/Net Loss for Company.
   * @nullable
   */
  bpAnnualNetIncAmtInBalShtCrcy?: BigNumber;
  /**
   * Dividend/Profit Distribution Amount for Company.
   * @nullable
   */
  bpDividendDistrAmtInBalShtCrcy?: BigNumber;
  /**
   * Debt Ratio in Years.
   * @nullable
   */
  bpDebtRatioInYears?: BigNumber;
  /**
   * Amount of Annual Profit/Loss for Organization.
   * @nullable
   */
  bpAnnualPnLAmtInBalShtCrcy?: BigNumber;
  /**
   * Amount of Balance Sheet Total for Company.
   * @nullable
   */
  bpBalSheetTotalAmtInBalShtCrcy?: BigNumber;
  /**
   * Number of Employees in Company.
   * Maximum length: 7.
   * @nullable
   */
  bpNumberOfEmployees?: string;
  /**
   * Amount of Capital Reserve for Company.
   * @nullable
   */
  bpCptlReserveAmtInBalShtCrcy?: BigNumber;
  /**
   * Amount of Legal Revenue Reserves for Company.
   * @nullable
   */
  bpLglRevnRsrvAmtInBalShtCrcy?: BigNumber;
  /**
   * Revenue Reserves for Own Stock.
   * @nullable
   */
  revnRsrvOwnStkAmtInBalShtCrcy?: BigNumber;
  /**
   * Amount of Statutory Revenue Reserve for Company.
   * @nullable
   */
  bpStatryReserveAmtInBalShtCrcy?: BigNumber;
  /**
   * Amount of Other Revenue Reserves for Company.
   * @nullable
   */
  bpOthRevnRsrvAmtInBalShtCrcy?: BigNumber;
  /**
   * Amount of Profit/Loss Carried Forward for Company.
   * @nullable
   */
  bpPnLCarryfwdAmtInBalShtCrcy?: BigNumber;
  /**
   * Amount of Subordinated Liabilities for Company.
   * @nullable
   */
  bpSuborddLbltyAmtInBalShtCrcy?: BigNumber;
  /**
   * Return on Total Capital Employed for Company in Percent.
   * @nullable
   */
  bpRetOnTotalCptlEmpldInPercent?: BigNumber;
  /**
   * Debt Clearance Period in Years.
   * @nullable
   */
  bpDebtClearancePeriodInYears?: BigNumber;
  /**
   * Financing Coefficient for Company in Percent.
   * @nullable
   */
  bpFinancingCoeffInPercent?: BigNumber;
  /**
   * Equity Ratio of Company in Percent.
   * @nullable
   */
  bpEquityRatioInPercent?: BigNumber;

  /**
   * Returns an entity builder to construct instances of `BpFiscalYearInformation`.
   * @returns A builder that constructs instances of entity type `BpFiscalYearInformation`.
   */
  static builder(): EntityBuilderType<BpFiscalYearInformation, BpFiscalYearInformationType> {
    return EntityV2.entityBuilder(BpFiscalYearInformation);
  }

  /**
   * Returns a request builder to construct requests for operations on the `BpFiscalYearInformation` entity type.
   * @returns A `BpFiscalYearInformation` request builder.
   */
  static requestBuilder(): BpFiscalYearInformationRequestBuilder {
    return new BpFiscalYearInformationRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `BpFiscalYearInformation`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `BpFiscalYearInformation`.
   */
  static customField(fieldName: string): CustomFieldV2<BpFiscalYearInformation> {
    return EntityV2.customFieldSelector(fieldName, BpFiscalYearInformation);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface BpFiscalYearInformationType {
  businessPartner: string;
  businessPartnerFiscalYear: string;
  bpBalanceSheetCurrency?: string | null;
  bpAnnualStockholderMeetingDate?: Moment | null;
  bpFiscalYearStartDate?: Moment | null;
  bpFiscalYearEndDate?: Moment | null;
  bpFiscalYearIsClosed?: boolean | null;
  bpFiscalYearClosingDate?: Moment | null;
  bpFsclYrCnsldtdFinStatementDte?: Moment | null;
  bpCapitalStockAmtInBalShtCrcy?: BigNumber | null;
  bpIssdStockCptlAmtInBalShtCrcy?: BigNumber | null;
  bpPartcipnCertAmtInBalShtCrcy?: BigNumber | null;
  bpEquityCapitalAmtInBalShtCrcy?: BigNumber | null;
  bpGrossPremiumAmtInBalShtCrcy?: BigNumber | null;
  bpNetPremiumAmtInBalShtCrcy?: BigNumber | null;
  bpAnnualSalesAmtInBalShtCrcy?: BigNumber | null;
  bpAnnualNetIncAmtInBalShtCrcy?: BigNumber | null;
  bpDividendDistrAmtInBalShtCrcy?: BigNumber | null;
  bpDebtRatioInYears?: BigNumber | null;
  bpAnnualPnLAmtInBalShtCrcy?: BigNumber | null;
  bpBalSheetTotalAmtInBalShtCrcy?: BigNumber | null;
  bpNumberOfEmployees?: string | null;
  bpCptlReserveAmtInBalShtCrcy?: BigNumber | null;
  bpLglRevnRsrvAmtInBalShtCrcy?: BigNumber | null;
  revnRsrvOwnStkAmtInBalShtCrcy?: BigNumber | null;
  bpStatryReserveAmtInBalShtCrcy?: BigNumber | null;
  bpOthRevnRsrvAmtInBalShtCrcy?: BigNumber | null;
  bpPnLCarryfwdAmtInBalShtCrcy?: BigNumber | null;
  bpSuborddLbltyAmtInBalShtCrcy?: BigNumber | null;
  bpRetOnTotalCptlEmpldInPercent?: BigNumber | null;
  bpDebtClearancePeriodInYears?: BigNumber | null;
  bpFinancingCoeffInPercent?: BigNumber | null;
  bpEquityRatioInPercent?: BigNumber | null;
}

export namespace BpFiscalYearInformation {
  const _fieldBuilder: FieldBuilder<Constructable<BpFiscalYearInformation>> = new FieldBuilder(BpFiscalYearInformation);
  /**
   * Static representation of the [[businessPartner]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER = _fieldBuilder.buildEdmTypeField('BusinessPartner', 'Edm.String', false);
  /**
   * Static representation of the [[businessPartnerFiscalYear]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER_FISCAL_YEAR = _fieldBuilder.buildEdmTypeField('BusinessPartnerFiscalYear', 'Edm.String', false);
  /**
   * Static representation of the [[bpBalanceSheetCurrency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_BALANCE_SHEET_CURRENCY = _fieldBuilder.buildEdmTypeField('BPBalanceSheetCurrency', 'Edm.String', true);
  /**
   * Static representation of the [[bpAnnualStockholderMeetingDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_ANNUAL_STOCKHOLDER_MEETING_DATE = _fieldBuilder.buildEdmTypeField('BPAnnualStockholderMeetingDate', 'Edm.DateTime', true);
  /**
   * Static representation of the [[bpFiscalYearStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_FISCAL_YEAR_START_DATE = _fieldBuilder.buildEdmTypeField('BPFiscalYearStartDate', 'Edm.DateTime', true);
  /**
   * Static representation of the [[bpFiscalYearEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_FISCAL_YEAR_END_DATE = _fieldBuilder.buildEdmTypeField('BPFiscalYearEndDate', 'Edm.DateTime', true);
  /**
   * Static representation of the [[bpFiscalYearIsClosed]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_FISCAL_YEAR_IS_CLOSED = _fieldBuilder.buildEdmTypeField('BPFiscalYearIsClosed', 'Edm.Boolean', true);
  /**
   * Static representation of the [[bpFiscalYearClosingDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_FISCAL_YEAR_CLOSING_DATE = _fieldBuilder.buildEdmTypeField('BPFiscalYearClosingDate', 'Edm.DateTime', true);
  /**
   * Static representation of the [[bpFsclYrCnsldtdFinStatementDte]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_FSCL_YR_CNSLDTD_FIN_STATEMENT_DTE = _fieldBuilder.buildEdmTypeField('BPFsclYrCnsldtdFinStatementDte', 'Edm.DateTime', true);
  /**
   * Static representation of the [[bpCapitalStockAmtInBalShtCrcy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_CAPITAL_STOCK_AMT_IN_BAL_SHT_CRCY = _fieldBuilder.buildEdmTypeField('BPCapitalStockAmtInBalShtCrcy', 'Edm.Decimal', true);
  /**
   * Static representation of the [[bpIssdStockCptlAmtInBalShtCrcy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_ISSD_STOCK_CPTL_AMT_IN_BAL_SHT_CRCY = _fieldBuilder.buildEdmTypeField('BPIssdStockCptlAmtInBalShtCrcy', 'Edm.Decimal', true);
  /**
   * Static representation of the [[bpPartcipnCertAmtInBalShtCrcy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_PARTCIPN_CERT_AMT_IN_BAL_SHT_CRCY = _fieldBuilder.buildEdmTypeField('BPPartcipnCertAmtInBalShtCrcy', 'Edm.Decimal', true);
  /**
   * Static representation of the [[bpEquityCapitalAmtInBalShtCrcy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_EQUITY_CAPITAL_AMT_IN_BAL_SHT_CRCY = _fieldBuilder.buildEdmTypeField('BPEquityCapitalAmtInBalShtCrcy', 'Edm.Decimal', true);
  /**
   * Static representation of the [[bpGrossPremiumAmtInBalShtCrcy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_GROSS_PREMIUM_AMT_IN_BAL_SHT_CRCY = _fieldBuilder.buildEdmTypeField('BPGrossPremiumAmtInBalShtCrcy', 'Edm.Decimal', true);
  /**
   * Static representation of the [[bpNetPremiumAmtInBalShtCrcy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_NET_PREMIUM_AMT_IN_BAL_SHT_CRCY = _fieldBuilder.buildEdmTypeField('BPNetPremiumAmtInBalShtCrcy', 'Edm.Decimal', true);
  /**
   * Static representation of the [[bpAnnualSalesAmtInBalShtCrcy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_ANNUAL_SALES_AMT_IN_BAL_SHT_CRCY = _fieldBuilder.buildEdmTypeField('BPAnnualSalesAmtInBalShtCrcy', 'Edm.Decimal', true);
  /**
   * Static representation of the [[bpAnnualNetIncAmtInBalShtCrcy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_ANNUAL_NET_INC_AMT_IN_BAL_SHT_CRCY = _fieldBuilder.buildEdmTypeField('BPAnnualNetIncAmtInBalShtCrcy', 'Edm.Decimal', true);
  /**
   * Static representation of the [[bpDividendDistrAmtInBalShtCrcy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_DIVIDEND_DISTR_AMT_IN_BAL_SHT_CRCY = _fieldBuilder.buildEdmTypeField('BPDividendDistrAmtInBalShtCrcy', 'Edm.Decimal', true);
  /**
   * Static representation of the [[bpDebtRatioInYears]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_DEBT_RATIO_IN_YEARS = _fieldBuilder.buildEdmTypeField('BPDebtRatioInYears', 'Edm.Decimal', true);
  /**
   * Static representation of the [[bpAnnualPnLAmtInBalShtCrcy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_ANNUAL_PN_L_AMT_IN_BAL_SHT_CRCY = _fieldBuilder.buildEdmTypeField('BPAnnualPnLAmtInBalShtCrcy', 'Edm.Decimal', true);
  /**
   * Static representation of the [[bpBalSheetTotalAmtInBalShtCrcy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_BAL_SHEET_TOTAL_AMT_IN_BAL_SHT_CRCY = _fieldBuilder.buildEdmTypeField('BPBalSheetTotalAmtInBalShtCrcy', 'Edm.Decimal', true);
  /**
   * Static representation of the [[bpNumberOfEmployees]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_NUMBER_OF_EMPLOYEES = _fieldBuilder.buildEdmTypeField('BPNumberOfEmployees', 'Edm.String', true);
  /**
   * Static representation of the [[bpCptlReserveAmtInBalShtCrcy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_CPTL_RESERVE_AMT_IN_BAL_SHT_CRCY = _fieldBuilder.buildEdmTypeField('BPCptlReserveAmtInBalShtCrcy', 'Edm.Decimal', true);
  /**
   * Static representation of the [[bpLglRevnRsrvAmtInBalShtCrcy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_LGL_REVN_RSRV_AMT_IN_BAL_SHT_CRCY = _fieldBuilder.buildEdmTypeField('BPLglRevnRsrvAmtInBalShtCrcy', 'Edm.Decimal', true);
  /**
   * Static representation of the [[revnRsrvOwnStkAmtInBalShtCrcy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REVN_RSRV_OWN_STK_AMT_IN_BAL_SHT_CRCY = _fieldBuilder.buildEdmTypeField('RevnRsrvOwnStkAmtInBalShtCrcy', 'Edm.Decimal', true);
  /**
   * Static representation of the [[bpStatryReserveAmtInBalShtCrcy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_STATRY_RESERVE_AMT_IN_BAL_SHT_CRCY = _fieldBuilder.buildEdmTypeField('BPStatryReserveAmtInBalShtCrcy', 'Edm.Decimal', true);
  /**
   * Static representation of the [[bpOthRevnRsrvAmtInBalShtCrcy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_OTH_REVN_RSRV_AMT_IN_BAL_SHT_CRCY = _fieldBuilder.buildEdmTypeField('BPOthRevnRsrvAmtInBalShtCrcy', 'Edm.Decimal', true);
  /**
   * Static representation of the [[bpPnLCarryfwdAmtInBalShtCrcy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_PN_L_CARRYFWD_AMT_IN_BAL_SHT_CRCY = _fieldBuilder.buildEdmTypeField('BPPnLCarryfwdAmtInBalShtCrcy', 'Edm.Decimal', true);
  /**
   * Static representation of the [[bpSuborddLbltyAmtInBalShtCrcy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_SUBORDD_LBLTY_AMT_IN_BAL_SHT_CRCY = _fieldBuilder.buildEdmTypeField('BPSuborddLbltyAmtInBalShtCrcy', 'Edm.Decimal', true);
  /**
   * Static representation of the [[bpRetOnTotalCptlEmpldInPercent]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_RET_ON_TOTAL_CPTL_EMPLD_IN_PERCENT = _fieldBuilder.buildEdmTypeField('BPRetOnTotalCptlEmpldInPercent', 'Edm.Decimal', true);
  /**
   * Static representation of the [[bpDebtClearancePeriodInYears]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_DEBT_CLEARANCE_PERIOD_IN_YEARS = _fieldBuilder.buildEdmTypeField('BPDebtClearancePeriodInYears', 'Edm.Decimal', true);
  /**
   * Static representation of the [[bpFinancingCoeffInPercent]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_FINANCING_COEFF_IN_PERCENT = _fieldBuilder.buildEdmTypeField('BPFinancingCoeffInPercent', 'Edm.Decimal', true);
  /**
   * Static representation of the [[bpEquityRatioInPercent]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_EQUITY_RATIO_IN_PERCENT = _fieldBuilder.buildEdmTypeField('BPEquityRatioInPercent', 'Edm.Decimal', true);
  /**
   * All fields of the BpFiscalYearInformation entity.
   */
  export const _allFields: Array<EdmTypeField<BpFiscalYearInformation, 'Edm.String', false, true> | EdmTypeField<BpFiscalYearInformation, 'Edm.String', true, true> | OrderableEdmTypeField<BpFiscalYearInformation, 'Edm.DateTime', true, true> | EdmTypeField<BpFiscalYearInformation, 'Edm.Boolean', true, true> | OrderableEdmTypeField<BpFiscalYearInformation, 'Edm.Decimal', true, true>> = [
    BpFiscalYearInformation.BUSINESS_PARTNER,
    BpFiscalYearInformation.BUSINESS_PARTNER_FISCAL_YEAR,
    BpFiscalYearInformation.BP_BALANCE_SHEET_CURRENCY,
    BpFiscalYearInformation.BP_ANNUAL_STOCKHOLDER_MEETING_DATE,
    BpFiscalYearInformation.BP_FISCAL_YEAR_START_DATE,
    BpFiscalYearInformation.BP_FISCAL_YEAR_END_DATE,
    BpFiscalYearInformation.BP_FISCAL_YEAR_IS_CLOSED,
    BpFiscalYearInformation.BP_FISCAL_YEAR_CLOSING_DATE,
    BpFiscalYearInformation.BP_FSCL_YR_CNSLDTD_FIN_STATEMENT_DTE,
    BpFiscalYearInformation.BP_CAPITAL_STOCK_AMT_IN_BAL_SHT_CRCY,
    BpFiscalYearInformation.BP_ISSD_STOCK_CPTL_AMT_IN_BAL_SHT_CRCY,
    BpFiscalYearInformation.BP_PARTCIPN_CERT_AMT_IN_BAL_SHT_CRCY,
    BpFiscalYearInformation.BP_EQUITY_CAPITAL_AMT_IN_BAL_SHT_CRCY,
    BpFiscalYearInformation.BP_GROSS_PREMIUM_AMT_IN_BAL_SHT_CRCY,
    BpFiscalYearInformation.BP_NET_PREMIUM_AMT_IN_BAL_SHT_CRCY,
    BpFiscalYearInformation.BP_ANNUAL_SALES_AMT_IN_BAL_SHT_CRCY,
    BpFiscalYearInformation.BP_ANNUAL_NET_INC_AMT_IN_BAL_SHT_CRCY,
    BpFiscalYearInformation.BP_DIVIDEND_DISTR_AMT_IN_BAL_SHT_CRCY,
    BpFiscalYearInformation.BP_DEBT_RATIO_IN_YEARS,
    BpFiscalYearInformation.BP_ANNUAL_PN_L_AMT_IN_BAL_SHT_CRCY,
    BpFiscalYearInformation.BP_BAL_SHEET_TOTAL_AMT_IN_BAL_SHT_CRCY,
    BpFiscalYearInformation.BP_NUMBER_OF_EMPLOYEES,
    BpFiscalYearInformation.BP_CPTL_RESERVE_AMT_IN_BAL_SHT_CRCY,
    BpFiscalYearInformation.BP_LGL_REVN_RSRV_AMT_IN_BAL_SHT_CRCY,
    BpFiscalYearInformation.REVN_RSRV_OWN_STK_AMT_IN_BAL_SHT_CRCY,
    BpFiscalYearInformation.BP_STATRY_RESERVE_AMT_IN_BAL_SHT_CRCY,
    BpFiscalYearInformation.BP_OTH_REVN_RSRV_AMT_IN_BAL_SHT_CRCY,
    BpFiscalYearInformation.BP_PN_L_CARRYFWD_AMT_IN_BAL_SHT_CRCY,
    BpFiscalYearInformation.BP_SUBORDD_LBLTY_AMT_IN_BAL_SHT_CRCY,
    BpFiscalYearInformation.BP_RET_ON_TOTAL_CPTL_EMPLD_IN_PERCENT,
    BpFiscalYearInformation.BP_DEBT_CLEARANCE_PERIOD_IN_YEARS,
    BpFiscalYearInformation.BP_FINANCING_COEFF_IN_PERCENT,
    BpFiscalYearInformation.BP_EQUITY_RATIO_IN_PERCENT
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<BpFiscalYearInformation> = new AllFields('*', BpFiscalYearInformation);
  /**
   * All key fields of the BpFiscalYearInformation entity.
   */
  export const _keyFields: Array<Field<BpFiscalYearInformation, boolean, boolean>> = [BpFiscalYearInformation.BUSINESS_PARTNER, BpFiscalYearInformation.BUSINESS_PARTNER_FISCAL_YEAR];
  /**
   * Mapping of all key field names to the respective static field property BpFiscalYearInformation.
   */
  export const _keys: { [keys: string]: Field<BpFiscalYearInformation, boolean, boolean> } = BpFiscalYearInformation._keyFields.reduce((acc: { [keys: string]: Field<BpFiscalYearInformation, boolean, boolean> }, field: Field<BpFiscalYearInformation, boolean, boolean>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
