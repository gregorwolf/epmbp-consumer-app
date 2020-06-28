/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { MainCategories } from './MainCategories';

/**
 * Request builder class for operations supported on the [[MainCategories]] entity.
 */
export class MainCategoriesRequestBuilder extends RequestBuilder<MainCategories> {
  /**
   * Returns a request builder for retrieving one `MainCategories` entity based on its keys.
   * @param id Key property. See [[MainCategories.id]].
   * @returns A request builder for creating requests to retrieve one `MainCategories` entity based on its keys.
   */
  getByKey(id: string): GetByKeyRequestBuilder<MainCategories> {
    return new GetByKeyRequestBuilder(MainCategories, { Id: id });
  }

  /**
   * Returns a request builder for querying all `MainCategories` entities.
   * @returns A request builder for creating requests to retrieve all `MainCategories` entities.
   */
  getAll(): GetAllRequestBuilder<MainCategories> {
    return new GetAllRequestBuilder(MainCategories);
  }
}
