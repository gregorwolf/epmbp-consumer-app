import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder } from '@sap-cloud-sdk/core';
import { BusinessPartner } from './BusinessPartner';
/**
 * Request builder class for operations supported on the [[BusinessPartner]] entity.
 */
export declare class BusinessPartnerRequestBuilder extends RequestBuilder<BusinessPartner> {
    /**
     * Returns a request builder for retrieving one `BusinessPartner` entity based on its keys.
     * @param businessPartner Key property. See [[BusinessPartner.businessPartner]].
     * @returns A request builder for creating requests to retrieve one `BusinessPartner` entity based on its keys.
     */
    getByKey(businessPartner: string): GetByKeyRequestBuilder<BusinessPartner>;
    /**
     * Returns a request builder for querying all `BusinessPartner` entities.
     * @returns A request builder for creating requests to retrieve all `BusinessPartner` entities.
     */
    getAll(): GetAllRequestBuilder<BusinessPartner>;
    /**
     * Returns a request builder for creating a `BusinessPartner` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BusinessPartner`.
     */
    create(entity: BusinessPartner): CreateRequestBuilder<BusinessPartner>;
    /**
     * Returns a request builder for updating an entity of type `BusinessPartner`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BusinessPartner`.
     */
    update(entity: BusinessPartner): UpdateRequestBuilder<BusinessPartner>;
}
//# sourceMappingURL=BusinessPartnerRequestBuilder.d.ts.map