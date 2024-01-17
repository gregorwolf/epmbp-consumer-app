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
exports.BpDataController = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var BpDataControllerRequestBuilder_1 = require("./BpDataControllerRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "A_BPDataController" of service "API_BUSINESS_PARTNER".
 */
var BpDataController = /** @class */ (function (_super) {
    __extends(BpDataController, _super);
    function BpDataController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `BpDataController`.
     * @returns A builder that constructs instances of entity type `BpDataController`.
     */
    BpDataController.builder = function () {
        return core_1.EntityV2.entityBuilder(BpDataController);
    };
    /**
     * Returns a request builder to construct requests for operations on the `BpDataController` entity type.
     * @returns A `BpDataController` request builder.
     */
    BpDataController.requestBuilder = function () {
        return new BpDataControllerRequestBuilder_1.BpDataControllerRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `BpDataController`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `BpDataController`.
     */
    BpDataController.customField = function (fieldName) {
        return core_1.EntityV2.customFieldSelector(fieldName, BpDataController);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    BpDataController.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for BpDataController.
     */
    BpDataController._entityName = 'A_BPDataController';
    /**
     * Default url path for the according service.
     */
    BpDataController._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
    return BpDataController;
}(core_1.EntityV2));
exports.BpDataController = BpDataController;
(function (BpDataController) {
    var _fieldBuilder = new core_1.FieldBuilder(BpDataController);
    /**
     * Static representation of the [[businessPartner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpDataController.BUSINESS_PARTNER = _fieldBuilder.buildEdmTypeField('BusinessPartner', 'Edm.String', false);
    /**
     * Static representation of the [[dataController]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpDataController.DATA_CONTROLLER = _fieldBuilder.buildEdmTypeField('DataController', 'Edm.String', false);
    /**
     * Static representation of the [[purposeForPersonalData]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpDataController.PURPOSE_FOR_PERSONAL_DATA = _fieldBuilder.buildEdmTypeField('PurposeForPersonalData', 'Edm.String', false);
    /**
     * Static representation of the [[dataControlAssignmentStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpDataController.DATA_CONTROL_ASSIGNMENT_STATUS = _fieldBuilder.buildEdmTypeField('DataControlAssignmentStatus', 'Edm.String', true);
    /**
     * Static representation of the [[bpDataControllerIsDerived]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpDataController.BP_DATA_CONTROLLER_IS_DERIVED = _fieldBuilder.buildEdmTypeField('BPDataControllerIsDerived', 'Edm.String', true);
    /**
     * Static representation of the [[purposeDerived]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpDataController.PURPOSE_DERIVED = _fieldBuilder.buildEdmTypeField('PurposeDerived', 'Edm.String', true);
    /**
     * Static representation of the [[purposeType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpDataController.PURPOSE_TYPE = _fieldBuilder.buildEdmTypeField('PurposeType', 'Edm.String', true);
    /**
     * Static representation of the [[businessPurposeFlag]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BpDataController.BUSINESS_PURPOSE_FLAG = _fieldBuilder.buildEdmTypeField('BusinessPurposeFlag', 'Edm.String', true);
    /**
     * All fields of the BpDataController entity.
     */
    BpDataController._allFields = [
        BpDataController.BUSINESS_PARTNER,
        BpDataController.DATA_CONTROLLER,
        BpDataController.PURPOSE_FOR_PERSONAL_DATA,
        BpDataController.DATA_CONTROL_ASSIGNMENT_STATUS,
        BpDataController.BP_DATA_CONTROLLER_IS_DERIVED,
        BpDataController.PURPOSE_DERIVED,
        BpDataController.PURPOSE_TYPE,
        BpDataController.BUSINESS_PURPOSE_FLAG
    ];
    /**
     * All fields selector.
     */
    BpDataController.ALL_FIELDS = new core_1.AllFields('*', BpDataController);
    /**
     * All key fields of the BpDataController entity.
     */
    BpDataController._keyFields = [BpDataController.BUSINESS_PARTNER, BpDataController.DATA_CONTROLLER, BpDataController.PURPOSE_FOR_PERSONAL_DATA];
    /**
     * Mapping of all key field names to the respective static field property BpDataController.
     */
    BpDataController._keys = BpDataController._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(BpDataController = exports.BpDataController || (exports.BpDataController = {}));
exports.BpDataController = BpDataController;
//# sourceMappingURL=BpDataController.js.map