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
exports.BuPaIdentification = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var BuPaIdentificationRequestBuilder_1 = require("./BuPaIdentificationRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "A_BuPaIdentification" of service "API_BUSINESS_PARTNER".
 */
var BuPaIdentification = /** @class */ (function (_super) {
    __extends(BuPaIdentification, _super);
    function BuPaIdentification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `BuPaIdentification`.
     * @returns A builder that constructs instances of entity type `BuPaIdentification`.
     */
    BuPaIdentification.builder = function () {
        return core_1.Entity.entityBuilder(BuPaIdentification);
    };
    /**
     * Returns a request builder to construct requests for operations on the `BuPaIdentification` entity type.
     * @returns A `BuPaIdentification` request builder.
     */
    BuPaIdentification.requestBuilder = function () {
        return new BuPaIdentificationRequestBuilder_1.BuPaIdentificationRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `BuPaIdentification`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `BuPaIdentification`.
     */
    BuPaIdentification.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, BuPaIdentification);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    BuPaIdentification.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for BuPaIdentification.
     */
    BuPaIdentification._entityName = 'A_BuPaIdentification';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for BuPaIdentification.
     */
    BuPaIdentification._serviceName = 'API_BUSINESS_PARTNER';
    /**
     * Default url path for the according service.
     */
    BuPaIdentification._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
    return BuPaIdentification;
}(core_1.Entity));
exports.BuPaIdentification = BuPaIdentification;
(function (BuPaIdentification) {
    /**
     * Static representation of the [[businessPartner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BuPaIdentification.BUSINESS_PARTNER = new core_1.StringField('BusinessPartner', BuPaIdentification, 'Edm.String');
    /**
     * Static representation of the [[bpIdentificationType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BuPaIdentification.BP_IDENTIFICATION_TYPE = new core_1.StringField('BPIdentificationType', BuPaIdentification, 'Edm.String');
    /**
     * Static representation of the [[bpIdentificationNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BuPaIdentification.BP_IDENTIFICATION_NUMBER = new core_1.StringField('BPIdentificationNumber', BuPaIdentification, 'Edm.String');
    /**
     * Static representation of the [[bpIdnNmbrIssuingInstitute]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BuPaIdentification.BP_IDN_NMBR_ISSUING_INSTITUTE = new core_1.StringField('BPIdnNmbrIssuingInstitute', BuPaIdentification, 'Edm.String');
    /**
     * Static representation of the [[bpIdentificationEntryDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BuPaIdentification.BP_IDENTIFICATION_ENTRY_DATE = new core_1.DateField('BPIdentificationEntryDate', BuPaIdentification, 'Edm.DateTime');
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BuPaIdentification.COUNTRY = new core_1.StringField('Country', BuPaIdentification, 'Edm.String');
    /**
     * Static representation of the [[region]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BuPaIdentification.REGION = new core_1.StringField('Region', BuPaIdentification, 'Edm.String');
    /**
     * Static representation of the [[validityStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BuPaIdentification.VALIDITY_START_DATE = new core_1.DateField('ValidityStartDate', BuPaIdentification, 'Edm.DateTime');
    /**
     * Static representation of the [[validityEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BuPaIdentification.VALIDITY_END_DATE = new core_1.DateField('ValidityEndDate', BuPaIdentification, 'Edm.DateTime');
    /**
     * Static representation of the [[authorizationGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BuPaIdentification.AUTHORIZATION_GROUP = new core_1.StringField('AuthorizationGroup', BuPaIdentification, 'Edm.String');
    /**
     * All fields of the BuPaIdentification entity.
     */
    BuPaIdentification._allFields = [
        BuPaIdentification.BUSINESS_PARTNER,
        BuPaIdentification.BP_IDENTIFICATION_TYPE,
        BuPaIdentification.BP_IDENTIFICATION_NUMBER,
        BuPaIdentification.BP_IDN_NMBR_ISSUING_INSTITUTE,
        BuPaIdentification.BP_IDENTIFICATION_ENTRY_DATE,
        BuPaIdentification.COUNTRY,
        BuPaIdentification.REGION,
        BuPaIdentification.VALIDITY_START_DATE,
        BuPaIdentification.VALIDITY_END_DATE,
        BuPaIdentification.AUTHORIZATION_GROUP
    ];
    /**
     * All fields selector.
     */
    BuPaIdentification.ALL_FIELDS = new core_1.AllFields('*', BuPaIdentification);
    /**
     * All key fields of the BuPaIdentification entity.
     */
    BuPaIdentification._keyFields = [BuPaIdentification.BUSINESS_PARTNER, BuPaIdentification.BP_IDENTIFICATION_TYPE, BuPaIdentification.BP_IDENTIFICATION_NUMBER];
    /**
     * Mapping of all key field names to the respective static field property BuPaIdentification.
     */
    BuPaIdentification._keys = BuPaIdentification._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(BuPaIdentification = exports.BuPaIdentification || (exports.BuPaIdentification = {}));
exports.BuPaIdentification = BuPaIdentification;
//# sourceMappingURL=BuPaIdentification.js.map