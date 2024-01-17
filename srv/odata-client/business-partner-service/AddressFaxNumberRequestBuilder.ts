/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV2, GetByKeyRequestBuilderV2, CreateRequestBuilderV2, UpdateRequestBuilderV2, DeleteRequestBuilderV2 } from '@sap-cloud-sdk/core';
import { AddressFaxNumber } from './AddressFaxNumber';

/**
 * Request builder class for operations supported on the [[AddressFaxNumber]] entity.
 */
export class AddressFaxNumberRequestBuilder extends RequestBuilder<AddressFaxNumber> {
  /**
   * Returns a request builder for retrieving one `AddressFaxNumber` entity based on its keys.
   * @param addressId Key property. See [[AddressFaxNumber.addressId]].
   * @param person Key property. See [[AddressFaxNumber.person]].
   * @param ordinalNumber Key property. See [[AddressFaxNumber.ordinalNumber]].
   * @returns A request builder for creating requests to retrieve one `AddressFaxNumber` entity based on its keys.
   */
  getByKey(addressId: string, person: string, ordinalNumber: string): GetByKeyRequestBuilderV2<AddressFaxNumber> {
    return new GetByKeyRequestBuilderV2(AddressFaxNumber, {
      AddressID: addressId,
      Person: person,
      OrdinalNumber: ordinalNumber
    });
  }

  /**
   * Returns a request builder for querying all `AddressFaxNumber` entities.
   * @returns A request builder for creating requests to retrieve all `AddressFaxNumber` entities.
   */
  getAll(): GetAllRequestBuilderV2<AddressFaxNumber> {
    return new GetAllRequestBuilderV2(AddressFaxNumber);
  }

  /**
   * Returns a request builder for creating a `AddressFaxNumber` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AddressFaxNumber`.
   */
  create(entity: AddressFaxNumber): CreateRequestBuilderV2<AddressFaxNumber> {
    return new CreateRequestBuilderV2(AddressFaxNumber, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `AddressFaxNumber`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AddressFaxNumber`.
   */
  update(entity: AddressFaxNumber): UpdateRequestBuilderV2<AddressFaxNumber> {
    return new UpdateRequestBuilderV2(AddressFaxNumber, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AddressFaxNumber`.
   * @param addressId Key property. See [[AddressFaxNumber.addressId]].
   * @param person Key property. See [[AddressFaxNumber.person]].
   * @param ordinalNumber Key property. See [[AddressFaxNumber.ordinalNumber]].
   * @returns A request builder for creating requests that delete an entity of type `AddressFaxNumber`.
   */
  delete(addressId: string, person: string, ordinalNumber: string): DeleteRequestBuilderV2<AddressFaxNumber>;
  /**
   * Returns a request builder for deleting an entity of type `AddressFaxNumber`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AddressFaxNumber` by taking the entity as a parameter.
   */
  delete(entity: AddressFaxNumber): DeleteRequestBuilderV2<AddressFaxNumber>;
  delete(addressIdOrEntity: any, person?: string, ordinalNumber?: string): DeleteRequestBuilderV2<AddressFaxNumber> {
    return new DeleteRequestBuilderV2(AddressFaxNumber, addressIdOrEntity instanceof AddressFaxNumber ? addressIdOrEntity : {
      AddressID: addressIdOrEntity!,
      Person: person!,
      OrdinalNumber: ordinalNumber!
    });
  }
}
