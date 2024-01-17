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
exports.CustUnldgPtAddrDepdntInfo = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var CustUnldgPtAddrDepdntInfoRequestBuilder_1 = require("./CustUnldgPtAddrDepdntInfoRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "A_CustUnldgPtAddrDepdntInfo" of service "API_BUSINESS_PARTNER".
 */
var CustUnldgPtAddrDepdntInfo = /** @class */ (function (_super) {
    __extends(CustUnldgPtAddrDepdntInfo, _super);
    function CustUnldgPtAddrDepdntInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `CustUnldgPtAddrDepdntInfo`.
     * @returns A builder that constructs instances of entity type `CustUnldgPtAddrDepdntInfo`.
     */
    CustUnldgPtAddrDepdntInfo.builder = function () {
        return core_1.EntityV2.entityBuilder(CustUnldgPtAddrDepdntInfo);
    };
    /**
     * Returns a request builder to construct requests for operations on the `CustUnldgPtAddrDepdntInfo` entity type.
     * @returns A `CustUnldgPtAddrDepdntInfo` request builder.
     */
    CustUnldgPtAddrDepdntInfo.requestBuilder = function () {
        return new CustUnldgPtAddrDepdntInfoRequestBuilder_1.CustUnldgPtAddrDepdntInfoRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CustUnldgPtAddrDepdntInfo`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CustUnldgPtAddrDepdntInfo`.
     */
    CustUnldgPtAddrDepdntInfo.customField = function (fieldName) {
        return core_1.EntityV2.customFieldSelector(fieldName, CustUnldgPtAddrDepdntInfo);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    CustUnldgPtAddrDepdntInfo.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for CustUnldgPtAddrDepdntInfo.
     */
    CustUnldgPtAddrDepdntInfo._entityName = 'A_CustUnldgPtAddrDepdntInfo';
    /**
     * Default url path for the according service.
     */
    CustUnldgPtAddrDepdntInfo._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
    return CustUnldgPtAddrDepdntInfo;
}(core_1.EntityV2));
exports.CustUnldgPtAddrDepdntInfo = CustUnldgPtAddrDepdntInfo;
(function (CustUnldgPtAddrDepdntInfo) {
    var _fieldBuilder = new core_1.FieldBuilder(CustUnldgPtAddrDepdntInfo);
    /**
     * Static representation of the [[customer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustUnldgPtAddrDepdntInfo.CUSTOMER = _fieldBuilder.buildEdmTypeField('Customer', 'Edm.String', false);
    /**
     * Static representation of the [[addressId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustUnldgPtAddrDepdntInfo.ADDRESS_ID = _fieldBuilder.buildEdmTypeField('AddressID', 'Edm.String', false);
    /**
     * Static representation of the [[unloadingPointName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustUnldgPtAddrDepdntInfo.UNLOADING_POINT_NAME = _fieldBuilder.buildEdmTypeField('UnloadingPointName', 'Edm.String', false);
    /**
     * Static representation of the [[customerFactoryCalenderCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustUnldgPtAddrDepdntInfo.CUSTOMER_FACTORY_CALENDER_CODE = _fieldBuilder.buildEdmTypeField('CustomerFactoryCalenderCode', 'Edm.String', true);
    /**
     * Static representation of the [[bpGoodsReceivingHoursCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustUnldgPtAddrDepdntInfo.BP_GOODS_RECEIVING_HOURS_CODE = _fieldBuilder.buildEdmTypeField('BPGoodsReceivingHoursCode', 'Edm.String', true);
    /**
     * Static representation of the [[isDfltBpUnloadingPoint]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustUnldgPtAddrDepdntInfo.IS_DFLT_BP_UNLOADING_POINT = _fieldBuilder.buildEdmTypeField('IsDfltBPUnloadingPoint', 'Edm.Boolean', true);
    /**
     * Static representation of the [[mondayMorningOpeningTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustUnldgPtAddrDepdntInfo.MONDAY_MORNING_OPENING_TIME = _fieldBuilder.buildEdmTypeField('MondayMorningOpeningTime', 'Edm.Time', true);
    /**
     * Static representation of the [[mondayMorningClosingTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustUnldgPtAddrDepdntInfo.MONDAY_MORNING_CLOSING_TIME = _fieldBuilder.buildEdmTypeField('MondayMorningClosingTime', 'Edm.Time', true);
    /**
     * Static representation of the [[mondayAfternoonOpeningTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustUnldgPtAddrDepdntInfo.MONDAY_AFTERNOON_OPENING_TIME = _fieldBuilder.buildEdmTypeField('MondayAfternoonOpeningTime', 'Edm.Time', true);
    /**
     * Static representation of the [[mondayAfternoonClosingTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustUnldgPtAddrDepdntInfo.MONDAY_AFTERNOON_CLOSING_TIME = _fieldBuilder.buildEdmTypeField('MondayAfternoonClosingTime', 'Edm.Time', true);
    /**
     * Static representation of the [[tuesdayMorningOpeningTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustUnldgPtAddrDepdntInfo.TUESDAY_MORNING_OPENING_TIME = _fieldBuilder.buildEdmTypeField('TuesdayMorningOpeningTime', 'Edm.Time', true);
    /**
     * Static representation of the [[tuesdayMorningClosingTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustUnldgPtAddrDepdntInfo.TUESDAY_MORNING_CLOSING_TIME = _fieldBuilder.buildEdmTypeField('TuesdayMorningClosingTime', 'Edm.Time', true);
    /**
     * Static representation of the [[tuesdayAfternoonOpeningTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustUnldgPtAddrDepdntInfo.TUESDAY_AFTERNOON_OPENING_TIME = _fieldBuilder.buildEdmTypeField('TuesdayAfternoonOpeningTime', 'Edm.Time', true);
    /**
     * Static representation of the [[tuesdayAfternoonClosingTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustUnldgPtAddrDepdntInfo.TUESDAY_AFTERNOON_CLOSING_TIME = _fieldBuilder.buildEdmTypeField('TuesdayAfternoonClosingTime', 'Edm.Time', true);
    /**
     * Static representation of the [[wednesdayMorningOpeningTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustUnldgPtAddrDepdntInfo.WEDNESDAY_MORNING_OPENING_TIME = _fieldBuilder.buildEdmTypeField('WednesdayMorningOpeningTime', 'Edm.Time', true);
    /**
     * Static representation of the [[wednesdayMorningClosingTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustUnldgPtAddrDepdntInfo.WEDNESDAY_MORNING_CLOSING_TIME = _fieldBuilder.buildEdmTypeField('WednesdayMorningClosingTime', 'Edm.Time', true);
    /**
     * Static representation of the [[wednesdayAfternoonOpeningTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustUnldgPtAddrDepdntInfo.WEDNESDAY_AFTERNOON_OPENING_TIME = _fieldBuilder.buildEdmTypeField('WednesdayAfternoonOpeningTime', 'Edm.Time', true);
    /**
     * Static representation of the [[wednesdayAfternoonClosingTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustUnldgPtAddrDepdntInfo.WEDNESDAY_AFTERNOON_CLOSING_TIME = _fieldBuilder.buildEdmTypeField('WednesdayAfternoonClosingTime', 'Edm.Time', true);
    /**
     * Static representation of the [[thursdayMorningOpeningTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustUnldgPtAddrDepdntInfo.THURSDAY_MORNING_OPENING_TIME = _fieldBuilder.buildEdmTypeField('ThursdayMorningOpeningTime', 'Edm.Time', true);
    /**
     * Static representation of the [[thursdayMorningClosingTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustUnldgPtAddrDepdntInfo.THURSDAY_MORNING_CLOSING_TIME = _fieldBuilder.buildEdmTypeField('ThursdayMorningClosingTime', 'Edm.Time', true);
    /**
     * Static representation of the [[thursdayAfternoonOpeningTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustUnldgPtAddrDepdntInfo.THURSDAY_AFTERNOON_OPENING_TIME = _fieldBuilder.buildEdmTypeField('ThursdayAfternoonOpeningTime', 'Edm.Time', true);
    /**
     * Static representation of the [[thursdayAfternoonClosingTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustUnldgPtAddrDepdntInfo.THURSDAY_AFTERNOON_CLOSING_TIME = _fieldBuilder.buildEdmTypeField('ThursdayAfternoonClosingTime', 'Edm.Time', true);
    /**
     * Static representation of the [[fridayMorningOpeningTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustUnldgPtAddrDepdntInfo.FRIDAY_MORNING_OPENING_TIME = _fieldBuilder.buildEdmTypeField('FridayMorningOpeningTime', 'Edm.Time', true);
    /**
     * Static representation of the [[fridayMorningClosingTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustUnldgPtAddrDepdntInfo.FRIDAY_MORNING_CLOSING_TIME = _fieldBuilder.buildEdmTypeField('FridayMorningClosingTime', 'Edm.Time', true);
    /**
     * Static representation of the [[fridayAfternoonOpeningTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustUnldgPtAddrDepdntInfo.FRIDAY_AFTERNOON_OPENING_TIME = _fieldBuilder.buildEdmTypeField('FridayAfternoonOpeningTime', 'Edm.Time', true);
    /**
     * Static representation of the [[fridayAfternoonClosingTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustUnldgPtAddrDepdntInfo.FRIDAY_AFTERNOON_CLOSING_TIME = _fieldBuilder.buildEdmTypeField('FridayAfternoonClosingTime', 'Edm.Time', true);
    /**
     * Static representation of the [[saturdayMorningOpeningTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustUnldgPtAddrDepdntInfo.SATURDAY_MORNING_OPENING_TIME = _fieldBuilder.buildEdmTypeField('SaturdayMorningOpeningTime', 'Edm.Time', true);
    /**
     * Static representation of the [[saturdayMorningClosingTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustUnldgPtAddrDepdntInfo.SATURDAY_MORNING_CLOSING_TIME = _fieldBuilder.buildEdmTypeField('SaturdayMorningClosingTime', 'Edm.Time', true);
    /**
     * Static representation of the [[saturdayAfternoonOpeningTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustUnldgPtAddrDepdntInfo.SATURDAY_AFTERNOON_OPENING_TIME = _fieldBuilder.buildEdmTypeField('SaturdayAfternoonOpeningTime', 'Edm.Time', true);
    /**
     * Static representation of the [[saturdayAfternoonClosingTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustUnldgPtAddrDepdntInfo.SATURDAY_AFTERNOON_CLOSING_TIME = _fieldBuilder.buildEdmTypeField('SaturdayAfternoonClosingTime', 'Edm.Time', true);
    /**
     * Static representation of the [[sundayMorningOpeningTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustUnldgPtAddrDepdntInfo.SUNDAY_MORNING_OPENING_TIME = _fieldBuilder.buildEdmTypeField('SundayMorningOpeningTime', 'Edm.Time', true);
    /**
     * Static representation of the [[sundayMorningClosingTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustUnldgPtAddrDepdntInfo.SUNDAY_MORNING_CLOSING_TIME = _fieldBuilder.buildEdmTypeField('SundayMorningClosingTime', 'Edm.Time', true);
    /**
     * Static representation of the [[sundayAfternoonOpeningTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustUnldgPtAddrDepdntInfo.SUNDAY_AFTERNOON_OPENING_TIME = _fieldBuilder.buildEdmTypeField('SundayAfternoonOpeningTime', 'Edm.Time', true);
    /**
     * Static representation of the [[sundayAfternoonClosingTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustUnldgPtAddrDepdntInfo.SUNDAY_AFTERNOON_CLOSING_TIME = _fieldBuilder.buildEdmTypeField('SundayAfternoonClosingTime', 'Edm.Time', true);
    /**
     * All fields of the CustUnldgPtAddrDepdntInfo entity.
     */
    CustUnldgPtAddrDepdntInfo._allFields = [
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
    CustUnldgPtAddrDepdntInfo.ALL_FIELDS = new core_1.AllFields('*', CustUnldgPtAddrDepdntInfo);
    /**
     * All key fields of the CustUnldgPtAddrDepdntInfo entity.
     */
    CustUnldgPtAddrDepdntInfo._keyFields = [CustUnldgPtAddrDepdntInfo.CUSTOMER, CustUnldgPtAddrDepdntInfo.ADDRESS_ID, CustUnldgPtAddrDepdntInfo.UNLOADING_POINT_NAME];
    /**
     * Mapping of all key field names to the respective static field property CustUnldgPtAddrDepdntInfo.
     */
    CustUnldgPtAddrDepdntInfo._keys = CustUnldgPtAddrDepdntInfo._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(CustUnldgPtAddrDepdntInfo = exports.CustUnldgPtAddrDepdntInfo || (exports.CustUnldgPtAddrDepdntInfo = {}));
exports.CustUnldgPtAddrDepdntInfo = CustUnldgPtAddrDepdntInfo;
//# sourceMappingURL=CustUnldgPtAddrDepdntInfo.js.map