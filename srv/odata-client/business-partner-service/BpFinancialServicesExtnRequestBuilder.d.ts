import { RequestBuilder, GetAllRequestBuilderV2, GetByKeyRequestBuilderV2, CreateRequestBuilderV2, UpdateRequestBuilderV2 } from '@sap-cloud-sdk/core';
import { BpFinancialServicesExtn } from './BpFinancialServicesExtn';
/**
 * Request builder class for operations supported on the [[BpFinancialServicesExtn]] entity.
 */
export declare class BpFinancialServicesExtnRequestBuilder extends RequestBuilder<BpFinancialServicesExtn> {
    /**
     * Returns a request builder for retrieving one `BpFinancialServicesExtn` entity based on its keys.
     * @param businessPartner Key property. See [[BpFinancialServicesExtn.businessPartner]].
     * @returns A request builder for creating requests to retrieve one `BpFinancialServicesExtn` entity based on its keys.
     */
    getByKey(businessPartner: string): GetByKeyRequestBuilderV2<BpFinancialServicesExtn>;
    /**
     * Returns a request builder for querying all `BpFinancialServicesExtn` entities.
     * @returns A request builder for creating requests to retrieve all `BpFinancialServicesExtn` entities.
     */
    getAll(): GetAllRequestBuilderV2<BpFinancialServicesExtn>;
    /**
     * Returns a request builder for creating a `BpFinancialServicesExtn` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BpFinancialServicesExtn`.
     */
    create(entity: BpFinancialServicesExtn): CreateRequestBuilderV2<BpFinancialServicesExtn>;
    /**
     * Returns a request builder for updating an entity of type `BpFinancialServicesExtn`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BpFinancialServicesExtn`.
     */
    update(entity: BpFinancialServicesExtn): UpdateRequestBuilderV2<BpFinancialServicesExtn>;
}
//# sourceMappingURL=BpFinancialServicesExtnRequestBuilder.d.ts.map