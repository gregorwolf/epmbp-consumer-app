/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder } from '@sap-cloud-sdk/core';
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
  getByKey(businessPartner: string, businessPartnerRole: string): GetByKeyRequestBuilder<BusinessPartnerRole> {
    return new GetByKeyRequestBuilder(BusinessPartnerRole, {
      BusinessPartner: businessPartner,
      BusinessPartnerRole: businessPartnerRole
    });
  }

  /**
   * Returns a request builder for querying all `BusinessPartnerRole` entities.
   * @returns A request builder for creating requests to retrieve all `BusinessPartnerRole` entities.
   */
  getAll(): GetAllRequestBuilder<BusinessPartnerRole> {
    return new GetAllRequestBuilder(BusinessPartnerRole);
  }

  /**
   * Returns a request builder for creating a `BusinessPartnerRole` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BusinessPartnerRole`.
   */
  create(entity: BusinessPartnerRole): CreateRequestBuilder<BusinessPartnerRole> {
    return new CreateRequestBuilder(BusinessPartnerRole, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `BusinessPartnerRole`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BusinessPartnerRole`.
   */
  update(entity: BusinessPartnerRole): UpdateRequestBuilder<BusinessPartnerRole> {
    return new UpdateRequestBuilder(BusinessPartnerRole, entity);
  }
}
