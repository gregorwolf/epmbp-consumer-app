import { RequestBuilder, GetAllRequestBuilderV2, GetByKeyRequestBuilderV2, CreateRequestBuilderV2, UpdateRequestBuilderV2, DeleteRequestBuilderV2 } from '@sap-cloud-sdk/core';
import { CustomerText } from './CustomerText';
/**
 * Request builder class for operations supported on the [[CustomerText]] entity.
 */
export declare class CustomerTextRequestBuilder extends RequestBuilder<CustomerText> {
    /**
     * Returns a request builder for retrieving one `CustomerText` entity based on its keys.
     * @param customer Key property. See [[CustomerText.customer]].
     * @param language Key property. See [[CustomerText.language]].
     * @param longTextId Key property. See [[CustomerText.longTextId]].
     * @returns A request builder for creating requests to retrieve one `CustomerText` entity based on its keys.
     */
    getByKey(customer: string, language: string, longTextId: string): GetByKeyRequestBuilderV2<CustomerText>;
    /**
     * Returns a request builder for querying all `CustomerText` entities.
     * @returns A request builder for creating requests to retrieve all `CustomerText` entities.
     */
    getAll(): GetAllRequestBuilderV2<CustomerText>;
    /**
     * Returns a request builder for creating a `CustomerText` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `CustomerText`.
     */
    create(entity: CustomerText): CreateRequestBuilderV2<CustomerText>;
    /**
     * Returns a request builder for updating an entity of type `CustomerText`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `CustomerText`.
     */
    update(entity: CustomerText): UpdateRequestBuilderV2<CustomerText>;
    /**
     * Returns a request builder for deleting an entity of type `CustomerText`.
     * @param customer Key property. See [[CustomerText.customer]].
     * @param language Key property. See [[CustomerText.language]].
     * @param longTextId Key property. See [[CustomerText.longTextId]].
     * @returns A request builder for creating requests that delete an entity of type `CustomerText`.
     */
    delete(customer: string, language: string, longTextId: string): DeleteRequestBuilderV2<CustomerText>;
    /**
     * Returns a request builder for deleting an entity of type `CustomerText`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `CustomerText` by taking the entity as a parameter.
     */
    delete(entity: CustomerText): DeleteRequestBuilderV2<CustomerText>;
}
//# sourceMappingURL=CustomerTextRequestBuilder.d.ts.map