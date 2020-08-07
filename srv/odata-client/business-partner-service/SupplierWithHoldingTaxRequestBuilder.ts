/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { SupplierWithHoldingTax } from './SupplierWithHoldingTax';

/**
 * Request builder class for operations supported on the [[SupplierWithHoldingTax]] entity.
 */
export class SupplierWithHoldingTaxRequestBuilder extends RequestBuilder<SupplierWithHoldingTax> {
  /**
   * Returns a request builder for retrieving one `SupplierWithHoldingTax` entity based on its keys.
   * @param supplier Key property. See [[SupplierWithHoldingTax.supplier]].
   * @param companyCode Key property. See [[SupplierWithHoldingTax.companyCode]].
   * @param withholdingTaxType Key property. See [[SupplierWithHoldingTax.withholdingTaxType]].
   * @returns A request builder for creating requests to retrieve one `SupplierWithHoldingTax` entity based on its keys.
   */
  getByKey(supplier: string, companyCode: string, withholdingTaxType: string): GetByKeyRequestBuilder<SupplierWithHoldingTax> {
    return new GetByKeyRequestBuilder(SupplierWithHoldingTax, {
      Supplier: supplier,
      CompanyCode: companyCode,
      WithholdingTaxType: withholdingTaxType
    });
  }

  /**
   * Returns a request builder for querying all `SupplierWithHoldingTax` entities.
   * @returns A request builder for creating requests to retrieve all `SupplierWithHoldingTax` entities.
   */
  getAll(): GetAllRequestBuilder<SupplierWithHoldingTax> {
    return new GetAllRequestBuilder(SupplierWithHoldingTax);
  }

  /**
   * Returns a request builder for creating a `SupplierWithHoldingTax` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SupplierWithHoldingTax`.
   */
  create(entity: SupplierWithHoldingTax): CreateRequestBuilder<SupplierWithHoldingTax> {
    return new CreateRequestBuilder(SupplierWithHoldingTax, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `SupplierWithHoldingTax`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SupplierWithHoldingTax`.
   */
  update(entity: SupplierWithHoldingTax): UpdateRequestBuilder<SupplierWithHoldingTax> {
    return new UpdateRequestBuilder(SupplierWithHoldingTax, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `SupplierWithHoldingTax`.
   * @param supplier Key property. See [[SupplierWithHoldingTax.supplier]].
   * @param companyCode Key property. See [[SupplierWithHoldingTax.companyCode]].
   * @param withholdingTaxType Key property. See [[SupplierWithHoldingTax.withholdingTaxType]].
   * @returns A request builder for creating requests that delete an entity of type `SupplierWithHoldingTax`.
   */
  delete(supplier: string, companyCode: string, withholdingTaxType: string): DeleteRequestBuilder<SupplierWithHoldingTax>;
  /**
   * Returns a request builder for deleting an entity of type `SupplierWithHoldingTax`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SupplierWithHoldingTax` by taking the entity as a parameter.
   */
  delete(entity: SupplierWithHoldingTax): DeleteRequestBuilder<SupplierWithHoldingTax>;
  delete(supplierOrEntity: any, companyCode?: string, withholdingTaxType?: string): DeleteRequestBuilder<SupplierWithHoldingTax> {
    return new DeleteRequestBuilder(SupplierWithHoldingTax, supplierOrEntity instanceof SupplierWithHoldingTax ? supplierOrEntity : {
      Supplier: supplierOrEntity!,
      CompanyCode: companyCode!,
      WithholdingTaxType: withholdingTaxType!
    });
  }
}
