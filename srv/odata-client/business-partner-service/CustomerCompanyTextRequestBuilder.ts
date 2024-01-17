/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV2, GetByKeyRequestBuilderV2, CreateRequestBuilderV2, UpdateRequestBuilderV2, DeleteRequestBuilderV2 } from '@sap-cloud-sdk/core';
import { CustomerCompanyText } from './CustomerCompanyText';

/**
 * Request builder class for operations supported on the [[CustomerCompanyText]] entity.
 */
export class CustomerCompanyTextRequestBuilder extends RequestBuilder<CustomerCompanyText> {
  /**
   * Returns a request builder for retrieving one `CustomerCompanyText` entity based on its keys.
   * @param customer Key property. See [[CustomerCompanyText.customer]].
   * @param companyCode Key property. See [[CustomerCompanyText.companyCode]].
   * @param language Key property. See [[CustomerCompanyText.language]].
   * @param longTextId Key property. See [[CustomerCompanyText.longTextId]].
   * @returns A request builder for creating requests to retrieve one `CustomerCompanyText` entity based on its keys.
   */
  getByKey(customer: string, companyCode: string, language: string, longTextId: string): GetByKeyRequestBuilderV2<CustomerCompanyText> {
    return new GetByKeyRequestBuilderV2(CustomerCompanyText, {
      Customer: customer,
      CompanyCode: companyCode,
      Language: language,
      LongTextID: longTextId
    });
  }

  /**
   * Returns a request builder for querying all `CustomerCompanyText` entities.
   * @returns A request builder for creating requests to retrieve all `CustomerCompanyText` entities.
   */
  getAll(): GetAllRequestBuilderV2<CustomerCompanyText> {
    return new GetAllRequestBuilderV2(CustomerCompanyText);
  }

  /**
   * Returns a request builder for creating a `CustomerCompanyText` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustomerCompanyText`.
   */
  create(entity: CustomerCompanyText): CreateRequestBuilderV2<CustomerCompanyText> {
    return new CreateRequestBuilderV2(CustomerCompanyText, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `CustomerCompanyText`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustomerCompanyText`.
   */
  update(entity: CustomerCompanyText): UpdateRequestBuilderV2<CustomerCompanyText> {
    return new UpdateRequestBuilderV2(CustomerCompanyText, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CustomerCompanyText`.
   * @param customer Key property. See [[CustomerCompanyText.customer]].
   * @param companyCode Key property. See [[CustomerCompanyText.companyCode]].
   * @param language Key property. See [[CustomerCompanyText.language]].
   * @param longTextId Key property. See [[CustomerCompanyText.longTextId]].
   * @returns A request builder for creating requests that delete an entity of type `CustomerCompanyText`.
   */
  delete(customer: string, companyCode: string, language: string, longTextId: string): DeleteRequestBuilderV2<CustomerCompanyText>;
  /**
   * Returns a request builder for deleting an entity of type `CustomerCompanyText`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustomerCompanyText` by taking the entity as a parameter.
   */
  delete(entity: CustomerCompanyText): DeleteRequestBuilderV2<CustomerCompanyText>;
  delete(customerOrEntity: any, companyCode?: string, language?: string, longTextId?: string): DeleteRequestBuilderV2<CustomerCompanyText> {
    return new DeleteRequestBuilderV2(CustomerCompanyText, customerOrEntity instanceof CustomerCompanyText ? customerOrEntity : {
      Customer: customerOrEntity!,
      CompanyCode: companyCode!,
      Language: language!,
      LongTextID: longTextId!
    });
  }
}
