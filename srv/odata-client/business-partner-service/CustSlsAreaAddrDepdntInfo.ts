/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CustSlsAreaAddrDepdntInfoRequestBuilder } from './CustSlsAreaAddrDepdntInfoRequestBuilder';
import { AllFields, Constructable, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field, FieldBuilder } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "A_CustSlsAreaAddrDepdntInfo" of service "API_BUSINESS_PARTNER".
 */
export class CustSlsAreaAddrDepdntInfo extends EntityV2 implements CustSlsAreaAddrDepdntInfoType {
  /**
   * Technical entity name for CustSlsAreaAddrDepdntInfo.
   */
  static _entityName = 'A_CustSlsAreaAddrDepdntInfo';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
  /**
   * Customer Number.
   * Maximum length: 10.
   */
  customer!: string;
  /**
   * Sales Organization.
   * Maximum length: 4.
   */
  salesOrganization!: string;
  /**
   * Distribution Channel.
   * Maximum length: 2.
   */
  distributionChannel!: string;
  /**
   * Division.
   * Maximum length: 2.
   */
  division!: string;
  /**
   * Business Partner Address Number (from BUT020).
   * Maximum length: 10.
   */
  addressId!: string;
  /**
   * Incoterms (Part 1).
   * Maximum length: 3.
   * @nullable
   */
  incotermsClassification?: string;
  /**
   * Incoterms Location 1.
   * Maximum length: 70.
   * @nullable
   */
  incotermsLocation1?: string;
  /**
   * Incoterms Location 2.
   * Maximum length: 70.
   * @nullable
   */
  incotermsLocation2?: string;
  /**
   * Location UUID.
   * @nullable
   */
  incotermsSupChnLoc1AddlUuid?: string;
  /**
   * Location UUID.
   * @nullable
   */
  incotermsSupChnLoc2AddlUuid?: string;
  /**
   * Location UUID.
   * @nullable
   */
  incotermsSupChnDvtgLocAddlUuid?: string;
  /**
   * Customer delivery block (sales area).
   * Maximum length: 2.
   * @nullable
   */
  deliveryIsBlocked?: string;
  /**
   * Sales Office.
   * Maximum length: 4.
   * @nullable
   */
  salesOffice?: string;
  /**
   * Sales Group.
   * Maximum length: 3.
   * @nullable
   */
  salesGroup?: string;
  /**
   * Shipping Conditions.
   * Maximum length: 2.
   * @nullable
   */
  shippingCondition?: string;
  /**
   * Delivering Plant (Own or External).
   * Maximum length: 4.
   * @nullable
   */
  supplyingPlant?: string;
  /**
   * Incoterms Version.
   * Maximum length: 4.
   * @nullable
   */
  incotermsVersion?: string;

  /**
   * Returns an entity builder to construct instances of `CustSlsAreaAddrDepdntInfo`.
   * @returns A builder that constructs instances of entity type `CustSlsAreaAddrDepdntInfo`.
   */
  static builder(): EntityBuilderType<CustSlsAreaAddrDepdntInfo, CustSlsAreaAddrDepdntInfoType> {
    return EntityV2.entityBuilder(CustSlsAreaAddrDepdntInfo);
  }

  /**
   * Returns a request builder to construct requests for operations on the `CustSlsAreaAddrDepdntInfo` entity type.
   * @returns A `CustSlsAreaAddrDepdntInfo` request builder.
   */
  static requestBuilder(): CustSlsAreaAddrDepdntInfoRequestBuilder {
    return new CustSlsAreaAddrDepdntInfoRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `CustSlsAreaAddrDepdntInfo`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `CustSlsAreaAddrDepdntInfo`.
   */
  static customField(fieldName: string): CustomFieldV2<CustSlsAreaAddrDepdntInfo> {
    return EntityV2.customFieldSelector(fieldName, CustSlsAreaAddrDepdntInfo);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface CustSlsAreaAddrDepdntInfoType {
  customer: string;
  salesOrganization: string;
  distributionChannel: string;
  division: string;
  addressId: string;
  incotermsClassification?: string | null;
  incotermsLocation1?: string | null;
  incotermsLocation2?: string | null;
  incotermsSupChnLoc1AddlUuid?: string | null;
  incotermsSupChnLoc2AddlUuid?: string | null;
  incotermsSupChnDvtgLocAddlUuid?: string | null;
  deliveryIsBlocked?: string | null;
  salesOffice?: string | null;
  salesGroup?: string | null;
  shippingCondition?: string | null;
  supplyingPlant?: string | null;
  incotermsVersion?: string | null;
}

export namespace CustSlsAreaAddrDepdntInfo {
  const _fieldBuilder: FieldBuilder<Constructable<CustSlsAreaAddrDepdntInfo>> = new FieldBuilder(CustSlsAreaAddrDepdntInfo);
  /**
   * Static representation of the [[customer]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER = _fieldBuilder.buildEdmTypeField('Customer', 'Edm.String', false);
  /**
   * Static representation of the [[salesOrganization]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_ORGANIZATION = _fieldBuilder.buildEdmTypeField('SalesOrganization', 'Edm.String', false);
  /**
   * Static representation of the [[distributionChannel]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DISTRIBUTION_CHANNEL = _fieldBuilder.buildEdmTypeField('DistributionChannel', 'Edm.String', false);
  /**
   * Static representation of the [[division]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DIVISION = _fieldBuilder.buildEdmTypeField('Division', 'Edm.String', false);
  /**
   * Static representation of the [[addressId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_ID = _fieldBuilder.buildEdmTypeField('AddressID', 'Edm.String', false);
  /**
   * Static representation of the [[incotermsClassification]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INCOTERMS_CLASSIFICATION = _fieldBuilder.buildEdmTypeField('IncotermsClassification', 'Edm.String', true);
  /**
   * Static representation of the [[incotermsLocation1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INCOTERMS_LOCATION_1 = _fieldBuilder.buildEdmTypeField('IncotermsLocation1', 'Edm.String', true);
  /**
   * Static representation of the [[incotermsLocation2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INCOTERMS_LOCATION_2 = _fieldBuilder.buildEdmTypeField('IncotermsLocation2', 'Edm.String', true);
  /**
   * Static representation of the [[incotermsSupChnLoc1AddlUuid]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INCOTERMS_SUP_CHN_LOC_1_ADDL_UUID = _fieldBuilder.buildEdmTypeField('IncotermsSupChnLoc1AddlUUID', 'Edm.Guid', true);
  /**
   * Static representation of the [[incotermsSupChnLoc2AddlUuid]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INCOTERMS_SUP_CHN_LOC_2_ADDL_UUID = _fieldBuilder.buildEdmTypeField('IncotermsSupChnLoc2AddlUUID', 'Edm.Guid', true);
  /**
   * Static representation of the [[incotermsSupChnDvtgLocAddlUuid]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INCOTERMS_SUP_CHN_DVTG_LOC_ADDL_UUID = _fieldBuilder.buildEdmTypeField('IncotermsSupChnDvtgLocAddlUUID', 'Edm.Guid', true);
  /**
   * Static representation of the [[deliveryIsBlocked]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DELIVERY_IS_BLOCKED = _fieldBuilder.buildEdmTypeField('DeliveryIsBlocked', 'Edm.String', true);
  /**
   * Static representation of the [[salesOffice]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_OFFICE = _fieldBuilder.buildEdmTypeField('SalesOffice', 'Edm.String', true);
  /**
   * Static representation of the [[salesGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_GROUP = _fieldBuilder.buildEdmTypeField('SalesGroup', 'Edm.String', true);
  /**
   * Static representation of the [[shippingCondition]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SHIPPING_CONDITION = _fieldBuilder.buildEdmTypeField('ShippingCondition', 'Edm.String', true);
  /**
   * Static representation of the [[supplyingPlant]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPPLYING_PLANT = _fieldBuilder.buildEdmTypeField('SupplyingPlant', 'Edm.String', true);
  /**
   * Static representation of the [[incotermsVersion]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INCOTERMS_VERSION = _fieldBuilder.buildEdmTypeField('IncotermsVersion', 'Edm.String', true);
  /**
   * All fields of the CustSlsAreaAddrDepdntInfo entity.
   */
  export const _allFields: Array<EdmTypeField<CustSlsAreaAddrDepdntInfo, 'Edm.String', false, true> | EdmTypeField<CustSlsAreaAddrDepdntInfo, 'Edm.String', true, true> | EdmTypeField<CustSlsAreaAddrDepdntInfo, 'Edm.Guid', true, true>> = [
    CustSlsAreaAddrDepdntInfo.CUSTOMER,
    CustSlsAreaAddrDepdntInfo.SALES_ORGANIZATION,
    CustSlsAreaAddrDepdntInfo.DISTRIBUTION_CHANNEL,
    CustSlsAreaAddrDepdntInfo.DIVISION,
    CustSlsAreaAddrDepdntInfo.ADDRESS_ID,
    CustSlsAreaAddrDepdntInfo.INCOTERMS_CLASSIFICATION,
    CustSlsAreaAddrDepdntInfo.INCOTERMS_LOCATION_1,
    CustSlsAreaAddrDepdntInfo.INCOTERMS_LOCATION_2,
    CustSlsAreaAddrDepdntInfo.INCOTERMS_SUP_CHN_LOC_1_ADDL_UUID,
    CustSlsAreaAddrDepdntInfo.INCOTERMS_SUP_CHN_LOC_2_ADDL_UUID,
    CustSlsAreaAddrDepdntInfo.INCOTERMS_SUP_CHN_DVTG_LOC_ADDL_UUID,
    CustSlsAreaAddrDepdntInfo.DELIVERY_IS_BLOCKED,
    CustSlsAreaAddrDepdntInfo.SALES_OFFICE,
    CustSlsAreaAddrDepdntInfo.SALES_GROUP,
    CustSlsAreaAddrDepdntInfo.SHIPPING_CONDITION,
    CustSlsAreaAddrDepdntInfo.SUPPLYING_PLANT,
    CustSlsAreaAddrDepdntInfo.INCOTERMS_VERSION
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<CustSlsAreaAddrDepdntInfo> = new AllFields('*', CustSlsAreaAddrDepdntInfo);
  /**
   * All key fields of the CustSlsAreaAddrDepdntInfo entity.
   */
  export const _keyFields: Array<Field<CustSlsAreaAddrDepdntInfo, boolean, boolean>> = [CustSlsAreaAddrDepdntInfo.CUSTOMER, CustSlsAreaAddrDepdntInfo.SALES_ORGANIZATION, CustSlsAreaAddrDepdntInfo.DISTRIBUTION_CHANNEL, CustSlsAreaAddrDepdntInfo.DIVISION, CustSlsAreaAddrDepdntInfo.ADDRESS_ID];
  /**
   * Mapping of all key field names to the respective static field property CustSlsAreaAddrDepdntInfo.
   */
  export const _keys: { [keys: string]: Field<CustSlsAreaAddrDepdntInfo, boolean, boolean> } = CustSlsAreaAddrDepdntInfo._keyFields.reduce((acc: { [keys: string]: Field<CustSlsAreaAddrDepdntInfo, boolean, boolean> }, field: Field<CustSlsAreaAddrDepdntInfo, boolean, boolean>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
