/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder } from '@sap-cloud-sdk/core';
import { CustomerSalesArea } from './CustomerSalesArea';

/**
 * Request builder class for operations supported on the [[CustomerSalesArea]] entity.
 */
export class CustomerSalesAreaRequestBuilder extends RequestBuilder<CustomerSalesArea> {
  /**
   * Returns a request builder for retrieving one `CustomerSalesArea` entity based on its keys.
   * @param customer Key property. See [[CustomerSalesArea.customer]].
   * @param salesOrganization Key property. See [[CustomerSalesArea.salesOrganization]].
   * @param distributionChannel Key property. See [[CustomerSalesArea.distributionChannel]].
   * @param division Key property. See [[CustomerSalesArea.division]].
   * @returns A request builder for creating requests to retrieve one `CustomerSalesArea` entity based on its keys.
   */
  getByKey(customer: string, salesOrganization: string, distributionChannel: string, division: string): GetByKeyRequestBuilder<CustomerSalesArea> {
    return new GetByKeyRequestBuilder(CustomerSalesArea, {
      Customer: customer,
      SalesOrganization: salesOrganization,
      DistributionChannel: distributionChannel,
      Division: division
    });
  }

  /**
   * Returns a request builder for querying all `CustomerSalesArea` entities.
   * @returns A request builder for creating requests to retrieve all `CustomerSalesArea` entities.
   */
  getAll(): GetAllRequestBuilder<CustomerSalesArea> {
    return new GetAllRequestBuilder(CustomerSalesArea);
  }

  /**
   * Returns a request builder for creating a `CustomerSalesArea` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustomerSalesArea`.
   */
  create(entity: CustomerSalesArea): CreateRequestBuilder<CustomerSalesArea> {
    return new CreateRequestBuilder(CustomerSalesArea, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `CustomerSalesArea`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustomerSalesArea`.
   */
  update(entity: CustomerSalesArea): UpdateRequestBuilder<CustomerSalesArea> {
    return new UpdateRequestBuilder(CustomerSalesArea, entity);
  }
}
