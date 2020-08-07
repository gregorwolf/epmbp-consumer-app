/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SupplierPurchasingOrgRequestBuilder } from './SupplierPurchasingOrgRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, Entity, EntityBuilderType, Field, Link, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "A_SupplierPurchasingOrg" of service "API_BUSINESS_PARTNER".
 */
export class SupplierPurchasingOrg extends Entity implements SupplierPurchasingOrgType {
  /**
   * Technical entity name for SupplierPurchasingOrg.
   */
  static _entityName = 'A_SupplierPurchasingOrg';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for SupplierPurchasingOrg.
   */
  static _serviceName = 'API_BUSINESS_PARTNER';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
  /**
   * Account Number of the Vendor.
   * Alphanumeric key uniquely identifying the document.
   * With the supplier number, information from the supplier master record (such as the supplier's address and bank details) is copied into a purchasing document (such as a request for quotation or a purchase order).You can use the supplier number to keep track of requests for quotation, purchase orders and outline agreements.
   * Maximum length: 10.
   */
  supplier!: string;
  /**
   * Purchasing Organization.
   * Denotes the purchasing organization.
   * Maximum length: 4.
   */
  purchasingOrganization!: string;
  /**
   * Group for Calculation Schema (Supplier).
   * Determines which calculation schema (pricing procedure) is to be used in purchasing documents containing this supplier number.
   * You can use the schema group to specify the calculation schema per purchasing organization or supplier. The relevant calculation schema is determined by reference to the schema group.The effect of this is that the conditions to be maintained in a purchasing document can differ depending on the relevant purchasing organization or supplier.If a calculation schema is only to be valid for certain purchasing organizations or suppliers, proceed as follows:Define the schema group for the purchasing organization or the supplier using the relevant function in the menu "Calculation schema -&gt; Schema groups".Assign the schema group to the calculation schema via "Calculation schema -&gt; Determine schema".Enter the schema group for the supplier in the supplier master records to which the calculation schema is to be assigned. Assign the schema group of the purchasing organization to the relevant purchasing organization using "Calculation schema -&gt; Schema group -&gt; Assign to purch. org.".
   * Maximum length: 2.
   * @nullable
   */
  calculationSchemaGroupCode?: string;
  /**
   * Deletion Indicator for Supplier at Purchasing Level.
   * Indicates whether or not the supplier master record is earmarked for deletion.
   * @nullable
   */
  deletionIndicator?: boolean;
  /**
   * Incoterms (Part 1).
   * Commonly used trading terms that comply with the standards established by the International Chamber of Commerce (ICC).
   * Incoterms specify internationally recognized procedures that the shipper and the receiving party must follow for the shipping transaction to be completed successfully.If goods are shipped through a port of departure, the appropriate Incoterm might be: FOB ("Free On Board"). You can provide further details (for example, the name of the port) in the secondary Incoterm field: FOB Boston, for example.
   * Maximum length: 3.
   * @nullable
   */
  incotermsClassification?: string;
  /**
   * Incoterms (Part 2).
   * Additional information for the primary Incoterm.
   * If the primary Incoterm is, for example, FOB ("Free on Board"), then the second field provides details of the port from which the delivery leaves (for example, "FOB Boston").
   * Maximum length: 28.
   * @nullable
   */
  incotermsTransferLocation?: string;
  /**
   * Incoterms Version.
   * An incoterms version is an edition containing a list of international terms for transportation that is defined by the International Chamber of Commerce (ICC).
   * Maximum length: 4.
   * @nullable
   */
  incotermsVersion?: string;
  /**
   * Incoterms Location 1.
   * Provides additional information for the primary Incoterm. For Incoterms 2010, this field represents:
   * 1. For sea and inland waterway transport - Port of Shipment2. For any mode of transport - Place of Delivery 2010Incoterms are divided as follows:Group 1: Rules for any mode or modes of transport (including by vessel)Incoterms Incoterms Description  Location 1 EXW Ex Works  Place of DeliveryFCA Free Carrier  Place of DeliveryCPT Carriage Paid To  Place of DestinationCIP Carriage &amp; Insurance Paid To  Place of DestinationDAF Delivered at Frontier  Place of DeliveryDDP Delivered Duty Paid  Place of DestinationDDU Delivered Duty Unpaid  Place of DestinationGroup 2: Rules for sea and inland waterwaysIncoterms Incoterms Description Location 1 FAS Free Alongside Ship Port of ShipmentFOB Free On Board Port of ShipmentCFR Cost &amp; Freight Port of DestinationCIF Cost Insurance &amp; Freight Port of DestinationDEQ Delivered Eq Quay (Duty Paid) Port of DestinationDES Delivered Ex Ship Port of DestinationIf the primary incoterm is specified as FOB “Free on Board”, the second field provides details of the port from which the delivery leaves, such as FOB Boston.
   * Maximum length: 70.
   * @nullable
   */
  incotermsLocation1?: string;
  /**
   * Incoterms Location 2.
   * Provides additional information for the Incoterms. This field is only available for C-Clauses (if customized appropriately). Note the following for the incoterms versions below:
   * No Version:This field is disabledIncoterm Version 2000This field is disabled as part of standard delivery unless a customer decides to enable it by the way of Customizing for Sales and Distribution under Master Data -&gt; Business Partners -&gt; Customers -&gt; Billing Document -&gt; Incoterms -&gt; Map Incoterms to Versions.Incoterm Version 2010For this version, the field represents:Sea and inland waterway transport - Port of DestinationAny mode of transport - Place of Destination2010 Incoterms are divided as follows:Group 1: Rules for any mode or modes of transport (including by vessel)Incoterms Incoterms Description Location 2CPT Carriage Paid To Place of DestinationCIP Carriage &amp; Insurance Paid To Place of DestinationGroup 2: Rules for sea and inland waterwaysIncoterms Incoterms Description Location 2CFR Cost &amp; Freight Port of DestinationCIF Cost Insurance &amp; Freight Port of Destination.
   * Maximum length: 70.
   * @nullable
   */
  incotermsLocation2?: string;
  /**
   * Indicator: GR-Based Invoice Verification.
   * Indicator specifying that provision has been made for goods-receipt-based invoice verification for a purchase order item or invoice item.
   * @nullable
   */
  invoiceIsGoodsReceiptBased?: boolean;
  /**
   * Planned Delivery Time in Days.
   * Number of calendar days needed to obtain the material or service if it is procured externally.
   * If you have different vendors for a material, you must specify an average value. The same applies if you order the material from a fixed vendor that has varying delivery times.If you use the SAP Retail System, the planned delivery time can be suggested from the vendor sub-range in the vendor master record.
   * @nullable
   */
  materialPlannedDeliveryDurn?: BigNumber;
  /**
   * Minimum order value.
   * Minimum value specified for purchase orders issued to the relevant supplier.
   * @nullable
   */
  minimumOrderAmount?: BigNumber;
  /**
   * Terms of Payment Key.
   * Key for defining payment terms composed of cash discount percentages and payment periods.
   * It is used in sales orders, purchase orders, and invoices. Terms of payment provide information for:Cash managementDunning proceduresPayment transactionsData can be entered in the field for the terms of payment key in various ways as you enter a business transaction:In most business transactions, the system defaults the key specified in the master record of the customer/vendor in question.In some transactions (for example, credit memos), however, the system does not default the key from the master record. Despite this, you can use the key from the customer/vendor master record by entering "*" in the field.Regardless of whether or not a key is defaulted from the master record, you can manually enter a key during document entry at:item level in sales ordersheader level in purchase orders and invoicesMaster records have separate areas for Financial Accounting, Sales, and Purchasing. You can specify different terms of payment keys in each of these areas. When you then enter a business transaction, the application in question will use the key specified in its area of the master record.
   * Maximum length: 4.
   * @nullable
   */
  paymentTerms?: string;
  /**
   * Price Determination (Pricing) Date Control.
   * Determines which date is to be used for price determination (pricing) purposes.
   * Enter the key for the desired date.If you choose the date of goods receipt, for example, a new price will be determined upon the arrival of the goods, causing the item to be revaluated at this time.NoteIf you have chosen the delivery date as the date for price determination and an item contains several delivery dates (i.e. has a delivery schedule), the first delivery date (the delivery date specified in the first schedule line) is taken.
   * Maximum length: 1.
   * @nullable
   */
  pricingDateControl?: string;
  /**
   * Automatic Generation of Purchase Order Allowed.
   * Allows you to automatically generate purchase orders from purchase requisitions if the requisition has been assigned to a supplier (source of supply).
   * If you want to use automatic conversion, note the following additional conditions:In the case of purchase requisitions for materials, you should also select the indicator Autom.purch.ord. in the Purchasing view in the material master record.In the case of purchase requisitions for services, you should also select the indicator Automatic creation of POs for service PReqs in Customizing for Services by choosing:IMG -&gt; MM -&gt; External Services Management -&gt; Source Determination and Default Values- for Client or- for Purchasing Organization.
   * @nullable
   */
  purOrdAutoGenerationIsAllowed?: boolean;
  /**
   * Purchase order currency.
   * Key for the currency on which an order placed with a supplier is based.
   * Maximum length: 5.
   * @nullable
   */
  purchaseOrderCurrency?: string;
  /**
   * Purchasing Group.
   * Key for a buyer or a group of buyers, who is/are responsible for certain purchasing activities.
   * Internally, the purchasing group is responsible for the procurement of a material or a class of materials.Externally, it is the medium through which contacts with the vendor are maintained.
   * Maximum length: 3.
   * @nullable
   */
  purchasingGroup?: string;
  /**
   * Purchasing block at purchasing organization level.
   * Indicates whether or not the supplier master record is blocked for the purchasing organization for posting purposes.
   * @nullable
   */
  purchasingIsBlockedForSupplier?: boolean;
  /**
   * Shipping Conditions.
   * General shipping strategy for the delivery of goods from the vendor to the customer.
   * You can define shipping conditions in your system which correspond to the requirements of your company. You can specify a shipping condition in the customer master and in the vendor master.Shipping point determination (outbound delivery):The loading group, the plant and the shipping condition determine the shipping point that will be proposed by the system.Route determination (outbound delivery):Apart from the country and the geographical region of the shipping point, the ship-to party and the transportation group, the shipping condition determines the route that the system proposes in the order for the delivery of the goods. In the delivery, the route proposal also takes the weight group into account.A particular customer always requires immediate delivery. You enter the appropriate shipping condition into the customer master record. This means that when you process orders for this customer, the system automatically proposes the express mail room as a shipping point and the quickest way to the airport as a route.If a shipping condition has been assigned to a sales document type in Customizing, this condition will be proposed by the system in the corresponding sales document. If there is no assignment, the system copies the relevant data from the corresponding customer master record of the sold-to party. You cannot change this value during delivery processing. The shipping condition will not be copied from the delivery into the shipment. The shipping condition is one of several criteria for selecting deliveries when you create a shipment. You can enter a shipping condition manually in the shipment where it only serves as a characteristic for grouping shipments.
   * Maximum length: 2.
   * @nullable
   */
  shippingCondition?: string;
  /**
   * ABC indicator.
   * Means of classifying suppliers according to their significance to your company.
   * The indicator serves to assign the supplier to one of the categories A, B or C, in accordance with ABC analysis.'A' category suppliers, for instance, are those accounting for the greatest share of the company's total annual spend (in value terms).
   * Maximum length: 1.
   * @nullable
   */
  supplierAbcClassificationCode?: string;
  /**
   * Supplier's Telephone Number.
   * This telephone number is maintained in the supplier master record and adopted in the purchasing document.
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
   * Determines which confirmation categories are expected for a PO item (e.g. order acknowledgment, shipping notification).
   * Maximum length: 4.
   * @nullable
   */
  supplierConfirmationControlKey?: string;
  /**
   * Order Acknowledgment Requirement.
   * Determines whether the purchasing document (purchase order, outline purchase agreement, etc.) is to be acknowledged by the supplier.
   * @nullable
   */
  isOrderAcknRqd?: boolean;
  /**
   * Authorization Group.
   * The authorization group allows extended authorization protection for particular objects. The authorization groups are freely definable. The authorization groups usually occur in authorization objects together with an activity.
   * Maximum length: 4.
   * @nullable
   */
  authorizationGroup?: string;
  /**
   * Supplier Account Group.
   * The account group is a classifying feature within vendor master records. The account group determines:
   * the number interval for the account number of the vendor,whether the number is assigned by the user or by the system,which specifications are necessary and/or possible in the master record.
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
   * Returns an entity builder to construct instances `SupplierPurchasingOrg`.
   * @returns A builder that constructs instances of entity type `SupplierPurchasingOrg`.
   */
  static builder(): EntityBuilderType<SupplierPurchasingOrg, SupplierPurchasingOrgTypeForceMandatory> {
    return Entity.entityBuilder(SupplierPurchasingOrg);
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
  static customField(fieldName: string): CustomField<SupplierPurchasingOrg> {
    return Entity.customFieldSelector(fieldName, SupplierPurchasingOrg);
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
  calculationSchemaGroupCode?: string;
  deletionIndicator?: boolean;
  incotermsClassification?: string;
  incotermsTransferLocation?: string;
  incotermsVersion?: string;
  incotermsLocation1?: string;
  incotermsLocation2?: string;
  invoiceIsGoodsReceiptBased?: boolean;
  materialPlannedDeliveryDurn?: BigNumber;
  minimumOrderAmount?: BigNumber;
  paymentTerms?: string;
  pricingDateControl?: string;
  purOrdAutoGenerationIsAllowed?: boolean;
  purchaseOrderCurrency?: string;
  purchasingGroup?: string;
  purchasingIsBlockedForSupplier?: boolean;
  shippingCondition?: string;
  supplierAbcClassificationCode?: string;
  supplierPhoneNumber?: string;
  supplierRespSalesPersonName?: string;
  supplierConfirmationControlKey?: string;
  isOrderAcknRqd?: boolean;
  authorizationGroup?: string;
  supplierAccountGroup?: string;
  toPartnerFunction: SupplierPartnerFuncType[];
  toPurchasingOrgText: SupplierPurchasingOrgTextType[];
}

export interface SupplierPurchasingOrgTypeForceMandatory {
  supplier: string;
  purchasingOrganization: string;
  calculationSchemaGroupCode: string;
  deletionIndicator: boolean;
  incotermsClassification: string;
  incotermsTransferLocation: string;
  incotermsVersion: string;
  incotermsLocation1: string;
  incotermsLocation2: string;
  invoiceIsGoodsReceiptBased: boolean;
  materialPlannedDeliveryDurn: BigNumber;
  minimumOrderAmount: BigNumber;
  paymentTerms: string;
  pricingDateControl: string;
  purOrdAutoGenerationIsAllowed: boolean;
  purchaseOrderCurrency: string;
  purchasingGroup: string;
  purchasingIsBlockedForSupplier: boolean;
  shippingCondition: string;
  supplierAbcClassificationCode: string;
  supplierPhoneNumber: string;
  supplierRespSalesPersonName: string;
  supplierConfirmationControlKey: string;
  isOrderAcknRqd: boolean;
  authorizationGroup: string;
  supplierAccountGroup: string;
  toPartnerFunction: SupplierPartnerFuncType[];
  toPurchasingOrgText: SupplierPurchasingOrgTextType[];
}

export namespace SupplierPurchasingOrg {
  /**
   * Static representation of the [[supplier]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPPLIER: StringField<SupplierPurchasingOrg> = new StringField('Supplier', SupplierPurchasingOrg, 'Edm.String');
  /**
   * Static representation of the [[purchasingOrganization]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASING_ORGANIZATION: StringField<SupplierPurchasingOrg> = new StringField('PurchasingOrganization', SupplierPurchasingOrg, 'Edm.String');
  /**
   * Static representation of the [[calculationSchemaGroupCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CALCULATION_SCHEMA_GROUP_CODE: StringField<SupplierPurchasingOrg> = new StringField('CalculationSchemaGroupCode', SupplierPurchasingOrg, 'Edm.String');
  /**
   * Static representation of the [[deletionIndicator]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DELETION_INDICATOR: BooleanField<SupplierPurchasingOrg> = new BooleanField('DeletionIndicator', SupplierPurchasingOrg, 'Edm.Boolean');
  /**
   * Static representation of the [[incotermsClassification]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INCOTERMS_CLASSIFICATION: StringField<SupplierPurchasingOrg> = new StringField('IncotermsClassification', SupplierPurchasingOrg, 'Edm.String');
  /**
   * Static representation of the [[incotermsTransferLocation]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INCOTERMS_TRANSFER_LOCATION: StringField<SupplierPurchasingOrg> = new StringField('IncotermsTransferLocation', SupplierPurchasingOrg, 'Edm.String');
  /**
   * Static representation of the [[incotermsVersion]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INCOTERMS_VERSION: StringField<SupplierPurchasingOrg> = new StringField('IncotermsVersion', SupplierPurchasingOrg, 'Edm.String');
  /**
   * Static representation of the [[incotermsLocation1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INCOTERMS_LOCATION_1: StringField<SupplierPurchasingOrg> = new StringField('IncotermsLocation1', SupplierPurchasingOrg, 'Edm.String');
  /**
   * Static representation of the [[incotermsLocation2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INCOTERMS_LOCATION_2: StringField<SupplierPurchasingOrg> = new StringField('IncotermsLocation2', SupplierPurchasingOrg, 'Edm.String');
  /**
   * Static representation of the [[invoiceIsGoodsReceiptBased]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INVOICE_IS_GOODS_RECEIPT_BASED: BooleanField<SupplierPurchasingOrg> = new BooleanField('InvoiceIsGoodsReceiptBased', SupplierPurchasingOrg, 'Edm.Boolean');
  /**
   * Static representation of the [[materialPlannedDeliveryDurn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MATERIAL_PLANNED_DELIVERY_DURN: BigNumberField<SupplierPurchasingOrg> = new BigNumberField('MaterialPlannedDeliveryDurn', SupplierPurchasingOrg, 'Edm.Decimal');
  /**
   * Static representation of the [[minimumOrderAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MINIMUM_ORDER_AMOUNT: BigNumberField<SupplierPurchasingOrg> = new BigNumberField('MinimumOrderAmount', SupplierPurchasingOrg, 'Edm.Decimal');
  /**
   * Static representation of the [[paymentTerms]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_TERMS: StringField<SupplierPurchasingOrg> = new StringField('PaymentTerms', SupplierPurchasingOrg, 'Edm.String');
  /**
   * Static representation of the [[pricingDateControl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRICING_DATE_CONTROL: StringField<SupplierPurchasingOrg> = new StringField('PricingDateControl', SupplierPurchasingOrg, 'Edm.String');
  /**
   * Static representation of the [[purOrdAutoGenerationIsAllowed]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PUR_ORD_AUTO_GENERATION_IS_ALLOWED: BooleanField<SupplierPurchasingOrg> = new BooleanField('PurOrdAutoGenerationIsAllowed', SupplierPurchasingOrg, 'Edm.Boolean');
  /**
   * Static representation of the [[purchaseOrderCurrency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASE_ORDER_CURRENCY: StringField<SupplierPurchasingOrg> = new StringField('PurchaseOrderCurrency', SupplierPurchasingOrg, 'Edm.String');
  /**
   * Static representation of the [[purchasingGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASING_GROUP: StringField<SupplierPurchasingOrg> = new StringField('PurchasingGroup', SupplierPurchasingOrg, 'Edm.String');
  /**
   * Static representation of the [[purchasingIsBlockedForSupplier]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASING_IS_BLOCKED_FOR_SUPPLIER: BooleanField<SupplierPurchasingOrg> = new BooleanField('PurchasingIsBlockedForSupplier', SupplierPurchasingOrg, 'Edm.Boolean');
  /**
   * Static representation of the [[shippingCondition]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SHIPPING_CONDITION: StringField<SupplierPurchasingOrg> = new StringField('ShippingCondition', SupplierPurchasingOrg, 'Edm.String');
  /**
   * Static representation of the [[supplierAbcClassificationCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPPLIER_ABC_CLASSIFICATION_CODE: StringField<SupplierPurchasingOrg> = new StringField('SupplierABCClassificationCode', SupplierPurchasingOrg, 'Edm.String');
  /**
   * Static representation of the [[supplierPhoneNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPPLIER_PHONE_NUMBER: StringField<SupplierPurchasingOrg> = new StringField('SupplierPhoneNumber', SupplierPurchasingOrg, 'Edm.String');
  /**
   * Static representation of the [[supplierRespSalesPersonName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPPLIER_RESP_SALES_PERSON_NAME: StringField<SupplierPurchasingOrg> = new StringField('SupplierRespSalesPersonName', SupplierPurchasingOrg, 'Edm.String');
  /**
   * Static representation of the [[supplierConfirmationControlKey]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPPLIER_CONFIRMATION_CONTROL_KEY: StringField<SupplierPurchasingOrg> = new StringField('SupplierConfirmationControlKey', SupplierPurchasingOrg, 'Edm.String');
  /**
   * Static representation of the [[isOrderAcknRqd]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_ORDER_ACKN_RQD: BooleanField<SupplierPurchasingOrg> = new BooleanField('IsOrderAcknRqd', SupplierPurchasingOrg, 'Edm.Boolean');
  /**
   * Static representation of the [[authorizationGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AUTHORIZATION_GROUP: StringField<SupplierPurchasingOrg> = new StringField('AuthorizationGroup', SupplierPurchasingOrg, 'Edm.String');
  /**
   * Static representation of the [[supplierAccountGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPPLIER_ACCOUNT_GROUP: StringField<SupplierPurchasingOrg> = new StringField('SupplierAccountGroup', SupplierPurchasingOrg, 'Edm.String');
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
  export const _allFields: Array<StringField<SupplierPurchasingOrg> | BooleanField<SupplierPurchasingOrg> | BigNumberField<SupplierPurchasingOrg> | Link<SupplierPurchasingOrg, SupplierPartnerFunc> | Link<SupplierPurchasingOrg, SupplierPurchasingOrgText>> = [
    SupplierPurchasingOrg.SUPPLIER,
    SupplierPurchasingOrg.PURCHASING_ORGANIZATION,
    SupplierPurchasingOrg.CALCULATION_SCHEMA_GROUP_CODE,
    SupplierPurchasingOrg.DELETION_INDICATOR,
    SupplierPurchasingOrg.INCOTERMS_CLASSIFICATION,
    SupplierPurchasingOrg.INCOTERMS_TRANSFER_LOCATION,
    SupplierPurchasingOrg.INCOTERMS_VERSION,
    SupplierPurchasingOrg.INCOTERMS_LOCATION_1,
    SupplierPurchasingOrg.INCOTERMS_LOCATION_2,
    SupplierPurchasingOrg.INVOICE_IS_GOODS_RECEIPT_BASED,
    SupplierPurchasingOrg.MATERIAL_PLANNED_DELIVERY_DURN,
    SupplierPurchasingOrg.MINIMUM_ORDER_AMOUNT,
    SupplierPurchasingOrg.PAYMENT_TERMS,
    SupplierPurchasingOrg.PRICING_DATE_CONTROL,
    SupplierPurchasingOrg.PUR_ORD_AUTO_GENERATION_IS_ALLOWED,
    SupplierPurchasingOrg.PURCHASE_ORDER_CURRENCY,
    SupplierPurchasingOrg.PURCHASING_GROUP,
    SupplierPurchasingOrg.PURCHASING_IS_BLOCKED_FOR_SUPPLIER,
    SupplierPurchasingOrg.SHIPPING_CONDITION,
    SupplierPurchasingOrg.SUPPLIER_ABC_CLASSIFICATION_CODE,
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
  export const _keyFields: Array<Field<SupplierPurchasingOrg>> = [SupplierPurchasingOrg.SUPPLIER, SupplierPurchasingOrg.PURCHASING_ORGANIZATION];
  /**
   * Mapping of all key field names to the respective static field property SupplierPurchasingOrg.
   */
  export const _keys: { [keys: string]: Field<SupplierPurchasingOrg> } = SupplierPurchasingOrg._keyFields.reduce((acc: { [keys: string]: Field<SupplierPurchasingOrg> }, field: Field<SupplierPurchasingOrg>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
