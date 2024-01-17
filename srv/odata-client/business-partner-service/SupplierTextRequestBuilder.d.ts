import { RequestBuilder, GetAllRequestBuilderV2, GetByKeyRequestBuilderV2, CreateRequestBuilderV2, UpdateRequestBuilderV2, DeleteRequestBuilderV2 } from '@sap-cloud-sdk/core';
import { SupplierText } from './SupplierText';
/**
 * Request builder class for operations supported on the [[SupplierText]] entity.
 */
export declare class SupplierTextRequestBuilder extends RequestBuilder<SupplierText> {
    /**
     * Returns a request builder for retrieving one `SupplierText` entity based on its keys.
     * @param supplier Key property. See [[SupplierText.supplier]].
     * @param language Key property. See [[SupplierText.language]].
     * @param longTextId Key property. See [[SupplierText.longTextId]].
     * @returns A request builder for creating requests to retrieve one `SupplierText` entity based on its keys.
     */
    getByKey(supplier: string, language: string, longTextId: string): GetByKeyRequestBuilderV2<SupplierText>;
    /**
     * Returns a request builder for querying all `SupplierText` entities.
     * @returns A request builder for creating requests to retrieve all `SupplierText` entities.
     */
    getAll(): GetAllRequestBuilderV2<SupplierText>;
    /**
     * Returns a request builder for creating a `SupplierText` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `SupplierText`.
     */
    create(entity: SupplierText): CreateRequestBuilderV2<SupplierText>;
    /**
     * Returns a request builder for updating an entity of type `SupplierText`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SupplierText`.
     */
    update(entity: SupplierText): UpdateRequestBuilderV2<SupplierText>;
    /**
     * Returns a request builder for deleting an entity of type `SupplierText`.
     * @param supplier Key property. See [[SupplierText.supplier]].
     * @param language Key property. See [[SupplierText.language]].
     * @param longTextId Key property. See [[SupplierText.longTextId]].
     * @returns A request builder for creating requests that delete an entity of type `SupplierText`.
     */
    delete(supplier: string, language: string, longTextId: string): DeleteRequestBuilderV2<SupplierText>;
    /**
     * Returns a request builder for deleting an entity of type `SupplierText`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `SupplierText` by taking the entity as a parameter.
     */
    delete(entity: SupplierText): DeleteRequestBuilderV2<SupplierText>;
}
//# sourceMappingURL=SupplierTextRequestBuilder.d.ts.map