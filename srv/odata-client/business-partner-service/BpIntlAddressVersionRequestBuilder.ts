/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV2, GetByKeyRequestBuilderV2, CreateRequestBuilderV2, UpdateRequestBuilderV2, DeleteRequestBuilderV2 } from '@sap-cloud-sdk/core';
import { BpIntlAddressVersion } from './BpIntlAddressVersion';

/**
 * Request builder class for operations supported on the [[BpIntlAddressVersion]] entity.
 */
export class BpIntlAddressVersionRequestBuilder extends RequestBuilder<BpIntlAddressVersion> {
  /**
   * Returns a request builder for retrieving one `BpIntlAddressVersion` entity based on its keys.
   * @param businessPartner Key property. See [[BpIntlAddressVersion.businessPartner]].
   * @param addressId Key property. See [[BpIntlAddressVersion.addressId]].
   * @param addressRepresentationCode Key property. See [[BpIntlAddressVersion.addressRepresentationCode]].
   * @returns A request builder for creating requests to retrieve one `BpIntlAddressVersion` entity based on its keys.
   */
  getByKey(businessPartner: string, addressId: string, addressRepresentationCode: string): GetByKeyRequestBuilderV2<BpIntlAddressVersion> {
    return new GetByKeyRequestBuilderV2(BpIntlAddressVersion, {
      BusinessPartner: businessPartner,
      AddressID: addressId,
      AddressRepresentationCode: addressRepresentationCode
    });
  }

  /**
   * Returns a request builder for querying all `BpIntlAddressVersion` entities.
   * @returns A request builder for creating requests to retrieve all `BpIntlAddressVersion` entities.
   */
  getAll(): GetAllRequestBuilderV2<BpIntlAddressVersion> {
    return new GetAllRequestBuilderV2(BpIntlAddressVersion);
  }

  /**
   * Returns a request builder for creating a `BpIntlAddressVersion` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BpIntlAddressVersion`.
   */
  create(entity: BpIntlAddressVersion): CreateRequestBuilderV2<BpIntlAddressVersion> {
    return new CreateRequestBuilderV2(BpIntlAddressVersion, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `BpIntlAddressVersion`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BpIntlAddressVersion`.
   */
  update(entity: BpIntlAddressVersion): UpdateRequestBuilderV2<BpIntlAddressVersion> {
    return new UpdateRequestBuilderV2(BpIntlAddressVersion, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `BpIntlAddressVersion`.
   * @param businessPartner Key property. See [[BpIntlAddressVersion.businessPartner]].
   * @param addressId Key property. See [[BpIntlAddressVersion.addressId]].
   * @param addressRepresentationCode Key property. See [[BpIntlAddressVersion.addressRepresentationCode]].
   * @returns A request builder for creating requests that delete an entity of type `BpIntlAddressVersion`.
   */
  delete(businessPartner: string, addressId: string, addressRepresentationCode: string): DeleteRequestBuilderV2<BpIntlAddressVersion>;
  /**
   * Returns a request builder for deleting an entity of type `BpIntlAddressVersion`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BpIntlAddressVersion` by taking the entity as a parameter.
   */
  delete(entity: BpIntlAddressVersion): DeleteRequestBuilderV2<BpIntlAddressVersion>;
  delete(businessPartnerOrEntity: any, addressId?: string, addressRepresentationCode?: string): DeleteRequestBuilderV2<BpIntlAddressVersion> {
    return new DeleteRequestBuilderV2(BpIntlAddressVersion, businessPartnerOrEntity instanceof BpIntlAddressVersion ? businessPartnerOrEntity : {
      BusinessPartner: businessPartnerOrEntity!,
      AddressID: addressId!,
      AddressRepresentationCode: addressRepresentationCode!
    });
  }
}
