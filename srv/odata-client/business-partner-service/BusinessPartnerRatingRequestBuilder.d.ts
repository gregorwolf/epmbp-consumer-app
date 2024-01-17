import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilderV2, GetByKeyRequestBuilderV2, CreateRequestBuilderV2, UpdateRequestBuilderV2, DeleteRequestBuilderV2 } from '@sap-cloud-sdk/core';
import { BusinessPartnerRating } from './BusinessPartnerRating';
/**
 * Request builder class for operations supported on the [[BusinessPartnerRating]] entity.
 */
export declare class BusinessPartnerRatingRequestBuilder extends RequestBuilder<BusinessPartnerRating> {
    /**
     * Returns a request builder for retrieving one `BusinessPartnerRating` entity based on its keys.
     * @param businessPartner Key property. See [[BusinessPartnerRating.businessPartner]].
     * @param businessPartnerRatingProcedure Key property. See [[BusinessPartnerRating.businessPartnerRatingProcedure]].
     * @param bpRatingValidityEndDate Key property. See [[BusinessPartnerRating.bpRatingValidityEndDate]].
     * @returns A request builder for creating requests to retrieve one `BusinessPartnerRating` entity based on its keys.
     */
    getByKey(businessPartner: string, businessPartnerRatingProcedure: string, bpRatingValidityEndDate: Moment): GetByKeyRequestBuilderV2<BusinessPartnerRating>;
    /**
     * Returns a request builder for querying all `BusinessPartnerRating` entities.
     * @returns A request builder for creating requests to retrieve all `BusinessPartnerRating` entities.
     */
    getAll(): GetAllRequestBuilderV2<BusinessPartnerRating>;
    /**
     * Returns a request builder for creating a `BusinessPartnerRating` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BusinessPartnerRating`.
     */
    create(entity: BusinessPartnerRating): CreateRequestBuilderV2<BusinessPartnerRating>;
    /**
     * Returns a request builder for updating an entity of type `BusinessPartnerRating`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BusinessPartnerRating`.
     */
    update(entity: BusinessPartnerRating): UpdateRequestBuilderV2<BusinessPartnerRating>;
    /**
     * Returns a request builder for deleting an entity of type `BusinessPartnerRating`.
     * @param businessPartner Key property. See [[BusinessPartnerRating.businessPartner]].
     * @param businessPartnerRatingProcedure Key property. See [[BusinessPartnerRating.businessPartnerRatingProcedure]].
     * @param bpRatingValidityEndDate Key property. See [[BusinessPartnerRating.bpRatingValidityEndDate]].
     * @returns A request builder for creating requests that delete an entity of type `BusinessPartnerRating`.
     */
    delete(businessPartner: string, businessPartnerRatingProcedure: string, bpRatingValidityEndDate: Moment): DeleteRequestBuilderV2<BusinessPartnerRating>;
    /**
     * Returns a request builder for deleting an entity of type `BusinessPartnerRating`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `BusinessPartnerRating` by taking the entity as a parameter.
     */
    delete(entity: BusinessPartnerRating): DeleteRequestBuilderV2<BusinessPartnerRating>;
}
//# sourceMappingURL=BusinessPartnerRatingRequestBuilder.d.ts.map