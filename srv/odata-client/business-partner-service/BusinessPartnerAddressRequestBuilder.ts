/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV2, GetByKeyRequestBuilderV2, CreateRequestBuilderV2, UpdateRequestBuilderV2, DeleteRequestBuilderV2 } from '@sap-cloud-sdk/core';
import { BusinessPartnerAddress } from './BusinessPartnerAddress';

/**
 * Request builder class for operations supported on the [[BusinessPartnerAddress]] entity.
 */
export class BusinessPartnerAddressRequestBuilder extends RequestBuilder<BusinessPartnerAddress> {
  /**
   * Returns a request builder for retrieving one `BusinessPartnerAddress` entity based on its keys.
   * @param businessPartner Key property. See [[BusinessPartnerAddress.businessPartner]].
   * @param addressId Key property. See [[BusinessPartnerAddress.addressId]].
   * @returns A request builder for creating requests to retrieve one `BusinessPartnerAddress` entity based on its keys.
   */
  getByKey(businessPartner: string, addressId: string): GetByKeyRequestBuilderV2<BusinessPartnerAddress> {
    return new GetByKeyRequestBuilderV2(BusinessPartnerAddress, {
      BusinessPartner: businessPartner,
      AddressID: addressId
    });
  }

  /**
   * Returns a request builder for querying all `BusinessPartnerAddress` entities.
   * @returns A request builder for creating requests to retrieve all `BusinessPartnerAddress` entities.
   */
  getAll(): GetAllRequestBuilderV2<BusinessPartnerAddress> {
    return new GetAllRequestBuilderV2(BusinessPartnerAddress);
  }

  /**
   * Returns a request builder for creating a `BusinessPartnerAddress` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BusinessPartnerAddress`.
   */
  create(entity: BusinessPartnerAddress): CreateRequestBuilderV2<BusinessPartnerAddress> {
    return new CreateRequestBuilderV2(BusinessPartnerAddress, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `BusinessPartnerAddress`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BusinessPartnerAddress`.
   */
  update(entity: BusinessPartnerAddress): UpdateRequestBuilderV2<BusinessPartnerAddress> {
    return new UpdateRequestBuilderV2(BusinessPartnerAddress, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `BusinessPartnerAddress`.
   * @param businessPartner Key property. See [[BusinessPartnerAddress.businessPartner]].
   * @param addressId Key property. See [[BusinessPartnerAddress.addressId]].
   * @returns A request builder for creating requests that delete an entity of type `BusinessPartnerAddress`.
   */
  delete(businessPartner: string, addressId: string): DeleteRequestBuilderV2<BusinessPartnerAddress>;
  /**
   * Returns a request builder for deleting an entity of type `BusinessPartnerAddress`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BusinessPartnerAddress` by taking the entity as a parameter.
   */
  delete(entity: BusinessPartnerAddress): DeleteRequestBuilderV2<BusinessPartnerAddress>;
  delete(businessPartnerOrEntity: any, addressId?: string): DeleteRequestBuilderV2<BusinessPartnerAddress> {
    return new DeleteRequestBuilderV2(BusinessPartnerAddress, businessPartnerOrEntity instanceof BusinessPartnerAddress ? businessPartnerOrEntity : {
      BusinessPartner: businessPartnerOrEntity!,
      AddressID: addressId!
    });
  }
}
