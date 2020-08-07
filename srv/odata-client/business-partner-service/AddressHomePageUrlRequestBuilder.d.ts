import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { AddressHomePageUrl } from './AddressHomePageUrl';
/**
 * Request builder class for operations supported on the [[AddressHomePageUrl]] entity.
 */
export declare class AddressHomePageUrlRequestBuilder extends RequestBuilder<AddressHomePageUrl> {
    /**
     * Returns a request builder for retrieving one `AddressHomePageUrl` entity based on its keys.
     * @param addressId Key property. See [[AddressHomePageUrl.addressId]].
     * @param person Key property. See [[AddressHomePageUrl.person]].
     * @param ordinalNumber Key property. See [[AddressHomePageUrl.ordinalNumber]].
     * @param validityStartDate Key property. See [[AddressHomePageUrl.validityStartDate]].
     * @param isDefaultUrlAddress Key property. See [[AddressHomePageUrl.isDefaultUrlAddress]].
     * @returns A request builder for creating requests to retrieve one `AddressHomePageUrl` entity based on its keys.
     */
    getByKey(addressId: string, person: string, ordinalNumber: string, validityStartDate: Moment, isDefaultUrlAddress: boolean): GetByKeyRequestBuilder<AddressHomePageUrl>;
    /**
     * Returns a request builder for querying all `AddressHomePageUrl` entities.
     * @returns A request builder for creating requests to retrieve all `AddressHomePageUrl` entities.
     */
    getAll(): GetAllRequestBuilder<AddressHomePageUrl>;
    /**
     * Returns a request builder for creating a `AddressHomePageUrl` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `AddressHomePageUrl`.
     */
    create(entity: AddressHomePageUrl): CreateRequestBuilder<AddressHomePageUrl>;
    /**
     * Returns a request builder for updating an entity of type `AddressHomePageUrl`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `AddressHomePageUrl`.
     */
    update(entity: AddressHomePageUrl): UpdateRequestBuilder<AddressHomePageUrl>;
    /**
     * Returns a request builder for deleting an entity of type `AddressHomePageUrl`.
     * @param addressId Key property. See [[AddressHomePageUrl.addressId]].
     * @param person Key property. See [[AddressHomePageUrl.person]].
     * @param ordinalNumber Key property. See [[AddressHomePageUrl.ordinalNumber]].
     * @param validityStartDate Key property. See [[AddressHomePageUrl.validityStartDate]].
     * @param isDefaultUrlAddress Key property. See [[AddressHomePageUrl.isDefaultUrlAddress]].
     * @returns A request builder for creating requests that delete an entity of type `AddressHomePageUrl`.
     */
    delete(addressId: string, person: string, ordinalNumber: string, validityStartDate: Moment, isDefaultUrlAddress: boolean): DeleteRequestBuilder<AddressHomePageUrl>;
    /**
     * Returns a request builder for deleting an entity of type `AddressHomePageUrl`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `AddressHomePageUrl` by taking the entity as a parameter.
     */
    delete(entity: AddressHomePageUrl): DeleteRequestBuilder<AddressHomePageUrl>;
}
//# sourceMappingURL=AddressHomePageUrlRequestBuilder.d.ts.map