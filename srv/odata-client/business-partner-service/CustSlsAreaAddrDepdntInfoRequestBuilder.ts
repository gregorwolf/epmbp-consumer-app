/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV2, GetByKeyRequestBuilderV2, CreateRequestBuilderV2, UpdateRequestBuilderV2, DeleteRequestBuilderV2 } from '@sap-cloud-sdk/core';
import { CustSlsAreaAddrDepdntInfo } from './CustSlsAreaAddrDepdntInfo';

/**
 * Request builder class for operations supported on the [[CustSlsAreaAddrDepdntInfo]] entity.
 */
export class CustSlsAreaAddrDepdntInfoRequestBuilder extends RequestBuilder<CustSlsAreaAddrDepdntInfo> {
  /**
   * Returns a request builder for retrieving one `CustSlsAreaAddrDepdntInfo` entity based on its keys.
   * @param customer Key property. See [[CustSlsAreaAddrDepdntInfo.customer]].
   * @param salesOrganization Key property. See [[CustSlsAreaAddrDepdntInfo.salesOrganization]].
   * @param distributionChannel Key property. See [[CustSlsAreaAddrDepdntInfo.distributionChannel]].
   * @param division Key property. See [[CustSlsAreaAddrDepdntInfo.division]].
   * @param addressId Key property. See [[CustSlsAreaAddrDepdntInfo.addressId]].
   * @returns A request builder for creating requests to retrieve one `CustSlsAreaAddrDepdntInfo` entity based on its keys.
   */
  getByKey(customer: string, salesOrganization: string, distributionChannel: string, division: string, addressId: string): GetByKeyRequestBuilderV2<CustSlsAreaAddrDepdntInfo> {
    return new GetByKeyRequestBuilderV2(CustSlsAreaAddrDepdntInfo, {
      Customer: customer,
      SalesOrganization: salesOrganization,
      DistributionChannel: distributionChannel,
      Division: division,
      AddressID: addressId
    });
  }

  /**
   * Returns a request builder for querying all `CustSlsAreaAddrDepdntInfo` entities.
   * @returns A request builder for creating requests to retrieve all `CustSlsAreaAddrDepdntInfo` entities.
   */
  getAll(): GetAllRequestBuilderV2<CustSlsAreaAddrDepdntInfo> {
    return new GetAllRequestBuilderV2(CustSlsAreaAddrDepdntInfo);
  }

  /**
   * Returns a request builder for creating a `CustSlsAreaAddrDepdntInfo` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustSlsAreaAddrDepdntInfo`.
   */
  create(entity: CustSlsAreaAddrDepdntInfo): CreateRequestBuilderV2<CustSlsAreaAddrDepdntInfo> {
    return new CreateRequestBuilderV2(CustSlsAreaAddrDepdntInfo, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `CustSlsAreaAddrDepdntInfo`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustSlsAreaAddrDepdntInfo`.
   */
  update(entity: CustSlsAreaAddrDepdntInfo): UpdateRequestBuilderV2<CustSlsAreaAddrDepdntInfo> {
    return new UpdateRequestBuilderV2(CustSlsAreaAddrDepdntInfo, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CustSlsAreaAddrDepdntInfo`.
   * @param customer Key property. See [[CustSlsAreaAddrDepdntInfo.customer]].
   * @param salesOrganization Key property. See [[CustSlsAreaAddrDepdntInfo.salesOrganization]].
   * @param distributionChannel Key property. See [[CustSlsAreaAddrDepdntInfo.distributionChannel]].
   * @param division Key property. See [[CustSlsAreaAddrDepdntInfo.division]].
   * @param addressId Key property. See [[CustSlsAreaAddrDepdntInfo.addressId]].
   * @returns A request builder for creating requests that delete an entity of type `CustSlsAreaAddrDepdntInfo`.
   */
  delete(customer: string, salesOrganization: string, distributionChannel: string, division: string, addressId: string): DeleteRequestBuilderV2<CustSlsAreaAddrDepdntInfo>;
  /**
   * Returns a request builder for deleting an entity of type `CustSlsAreaAddrDepdntInfo`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustSlsAreaAddrDepdntInfo` by taking the entity as a parameter.
   */
  delete(entity: CustSlsAreaAddrDepdntInfo): DeleteRequestBuilderV2<CustSlsAreaAddrDepdntInfo>;
  delete(customerOrEntity: any, salesOrganization?: string, distributionChannel?: string, division?: string, addressId?: string): DeleteRequestBuilderV2<CustSlsAreaAddrDepdntInfo> {
    return new DeleteRequestBuilderV2(CustSlsAreaAddrDepdntInfo, customerOrEntity instanceof CustSlsAreaAddrDepdntInfo ? customerOrEntity : {
      Customer: customerOrEntity!,
      SalesOrganization: salesOrganization!,
      DistributionChannel: distributionChannel!,
      Division: division!,
      AddressID: addressId!
    });
  }
}
