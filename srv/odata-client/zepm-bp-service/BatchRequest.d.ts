/*!
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 */
import { CreateRequestBuilder, DeleteRequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, ODataBatchChangeSet, ODataBatchRequestBuilder, UpdateRequestBuilder } from '@sap/cloud-sdk-core';
import { EpmBusinessPartnerSet } from './index';
/**
 * Batch builder for operations supported on the Zepm Bp Service.
 * @param requests The requests of the batch
 * @returns A request builder for batch.
 */
export declare function batch(...requests: Array<ReadZepmBpServiceRequestBuilder | ODataBatchChangeSet<WriteZepmBpServiceRequestBuilder>>): ODataBatchRequestBuilder;
/**
 * Change set constructor consists of write operations supported on the Zepm Bp Service.
 * @param requests The requests of the change set
 * @returns A change set for batch.
 */
export declare function changeset(...requests: WriteZepmBpServiceRequestBuilder[]): ODataBatchChangeSet<WriteZepmBpServiceRequestBuilder>;
export declare const defaultZepmBpServicePath = "/sap/opu/odata/sap/ZEPM_BP_SRV";
export declare type ReadZepmBpServiceRequestBuilder = GetAllRequestBuilder<EpmBusinessPartnerSet> | GetByKeyRequestBuilder<EpmBusinessPartnerSet>;
export declare type WriteZepmBpServiceRequestBuilder = CreateRequestBuilder<EpmBusinessPartnerSet> | UpdateRequestBuilder<EpmBusinessPartnerSet> | DeleteRequestBuilder<EpmBusinessPartnerSet>;
//# sourceMappingURL=BatchRequest.d.ts.map