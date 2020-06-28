/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { QuantityUnits } from './QuantityUnits';

/**
 * Request builder class for operations supported on the [[QuantityUnits]] entity.
 */
export class QuantityUnitsRequestBuilder extends RequestBuilder<QuantityUnits> {
  /**
   * Returns a request builder for retrieving one `QuantityUnits` entity based on its keys.
   * @param unit Key property. See [[QuantityUnits.unit]].
   * @returns A request builder for creating requests to retrieve one `QuantityUnits` entity based on its keys.
   */
  getByKey(unit: string): GetByKeyRequestBuilder<QuantityUnits> {
    return new GetByKeyRequestBuilder(QuantityUnits, { Unit: unit });
  }

  /**
   * Returns a request builder for querying all `QuantityUnits` entities.
   * @returns A request builder for creating requests to retrieve all `QuantityUnits` entities.
   */
  getAll(): GetAllRequestBuilder<QuantityUnits> {
    return new GetAllRequestBuilder(QuantityUnits);
  }
}
