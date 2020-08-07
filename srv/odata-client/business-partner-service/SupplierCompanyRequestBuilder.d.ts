import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder } from '@sap-cloud-sdk/core';
import { SupplierCompany } from './SupplierCompany';
/**
 * Request builder class for operations supported on the [[SupplierCompany]] entity.
 */
export declare class SupplierCompanyRequestBuilder extends RequestBuilder<SupplierCompany> {
    /**
     * Returns a request builder for retrieving one `SupplierCompany` entity based on its keys.
     * @param supplier Key property. See [[SupplierCompany.supplier]].
     * @param companyCode Key property. See [[SupplierCompany.companyCode]].
     * @returns A request builder for creating requests to retrieve one `SupplierCompany` entity based on its keys.
     */
    getByKey(supplier: string, companyCode: string): GetByKeyRequestBuilder<SupplierCompany>;
    /**
     * Returns a request builder for querying all `SupplierCompany` entities.
     * @returns A request builder for creating requests to retrieve all `SupplierCompany` entities.
     */
    getAll(): GetAllRequestBuilder<SupplierCompany>;
    /**
     * Returns a request builder for creating a `SupplierCompany` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `SupplierCompany`.
     */
    create(entity: SupplierCompany): CreateRequestBuilder<SupplierCompany>;
    /**
     * Returns a request builder for updating an entity of type `SupplierCompany`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SupplierCompany`.
     */
    update(entity: SupplierCompany): UpdateRequestBuilder<SupplierCompany>;
}
//# sourceMappingURL=SupplierCompanyRequestBuilder.d.ts.map