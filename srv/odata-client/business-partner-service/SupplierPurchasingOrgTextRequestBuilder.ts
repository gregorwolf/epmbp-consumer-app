/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { SupplierPurchasingOrgText } from './SupplierPurchasingOrgText';

/**
 * Request builder class for operations supported on the [[SupplierPurchasingOrgText]] entity.
 */
export class SupplierPurchasingOrgTextRequestBuilder extends RequestBuilder<SupplierPurchasingOrgText> {
  /**
   * Returns a request builder for retrieving one `SupplierPurchasingOrgText` entity based on its keys.
   * @param supplier Key property. See [[SupplierPurchasingOrgText.supplier]].
   * @param purchasingOrganization Key property. See [[SupplierPurchasingOrgText.purchasingOrganization]].
   * @param language Key property. See [[SupplierPurchasingOrgText.language]].
   * @param longTextId Key property. See [[SupplierPurchasingOrgText.longTextId]].
   * @returns A request builder for creating requests to retrieve one `SupplierPurchasingOrgText` entity based on its keys.
   */
  getByKey(supplier: string, purchasingOrganization: string, language: string, longTextId: string): GetByKeyRequestBuilder<SupplierPurchasingOrgText> {
    return new GetByKeyRequestBuilder(SupplierPurchasingOrgText, {
      Supplier: supplier,
      PurchasingOrganization: purchasingOrganization,
      Language: language,
      LongTextID: longTextId
    });
  }

  /**
   * Returns a request builder for querying all `SupplierPurchasingOrgText` entities.
   * @returns A request builder for creating requests to retrieve all `SupplierPurchasingOrgText` entities.
   */
  getAll(): GetAllRequestBuilder<SupplierPurchasingOrgText> {
    return new GetAllRequestBuilder(SupplierPurchasingOrgText);
  }

  /**
   * Returns a request builder for creating a `SupplierPurchasingOrgText` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SupplierPurchasingOrgText`.
   */
  create(entity: SupplierPurchasingOrgText): CreateRequestBuilder<SupplierPurchasingOrgText> {
    return new CreateRequestBuilder(SupplierPurchasingOrgText, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `SupplierPurchasingOrgText`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SupplierPurchasingOrgText`.
   */
  update(entity: SupplierPurchasingOrgText): UpdateRequestBuilder<SupplierPurchasingOrgText> {
    return new UpdateRequestBuilder(SupplierPurchasingOrgText, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `SupplierPurchasingOrgText`.
   * @param supplier Key property. See [[SupplierPurchasingOrgText.supplier]].
   * @param purchasingOrganization Key property. See [[SupplierPurchasingOrgText.purchasingOrganization]].
   * @param language Key property. See [[SupplierPurchasingOrgText.language]].
   * @param longTextId Key property. See [[SupplierPurchasingOrgText.longTextId]].
   * @returns A request builder for creating requests that delete an entity of type `SupplierPurchasingOrgText`.
   */
  delete(supplier: string, purchasingOrganization: string, language: string, longTextId: string): DeleteRequestBuilder<SupplierPurchasingOrgText>;
  /**
   * Returns a request builder for deleting an entity of type `SupplierPurchasingOrgText`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SupplierPurchasingOrgText` by taking the entity as a parameter.
   */
  delete(entity: SupplierPurchasingOrgText): DeleteRequestBuilder<SupplierPurchasingOrgText>;
  delete(supplierOrEntity: any, purchasingOrganization?: string, language?: string, longTextId?: string): DeleteRequestBuilder<SupplierPurchasingOrgText> {
    return new DeleteRequestBuilder(SupplierPurchasingOrgText, supplierOrEntity instanceof SupplierPurchasingOrgText ? supplierOrEntity : {
      Supplier: supplierOrEntity!,
      PurchasingOrganization: purchasingOrganization!,
      Language: language!,
      LongTextID: longTextId!
    });
  }
}
