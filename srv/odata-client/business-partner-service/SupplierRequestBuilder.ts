/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV2, GetByKeyRequestBuilderV2, UpdateRequestBuilderV2 } from '@sap-cloud-sdk/core';
import { Supplier } from './Supplier';

/**
 * Request builder class for operations supported on the [[Supplier]] entity.
 */
export class SupplierRequestBuilder extends RequestBuilder<Supplier> {
  /**
   * Returns a request builder for retrieving one `Supplier` entity based on its keys.
   * @param supplier Key property. See [[Supplier.supplier]].
   * @returns A request builder for creating requests to retrieve one `Supplier` entity based on its keys.
   */
  getByKey(supplier: string): GetByKeyRequestBuilderV2<Supplier> {
    return new GetByKeyRequestBuilderV2(Supplier, { Supplier: supplier });
  }

  /**
   * Returns a request builder for querying all `Supplier` entities.
   * @returns A request builder for creating requests to retrieve all `Supplier` entities.
   */
  getAll(): GetAllRequestBuilderV2<Supplier> {
    return new GetAllRequestBuilderV2(Supplier);
  }

  /**
   * Returns a request builder for updating an entity of type `Supplier`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Supplier`.
   */
  update(entity: Supplier): UpdateRequestBuilderV2<Supplier> {
    return new UpdateRequestBuilderV2(Supplier, entity);
  }
}
