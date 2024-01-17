import { SupplierPurchasingOrgRequestBuilder } from './SupplierPurchasingOrgRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field, Link, OrderableEdmTypeField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "A_SupplierPurchasingOrg" of service "API_BUSINESS_PARTNER".
 */
export declare class SupplierPurchasingOrg extends EntityV2 implements SupplierPurchasingOrgType {
    /**
     * Technical entity name for SupplierPurchasingOrg.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Supplier's Account Number.
     * Maximum length: 10.
     */
    supplier: string;
    /**
     * Purchasing Organization.
     * Maximum length: 4.
     */
    purchasingOrganization: string;
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
    toPartnerFunction: SupplierPartnerFunc[];
    /**
     * One-to-many navigation property to the [[SupplierPurchasingOrgText]] entity.
     */
    toPurchasingOrgText: SupplierPurchasingOrgText[];
    /**
     * Returns an entity builder to construct instances of `SupplierPurchasingOrg`.
     * @returns A builder that constructs instances of entity type `SupplierPurchasingOrg`.
     */
    static builder(): EntityBuilderType<SupplierPurchasingOrg, SupplierPurchasingOrgType>;
    /**
     * Returns a request builder to construct requests for operations on the `SupplierPurchasingOrg` entity type.
     * @returns A `SupplierPurchasingOrg` request builder.
     */
    static requestBuilder(): SupplierPurchasingOrgRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SupplierPurchasingOrg`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SupplierPurchasingOrg`.
     */
    static customField(fieldName: string): CustomFieldV2<SupplierPurchasingOrg>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
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
export declare namespace SupplierPurchasingOrg {
    /**
     * Static representation of the [[supplier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUPPLIER: EdmTypeField<SupplierPurchasingOrg, "Edm.String", false, true>;
    /**
     * Static representation of the [[purchasingOrganization]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASING_ORGANIZATION: EdmTypeField<SupplierPurchasingOrg, "Edm.String", false, true>;
    /**
     * Static representation of the [[automaticEvaluatedRcptSettlmt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AUTOMATIC_EVALUATED_RCPT_SETTLMT: EdmTypeField<SupplierPurchasingOrg, "Edm.Boolean", true, true>;
    /**
     * Static representation of the [[calculationSchemaGroupCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CALCULATION_SCHEMA_GROUP_CODE: EdmTypeField<SupplierPurchasingOrg, "Edm.String", true, true>;
    /**
     * Static representation of the [[deletionIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DELETION_INDICATOR: EdmTypeField<SupplierPurchasingOrg, "Edm.Boolean", true, true>;
    /**
     * Static representation of the [[evaldReceiptSettlementIsActive]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EVALD_RECEIPT_SETTLEMENT_IS_ACTIVE: EdmTypeField<SupplierPurchasingOrg, "Edm.Boolean", true, true>;
    /**
     * Static representation of the [[incotermsClassification]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INCOTERMS_CLASSIFICATION: EdmTypeField<SupplierPurchasingOrg, "Edm.String", true, true>;
    /**
     * Static representation of the [[incotermsTransferLocation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INCOTERMS_TRANSFER_LOCATION: EdmTypeField<SupplierPurchasingOrg, "Edm.String", true, true>;
    /**
     * Static representation of the [[incotermsVersion]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INCOTERMS_VERSION: EdmTypeField<SupplierPurchasingOrg, "Edm.String", true, true>;
    /**
     * Static representation of the [[incotermsLocation1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INCOTERMS_LOCATION_1: EdmTypeField<SupplierPurchasingOrg, "Edm.String", true, true>;
    /**
     * Static representation of the [[incotermsLocation2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INCOTERMS_LOCATION_2: EdmTypeField<SupplierPurchasingOrg, "Edm.String", true, true>;
    /**
     * Static representation of the [[incotermsSupChnLoc1AddlUuid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INCOTERMS_SUP_CHN_LOC_1_ADDL_UUID: EdmTypeField<SupplierPurchasingOrg, "Edm.Guid", true, true>;
    /**
     * Static representation of the [[incotermsSupChnLoc2AddlUuid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INCOTERMS_SUP_CHN_LOC_2_ADDL_UUID: EdmTypeField<SupplierPurchasingOrg, "Edm.Guid", true, true>;
    /**
     * Static representation of the [[incotermsSupChnDvtgLocAddlUuid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INCOTERMS_SUP_CHN_DVTG_LOC_ADDL_UUID: EdmTypeField<SupplierPurchasingOrg, "Edm.Guid", true, true>;
    /**
     * Static representation of the [[intrastatCrsBorderTrMode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INTRASTAT_CRS_BORDER_TR_MODE: EdmTypeField<SupplierPurchasingOrg, "Edm.String", true, true>;
    /**
     * Static representation of the [[invoiceIsGoodsReceiptBased]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INVOICE_IS_GOODS_RECEIPT_BASED: EdmTypeField<SupplierPurchasingOrg, "Edm.Boolean", true, true>;
    /**
     * Static representation of the [[invoiceIsMmServiceEntryBased]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INVOICE_IS_MM_SERVICE_ENTRY_BASED: EdmTypeField<SupplierPurchasingOrg, "Edm.Boolean", true, true>;
    /**
     * Static representation of the [[materialPlannedDeliveryDurn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MATERIAL_PLANNED_DELIVERY_DURN: OrderableEdmTypeField<SupplierPurchasingOrg, "Edm.Decimal", true, true>;
    /**
     * Static representation of the [[minimumOrderAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MINIMUM_ORDER_AMOUNT: OrderableEdmTypeField<SupplierPurchasingOrg, "Edm.Decimal", true, true>;
    /**
     * Static representation of the [[paymentTerms]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENT_TERMS: EdmTypeField<SupplierPurchasingOrg, "Edm.String", true, true>;
    /**
     * Static representation of the [[planningCycle]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PLANNING_CYCLE: EdmTypeField<SupplierPurchasingOrg, "Edm.String", true, true>;
    /**
     * Static representation of the [[pricingDateControl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRICING_DATE_CONTROL: EdmTypeField<SupplierPurchasingOrg, "Edm.String", true, true>;
    /**
     * Static representation of the [[prodStockAndSlsDataTransfPrfl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROD_STOCK_AND_SLS_DATA_TRANSF_PRFL: EdmTypeField<SupplierPurchasingOrg, "Edm.String", true, true>;
    /**
     * Static representation of the [[productUnitGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRODUCT_UNIT_GROUP: EdmTypeField<SupplierPurchasingOrg, "Edm.String", true, true>;
    /**
     * Static representation of the [[purOrdAutoGenerationIsAllowed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PUR_ORD_AUTO_GENERATION_IS_ALLOWED: EdmTypeField<SupplierPurchasingOrg, "Edm.Boolean", true, true>;
    /**
     * Static representation of the [[purchaseOrderCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_ORDER_CURRENCY: EdmTypeField<SupplierPurchasingOrg, "Edm.String", true, true>;
    /**
     * Static representation of the [[purchasingGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASING_GROUP: EdmTypeField<SupplierPurchasingOrg, "Edm.String", true, true>;
    /**
     * Static representation of the [[purchasingIsBlockedForSupplier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASING_IS_BLOCKED_FOR_SUPPLIER: EdmTypeField<SupplierPurchasingOrg, "Edm.Boolean", true, true>;
    /**
     * Static representation of the [[roundingProfile]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ROUNDING_PROFILE: EdmTypeField<SupplierPurchasingOrg, "Edm.String", true, true>;
    /**
     * Static representation of the [[shippingCondition]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SHIPPING_CONDITION: EdmTypeField<SupplierPurchasingOrg, "Edm.String", true, true>;
    /**
     * Static representation of the [[suplrDiscountInKindIsGranted]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUPLR_DISCOUNT_IN_KIND_IS_GRANTED: EdmTypeField<SupplierPurchasingOrg, "Edm.Boolean", true, true>;
    /**
     * Static representation of the [[suplrInvcRevalIsAllowed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUPLR_INVC_REVAL_IS_ALLOWED: EdmTypeField<SupplierPurchasingOrg, "Edm.Boolean", true, true>;
    /**
     * Static representation of the [[suplrIsRlvtForSettlmtMgmt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUPLR_IS_RLVT_FOR_SETTLMT_MGMT: EdmTypeField<SupplierPurchasingOrg, "Edm.Boolean", true, true>;
    /**
     * Static representation of the [[suplrPurgOrgIsRlvtForPriceDetn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUPLR_PURG_ORG_IS_RLVT_FOR_PRICE_DETN: EdmTypeField<SupplierPurchasingOrg, "Edm.Boolean", true, true>;
    /**
     * Static representation of the [[supplierAbcClassificationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUPPLIER_ABC_CLASSIFICATION_CODE: EdmTypeField<SupplierPurchasingOrg, "Edm.String", true, true>;
    /**
     * Static representation of the [[supplierAccountNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUPPLIER_ACCOUNT_NUMBER: EdmTypeField<SupplierPurchasingOrg, "Edm.String", true, true>;
    /**
     * Static representation of the [[supplierIsReturnsSupplier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUPPLIER_IS_RETURNS_SUPPLIER: EdmTypeField<SupplierPurchasingOrg, "Edm.Boolean", true, true>;
    /**
     * Static representation of the [[supplierPhoneNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUPPLIER_PHONE_NUMBER: EdmTypeField<SupplierPurchasingOrg, "Edm.String", true, true>;
    /**
     * Static representation of the [[supplierRespSalesPersonName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUPPLIER_RESP_SALES_PERSON_NAME: EdmTypeField<SupplierPurchasingOrg, "Edm.String", true, true>;
    /**
     * Static representation of the [[supplierConfirmationControlKey]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUPPLIER_CONFIRMATION_CONTROL_KEY: EdmTypeField<SupplierPurchasingOrg, "Edm.String", true, true>;
    /**
     * Static representation of the [[isOrderAcknRqd]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_ORDER_ACKN_RQD: EdmTypeField<SupplierPurchasingOrg, "Edm.Boolean", true, true>;
    /**
     * Static representation of the [[authorizationGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AUTHORIZATION_GROUP: EdmTypeField<SupplierPurchasingOrg, "Edm.String", true, true>;
    /**
     * Static representation of the [[supplierAccountGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUPPLIER_ACCOUNT_GROUP: EdmTypeField<SupplierPurchasingOrg, "Edm.String", true, true>;
    /**
     * Static representation of the one-to-many navigation property [[toPartnerFunction]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_PARTNER_FUNCTION: Link<SupplierPurchasingOrg, SupplierPartnerFunc>;
    /**
     * Static representation of the one-to-many navigation property [[toPurchasingOrgText]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_PURCHASING_ORG_TEXT: Link<SupplierPurchasingOrg, SupplierPurchasingOrgText>;
    /**
     * All fields of the SupplierPurchasingOrg entity.
     */
    const _allFields: Array<EdmTypeField<SupplierPurchasingOrg, 'Edm.String', false, true> | EdmTypeField<SupplierPurchasingOrg, 'Edm.Boolean', true, true> | EdmTypeField<SupplierPurchasingOrg, 'Edm.String', true, true> | EdmTypeField<SupplierPurchasingOrg, 'Edm.Guid', true, true> | OrderableEdmTypeField<SupplierPurchasingOrg, 'Edm.Decimal', true, true> | Link<SupplierPurchasingOrg, SupplierPartnerFunc> | Link<SupplierPurchasingOrg, SupplierPurchasingOrgText>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<SupplierPurchasingOrg>;
    /**
     * All key fields of the SupplierPurchasingOrg entity.
     */
    const _keyFields: Array<Field<SupplierPurchasingOrg, boolean, boolean>>;
    /**
     * Mapping of all key field names to the respective static field property SupplierPurchasingOrg.
     */
    const _keys: {
        [keys: string]: Field<SupplierPurchasingOrg, boolean, boolean>;
    };
}
//# sourceMappingURL=SupplierPurchasingOrg.d.ts.map