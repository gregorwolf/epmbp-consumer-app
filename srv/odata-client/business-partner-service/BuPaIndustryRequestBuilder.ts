/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV2, GetByKeyRequestBuilderV2, CreateRequestBuilderV2, UpdateRequestBuilderV2, DeleteRequestBuilderV2 } from '@sap-cloud-sdk/core';
import { BuPaIndustry } from './BuPaIndustry';

/**
 * Request builder class for operations supported on the [[BuPaIndustry]] entity.
 */
export class BuPaIndustryRequestBuilder extends RequestBuilder<BuPaIndustry> {
  /**
   * Returns a request builder for retrieving one `BuPaIndustry` entity based on its keys.
   * @param industrySector Key property. See [[BuPaIndustry.industrySector]].
   * @param industrySystemType Key property. See [[BuPaIndustry.industrySystemType]].
   * @param businessPartner Key property. See [[BuPaIndustry.businessPartner]].
   * @returns A request builder for creating requests to retrieve one `BuPaIndustry` entity based on its keys.
   */
  getByKey(industrySector: string, industrySystemType: string, businessPartner: string): GetByKeyRequestBuilderV2<BuPaIndustry> {
    return new GetByKeyRequestBuilderV2(BuPaIndustry, {
      IndustrySector: industrySector,
      IndustrySystemType: industrySystemType,
      BusinessPartner: businessPartner
    });
  }

  /**
   * Returns a request builder for querying all `BuPaIndustry` entities.
   * @returns A request builder for creating requests to retrieve all `BuPaIndustry` entities.
   */
  getAll(): GetAllRequestBuilderV2<BuPaIndustry> {
    return new GetAllRequestBuilderV2(BuPaIndustry);
  }

  /**
   * Returns a request builder for creating a `BuPaIndustry` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BuPaIndustry`.
   */
  create(entity: BuPaIndustry): CreateRequestBuilderV2<BuPaIndustry> {
    return new CreateRequestBuilderV2(BuPaIndustry, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `BuPaIndustry`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BuPaIndustry`.
   */
  update(entity: BuPaIndustry): UpdateRequestBuilderV2<BuPaIndustry> {
    return new UpdateRequestBuilderV2(BuPaIndustry, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `BuPaIndustry`.
   * @param industrySector Key property. See [[BuPaIndustry.industrySector]].
   * @param industrySystemType Key property. See [[BuPaIndustry.industrySystemType]].
   * @param businessPartner Key property. See [[BuPaIndustry.businessPartner]].
   * @returns A request builder for creating requests that delete an entity of type `BuPaIndustry`.
   */
  delete(industrySector: string, industrySystemType: string, businessPartner: string): DeleteRequestBuilderV2<BuPaIndustry>;
  /**
   * Returns a request builder for deleting an entity of type `BuPaIndustry`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BuPaIndustry` by taking the entity as a parameter.
   */
  delete(entity: BuPaIndustry): DeleteRequestBuilderV2<BuPaIndustry>;
  delete(industrySectorOrEntity: any, industrySystemType?: string, businessPartner?: string): DeleteRequestBuilderV2<BuPaIndustry> {
    return new DeleteRequestBuilderV2(BuPaIndustry, industrySectorOrEntity instanceof BuPaIndustry ? industrySectorOrEntity : {
      IndustrySector: industrySectorOrEntity!,
      IndustrySystemType: industrySystemType!,
      BusinessPartner: businessPartner!
    });
  }
}
