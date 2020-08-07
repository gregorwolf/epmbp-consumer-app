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
exports.CustomerDunning = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var CustomerDunningRequestBuilder_1 = require("./CustomerDunningRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "A_CustomerDunning" of service "API_BUSINESS_PARTNER".
 */
var CustomerDunning = /** @class */ (function (_super) {
    __extends(CustomerDunning, _super);
    function CustomerDunning() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `CustomerDunning`.
     * @returns A builder that constructs instances of entity type `CustomerDunning`.
     */
    CustomerDunning.builder = function () {
        return core_1.Entity.entityBuilder(CustomerDunning);
    };
    /**
     * Returns a request builder to construct requests for operations on the `CustomerDunning` entity type.
     * @returns A `CustomerDunning` request builder.
     */
    CustomerDunning.requestBuilder = function () {
        return new CustomerDunningRequestBuilder_1.CustomerDunningRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CustomerDunning`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CustomerDunning`.
     */
    CustomerDunning.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, CustomerDunning);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    CustomerDunning.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for CustomerDunning.
     */
    CustomerDunning._entityName = 'A_CustomerDunning';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for CustomerDunning.
     */
    CustomerDunning._serviceName = 'API_BUSINESS_PARTNER';
    /**
     * Default url path for the according service.
     */
    CustomerDunning._defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
    return CustomerDunning;
}(core_1.Entity));
exports.CustomerDunning = CustomerDunning;
(function (CustomerDunning) {
    /**
     * Static representation of the [[customer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerDunning.CUSTOMER = new core_1.StringField('Customer', CustomerDunning, 'Edm.String');
    /**
     * Static representation of the [[companyCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerDunning.COMPANY_CODE = new core_1.StringField('CompanyCode', CustomerDunning, 'Edm.String');
    /**
     * Static representation of the [[dunningArea]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerDunning.DUNNING_AREA = new core_1.StringField('DunningArea', CustomerDunning, 'Edm.String');
    /**
     * Static representation of the [[dunningBlock]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerDunning.DUNNING_BLOCK = new core_1.StringField('DunningBlock', CustomerDunning, 'Edm.String');
    /**
     * Static representation of the [[dunningLevel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerDunning.DUNNING_LEVEL = new core_1.StringField('DunningLevel', CustomerDunning, 'Edm.String');
    /**
     * Static representation of the [[dunningProcedure]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerDunning.DUNNING_PROCEDURE = new core_1.StringField('DunningProcedure', CustomerDunning, 'Edm.String');
    /**
     * Static representation of the [[dunningRecipient]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerDunning.DUNNING_RECIPIENT = new core_1.StringField('DunningRecipient', CustomerDunning, 'Edm.String');
    /**
     * Static representation of the [[lastDunnedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerDunning.LAST_DUNNED_ON = new core_1.DateField('LastDunnedOn', CustomerDunning, 'Edm.DateTime');
    /**
     * Static representation of the [[legDunningProcedureOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerDunning.LEG_DUNNING_PROCEDURE_ON = new core_1.DateField('LegDunningProcedureOn', CustomerDunning, 'Edm.DateTime');
    /**
     * Static representation of the [[dunningClerk]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerDunning.DUNNING_CLERK = new core_1.StringField('DunningClerk', CustomerDunning, 'Edm.String');
    /**
     * Static representation of the [[authorizationGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerDunning.AUTHORIZATION_GROUP = new core_1.StringField('AuthorizationGroup', CustomerDunning, 'Edm.String');
    /**
     * Static representation of the [[customerAccountGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerDunning.CUSTOMER_ACCOUNT_GROUP = new core_1.StringField('CustomerAccountGroup', CustomerDunning, 'Edm.String');
    /**
     * All fields of the CustomerDunning entity.
     */
    CustomerDunning._allFields = [
        CustomerDunning.CUSTOMER,
        CustomerDunning.COMPANY_CODE,
        CustomerDunning.DUNNING_AREA,
        CustomerDunning.DUNNING_BLOCK,
        CustomerDunning.DUNNING_LEVEL,
        CustomerDunning.DUNNING_PROCEDURE,
        CustomerDunning.DUNNING_RECIPIENT,
        CustomerDunning.LAST_DUNNED_ON,
        CustomerDunning.LEG_DUNNING_PROCEDURE_ON,
        CustomerDunning.DUNNING_CLERK,
        CustomerDunning.AUTHORIZATION_GROUP,
        CustomerDunning.CUSTOMER_ACCOUNT_GROUP
    ];
    /**
     * All fields selector.
     */
    CustomerDunning.ALL_FIELDS = new core_1.AllFields('*', CustomerDunning);
    /**
     * All key fields of the CustomerDunning entity.
     */
    CustomerDunning._keyFields = [CustomerDunning.CUSTOMER, CustomerDunning.COMPANY_CODE, CustomerDunning.DUNNING_AREA];
    /**
     * Mapping of all key field names to the respective static field property CustomerDunning.
     */
    CustomerDunning._keys = CustomerDunning._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(CustomerDunning = exports.CustomerDunning || (exports.CustomerDunning = {}));
exports.CustomerDunning = CustomerDunning;
//# sourceMappingURL=CustomerDunning.js.map