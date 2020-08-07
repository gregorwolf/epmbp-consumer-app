/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
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
  getByKey(businessPartner: string, addressId: string): GetByKeyRequestBuilder<BusinessPartnerAddress> {
    return new GetByKeyRequestBuilder(BusinessPartnerAddress, {
      BusinessPartner: businessPartner,
      AddressID: addressId
    });
  }

  /**
   * Returns a request builder for querying all `BusinessPartnerAddress` entities.
   * @returns A request builder for creating requests to retrieve all `BusinessPartnerAddress` entities.
   */
  getAll(): GetAllRequestBuilder<BusinessPartnerAddress> {
    return new GetAllRequestBuilder(BusinessPartnerAddress);
  }

  /**
   * Returns a request builder for creating a `BusinessPartnerAddress` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BusinessPartnerAddress`.
   */
  create(entity: BusinessPartnerAddress): CreateRequestBuilder<BusinessPartnerAddress> {
    return new CreateRequestBuilder(BusinessPartnerAddress, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `BusinessPartnerAddress`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BusinessPartnerAddress`.
   */
  update(entity: BusinessPartnerAddress): UpdateRequestBuilder<BusinessPartnerAddress> {
    return new UpdateRequestBuilder(BusinessPartnerAddress, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `BusinessPartnerAddress`.
   * @param businessPartner Key property. See [[BusinessPartnerAddress.businessPartner]].
   * @param addressId Key property. See [[BusinessPartnerAddress.addressId]].
   * @returns A request builder for creating requests that delete an entity of type `BusinessPartnerAddress`.
   */
  delete(businessPartner: string, addressId: string): DeleteRequestBuilder<BusinessPartnerAddress>;
  /**
   * Returns a request builder for deleting an entity of type `BusinessPartnerAddress`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BusinessPartnerAddress` by taking the entity as a parameter.
   */
  delete(entity: BusinessPartnerAddress): DeleteRequestBuilder<BusinessPartnerAddress>;
  delete(businessPartnerOrEntity: any, addressId?: string): DeleteRequestBuilder<BusinessPartnerAddress> {
    return new DeleteRequestBuilder(BusinessPartnerAddress, businessPartnerOrEntity instanceof BusinessPartnerAddress ? businessPartnerOrEntity : {
      BusinessPartner: businessPartnerOrEntity!,
      AddressID: addressId!
    });
  }
}
