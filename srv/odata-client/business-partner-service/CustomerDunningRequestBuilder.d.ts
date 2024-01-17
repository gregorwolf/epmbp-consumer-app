import { RequestBuilder, GetAllRequestBuilderV2, GetByKeyRequestBuilderV2, CreateRequestBuilderV2, UpdateRequestBuilderV2, DeleteRequestBuilderV2 } from '@sap-cloud-sdk/core';
import { CustomerDunning } from './CustomerDunning';
/**
 * Request builder class for operations supported on the [[CustomerDunning]] entity.
 */
export declare class CustomerDunningRequestBuilder extends RequestBuilder<CustomerDunning> {
    /**
     * Returns a request builder for retrieving one `CustomerDunning` entity based on its keys.
     * @param customer Key property. See [[CustomerDunning.customer]].
     * @param companyCode Key property. See [[CustomerDunning.companyCode]].
     * @param dunningArea Key property. See [[CustomerDunning.dunningArea]].
     * @returns A request builder for creating requests to retrieve one `CustomerDunning` entity based on its keys.
     */
    getByKey(customer: string, companyCode: string, dunningArea: string): GetByKeyRequestBuilderV2<CustomerDunning>;
    /**
     * Returns a request builder for querying all `CustomerDunning` entities.
     * @returns A request builder for creating requests to retrieve all `CustomerDunning` entities.
     */
    getAll(): GetAllRequestBuilderV2<CustomerDunning>;
    /**
     * Returns a request builder for creating a `CustomerDunning` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `CustomerDunning`.
     */
    create(entity: CustomerDunning): CreateRequestBuilderV2<CustomerDunning>;
    /**
     * Returns a request builder for updating an entity of type `CustomerDunning`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `CustomerDunning`.
     */
    update(entity: CustomerDunning): UpdateRequestBuilderV2<CustomerDunning>;
    /**
     * Returns a request builder for deleting an entity of type `CustomerDunning`.
     * @param customer Key property. See [[CustomerDunning.customer]].
     * @param companyCode Key property. See [[CustomerDunning.companyCode]].
     * @param dunningArea Key property. See [[CustomerDunning.dunningArea]].
     * @returns A request builder for creating requests that delete an entity of type `CustomerDunning`.
     */
    delete(customer: string, companyCode: string, dunningArea: string): DeleteRequestBuilderV2<CustomerDunning>;
    /**
     * Returns a request builder for deleting an entity of type `CustomerDunning`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `CustomerDunning` by taking the entity as a parameter.
     */
    delete(entity: CustomerDunning): DeleteRequestBuilderV2<CustomerDunning>;
}
//# sourceMappingURL=CustomerDunningRequestBuilder.d.ts.map