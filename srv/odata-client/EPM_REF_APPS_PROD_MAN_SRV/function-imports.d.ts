import { FunctionImportRequestBuilder } from '@sap-cloud-sdk/core';
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
export declare function editProduct(parameters: EditProductParameters): FunctionImportRequestBuilder<EditProductParameters, ProductDrafts>;
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
export declare function copyProduct(parameters: CopyProductParameters): FunctionImportRequestBuilder<CopyProductParameters, ProductDrafts>;
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
export declare function activateProduct(parameters: ActivateProductParameters): FunctionImportRequestBuilder<ActivateProductParameters, Products>;
export declare const functionImports: {
    editProduct: typeof editProduct;
    copyProduct: typeof copyProduct;
    activateProduct: typeof activateProduct;
};
//# sourceMappingURL=function-imports.d.ts.map