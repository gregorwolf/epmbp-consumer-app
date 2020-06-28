/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { Products } from './Products';

/**
 * Request builder class for operations supported on the [[Products]] entity.
 */
export class ProductsRequestBuilder extends RequestBuilder<Products> {
  /**
   * Returns a request builder for retrieving one `Products` entity based on its keys.
   * @param id Key property. See [[Products.id]].
   * @returns A request builder for creating requests to retrieve one `Products` entity based on its keys.
   */
  getByKey(id: string): GetByKeyRequestBuilder<Products> {
    return new GetByKeyRequestBuilder(Products, { Id: id });
  }

  /**
   * Returns a request builder for querying all `Products` entities.
   * @returns A request builder for creating requests to retrieve all `Products` entities.
   */
  getAll(): GetAllRequestBuilder<Products> {
    return new GetAllRequestBuilder(Products);
  }
}
