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
exports.SubCategories = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var SubCategoriesRequestBuilder_1 = require("./SubCategoriesRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "SubCategories" of service "EPM_REF_APPS_PROD_MAN_SRV".
 */
var SubCategories = /** @class */ (function (_super) {
    __extends(SubCategories, _super);
    function SubCategories() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `SubCategories`.
     * @returns A builder that constructs instances of entity type `SubCategories`.
     */
    SubCategories.builder = function () {
        return core_1.Entity.entityBuilder(SubCategories);
    };
    /**
     * Returns a request builder to construct requests for operations on the `SubCategories` entity type.
     * @returns A `SubCategories` request builder.
     */
    SubCategories.requestBuilder = function () {
        return new SubCategoriesRequestBuilder_1.SubCategoriesRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SubCategories`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SubCategories`.
     */
    SubCategories.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, SubCategories);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    SubCategories.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for SubCategories.
     */
    SubCategories._entityName = 'SubCategories';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for SubCategories.
     */
    SubCategories._serviceName = 'EPM_REF_APPS_PROD_MAN_SRV';
    /**
     * Default url path for the according service.
     */
    SubCategories._defaultServicePath = '/sap/opu/odata/sap/EPM_REF_APPS_PROD_MAN_SRV';
    return SubCategories;
}(core_1.Entity));
exports.SubCategories = SubCategories;
var MainCategories_1 = require("./MainCategories");
(function (SubCategories) {
    /**
     * Static representation of the [[id]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SubCategories.ID = new core_1.StringField('Id', SubCategories, 'Edm.String');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SubCategories.NAME = new core_1.StringField('Name', SubCategories, 'Edm.String');
    /**
     * Static representation of the [[mainCategoryId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SubCategories.MAIN_CATEGORY_ID = new core_1.StringField('MainCategoryId', SubCategories, 'Edm.String');
    /**
     * Static representation of the [[mainCategoryName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SubCategories.MAIN_CATEGORY_NAME = new core_1.StringField('MainCategoryName', SubCategories, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[mainCategory]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SubCategories.MAIN_CATEGORY = new core_1.OneToOneLink('MainCategory', SubCategories, MainCategories_1.MainCategories);
    /**
     * All fields of the SubCategories entity.
     */
    SubCategories._allFields = [
        SubCategories.ID,
        SubCategories.NAME,
        SubCategories.MAIN_CATEGORY_ID,
        SubCategories.MAIN_CATEGORY_NAME,
        SubCategories.MAIN_CATEGORY
    ];
    /**
     * All fields selector.
     */
    SubCategories.ALL_FIELDS = new core_1.AllFields('*', SubCategories);
    /**
     * All key fields of the SubCategories entity.
     */
    SubCategories._keyFields = [SubCategories.ID];
    /**
     * Mapping of all key field names to the respective static field property SubCategories.
     */
    SubCategories._keys = SubCategories._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(SubCategories = exports.SubCategories || (exports.SubCategories = {}));
exports.SubCategories = SubCategories;
//# sourceMappingURL=SubCategories.js.map