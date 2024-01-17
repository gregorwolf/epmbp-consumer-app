/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CustomerCompanyRequestBuilder } from './CustomerCompanyRequestBuilder';
import { Moment } from 'moment';
import { AllFields, Constructable, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field, FieldBuilder, Link, OrderableEdmTypeField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "A_CustomerCompany" of service "API_BUSINESS_PARTNER".
 */
export class CustomerCompany extends EntityV2 implements CustomerCompanyType {
  /**
   * Technical entity name for CustomerCompany.
   */
  static _entityName = 'A_CustomerCompany';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
  /**
   * Customer Number.
   * Maximum length: 10.
   */
  customer!: string;
  /**
   * Company Code.
   * Maximum length: 4.
   */
  companyCode!: string;
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
  toCompanyText!: CustomerCompanyText[];
  /**
   * One-to-many navigation property to the [[CustomerDunning]] entity.
   */
  toCustomerDunning!: CustomerDunning[];
  /**
   * One-to-many navigation property to the [[CustomerWithHoldingTax]] entity.
   */
  toWithHoldingTax!: CustomerWithHoldingTax[];

  /**
   * Returns an entity builder to construct instances of `CustomerCompany`.
   * @returns A builder that constructs instances of entity type `CustomerCompany`.
   */
  static builder(): EntityBuilderType<CustomerCompany, CustomerCompanyType> {
    return EntityV2.entityBuilder(CustomerCompany);
  }

  /**
   * Returns a request builder to construct requests for operations on the `CustomerCompany` entity type.
   * @returns A `CustomerCompany` request builder.
   */
  static requestBuilder(): CustomerCompanyRequestBuilder {
    return new CustomerCompanyRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `CustomerCompany`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `CustomerCompany`.
   */
  static customField(fieldName: string): CustomFieldV2<CustomerCompany> {
    return EntityV2.customFieldSelector(fieldName, CustomerCompany);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
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

export namespace CustomerCompany {
  const _fieldBuilder: FieldBuilder<Constructable<CustomerCompany>> = new FieldBuilder(CustomerCompany);
  /**
   * Static representation of the [[customer]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER = _fieldBuilder.buildEdmTypeField('Customer', 'Edm.String', false);
  /**
   * Static representation of the [[companyCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMPANY_CODE = _fieldBuilder.buildEdmTypeField('CompanyCode', 'Edm.String', false);
  /**
   * Static representation of the [[aparToleranceGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APAR_TOLERANCE_GROUP = _fieldBuilder.buildEdmTypeField('APARToleranceGroup', 'Edm.String', true);
  /**
   * Static representation of the [[accountByCustomer]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCOUNT_BY_CUSTOMER = _fieldBuilder.buildEdmTypeField('AccountByCustomer', 'Edm.String', true);
  /**
   * Static representation of the [[accountingClerk]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCOUNTING_CLERK = _fieldBuilder.buildEdmTypeField('AccountingClerk', 'Edm.String', true);
  /**
   * Static representation of the [[accountingClerkFaxNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCOUNTING_CLERK_FAX_NUMBER = _fieldBuilder.buildEdmTypeField('AccountingClerkFaxNumber', 'Edm.String', true);
  /**
   * Static representation of the [[accountingClerkInternetAddress]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCOUNTING_CLERK_INTERNET_ADDRESS = _fieldBuilder.buildEdmTypeField('AccountingClerkInternetAddress', 'Edm.String', true);
  /**
   * Static representation of the [[accountingClerkPhoneNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCOUNTING_CLERK_PHONE_NUMBER = _fieldBuilder.buildEdmTypeField('AccountingClerkPhoneNumber', 'Edm.String', true);
  /**
   * Static representation of the [[alternativePayerAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ALTERNATIVE_PAYER_ACCOUNT = _fieldBuilder.buildEdmTypeField('AlternativePayerAccount', 'Edm.String', true);
  /**
   * Static representation of the [[authorizationGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AUTHORIZATION_GROUP = _fieldBuilder.buildEdmTypeField('AuthorizationGroup', 'Edm.String', true);
  /**
   * Static representation of the [[collectiveInvoiceVariant]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COLLECTIVE_INVOICE_VARIANT = _fieldBuilder.buildEdmTypeField('CollectiveInvoiceVariant', 'Edm.String', true);
  /**
   * Static representation of the [[customerAccountNote]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER_ACCOUNT_NOTE = _fieldBuilder.buildEdmTypeField('CustomerAccountNote', 'Edm.String', true);
  /**
   * Static representation of the [[customerHeadOffice]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER_HEAD_OFFICE = _fieldBuilder.buildEdmTypeField('CustomerHeadOffice', 'Edm.String', true);
  /**
   * Static representation of the [[customerSupplierClearingIsUsed]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER_SUPPLIER_CLEARING_IS_USED = _fieldBuilder.buildEdmTypeField('CustomerSupplierClearingIsUsed', 'Edm.Boolean', true);
  /**
   * Static representation of the [[houseBank]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HOUSE_BANK = _fieldBuilder.buildEdmTypeField('HouseBank', 'Edm.String', true);
  /**
   * Static representation of the [[interestCalculationCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INTEREST_CALCULATION_CODE = _fieldBuilder.buildEdmTypeField('InterestCalculationCode', 'Edm.String', true);
  /**
   * Static representation of the [[interestCalculationDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INTEREST_CALCULATION_DATE = _fieldBuilder.buildEdmTypeField('InterestCalculationDate', 'Edm.DateTime', true);
  /**
   * Static representation of the [[intrstCalcFrequencyInMonths]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INTRST_CALC_FREQUENCY_IN_MONTHS = _fieldBuilder.buildEdmTypeField('IntrstCalcFrequencyInMonths', 'Edm.String', true);
  /**
   * Static representation of the [[isToBeLocallyProcessed]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_TO_BE_LOCALLY_PROCESSED = _fieldBuilder.buildEdmTypeField('IsToBeLocallyProcessed', 'Edm.Boolean', true);
  /**
   * Static representation of the [[itemIsToBePaidSeparately]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEM_IS_TO_BE_PAID_SEPARATELY = _fieldBuilder.buildEdmTypeField('ItemIsToBePaidSeparately', 'Edm.Boolean', true);
  /**
   * Static representation of the [[layoutSortingRule]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAYOUT_SORTING_RULE = _fieldBuilder.buildEdmTypeField('LayoutSortingRule', 'Edm.String', true);
  /**
   * Static representation of the [[paymentBlockingReason]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_BLOCKING_REASON = _fieldBuilder.buildEdmTypeField('PaymentBlockingReason', 'Edm.String', true);
  /**
   * Static representation of the [[paymentMethodsList]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_METHODS_LIST = _fieldBuilder.buildEdmTypeField('PaymentMethodsList', 'Edm.String', true);
  /**
   * Static representation of the [[paymentReason]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_REASON = _fieldBuilder.buildEdmTypeField('PaymentReason', 'Edm.String', true);
  /**
   * Static representation of the [[paymentTerms]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_TERMS = _fieldBuilder.buildEdmTypeField('PaymentTerms', 'Edm.String', true);
  /**
   * Static representation of the [[paytAdviceIsSentbyEdi]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYT_ADVICE_IS_SENTBY_EDI = _fieldBuilder.buildEdmTypeField('PaytAdviceIsSentbyEDI', 'Edm.Boolean', true);
  /**
   * Static representation of the [[physicalInventoryBlockInd]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PHYSICAL_INVENTORY_BLOCK_IND = _fieldBuilder.buildEdmTypeField('PhysicalInventoryBlockInd', 'Edm.Boolean', true);
  /**
   * Static representation of the [[reconciliationAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RECONCILIATION_ACCOUNT = _fieldBuilder.buildEdmTypeField('ReconciliationAccount', 'Edm.String', true);
  /**
   * Static representation of the [[recordPaymentHistoryIndicator]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RECORD_PAYMENT_HISTORY_INDICATOR = _fieldBuilder.buildEdmTypeField('RecordPaymentHistoryIndicator', 'Edm.Boolean', true);
  /**
   * Static representation of the [[userAtCustomer]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_AT_CUSTOMER = _fieldBuilder.buildEdmTypeField('UserAtCustomer', 'Edm.String', true);
  /**
   * Static representation of the [[deletionIndicator]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DELETION_INDICATOR = _fieldBuilder.buildEdmTypeField('DeletionIndicator', 'Edm.Boolean', true);
  /**
   * Static representation of the [[cashPlanningGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CASH_PLANNING_GROUP = _fieldBuilder.buildEdmTypeField('CashPlanningGroup', 'Edm.String', true);
  /**
   * Static representation of the [[knownOrNegotiatedLeave]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const KNOWN_OR_NEGOTIATED_LEAVE = _fieldBuilder.buildEdmTypeField('KnownOrNegotiatedLeave', 'Edm.String', true);
  /**
   * Static representation of the [[valueAdjustmentKey]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VALUE_ADJUSTMENT_KEY = _fieldBuilder.buildEdmTypeField('ValueAdjustmentKey', 'Edm.String', true);
  /**
   * Static representation of the [[customerAccountGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER_ACCOUNT_GROUP = _fieldBuilder.buildEdmTypeField('CustomerAccountGroup', 'Edm.String', true);
  /**
   * Static representation of the one-to-many navigation property [[toCompanyText]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_COMPANY_TEXT: Link<CustomerCompany, CustomerCompanyText> = new Link('to_CompanyText', CustomerCompany, CustomerCompanyText);
  /**
   * Static representation of the one-to-many navigation property [[toCustomerDunning]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_CUSTOMER_DUNNING: Link<CustomerCompany, CustomerDunning> = new Link('to_CustomerDunning', CustomerCompany, CustomerDunning);
  /**
   * Static representation of the one-to-many navigation property [[toWithHoldingTax]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_WITH_HOLDING_TAX: Link<CustomerCompany, CustomerWithHoldingTax> = new Link('to_WithHoldingTax', CustomerCompany, CustomerWithHoldingTax);
  /**
   * All fields of the CustomerCompany entity.
   */
  export const _allFields: Array<EdmTypeField<CustomerCompany, 'Edm.String', false, true> | EdmTypeField<CustomerCompany, 'Edm.String', true, true> | EdmTypeField<CustomerCompany, 'Edm.Boolean', true, true> | OrderableEdmTypeField<CustomerCompany, 'Edm.DateTime', true, true> | Link<CustomerCompany, CustomerCompanyText> | Link<CustomerCompany, CustomerDunning> | Link<CustomerCompany, CustomerWithHoldingTax>> = [
    CustomerCompany.CUSTOMER,
    CustomerCompany.COMPANY_CODE,
    CustomerCompany.APAR_TOLERANCE_GROUP,
    CustomerCompany.ACCOUNT_BY_CUSTOMER,
    CustomerCompany.ACCOUNTING_CLERK,
    CustomerCompany.ACCOUNTING_CLERK_FAX_NUMBER,
    CustomerCompany.ACCOUNTING_CLERK_INTERNET_ADDRESS,
    CustomerCompany.ACCOUNTING_CLERK_PHONE_NUMBER,
    CustomerCompany.ALTERNATIVE_PAYER_ACCOUNT,
    CustomerCompany.AUTHORIZATION_GROUP,
    CustomerCompany.COLLECTIVE_INVOICE_VARIANT,
    CustomerCompany.CUSTOMER_ACCOUNT_NOTE,
    CustomerCompany.CUSTOMER_HEAD_OFFICE,
    CustomerCompany.CUSTOMER_SUPPLIER_CLEARING_IS_USED,
    CustomerCompany.HOUSE_BANK,
    CustomerCompany.INTEREST_CALCULATION_CODE,
    CustomerCompany.INTEREST_CALCULATION_DATE,
    CustomerCompany.INTRST_CALC_FREQUENCY_IN_MONTHS,
    CustomerCompany.IS_TO_BE_LOCALLY_PROCESSED,
    CustomerCompany.ITEM_IS_TO_BE_PAID_SEPARATELY,
    CustomerCompany.LAYOUT_SORTING_RULE,
    CustomerCompany.PAYMENT_BLOCKING_REASON,
    CustomerCompany.PAYMENT_METHODS_LIST,
    CustomerCompany.PAYMENT_REASON,
    CustomerCompany.PAYMENT_TERMS,
    CustomerCompany.PAYT_ADVICE_IS_SENTBY_EDI,
    CustomerCompany.PHYSICAL_INVENTORY_BLOCK_IND,
    CustomerCompany.RECONCILIATION_ACCOUNT,
    CustomerCompany.RECORD_PAYMENT_HISTORY_INDICATOR,
    CustomerCompany.USER_AT_CUSTOMER,
    CustomerCompany.DELETION_INDICATOR,
    CustomerCompany.CASH_PLANNING_GROUP,
    CustomerCompany.KNOWN_OR_NEGOTIATED_LEAVE,
    CustomerCompany.VALUE_ADJUSTMENT_KEY,
    CustomerCompany.CUSTOMER_ACCOUNT_GROUP,
    CustomerCompany.TO_COMPANY_TEXT,
    CustomerCompany.TO_CUSTOMER_DUNNING,
    CustomerCompany.TO_WITH_HOLDING_TAX
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<CustomerCompany> = new AllFields('*', CustomerCompany);
  /**
   * All key fields of the CustomerCompany entity.
   */
  export const _keyFields: Array<Field<CustomerCompany, boolean, boolean>> = [CustomerCompany.CUSTOMER, CustomerCompany.COMPANY_CODE];
  /**
   * Mapping of all key field names to the respective static field property CustomerCompany.
   */
  export const _keys: { [keys: string]: Field<CustomerCompany, boolean, boolean> } = CustomerCompany._keyFields.reduce((acc: { [keys: string]: Field<CustomerCompany, boolean, boolean> }, field: Field<CustomerCompany, boolean, boolean>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
