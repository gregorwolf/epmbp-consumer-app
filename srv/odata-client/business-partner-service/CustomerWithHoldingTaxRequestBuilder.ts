/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { CustomerWithHoldingTax } from './CustomerWithHoldingTax';

/**
 * Request builder class for operations supported on the [[CustomerWithHoldingTax]] entity.
 */
export class CustomerWithHoldingTaxRequestBuilder extends RequestBuilder<CustomerWithHoldingTax> {
  /**
   * Returns a request builder for retrieving one `CustomerWithHoldingTax` entity based on its keys.
   * @param customer Key property. See [[CustomerWithHoldingTax.customer]].
   * @param companyCode Key property. See [[CustomerWithHoldingTax.companyCode]].
   * @param withholdingTaxType Key property. See [[CustomerWithHoldingTax.withholdingTaxType]].
   * @returns A request builder for creating requests to retrieve one `CustomerWithHoldingTax` entity based on its keys.
   */
  getByKey(customer: string, companyCode: string, withholdingTaxType: string): GetByKeyRequestBuilder<CustomerWithHoldingTax> {
    return new GetByKeyRequestBuilder(CustomerWithHoldingTax, {
      Customer: customer,
      CompanyCode: companyCode,
      WithholdingTaxType: withholdingTaxType
    });
  }

  /**
   * Returns a request builder for querying all `CustomerWithHoldingTax` entities.
   * @returns A request builder for creating requests to retrieve all `CustomerWithHoldingTax` entities.
   */
  getAll(): GetAllRequestBuilder<CustomerWithHoldingTax> {
    return new GetAllRequestBuilder(CustomerWithHoldingTax);
  }

  /**
   * Returns a request builder for creating a `CustomerWithHoldingTax` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustomerWithHoldingTax`.
   */
  create(entity: CustomerWithHoldingTax): CreateRequestBuilder<CustomerWithHoldingTax> {
    return new CreateRequestBuilder(CustomerWithHoldingTax, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `CustomerWithHoldingTax`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustomerWithHoldingTax`.
   */
  update(entity: CustomerWithHoldingTax): UpdateRequestBuilder<CustomerWithHoldingTax> {
    return new UpdateRequestBuilder(CustomerWithHoldingTax, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CustomerWithHoldingTax`.
   * @param customer Key property. See [[CustomerWithHoldingTax.customer]].
   * @param companyCode Key property. See [[CustomerWithHoldingTax.companyCode]].
   * @param withholdingTaxType Key property. See [[CustomerWithHoldingTax.withholdingTaxType]].
   * @returns A request builder for creating requests that delete an entity of type `CustomerWithHoldingTax`.
   */
  delete(customer: string, companyCode: string, withholdingTaxType: string): DeleteRequestBuilder<CustomerWithHoldingTax>;
  /**
   * Returns a request builder for deleting an entity of type `CustomerWithHoldingTax`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustomerWithHoldingTax` by taking the entity as a parameter.
   */
  delete(entity: CustomerWithHoldingTax): DeleteRequestBuilder<CustomerWithHoldingTax>;
  delete(customerOrEntity: any, companyCode?: string, withholdingTaxType?: string): DeleteRequestBuilder<CustomerWithHoldingTax> {
    return new DeleteRequestBuilder(CustomerWithHoldingTax, customerOrEntity instanceof CustomerWithHoldingTax ? customerOrEntity : {
      Customer: customerOrEntity!,
      CompanyCode: companyCode!,
      WithholdingTaxType: withholdingTaxType!
    });
  }
}
