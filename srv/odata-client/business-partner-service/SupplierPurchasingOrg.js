"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplierPurchasingOrg = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var SupplierPurchasingOrgRequestBuilder_1 = require("./SupplierPurchasingOrgRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "A_SupplierPurchasingOrg" of service "API_BUSINESS_PARTNER".
 */
var SupplierPurchasingOrg = /** @class */ (function (_super) {
    __extends(SupplierPurchasingOrg, _super);
    function SupplierPurchasingOrg() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `SupplierPurchasingOrg`.
     * @returns A builder that constructs instances of entity type `SupplierPurchasingOrg`.
     */
    SupplierPurchasingOrg.builder = function () {
        return core_1.EntityV2.entityBuilder(SupplierPurchasingOrg);
    };
    /**
     * Returns a request builder to construct requests for operations on the `SupplierPurchasingOrg` entity type.
     * @returns A `SupplierPurchasingOrg` request builder.
     */
    SupplierPurchasingOrg.requestBuilder = function () {
        return new SupplierPurchasingOrgRequestBuilder_1.SupplierPurchasingOrgRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SupplierPurchasingOrg`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SupplierPurchasingOrg`.
     */
    SupplierPurchasingOrg.customField = function (fieldName) {
        return core_1.EntityV2.customFieldSelector(fieldName, SupplierPurchasingOrg);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    SupplierPurchasingOrg.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for SupplierPurchasingOrg.
     */
    SupplierPurchasingOrg._entityName = 'A_SupplierPurchasingOrg';
    /**
     * Default url path for the according service.
     */
    SupplierPurchasingOrg._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
    return SupplierPurchasingOrg;
}(core_1.EntityV2));
exports.SupplierPurchasingOrg = SupplierPurchasingOrg;
var SupplierPartnerFunc_1 = require("./SupplierPartnerFunc");
var SupplierPurchasingOrgText_1 = require("./SupplierPurchasingOrgText");
(function (SupplierPurchasingOrg) {
    var _fieldBuilder = new core_1.FieldBuilder(SupplierPurchasingOrg);
    /**
     * Static representation of the [[supplier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierPurchasingOrg.SUPPLIER = _fieldBuilder.buildEdmTypeField('Supplier', 'Edm.String', false);
    /**
     * Static representation of the [[purchasingOrganization]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierPurchasingOrg.PURCHASING_ORGANIZATION = _fieldBuilder.buildEdmTypeField('PurchasingOrganization', 'Edm.String', false);
    /**
     * Static representation of the [[automaticEvaluatedRcptSettlmt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierPurchasingOrg.AUTOMATIC_EVALUATED_RCPT_SETTLMT = _fieldBuilder.buildEdmTypeField('AutomaticEvaluatedRcptSettlmt', 'Edm.Boolean', true);
    /**
     * Static representation of the [[calculationSchemaGroupCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierPurchasingOrg.CALCULATION_SCHEMA_GROUP_CODE = _fieldBuilder.buildEdmTypeField('CalculationSchemaGroupCode', 'Edm.String', true);
    /**
     * Static representation of the [[deletionIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierPurchasingOrg.DELETION_INDICATOR = _fieldBuilder.buildEdmTypeField('DeletionIndicator', 'Edm.Boolean', true);
    /**
     * Static representation of the [[evaldReceiptSettlementIsActive]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierPurchasingOrg.EVALD_RECEIPT_SETTLEMENT_IS_ACTIVE = _fieldBuilder.buildEdmTypeField('EvaldReceiptSettlementIsActive', 'Edm.Boolean', true);
    /**
     * Static representation of the [[incotermsClassification]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierPurchasingOrg.INCOTERMS_CLASSIFICATION = _fieldBuilder.buildEdmTypeField('IncotermsClassification', 'Edm.String', true);
    /**
     * Static representation of the [[incotermsTransferLocation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierPurchasingOrg.INCOTERMS_TRANSFER_LOCATION = _fieldBuilder.buildEdmTypeField('IncotermsTransferLocation', 'Edm.String', true);
    /**
     * Static representation of the [[incotermsVersion]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierPurchasingOrg.INCOTERMS_VERSION = _fieldBuilder.buildEdmTypeField('IncotermsVersion', 'Edm.String', true);
    /**
     * Static representation of the [[incotermsLocation1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierPurchasingOrg.INCOTERMS_LOCATION_1 = _fieldBuilder.buildEdmTypeField('IncotermsLocation1', 'Edm.String', true);
    /**
     * Static representation of the [[incotermsLocation2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierPurchasingOrg.INCOTERMS_LOCATION_2 = _fieldBuilder.buildEdmTypeField('IncotermsLocation2', 'Edm.String', true);
    /**
     * Static representation of the [[incotermsSupChnLoc1AddlUuid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierPurchasingOrg.INCOTERMS_SUP_CHN_LOC_1_ADDL_UUID = _fieldBuilder.buildEdmTypeField('IncotermsSupChnLoc1AddlUUID', 'Edm.Guid', true);
    /**
     * Static representation of the [[incotermsSupChnLoc2AddlUuid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierPurchasingOrg.INCOTERMS_SUP_CHN_LOC_2_ADDL_UUID = _fieldBuilder.buildEdmTypeField('IncotermsSupChnLoc2AddlUUID', 'Edm.Guid', true);
    /**
     * Static representation of the [[incotermsSupChnDvtgLocAddlUuid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierPurchasingOrg.INCOTERMS_SUP_CHN_DVTG_LOC_ADDL_UUID = _fieldBuilder.buildEdmTypeField('IncotermsSupChnDvtgLocAddlUUID', 'Edm.Guid', true);
    /**
     * Static representation of the [[intrastatCrsBorderTrMode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierPurchasingOrg.INTRASTAT_CRS_BORDER_TR_MODE = _fieldBuilder.buildEdmTypeField('IntrastatCrsBorderTrMode', 'Edm.String', true);
    /**
     * Static representation of the [[invoiceIsGoodsReceiptBased]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierPurchasingOrg.INVOICE_IS_GOODS_RECEIPT_BASED = _fieldBuilder.buildEdmTypeField('InvoiceIsGoodsReceiptBased', 'Edm.Boolean', true);
    /**
     * Static representation of the [[invoiceIsMmServiceEntryBased]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierPurchasingOrg.INVOICE_IS_MM_SERVICE_ENTRY_BASED = _fieldBuilder.buildEdmTypeField('InvoiceIsMMServiceEntryBased', 'Edm.Boolean', true);
    /**
     * Static representation of the [[materialPlannedDeliveryDurn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierPurchasingOrg.MATERIAL_PLANNED_DELIVERY_DURN = _fieldBuilder.buildEdmTypeField('MaterialPlannedDeliveryDurn', 'Edm.Decimal', true);
    /**
     * Static representation of the [[minimumOrderAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierPurchasingOrg.MINIMUM_ORDER_AMOUNT = _fieldBuilder.buildEdmTypeField('MinimumOrderAmount', 'Edm.Decimal', true);
    /**
     * Static representation of the [[paymentTerms]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierPurchasingOrg.PAYMENT_TERMS = _fieldBuilder.buildEdmTypeField('PaymentTerms', 'Edm.String', true);
    /**
     * Static representation of the [[planningCycle]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierPurchasingOrg.PLANNING_CYCLE = _fieldBuilder.buildEdmTypeField('PlanningCycle', 'Edm.String', true);
    /**
     * Static representation of the [[pricingDateControl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierPurchasingOrg.PRICING_DATE_CONTROL = _fieldBuilder.buildEdmTypeField('PricingDateControl', 'Edm.String', true);
    /**
     * Static representation of the [[prodStockAndSlsDataTransfPrfl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierPurchasingOrg.PROD_STOCK_AND_SLS_DATA_TRANSF_PRFL = _fieldBuilder.buildEdmTypeField('ProdStockAndSlsDataTransfPrfl', 'Edm.String', true);
    /**
     * Static representation of the [[productUnitGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierPurchasingOrg.PRODUCT_UNIT_GROUP = _fieldBuilder.buildEdmTypeField('ProductUnitGroup', 'Edm.String', true);
    /**
     * Static representation of the [[purOrdAutoGenerationIsAllowed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierPurchasingOrg.PUR_ORD_AUTO_GENERATION_IS_ALLOWED = _fieldBuilder.buildEdmTypeField('PurOrdAutoGenerationIsAllowed', 'Edm.Boolean', true);
    /**
     * Static representation of the [[purchaseOrderCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierPurchasingOrg.PURCHASE_ORDER_CURRENCY = _fieldBuilder.buildEdmTypeField('PurchaseOrderCurrency', 'Edm.String', true);
    /**
     * Static representation of the [[purchasingGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierPurchasingOrg.PURCHASING_GROUP = _fieldBuilder.buildEdmTypeField('PurchasingGroup', 'Edm.String', true);
    /**
     * Static representation of the [[purchasingIsBlockedForSupplier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierPurchasingOrg.PURCHASING_IS_BLOCKED_FOR_SUPPLIER = _fieldBuilder.buildEdmTypeField('PurchasingIsBlockedForSupplier', 'Edm.Boolean', true);
    /**
     * Static representation of the [[roundingProfile]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierPurchasingOrg.ROUNDING_PROFILE = _fieldBuilder.buildEdmTypeField('RoundingProfile', 'Edm.String', true);
    /**
     * Static representation of the [[shippingCondition]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierPurchasingOrg.SHIPPING_CONDITION = _fieldBuilder.buildEdmTypeField('ShippingCondition', 'Edm.String', true);
    /**
     * Static representation of the [[suplrDiscountInKindIsGranted]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierPurchasingOrg.SUPLR_DISCOUNT_IN_KIND_IS_GRANTED = _fieldBuilder.buildEdmTypeField('SuplrDiscountInKindIsGranted', 'Edm.Boolean', true);
    /**
     * Static representation of the [[suplrInvcRevalIsAllowed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierPurchasingOrg.SUPLR_INVC_REVAL_IS_ALLOWED = _fieldBuilder.buildEdmTypeField('SuplrInvcRevalIsAllowed', 'Edm.Boolean', true);
    /**
     * Static representation of the [[suplrIsRlvtForSettlmtMgmt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierPurchasingOrg.SUPLR_IS_RLVT_FOR_SETTLMT_MGMT = _fieldBuilder.buildEdmTypeField('SuplrIsRlvtForSettlmtMgmt', 'Edm.Boolean', true);
    /**
     * Static representation of the [[suplrPurgOrgIsRlvtForPriceDetn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierPurchasingOrg.SUPLR_PURG_ORG_IS_RLVT_FOR_PRICE_DETN = _fieldBuilder.buildEdmTypeField('SuplrPurgOrgIsRlvtForPriceDetn', 'Edm.Boolean', true);
    /**
     * Static representation of the [[supplierAbcClassificationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierPurchasingOrg.SUPPLIER_ABC_CLASSIFICATION_CODE = _fieldBuilder.buildEdmTypeField('SupplierABCClassificationCode', 'Edm.String', true);
    /**
     * Static representation of the [[supplierAccountNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierPurchasingOrg.SUPPLIER_ACCOUNT_NUMBER = _fieldBuilder.buildEdmTypeField('SupplierAccountNumber', 'Edm.String', true);
    /**
     * Static representation of the [[supplierIsReturnsSupplier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierPurchasingOrg.SUPPLIER_IS_RETURNS_SUPPLIER = _fieldBuilder.buildEdmTypeField('SupplierIsReturnsSupplier', 'Edm.Boolean', true);
    /**
     * Static representation of the [[supplierPhoneNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierPurchasingOrg.SUPPLIER_PHONE_NUMBER = _fieldBuilder.buildEdmTypeField('SupplierPhoneNumber', 'Edm.String', true);
    /**
     * Static representation of the [[supplierRespSalesPersonName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierPurchasingOrg.SUPPLIER_RESP_SALES_PERSON_NAME = _fieldBuilder.buildEdmTypeField('SupplierRespSalesPersonName', 'Edm.String', true);
    /**
     * Static representation of the [[supplierConfirmationControlKey]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierPurchasingOrg.SUPPLIER_CONFIRMATION_CONTROL_KEY = _fieldBuilder.buildEdmTypeField('SupplierConfirmationControlKey', 'Edm.String', true);
    /**
     * Static representation of the [[isOrderAcknRqd]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierPurchasingOrg.IS_ORDER_ACKN_RQD = _fieldBuilder.buildEdmTypeField('IsOrderAcknRqd', 'Edm.Boolean', true);
    /**
     * Static representation of the [[authorizationGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierPurchasingOrg.AUTHORIZATION_GROUP = _fieldBuilder.buildEdmTypeField('AuthorizationGroup', 'Edm.String', true);
    /**
     * Static representation of the [[supplierAccountGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierPurchasingOrg.SUPPLIER_ACCOUNT_GROUP = _fieldBuilder.buildEdmTypeField('SupplierAccountGroup', 'Edm.String', true);
    /**
     * Static representation of the one-to-many navigation property [[toPartnerFunction]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierPurchasingOrg.TO_PARTNER_FUNCTION = new core_1.Link('to_PartnerFunction', SupplierPurchasingOrg, SupplierPartnerFunc_1.SupplierPartnerFunc);
    /**
     * Static representation of the one-to-many navigation property [[toPurchasingOrgText]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierPurchasingOrg.TO_PURCHASING_ORG_TEXT = new core_1.Link('to_PurchasingOrgText', SupplierPurchasingOrg, SupplierPurchasingOrgText_1.SupplierPurchasingOrgText);
    /**
     * All fields of the SupplierPurchasingOrg entity.
     */
    SupplierPurchasingOrg._allFields = [
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
    SupplierPurchasingOrg.ALL_FIELDS = new core_1.AllFields('*', SupplierPurchasingOrg);
    /**
     * All key fields of the SupplierPurchasingOrg entity.
     */
    SupplierPurchasingOrg._keyFields = [SupplierPurchasingOrg.SUPPLIER, SupplierPurchasingOrg.PURCHASING_ORGANIZATION];
    /**
     * Mapping of all key field names to the respective static field property SupplierPurchasingOrg.
     */
    SupplierPurchasingOrg._keys = SupplierPurchasingOrg._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(SupplierPurchasingOrg = exports.SupplierPurchasingOrg || (exports.SupplierPurchasingOrg = {}));
exports.SupplierPurchasingOrg = SupplierPurchasingOrg;
//# sourceMappingURL=SupplierPurchasingOrg.js.map