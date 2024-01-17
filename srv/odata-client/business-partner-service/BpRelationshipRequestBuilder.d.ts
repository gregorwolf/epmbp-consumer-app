import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilderV2, GetByKeyRequestBuilderV2, CreateRequestBuilderV2, UpdateRequestBuilderV2, DeleteRequestBuilderV2 } from '@sap-cloud-sdk/core';
import { BpRelationship } from './BpRelationship';
/**
 * Request builder class for operations supported on the [[BpRelationship]] entity.
 */
export declare class BpRelationshipRequestBuilder extends RequestBuilder<BpRelationship> {
    /**
     * Returns a request builder for retrieving one `BpRelationship` entity based on its keys.
     * @param relationshipNumber Key property. See [[BpRelationship.relationshipNumber]].
     * @param businessPartner1 Key property. See [[BpRelationship.businessPartner1]].
     * @param businessPartner2 Key property. See [[BpRelationship.businessPartner2]].
     * @param validityEndDate Key property. See [[BpRelationship.validityEndDate]].
     * @returns A request builder for creating requests to retrieve one `BpRelationship` entity based on its keys.
     */
    getByKey(relationshipNumber: string, businessPartner1: string, businessPartner2: string, validityEndDate: Moment): GetByKeyRequestBuilderV2<BpRelationship>;
    /**
     * Returns a request builder for querying all `BpRelationship` entities.
     * @returns A request builder for creating requests to retrieve all `BpRelationship` entities.
     */
    getAll(): GetAllRequestBuilderV2<BpRelationship>;
    /**
     * Returns a request builder for creating a `BpRelationship` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BpRelationship`.
     */
    create(entity: BpRelationship): CreateRequestBuilderV2<BpRelationship>;
    /**
     * Returns a request builder for updating an entity of type `BpRelationship`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BpRelationship`.
     */
    update(entity: BpRelationship): UpdateRequestBuilderV2<BpRelationship>;
    /**
     * Returns a request builder for deleting an entity of type `BpRelationship`.
     * @param relationshipNumber Key property. See [[BpRelationship.relationshipNumber]].
     * @param businessPartner1 Key property. See [[BpRelationship.businessPartner1]].
     * @param businessPartner2 Key property. See [[BpRelationship.businessPartner2]].
     * @param validityEndDate Key property. See [[BpRelationship.validityEndDate]].
     * @returns A request builder for creating requests that delete an entity of type `BpRelationship`.
     */
    delete(relationshipNumber: string, businessPartner1: string, businessPartner2: string, validityEndDate: Moment): DeleteRequestBuilderV2<BpRelationship>;
    /**
     * Returns a request builder for deleting an entity of type `BpRelationship`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `BpRelationship` by taking the entity as a parameter.
     */
    delete(entity: BpRelationship): DeleteRequestBuilderV2<BpRelationship>;
}
//# sourceMappingURL=BpRelationshipRequestBuilder.d.ts.map