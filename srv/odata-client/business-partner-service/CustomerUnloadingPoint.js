"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerUnloadingPoint = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var CustomerUnloadingPointRequestBuilder_1 = require("./CustomerUnloadingPointRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "A_CustomerUnloadingPoint" of service "API_BUSINESS_PARTNER".
 */
var CustomerUnloadingPoint = /** @class */ (function (_super) {
    __extends(CustomerUnloadingPoint, _super);
    function CustomerUnloadingPoint() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `CustomerUnloadingPoint`.
     * @returns A builder that constructs instances of entity type `CustomerUnloadingPoint`.
     */
    CustomerUnloadingPoint.builder = function () {
        return core_1.EntityV2.entityBuilder(CustomerUnloadingPoint);
    };
    /**
     * Returns a request builder to construct requests for operations on the `CustomerUnloadingPoint` entity type.
     * @returns A `CustomerUnloadingPoint` request builder.
     */
    CustomerUnloadingPoint.requestBuilder = function () {
        return new CustomerUnloadingPointRequestBuilder_1.CustomerUnloadingPointRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CustomerUnloadingPoint`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CustomerUnloadingPoint`.
     */
    CustomerUnloadingPoint.customField = function (fieldName) {
        return core_1.EntityV2.customFieldSelector(fieldName, CustomerUnloadingPoint);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    CustomerUnloadingPoint.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for CustomerUnloadingPoint.
     */
    CustomerUnloadingPoint._entityName = 'A_CustomerUnloadingPoint';
    /**
     * Default url path for the according service.
     */
    CustomerUnloadingPoint._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
    return CustomerUnloadingPoint;
}(core_1.EntityV2));
exports.CustomerUnloadingPoint = CustomerUnloadingPoint;
(function (CustomerUnloadingPoint) {
    var _fieldBuilder = new core_1.FieldBuilder(CustomerUnloadingPoint);
    /**
     * Static representation of the [[customer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerUnloadingPoint.CUSTOMER = _fieldBuilder.buildEdmTypeField('Customer', 'Edm.String', false);
    /**
     * Static representation of the [[unloadingPointName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerUnloadingPoint.UNLOADING_POINT_NAME = _fieldBuilder.buildEdmTypeField('UnloadingPointName', 'Edm.String', false);
    /**
     * Static representation of the [[customerFactoryCalenderCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerUnloadingPoint.CUSTOMER_FACTORY_CALENDER_CODE = _fieldBuilder.buildEdmTypeField('CustomerFactoryCalenderCode', 'Edm.String', true);
    /**
     * Static representation of the [[bpGoodsReceivingHoursCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerUnloadingPoint.BP_GOODS_RECEIVING_HOURS_CODE = _fieldBuilder.buildEdmTypeField('BPGoodsReceivingHoursCode', 'Edm.String', true);
    /**
     * Static representation of the [[isDfltBpUnloadingPoint]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerUnloadingPoint.IS_DFLT_BP_UNLOADING_POINT = _fieldBuilder.buildEdmTypeField('IsDfltBPUnloadingPoint', 'Edm.Boolean', true);
    /**
     * Static representation of the [[mondayMorningOpeningTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerUnloadingPoint.MONDAY_MORNING_OPENING_TIME = _fieldBuilder.buildEdmTypeField('MondayMorningOpeningTime', 'Edm.Time', true);
    /**
     * Static representation of the [[mondayMorningClosingTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerUnloadingPoint.MONDAY_MORNING_CLOSING_TIME = _fieldBuilder.buildEdmTypeField('MondayMorningClosingTime', 'Edm.Time', true);
    /**
     * Static representation of the [[mondayAfternoonOpeningTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerUnloadingPoint.MONDAY_AFTERNOON_OPENING_TIME = _fieldBuilder.buildEdmTypeField('MondayAfternoonOpeningTime', 'Edm.Time', true);
    /**
     * Static representation of the [[mondayAfternoonClosingTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerUnloadingPoint.MONDAY_AFTERNOON_CLOSING_TIME = _fieldBuilder.buildEdmTypeField('MondayAfternoonClosingTime', 'Edm.Time', true);
    /**
     * Static representation of the [[tuesdayMorningOpeningTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerUnloadingPoint.TUESDAY_MORNING_OPENING_TIME = _fieldBuilder.buildEdmTypeField('TuesdayMorningOpeningTime', 'Edm.Time', true);
    /**
     * Static representation of the [[tuesdayMorningClosingTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerUnloadingPoint.TUESDAY_MORNING_CLOSING_TIME = _fieldBuilder.buildEdmTypeField('TuesdayMorningClosingTime', 'Edm.Time', true);
    /**
     * Static representation of the [[tuesdayAfternoonOpeningTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerUnloadingPoint.TUESDAY_AFTERNOON_OPENING_TIME = _fieldBuilder.buildEdmTypeField('TuesdayAfternoonOpeningTime', 'Edm.Time', true);
    /**
     * Static representation of the [[tuesdayAfternoonClosingTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerUnloadingPoint.TUESDAY_AFTERNOON_CLOSING_TIME = _fieldBuilder.buildEdmTypeField('TuesdayAfternoonClosingTime', 'Edm.Time', true);
    /**
     * Static representation of the [[wednesdayMorningOpeningTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerUnloadingPoint.WEDNESDAY_MORNING_OPENING_TIME = _fieldBuilder.buildEdmTypeField('WednesdayMorningOpeningTime', 'Edm.Time', true);
    /**
     * Static representation of the [[wednesdayMorningClosingTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerUnloadingPoint.WEDNESDAY_MORNING_CLOSING_TIME = _fieldBuilder.buildEdmTypeField('WednesdayMorningClosingTime', 'Edm.Time', true);
    /**
     * Static representation of the [[wednesdayAfternoonOpeningTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerUnloadingPoint.WEDNESDAY_AFTERNOON_OPENING_TIME = _fieldBuilder.buildEdmTypeField('WednesdayAfternoonOpeningTime', 'Edm.Time', true);
    /**
     * Static representation of the [[wednesdayAfternoonClosingTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerUnloadingPoint.WEDNESDAY_AFTERNOON_CLOSING_TIME = _fieldBuilder.buildEdmTypeField('WednesdayAfternoonClosingTime', 'Edm.Time', true);
    /**
     * Static representation of the [[thursdayMorningOpeningTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerUnloadingPoint.THURSDAY_MORNING_OPENING_TIME = _fieldBuilder.buildEdmTypeField('ThursdayMorningOpeningTime', 'Edm.Time', true);
    /**
     * Static representation of the [[thursdayMorningClosingTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerUnloadingPoint.THURSDAY_MORNING_CLOSING_TIME = _fieldBuilder.buildEdmTypeField('ThursdayMorningClosingTime', 'Edm.Time', true);
    /**
     * Static representation of the [[thursdayAfternoonOpeningTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerUnloadingPoint.THURSDAY_AFTERNOON_OPENING_TIME = _fieldBuilder.buildEdmTypeField('ThursdayAfternoonOpeningTime', 'Edm.Time', true);
    /**
     * Static representation of the [[thursdayAfternoonClosingTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerUnloadingPoint.THURSDAY_AFTERNOON_CLOSING_TIME = _fieldBuilder.buildEdmTypeField('ThursdayAfternoonClosingTime', 'Edm.Time', true);
    /**
     * Static representation of the [[fridayMorningOpeningTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerUnloadingPoint.FRIDAY_MORNING_OPENING_TIME = _fieldBuilder.buildEdmTypeField('FridayMorningOpeningTime', 'Edm.Time', true);
    /**
     * Static representation of the [[fridayMorningClosingTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerUnloadingPoint.FRIDAY_MORNING_CLOSING_TIME = _fieldBuilder.buildEdmTypeField('FridayMorningClosingTime', 'Edm.Time', true);
    /**
     * Static representation of the [[fridayAfternoonOpeningTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerUnloadingPoint.FRIDAY_AFTERNOON_OPENING_TIME = _fieldBuilder.buildEdmTypeField('FridayAfternoonOpeningTime', 'Edm.Time', true);
    /**
     * Static representation of the [[fridayAfternoonClosingTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerUnloadingPoint.FRIDAY_AFTERNOON_CLOSING_TIME = _fieldBuilder.buildEdmTypeField('FridayAfternoonClosingTime', 'Edm.Time', true);
    /**
     * Static representation of the [[saturdayMorningOpeningTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerUnloadingPoint.SATURDAY_MORNING_OPENING_TIME = _fieldBuilder.buildEdmTypeField('SaturdayMorningOpeningTime', 'Edm.Time', true);
    /**
     * Static representation of the [[saturdayMorningClosingTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerUnloadingPoint.SATURDAY_MORNING_CLOSING_TIME = _fieldBuilder.buildEdmTypeField('SaturdayMorningClosingTime', 'Edm.Time', true);
    /**
     * Static representation of the [[saturdayAfternoonOpeningTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerUnloadingPoint.SATURDAY_AFTERNOON_OPENING_TIME = _fieldBuilder.buildEdmTypeField('SaturdayAfternoonOpeningTime', 'Edm.Time', true);
    /**
     * Static representation of the [[saturdayAfternoonClosingTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerUnloadingPoint.SATURDAY_AFTERNOON_CLOSING_TIME = _fieldBuilder.buildEdmTypeField('SaturdayAfternoonClosingTime', 'Edm.Time', true);
    /**
     * Static representation of the [[sundayMorningOpeningTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerUnloadingPoint.SUNDAY_MORNING_OPENING_TIME = _fieldBuilder.buildEdmTypeField('SundayMorningOpeningTime', 'Edm.Time', true);
    /**
     * Static representation of the [[sundayMorningClosingTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerUnloadingPoint.SUNDAY_MORNING_CLOSING_TIME = _fieldBuilder.buildEdmTypeField('SundayMorningClosingTime', 'Edm.Time', true);
    /**
     * Static representation of the [[sundayAfternoonOpeningTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerUnloadingPoint.SUNDAY_AFTERNOON_OPENING_TIME = _fieldBuilder.buildEdmTypeField('SundayAfternoonOpeningTime', 'Edm.Time', true);
    /**
     * Static representation of the [[sundayAfternoonClosingTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerUnloadingPoint.SUNDAY_AFTERNOON_CLOSING_TIME = _fieldBuilder.buildEdmTypeField('SundayAfternoonClosingTime', 'Edm.Time', true);
    /**
     * All fields of the CustomerUnloadingPoint entity.
     */
    CustomerUnloadingPoint._allFields = [
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
    CustomerUnloadingPoint.ALL_FIELDS = new core_1.AllFields('*', CustomerUnloadingPoint);
    /**
     * All key fields of the CustomerUnloadingPoint entity.
     */
    CustomerUnloadingPoint._keyFields = [CustomerUnloadingPoint.CUSTOMER, CustomerUnloadingPoint.UNLOADING_POINT_NAME];
    /**
     * Mapping of all key field names to the respective static field property CustomerUnloadingPoint.
     */
    CustomerUnloadingPoint._keys = CustomerUnloadingPoint._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(CustomerUnloadingPoint = exports.CustomerUnloadingPoint || (exports.CustomerUnloadingPoint = {}));
exports.CustomerUnloadingPoint = CustomerUnloadingPoint;
//# sourceMappingURL=CustomerUnloadingPoint.js.map