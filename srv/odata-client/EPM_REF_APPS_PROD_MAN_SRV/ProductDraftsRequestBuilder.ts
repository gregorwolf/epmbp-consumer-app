/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { ProductDrafts } from './ProductDrafts';

/**
 * Request builder class for operations supported on the [[ProductDrafts]] entity.
 */
export class ProductDraftsRequestBuilder extends RequestBuilder<ProductDrafts> {
  /**
   * Returns a request builder for retrieving one `ProductDrafts` entity based on its keys.
   * @param id Key property. See [[ProductDrafts.id]].
   * @returns A request builder for creating requests to retrieve one `ProductDrafts` entity based on its keys.
   */
  getByKey(id: string): GetByKeyRequestBuilder<ProductDrafts> {
    return new GetByKeyRequestBuilder(ProductDrafts, { Id: id });
  }

  /**
   * Returns a request builder for querying all `ProductDrafts` entities.
   * @returns A request builder for creating requests to retrieve all `ProductDrafts` entities.
   */
  getAll(): GetAllRequestBuilder<ProductDrafts> {
    return new GetAllRequestBuilder(ProductDrafts);
  }

  /**
   * Returns a request builder for creating a `ProductDrafts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductDrafts`.
   */
  create(entity: ProductDrafts): CreateRequestBuilder<ProductDrafts> {
    return new CreateRequestBuilder(ProductDrafts, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `ProductDrafts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductDrafts`.
   */
  update(entity: ProductDrafts): UpdateRequestBuilder<ProductDrafts> {
    return new UpdateRequestBuilder(ProductDrafts, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductDrafts`.
   * @param id Key property. See [[ProductDrafts.id]].
   * @returns A request builder for creating requests that delete an entity of type `ProductDrafts`.
   */
  delete(id: string): DeleteRequestBuilder<ProductDrafts>;
  /**
   * Returns a request builder for deleting an entity of type `ProductDrafts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductDrafts` by taking the entity as a parameter.
   */
  delete(entity: ProductDrafts): DeleteRequestBuilder<ProductDrafts>;
  delete(idOrEntity: any): DeleteRequestBuilder<ProductDrafts> {
    return new DeleteRequestBuilder(ProductDrafts, idOrEntity instanceof ProductDrafts ? idOrEntity : { Id: idOrEntity! });
  }
}
