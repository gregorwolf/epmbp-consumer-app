/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { transformReturnValueForEntity, FunctionImportRequestBuilder, FunctionImportParameter } from '@sap-cloud-sdk/core';
import { ProductDrafts } from './ProductDrafts';
import { Products } from './Products';

/**
 * Type of the parameters to be passed to [[editProduct]].
 */
export interface EditProductParameters {
  /**
   * Product Id.
   */
  productId: string;
}

/**
 * Edit Product.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
export function editProduct(parameters: EditProductParameters): FunctionImportRequestBuilder<EditProductParameters, ProductDrafts> {
  const params = {
    productId: new FunctionImportParameter('ProductId', 'Edm.String', parameters.productId)
  }

  return new FunctionImportRequestBuilder('post', '/sap/opu/odata/sap/EPM_REF_APPS_PROD_MAN_SRV', 'EditProduct', (data) => transformReturnValueForEntity(data, ProductDrafts), params);
}

/**
 * Type of the parameters to be passed to [[copyProduct]].
 */
export interface CopyProductParameters {
  /**
   * Product Id.
   */
  productId: string;
}

/**
 * Copy Product.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
export function copyProduct(parameters: CopyProductParameters): FunctionImportRequestBuilder<CopyProductParameters, ProductDrafts> {
  const params = {
    productId: new FunctionImportParameter('ProductId', 'Edm.String', parameters.productId)
  }

  return new FunctionImportRequestBuilder('post', '/sap/opu/odata/sap/EPM_REF_APPS_PROD_MAN_SRV', 'CopyProduct', (data) => transformReturnValueForEntity(data, ProductDrafts), params);
}

/**
 * Type of the parameters to be passed to [[activateProduct]].
 */
export interface ActivateProductParameters {
  /**
   * Product Draft Id.
   */
  productDraftId: string;
}

/**
 * Activate Product.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
export function activateProduct(parameters: ActivateProductParameters): FunctionImportRequestBuilder<ActivateProductParameters, Products> {
  const params = {
    productDraftId: new FunctionImportParameter('ProductDraftId', 'Edm.String', parameters.productDraftId)
  }

  return new FunctionImportRequestBuilder('post', '/sap/opu/odata/sap/EPM_REF_APPS_PROD_MAN_SRV', 'ActivateProduct', (data) => transformReturnValueForEntity(data, Products), params);
}

export const functionImports = {
  editProduct,
  copyProduct,
  activateProduct
};
