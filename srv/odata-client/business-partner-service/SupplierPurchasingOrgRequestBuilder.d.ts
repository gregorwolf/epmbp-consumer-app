import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder } from '@sap-cloud-sdk/core';
import { SupplierPurchasingOrg } from './SupplierPurchasingOrg';
/**
 * Request builder class for operations supported on the [[SupplierPurchasingOrg]] entity.
 */
export declare class SupplierPurchasingOrgRequestBuilder extends RequestBuilder<SupplierPurchasingOrg> {
    /**
     * Returns a request builder for retrieving one `SupplierPurchasingOrg` entity based on its keys.
     * @param supplier Key property. See [[SupplierPurchasingOrg.supplier]].
     * @param purchasingOrganization Key property. See [[SupplierPurchasingOrg.purchasingOrganization]].
     * @returns A request builder for creating requests to retrieve one `SupplierPurchasingOrg` entity based on its keys.
     */
    getByKey(supplier: string, purchasingOrganization: string): GetByKeyRequestBuilder<SupplierPurchasingOrg>;
    /**
     * Returns a request builder for querying all `SupplierPurchasingOrg` entities.
     * @returns A request builder for creating requests to retrieve all `SupplierPurchasingOrg` entities.
     */
    getAll(): GetAllRequestBuilder<SupplierPurchasingOrg>;
    /**
     * Returns a request builder for creating a `SupplierPurchasingOrg` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `SupplierPurchasingOrg`.
     */
    create(entity: SupplierPurchasingOrg): CreateRequestBuilder<SupplierPurchasingOrg>;
    /**
     * Returns a request builder for updating an entity of type `SupplierPurchasingOrg`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SupplierPurchasingOrg`.
     */
    update(entity: SupplierPurchasingOrg): UpdateRequestBuilder<SupplierPurchasingOrg>;
}
//# sourceMappingURL=SupplierPurchasingOrgRequestBuilder.d.ts.map