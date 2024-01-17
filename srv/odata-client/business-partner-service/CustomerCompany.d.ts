import { CustomerCompanyRequestBuilder } from './CustomerCompanyRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field, Link, OrderableEdmTypeField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "A_CustomerCompany" of service "API_BUSINESS_PARTNER".
 */
export declare class CustomerCompany extends EntityV2 implements CustomerCompanyType {
    /**
     * Technical entity name for CustomerCompany.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Customer Number.
     * Maximum length: 10.
     */
    customer: string;
    /**
     * Company Code.
     * Maximum length: 4.
     */
    companyCode: string;
    /**
     * Tolerance Group for Business Partner/G/L Account.
     * Maximum length: 4.
     * @nullable
     */
    aparToleranceGroup?: string;
    /**
     * Our account number at customer.
     * Maximum length: 12.
     * @nullable
     */
    accountByCustomer?: string;
    /**
     * Accounting Clerk Abbreviation.
     * Maximum length: 2.
     * @nullable
     */
    accountingClerk?: string;
    /**
     * Accounting clerk's fax number at the customer/vendor.
     * Maximum length: 31.
     * @nullable
     */
    accountingClerkFaxNumber?: string;
    /**
     * Internet address of partner company clerk.
     * Maximum length: 130.
     * @nullable
     */
    accountingClerkInternetAddress?: string;
    /**
     * Accounting clerk's telephone number at business partner.
     * Maximum length: 30.
     * @nullable
     */
    accountingClerkPhoneNumber?: string;
    /**
     * Account number of an alternative payer.
     * Maximum length: 10.
     * @nullable
     */
    alternativePayerAccount?: string;
    /**
     * Authorization Group.
     * Maximum length: 4.
     * @nullable
     */
    authorizationGroup?: string;
    /**
     * Collective Invoice Variant.
     * Maximum length: 1.
     * @nullable
     */
    collectiveInvoiceVariant?: string;
    /**
     * Memo.
     * Maximum length: 30.
     * @nullable
     */
    customerAccountNote?: string;
    /**
     * Head Office Account Number (in branch accounts).
     * Maximum length: 10.
     * @nullable
     */
    customerHeadOffice?: string;
    /**
     * Indicator: Clearing between customer and vendor ?.
     * @nullable
     */
    customerSupplierClearingIsUsed?: boolean;
    /**
     * Short Key for a House Bank.
     * Maximum length: 5.
     * @nullable
     */
    houseBank?: string;
    /**
     * Interest Indicator.
     * Maximum length: 2.
     * @nullable
     */
    interestCalculationCode?: string;
    /**
     * Key Date of Last Interest Calculation.
     * @nullable
     */
    interestCalculationDate?: Moment;
    /**
     * Interest Calculation Frequency in Months.
     * Maximum length: 2.
     * @nullable
     */
    intrstCalcFrequencyInMonths?: string;
    /**
     * Indicator: Local Processing?.
     * @nullable
     */
    isToBeLocallyProcessed?: boolean;
    /**
     * Indicator: Pay All Items Separately?.
     * @nullable
     */
    itemIsToBePaidSeparately?: boolean;
    /**
     * Key for Sorting According to Assignment Numbers.
     * Maximum length: 3.
     * @nullable
     */
    layoutSortingRule?: string;
    /**
     * Block Key for Payment.
     * Maximum length: 1.
     * @nullable
     */
    paymentBlockingReason?: string;
    /**
     * List of Respected Payment Methods.
     * Maximum length: 10.
     * @nullable
     */
    paymentMethodsList?: string;
    /**
     * Payment Reason.
     * Maximum length: 4.
     * @nullable
     */
    paymentReason?: string;
    /**
     * Key for Terms of Payment.
     * Maximum length: 4.
     * @nullable
     */
    paymentTerms?: string;
    /**
     * Indicator: Send Payment Advices by EDI.
     * @nullable
     */
    paytAdviceIsSentbyEdi?: boolean;
    /**
     * Posting block for company code.
     * @nullable
     */
    physicalInventoryBlockInd?: boolean;
    /**
     * Reconciliation Account in General Ledger.
     * Maximum length: 10.
     * @nullable
     */
    reconciliationAccount?: string;
    /**
     * Indicator: Record Payment History ?.
     * @nullable
     */
    recordPaymentHistoryIndicator?: boolean;
    /**
     * User at customer.
     * Maximum length: 15.
     * @nullable
     */
    userAtCustomer?: string;
    /**
     * Deletion Flag for Master Record (Company Code Level).
     * @nullable
     */
    deletionIndicator?: boolean;
    /**
     * Planning Group.
     * Maximum length: 10.
     * @nullable
     */
    cashPlanningGroup?: string;
    /**
     * Short Key for Known/Negotiated Leave.
     * Maximum length: 4.
     * @nullable
     */
    knownOrNegotiatedLeave?: string;
    /**
     * Value Adjustment Key.
     * Maximum length: 2.
     * @nullable
     */
    valueAdjustmentKey?: string;
    /**
     * Customer Account Group.
     * Maximum length: 4.
     * @nullable
     */
    customerAccountGroup?: string;
    /**
     * One-to-many navigation property to the [[CustomerCompanyText]] entity.
     */
    toCompanyText: CustomerCompanyText[];
    /**
     * One-to-many navigation property to the [[CustomerDunning]] entity.
     */
    toCustomerDunning: CustomerDunning[];
    /**
     * One-to-many navigation property to the [[CustomerWithHoldingTax]] entity.
     */
    toWithHoldingTax: CustomerWithHoldingTax[];
    /**
     * Returns an entity builder to construct instances of `CustomerCompany`.
     * @returns A builder that constructs instances of entity type `CustomerCompany`.
     */
    static builder(): EntityBuilderType<CustomerCompany, CustomerCompanyType>;
    /**
     * Returns a request builder to construct requests for operations on the `CustomerCompany` entity type.
     * @returns A `CustomerCompany` request builder.
     */
    static requestBuilder(): CustomerCompanyRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CustomerCompany`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CustomerCompany`.
     */
    static customField(fieldName: string): CustomFieldV2<CustomerCompany>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { CustomerCompanyText, CustomerCompanyTextType } from './CustomerCompanyText';
import { CustomerDunning, CustomerDunningType } from './CustomerDunning';
import { CustomerWithHoldingTax, CustomerWithHoldingTaxType } from './CustomerWithHoldingTax';
export interface CustomerCompanyType {
    customer: string;
    companyCode: string;
    aparToleranceGroup?: string | null;
    accountByCustomer?: string | null;
    accountingClerk?: string | null;
    accountingClerkFaxNumber?: string | null;
    accountingClerkInternetAddress?: string | null;
    accountingClerkPhoneNumber?: string | null;
    alternativePayerAccount?: string | null;
    authorizationGroup?: string | null;
    collectiveInvoiceVariant?: string | null;
    customerAccountNote?: string | null;
    customerHeadOffice?: string | null;
    customerSupplierClearingIsUsed?: boolean | null;
    houseBank?: string | null;
    interestCalculationCode?: string | null;
    interestCalculationDate?: Moment | null;
    intrstCalcFrequencyInMonths?: string | null;
    isToBeLocallyProcessed?: boolean | null;
    itemIsToBePaidSeparately?: boolean | null;
    layoutSortingRule?: string | null;
    paymentBlockingReason?: string | null;
    paymentMethodsList?: string | null;
    paymentReason?: string | null;
    paymentTerms?: string | null;
    paytAdviceIsSentbyEdi?: boolean | null;
    physicalInventoryBlockInd?: boolean | null;
    reconciliationAccount?: string | null;
    recordPaymentHistoryIndicator?: boolean | null;
    userAtCustomer?: string | null;
    deletionIndicator?: boolean | null;
    cashPlanningGroup?: string | null;
    knownOrNegotiatedLeave?: string | null;
    valueAdjustmentKey?: string | null;
    customerAccountGroup?: string | null;
    toCompanyText: CustomerCompanyTextType[];
    toCustomerDunning: CustomerDunningType[];
    toWithHoldingTax: CustomerWithHoldingTaxType[];
}
export declare namespace CustomerCompany {
    /**
     * Static representation of the [[customer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER: EdmTypeField<CustomerCompany, "Edm.String", false, true>;
    /**
     * Static representation of the [[companyCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMPANY_CODE: EdmTypeField<CustomerCompany, "Edm.String", false, true>;
    /**
     * Static representation of the [[aparToleranceGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APAR_TOLERANCE_GROUP: EdmTypeField<CustomerCompany, "Edm.String", true, true>;
    /**
     * Static representation of the [[accountByCustomer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACCOUNT_BY_CUSTOMER: EdmTypeField<CustomerCompany, "Edm.String", true, true>;
    /**
     * Static representation of the [[accountingClerk]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACCOUNTING_CLERK: EdmTypeField<CustomerCompany, "Edm.String", true, true>;
    /**
     * Static representation of the [[accountingClerkFaxNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACCOUNTING_CLERK_FAX_NUMBER: EdmTypeField<CustomerCompany, "Edm.String", true, true>;
    /**
     * Static representation of the [[accountingClerkInternetAddress]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACCOUNTING_CLERK_INTERNET_ADDRESS: EdmTypeField<CustomerCompany, "Edm.String", true, true>;
    /**
     * Static representation of the [[accountingClerkPhoneNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACCOUNTING_CLERK_PHONE_NUMBER: EdmTypeField<CustomerCompany, "Edm.String", true, true>;
    /**
     * Static representation of the [[alternativePayerAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ALTERNATIVE_PAYER_ACCOUNT: EdmTypeField<CustomerCompany, "Edm.String", true, true>;
    /**
     * Static representation of the [[authorizationGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AUTHORIZATION_GROUP: EdmTypeField<CustomerCompany, "Edm.String", true, true>;
    /**
     * Static representation of the [[collectiveInvoiceVariant]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COLLECTIVE_INVOICE_VARIANT: EdmTypeField<CustomerCompany, "Edm.String", true, true>;
    /**
     * Static representation of the [[customerAccountNote]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER_ACCOUNT_NOTE: EdmTypeField<CustomerCompany, "Edm.String", true, true>;
    /**
     * Static representation of the [[customerHeadOffice]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER_HEAD_OFFICE: EdmTypeField<CustomerCompany, "Edm.String", true, true>;
    /**
     * Static representation of the [[customerSupplierClearingIsUsed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER_SUPPLIER_CLEARING_IS_USED: EdmTypeField<CustomerCompany, "Edm.Boolean", true, true>;
    /**
     * Static representation of the [[houseBank]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HOUSE_BANK: EdmTypeField<CustomerCompany, "Edm.String", true, true>;
    /**
     * Static representation of the [[interestCalculationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INTEREST_CALCULATION_CODE: EdmTypeField<CustomerCompany, "Edm.String", true, true>;
    /**
     * Static representation of the [[interestCalculationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INTEREST_CALCULATION_DATE: OrderableEdmTypeField<CustomerCompany, "Edm.DateTime", true, true>;
    /**
     * Static representation of the [[intrstCalcFrequencyInMonths]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INTRST_CALC_FREQUENCY_IN_MONTHS: EdmTypeField<CustomerCompany, "Edm.String", true, true>;
    /**
     * Static representation of the [[isToBeLocallyProcessed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_TO_BE_LOCALLY_PROCESSED: EdmTypeField<CustomerCompany, "Edm.Boolean", true, true>;
    /**
     * Static representation of the [[itemIsToBePaidSeparately]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM_IS_TO_BE_PAID_SEPARATELY: EdmTypeField<CustomerCompany, "Edm.Boolean", true, true>;
    /**
     * Static representation of the [[layoutSortingRule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAYOUT_SORTING_RULE: EdmTypeField<CustomerCompany, "Edm.String", true, true>;
    /**
     * Static representation of the [[paymentBlockingReason]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENT_BLOCKING_REASON: EdmTypeField<CustomerCompany, "Edm.String", true, true>;
    /**
     * Static representation of the [[paymentMethodsList]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENT_METHODS_LIST: EdmTypeField<CustomerCompany, "Edm.String", true, true>;
    /**
     * Static representation of the [[paymentReason]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENT_REASON: EdmTypeField<CustomerCompany, "Edm.String", true, true>;
    /**
     * Static representation of the [[paymentTerms]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENT_TERMS: EdmTypeField<CustomerCompany, "Edm.String", true, true>;
    /**
     * Static representation of the [[paytAdviceIsSentbyEdi]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYT_ADVICE_IS_SENTBY_EDI: EdmTypeField<CustomerCompany, "Edm.Boolean", true, true>;
    /**
     * Static representation of the [[physicalInventoryBlockInd]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PHYSICAL_INVENTORY_BLOCK_IND: EdmTypeField<CustomerCompany, "Edm.Boolean", true, true>;
    /**
     * Static representation of the [[reconciliationAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RECONCILIATION_ACCOUNT: EdmTypeField<CustomerCompany, "Edm.String", true, true>;
    /**
     * Static representation of the [[recordPaymentHistoryIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RECORD_PAYMENT_HISTORY_INDICATOR: EdmTypeField<CustomerCompany, "Edm.Boolean", true, true>;
    /**
     * Static representation of the [[userAtCustomer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_AT_CUSTOMER: EdmTypeField<CustomerCompany, "Edm.String", true, true>;
    /**
     * Static representation of the [[deletionIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DELETION_INDICATOR: EdmTypeField<CustomerCompany, "Edm.Boolean", true, true>;
    /**
     * Static representation of the [[cashPlanningGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CASH_PLANNING_GROUP: EdmTypeField<CustomerCompany, "Edm.String", true, true>;
    /**
     * Static representation of the [[knownOrNegotiatedLeave]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const KNOWN_OR_NEGOTIATED_LEAVE: EdmTypeField<CustomerCompany, "Edm.String", true, true>;
    /**
     * Static representation of the [[valueAdjustmentKey]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VALUE_ADJUSTMENT_KEY: EdmTypeField<CustomerCompany, "Edm.String", true, true>;
    /**
     * Static representation of the [[customerAccountGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER_ACCOUNT_GROUP: EdmTypeField<CustomerCompany, "Edm.String", true, true>;
    /**
     * Static representation of the one-to-many navigation property [[toCompanyText]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_COMPANY_TEXT: Link<CustomerCompany, CustomerCompanyText>;
    /**
     * Static representation of the one-to-many navigation property [[toCustomerDunning]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_CUSTOMER_DUNNING: Link<CustomerCompany, CustomerDunning>;
    /**
     * Static representation of the one-to-many navigation property [[toWithHoldingTax]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_WITH_HOLDING_TAX: Link<CustomerCompany, CustomerWithHoldingTax>;
    /**
     * All fields of the CustomerCompany entity.
     */
    const _allFields: Array<EdmTypeField<CustomerCompany, 'Edm.String', false, true> | EdmTypeField<CustomerCompany, 'Edm.String', true, true> | EdmTypeField<CustomerCompany, 'Edm.Boolean', true, true> | OrderableEdmTypeField<CustomerCompany, 'Edm.DateTime', true, true> | Link<CustomerCompany, CustomerCompanyText> | Link<CustomerCompany, CustomerDunning> | Link<CustomerCompany, CustomerWithHoldingTax>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<CustomerCompany>;
    /**
     * All key fields of the CustomerCompany entity.
     */
    const _keyFields: Array<Field<CustomerCompany, boolean, boolean>>;
    /**
     * Mapping of all key field names to the respective static field property CustomerCompany.
     */
    const _keys: {
        [keys: string]: Field<CustomerCompany, boolean, boolean>;
    };
}
//# sourceMappingURL=CustomerCompany.d.ts.map