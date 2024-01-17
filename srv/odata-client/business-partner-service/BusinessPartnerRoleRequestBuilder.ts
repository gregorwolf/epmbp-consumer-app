/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV2, GetByKeyRequestBuilderV2, CreateRequestBuilderV2, UpdateRequestBuilderV2 } from '@sap-cloud-sdk/core';
import { BusinessPartnerRole } from './BusinessPartnerRole';

/**
 * Request builder class for operations supported on the [[BusinessPartnerRole]] entity.
 */
export class BusinessPartnerRoleRequestBuilder extends RequestBuilder<BusinessPartnerRole> {
  /**
   * Returns a request builder for retrieving one `BusinessPartnerRole` entity based on its keys.
   * @param businessPartner Key property. See [[BusinessPartnerRole.businessPartner]].
   * @param businessPartnerRole Key property. See [[BusinessPartnerRole.businessPartnerRole]].
   * @returns A request builder for creating requests to retrieve one `BusinessPartnerRole` entity based on its keys.
   */
  getByKey(businessPartner: string, businessPartnerRole: string): GetByKeyRequestBuilderV2<BusinessPartnerRole> {
    return new GetByKeyRequestBuilderV2(BusinessPartnerRole, {
      BusinessPartner: businessPartner,
      BusinessPartnerRole: businessPartnerRole
    });
  }

  /**
   * Returns a request builder for querying all `BusinessPartnerRole` entities.
   * @returns A request builder for creating requests to retrieve all `BusinessPartnerRole` entities.
   */
  getAll(): GetAllRequestBuilderV2<BusinessPartnerRole> {
    return new GetAllRequestBuilderV2(BusinessPartnerRole);
  }

  /**
   * Returns a request builder for creating a `BusinessPartnerRole` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BusinessPartnerRole`.
   */
  create(entity: BusinessPartnerRole): CreateRequestBuilderV2<BusinessPartnerRole> {
    return new CreateRequestBuilderV2(BusinessPartnerRole, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `BusinessPartnerRole`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BusinessPartnerRole`.
   */
  update(entity: BusinessPartnerRole): UpdateRequestBuilderV2<BusinessPartnerRole> {
    return new UpdateRequestBuilderV2(BusinessPartnerRole, entity);
  }
}
