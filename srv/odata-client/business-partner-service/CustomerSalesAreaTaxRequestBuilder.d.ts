import { RequestBuilder, GetAllRequestBuilderV2, GetByKeyRequestBuilderV2, CreateRequestBuilderV2, UpdateRequestBuilderV2 } from '@sap-cloud-sdk/core';
import { CustomerSalesAreaTax } from './CustomerSalesAreaTax';
/**
 * Request builder class for operations supported on the [[CustomerSalesAreaTax]] entity.
 */
export declare class CustomerSalesAreaTaxRequestBuilder extends RequestBuilder<CustomerSalesAreaTax> {
    /**
     * Returns a request builder for retrieving one `CustomerSalesAreaTax` entity based on its keys.
     * @param customer Key property. See [[CustomerSalesAreaTax.customer]].
     * @param salesOrganization Key property. See [[CustomerSalesAreaTax.salesOrganization]].
     * @param distributionChannel Key property. See [[CustomerSalesAreaTax.distributionChannel]].
     * @param division Key property. See [[CustomerSalesAreaTax.division]].
     * @param departureCountry Key property. See [[CustomerSalesAreaTax.departureCountry]].
     * @param customerTaxCategory Key property. See [[CustomerSalesAreaTax.customerTaxCategory]].
     * @returns A request builder for creating requests to retrieve one `CustomerSalesAreaTax` entity based on its keys.
     */
    getByKey(customer: string, salesOrganization: string, distributionChannel: string, division: string, departureCountry: string, customerTaxCategory: string): GetByKeyRequestBuilderV2<CustomerSalesAreaTax>;
    /**
     * Returns a request builder for querying all `CustomerSalesAreaTax` entities.
     * @returns A request builder for creating requests to retrieve all `CustomerSalesAreaTax` entities.
     */
    getAll(): GetAllRequestBuilderV2<CustomerSalesAreaTax>;
    /**
     * Returns a request builder for creating a `CustomerSalesAreaTax` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `CustomerSalesAreaTax`.
     */
    create(entity: CustomerSalesAreaTax): CreateRequestBuilderV2<CustomerSalesAreaTax>;
    /**
     * Returns a request builder for updating an entity of type `CustomerSalesAreaTax`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `CustomerSalesAreaTax`.
     */
    update(entity: CustomerSalesAreaTax): UpdateRequestBuilderV2<CustomerSalesAreaTax>;
}
//# sourceMappingURL=CustomerSalesAreaTaxRequestBuilder.d.ts.map