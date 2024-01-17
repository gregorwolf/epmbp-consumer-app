import { RequestBuilder, GetAllRequestBuilderV2, GetByKeyRequestBuilderV2, CreateRequestBuilderV2, UpdateRequestBuilderV2, DeleteRequestBuilderV2 } from '@sap-cloud-sdk/core';
import { AddressPhoneNumber } from './AddressPhoneNumber';
/**
 * Request builder class for operations supported on the [[AddressPhoneNumber]] entity.
 */
export declare class AddressPhoneNumberRequestBuilder extends RequestBuilder<AddressPhoneNumber> {
    /**
     * Returns a request builder for retrieving one `AddressPhoneNumber` entity based on its keys.
     * @param addressId Key property. See [[AddressPhoneNumber.addressId]].
     * @param person Key property. See [[AddressPhoneNumber.person]].
     * @param ordinalNumber Key property. See [[AddressPhoneNumber.ordinalNumber]].
     * @returns A request builder for creating requests to retrieve one `AddressPhoneNumber` entity based on its keys.
     */
    getByKey(addressId: string, person: string, ordinalNumber: string): GetByKeyRequestBuilderV2<AddressPhoneNumber>;
    /**
     * Returns a request builder for querying all `AddressPhoneNumber` entities.
     * @returns A request builder for creating requests to retrieve all `AddressPhoneNumber` entities.
     */
    getAll(): GetAllRequestBuilderV2<AddressPhoneNumber>;
    /**
     * Returns a request builder for creating a `AddressPhoneNumber` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `AddressPhoneNumber`.
     */
    create(entity: AddressPhoneNumber): CreateRequestBuilderV2<AddressPhoneNumber>;
    /**
     * Returns a request builder for updating an entity of type `AddressPhoneNumber`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `AddressPhoneNumber`.
     */
    update(entity: AddressPhoneNumber): UpdateRequestBuilderV2<AddressPhoneNumber>;
    /**
     * Returns a request builder for deleting an entity of type `AddressPhoneNumber`.
     * @param addressId Key property. See [[AddressPhoneNumber.addressId]].
     * @param person Key property. See [[AddressPhoneNumber.person]].
     * @param ordinalNumber Key property. See [[AddressPhoneNumber.ordinalNumber]].
     * @returns A request builder for creating requests that delete an entity of type `AddressPhoneNumber`.
     */
    delete(addressId: string, person: string, ordinalNumber: string): DeleteRequestBuilderV2<AddressPhoneNumber>;
    /**
     * Returns a request builder for deleting an entity of type `AddressPhoneNumber`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `AddressPhoneNumber` by taking the entity as a parameter.
     */
    delete(entity: AddressPhoneNumber): DeleteRequestBuilderV2<AddressPhoneNumber>;
}
//# sourceMappingURL=AddressPhoneNumberRequestBuilder.d.ts.map