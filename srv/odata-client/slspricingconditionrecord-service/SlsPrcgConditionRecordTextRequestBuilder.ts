/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV2, GetByKeyRequestBuilderV2, CreateRequestBuilderV2, UpdateRequestBuilderV2, DeleteRequestBuilderV2 } from '@sap-cloud-sdk/core';
import { SlsPrcgConditionRecordText } from './SlsPrcgConditionRecordText';

/**
 * Request builder class for operations supported on the [[SlsPrcgConditionRecordText]] entity.
 */
export class SlsPrcgConditionRecordTextRequestBuilder extends RequestBuilder<SlsPrcgConditionRecordText> {
  /**
   * Returns a request builder for retrieving one `SlsPrcgConditionRecordText` entity based on its keys.
   * @param conditionRecord Key property. See [[SlsPrcgConditionRecordText.conditionRecord]].
   * @param conditionSequentialNumber Key property. See [[SlsPrcgConditionRecordText.conditionSequentialNumber]].
   * @param language Key property. See [[SlsPrcgConditionRecordText.language]].
   * @returns A request builder for creating requests to retrieve one `SlsPrcgConditionRecordText` entity based on its keys.
   */
  getByKey(conditionRecord: string, conditionSequentialNumber: string, language: string): GetByKeyRequestBuilderV2<SlsPrcgConditionRecordText> {
    return new GetByKeyRequestBuilderV2(SlsPrcgConditionRecordText, {
      ConditionRecord: conditionRecord,
      ConditionSequentialNumber: conditionSequentialNumber,
      Language: language
    });
  }

  /**
   * Returns a request builder for querying all `SlsPrcgConditionRecordText` entities.
   * @returns A request builder for creating requests to retrieve all `SlsPrcgConditionRecordText` entities.
   */
  getAll(): GetAllRequestBuilderV2<SlsPrcgConditionRecordText> {
    return new GetAllRequestBuilderV2(SlsPrcgConditionRecordText);
  }

  /**
   * Returns a request builder for creating a `SlsPrcgConditionRecordText` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SlsPrcgConditionRecordText`.
   */
  create(entity: SlsPrcgConditionRecordText): CreateRequestBuilderV2<SlsPrcgConditionRecordText> {
    return new CreateRequestBuilderV2(SlsPrcgConditionRecordText, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `SlsPrcgConditionRecordText`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SlsPrcgConditionRecordText`.
   */
  update(entity: SlsPrcgConditionRecordText): UpdateRequestBuilderV2<SlsPrcgConditionRecordText> {
    return new UpdateRequestBuilderV2(SlsPrcgConditionRecordText, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `SlsPrcgConditionRecordText`.
   * @param conditionRecord Key property. See [[SlsPrcgConditionRecordText.conditionRecord]].
   * @param conditionSequentialNumber Key property. See [[SlsPrcgConditionRecordText.conditionSequentialNumber]].
   * @param language Key property. See [[SlsPrcgConditionRecordText.language]].
   * @returns A request builder for creating requests that delete an entity of type `SlsPrcgConditionRecordText`.
   */
  delete(conditionRecord: string, conditionSequentialNumber: string, language: string): DeleteRequestBuilderV2<SlsPrcgConditionRecordText>;
  /**
   * Returns a request builder for deleting an entity of type `SlsPrcgConditionRecordText`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SlsPrcgConditionRecordText` by taking the entity as a parameter.
   */
  delete(entity: SlsPrcgConditionRecordText): DeleteRequestBuilderV2<SlsPrcgConditionRecordText>;
  delete(conditionRecordOrEntity: any, conditionSequentialNumber?: string, language?: string): DeleteRequestBuilderV2<SlsPrcgConditionRecordText> {
    return new DeleteRequestBuilderV2(SlsPrcgConditionRecordText, conditionRecordOrEntity instanceof SlsPrcgConditionRecordText ? conditionRecordOrEntity : {
      ConditionRecord: conditionRecordOrEntity!,
      ConditionSequentialNumber: conditionSequentialNumber!,
      Language: language!
    });
  }
}
