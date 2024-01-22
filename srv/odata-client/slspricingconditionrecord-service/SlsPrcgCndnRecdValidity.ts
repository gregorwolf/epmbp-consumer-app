/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SlsPrcgCndnRecdValidityRequestBuilder } from './SlsPrcgCndnRecdValidityRequestBuilder';
import { Moment } from 'moment';
import { AllFields, Constructable, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field, FieldBuilder, Link, OneToOneLink, OrderableEdmTypeField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "A_SlsPrcgCndnRecdValidity" of service "API_SLSPRICINGCONDITIONRECORD_SRV".
 */
export class SlsPrcgCndnRecdValidity extends EntityV2 implements SlsPrcgCndnRecdValidityType {
  /**
   * Technical entity name for SlsPrcgCndnRecdValidity.
   */
  static _entityName = 'A_SlsPrcgCndnRecdValidity';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/sap/opu/odata/sap/API_SLSPRICINGCONDITIONRECORD_SRV';
  /**
   * Number of Condition Record.
   * Maximum length: 10.
   */
  conditionRecord!: string;
  /**
   * Validity end date of the condition record.
   */
  conditionValidityEndDate!: Moment;
  /**
   * Validity start date of the condition record.
   * @nullable
   */
  conditionValidityStartDate?: Moment;
  /**
   * Application.
   * Maximum length: 2.
   * @nullable
   */
  conditionApplication?: string;
  /**
   * Condition Type.
   * Maximum length: 4.
   * @nullable
   */
  conditionType?: string;
  /**
   * Release Status.
   * Maximum length: 1.
   * @nullable
   */
  conditionReleaseStatus?: string;
  /**
   * Departure Country/Region (from which the goods are sent).
   * Maximum length: 3.
   * @nullable
   */
  departureCountry?: string;
  /**
   * Sales Document.
   * Maximum length: 10.
   * @nullable
   */
  salesDocument?: string;
  /**
   * Sales Document Item.
   * Maximum length: 6.
   * @nullable
   */
  salesDocumentItem?: string;
  /**
   * Accounting Indicator.
   * Maximum length: 2.
   * @nullable
   */
  billableControl?: string;
  /**
   * Industry Key.
   * Maximum length: 4.
   * @nullable
   */
  industry?: string;
  /**
   * City Code.
   * Maximum length: 4.
   * @nullable
   */
  cityCode?: string;
  /**
   * Condition Contract.
   * Maximum length: 10.
   * @nullable
   */
  conditionContract?: string;
  /**
   * County Code.
   * Maximum length: 3.
   * @nullable
   */
  county?: string;
  /**
   * Commercial Project ID.
   * Maximum length: 40.
   * @nullable
   */
  engagementProject?: string;
  /**
   * Configuration (Internal Object Number).
   * Maximum length: 18.
   * @nullable
   */
  configurationNumber?: string;
  /**
   * Document type.
   * Maximum length: 1.
   * @nullable
   */
  brNfDocumentType?: string;
  /**
   * Dynamic Key Field 1.
   * Maximum length: 40.
   * @nullable
   */
  brSpcfcFreeDefinedField1?: string;
  /**
   * Dynamic Key Field 2.
   * Maximum length: 40.
   * @nullable
   */
  brSpcfcFreeDefinedField2?: string;
  /**
   * Dynamic Key Field 3.
   * Maximum length: 40.
   * @nullable
   */
  brSpcfcFreeDefinedField3?: string;
  /**
   * International Article Number (EAN/UPC).
   * Maximum length: 18.
   * @nullable
   */
  internationalArticleNumber?: string;
  /**
   * Type of Technical Object.
   * Maximum length: 10.
   * @nullable
   */
  technicalObjectType?: string;
  /**
   * Equipment Number.
   * Maximum length: 18.
   * @nullable
   */
  equipment?: string;
  /**
   * Customer.
   * Maximum length: 10.
   * @nullable
   */
  customerHierarchy?: string;
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
   * Tax Type.
   * Maximum length: 2.
   * @nullable
   */
  accountTaxType?: string;
  /**
   * Tax relevant classification.
   * Maximum length: 10.
   * @nullable
   */
  txRlvnceClassfctnForArgentina?: string;
  /**
   * SD tax code.
   * Maximum length: 2.
   * @nullable
   */
  brTaxCode?: string;
  /**
   * LST CST Applicability Code.
   * Maximum length: 3.
   * @nullable
   */
  localSalesTaxApplicabilityCode?: string;
  /**
   * Customer Group.
   * Maximum length: 2.
   * @nullable
   */
  customerGroup?: string;
  /**
   * Customer Price Group.
   * Maximum length: 2.
   * @nullable
   */
  customerPriceGroup?: string;
  /**
   * Material Price Group.
   * Maximum length: 2.
   * @nullable
   */
  materialPricingGroup?: string;
  /**
   * Sold-to Party.
   * Maximum length: 10.
   * @nullable
   */
  soldToParty?: string;
  /**
   * Business Partner Number.
   * Maximum length: 10.
   * @nullable
   */
  bpForSoldToParty?: string;
  /**
   * Customer number.
   * Maximum length: 10.
   * @nullable
   */
  customer?: string;
  /**
   * Business Partner Number.
   * Maximum length: 10.
   * @nullable
   */
  bpForCustomer?: string;
  /**
   * Payer.
   * Maximum length: 10.
   * @nullable
   */
  payerParty?: string;
  /**
   * Business Partner Number.
   * Maximum length: 10.
   * @nullable
   */
  bpForPayerParty?: string;
  /**
   * Ship-to Party.
   * Maximum length: 10.
   * @nullable
   */
  shipToParty?: string;
  /**
   * Business Partner Number.
   * Maximum length: 10.
   * @nullable
   */
  bpForShipToParty?: string;
  /**
   * Supplier's Account Number.
   * Maximum length: 10.
   * @nullable
   */
  supplier?: string;
  /**
   * Business Partner Number.
   * Maximum length: 10.
   * @nullable
   */
  bpForSupplier?: string;
  /**
   * Destination Country/Region.
   * Maximum length: 3.
   * @nullable
   */
  destinationCountry?: string;
  /**
   * Material Group.
   * Maximum length: 9.
   * @nullable
   */
  materialGroup?: string;
  /**
   * Material Number.
   * Maximum length: 40.
   * @nullable
   */
  material?: string;
  /**
   * Returns Refund Code.
   * Maximum length: 3.
   * @nullable
   */
  returnsRefundExtent?: string;
  /**
   * Material Group 1.
   * Maximum length: 3.
   * @nullable
   */
  additionalMaterialGroup1?: string;
  /**
   * Material Group 2.
   * Maximum length: 3.
   * @nullable
   */
  additionalMaterialGroup2?: string;
  /**
   * Material Group 3.
   * Maximum length: 3.
   * @nullable
   */
  additionalMaterialGroup3?: string;
  /**
   * Material Group 4.
   * Maximum length: 3.
   * @nullable
   */
  additionalMaterialGroup4?: string;
  /**
   * Material Group 5.
   * Maximum length: 3.
   * @nullable
   */
  additionalMaterialGroup5?: string;
  /**
   * Personnel Number.
   * Maximum length: 8.
   * @nullable
   */
  personnel?: string;
  /**
   * Price List Type.
   * Maximum length: 2.
   * @nullable
   */
  priceListType?: string;
  /**
   * Postal Code.
   * Maximum length: 10.
   * @nullable
   */
  postalCode?: string;
  /**
   * Region (State, Province, County).
   * Maximum length: 3.
   * @nullable
   */
  region?: string;
  /**
   * Service Organization.
   * Maximum length: 5.
   * @nullable
   */
  engagementProjectServiceOrg?: string;
  /**
   * Requirement Segment.
   * Maximum length: 40.
   * @nullable
   */
  requirementSegment?: string;
  /**
   * Stock Segment.
   * Maximum length: 40.
   * @nullable
   */
  stockSegment?: string;
  /**
   * Division.
   * Maximum length: 2.
   * @nullable
   */
  division?: string;
  /**
   * Commodity Code.
   * Maximum length: 17.
   * @nullable
   */
  commodityCode?: string;
  /**
   * Control code for consumption taxes in foreign trade.
   * Maximum length: 16.
   * @nullable
   */
  consumptionTaxCtrlCode?: string;
  /**
   * Tax Base in Percentage.
   * Maximum length: 1.
   * @nullable
   */
  brSpcfcTaxBasePercentageCode?: string;
  /**
   * Tax Group for Dynamic Tax Exceptions.
   * Maximum length: 2.
   * @nullable
   */
  brSpcfcTxGrpDynTaxExceptions?: string;
  /**
   * Tax Classification 1 for Customer.
   * Maximum length: 1.
   * @nullable
   */
  customerTaxClassification1?: string;
  /**
   * Tax Classification 2 for Customer.
   * Maximum length: 1.
   * @nullable
   */
  customerTaxClassification2?: string;
  /**
   * Tax Classification 3 for Customer.
   * Maximum length: 1.
   * @nullable
   */
  customerTaxClassification3?: string;
  /**
   * Tax Classification 4 for Customer.
   * Maximum length: 1.
   * @nullable
   */
  customerTaxClassification4?: string;
  /**
   * Tax Classification 5 for Customer.
   * Maximum length: 1.
   * @nullable
   */
  customerTaxClassification5?: string;
  /**
   * Tax Classification 6 for Customer.
   * Maximum length: 1.
   * @nullable
   */
  customerTaxClassification6?: string;
  /**
   * Tax Classification 7 for Customer.
   * Maximum length: 1.
   * @nullable
   */
  customerTaxClassification7?: string;
  /**
   * Tax Classification 8 for Customer.
   * Maximum length: 1.
   * @nullable
   */
  customerTaxClassification8?: string;
  /**
   * Tax Classification 9 for Customer.
   * Maximum length: 1.
   * @nullable
   */
  customerTaxClassification9?: string;
  /**
   * Tax Classification of Material.
   * Maximum length: 1.
   * @nullable
   */
  productTaxClassification1?: string;
  /**
   * Tax Classification 2 for Material.
   * Maximum length: 1.
   * @nullable
   */
  productTaxClassification2?: string;
  /**
   * Tax Classification 3 for Material.
   * Maximum length: 1.
   * @nullable
   */
  productTaxClassification3?: string;
  /**
   * Tax Classification 4 for Material.
   * Maximum length: 1.
   * @nullable
   */
  productTaxClassification4?: string;
  /**
   * Tax Classification 5 for Material.
   * Maximum length: 1.
   * @nullable
   */
  productTaxClassification5?: string;
  /**
   * Tax Classification 6 for Material.
   * Maximum length: 1.
   * @nullable
   */
  productTaxClassification6?: string;
  /**
   * Tax Classification 7 for Material.
   * Maximum length: 1.
   * @nullable
   */
  productTaxClassification7?: string;
  /**
   * Tax Classification 8 for Material.
   * Maximum length: 1.
   * @nullable
   */
  productTaxClassification8?: string;
  /**
   * Tax Classification 9 for Material.
   * Maximum length: 1.
   * @nullable
   */
  productTaxClassification9?: string;
  /**
   * Trading Contract.
   * Maximum length: 10.
   * @nullable
   */
  tradingContract?: string;
  /**
   * Item Number of Trading Contract.
   * Maximum length: 6.
   * @nullable
   */
  tradingContractItem?: string;
  /**
   * Tax Jurisdiction.
   * Maximum length: 15.
   * @nullable
   */
  taxJurisdiction?: string;
  /**
   * Ship from location (tax region).
   * Maximum length: 3.
   * @nullable
   */
  brSpcfcTaxDepartureRegion?: string;
  /**
   * Ship to location (tax region).
   * Maximum length: 3.
   * @nullable
   */
  brSpcfcTaxDestinationRegion?: string;
  /**
   * Material pricing group of main item.
   * Maximum length: 2.
   * @nullable
   */
  mainItemMaterialPricingGroup?: string;
  /**
   * Pricing reference material of main item.
   * Maximum length: 40.
   * @nullable
   */
  mainItemPricingRefMaterial?: string;
  /**
   * Variant Condition Key.
   * Maximum length: 26.
   * @nullable
   */
  variantCondition?: string;
  /**
   * VAS Charge Codes.
   * Maximum length: 3.
   * @nullable
   */
  valueAddedServiceChargeCode?: string;
  /**
   * Sales and Distribution Document Number.
   * Maximum length: 10.
   * @nullable
   */
  sdDocument?: string;
  /**
   * Document Number of Reference Document.
   * Maximum length: 10.
   * @nullable
   */
  referenceSdDocument?: string;
  /**
   * Item Number of the Reference Item.
   * Maximum length: 6.
   * @nullable
   */
  referenceSdDocumentItem?: string;
  /**
   * Sales Office.
   * Maximum length: 4.
   * @nullable
   */
  salesOffice?: string;
  /**
   * Sales Group.
   * Maximum length: 3.
   * @nullable
   */
  salesGroup?: string;
  /**
   * Sales Organization.
   * Maximum length: 4.
   * @nullable
   */
  salesOrganization?: string;
  /**
   * Sales organization of sales order.
   * Maximum length: 4.
   * @nullable
   */
  salesOrderSalesOrganization?: string;
  /**
   * Sales Unit.
   * Maximum length: 3.
   * @nullable
   */
  orderQuantityUnit?: string;
  /**
   * Distribution Channel.
   * Maximum length: 2.
   * @nullable
   */
  distributionChannel?: string;
  /**
   * SD Document Currency.
   * Maximum length: 5.
   * @nullable
   */
  transactionCurrency?: string;
  /**
   * WBS Billing Element.
   * Maximum length: 24.
   * @nullable
   */
  wbsElementInternalId?: string;
  /**
   * Work Breakdown Structure Element (WBS Element) Edited.
   * Maximum length: 24.
   * @nullable
   */
  wbsElementExternalId?: string;
  /**
   * WBS Work Package.
   * Maximum length: 24.
   * @nullable
   */
  workPackage?: string;
  /**
   * Plant.
   * Maximum length: 4.
   * @nullable
   */
  plant?: string;
  /**
   * Region in which plant is located.
   * Maximum length: 3.
   * @nullable
   */
  plantRegion?: string;
  /**
   * Work Item ID.
   * Maximum length: 10.
   * @nullable
   */
  workItem?: string;
  /**
   * Processing status for conditions.
   * Maximum length: 2.
   * @nullable
   */
  conditionProcessingStatus?: string;
  /**
   * Condition Pricing Date.
   * @nullable
   */
  pricingDate?: Moment;
  /**
   * Indicator condition exclusive.
   * @nullable
   */
  conditionIsExclusive?: boolean;
  /**
   * Condition Scale Base Value.
   * Maximum length: 7.
   * @nullable
   */
  conditionScaleBasisValue?: string;
  /**
   * Tax on Sales/Purchases Code.
   * Maximum length: 2.
   * @nullable
   */
  taxCode?: string;
  /**
   * Transaction ID.
   * Maximum length: 10.
   * @nullable
   */
  serviceDocument?: string;
  /**
   * Shortened Item Number in Document.
   * Maximum length: 6.
   * @nullable
   */
  serviceDocumentItem?: string;
  /**
   * Overtime Category.
   * Maximum length: 4.
   * @nullable
   */
  timeSheetOvertimeCategory?: string;
  /**
   * SD Document Category.
   * Maximum length: 4.
   * @nullable
   */
  salesSdDocumentCategory?: string;
  /**
   * Return Reason.
   * Maximum length: 3.
   * @nullable
   */
  returnReason?: string;
  /**
   * Product Hierarchy Node.
   * Maximum length: 24.
   * @nullable
   */
  prodUnivHierarchyNode?: string;
  /**
   * Product Hierarchy Node.
   * Maximum length: 24.
   * @nullable
   */
  productHierarchyNode?: string;
  /**
   * Customer Attribute for Condition Groups.
   * Maximum length: 2.
   * @nullable
   */
  customerConditionGroup?: string;
  /**
   * Shipping Type.
   * Maximum length: 2.
   * @nullable
   */
  shippingType?: string;
  /**
   * Numerical Value of Duration.
   * Maximum length: 13.
   * @nullable
   */
  subscriptionContractDuration?: string;
  /**
   * IS-T: Unit of Duration for a Telco Contract.
   * Maximum length: 12.
   * @nullable
   */
  subscrpnContrDurationUnit?: string;
  /**
   * Lock Reason.
   * Maximum length: 8.
   * @nullable
   */
  subscriptionContractLockReason?: string;
  /**
   * Price Version.
   * Maximum length: 4.
   * @nullable
   */
  crsCtlgMappgPriceVersionNumber?: string;
  /**
   * Order Type.
   * Maximum length: 4.
   * @nullable
   */
  orderType?: string;
  /**
   * Sales Document Type.
   * Maximum length: 4.
   * @nullable
   */
  salesDocumentType?: string;
  /**
   * Order Reason (Reason for the Business Transaction).
   * Maximum length: 3.
   * @nullable
   */
  sdDocumentReason?: string;
  /**
   * Volume rebate group.
   * Maximum length: 2.
   * @nullable
   */
  volumeRebateGroup?: string;
  /**
   * Valuation Type.
   * Maximum length: 10.
   * @nullable
   */
  valuationType?: string;
  /**
   * Sales District.
   * Maximum length: 6.
   * @nullable
   */
  salesDistrict?: string;
  /**
   * Batch Number.
   * Maximum length: 10.
   * @nullable
   */
  batch?: string;
  /**
   * Supplying (issuing) plant in case of stock transport order.
   * Maximum length: 4.
   * @nullable
   */
  purgDocSupplyingPlant?: string;
  /**
   * Usage Indicator.
   * Maximum length: 3.
   * @nullable
   */
  matUsageIndicator?: string;
  /**
   * Shipping Conditions.
   * Maximum length: 2.
   * @nullable
   */
  shippingCondition?: string;
  /**
   * County in which plant is located.
   * Maximum length: 3.
   * @nullable
   */
  plantCounty?: string;
  /**
   * City in which plant is located.
   * Maximum length: 4.
   * @nullable
   */
  plantCity?: string;
  /**
   * External Material Group.
   * Maximum length: 18.
   * @nullable
   */
  materialExternalGroup?: string;
  /**
   * Customer Hierarchy Root Node ID (Hier ID).
   * Maximum length: 20.
   * @nullable
   */
  customerHierarchyRootNode?: string;
  /**
   * Customer Hierarchy Node ID.
   * Maximum length: 40.
   * @nullable
   */
  customerHierarchyNodeId?: string;
  /**
   * Customer Hierarchy Node Type.
   * Maximum length: 30.
   * @nullable
   */
  customerHierarchyNodeType?: string;
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
   * Item number of the SD document.
   * Maximum length: 6.
   * @nullable
   */
  sdDocumentItem?: string;
  /**
   * Billing Category.
   * Maximum length: 1.
   * @nullable
   */
  cndnBillingDocumentCategory?: string;
  /**
   * Country/Region Key.
   * Maximum length: 3.
   * @nullable
   */
  country?: string;
  /**
   * Contract Number.
   * Maximum length: 10.
   * @nullable
   */
  praContract?: string;
  /**
   * Well ID number.
   * Maximum length: 15.
   * @nullable
   */
  well?: string;
  /**
   * Well Completion Number.
   * Maximum length: 5.
   * @nullable
   */
  wellCompletion?: string;
  /**
   * Measurement point number.
   * Maximum length: 20.
   * @nullable
   */
  measurementPoint?: string;
  /**
   * Formula ID.
   * Maximum length: 10.
   * @nullable
   */
  pricingFormulaNumber?: string;
  /**
   * E Tag.
   * Maximum length: 40.
   * @nullable
   */
  eTag?: string;
  /**
   * One-to-many navigation property to the [[SlsPrcgCndnRecdSuplmnt]] entity.
   */
  toSlsPrcgCndnRecdSuplmnt!: SlsPrcgCndnRecdSuplmnt[];
  /**
   * One-to-one navigation property to the [[SlsPrcgConditionRecord]] entity.
   */
  toSlsPrcgConditionRecord?: SlsPrcgConditionRecord | null;

  /**
   * Returns an entity builder to construct instances of `SlsPrcgCndnRecdValidity`.
   * @returns A builder that constructs instances of entity type `SlsPrcgCndnRecdValidity`.
   */
  static builder(): EntityBuilderType<SlsPrcgCndnRecdValidity, SlsPrcgCndnRecdValidityType> {
    return EntityV2.entityBuilder(SlsPrcgCndnRecdValidity);
  }

  /**
   * Returns a request builder to construct requests for operations on the `SlsPrcgCndnRecdValidity` entity type.
   * @returns A `SlsPrcgCndnRecdValidity` request builder.
   */
  static requestBuilder(): SlsPrcgCndnRecdValidityRequestBuilder {
    return new SlsPrcgCndnRecdValidityRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `SlsPrcgCndnRecdValidity`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `SlsPrcgCndnRecdValidity`.
   */
  static customField(fieldName: string): CustomFieldV2<SlsPrcgCndnRecdValidity> {
    return EntityV2.customFieldSelector(fieldName, SlsPrcgCndnRecdValidity);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { SlsPrcgCndnRecdSuplmnt, SlsPrcgCndnRecdSuplmntType } from './SlsPrcgCndnRecdSuplmnt';
import { SlsPrcgConditionRecord, SlsPrcgConditionRecordType } from './SlsPrcgConditionRecord';

export interface SlsPrcgCndnRecdValidityType {
  conditionRecord: string;
  conditionValidityEndDate: Moment;
  conditionValidityStartDate?: Moment | null;
  conditionApplication?: string | null;
  conditionType?: string | null;
  conditionReleaseStatus?: string | null;
  departureCountry?: string | null;
  salesDocument?: string | null;
  salesDocumentItem?: string | null;
  billableControl?: string | null;
  industry?: string | null;
  cityCode?: string | null;
  conditionContract?: string | null;
  county?: string | null;
  engagementProject?: string | null;
  configurationNumber?: string | null;
  brNfDocumentType?: string | null;
  brSpcfcFreeDefinedField1?: string | null;
  brSpcfcFreeDefinedField2?: string | null;
  brSpcfcFreeDefinedField3?: string | null;
  internationalArticleNumber?: string | null;
  technicalObjectType?: string | null;
  equipment?: string | null;
  customerHierarchy?: string | null;
  incotermsClassification?: string | null;
  incotermsTransferLocation?: string | null;
  accountTaxType?: string | null;
  txRlvnceClassfctnForArgentina?: string | null;
  brTaxCode?: string | null;
  localSalesTaxApplicabilityCode?: string | null;
  customerGroup?: string | null;
  customerPriceGroup?: string | null;
  materialPricingGroup?: string | null;
  soldToParty?: string | null;
  bpForSoldToParty?: string | null;
  customer?: string | null;
  bpForCustomer?: string | null;
  payerParty?: string | null;
  bpForPayerParty?: string | null;
  shipToParty?: string | null;
  bpForShipToParty?: string | null;
  supplier?: string | null;
  bpForSupplier?: string | null;
  destinationCountry?: string | null;
  materialGroup?: string | null;
  material?: string | null;
  returnsRefundExtent?: string | null;
  additionalMaterialGroup1?: string | null;
  additionalMaterialGroup2?: string | null;
  additionalMaterialGroup3?: string | null;
  additionalMaterialGroup4?: string | null;
  additionalMaterialGroup5?: string | null;
  personnel?: string | null;
  priceListType?: string | null;
  postalCode?: string | null;
  region?: string | null;
  engagementProjectServiceOrg?: string | null;
  requirementSegment?: string | null;
  stockSegment?: string | null;
  division?: string | null;
  commodityCode?: string | null;
  consumptionTaxCtrlCode?: string | null;
  brSpcfcTaxBasePercentageCode?: string | null;
  brSpcfcTxGrpDynTaxExceptions?: string | null;
  customerTaxClassification1?: string | null;
  customerTaxClassification2?: string | null;
  customerTaxClassification3?: string | null;
  customerTaxClassification4?: string | null;
  customerTaxClassification5?: string | null;
  customerTaxClassification6?: string | null;
  customerTaxClassification7?: string | null;
  customerTaxClassification8?: string | null;
  customerTaxClassification9?: string | null;
  productTaxClassification1?: string | null;
  productTaxClassification2?: string | null;
  productTaxClassification3?: string | null;
  productTaxClassification4?: string | null;
  productTaxClassification5?: string | null;
  productTaxClassification6?: string | null;
  productTaxClassification7?: string | null;
  productTaxClassification8?: string | null;
  productTaxClassification9?: string | null;
  tradingContract?: string | null;
  tradingContractItem?: string | null;
  taxJurisdiction?: string | null;
  brSpcfcTaxDepartureRegion?: string | null;
  brSpcfcTaxDestinationRegion?: string | null;
  mainItemMaterialPricingGroup?: string | null;
  mainItemPricingRefMaterial?: string | null;
  variantCondition?: string | null;
  valueAddedServiceChargeCode?: string | null;
  sdDocument?: string | null;
  referenceSdDocument?: string | null;
  referenceSdDocumentItem?: string | null;
  salesOffice?: string | null;
  salesGroup?: string | null;
  salesOrganization?: string | null;
  salesOrderSalesOrganization?: string | null;
  orderQuantityUnit?: string | null;
  distributionChannel?: string | null;
  transactionCurrency?: string | null;
  wbsElementInternalId?: string | null;
  wbsElementExternalId?: string | null;
  workPackage?: string | null;
  plant?: string | null;
  plantRegion?: string | null;
  workItem?: string | null;
  conditionProcessingStatus?: string | null;
  pricingDate?: Moment | null;
  conditionIsExclusive?: boolean | null;
  conditionScaleBasisValue?: string | null;
  taxCode?: string | null;
  serviceDocument?: string | null;
  serviceDocumentItem?: string | null;
  timeSheetOvertimeCategory?: string | null;
  salesSdDocumentCategory?: string | null;
  returnReason?: string | null;
  prodUnivHierarchyNode?: string | null;
  productHierarchyNode?: string | null;
  customerConditionGroup?: string | null;
  shippingType?: string | null;
  subscriptionContractDuration?: string | null;
  subscrpnContrDurationUnit?: string | null;
  subscriptionContractLockReason?: string | null;
  crsCtlgMappgPriceVersionNumber?: string | null;
  orderType?: string | null;
  salesDocumentType?: string | null;
  sdDocumentReason?: string | null;
  volumeRebateGroup?: string | null;
  valuationType?: string | null;
  salesDistrict?: string | null;
  batch?: string | null;
  purgDocSupplyingPlant?: string | null;
  matUsageIndicator?: string | null;
  shippingCondition?: string | null;
  plantCounty?: string | null;
  plantCity?: string | null;
  materialExternalGroup?: string | null;
  customerHierarchyRootNode?: string | null;
  customerHierarchyNodeId?: string | null;
  customerHierarchyNodeType?: string | null;
  additionalCustomerGroup1?: string | null;
  additionalCustomerGroup2?: string | null;
  additionalCustomerGroup3?: string | null;
  additionalCustomerGroup4?: string | null;
  additionalCustomerGroup5?: string | null;
  sdDocumentItem?: string | null;
  cndnBillingDocumentCategory?: string | null;
  country?: string | null;
  praContract?: string | null;
  well?: string | null;
  wellCompletion?: string | null;
  measurementPoint?: string | null;
  pricingFormulaNumber?: string | null;
  eTag?: string | null;
  toSlsPrcgCndnRecdSuplmnt: SlsPrcgCndnRecdSuplmntType[];
  toSlsPrcgConditionRecord?: SlsPrcgConditionRecordType | null;
}

export namespace SlsPrcgCndnRecdValidity {
  const _fieldBuilder: FieldBuilder<Constructable<SlsPrcgCndnRecdValidity>> = new FieldBuilder(SlsPrcgCndnRecdValidity);
  /**
   * Static representation of the [[conditionRecord]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONDITION_RECORD = _fieldBuilder.buildEdmTypeField('ConditionRecord', 'Edm.String', false);
  /**
   * Static representation of the [[conditionValidityEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONDITION_VALIDITY_END_DATE = _fieldBuilder.buildEdmTypeField('ConditionValidityEndDate', 'Edm.DateTime', false);
  /**
   * Static representation of the [[conditionValidityStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONDITION_VALIDITY_START_DATE = _fieldBuilder.buildEdmTypeField('ConditionValidityStartDate', 'Edm.DateTime', true);
  /**
   * Static representation of the [[conditionApplication]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONDITION_APPLICATION = _fieldBuilder.buildEdmTypeField('ConditionApplication', 'Edm.String', true);
  /**
   * Static representation of the [[conditionType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONDITION_TYPE = _fieldBuilder.buildEdmTypeField('ConditionType', 'Edm.String', true);
  /**
   * Static representation of the [[conditionReleaseStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONDITION_RELEASE_STATUS = _fieldBuilder.buildEdmTypeField('ConditionReleaseStatus', 'Edm.String', true);
  /**
   * Static representation of the [[departureCountry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEPARTURE_COUNTRY = _fieldBuilder.buildEdmTypeField('DepartureCountry', 'Edm.String', true);
  /**
   * Static representation of the [[salesDocument]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_DOCUMENT = _fieldBuilder.buildEdmTypeField('SalesDocument', 'Edm.String', true);
  /**
   * Static representation of the [[salesDocumentItem]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_DOCUMENT_ITEM = _fieldBuilder.buildEdmTypeField('SalesDocumentItem', 'Edm.String', true);
  /**
   * Static representation of the [[billableControl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BILLABLE_CONTROL = _fieldBuilder.buildEdmTypeField('BillableControl', 'Edm.String', true);
  /**
   * Static representation of the [[industry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INDUSTRY = _fieldBuilder.buildEdmTypeField('Industry', 'Edm.String', true);
  /**
   * Static representation of the [[cityCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CITY_CODE = _fieldBuilder.buildEdmTypeField('CityCode', 'Edm.String', true);
  /**
   * Static representation of the [[conditionContract]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONDITION_CONTRACT = _fieldBuilder.buildEdmTypeField('ConditionContract', 'Edm.String', true);
  /**
   * Static representation of the [[county]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTY = _fieldBuilder.buildEdmTypeField('County', 'Edm.String', true);
  /**
   * Static representation of the [[engagementProject]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ENGAGEMENT_PROJECT = _fieldBuilder.buildEdmTypeField('EngagementProject', 'Edm.String', true);
  /**
   * Static representation of the [[configurationNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONFIGURATION_NUMBER = _fieldBuilder.buildEdmTypeField('ConfigurationNumber', 'Edm.String', true);
  /**
   * Static representation of the [[brNfDocumentType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BR_NF_DOCUMENT_TYPE = _fieldBuilder.buildEdmTypeField('BR_NFDocumentType', 'Edm.String', true);
  /**
   * Static representation of the [[brSpcfcFreeDefinedField1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BR_SPCFC_FREE_DEFINED_FIELD_1 = _fieldBuilder.buildEdmTypeField('BRSpcfcFreeDefinedField1', 'Edm.String', true);
  /**
   * Static representation of the [[brSpcfcFreeDefinedField2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BR_SPCFC_FREE_DEFINED_FIELD_2 = _fieldBuilder.buildEdmTypeField('BRSpcfcFreeDefinedField2', 'Edm.String', true);
  /**
   * Static representation of the [[brSpcfcFreeDefinedField3]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BR_SPCFC_FREE_DEFINED_FIELD_3 = _fieldBuilder.buildEdmTypeField('BRSpcfcFreeDefinedField3', 'Edm.String', true);
  /**
   * Static representation of the [[internationalArticleNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INTERNATIONAL_ARTICLE_NUMBER = _fieldBuilder.buildEdmTypeField('InternationalArticleNumber', 'Edm.String', true);
  /**
   * Static representation of the [[technicalObjectType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TECHNICAL_OBJECT_TYPE = _fieldBuilder.buildEdmTypeField('TechnicalObjectType', 'Edm.String', true);
  /**
   * Static representation of the [[equipment]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EQUIPMENT = _fieldBuilder.buildEdmTypeField('Equipment', 'Edm.String', true);
  /**
   * Static representation of the [[customerHierarchy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER_HIERARCHY = _fieldBuilder.buildEdmTypeField('CustomerHierarchy', 'Edm.String', true);
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
   * Static representation of the [[accountTaxType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCOUNT_TAX_TYPE = _fieldBuilder.buildEdmTypeField('AccountTaxType', 'Edm.String', true);
  /**
   * Static representation of the [[txRlvnceClassfctnForArgentina]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TX_RLVNCE_CLASSFCTN_FOR_ARGENTINA = _fieldBuilder.buildEdmTypeField('TxRlvnceClassfctnForArgentina', 'Edm.String', true);
  /**
   * Static representation of the [[brTaxCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BR_TAX_CODE = _fieldBuilder.buildEdmTypeField('BR_TaxCode', 'Edm.String', true);
  /**
   * Static representation of the [[localSalesTaxApplicabilityCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOCAL_SALES_TAX_APPLICABILITY_CODE = _fieldBuilder.buildEdmTypeField('LocalSalesTaxApplicabilityCode', 'Edm.String', true);
  /**
   * Static representation of the [[customerGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER_GROUP = _fieldBuilder.buildEdmTypeField('CustomerGroup', 'Edm.String', true);
  /**
   * Static representation of the [[customerPriceGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER_PRICE_GROUP = _fieldBuilder.buildEdmTypeField('CustomerPriceGroup', 'Edm.String', true);
  /**
   * Static representation of the [[materialPricingGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MATERIAL_PRICING_GROUP = _fieldBuilder.buildEdmTypeField('MaterialPricingGroup', 'Edm.String', true);
  /**
   * Static representation of the [[soldToParty]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SOLD_TO_PARTY = _fieldBuilder.buildEdmTypeField('SoldToParty', 'Edm.String', true);
  /**
   * Static representation of the [[bpForSoldToParty]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_FOR_SOLD_TO_PARTY = _fieldBuilder.buildEdmTypeField('BPForSoldToParty', 'Edm.String', true);
  /**
   * Static representation of the [[customer]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER = _fieldBuilder.buildEdmTypeField('Customer', 'Edm.String', true);
  /**
   * Static representation of the [[bpForCustomer]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_FOR_CUSTOMER = _fieldBuilder.buildEdmTypeField('BPForCustomer', 'Edm.String', true);
  /**
   * Static representation of the [[payerParty]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYER_PARTY = _fieldBuilder.buildEdmTypeField('PayerParty', 'Edm.String', true);
  /**
   * Static representation of the [[bpForPayerParty]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_FOR_PAYER_PARTY = _fieldBuilder.buildEdmTypeField('BPForPayerParty', 'Edm.String', true);
  /**
   * Static representation of the [[shipToParty]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SHIP_TO_PARTY = _fieldBuilder.buildEdmTypeField('ShipToParty', 'Edm.String', true);
  /**
   * Static representation of the [[bpForShipToParty]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_FOR_SHIP_TO_PARTY = _fieldBuilder.buildEdmTypeField('BPForShipToParty', 'Edm.String', true);
  /**
   * Static representation of the [[supplier]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPPLIER = _fieldBuilder.buildEdmTypeField('Supplier', 'Edm.String', true);
  /**
   * Static representation of the [[bpForSupplier]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_FOR_SUPPLIER = _fieldBuilder.buildEdmTypeField('BPForSupplier', 'Edm.String', true);
  /**
   * Static representation of the [[destinationCountry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESTINATION_COUNTRY = _fieldBuilder.buildEdmTypeField('DestinationCountry', 'Edm.String', true);
  /**
   * Static representation of the [[materialGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MATERIAL_GROUP = _fieldBuilder.buildEdmTypeField('MaterialGroup', 'Edm.String', true);
  /**
   * Static representation of the [[material]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MATERIAL = _fieldBuilder.buildEdmTypeField('Material', 'Edm.String', true);
  /**
   * Static representation of the [[returnsRefundExtent]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RETURNS_REFUND_EXTENT = _fieldBuilder.buildEdmTypeField('ReturnsRefundExtent', 'Edm.String', true);
  /**
   * Static representation of the [[additionalMaterialGroup1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDITIONAL_MATERIAL_GROUP_1 = _fieldBuilder.buildEdmTypeField('AdditionalMaterialGroup1', 'Edm.String', true);
  /**
   * Static representation of the [[additionalMaterialGroup2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDITIONAL_MATERIAL_GROUP_2 = _fieldBuilder.buildEdmTypeField('AdditionalMaterialGroup2', 'Edm.String', true);
  /**
   * Static representation of the [[additionalMaterialGroup3]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDITIONAL_MATERIAL_GROUP_3 = _fieldBuilder.buildEdmTypeField('AdditionalMaterialGroup3', 'Edm.String', true);
  /**
   * Static representation of the [[additionalMaterialGroup4]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDITIONAL_MATERIAL_GROUP_4 = _fieldBuilder.buildEdmTypeField('AdditionalMaterialGroup4', 'Edm.String', true);
  /**
   * Static representation of the [[additionalMaterialGroup5]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDITIONAL_MATERIAL_GROUP_5 = _fieldBuilder.buildEdmTypeField('AdditionalMaterialGroup5', 'Edm.String', true);
  /**
   * Static representation of the [[personnel]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERSONNEL = _fieldBuilder.buildEdmTypeField('Personnel', 'Edm.String', true);
  /**
   * Static representation of the [[priceListType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRICE_LIST_TYPE = _fieldBuilder.buildEdmTypeField('PriceListType', 'Edm.String', true);
  /**
   * Static representation of the [[postalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POSTAL_CODE = _fieldBuilder.buildEdmTypeField('PostalCode', 'Edm.String', true);
  /**
   * Static representation of the [[region]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REGION = _fieldBuilder.buildEdmTypeField('Region', 'Edm.String', true);
  /**
   * Static representation of the [[engagementProjectServiceOrg]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ENGAGEMENT_PROJECT_SERVICE_ORG = _fieldBuilder.buildEdmTypeField('EngagementProjectServiceOrg', 'Edm.String', true);
  /**
   * Static representation of the [[requirementSegment]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REQUIREMENT_SEGMENT = _fieldBuilder.buildEdmTypeField('RequirementSegment', 'Edm.String', true);
  /**
   * Static representation of the [[stockSegment]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STOCK_SEGMENT = _fieldBuilder.buildEdmTypeField('StockSegment', 'Edm.String', true);
  /**
   * Static representation of the [[division]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DIVISION = _fieldBuilder.buildEdmTypeField('Division', 'Edm.String', true);
  /**
   * Static representation of the [[commodityCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMMODITY_CODE = _fieldBuilder.buildEdmTypeField('CommodityCode', 'Edm.String', true);
  /**
   * Static representation of the [[consumptionTaxCtrlCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONSUMPTION_TAX_CTRL_CODE = _fieldBuilder.buildEdmTypeField('ConsumptionTaxCtrlCode', 'Edm.String', true);
  /**
   * Static representation of the [[brSpcfcTaxBasePercentageCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BR_SPCFC_TAX_BASE_PERCENTAGE_CODE = _fieldBuilder.buildEdmTypeField('BRSpcfcTaxBasePercentageCode', 'Edm.String', true);
  /**
   * Static representation of the [[brSpcfcTxGrpDynTaxExceptions]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BR_SPCFC_TX_GRP_DYN_TAX_EXCEPTIONS = _fieldBuilder.buildEdmTypeField('BRSpcfcTxGrpDynTaxExceptions', 'Edm.String', true);
  /**
   * Static representation of the [[customerTaxClassification1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER_TAX_CLASSIFICATION_1 = _fieldBuilder.buildEdmTypeField('CustomerTaxClassification1', 'Edm.String', true);
  /**
   * Static representation of the [[customerTaxClassification2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER_TAX_CLASSIFICATION_2 = _fieldBuilder.buildEdmTypeField('CustomerTaxClassification2', 'Edm.String', true);
  /**
   * Static representation of the [[customerTaxClassification3]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER_TAX_CLASSIFICATION_3 = _fieldBuilder.buildEdmTypeField('CustomerTaxClassification3', 'Edm.String', true);
  /**
   * Static representation of the [[customerTaxClassification4]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER_TAX_CLASSIFICATION_4 = _fieldBuilder.buildEdmTypeField('CustomerTaxClassification4', 'Edm.String', true);
  /**
   * Static representation of the [[customerTaxClassification5]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER_TAX_CLASSIFICATION_5 = _fieldBuilder.buildEdmTypeField('CustomerTaxClassification5', 'Edm.String', true);
  /**
   * Static representation of the [[customerTaxClassification6]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER_TAX_CLASSIFICATION_6 = _fieldBuilder.buildEdmTypeField('CustomerTaxClassification6', 'Edm.String', true);
  /**
   * Static representation of the [[customerTaxClassification7]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER_TAX_CLASSIFICATION_7 = _fieldBuilder.buildEdmTypeField('CustomerTaxClassification7', 'Edm.String', true);
  /**
   * Static representation of the [[customerTaxClassification8]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER_TAX_CLASSIFICATION_8 = _fieldBuilder.buildEdmTypeField('CustomerTaxClassification8', 'Edm.String', true);
  /**
   * Static representation of the [[customerTaxClassification9]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER_TAX_CLASSIFICATION_9 = _fieldBuilder.buildEdmTypeField('CustomerTaxClassification9', 'Edm.String', true);
  /**
   * Static representation of the [[productTaxClassification1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRODUCT_TAX_CLASSIFICATION_1 = _fieldBuilder.buildEdmTypeField('ProductTaxClassification1', 'Edm.String', true);
  /**
   * Static representation of the [[productTaxClassification2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRODUCT_TAX_CLASSIFICATION_2 = _fieldBuilder.buildEdmTypeField('ProductTaxClassification2', 'Edm.String', true);
  /**
   * Static representation of the [[productTaxClassification3]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRODUCT_TAX_CLASSIFICATION_3 = _fieldBuilder.buildEdmTypeField('ProductTaxClassification3', 'Edm.String', true);
  /**
   * Static representation of the [[productTaxClassification4]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRODUCT_TAX_CLASSIFICATION_4 = _fieldBuilder.buildEdmTypeField('ProductTaxClassification4', 'Edm.String', true);
  /**
   * Static representation of the [[productTaxClassification5]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRODUCT_TAX_CLASSIFICATION_5 = _fieldBuilder.buildEdmTypeField('ProductTaxClassification5', 'Edm.String', true);
  /**
   * Static representation of the [[productTaxClassification6]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRODUCT_TAX_CLASSIFICATION_6 = _fieldBuilder.buildEdmTypeField('ProductTaxClassification6', 'Edm.String', true);
  /**
   * Static representation of the [[productTaxClassification7]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRODUCT_TAX_CLASSIFICATION_7 = _fieldBuilder.buildEdmTypeField('ProductTaxClassification7', 'Edm.String', true);
  /**
   * Static representation of the [[productTaxClassification8]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRODUCT_TAX_CLASSIFICATION_8 = _fieldBuilder.buildEdmTypeField('ProductTaxClassification8', 'Edm.String', true);
  /**
   * Static representation of the [[productTaxClassification9]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRODUCT_TAX_CLASSIFICATION_9 = _fieldBuilder.buildEdmTypeField('ProductTaxClassification9', 'Edm.String', true);
  /**
   * Static representation of the [[tradingContract]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TRADING_CONTRACT = _fieldBuilder.buildEdmTypeField('TradingContract', 'Edm.String', true);
  /**
   * Static representation of the [[tradingContractItem]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TRADING_CONTRACT_ITEM = _fieldBuilder.buildEdmTypeField('TradingContractItem', 'Edm.String', true);
  /**
   * Static representation of the [[taxJurisdiction]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_JURISDICTION = _fieldBuilder.buildEdmTypeField('TaxJurisdiction', 'Edm.String', true);
  /**
   * Static representation of the [[brSpcfcTaxDepartureRegion]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BR_SPCFC_TAX_DEPARTURE_REGION = _fieldBuilder.buildEdmTypeField('BRSpcfcTaxDepartureRegion', 'Edm.String', true);
  /**
   * Static representation of the [[brSpcfcTaxDestinationRegion]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BR_SPCFC_TAX_DESTINATION_REGION = _fieldBuilder.buildEdmTypeField('BRSpcfcTaxDestinationRegion', 'Edm.String', true);
  /**
   * Static representation of the [[mainItemMaterialPricingGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MAIN_ITEM_MATERIAL_PRICING_GROUP = _fieldBuilder.buildEdmTypeField('MainItemMaterialPricingGroup', 'Edm.String', true);
  /**
   * Static representation of the [[mainItemPricingRefMaterial]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MAIN_ITEM_PRICING_REF_MATERIAL = _fieldBuilder.buildEdmTypeField('MainItemPricingRefMaterial', 'Edm.String', true);
  /**
   * Static representation of the [[variantCondition]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VARIANT_CONDITION = _fieldBuilder.buildEdmTypeField('VariantCondition', 'Edm.String', true);
  /**
   * Static representation of the [[valueAddedServiceChargeCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VALUE_ADDED_SERVICE_CHARGE_CODE = _fieldBuilder.buildEdmTypeField('ValueAddedServiceChargeCode', 'Edm.String', true);
  /**
   * Static representation of the [[sdDocument]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SD_DOCUMENT = _fieldBuilder.buildEdmTypeField('SDDocument', 'Edm.String', true);
  /**
   * Static representation of the [[referenceSdDocument]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REFERENCE_SD_DOCUMENT = _fieldBuilder.buildEdmTypeField('ReferenceSDDocument', 'Edm.String', true);
  /**
   * Static representation of the [[referenceSdDocumentItem]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REFERENCE_SD_DOCUMENT_ITEM = _fieldBuilder.buildEdmTypeField('ReferenceSDDocumentItem', 'Edm.String', true);
  /**
   * Static representation of the [[salesOffice]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_OFFICE = _fieldBuilder.buildEdmTypeField('SalesOffice', 'Edm.String', true);
  /**
   * Static representation of the [[salesGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_GROUP = _fieldBuilder.buildEdmTypeField('SalesGroup', 'Edm.String', true);
  /**
   * Static representation of the [[salesOrganization]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_ORGANIZATION = _fieldBuilder.buildEdmTypeField('SalesOrganization', 'Edm.String', true);
  /**
   * Static representation of the [[salesOrderSalesOrganization]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_ORDER_SALES_ORGANIZATION = _fieldBuilder.buildEdmTypeField('SalesOrderSalesOrganization', 'Edm.String', true);
  /**
   * Static representation of the [[orderQuantityUnit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORDER_QUANTITY_UNIT = _fieldBuilder.buildEdmTypeField('OrderQuantityUnit', 'Edm.String', true);
  /**
   * Static representation of the [[distributionChannel]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DISTRIBUTION_CHANNEL = _fieldBuilder.buildEdmTypeField('DistributionChannel', 'Edm.String', true);
  /**
   * Static representation of the [[transactionCurrency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TRANSACTION_CURRENCY = _fieldBuilder.buildEdmTypeField('TransactionCurrency', 'Edm.String', true);
  /**
   * Static representation of the [[wbsElementInternalId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WBS_ELEMENT_INTERNAL_ID = _fieldBuilder.buildEdmTypeField('WBSElementInternalID', 'Edm.String', true);
  /**
   * Static representation of the [[wbsElementExternalId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WBS_ELEMENT_EXTERNAL_ID = _fieldBuilder.buildEdmTypeField('WBSElementExternalID', 'Edm.String', true);
  /**
   * Static representation of the [[workPackage]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WORK_PACKAGE = _fieldBuilder.buildEdmTypeField('WorkPackage', 'Edm.String', true);
  /**
   * Static representation of the [[plant]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PLANT = _fieldBuilder.buildEdmTypeField('Plant', 'Edm.String', true);
  /**
   * Static representation of the [[plantRegion]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PLANT_REGION = _fieldBuilder.buildEdmTypeField('PlantRegion', 'Edm.String', true);
  /**
   * Static representation of the [[workItem]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WORK_ITEM = _fieldBuilder.buildEdmTypeField('WorkItem', 'Edm.String', true);
  /**
   * Static representation of the [[conditionProcessingStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONDITION_PROCESSING_STATUS = _fieldBuilder.buildEdmTypeField('ConditionProcessingStatus', 'Edm.String', true);
  /**
   * Static representation of the [[pricingDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRICING_DATE = _fieldBuilder.buildEdmTypeField('PricingDate', 'Edm.DateTime', true);
  /**
   * Static representation of the [[conditionIsExclusive]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONDITION_IS_EXCLUSIVE = _fieldBuilder.buildEdmTypeField('ConditionIsExclusive', 'Edm.Boolean', true);
  /**
   * Static representation of the [[conditionScaleBasisValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONDITION_SCALE_BASIS_VALUE = _fieldBuilder.buildEdmTypeField('ConditionScaleBasisValue', 'Edm.String', true);
  /**
   * Static representation of the [[taxCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_CODE = _fieldBuilder.buildEdmTypeField('TaxCode', 'Edm.String', true);
  /**
   * Static representation of the [[serviceDocument]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERVICE_DOCUMENT = _fieldBuilder.buildEdmTypeField('ServiceDocument', 'Edm.String', true);
  /**
   * Static representation of the [[serviceDocumentItem]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERVICE_DOCUMENT_ITEM = _fieldBuilder.buildEdmTypeField('ServiceDocumentItem', 'Edm.String', true);
  /**
   * Static representation of the [[timeSheetOvertimeCategory]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TIME_SHEET_OVERTIME_CATEGORY = _fieldBuilder.buildEdmTypeField('TimeSheetOvertimeCategory', 'Edm.String', true);
  /**
   * Static representation of the [[salesSdDocumentCategory]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_SD_DOCUMENT_CATEGORY = _fieldBuilder.buildEdmTypeField('SalesSDDocumentCategory', 'Edm.String', true);
  /**
   * Static representation of the [[returnReason]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RETURN_REASON = _fieldBuilder.buildEdmTypeField('ReturnReason', 'Edm.String', true);
  /**
   * Static representation of the [[prodUnivHierarchyNode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROD_UNIV_HIERARCHY_NODE = _fieldBuilder.buildEdmTypeField('ProdUnivHierarchyNode', 'Edm.String', true);
  /**
   * Static representation of the [[productHierarchyNode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRODUCT_HIERARCHY_NODE = _fieldBuilder.buildEdmTypeField('ProductHierarchyNode', 'Edm.String', true);
  /**
   * Static representation of the [[customerConditionGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER_CONDITION_GROUP = _fieldBuilder.buildEdmTypeField('CustomerConditionGroup', 'Edm.String', true);
  /**
   * Static representation of the [[shippingType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SHIPPING_TYPE = _fieldBuilder.buildEdmTypeField('ShippingType', 'Edm.String', true);
  /**
   * Static representation of the [[subscriptionContractDuration]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUBSCRIPTION_CONTRACT_DURATION = _fieldBuilder.buildEdmTypeField('SubscriptionContractDuration', 'Edm.String', true);
  /**
   * Static representation of the [[subscrpnContrDurationUnit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUBSCRPN_CONTR_DURATION_UNIT = _fieldBuilder.buildEdmTypeField('SubscrpnContrDurationUnit', 'Edm.String', true);
  /**
   * Static representation of the [[subscriptionContractLockReason]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUBSCRIPTION_CONTRACT_LOCK_REASON = _fieldBuilder.buildEdmTypeField('SubscriptionContractLockReason', 'Edm.String', true);
  /**
   * Static representation of the [[crsCtlgMappgPriceVersionNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CRS_CTLG_MAPPG_PRICE_VERSION_NUMBER = _fieldBuilder.buildEdmTypeField('CrsCtlgMappgPriceVersionNumber', 'Edm.String', true);
  /**
   * Static representation of the [[orderType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORDER_TYPE = _fieldBuilder.buildEdmTypeField('OrderType', 'Edm.String', true);
  /**
   * Static representation of the [[salesDocumentType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_DOCUMENT_TYPE = _fieldBuilder.buildEdmTypeField('SalesDocumentType', 'Edm.String', true);
  /**
   * Static representation of the [[sdDocumentReason]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SD_DOCUMENT_REASON = _fieldBuilder.buildEdmTypeField('SDDocumentReason', 'Edm.String', true);
  /**
   * Static representation of the [[volumeRebateGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VOLUME_REBATE_GROUP = _fieldBuilder.buildEdmTypeField('VolumeRebateGroup', 'Edm.String', true);
  /**
   * Static representation of the [[valuationType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VALUATION_TYPE = _fieldBuilder.buildEdmTypeField('ValuationType', 'Edm.String', true);
  /**
   * Static representation of the [[salesDistrict]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_DISTRICT = _fieldBuilder.buildEdmTypeField('SalesDistrict', 'Edm.String', true);
  /**
   * Static representation of the [[batch]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BATCH = _fieldBuilder.buildEdmTypeField('Batch', 'Edm.String', true);
  /**
   * Static representation of the [[purgDocSupplyingPlant]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURG_DOC_SUPPLYING_PLANT = _fieldBuilder.buildEdmTypeField('PurgDocSupplyingPlant', 'Edm.String', true);
  /**
   * Static representation of the [[matUsageIndicator]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MAT_USAGE_INDICATOR = _fieldBuilder.buildEdmTypeField('MatUsageIndicator', 'Edm.String', true);
  /**
   * Static representation of the [[shippingCondition]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SHIPPING_CONDITION = _fieldBuilder.buildEdmTypeField('ShippingCondition', 'Edm.String', true);
  /**
   * Static representation of the [[plantCounty]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PLANT_COUNTY = _fieldBuilder.buildEdmTypeField('PlantCounty', 'Edm.String', true);
  /**
   * Static representation of the [[plantCity]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PLANT_CITY = _fieldBuilder.buildEdmTypeField('PlantCity', 'Edm.String', true);
  /**
   * Static representation of the [[materialExternalGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MATERIAL_EXTERNAL_GROUP = _fieldBuilder.buildEdmTypeField('MaterialExternalGroup', 'Edm.String', true);
  /**
   * Static representation of the [[customerHierarchyRootNode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER_HIERARCHY_ROOT_NODE = _fieldBuilder.buildEdmTypeField('CustomerHierarchyRootNode', 'Edm.String', true);
  /**
   * Static representation of the [[customerHierarchyNodeId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER_HIERARCHY_NODE_ID = _fieldBuilder.buildEdmTypeField('CustomerHierarchyNodeID', 'Edm.String', true);
  /**
   * Static representation of the [[customerHierarchyNodeType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER_HIERARCHY_NODE_TYPE = _fieldBuilder.buildEdmTypeField('CustomerHierarchyNodeType', 'Edm.String', true);
  /**
   * Static representation of the [[additionalCustomerGroup1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDITIONAL_CUSTOMER_GROUP_1 = _fieldBuilder.buildEdmTypeField('AdditionalCustomerGroup1', 'Edm.String', true);
  /**
   * Static representation of the [[additionalCustomerGroup2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDITIONAL_CUSTOMER_GROUP_2 = _fieldBuilder.buildEdmTypeField('AdditionalCustomerGroup2', 'Edm.String', true);
  /**
   * Static representation of the [[additionalCustomerGroup3]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDITIONAL_CUSTOMER_GROUP_3 = _fieldBuilder.buildEdmTypeField('AdditionalCustomerGroup3', 'Edm.String', true);
  /**
   * Static representation of the [[additionalCustomerGroup4]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDITIONAL_CUSTOMER_GROUP_4 = _fieldBuilder.buildEdmTypeField('AdditionalCustomerGroup4', 'Edm.String', true);
  /**
   * Static representation of the [[additionalCustomerGroup5]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDITIONAL_CUSTOMER_GROUP_5 = _fieldBuilder.buildEdmTypeField('AdditionalCustomerGroup5', 'Edm.String', true);
  /**
   * Static representation of the [[sdDocumentItem]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SD_DOCUMENT_ITEM = _fieldBuilder.buildEdmTypeField('SDDocumentItem', 'Edm.String', true);
  /**
   * Static representation of the [[cndnBillingDocumentCategory]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CNDN_BILLING_DOCUMENT_CATEGORY = _fieldBuilder.buildEdmTypeField('CndnBillingDocumentCategory', 'Edm.String', true);
  /**
   * Static representation of the [[country]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY = _fieldBuilder.buildEdmTypeField('Country', 'Edm.String', true);
  /**
   * Static representation of the [[praContract]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRA_CONTRACT = _fieldBuilder.buildEdmTypeField('PRAContract', 'Edm.String', true);
  /**
   * Static representation of the [[well]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WELL = _fieldBuilder.buildEdmTypeField('Well', 'Edm.String', true);
  /**
   * Static representation of the [[wellCompletion]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WELL_COMPLETION = _fieldBuilder.buildEdmTypeField('WellCompletion', 'Edm.String', true);
  /**
   * Static representation of the [[measurementPoint]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MEASUREMENT_POINT = _fieldBuilder.buildEdmTypeField('MeasurementPoint', 'Edm.String', true);
  /**
   * Static representation of the [[pricingFormulaNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRICING_FORMULA_NUMBER = _fieldBuilder.buildEdmTypeField('PricingFormulaNumber', 'Edm.String', true);
  /**
   * Static representation of the [[eTag]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_TAG = _fieldBuilder.buildEdmTypeField('ETag', 'Edm.String', true);
  /**
   * Static representation of the one-to-many navigation property [[toSlsPrcgCndnRecdSuplmnt]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_SLS_PRCG_CNDN_RECD_SUPLMNT: Link<SlsPrcgCndnRecdValidity, SlsPrcgCndnRecdSuplmnt> = new Link('to_SlsPrcgCndnRecdSuplmnt', SlsPrcgCndnRecdValidity, SlsPrcgCndnRecdSuplmnt);
  /**
   * Static representation of the one-to-one navigation property [[toSlsPrcgConditionRecord]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_SLS_PRCG_CONDITION_RECORD: OneToOneLink<SlsPrcgCndnRecdValidity, SlsPrcgConditionRecord> = new OneToOneLink('to_SlsPrcgConditionRecord', SlsPrcgCndnRecdValidity, SlsPrcgConditionRecord);
  /**
   * All fields of the SlsPrcgCndnRecdValidity entity.
   */
  export const _allFields: Array<EdmTypeField<SlsPrcgCndnRecdValidity, 'Edm.String', false, true> | OrderableEdmTypeField<SlsPrcgCndnRecdValidity, 'Edm.DateTime', false, true> | OrderableEdmTypeField<SlsPrcgCndnRecdValidity, 'Edm.DateTime', true, true> | EdmTypeField<SlsPrcgCndnRecdValidity, 'Edm.String', true, true> | EdmTypeField<SlsPrcgCndnRecdValidity, 'Edm.Boolean', true, true> | Link<SlsPrcgCndnRecdValidity, SlsPrcgCndnRecdSuplmnt> | OneToOneLink<SlsPrcgCndnRecdValidity, SlsPrcgConditionRecord>> = [
    SlsPrcgCndnRecdValidity.CONDITION_RECORD,
    SlsPrcgCndnRecdValidity.CONDITION_VALIDITY_END_DATE,
    SlsPrcgCndnRecdValidity.CONDITION_VALIDITY_START_DATE,
    SlsPrcgCndnRecdValidity.CONDITION_APPLICATION,
    SlsPrcgCndnRecdValidity.CONDITION_TYPE,
    SlsPrcgCndnRecdValidity.CONDITION_RELEASE_STATUS,
    SlsPrcgCndnRecdValidity.DEPARTURE_COUNTRY,
    SlsPrcgCndnRecdValidity.SALES_DOCUMENT,
    SlsPrcgCndnRecdValidity.SALES_DOCUMENT_ITEM,
    SlsPrcgCndnRecdValidity.BILLABLE_CONTROL,
    SlsPrcgCndnRecdValidity.INDUSTRY,
    SlsPrcgCndnRecdValidity.CITY_CODE,
    SlsPrcgCndnRecdValidity.CONDITION_CONTRACT,
    SlsPrcgCndnRecdValidity.COUNTY,
    SlsPrcgCndnRecdValidity.ENGAGEMENT_PROJECT,
    SlsPrcgCndnRecdValidity.CONFIGURATION_NUMBER,
    SlsPrcgCndnRecdValidity.BR_NF_DOCUMENT_TYPE,
    SlsPrcgCndnRecdValidity.BR_SPCFC_FREE_DEFINED_FIELD_1,
    SlsPrcgCndnRecdValidity.BR_SPCFC_FREE_DEFINED_FIELD_2,
    SlsPrcgCndnRecdValidity.BR_SPCFC_FREE_DEFINED_FIELD_3,
    SlsPrcgCndnRecdValidity.INTERNATIONAL_ARTICLE_NUMBER,
    SlsPrcgCndnRecdValidity.TECHNICAL_OBJECT_TYPE,
    SlsPrcgCndnRecdValidity.EQUIPMENT,
    SlsPrcgCndnRecdValidity.CUSTOMER_HIERARCHY,
    SlsPrcgCndnRecdValidity.INCOTERMS_CLASSIFICATION,
    SlsPrcgCndnRecdValidity.INCOTERMS_TRANSFER_LOCATION,
    SlsPrcgCndnRecdValidity.ACCOUNT_TAX_TYPE,
    SlsPrcgCndnRecdValidity.TX_RLVNCE_CLASSFCTN_FOR_ARGENTINA,
    SlsPrcgCndnRecdValidity.BR_TAX_CODE,
    SlsPrcgCndnRecdValidity.LOCAL_SALES_TAX_APPLICABILITY_CODE,
    SlsPrcgCndnRecdValidity.CUSTOMER_GROUP,
    SlsPrcgCndnRecdValidity.CUSTOMER_PRICE_GROUP,
    SlsPrcgCndnRecdValidity.MATERIAL_PRICING_GROUP,
    SlsPrcgCndnRecdValidity.SOLD_TO_PARTY,
    SlsPrcgCndnRecdValidity.BP_FOR_SOLD_TO_PARTY,
    SlsPrcgCndnRecdValidity.CUSTOMER,
    SlsPrcgCndnRecdValidity.BP_FOR_CUSTOMER,
    SlsPrcgCndnRecdValidity.PAYER_PARTY,
    SlsPrcgCndnRecdValidity.BP_FOR_PAYER_PARTY,
    SlsPrcgCndnRecdValidity.SHIP_TO_PARTY,
    SlsPrcgCndnRecdValidity.BP_FOR_SHIP_TO_PARTY,
    SlsPrcgCndnRecdValidity.SUPPLIER,
    SlsPrcgCndnRecdValidity.BP_FOR_SUPPLIER,
    SlsPrcgCndnRecdValidity.DESTINATION_COUNTRY,
    SlsPrcgCndnRecdValidity.MATERIAL_GROUP,
    SlsPrcgCndnRecdValidity.MATERIAL,
    SlsPrcgCndnRecdValidity.RETURNS_REFUND_EXTENT,
    SlsPrcgCndnRecdValidity.ADDITIONAL_MATERIAL_GROUP_1,
    SlsPrcgCndnRecdValidity.ADDITIONAL_MATERIAL_GROUP_2,
    SlsPrcgCndnRecdValidity.ADDITIONAL_MATERIAL_GROUP_3,
    SlsPrcgCndnRecdValidity.ADDITIONAL_MATERIAL_GROUP_4,
    SlsPrcgCndnRecdValidity.ADDITIONAL_MATERIAL_GROUP_5,
    SlsPrcgCndnRecdValidity.PERSONNEL,
    SlsPrcgCndnRecdValidity.PRICE_LIST_TYPE,
    SlsPrcgCndnRecdValidity.POSTAL_CODE,
    SlsPrcgCndnRecdValidity.REGION,
    SlsPrcgCndnRecdValidity.ENGAGEMENT_PROJECT_SERVICE_ORG,
    SlsPrcgCndnRecdValidity.REQUIREMENT_SEGMENT,
    SlsPrcgCndnRecdValidity.STOCK_SEGMENT,
    SlsPrcgCndnRecdValidity.DIVISION,
    SlsPrcgCndnRecdValidity.COMMODITY_CODE,
    SlsPrcgCndnRecdValidity.CONSUMPTION_TAX_CTRL_CODE,
    SlsPrcgCndnRecdValidity.BR_SPCFC_TAX_BASE_PERCENTAGE_CODE,
    SlsPrcgCndnRecdValidity.BR_SPCFC_TX_GRP_DYN_TAX_EXCEPTIONS,
    SlsPrcgCndnRecdValidity.CUSTOMER_TAX_CLASSIFICATION_1,
    SlsPrcgCndnRecdValidity.CUSTOMER_TAX_CLASSIFICATION_2,
    SlsPrcgCndnRecdValidity.CUSTOMER_TAX_CLASSIFICATION_3,
    SlsPrcgCndnRecdValidity.CUSTOMER_TAX_CLASSIFICATION_4,
    SlsPrcgCndnRecdValidity.CUSTOMER_TAX_CLASSIFICATION_5,
    SlsPrcgCndnRecdValidity.CUSTOMER_TAX_CLASSIFICATION_6,
    SlsPrcgCndnRecdValidity.CUSTOMER_TAX_CLASSIFICATION_7,
    SlsPrcgCndnRecdValidity.CUSTOMER_TAX_CLASSIFICATION_8,
    SlsPrcgCndnRecdValidity.CUSTOMER_TAX_CLASSIFICATION_9,
    SlsPrcgCndnRecdValidity.PRODUCT_TAX_CLASSIFICATION_1,
    SlsPrcgCndnRecdValidity.PRODUCT_TAX_CLASSIFICATION_2,
    SlsPrcgCndnRecdValidity.PRODUCT_TAX_CLASSIFICATION_3,
    SlsPrcgCndnRecdValidity.PRODUCT_TAX_CLASSIFICATION_4,
    SlsPrcgCndnRecdValidity.PRODUCT_TAX_CLASSIFICATION_5,
    SlsPrcgCndnRecdValidity.PRODUCT_TAX_CLASSIFICATION_6,
    SlsPrcgCndnRecdValidity.PRODUCT_TAX_CLASSIFICATION_7,
    SlsPrcgCndnRecdValidity.PRODUCT_TAX_CLASSIFICATION_8,
    SlsPrcgCndnRecdValidity.PRODUCT_TAX_CLASSIFICATION_9,
    SlsPrcgCndnRecdValidity.TRADING_CONTRACT,
    SlsPrcgCndnRecdValidity.TRADING_CONTRACT_ITEM,
    SlsPrcgCndnRecdValidity.TAX_JURISDICTION,
    SlsPrcgCndnRecdValidity.BR_SPCFC_TAX_DEPARTURE_REGION,
    SlsPrcgCndnRecdValidity.BR_SPCFC_TAX_DESTINATION_REGION,
    SlsPrcgCndnRecdValidity.MAIN_ITEM_MATERIAL_PRICING_GROUP,
    SlsPrcgCndnRecdValidity.MAIN_ITEM_PRICING_REF_MATERIAL,
    SlsPrcgCndnRecdValidity.VARIANT_CONDITION,
    SlsPrcgCndnRecdValidity.VALUE_ADDED_SERVICE_CHARGE_CODE,
    SlsPrcgCndnRecdValidity.SD_DOCUMENT,
    SlsPrcgCndnRecdValidity.REFERENCE_SD_DOCUMENT,
    SlsPrcgCndnRecdValidity.REFERENCE_SD_DOCUMENT_ITEM,
    SlsPrcgCndnRecdValidity.SALES_OFFICE,
    SlsPrcgCndnRecdValidity.SALES_GROUP,
    SlsPrcgCndnRecdValidity.SALES_ORGANIZATION,
    SlsPrcgCndnRecdValidity.SALES_ORDER_SALES_ORGANIZATION,
    SlsPrcgCndnRecdValidity.ORDER_QUANTITY_UNIT,
    SlsPrcgCndnRecdValidity.DISTRIBUTION_CHANNEL,
    SlsPrcgCndnRecdValidity.TRANSACTION_CURRENCY,
    SlsPrcgCndnRecdValidity.WBS_ELEMENT_INTERNAL_ID,
    SlsPrcgCndnRecdValidity.WBS_ELEMENT_EXTERNAL_ID,
    SlsPrcgCndnRecdValidity.WORK_PACKAGE,
    SlsPrcgCndnRecdValidity.PLANT,
    SlsPrcgCndnRecdValidity.PLANT_REGION,
    SlsPrcgCndnRecdValidity.WORK_ITEM,
    SlsPrcgCndnRecdValidity.CONDITION_PROCESSING_STATUS,
    SlsPrcgCndnRecdValidity.PRICING_DATE,
    SlsPrcgCndnRecdValidity.CONDITION_IS_EXCLUSIVE,
    SlsPrcgCndnRecdValidity.CONDITION_SCALE_BASIS_VALUE,
    SlsPrcgCndnRecdValidity.TAX_CODE,
    SlsPrcgCndnRecdValidity.SERVICE_DOCUMENT,
    SlsPrcgCndnRecdValidity.SERVICE_DOCUMENT_ITEM,
    SlsPrcgCndnRecdValidity.TIME_SHEET_OVERTIME_CATEGORY,
    SlsPrcgCndnRecdValidity.SALES_SD_DOCUMENT_CATEGORY,
    SlsPrcgCndnRecdValidity.RETURN_REASON,
    SlsPrcgCndnRecdValidity.PROD_UNIV_HIERARCHY_NODE,
    SlsPrcgCndnRecdValidity.PRODUCT_HIERARCHY_NODE,
    SlsPrcgCndnRecdValidity.CUSTOMER_CONDITION_GROUP,
    SlsPrcgCndnRecdValidity.SHIPPING_TYPE,
    SlsPrcgCndnRecdValidity.SUBSCRIPTION_CONTRACT_DURATION,
    SlsPrcgCndnRecdValidity.SUBSCRPN_CONTR_DURATION_UNIT,
    SlsPrcgCndnRecdValidity.SUBSCRIPTION_CONTRACT_LOCK_REASON,
    SlsPrcgCndnRecdValidity.CRS_CTLG_MAPPG_PRICE_VERSION_NUMBER,
    SlsPrcgCndnRecdValidity.ORDER_TYPE,
    SlsPrcgCndnRecdValidity.SALES_DOCUMENT_TYPE,
    SlsPrcgCndnRecdValidity.SD_DOCUMENT_REASON,
    SlsPrcgCndnRecdValidity.VOLUME_REBATE_GROUP,
    SlsPrcgCndnRecdValidity.VALUATION_TYPE,
    SlsPrcgCndnRecdValidity.SALES_DISTRICT,
    SlsPrcgCndnRecdValidity.BATCH,
    SlsPrcgCndnRecdValidity.PURG_DOC_SUPPLYING_PLANT,
    SlsPrcgCndnRecdValidity.MAT_USAGE_INDICATOR,
    SlsPrcgCndnRecdValidity.SHIPPING_CONDITION,
    SlsPrcgCndnRecdValidity.PLANT_COUNTY,
    SlsPrcgCndnRecdValidity.PLANT_CITY,
    SlsPrcgCndnRecdValidity.MATERIAL_EXTERNAL_GROUP,
    SlsPrcgCndnRecdValidity.CUSTOMER_HIERARCHY_ROOT_NODE,
    SlsPrcgCndnRecdValidity.CUSTOMER_HIERARCHY_NODE_ID,
    SlsPrcgCndnRecdValidity.CUSTOMER_HIERARCHY_NODE_TYPE,
    SlsPrcgCndnRecdValidity.ADDITIONAL_CUSTOMER_GROUP_1,
    SlsPrcgCndnRecdValidity.ADDITIONAL_CUSTOMER_GROUP_2,
    SlsPrcgCndnRecdValidity.ADDITIONAL_CUSTOMER_GROUP_3,
    SlsPrcgCndnRecdValidity.ADDITIONAL_CUSTOMER_GROUP_4,
    SlsPrcgCndnRecdValidity.ADDITIONAL_CUSTOMER_GROUP_5,
    SlsPrcgCndnRecdValidity.SD_DOCUMENT_ITEM,
    SlsPrcgCndnRecdValidity.CNDN_BILLING_DOCUMENT_CATEGORY,
    SlsPrcgCndnRecdValidity.COUNTRY,
    SlsPrcgCndnRecdValidity.PRA_CONTRACT,
    SlsPrcgCndnRecdValidity.WELL,
    SlsPrcgCndnRecdValidity.WELL_COMPLETION,
    SlsPrcgCndnRecdValidity.MEASUREMENT_POINT,
    SlsPrcgCndnRecdValidity.PRICING_FORMULA_NUMBER,
    SlsPrcgCndnRecdValidity.E_TAG,
    SlsPrcgCndnRecdValidity.TO_SLS_PRCG_CNDN_RECD_SUPLMNT,
    SlsPrcgCndnRecdValidity.TO_SLS_PRCG_CONDITION_RECORD
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<SlsPrcgCndnRecdValidity> = new AllFields('*', SlsPrcgCndnRecdValidity);
  /**
   * All key fields of the SlsPrcgCndnRecdValidity entity.
   */
  export const _keyFields: Array<Field<SlsPrcgCndnRecdValidity, boolean, boolean>> = [SlsPrcgCndnRecdValidity.CONDITION_RECORD, SlsPrcgCndnRecdValidity.CONDITION_VALIDITY_END_DATE];
  /**
   * Mapping of all key field names to the respective static field property SlsPrcgCndnRecdValidity.
   */
  export const _keys: { [keys: string]: Field<SlsPrcgCndnRecdValidity, boolean, boolean> } = SlsPrcgCndnRecdValidity._keyFields.reduce((acc: { [keys: string]: Field<SlsPrcgCndnRecdValidity, boolean, boolean> }, field: Field<SlsPrcgCndnRecdValidity, boolean, boolean>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
