/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CreateRequestBuilder, DeleteRequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, ODataBatchChangeSet, ODataBatchRequestBuilder, UpdateRequestBuilder } from '@sap-cloud-sdk/core';
import { Suppliers, Products, ProductDrafts, ImageDrafts, MainCategories, SubCategories, Currencies, DimensionUnits, QuantityUnits, WeightUnits } from './index';

/**
 * Batch builder for operations supported on the Epm_Ref_Apps_Prod_Man_Srv.
 * @param requests The requests of the batch
 * @returns A request builder for batch.
 */
export function batch(...requests: Array<ReadEpm_Ref_Apps_Prod_Man_SrvRequestBuilder | ODataBatchChangeSet<WriteEpm_Ref_Apps_Prod_Man_SrvRequestBuilder>>): ODataBatchRequestBuilder {
  return new ODataBatchRequestBuilder(defaultEpm_Ref_Apps_Prod_Man_SrvPath, requests, map);
}

/**
 * Change set constructor consists of write operations supported on the Epm_Ref_Apps_Prod_Man_Srv.
 * @param requests The requests of the change set
 * @returns A change set for batch.
 */
export function changeset(...requests: WriteEpm_Ref_Apps_Prod_Man_SrvRequestBuilder[]): ODataBatchChangeSet<WriteEpm_Ref_Apps_Prod_Man_SrvRequestBuilder> {
  return new ODataBatchChangeSet(requests);
}

export const defaultEpm_Ref_Apps_Prod_Man_SrvPath = '/sap/opu/odata/sap/EPM_REF_APPS_PROD_MAN_SRV';
const map = { 'Suppliers': Suppliers, 'Products': Products, 'ProductDrafts': ProductDrafts, 'ImageDrafts': ImageDrafts, 'MainCategories': MainCategories, 'SubCategories': SubCategories, 'Currencies': Currencies, 'DimensionUnits': DimensionUnits, 'QuantityUnits': QuantityUnits, 'WeightUnits': WeightUnits };
export type ReadEpm_Ref_Apps_Prod_Man_SrvRequestBuilder = GetAllRequestBuilder<Suppliers> | GetAllRequestBuilder<Products> | GetAllRequestBuilder<ProductDrafts> | GetAllRequestBuilder<ImageDrafts> | GetAllRequestBuilder<MainCategories> | GetAllRequestBuilder<SubCategories> | GetAllRequestBuilder<Currencies> | GetAllRequestBuilder<DimensionUnits> | GetAllRequestBuilder<QuantityUnits> | GetAllRequestBuilder<WeightUnits> | GetByKeyRequestBuilder<Suppliers> | GetByKeyRequestBuilder<Products> | GetByKeyRequestBuilder<ProductDrafts> | GetByKeyRequestBuilder<ImageDrafts> | GetByKeyRequestBuilder<MainCategories> | GetByKeyRequestBuilder<SubCategories> | GetByKeyRequestBuilder<Currencies> | GetByKeyRequestBuilder<DimensionUnits> | GetByKeyRequestBuilder<QuantityUnits> | GetByKeyRequestBuilder<WeightUnits>;
export type WriteEpm_Ref_Apps_Prod_Man_SrvRequestBuilder = CreateRequestBuilder<Suppliers> | UpdateRequestBuilder<Suppliers> | DeleteRequestBuilder<Suppliers> | CreateRequestBuilder<Products> | UpdateRequestBuilder<Products> | DeleteRequestBuilder<Products> | CreateRequestBuilder<ProductDrafts> | UpdateRequestBuilder<ProductDrafts> | DeleteRequestBuilder<ProductDrafts> | CreateRequestBuilder<ImageDrafts> | UpdateRequestBuilder<ImageDrafts> | DeleteRequestBuilder<ImageDrafts> | CreateRequestBuilder<MainCategories> | UpdateRequestBuilder<MainCategories> | DeleteRequestBuilder<MainCategories> | CreateRequestBuilder<SubCategories> | UpdateRequestBuilder<SubCategories> | DeleteRequestBuilder<SubCategories> | CreateRequestBuilder<Currencies> | UpdateRequestBuilder<Currencies> | DeleteRequestBuilder<Currencies> | CreateRequestBuilder<DimensionUnits> | UpdateRequestBuilder<DimensionUnits> | DeleteRequestBuilder<DimensionUnits> | CreateRequestBuilder<QuantityUnits> | UpdateRequestBuilder<QuantityUnits> | DeleteRequestBuilder<QuantityUnits> | CreateRequestBuilder<WeightUnits> | UpdateRequestBuilder<WeightUnits> | DeleteRequestBuilder<WeightUnits>;
