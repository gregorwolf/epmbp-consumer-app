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
exports.SupplierDunning = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var SupplierDunningRequestBuilder_1 = require("./SupplierDunningRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "A_SupplierDunning" of service "API_BUSINESS_PARTNER".
 */
var SupplierDunning = /** @class */ (function (_super) {
    __extends(SupplierDunning, _super);
    function SupplierDunning() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `SupplierDunning`.
     * @returns A builder that constructs instances of entity type `SupplierDunning`.
     */
    SupplierDunning.builder = function () {
        return core_1.Entity.entityBuilder(SupplierDunning);
    };
    /**
     * Returns a request builder to construct requests for operations on the `SupplierDunning` entity type.
     * @returns A `SupplierDunning` request builder.
     */
    SupplierDunning.requestBuilder = function () {
        return new SupplierDunningRequestBuilder_1.SupplierDunningRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SupplierDunning`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SupplierDunning`.
     */
    SupplierDunning.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, SupplierDunning);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    SupplierDunning.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for SupplierDunning.
     */
    SupplierDunning._entityName = 'A_SupplierDunning';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for SupplierDunning.
     */
    SupplierDunning._serviceName = 'API_BUSINESS_PARTNER';
    /**
     * Default url path for the according service.
     */
    SupplierDunning._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
    return SupplierDunning;
}(core_1.Entity));
exports.SupplierDunning = SupplierDunning;
(function (SupplierDunning) {
    /**
     * Static representation of the [[supplier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierDunning.SUPPLIER = new core_1.StringField('Supplier', SupplierDunning, 'Edm.String');
    /**
     * Static representation of the [[companyCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierDunning.COMPANY_CODE = new core_1.StringField('CompanyCode', SupplierDunning, 'Edm.String');
    /**
     * Static representation of the [[dunningArea]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierDunning.DUNNING_AREA = new core_1.StringField('DunningArea', SupplierDunning, 'Edm.String');
    /**
     * Static representation of the [[dunningBlock]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierDunning.DUNNING_BLOCK = new core_1.StringField('DunningBlock', SupplierDunning, 'Edm.String');
    /**
     * Static representation of the [[dunningLevel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierDunning.DUNNING_LEVEL = new core_1.StringField('DunningLevel', SupplierDunning, 'Edm.String');
    /**
     * Static representation of the [[dunningProcedure]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierDunning.DUNNING_PROCEDURE = new core_1.StringField('DunningProcedure', SupplierDunning, 'Edm.String');
    /**
     * Static representation of the [[dunningRecipient]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierDunning.DUNNING_RECIPIENT = new core_1.StringField('DunningRecipient', SupplierDunning, 'Edm.String');
    /**
     * Static representation of the [[lastDunnedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierDunning.LAST_DUNNED_ON = new core_1.DateField('LastDunnedOn', SupplierDunning, 'Edm.DateTime');
    /**
     * Static representation of the [[legDunningProcedureOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierDunning.LEG_DUNNING_PROCEDURE_ON = new core_1.DateField('LegDunningProcedureOn', SupplierDunning, 'Edm.DateTime');
    /**
     * Static representation of the [[dunningClerk]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierDunning.DUNNING_CLERK = new core_1.StringField('DunningClerk', SupplierDunning, 'Edm.String');
    /**
     * Static representation of the [[authorizationGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierDunning.AUTHORIZATION_GROUP = new core_1.StringField('AuthorizationGroup', SupplierDunning, 'Edm.String');
    /**
     * Static representation of the [[supplierAccountGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SupplierDunning.SUPPLIER_ACCOUNT_GROUP = new core_1.StringField('SupplierAccountGroup', SupplierDunning, 'Edm.String');
    /**
     * All fields of the SupplierDunning entity.
     */
    SupplierDunning._allFields = [
        SupplierDunning.SUPPLIER,
        SupplierDunning.COMPANY_CODE,
        SupplierDunning.DUNNING_AREA,
        SupplierDunning.DUNNING_BLOCK,
        SupplierDunning.DUNNING_LEVEL,
        SupplierDunning.DUNNING_PROCEDURE,
        SupplierDunning.DUNNING_RECIPIENT,
        SupplierDunning.LAST_DUNNED_ON,
        SupplierDunning.LEG_DUNNING_PROCEDURE_ON,
        SupplierDunning.DUNNING_CLERK,
        SupplierDunning.AUTHORIZATION_GROUP,
        SupplierDunning.SUPPLIER_ACCOUNT_GROUP
    ];
    /**
     * All fields selector.
     */
    SupplierDunning.ALL_FIELDS = new core_1.AllFields('*', SupplierDunning);
    /**
     * All key fields of the SupplierDunning entity.
     */
    SupplierDunning._keyFields = [SupplierDunning.SUPPLIER, SupplierDunning.COMPANY_CODE, SupplierDunning.DUNNING_AREA];
    /**
     * Mapping of all key field names to the respective static field property SupplierDunning.
     */
    SupplierDunning._keys = SupplierDunning._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(SupplierDunning = exports.SupplierDunning || (exports.SupplierDunning = {}));
exports.SupplierDunning = SupplierDunning;
//# sourceMappingURL=SupplierDunning.js.map