import { RequestBuilder, GetAllRequestBuilderV2, GetByKeyRequestBuilderV2, CreateRequestBuilderV2, UpdateRequestBuilderV2, DeleteRequestBuilderV2 } from '@sap-cloud-sdk/core';
import { CustomerUnloadingPoint } from './CustomerUnloadingPoint';
/**
 * Request builder class for operations supported on the [[CustomerUnloadingPoint]] entity.
 */
export declare class CustomerUnloadingPointRequestBuilder extends RequestBuilder<CustomerUnloadingPoint> {
    /**
     * Returns a request builder for retrieving one `CustomerUnloadingPoint` entity based on its keys.
     * @param customer Key property. See [[CustomerUnloadingPoint.customer]].
     * @param unloadingPointName Key property. See [[CustomerUnloadingPoint.unloadingPointName]].
     * @returns A request builder for creating requests to retrieve one `CustomerUnloadingPoint` entity based on its keys.
     */
    getByKey(customer: string, unloadingPointName: string): GetByKeyRequestBuilderV2<CustomerUnloadingPoint>;
    /**
     * Returns a request builder for querying all `CustomerUnloadingPoint` entities.
     * @returns A request builder for creating requests to retrieve all `CustomerUnloadingPoint` entities.
     */
    getAll(): GetAllRequestBuilderV2<CustomerUnloadingPoint>;
    /**
     * Returns a request builder for creating a `CustomerUnloadingPoint` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `CustomerUnloadingPoint`.
     */
    create(entity: CustomerUnloadingPoint): CreateRequestBuilderV2<CustomerUnloadingPoint>;
    /**
     * Returns a request builder for updating an entity of type `CustomerUnloadingPoint`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `CustomerUnloadingPoint`.
     */
    update(entity: CustomerUnloadingPoint): UpdateRequestBuilderV2<CustomerUnloadingPoint>;
    /**
     * Returns a request builder for deleting an entity of type `CustomerUnloadingPoint`.
     * @param customer Key property. See [[CustomerUnloadingPoint.customer]].
     * @param unloadingPointName Key property. See [[CustomerUnloadingPoint.unloadingPointName]].
     * @returns A request builder for creating requests that delete an entity of type `CustomerUnloadingPoint`.
     */
    delete(customer: string, unloadingPointName: string): DeleteRequestBuilderV2<CustomerUnloadingPoint>;
    /**
     * Returns a request builder for deleting an entity of type `CustomerUnloadingPoint`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `CustomerUnloadingPoint` by taking the entity as a parameter.
     */
    delete(entity: CustomerUnloadingPoint): DeleteRequestBuilderV2<CustomerUnloadingPoint>;
}
//# sourceMappingURL=CustomerUnloadingPointRequestBuilder.d.ts.map