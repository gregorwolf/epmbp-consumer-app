/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CustomerUnloadingPointRequestBuilder } from './CustomerUnloadingPointRequestBuilder';
import { AllFields, Constructable, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field, FieldBuilder, OrderableEdmTypeField, Time } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "A_CustomerUnloadingPoint" of service "API_BUSINESS_PARTNER".
 */
export class CustomerUnloadingPoint extends EntityV2 implements CustomerUnloadingPointType {
  /**
   * Technical entity name for CustomerUnloadingPoint.
   */
  static _entityName = 'A_CustomerUnloadingPoint';
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
   * Returns an entity builder to construct instances of `CustomerUnloadingPoint`.
   * @returns A builder that constructs instances of entity type `CustomerUnloadingPoint`.
   */
  static builder(): EntityBuilderType<CustomerUnloadingPoint, CustomerUnloadingPointType> {
    return EntityV2.entityBuilder(CustomerUnloadingPoint);
  }

  /**
   * Returns a request builder to construct requests for operations on the `CustomerUnloadingPoint` entity type.
   * @returns A `CustomerUnloadingPoint` request builder.
   */
  static requestBuilder(): CustomerUnloadingPointRequestBuilder {
    return new CustomerUnloadingPointRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `CustomerUnloadingPoint`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `CustomerUnloadingPoint`.
   */
  static customField(fieldName: string): CustomFieldV2<CustomerUnloadingPoint> {
    return EntityV2.customFieldSelector(fieldName, CustomerUnloadingPoint);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface CustomerUnloadingPointType {
  customer: string;
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

export namespace CustomerUnloadingPoint {
  const _fieldBuilder: FieldBuilder<Constructable<CustomerUnloadingPoint>> = new FieldBuilder(CustomerUnloadingPoint);
  /**
   * Static representation of the [[customer]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER = _fieldBuilder.buildEdmTypeField('Customer', 'Edm.String', false);
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
   * All fields of the CustomerUnloadingPoint entity.
   */
  export const _allFields: Array<EdmTypeField<CustomerUnloadingPoint, 'Edm.String', false, true> | EdmTypeField<CustomerUnloadingPoint, 'Edm.String', true, true> | EdmTypeField<CustomerUnloadingPoint, 'Edm.Boolean', true, true> | OrderableEdmTypeField<CustomerUnloadingPoint, 'Edm.Time', true, true>> = [
    CustomerUnloadingPoint.CUSTOMER,
    CustomerUnloadingPoint.UNLOADING_POINT_NAME,
    CustomerUnloadingPoint.CUSTOMER_FACTORY_CALENDER_CODE,
    CustomerUnloadingPoint.BP_GOODS_RECEIVING_HOURS_CODE,
    CustomerUnloadingPoint.IS_DFLT_BP_UNLOADING_POINT,
    CustomerUnloadingPoint.MONDAY_MORNING_OPENING_TIME,
    CustomerUnloadingPoint.MONDAY_MORNING_CLOSING_TIME,
    CustomerUnloadingPoint.MONDAY_AFTERNOON_OPENING_TIME,
    CustomerUnloadingPoint.MONDAY_AFTERNOON_CLOSING_TIME,
    CustomerUnloadingPoint.TUESDAY_MORNING_OPENING_TIME,
    CustomerUnloadingPoint.TUESDAY_MORNING_CLOSING_TIME,
    CustomerUnloadingPoint.TUESDAY_AFTERNOON_OPENING_TIME,
    CustomerUnloadingPoint.TUESDAY_AFTERNOON_CLOSING_TIME,
    CustomerUnloadingPoint.WEDNESDAY_MORNING_OPENING_TIME,
    CustomerUnloadingPoint.WEDNESDAY_MORNING_CLOSING_TIME,
    CustomerUnloadingPoint.WEDNESDAY_AFTERNOON_OPENING_TIME,
    CustomerUnloadingPoint.WEDNESDAY_AFTERNOON_CLOSING_TIME,
    CustomerUnloadingPoint.THURSDAY_MORNING_OPENING_TIME,
    CustomerUnloadingPoint.THURSDAY_MORNING_CLOSING_TIME,
    CustomerUnloadingPoint.THURSDAY_AFTERNOON_OPENING_TIME,
    CustomerUnloadingPoint.THURSDAY_AFTERNOON_CLOSING_TIME,
    CustomerUnloadingPoint.FRIDAY_MORNING_OPENING_TIME,
    CustomerUnloadingPoint.FRIDAY_MORNING_CLOSING_TIME,
    CustomerUnloadingPoint.FRIDAY_AFTERNOON_OPENING_TIME,
    CustomerUnloadingPoint.FRIDAY_AFTERNOON_CLOSING_TIME,
    CustomerUnloadingPoint.SATURDAY_MORNING_OPENING_TIME,
    CustomerUnloadingPoint.SATURDAY_MORNING_CLOSING_TIME,
    CustomerUnloadingPoint.SATURDAY_AFTERNOON_OPENING_TIME,
    CustomerUnloadingPoint.SATURDAY_AFTERNOON_CLOSING_TIME,
    CustomerUnloadingPoint.SUNDAY_MORNING_OPENING_TIME,
    CustomerUnloadingPoint.SUNDAY_MORNING_CLOSING_TIME,
    CustomerUnloadingPoint.SUNDAY_AFTERNOON_OPENING_TIME,
    CustomerUnloadingPoint.SUNDAY_AFTERNOON_CLOSING_TIME
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<CustomerUnloadingPoint> = new AllFields('*', CustomerUnloadingPoint);
  /**
   * All key fields of the CustomerUnloadingPoint entity.
   */
  export const _keyFields: Array<Field<CustomerUnloadingPoint, boolean, boolean>> = [CustomerUnloadingPoint.CUSTOMER, CustomerUnloadingPoint.UNLOADING_POINT_NAME];
  /**
   * Mapping of all key field names to the respective static field property CustomerUnloadingPoint.
   */
  export const _keys: { [keys: string]: Field<CustomerUnloadingPoint, boolean, boolean> } = CustomerUnloadingPoint._keyFields.reduce((acc: { [keys: string]: Field<CustomerUnloadingPoint, boolean, boolean> }, field: Field<CustomerUnloadingPoint, boolean, boolean>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
