/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { CustomerText } from './CustomerText';

/**
 * Request builder class for operations supported on the [[CustomerText]] entity.
 */
export class CustomerTextRequestBuilder extends RequestBuilder<CustomerText> {
  /**
   * Returns a request builder for retrieving one `CustomerText` entity based on its keys.
   * @param customer Key property. See [[CustomerText.customer]].
   * @param language Key property. See [[CustomerText.language]].
   * @param longTextId Key property. See [[CustomerText.longTextId]].
   * @returns A request builder for creating requests to retrieve one `CustomerText` entity based on its keys.
   */
  getByKey(customer: string, language: string, longTextId: string): GetByKeyRequestBuilder<CustomerText> {
    return new GetByKeyRequestBuilder(CustomerText, {
      Customer: customer,
      Language: language,
      LongTextID: longTextId
    });
  }

  /**
   * Returns a request builder for querying all `CustomerText` entities.
   * @returns A request builder for creating requests to retrieve all `CustomerText` entities.
   */
  getAll(): GetAllRequestBuilder<CustomerText> {
    return new GetAllRequestBuilder(CustomerText);
  }

  /**
   * Returns a request builder for creating a `CustomerText` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustomerText`.
   */
  create(entity: CustomerText): CreateRequestBuilder<CustomerText> {
    return new CreateRequestBuilder(CustomerText, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `CustomerText`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustomerText`.
   */
  update(entity: CustomerText): UpdateRequestBuilder<CustomerText> {
    return new UpdateRequestBuilder(CustomerText, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CustomerText`.
   * @param customer Key property. See [[CustomerText.customer]].
   * @param language Key property. See [[CustomerText.language]].
   * @param longTextId Key property. See [[CustomerText.longTextId]].
   * @returns A request builder for creating requests that delete an entity of type `CustomerText`.
   */
  delete(customer: string, language: string, longTextId: string): DeleteRequestBuilder<CustomerText>;
  /**
   * Returns a request builder for deleting an entity of type `CustomerText`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustomerText` by taking the entity as a parameter.
   */
  delete(entity: CustomerText): DeleteRequestBuilder<CustomerText>;
  delete(customerOrEntity: any, language?: string, longTextId?: string): DeleteRequestBuilder<CustomerText> {
    return new DeleteRequestBuilder(CustomerText, customerOrEntity instanceof CustomerText ? customerOrEntity : {
      Customer: customerOrEntity!,
      Language: language!,
      LongTextID: longTextId!
    });
  }
}
