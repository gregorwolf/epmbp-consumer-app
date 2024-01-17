/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV2, GetByKeyRequestBuilderV2, CreateRequestBuilderV2, UpdateRequestBuilderV2, DeleteRequestBuilderV2 } from '@sap-cloud-sdk/core';
import { CustomerUnloadingPoint } from './CustomerUnloadingPoint';

/**
 * Request builder class for operations supported on the [[CustomerUnloadingPoint]] entity.
 */
export class CustomerUnloadingPointRequestBuilder extends RequestBuilder<CustomerUnloadingPoint> {
  /**
   * Returns a request builder for retrieving one `CustomerUnloadingPoint` entity based on its keys.
   * @param customer Key property. See [[CustomerUnloadingPoint.customer]].
   * @param unloadingPointName Key property. See [[CustomerUnloadingPoint.unloadingPointName]].
   * @returns A request builder for creating requests to retrieve one `CustomerUnloadingPoint` entity based on its keys.
   */
  getByKey(customer: string, unloadingPointName: string): GetByKeyRequestBuilderV2<CustomerUnloadingPoint> {
    return new GetByKeyRequestBuilderV2(CustomerUnloadingPoint, {
      Customer: customer,
      UnloadingPointName: unloadingPointName
    });
  }

  /**
   * Returns a request builder for querying all `CustomerUnloadingPoint` entities.
   * @returns A request builder for creating requests to retrieve all `CustomerUnloadingPoint` entities.
   */
  getAll(): GetAllRequestBuilderV2<CustomerUnloadingPoint> {
    return new GetAllRequestBuilderV2(CustomerUnloadingPoint);
  }

  /**
   * Returns a request builder for creating a `CustomerUnloadingPoint` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustomerUnloadingPoint`.
   */
  create(entity: CustomerUnloadingPoint): CreateRequestBuilderV2<CustomerUnloadingPoint> {
    return new CreateRequestBuilderV2(CustomerUnloadingPoint, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `CustomerUnloadingPoint`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustomerUnloadingPoint`.
   */
  update(entity: CustomerUnloadingPoint): UpdateRequestBuilderV2<CustomerUnloadingPoint> {
    return new UpdateRequestBuilderV2(CustomerUnloadingPoint, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CustomerUnloadingPoint`.
   * @param customer Key property. See [[CustomerUnloadingPoint.customer]].
   * @param unloadingPointName Key property. See [[CustomerUnloadingPoint.unloadingPointName]].
   * @returns A request builder for creating requests that delete an entity of type `CustomerUnloadingPoint`.
   */
  delete(customer: string, unloadingPointName: string): DeleteRequestBuilderV2<CustomerUnloadingPoint>;
  /**
   * Returns a request builder for deleting an entity of type `CustomerUnloadingPoint`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustomerUnloadingPoint` by taking the entity as a parameter.
   */
  delete(entity: CustomerUnloadingPoint): DeleteRequestBuilderV2<CustomerUnloadingPoint>;
  delete(customerOrEntity: any, unloadingPointName?: string): DeleteRequestBuilderV2<CustomerUnloadingPoint> {
    return new DeleteRequestBuilderV2(CustomerUnloadingPoint, customerOrEntity instanceof CustomerUnloadingPoint ? customerOrEntity : {
      Customer: customerOrEntity!,
      UnloadingPointName: unloadingPointName!
    });
  }
}
