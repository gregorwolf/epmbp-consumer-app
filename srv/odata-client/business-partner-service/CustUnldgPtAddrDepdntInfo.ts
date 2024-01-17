/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CustUnldgPtAddrDepdntInfoRequestBuilder } from './CustUnldgPtAddrDepdntInfoRequestBuilder';
import { AllFields, Constructable, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field, FieldBuilder, OrderableEdmTypeField, Time } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "A_CustUnldgPtAddrDepdntInfo" of service "API_BUSINESS_PARTNER".
 */
export class CustUnldgPtAddrDepdntInfo extends EntityV2 implements CustUnldgPtAddrDepdntInfoType {
  /**
   * Technical entity name for CustUnldgPtAddrDepdntInfo.
   */
  static _entityName = 'A_CustUnldgPtAddrDepdntInfo';
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
   * Unloading Point.
   * Maximum length: 25.
   */
  unloadingPointName!: string;
  /**
   * Customer's factory calendar.
   * Maximum length: 2.
   * @nullable
   */
  customerFactoryCalenderCode?: string;
  /**
   * Goods receiving hours ID (default value).
   * Maximum length: 3.
   * @nullable
   */
  bpGoodsReceivingHoursCode?: string;
  /**
   * Default unloading point.
   * @nullable
   */
  isDfltBpUnloadingPoint?: boolean;
  /**
   * Goods receipt times: Monday morning from ...
   * @nullable
   */
  mondayMorningOpeningTime?: Time;
  /**
   * Goods receiving hours: Monday morning until ...
   * @nullable
   */
  mondayMorningClosingTime?: Time;
  /**
   * Goods receiving hours: Monday afternoon from ...
   * @nullable
   */
  mondayAfternoonOpeningTime?: Time;
  /**
   * Goods receiving hours: Monday afternoon until ...
   * @nullable
   */
  mondayAfternoonClosingTime?: Time;
  /**
   * Goods receiving hours: Tuesday morning from...
   * @nullable
   */
  tuesdayMorningOpeningTime?: Time;
  /**
   * Goods receipt times: Tuesday morning until ...
   * @nullable
   */
  tuesdayMorningClosingTime?: Time;
  /**
   * Goods receiving hours: Tuesday afternoon from ...
   * @nullable
   */
  tuesdayAfternoonOpeningTime?: Time;
  /**
   * Goods receiving hours: Tuesday afternoon until ...
   * @nullable
   */
  tuesdayAfternoonClosingTime?: Time;
  /**
   * Goods receiving hours: Wednesday morning from ...
   * @nullable
   */
  wednesdayMorningOpeningTime?: Time;
  /**
   * Goods receiving hours: Wednesday morning until ...
   * @nullable
   */
  wednesdayMorningClosingTime?: Time;
  /**
   * Goods receiving hours: Wednesday afternoon from ...
   * @nullable
   */
  wednesdayAfternoonOpeningTime?: Time;
  /**
   * Goods receiving hours: Wednesday afternoon until ...
   * @nullable
   */
  wednesdayAfternoonClosingTime?: Time;
  /**
   * Goods receiving hours: Thursday morning from ...
   * @nullable
   */
  thursdayMorningOpeningTime?: Time;
  /**
   * Goods receiving hours: Thursday morning until ...
   * @nullable
   */
  thursdayMorningClosingTime?: Time;
  /**
   * Goods receiving hours: Thursday afternoon from ...
   * @nullable
   */
  thursdayAfternoonOpeningTime?: Time;
  /**
   * Goods receiving hours: Thursday afternoon until...
   * @nullable
   */
  thursdayAfternoonClosingTime?: Time;
  /**
   * Goods receiving hours: Friday morning from ...
   * @nullable
   */
  fridayMorningOpeningTime?: Time;
  /**
   * Goods receiving hours: Friday morning until ...
   * @nullable
   */
  fridayMorningClosingTime?: Time;
  /**
   * Goods receiving hours: Friday afternoon from ...
   * @nullable
   */
  fridayAfternoonOpeningTime?: Time;
  /**
   * Goods receiving hours: Friday afternoon until ...
   * @nullable
   */
  fridayAfternoonClosingTime?: Time;
  /**
   * Goods receiving hours: Saturday morning from ...
   * @nullable
   */
  saturdayMorningOpeningTime?: Time;
  /**
   * Goods receiving hours: Saturday morning from ...
   * @nullable
   */
  saturdayMorningClosingTime?: Time;
  /**
   * Goods receiving hours: Saturday afternoon from ...
   * @nullable
   */
  saturdayAfternoonOpeningTime?: Time;
  /**
   * Goods receiving hours: Saturday afternoon until ...
   * @nullable
   */
  saturdayAfternoonClosingTime?: Time;
  /**
   * Goods receiving hours: Sunday morning from ...
   * @nullable
   */
  sundayMorningOpeningTime?: Time;
  /**
   * Goods receiving hours: Sunday morning until ...
   * @nullable
   */
  sundayMorningClosingTime?: Time;
  /**
   * Goods receiving hours: Sunday afternoon from ...
   * @nullable
   */
  sundayAfternoonOpeningTime?: Time;
  /**
   * Goods receiving hours: Sunday afternoon until ...
   * @nullable
   */
  sundayAfternoonClosingTime?: Time;

  /**
   * Returns an entity builder to construct instances of `CustUnldgPtAddrDepdntInfo`.
   * @returns A builder that constructs instances of entity type `CustUnldgPtAddrDepdntInfo`.
   */
  static builder(): EntityBuilderType<CustUnldgPtAddrDepdntInfo, CustUnldgPtAddrDepdntInfoType> {
    return EntityV2.entityBuilder(CustUnldgPtAddrDepdntInfo);
  }

  /**
   * Returns a request builder to construct requests for operations on the `CustUnldgPtAddrDepdntInfo` entity type.
   * @returns A `CustUnldgPtAddrDepdntInfo` request builder.
   */
  static requestBuilder(): CustUnldgPtAddrDepdntInfoRequestBuilder {
    return new CustUnldgPtAddrDepdntInfoRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `CustUnldgPtAddrDepdntInfo`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `CustUnldgPtAddrDepdntInfo`.
   */
  static customField(fieldName: string): CustomFieldV2<CustUnldgPtAddrDepdntInfo> {
    return EntityV2.customFieldSelector(fieldName, CustUnldgPtAddrDepdntInfo);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface CustUnldgPtAddrDepdntInfoType {
  customer: string;
  addressId: string;
  unloadingPointName: string;
  customerFactoryCalenderCode?: string | null;
  bpGoodsReceivingHoursCode?: string | null;
  isDfltBpUnloadingPoint?: boolean | null;
  mondayMorningOpeningTime?: Time | null;
  mondayMorningClosingTime?: Time | null;
  mondayAfternoonOpeningTime?: Time | null;
  mondayAfternoonClosingTime?: Time | null;
  tuesdayMorningOpeningTime?: Time | null;
  tuesdayMorningClosingTime?: Time | null;
  tuesdayAfternoonOpeningTime?: Time | null;
  tuesdayAfternoonClosingTime?: Time | null;
  wednesdayMorningOpeningTime?: Time | null;
  wednesdayMorningClosingTime?: Time | null;
  wednesdayAfternoonOpeningTime?: Time | null;
  wednesdayAfternoonClosingTime?: Time | null;
  thursdayMorningOpeningTime?: Time | null;
  thursdayMorningClosingTime?: Time | null;
  thursdayAfternoonOpeningTime?: Time | null;
  thursdayAfternoonClosingTime?: Time | null;
  fridayMorningOpeningTime?: Time | null;
  fridayMorningClosingTime?: Time | null;
  fridayAfternoonOpeningTime?: Time | null;
  fridayAfternoonClosingTime?: Time | null;
  saturdayMorningOpeningTime?: Time | null;
  saturdayMorningClosingTime?: Time | null;
  saturdayAfternoonOpeningTime?: Time | null;
  saturdayAfternoonClosingTime?: Time | null;
  sundayMorningOpeningTime?: Time | null;
  sundayMorningClosingTime?: Time | null;
  sundayAfternoonOpeningTime?: Time | null;
  sundayAfternoonClosingTime?: Time | null;
}

export namespace CustUnldgPtAddrDepdntInfo {
  const _fieldBuilder: FieldBuilder<Constructable<CustUnldgPtAddrDepdntInfo>> = new FieldBuilder(CustUnldgPtAddrDepdntInfo);
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
   * Static representation of the [[unloadingPointName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UNLOADING_POINT_NAME = _fieldBuilder.buildEdmTypeField('UnloadingPointName', 'Edm.String', false);
  /**
   * Static representation of the [[customerFactoryCalenderCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER_FACTORY_CALENDER_CODE = _fieldBuilder.buildEdmTypeField('CustomerFactoryCalenderCode', 'Edm.String', true);
  /**
   * Static representation of the [[bpGoodsReceivingHoursCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_GOODS_RECEIVING_HOURS_CODE = _fieldBuilder.buildEdmTypeField('BPGoodsReceivingHoursCode', 'Edm.String', true);
  /**
   * Static representation of the [[isDfltBpUnloadingPoint]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_DFLT_BP_UNLOADING_POINT = _fieldBuilder.buildEdmTypeField('IsDfltBPUnloadingPoint', 'Edm.Boolean', true);
  /**
   * Static representation of the [[mondayMorningOpeningTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MONDAY_MORNING_OPENING_TIME = _fieldBuilder.buildEdmTypeField('MondayMorningOpeningTime', 'Edm.Time', true);
  /**
   * Static representation of the [[mondayMorningClosingTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MONDAY_MORNING_CLOSING_TIME = _fieldBuilder.buildEdmTypeField('MondayMorningClosingTime', 'Edm.Time', true);
  /**
   * Static representation of the [[mondayAfternoonOpeningTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MONDAY_AFTERNOON_OPENING_TIME = _fieldBuilder.buildEdmTypeField('MondayAfternoonOpeningTime', 'Edm.Time', true);
  /**
   * Static representation of the [[mondayAfternoonClosingTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MONDAY_AFTERNOON_CLOSING_TIME = _fieldBuilder.buildEdmTypeField('MondayAfternoonClosingTime', 'Edm.Time', true);
  /**
   * Static representation of the [[tuesdayMorningOpeningTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TUESDAY_MORNING_OPENING_TIME = _fieldBuilder.buildEdmTypeField('TuesdayMorningOpeningTime', 'Edm.Time', true);
  /**
   * Static representation of the [[tuesdayMorningClosingTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TUESDAY_MORNING_CLOSING_TIME = _fieldBuilder.buildEdmTypeField('TuesdayMorningClosingTime', 'Edm.Time', true);
  /**
   * Static representation of the [[tuesdayAfternoonOpeningTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TUESDAY_AFTERNOON_OPENING_TIME = _fieldBuilder.buildEdmTypeField('TuesdayAfternoonOpeningTime', 'Edm.Time', true);
  /**
   * Static representation of the [[tuesdayAfternoonClosingTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TUESDAY_AFTERNOON_CLOSING_TIME = _fieldBuilder.buildEdmTypeField('TuesdayAfternoonClosingTime', 'Edm.Time', true);
  /**
   * Static representation of the [[wednesdayMorningOpeningTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WEDNESDAY_MORNING_OPENING_TIME = _fieldBuilder.buildEdmTypeField('WednesdayMorningOpeningTime', 'Edm.Time', true);
  /**
   * Static representation of the [[wednesdayMorningClosingTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WEDNESDAY_MORNING_CLOSING_TIME = _fieldBuilder.buildEdmTypeField('WednesdayMorningClosingTime', 'Edm.Time', true);
  /**
   * Static representation of the [[wednesdayAfternoonOpeningTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WEDNESDAY_AFTERNOON_OPENING_TIME = _fieldBuilder.buildEdmTypeField('WednesdayAfternoonOpeningTime', 'Edm.Time', true);
  /**
   * Static representation of the [[wednesdayAfternoonClosingTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WEDNESDAY_AFTERNOON_CLOSING_TIME = _fieldBuilder.buildEdmTypeField('WednesdayAfternoonClosingTime', 'Edm.Time', true);
  /**
   * Static representation of the [[thursdayMorningOpeningTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const THURSDAY_MORNING_OPENING_TIME = _fieldBuilder.buildEdmTypeField('ThursdayMorningOpeningTime', 'Edm.Time', true);
  /**
   * Static representation of the [[thursdayMorningClosingTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const THURSDAY_MORNING_CLOSING_TIME = _fieldBuilder.buildEdmTypeField('ThursdayMorningClosingTime', 'Edm.Time', true);
  /**
   * Static representation of the [[thursdayAfternoonOpeningTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const THURSDAY_AFTERNOON_OPENING_TIME = _fieldBuilder.buildEdmTypeField('ThursdayAfternoonOpeningTime', 'Edm.Time', true);
  /**
   * Static representation of the [[thursdayAfternoonClosingTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const THURSDAY_AFTERNOON_CLOSING_TIME = _fieldBuilder.buildEdmTypeField('ThursdayAfternoonClosingTime', 'Edm.Time', true);
  /**
   * Static representation of the [[fridayMorningOpeningTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FRIDAY_MORNING_OPENING_TIME = _fieldBuilder.buildEdmTypeField('FridayMorningOpeningTime', 'Edm.Time', true);
  /**
   * Static representation of the [[fridayMorningClosingTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FRIDAY_MORNING_CLOSING_TIME = _fieldBuilder.buildEdmTypeField('FridayMorningClosingTime', 'Edm.Time', true);
  /**
   * Static representation of the [[fridayAfternoonOpeningTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FRIDAY_AFTERNOON_OPENING_TIME = _fieldBuilder.buildEdmTypeField('FridayAfternoonOpeningTime', 'Edm.Time', true);
  /**
   * Static representation of the [[fridayAfternoonClosingTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FRIDAY_AFTERNOON_CLOSING_TIME = _fieldBuilder.buildEdmTypeField('FridayAfternoonClosingTime', 'Edm.Time', true);
  /**
   * Static representation of the [[saturdayMorningOpeningTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SATURDAY_MORNING_OPENING_TIME = _fieldBuilder.buildEdmTypeField('SaturdayMorningOpeningTime', 'Edm.Time', true);
  /**
   * Static representation of the [[saturdayMorningClosingTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SATURDAY_MORNING_CLOSING_TIME = _fieldBuilder.buildEdmTypeField('SaturdayMorningClosingTime', 'Edm.Time', true);
  /**
   * Static representation of the [[saturdayAfternoonOpeningTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SATURDAY_AFTERNOON_OPENING_TIME = _fieldBuilder.buildEdmTypeField('SaturdayAfternoonOpeningTime', 'Edm.Time', true);
  /**
   * Static representation of the [[saturdayAfternoonClosingTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SATURDAY_AFTERNOON_CLOSING_TIME = _fieldBuilder.buildEdmTypeField('SaturdayAfternoonClosingTime', 'Edm.Time', true);
  /**
   * Static representation of the [[sundayMorningOpeningTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUNDAY_MORNING_OPENING_TIME = _fieldBuilder.buildEdmTypeField('SundayMorningOpeningTime', 'Edm.Time', true);
  /**
   * Static representation of the [[sundayMorningClosingTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUNDAY_MORNING_CLOSING_TIME = _fieldBuilder.buildEdmTypeField('SundayMorningClosingTime', 'Edm.Time', true);
  /**
   * Static representation of the [[sundayAfternoonOpeningTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUNDAY_AFTERNOON_OPENING_TIME = _fieldBuilder.buildEdmTypeField('SundayAfternoonOpeningTime', 'Edm.Time', true);
  /**
   * Static representation of the [[sundayAfternoonClosingTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUNDAY_AFTERNOON_CLOSING_TIME = _fieldBuilder.buildEdmTypeField('SundayAfternoonClosingTime', 'Edm.Time', true);
  /**
   * All fields of the CustUnldgPtAddrDepdntInfo entity.
   */
  export const _allFields: Array<EdmTypeField<CustUnldgPtAddrDepdntInfo, 'Edm.String', false, true> | EdmTypeField<CustUnldgPtAddrDepdntInfo, 'Edm.String', true, true> | EdmTypeField<CustUnldgPtAddrDepdntInfo, 'Edm.Boolean', true, true> | OrderableEdmTypeField<CustUnldgPtAddrDepdntInfo, 'Edm.Time', true, true>> = [
    CustUnldgPtAddrDepdntInfo.CUSTOMER,
    CustUnldgPtAddrDepdntInfo.ADDRESS_ID,
    CustUnldgPtAddrDepdntInfo.UNLOADING_POINT_NAME,
    CustUnldgPtAddrDepdntInfo.CUSTOMER_FACTORY_CALENDER_CODE,
    CustUnldgPtAddrDepdntInfo.BP_GOODS_RECEIVING_HOURS_CODE,
    CustUnldgPtAddrDepdntInfo.IS_DFLT_BP_UNLOADING_POINT,
    CustUnldgPtAddrDepdntInfo.MONDAY_MORNING_OPENING_TIME,
    CustUnldgPtAddrDepdntInfo.MONDAY_MORNING_CLOSING_TIME,
    CustUnldgPtAddrDepdntInfo.MONDAY_AFTERNOON_OPENING_TIME,
    CustUnldgPtAddrDepdntInfo.MONDAY_AFTERNOON_CLOSING_TIME,
    CustUnldgPtAddrDepdntInfo.TUESDAY_MORNING_OPENING_TIME,
    CustUnldgPtAddrDepdntInfo.TUESDAY_MORNING_CLOSING_TIME,
    CustUnldgPtAddrDepdntInfo.TUESDAY_AFTERNOON_OPENING_TIME,
    CustUnldgPtAddrDepdntInfo.TUESDAY_AFTERNOON_CLOSING_TIME,
    CustUnldgPtAddrDepdntInfo.WEDNESDAY_MORNING_OPENING_TIME,
    CustUnldgPtAddrDepdntInfo.WEDNESDAY_MORNING_CLOSING_TIME,
    CustUnldgPtAddrDepdntInfo.WEDNESDAY_AFTERNOON_OPENING_TIME,
    CustUnldgPtAddrDepdntInfo.WEDNESDAY_AFTERNOON_CLOSING_TIME,
    CustUnldgPtAddrDepdntInfo.THURSDAY_MORNING_OPENING_TIME,
    CustUnldgPtAddrDepdntInfo.THURSDAY_MORNING_CLOSING_TIME,
    CustUnldgPtAddrDepdntInfo.THURSDAY_AFTERNOON_OPENING_TIME,
    CustUnldgPtAddrDepdntInfo.THURSDAY_AFTERNOON_CLOSING_TIME,
    CustUnldgPtAddrDepdntInfo.FRIDAY_MORNING_OPENING_TIME,
    CustUnldgPtAddrDepdntInfo.FRIDAY_MORNING_CLOSING_TIME,
    CustUnldgPtAddrDepdntInfo.FRIDAY_AFTERNOON_OPENING_TIME,
    CustUnldgPtAddrDepdntInfo.FRIDAY_AFTERNOON_CLOSING_TIME,
    CustUnldgPtAddrDepdntInfo.SATURDAY_MORNING_OPENING_TIME,
    CustUnldgPtAddrDepdntInfo.SATURDAY_MORNING_CLOSING_TIME,
    CustUnldgPtAddrDepdntInfo.SATURDAY_AFTERNOON_OPENING_TIME,
    CustUnldgPtAddrDepdntInfo.SATURDAY_AFTERNOON_CLOSING_TIME,
    CustUnldgPtAddrDepdntInfo.SUNDAY_MORNING_OPENING_TIME,
    CustUnldgPtAddrDepdntInfo.SUNDAY_MORNING_CLOSING_TIME,
    CustUnldgPtAddrDepdntInfo.SUNDAY_AFTERNOON_OPENING_TIME,
    CustUnldgPtAddrDepdntInfo.SUNDAY_AFTERNOON_CLOSING_TIME
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<CustUnldgPtAddrDepdntInfo> = new AllFields('*', CustUnldgPtAddrDepdntInfo);
  /**
   * All key fields of the CustUnldgPtAddrDepdntInfo entity.
   */
  export const _keyFields: Array<Field<CustUnldgPtAddrDepdntInfo, boolean, boolean>> = [CustUnldgPtAddrDepdntInfo.CUSTOMER, CustUnldgPtAddrDepdntInfo.ADDRESS_ID, CustUnldgPtAddrDepdntInfo.UNLOADING_POINT_NAME];
  /**
   * Mapping of all key field names to the respective static field property CustUnldgPtAddrDepdntInfo.
   */
  export const _keys: { [keys: string]: Field<CustUnldgPtAddrDepdntInfo, boolean, boolean> } = CustUnldgPtAddrDepdntInfo._keyFields.reduce((acc: { [keys: string]: Field<CustUnldgPtAddrDepdntInfo, boolean, boolean> }, field: Field<CustUnldgPtAddrDepdntInfo, boolean, boolean>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
