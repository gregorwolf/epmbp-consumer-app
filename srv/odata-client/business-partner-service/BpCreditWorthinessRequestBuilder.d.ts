import { RequestBuilder, GetAllRequestBuilderV2, GetByKeyRequestBuilderV2, CreateRequestBuilderV2, UpdateRequestBuilderV2 } from '@sap-cloud-sdk/core';
import { BpCreditWorthiness } from './BpCreditWorthiness';
/**
 * Request builder class for operations supported on the [[BpCreditWorthiness]] entity.
 */
export declare class BpCreditWorthinessRequestBuilder extends RequestBuilder<BpCreditWorthiness> {
    /**
     * Returns a request builder for retrieving one `BpCreditWorthiness` entity based on its keys.
     * @param businessPartner Key property. See [[BpCreditWorthiness.businessPartner]].
     * @returns A request builder for creating requests to retrieve one `BpCreditWorthiness` entity based on its keys.
     */
    getByKey(businessPartner: string): GetByKeyRequestBuilderV2<BpCreditWorthiness>;
    /**
     * Returns a request builder for querying all `BpCreditWorthiness` entities.
     * @returns A request builder for creating requests to retrieve all `BpCreditWorthiness` entities.
     */
    getAll(): GetAllRequestBuilderV2<BpCreditWorthiness>;
    /**
     * Returns a request builder for creating a `BpCreditWorthiness` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BpCreditWorthiness`.
     */
    create(entity: BpCreditWorthiness): CreateRequestBuilderV2<BpCreditWorthiness>;
    /**
     * Returns a request builder for updating an entity of type `BpCreditWorthiness`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BpCreditWorthiness`.
     */
    update(entity: BpCreditWorthiness): UpdateRequestBuilderV2<BpCreditWorthiness>;
}
//# sourceMappingURL=BpCreditWorthinessRequestBuilder.d.ts.map