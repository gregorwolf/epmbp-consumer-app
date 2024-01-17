import { RequestBuilder, GetAllRequestBuilderV2, GetByKeyRequestBuilderV2, CreateRequestBuilderV2, UpdateRequestBuilderV2, DeleteRequestBuilderV2 } from '@sap-cloud-sdk/core';
import { BuPaIdentification } from './BuPaIdentification';
/**
 * Request builder class for operations supported on the [[BuPaIdentification]] entity.
 */
export declare class BuPaIdentificationRequestBuilder extends RequestBuilder<BuPaIdentification> {
    /**
     * Returns a request builder for retrieving one `BuPaIdentification` entity based on its keys.
     * @param businessPartner Key property. See [[BuPaIdentification.businessPartner]].
     * @param bpIdentificationType Key property. See [[BuPaIdentification.bpIdentificationType]].
     * @param bpIdentificationNumber Key property. See [[BuPaIdentification.bpIdentificationNumber]].
     * @returns A request builder for creating requests to retrieve one `BuPaIdentification` entity based on its keys.
     */
    getByKey(businessPartner: string, bpIdentificationType: string, bpIdentificationNumber: string): GetByKeyRequestBuilderV2<BuPaIdentification>;
    /**
     * Returns a request builder for querying all `BuPaIdentification` entities.
     * @returns A request builder for creating requests to retrieve all `BuPaIdentification` entities.
     */
    getAll(): GetAllRequestBuilderV2<BuPaIdentification>;
    /**
     * Returns a request builder for creating a `BuPaIdentification` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BuPaIdentification`.
     */
    create(entity: BuPaIdentification): CreateRequestBuilderV2<BuPaIdentification>;
    /**
     * Returns a request builder for updating an entity of type `BuPaIdentification`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BuPaIdentification`.
     */
    update(entity: BuPaIdentification): UpdateRequestBuilderV2<BuPaIdentification>;
    /**
     * Returns a request builder for deleting an entity of type `BuPaIdentification`.
     * @param businessPartner Key property. See [[BuPaIdentification.businessPartner]].
     * @param bpIdentificationType Key property. See [[BuPaIdentification.bpIdentificationType]].
     * @param bpIdentificationNumber Key property. See [[BuPaIdentification.bpIdentificationNumber]].
     * @returns A request builder for creating requests that delete an entity of type `BuPaIdentification`.
     */
    delete(businessPartner: string, bpIdentificationType: string, bpIdentificationNumber: string): DeleteRequestBuilderV2<BuPaIdentification>;
    /**
     * Returns a request builder for deleting an entity of type `BuPaIdentification`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `BuPaIdentification` by taking the entity as a parameter.
     */
    delete(entity: BuPaIdentification): DeleteRequestBuilderV2<BuPaIdentification>;
}
//# sourceMappingURL=BuPaIdentificationRequestBuilder.d.ts.map