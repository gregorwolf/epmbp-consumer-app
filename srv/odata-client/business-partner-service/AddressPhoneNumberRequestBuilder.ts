/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { AddressPhoneNumber } from './AddressPhoneNumber';

/**
 * Request builder class for operations supported on the [[AddressPhoneNumber]] entity.
 */
export class AddressPhoneNumberRequestBuilder extends RequestBuilder<AddressPhoneNumber> {
  /**
   * Returns a request builder for retrieving one `AddressPhoneNumber` entity based on its keys.
   * @param addressId Key property. See [[AddressPhoneNumber.addressId]].
   * @param person Key property. See [[AddressPhoneNumber.person]].
   * @param ordinalNumber Key property. See [[AddressPhoneNumber.ordinalNumber]].
   * @returns A request builder for creating requests to retrieve one `AddressPhoneNumber` entity based on its keys.
   */
  getByKey(addressId: string, person: string, ordinalNumber: string): GetByKeyRequestBuilder<AddressPhoneNumber> {
    return new GetByKeyRequestBuilder(AddressPhoneNumber, {
      AddressID: addressId,
      Person: person,
      OrdinalNumber: ordinalNumber
    });
  }

  /**
   * Returns a request builder for querying all `AddressPhoneNumber` entities.
   * @returns A request builder for creating requests to retrieve all `AddressPhoneNumber` entities.
   */
  getAll(): GetAllRequestBuilder<AddressPhoneNumber> {
    return new GetAllRequestBuilder(AddressPhoneNumber);
  }

  /**
   * Returns a request builder for creating a `AddressPhoneNumber` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AddressPhoneNumber`.
   */
  create(entity: AddressPhoneNumber): CreateRequestBuilder<AddressPhoneNumber> {
    return new CreateRequestBuilder(AddressPhoneNumber, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `AddressPhoneNumber`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AddressPhoneNumber`.
   */
  update(entity: AddressPhoneNumber): UpdateRequestBuilder<AddressPhoneNumber> {
    return new UpdateRequestBuilder(AddressPhoneNumber, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AddressPhoneNumber`.
   * @param addressId Key property. See [[AddressPhoneNumber.addressId]].
   * @param person Key property. See [[AddressPhoneNumber.person]].
   * @param ordinalNumber Key property. See [[AddressPhoneNumber.ordinalNumber]].
   * @returns A request builder for creating requests that delete an entity of type `AddressPhoneNumber`.
   */
  delete(addressId: string, person: string, ordinalNumber: string): DeleteRequestBuilder<AddressPhoneNumber>;
  /**
   * Returns a request builder for deleting an entity of type `AddressPhoneNumber`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AddressPhoneNumber` by taking the entity as a parameter.
   */
  delete(entity: AddressPhoneNumber): DeleteRequestBuilder<AddressPhoneNumber>;
  delete(addressIdOrEntity: any, person?: string, ordinalNumber?: string): DeleteRequestBuilder<AddressPhoneNumber> {
    return new DeleteRequestBuilder(AddressPhoneNumber, addressIdOrEntity instanceof AddressPhoneNumber ? addressIdOrEntity : {
      AddressID: addressIdOrEntity!,
      Person: person!,
      OrdinalNumber: ordinalNumber!
    });
  }
}
