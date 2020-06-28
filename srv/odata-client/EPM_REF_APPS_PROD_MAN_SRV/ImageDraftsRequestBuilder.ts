/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { ImageDrafts } from './ImageDrafts';

/**
 * Request builder class for operations supported on the [[ImageDrafts]] entity.
 */
export class ImageDraftsRequestBuilder extends RequestBuilder<ImageDrafts> {
  /**
   * Returns a request builder for retrieving one `ImageDrafts` entity based on its keys.
   * @param id Key property. See [[ImageDrafts.id]].
   * @returns A request builder for creating requests to retrieve one `ImageDrafts` entity based on its keys.
   */
  getByKey(id: string): GetByKeyRequestBuilder<ImageDrafts> {
    return new GetByKeyRequestBuilder(ImageDrafts, { Id: id });
  }

  /**
   * Returns a request builder for querying all `ImageDrafts` entities.
   * @returns A request builder for creating requests to retrieve all `ImageDrafts` entities.
   */
  getAll(): GetAllRequestBuilder<ImageDrafts> {
    return new GetAllRequestBuilder(ImageDrafts);
  }

  /**
   * Returns a request builder for creating a `ImageDrafts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ImageDrafts`.
   */
  create(entity: ImageDrafts): CreateRequestBuilder<ImageDrafts> {
    return new CreateRequestBuilder(ImageDrafts, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `ImageDrafts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ImageDrafts`.
   */
  update(entity: ImageDrafts): UpdateRequestBuilder<ImageDrafts> {
    return new UpdateRequestBuilder(ImageDrafts, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ImageDrafts`.
   * @param id Key property. See [[ImageDrafts.id]].
   * @returns A request builder for creating requests that delete an entity of type `ImageDrafts`.
   */
  delete(id: string): DeleteRequestBuilder<ImageDrafts>;
  /**
   * Returns a request builder for deleting an entity of type `ImageDrafts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ImageDrafts` by taking the entity as a parameter.
   */
  delete(entity: ImageDrafts): DeleteRequestBuilder<ImageDrafts>;
  delete(idOrEntity: any): DeleteRequestBuilder<ImageDrafts> {
    return new DeleteRequestBuilder(ImageDrafts, idOrEntity instanceof ImageDrafts ? idOrEntity : { Id: idOrEntity! });
  }
}
