import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { AddressFaxNumber } from './AddressFaxNumber';
/**
 * Request builder class for operations supported on the [[AddressFaxNumber]] entity.
 */
export declare class AddressFaxNumberRequestBuilder extends RequestBuilder<AddressFaxNumber> {
    /**
     * Returns a request builder for retrieving one `AddressFaxNumber` entity based on its keys.
     * @param addressId Key property. See [[AddressFaxNumber.addressId]].
     * @param person Key property. See [[AddressFaxNumber.person]].
     * @param ordinalNumber Key property. See [[AddressFaxNumber.ordinalNumber]].
     * @returns A request builder for creating requests to retrieve one `AddressFaxNumber` entity based on its keys.
     */
    getByKey(addressId: string, person: string, ordinalNumber: string): GetByKeyRequestBuilder<AddressFaxNumber>;
    /**
     * Returns a request builder for querying all `AddressFaxNumber` entities.
     * @returns A request builder for creating requests to retrieve all `AddressFaxNumber` entities.
     */
    getAll(): GetAllRequestBuilder<AddressFaxNumber>;
    /**
     * Returns a request builder for creating a `AddressFaxNumber` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `AddressFaxNumber`.
     */
    create(entity: AddressFaxNumber): CreateRequestBuilder<AddressFaxNumber>;
    /**
     * Returns a request builder for updating an entity of type `AddressFaxNumber`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `AddressFaxNumber`.
     */
    update(entity: AddressFaxNumber): UpdateRequestBuilder<AddressFaxNumber>;
    /**
     * Returns a request builder for deleting an entity of type `AddressFaxNumber`.
     * @param addressId Key property. See [[AddressFaxNumber.addressId]].
     * @param person Key property. See [[AddressFaxNumber.person]].
     * @param ordinalNumber Key property. See [[AddressFaxNumber.ordinalNumber]].
     * @returns A request builder for creating requests that delete an entity of type `AddressFaxNumber`.
     */
    delete(addressId: string, person: string, ordinalNumber: string): DeleteRequestBuilder<AddressFaxNumber>;
    /**
     * Returns a request builder for deleting an entity of type `AddressFaxNumber`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `AddressFaxNumber` by taking the entity as a parameter.
     */
    delete(entity: AddressFaxNumber): DeleteRequestBuilder<AddressFaxNumber>;
}
//# sourceMappingURL=AddressFaxNumberRequestBuilder.d.ts.map