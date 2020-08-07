import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { BusinessPartnerBank } from './BusinessPartnerBank';
/**
 * Request builder class for operations supported on the [[BusinessPartnerBank]] entity.
 */
export declare class BusinessPartnerBankRequestBuilder extends RequestBuilder<BusinessPartnerBank> {
    /**
     * Returns a request builder for retrieving one `BusinessPartnerBank` entity based on its keys.
     * @param businessPartner Key property. See [[BusinessPartnerBank.businessPartner]].
     * @param bankIdentification Key property. See [[BusinessPartnerBank.bankIdentification]].
     * @returns A request builder for creating requests to retrieve one `BusinessPartnerBank` entity based on its keys.
     */
    getByKey(businessPartner: string, bankIdentification: string): GetByKeyRequestBuilder<BusinessPartnerBank>;
    /**
     * Returns a request builder for querying all `BusinessPartnerBank` entities.
     * @returns A request builder for creating requests to retrieve all `BusinessPartnerBank` entities.
     */
    getAll(): GetAllRequestBuilder<BusinessPartnerBank>;
    /**
     * Returns a request builder for creating a `BusinessPartnerBank` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BusinessPartnerBank`.
     */
    create(entity: BusinessPartnerBank): CreateRequestBuilder<BusinessPartnerBank>;
    /**
     * Returns a request builder for updating an entity of type `BusinessPartnerBank`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BusinessPartnerBank`.
     */
    update(entity: BusinessPartnerBank): UpdateRequestBuilder<BusinessPartnerBank>;
    /**
     * Returns a request builder for deleting an entity of type `BusinessPartnerBank`.
     * @param businessPartner Key property. See [[BusinessPartnerBank.businessPartner]].
     * @param bankIdentification Key property. See [[BusinessPartnerBank.bankIdentification]].
     * @returns A request builder for creating requests that delete an entity of type `BusinessPartnerBank`.
     */
    delete(businessPartner: string, bankIdentification: string): DeleteRequestBuilder<BusinessPartnerBank>;
    /**
     * Returns a request builder for deleting an entity of type `BusinessPartnerBank`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `BusinessPartnerBank` by taking the entity as a parameter.
     */
    delete(entity: BusinessPartnerBank): DeleteRequestBuilder<BusinessPartnerBank>;
}
//# sourceMappingURL=BusinessPartnerBankRequestBuilder.d.ts.map