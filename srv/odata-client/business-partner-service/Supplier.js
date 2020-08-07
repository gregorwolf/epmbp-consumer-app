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
exports.Supplier = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var SupplierRequestBuilder_1 = require("./SupplierRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "A_Supplier" of service "API_BUSINESS_PARTNER".
 */
var Supplier = /** @class */ (function (_super) {
    __extends(Supplier, _super);
    function Supplier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `Supplier`.
     * @returns A builder that constructs instances of entity type `Supplier`.
     */
    Supplier.builder = function () {
        return core_1.Entity.entityBuilder(Supplier);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Supplier` entity type.
     * @returns A `Supplier` request builder.
     */
    Supplier.requestBuilder = function () {
        return new SupplierRequestBuilder_1.SupplierRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Supplier`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Supplier`.
     */
    Supplier.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, Supplier);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Supplier.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Supplier.
     */
    Supplier._entityName = 'A_Supplier';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Supplier.
     */
    Supplier._serviceName = 'API_BUSINESS_PARTNER';
    /**
     * Default url path for the according service.
     */
    Supplier._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
    return Supplier;
}(core_1.Entity));
exports.Supplier = Supplier;
var SupplierCompany_1 = require("./SupplierCompany");
var SupplierPurchasingOrg_1 = require("./SupplierPurchasingOrg");
var SupplierText_1 = require("./SupplierText");
(function (Supplier) {
    /**
     * Static representation of the [[supplier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Supplier.SUPPLIER = new core_1.StringField('Supplier', Supplier, 'Edm.String');
    /**
     * Static representation of the [[alternativePayeeAccountNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Supplier.ALTERNATIVE_PAYEE_ACCOUNT_NUMBER = new core_1.StringField('AlternativePayeeAccountNumber', Supplier, 'Edm.String');
    /**
     * Static representation of the [[authorizationGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Supplier.AUTHORIZATION_GROUP = new core_1.StringField('AuthorizationGroup', Supplier, 'Edm.String');
    /**
     * Static representation of the [[createdByUser]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Supplier.CREATED_BY_USER = new core_1.StringField('CreatedByUser', Supplier, 'Edm.String');
    /**
     * Static representation of the [[creationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Supplier.CREATION_DATE = new core_1.DateField('CreationDate', Supplier, 'Edm.DateTime');
    /**
     * Static representation of the [[customer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Supplier.CUSTOMER = new core_1.StringField('Customer', Supplier, 'Edm.String');
    /**
     * Static representation of the [[paymentIsBlockedForSupplier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Supplier.PAYMENT_IS_BLOCKED_FOR_SUPPLIER = new core_1.BooleanField('PaymentIsBlockedForSupplier', Supplier, 'Edm.Boolean');
    /**
     * Static representation of the [[postingIsBlocked]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Supplier.POSTING_IS_BLOCKED = new core_1.BooleanField('PostingIsBlocked', Supplier, 'Edm.Boolean');
    /**
     * Static representation of the [[purchasingIsBlocked]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Supplier.PURCHASING_IS_BLOCKED = new core_1.BooleanField('PurchasingIsBlocked', Supplier, 'Edm.Boolean');
    /**
     * Static representation of the [[supplierAccountGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Supplier.SUPPLIER_ACCOUNT_GROUP = new core_1.StringField('SupplierAccountGroup', Supplier, 'Edm.String');
    /**
     * Static representation of the [[supplierFullName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Supplier.SUPPLIER_FULL_NAME = new core_1.StringField('SupplierFullName', Supplier, 'Edm.String');
    /**
     * Static representation of the [[supplierName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Supplier.SUPPLIER_NAME = new core_1.StringField('SupplierName', Supplier, 'Edm.String');
    /**
     * Static representation of the [[vatRegistration]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Supplier.VAT_REGISTRATION = new core_1.StringField('VATRegistration', Supplier, 'Edm.String');
    /**
     * Static representation of the [[birthDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Supplier.BIRTH_DATE = new core_1.DateField('BirthDate', Supplier, 'Edm.DateTime');
    /**
     * Static representation of the [[concatenatedInternationalLocNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Supplier.CONCATENATED_INTERNATIONAL_LOC_NO = new core_1.StringField('ConcatenatedInternationalLocNo', Supplier, 'Edm.String');
    /**
     * Static representation of the [[deletionIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Supplier.DELETION_INDICATOR = new core_1.BooleanField('DeletionIndicator', Supplier, 'Edm.Boolean');
    /**
     * Static representation of the [[fiscalAddress]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Supplier.FISCAL_ADDRESS = new core_1.StringField('FiscalAddress', Supplier, 'Edm.String');
    /**
     * Static representation of the [[industry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Supplier.INDUSTRY = new core_1.StringField('Industry', Supplier, 'Edm.String');
    /**
     * Static representation of the [[internationalLocationNumber1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Supplier.INTERNATIONAL_LOCATION_NUMBER_1 = new core_1.StringField('InternationalLocationNumber1', Supplier, 'Edm.String');
    /**
     * Static representation of the [[internationalLocationNumber2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Supplier.INTERNATIONAL_LOCATION_NUMBER_2 = new core_1.StringField('InternationalLocationNumber2', Supplier, 'Edm.String');
    /**
     * Static representation of the [[internationalLocationNumber3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Supplier.INTERNATIONAL_LOCATION_NUMBER_3 = new core_1.StringField('InternationalLocationNumber3', Supplier, 'Edm.String');
    /**
     * Static representation of the [[isNaturalPerson]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Supplier.IS_NATURAL_PERSON = new core_1.StringField('IsNaturalPerson', Supplier, 'Edm.String');
    /**
     * Static representation of the [[responsibleType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Supplier.RESPONSIBLE_TYPE = new core_1.StringField('ResponsibleType', Supplier, 'Edm.String');
    /**
     * Static representation of the [[suplrQltyInProcmtCertfnValidTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Supplier.SUPLR_QLTY_IN_PROCMT_CERTFN_VALID_TO = new core_1.DateField('SuplrQltyInProcmtCertfnValidTo', Supplier, 'Edm.DateTime');
    /**
     * Static representation of the [[suplrQualityManagementSystem]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Supplier.SUPLR_QUALITY_MANAGEMENT_SYSTEM = new core_1.StringField('SuplrQualityManagementSystem', Supplier, 'Edm.String');
    /**
     * Static representation of the [[supplierCorporateGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Supplier.SUPPLIER_CORPORATE_GROUP = new core_1.StringField('SupplierCorporateGroup', Supplier, 'Edm.String');
    /**
     * Static representation of the [[supplierProcurementBlock]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Supplier.SUPPLIER_PROCUREMENT_BLOCK = new core_1.StringField('SupplierProcurementBlock', Supplier, 'Edm.String');
    /**
     * Static representation of the [[taxNumber1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Supplier.TAX_NUMBER_1 = new core_1.StringField('TaxNumber1', Supplier, 'Edm.String');
    /**
     * Static representation of the [[taxNumber2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Supplier.TAX_NUMBER_2 = new core_1.StringField('TaxNumber2', Supplier, 'Edm.String');
    /**
     * Static representation of the [[taxNumber3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Supplier.TAX_NUMBER_3 = new core_1.StringField('TaxNumber3', Supplier, 'Edm.String');
    /**
     * Static representation of the [[taxNumber4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Supplier.TAX_NUMBER_4 = new core_1.StringField('TaxNumber4', Supplier, 'Edm.String');
    /**
     * Static representation of the [[taxNumber5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Supplier.TAX_NUMBER_5 = new core_1.StringField('TaxNumber5', Supplier, 'Edm.String');
    /**
     * Static representation of the [[taxNumberResponsible]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Supplier.TAX_NUMBER_RESPONSIBLE = new core_1.StringField('TaxNumberResponsible', Supplier, 'Edm.String');
    /**
     * Static representation of the [[taxNumberType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Supplier.TAX_NUMBER_TYPE = new core_1.StringField('TaxNumberType', Supplier, 'Edm.String');
    /**
     * Static representation of the [[suplrProofOfDelivRlvtCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Supplier.SUPLR_PROOF_OF_DELIV_RLVT_CODE = new core_1.StringField('SuplrProofOfDelivRlvtCode', Supplier, 'Edm.String');
    /**
     * Static representation of the [[brTaxIsSplit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Supplier.BR_TAX_IS_SPLIT = new core_1.BooleanField('BR_TaxIsSplit', Supplier, 'Edm.Boolean');
    /**
     * Static representation of the one-to-many navigation property [[toSupplierCompany]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Supplier.TO_SUPPLIER_COMPANY = new core_1.Link('to_SupplierCompany', Supplier, SupplierCompany_1.SupplierCompany);
    /**
     * Static representation of the one-to-many navigation property [[toSupplierPurchasingOrg]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Supplier.TO_SUPPLIER_PURCHASING_ORG = new core_1.Link('to_SupplierPurchasingOrg', Supplier, SupplierPurchasingOrg_1.SupplierPurchasingOrg);
    /**
     * Static representation of the one-to-many navigation property [[toSupplierText]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Supplier.TO_SUPPLIER_TEXT = new core_1.Link('to_SupplierText', Supplier, SupplierText_1.SupplierText);
    /**
     * All fields of the Supplier entity.
     */
    Supplier._allFields = [
        Supplier.SUPPLIER,
        Supplier.ALTERNATIVE_PAYEE_ACCOUNT_NUMBER,
        Supplier.AUTHORIZATION_GROUP,
        Supplier.CREATED_BY_USER,
        Supplier.CREATION_DATE,
        Supplier.CUSTOMER,
        Supplier.PAYMENT_IS_BLOCKED_FOR_SUPPLIER,
        Supplier.POSTING_IS_BLOCKED,
        Supplier.PURCHASING_IS_BLOCKED,
        Supplier.SUPPLIER_ACCOUNT_GROUP,
        Supplier.SUPPLIER_FULL_NAME,
        Supplier.SUPPLIER_NAME,
        Supplier.VAT_REGISTRATION,
        Supplier.BIRTH_DATE,
        Supplier.CONCATENATED_INTERNATIONAL_LOC_NO,
        Supplier.DELETION_INDICATOR,
        Supplier.FISCAL_ADDRESS,
        Supplier.INDUSTRY,
        Supplier.INTERNATIONAL_LOCATION_NUMBER_1,
        Supplier.INTERNATIONAL_LOCATION_NUMBER_2,
        Supplier.INTERNATIONAL_LOCATION_NUMBER_3,
        Supplier.IS_NATURAL_PERSON,
        Supplier.RESPONSIBLE_TYPE,
        Supplier.SUPLR_QLTY_IN_PROCMT_CERTFN_VALID_TO,
        Supplier.SUPLR_QUALITY_MANAGEMENT_SYSTEM,
        Supplier.SUPPLIER_CORPORATE_GROUP,
        Supplier.SUPPLIER_PROCUREMENT_BLOCK,
        Supplier.TAX_NUMBER_1,
        Supplier.TAX_NUMBER_2,
        Supplier.TAX_NUMBER_3,
        Supplier.TAX_NUMBER_4,
        Supplier.TAX_NUMBER_5,
        Supplier.TAX_NUMBER_RESPONSIBLE,
        Supplier.TAX_NUMBER_TYPE,
        Supplier.SUPLR_PROOF_OF_DELIV_RLVT_CODE,
        Supplier.BR_TAX_IS_SPLIT,
        Supplier.TO_SUPPLIER_COMPANY,
        Supplier.TO_SUPPLIER_PURCHASING_ORG,
        Supplier.TO_SUPPLIER_TEXT
    ];
    /**
     * All fields selector.
     */
    Supplier.ALL_FIELDS = new core_1.AllFields('*', Supplier);
    /**
     * All key fields of the Supplier entity.
     */
    Supplier._keyFields = [Supplier.SUPPLIER];
    /**
     * Mapping of all key field names to the respective static field property Supplier.
     */
    Supplier._keys = Supplier._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Supplier = exports.Supplier || (exports.Supplier = {}));
exports.Supplier = Supplier;
//# sourceMappingURL=Supplier.js.map