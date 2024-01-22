import { CreateRequestBuilderV2, DeleteRequestBuilderV2, GetAllRequestBuilderV2, GetByKeyRequestBuilderV2, ODataBatchChangeSetV2, ODataBatchRequestBuilderV2, UpdateRequestBuilderV2 } from '@sap-cloud-sdk/core';
import { SlsPrcgCndnRecdSuplmnt, SlsPrcgCndnRecdValidity, SlsPrcgCndnRecordScale, SlsPrcgCndnSupplementText, SlsPrcgConditionRecord, SlsPrcgConditionRecordText } from './index';
/**
 * Batch builder for operations supported on the Slspricingconditionrecord Service.
 * @param requests The requests of the batch
 * @returns A request builder for batch.
 */
export declare function batch(...requests: Array<ReadSlspricingconditionrecordServiceRequestBuilder | ODataBatchChangeSetV2<WriteSlspricingconditionrecordServiceRequestBuilder>>): ODataBatchRequestBuilderV2;
export declare function batch(requests: Array<ReadSlspricingconditionrecordServiceRequestBuilder | ODataBatchChangeSetV2<WriteSlspricingconditionrecordServiceRequestBuilder>>): ODataBatchRequestBuilderV2;
/**
 * Change set constructor consists of write operations supported on the Slspricingconditionrecord Service.
 * @param requests The requests of the change set
 * @returns A change set for batch.
 */
export declare function changeset(...requests: Array<WriteSlspricingconditionrecordServiceRequestBuilder>): ODataBatchChangeSetV2<WriteSlspricingconditionrecordServiceRequestBuilder>;
export declare function changeset(requests: Array<WriteSlspricingconditionrecordServiceRequestBuilder>): ODataBatchChangeSetV2<WriteSlspricingconditionrecordServiceRequestBuilder>;
export declare const defaultSlspricingconditionrecordServicePath = "/sap/opu/odata/sap/API_SLSPRICINGCONDITIONRECORD_SRV";
export declare type ReadSlspricingconditionrecordServiceRequestBuilder = GetAllRequestBuilderV2<SlsPrcgCndnRecdSuplmnt> | GetAllRequestBuilderV2<SlsPrcgCndnRecdValidity> | GetAllRequestBuilderV2<SlsPrcgCndnRecordScale> | GetAllRequestBuilderV2<SlsPrcgCndnSupplementText> | GetAllRequestBuilderV2<SlsPrcgConditionRecord> | GetAllRequestBuilderV2<SlsPrcgConditionRecordText> | GetByKeyRequestBuilderV2<SlsPrcgCndnRecdSuplmnt> | GetByKeyRequestBuilderV2<SlsPrcgCndnRecdValidity> | GetByKeyRequestBuilderV2<SlsPrcgCndnRecordScale> | GetByKeyRequestBuilderV2<SlsPrcgCndnSupplementText> | GetByKeyRequestBuilderV2<SlsPrcgConditionRecord> | GetByKeyRequestBuilderV2<SlsPrcgConditionRecordText>;
export declare type WriteSlspricingconditionrecordServiceRequestBuilder = CreateRequestBuilderV2<SlsPrcgCndnRecdSuplmnt> | UpdateRequestBuilderV2<SlsPrcgCndnRecdSuplmnt> | DeleteRequestBuilderV2<SlsPrcgCndnRecdSuplmnt> | CreateRequestBuilderV2<SlsPrcgCndnRecdValidity> | UpdateRequestBuilderV2<SlsPrcgCndnRecdValidity> | DeleteRequestBuilderV2<SlsPrcgCndnRecdValidity> | CreateRequestBuilderV2<SlsPrcgCndnRecordScale> | UpdateRequestBuilderV2<SlsPrcgCndnRecordScale> | DeleteRequestBuilderV2<SlsPrcgCndnRecordScale> | CreateRequestBuilderV2<SlsPrcgCndnSupplementText> | UpdateRequestBuilderV2<SlsPrcgCndnSupplementText> | DeleteRequestBuilderV2<SlsPrcgCndnSupplementText> | CreateRequestBuilderV2<SlsPrcgConditionRecord> | UpdateRequestBuilderV2<SlsPrcgConditionRecord> | DeleteRequestBuilderV2<SlsPrcgConditionRecord> | CreateRequestBuilderV2<SlsPrcgConditionRecordText> | UpdateRequestBuilderV2<SlsPrcgConditionRecordText> | DeleteRequestBuilderV2<SlsPrcgConditionRecordText>;
//# sourceMappingURL=BatchRequest.d.ts.map