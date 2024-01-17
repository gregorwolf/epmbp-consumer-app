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
exports.BusinessPartnerRating = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var BusinessPartnerRatingRequestBuilder_1 = require("./BusinessPartnerRatingRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "A_BusinessPartnerRating" of service "API_BUSINESS_PARTNER".
 */
var BusinessPartnerRating = /** @class */ (function (_super) {
    __extends(BusinessPartnerRating, _super);
    function BusinessPartnerRating() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `BusinessPartnerRating`.
     * @returns A builder that constructs instances of entity type `BusinessPartnerRating`.
     */
    BusinessPartnerRating.builder = function () {
        return core_1.EntityV2.entityBuilder(BusinessPartnerRating);
    };
    /**
     * Returns a request builder to construct requests for operations on the `BusinessPartnerRating` entity type.
     * @returns A `BusinessPartnerRating` request builder.
     */
    BusinessPartnerRating.requestBuilder = function () {
        return new BusinessPartnerRatingRequestBuilder_1.BusinessPartnerRatingRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `BusinessPartnerRating`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `BusinessPartnerRating`.
     */
    BusinessPartnerRating.customField = function (fieldName) {
        return core_1.EntityV2.customFieldSelector(fieldName, BusinessPartnerRating);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    BusinessPartnerRating.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for BusinessPartnerRating.
     */
    BusinessPartnerRating._entityName = 'A_BusinessPartnerRating';
    /**
     * Default url path for the according service.
     */
    BusinessPartnerRating._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
    return BusinessPartnerRating;
}(core_1.EntityV2));
exports.BusinessPartnerRating = BusinessPartnerRating;
(function (BusinessPartnerRating) {
    var _fieldBuilder = new core_1.FieldBuilder(BusinessPartnerRating);
    /**
     * Static representation of the [[businessPartner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerRating.BUSINESS_PARTNER = _fieldBuilder.buildEdmTypeField('BusinessPartner', 'Edm.String', false);
    /**
     * Static representation of the [[businessPartnerRatingProcedure]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerRating.BUSINESS_PARTNER_RATING_PROCEDURE = _fieldBuilder.buildEdmTypeField('BusinessPartnerRatingProcedure', 'Edm.String', false);
    /**
     * Static representation of the [[bpRatingValidityEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerRating.BP_RATING_VALIDITY_END_DATE = _fieldBuilder.buildEdmTypeField('BPRatingValidityEndDate', 'Edm.DateTime', false);
    /**
     * Static representation of the [[businessPartnerRatingGrade]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerRating.BUSINESS_PARTNER_RATING_GRADE = _fieldBuilder.buildEdmTypeField('BusinessPartnerRatingGrade', 'Edm.String', true);
    /**
     * Static representation of the [[businessPartnerRatingTrend]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerRating.BUSINESS_PARTNER_RATING_TREND = _fieldBuilder.buildEdmTypeField('BusinessPartnerRatingTrend', 'Edm.String', true);
    /**
     * Static representation of the [[bpRatingValidityStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerRating.BP_RATING_VALIDITY_START_DATE = _fieldBuilder.buildEdmTypeField('BPRatingValidityStartDate', 'Edm.DateTime', true);
    /**
     * Static representation of the [[bpRatingCreationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerRating.BP_RATING_CREATION_DATE = _fieldBuilder.buildEdmTypeField('BPRatingCreationDate', 'Edm.DateTime', true);
    /**
     * Static representation of the [[businessPartnerRatingComment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerRating.BUSINESS_PARTNER_RATING_COMMENT = _fieldBuilder.buildEdmTypeField('BusinessPartnerRatingComment', 'Edm.String', true);
    /**
     * Static representation of the [[businessPartnerRatingIsAllowed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerRating.BUSINESS_PARTNER_RATING_IS_ALLOWED = _fieldBuilder.buildEdmTypeField('BusinessPartnerRatingIsAllowed', 'Edm.Boolean', true);
    /**
     * Static representation of the [[bpRatingIsValidOnKeyDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerRating.BP_RATING_IS_VALID_ON_KEY_DATE = _fieldBuilder.buildEdmTypeField('BPRatingIsValidOnKeyDate', 'Edm.Boolean', true);
    /**
     * Static representation of the [[businessPartnerRatingKeyDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerRating.BUSINESS_PARTNER_RATING_KEY_DATE = _fieldBuilder.buildEdmTypeField('BusinessPartnerRatingKeyDate', 'Edm.DateTime', true);
    /**
     * Static representation of the [[businessPartnerRatingIsExpired]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerRating.BUSINESS_PARTNER_RATING_IS_EXPIRED = _fieldBuilder.buildEdmTypeField('BusinessPartnerRatingIsExpired', 'Edm.Boolean', true);
    /**
     * All fields of the BusinessPartnerRating entity.
     */
    BusinessPartnerRating._allFields = [
        BusinessPartnerRating.BUSINESS_PARTNER,
        BusinessPartnerRating.BUSINESS_PARTNER_RATING_PROCEDURE,
        BusinessPartnerRating.BP_RATING_VALIDITY_END_DATE,
        BusinessPartnerRating.BUSINESS_PARTNER_RATING_GRADE,
        BusinessPartnerRating.BUSINESS_PARTNER_RATING_TREND,
        BusinessPartnerRating.BP_RATING_VALIDITY_START_DATE,
        BusinessPartnerRating.BP_RATING_CREATION_DATE,
        BusinessPartnerRating.BUSINESS_PARTNER_RATING_COMMENT,
        BusinessPartnerRating.BUSINESS_PARTNER_RATING_IS_ALLOWED,
        BusinessPartnerRating.BP_RATING_IS_VALID_ON_KEY_DATE,
        BusinessPartnerRating.BUSINESS_PARTNER_RATING_KEY_DATE,
        BusinessPartnerRating.BUSINESS_PARTNER_RATING_IS_EXPIRED
    ];
    /**
     * All fields selector.
     */
    BusinessPartnerRating.ALL_FIELDS = new core_1.AllFields('*', BusinessPartnerRating);
    /**
     * All key fields of the BusinessPartnerRating entity.
     */
    BusinessPartnerRating._keyFields = [BusinessPartnerRating.BUSINESS_PARTNER, BusinessPartnerRating.BUSINESS_PARTNER_RATING_PROCEDURE, BusinessPartnerRating.BP_RATING_VALIDITY_END_DATE];
    /**
     * Mapping of all key field names to the respective static field property BusinessPartnerRating.
     */
    BusinessPartnerRating._keys = BusinessPartnerRating._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(BusinessPartnerRating = exports.BusinessPartnerRating || (exports.BusinessPartnerRating = {}));
exports.BusinessPartnerRating = BusinessPartnerRating;
//# sourceMappingURL=BusinessPartnerRating.js.map