/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV2, GetByKeyRequestBuilderV2, CreateRequestBuilderV2, UpdateRequestBuilderV2, DeleteRequestBuilderV2 } from '@sap-cloud-sdk/core';
import { CustSalesPartnerFunc } from './CustSalesPartnerFunc';

/**
 * Request builder class for operations supported on the [[CustSalesPartnerFunc]] entity.
 */
export class CustSalesPartnerFuncRequestBuilder extends RequestBuilder<CustSalesPartnerFunc> {
  /**
   * Returns a request builder for retrieving one `CustSalesPartnerFunc` entity based on its keys.
   * @param customer Key property. See [[CustSalesPartnerFunc.customer]].
   * @param salesOrganization Key property. See [[CustSalesPartnerFunc.salesOrganization]].
   * @param distributionChannel Key property. See [[CustSalesPartnerFunc.distributionChannel]].
   * @param division Key property. See [[CustSalesPartnerFunc.division]].
   * @param partnerCounter Key property. See [[CustSalesPartnerFunc.partnerCounter]].
   * @param partnerFunction Key property. See [[CustSalesPartnerFunc.partnerFunction]].
   * @returns A request builder for creating requests to retrieve one `CustSalesPartnerFunc` entity based on its keys.
   */
  getByKey(customer: string, salesOrganization: string, distributionChannel: string, division: string, partnerCounter: string, partnerFunction: string): GetByKeyRequestBuilderV2<CustSalesPartnerFunc> {
    return new GetByKeyRequestBuilderV2(CustSalesPartnerFunc, {
      Customer: customer,
      SalesOrganization: salesOrganization,
      DistributionChannel: distributionChannel,
      Division: division,
      PartnerCounter: partnerCounter,
      PartnerFunction: partnerFunction
    });
  }

  /**
   * Returns a request builder for querying all `CustSalesPartnerFunc` entities.
   * @returns A request builder for creating requests to retrieve all `CustSalesPartnerFunc` entities.
   */
  getAll(): GetAllRequestBuilderV2<CustSalesPartnerFunc> {
    return new GetAllRequestBuilderV2(CustSalesPartnerFunc);
  }

  /**
   * Returns a request builder for creating a `CustSalesPartnerFunc` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustSalesPartnerFunc`.
   */
  create(entity: CustSalesPartnerFunc): CreateRequestBuilderV2<CustSalesPartnerFunc> {
    return new CreateRequestBuilderV2(CustSalesPartnerFunc, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `CustSalesPartnerFunc`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustSalesPartnerFunc`.
   */
  update(entity: CustSalesPartnerFunc): UpdateRequestBuilderV2<CustSalesPartnerFunc> {
    return new UpdateRequestBuilderV2(CustSalesPartnerFunc, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CustSalesPartnerFunc`.
   * @param customer Key property. See [[CustSalesPartnerFunc.customer]].
   * @param salesOrganization Key property. See [[CustSalesPartnerFunc.salesOrganization]].
   * @param distributionChannel Key property. See [[CustSalesPartnerFunc.distributionChannel]].
   * @param division Key property. See [[CustSalesPartnerFunc.division]].
   * @param partnerCounter Key property. See [[CustSalesPartnerFunc.partnerCounter]].
   * @param partnerFunction Key property. See [[CustSalesPartnerFunc.partnerFunction]].
   * @returns A request builder for creating requests that delete an entity of type `CustSalesPartnerFunc`.
   */
  delete(customer: string, salesOrganization: string, distributionChannel: string, division: string, partnerCounter: string, partnerFunction: string): DeleteRequestBuilderV2<CustSalesPartnerFunc>;
  /**
   * Returns a request builder for deleting an entity of type `CustSalesPartnerFunc`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustSalesPartnerFunc` by taking the entity as a parameter.
   */
  delete(entity: CustSalesPartnerFunc): DeleteRequestBuilderV2<CustSalesPartnerFunc>;
  delete(customerOrEntity: any, salesOrganization?: string, distributionChannel?: string, division?: string, partnerCounter?: string, partnerFunction?: string): DeleteRequestBuilderV2<CustSalesPartnerFunc> {
    return new DeleteRequestBuilderV2(CustSalesPartnerFunc, customerOrEntity instanceof CustSalesPartnerFunc ? customerOrEntity : {
      Customer: customerOrEntity!,
      SalesOrganization: salesOrganization!,
      DistributionChannel: distributionChannel!,
      Division: division!,
      PartnerCounter: partnerCounter!,
      PartnerFunction: partnerFunction!
    });
  }
}
