import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { Products } from './Products';
/**
 * Request builder class for operations supported on the [[Products]] entity.
 */
export declare class ProductsRequestBuilder extends RequestBuilder<Products> {
    /**
     * Returns a request builder for retrieving one `Products` entity based on its keys.
     * @param id Key property. See [[Products.id]].
     * @returns A request builder for creating requests to retrieve one `Products` entity based on its keys.
     */
    getByKey(id: string): GetByKeyRequestBuilder<Products>;
    /**
     * Returns a request builder for querying all `Products` entities.
     * @returns A request builder for creating requests to retrieve all `Products` entities.
     */
    getAll(): GetAllRequestBuilder<Products>;
}
//# sourceMappingURL=ProductsRequestBuilder.d.ts.map