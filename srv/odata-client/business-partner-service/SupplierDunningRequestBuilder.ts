/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV2, GetByKeyRequestBuilderV2, CreateRequestBuilderV2, UpdateRequestBuilderV2, DeleteRequestBuilderV2 } from '@sap-cloud-sdk/core';
import { SupplierDunning } from './SupplierDunning';

/**
 * Request builder class for operations supported on the [[SupplierDunning]] entity.
 */
export class SupplierDunningRequestBuilder extends RequestBuilder<SupplierDunning> {
  /**
   * Returns a request builder for retrieving one `SupplierDunning` entity based on its keys.
   * @param supplier Key property. See [[SupplierDunning.supplier]].
   * @param companyCode Key property. See [[SupplierDunning.companyCode]].
   * @param dunningArea Key property. See [[SupplierDunning.dunningArea]].
   * @returns A request builder for creating requests to retrieve one `SupplierDunning` entity based on its keys.
   */
  getByKey(supplier: string, companyCode: string, dunningArea: string): GetByKeyRequestBuilderV2<SupplierDunning> {
    return new GetByKeyRequestBuilderV2(SupplierDunning, {
      Supplier: supplier,
      CompanyCode: companyCode,
      DunningArea: dunningArea
    });
  }

  /**
   * Returns a request builder for querying all `SupplierDunning` entities.
   * @returns A request builder for creating requests to retrieve all `SupplierDunning` entities.
   */
  getAll(): GetAllRequestBuilderV2<SupplierDunning> {
    return new GetAllRequestBuilderV2(SupplierDunning);
  }

  /**
   * Returns a request builder for creating a `SupplierDunning` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SupplierDunning`.
   */
  create(entity: SupplierDunning): CreateRequestBuilderV2<SupplierDunning> {
    return new CreateRequestBuilderV2(SupplierDunning, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `SupplierDunning`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SupplierDunning`.
   */
  update(entity: SupplierDunning): UpdateRequestBuilderV2<SupplierDunning> {
    return new UpdateRequestBuilderV2(SupplierDunning, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `SupplierDunning`.
   * @param supplier Key property. See [[SupplierDunning.supplier]].
   * @param companyCode Key property. See [[SupplierDunning.companyCode]].
   * @param dunningArea Key property. See [[SupplierDunning.dunningArea]].
   * @returns A request builder for creating requests that delete an entity of type `SupplierDunning`.
   */
  delete(supplier: string, companyCode: string, dunningArea: string): DeleteRequestBuilderV2<SupplierDunning>;
  /**
   * Returns a request builder for deleting an entity of type `SupplierDunning`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SupplierDunning` by taking the entity as a parameter.
   */
  delete(entity: SupplierDunning): DeleteRequestBuilderV2<SupplierDunning>;
  delete(supplierOrEntity: any, companyCode?: string, dunningArea?: string): DeleteRequestBuilderV2<SupplierDunning> {
    return new DeleteRequestBuilderV2(SupplierDunning, supplierOrEntity instanceof SupplierDunning ? supplierOrEntity : {
      Supplier: supplierOrEntity!,
      CompanyCode: companyCode!,
      DunningArea: dunningArea!
    });
  }
}
