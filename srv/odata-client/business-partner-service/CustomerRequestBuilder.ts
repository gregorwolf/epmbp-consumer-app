/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV2, GetByKeyRequestBuilderV2, UpdateRequestBuilderV2 } from '@sap-cloud-sdk/core';
import { Customer } from './Customer';

/**
 * Request builder class for operations supported on the [[Customer]] entity.
 */
export class CustomerRequestBuilder extends RequestBuilder<Customer> {
  /**
   * Returns a request builder for retrieving one `Customer` entity based on its keys.
   * @param customer Key property. See [[Customer.customer]].
   * @returns A request builder for creating requests to retrieve one `Customer` entity based on its keys.
   */
  getByKey(customer: string): GetByKeyRequestBuilderV2<Customer> {
    return new GetByKeyRequestBuilderV2(Customer, { Customer: customer });
  }

  /**
   * Returns a request builder for querying all `Customer` entities.
   * @returns A request builder for creating requests to retrieve all `Customer` entities.
   */
  getAll(): GetAllRequestBuilderV2<Customer> {
    return new GetAllRequestBuilderV2(Customer);
  }

  /**
   * Returns a request builder for updating an entity of type `Customer`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Customer`.
   */
  update(entity: Customer): UpdateRequestBuilderV2<Customer> {
    return new UpdateRequestBuilderV2(Customer, entity);
  }
}
