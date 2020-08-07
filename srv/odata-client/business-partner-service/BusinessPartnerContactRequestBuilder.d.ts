import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { BusinessPartnerContact } from './BusinessPartnerContact';
/**
 * Request builder class for operations supported on the [[BusinessPartnerContact]] entity.
 */
export declare class BusinessPartnerContactRequestBuilder extends RequestBuilder<BusinessPartnerContact> {
    /**
     * Returns a request builder for retrieving one `BusinessPartnerContact` entity based on its keys.
     * @param relationshipNumber Key property. See [[BusinessPartnerContact.relationshipNumber]].
     * @param businessPartnerCompany Key property. See [[BusinessPartnerContact.businessPartnerCompany]].
     * @param businessPartnerPerson Key property. See [[BusinessPartnerContact.businessPartnerPerson]].
     * @param validityEndDate Key property. See [[BusinessPartnerContact.validityEndDate]].
     * @returns A request builder for creating requests to retrieve one `BusinessPartnerContact` entity based on its keys.
     */
    getByKey(relationshipNumber: string, businessPartnerCompany: string, businessPartnerPerson: string, validityEndDate: Moment): GetByKeyRequestBuilder<BusinessPartnerContact>;
    /**
     * Returns a request builder for querying all `BusinessPartnerContact` entities.
     * @returns A request builder for creating requests to retrieve all `BusinessPartnerContact` entities.
     */
    getAll(): GetAllRequestBuilder<BusinessPartnerContact>;
    /**
     * Returns a request builder for creating a `BusinessPartnerContact` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BusinessPartnerContact`.
     */
    create(entity: BusinessPartnerContact): CreateRequestBuilder<BusinessPartnerContact>;
    /**
     * Returns a request builder for updating an entity of type `BusinessPartnerContact`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BusinessPartnerContact`.
     */
    update(entity: BusinessPartnerContact): UpdateRequestBuilder<BusinessPartnerContact>;
    /**
     * Returns a request builder for deleting an entity of type `BusinessPartnerContact`.
     * @param relationshipNumber Key property. See [[BusinessPartnerContact.relationshipNumber]].
     * @param businessPartnerCompany Key property. See [[BusinessPartnerContact.businessPartnerCompany]].
     * @param businessPartnerPerson Key property. See [[BusinessPartnerContact.businessPartnerPerson]].
     * @param validityEndDate Key property. See [[BusinessPartnerContact.validityEndDate]].
     * @returns A request builder for creating requests that delete an entity of type `BusinessPartnerContact`.
     */
    delete(relationshipNumber: string, businessPartnerCompany: string, businessPartnerPerson: string, validityEndDate: Moment): DeleteRequestBuilder<BusinessPartnerContact>;
    /**
     * Returns a request builder for deleting an entity of type `BusinessPartnerContact`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `BusinessPartnerContact` by taking the entity as a parameter.
     */
    delete(entity: BusinessPartnerContact): DeleteRequestBuilder<BusinessPartnerContact>;
}
//# sourceMappingURL=BusinessPartnerContactRequestBuilder.d.ts.map