/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV2, GetByKeyRequestBuilderV2, CreateRequestBuilderV2, UpdateRequestBuilderV2 } from '@sap-cloud-sdk/core';
import { CustomerCompany } from './CustomerCompany';

/**
 * Request builder class for operations supported on the [[CustomerCompany]] entity.
 */
export class CustomerCompanyRequestBuilder extends RequestBuilder<CustomerCompany> {
  /**
   * Returns a request builder for retrieving one `CustomerCompany` entity based on its keys.
   * @param customer Key property. See [[CustomerCompany.customer]].
   * @param companyCode Key property. See [[CustomerCompany.companyCode]].
   * @returns A request builder for creating requests to retrieve one `CustomerCompany` entity based on its keys.
   */
  getByKey(customer: string, companyCode: string): GetByKeyRequestBuilderV2<CustomerCompany> {
    return new GetByKeyRequestBuilderV2(CustomerCompany, {
      Customer: customer,
      CompanyCode: companyCode
    });
  }

  /**
   * Returns a request builder for querying all `CustomerCompany` entities.
   * @returns A request builder for creating requests to retrieve all `CustomerCompany` entities.
   */
  getAll(): GetAllRequestBuilderV2<CustomerCompany> {
    return new GetAllRequestBuilderV2(CustomerCompany);
  }

  /**
   * Returns a request builder for creating a `CustomerCompany` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustomerCompany`.
   */
  create(entity: CustomerCompany): CreateRequestBuilderV2<CustomerCompany> {
    return new CreateRequestBuilderV2(CustomerCompany, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `CustomerCompany`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustomerCompany`.
   */
  update(entity: CustomerCompany): UpdateRequestBuilderV2<CustomerCompany> {
    return new UpdateRequestBuilderV2(CustomerCompany, entity);
  }
}
