import { RequestBuilder, GetAllRequestBuilderV2, GetByKeyRequestBuilderV2, CreateRequestBuilderV2, UpdateRequestBuilderV2, DeleteRequestBuilderV2 } from '@sap-cloud-sdk/core';
import { CustAddrDepdntInformation } from './CustAddrDepdntInformation';
/**
 * Request builder class for operations supported on the [[CustAddrDepdntInformation]] entity.
 */
export declare class CustAddrDepdntInformationRequestBuilder extends RequestBuilder<CustAddrDepdntInformation> {
    /**
     * Returns a request builder for retrieving one `CustAddrDepdntInformation` entity based on its keys.
     * @param customer Key property. See [[CustAddrDepdntInformation.customer]].
     * @param addressId Key property. See [[CustAddrDepdntInformation.addressId]].
     * @returns A request builder for creating requests to retrieve one `CustAddrDepdntInformation` entity based on its keys.
     */
    getByKey(customer: string, addressId: string): GetByKeyRequestBuilderV2<CustAddrDepdntInformation>;
    /**
     * Returns a request builder for querying all `CustAddrDepdntInformation` entities.
     * @returns A request builder for creating requests to retrieve all `CustAddrDepdntInformation` entities.
     */
    getAll(): GetAllRequestBuilderV2<CustAddrDepdntInformation>;
    /**
     * Returns a request builder for creating a `CustAddrDepdntInformation` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `CustAddrDepdntInformation`.
     */
    create(entity: CustAddrDepdntInformation): CreateRequestBuilderV2<CustAddrDepdntInformation>;
    /**
     * Returns a request builder for updating an entity of type `CustAddrDepdntInformation`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `CustAddrDepdntInformation`.
     */
    update(entity: CustAddrDepdntInformation): UpdateRequestBuilderV2<CustAddrDepdntInformation>;
    /**
     * Returns a request builder for deleting an entity of type `CustAddrDepdntInformation`.
     * @param customer Key property. See [[CustAddrDepdntInformation.customer]].
     * @param addressId Key property. See [[CustAddrDepdntInformation.addressId]].
     * @returns A request builder for creating requests that delete an entity of type `CustAddrDepdntInformation`.
     */
    delete(customer: string, addressId: string): DeleteRequestBuilderV2<CustAddrDepdntInformation>;
    /**
     * Returns a request builder for deleting an entity of type `CustAddrDepdntInformation`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `CustAddrDepdntInformation` by taking the entity as a parameter.
     */
    delete(entity: CustAddrDepdntInformation): DeleteRequestBuilderV2<CustAddrDepdntInformation>;
}
//# sourceMappingURL=CustAddrDepdntInformationRequestBuilder.d.ts.map