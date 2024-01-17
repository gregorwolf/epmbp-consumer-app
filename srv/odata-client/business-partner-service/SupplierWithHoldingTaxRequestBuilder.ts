/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV2, GetByKeyRequestBuilderV2, CreateRequestBuilderV2, UpdateRequestBuilderV2, DeleteRequestBuilderV2 } from '@sap-cloud-sdk/core';
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
  getByKey(supplier: string, companyCode: string, withholdingTaxType: string): GetByKeyRequestBuilderV2<SupplierWithHoldingTax> {
    return new GetByKeyRequestBuilderV2(SupplierWithHoldingTax, {
      Supplier: supplier,
      CompanyCode: companyCode,
      WithholdingTaxType: withholdingTaxType
    });
  }

  /**
   * Returns a request builder for querying all `SupplierWithHoldingTax` entities.
   * @returns A request builder for creating requests to retrieve all `SupplierWithHoldingTax` entities.
   */
  getAll(): GetAllRequestBuilderV2<SupplierWithHoldingTax> {
    return new GetAllRequestBuilderV2(SupplierWithHoldingTax);
  }

  /**
   * Returns a request builder for creating a `SupplierWithHoldingTax` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SupplierWithHoldingTax`.
   */
  create(entity: SupplierWithHoldingTax): CreateRequestBuilderV2<SupplierWithHoldingTax> {
    return new CreateRequestBuilderV2(SupplierWithHoldingTax, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `SupplierWithHoldingTax`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SupplierWithHoldingTax`.
   */
  update(entity: SupplierWithHoldingTax): UpdateRequestBuilderV2<SupplierWithHoldingTax> {
    return new UpdateRequestBuilderV2(SupplierWithHoldingTax, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `SupplierWithHoldingTax`.
   * @param supplier Key property. See [[SupplierWithHoldingTax.supplier]].
   * @param companyCode Key property. See [[SupplierWithHoldingTax.companyCode]].
   * @param withholdingTaxType Key property. See [[SupplierWithHoldingTax.withholdingTaxType]].
   * @returns A request builder for creating requests that delete an entity of type `SupplierWithHoldingTax`.
   */
  delete(supplier: string, companyCode: string, withholdingTaxType: string): DeleteRequestBuilderV2<SupplierWithHoldingTax>;
  /**
   * Returns a request builder for deleting an entity of type `SupplierWithHoldingTax`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SupplierWithHoldingTax` by taking the entity as a parameter.
   */
  delete(entity: SupplierWithHoldingTax): DeleteRequestBuilderV2<SupplierWithHoldingTax>;
  delete(supplierOrEntity: any, companyCode?: string, withholdingTaxType?: string): DeleteRequestBuilderV2<SupplierWithHoldingTax> {
    return new DeleteRequestBuilderV2(SupplierWithHoldingTax, supplierOrEntity instanceof SupplierWithHoldingTax ? supplierOrEntity : {
      Supplier: supplierOrEntity!,
      CompanyCode: companyCode!,
      WithholdingTaxType: withholdingTaxType!
    });
  }
}
