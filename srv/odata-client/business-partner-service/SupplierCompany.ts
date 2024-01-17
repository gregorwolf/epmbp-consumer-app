/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SupplierCompanyRequestBuilder } from './SupplierCompanyRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, Constructable, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field, FieldBuilder, Link, OneToOneLink, OrderableEdmTypeField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "A_SupplierCompany" of service "API_BUSINESS_PARTNER".
 */
export class SupplierCompany extends EntityV2 implements SupplierCompanyType {
  /**
   * Technical entity name for SupplierCompany.
   */
  static _entityName = 'A_SupplierCompany';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
  /**
   * Account Number of Supplier.
   * Maximum length: 10.
   */
  supplier!: string;
  /**
   * Company Code.
   * Maximum length: 4.
   */
  companyCode!: string;
  /**
   * Authorization Group.
   * Maximum length: 4.
   * @nullable
   */
  authorizationGroup?: string;
  /**
   * Name of Company Code or Company.
   * Maximum length: 25.
   * @nullable
   */
  companyCodeName?: string;
  /**
   * Block Key for Payment.
   * Maximum length: 1.
   * @nullable
   */
  paymentBlockingReason?: string;
  /**
   * Posting block for company code.
   * @nullable
   */
  supplierIsBlockedForPosting?: boolean;
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
   * Accounting clerk's telephone number at business partner.
   * Maximum length: 30.
   * @nullable
   */
  accountingClerkPhoneNumber?: string;
  /**
   * Clerk at vendor.
   * Maximum length: 15.
   * @nullable
   */
  supplierClerk?: string;
  /**
   * Internet address of partner company clerk.
   * Maximum length: 130.
   * @nullable
   */
  supplierClerkUrl?: string;
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
   * Indicator: Clearing between customer and vendor?.
   * @nullable
   */
  clearCustomerSupplier?: boolean;
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
   * Indicator: Send Payment Advices by EDI.
   * @nullable
   */
  paymentIsToBeSentByEdi?: boolean;
  /**
   * Short Key for a House Bank.
   * Maximum length: 5.
   * @nullable
   */
  houseBank?: string;
  /**
   * Probable Time Until Check Is Paid.
   * @nullable
   */
  checkPaidDurationInDays?: BigNumber;
  /**
   * Currency Key.
   * Maximum length: 5.
   * @nullable
   */
  currency?: string;
  /**
   * Bill of Exchange Limit (in Local Currency).
   * @nullable
   */
  billOfExchLmtAmtInCoCodeCrcy?: BigNumber;
  /**
   * Our account number with the vendor.
   * Maximum length: 12.
   * @nullable
   */
  supplierClerkIdBySupplier?: string;
  /**
   * Reconciliation Account in General Ledger.
   * Maximum length: 10.
   * @nullable
   */
  reconciliationAccount?: string;
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
   * Head Office Account Number.
   * Maximum length: 10.
   * @nullable
   */
  supplierHeadOffice?: string;
  /**
   * Account number of the alternative payee.
   * Maximum length: 10.
   * @nullable
   */
  alternativePayee?: string;
  /**
   * Key for Sorting According to Assignment Numbers.
   * Maximum length: 3.
   * @nullable
   */
  layoutSortingRule?: string;
  /**
   * Tolerance Group for Business Partner/G/L Account.
   * Maximum length: 4.
   * @nullable
   */
  aparToleranceGroup?: string;
  /**
   * Certification Date.
   * @nullable
   */
  supplierCertificationDate?: Moment;
  /**
   * Memo.
   * Maximum length: 30.
   * @nullable
   */
  supplierAccountNote?: string;
  /**
   * Withholding Tax Country/Region Key.
   * Maximum length: 3.
   * @nullable
   */
  withholdingTaxCountry?: string;
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
   * Check Flag for Double Invoices or Credit Memos.
   * @nullable
   */
  isToBeCheckedForDuplicates?: boolean;
  /**
   * Minority Indicator.
   * Maximum length: 3.
   * @nullable
   */
  minorityGroup?: string;
  /**
   * Supplier Account Group.
   * Maximum length: 4.
   * @nullable
   */
  supplierAccountGroup?: string;
  /**
   * One-to-many navigation property to the [[SupplierCompanyText]] entity.
   */
  toCompanyText!: SupplierCompanyText[];
  /**
   * One-to-one navigation property to the [[Supplier]] entity.
   */
  toSupplier?: Supplier | null;
  /**
   * One-to-many navigation property to the [[SupplierDunning]] entity.
   */
  toSupplierDunning!: SupplierDunning[];
  /**
   * One-to-many navigation property to the [[SupplierWithHoldingTax]] entity.
   */
  toSupplierWithHoldingTax!: SupplierWithHoldingTax[];

  /**
   * Returns an entity builder to construct instances of `SupplierCompany`.
   * @returns A builder that constructs instances of entity type `SupplierCompany`.
   */
  static builder(): EntityBuilderType<SupplierCompany, SupplierCompanyType> {
    return EntityV2.entityBuilder(SupplierCompany);
  }

  /**
   * Returns a request builder to construct requests for operations on the `SupplierCompany` entity type.
   * @returns A `SupplierCompany` request builder.
   */
  static requestBuilder(): SupplierCompanyRequestBuilder {
    return new SupplierCompanyRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `SupplierCompany`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `SupplierCompany`.
   */
  static customField(fieldName: string): CustomFieldV2<SupplierCompany> {
    return EntityV2.customFieldSelector(fieldName, SupplierCompany);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { SupplierCompanyText, SupplierCompanyTextType } from './SupplierCompanyText';
import { Supplier, SupplierType } from './Supplier';
import { SupplierDunning, SupplierDunningType } from './SupplierDunning';
import { SupplierWithHoldingTax, SupplierWithHoldingTaxType } from './SupplierWithHoldingTax';

export interface SupplierCompanyType {
  supplier: string;
  companyCode: string;
  authorizationGroup?: string | null;
  companyCodeName?: string | null;
  paymentBlockingReason?: string | null;
  supplierIsBlockedForPosting?: boolean | null;
  accountingClerk?: string | null;
  accountingClerkFaxNumber?: string | null;
  accountingClerkPhoneNumber?: string | null;
  supplierClerk?: string | null;
  supplierClerkUrl?: string | null;
  paymentMethodsList?: string | null;
  paymentReason?: string | null;
  paymentTerms?: string | null;
  clearCustomerSupplier?: boolean | null;
  isToBeLocallyProcessed?: boolean | null;
  itemIsToBePaidSeparately?: boolean | null;
  paymentIsToBeSentByEdi?: boolean | null;
  houseBank?: string | null;
  checkPaidDurationInDays?: BigNumber | null;
  currency?: string | null;
  billOfExchLmtAmtInCoCodeCrcy?: BigNumber | null;
  supplierClerkIdBySupplier?: string | null;
  reconciliationAccount?: string | null;
  interestCalculationCode?: string | null;
  interestCalculationDate?: Moment | null;
  intrstCalcFrequencyInMonths?: string | null;
  supplierHeadOffice?: string | null;
  alternativePayee?: string | null;
  layoutSortingRule?: string | null;
  aparToleranceGroup?: string | null;
  supplierCertificationDate?: Moment | null;
  supplierAccountNote?: string | null;
  withholdingTaxCountry?: string | null;
  deletionIndicator?: boolean | null;
  cashPlanningGroup?: string | null;
  isToBeCheckedForDuplicates?: boolean | null;
  minorityGroup?: string | null;
  supplierAccountGroup?: string | null;
  toCompanyText: SupplierCompanyTextType[];
  toSupplier?: SupplierType | null;
  toSupplierDunning: SupplierDunningType[];
  toSupplierWithHoldingTax: SupplierWithHoldingTaxType[];
}

export namespace SupplierCompany {
  const _fieldBuilder: FieldBuilder<Constructable<SupplierCompany>> = new FieldBuilder(SupplierCompany);
  /**
   * Static representation of the [[supplier]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPPLIER = _fieldBuilder.buildEdmTypeField('Supplier', 'Edm.String', false);
  /**
   * Static representation of the [[companyCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMPANY_CODE = _fieldBuilder.buildEdmTypeField('CompanyCode', 'Edm.String', false);
  /**
   * Static representation of the [[authorizationGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AUTHORIZATION_GROUP = _fieldBuilder.buildEdmTypeField('AuthorizationGroup', 'Edm.String', true);
  /**
   * Static representation of the [[companyCodeName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMPANY_CODE_NAME = _fieldBuilder.buildEdmTypeField('CompanyCodeName', 'Edm.String', true);
  /**
   * Static representation of the [[paymentBlockingReason]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_BLOCKING_REASON = _fieldBuilder.buildEdmTypeField('PaymentBlockingReason', 'Edm.String', true);
  /**
   * Static representation of the [[supplierIsBlockedForPosting]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPPLIER_IS_BLOCKED_FOR_POSTING = _fieldBuilder.buildEdmTypeField('SupplierIsBlockedForPosting', 'Edm.Boolean', true);
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
   * Static representation of the [[accountingClerkPhoneNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCOUNTING_CLERK_PHONE_NUMBER = _fieldBuilder.buildEdmTypeField('AccountingClerkPhoneNumber', 'Edm.String', true);
  /**
   * Static representation of the [[supplierClerk]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPPLIER_CLERK = _fieldBuilder.buildEdmTypeField('SupplierClerk', 'Edm.String', true);
  /**
   * Static representation of the [[supplierClerkUrl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPPLIER_CLERK_URL = _fieldBuilder.buildEdmTypeField('SupplierClerkURL', 'Edm.String', true);
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
   * Static representation of the [[clearCustomerSupplier]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CLEAR_CUSTOMER_SUPPLIER = _fieldBuilder.buildEdmTypeField('ClearCustomerSupplier', 'Edm.Boolean', true);
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
   * Static representation of the [[paymentIsToBeSentByEdi]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_IS_TO_BE_SENT_BY_EDI = _fieldBuilder.buildEdmTypeField('PaymentIsToBeSentByEDI', 'Edm.Boolean', true);
  /**
   * Static representation of the [[houseBank]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HOUSE_BANK = _fieldBuilder.buildEdmTypeField('HouseBank', 'Edm.String', true);
  /**
   * Static representation of the [[checkPaidDurationInDays]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CHECK_PAID_DURATION_IN_DAYS = _fieldBuilder.buildEdmTypeField('CheckPaidDurationInDays', 'Edm.Decimal', true);
  /**
   * Static representation of the [[currency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENCY = _fieldBuilder.buildEdmTypeField('Currency', 'Edm.String', true);
  /**
   * Static representation of the [[billOfExchLmtAmtInCoCodeCrcy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BILL_OF_EXCH_LMT_AMT_IN_CO_CODE_CRCY = _fieldBuilder.buildEdmTypeField('BillOfExchLmtAmtInCoCodeCrcy', 'Edm.Decimal', true);
  /**
   * Static representation of the [[supplierClerkIdBySupplier]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPPLIER_CLERK_ID_BY_SUPPLIER = _fieldBuilder.buildEdmTypeField('SupplierClerkIDBySupplier', 'Edm.String', true);
  /**
   * Static representation of the [[reconciliationAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RECONCILIATION_ACCOUNT = _fieldBuilder.buildEdmTypeField('ReconciliationAccount', 'Edm.String', true);
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
   * Static representation of the [[supplierHeadOffice]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPPLIER_HEAD_OFFICE = _fieldBuilder.buildEdmTypeField('SupplierHeadOffice', 'Edm.String', true);
  /**
   * Static representation of the [[alternativePayee]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ALTERNATIVE_PAYEE = _fieldBuilder.buildEdmTypeField('AlternativePayee', 'Edm.String', true);
  /**
   * Static representation of the [[layoutSortingRule]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAYOUT_SORTING_RULE = _fieldBuilder.buildEdmTypeField('LayoutSortingRule', 'Edm.String', true);
  /**
   * Static representation of the [[aparToleranceGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APAR_TOLERANCE_GROUP = _fieldBuilder.buildEdmTypeField('APARToleranceGroup', 'Edm.String', true);
  /**
   * Static representation of the [[supplierCertificationDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPPLIER_CERTIFICATION_DATE = _fieldBuilder.buildEdmTypeField('SupplierCertificationDate', 'Edm.DateTime', true);
  /**
   * Static representation of the [[supplierAccountNote]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPPLIER_ACCOUNT_NOTE = _fieldBuilder.buildEdmTypeField('SupplierAccountNote', 'Edm.String', true);
  /**
   * Static representation of the [[withholdingTaxCountry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WITHHOLDING_TAX_COUNTRY = _fieldBuilder.buildEdmTypeField('WithholdingTaxCountry', 'Edm.String', true);
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
   * Static representation of the [[isToBeCheckedForDuplicates]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_TO_BE_CHECKED_FOR_DUPLICATES = _fieldBuilder.buildEdmTypeField('IsToBeCheckedForDuplicates', 'Edm.Boolean', true);
  /**
   * Static representation of the [[minorityGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MINORITY_GROUP = _fieldBuilder.buildEdmTypeField('MinorityGroup', 'Edm.String', true);
  /**
   * Static representation of the [[supplierAccountGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPPLIER_ACCOUNT_GROUP = _fieldBuilder.buildEdmTypeField('SupplierAccountGroup', 'Edm.String', true);
  /**
   * Static representation of the one-to-many navigation property [[toCompanyText]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_COMPANY_TEXT: Link<SupplierCompany, SupplierCompanyText> = new Link('to_CompanyText', SupplierCompany, SupplierCompanyText);
  /**
   * Static representation of the one-to-one navigation property [[toSupplier]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_SUPPLIER: OneToOneLink<SupplierCompany, Supplier> = new OneToOneLink('to_Supplier', SupplierCompany, Supplier);
  /**
   * Static representation of the one-to-many navigation property [[toSupplierDunning]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_SUPPLIER_DUNNING: Link<SupplierCompany, SupplierDunning> = new Link('to_SupplierDunning', SupplierCompany, SupplierDunning);
  /**
   * Static representation of the one-to-many navigation property [[toSupplierWithHoldingTax]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_SUPPLIER_WITH_HOLDING_TAX: Link<SupplierCompany, SupplierWithHoldingTax> = new Link('to_SupplierWithHoldingTax', SupplierCompany, SupplierWithHoldingTax);
  /**
   * All fields of the SupplierCompany entity.
   */
  export const _allFields: Array<EdmTypeField<SupplierCompany, 'Edm.String', false, true> | EdmTypeField<SupplierCompany, 'Edm.String', true, true> | EdmTypeField<SupplierCompany, 'Edm.Boolean', true, true> | OrderableEdmTypeField<SupplierCompany, 'Edm.Decimal', true, true> | OrderableEdmTypeField<SupplierCompany, 'Edm.DateTime', true, true> | Link<SupplierCompany, SupplierCompanyText> | OneToOneLink<SupplierCompany, Supplier> | Link<SupplierCompany, SupplierDunning> | Link<SupplierCompany, SupplierWithHoldingTax>> = [
    SupplierCompany.SUPPLIER,
    SupplierCompany.COMPANY_CODE,
    SupplierCompany.AUTHORIZATION_GROUP,
    SupplierCompany.COMPANY_CODE_NAME,
    SupplierCompany.PAYMENT_BLOCKING_REASON,
    SupplierCompany.SUPPLIER_IS_BLOCKED_FOR_POSTING,
    SupplierCompany.ACCOUNTING_CLERK,
    SupplierCompany.ACCOUNTING_CLERK_FAX_NUMBER,
    SupplierCompany.ACCOUNTING_CLERK_PHONE_NUMBER,
    SupplierCompany.SUPPLIER_CLERK,
    SupplierCompany.SUPPLIER_CLERK_URL,
    SupplierCompany.PAYMENT_METHODS_LIST,
    SupplierCompany.PAYMENT_REASON,
    SupplierCompany.PAYMENT_TERMS,
    SupplierCompany.CLEAR_CUSTOMER_SUPPLIER,
    SupplierCompany.IS_TO_BE_LOCALLY_PROCESSED,
    SupplierCompany.ITEM_IS_TO_BE_PAID_SEPARATELY,
    SupplierCompany.PAYMENT_IS_TO_BE_SENT_BY_EDI,
    SupplierCompany.HOUSE_BANK,
    SupplierCompany.CHECK_PAID_DURATION_IN_DAYS,
    SupplierCompany.CURRENCY,
    SupplierCompany.BILL_OF_EXCH_LMT_AMT_IN_CO_CODE_CRCY,
    SupplierCompany.SUPPLIER_CLERK_ID_BY_SUPPLIER,
    SupplierCompany.RECONCILIATION_ACCOUNT,
    SupplierCompany.INTEREST_CALCULATION_CODE,
    SupplierCompany.INTEREST_CALCULATION_DATE,
    SupplierCompany.INTRST_CALC_FREQUENCY_IN_MONTHS,
    SupplierCompany.SUPPLIER_HEAD_OFFICE,
    SupplierCompany.ALTERNATIVE_PAYEE,
    SupplierCompany.LAYOUT_SORTING_RULE,
    SupplierCompany.APAR_TOLERANCE_GROUP,
    SupplierCompany.SUPPLIER_CERTIFICATION_DATE,
    SupplierCompany.SUPPLIER_ACCOUNT_NOTE,
    SupplierCompany.WITHHOLDING_TAX_COUNTRY,
    SupplierCompany.DELETION_INDICATOR,
    SupplierCompany.CASH_PLANNING_GROUP,
    SupplierCompany.IS_TO_BE_CHECKED_FOR_DUPLICATES,
    SupplierCompany.MINORITY_GROUP,
    SupplierCompany.SUPPLIER_ACCOUNT_GROUP,
    SupplierCompany.TO_COMPANY_TEXT,
    SupplierCompany.TO_SUPPLIER,
    SupplierCompany.TO_SUPPLIER_DUNNING,
    SupplierCompany.TO_SUPPLIER_WITH_HOLDING_TAX
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<SupplierCompany> = new AllFields('*', SupplierCompany);
  /**
   * All key fields of the SupplierCompany entity.
   */
  export const _keyFields: Array<Field<SupplierCompany, boolean, boolean>> = [SupplierCompany.SUPPLIER, SupplierCompany.COMPANY_CODE];
  /**
   * Mapping of all key field names to the respective static field property SupplierCompany.
   */
  export const _keys: { [keys: string]: Field<SupplierCompany, boolean, boolean> } = SupplierCompany._keyFields.reduce((acc: { [keys: string]: Field<SupplierCompany, boolean, boolean> }, field: Field<SupplierCompany, boolean, boolean>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
