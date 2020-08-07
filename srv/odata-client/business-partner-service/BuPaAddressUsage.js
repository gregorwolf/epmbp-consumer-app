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
exports.BuPaAddressUsage = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var BuPaAddressUsageRequestBuilder_1 = require("./BuPaAddressUsageRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "A_BuPaAddressUsage" of service "API_BUSINESS_PARTNER".
 */
var BuPaAddressUsage = /** @class */ (function (_super) {
    __extends(BuPaAddressUsage, _super);
    function BuPaAddressUsage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `BuPaAddressUsage`.
     * @returns A builder that constructs instances of entity type `BuPaAddressUsage`.
     */
    BuPaAddressUsage.builder = function () {
        return core_1.Entity.entityBuilder(BuPaAddressUsage);
    };
    /**
     * Returns a request builder to construct requests for operations on the `BuPaAddressUsage` entity type.
     * @returns A `BuPaAddressUsage` request builder.
     */
    BuPaAddressUsage.requestBuilder = function () {
        return new BuPaAddressUsageRequestBuilder_1.BuPaAddressUsageRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `BuPaAddressUsage`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `BuPaAddressUsage`.
     */
    BuPaAddressUsage.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, BuPaAddressUsage);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    BuPaAddressUsage.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for BuPaAddressUsage.
     */
    BuPaAddressUsage._entityName = 'A_BuPaAddressUsage';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for BuPaAddressUsage.
     */
    BuPaAddressUsage._serviceName = 'API_BUSINESS_PARTNER';
    /**
     * Default url path for the according service.
     */
    BuPaAddressUsage._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
    return BuPaAddressUsage;
}(core_1.Entity));
exports.BuPaAddressUsage = BuPaAddressUsage;
(function (BuPaAddressUsage) {
    /**
     * Static representation of the [[businessPartner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BuPaAddressUsage.BUSINESS_PARTNER = new core_1.StringField('BusinessPartner', BuPaAddressUsage, 'Edm.String');
    /**
     * Static representation of the [[validityEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BuPaAddressUsage.VALIDITY_END_DATE = new core_1.DateField('ValidityEndDate', BuPaAddressUsage, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[addressUsage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BuPaAddressUsage.ADDRESS_USAGE = new core_1.StringField('AddressUsage', BuPaAddressUsage, 'Edm.String');
    /**
     * Static representation of the [[addressId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BuPaAddressUsage.ADDRESS_ID = new core_1.StringField('AddressID', BuPaAddressUsage, 'Edm.String');
    /**
     * Static representation of the [[validityStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BuPaAddressUsage.VALIDITY_START_DATE = new core_1.DateField('ValidityStartDate', BuPaAddressUsage, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[standardUsage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BuPaAddressUsage.STANDARD_USAGE = new core_1.BooleanField('StandardUsage', BuPaAddressUsage, 'Edm.Boolean');
    /**
     * Static representation of the [[authorizationGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BuPaAddressUsage.AUTHORIZATION_GROUP = new core_1.StringField('AuthorizationGroup', BuPaAddressUsage, 'Edm.String');
    /**
     * All fields of the BuPaAddressUsage entity.
     */
    BuPaAddressUsage._allFields = [
        BuPaAddressUsage.BUSINESS_PARTNER,
        BuPaAddressUsage.VALIDITY_END_DATE,
        BuPaAddressUsage.ADDRESS_USAGE,
        BuPaAddressUsage.ADDRESS_ID,
        BuPaAddressUsage.VALIDITY_START_DATE,
        BuPaAddressUsage.STANDARD_USAGE,
        BuPaAddressUsage.AUTHORIZATION_GROUP
    ];
    /**
     * All fields selector.
     */
    BuPaAddressUsage.ALL_FIELDS = new core_1.AllFields('*', BuPaAddressUsage);
    /**
     * All key fields of the BuPaAddressUsage entity.
     */
    BuPaAddressUsage._keyFields = [BuPaAddressUsage.BUSINESS_PARTNER, BuPaAddressUsage.VALIDITY_END_DATE, BuPaAddressUsage.ADDRESS_USAGE, BuPaAddressUsage.ADDRESS_ID];
    /**
     * Mapping of all key field names to the respective static field property BuPaAddressUsage.
     */
    BuPaAddressUsage._keys = BuPaAddressUsage._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(BuPaAddressUsage = exports.BuPaAddressUsage || (exports.BuPaAddressUsage = {}));
exports.BuPaAddressUsage = BuPaAddressUsage;
//# sourceMappingURL=BuPaAddressUsage.js.map