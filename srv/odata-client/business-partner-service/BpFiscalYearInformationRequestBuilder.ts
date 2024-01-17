/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV2, GetByKeyRequestBuilderV2, CreateRequestBuilderV2, UpdateRequestBuilderV2, DeleteRequestBuilderV2 } from '@sap-cloud-sdk/core';
import { BpFiscalYearInformation } from './BpFiscalYearInformation';

/**
 * Request builder class for operations supported on the [[BpFiscalYearInformation]] entity.
 */
export class BpFiscalYearInformationRequestBuilder extends RequestBuilder<BpFiscalYearInformation> {
  /**
   * Returns a request builder for retrieving one `BpFiscalYearInformation` entity based on its keys.
   * @param businessPartner Key property. See [[BpFiscalYearInformation.businessPartner]].
   * @param businessPartnerFiscalYear Key property. See [[BpFiscalYearInformation.businessPartnerFiscalYear]].
   * @returns A request builder for creating requests to retrieve one `BpFiscalYearInformation` entity based on its keys.
   */
  getByKey(businessPartner: string, businessPartnerFiscalYear: string): GetByKeyRequestBuilderV2<BpFiscalYearInformation> {
    return new GetByKeyRequestBuilderV2(BpFiscalYearInformation, {
      BusinessPartner: businessPartner,
      BusinessPartnerFiscalYear: businessPartnerFiscalYear
    });
  }

  /**
   * Returns a request builder for querying all `BpFiscalYearInformation` entities.
   * @returns A request builder for creating requests to retrieve all `BpFiscalYearInformation` entities.
   */
  getAll(): GetAllRequestBuilderV2<BpFiscalYearInformation> {
    return new GetAllRequestBuilderV2(BpFiscalYearInformation);
  }

  /**
   * Returns a request builder for creating a `BpFiscalYearInformation` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BpFiscalYearInformation`.
   */
  create(entity: BpFiscalYearInformation): CreateRequestBuilderV2<BpFiscalYearInformation> {
    return new CreateRequestBuilderV2(BpFiscalYearInformation, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `BpFiscalYearInformation`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BpFiscalYearInformation`.
   */
  update(entity: BpFiscalYearInformation): UpdateRequestBuilderV2<BpFiscalYearInformation> {
    return new UpdateRequestBuilderV2(BpFiscalYearInformation, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `BpFiscalYearInformation`.
   * @param businessPartner Key property. See [[BpFiscalYearInformation.businessPartner]].
   * @param businessPartnerFiscalYear Key property. See [[BpFiscalYearInformation.businessPartnerFiscalYear]].
   * @returns A request builder for creating requests that delete an entity of type `BpFiscalYearInformation`.
   */
  delete(businessPartner: string, businessPartnerFiscalYear: string): DeleteRequestBuilderV2<BpFiscalYearInformation>;
  /**
   * Returns a request builder for deleting an entity of type `BpFiscalYearInformation`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BpFiscalYearInformation` by taking the entity as a parameter.
   */
  delete(entity: BpFiscalYearInformation): DeleteRequestBuilderV2<BpFiscalYearInformation>;
  delete(businessPartnerOrEntity: any, businessPartnerFiscalYear?: string): DeleteRequestBuilderV2<BpFiscalYearInformation> {
    return new DeleteRequestBuilderV2(BpFiscalYearInformation, businessPartnerOrEntity instanceof BpFiscalYearInformation ? businessPartnerOrEntity : {
      BusinessPartner: businessPartnerOrEntity!,
      BusinessPartnerFiscalYear: businessPartnerFiscalYear!
    });
  }
}
