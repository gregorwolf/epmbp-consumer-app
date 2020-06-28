"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultEpm_Ref_Apps_Prod_Man_SrvPath = exports.changeset = exports.batch = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var index_1 = require("./index");
/**
 * Batch builder for operations supported on the Epm_Ref_Apps_Prod_Man_Srv.
 * @param requests The requests of the batch
 * @returns A request builder for batch.
 */
function batch() {
    var requests = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        requests[_i] = arguments[_i];
    }
    return new core_1.ODataBatchRequestBuilder(exports.defaultEpm_Ref_Apps_Prod_Man_SrvPath, requests, map);
}
exports.batch = batch;
/**
 * Change set constructor consists of write operations supported on the Epm_Ref_Apps_Prod_Man_Srv.
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
exports.defaultEpm_Ref_Apps_Prod_Man_SrvPath = '/sap/opu/odata/sap/EPM_REF_APPS_PROD_MAN_SRV';
var map = { 'Suppliers': index_1.Suppliers, 'Products': index_1.Products, 'ProductDrafts': index_1.ProductDrafts, 'ImageDrafts': index_1.ImageDrafts, 'MainCategories': index_1.MainCategories, 'SubCategories': index_1.SubCategories, 'Currencies': index_1.Currencies, 'DimensionUnits': index_1.DimensionUnits, 'QuantityUnits': index_1.QuantityUnits, 'WeightUnits': index_1.WeightUnits };
//# sourceMappingURL=BatchRequest.js.map