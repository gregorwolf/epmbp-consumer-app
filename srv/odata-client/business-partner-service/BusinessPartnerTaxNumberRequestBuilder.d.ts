import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { BusinessPartnerTaxNumber } from './BusinessPartnerTaxNumber';
/**
 * Request builder class for operations supported on the [[BusinessPartnerTaxNumber]] entity.
 */
export declare class BusinessPartnerTaxNumberRequestBuilder extends RequestBuilder<BusinessPartnerTaxNumber> {
    /**
     * Returns a request builder for retrieving one `BusinessPartnerTaxNumber` entity based on its keys.
     * @param businessPartner Key property. See [[BusinessPartnerTaxNumber.businessPartner]].
     * @param bpTaxType Key property. See [[BusinessPartnerTaxNumber.bpTaxType]].
     * @returns A request builder for creating requests to retrieve one `BusinessPartnerTaxNumber` entity based on its keys.
     */
    getByKey(businessPartner: string, bpTaxType: string): GetByKeyRequestBuilder<BusinessPartnerTaxNumber>;
    /**
     * Returns a request builder for querying all `BusinessPartnerTaxNumber` entities.
     * @returns A request builder for creating requests to retrieve all `BusinessPartnerTaxNumber` entities.
     */
    getAll(): GetAllRequestBuilder<BusinessPartnerTaxNumber>;
    /**
     * Returns a request builder for creating a `BusinessPartnerTaxNumber` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BusinessPartnerTaxNumber`.
     */
    create(entity: BusinessPartnerTaxNumber): CreateRequestBuilder<BusinessPartnerTaxNumber>;
    /**
     * Returns a request builder for updating an entity of type `BusinessPartnerTaxNumber`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BusinessPartnerTaxNumber`.
     */
    update(entity: BusinessPartnerTaxNumber): UpdateRequestBuilder<BusinessPartnerTaxNumber>;
    /**
     * Returns a request builder for deleting an entity of type `BusinessPartnerTaxNumber`.
     * @param businessPartner Key property. See [[BusinessPartnerTaxNumber.businessPartner]].
     * @param bpTaxType Key property. See [[BusinessPartnerTaxNumber.bpTaxType]].
     * @returns A request builder for creating requests that delete an entity of type `BusinessPartnerTaxNumber`.
     */
    delete(businessPartner: string, bpTaxType: string): DeleteRequestBuilder<BusinessPartnerTaxNumber>;
    /**
     * Returns a request builder for deleting an entity of type `BusinessPartnerTaxNumber`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `BusinessPartnerTaxNumber` by taking the entity as a parameter.
     */
    delete(entity: BusinessPartnerTaxNumber): DeleteRequestBuilder<BusinessPartnerTaxNumber>;
}
//# sourceMappingURL=BusinessPartnerTaxNumberRequestBuilder.d.ts.map