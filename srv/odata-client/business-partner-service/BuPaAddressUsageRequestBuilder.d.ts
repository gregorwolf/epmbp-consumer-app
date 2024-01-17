import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilderV2, GetByKeyRequestBuilderV2, CreateRequestBuilderV2, UpdateRequestBuilderV2, DeleteRequestBuilderV2 } from '@sap-cloud-sdk/core';
import { BuPaAddressUsage } from './BuPaAddressUsage';
/**
 * Request builder class for operations supported on the [[BuPaAddressUsage]] entity.
 */
export declare class BuPaAddressUsageRequestBuilder extends RequestBuilder<BuPaAddressUsage> {
    /**
     * Returns a request builder for retrieving one `BuPaAddressUsage` entity based on its keys.
     * @param businessPartner Key property. See [[BuPaAddressUsage.businessPartner]].
     * @param validityEndDate Key property. See [[BuPaAddressUsage.validityEndDate]].
     * @param addressUsage Key property. See [[BuPaAddressUsage.addressUsage]].
     * @param addressId Key property. See [[BuPaAddressUsage.addressId]].
     * @returns A request builder for creating requests to retrieve one `BuPaAddressUsage` entity based on its keys.
     */
    getByKey(businessPartner: string, validityEndDate: Moment, addressUsage: string, addressId: string): GetByKeyRequestBuilderV2<BuPaAddressUsage>;
    /**
     * Returns a request builder for querying all `BuPaAddressUsage` entities.
     * @returns A request builder for creating requests to retrieve all `BuPaAddressUsage` entities.
     */
    getAll(): GetAllRequestBuilderV2<BuPaAddressUsage>;
    /**
     * Returns a request builder for creating a `BuPaAddressUsage` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BuPaAddressUsage`.
     */
    create(entity: BuPaAddressUsage): CreateRequestBuilderV2<BuPaAddressUsage>;
    /**
     * Returns a request builder for updating an entity of type `BuPaAddressUsage`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BuPaAddressUsage`.
     */
    update(entity: BuPaAddressUsage): UpdateRequestBuilderV2<BuPaAddressUsage>;
    /**
     * Returns a request builder for deleting an entity of type `BuPaAddressUsage`.
     * @param businessPartner Key property. See [[BuPaAddressUsage.businessPartner]].
     * @param validityEndDate Key property. See [[BuPaAddressUsage.validityEndDate]].
     * @param addressUsage Key property. See [[BuPaAddressUsage.addressUsage]].
     * @param addressId Key property. See [[BuPaAddressUsage.addressId]].
     * @returns A request builder for creating requests that delete an entity of type `BuPaAddressUsage`.
     */
    delete(businessPartner: string, validityEndDate: Moment, addressUsage: string, addressId: string): DeleteRequestBuilderV2<BuPaAddressUsage>;
    /**
     * Returns a request builder for deleting an entity of type `BuPaAddressUsage`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `BuPaAddressUsage` by taking the entity as a parameter.
     */
    delete(entity: BuPaAddressUsage): DeleteRequestBuilderV2<BuPaAddressUsage>;
}
//# sourceMappingURL=BuPaAddressUsageRequestBuilder.d.ts.map