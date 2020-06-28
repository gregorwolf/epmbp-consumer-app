import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { ProductDrafts } from './ProductDrafts';
/**
 * Request builder class for operations supported on the [[ProductDrafts]] entity.
 */
export declare class ProductDraftsRequestBuilder extends RequestBuilder<ProductDrafts> {
    /**
     * Returns a request builder for retrieving one `ProductDrafts` entity based on its keys.
     * @param id Key property. See [[ProductDrafts.id]].
     * @returns A request builder for creating requests to retrieve one `ProductDrafts` entity based on its keys.
     */
    getByKey(id: string): GetByKeyRequestBuilder<ProductDrafts>;
    /**
     * Returns a request builder for querying all `ProductDrafts` entities.
     * @returns A request builder for creating requests to retrieve all `ProductDrafts` entities.
     */
    getAll(): GetAllRequestBuilder<ProductDrafts>;
    /**
     * Returns a request builder for creating a `ProductDrafts` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ProductDrafts`.
     */
    create(entity: ProductDrafts): CreateRequestBuilder<ProductDrafts>;
    /**
     * Returns a request builder for updating an entity of type `ProductDrafts`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ProductDrafts`.
     */
    update(entity: ProductDrafts): UpdateRequestBuilder<ProductDrafts>;
    /**
     * Returns a request builder for deleting an entity of type `ProductDrafts`.
     * @param id Key property. See [[ProductDrafts.id]].
     * @returns A request builder for creating requests that delete an entity of type `ProductDrafts`.
     */
    delete(id: string): DeleteRequestBuilder<ProductDrafts>;
    /**
     * Returns a request builder for deleting an entity of type `ProductDrafts`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `ProductDrafts` by taking the entity as a parameter.
     */
    delete(entity: ProductDrafts): DeleteRequestBuilder<ProductDrafts>;
}
//# sourceMappingURL=ProductDraftsRequestBuilder.d.ts.map