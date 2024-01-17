import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilderV2, GetByKeyRequestBuilderV2, CreateRequestBuilderV2, UpdateRequestBuilderV2, DeleteRequestBuilderV2 } from '@sap-cloud-sdk/core';
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
    getByKey(addressId: string, person: string, ordinalNumber: string, validityStartDate: Moment, isDefaultUrlAddress: boolean): GetByKeyRequestBuilderV2<AddressHomePageUrl>;
    /**
     * Returns a request builder for querying all `AddressHomePageUrl` entities.
     * @returns A request builder for creating requests to retrieve all `AddressHomePageUrl` entities.
     */
    getAll(): GetAllRequestBuilderV2<AddressHomePageUrl>;
    /**
     * Returns a request builder for creating a `AddressHomePageUrl` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `AddressHomePageUrl`.
     */
    create(entity: AddressHomePageUrl): CreateRequestBuilderV2<AddressHomePageUrl>;
    /**
     * Returns a request builder for updating an entity of type `AddressHomePageUrl`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `AddressHomePageUrl`.
     */
    update(entity: AddressHomePageUrl): UpdateRequestBuilderV2<AddressHomePageUrl>;
    /**
     * Returns a request builder for deleting an entity of type `AddressHomePageUrl`.
     * @param addressId Key property. See [[AddressHomePageUrl.addressId]].
     * @param person Key property. See [[AddressHomePageUrl.person]].
     * @param ordinalNumber Key property. See [[AddressHomePageUrl.ordinalNumber]].
     * @param validityStartDate Key property. See [[AddressHomePageUrl.validityStartDate]].
     * @param isDefaultUrlAddress Key property. See [[AddressHomePageUrl.isDefaultUrlAddress]].
     * @returns A request builder for creating requests that delete an entity of type `AddressHomePageUrl`.
     */
    delete(addressId: string, person: string, ordinalNumber: string, validityStartDate: Moment, isDefaultUrlAddress: boolean): DeleteRequestBuilderV2<AddressHomePageUrl>;
    /**
     * Returns a request builder for deleting an entity of type `AddressHomePageUrl`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `AddressHomePageUrl` by taking the entity as a parameter.
     */
    delete(entity: AddressHomePageUrl): DeleteRequestBuilderV2<AddressHomePageUrl>;
}
//# sourceMappingURL=AddressHomePageUrlRequestBuilder.d.ts.map