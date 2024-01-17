/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV2, GetByKeyRequestBuilderV2, CreateRequestBuilderV2, UpdateRequestBuilderV2, DeleteRequestBuilderV2 } from '@sap-cloud-sdk/core';
import { BusPartAddrDepdntTaxNmbr } from './BusPartAddrDepdntTaxNmbr';

/**
 * Request builder class for operations supported on the [[BusPartAddrDepdntTaxNmbr]] entity.
 */
export class BusPartAddrDepdntTaxNmbrRequestBuilder extends RequestBuilder<BusPartAddrDepdntTaxNmbr> {
  /**
   * Returns a request builder for retrieving one `BusPartAddrDepdntTaxNmbr` entity based on its keys.
   * @param businessPartner Key property. See [[BusPartAddrDepdntTaxNmbr.businessPartner]].
   * @param addressId Key property. See [[BusPartAddrDepdntTaxNmbr.addressId]].
   * @param bpTaxType Key property. See [[BusPartAddrDepdntTaxNmbr.bpTaxType]].
   * @returns A request builder for creating requests to retrieve one `BusPartAddrDepdntTaxNmbr` entity based on its keys.
   */
  getByKey(businessPartner: string, addressId: string, bpTaxType: string): GetByKeyRequestBuilderV2<BusPartAddrDepdntTaxNmbr> {
    return new GetByKeyRequestBuilderV2(BusPartAddrDepdntTaxNmbr, {
      BusinessPartner: businessPartner,
      AddressID: addressId,
      BPTaxType: bpTaxType
    });
  }

  /**
   * Returns a request builder for querying all `BusPartAddrDepdntTaxNmbr` entities.
   * @returns A request builder for creating requests to retrieve all `BusPartAddrDepdntTaxNmbr` entities.
   */
  getAll(): GetAllRequestBuilderV2<BusPartAddrDepdntTaxNmbr> {
    return new GetAllRequestBuilderV2(BusPartAddrDepdntTaxNmbr);
  }

  /**
   * Returns a request builder for creating a `BusPartAddrDepdntTaxNmbr` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BusPartAddrDepdntTaxNmbr`.
   */
  create(entity: BusPartAddrDepdntTaxNmbr): CreateRequestBuilderV2<BusPartAddrDepdntTaxNmbr> {
    return new CreateRequestBuilderV2(BusPartAddrDepdntTaxNmbr, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `BusPartAddrDepdntTaxNmbr`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BusPartAddrDepdntTaxNmbr`.
   */
  update(entity: BusPartAddrDepdntTaxNmbr): UpdateRequestBuilderV2<BusPartAddrDepdntTaxNmbr> {
    return new UpdateRequestBuilderV2(BusPartAddrDepdntTaxNmbr, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `BusPartAddrDepdntTaxNmbr`.
   * @param businessPartner Key property. See [[BusPartAddrDepdntTaxNmbr.businessPartner]].
   * @param addressId Key property. See [[BusPartAddrDepdntTaxNmbr.addressId]].
   * @param bpTaxType Key property. See [[BusPartAddrDepdntTaxNmbr.bpTaxType]].
   * @returns A request builder for creating requests that delete an entity of type `BusPartAddrDepdntTaxNmbr`.
   */
  delete(businessPartner: string, addressId: string, bpTaxType: string): DeleteRequestBuilderV2<BusPartAddrDepdntTaxNmbr>;
  /**
   * Returns a request builder for deleting an entity of type `BusPartAddrDepdntTaxNmbr`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BusPartAddrDepdntTaxNmbr` by taking the entity as a parameter.
   */
  delete(entity: BusPartAddrDepdntTaxNmbr): DeleteRequestBuilderV2<BusPartAddrDepdntTaxNmbr>;
  delete(businessPartnerOrEntity: any, addressId?: string, bpTaxType?: string): DeleteRequestBuilderV2<BusPartAddrDepdntTaxNmbr> {
    return new DeleteRequestBuilderV2(BusPartAddrDepdntTaxNmbr, businessPartnerOrEntity instanceof BusPartAddrDepdntTaxNmbr ? businessPartnerOrEntity : {
      BusinessPartner: businessPartnerOrEntity!,
      AddressID: addressId!,
      BPTaxType: bpTaxType!
    });
  }
}
