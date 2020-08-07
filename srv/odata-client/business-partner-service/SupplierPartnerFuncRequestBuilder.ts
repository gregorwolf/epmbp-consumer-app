/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { SupplierPartnerFunc } from './SupplierPartnerFunc';

/**
 * Request builder class for operations supported on the [[SupplierPartnerFunc]] entity.
 */
export class SupplierPartnerFuncRequestBuilder extends RequestBuilder<SupplierPartnerFunc> {
  /**
   * Returns a request builder for retrieving one `SupplierPartnerFunc` entity based on its keys.
   * @param supplier Key property. See [[SupplierPartnerFunc.supplier]].
   * @param purchasingOrganization Key property. See [[SupplierPartnerFunc.purchasingOrganization]].
   * @param supplierSubrange Key property. See [[SupplierPartnerFunc.supplierSubrange]].
   * @param plant Key property. See [[SupplierPartnerFunc.plant]].
   * @param partnerFunction Key property. See [[SupplierPartnerFunc.partnerFunction]].
   * @param partnerCounter Key property. See [[SupplierPartnerFunc.partnerCounter]].
   * @returns A request builder for creating requests to retrieve one `SupplierPartnerFunc` entity based on its keys.
   */
  getByKey(supplier: string, purchasingOrganization: string, supplierSubrange: string, plant: string, partnerFunction: string, partnerCounter: string): GetByKeyRequestBuilder<SupplierPartnerFunc> {
    return new GetByKeyRequestBuilder(SupplierPartnerFunc, {
      Supplier: supplier,
      PurchasingOrganization: purchasingOrganization,
      SupplierSubrange: supplierSubrange,
      Plant: plant,
      PartnerFunction: partnerFunction,
      PartnerCounter: partnerCounter
    });
  }

  /**
   * Returns a request builder for querying all `SupplierPartnerFunc` entities.
   * @returns A request builder for creating requests to retrieve all `SupplierPartnerFunc` entities.
   */
  getAll(): GetAllRequestBuilder<SupplierPartnerFunc> {
    return new GetAllRequestBuilder(SupplierPartnerFunc);
  }

  /**
   * Returns a request builder for creating a `SupplierPartnerFunc` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SupplierPartnerFunc`.
   */
  create(entity: SupplierPartnerFunc): CreateRequestBuilder<SupplierPartnerFunc> {
    return new CreateRequestBuilder(SupplierPartnerFunc, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `SupplierPartnerFunc`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SupplierPartnerFunc`.
   */
  update(entity: SupplierPartnerFunc): UpdateRequestBuilder<SupplierPartnerFunc> {
    return new UpdateRequestBuilder(SupplierPartnerFunc, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `SupplierPartnerFunc`.
   * @param supplier Key property. See [[SupplierPartnerFunc.supplier]].
   * @param purchasingOrganization Key property. See [[SupplierPartnerFunc.purchasingOrganization]].
   * @param supplierSubrange Key property. See [[SupplierPartnerFunc.supplierSubrange]].
   * @param plant Key property. See [[SupplierPartnerFunc.plant]].
   * @param partnerFunction Key property. See [[SupplierPartnerFunc.partnerFunction]].
   * @param partnerCounter Key property. See [[SupplierPartnerFunc.partnerCounter]].
   * @returns A request builder for creating requests that delete an entity of type `SupplierPartnerFunc`.
   */
  delete(supplier: string, purchasingOrganization: string, supplierSubrange: string, plant: string, partnerFunction: string, partnerCounter: string): DeleteRequestBuilder<SupplierPartnerFunc>;
  /**
   * Returns a request builder for deleting an entity of type `SupplierPartnerFunc`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SupplierPartnerFunc` by taking the entity as a parameter.
   */
  delete(entity: SupplierPartnerFunc): DeleteRequestBuilder<SupplierPartnerFunc>;
  delete(supplierOrEntity: any, purchasingOrganization?: string, supplierSubrange?: string, plant?: string, partnerFunction?: string, partnerCounter?: string): DeleteRequestBuilder<SupplierPartnerFunc> {
    return new DeleteRequestBuilder(SupplierPartnerFunc, supplierOrEntity instanceof SupplierPartnerFunc ? supplierOrEntity : {
      Supplier: supplierOrEntity!,
      PurchasingOrganization: purchasingOrganization!,
      SupplierSubrange: supplierSubrange!,
      Plant: plant!,
      PartnerFunction: partnerFunction!,
      PartnerCounter: partnerCounter!
    });
  }
}
