"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
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
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
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
     * Returns an entity builder to construct instances `SupplierPurchasingOrg`.
     * @returns A builder that constructs instances of entity type `SupplierPurchasingOrg`.
     */
    SupplierPurchasingOrg.builder = function () {
        return core_1.Entity.entityBuilder(SupplierPurchasingOrg);
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
        return core_1.Entity.customFieldSelector(fieldName, SupplierPurchasingOrg);
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
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for SupplierPurchasingOrg.
     */
    SupplierPurchasingOrg._serviceName = 'API_BUSINESS_PARTNER';
    /**
     * Default url path for the according service.
     */
    SupplierPurchasingOrg._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
    return SupplierPurchasingOrg;
}(core_1.Entity));
exports.SupplierPurchasingOrg = SupplierPurchasingOrg;
var SupplierPartnerFunc_1 = require("./SupplierPartnerFunc");
var SupplierPurchasingOrgText_1 = require("./SupplierPurchasingOrgText");
(function (SupplierPurchasingOrg) {
    /**
     * Static representation of the [[supplier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierPurchasingOrg.SUPPLIER = new core_1.StringField('Supplier', SupplierPurchasingOrg, 'Edm.String');
    /**
     * Static representation of the [[purchasingOrganization]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierPurchasingOrg.PURCHASING_ORGANIZATION = new core_1.StringField('PurchasingOrganization', SupplierPurchasingOrg, 'Edm.String');
    /**
     * Static representation of the [[calculationSchemaGroupCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierPurchasingOrg.CALCULATION_SCHEMA_GROUP_CODE = new core_1.StringField('CalculationSchemaGroupCode', SupplierPurchasingOrg, 'Edm.String');
    /**
     * Static representation of the [[deletionIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierPurchasingOrg.DELETION_INDICATOR = new core_1.BooleanField('DeletionIndicator', SupplierPurchasingOrg, 'Edm.Boolean');
    /**
     * Static representation of the [[incotermsClassification]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierPurchasingOrg.INCOTERMS_CLASSIFICATION = new core_1.StringField('IncotermsClassification', SupplierPurchasingOrg, 'Edm.String');
    /**
     * Static representation of the [[incotermsTransferLocation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierPurchasingOrg.INCOTERMS_TRANSFER_LOCATION = new core_1.StringField('IncotermsTransferLocation', SupplierPurchasingOrg, 'Edm.String');
    /**
     * Static representation of the [[incotermsVersion]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierPurchasingOrg.INCOTERMS_VERSION = new core_1.StringField('IncotermsVersion', SupplierPurchasingOrg, 'Edm.String');
    /**
     * Static representation of the [[incotermsLocation1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierPurchasingOrg.INCOTERMS_LOCATION_1 = new core_1.StringField('IncotermsLocation1', SupplierPurchasingOrg, 'Edm.String');
    /**
     * Static representation of the [[incotermsLocation2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierPurchasingOrg.INCOTERMS_LOCATION_2 = new core_1.StringField('IncotermsLocation2', SupplierPurchasingOrg, 'Edm.String');
    /**
     * Static representation of the [[invoiceIsGoodsReceiptBased]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierPurchasingOrg.INVOICE_IS_GOODS_RECEIPT_BASED = new core_1.BooleanField('InvoiceIsGoodsReceiptBased', SupplierPurchasingOrg, 'Edm.Boolean');
    /**
     * Static representation of the [[materialPlannedDeliveryDurn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierPurchasingOrg.MATERIAL_PLANNED_DELIVERY_DURN = new core_1.BigNumberField('MaterialPlannedDeliveryDurn', SupplierPurchasingOrg, 'Edm.Decimal');
    /**
     * Static representation of the [[minimumOrderAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierPurchasingOrg.MINIMUM_ORDER_AMOUNT = new core_1.BigNumberField('MinimumOrderAmount', SupplierPurchasingOrg, 'Edm.Decimal');
    /**
     * Static representation of the [[paymentTerms]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierPurchasingOrg.PAYMENT_TERMS = new core_1.StringField('PaymentTerms', SupplierPurchasingOrg, 'Edm.String');
    /**
     * Static representation of the [[pricingDateControl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierPurchasingOrg.PRICING_DATE_CONTROL = new core_1.StringField('PricingDateControl', SupplierPurchasingOrg, 'Edm.String');
    /**
     * Static representation of the [[purOrdAutoGenerationIsAllowed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierPurchasingOrg.PUR_ORD_AUTO_GENERATION_IS_ALLOWED = new core_1.BooleanField('PurOrdAutoGenerationIsAllowed', SupplierPurchasingOrg, 'Edm.Boolean');
    /**
     * Static representation of the [[purchaseOrderCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierPurchasingOrg.PURCHASE_ORDER_CURRENCY = new core_1.StringField('PurchaseOrderCurrency', SupplierPurchasingOrg, 'Edm.String');
    /**
     * Static representation of the [[purchasingGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierPurchasingOrg.PURCHASING_GROUP = new core_1.StringField('PurchasingGroup', SupplierPurchasingOrg, 'Edm.String');
    /**
     * Static representation of the [[purchasingIsBlockedForSupplier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierPurchasingOrg.PURCHASING_IS_BLOCKED_FOR_SUPPLIER = new core_1.BooleanField('PurchasingIsBlockedForSupplier', SupplierPurchasingOrg, 'Edm.Boolean');
    /**
     * Static representation of the [[shippingCondition]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierPurchasingOrg.SHIPPING_CONDITION = new core_1.StringField('ShippingCondition', SupplierPurchasingOrg, 'Edm.String');
    /**
     * Static representation of the [[supplierAbcClassificationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierPurchasingOrg.SUPPLIER_ABC_CLASSIFICATION_CODE = new core_1.StringField('SupplierABCClassificationCode', SupplierPurchasingOrg, 'Edm.String');
    /**
     * Static representation of the [[supplierPhoneNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierPurchasingOrg.SUPPLIER_PHONE_NUMBER = new core_1.StringField('SupplierPhoneNumber', SupplierPurchasingOrg, 'Edm.String');
    /**
     * Static representation of the [[supplierRespSalesPersonName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierPurchasingOrg.SUPPLIER_RESP_SALES_PERSON_NAME = new core_1.StringField('SupplierRespSalesPersonName', SupplierPurchasingOrg, 'Edm.String');
    /**
     * Static representation of the [[supplierConfirmationControlKey]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierPurchasingOrg.SUPPLIER_CONFIRMATION_CONTROL_KEY = new core_1.StringField('SupplierConfirmationControlKey', SupplierPurchasingOrg, 'Edm.String');
    /**
     * Static representation of the [[isOrderAcknRqd]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierPurchasingOrg.IS_ORDER_ACKN_RQD = new core_1.BooleanField('IsOrderAcknRqd', SupplierPurchasingOrg, 'Edm.Boolean');
    /**
     * Static representation of the [[authorizationGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierPurchasingOrg.AUTHORIZATION_GROUP = new core_1.StringField('AuthorizationGroup', SupplierPurchasingOrg, 'Edm.String');
    /**
     * Static representation of the [[supplierAccountGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierPurchasingOrg.SUPPLIER_ACCOUNT_GROUP = new core_1.StringField('SupplierAccountGroup', SupplierPurchasingOrg, 'Edm.String');
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