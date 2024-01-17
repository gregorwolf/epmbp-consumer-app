import { RequestBuilder, GetAllRequestBuilderV2, GetByKeyRequestBuilderV2, CreateRequestBuilderV2, UpdateRequestBuilderV2, DeleteRequestBuilderV2 } from '@sap-cloud-sdk/core';
import { SupplierPurchasingOrgText } from './SupplierPurchasingOrgText';
/**
 * Request builder class for operations supported on the [[SupplierPurchasingOrgText]] entity.
 */
export declare class SupplierPurchasingOrgTextRequestBuilder extends RequestBuilder<SupplierPurchasingOrgText> {
    /**
     * Returns a request builder for retrieving one `SupplierPurchasingOrgText` entity based on its keys.
     * @param supplier Key property. See [[SupplierPurchasingOrgText.supplier]].
     * @param purchasingOrganization Key property. See [[SupplierPurchasingOrgText.purchasingOrganization]].
     * @param language Key property. See [[SupplierPurchasingOrgText.language]].
     * @param longTextId Key property. See [[SupplierPurchasingOrgText.longTextId]].
     * @returns A request builder for creating requests to retrieve one `SupplierPurchasingOrgText` entity based on its keys.
     */
    getByKey(supplier: string, purchasingOrganization: string, language: string, longTextId: string): GetByKeyRequestBuilderV2<SupplierPurchasingOrgText>;
    /**
     * Returns a request builder for querying all `SupplierPurchasingOrgText` entities.
     * @returns A request builder for creating requests to retrieve all `SupplierPurchasingOrgText` entities.
     */
    getAll(): GetAllRequestBuilderV2<SupplierPurchasingOrgText>;
    /**
     * Returns a request builder for creating a `SupplierPurchasingOrgText` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `SupplierPurchasingOrgText`.
     */
    create(entity: SupplierPurchasingOrgText): CreateRequestBuilderV2<SupplierPurchasingOrgText>;
    /**
     * Returns a request builder for updating an entity of type `SupplierPurchasingOrgText`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SupplierPurchasingOrgText`.
     */
    update(entity: SupplierPurchasingOrgText): UpdateRequestBuilderV2<SupplierPurchasingOrgText>;
    /**
     * Returns a request builder for deleting an entity of type `SupplierPurchasingOrgText`.
     * @param supplier Key property. See [[SupplierPurchasingOrgText.supplier]].
     * @param purchasingOrganization Key property. See [[SupplierPurchasingOrgText.purchasingOrganization]].
     * @param language Key property. See [[SupplierPurchasingOrgText.language]].
     * @param longTextId Key property. See [[SupplierPurchasingOrgText.longTextId]].
     * @returns A request builder for creating requests that delete an entity of type `SupplierPurchasingOrgText`.
     */
    delete(supplier: string, purchasingOrganization: string, language: string, longTextId: string): DeleteRequestBuilderV2<SupplierPurchasingOrgText>;
    /**
     * Returns a request builder for deleting an entity of type `SupplierPurchasingOrgText`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `SupplierPurchasingOrgText` by taking the entity as a parameter.
     */
    delete(entity: SupplierPurchasingOrgText): DeleteRequestBuilderV2<SupplierPurchasingOrgText>;
}
//# sourceMappingURL=SupplierPurchasingOrgTextRequestBuilder.d.ts.map