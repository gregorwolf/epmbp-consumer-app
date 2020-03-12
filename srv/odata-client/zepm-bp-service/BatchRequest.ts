/*!
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CreateRequestBuilder, DeleteRequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, ODataBatchChangeSet, ODataBatchRequestBuilder, UpdateRequestBuilder } from '@sap/cloud-sdk-core';
import { EpmBusinessPartnerSet } from './index';

/**
 * Batch builder for operations supported on the Zepm Bp Service.
 * @param requests The requests of the batch
 * @returns A request builder for batch.
 */
export function batch(...requests: Array<ReadZepmBpServiceRequestBuilder | ODataBatchChangeSet<WriteZepmBpServiceRequestBuilder>>): ODataBatchRequestBuilder {
  return new ODataBatchRequestBuilder(defaultZepmBpServicePath, requests, map);
}

/**
 * Change set constructor consists of write operations supported on the Zepm Bp Service.
 * @param requests The requests of the change set
 * @returns A change set for batch.
 */
export function changeset(...requests: WriteZepmBpServiceRequestBuilder[]): ODataBatchChangeSet<WriteZepmBpServiceRequestBuilder> {
  return new ODataBatchChangeSet(requests);
}

export const defaultZepmBpServicePath = '/sap/opu/odata/sap/ZEPM_BP_SRV';
const map = { 'EPMBusinessPartnerSet': EpmBusinessPartnerSet };
export type ReadZepmBpServiceRequestBuilder = GetAllRequestBuilder<EpmBusinessPartnerSet> | GetByKeyRequestBuilder<EpmBusinessPartnerSet>;
export type WriteZepmBpServiceRequestBuilder = CreateRequestBuilder<EpmBusinessPartnerSet> | UpdateRequestBuilder<EpmBusinessPartnerSet> | DeleteRequestBuilder<EpmBusinessPartnerSet>;
