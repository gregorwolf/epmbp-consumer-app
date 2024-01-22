/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CreateRequestBuilderV2, DeleteRequestBuilderV2, GetAllRequestBuilderV2, GetByKeyRequestBuilderV2, ODataBatchChangeSetV2, ODataBatchRequestBuilderV2, UpdateRequestBuilderV2 } from '@sap-cloud-sdk/core';
import { variadicArgumentToArray } from '@sap-cloud-sdk/util';
import { SlsPrcgCndnRecdSuplmnt, SlsPrcgCndnRecdValidity, SlsPrcgCndnRecordScale, SlsPrcgCndnSupplementText, SlsPrcgConditionRecord, SlsPrcgConditionRecordText } from './index';

/**
 * Batch builder for operations supported on the Slspricingconditionrecord Service.
 * @param requests The requests of the batch
 * @returns A request builder for batch.
 */
export function batch(...requests: Array<ReadSlspricingconditionrecordServiceRequestBuilder | ODataBatchChangeSetV2<WriteSlspricingconditionrecordServiceRequestBuilder>>): ODataBatchRequestBuilderV2;
export function batch(requests: Array<ReadSlspricingconditionrecordServiceRequestBuilder | ODataBatchChangeSetV2<WriteSlspricingconditionrecordServiceRequestBuilder>>): ODataBatchRequestBuilderV2;
export function batch(first: undefined | ReadSlspricingconditionrecordServiceRequestBuilder | ODataBatchChangeSetV2<WriteSlspricingconditionrecordServiceRequestBuilder> | Array<ReadSlspricingconditionrecordServiceRequestBuilder | ODataBatchChangeSetV2<WriteSlspricingconditionrecordServiceRequestBuilder>>, ...rest: Array<ReadSlspricingconditionrecordServiceRequestBuilder | ODataBatchChangeSetV2<WriteSlspricingconditionrecordServiceRequestBuilder>>): ODataBatchRequestBuilderV2 {
  return new ODataBatchRequestBuilderV2(defaultSlspricingconditionrecordServicePath, variadicArgumentToArray(first, rest), map);
}

/**
 * Change set constructor consists of write operations supported on the Slspricingconditionrecord Service.
 * @param requests The requests of the change set
 * @returns A change set for batch.
 */
export function changeset(...requests: Array<WriteSlspricingconditionrecordServiceRequestBuilder>): ODataBatchChangeSetV2<WriteSlspricingconditionrecordServiceRequestBuilder>;
export function changeset(requests: Array<WriteSlspricingconditionrecordServiceRequestBuilder>): ODataBatchChangeSetV2<WriteSlspricingconditionrecordServiceRequestBuilder>;
export function changeset(first: undefined | WriteSlspricingconditionrecordServiceRequestBuilder | Array<WriteSlspricingconditionrecordServiceRequestBuilder>, ...rest: Array<WriteSlspricingconditionrecordServiceRequestBuilder>): ODataBatchChangeSetV2<WriteSlspricingconditionrecordServiceRequestBuilder> {
  return new ODataBatchChangeSetV2(variadicArgumentToArray(first, rest));
}

export const defaultSlspricingconditionrecordServicePath = '/sap/opu/odata/sap/API_SLSPRICINGCONDITIONRECORD_SRV';
const map = { 'A_SlsPrcgCndnRecdSuplmnt': SlsPrcgCndnRecdSuplmnt, 'A_SlsPrcgCndnRecdValidity': SlsPrcgCndnRecdValidity, 'A_SlsPrcgCndnRecordScale': SlsPrcgCndnRecordScale, 'A_SlsPrcgCndnSupplementText': SlsPrcgCndnSupplementText, 'A_SlsPrcgConditionRecord': SlsPrcgConditionRecord, 'A_SlsPrcgConditionRecordText': SlsPrcgConditionRecordText };
export type ReadSlspricingconditionrecordServiceRequestBuilder = GetAllRequestBuilderV2<SlsPrcgCndnRecdSuplmnt> | GetAllRequestBuilderV2<SlsPrcgCndnRecdValidity> | GetAllRequestBuilderV2<SlsPrcgCndnRecordScale> | GetAllRequestBuilderV2<SlsPrcgCndnSupplementText> | GetAllRequestBuilderV2<SlsPrcgConditionRecord> | GetAllRequestBuilderV2<SlsPrcgConditionRecordText> | GetByKeyRequestBuilderV2<SlsPrcgCndnRecdSuplmnt> | GetByKeyRequestBuilderV2<SlsPrcgCndnRecdValidity> | GetByKeyRequestBuilderV2<SlsPrcgCndnRecordScale> | GetByKeyRequestBuilderV2<SlsPrcgCndnSupplementText> | GetByKeyRequestBuilderV2<SlsPrcgConditionRecord> | GetByKeyRequestBuilderV2<SlsPrcgConditionRecordText>;
export type WriteSlspricingconditionrecordServiceRequestBuilder = CreateRequestBuilderV2<SlsPrcgCndnRecdSuplmnt> | UpdateRequestBuilderV2<SlsPrcgCndnRecdSuplmnt> | DeleteRequestBuilderV2<SlsPrcgCndnRecdSuplmnt> | CreateRequestBuilderV2<SlsPrcgCndnRecdValidity> | UpdateRequestBuilderV2<SlsPrcgCndnRecdValidity> | DeleteRequestBuilderV2<SlsPrcgCndnRecdValidity> | CreateRequestBuilderV2<SlsPrcgCndnRecordScale> | UpdateRequestBuilderV2<SlsPrcgCndnRecordScale> | DeleteRequestBuilderV2<SlsPrcgCndnRecordScale> | CreateRequestBuilderV2<SlsPrcgCndnSupplementText> | UpdateRequestBuilderV2<SlsPrcgCndnSupplementText> | DeleteRequestBuilderV2<SlsPrcgCndnSupplementText> | CreateRequestBuilderV2<SlsPrcgConditionRecord> | UpdateRequestBuilderV2<SlsPrcgConditionRecord> | DeleteRequestBuilderV2<SlsPrcgConditionRecord> | CreateRequestBuilderV2<SlsPrcgConditionRecordText> | UpdateRequestBuilderV2<SlsPrcgConditionRecordText> | DeleteRequestBuilderV2<SlsPrcgConditionRecordText>;
