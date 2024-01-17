import { BpFinancialServicesExtnRequestBuilder } from './BpFinancialServicesExtnRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field, OrderableEdmTypeField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "A_BPFinancialServicesExtn" of service "API_BUSINESS_PARTNER".
 */
export declare class BpFinancialServicesExtn extends EntityV2 implements BpFinancialServicesExtnType {
    /**
     * Technical entity name for BpFinancialServicesExtn.
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
    static builder(): EntityBuilderType<BpFinancialServicesExtn, BpFinancialServicesExtnType>;
    /**
     * Returns a request builder to construct requests for operations on the `BpFinancialServicesExtn` entity type.
     * @returns A `BpFinancialServicesExtn` request builder.
     */
    static requestBuilder(): BpFinancialServicesExtnRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `BpFinancialServicesExtn`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `BpFinancialServicesExtn`.
     */
    static customField(fieldName: string): CustomFieldV2<BpFinancialServicesExtn>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
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
export declare namespace BpFinancialServicesExtn {
    /**
     * Static representation of the [[businessPartner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER: EdmTypeField<BpFinancialServicesExtn, "Edm.String", false, true>;
    /**
     * Static representation of the [[businessPartnerIsVip]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER_IS_VIP: EdmTypeField<BpFinancialServicesExtn, "Edm.Boolean", true, true>;
    /**
     * Static representation of the [[tradingPartner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TRADING_PARTNER: EdmTypeField<BpFinancialServicesExtn, "Edm.String", true, true>;
    /**
     * Static representation of the [[factoryCalendar]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FACTORY_CALENDAR: EdmTypeField<BpFinancialServicesExtn, "Edm.String", true, true>;
    /**
     * Static representation of the [[businessPartnerOfficeCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER_OFFICE_COUNTRY: EdmTypeField<BpFinancialServicesExtn, "Edm.String", true, true>;
    /**
     * Static representation of the [[businessPartnerOfficeRegion]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER_OFFICE_REGION: EdmTypeField<BpFinancialServicesExtn, "Edm.String", true, true>;
    /**
     * Static representation of the [[bpRegisteredOfficeName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_REGISTERED_OFFICE_NAME: EdmTypeField<BpFinancialServicesExtn, "Edm.String", true, true>;
    /**
     * Static representation of the [[bpBalanceSheetCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_BALANCE_SHEET_CURRENCY: EdmTypeField<BpFinancialServicesExtn, "Edm.String", true, true>;
    /**
     * Static representation of the [[bpLastCptlIncrAmtInBalShtCrcy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_LAST_CPTL_INCR_AMT_IN_BAL_SHT_CRCY: OrderableEdmTypeField<BpFinancialServicesExtn, "Edm.Decimal", true, true>;
    /**
     * Static representation of the [[bpLastCapitalIncreaseYear]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_LAST_CAPITAL_INCREASE_YEAR: EdmTypeField<BpFinancialServicesExtn, "Edm.String", true, true>;
    /**
     * Static representation of the [[bpBalanceSheetDisplayType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_BALANCE_SHEET_DISPLAY_TYPE: EdmTypeField<BpFinancialServicesExtn, "Edm.String", true, true>;
    /**
     * Static representation of the [[businessPartnerCitizenship]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER_CITIZENSHIP: EdmTypeField<BpFinancialServicesExtn, "Edm.String", true, true>;
    /**
     * Static representation of the [[bpMaritalPropertyRegime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_MARITAL_PROPERTY_REGIME: EdmTypeField<BpFinancialServicesExtn, "Edm.String", true, true>;
    /**
     * Static representation of the [[businessPartnerIncomeCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER_INCOME_CURRENCY: EdmTypeField<BpFinancialServicesExtn, "Edm.String", true, true>;
    /**
     * Static representation of the [[bpNumberOfChildren]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_NUMBER_OF_CHILDREN: OrderableEdmTypeField<BpFinancialServicesExtn, "Edm.Decimal", true, true>;
    /**
     * Static representation of the [[bpNumberOfHouseholdMembers]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_NUMBER_OF_HOUSEHOLD_MEMBERS: OrderableEdmTypeField<BpFinancialServicesExtn, "Edm.Decimal", true, true>;
    /**
     * Static representation of the [[bpAnnualNetIncAmtInIncomeCrcy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_ANNUAL_NET_INC_AMT_IN_INCOME_CRCY: OrderableEdmTypeField<BpFinancialServicesExtn, "Edm.Decimal", true, true>;
    /**
     * Static representation of the [[bpMonthlyNetIncAmtInIncomeCrcy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_MONTHLY_NET_INC_AMT_IN_INCOME_CRCY: OrderableEdmTypeField<BpFinancialServicesExtn, "Edm.Decimal", true, true>;
    /**
     * Static representation of the [[bpAnnualNetIncomeYear]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_ANNUAL_NET_INCOME_YEAR: EdmTypeField<BpFinancialServicesExtn, "Edm.String", true, true>;
    /**
     * Static representation of the [[bpMonthlyNetIncomeMonth]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_MONTHLY_NET_INCOME_MONTH: EdmTypeField<BpFinancialServicesExtn, "Edm.String", true, true>;
    /**
     * Static representation of the [[bpMonthlyNetIncomeYear]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_MONTHLY_NET_INCOME_YEAR: EdmTypeField<BpFinancialServicesExtn, "Edm.String", true, true>;
    /**
     * Static representation of the [[bpPlaceOfDeathName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_PLACE_OF_DEATH_NAME: EdmTypeField<BpFinancialServicesExtn, "Edm.String", true, true>;
    /**
     * Static representation of the [[customerIsUnwanted]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER_IS_UNWANTED: EdmTypeField<BpFinancialServicesExtn, "Edm.Boolean", true, true>;
    /**
     * Static representation of the [[undesirabilityReason]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const UNDESIRABILITY_REASON: EdmTypeField<BpFinancialServicesExtn, "Edm.String", true, true>;
    /**
     * Static representation of the [[undesirabilityComment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const UNDESIRABILITY_COMMENT: EdmTypeField<BpFinancialServicesExtn, "Edm.String", true, true>;
    /**
     * Static representation of the [[lastCustomerContactDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_CUSTOMER_CONTACT_DATE: OrderableEdmTypeField<BpFinancialServicesExtn, "Edm.DateTime", true, true>;
    /**
     * Static representation of the [[bpGroupingCharacter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_GROUPING_CHARACTER: EdmTypeField<BpFinancialServicesExtn, "Edm.String", true, true>;
    /**
     * Static representation of the [[bpLetterSalutation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_LETTER_SALUTATION: EdmTypeField<BpFinancialServicesExtn, "Edm.String", true, true>;
    /**
     * Static representation of the [[businessPartnerTargetGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER_TARGET_GROUP: EdmTypeField<BpFinancialServicesExtn, "Edm.String", true, true>;
    /**
     * Static representation of the [[businessPartnerEmployeeGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER_EMPLOYEE_GROUP: EdmTypeField<BpFinancialServicesExtn, "Edm.String", true, true>;
    /**
     * Static representation of the [[businessPartnerIsEmployee]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER_IS_EMPLOYEE: EdmTypeField<BpFinancialServicesExtn, "Edm.Boolean", true, true>;
    /**
     * Static representation of the [[bpTermnBusRelationsBankDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_TERMN_BUS_RELATIONS_BANK_DATE: OrderableEdmTypeField<BpFinancialServicesExtn, "Edm.DateTime", true, true>;
    /**
     * All fields of the BpFinancialServicesExtn entity.
     */
    const _allFields: Array<EdmTypeField<BpFinancialServicesExtn, 'Edm.String', false, true> | EdmTypeField<BpFinancialServicesExtn, 'Edm.Boolean', true, true> | EdmTypeField<BpFinancialServicesExtn, 'Edm.String', true, true> | OrderableEdmTypeField<BpFinancialServicesExtn, 'Edm.Decimal', true, true> | OrderableEdmTypeField<BpFinancialServicesExtn, 'Edm.DateTime', true, true>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<BpFinancialServicesExtn>;
    /**
     * All key fields of the BpFinancialServicesExtn entity.
     */
    const _keyFields: Array<Field<BpFinancialServicesExtn, boolean, boolean>>;
    /**
     * Mapping of all key field names to the respective static field property BpFinancialServicesExtn.
     */
    const _keys: {
        [keys: string]: Field<BpFinancialServicesExtn, boolean, boolean>;
    };
}
//# sourceMappingURL=BpFinancialServicesExtn.d.ts.map