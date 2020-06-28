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
exports.MainCategories = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var MainCategoriesRequestBuilder_1 = require("./MainCategoriesRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "MainCategories" of service "EPM_REF_APPS_PROD_MAN_SRV".
 */
var MainCategories = /** @class */ (function (_super) {
    __extends(MainCategories, _super);
    function MainCategories() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `MainCategories`.
     * @returns A builder that constructs instances of entity type `MainCategories`.
     */
    MainCategories.builder = function () {
        return core_1.Entity.entityBuilder(MainCategories);
    };
    /**
     * Returns a request builder to construct requests for operations on the `MainCategories` entity type.
     * @returns A `MainCategories` request builder.
     */
    MainCategories.requestBuilder = function () {
        return new MainCategoriesRequestBuilder_1.MainCategoriesRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `MainCategories`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `MainCategories`.
     */
    MainCategories.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, MainCategories);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    MainCategories.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for MainCategories.
     */
    MainCategories._entityName = 'MainCategories';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for MainCategories.
     */
    MainCategories._serviceName = 'EPM_REF_APPS_PROD_MAN_SRV';
    /**
     * Default url path for the according service.
     */
    MainCategories._defaultServicePath = '/sap/opu/odata/sap/EPM_REF_APPS_PROD_MAN_SRV';
    return MainCategories;
}(core_1.Entity));
exports.MainCategories = MainCategories;
var SubCategories_1 = require("./SubCategories");
(function (MainCategories) {
    /**
     * Static representation of the [[id]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MainCategories.ID = new core_1.StringField('Id', MainCategories, 'Edm.String');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MainCategories.NAME = new core_1.StringField('Name', MainCategories, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[subCategories]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MainCategories.SUB_CATEGORIES = new core_1.Link('SubCategories', MainCategories, SubCategories_1.SubCategories);
    /**
     * All fields of the MainCategories entity.
     */
    MainCategories._allFields = [
        MainCategories.ID,
        MainCategories.NAME,
        MainCategories.SUB_CATEGORIES
    ];
    /**
     * All fields selector.
     */
    MainCategories.ALL_FIELDS = new core_1.AllFields('*', MainCategories);
    /**
     * All key fields of the MainCategories entity.
     */
    MainCategories._keyFields = [MainCategories.ID];
    /**
     * Mapping of all key field names to the respective static field property MainCategories.
     */
    MainCategories._keys = MainCategories._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(MainCategories = exports.MainCategories || (exports.MainCategories = {}));
exports.MainCategories = MainCategories;
//# sourceMappingURL=MainCategories.js.map