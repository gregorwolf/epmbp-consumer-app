/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV2, GetByKeyRequestBuilderV2, CreateRequestBuilderV2, UpdateRequestBuilderV2, DeleteRequestBuilderV2 } from '@sap-cloud-sdk/core';
import { SlsPrcgCndnRecdSuplmnt } from './SlsPrcgCndnRecdSuplmnt';

/**
 * Request builder class for operations supported on the [[SlsPrcgCndnRecdSuplmnt]] entity.
 */
export class SlsPrcgCndnRecdSuplmntRequestBuilder extends RequestBuilder<SlsPrcgCndnRecdSuplmnt> {
  /**
   * Returns a request builder for retrieving one `SlsPrcgCndnRecdSuplmnt` entity based on its keys.
   * @param conditionRecord Key property. See [[SlsPrcgCndnRecdSuplmnt.conditionRecord]].
   * @param conditionSequentialNumber Key property. See [[SlsPrcgCndnRecdSuplmnt.conditionSequentialNumber]].
   * @returns A request builder for creating requests to retrieve one `SlsPrcgCndnRecdSuplmnt` entity based on its keys.
   */
  getByKey(conditionRecord: string, conditionSequentialNumber: string): GetByKeyRequestBuilderV2<SlsPrcgCndnRecdSuplmnt> {
    return new GetByKeyRequestBuilderV2(SlsPrcgCndnRecdSuplmnt, {
      ConditionRecord: conditionRecord,
      ConditionSequentialNumber: conditionSequentialNumber
    });
  }

  /**
   * Returns a request builder for querying all `SlsPrcgCndnRecdSuplmnt` entities.
   * @returns A request builder for creating requests to retrieve all `SlsPrcgCndnRecdSuplmnt` entities.
   */
  getAll(): GetAllRequestBuilderV2<SlsPrcgCndnRecdSuplmnt> {
    return new GetAllRequestBuilderV2(SlsPrcgCndnRecdSuplmnt);
  }

  /**
   * Returns a request builder for creating a `SlsPrcgCndnRecdSuplmnt` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SlsPrcgCndnRecdSuplmnt`.
   */
  create(entity: SlsPrcgCndnRecdSuplmnt): CreateRequestBuilderV2<SlsPrcgCndnRecdSuplmnt> {
    return new CreateRequestBuilderV2(SlsPrcgCndnRecdSuplmnt, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `SlsPrcgCndnRecdSuplmnt`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SlsPrcgCndnRecdSuplmnt`.
   */
  update(entity: SlsPrcgCndnRecdSuplmnt): UpdateRequestBuilderV2<SlsPrcgCndnRecdSuplmnt> {
    return new UpdateRequestBuilderV2(SlsPrcgCndnRecdSuplmnt, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `SlsPrcgCndnRecdSuplmnt`.
   * @param conditionRecord Key property. See [[SlsPrcgCndnRecdSuplmnt.conditionRecord]].
   * @param conditionSequentialNumber Key property. See [[SlsPrcgCndnRecdSuplmnt.conditionSequentialNumber]].
   * @returns A request builder for creating requests that delete an entity of type `SlsPrcgCndnRecdSuplmnt`.
   */
  delete(conditionRecord: string, conditionSequentialNumber: string): DeleteRequestBuilderV2<SlsPrcgCndnRecdSuplmnt>;
  /**
   * Returns a request builder for deleting an entity of type `SlsPrcgCndnRecdSuplmnt`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SlsPrcgCndnRecdSuplmnt` by taking the entity as a parameter.
   */
  delete(entity: SlsPrcgCndnRecdSuplmnt): DeleteRequestBuilderV2<SlsPrcgCndnRecdSuplmnt>;
  delete(conditionRecordOrEntity: any, conditionSequentialNumber?: string): DeleteRequestBuilderV2<SlsPrcgCndnRecdSuplmnt> {
    return new DeleteRequestBuilderV2(SlsPrcgCndnRecdSuplmnt, conditionRecordOrEntity instanceof SlsPrcgCndnRecdSuplmnt ? conditionRecordOrEntity : {
      ConditionRecord: conditionRecordOrEntity!,
      ConditionSequentialNumber: conditionSequentialNumber!
    });
  }
}
