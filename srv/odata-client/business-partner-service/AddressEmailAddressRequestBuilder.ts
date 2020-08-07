/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { AddressEmailAddress } from './AddressEmailAddress';

/**
 * Request builder class for operations supported on the [[AddressEmailAddress]] entity.
 */
export class AddressEmailAddressRequestBuilder extends RequestBuilder<AddressEmailAddress> {
  /**
   * Returns a request builder for retrieving one `AddressEmailAddress` entity based on its keys.
   * @param addressId Key property. See [[AddressEmailAddress.addressId]].
   * @param person Key property. See [[AddressEmailAddress.person]].
   * @param ordinalNumber Key property. See [[AddressEmailAddress.ordinalNumber]].
   * @returns A request builder for creating requests to retrieve one `AddressEmailAddress` entity based on its keys.
   */
  getByKey(addressId: string, person: string, ordinalNumber: string): GetByKeyRequestBuilder<AddressEmailAddress> {
    return new GetByKeyRequestBuilder(AddressEmailAddress, {
      AddressID: addressId,
      Person: person,
      OrdinalNumber: ordinalNumber
    });
  }

  /**
   * Returns a request builder for querying all `AddressEmailAddress` entities.
   * @returns A request builder for creating requests to retrieve all `AddressEmailAddress` entities.
   */
  getAll(): GetAllRequestBuilder<AddressEmailAddress> {
    return new GetAllRequestBuilder(AddressEmailAddress);
  }

  /**
   * Returns a request builder for creating a `AddressEmailAddress` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AddressEmailAddress`.
   */
  create(entity: AddressEmailAddress): CreateRequestBuilder<AddressEmailAddress> {
    return new CreateRequestBuilder(AddressEmailAddress, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `AddressEmailAddress`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AddressEmailAddress`.
   */
  update(entity: AddressEmailAddress): UpdateRequestBuilder<AddressEmailAddress> {
    return new UpdateRequestBuilder(AddressEmailAddress, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AddressEmailAddress`.
   * @param addressId Key property. See [[AddressEmailAddress.addressId]].
   * @param person Key property. See [[AddressEmailAddress.person]].
   * @param ordinalNumber Key property. See [[AddressEmailAddress.ordinalNumber]].
   * @returns A request builder for creating requests that delete an entity of type `AddressEmailAddress`.
   */
  delete(addressId: string, person: string, ordinalNumber: string): DeleteRequestBuilder<AddressEmailAddress>;
  /**
   * Returns a request builder for deleting an entity of type `AddressEmailAddress`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AddressEmailAddress` by taking the entity as a parameter.
   */
  delete(entity: AddressEmailAddress): DeleteRequestBuilder<AddressEmailAddress>;
  delete(addressIdOrEntity: any, person?: string, ordinalNumber?: string): DeleteRequestBuilder<AddressEmailAddress> {
    return new DeleteRequestBuilder(AddressEmailAddress, addressIdOrEntity instanceof AddressEmailAddress ? addressIdOrEntity : {
      AddressID: addressIdOrEntity!,
      Person: person!,
      OrdinalNumber: ordinalNumber!
    });
  }
}
