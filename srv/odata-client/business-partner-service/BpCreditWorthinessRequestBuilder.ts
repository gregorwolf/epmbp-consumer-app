/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV2, GetByKeyRequestBuilderV2, CreateRequestBuilderV2, UpdateRequestBuilderV2 } from '@sap-cloud-sdk/core';
import { BpCreditWorthiness } from './BpCreditWorthiness';

/**
 * Request builder class for operations supported on the [[BpCreditWorthiness]] entity.
 */
export class BpCreditWorthinessRequestBuilder extends RequestBuilder<BpCreditWorthiness> {
  /**
   * Returns a request builder for retrieving one `BpCreditWorthiness` entity based on its keys.
   * @param businessPartner Key property. See [[BpCreditWorthiness.businessPartner]].
   * @returns A request builder for creating requests to retrieve one `BpCreditWorthiness` entity based on its keys.
   */
  getByKey(businessPartner: string): GetByKeyRequestBuilderV2<BpCreditWorthiness> {
    return new GetByKeyRequestBuilderV2(BpCreditWorthiness, { BusinessPartner: businessPartner });
  }

  /**
   * Returns a request builder for querying all `BpCreditWorthiness` entities.
   * @returns A request builder for creating requests to retrieve all `BpCreditWorthiness` entities.
   */
  getAll(): GetAllRequestBuilderV2<BpCreditWorthiness> {
    return new GetAllRequestBuilderV2(BpCreditWorthiness);
  }

  /**
   * Returns a request builder for creating a `BpCreditWorthiness` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BpCreditWorthiness`.
   */
  create(entity: BpCreditWorthiness): CreateRequestBuilderV2<BpCreditWorthiness> {
    return new CreateRequestBuilderV2(BpCreditWorthiness, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `BpCreditWorthiness`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BpCreditWorthiness`.
   */
  update(entity: BpCreditWorthiness): UpdateRequestBuilderV2<BpCreditWorthiness> {
    return new UpdateRequestBuilderV2(BpCreditWorthiness, entity);
  }
}
