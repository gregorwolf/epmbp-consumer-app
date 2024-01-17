/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV2, GetByKeyRequestBuilderV2, CreateRequestBuilderV2, UpdateRequestBuilderV2, DeleteRequestBuilderV2 } from '@sap-cloud-sdk/core';
import { CustUnldgPtAddrDepdntInfo } from './CustUnldgPtAddrDepdntInfo';

/**
 * Request builder class for operations supported on the [[CustUnldgPtAddrDepdntInfo]] entity.
 */
export class CustUnldgPtAddrDepdntInfoRequestBuilder extends RequestBuilder<CustUnldgPtAddrDepdntInfo> {
  /**
   * Returns a request builder for retrieving one `CustUnldgPtAddrDepdntInfo` entity based on its keys.
   * @param customer Key property. See [[CustUnldgPtAddrDepdntInfo.customer]].
   * @param addressId Key property. See [[CustUnldgPtAddrDepdntInfo.addressId]].
   * @param unloadingPointName Key property. See [[CustUnldgPtAddrDepdntInfo.unloadingPointName]].
   * @returns A request builder for creating requests to retrieve one `CustUnldgPtAddrDepdntInfo` entity based on its keys.
   */
  getByKey(customer: string, addressId: string, unloadingPointName: string): GetByKeyRequestBuilderV2<CustUnldgPtAddrDepdntInfo> {
    return new GetByKeyRequestBuilderV2(CustUnldgPtAddrDepdntInfo, {
      Customer: customer,
      AddressID: addressId,
      UnloadingPointName: unloadingPointName
    });
  }

  /**
   * Returns a request builder for querying all `CustUnldgPtAddrDepdntInfo` entities.
   * @returns A request builder for creating requests to retrieve all `CustUnldgPtAddrDepdntInfo` entities.
   */
  getAll(): GetAllRequestBuilderV2<CustUnldgPtAddrDepdntInfo> {
    return new GetAllRequestBuilderV2(CustUnldgPtAddrDepdntInfo);
  }

  /**
   * Returns a request builder for creating a `CustUnldgPtAddrDepdntInfo` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustUnldgPtAddrDepdntInfo`.
   */
  create(entity: CustUnldgPtAddrDepdntInfo): CreateRequestBuilderV2<CustUnldgPtAddrDepdntInfo> {
    return new CreateRequestBuilderV2(CustUnldgPtAddrDepdntInfo, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `CustUnldgPtAddrDepdntInfo`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustUnldgPtAddrDepdntInfo`.
   */
  update(entity: CustUnldgPtAddrDepdntInfo): UpdateRequestBuilderV2<CustUnldgPtAddrDepdntInfo> {
    return new UpdateRequestBuilderV2(CustUnldgPtAddrDepdntInfo, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CustUnldgPtAddrDepdntInfo`.
   * @param customer Key property. See [[CustUnldgPtAddrDepdntInfo.customer]].
   * @param addressId Key property. See [[CustUnldgPtAddrDepdntInfo.addressId]].
   * @param unloadingPointName Key property. See [[CustUnldgPtAddrDepdntInfo.unloadingPointName]].
   * @returns A request builder for creating requests that delete an entity of type `CustUnldgPtAddrDepdntInfo`.
   */
  delete(customer: string, addressId: string, unloadingPointName: string): DeleteRequestBuilderV2<CustUnldgPtAddrDepdntInfo>;
  /**
   * Returns a request builder for deleting an entity of type `CustUnldgPtAddrDepdntInfo`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustUnldgPtAddrDepdntInfo` by taking the entity as a parameter.
   */
  delete(entity: CustUnldgPtAddrDepdntInfo): DeleteRequestBuilderV2<CustUnldgPtAddrDepdntInfo>;
  delete(customerOrEntity: any, addressId?: string, unloadingPointName?: string): DeleteRequestBuilderV2<CustUnldgPtAddrDepdntInfo> {
    return new DeleteRequestBuilderV2(CustUnldgPtAddrDepdntInfo, customerOrEntity instanceof CustUnldgPtAddrDepdntInfo ? customerOrEntity : {
      Customer: customerOrEntity!,
      AddressID: addressId!,
      UnloadingPointName: unloadingPointName!
    });
  }
}
