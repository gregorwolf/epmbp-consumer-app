/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, UpdateRequestBuilder } from '@sap-cloud-sdk/core';
import { BpContactToFuncAndDept } from './BpContactToFuncAndDept';

/**
 * Request builder class for operations supported on the [[BpContactToFuncAndDept]] entity.
 */
export class BpContactToFuncAndDeptRequestBuilder extends RequestBuilder<BpContactToFuncAndDept> {
  /**
   * Returns a request builder for retrieving one `BpContactToFuncAndDept` entity based on its keys.
   * @param relationshipNumber Key property. See [[BpContactToFuncAndDept.relationshipNumber]].
   * @param businessPartnerCompany Key property. See [[BpContactToFuncAndDept.businessPartnerCompany]].
   * @param businessPartnerPerson Key property. See [[BpContactToFuncAndDept.businessPartnerPerson]].
   * @param validityEndDate Key property. See [[BpContactToFuncAndDept.validityEndDate]].
   * @returns A request builder for creating requests to retrieve one `BpContactToFuncAndDept` entity based on its keys.
   */
  getByKey(relationshipNumber: string, businessPartnerCompany: string, businessPartnerPerson: string, validityEndDate: Moment): GetByKeyRequestBuilder<BpContactToFuncAndDept> {
    return new GetByKeyRequestBuilder(BpContactToFuncAndDept, {
      RelationshipNumber: relationshipNumber,
      BusinessPartnerCompany: businessPartnerCompany,
      BusinessPartnerPerson: businessPartnerPerson,
      ValidityEndDate: validityEndDate
    });
  }

  /**
   * Returns a request builder for querying all `BpContactToFuncAndDept` entities.
   * @returns A request builder for creating requests to retrieve all `BpContactToFuncAndDept` entities.
   */
  getAll(): GetAllRequestBuilder<BpContactToFuncAndDept> {
    return new GetAllRequestBuilder(BpContactToFuncAndDept);
  }

  /**
   * Returns a request builder for updating an entity of type `BpContactToFuncAndDept`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BpContactToFuncAndDept`.
   */
  update(entity: BpContactToFuncAndDept): UpdateRequestBuilder<BpContactToFuncAndDept> {
    return new UpdateRequestBuilder(BpContactToFuncAndDept, entity);
  }
}
