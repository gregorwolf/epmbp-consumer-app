import { CustomerCompanyRequestBuilder } from './CustomerCompanyRequestBuilder';
import { Moment } from 'moment';
import { AllFields, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Field, Link, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "A_CustomerCompany" of service "API_BUSINESS_PARTNER".
 */
export declare class CustomerCompany extends Entity implements CustomerCompanyType {
    /**
     * Technical entity name for CustomerCompany.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for CustomerCompany.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Customer Number.
     * Gives an alphanumeric key, which clearly identifies the customer or vendor in the SAP system.
     * Maximum length: 10.
     */
    customer: string;
    /**
     * Company Code.
     * The company code is an organizational unit within financial accounting.
     * Maximum length: 4.
     */
    companyCode: string;
    /**
     * Tolerance Group for Business Partner/G/L Account.
     * Contains settings that control how the system handles differences between the invoice amount and the amount received from a customer or the amount paid to a supplier. A tolerance group is unique within a company code.
     * Maximum length: 4.
     * @nullable
     */
    aparToleranceGroup?: string;
    /**
     * Our account number at customer.
     * This field contains the account number the company is listed under at the customer.
     * Maximum length: 12.
     * @nullable
     */
    accountByCustomer?: string;
    /**
     * Accounting Clerk Abbreviation.
     * Identification code for the accounting clerk.
     * The name of the accounting clerk defined by this identification code can be used in the payment program for correspondence and reporting (for example, open item lists).
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
     * Account number of the customer for whom automatic payment transactions are to be carried out.The account number is only needed if bank collections are not to be made via the customer who owes the receivables. The same applies to refunds of payables.The specification in this field only applies to this company code. There is another field in which you can enter an alternative payee for all company codes. If both fields are filled, the specification for the company code has priority.
     * Maximum length: 10.
     * @nullable
     */
    alternativePayerAccount?: string;
    /**
     * Authorization Group.
     * The authorization group allows extended authorization protection for particular objects. The authorization groups are freely definable. The authorization groups usually occur in authorization objects together with an activity.
     * Maximum length: 4.
     * @nullable
     */
    authorizationGroup?: string;
    /**
     * Collective Invoice Variant.
     * Indicator which specifies at what intervals the collective invoices are to be created for the customer.
     * Maximum length: 1.
     * @nullable
     */
    collectiveInvoiceVariant?: string;
    /**
     * Memo.
     * Internal memo of the accounting department.
     * The memo serves only as information on special features of the customer/vendor.
     * Maximum length: 30.
     * @nullable
     */
    customerAccountNote?: string;
    /**
     * Head office account number (in branch accounts).
     * This field contains the account number of the head office.
     * This account number is only specified for branch accounts. All postings for which the account number of the branch is specified, are automatically posted to the head office account. The account number of the branch affected is noted in the line items.No line items or balances are managed in the branch account.
     * Maximum length: 10.
     * @nullable
     */
    customerHeadOffice?: string;
    /**
     * Indicator: Clearing between customer and vendor ?.
     * Indicates that during automatic payment transactions clearing is made with the corresponding vendor account, and that during manual clearing procedures, the items of that vendor account are also selected.
     * To use this function in automatic payment transactions, you have toenter the vendor account number in the customer master record,enter the customer account number in the vendor master record, andselect the "Clearing with customer" indicator in the vendor master record.If you set this indicator, the system will also include items of the vendor account in customer dunning.
     * @nullable
     */
    customerSupplierClearingIsUsed?: boolean;
    /**
     * Short Key for a House Bank.
     * All bank data is determined using this key.
     * Maximum length: 5.
     * @nullable
     */
    houseBank?: string;
    /**
     * Interest Indicator.
     * You enter an interest indicator here if you want the business partner to be included in automatic interest calculation.
     * Maximum length: 2.
     * @nullable
     */
    interestCalculationCode?: string;
    /**
     * Key Date of Last Interest Calculation.
     * The date in this field displays the last time the interest calculation program processed this account. This is generally the upper limit of the last interest run.
     * Generally, this date is automatically maintained by the program (batch input). A manual entry in this field should only be made if an error has occurred or when implementing the interest calculation.
     * @nullable
     */
    interestCalculationDate?: Moment;
    /**
     * Interest Calculation Frequency in Months.
     * An entry in this field determines the intervals (in months) at which interest is to be calculated automatically for this account (account balance interest calculation). The interest calculation frequency is added to the date of the last interest calculation.
     * Date of last interest calculation: 3/31.+ 01 month interest calculation frequency= 4/30 upper limit for the current interest runThe calculation period specified as a report parameter determines whether an account is included in an interest run.The upper limit of the interest run is calculated as in the above example and compared with the upper limit of the calculation entered in the interest run (report parameter). If the calculated upper limit is after the calculation period, the account is not included in interest calculation.If you maintain the interest calculation frequency in the account master record, this entry is used to calculate the upper limit. If not, the interest calculation frequency entered for the interest indicator is used.
     * Maximum length: 2.
     * @nullable
     */
    intrstCalcFrequencyInMonths?: string;
    /**
     * Indicator: Local Processing?.
     * Indicates that payment transactions and dunning notices are created for the branch.
     * Normally automatic payment transactions and dunning notices are created for the head office.NoteSelect this indicator only if this account is a head office account.
     * @nullable
     */
    isToBeLocallyProcessed?: boolean;
    /**
     * Indicator: Pay All Items Separately?.
     * If this indicator is set, every customer/vendor open item is paid separately during automatic payment transactions. This means that open items are not grouped together for payment.
     * @nullable
     */
    itemIsToBePaidSeparately?: boolean;
    /**
     * Key for Sorting According to Assignment Numbers.
     * Indicates the layout rule for the Allocation field in the document line item.
     * The system uses a standard sort sequence for displaying line items. Among other things, it sorts the items according to the content of the Allocation field. This field can be filled either manually or automatically (by the system) when a document line item is entered.For this purpose, the system requires rules that determine which information is to be taken from the document header or from the document line item and placed in the field. The rules can be stored in the master record of an account which enables you to determine the standard sort sequence on an account-specific basis.NoteField information from another document line item cannot be adopted into the field of a particular item.
     * Maximum length: 3.
     * @nullable
     */
    layoutSortingRule?: string;
    /**
     * Block Key for Payment.
     * Block key (enqueue key) that is used to block an open item or an account to payment transactions.
     * You can use the block key as described below.Automatic Payment TransactionsIn automatic payment transactions, the block takes effect when it is entered in the system as follows:In the master recordIn the documentIf you enter the block in the master record then all open items for this account are contained in the exception list.The following block keys have a special meaning in the master record:The block key * has the effect that all items of the account are skipped in automatic payment transactions.The block key + has the effect that all items are skipped in which a payment method was not entered explicitly.The block key A is always set automatically when a down payment is entered. Therefore, you must not delete the block key A or use it for other purposes.Whether a block key can be set or removed in payment proposal processing depends on the attribute Changeable in payment proposal of the block key.Manual PaymentsManual payments are only affected by a block key in the document if you set the attribute Blocked for manual payments in the block key.A block key that was set in the master record does not have any effect on manual payments. You can have the system issue a warning message in that case. To do so, you have to make system settings. Set up message 671 of work area F5 in the configuration step Change Message Control, udter Finance -&gt; Localization -&gt; General Settings.Release for PaymentIf you want to use a block key for payment release in accounting, then you have to set the attribute Not Changeable for the block key. You make this setting in the configuration step Control Payment Block Reasons, under Finance -&gt; Accounts Payable -&gt; General Payment Settings.
     * Maximum length: 1.
     * @nullable
     */
    paymentBlockingReason?: string;
    /**
     * List of Respected Payment Methods.
     * List of payment methods which may be used in automatic payment transactions with this customer/vendor if you do not specify a payment method in the item to be paid.
     * If you do specify a particular payment method in the item to be paid, this specification has priority over the specifications in the master record. You may also specify payment methods in the item which are not listed in the master record.
     * Maximum length: 10.
     * @nullable
     */
    paymentMethodsList?: string;
    /**
     * Terms of Payment Key.
     * Key for defining payment terms composed of cash discount percentages and payment periods.
     * It is used in sales orders, purchase orders, and invoices. Terms of payment provide information for:Cash managementDunning proceduresPayment transactionsData can be entered in the field for the terms of payment key in various ways as you enter a business transaction:In most business transactions, the system defaults the key specified in the master record of the customer/vendor in question.In some transactions (for example, credit memos), however, the system does not default the key from the master record. Despite this, you can use the key from the customer/vendor master record by entering "*" in the field.Regardless of whether or not a key is defaulted from the master record, you can manually enter a key during document entry at:item level in sales ordersheader level in purchase orders and invoicesMaster records have separate areas for Financial Accounting, Sales, and Purchasing. You can specify different terms of payment keys in each of these areas. When you then enter a business transaction, the application in question will use the key specified in its area of the master record.
     * Maximum length: 4.
     * @nullable
     */
    paymentTerms?: string;
    /**
     * Indicator: Send Payment Advices by EDI.
     * This indicator specifies that the customer/vendor should be sent all payment advice information by EDI.
     * @nullable
     */
    paytAdviceIsSentbyEdi?: boolean;
    /**
     * Posting block for company code.
     * Indicates that the account is blocked for posting in the specified company code.
     * If you set this indicator, the system prevents users from posting items to this account and issues an error message to inform them that the account is blocked.
     * @nullable
     */
    physicalInventoryBlockInd?: boolean;
    /**
     * Reconciliation Account in General Ledger.
     * The reconciliation account in G/L accounting is the account which is updated parallel to the subledger account for normal postings (for example, invoice or payment).
     * For special postings (for example, down payment or bill of exchange), this account is replaced by another account (for example, 'down payments received' instead of 'receivables').The replacement takes place due to the special G/L indicator which you must specify for these types of postings.
     * Maximum length: 10.
     * @nullable
     */
    reconciliationAccount?: string;
    /**
     * Indicator: Record Payment History ?.
     * Indicator that the payment history of the customer is to be recorded.
     * The amount and number of payments are then recorded per calendar month, as well as the average days in arrears.Information about cash discount payments and net payments is recorded separately.The indicator should not be set for one-time accounts and accounts which are paid automatically (bank collection or bank bill in Germany, bill of exchange payment request in France).You can only carry out evaluation of the payment history, for example, with the report for customer evaluation with OI listing, if you have selected this field.
     * @nullable
     */
    recordPaymentHistoryIndicator?: boolean;
    /**
     * User at customer.
     * Name or identification code of the accounting clerk at the customer.
     * Maximum length: 15.
     * @nullable
     */
    userAtCustomer?: string;
    /**
     * Deletion Flag for Master Record (Company Code Level).
     * Indicates that the company code data in this master record is to be deleted.
     * To delete this data, you have to run the archiving program for Accounts Receivable or Payable. This program will archive all master records marked for deletion provided that there is no dependent data in them.This deletion flag cannot be used in the program that deletes master data. You should, however, run this program only to delete test data prior to production startup.
     * @nullable
     */
    deletionIndicator?: boolean;
    /**
     * Planning Group.
     * In cash management, customers and vendors are allocated to planning groups by means of an entry made in the master record.
     * You can define these planning groups in Customizing or the Implementation Guide (you will need to ensure that they are all the same length). In order to improve the liquidity forecast display for major customers and vendors, it can be advisable to enter their account number as the planning group.For the planning groups themselves a naming convention should be set up to improve liquidity forecasting. In the following examples, the customer planning groups begin with an "R" for receipts, and the vendor planning groups begin with an "E" for expenses.R1  Customers paying by bank collectionR2  Other domestic customersR3  Customers abroadR4  Affiliated company customersR5  High risk customersR6  Major customersR7  Rental incomeR8  Repayment of loans...E1  Domestic vendorsE2  Vendors abroadE3  Affiliated company vendorsE4  Major vendorsE5  Personnel costsE6  TaxesE7  Investments...
     * Maximum length: 10.
     * @nullable
     */
    cashPlanningGroup?: string;
    /**
     * Short Key for Known/Negotiated Leave.
     * With the key specified here, you can refer to known/negotiated leave.
     * Maximum length: 4.
     * @nullable
     */
    knownOrNegotiatedLeave?: string;
    /**
     * Value Adjustment Key.
     * The value adjustment key controls the way the open items are processed during individual value adjustment.
     * Maximum length: 2.
     * @nullable
     */
    valueAdjustmentKey?: string;
    /**
     * Customer Account Group.
     * The account group is a classifying feature within customer master records. The account group determines:
     * in which number range the customer account number should be;whether the number is assigned by the user or by the system;which specifications are necessary or possible in the master record.
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
     * Returns an entity builder to construct instances `CustomerCompany`.
     * @returns A builder that constructs instances of entity type `CustomerCompany`.
     */
    static builder(): EntityBuilderType<CustomerCompany, CustomerCompanyTypeForceMandatory>;
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
    static customField(fieldName: string): CustomField<CustomerCompany>;
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
    aparToleranceGroup?: string;
    accountByCustomer?: string;
    accountingClerk?: string;
    accountingClerkFaxNumber?: string;
    accountingClerkInternetAddress?: string;
    accountingClerkPhoneNumber?: string;
    alternativePayerAccount?: string;
    authorizationGroup?: string;
    collectiveInvoiceVariant?: string;
    customerAccountNote?: string;
    customerHeadOffice?: string;
    customerSupplierClearingIsUsed?: boolean;
    houseBank?: string;
    interestCalculationCode?: string;
    interestCalculationDate?: Moment;
    intrstCalcFrequencyInMonths?: string;
    isToBeLocallyProcessed?: boolean;
    itemIsToBePaidSeparately?: boolean;
    layoutSortingRule?: string;
    paymentBlockingReason?: string;
    paymentMethodsList?: string;
    paymentTerms?: string;
    paytAdviceIsSentbyEdi?: boolean;
    physicalInventoryBlockInd?: boolean;
    reconciliationAccount?: string;
    recordPaymentHistoryIndicator?: boolean;
    userAtCustomer?: string;
    deletionIndicator?: boolean;
    cashPlanningGroup?: string;
    knownOrNegotiatedLeave?: string;
    valueAdjustmentKey?: string;
    customerAccountGroup?: string;
    toCompanyText: CustomerCompanyTextType[];
    toCustomerDunning: CustomerDunningType[];
    toWithHoldingTax: CustomerWithHoldingTaxType[];
}
export interface CustomerCompanyTypeForceMandatory {
    customer: string;
    companyCode: string;
    aparToleranceGroup: string;
    accountByCustomer: string;
    accountingClerk: string;
    accountingClerkFaxNumber: string;
    accountingClerkInternetAddress: string;
    accountingClerkPhoneNumber: string;
    alternativePayerAccount: string;
    authorizationGroup: string;
    collectiveInvoiceVariant: string;
    customerAccountNote: string;
    customerHeadOffice: string;
    customerSupplierClearingIsUsed: boolean;
    houseBank: string;
    interestCalculationCode: string;
    interestCalculationDate: Moment;
    intrstCalcFrequencyInMonths: string;
    isToBeLocallyProcessed: boolean;
    itemIsToBePaidSeparately: boolean;
    layoutSortingRule: string;
    paymentBlockingReason: string;
    paymentMethodsList: string;
    paymentTerms: string;
    paytAdviceIsSentbyEdi: boolean;
    physicalInventoryBlockInd: boolean;
    reconciliationAccount: string;
    recordPaymentHistoryIndicator: boolean;
    userAtCustomer: string;
    deletionIndicator: boolean;
    cashPlanningGroup: string;
    knownOrNegotiatedLeave: string;
    valueAdjustmentKey: string;
    customerAccountGroup: string;
    toCompanyText: CustomerCompanyTextType[];
    toCustomerDunning: CustomerDunningType[];
    toWithHoldingTax: CustomerWithHoldingTaxType[];
}
export declare namespace CustomerCompany {
    /**
     * Static representation of the [[customer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER: StringField<CustomerCompany>;
    /**
     * Static representation of the [[companyCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMPANY_CODE: StringField<CustomerCompany>;
    /**
     * Static representation of the [[aparToleranceGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APAR_TOLERANCE_GROUP: StringField<CustomerCompany>;
    /**
     * Static representation of the [[accountByCustomer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACCOUNT_BY_CUSTOMER: StringField<CustomerCompany>;
    /**
     * Static representation of the [[accountingClerk]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACCOUNTING_CLERK: StringField<CustomerCompany>;
    /**
     * Static representation of the [[accountingClerkFaxNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACCOUNTING_CLERK_FAX_NUMBER: StringField<CustomerCompany>;
    /**
     * Static representation of the [[accountingClerkInternetAddress]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACCOUNTING_CLERK_INTERNET_ADDRESS: StringField<CustomerCompany>;
    /**
     * Static representation of the [[accountingClerkPhoneNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACCOUNTING_CLERK_PHONE_NUMBER: StringField<CustomerCompany>;
    /**
     * Static representation of the [[alternativePayerAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ALTERNATIVE_PAYER_ACCOUNT: StringField<CustomerCompany>;
    /**
     * Static representation of the [[authorizationGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AUTHORIZATION_GROUP: StringField<CustomerCompany>;
    /**
     * Static representation of the [[collectiveInvoiceVariant]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COLLECTIVE_INVOICE_VARIANT: StringField<CustomerCompany>;
    /**
     * Static representation of the [[customerAccountNote]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER_ACCOUNT_NOTE: StringField<CustomerCompany>;
    /**
     * Static representation of the [[customerHeadOffice]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER_HEAD_OFFICE: StringField<CustomerCompany>;
    /**
     * Static representation of the [[customerSupplierClearingIsUsed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER_SUPPLIER_CLEARING_IS_USED: BooleanField<CustomerCompany>;
    /**
     * Static representation of the [[houseBank]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HOUSE_BANK: StringField<CustomerCompany>;
    /**
     * Static representation of the [[interestCalculationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INTEREST_CALCULATION_CODE: StringField<CustomerCompany>;
    /**
     * Static representation of the [[interestCalculationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INTEREST_CALCULATION_DATE: DateField<CustomerCompany>;
    /**
     * Static representation of the [[intrstCalcFrequencyInMonths]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INTRST_CALC_FREQUENCY_IN_MONTHS: StringField<CustomerCompany>;
    /**
     * Static representation of the [[isToBeLocallyProcessed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_TO_BE_LOCALLY_PROCESSED: BooleanField<CustomerCompany>;
    /**
     * Static representation of the [[itemIsToBePaidSeparately]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM_IS_TO_BE_PAID_SEPARATELY: BooleanField<CustomerCompany>;
    /**
     * Static representation of the [[layoutSortingRule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAYOUT_SORTING_RULE: StringField<CustomerCompany>;
    /**
     * Static representation of the [[paymentBlockingReason]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENT_BLOCKING_REASON: StringField<CustomerCompany>;
    /**
     * Static representation of the [[paymentMethodsList]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENT_METHODS_LIST: StringField<CustomerCompany>;
    /**
     * Static representation of the [[paymentTerms]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENT_TERMS: StringField<CustomerCompany>;
    /**
     * Static representation of the [[paytAdviceIsSentbyEdi]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYT_ADVICE_IS_SENTBY_EDI: BooleanField<CustomerCompany>;
    /**
     * Static representation of the [[physicalInventoryBlockInd]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PHYSICAL_INVENTORY_BLOCK_IND: BooleanField<CustomerCompany>;
    /**
     * Static representation of the [[reconciliationAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RECONCILIATION_ACCOUNT: StringField<CustomerCompany>;
    /**
     * Static representation of the [[recordPaymentHistoryIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RECORD_PAYMENT_HISTORY_INDICATOR: BooleanField<CustomerCompany>;
    /**
     * Static representation of the [[userAtCustomer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_AT_CUSTOMER: StringField<CustomerCompany>;
    /**
     * Static representation of the [[deletionIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DELETION_INDICATOR: BooleanField<CustomerCompany>;
    /**
     * Static representation of the [[cashPlanningGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CASH_PLANNING_GROUP: StringField<CustomerCompany>;
    /**
     * Static representation of the [[knownOrNegotiatedLeave]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const KNOWN_OR_NEGOTIATED_LEAVE: StringField<CustomerCompany>;
    /**
     * Static representation of the [[valueAdjustmentKey]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VALUE_ADJUSTMENT_KEY: StringField<CustomerCompany>;
    /**
     * Static representation of the [[customerAccountGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER_ACCOUNT_GROUP: StringField<CustomerCompany>;
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
    const _allFields: Array<StringField<CustomerCompany> | BooleanField<CustomerCompany> | DateField<CustomerCompany> | Link<CustomerCompany, CustomerCompanyText> | Link<CustomerCompany, CustomerDunning> | Link<CustomerCompany, CustomerWithHoldingTax>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<CustomerCompany>;
    /**
     * All key fields of the CustomerCompany entity.
     */
    const _keyFields: Array<Field<CustomerCompany>>;
    /**
     * Mapping of all key field names to the respective static field property CustomerCompany.
     */
    const _keys: {
        [keys: string]: Field<CustomerCompany>;
    };
}
//# sourceMappingURL=CustomerCompany.d.ts.map