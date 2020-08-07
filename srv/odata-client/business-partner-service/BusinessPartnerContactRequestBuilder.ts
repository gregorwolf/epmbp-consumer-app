/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { BusinessPartnerContact } from './BusinessPartnerContact';

/**
 * Request builder class for operations supported on the [[BusinessPartnerContact]] entity.
 */
export class BusinessPartnerContactRequestBuilder extends RequestBuilder<BusinessPartnerContact> {
  /**
   * Returns a request builder for retrieving one `BusinessPartnerContact` entity based on its keys.
   * @param relationshipNumber Key property. See [[BusinessPartnerContact.relationshipNumber]].
   * @param businessPartnerCompany Key property. See [[BusinessPartnerContact.businessPartnerCompany]].
   * @param businessPartnerPerson Key property. See [[BusinessPartnerContact.businessPartnerPerson]].
   * @param validityEndDate Key property. See [[BusinessPartnerContact.validityEndDate]].
   * @returns A request builder for creating requests to retrieve one `BusinessPartnerContact` entity based on its keys.
   */
  getByKey(relationshipNumber: string, businessPartnerCompany: string, businessPartnerPerson: string, validityEndDate: Moment): GetByKeyRequestBuilder<BusinessPartnerContact> {
    return new GetByKeyRequestBuilder(BusinessPartnerContact, {
      RelationshipNumber: relationshipNumber,
      BusinessPartnerCompany: businessPartnerCompany,
      BusinessPartnerPerson: businessPartnerPerson,
      ValidityEndDate: validityEndDate
    });
  }

  /**
   * Returns a request builder for querying all `BusinessPartnerContact` entities.
   * @returns A request builder for creating requests to retrieve all `BusinessPartnerContact` entities.
   */
  getAll(): GetAllRequestBuilder<BusinessPartnerContact> {
    return new GetAllRequestBuilder(BusinessPartnerContact);
  }

  /**
   * Returns a request builder for creating a `BusinessPartnerContact` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BusinessPartnerContact`.
   */
  create(entity: BusinessPartnerContact): CreateRequestBuilder<BusinessPartnerContact> {
    return new CreateRequestBuilder(BusinessPartnerContact, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `BusinessPartnerContact`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BusinessPartnerContact`.
   */
  update(entity: BusinessPartnerContact): UpdateRequestBuilder<BusinessPartnerContact> {
    return new UpdateRequestBuilder(BusinessPartnerContact, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `BusinessPartnerContact`.
   * @param relationshipNumber Key property. See [[BusinessPartnerContact.relationshipNumber]].
   * @param businessPartnerCompany Key property. See [[BusinessPartnerContact.businessPartnerCompany]].
   * @param businessPartnerPerson Key property. See [[BusinessPartnerContact.businessPartnerPerson]].
   * @param validityEndDate Key property. See [[BusinessPartnerContact.validityEndDate]].
   * @returns A request builder for creating requests that delete an entity of type `BusinessPartnerContact`.
   */
  delete(relationshipNumber: string, businessPartnerCompany: string, businessPartnerPerson: string, validityEndDate: Moment): DeleteRequestBuilder<BusinessPartnerContact>;
  /**
   * Returns a request builder for deleting an entity of type `BusinessPartnerContact`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BusinessPartnerContact` by taking the entity as a parameter.
   */
  delete(entity: BusinessPartnerContact): DeleteRequestBuilder<BusinessPartnerContact>;
  delete(relationshipNumberOrEntity: any, businessPartnerCompany?: string, businessPartnerPerson?: string, validityEndDate?: Moment): DeleteRequestBuilder<BusinessPartnerContact> {
    return new DeleteRequestBuilder(BusinessPartnerContact, relationshipNumberOrEntity instanceof BusinessPartnerContact ? relationshipNumberOrEntity : {
      RelationshipNumber: relationshipNumberOrEntity!,
      BusinessPartnerCompany: businessPartnerCompany!,
      BusinessPartnerPerson: businessPartnerPerson!,
      ValidityEndDate: validityEndDate!
    });
  }
}
