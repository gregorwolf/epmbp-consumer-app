/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { BpContactToAddress } from './BpContactToAddress';

/**
 * Request builder class for operations supported on the [[BpContactToAddress]] entity.
 */
export class BpContactToAddressRequestBuilder extends RequestBuilder<BpContactToAddress> {
  /**
   * Returns a request builder for retrieving one `BpContactToAddress` entity based on its keys.
   * @param relationshipNumber Key property. See [[BpContactToAddress.relationshipNumber]].
   * @param businessPartnerCompany Key property. See [[BpContactToAddress.businessPartnerCompany]].
   * @param businessPartnerPerson Key property. See [[BpContactToAddress.businessPartnerPerson]].
   * @param validityEndDate Key property. See [[BpContactToAddress.validityEndDate]].
   * @param addressId Key property. See [[BpContactToAddress.addressId]].
   * @returns A request builder for creating requests to retrieve one `BpContactToAddress` entity based on its keys.
   */
  getByKey(relationshipNumber: string, businessPartnerCompany: string, businessPartnerPerson: string, validityEndDate: Moment, addressId: string): GetByKeyRequestBuilder<BpContactToAddress> {
    return new GetByKeyRequestBuilder(BpContactToAddress, {
      RelationshipNumber: relationshipNumber,
      BusinessPartnerCompany: businessPartnerCompany,
      BusinessPartnerPerson: businessPartnerPerson,
      ValidityEndDate: validityEndDate,
      AddressID: addressId
    });
  }

  /**
   * Returns a request builder for querying all `BpContactToAddress` entities.
   * @returns A request builder for creating requests to retrieve all `BpContactToAddress` entities.
   */
  getAll(): GetAllRequestBuilder<BpContactToAddress> {
    return new GetAllRequestBuilder(BpContactToAddress);
  }
}
