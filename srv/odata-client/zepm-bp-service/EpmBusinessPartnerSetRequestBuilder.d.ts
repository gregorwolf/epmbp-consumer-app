/*!
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap/cloud-sdk-core';
import { EpmBusinessPartnerSet } from './EpmBusinessPartnerSet';
/**
 * Request builder class for operations supported on the [[EpmBusinessPartnerSet]] entity.
 */
export declare class EpmBusinessPartnerSetRequestBuilder extends RequestBuilder<EpmBusinessPartnerSet> {
    /**
     * Returns a request builder for retrieving one `EpmBusinessPartnerSet` entity based on its keys.
     * @param bpId Key property. See [[EpmBusinessPartnerSet.bpId]].
     * @returns A request builder for creating requests to retrieve one `EpmBusinessPartnerSet` entity based on its keys.
     */
    getByKey(bpId: string): GetByKeyRequestBuilder<EpmBusinessPartnerSet>;
    /**
     * Returns a request builder for querying all `EpmBusinessPartnerSet` entities.
     * @returns A request builder for creating requests to retrieve all `EpmBusinessPartnerSet` entities.
     */
    getAll(): GetAllRequestBuilder<EpmBusinessPartnerSet>;
}
//# sourceMappingURL=EpmBusinessPartnerSetRequestBuilder.d.ts.map