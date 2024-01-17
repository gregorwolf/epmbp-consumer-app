import { CustomerSalesAreaRequestBuilder } from './CustomerSalesAreaRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field, Link, OrderableEdmTypeField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "A_CustomerSalesArea" of service "API_BUSINESS_PARTNER".
 */
export declare class CustomerSalesArea extends EntityV2 implements CustomerSalesAreaType {
    /**
     * Technical entity name for CustomerSalesArea.
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
     * Sales Organization.
     * Maximum length: 4.
     */
    salesOrganization: string;
    /**
     * Distribution Channel.
     * Maximum length: 2.
     */
    distributionChannel: string;
    /**
     * Division.
     * Maximum length: 2.
     */
    division: string;
    /**
     * Shipper's (Our) Account Number at the Customer or Vendor.
     * Maximum length: 12.
     * @nullable
     */
    accountByCustomer?: string;
    /**
     * Authorization Group.
     * Maximum length: 4.
     * @nullable
     */
    authorizationGroup?: string;
    /**
     * Billing block for customer (sales and distribution).
     * Maximum length: 2.
     * @nullable
     */
    billingIsBlockedForCustomer?: string;
    /**
     * Complete Delivery Defined for Each Sales Order.
     * @nullable
     */
    completeDeliveryIsDefined?: boolean;
    /**
     * Credit Control Area.
     * Maximum length: 4.
     * @nullable
     */
    creditControlArea?: string;
    /**
     * Currency.
     * Maximum length: 5.
     * @nullable
     */
    currency?: string;
    /**
     * Indicator: Relevant for Settlement Management.
     * @nullable
     */
    custIsRlvtForSettlmtMgmt?: boolean;
    /**
     * Customer classification (ABC analysis).
     * Maximum length: 2.
     * @nullable
     */
    customerAbcClassification?: string;
    /**
     * Account Assignment Group for Customer.
     * Maximum length: 2.
     * @nullable
     */
    customerAccountAssignmentGroup?: string;
    /**
     * Customer Group.
     * Maximum length: 2.
     * @nullable
     */
    customerGroup?: string;
    /**
     * Indicator: Customer Is Rebate-Relevant.
     * @nullable
     */
    customerIsRebateRelevant?: boolean;
    /**
     * Key for Terms of Payment.
     * Maximum length: 4.
     * @nullable
     */
    customerPaymentTerms?: string;
    /**
     * Customer Price Group.
     * Maximum length: 2.
     * @nullable
     */
    customerPriceGroup?: string;
    /**
     * Customer Classification for Pricing Procedure Determination.
     * Maximum length: 2.
     * @nullable
     */
    customerPricingProcedure?: string;
    /**
     * Customer procedure for product proposal.
     * Maximum length: 2.
     * @nullable
     */
    custProdProposalProcedure?: string;
    /**
     * Customer delivery block (sales area).
     * Maximum length: 2.
     * @nullable
     */
    deliveryIsBlockedForCustomer?: string;
    /**
     * Delivery Priority.
     * Maximum length: 2.
     * @nullable
     */
    deliveryPriority?: string;
    /**
     * Incoterms (Part 1).
     * Maximum length: 3.
     * @nullable
     */
    incotermsClassification?: string;
    /**
     * Incoterms Location 2.
     * Maximum length: 70.
     * @nullable
     */
    incotermsLocation2?: string;
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
     * Deletion flag for customer (sales level).
     * @nullable
     */
    deletionIndicator?: boolean;
    /**
     * Incoterms (Part 2).
     * Maximum length: 28.
     * @nullable
     */
    incotermsTransferLocation?: string;
    /**
     * Relevant for price determination ID.
     * @nullable
     */
    inspSbstHasNoTimeOrQuantity?: boolean;
    /**
     * Invoice Dates (Calendar Identification).
     * Maximum length: 2.
     * @nullable
     */
    invoiceDate?: string;
    /**
     * Order Probability of the Item.
     * Maximum length: 3.
     * @nullable
     */
    itemOrderProbabilityInPercent?: string;
    /**
     * Manual Invoice Maintenance.
     * @nullable
     */
    manualInvoiceMaintIsRelevant?: boolean;
    /**
     * Maximum Number of Partial Deliveries Allowed Per Item.
     * @nullable
     */
    maxNmbrOfPartialDelivery?: BigNumber;
    /**
     * Order Combination Indicator.
     * @nullable
     */
    orderCombinationIsAllowed?: boolean;
    /**
     * Customer order block (sales area).
     * Maximum length: 2.
     * @nullable
     */
    orderIsBlockedForCustomer?: string;
    /**
     * Overdelivery Tolerance.
     * @nullable
     */
    overdelivTolrtdLmtRatioInPct?: BigNumber;
    /**
     * Partial Delivery at Item Level.
     * Maximum length: 1.
     * @nullable
     */
    partialDeliveryIsAllowed?: string;
    /**
     * Price List Type.
     * Maximum length: 2.
     * @nullable
     */
    priceListType?: string;
    /**
     * Unit of Measure Group.
     * Maximum length: 4.
     * @nullable
     */
    productUnitGroup?: string;
    /**
     * Timeframe for Confirmation of POD.
     * @nullable
     */
    proofOfDeliveryTimeValue?: BigNumber;
    /**
     * Sales Group.
     * Maximum length: 3.
     * @nullable
     */
    salesGroup?: string;
    /**
     * Item proposal.
     * Maximum length: 10.
     * @nullable
     */
    salesItemProposal?: string;
    /**
     * Sales Office.
     * Maximum length: 4.
     * @nullable
     */
    salesOffice?: string;
    /**
     * Shipping Conditions.
     * Maximum length: 2.
     * @nullable
     */
    shippingCondition?: string;
    /**
     * Relevant for POD processing.
     * @nullable
     */
    slsDocIsRlvtForProofOfDeliv?: boolean;
    /**
     * Unlimited Overdelivery Allowed.
     * @nullable
     */
    slsUnlmtdOvrdelivIsAllwd?: boolean;
    /**
     * Delivering Plant (Own or External).
     * Maximum length: 4.
     * @nullable
     */
    supplyingPlant?: string;
    /**
     * Sales District.
     * Maximum length: 6.
     * @nullable
     */
    salesDistrict?: string;
    /**
     * Underdelivery Tolerance.
     * @nullable
     */
    underdelivTolrtdLmtRatioInPct?: BigNumber;
    /**
     * Invoice List Schedule (calendar identification).
     * Maximum length: 2.
     * @nullable
     */
    invoiceListSchedule?: string;
    /**
     * Exchange Rate Type.
     * Maximum length: 4.
     * @nullable
     */
    exchangeRateType?: string;
    /**
     * Customer Group 1.
     * Maximum length: 3.
     * @nullable
     */
    additionalCustomerGroup1?: string;
    /**
     * Customer Group 2.
     * Maximum length: 3.
     * @nullable
     */
    additionalCustomerGroup2?: string;
    /**
     * Customer Group 3.
     * Maximum length: 3.
     * @nullable
     */
    additionalCustomerGroup3?: string;
    /**
     * Customer Group 4.
     * Maximum length: 3.
     * @nullable
     */
    additionalCustomerGroup4?: string;
    /**
     * Customer Group 5.
     * Maximum length: 3.
     * @nullable
     */
    additionalCustomerGroup5?: string;
    /**
     * Customer payment guarantee procedure.
     * Maximum length: 4.
     * @nullable
     */
    paymentGuaranteeProcedure?: string;
    /**
     * Customer Account Group.
     * Maximum length: 4.
     * @nullable
     */
    customerAccountGroup?: string;
    /**
     * One-to-many navigation property to the [[CustSalesPartnerFunc]] entity.
     */
    toPartnerFunction: CustSalesPartnerFunc[];
    /**
     * One-to-many navigation property to the [[CustomerSalesAreaTax]] entity.
     */
    toSalesAreaTax: CustomerSalesAreaTax[];
    /**
     * One-to-many navigation property to the [[CustomerSalesAreaText]] entity.
     */
    toSalesAreaText: CustomerSalesAreaText[];
    /**
     * One-to-many navigation property to the [[CustSlsAreaAddrDepdntInfo]] entity.
     */
    toSlsAreaAddrDepdntInfo: CustSlsAreaAddrDepdntInfo[];
    /**
     * Returns an entity builder to construct instances of `CustomerSalesArea`.
     * @returns A builder that constructs instances of entity type `CustomerSalesArea`.
     */
    static builder(): EntityBuilderType<CustomerSalesArea, CustomerSalesAreaType>;
    /**
     * Returns a request builder to construct requests for operations on the `CustomerSalesArea` entity type.
     * @returns A `CustomerSalesArea` request builder.
     */
    static requestBuilder(): CustomerSalesAreaRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CustomerSalesArea`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CustomerSalesArea`.
     */
    static customField(fieldName: string): CustomFieldV2<CustomerSalesArea>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { CustSalesPartnerFunc, CustSalesPartnerFuncType } from './CustSalesPartnerFunc';
import { CustomerSalesAreaTax, CustomerSalesAreaTaxType } from './CustomerSalesAreaTax';
import { CustomerSalesAreaText, CustomerSalesAreaTextType } from './CustomerSalesAreaText';
import { CustSlsAreaAddrDepdntInfo, CustSlsAreaAddrDepdntInfoType } from './CustSlsAreaAddrDepdntInfo';
export interface CustomerSalesAreaType {
    customer: string;
    salesOrganization: string;
    distributionChannel: string;
    division: string;
    accountByCustomer?: string | null;
    authorizationGroup?: string | null;
    billingIsBlockedForCustomer?: string | null;
    completeDeliveryIsDefined?: boolean | null;
    creditControlArea?: string | null;
    currency?: string | null;
    custIsRlvtForSettlmtMgmt?: boolean | null;
    customerAbcClassification?: string | null;
    customerAccountAssignmentGroup?: string | null;
    customerGroup?: string | null;
    customerIsRebateRelevant?: boolean | null;
    customerPaymentTerms?: string | null;
    customerPriceGroup?: string | null;
    customerPricingProcedure?: string | null;
    custProdProposalProcedure?: string | null;
    deliveryIsBlockedForCustomer?: string | null;
    deliveryPriority?: string | null;
    incotermsClassification?: string | null;
    incotermsLocation2?: string | null;
    incotermsVersion?: string | null;
    incotermsLocation1?: string | null;
    incotermsSupChnLoc1AddlUuid?: string | null;
    incotermsSupChnLoc2AddlUuid?: string | null;
    incotermsSupChnDvtgLocAddlUuid?: string | null;
    deletionIndicator?: boolean | null;
    incotermsTransferLocation?: string | null;
    inspSbstHasNoTimeOrQuantity?: boolean | null;
    invoiceDate?: string | null;
    itemOrderProbabilityInPercent?: string | null;
    manualInvoiceMaintIsRelevant?: boolean | null;
    maxNmbrOfPartialDelivery?: BigNumber | null;
    orderCombinationIsAllowed?: boolean | null;
    orderIsBlockedForCustomer?: string | null;
    overdelivTolrtdLmtRatioInPct?: BigNumber | null;
    partialDeliveryIsAllowed?: string | null;
    priceListType?: string | null;
    productUnitGroup?: string | null;
    proofOfDeliveryTimeValue?: BigNumber | null;
    salesGroup?: string | null;
    salesItemProposal?: string | null;
    salesOffice?: string | null;
    shippingCondition?: string | null;
    slsDocIsRlvtForProofOfDeliv?: boolean | null;
    slsUnlmtdOvrdelivIsAllwd?: boolean | null;
    supplyingPlant?: string | null;
    salesDistrict?: string | null;
    underdelivTolrtdLmtRatioInPct?: BigNumber | null;
    invoiceListSchedule?: string | null;
    exchangeRateType?: string | null;
    additionalCustomerGroup1?: string | null;
    additionalCustomerGroup2?: string | null;
    additionalCustomerGroup3?: string | null;
    additionalCustomerGroup4?: string | null;
    additionalCustomerGroup5?: string | null;
    paymentGuaranteeProcedure?: string | null;
    customerAccountGroup?: string | null;
    toPartnerFunction: CustSalesPartnerFuncType[];
    toSalesAreaTax: CustomerSalesAreaTaxType[];
    toSalesAreaText: CustomerSalesAreaTextType[];
    toSlsAreaAddrDepdntInfo: CustSlsAreaAddrDepdntInfoType[];
}
export declare namespace CustomerSalesArea {
    /**
     * Static representation of the [[customer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER: EdmTypeField<CustomerSalesArea, "Edm.String", false, true>;
    /**
     * Static representation of the [[salesOrganization]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_ORGANIZATION: EdmTypeField<CustomerSalesArea, "Edm.String", false, true>;
    /**
     * Static representation of the [[distributionChannel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DISTRIBUTION_CHANNEL: EdmTypeField<CustomerSalesArea, "Edm.String", false, true>;
    /**
     * Static representation of the [[division]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DIVISION: EdmTypeField<CustomerSalesArea, "Edm.String", false, true>;
    /**
     * Static representation of the [[accountByCustomer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACCOUNT_BY_CUSTOMER: EdmTypeField<CustomerSalesArea, "Edm.String", true, true>;
    /**
     * Static representation of the [[authorizationGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AUTHORIZATION_GROUP: EdmTypeField<CustomerSalesArea, "Edm.String", true, true>;
    /**
     * Static representation of the [[billingIsBlockedForCustomer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BILLING_IS_BLOCKED_FOR_CUSTOMER: EdmTypeField<CustomerSalesArea, "Edm.String", true, true>;
    /**
     * Static representation of the [[completeDeliveryIsDefined]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMPLETE_DELIVERY_IS_DEFINED: EdmTypeField<CustomerSalesArea, "Edm.Boolean", true, true>;
    /**
     * Static representation of the [[creditControlArea]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREDIT_CONTROL_AREA: EdmTypeField<CustomerSalesArea, "Edm.String", true, true>;
    /**
     * Static representation of the [[currency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CURRENCY: EdmTypeField<CustomerSalesArea, "Edm.String", true, true>;
    /**
     * Static representation of the [[custIsRlvtForSettlmtMgmt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUST_IS_RLVT_FOR_SETTLMT_MGMT: EdmTypeField<CustomerSalesArea, "Edm.Boolean", true, true>;
    /**
     * Static representation of the [[customerAbcClassification]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER_ABC_CLASSIFICATION: EdmTypeField<CustomerSalesArea, "Edm.String", true, true>;
    /**
     * Static representation of the [[customerAccountAssignmentGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER_ACCOUNT_ASSIGNMENT_GROUP: EdmTypeField<CustomerSalesArea, "Edm.String", true, true>;
    /**
     * Static representation of the [[customerGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER_GROUP: EdmTypeField<CustomerSalesArea, "Edm.String", true, true>;
    /**
     * Static representation of the [[customerIsRebateRelevant]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER_IS_REBATE_RELEVANT: EdmTypeField<CustomerSalesArea, "Edm.Boolean", true, true>;
    /**
     * Static representation of the [[customerPaymentTerms]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER_PAYMENT_TERMS: EdmTypeField<CustomerSalesArea, "Edm.String", true, true>;
    /**
     * Static representation of the [[customerPriceGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER_PRICE_GROUP: EdmTypeField<CustomerSalesArea, "Edm.String", true, true>;
    /**
     * Static representation of the [[customerPricingProcedure]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER_PRICING_PROCEDURE: EdmTypeField<CustomerSalesArea, "Edm.String", true, true>;
    /**
     * Static representation of the [[custProdProposalProcedure]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUST_PROD_PROPOSAL_PROCEDURE: EdmTypeField<CustomerSalesArea, "Edm.String", true, true>;
    /**
     * Static representation of the [[deliveryIsBlockedForCustomer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DELIVERY_IS_BLOCKED_FOR_CUSTOMER: EdmTypeField<CustomerSalesArea, "Edm.String", true, true>;
    /**
     * Static representation of the [[deliveryPriority]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DELIVERY_PRIORITY: EdmTypeField<CustomerSalesArea, "Edm.String", true, true>;
    /**
     * Static representation of the [[incotermsClassification]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INCOTERMS_CLASSIFICATION: EdmTypeField<CustomerSalesArea, "Edm.String", true, true>;
    /**
     * Static representation of the [[incotermsLocation2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INCOTERMS_LOCATION_2: EdmTypeField<CustomerSalesArea, "Edm.String", true, true>;
    /**
     * Static representation of the [[incotermsVersion]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INCOTERMS_VERSION: EdmTypeField<CustomerSalesArea, "Edm.String", true, true>;
    /**
     * Static representation of the [[incotermsLocation1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INCOTERMS_LOCATION_1: EdmTypeField<CustomerSalesArea, "Edm.String", true, true>;
    /**
     * Static representation of the [[incotermsSupChnLoc1AddlUuid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INCOTERMS_SUP_CHN_LOC_1_ADDL_UUID: EdmTypeField<CustomerSalesArea, "Edm.Guid", true, true>;
    /**
     * Static representation of the [[incotermsSupChnLoc2AddlUuid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INCOTERMS_SUP_CHN_LOC_2_ADDL_UUID: EdmTypeField<CustomerSalesArea, "Edm.Guid", true, true>;
    /**
     * Static representation of the [[incotermsSupChnDvtgLocAddlUuid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INCOTERMS_SUP_CHN_DVTG_LOC_ADDL_UUID: EdmTypeField<CustomerSalesArea, "Edm.Guid", true, true>;
    /**
     * Static representation of the [[deletionIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DELETION_INDICATOR: EdmTypeField<CustomerSalesArea, "Edm.Boolean", true, true>;
    /**
     * Static representation of the [[incotermsTransferLocation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INCOTERMS_TRANSFER_LOCATION: EdmTypeField<CustomerSalesArea, "Edm.String", true, true>;
    /**
     * Static representation of the [[inspSbstHasNoTimeOrQuantity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INSP_SBST_HAS_NO_TIME_OR_QUANTITY: EdmTypeField<CustomerSalesArea, "Edm.Boolean", true, true>;
    /**
     * Static representation of the [[invoiceDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INVOICE_DATE: EdmTypeField<CustomerSalesArea, "Edm.String", true, true>;
    /**
     * Static representation of the [[itemOrderProbabilityInPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM_ORDER_PROBABILITY_IN_PERCENT: EdmTypeField<CustomerSalesArea, "Edm.String", true, true>;
    /**
     * Static representation of the [[manualInvoiceMaintIsRelevant]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MANUAL_INVOICE_MAINT_IS_RELEVANT: EdmTypeField<CustomerSalesArea, "Edm.Boolean", true, true>;
    /**
     * Static representation of the [[maxNmbrOfPartialDelivery]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MAX_NMBR_OF_PARTIAL_DELIVERY: OrderableEdmTypeField<CustomerSalesArea, "Edm.Decimal", true, true>;
    /**
     * Static representation of the [[orderCombinationIsAllowed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ORDER_COMBINATION_IS_ALLOWED: EdmTypeField<CustomerSalesArea, "Edm.Boolean", true, true>;
    /**
     * Static representation of the [[orderIsBlockedForCustomer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ORDER_IS_BLOCKED_FOR_CUSTOMER: EdmTypeField<CustomerSalesArea, "Edm.String", true, true>;
    /**
     * Static representation of the [[overdelivTolrtdLmtRatioInPct]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OVERDELIV_TOLRTD_LMT_RATIO_IN_PCT: OrderableEdmTypeField<CustomerSalesArea, "Edm.Decimal", true, true>;
    /**
     * Static representation of the [[partialDeliveryIsAllowed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PARTIAL_DELIVERY_IS_ALLOWED: EdmTypeField<CustomerSalesArea, "Edm.String", true, true>;
    /**
     * Static representation of the [[priceListType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRICE_LIST_TYPE: EdmTypeField<CustomerSalesArea, "Edm.String", true, true>;
    /**
     * Static representation of the [[productUnitGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRODUCT_UNIT_GROUP: EdmTypeField<CustomerSalesArea, "Edm.String", true, true>;
    /**
     * Static representation of the [[proofOfDeliveryTimeValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROOF_OF_DELIVERY_TIME_VALUE: OrderableEdmTypeField<CustomerSalesArea, "Edm.Decimal", true, true>;
    /**
     * Static representation of the [[salesGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_GROUP: EdmTypeField<CustomerSalesArea, "Edm.String", true, true>;
    /**
     * Static representation of the [[salesItemProposal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_ITEM_PROPOSAL: EdmTypeField<CustomerSalesArea, "Edm.String", true, true>;
    /**
     * Static representation of the [[salesOffice]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_OFFICE: EdmTypeField<CustomerSalesArea, "Edm.String", true, true>;
    /**
     * Static representation of the [[shippingCondition]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SHIPPING_CONDITION: EdmTypeField<CustomerSalesArea, "Edm.String", true, true>;
    /**
     * Static representation of the [[slsDocIsRlvtForProofOfDeliv]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SLS_DOC_IS_RLVT_FOR_PROOF_OF_DELIV: EdmTypeField<CustomerSalesArea, "Edm.Boolean", true, true>;
    /**
     * Static representation of the [[slsUnlmtdOvrdelivIsAllwd]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SLS_UNLMTD_OVRDELIV_IS_ALLWD: EdmTypeField<CustomerSalesArea, "Edm.Boolean", true, true>;
    /**
     * Static representation of the [[supplyingPlant]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUPPLYING_PLANT: EdmTypeField<CustomerSalesArea, "Edm.String", true, true>;
    /**
     * Static representation of the [[salesDistrict]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_DISTRICT: EdmTypeField<CustomerSalesArea, "Edm.String", true, true>;
    /**
     * Static representation of the [[underdelivTolrtdLmtRatioInPct]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const UNDERDELIV_TOLRTD_LMT_RATIO_IN_PCT: OrderableEdmTypeField<CustomerSalesArea, "Edm.Decimal", true, true>;
    /**
     * Static representation of the [[invoiceListSchedule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INVOICE_LIST_SCHEDULE: EdmTypeField<CustomerSalesArea, "Edm.String", true, true>;
    /**
     * Static representation of the [[exchangeRateType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXCHANGE_RATE_TYPE: EdmTypeField<CustomerSalesArea, "Edm.String", true, true>;
    /**
     * Static representation of the [[additionalCustomerGroup1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDITIONAL_CUSTOMER_GROUP_1: EdmTypeField<CustomerSalesArea, "Edm.String", true, true>;
    /**
     * Static representation of the [[additionalCustomerGroup2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDITIONAL_CUSTOMER_GROUP_2: EdmTypeField<CustomerSalesArea, "Edm.String", true, true>;
    /**
     * Static representation of the [[additionalCustomerGroup3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDITIONAL_CUSTOMER_GROUP_3: EdmTypeField<CustomerSalesArea, "Edm.String", true, true>;
    /**
     * Static representation of the [[additionalCustomerGroup4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDITIONAL_CUSTOMER_GROUP_4: EdmTypeField<CustomerSalesArea, "Edm.String", true, true>;
    /**
     * Static representation of the [[additionalCustomerGroup5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDITIONAL_CUSTOMER_GROUP_5: EdmTypeField<CustomerSalesArea, "Edm.String", true, true>;
    /**
     * Static representation of the [[paymentGuaranteeProcedure]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENT_GUARANTEE_PROCEDURE: EdmTypeField<CustomerSalesArea, "Edm.String", true, true>;
    /**
     * Static representation of the [[customerAccountGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER_ACCOUNT_GROUP: EdmTypeField<CustomerSalesArea, "Edm.String", true, true>;
    /**
     * Static representation of the one-to-many navigation property [[toPartnerFunction]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_PARTNER_FUNCTION: Link<CustomerSalesArea, CustSalesPartnerFunc>;
    /**
     * Static representation of the one-to-many navigation property [[toSalesAreaTax]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_SALES_AREA_TAX: Link<CustomerSalesArea, CustomerSalesAreaTax>;
    /**
     * Static representation of the one-to-many navigation property [[toSalesAreaText]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_SALES_AREA_TEXT: Link<CustomerSalesArea, CustomerSalesAreaText>;
    /**
     * Static representation of the one-to-many navigation property [[toSlsAreaAddrDepdntInfo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_SLS_AREA_ADDR_DEPDNT_INFO: Link<CustomerSalesArea, CustSlsAreaAddrDepdntInfo>;
    /**
     * All fields of the CustomerSalesArea entity.
     */
    const _allFields: Array<EdmTypeField<CustomerSalesArea, 'Edm.String', false, true> | EdmTypeField<CustomerSalesArea, 'Edm.String', true, true> | EdmTypeField<CustomerSalesArea, 'Edm.Boolean', true, true> | EdmTypeField<CustomerSalesArea, 'Edm.Guid', true, true> | OrderableEdmTypeField<CustomerSalesArea, 'Edm.Decimal', true, true> | Link<CustomerSalesArea, CustSalesPartnerFunc> | Link<CustomerSalesArea, CustomerSalesAreaTax> | Link<CustomerSalesArea, CustomerSalesAreaText> | Link<CustomerSalesArea, CustSlsAreaAddrDepdntInfo>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<CustomerSalesArea>;
    /**
     * All key fields of the CustomerSalesArea entity.
     */
    const _keyFields: Array<Field<CustomerSalesArea, boolean, boolean>>;
    /**
     * Mapping of all key field names to the respective static field property CustomerSalesArea.
     */
    const _keys: {
        [keys: string]: Field<CustomerSalesArea, boolean, boolean>;
    };
}
//# sourceMappingURL=CustomerSalesArea.d.ts.map