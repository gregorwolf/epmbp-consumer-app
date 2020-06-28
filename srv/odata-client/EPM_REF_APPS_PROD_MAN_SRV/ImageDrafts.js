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
exports.ImageDrafts = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var ImageDraftsRequestBuilder_1 = require("./ImageDraftsRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "ImageDrafts" of service "EPM_REF_APPS_PROD_MAN_SRV".
 */
var ImageDrafts = /** @class */ (function (_super) {
    __extends(ImageDrafts, _super);
    function ImageDrafts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `ImageDrafts`.
     * @returns A builder that constructs instances of entity type `ImageDrafts`.
     */
    ImageDrafts.builder = function () {
        return core_1.Entity.entityBuilder(ImageDrafts);
    };
    /**
     * Returns a request builder to construct requests for operations on the `ImageDrafts` entity type.
     * @returns A `ImageDrafts` request builder.
     */
    ImageDrafts.requestBuilder = function () {
        return new ImageDraftsRequestBuilder_1.ImageDraftsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ImageDrafts`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ImageDrafts`.
     */
    ImageDrafts.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, ImageDrafts);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    ImageDrafts.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for ImageDrafts.
     */
    ImageDrafts._entityName = 'ImageDrafts';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for ImageDrafts.
     */
    ImageDrafts._serviceName = 'EPM_REF_APPS_PROD_MAN_SRV';
    /**
     * Default url path for the according service.
     */
    ImageDrafts._defaultServicePath = '/sap/opu/odata/sap/EPM_REF_APPS_PROD_MAN_SRV';
    return ImageDrafts;
}(core_1.Entity));
exports.ImageDrafts = ImageDrafts;
(function (ImageDrafts) {
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ImageDrafts.CREATED_BY = new core_1.StringField('CreatedBy', ImageDrafts, 'Edm.String');
    /**
     * Static representation of the [[fileName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ImageDrafts.FILE_NAME = new core_1.StringField('FileName', ImageDrafts, 'Edm.String');
    /**
     * Static representation of the [[id]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ImageDrafts.ID = new core_1.StringField('Id', ImageDrafts, 'Edm.Guid');
    /**
     * Static representation of the [[isDeletable]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ImageDrafts.IS_DELETABLE = new core_1.BooleanField('IsDeletable', ImageDrafts, 'Edm.Boolean');
    /**
     * Static representation of the [[isModifiable]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ImageDrafts.IS_MODIFIABLE = new core_1.BooleanField('IsModifiable', ImageDrafts, 'Edm.Boolean');
    /**
     * Static representation of the [[lastModified]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ImageDrafts.LAST_MODIFIED = new core_1.DateField('LastModified', ImageDrafts, 'Edm.DateTime');
    /**
     * Static representation of the [[productId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ImageDrafts.PRODUCT_ID = new core_1.StringField('ProductId', ImageDrafts, 'Edm.String');
    /**
     * Static representation of the [[mimeType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ImageDrafts.MIME_TYPE = new core_1.StringField('MimeType', ImageDrafts, 'Edm.String');
    /**
     * Static representation of the [[createdAt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ImageDrafts.CREATED_AT = new core_1.DateField('CreatedAt', ImageDrafts, 'Edm.DateTime');
    /**
     * All fields of the ImageDrafts entity.
     */
    ImageDrafts._allFields = [
        ImageDrafts.CREATED_BY,
        ImageDrafts.FILE_NAME,
        ImageDrafts.ID,
        ImageDrafts.IS_DELETABLE,
        ImageDrafts.IS_MODIFIABLE,
        ImageDrafts.LAST_MODIFIED,
        ImageDrafts.PRODUCT_ID,
        ImageDrafts.MIME_TYPE,
        ImageDrafts.CREATED_AT
    ];
    /**
     * All fields selector.
     */
    ImageDrafts.ALL_FIELDS = new core_1.AllFields('*', ImageDrafts);
    /**
     * All key fields of the ImageDrafts entity.
     */
    ImageDrafts._keyFields = [ImageDrafts.ID];
    /**
     * Mapping of all key field names to the respective static field property ImageDrafts.
     */
    ImageDrafts._keys = ImageDrafts._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(ImageDrafts = exports.ImageDrafts || (exports.ImageDrafts = {}));
exports.ImageDrafts = ImageDrafts;
//# sourceMappingURL=ImageDrafts.js.map