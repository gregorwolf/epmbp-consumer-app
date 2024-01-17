import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilderV2, GetByKeyRequestBuilderV2, CreateRequestBuilderV2, UpdateRequestBuilderV2 } from '@sap-cloud-sdk/core';
import { BpContactToAddress } from './BpContactToAddress';
/**
 * Request builder class for operations supported on the [[BpContactToAddress]] entity.
 */
export declare class BpContactToAddressRequestBuilder extends RequestBuilder<BpContactToAddress> {
    /**
     * Returns a request builder for retrieving one `BpContactToAddress` entity based on its keys.
     * @param relationshipNumber Key property. See [[BpContactToAddress.relationshipNumber]].
     * @param businessPartnerCompany Key property. See [[BpContactToAddress.businessPartnerCompany]].
     * @param businessPartnerPerson Key property. See [[BpContactToAddress.businessPartnerPerson]].
     * @param validityEndDate Key property. See [[BpContactToAddress.validityEndDate]].
     * @param addressId Key property. See [[BpContactToAddress.addressId]].
     * @returns A request builder for creating requests to retrieve one `BpContactToAddress` entity based on its keys.
     */
    getByKey(relationshipNumber: string, businessPartnerCompany: string, businessPartnerPerson: string, validityEndDate: Moment, addressId: string): GetByKeyRequestBuilderV2<BpContactToAddress>;
    /**
     * Returns a request builder for querying all `BpContactToAddress` entities.
     * @returns A request builder for creating requests to retrieve all `BpContactToAddress` entities.
     */
    getAll(): GetAllRequestBuilderV2<BpContactToAddress>;
    /**
     * Returns a request builder for creating a `BpContactToAddress` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BpContactToAddress`.
     */
    create(entity: BpContactToAddress): CreateRequestBuilderV2<BpContactToAddress>;
    /**
     * Returns a request builder for updating an entity of type `BpContactToAddress`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BpContactToAddress`.
     */
    update(entity: BpContactToAddress): UpdateRequestBuilderV2<BpContactToAddress>;
}
//# sourceMappingURL=BpContactToAddressRequestBuilder.d.ts.map