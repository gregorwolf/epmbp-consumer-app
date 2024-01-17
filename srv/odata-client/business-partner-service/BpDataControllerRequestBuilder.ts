/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV2, GetByKeyRequestBuilderV2, CreateRequestBuilderV2, UpdateRequestBuilderV2 } from '@sap-cloud-sdk/core';
import { BpDataController } from './BpDataController';

/**
 * Request builder class for operations supported on the [[BpDataController]] entity.
 */
export class BpDataControllerRequestBuilder extends RequestBuilder<BpDataController> {
  /**
   * Returns a request builder for retrieving one `BpDataController` entity based on its keys.
   * @param businessPartner Key property. See [[BpDataController.businessPartner]].
   * @param dataController Key property. See [[BpDataController.dataController]].
   * @param purposeForPersonalData Key property. See [[BpDataController.purposeForPersonalData]].
   * @returns A request builder for creating requests to retrieve one `BpDataController` entity based on its keys.
   */
  getByKey(businessPartner: string, dataController: string, purposeForPersonalData: string): GetByKeyRequestBuilderV2<BpDataController> {
    return new GetByKeyRequestBuilderV2(BpDataController, {
      BusinessPartner: businessPartner,
      DataController: dataController,
      PurposeForPersonalData: purposeForPersonalData
    });
  }

  /**
   * Returns a request builder for querying all `BpDataController` entities.
   * @returns A request builder for creating requests to retrieve all `BpDataController` entities.
   */
  getAll(): GetAllRequestBuilderV2<BpDataController> {
    return new GetAllRequestBuilderV2(BpDataController);
  }

  /**
   * Returns a request builder for creating a `BpDataController` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BpDataController`.
   */
  create(entity: BpDataController): CreateRequestBuilderV2<BpDataController> {
    return new CreateRequestBuilderV2(BpDataController, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `BpDataController`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BpDataController`.
   */
  update(entity: BpDataController): UpdateRequestBuilderV2<BpDataController> {
    return new UpdateRequestBuilderV2(BpDataController, entity);
  }
}
