/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { Currencies } from './Currencies';

/**
 * Request builder class for operations supported on the [[Currencies]] entity.
 */
export class CurrenciesRequestBuilder extends RequestBuilder<Currencies> {
  /**
   * Returns a request builder for retrieving one `Currencies` entity based on its keys.
   * @param code Key property. See [[Currencies.code]].
   * @returns A request builder for creating requests to retrieve one `Currencies` entity based on its keys.
   */
  getByKey(code: string): GetByKeyRequestBuilder<Currencies> {
    return new GetByKeyRequestBuilder(Currencies, { Code: code });
  }

  /**
   * Returns a request builder for querying all `Currencies` entities.
   * @returns A request builder for creating requests to retrieve all `Currencies` entities.
   */
  getAll(): GetAllRequestBuilder<Currencies> {
    return new GetAllRequestBuilder(Currencies);
  }
}
