/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder } from '@sap-cloud-sdk/core';
import { CustomerSalesAreaTax } from './CustomerSalesAreaTax';

/**
 * Request builder class for operations supported on the [[CustomerSalesAreaTax]] entity.
 */
export class CustomerSalesAreaTaxRequestBuilder extends RequestBuilder<CustomerSalesAreaTax> {
  /**
   * Returns a request builder for retrieving one `CustomerSalesAreaTax` entity based on its keys.
   * @param customer Key property. See [[CustomerSalesAreaTax.customer]].
   * @param salesOrganization Key property. See [[CustomerSalesAreaTax.salesOrganization]].
   * @param distributionChannel Key property. See [[CustomerSalesAreaTax.distributionChannel]].
   * @param division Key property. See [[CustomerSalesAreaTax.division]].
   * @param departureCountry Key property. See [[CustomerSalesAreaTax.departureCountry]].
   * @param customerTaxCategory Key property. See [[CustomerSalesAreaTax.customerTaxCategory]].
   * @returns A request builder for creating requests to retrieve one `CustomerSalesAreaTax` entity based on its keys.
   */
  getByKey(customer: string, salesOrganization: string, distributionChannel: string, division: string, departureCountry: string, customerTaxCategory: string): GetByKeyRequestBuilder<CustomerSalesAreaTax> {
    return new GetByKeyRequestBuilder(CustomerSalesAreaTax, {
      Customer: customer,
      SalesOrganization: salesOrganization,
      DistributionChannel: distributionChannel,
      Division: division,
      DepartureCountry: departureCountry,
      CustomerTaxCategory: customerTaxCategory
    });
  }

  /**
   * Returns a request builder for querying all `CustomerSalesAreaTax` entities.
   * @returns A request builder for creating requests to retrieve all `CustomerSalesAreaTax` entities.
   */
  getAll(): GetAllRequestBuilder<CustomerSalesAreaTax> {
    return new GetAllRequestBuilder(CustomerSalesAreaTax);
  }

  /**
   * Returns a request builder for creating a `CustomerSalesAreaTax` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustomerSalesAreaTax`.
   */
  create(entity: CustomerSalesAreaTax): CreateRequestBuilder<CustomerSalesAreaTax> {
    return new CreateRequestBuilder(CustomerSalesAreaTax, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `CustomerSalesAreaTax`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustomerSalesAreaTax`.
   */
  update(entity: CustomerSalesAreaTax): UpdateRequestBuilder<CustomerSalesAreaTax> {
    return new UpdateRequestBuilder(CustomerSalesAreaTax, entity);
  }
}
