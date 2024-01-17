import { RequestBuilder, GetAllRequestBuilderV2, GetByKeyRequestBuilderV2, CreateRequestBuilderV2, UpdateRequestBuilderV2, DeleteRequestBuilderV2 } from '@sap-cloud-sdk/core';
import { CustomerSalesAreaText } from './CustomerSalesAreaText';
/**
 * Request builder class for operations supported on the [[CustomerSalesAreaText]] entity.
 */
export declare class CustomerSalesAreaTextRequestBuilder extends RequestBuilder<CustomerSalesAreaText> {
    /**
     * Returns a request builder for retrieving one `CustomerSalesAreaText` entity based on its keys.
     * @param customer Key property. See [[CustomerSalesAreaText.customer]].
     * @param salesOrganization Key property. See [[CustomerSalesAreaText.salesOrganization]].
     * @param distributionChannel Key property. See [[CustomerSalesAreaText.distributionChannel]].
     * @param division Key property. See [[CustomerSalesAreaText.division]].
     * @param language Key property. See [[CustomerSalesAreaText.language]].
     * @param longTextId Key property. See [[CustomerSalesAreaText.longTextId]].
     * @returns A request builder for creating requests to retrieve one `CustomerSalesAreaText` entity based on its keys.
     */
    getByKey(customer: string, salesOrganization: string, distributionChannel: string, division: string, language: string, longTextId: string): GetByKeyRequestBuilderV2<CustomerSalesAreaText>;
    /**
     * Returns a request builder for querying all `CustomerSalesAreaText` entities.
     * @returns A request builder for creating requests to retrieve all `CustomerSalesAreaText` entities.
     */
    getAll(): GetAllRequestBuilderV2<CustomerSalesAreaText>;
    /**
     * Returns a request builder for creating a `CustomerSalesAreaText` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `CustomerSalesAreaText`.
     */
    create(entity: CustomerSalesAreaText): CreateRequestBuilderV2<CustomerSalesAreaText>;
    /**
     * Returns a request builder for updating an entity of type `CustomerSalesAreaText`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `CustomerSalesAreaText`.
     */
    update(entity: CustomerSalesAreaText): UpdateRequestBuilderV2<CustomerSalesAreaText>;
    /**
     * Returns a request builder for deleting an entity of type `CustomerSalesAreaText`.
     * @param customer Key property. See [[CustomerSalesAreaText.customer]].
     * @param salesOrganization Key property. See [[CustomerSalesAreaText.salesOrganization]].
     * @param distributionChannel Key property. See [[CustomerSalesAreaText.distributionChannel]].
     * @param division Key property. See [[CustomerSalesAreaText.division]].
     * @param language Key property. See [[CustomerSalesAreaText.language]].
     * @param longTextId Key property. See [[CustomerSalesAreaText.longTextId]].
     * @returns A request builder for creating requests that delete an entity of type `CustomerSalesAreaText`.
     */
    delete(customer: string, salesOrganization: string, distributionChannel: string, division: string, language: string, longTextId: string): DeleteRequestBuilderV2<CustomerSalesAreaText>;
    /**
     * Returns a request builder for deleting an entity of type `CustomerSalesAreaText`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `CustomerSalesAreaText` by taking the entity as a parameter.
     */
    delete(entity: CustomerSalesAreaText): DeleteRequestBuilderV2<CustomerSalesAreaText>;
}
//# sourceMappingURL=CustomerSalesAreaTextRequestBuilder.d.ts.map