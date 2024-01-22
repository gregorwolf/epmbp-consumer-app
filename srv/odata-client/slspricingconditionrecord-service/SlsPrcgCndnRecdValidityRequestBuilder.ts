/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilderV2, GetByKeyRequestBuilderV2, UpdateRequestBuilderV2 } from '@sap-cloud-sdk/core';
import { SlsPrcgCndnRecdValidity } from './SlsPrcgCndnRecdValidity';

/**
 * Request builder class for operations supported on the [[SlsPrcgCndnRecdValidity]] entity.
 */
export class SlsPrcgCndnRecdValidityRequestBuilder extends RequestBuilder<SlsPrcgCndnRecdValidity> {
  /**
   * Returns a request builder for retrieving one `SlsPrcgCndnRecdValidity` entity based on its keys.
   * @param conditionRecord Key property. See [[SlsPrcgCndnRecdValidity.conditionRecord]].
   * @param conditionValidityEndDate Key property. See [[SlsPrcgCndnRecdValidity.conditionValidityEndDate]].
   * @returns A request builder for creating requests to retrieve one `SlsPrcgCndnRecdValidity` entity based on its keys.
   */
  getByKey(conditionRecord: string, conditionValidityEndDate: Moment): GetByKeyRequestBuilderV2<SlsPrcgCndnRecdValidity> {
    return new GetByKeyRequestBuilderV2(SlsPrcgCndnRecdValidity, {
      ConditionRecord: conditionRecord,
      ConditionValidityEndDate: conditionValidityEndDate
    });
  }

  /**
   * Returns a request builder for querying all `SlsPrcgCndnRecdValidity` entities.
   * @returns A request builder for creating requests to retrieve all `SlsPrcgCndnRecdValidity` entities.
   */
  getAll(): GetAllRequestBuilderV2<SlsPrcgCndnRecdValidity> {
    return new GetAllRequestBuilderV2(SlsPrcgCndnRecdValidity);
  }

  /**
   * Returns a request builder for updating an entity of type `SlsPrcgCndnRecdValidity`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SlsPrcgCndnRecdValidity`.
   */
  update(entity: SlsPrcgCndnRecdValidity): UpdateRequestBuilderV2<SlsPrcgCndnRecdValidity> {
    return new UpdateRequestBuilderV2(SlsPrcgCndnRecdValidity, entity);
  }
}
