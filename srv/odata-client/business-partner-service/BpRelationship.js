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
exports.BpRelationship = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var BpRelationshipRequestBuilder_1 = require("./BpRelationshipRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "A_BPRelationship" of service "API_BUSINESS_PARTNER".
 */
var BpRelationship = /** @class */ (function (_super) {
    __extends(BpRelationship, _super);
    function BpRelationship() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `BpRelationship`.
     * @returns A builder that constructs instances of entity type `BpRelationship`.
     */
    BpRelationship.builder = function () {
        return core_1.EntityV2.entityBuilder(BpRelationship);
    };
    /**
     * Returns a request builder to construct requests for operations on the `BpRelationship` entity type.
     * @returns A `BpRelationship` request builder.
     */
    BpRelationship.requestBuilder = function () {
        return new BpRelationshipRequestBuilder_1.BpRelationshipRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `BpRelationship`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `BpRelationship`.
     */
    BpRelationship.customField = function (fieldName) {
        return core_1.EntityV2.customFieldSelector(fieldName, BpRelationship);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    BpRelationship.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for BpRelationship.
     */
    BpRelationship._entityName = 'A_BPRelationship';
    /**
     * Default url path for the according service.
     */
    BpRelationship._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
    return BpRelationship;
}(core_1.EntityV2));
exports.BpRelationship = BpRelationship;
(function (BpRelationship) {
    var _fieldBuilder = new core_1.FieldBuilder(BpRelationship);
    /**
     * Static representation of the [[relationshipNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpRelationship.RELATIONSHIP_NUMBER = _fieldBuilder.buildEdmTypeField('RelationshipNumber', 'Edm.String', false);
    /**
     * Static representation of the [[businessPartner1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpRelationship.BUSINESS_PARTNER_1 = _fieldBuilder.buildEdmTypeField('BusinessPartner1', 'Edm.String', false);
    /**
     * Static representation of the [[businessPartner2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpRelationship.BUSINESS_PARTNER_2 = _fieldBuilder.buildEdmTypeField('BusinessPartner2', 'Edm.String', false);
    /**
     * Static representation of the [[validityEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpRelationship.VALIDITY_END_DATE = _fieldBuilder.buildEdmTypeField('ValidityEndDate', 'Edm.DateTime', false);
    /**
     * Static representation of the [[validityStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpRelationship.VALIDITY_START_DATE = _fieldBuilder.buildEdmTypeField('ValidityStartDate', 'Edm.DateTime', true);
    /**
     * Static representation of the [[isStandardRelationship]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpRelationship.IS_STANDARD_RELATIONSHIP = _fieldBuilder.buildEdmTypeField('IsStandardRelationship', 'Edm.Boolean', true);
    /**
     * Static representation of the [[relationshipCategory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpRelationship.RELATIONSHIP_CATEGORY = _fieldBuilder.buildEdmTypeField('RelationshipCategory', 'Edm.String', true);
    /**
     * Static representation of the [[bpRelationshipType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpRelationship.BP_RELATIONSHIP_TYPE = _fieldBuilder.buildEdmTypeField('BPRelationshipType', 'Edm.String', true);
    /**
     * Static representation of the [[createdByUser]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpRelationship.CREATED_BY_USER = _fieldBuilder.buildEdmTypeField('CreatedByUser', 'Edm.String', true);
    /**
     * Static representation of the [[creationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpRelationship.CREATION_DATE = _fieldBuilder.buildEdmTypeField('CreationDate', 'Edm.DateTime', true);
    /**
     * Static representation of the [[creationTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpRelationship.CREATION_TIME = _fieldBuilder.buildEdmTypeField('CreationTime', 'Edm.Time', true);
    /**
     * Static representation of the [[lastChangedByUser]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpRelationship.LAST_CHANGED_BY_USER = _fieldBuilder.buildEdmTypeField('LastChangedByUser', 'Edm.String', true);
    /**
     * Static representation of the [[lastChangeDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpRelationship.LAST_CHANGE_DATE = _fieldBuilder.buildEdmTypeField('LastChangeDate', 'Edm.DateTime', true);
    /**
     * Static representation of the [[lastChangeTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpRelationship.LAST_CHANGE_TIME = _fieldBuilder.buildEdmTypeField('LastChangeTime', 'Edm.Time', true);
    /**
     * All fields of the BpRelationship entity.
     */
    BpRelationship._allFields = [
        BpRelationship.RELATIONSHIP_NUMBER,
        BpRelationship.BUSINESS_PARTNER_1,
        BpRelationship.BUSINESS_PARTNER_2,
        BpRelationship.VALIDITY_END_DATE,
        BpRelationship.VALIDITY_START_DATE,
        BpRelationship.IS_STANDARD_RELATIONSHIP,
        BpRelationship.RELATIONSHIP_CATEGORY,
        BpRelationship.BP_RELATIONSHIP_TYPE,
        BpRelationship.CREATED_BY_USER,
        BpRelationship.CREATION_DATE,
        BpRelationship.CREATION_TIME,
        BpRelationship.LAST_CHANGED_BY_USER,
        BpRelationship.LAST_CHANGE_DATE,
        BpRelationship.LAST_CHANGE_TIME
    ];
    /**
     * All fields selector.
     */
    BpRelationship.ALL_FIELDS = new core_1.AllFields('*', BpRelationship);
    /**
     * All key fields of the BpRelationship entity.
     */
    BpRelationship._keyFields = [BpRelationship.RELATIONSHIP_NUMBER, BpRelationship.BUSINESS_PARTNER_1, BpRelationship.BUSINESS_PARTNER_2, BpRelationship.VALIDITY_END_DATE];
    /**
     * Mapping of all key field names to the respective static field property BpRelationship.
     */
    BpRelationship._keys = BpRelationship._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(BpRelationship = exports.BpRelationship || (exports.BpRelationship = {}));
exports.BpRelationship = BpRelationship;
//# sourceMappingURL=BpRelationship.js.map