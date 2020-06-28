"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
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
exports.DimensionUnits = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var DimensionUnitsRequestBuilder_1 = require("./DimensionUnitsRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "DimensionUnits" of service "EPM_REF_APPS_PROD_MAN_SRV".
 */
var DimensionUnits = /** @class */ (function (_super) {
    __extends(DimensionUnits, _super);
    function DimensionUnits() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `DimensionUnits`.
     * @returns A builder that constructs instances of entity type `DimensionUnits`.
     */
    DimensionUnits.builder = function () {
        return core_1.Entity.entityBuilder(DimensionUnits);
    };
    /**
     * Returns a request builder to construct requests for operations on the `DimensionUnits` entity type.
     * @returns A `DimensionUnits` request builder.
     */
    DimensionUnits.requestBuilder = function () {
        return new DimensionUnitsRequestBuilder_1.DimensionUnitsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `DimensionUnits`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `DimensionUnits`.
     */
    DimensionUnits.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, DimensionUnits);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    DimensionUnits.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for DimensionUnits.
     */
    DimensionUnits._entityName = 'DimensionUnits';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for DimensionUnits.
     */
    DimensionUnits._serviceName = 'EPM_REF_APPS_PROD_MAN_SRV';
    /**
     * Default url path for the according service.
     */
    DimensionUnits._defaultServicePath = '/sap/opu/odata/sap/EPM_REF_APPS_PROD_MAN_SRV';
    return DimensionUnits;
}(core_1.Entity));
exports.DimensionUnits = DimensionUnits;
(function (DimensionUnits) {
    /**
     * Static representation of the [[unit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DimensionUnits.UNIT = new core_1.StringField('Unit', DimensionUnits, 'Edm.String');
    /**
     * Static representation of the [[shorttext]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DimensionUnits.SHORTTEXT = new core_1.StringField('Shorttext', DimensionUnits, 'Edm.String');
    /**
     * Static representation of the [[text]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DimensionUnits.TEXT = new core_1.StringField('Text', DimensionUnits, 'Edm.String');
    /**
     * All fields of the DimensionUnits entity.
     */
    DimensionUnits._allFields = [
        DimensionUnits.UNIT,
        DimensionUnits.SHORTTEXT,
        DimensionUnits.TEXT
    ];
    /**
     * All fields selector.
     */
    DimensionUnits.ALL_FIELDS = new core_1.AllFields('*', DimensionUnits);
    /**
     * All key fields of the DimensionUnits entity.
     */
    DimensionUnits._keyFields = [DimensionUnits.UNIT];
    /**
     * Mapping of all key field names to the respective static field property DimensionUnits.
     */
    DimensionUnits._keys = DimensionUnits._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(DimensionUnits = exports.DimensionUnits || (exports.DimensionUnits = {}));
exports.DimensionUnits = DimensionUnits;
//# sourceMappingURL=DimensionUnits.js.map