/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { SubCategories } from './SubCategories';

/**
 * Request builder class for operations supported on the [[SubCategories]] entity.
 */
export class SubCategoriesRequestBuilder extends RequestBuilder<SubCategories> {
  /**
   * Returns a request builder for retrieving one `SubCategories` entity based on its keys.
   * @param id Key property. See [[SubCategories.id]].
   * @returns A request builder for creating requests to retrieve one `SubCategories` entity based on its keys.
   */
  getByKey(id: string): GetByKeyRequestBuilder<SubCategories> {
    return new GetByKeyRequestBuilder(SubCategories, { Id: id });
  }

  /**
   * Returns a request builder for querying all `SubCategories` entities.
   * @returns A request builder for creating requests to retrieve all `SubCategories` entities.
   */
  getAll(): GetAllRequestBuilder<SubCategories> {
    return new GetAllRequestBuilder(SubCategories);
  }
}
