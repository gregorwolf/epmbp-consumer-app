import { RequestBuilder, GetAllRequestBuilderV2, GetByKeyRequestBuilderV2, CreateRequestBuilderV2, UpdateRequestBuilderV2, DeleteRequestBuilderV2 } from '@sap-cloud-sdk/core';
import { SupplierCompanyText } from './SupplierCompanyText';
/**
 * Request builder class for operations supported on the [[SupplierCompanyText]] entity.
 */
export declare class SupplierCompanyTextRequestBuilder extends RequestBuilder<SupplierCompanyText> {
    /**
     * Returns a request builder for retrieving one `SupplierCompanyText` entity based on its keys.
     * @param supplier Key property. See [[SupplierCompanyText.supplier]].
     * @param companyCode Key property. See [[SupplierCompanyText.companyCode]].
     * @param language Key property. See [[SupplierCompanyText.language]].
     * @param longTextId Key property. See [[SupplierCompanyText.longTextId]].
     * @returns A request builder for creating requests to retrieve one `SupplierCompanyText` entity based on its keys.
     */
    getByKey(supplier: string, companyCode: string, language: string, longTextId: string): GetByKeyRequestBuilderV2<SupplierCompanyText>;
    /**
     * Returns a request builder for querying all `SupplierCompanyText` entities.
     * @returns A request builder for creating requests to retrieve all `SupplierCompanyText` entities.
     */
    getAll(): GetAllRequestBuilderV2<SupplierCompanyText>;
    /**
     * Returns a request builder for creating a `SupplierCompanyText` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `SupplierCompanyText`.
     */
    create(entity: SupplierCompanyText): CreateRequestBuilderV2<SupplierCompanyText>;
    /**
     * Returns a request builder for updating an entity of type `SupplierCompanyText`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SupplierCompanyText`.
     */
    update(entity: SupplierCompanyText): UpdateRequestBuilderV2<SupplierCompanyText>;
    /**
     * Returns a request builder for deleting an entity of type `SupplierCompanyText`.
     * @param supplier Key property. See [[SupplierCompanyText.supplier]].
     * @param companyCode Key property. See [[SupplierCompanyText.companyCode]].
     * @param language Key property. See [[SupplierCompanyText.language]].
     * @param longTextId Key property. See [[SupplierCompanyText.longTextId]].
     * @returns A request builder for creating requests that delete an entity of type `SupplierCompanyText`.
     */
    delete(supplier: string, companyCode: string, language: string, longTextId: string): DeleteRequestBuilderV2<SupplierCompanyText>;
    /**
     * Returns a request builder for deleting an entity of type `SupplierCompanyText`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `SupplierCompanyText` by taking the entity as a parameter.
     */
    delete(entity: SupplierCompanyText): DeleteRequestBuilderV2<SupplierCompanyText>;
}
//# sourceMappingURL=SupplierCompanyTextRequestBuilder.d.ts.map