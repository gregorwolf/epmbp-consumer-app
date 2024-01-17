/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SupplierPurchasingOrgRequestBuilder } from './SupplierPurchasingOrgRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, Constructable, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field, FieldBuilder, Link, OrderableEdmTypeField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "A_SupplierPurchasingOrg" of service "API_BUSINESS_PARTNER".
 */
export class SupplierPurchasingOrg extends EntityV2 implements SupplierPurchasingOrgType {
  /**
   * Technical entity name for SupplierPurchasingOrg.
   */
  static _entityName = 'A_SupplierPurchasingOrg';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
  /**
   * Supplier's Account Number.
   * Maximum length: 10.
   */
  supplier!: string;
  /**
   * Purchasing Organization.
   * Maximum length: 4.
   */
  purchasingOrganization!: string;
  /**
   * Automatic evaluated receipt settlement for return items.
   * @nullable
   */
  automaticEvaluatedRcptSettlmt?: boolean;
  /**
   * Group for Calculation Schema (Supplier).
   * Maximum length: 2.
   * @nullable
   */
  calculationSchemaGroupCode?: string;
  /**
   * Deletion Indicator for Supplier at Purchasing Level.
   * @nullable
   */
  deletionIndicator?: boolean;
  /**
   * Evaluated Receipt Settlement (ERS).
   * @nullable
   */
  evaldReceiptSettlementIsActive?: boolean;
  /**
   * Incoterms (Part 1).
   * Maximum length: 3.
   * @nullable
   */
  incotermsClassification?: string;
  /**
   * Incoterms (Part 2).
   * Maximum length: 28.
   * @nullable
   */
  incotermsTransferLocation?: string;
  /**
   * Incoterms Version.
   * Maximum length: 4.
   * @nullable
   */
  incotermsVersion?: string;
  /**
   * Incoterms Location 1.
   * Maximum length: 70.
   * @nullable
   */
  incotermsLocation1?: string;
  /**
   * Incoterms Location 2.
   * Maximum length: 70.
   * @nullable
   */
  incotermsLocation2?: string;
  /**
   * Location UUID.
   * @nullable
   */
  incotermsSupChnLoc1AddlUuid?: string;
  /**
   * Location UUID.
   * @nullable
   */
  incotermsSupChnLoc2AddlUuid?: string;
  /**
   * Location UUID.
   * @nullable
   */
  incotermsSupChnDvtgLocAddlUuid?: string;
  /**
   * Mode of Transport at the Border (Intrastat).
   * Maximum length: 1.
   * @nullable
   */
  intrastatCrsBorderTrMode?: string;
  /**
   * Indicator: GR-Based Invoice Verification.
   * @nullable
   */
  invoiceIsGoodsReceiptBased?: boolean;
  /**
   * Indicator for Service-Based Invoice Verification.
   * @nullable
   */
  invoiceIsMmServiceEntryBased?: boolean;
  /**
   * Planned Delivery Time in Days.
   * @nullable
   */
  materialPlannedDeliveryDurn?: BigNumber;
  /**
   * Minimum order value.
   * @nullable
   */
  minimumOrderAmount?: BigNumber;
  /**
   * Key for Terms of Payment.
   * Maximum length: 4.
   * @nullable
   */
  paymentTerms?: string;
  /**
   * Planning Cycle.
   * Maximum length: 3.
   * @nullable
   */
  planningCycle?: string;
  /**
   * Price Determination (Pricing) Date Control.
   * Maximum length: 1.
   * @nullable
   */
  pricingDateControl?: string;
  /**
   * Profile for transferring material data via IDoc PROACT.
   * Maximum length: 4.
   * @nullable
   */
  prodStockAndSlsDataTransfPrfl?: string;
  /**
   * Unit of Measure Group.
   * Maximum length: 4.
   * @nullable
   */
  productUnitGroup?: string;
  /**
   * Automatic Generation of Purchase Order Allowed.
   * @nullable
   */
  purOrdAutoGenerationIsAllowed?: boolean;
  /**
   * Purchase order currency.
   * Maximum length: 5.
   * @nullable
   */
  purchaseOrderCurrency?: string;
  /**
   * Purchasing Group.
   * Maximum length: 3.
   * @nullable
   */
  purchasingGroup?: string;
  /**
   * Purchasing block at purchasing organization level.
   * @nullable
   */
  purchasingIsBlockedForSupplier?: boolean;
  /**
   * Rounding Profile.
   * Maximum length: 4.
   * @nullable
   */
  roundingProfile?: string;
  /**
   * Shipping Conditions.
   * Maximum length: 2.
   * @nullable
   */
  shippingCondition?: string;
  /**
   * Checkbox.
   * @nullable
   */
  suplrDiscountInKindIsGranted?: boolean;
  /**
   * Revaluation allowed.
   * @nullable
   */
  suplrInvcRevalIsAllowed?: boolean;
  /**
   * Indicator: Relevant for Settlement Management.
   * @nullable
   */
  suplrIsRlvtForSettlmtMgmt?: boolean;
  /**
   * Indicator: "relev. to price determination (vend. hierarchy).
   * @nullable
   */
  suplrPurgOrgIsRlvtForPriceDetn?: boolean;
  /**
   * ABC indicator.
   * Maximum length: 1.
   * @nullable
   */
  supplierAbcClassificationCode?: string;
  /**
   * Our account number with the supplier.
   * Maximum length: 12.
   * @nullable
   */
  supplierAccountNumber?: string;
  /**
   * Indicates whether supplier is returns supplier.
   * @nullable
   */
  supplierIsReturnsSupplier?: boolean;
  /**
   * Supplier's Telephone Number.
   * Maximum length: 16.
   * @nullable
   */
  supplierPhoneNumber?: string;
  /**
   * Responsible Salesperson at Supplier's Office.
   * Maximum length: 30.
   * @nullable
   */
  supplierRespSalesPersonName?: string;
  /**
   * Confirmation Control Key.
   * Maximum length: 4.
   * @nullable
   */
  supplierConfirmationControlKey?: string;
  /**
   * Order Acknowledgment Requirement.
   * @nullable
   */
  isOrderAcknRqd?: boolean;
  /**
   * Authorization Group.
   * Maximum length: 4.
   * @nullable
   */
  authorizationGroup?: string;
  /**
   * Supplier Account Group.
   * Maximum length: 4.
   * @nullable
   */
  supplierAccountGroup?: string;
  /**
   * One-to-many navigation property to the [[SupplierPartnerFunc]] entity.
   */
  toPartnerFunction!: SupplierPartnerFunc[];
  /**
   * One-to-many navigation property to the [[SupplierPurchasingOrgText]] entity.
   */
  toPurchasingOrgText!: SupplierPurchasingOrgText[];

  /**
   * Returns an entity builder to construct instances of `SupplierPurchasingOrg`.
   * @returns A builder that constructs instances of entity type `SupplierPurchasingOrg`.
   */
  static builder(): EntityBuilderType<SupplierPurchasingOrg, SupplierPurchasingOrgType> {
    return EntityV2.entityBuilder(SupplierPurchasingOrg);
  }

  /**
   * Returns a request builder to construct requests for operations on the `SupplierPurchasingOrg` entity type.
   * @returns A `SupplierPurchasingOrg` request builder.
   */
  static requestBuilder(): SupplierPurchasingOrgRequestBuilder {
    return new SupplierPurchasingOrgRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `SupplierPurchasingOrg`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `SupplierPurchasingOrg`.
   */
  static customField(fieldName: string): CustomFieldV2<SupplierPurchasingOrg> {
    return EntityV2.customFieldSelector(fieldName, SupplierPurchasingOrg);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { SupplierPartnerFunc, SupplierPartnerFuncType } from './SupplierPartnerFunc';
import { SupplierPurchasingOrgText, SupplierPurchasingOrgTextType } from './SupplierPurchasingOrgText';

export interface SupplierPurchasingOrgType {
  supplier: string;
  purchasingOrganization: string;
  automaticEvaluatedRcptSettlmt?: boolean | null;
  calculationSchemaGroupCode?: string | null;
  deletionIndicator?: boolean | null;
  evaldReceiptSettlementIsActive?: boolean | null;
  incotermsClassification?: string | null;
  incotermsTransferLocation?: string | null;
  incotermsVersion?: string | null;
  incotermsLocation1?: string | null;
  incotermsLocation2?: string | null;
  incotermsSupChnLoc1AddlUuid?: string | null;
  incotermsSupChnLoc2AddlUuid?: string | null;
  incotermsSupChnDvtgLocAddlUuid?: string | null;
  intrastatCrsBorderTrMode?: string | null;
  invoiceIsGoodsReceiptBased?: boolean | null;
  invoiceIsMmServiceEntryBased?: boolean | null;
  materialPlannedDeliveryDurn?: BigNumber | null;
  minimumOrderAmount?: BigNumber | null;
  paymentTerms?: string | null;
  planningCycle?: string | null;
  pricingDateControl?: string | null;
  prodStockAndSlsDataTransfPrfl?: string | null;
  productUnitGroup?: string | null;
  purOrdAutoGenerationIsAllowed?: boolean | null;
  purchaseOrderCurrency?: string | null;
  purchasingGroup?: string | null;
  purchasingIsBlockedForSupplier?: boolean | null;
  roundingProfile?: string | null;
  shippingCondition?: string | null;
  suplrDiscountInKindIsGranted?: boolean | null;
  suplrInvcRevalIsAllowed?: boolean | null;
  suplrIsRlvtForSettlmtMgmt?: boolean | null;
  suplrPurgOrgIsRlvtForPriceDetn?: boolean | null;
  supplierAbcClassificationCode?: string | null;
  supplierAccountNumber?: string | null;
  supplierIsReturnsSupplier?: boolean | null;
  supplierPhoneNumber?: string | null;
  supplierRespSalesPersonName?: string | null;
  supplierConfirmationControlKey?: string | null;
  isOrderAcknRqd?: boolean | null;
  authorizationGroup?: string | null;
  supplierAccountGroup?: string | null;
  toPartnerFunction: SupplierPartnerFuncType[];
  toPurchasingOrgText: SupplierPurchasingOrgTextType[];
}

export namespace SupplierPurchasingOrg {
  const _fieldBuilder: FieldBuilder<Constructable<SupplierPurchasingOrg>> = new FieldBuilder(SupplierPurchasingOrg);
  /**
   * Static representation of the [[supplier]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPPLIER = _fieldBuilder.buildEdmTypeField('Supplier', 'Edm.String', false);
  /**
   * Static representation of the [[purchasingOrganization]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASING_ORGANIZATION = _fieldBuilder.buildEdmTypeField('PurchasingOrganization', 'Edm.String', false);
  /**
   * Static representation of the [[automaticEvaluatedRcptSettlmt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AUTOMATIC_EVALUATED_RCPT_SETTLMT = _fieldBuilder.buildEdmTypeField('AutomaticEvaluatedRcptSettlmt', 'Edm.Boolean', true);
  /**
   * Static representation of the [[calculationSchemaGroupCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CALCULATION_SCHEMA_GROUP_CODE = _fieldBuilder.buildEdmTypeField('CalculationSchemaGroupCode', 'Edm.String', true);
  /**
   * Static representation of the [[deletionIndicator]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DELETION_INDICATOR = _fieldBuilder.buildEdmTypeField('DeletionIndicator', 'Edm.Boolean', true);
  /**
   * Static representation of the [[evaldReceiptSettlementIsActive]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EVALD_RECEIPT_SETTLEMENT_IS_ACTIVE = _fieldBuilder.buildEdmTypeField('EvaldReceiptSettlementIsActive', 'Edm.Boolean', true);
  /**
   * Static representation of the [[incotermsClassification]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INCOTERMS_CLASSIFICATION = _fieldBuilder.buildEdmTypeField('IncotermsClassification', 'Edm.String', true);
  /**
   * Static representation of the [[incotermsTransferLocation]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INCOTERMS_TRANSFER_LOCATION = _fieldBuilder.buildEdmTypeField('IncotermsTransferLocation', 'Edm.String', true);
  /**
   * Static representation of the [[incotermsVersion]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INCOTERMS_VERSION = _fieldBuilder.buildEdmTypeField('IncotermsVersion', 'Edm.String', true);
  /**
   * Static representation of the [[incotermsLocation1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INCOTERMS_LOCATION_1 = _fieldBuilder.buildEdmTypeField('IncotermsLocation1', 'Edm.String', true);
  /**
   * Static representation of the [[incotermsLocation2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INCOTERMS_LOCATION_2 = _fieldBuilder.buildEdmTypeField('IncotermsLocation2', 'Edm.String', true);
  /**
   * Static representation of the [[incotermsSupChnLoc1AddlUuid]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INCOTERMS_SUP_CHN_LOC_1_ADDL_UUID = _fieldBuilder.buildEdmTypeField('IncotermsSupChnLoc1AddlUUID', 'Edm.Guid', true);
  /**
   * Static representation of the [[incotermsSupChnLoc2AddlUuid]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INCOTERMS_SUP_CHN_LOC_2_ADDL_UUID = _fieldBuilder.buildEdmTypeField('IncotermsSupChnLoc2AddlUUID', 'Edm.Guid', true);
  /**
   * Static representation of the [[incotermsSupChnDvtgLocAddlUuid]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INCOTERMS_SUP_CHN_DVTG_LOC_ADDL_UUID = _fieldBuilder.buildEdmTypeField('IncotermsSupChnDvtgLocAddlUUID', 'Edm.Guid', true);
  /**
   * Static representation of the [[intrastatCrsBorderTrMode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INTRASTAT_CRS_BORDER_TR_MODE = _fieldBuilder.buildEdmTypeField('IntrastatCrsBorderTrMode', 'Edm.String', true);
  /**
   * Static representation of the [[invoiceIsGoodsReceiptBased]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INVOICE_IS_GOODS_RECEIPT_BASED = _fieldBuilder.buildEdmTypeField('InvoiceIsGoodsReceiptBased', 'Edm.Boolean', true);
  /**
   * Static representation of the [[invoiceIsMmServiceEntryBased]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INVOICE_IS_MM_SERVICE_ENTRY_BASED = _fieldBuilder.buildEdmTypeField('InvoiceIsMMServiceEntryBased', 'Edm.Boolean', true);
  /**
   * Static representation of the [[materialPlannedDeliveryDurn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MATERIAL_PLANNED_DELIVERY_DURN = _fieldBuilder.buildEdmTypeField('MaterialPlannedDeliveryDurn', 'Edm.Decimal', true);
  /**
   * Static representation of the [[minimumOrderAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MINIMUM_ORDER_AMOUNT = _fieldBuilder.buildEdmTypeField('MinimumOrderAmount', 'Edm.Decimal', true);
  /**
   * Static representation of the [[paymentTerms]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_TERMS = _fieldBuilder.buildEdmTypeField('PaymentTerms', 'Edm.String', true);
  /**
   * Static representation of the [[planningCycle]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PLANNING_CYCLE = _fieldBuilder.buildEdmTypeField('PlanningCycle', 'Edm.String', true);
  /**
   * Static representation of the [[pricingDateControl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRICING_DATE_CONTROL = _fieldBuilder.buildEdmTypeField('PricingDateControl', 'Edm.String', true);
  /**
   * Static representation of the [[prodStockAndSlsDataTransfPrfl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROD_STOCK_AND_SLS_DATA_TRANSF_PRFL = _fieldBuilder.buildEdmTypeField('ProdStockAndSlsDataTransfPrfl', 'Edm.String', true);
  /**
   * Static representation of the [[productUnitGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRODUCT_UNIT_GROUP = _fieldBuilder.buildEdmTypeField('ProductUnitGroup', 'Edm.String', true);
  /**
   * Static representation of the [[purOrdAutoGenerationIsAllowed]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PUR_ORD_AUTO_GENERATION_IS_ALLOWED = _fieldBuilder.buildEdmTypeField('PurOrdAutoGenerationIsAllowed', 'Edm.Boolean', true);
  /**
   * Static representation of the [[purchaseOrderCurrency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_ORDER_CURRENCY = _fieldBuilder.buildEdmTypeField('PurchaseOrderCurrency', 'Edm.String', true);
  /**
   * Static representation of the [[purchasingGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASING_GROUP = _fieldBuilder.buildEdmTypeField('PurchasingGroup', 'Edm.String', true);
  /**
   * Static representation of the [[purchasingIsBlockedForSupplier]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASING_IS_BLOCKED_FOR_SUPPLIER = _fieldBuilder.buildEdmTypeField('PurchasingIsBlockedForSupplier', 'Edm.Boolean', true);
  /**
   * Static representation of the [[roundingProfile]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ROUNDING_PROFILE = _fieldBuilder.buildEdmTypeField('RoundingProfile', 'Edm.String', true);
  /**
   * Static representation of the [[shippingCondition]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SHIPPING_CONDITION = _fieldBuilder.buildEdmTypeField('ShippingCondition', 'Edm.String', true);
  /**
   * Static representation of the [[suplrDiscountInKindIsGranted]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPLR_DISCOUNT_IN_KIND_IS_GRANTED = _fieldBuilder.buildEdmTypeField('SuplrDiscountInKindIsGranted', 'Edm.Boolean', true);
  /**
   * Static representation of the [[suplrInvcRevalIsAllowed]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPLR_INVC_REVAL_IS_ALLOWED = _fieldBuilder.buildEdmTypeField('SuplrInvcRevalIsAllowed', 'Edm.Boolean', true);
  /**
   * Static representation of the [[suplrIsRlvtForSettlmtMgmt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPLR_IS_RLVT_FOR_SETTLMT_MGMT = _fieldBuilder.buildEdmTypeField('SuplrIsRlvtForSettlmtMgmt', 'Edm.Boolean', true);
  /**
   * Static representation of the [[suplrPurgOrgIsRlvtForPriceDetn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPLR_PURG_ORG_IS_RLVT_FOR_PRICE_DETN = _fieldBuilder.buildEdmTypeField('SuplrPurgOrgIsRlvtForPriceDetn', 'Edm.Boolean', true);
  /**
   * Static representation of the [[supplierAbcClassificationCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPPLIER_ABC_CLASSIFICATION_CODE = _fieldBuilder.buildEdmTypeField('SupplierABCClassificationCode', 'Edm.String', true);
  /**
   * Static representation of the [[supplierAccountNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPPLIER_ACCOUNT_NUMBER = _fieldBuilder.buildEdmTypeField('SupplierAccountNumber', 'Edm.String', true);
  /**
   * Static representation of the [[supplierIsReturnsSupplier]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPPLIER_IS_RETURNS_SUPPLIER = _fieldBuilder.buildEdmTypeField('SupplierIsReturnsSupplier', 'Edm.Boolean', true);
  /**
   * Static representation of the [[supplierPhoneNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPPLIER_PHONE_NUMBER = _fieldBuilder.buildEdmTypeField('SupplierPhoneNumber', 'Edm.String', true);
  /**
   * Static representation of the [[supplierRespSalesPersonName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPPLIER_RESP_SALES_PERSON_NAME = _fieldBuilder.buildEdmTypeField('SupplierRespSalesPersonName', 'Edm.String', true);
  /**
   * Static representation of the [[supplierConfirmationControlKey]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPPLIER_CONFIRMATION_CONTROL_KEY = _fieldBuilder.buildEdmTypeField('SupplierConfirmationControlKey', 'Edm.String', true);
  /**
   * Static representation of the [[isOrderAcknRqd]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_ORDER_ACKN_RQD = _fieldBuilder.buildEdmTypeField('IsOrderAcknRqd', 'Edm.Boolean', true);
  /**
   * Static representation of the [[authorizationGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AUTHORIZATION_GROUP = _fieldBuilder.buildEdmTypeField('AuthorizationGroup', 'Edm.String', true);
  /**
   * Static representation of the [[supplierAccountGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPPLIER_ACCOUNT_GROUP = _fieldBuilder.buildEdmTypeField('SupplierAccountGroup', 'Edm.String', true);
  /**
   * Static representation of the one-to-many navigation property [[toPartnerFunction]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_PARTNER_FUNCTION: Link<SupplierPurchasingOrg, SupplierPartnerFunc> = new Link('to_PartnerFunction', SupplierPurchasingOrg, SupplierPartnerFunc);
  /**
   * Static representation of the one-to-many navigation property [[toPurchasingOrgText]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_PURCHASING_ORG_TEXT: Link<SupplierPurchasingOrg, SupplierPurchasingOrgText> = new Link('to_PurchasingOrgText', SupplierPurchasingOrg, SupplierPurchasingOrgText);
  /**
   * All fields of the SupplierPurchasingOrg entity.
   */
  export const _allFields: Array<EdmTypeField<SupplierPurchasingOrg, 'Edm.String', false, true> | EdmTypeField<SupplierPurchasingOrg, 'Edm.Boolean', true, true> | EdmTypeField<SupplierPurchasingOrg, 'Edm.String', true, true> | EdmTypeField<SupplierPurchasingOrg, 'Edm.Guid', true, true> | OrderableEdmTypeField<SupplierPurchasingOrg, 'Edm.Decimal', true, true> | Link<SupplierPurchasingOrg, SupplierPartnerFunc> | Link<SupplierPurchasingOrg, SupplierPurchasingOrgText>> = [
    SupplierPurchasingOrg.SUPPLIER,
    SupplierPurchasingOrg.PURCHASING_ORGANIZATION,
    SupplierPurchasingOrg.AUTOMATIC_EVALUATED_RCPT_SETTLMT,
    SupplierPurchasingOrg.CALCULATION_SCHEMA_GROUP_CODE,
    SupplierPurchasingOrg.DELETION_INDICATOR,
    SupplierPurchasingOrg.EVALD_RECEIPT_SETTLEMENT_IS_ACTIVE,
    SupplierPurchasingOrg.INCOTERMS_CLASSIFICATION,
    SupplierPurchasingOrg.INCOTERMS_TRANSFER_LOCATION,
    SupplierPurchasingOrg.INCOTERMS_VERSION,
    SupplierPurchasingOrg.INCOTERMS_LOCATION_1,
    SupplierPurchasingOrg.INCOTERMS_LOCATION_2,
    SupplierPurchasingOrg.INCOTERMS_SUP_CHN_LOC_1_ADDL_UUID,
    SupplierPurchasingOrg.INCOTERMS_SUP_CHN_LOC_2_ADDL_UUID,
    SupplierPurchasingOrg.INCOTERMS_SUP_CHN_DVTG_LOC_ADDL_UUID,
    SupplierPurchasingOrg.INTRASTAT_CRS_BORDER_TR_MODE,
    SupplierPurchasingOrg.INVOICE_IS_GOODS_RECEIPT_BASED,
    SupplierPurchasingOrg.INVOICE_IS_MM_SERVICE_ENTRY_BASED,
    SupplierPurchasingOrg.MATERIAL_PLANNED_DELIVERY_DURN,
    SupplierPurchasingOrg.MINIMUM_ORDER_AMOUNT,
    SupplierPurchasingOrg.PAYMENT_TERMS,
    SupplierPurchasingOrg.PLANNING_CYCLE,
    SupplierPurchasingOrg.PRICING_DATE_CONTROL,
    SupplierPurchasingOrg.PROD_STOCK_AND_SLS_DATA_TRANSF_PRFL,
    SupplierPurchasingOrg.PRODUCT_UNIT_GROUP,
    SupplierPurchasingOrg.PUR_ORD_AUTO_GENERATION_IS_ALLOWED,
    SupplierPurchasingOrg.PURCHASE_ORDER_CURRENCY,
    SupplierPurchasingOrg.PURCHASING_GROUP,
    SupplierPurchasingOrg.PURCHASING_IS_BLOCKED_FOR_SUPPLIER,
    SupplierPurchasingOrg.ROUNDING_PROFILE,
    SupplierPurchasingOrg.SHIPPING_CONDITION,
    SupplierPurchasingOrg.SUPLR_DISCOUNT_IN_KIND_IS_GRANTED,
    SupplierPurchasingOrg.SUPLR_INVC_REVAL_IS_ALLOWED,
    SupplierPurchasingOrg.SUPLR_IS_RLVT_FOR_SETTLMT_MGMT,
    SupplierPurchasingOrg.SUPLR_PURG_ORG_IS_RLVT_FOR_PRICE_DETN,
    SupplierPurchasingOrg.SUPPLIER_ABC_CLASSIFICATION_CODE,
    SupplierPurchasingOrg.SUPPLIER_ACCOUNT_NUMBER,
    SupplierPurchasingOrg.SUPPLIER_IS_RETURNS_SUPPLIER,
    SupplierPurchasingOrg.SUPPLIER_PHONE_NUMBER,
    SupplierPurchasingOrg.SUPPLIER_RESP_SALES_PERSON_NAME,
    SupplierPurchasingOrg.SUPPLIER_CONFIRMATION_CONTROL_KEY,
    SupplierPurchasingOrg.IS_ORDER_ACKN_RQD,
    SupplierPurchasingOrg.AUTHORIZATION_GROUP,
    SupplierPurchasingOrg.SUPPLIER_ACCOUNT_GROUP,
    SupplierPurchasingOrg.TO_PARTNER_FUNCTION,
    SupplierPurchasingOrg.TO_PURCHASING_ORG_TEXT
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<SupplierPurchasingOrg> = new AllFields('*', SupplierPurchasingOrg);
  /**
   * All key fields of the SupplierPurchasingOrg entity.
   */
  export const _keyFields: Array<Field<SupplierPurchasingOrg, boolean, boolean>> = [SupplierPurchasingOrg.SUPPLIER, SupplierPurchasingOrg.PURCHASING_ORGANIZATION];
  /**
   * Mapping of all key field names to the respective static field property SupplierPurchasingOrg.
   */
  export const _keys: { [keys: string]: Field<SupplierPurchasingOrg, boolean, boolean> } = SupplierPurchasingOrg._keyFields.reduce((acc: { [keys: string]: Field<SupplierPurchasingOrg, boolean, boolean> }, field: Field<SupplierPurchasingOrg, boolean, boolean>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
