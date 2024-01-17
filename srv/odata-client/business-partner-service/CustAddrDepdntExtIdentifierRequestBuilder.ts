/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV2, GetByKeyRequestBuilderV2, CreateRequestBuilderV2, UpdateRequestBuilderV2, DeleteRequestBuilderV2 } from '@sap-cloud-sdk/core';
import { CustAddrDepdntExtIdentifier } from './CustAddrDepdntExtIdentifier';

/**
 * Request builder class for operations supported on the [[CustAddrDepdntExtIdentifier]] entity.
 */
export class CustAddrDepdntExtIdentifierRequestBuilder extends RequestBuilder<CustAddrDepdntExtIdentifier> {
  /**
   * Returns a request builder for retrieving one `CustAddrDepdntExtIdentifier` entity based on its keys.
   * @param customer Key property. See [[CustAddrDepdntExtIdentifier.customer]].
   * @param addressId Key property. See [[CustAddrDepdntExtIdentifier.addressId]].
   * @returns A request builder for creating requests to retrieve one `CustAddrDepdntExtIdentifier` entity based on its keys.
   */
  getByKey(customer: string, addressId: string): GetByKeyRequestBuilderV2<CustAddrDepdntExtIdentifier> {
    return new GetByKeyRequestBuilderV2(CustAddrDepdntExtIdentifier, {
      Customer: customer,
      AddressID: addressId
    });
  }

  /**
   * Returns a request builder for querying all `CustAddrDepdntExtIdentifier` entities.
   * @returns A request builder for creating requests to retrieve all `CustAddrDepdntExtIdentifier` entities.
   */
  getAll(): GetAllRequestBuilderV2<CustAddrDepdntExtIdentifier> {
    return new GetAllRequestBuilderV2(CustAddrDepdntExtIdentifier);
  }

  /**
   * Returns a request builder for creating a `CustAddrDepdntExtIdentifier` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustAddrDepdntExtIdentifier`.
   */
  create(entity: CustAddrDepdntExtIdentifier): CreateRequestBuilderV2<CustAddrDepdntExtIdentifier> {
    return new CreateRequestBuilderV2(CustAddrDepdntExtIdentifier, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `CustAddrDepdntExtIdentifier`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustAddrDepdntExtIdentifier`.
   */
  update(entity: CustAddrDepdntExtIdentifier): UpdateRequestBuilderV2<CustAddrDepdntExtIdentifier> {
    return new UpdateRequestBuilderV2(CustAddrDepdntExtIdentifier, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CustAddrDepdntExtIdentifier`.
   * @param customer Key property. See [[CustAddrDepdntExtIdentifier.customer]].
   * @param addressId Key property. See [[CustAddrDepdntExtIdentifier.addressId]].
   * @returns A request builder for creating requests that delete an entity of type `CustAddrDepdntExtIdentifier`.
   */
  delete(customer: string, addressId: string): DeleteRequestBuilderV2<CustAddrDepdntExtIdentifier>;
  /**
   * Returns a request builder for deleting an entity of type `CustAddrDepdntExtIdentifier`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustAddrDepdntExtIdentifier` by taking the entity as a parameter.
   */
  delete(entity: CustAddrDepdntExtIdentifier): DeleteRequestBuilderV2<CustAddrDepdntExtIdentifier>;
  delete(customerOrEntity: any, addressId?: string): DeleteRequestBuilderV2<CustAddrDepdntExtIdentifier> {
    return new DeleteRequestBuilderV2(CustAddrDepdntExtIdentifier, customerOrEntity instanceof CustAddrDepdntExtIdentifier ? customerOrEntity : {
      Customer: customerOrEntity!,
      AddressID: addressId!
    });
  }
}
