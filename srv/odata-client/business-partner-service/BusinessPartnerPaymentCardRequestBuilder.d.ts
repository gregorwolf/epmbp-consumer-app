import { RequestBuilder, GetAllRequestBuilderV2, GetByKeyRequestBuilderV2, CreateRequestBuilderV2, UpdateRequestBuilderV2, DeleteRequestBuilderV2 } from '@sap-cloud-sdk/core';
import { BusinessPartnerPaymentCard } from './BusinessPartnerPaymentCard';
/**
 * Request builder class for operations supported on the [[BusinessPartnerPaymentCard]] entity.
 */
export declare class BusinessPartnerPaymentCardRequestBuilder extends RequestBuilder<BusinessPartnerPaymentCard> {
    /**
     * Returns a request builder for retrieving one `BusinessPartnerPaymentCard` entity based on its keys.
     * @param businessPartner Key property. See [[BusinessPartnerPaymentCard.businessPartner]].
     * @param paymentCardId Key property. See [[BusinessPartnerPaymentCard.paymentCardId]].
     * @param paymentCardType Key property. See [[BusinessPartnerPaymentCard.paymentCardType]].
     * @param cardNumber Key property. See [[BusinessPartnerPaymentCard.cardNumber]].
     * @returns A request builder for creating requests to retrieve one `BusinessPartnerPaymentCard` entity based on its keys.
     */
    getByKey(businessPartner: string, paymentCardId: string, paymentCardType: string, cardNumber: string): GetByKeyRequestBuilderV2<BusinessPartnerPaymentCard>;
    /**
     * Returns a request builder for querying all `BusinessPartnerPaymentCard` entities.
     * @returns A request builder for creating requests to retrieve all `BusinessPartnerPaymentCard` entities.
     */
    getAll(): GetAllRequestBuilderV2<BusinessPartnerPaymentCard>;
    /**
     * Returns a request builder for creating a `BusinessPartnerPaymentCard` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BusinessPartnerPaymentCard`.
     */
    create(entity: BusinessPartnerPaymentCard): CreateRequestBuilderV2<BusinessPartnerPaymentCard>;
    /**
     * Returns a request builder for updating an entity of type `BusinessPartnerPaymentCard`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BusinessPartnerPaymentCard`.
     */
    update(entity: BusinessPartnerPaymentCard): UpdateRequestBuilderV2<BusinessPartnerPaymentCard>;
    /**
     * Returns a request builder for deleting an entity of type `BusinessPartnerPaymentCard`.
     * @param businessPartner Key property. See [[BusinessPartnerPaymentCard.businessPartner]].
     * @param paymentCardId Key property. See [[BusinessPartnerPaymentCard.paymentCardId]].
     * @param paymentCardType Key property. See [[BusinessPartnerPaymentCard.paymentCardType]].
     * @param cardNumber Key property. See [[BusinessPartnerPaymentCard.cardNumber]].
     * @returns A request builder for creating requests that delete an entity of type `BusinessPartnerPaymentCard`.
     */
    delete(businessPartner: string, paymentCardId: string, paymentCardType: string, cardNumber: string): DeleteRequestBuilderV2<BusinessPartnerPaymentCard>;
    /**
     * Returns a request builder for deleting an entity of type `BusinessPartnerPaymentCard`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `BusinessPartnerPaymentCard` by taking the entity as a parameter.
     */
    delete(entity: BusinessPartnerPaymentCard): DeleteRequestBuilderV2<BusinessPartnerPaymentCard>;
}
//# sourceMappingURL=BusinessPartnerPaymentCardRequestBuilder.d.ts.map