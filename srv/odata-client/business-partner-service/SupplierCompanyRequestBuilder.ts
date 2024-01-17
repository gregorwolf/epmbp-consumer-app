/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV2, GetByKeyRequestBuilderV2, CreateRequestBuilderV2, UpdateRequestBuilderV2 } from '@sap-cloud-sdk/core';
import { SupplierCompany } from './SupplierCompany';

/**
 * Request builder class for operations supported on the [[SupplierCompany]] entity.
 */
export class SupplierCompanyRequestBuilder extends RequestBuilder<SupplierCompany> {
  /**
   * Returns a request builder for retrieving one `SupplierCompany` entity based on its keys.
   * @param supplier Key property. See [[SupplierCompany.supplier]].
   * @param companyCode Key property. See [[SupplierCompany.companyCode]].
   * @returns A request builder for creating requests to retrieve one `SupplierCompany` entity based on its keys.
   */
  getByKey(supplier: string, companyCode: string): GetByKeyRequestBuilderV2<SupplierCompany> {
    return new GetByKeyRequestBuilderV2(SupplierCompany, {
      Supplier: supplier,
      CompanyCode: companyCode
    });
  }

  /**
   * Returns a request builder for querying all `SupplierCompany` entities.
   * @returns A request builder for creating requests to retrieve all `SupplierCompany` entities.
   */
  getAll(): GetAllRequestBuilderV2<SupplierCompany> {
    return new GetAllRequestBuilderV2(SupplierCompany);
  }

  /**
   * Returns a request builder for creating a `SupplierCompany` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SupplierCompany`.
   */
  create(entity: SupplierCompany): CreateRequestBuilderV2<SupplierCompany> {
    return new CreateRequestBuilderV2(SupplierCompany, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `SupplierCompany`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SupplierCompany`.
   */
  update(entity: SupplierCompany): UpdateRequestBuilderV2<SupplierCompany> {
    return new UpdateRequestBuilderV2(SupplierCompany, entity);
  }
}
