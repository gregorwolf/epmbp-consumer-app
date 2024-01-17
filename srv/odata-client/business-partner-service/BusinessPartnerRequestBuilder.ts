/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV2, GetByKeyRequestBuilderV2, CreateRequestBuilderV2, UpdateRequestBuilderV2 } from '@sap-cloud-sdk/core';
import { BusinessPartner } from './BusinessPartner';

/**
 * Request builder class for operations supported on the [[BusinessPartner]] entity.
 */
export class BusinessPartnerRequestBuilder extends RequestBuilder<BusinessPartner> {
  /**
   * Returns a request builder for retrieving one `BusinessPartner` entity based on its keys.
   * @param businessPartner Key property. See [[BusinessPartner.businessPartner]].
   * @returns A request builder for creating requests to retrieve one `BusinessPartner` entity based on its keys.
   */
  getByKey(businessPartner: string): GetByKeyRequestBuilderV2<BusinessPartner> {
    return new GetByKeyRequestBuilderV2(BusinessPartner, { BusinessPartner: businessPartner });
  }

  /**
   * Returns a request builder for querying all `BusinessPartner` entities.
   * @returns A request builder for creating requests to retrieve all `BusinessPartner` entities.
   */
  getAll(): GetAllRequestBuilderV2<BusinessPartner> {
    return new GetAllRequestBuilderV2(BusinessPartner);
  }

  /**
   * Returns a request builder for creating a `BusinessPartner` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BusinessPartner`.
   */
  create(entity: BusinessPartner): CreateRequestBuilderV2<BusinessPartner> {
    return new CreateRequestBuilderV2(BusinessPartner, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `BusinessPartner`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BusinessPartner`.
   */
  update(entity: BusinessPartner): UpdateRequestBuilderV2<BusinessPartner> {
    return new UpdateRequestBuilderV2(BusinessPartner, entity);
  }
}
