import { CreateRequestBuilder, DeleteRequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, ODataBatchChangeSet, ODataBatchRequestBuilder, UpdateRequestBuilder } from '@sap-cloud-sdk/core';
import { Suppliers, Products, ProductDrafts, ImageDrafts, MainCategories, SubCategories, Currencies, DimensionUnits, QuantityUnits, WeightUnits } from './index';
/**
 * Batch builder for operations supported on the Epm_Ref_Apps_Prod_Man_Srv.
 * @param requests The requests of the batch
 * @returns A request builder for batch.
 */
export declare function batch(...requests: Array<ReadEpm_Ref_Apps_Prod_Man_SrvRequestBuilder | ODataBatchChangeSet<WriteEpm_Ref_Apps_Prod_Man_SrvRequestBuilder>>): ODataBatchRequestBuilder;
/**
 * Change set constructor consists of write operations supported on the Epm_Ref_Apps_Prod_Man_Srv.
 * @param requests The requests of the change set
 * @returns A change set for batch.
 */
export declare function changeset(...requests: WriteEpm_Ref_Apps_Prod_Man_SrvRequestBuilder[]): ODataBatchChangeSet<WriteEpm_Ref_Apps_Prod_Man_SrvRequestBuilder>;
export declare const defaultEpm_Ref_Apps_Prod_Man_SrvPath = "/sap/opu/odata/sap/EPM_REF_APPS_PROD_MAN_SRV";
export declare type ReadEpm_Ref_Apps_Prod_Man_SrvRequestBuilder = GetAllRequestBuilder<Suppliers> | GetAllRequestBuilder<Products> | GetAllRequestBuilder<ProductDrafts> | GetAllRequestBuilder<ImageDrafts> | GetAllRequestBuilder<MainCategories> | GetAllRequestBuilder<SubCategories> | GetAllRequestBuilder<Currencies> | GetAllRequestBuilder<DimensionUnits> | GetAllRequestBuilder<QuantityUnits> | GetAllRequestBuilder<WeightUnits> | GetByKeyRequestBuilder<Suppliers> | GetByKeyRequestBuilder<Products> | GetByKeyRequestBuilder<ProductDrafts> | GetByKeyRequestBuilder<ImageDrafts> | GetByKeyRequestBuilder<MainCategories> | GetByKeyRequestBuilder<SubCategories> | GetByKeyRequestBuilder<Currencies> | GetByKeyRequestBuilder<DimensionUnits> | GetByKeyRequestBuilder<QuantityUnits> | GetByKeyRequestBuilder<WeightUnits>;
export declare type WriteEpm_Ref_Apps_Prod_Man_SrvRequestBuilder = CreateRequestBuilder<Suppliers> | UpdateRequestBuilder<Suppliers> | DeleteRequestBuilder<Suppliers> | CreateRequestBuilder<Products> | UpdateRequestBuilder<Products> | DeleteRequestBuilder<Products> | CreateRequestBuilder<ProductDrafts> | UpdateRequestBuilder<ProductDrafts> | DeleteRequestBuilder<ProductDrafts> | CreateRequestBuilder<ImageDrafts> | UpdateRequestBuilder<ImageDrafts> | DeleteRequestBuilder<ImageDrafts> | CreateRequestBuilder<MainCategories> | UpdateRequestBuilder<MainCategories> | DeleteRequestBuilder<MainCategories> | CreateRequestBuilder<SubCategories> | UpdateRequestBuilder<SubCategories> | DeleteRequestBuilder<SubCategories> | CreateRequestBuilder<Currencies> | UpdateRequestBuilder<Currencies> | DeleteRequestBuilder<Currencies> | CreateRequestBuilder<DimensionUnits> | UpdateRequestBuilder<DimensionUnits> | DeleteRequestBuilder<DimensionUnits> | CreateRequestBuilder<QuantityUnits> | UpdateRequestBuilder<QuantityUnits> | DeleteRequestBuilder<QuantityUnits> | CreateRequestBuilder<WeightUnits> | UpdateRequestBuilder<WeightUnits> | DeleteRequestBuilder<WeightUnits>;
//# sourceMappingURL=BatchRequest.d.ts.map