/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { DimensionUnits } from './DimensionUnits';

/**
 * Request builder class for operations supported on the [[DimensionUnits]] entity.
 */
export class DimensionUnitsRequestBuilder extends RequestBuilder<DimensionUnits> {
  /**
   * Returns a request builder for retrieving one `DimensionUnits` entity based on its keys.
   * @param unit Key property. See [[DimensionUnits.unit]].
   * @returns A request builder for creating requests to retrieve one `DimensionUnits` entity based on its keys.
   */
  getByKey(unit: string): GetByKeyRequestBuilder<DimensionUnits> {
    return new GetByKeyRequestBuilder(DimensionUnits, { Unit: unit });
  }

  /**
   * Returns a request builder for querying all `DimensionUnits` entities.
   * @returns A request builder for creating requests to retrieve all `DimensionUnits` entities.
   */
  getAll(): GetAllRequestBuilder<DimensionUnits> {
    return new GetAllRequestBuilder(DimensionUnits);
  }
}
