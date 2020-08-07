import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { SupplierDunning } from './SupplierDunning';
/**
 * Request builder class for operations supported on the [[SupplierDunning]] entity.
 */
export declare class SupplierDunningRequestBuilder extends RequestBuilder<SupplierDunning> {
    /**
     * Returns a request builder for retrieving one `SupplierDunning` entity based on its keys.
     * @param supplier Key property. See [[SupplierDunning.supplier]].
     * @param companyCode Key property. See [[SupplierDunning.companyCode]].
     * @param dunningArea Key property. See [[SupplierDunning.dunningArea]].
     * @returns A request builder for creating requests to retrieve one `SupplierDunning` entity based on its keys.
     */
    getByKey(supplier: string, companyCode: string, dunningArea: string): GetByKeyRequestBuilder<SupplierDunning>;
    /**
     * Returns a request builder for querying all `SupplierDunning` entities.
     * @returns A request builder for creating requests to retrieve all `SupplierDunning` entities.
     */
    getAll(): GetAllRequestBuilder<SupplierDunning>;
    /**
     * Returns a request builder for creating a `SupplierDunning` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `SupplierDunning`.
     */
    create(entity: SupplierDunning): CreateRequestBuilder<SupplierDunning>;
    /**
     * Returns a request builder for updating an entity of type `SupplierDunning`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SupplierDunning`.
     */
    update(entity: SupplierDunning): UpdateRequestBuilder<SupplierDunning>;
    /**
     * Returns a request builder for deleting an entity of type `SupplierDunning`.
     * @param supplier Key property. See [[SupplierDunning.supplier]].
     * @param companyCode Key property. See [[SupplierDunning.companyCode]].
     * @param dunningArea Key property. See [[SupplierDunning.dunningArea]].
     * @returns A request builder for creating requests that delete an entity of type `SupplierDunning`.
     */
    delete(supplier: string, companyCode: string, dunningArea: string): DeleteRequestBuilder<SupplierDunning>;
    /**
     * Returns a request builder for deleting an entity of type `SupplierDunning`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `SupplierDunning` by taking the entity as a parameter.
     */
    delete(entity: SupplierDunning): DeleteRequestBuilder<SupplierDunning>;
}
//# sourceMappingURL=SupplierDunningRequestBuilder.d.ts.map