/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV2, GetByKeyRequestBuilderV2, CreateRequestBuilderV2, UpdateRequestBuilderV2 } from '@sap-cloud-sdk/core';
import { BpFinancialServicesReporting } from './BpFinancialServicesReporting';

/**
 * Request builder class for operations supported on the [[BpFinancialServicesReporting]] entity.
 */
export class BpFinancialServicesReportingRequestBuilder extends RequestBuilder<BpFinancialServicesReporting> {
  /**
   * Returns a request builder for retrieving one `BpFinancialServicesReporting` entity based on its keys.
   * @param businessPartner Key property. See [[BpFinancialServicesReporting.businessPartner]].
   * @returns A request builder for creating requests to retrieve one `BpFinancialServicesReporting` entity based on its keys.
   */
  getByKey(businessPartner: string): GetByKeyRequestBuilderV2<BpFinancialServicesReporting> {
    return new GetByKeyRequestBuilderV2(BpFinancialServicesReporting, { BusinessPartner: businessPartner });
  }

  /**
   * Returns a request builder for querying all `BpFinancialServicesReporting` entities.
   * @returns A request builder for creating requests to retrieve all `BpFinancialServicesReporting` entities.
   */
  getAll(): GetAllRequestBuilderV2<BpFinancialServicesReporting> {
    return new GetAllRequestBuilderV2(BpFinancialServicesReporting);
  }

  /**
   * Returns a request builder for creating a `BpFinancialServicesReporting` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BpFinancialServicesReporting`.
   */
  create(entity: BpFinancialServicesReporting): CreateRequestBuilderV2<BpFinancialServicesReporting> {
    return new CreateRequestBuilderV2(BpFinancialServicesReporting, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `BpFinancialServicesReporting`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BpFinancialServicesReporting`.
   */
  update(entity: BpFinancialServicesReporting): UpdateRequestBuilderV2<BpFinancialServicesReporting> {
    return new UpdateRequestBuilderV2(BpFinancialServicesReporting, entity);
  }
}
