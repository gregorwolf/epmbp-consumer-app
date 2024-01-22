/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV2, GetByKeyRequestBuilderV2, CreateRequestBuilderV2, UpdateRequestBuilderV2, DeleteRequestBuilderV2 } from '@sap-cloud-sdk/core';
import { SlsPrcgConditionRecord } from './SlsPrcgConditionRecord';

/**
 * Request builder class for operations supported on the [[SlsPrcgConditionRecord]] entity.
 */
export class SlsPrcgConditionRecordRequestBuilder extends RequestBuilder<SlsPrcgConditionRecord> {
  /**
   * Returns a request builder for retrieving one `SlsPrcgConditionRecord` entity based on its keys.
   * @param conditionRecord Key property. See [[SlsPrcgConditionRecord.conditionRecord]].
   * @returns A request builder for creating requests to retrieve one `SlsPrcgConditionRecord` entity based on its keys.
   */
  getByKey(conditionRecord: string): GetByKeyRequestBuilderV2<SlsPrcgConditionRecord> {
    return new GetByKeyRequestBuilderV2(SlsPrcgConditionRecord, { ConditionRecord: conditionRecord });
  }

  /**
   * Returns a request builder for querying all `SlsPrcgConditionRecord` entities.
   * @returns A request builder for creating requests to retrieve all `SlsPrcgConditionRecord` entities.
   */
  getAll(): GetAllRequestBuilderV2<SlsPrcgConditionRecord> {
    return new GetAllRequestBuilderV2(SlsPrcgConditionRecord);
  }

  /**
   * Returns a request builder for creating a `SlsPrcgConditionRecord` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SlsPrcgConditionRecord`.
   */
  create(entity: SlsPrcgConditionRecord): CreateRequestBuilderV2<SlsPrcgConditionRecord> {
    return new CreateRequestBuilderV2(SlsPrcgConditionRecord, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `SlsPrcgConditionRecord`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SlsPrcgConditionRecord`.
   */
  update(entity: SlsPrcgConditionRecord): UpdateRequestBuilderV2<SlsPrcgConditionRecord> {
    return new UpdateRequestBuilderV2(SlsPrcgConditionRecord, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `SlsPrcgConditionRecord`.
   * @param conditionRecord Key property. See [[SlsPrcgConditionRecord.conditionRecord]].
   * @returns A request builder for creating requests that delete an entity of type `SlsPrcgConditionRecord`.
   */
  delete(conditionRecord: string): DeleteRequestBuilderV2<SlsPrcgConditionRecord>;
  /**
   * Returns a request builder for deleting an entity of type `SlsPrcgConditionRecord`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SlsPrcgConditionRecord` by taking the entity as a parameter.
   */
  delete(entity: SlsPrcgConditionRecord): DeleteRequestBuilderV2<SlsPrcgConditionRecord>;
  delete(conditionRecordOrEntity: any): DeleteRequestBuilderV2<SlsPrcgConditionRecord> {
    return new DeleteRequestBuilderV2(SlsPrcgConditionRecord, conditionRecordOrEntity instanceof SlsPrcgConditionRecord ? conditionRecordOrEntity : { ConditionRecord: conditionRecordOrEntity! });
  }
}
