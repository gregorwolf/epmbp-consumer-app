/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV2, GetByKeyRequestBuilderV2, CreateRequestBuilderV2, UpdateRequestBuilderV2, DeleteRequestBuilderV2 } from '@sap-cloud-sdk/core';
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
  getByKey(addressId: string, person: string, ordinalNumber: string): GetByKeyRequestBuilderV2<AddressEmailAddress> {
    return new GetByKeyRequestBuilderV2(AddressEmailAddress, {
      AddressID: addressId,
      Person: person,
      OrdinalNumber: ordinalNumber
    });
  }

  /**
   * Returns a request builder for querying all `AddressEmailAddress` entities.
   * @returns A request builder for creating requests to retrieve all `AddressEmailAddress` entities.
   */
  getAll(): GetAllRequestBuilderV2<AddressEmailAddress> {
    return new GetAllRequestBuilderV2(AddressEmailAddress);
  }

  /**
   * Returns a request builder for creating a `AddressEmailAddress` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AddressEmailAddress`.
   */
  create(entity: AddressEmailAddress): CreateRequestBuilderV2<AddressEmailAddress> {
    return new CreateRequestBuilderV2(AddressEmailAddress, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `AddressEmailAddress`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AddressEmailAddress`.
   */
  update(entity: AddressEmailAddress): UpdateRequestBuilderV2<AddressEmailAddress> {
    return new UpdateRequestBuilderV2(AddressEmailAddress, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AddressEmailAddress`.
   * @param addressId Key property. See [[AddressEmailAddress.addressId]].
   * @param person Key property. See [[AddressEmailAddress.person]].
   * @param ordinalNumber Key property. See [[AddressEmailAddress.ordinalNumber]].
   * @returns A request builder for creating requests that delete an entity of type `AddressEmailAddress`.
   */
  delete(addressId: string, person: string, ordinalNumber: string): DeleteRequestBuilderV2<AddressEmailAddress>;
  /**
   * Returns a request builder for deleting an entity of type `AddressEmailAddress`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AddressEmailAddress` by taking the entity as a parameter.
   */
  delete(entity: AddressEmailAddress): DeleteRequestBuilderV2<AddressEmailAddress>;
  delete(addressIdOrEntity: any, person?: string, ordinalNumber?: string): DeleteRequestBuilderV2<AddressEmailAddress> {
    return new DeleteRequestBuilderV2(AddressEmailAddress, addressIdOrEntity instanceof AddressEmailAddress ? addressIdOrEntity : {
      AddressID: addressIdOrEntity!,
      Person: person!,
      OrdinalNumber: ordinalNumber!
    });
  }
}
