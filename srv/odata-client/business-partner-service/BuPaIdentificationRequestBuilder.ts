/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { BuPaIdentification } from './BuPaIdentification';

/**
 * Request builder class for operations supported on the [[BuPaIdentification]] entity.
 */
export class BuPaIdentificationRequestBuilder extends RequestBuilder<BuPaIdentification> {
  /**
   * Returns a request builder for retrieving one `BuPaIdentification` entity based on its keys.
   * @param businessPartner Key property. See [[BuPaIdentification.businessPartner]].
   * @param bpIdentificationType Key property. See [[BuPaIdentification.bpIdentificationType]].
   * @param bpIdentificationNumber Key property. See [[BuPaIdentification.bpIdentificationNumber]].
   * @returns A request builder for creating requests to retrieve one `BuPaIdentification` entity based on its keys.
   */
  getByKey(businessPartner: string, bpIdentificationType: string, bpIdentificationNumber: string): GetByKeyRequestBuilder<BuPaIdentification> {
    return new GetByKeyRequestBuilder(BuPaIdentification, {
      BusinessPartner: businessPartner,
      BPIdentificationType: bpIdentificationType,
      BPIdentificationNumber: bpIdentificationNumber
    });
  }

  /**
   * Returns a request builder for querying all `BuPaIdentification` entities.
   * @returns A request builder for creating requests to retrieve all `BuPaIdentification` entities.
   */
  getAll(): GetAllRequestBuilder<BuPaIdentification> {
    return new GetAllRequestBuilder(BuPaIdentification);
  }

  /**
   * Returns a request builder for creating a `BuPaIdentification` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BuPaIdentification`.
   */
  create(entity: BuPaIdentification): CreateRequestBuilder<BuPaIdentification> {
    return new CreateRequestBuilder(BuPaIdentification, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `BuPaIdentification`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BuPaIdentification`.
   */
  update(entity: BuPaIdentification): UpdateRequestBuilder<BuPaIdentification> {
    return new UpdateRequestBuilder(BuPaIdentification, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `BuPaIdentification`.
   * @param businessPartner Key property. See [[BuPaIdentification.businessPartner]].
   * @param bpIdentificationType Key property. See [[BuPaIdentification.bpIdentificationType]].
   * @param bpIdentificationNumber Key property. See [[BuPaIdentification.bpIdentificationNumber]].
   * @returns A request builder for creating requests that delete an entity of type `BuPaIdentification`.
   */
  delete(businessPartner: string, bpIdentificationType: string, bpIdentificationNumber: string): DeleteRequestBuilder<BuPaIdentification>;
  /**
   * Returns a request builder for deleting an entity of type `BuPaIdentification`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BuPaIdentification` by taking the entity as a parameter.
   */
  delete(entity: BuPaIdentification): DeleteRequestBuilder<BuPaIdentification>;
  delete(businessPartnerOrEntity: any, bpIdentificationType?: string, bpIdentificationNumber?: string): DeleteRequestBuilder<BuPaIdentification> {
    return new DeleteRequestBuilder(BuPaIdentification, businessPartnerOrEntity instanceof BuPaIdentification ? businessPartnerOrEntity : {
      BusinessPartner: businessPartnerOrEntity!,
      BPIdentificationType: bpIdentificationType!,
      BPIdentificationNumber: bpIdentificationNumber!
    });
  }
}
