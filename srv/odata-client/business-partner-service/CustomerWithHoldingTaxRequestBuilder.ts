/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV2, GetByKeyRequestBuilderV2, CreateRequestBuilderV2, UpdateRequestBuilderV2, DeleteRequestBuilderV2 } from '@sap-cloud-sdk/core';
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
  getByKey(customer: string, companyCode: string, withholdingTaxType: string): GetByKeyRequestBuilderV2<CustomerWithHoldingTax> {
    return new GetByKeyRequestBuilderV2(CustomerWithHoldingTax, {
      Customer: customer,
      CompanyCode: companyCode,
      WithholdingTaxType: withholdingTaxType
    });
  }

  /**
   * Returns a request builder for querying all `CustomerWithHoldingTax` entities.
   * @returns A request builder for creating requests to retrieve all `CustomerWithHoldingTax` entities.
   */
  getAll(): GetAllRequestBuilderV2<CustomerWithHoldingTax> {
    return new GetAllRequestBuilderV2(CustomerWithHoldingTax);
  }

  /**
   * Returns a request builder for creating a `CustomerWithHoldingTax` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustomerWithHoldingTax`.
   */
  create(entity: CustomerWithHoldingTax): CreateRequestBuilderV2<CustomerWithHoldingTax> {
    return new CreateRequestBuilderV2(CustomerWithHoldingTax, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `CustomerWithHoldingTax`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustomerWithHoldingTax`.
   */
  update(entity: CustomerWithHoldingTax): UpdateRequestBuilderV2<CustomerWithHoldingTax> {
    return new UpdateRequestBuilderV2(CustomerWithHoldingTax, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CustomerWithHoldingTax`.
   * @param customer Key property. See [[CustomerWithHoldingTax.customer]].
   * @param companyCode Key property. See [[CustomerWithHoldingTax.companyCode]].
   * @param withholdingTaxType Key property. See [[CustomerWithHoldingTax.withholdingTaxType]].
   * @returns A request builder for creating requests that delete an entity of type `CustomerWithHoldingTax`.
   */
  delete(customer: string, companyCode: string, withholdingTaxType: string): DeleteRequestBuilderV2<CustomerWithHoldingTax>;
  /**
   * Returns a request builder for deleting an entity of type `CustomerWithHoldingTax`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustomerWithHoldingTax` by taking the entity as a parameter.
   */
  delete(entity: CustomerWithHoldingTax): DeleteRequestBuilderV2<CustomerWithHoldingTax>;
  delete(customerOrEntity: any, companyCode?: string, withholdingTaxType?: string): DeleteRequestBuilderV2<CustomerWithHoldingTax> {
    return new DeleteRequestBuilderV2(CustomerWithHoldingTax, customerOrEntity instanceof CustomerWithHoldingTax ? customerOrEntity : {
      Customer: customerOrEntity!,
      CompanyCode: companyCode!,
      WithholdingTaxType: withholdingTaxType!
    });
  }
}
