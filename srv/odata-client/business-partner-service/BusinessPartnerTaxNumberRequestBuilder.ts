/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV2, GetByKeyRequestBuilderV2, CreateRequestBuilderV2, UpdateRequestBuilderV2, DeleteRequestBuilderV2 } from '@sap-cloud-sdk/core';
import { BusinessPartnerTaxNumber } from './BusinessPartnerTaxNumber';

/**
 * Request builder class for operations supported on the [[BusinessPartnerTaxNumber]] entity.
 */
export class BusinessPartnerTaxNumberRequestBuilder extends RequestBuilder<BusinessPartnerTaxNumber> {
  /**
   * Returns a request builder for retrieving one `BusinessPartnerTaxNumber` entity based on its keys.
   * @param businessPartner Key property. See [[BusinessPartnerTaxNumber.businessPartner]].
   * @param bpTaxType Key property. See [[BusinessPartnerTaxNumber.bpTaxType]].
   * @returns A request builder for creating requests to retrieve one `BusinessPartnerTaxNumber` entity based on its keys.
   */
  getByKey(businessPartner: string, bpTaxType: string): GetByKeyRequestBuilderV2<BusinessPartnerTaxNumber> {
    return new GetByKeyRequestBuilderV2(BusinessPartnerTaxNumber, {
      BusinessPartner: businessPartner,
      BPTaxType: bpTaxType
    });
  }

  /**
   * Returns a request builder for querying all `BusinessPartnerTaxNumber` entities.
   * @returns A request builder for creating requests to retrieve all `BusinessPartnerTaxNumber` entities.
   */
  getAll(): GetAllRequestBuilderV2<BusinessPartnerTaxNumber> {
    return new GetAllRequestBuilderV2(BusinessPartnerTaxNumber);
  }

  /**
   * Returns a request builder for creating a `BusinessPartnerTaxNumber` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BusinessPartnerTaxNumber`.
   */
  create(entity: BusinessPartnerTaxNumber): CreateRequestBuilderV2<BusinessPartnerTaxNumber> {
    return new CreateRequestBuilderV2(BusinessPartnerTaxNumber, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `BusinessPartnerTaxNumber`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BusinessPartnerTaxNumber`.
   */
  update(entity: BusinessPartnerTaxNumber): UpdateRequestBuilderV2<BusinessPartnerTaxNumber> {
    return new UpdateRequestBuilderV2(BusinessPartnerTaxNumber, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `BusinessPartnerTaxNumber`.
   * @param businessPartner Key property. See [[BusinessPartnerTaxNumber.businessPartner]].
   * @param bpTaxType Key property. See [[BusinessPartnerTaxNumber.bpTaxType]].
   * @returns A request builder for creating requests that delete an entity of type `BusinessPartnerTaxNumber`.
   */
  delete(businessPartner: string, bpTaxType: string): DeleteRequestBuilderV2<BusinessPartnerTaxNumber>;
  /**
   * Returns a request builder for deleting an entity of type `BusinessPartnerTaxNumber`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BusinessPartnerTaxNumber` by taking the entity as a parameter.
   */
  delete(entity: BusinessPartnerTaxNumber): DeleteRequestBuilderV2<BusinessPartnerTaxNumber>;
  delete(businessPartnerOrEntity: any, bpTaxType?: string): DeleteRequestBuilderV2<BusinessPartnerTaxNumber> {
    return new DeleteRequestBuilderV2(BusinessPartnerTaxNumber, businessPartnerOrEntity instanceof BusinessPartnerTaxNumber ? businessPartnerOrEntity : {
      BusinessPartner: businessPartnerOrEntity!,
      BPTaxType: bpTaxType!
    });
  }
}
