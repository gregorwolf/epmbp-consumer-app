/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { Suppliers } from './Suppliers';

/**
 * Request builder class for operations supported on the [[Suppliers]] entity.
 */
export class SuppliersRequestBuilder extends RequestBuilder<Suppliers> {
  /**
   * Returns a request builder for retrieving one `Suppliers` entity based on its keys.
   * @param id Key property. See [[Suppliers.id]].
   * @returns A request builder for creating requests to retrieve one `Suppliers` entity based on its keys.
   */
  getByKey(id: string): GetByKeyRequestBuilder<Suppliers> {
    return new GetByKeyRequestBuilder(Suppliers, { Id: id });
  }

  /**
   * Returns a request builder for querying all `Suppliers` entities.
   * @returns A request builder for creating requests to retrieve all `Suppliers` entities.
   */
  getAll(): GetAllRequestBuilder<Suppliers> {
    return new GetAllRequestBuilder(Suppliers);
  }
}
