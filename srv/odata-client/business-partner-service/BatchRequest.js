"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultBusinessPartnerServicePath = exports.changeset = exports.batch = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var util_1 = require("@sap-cloud-sdk/util");
var index_1 = require("./index");
function batch(first) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    return new core_1.ODataBatchRequestBuilderV2(exports.defaultBusinessPartnerServicePath, (0, util_1.variadicArgumentToArray)(first, rest), map);
}
exports.batch = batch;
function changeset(first) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    return new core_1.ODataBatchChangeSetV2((0, util_1.variadicArgumentToArray)(first, rest));
}
exports.changeset = changeset;
exports.defaultBusinessPartnerServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
var map = { 'A_AddressEmailAddress': index_1.AddressEmailAddress, 'A_AddressFaxNumber': index_1.AddressFaxNumber, 'A_AddressHomePageURL': index_1.AddressHomePageUrl, 'A_AddressPhoneNumber': index_1.AddressPhoneNumber, 'A_BPAddrDepdntIntlLocNumber': index_1.BpAddrDepdntIntlLocNumber, 'A_BPContactToAddress': index_1.BpContactToAddress, 'A_BPContactToFuncAndDept': index_1.BpContactToFuncAndDept, 'A_BPCreditWorthiness': index_1.BpCreditWorthiness, 'A_BPDataController': index_1.BpDataController, 'A_BPFinancialServicesExtn': index_1.BpFinancialServicesExtn, 'A_BPFinancialServicesReporting': index_1.BpFinancialServicesReporting, 'A_BPFiscalYearInformation': index_1.BpFiscalYearInformation, 'A_BPIntlAddressVersion': index_1.BpIntlAddressVersion, 'A_BPRelationship': index_1.BpRelationship, 'A_BuPaAddressUsage': index_1.BuPaAddressUsage, 'A_BuPaIdentification': index_1.BuPaIdentification, 'A_BuPaIndustry': index_1.BuPaIndustry, 'A_BusinessPartner': index_1.BusinessPartner, 'A_BusinessPartnerAddress': index_1.BusinessPartnerAddress, 'A_BusinessPartnerBank': index_1.BusinessPartnerBank, 'A_BusinessPartnerContact': index_1.BusinessPartnerContact, 'A_BusinessPartnerPaymentCard': index_1.BusinessPartnerPaymentCard, 'A_BusinessPartnerRating': index_1.BusinessPartnerRating, 'A_BusinessPartnerRole': index_1.BusinessPartnerRole, 'A_BusinessPartnerTaxNumber': index_1.BusinessPartnerTaxNumber, 'A_BusPartAddrDepdntTaxNmbr': index_1.BusPartAddrDepdntTaxNmbr, 'A_CustAddrDepdntExtIdentifier': index_1.CustAddrDepdntExtIdentifier, 'A_CustAddrDepdntInformation': index_1.CustAddrDepdntInformation, 'A_Customer': index_1.Customer, 'A_CustomerCompany': index_1.CustomerCompany, 'A_CustomerCompanyText': index_1.CustomerCompanyText, 'A_CustomerDunning': index_1.CustomerDunning, 'A_CustomerSalesArea': index_1.CustomerSalesArea, 'A_CustomerSalesAreaTax': index_1.CustomerSalesAreaTax, 'A_CustomerSalesAreaText': index_1.CustomerSalesAreaText, 'A_CustomerTaxGrouping': index_1.CustomerTaxGrouping, 'A_CustomerText': index_1.CustomerText, 'A_CustomerUnloadingPoint': index_1.CustomerUnloadingPoint, 'A_CustomerWithHoldingTax': index_1.CustomerWithHoldingTax, 'A_CustSalesPartnerFunc': index_1.CustSalesPartnerFunc, 'A_CustSlsAreaAddrDepdntInfo': index_1.CustSlsAreaAddrDepdntInfo, 'A_CustSlsAreaAddrDepdntTaxInfo': index_1.CustSlsAreaAddrDepdntTaxInfo, 'A_CustUnldgPtAddrDepdntInfo': index_1.CustUnldgPtAddrDepdntInfo, 'A_Supplier': index_1.Supplier, 'A_SupplierCompany': index_1.SupplierCompany, 'A_SupplierCompanyText': index_1.SupplierCompanyText, 'A_SupplierDunning': index_1.SupplierDunning, 'A_SupplierPartnerFunc': index_1.SupplierPartnerFunc, 'A_SupplierPurchasingOrg': index_1.SupplierPurchasingOrg, 'A_SupplierPurchasingOrgText': index_1.SupplierPurchasingOrgText, 'A_SupplierText': index_1.SupplierText, 'A_SupplierWithHoldingTax': index_1.SupplierWithHoldingTax };
//# sourceMappingURL=BatchRequest.js.map