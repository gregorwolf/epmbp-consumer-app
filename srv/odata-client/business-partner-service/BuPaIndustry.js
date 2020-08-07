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
exports.BuPaIndustry = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var BuPaIndustryRequestBuilder_1 = require("./BuPaIndustryRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "A_BuPaIndustry" of service "API_BUSINESS_PARTNER".
 */
var BuPaIndustry = /** @class */ (function (_super) {
    __extends(BuPaIndustry, _super);
    function BuPaIndustry() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `BuPaIndustry`.
     * @returns A builder that constructs instances of entity type `BuPaIndustry`.
     */
    BuPaIndustry.builder = function () {
        return core_1.Entity.entityBuilder(BuPaIndustry);
    };
    /**
     * Returns a request builder to construct requests for operations on the `BuPaIndustry` entity type.
     * @returns A `BuPaIndustry` request builder.
     */
    BuPaIndustry.requestBuilder = function () {
        return new BuPaIndustryRequestBuilder_1.BuPaIndustryRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `BuPaIndustry`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `BuPaIndustry`.
     */
    BuPaIndustry.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, BuPaIndustry);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    BuPaIndustry.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for BuPaIndustry.
     */
    BuPaIndustry._entityName = 'A_BuPaIndustry';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for BuPaIndustry.
     */
    BuPaIndustry._serviceName = 'API_BUSINESS_PARTNER';
    /**
     * Default url path for the according service.
     */
    BuPaIndustry._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
    return BuPaIndustry;
}(core_1.Entity));
exports.BuPaIndustry = BuPaIndustry;
(function (BuPaIndustry) {
    /**
     * Static representation of the [[industrySector]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BuPaIndustry.INDUSTRY_SECTOR = new core_1.StringField('IndustrySector', BuPaIndustry, 'Edm.String');
    /**
     * Static representation of the [[industrySystemType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BuPaIndustry.INDUSTRY_SYSTEM_TYPE = new core_1.StringField('IndustrySystemType', BuPaIndustry, 'Edm.String');
    /**
     * Static representation of the [[businessPartner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BuPaIndustry.BUSINESS_PARTNER = new core_1.StringField('BusinessPartner', BuPaIndustry, 'Edm.String');
    /**
     * Static representation of the [[isStandardIndustry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BuPaIndustry.IS_STANDARD_INDUSTRY = new core_1.StringField('IsStandardIndustry', BuPaIndustry, 'Edm.String');
    /**
     * Static representation of the [[industryKeyDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BuPaIndustry.INDUSTRY_KEY_DESCRIPTION = new core_1.StringField('IndustryKeyDescription', BuPaIndustry, 'Edm.String');
    /**
     * All fields of the BuPaIndustry entity.
     */
    BuPaIndustry._allFields = [
        BuPaIndustry.INDUSTRY_SECTOR,
        BuPaIndustry.INDUSTRY_SYSTEM_TYPE,
        BuPaIndustry.BUSINESS_PARTNER,
        BuPaIndustry.IS_STANDARD_INDUSTRY,
        BuPaIndustry.INDUSTRY_KEY_DESCRIPTION
    ];
    /**
     * All fields selector.
     */
    BuPaIndustry.ALL_FIELDS = new core_1.AllFields('*', BuPaIndustry);
    /**
     * All key fields of the BuPaIndustry entity.
     */
    BuPaIndustry._keyFields = [BuPaIndustry.INDUSTRY_SECTOR, BuPaIndustry.INDUSTRY_SYSTEM_TYPE, BuPaIndustry.BUSINESS_PARTNER];
    /**
     * Mapping of all key field names to the respective static field property BuPaIndustry.
     */
    BuPaIndustry._keys = BuPaIndustry._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(BuPaIndustry = exports.BuPaIndustry || (exports.BuPaIndustry = {}));
exports.BuPaIndustry = BuPaIndustry;
//# sourceMappingURL=BuPaIndustry.js.map