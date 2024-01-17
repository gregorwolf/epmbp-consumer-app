import { RequestBuilder, GetAllRequestBuilderV2, GetByKeyRequestBuilderV2, CreateRequestBuilderV2, UpdateRequestBuilderV2 } from '@sap-cloud-sdk/core';
import { CustomerSalesArea } from './CustomerSalesArea';
/**
 * Request builder class for operations supported on the [[CustomerSalesArea]] entity.
 */
export declare class CustomerSalesAreaRequestBuilder extends RequestBuilder<CustomerSalesArea> {
    /**
     * Returns a request builder for retrieving one `CustomerSalesArea` entity based on its keys.
     * @param customer Key property. See [[CustomerSalesArea.customer]].
     * @param salesOrganization Key property. See [[CustomerSalesArea.salesOrganization]].
     * @param distributionChannel Key property. See [[CustomerSalesArea.distributionChannel]].
     * @param division Key property. See [[CustomerSalesArea.division]].
     * @returns A request builder for creating requests to retrieve one `CustomerSalesArea` entity based on its keys.
     */
    getByKey(customer: string, salesOrganization: string, distributionChannel: string, division: string): GetByKeyRequestBuilderV2<CustomerSalesArea>;
    /**
     * Returns a request builder for querying all `CustomerSalesArea` entities.
     * @returns A request builder for creating requests to retrieve all `CustomerSalesArea` entities.
     */
    getAll(): GetAllRequestBuilderV2<CustomerSalesArea>;
    /**
     * Returns a request builder for creating a `CustomerSalesArea` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `CustomerSalesArea`.
     */
    create(entity: CustomerSalesArea): CreateRequestBuilderV2<CustomerSalesArea>;
    /**
     * Returns a request builder for updating an entity of type `CustomerSalesArea`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `CustomerSalesArea`.
     */
    update(entity: CustomerSalesArea): UpdateRequestBuilderV2<CustomerSalesArea>;
}
//# sourceMappingURL=CustomerSalesAreaRequestBuilder.d.ts.map