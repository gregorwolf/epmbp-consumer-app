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
exports.Currencies = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var CurrenciesRequestBuilder_1 = require("./CurrenciesRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "Currencies" of service "EPM_REF_APPS_PROD_MAN_SRV".
 */
var Currencies = /** @class */ (function (_super) {
    __extends(Currencies, _super);
    function Currencies() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `Currencies`.
     * @returns A builder that constructs instances of entity type `Currencies`.
     */
    Currencies.builder = function () {
        return core_1.Entity.entityBuilder(Currencies);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Currencies` entity type.
     * @returns A `Currencies` request builder.
     */
    Currencies.requestBuilder = function () {
        return new CurrenciesRequestBuilder_1.CurrenciesRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Currencies`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Currencies`.
     */
    Currencies.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, Currencies);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Currencies.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Currencies.
     */
    Currencies._entityName = 'Currencies';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Currencies.
     */
    Currencies._serviceName = 'EPM_REF_APPS_PROD_MAN_SRV';
    /**
     * Default url path for the according service.
     */
    Currencies._defaultServicePath = '/sap/opu/odata/sap/EPM_REF_APPS_PROD_MAN_SRV';
    return Currencies;
}(core_1.Entity));
exports.Currencies = Currencies;
(function (Currencies) {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Currencies.CODE = new core_1.StringField('Code', Currencies, 'Edm.String');
    /**
     * Static representation of the [[text]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Currencies.TEXT = new core_1.StringField('Text', Currencies, 'Edm.String');
    /**
     * All fields of the Currencies entity.
     */
    Currencies._allFields = [
        Currencies.CODE,
        Currencies.TEXT
    ];
    /**
     * All fields selector.
     */
    Currencies.ALL_FIELDS = new core_1.AllFields('*', Currencies);
    /**
     * All key fields of the Currencies entity.
     */
    Currencies._keyFields = [Currencies.CODE];
    /**
     * Mapping of all key field names to the respective static field property Currencies.
     */
    Currencies._keys = Currencies._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Currencies = exports.Currencies || (exports.Currencies = {}));
exports.Currencies = Currencies;
//# sourceMappingURL=Currencies.js.map