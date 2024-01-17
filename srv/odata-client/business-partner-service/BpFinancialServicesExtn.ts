/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BpFinancialServicesExtnRequestBuilder } from './BpFinancialServicesExtnRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, Constructable, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field, FieldBuilder, OrderableEdmTypeField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "A_BPFinancialServicesExtn" of service "API_BUSINESS_PARTNER".
 */
export class BpFinancialServicesExtn extends EntityV2 implements BpFinancialServicesExtnType {
  /**
   * Technical entity name for BpFinancialServicesExtn.
   */
  static _entityName = 'A_BPFinancialServicesExtn';
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
   * Business Partner Is VIP.
   * @nullable
   */
  businessPartnerIsVip?: boolean;
  /**
   * Company ID of Trading Partner.
   * Maximum length: 6.
   * @nullable
   */
  tradingPartner?: string;
  /**
   * Factory calendar.
   * Maximum length: 2.
   * @nullable
   */
  factoryCalendar?: string;
  /**
   * Country/Region of Registered Office.
   * Maximum length: 3.
   * @nullable
   */
  businessPartnerOfficeCountry?: string;
  /**
   * Region of Registered Office.
   * Maximum length: 3.
   * @nullable
   */
  businessPartnerOfficeRegion?: string;
  /**
   * Registered Office.
   * Maximum length: 35.
   * @nullable
   */
  bpRegisteredOfficeName?: string;
  /**
   * Balance Sheet Currency.
   * Maximum length: 5.
   * @nullable
   */
  bpBalanceSheetCurrency?: string;
  /**
   * Amount of last capital increase.
   * @nullable
   */
  bpLastCptlIncrAmtInBalShtCrcy?: BigNumber;
  /**
   * Year of Last Capital Increase.
   * Maximum length: 4.
   * @nullable
   */
  bpLastCapitalIncreaseYear?: string;
  /**
   * Balance Sheet Display.
   * Maximum length: 1.
   * @nullable
   */
  bpBalanceSheetDisplayType?: string;
  /**
   * Citizenship.
   * Maximum length: 3.
   * @nullable
   */
  businessPartnerCitizenship?: string;
  /**
   * Marital property regime.
   * Maximum length: 2.
   * @nullable
   */
  bpMaritalPropertyRegime?: string;
  /**
   * Currency of Net Income.
   * Maximum length: 5.
   * @nullable
   */
  businessPartnerIncomeCurrency?: string;
  /**
   * Number of Children Belonging to the Business Partner.
   * @nullable
   */
  bpNumberOfChildren?: BigNumber;
  /**
   * Number of People Living in the Household.
   * @nullable
   */
  bpNumberOfHouseholdMembers?: BigNumber;
  /**
   * Net Annual Income.
   * @nullable
   */
  bpAnnualNetIncAmtInIncomeCrcy?: BigNumber;
  /**
   * Monthly Net Income of Business Partner.
   * @nullable
   */
  bpMonthlyNetIncAmtInIncomeCrcy?: BigNumber;
  /**
   * Year of Net Annual Income.
   * Maximum length: 4.
   * @nullable
   */
  bpAnnualNetIncomeYear?: string;
  /**
   * Calendar Month of Monthly Net Income.
   * Maximum length: 2.
   * @nullable
   */
  bpMonthlyNetIncomeMonth?: string;
  /**
   * Year of Monthly Net Income.
   * Maximum length: 4.
   * @nullable
   */
  bpMonthlyNetIncomeYear?: string;
  /**
   * Name of Place of Death of Natural Person.
   * Maximum length: 40.
   * @nullable
   */
  bpPlaceOfDeathName?: string;
  /**
   * Undesirable Customer.
   * @nullable
   */
  customerIsUnwanted?: boolean;
  /**
   * Reason for Undesirability.
   * Maximum length: 2.
   * @nullable
   */
  undesirabilityReason?: string;
  /**
   * Comment on Undesirability.
   * Maximum length: 35.
   * @nullable
   */
  undesirabilityComment?: string;
  /**
   * Date of Last Customer Contact.
   * @nullable
   */
  lastCustomerContactDate?: Moment;
  /**
   * Grouping Character.
   * Maximum length: 10.
   * @nullable
   */
  bpGroupingCharacter?: string;
  /**
   * Salutation.
   * Maximum length: 2.
   * @nullable
   */
  bpLetterSalutation?: string;
  /**
   * Target Group.
   * Maximum length: 4.
   * @nullable
   */
  businessPartnerTargetGroup?: string;
  /**
   * Employee Group.
   * Maximum length: 4.
   * @nullable
   */
  businessPartnerEmployeeGroup?: string;
  /**
   * Employee.
   * @nullable
   */
  businessPartnerIsEmployee?: boolean;
  /**
   * Termination Date for Business Relations with the Bank.
   * @nullable
   */
  bpTermnBusRelationsBankDate?: Moment;

  /**
   * Returns an entity builder to construct instances of `BpFinancialServicesExtn`.
   * @returns A builder that constructs instances of entity type `BpFinancialServicesExtn`.
   */
  static builder(): EntityBuilderType<BpFinancialServicesExtn, BpFinancialServicesExtnType> {
    return EntityV2.entityBuilder(BpFinancialServicesExtn);
  }

  /**
   * Returns a request builder to construct requests for operations on the `BpFinancialServicesExtn` entity type.
   * @returns A `BpFinancialServicesExtn` request builder.
   */
  static requestBuilder(): BpFinancialServicesExtnRequestBuilder {
    return new BpFinancialServicesExtnRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `BpFinancialServicesExtn`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `BpFinancialServicesExtn`.
   */
  static customField(fieldName: string): CustomFieldV2<BpFinancialServicesExtn> {
    return EntityV2.customFieldSelector(fieldName, BpFinancialServicesExtn);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface BpFinancialServicesExtnType {
  businessPartner: string;
  businessPartnerIsVip?: boolean | null;
  tradingPartner?: string | null;
  factoryCalendar?: string | null;
  businessPartnerOfficeCountry?: string | null;
  businessPartnerOfficeRegion?: string | null;
  bpRegisteredOfficeName?: string | null;
  bpBalanceSheetCurrency?: string | null;
  bpLastCptlIncrAmtInBalShtCrcy?: BigNumber | null;
  bpLastCapitalIncreaseYear?: string | null;
  bpBalanceSheetDisplayType?: string | null;
  businessPartnerCitizenship?: string | null;
  bpMaritalPropertyRegime?: string | null;
  businessPartnerIncomeCurrency?: string | null;
  bpNumberOfChildren?: BigNumber | null;
  bpNumberOfHouseholdMembers?: BigNumber | null;
  bpAnnualNetIncAmtInIncomeCrcy?: BigNumber | null;
  bpMonthlyNetIncAmtInIncomeCrcy?: BigNumber | null;
  bpAnnualNetIncomeYear?: string | null;
  bpMonthlyNetIncomeMonth?: string | null;
  bpMonthlyNetIncomeYear?: string | null;
  bpPlaceOfDeathName?: string | null;
  customerIsUnwanted?: boolean | null;
  undesirabilityReason?: string | null;
  undesirabilityComment?: string | null;
  lastCustomerContactDate?: Moment | null;
  bpGroupingCharacter?: string | null;
  bpLetterSalutation?: string | null;
  businessPartnerTargetGroup?: string | null;
  businessPartnerEmployeeGroup?: string | null;
  businessPartnerIsEmployee?: boolean | null;
  bpTermnBusRelationsBankDate?: Moment | null;
}

export namespace BpFinancialServicesExtn {
  const _fieldBuilder: FieldBuilder<Constructable<BpFinancialServicesExtn>> = new FieldBuilder(BpFinancialServicesExtn);
  /**
   * Static representation of the [[businessPartner]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER = _fieldBuilder.buildEdmTypeField('BusinessPartner', 'Edm.String', false);
  /**
   * Static representation of the [[businessPartnerIsVip]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER_IS_VIP = _fieldBuilder.buildEdmTypeField('BusinessPartnerIsVIP', 'Edm.Boolean', true);
  /**
   * Static representation of the [[tradingPartner]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TRADING_PARTNER = _fieldBuilder.buildEdmTypeField('TradingPartner', 'Edm.String', true);
  /**
   * Static representation of the [[factoryCalendar]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FACTORY_CALENDAR = _fieldBuilder.buildEdmTypeField('FactoryCalendar', 'Edm.String', true);
  /**
   * Static representation of the [[businessPartnerOfficeCountry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER_OFFICE_COUNTRY = _fieldBuilder.buildEdmTypeField('BusinessPartnerOfficeCountry', 'Edm.String', true);
  /**
   * Static representation of the [[businessPartnerOfficeRegion]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER_OFFICE_REGION = _fieldBuilder.buildEdmTypeField('BusinessPartnerOfficeRegion', 'Edm.String', true);
  /**
   * Static representation of the [[bpRegisteredOfficeName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_REGISTERED_OFFICE_NAME = _fieldBuilder.buildEdmTypeField('BPRegisteredOfficeName', 'Edm.String', true);
  /**
   * Static representation of the [[bpBalanceSheetCurrency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_BALANCE_SHEET_CURRENCY = _fieldBuilder.buildEdmTypeField('BPBalanceSheetCurrency', 'Edm.String', true);
  /**
   * Static representation of the [[bpLastCptlIncrAmtInBalShtCrcy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_LAST_CPTL_INCR_AMT_IN_BAL_SHT_CRCY = _fieldBuilder.buildEdmTypeField('BPLastCptlIncrAmtInBalShtCrcy', 'Edm.Decimal', true);
  /**
   * Static representation of the [[bpLastCapitalIncreaseYear]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_LAST_CAPITAL_INCREASE_YEAR = _fieldBuilder.buildEdmTypeField('BPLastCapitalIncreaseYear', 'Edm.String', true);
  /**
   * Static representation of the [[bpBalanceSheetDisplayType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_BALANCE_SHEET_DISPLAY_TYPE = _fieldBuilder.buildEdmTypeField('BPBalanceSheetDisplayType', 'Edm.String', true);
  /**
   * Static representation of the [[businessPartnerCitizenship]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER_CITIZENSHIP = _fieldBuilder.buildEdmTypeField('BusinessPartnerCitizenship', 'Edm.String', true);
  /**
   * Static representation of the [[bpMaritalPropertyRegime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_MARITAL_PROPERTY_REGIME = _fieldBuilder.buildEdmTypeField('BPMaritalPropertyRegime', 'Edm.String', true);
  /**
   * Static representation of the [[businessPartnerIncomeCurrency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER_INCOME_CURRENCY = _fieldBuilder.buildEdmTypeField('BusinessPartnerIncomeCurrency', 'Edm.String', true);
  /**
   * Static representation of the [[bpNumberOfChildren]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_NUMBER_OF_CHILDREN = _fieldBuilder.buildEdmTypeField('BPNumberOfChildren', 'Edm.Decimal', true);
  /**
   * Static representation of the [[bpNumberOfHouseholdMembers]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_NUMBER_OF_HOUSEHOLD_MEMBERS = _fieldBuilder.buildEdmTypeField('BPNumberOfHouseholdMembers', 'Edm.Decimal', true);
  /**
   * Static representation of the [[bpAnnualNetIncAmtInIncomeCrcy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_ANNUAL_NET_INC_AMT_IN_INCOME_CRCY = _fieldBuilder.buildEdmTypeField('BPAnnualNetIncAmtInIncomeCrcy', 'Edm.Decimal', true);
  /**
   * Static representation of the [[bpMonthlyNetIncAmtInIncomeCrcy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_MONTHLY_NET_INC_AMT_IN_INCOME_CRCY = _fieldBuilder.buildEdmTypeField('BPMonthlyNetIncAmtInIncomeCrcy', 'Edm.Decimal', true);
  /**
   * Static representation of the [[bpAnnualNetIncomeYear]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_ANNUAL_NET_INCOME_YEAR = _fieldBuilder.buildEdmTypeField('BPAnnualNetIncomeYear', 'Edm.String', true);
  /**
   * Static representation of the [[bpMonthlyNetIncomeMonth]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_MONTHLY_NET_INCOME_MONTH = _fieldBuilder.buildEdmTypeField('BPMonthlyNetIncomeMonth', 'Edm.String', true);
  /**
   * Static representation of the [[bpMonthlyNetIncomeYear]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_MONTHLY_NET_INCOME_YEAR = _fieldBuilder.buildEdmTypeField('BPMonthlyNetIncomeYear', 'Edm.String', true);
  /**
   * Static representation of the [[bpPlaceOfDeathName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_PLACE_OF_DEATH_NAME = _fieldBuilder.buildEdmTypeField('BPPlaceOfDeathName', 'Edm.String', true);
  /**
   * Static representation of the [[customerIsUnwanted]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER_IS_UNWANTED = _fieldBuilder.buildEdmTypeField('CustomerIsUnwanted', 'Edm.Boolean', true);
  /**
   * Static representation of the [[undesirabilityReason]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UNDESIRABILITY_REASON = _fieldBuilder.buildEdmTypeField('UndesirabilityReason', 'Edm.String', true);
  /**
   * Static representation of the [[undesirabilityComment]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UNDESIRABILITY_COMMENT = _fieldBuilder.buildEdmTypeField('UndesirabilityComment', 'Edm.String', true);
  /**
   * Static representation of the [[lastCustomerContactDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_CUSTOMER_CONTACT_DATE = _fieldBuilder.buildEdmTypeField('LastCustomerContactDate', 'Edm.DateTime', true);
  /**
   * Static representation of the [[bpGroupingCharacter]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_GROUPING_CHARACTER = _fieldBuilder.buildEdmTypeField('BPGroupingCharacter', 'Edm.String', true);
  /**
   * Static representation of the [[bpLetterSalutation]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_LETTER_SALUTATION = _fieldBuilder.buildEdmTypeField('BPLetterSalutation', 'Edm.String', true);
  /**
   * Static representation of the [[businessPartnerTargetGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER_TARGET_GROUP = _fieldBuilder.buildEdmTypeField('BusinessPartnerTargetGroup', 'Edm.String', true);
  /**
   * Static representation of the [[businessPartnerEmployeeGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER_EMPLOYEE_GROUP = _fieldBuilder.buildEdmTypeField('BusinessPartnerEmployeeGroup', 'Edm.String', true);
  /**
   * Static representation of the [[businessPartnerIsEmployee]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER_IS_EMPLOYEE = _fieldBuilder.buildEdmTypeField('BusinessPartnerIsEmployee', 'Edm.Boolean', true);
  /**
   * Static representation of the [[bpTermnBusRelationsBankDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_TERMN_BUS_RELATIONS_BANK_DATE = _fieldBuilder.buildEdmTypeField('BPTermnBusRelationsBankDate', 'Edm.DateTime', true);
  /**
   * All fields of the BpFinancialServicesExtn entity.
   */
  export const _allFields: Array<EdmTypeField<BpFinancialServicesExtn, 'Edm.String', false, true> | EdmTypeField<BpFinancialServicesExtn, 'Edm.Boolean', true, true> | EdmTypeField<BpFinancialServicesExtn, 'Edm.String', true, true> | OrderableEdmTypeField<BpFinancialServicesExtn, 'Edm.Decimal', true, true> | OrderableEdmTypeField<BpFinancialServicesExtn, 'Edm.DateTime', true, true>> = [
    BpFinancialServicesExtn.BUSINESS_PARTNER,
    BpFinancialServicesExtn.BUSINESS_PARTNER_IS_VIP,
    BpFinancialServicesExtn.TRADING_PARTNER,
    BpFinancialServicesExtn.FACTORY_CALENDAR,
    BpFinancialServicesExtn.BUSINESS_PARTNER_OFFICE_COUNTRY,
    BpFinancialServicesExtn.BUSINESS_PARTNER_OFFICE_REGION,
    BpFinancialServicesExtn.BP_REGISTERED_OFFICE_NAME,
    BpFinancialServicesExtn.BP_BALANCE_SHEET_CURRENCY,
    BpFinancialServicesExtn.BP_LAST_CPTL_INCR_AMT_IN_BAL_SHT_CRCY,
    BpFinancialServicesExtn.BP_LAST_CAPITAL_INCREASE_YEAR,
    BpFinancialServicesExtn.BP_BALANCE_SHEET_DISPLAY_TYPE,
    BpFinancialServicesExtn.BUSINESS_PARTNER_CITIZENSHIP,
    BpFinancialServicesExtn.BP_MARITAL_PROPERTY_REGIME,
    BpFinancialServicesExtn.BUSINESS_PARTNER_INCOME_CURRENCY,
    BpFinancialServicesExtn.BP_NUMBER_OF_CHILDREN,
    BpFinancialServicesExtn.BP_NUMBER_OF_HOUSEHOLD_MEMBERS,
    BpFinancialServicesExtn.BP_ANNUAL_NET_INC_AMT_IN_INCOME_CRCY,
    BpFinancialServicesExtn.BP_MONTHLY_NET_INC_AMT_IN_INCOME_CRCY,
    BpFinancialServicesExtn.BP_ANNUAL_NET_INCOME_YEAR,
    BpFinancialServicesExtn.BP_MONTHLY_NET_INCOME_MONTH,
    BpFinancialServicesExtn.BP_MONTHLY_NET_INCOME_YEAR,
    BpFinancialServicesExtn.BP_PLACE_OF_DEATH_NAME,
    BpFinancialServicesExtn.CUSTOMER_IS_UNWANTED,
    BpFinancialServicesExtn.UNDESIRABILITY_REASON,
    BpFinancialServicesExtn.UNDESIRABILITY_COMMENT,
    BpFinancialServicesExtn.LAST_CUSTOMER_CONTACT_DATE,
    BpFinancialServicesExtn.BP_GROUPING_CHARACTER,
    BpFinancialServicesExtn.BP_LETTER_SALUTATION,
    BpFinancialServicesExtn.BUSINESS_PARTNER_TARGET_GROUP,
    BpFinancialServicesExtn.BUSINESS_PARTNER_EMPLOYEE_GROUP,
    BpFinancialServicesExtn.BUSINESS_PARTNER_IS_EMPLOYEE,
    BpFinancialServicesExtn.BP_TERMN_BUS_RELATIONS_BANK_DATE
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<BpFinancialServicesExtn> = new AllFields('*', BpFinancialServicesExtn);
  /**
   * All key fields of the BpFinancialServicesExtn entity.
   */
  export const _keyFields: Array<Field<BpFinancialServicesExtn, boolean, boolean>> = [BpFinancialServicesExtn.BUSINESS_PARTNER];
  /**
   * Mapping of all key field names to the respective static field property BpFinancialServicesExtn.
   */
  export const _keys: { [keys: string]: Field<BpFinancialServicesExtn, boolean, boolean> } = BpFinancialServicesExtn._keyFields.reduce((acc: { [keys: string]: Field<BpFinancialServicesExtn, boolean, boolean> }, field: Field<BpFinancialServicesExtn, boolean, boolean>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
