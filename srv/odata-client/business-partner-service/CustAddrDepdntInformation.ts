/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CustAddrDepdntInformationRequestBuilder } from './CustAddrDepdntInformationRequestBuilder';
import { AllFields, Constructable, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field, FieldBuilder } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "A_CustAddrDepdntInformation" of service "API_BUSINESS_PARTNER".
 */
export class CustAddrDepdntInformation extends EntityV2 implements CustAddrDepdntInformationType {
  /**
   * Technical entity name for CustAddrDepdntInformation.
   */
  static _entityName = 'A_CustAddrDepdntInformation';
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
   * Business Partner Address Number (from BUT020).
   * Maximum length: 10.
   */
  addressId!: string;
  /**
   * Express train station.
   * Maximum length: 25.
   * @nullable
   */
  expressTrainStationName?: string;
  /**
   * Train station.
   * Maximum length: 25.
   * @nullable
   */
  trainStationName?: string;
  /**
   * City Code.
   * Maximum length: 4.
   * @nullable
   */
  cityCode?: string;
  /**
   * County Code.
   * Maximum length: 3.
   * @nullable
   */
  county?: string;

  /**
   * Returns an entity builder to construct instances of `CustAddrDepdntInformation`.
   * @returns A builder that constructs instances of entity type `CustAddrDepdntInformation`.
   */
  static builder(): EntityBuilderType<CustAddrDepdntInformation, CustAddrDepdntInformationType> {
    return EntityV2.entityBuilder(CustAddrDepdntInformation);
  }

  /**
   * Returns a request builder to construct requests for operations on the `CustAddrDepdntInformation` entity type.
   * @returns A `CustAddrDepdntInformation` request builder.
   */
  static requestBuilder(): CustAddrDepdntInformationRequestBuilder {
    return new CustAddrDepdntInformationRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `CustAddrDepdntInformation`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `CustAddrDepdntInformation`.
   */
  static customField(fieldName: string): CustomFieldV2<CustAddrDepdntInformation> {
    return EntityV2.customFieldSelector(fieldName, CustAddrDepdntInformation);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface CustAddrDepdntInformationType {
  customer: string;
  addressId: string;
  expressTrainStationName?: string | null;
  trainStationName?: string | null;
  cityCode?: string | null;
  county?: string | null;
}

export namespace CustAddrDepdntInformation {
  const _fieldBuilder: FieldBuilder<Constructable<CustAddrDepdntInformation>> = new FieldBuilder(CustAddrDepdntInformation);
  /**
   * Static representation of the [[customer]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER = _fieldBuilder.buildEdmTypeField('Customer', 'Edm.String', false);
  /**
   * Static representation of the [[addressId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_ID = _fieldBuilder.buildEdmTypeField('AddressID', 'Edm.String', false);
  /**
   * Static representation of the [[expressTrainStationName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXPRESS_TRAIN_STATION_NAME = _fieldBuilder.buildEdmTypeField('ExpressTrainStationName', 'Edm.String', true);
  /**
   * Static representation of the [[trainStationName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TRAIN_STATION_NAME = _fieldBuilder.buildEdmTypeField('TrainStationName', 'Edm.String', true);
  /**
   * Static representation of the [[cityCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CITY_CODE = _fieldBuilder.buildEdmTypeField('CityCode', 'Edm.String', true);
  /**
   * Static representation of the [[county]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTY = _fieldBuilder.buildEdmTypeField('County', 'Edm.String', true);
  /**
   * All fields of the CustAddrDepdntInformation entity.
   */
  export const _allFields: Array<EdmTypeField<CustAddrDepdntInformation, 'Edm.String', false, true> | EdmTypeField<CustAddrDepdntInformation, 'Edm.String', true, true>> = [
    CustAddrDepdntInformation.CUSTOMER,
    CustAddrDepdntInformation.ADDRESS_ID,
    CustAddrDepdntInformation.EXPRESS_TRAIN_STATION_NAME,
    CustAddrDepdntInformation.TRAIN_STATION_NAME,
    CustAddrDepdntInformation.CITY_CODE,
    CustAddrDepdntInformation.COUNTY
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<CustAddrDepdntInformation> = new AllFields('*', CustAddrDepdntInformation);
  /**
   * All key fields of the CustAddrDepdntInformation entity.
   */
  export const _keyFields: Array<Field<CustAddrDepdntInformation, boolean, boolean>> = [CustAddrDepdntInformation.CUSTOMER, CustAddrDepdntInformation.ADDRESS_ID];
  /**
   * Mapping of all key field names to the respective static field property CustAddrDepdntInformation.
   */
  export const _keys: { [keys: string]: Field<CustAddrDepdntInformation, boolean, boolean> } = CustAddrDepdntInformation._keyFields.reduce((acc: { [keys: string]: Field<CustAddrDepdntInformation, boolean, boolean> }, field: Field<CustAddrDepdntInformation, boolean, boolean>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
