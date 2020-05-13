"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*!
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var cloud_sdk_core_1 = require("@sap/cloud-sdk-core");
var ProductDrafts_1 = require("./ProductDrafts");
var Products_1 = require("./Products");
/**
 * Edit Product.
 *
 * @param parameters Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
function editProduct(parameters) {
    var params = {
        productId: new cloud_sdk_core_1.FunctionImportParameter('ProductId', 'Edm.String', parameters.productId)
    };
    return new cloud_sdk_core_1.FunctionImportRequestBuilder('post', '/sap/opu/odata/sap/EPM_REF_APPS_PROD_MAN_SRV', 'EditProduct', function (data) { return cloud_sdk_core_1.transformReturnValueForEntity(data, ProductDrafts_1.ProductDrafts); }, params);
}
exports.editProduct = editProduct;
/**
 * Copy Product.
 *
 * @param parameters Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
function copyProduct(parameters) {
    var params = {
        productId: new cloud_sdk_core_1.FunctionImportParameter('ProductId', 'Edm.String', parameters.productId)
    };
    return new cloud_sdk_core_1.FunctionImportRequestBuilder('post', '/sap/opu/odata/sap/EPM_REF_APPS_PROD_MAN_SRV', 'CopyProduct', function (data) { return cloud_sdk_core_1.transformReturnValueForEntity(data, ProductDrafts_1.ProductDrafts); }, params);
}
exports.copyProduct = copyProduct;
/**
 * Activate Product.
 *
 * @param parameters Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
function activateProduct(parameters) {
    var params = {
        productDraftId: new cloud_sdk_core_1.FunctionImportParameter('ProductDraftId', 'Edm.String', parameters.productDraftId)
    };
    return new cloud_sdk_core_1.FunctionImportRequestBuilder('post', '/sap/opu/odata/sap/EPM_REF_APPS_PROD_MAN_SRV', 'ActivateProduct', function (data) { return cloud_sdk_core_1.transformReturnValueForEntity(data, Products_1.Products); }, params);
}
exports.activateProduct = activateProduct;
exports.functionImports = {
    editProduct: editProduct,
    copyProduct: copyProduct,
    activateProduct: activateProduct
};
//# sourceMappingURL=function-imports.js.map