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
exports.QuantityUnits = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var QuantityUnitsRequestBuilder_1 = require("./QuantityUnitsRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "QuantityUnits" of service "EPM_REF_APPS_PROD_MAN_SRV".
 */
var QuantityUnits = /** @class */ (function (_super) {
    __extends(QuantityUnits, _super);
    function QuantityUnits() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `QuantityUnits`.
     * @returns A builder that constructs instances of entity type `QuantityUnits`.
     */
    QuantityUnits.builder = function () {
        return core_1.Entity.entityBuilder(QuantityUnits);
    };
    /**
     * Returns a request builder to construct requests for operations on the `QuantityUnits` entity type.
     * @returns A `QuantityUnits` request builder.
     */
    QuantityUnits.requestBuilder = function () {
        return new QuantityUnitsRequestBuilder_1.QuantityUnitsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `QuantityUnits`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `QuantityUnits`.
     */
    QuantityUnits.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, QuantityUnits);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    QuantityUnits.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for QuantityUnits.
     */
    QuantityUnits._entityName = 'QuantityUnits';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for QuantityUnits.
     */
    QuantityUnits._serviceName = 'EPM_REF_APPS_PROD_MAN_SRV';
    /**
     * Default url path for the according service.
     */
    QuantityUnits._defaultServicePath = '/sap/opu/odata/sap/EPM_REF_APPS_PROD_MAN_SRV';
    return QuantityUnits;
}(core_1.Entity));
exports.QuantityUnits = QuantityUnits;
(function (QuantityUnits) {
    /**
     * Static representation of the [[unit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    QuantityUnits.UNIT = new core_1.StringField('Unit', QuantityUnits, 'Edm.String');
    /**
     * Static representation of the [[shorttext]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    QuantityUnits.SHORTTEXT = new core_1.StringField('Shorttext', QuantityUnits, 'Edm.String');
    /**
     * Static representation of the [[text]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    QuantityUnits.TEXT = new core_1.StringField('Text', QuantityUnits, 'Edm.String');
    /**
     * All fields of the QuantityUnits entity.
     */
    QuantityUnits._allFields = [
        QuantityUnits.UNIT,
        QuantityUnits.SHORTTEXT,
        QuantityUnits.TEXT
    ];
    /**
     * All fields selector.
     */
    QuantityUnits.ALL_FIELDS = new core_1.AllFields('*', QuantityUnits);
    /**
     * All key fields of the QuantityUnits entity.
     */
    QuantityUnits._keyFields = [QuantityUnits.UNIT];
    /**
     * Mapping of all key field names to the respective static field property QuantityUnits.
     */
    QuantityUnits._keys = QuantityUnits._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(QuantityUnits = exports.QuantityUnits || (exports.QuantityUnits = {}));
exports.QuantityUnits = QuantityUnits;
//# sourceMappingURL=QuantityUnits.js.map