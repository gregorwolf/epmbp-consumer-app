import { RequestBuilder, GetAllRequestBuilderV2, GetByKeyRequestBuilderV2, CreateRequestBuilderV2, UpdateRequestBuilderV2, DeleteRequestBuilderV2 } from '@sap-cloud-sdk/core';
import { BpAddrDepdntIntlLocNumber } from './BpAddrDepdntIntlLocNumber';
/**
 * Request builder class for operations supported on the [[BpAddrDepdntIntlLocNumber]] entity.
 */
export declare class BpAddrDepdntIntlLocNumberRequestBuilder extends RequestBuilder<BpAddrDepdntIntlLocNumber> {
    /**
     * Returns a request builder for retrieving one `BpAddrDepdntIntlLocNumber` entity based on its keys.
     * @param businessPartner Key property. See [[BpAddrDepdntIntlLocNumber.businessPartner]].
     * @param addressId Key property. See [[BpAddrDepdntIntlLocNumber.addressId]].
     * @returns A request builder for creating requests to retrieve one `BpAddrDepdntIntlLocNumber` entity based on its keys.
     */
    getByKey(businessPartner: string, addressId: string): GetByKeyRequestBuilderV2<BpAddrDepdntIntlLocNumber>;
    /**
     * Returns a request builder for querying all `BpAddrDepdntIntlLocNumber` entities.
     * @returns A request builder for creating requests to retrieve all `BpAddrDepdntIntlLocNumber` entities.
     */
    getAll(): GetAllRequestBuilderV2<BpAddrDepdntIntlLocNumber>;
    /**
     * Returns a request builder for creating a `BpAddrDepdntIntlLocNumber` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BpAddrDepdntIntlLocNumber`.
     */
    create(entity: BpAddrDepdntIntlLocNumber): CreateRequestBuilderV2<BpAddrDepdntIntlLocNumber>;
    /**
     * Returns a request builder for updating an entity of type `BpAddrDepdntIntlLocNumber`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BpAddrDepdntIntlLocNumber`.
     */
    update(entity: BpAddrDepdntIntlLocNumber): UpdateRequestBuilderV2<BpAddrDepdntIntlLocNumber>;
    /**
     * Returns a request builder for deleting an entity of type `BpAddrDepdntIntlLocNumber`.
     * @param businessPartner Key property. See [[BpAddrDepdntIntlLocNumber.businessPartner]].
     * @param addressId Key property. See [[BpAddrDepdntIntlLocNumber.addressId]].
     * @returns A request builder for creating requests that delete an entity of type `BpAddrDepdntIntlLocNumber`.
     */
    delete(businessPartner: string, addressId: string): DeleteRequestBuilderV2<BpAddrDepdntIntlLocNumber>;
    /**
     * Returns a request builder for deleting an entity of type `BpAddrDepdntIntlLocNumber`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `BpAddrDepdntIntlLocNumber` by taking the entity as a parameter.
     */
    delete(entity: BpAddrDepdntIntlLocNumber): DeleteRequestBuilderV2<BpAddrDepdntIntlLocNumber>;
}
//# sourceMappingURL=BpAddrDepdntIntlLocNumberRequestBuilder.d.ts.map