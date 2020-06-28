/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { WeightUnits } from './WeightUnits';

/**
 * Request builder class for operations supported on the [[WeightUnits]] entity.
 */
export class WeightUnitsRequestBuilder extends RequestBuilder<WeightUnits> {
  /**
   * Returns a request builder for retrieving one `WeightUnits` entity based on its keys.
   * @param unit Key property. See [[WeightUnits.unit]].
   * @returns A request builder for creating requests to retrieve one `WeightUnits` entity based on its keys.
   */
  getByKey(unit: string): GetByKeyRequestBuilder<WeightUnits> {
    return new GetByKeyRequestBuilder(WeightUnits, { Unit: unit });
  }

  /**
   * Returns a request builder for querying all `WeightUnits` entities.
   * @returns A request builder for creating requests to retrieve all `WeightUnits` entities.
   */
  getAll(): GetAllRequestBuilder<WeightUnits> {
    return new GetAllRequestBuilder(WeightUnits);
  }
}
