"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultBusinessPartnerServicePath = exports.changeset = exports.batch = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var index_1 = require("./index");
/**
 * Batch builder for operations supported on the Business Partner Service.
 * @param requests The requests of the batch
 * @returns A request builder for batch.
 */
function batch() {
    var requests = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        requests[_i] = arguments[_i];
    }
    return new core_1.ODataBatchRequestBuilder(exports.defaultBusinessPartnerServicePath, requests, map);
}
exports.batch = batch;
/**
 * Change set constructor consists of write operations supported on the Business Partner Service.
 * @param requests The requests of the change set
 * @returns A change set for batch.
 */
function changeset() {
    var requests = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        requests[_i] = arguments[_i];
    }
    return new core_1.ODataBatchChangeSet(requests);
}
exports.changeset = changeset;
exports.defaultBusinessPartnerServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
var map = { 'A_AddressEmailAddress': index_1.AddressEmailAddress, 'A_AddressFaxNumber': index_1.AddressFaxNumber, 'A_AddressHomePageURL': index_1.AddressHomePageUrl, 'A_AddressPhoneNumber': index_1.AddressPhoneNumber, 'A_BPContactToAddress': index_1.BpContactToAddress, 'A_BPContactToFuncAndDept': index_1.BpContactToFuncAndDept, 'A_BuPaAddressUsage': index_1.BuPaAddressUsage, 'A_BuPaIdentification': index_1.BuPaIdentification, 'A_BuPaIndustry': index_1.BuPaIndustry, 'A_BusinessPartner': index_1.BusinessPartner, 'A_BusinessPartnerAddress': index_1.BusinessPartnerAddress, 'A_BusinessPartnerBank': index_1.BusinessPartnerBank, 'A_BusinessPartnerContact': index_1.BusinessPartnerContact, 'A_BusinessPartnerRole': index_1.BusinessPartnerRole, 'A_BusinessPartnerTaxNumber': index_1.BusinessPartnerTaxNumber, 'A_Customer': index_1.Customer, 'A_CustomerCompany': index_1.CustomerCompany, 'A_CustomerCompanyText': index_1.CustomerCompanyText, 'A_CustomerDunning': index_1.CustomerDunning, 'A_CustomerSalesArea': index_1.CustomerSalesArea, 'A_CustomerSalesAreaTax': index_1.CustomerSalesAreaTax, 'A_CustomerSalesAreaText': index_1.CustomerSalesAreaText, 'A_CustomerTaxGrouping': index_1.CustomerTaxGrouping, 'A_CustomerText': index_1.CustomerText, 'A_CustomerWithHoldingTax': index_1.CustomerWithHoldingTax, 'A_CustSalesPartnerFunc': index_1.CustSalesPartnerFunc, 'A_Supplier': index_1.Supplier, 'A_SupplierCompany': index_1.SupplierCompany, 'A_SupplierCompanyText': index_1.SupplierCompanyText, 'A_SupplierDunning': index_1.SupplierDunning, 'A_SupplierPartnerFunc': index_1.SupplierPartnerFunc, 'A_SupplierPurchasingOrg': index_1.SupplierPurchasingOrg, 'A_SupplierPurchasingOrgText': index_1.SupplierPurchasingOrgText, 'A_SupplierText': index_1.SupplierText, 'A_SupplierWithHoldingTax': index_1.SupplierWithHoldingTax };
//# sourceMappingURL=BatchRequest.js.map