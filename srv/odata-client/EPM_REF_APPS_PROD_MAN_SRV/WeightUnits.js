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
exports.WeightUnits = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var WeightUnitsRequestBuilder_1 = require("./WeightUnitsRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "WeightUnits" of service "EPM_REF_APPS_PROD_MAN_SRV".
 */
var WeightUnits = /** @class */ (function (_super) {
    __extends(WeightUnits, _super);
    function WeightUnits() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `WeightUnits`.
     * @returns A builder that constructs instances of entity type `WeightUnits`.
     */
    WeightUnits.builder = function () {
        return core_1.Entity.entityBuilder(WeightUnits);
    };
    /**
     * Returns a request builder to construct requests for operations on the `WeightUnits` entity type.
     * @returns A `WeightUnits` request builder.
     */
    WeightUnits.requestBuilder = function () {
        return new WeightUnitsRequestBuilder_1.WeightUnitsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `WeightUnits`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `WeightUnits`.
     */
    WeightUnits.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, WeightUnits);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    WeightUnits.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for WeightUnits.
     */
    WeightUnits._entityName = 'WeightUnits';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for WeightUnits.
     */
    WeightUnits._serviceName = 'EPM_REF_APPS_PROD_MAN_SRV';
    /**
     * Default url path for the according service.
     */
    WeightUnits._defaultServicePath = '/sap/opu/odata/sap/EPM_REF_APPS_PROD_MAN_SRV';
    return WeightUnits;
}(core_1.Entity));
exports.WeightUnits = WeightUnits;
(function (WeightUnits) {
    /**
     * Static representation of the [[unit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WeightUnits.UNIT = new core_1.StringField('Unit', WeightUnits, 'Edm.String');
    /**
     * Static representation of the [[shorttext]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WeightUnits.SHORTTEXT = new core_1.StringField('Shorttext', WeightUnits, 'Edm.String');
    /**
     * Static representation of the [[text]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WeightUnits.TEXT = new core_1.StringField('Text', WeightUnits, 'Edm.String');
    /**
     * All fields of the WeightUnits entity.
     */
    WeightUnits._allFields = [
        WeightUnits.UNIT,
        WeightUnits.SHORTTEXT,
        WeightUnits.TEXT
    ];
    /**
     * All fields selector.
     */
    WeightUnits.ALL_FIELDS = new core_1.AllFields('*', WeightUnits);
    /**
     * All key fields of the WeightUnits entity.
     */
    WeightUnits._keyFields = [WeightUnits.UNIT];
    /**
     * Mapping of all key field names to the respective static field property WeightUnits.
     */
    WeightUnits._keys = WeightUnits._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(WeightUnits = exports.WeightUnits || (exports.WeightUnits = {}));
exports.WeightUnits = WeightUnits;
//# sourceMappingURL=WeightUnits.js.map