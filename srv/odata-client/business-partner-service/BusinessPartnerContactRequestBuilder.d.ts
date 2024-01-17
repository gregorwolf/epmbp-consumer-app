import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilderV2, GetByKeyRequestBuilderV2, CreateRequestBuilderV2, UpdateRequestBuilderV2, DeleteRequestBuilderV2 } from '@sap-cloud-sdk/core';
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
    getByKey(relationshipNumber: string, businessPartnerCompany: string, businessPartnerPerson: string, validityEndDate: Moment): GetByKeyRequestBuilderV2<BusinessPartnerContact>;
    /**
     * Returns a request builder for querying all `BusinessPartnerContact` entities.
     * @returns A request builder for creating requests to retrieve all `BusinessPartnerContact` entities.
     */
    getAll(): GetAllRequestBuilderV2<BusinessPartnerContact>;
    /**
     * Returns a request builder for creating a `BusinessPartnerContact` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BusinessPartnerContact`.
     */
    create(entity: BusinessPartnerContact): CreateRequestBuilderV2<BusinessPartnerContact>;
    /**
     * Returns a request builder for updating an entity of type `BusinessPartnerContact`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BusinessPartnerContact`.
     */
    update(entity: BusinessPartnerContact): UpdateRequestBuilderV2<BusinessPartnerContact>;
    /**
     * Returns a request builder for deleting an entity of type `BusinessPartnerContact`.
     * @param relationshipNumber Key property. See [[BusinessPartnerContact.relationshipNumber]].
     * @param businessPartnerCompany Key property. See [[BusinessPartnerContact.businessPartnerCompany]].
     * @param businessPartnerPerson Key property. See [[BusinessPartnerContact.businessPartnerPerson]].
     * @param validityEndDate Key property. See [[BusinessPartnerContact.validityEndDate]].
     * @returns A request builder for creating requests that delete an entity of type `BusinessPartnerContact`.
     */
    delete(relationshipNumber: string, businessPartnerCompany: string, businessPartnerPerson: string, validityEndDate: Moment): DeleteRequestBuilderV2<BusinessPartnerContact>;
    /**
     * Returns a request builder for deleting an entity of type `BusinessPartnerContact`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `BusinessPartnerContact` by taking the entity as a parameter.
     */
    delete(entity: BusinessPartnerContact): DeleteRequestBuilderV2<BusinessPartnerContact>;
}
//# sourceMappingURL=BusinessPartnerContactRequestBuilder.d.ts.map