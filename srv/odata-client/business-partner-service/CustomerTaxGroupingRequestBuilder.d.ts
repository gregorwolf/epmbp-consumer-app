import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { CustomerTaxGrouping } from './CustomerTaxGrouping';
/**
 * Request builder class for operations supported on the [[CustomerTaxGrouping]] entity.
 */
export declare class CustomerTaxGroupingRequestBuilder extends RequestBuilder<CustomerTaxGrouping> {
    /**
     * Returns a request builder for retrieving one `CustomerTaxGrouping` entity based on its keys.
     * @param customer Key property. See [[CustomerTaxGrouping.customer]].
     * @param customerTaxGroupingCode Key property. See [[CustomerTaxGrouping.customerTaxGroupingCode]].
     * @returns A request builder for creating requests to retrieve one `CustomerTaxGrouping` entity based on its keys.
     */
    getByKey(customer: string, customerTaxGroupingCode: string): GetByKeyRequestBuilder<CustomerTaxGrouping>;
    /**
     * Returns a request builder for querying all `CustomerTaxGrouping` entities.
     * @returns A request builder for creating requests to retrieve all `CustomerTaxGrouping` entities.
     */
    getAll(): GetAllRequestBuilder<CustomerTaxGrouping>;
    /**
     * Returns a request builder for updating an entity of type `CustomerTaxGrouping`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `CustomerTaxGrouping`.
     */
    update(entity: CustomerTaxGrouping): UpdateRequestBuilder<CustomerTaxGrouping>;
    /**
     * Returns a request builder for deleting an entity of type `CustomerTaxGrouping`.
     * @param customer Key property. See [[CustomerTaxGrouping.customer]].
     * @param customerTaxGroupingCode Key property. See [[CustomerTaxGrouping.customerTaxGroupingCode]].
     * @returns A request builder for creating requests that delete an entity of type `CustomerTaxGrouping`.
     */
    delete(customer: string, customerTaxGroupingCode: string): DeleteRequestBuilder<CustomerTaxGrouping>;
    /**
     * Returns a request builder for deleting an entity of type `CustomerTaxGrouping`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `CustomerTaxGrouping` by taking the entity as a parameter.
     */
    delete(entity: CustomerTaxGrouping): DeleteRequestBuilder<CustomerTaxGrouping>;
}
//# sourceMappingURL=CustomerTaxGroupingRequestBuilder.d.ts.map