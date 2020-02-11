"use strict";
/*!
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 */
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
var EpmBusinessPartnerSetRequestBuilder_1 = require("./EpmBusinessPartnerSetRequestBuilder");
var cloud_sdk_core_1 = require("@sap/cloud-sdk-core");
/**
 * This class represents the entity "EPMBusinessPartnerSet" of service "ZEPM_BP_SRV".
 */
var EpmBusinessPartnerSet = /** @class */ (function (_super) {
    __extends(EpmBusinessPartnerSet, _super);
    function EpmBusinessPartnerSet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `EpmBusinessPartnerSet`.
     * @returns A builder that constructs instances of entity type `EpmBusinessPartnerSet`.
     */
    EpmBusinessPartnerSet.builder = function () {
        return cloud_sdk_core_1.Entity.entityBuilder(EpmBusinessPartnerSet);
    };
    /**
     * Returns a request builder to construct requests for operations on the `EpmBusinessPartnerSet` entity type.
     * @returns A `EpmBusinessPartnerSet` request builder.
     */
    EpmBusinessPartnerSet.requestBuilder = function () {
        return new EpmBusinessPartnerSetRequestBuilder_1.EpmBusinessPartnerSetRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EpmBusinessPartnerSet`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EpmBusinessPartnerSet`.
     */
    EpmBusinessPartnerSet.customField = function (fieldName) {
        return cloud_sdk_core_1.Entity.customFieldSelector(fieldName, EpmBusinessPartnerSet);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    EpmBusinessPartnerSet.prototype.toJSON = function () {
        return __assign({}, this, this._customFields);
    };
    /**
     * Technical entity name for EpmBusinessPartnerSet.
     */
    EpmBusinessPartnerSet._entityName = 'EPMBusinessPartnerSet';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EpmBusinessPartnerSet.
     */
    EpmBusinessPartnerSet._serviceName = 'ZEPM_BP_SRV';
    /**
     * Default url path for the according service.
     */
    EpmBusinessPartnerSet._defaultServicePath = '/sap/opu/odata/sap/ZEPM_BP_SRV';
    return EpmBusinessPartnerSet;
}(cloud_sdk_core_1.Entity));
exports.EpmBusinessPartnerSet = EpmBusinessPartnerSet;
(function (EpmBusinessPartnerSet) {
    /**
     * Static representation of the [[bpId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EpmBusinessPartnerSet.BP_ID = new cloud_sdk_core_1.StringField('BpId', EpmBusinessPartnerSet, 'Edm.String');
    /**
     * Static representation of the [[bpRole]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EpmBusinessPartnerSet.BP_ROLE = new cloud_sdk_core_1.StringField('BpRole', EpmBusinessPartnerSet, 'Edm.String');
    /**
     * Static representation of the [[emailAddress]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EpmBusinessPartnerSet.EMAIL_ADDRESS = new cloud_sdk_core_1.StringField('EmailAddress', EpmBusinessPartnerSet, 'Edm.String');
    /**
     * Static representation of the [[phoneNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EpmBusinessPartnerSet.PHONE_NUMBER = new cloud_sdk_core_1.StringField('PhoneNumber', EpmBusinessPartnerSet, 'Edm.String');
    /**
     * Static representation of the [[faxNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EpmBusinessPartnerSet.FAX_NUMBER = new cloud_sdk_core_1.StringField('FaxNumber', EpmBusinessPartnerSet, 'Edm.String');
    /**
     * Static representation of the [[webAddress]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EpmBusinessPartnerSet.WEB_ADDRESS = new cloud_sdk_core_1.StringField('WebAddress', EpmBusinessPartnerSet, 'Edm.String');
    /**
     * Static representation of the [[companyName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EpmBusinessPartnerSet.COMPANY_NAME = new cloud_sdk_core_1.StringField('CompanyName', EpmBusinessPartnerSet, 'Edm.String');
    /**
     * Static representation of the [[legalForm]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EpmBusinessPartnerSet.LEGAL_FORM = new cloud_sdk_core_1.StringField('LegalForm', EpmBusinessPartnerSet, 'Edm.String');
    /**
     * Static representation of the [[currencyCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EpmBusinessPartnerSet.CURRENCY_CODE = new cloud_sdk_core_1.StringField('CurrencyCode', EpmBusinessPartnerSet, 'Edm.String');
    /**
     * Static representation of the [[city]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EpmBusinessPartnerSet.CITY = new cloud_sdk_core_1.StringField('City', EpmBusinessPartnerSet, 'Edm.String');
    /**
     * Static representation of the [[postalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EpmBusinessPartnerSet.POSTAL_CODE = new cloud_sdk_core_1.StringField('PostalCode', EpmBusinessPartnerSet, 'Edm.String');
    /**
     * Static representation of the [[street]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EpmBusinessPartnerSet.STREET = new cloud_sdk_core_1.StringField('Street', EpmBusinessPartnerSet, 'Edm.String');
    /**
     * Static representation of the [[building]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EpmBusinessPartnerSet.BUILDING = new cloud_sdk_core_1.StringField('Building', EpmBusinessPartnerSet, 'Edm.String');
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EpmBusinessPartnerSet.COUNTRY = new cloud_sdk_core_1.StringField('Country', EpmBusinessPartnerSet, 'Edm.String');
    /**
     * Static representation of the [[addressType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EpmBusinessPartnerSet.ADDRESS_TYPE = new cloud_sdk_core_1.StringField('AddressType', EpmBusinessPartnerSet, 'Edm.String');
    /**
     * Static representation of the [[addressValStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EpmBusinessPartnerSet.ADDRESS_VAL_START_DATE = new cloud_sdk_core_1.DateField('AddressValStartDate', EpmBusinessPartnerSet, 'Edm.DateTime');
    /**
     * Static representation of the [[addressValEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EpmBusinessPartnerSet.ADDRESS_VAL_END_DATE = new cloud_sdk_core_1.DateField('AddressValEndDate', EpmBusinessPartnerSet, 'Edm.DateTime');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EpmBusinessPartnerSet.CREATED_BY = new cloud_sdk_core_1.StringField('CreatedBy', EpmBusinessPartnerSet, 'Edm.String');
    /**
     * Static representation of the [[createdAt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EpmBusinessPartnerSet.CREATED_AT = new cloud_sdk_core_1.DateField('CreatedAt', EpmBusinessPartnerSet, 'Edm.DateTime');
    /**
     * Static representation of the [[changedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EpmBusinessPartnerSet.CHANGED_BY = new cloud_sdk_core_1.StringField('ChangedBy', EpmBusinessPartnerSet, 'Edm.String');
    /**
     * Static representation of the [[changedAt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EpmBusinessPartnerSet.CHANGED_AT = new cloud_sdk_core_1.DateField('ChangedAt', EpmBusinessPartnerSet, 'Edm.DateTime');
    /**
     * All fields of the EpmBusinessPartnerSet entity.
     */
    EpmBusinessPartnerSet._allFields = [
        EpmBusinessPartnerSet.BP_ID,
        EpmBusinessPartnerSet.BP_ROLE,
        EpmBusinessPartnerSet.EMAIL_ADDRESS,
        EpmBusinessPartnerSet.PHONE_NUMBER,
        EpmBusinessPartnerSet.FAX_NUMBER,
        EpmBusinessPartnerSet.WEB_ADDRESS,
        EpmBusinessPartnerSet.COMPANY_NAME,
        EpmBusinessPartnerSet.LEGAL_FORM,
        EpmBusinessPartnerSet.CURRENCY_CODE,
        EpmBusinessPartnerSet.CITY,
        EpmBusinessPartnerSet.POSTAL_CODE,
        EpmBusinessPartnerSet.STREET,
        EpmBusinessPartnerSet.BUILDING,
        EpmBusinessPartnerSet.COUNTRY,
        EpmBusinessPartnerSet.ADDRESS_TYPE,
        EpmBusinessPartnerSet.ADDRESS_VAL_START_DATE,
        EpmBusinessPartnerSet.ADDRESS_VAL_END_DATE,
        EpmBusinessPartnerSet.CREATED_BY,
        EpmBusinessPartnerSet.CREATED_AT,
        EpmBusinessPartnerSet.CHANGED_BY,
        EpmBusinessPartnerSet.CHANGED_AT
    ];
    /**
     * All fields selector.
     */
    EpmBusinessPartnerSet.ALL_FIELDS = new cloud_sdk_core_1.AllFields('*', EpmBusinessPartnerSet);
    /**
     * All key fields of the EpmBusinessPartnerSet entity.
     */
    EpmBusinessPartnerSet._keyFields = [EpmBusinessPartnerSet.BP_ID];
    /**
     * Mapping of all key field names to the respective static field property EpmBusinessPartnerSet.
     */
    EpmBusinessPartnerSet._keys = EpmBusinessPartnerSet._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(EpmBusinessPartnerSet = exports.EpmBusinessPartnerSet || (exports.EpmBusinessPartnerSet = {}));
exports.EpmBusinessPartnerSet = EpmBusinessPartnerSet;
//# sourceMappingURL=EpmBusinessPartnerSet.js.map