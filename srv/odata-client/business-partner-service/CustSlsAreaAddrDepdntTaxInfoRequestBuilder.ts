/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV2, GetByKeyRequestBuilderV2, CreateRequestBuilderV2, UpdateRequestBuilderV2, DeleteRequestBuilderV2 } from '@sap-cloud-sdk/core';
import { CustSlsAreaAddrDepdntTaxInfo } from './CustSlsAreaAddrDepdntTaxInfo';

/**
 * Request builder class for operations supported on the [[CustSlsAreaAddrDepdntTaxInfo]] entity.
 */
export class CustSlsAreaAddrDepdntTaxInfoRequestBuilder extends RequestBuilder<CustSlsAreaAddrDepdntTaxInfo> {
  /**
   * Returns a request builder for retrieving one `CustSlsAreaAddrDepdntTaxInfo` entity based on its keys.
   * @param customer Key property. See [[CustSlsAreaAddrDepdntTaxInfo.customer]].
   * @param salesOrganization Key property. See [[CustSlsAreaAddrDepdntTaxInfo.salesOrganization]].
   * @param distributionChannel Key property. See [[CustSlsAreaAddrDepdntTaxInfo.distributionChannel]].
   * @param division Key property. See [[CustSlsAreaAddrDepdntTaxInfo.division]].
   * @param addressId Key property. See [[CustSlsAreaAddrDepdntTaxInfo.addressId]].
   * @param departureCountry Key property. See [[CustSlsAreaAddrDepdntTaxInfo.departureCountry]].
   * @param customerTaxCategory Key property. See [[CustSlsAreaAddrDepdntTaxInfo.customerTaxCategory]].
   * @returns A request builder for creating requests to retrieve one `CustSlsAreaAddrDepdntTaxInfo` entity based on its keys.
   */
  getByKey(customer: string, salesOrganization: string, distributionChannel: string, division: string, addressId: string, departureCountry: string, customerTaxCategory: string): GetByKeyRequestBuilderV2<CustSlsAreaAddrDepdntTaxInfo> {
    return new GetByKeyRequestBuilderV2(CustSlsAreaAddrDepdntTaxInfo, {
      Customer: customer,
      SalesOrganization: salesOrganization,
      DistributionChannel: distributionChannel,
      Division: division,
      AddressID: addressId,
      DepartureCountry: departureCountry,
      CustomerTaxCategory: customerTaxCategory
    });
  }

  /**
   * Returns a request builder for querying all `CustSlsAreaAddrDepdntTaxInfo` entities.
   * @returns A request builder for creating requests to retrieve all `CustSlsAreaAddrDepdntTaxInfo` entities.
   */
  getAll(): GetAllRequestBuilderV2<CustSlsAreaAddrDepdntTaxInfo> {
    return new GetAllRequestBuilderV2(CustSlsAreaAddrDepdntTaxInfo);
  }

  /**
   * Returns a request builder for creating a `CustSlsAreaAddrDepdntTaxInfo` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustSlsAreaAddrDepdntTaxInfo`.
   */
  create(entity: CustSlsAreaAddrDepdntTaxInfo): CreateRequestBuilderV2<CustSlsAreaAddrDepdntTaxInfo> {
    return new CreateRequestBuilderV2(CustSlsAreaAddrDepdntTaxInfo, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `CustSlsAreaAddrDepdntTaxInfo`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustSlsAreaAddrDepdntTaxInfo`.
   */
  update(entity: CustSlsAreaAddrDepdntTaxInfo): UpdateRequestBuilderV2<CustSlsAreaAddrDepdntTaxInfo> {
    return new UpdateRequestBuilderV2(CustSlsAreaAddrDepdntTaxInfo, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CustSlsAreaAddrDepdntTaxInfo`.
   * @param customer Key property. See [[CustSlsAreaAddrDepdntTaxInfo.customer]].
   * @param salesOrganization Key property. See [[CustSlsAreaAddrDepdntTaxInfo.salesOrganization]].
   * @param distributionChannel Key property. See [[CustSlsAreaAddrDepdntTaxInfo.distributionChannel]].
   * @param division Key property. See [[CustSlsAreaAddrDepdntTaxInfo.division]].
   * @param addressId Key property. See [[CustSlsAreaAddrDepdntTaxInfo.addressId]].
   * @param departureCountry Key property. See [[CustSlsAreaAddrDepdntTaxInfo.departureCountry]].
   * @param customerTaxCategory Key property. See [[CustSlsAreaAddrDepdntTaxInfo.customerTaxCategory]].
   * @returns A request builder for creating requests that delete an entity of type `CustSlsAreaAddrDepdntTaxInfo`.
   */
  delete(customer: string, salesOrganization: string, distributionChannel: string, division: string, addressId: string, departureCountry: string, customerTaxCategory: string): DeleteRequestBuilderV2<CustSlsAreaAddrDepdntTaxInfo>;
  /**
   * Returns a request builder for deleting an entity of type `CustSlsAreaAddrDepdntTaxInfo`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustSlsAreaAddrDepdntTaxInfo` by taking the entity as a parameter.
   */
  delete(entity: CustSlsAreaAddrDepdntTaxInfo): DeleteRequestBuilderV2<CustSlsAreaAddrDepdntTaxInfo>;
  delete(customerOrEntity: any, salesOrganization?: string, distributionChannel?: string, division?: string, addressId?: string, departureCountry?: string, customerTaxCategory?: string): DeleteRequestBuilderV2<CustSlsAreaAddrDepdntTaxInfo> {
    return new DeleteRequestBuilderV2(CustSlsAreaAddrDepdntTaxInfo, customerOrEntity instanceof CustSlsAreaAddrDepdntTaxInfo ? customerOrEntity : {
      Customer: customerOrEntity!,
      SalesOrganization: salesOrganization!,
      DistributionChannel: distributionChannel!,
      Division: division!,
      AddressID: addressId!,
      DepartureCountry: departureCountry!,
      CustomerTaxCategory: customerTaxCategory!
    });
  }
}
