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
exports.Suppliers = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var SuppliersRequestBuilder_1 = require("./SuppliersRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "Suppliers" of service "EPM_REF_APPS_PROD_MAN_SRV".
 */
var Suppliers = /** @class */ (function (_super) {
    __extends(Suppliers, _super);
    function Suppliers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `Suppliers`.
     * @returns A builder that constructs instances of entity type `Suppliers`.
     */
    Suppliers.builder = function () {
        return core_1.Entity.entityBuilder(Suppliers);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Suppliers` entity type.
     * @returns A `Suppliers` request builder.
     */
    Suppliers.requestBuilder = function () {
        return new SuppliersRequestBuilder_1.SuppliersRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Suppliers`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Suppliers`.
     */
    Suppliers.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, Suppliers);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Suppliers.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Suppliers.
     */
    Suppliers._entityName = 'Suppliers';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Suppliers.
     */
    Suppliers._serviceName = 'EPM_REF_APPS_PROD_MAN_SRV';
    /**
     * Default url path for the according service.
     */
    Suppliers._defaultServicePath = '/sap/opu/odata/sap/EPM_REF_APPS_PROD_MAN_SRV';
    return Suppliers;
}(core_1.Entity));
exports.Suppliers = Suppliers;
(function (Suppliers) {
    /**
     * Static representation of the [[id]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Suppliers.ID = new core_1.StringField('Id', Suppliers, 'Edm.String');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Suppliers.NAME = new core_1.StringField('Name', Suppliers, 'Edm.String');
    /**
     * Static representation of the [[phone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Suppliers.PHONE = new core_1.StringField('Phone', Suppliers, 'Edm.String');
    /**
     * Static representation of the [[email]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Suppliers.EMAIL = new core_1.StringField('Email', Suppliers, 'Edm.String');
    /**
     * Static representation of the [[webAddress]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Suppliers.WEB_ADDRESS = new core_1.StringField('WebAddress', Suppliers, 'Edm.String');
    /**
     * Static representation of the [[formattedAddress]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Suppliers.FORMATTED_ADDRESS = new core_1.StringField('FormattedAddress', Suppliers, 'Edm.String');
    /**
     * Static representation of the [[formattedContactName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Suppliers.FORMATTED_CONTACT_NAME = new core_1.StringField('FormattedContactName', Suppliers, 'Edm.String');
    /**
     * Static representation of the [[contactPhone1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Suppliers.CONTACT_PHONE_1 = new core_1.StringField('ContactPhone1', Suppliers, 'Edm.String');
    /**
     * Static representation of the [[contactPhone2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Suppliers.CONTACT_PHONE_2 = new core_1.StringField('ContactPhone2', Suppliers, 'Edm.String');
    /**
     * Static representation of the [[contactEmail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Suppliers.CONTACT_EMAIL = new core_1.StringField('ContactEmail', Suppliers, 'Edm.String');
    /**
     * All fields of the Suppliers entity.
     */
    Suppliers._allFields = [
        Suppliers.ID,
        Suppliers.NAME,
        Suppliers.PHONE,
        Suppliers.EMAIL,
        Suppliers.WEB_ADDRESS,
        Suppliers.FORMATTED_ADDRESS,
        Suppliers.FORMATTED_CONTACT_NAME,
        Suppliers.CONTACT_PHONE_1,
        Suppliers.CONTACT_PHONE_2,
        Suppliers.CONTACT_EMAIL
    ];
    /**
     * All fields selector.
     */
    Suppliers.ALL_FIELDS = new core_1.AllFields('*', Suppliers);
    /**
     * All key fields of the Suppliers entity.
     */
    Suppliers._keyFields = [Suppliers.ID];
    /**
     * Mapping of all key field names to the respective static field property Suppliers.
     */
    Suppliers._keys = Suppliers._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Suppliers = exports.Suppliers || (exports.Suppliers = {}));
exports.Suppliers = Suppliers;
//# sourceMappingURL=Suppliers.js.map