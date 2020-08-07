/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { CustomerTaxGrouping } from './CustomerTaxGrouping';

/**
 * Request builder class for operations supported on the [[CustomerTaxGrouping]] entity.
 */
export class CustomerTaxGroupingRequestBuilder extends RequestBuilder<CustomerTaxGrouping> {
  /**
   * Returns a request builder for retrieving one `CustomerTaxGrouping` entity based on its keys.
   * @param customer Key property. See [[CustomerTaxGrouping.customer]].
   * @param customerTaxGroupingCode Key property. See [[CustomerTaxGrouping.customerTaxGroupingCode]].
   * @returns A request builder for creating requests to retrieve one `CustomerTaxGrouping` entity based on its keys.
   */
  getByKey(customer: string, customerTaxGroupingCode: string): GetByKeyRequestBuilder<CustomerTaxGrouping> {
    return new GetByKeyRequestBuilder(CustomerTaxGrouping, {
      Customer: customer,
      CustomerTaxGroupingCode: customerTaxGroupingCode
    });
  }

  /**
   * Returns a request builder for querying all `CustomerTaxGrouping` entities.
   * @returns A request builder for creating requests to retrieve all `CustomerTaxGrouping` entities.
   */
  getAll(): GetAllRequestBuilder<CustomerTaxGrouping> {
    return new GetAllRequestBuilder(CustomerTaxGrouping);
  }

  /**
   * Returns a request builder for updating an entity of type `CustomerTaxGrouping`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustomerTaxGrouping`.
   */
  update(entity: CustomerTaxGrouping): UpdateRequestBuilder<CustomerTaxGrouping> {
    return new UpdateRequestBuilder(CustomerTaxGrouping, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CustomerTaxGrouping`.
   * @param customer Key property. See [[CustomerTaxGrouping.customer]].
   * @param customerTaxGroupingCode Key property. See [[CustomerTaxGrouping.customerTaxGroupingCode]].
   * @returns A request builder for creating requests that delete an entity of type `CustomerTaxGrouping`.
   */
  delete(customer: string, customerTaxGroupingCode: string): DeleteRequestBuilder<CustomerTaxGrouping>;
  /**
   * Returns a request builder for deleting an entity of type `CustomerTaxGrouping`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustomerTaxGrouping` by taking the entity as a parameter.
   */
  delete(entity: CustomerTaxGrouping): DeleteRequestBuilder<CustomerTaxGrouping>;
  delete(customerOrEntity: any, customerTaxGroupingCode?: string): DeleteRequestBuilder<CustomerTaxGrouping> {
    return new DeleteRequestBuilder(CustomerTaxGrouping, customerOrEntity instanceof CustomerTaxGrouping ? customerOrEntity : {
      Customer: customerOrEntity!,
      CustomerTaxGroupingCode: customerTaxGroupingCode!
    });
  }
}
