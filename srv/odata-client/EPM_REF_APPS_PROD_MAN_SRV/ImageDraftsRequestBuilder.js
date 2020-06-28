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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageDraftsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var ImageDrafts_1 = require("./ImageDrafts");
/**
 * Request builder class for operations supported on the [[ImageDrafts]] entity.
 */
var ImageDraftsRequestBuilder = /** @class */ (function (_super) {
    __extends(ImageDraftsRequestBuilder, _super);
    function ImageDraftsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `ImageDrafts` entity based on its keys.
     * @param id Key property. See [[ImageDrafts.id]].
     * @returns A request builder for creating requests to retrieve one `ImageDrafts` entity based on its keys.
     */
    ImageDraftsRequestBuilder.prototype.getByKey = function (id) {
        return new core_1.GetByKeyRequestBuilder(ImageDrafts_1.ImageDrafts, { Id: id });
    };
    /**
     * Returns a request builder for querying all `ImageDrafts` entities.
     * @returns A request builder for creating requests to retrieve all `ImageDrafts` entities.
     */
    ImageDraftsRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(ImageDrafts_1.ImageDrafts);
    };
    /**
     * Returns a request builder for creating a `ImageDrafts` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ImageDrafts`.
     */
    ImageDraftsRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(ImageDrafts_1.ImageDrafts, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `ImageDrafts`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ImageDrafts`.
     */
    ImageDraftsRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(ImageDrafts_1.ImageDrafts, entity);
    };
    ImageDraftsRequestBuilder.prototype.delete = function (idOrEntity) {
        return new core_1.DeleteRequestBuilder(ImageDrafts_1.ImageDrafts, idOrEntity instanceof ImageDrafts_1.ImageDrafts ? idOrEntity : { Id: idOrEntity });
    };
    return ImageDraftsRequestBuilder;
}(core_1.RequestBuilder));
exports.ImageDraftsRequestBuilder = ImageDraftsRequestBuilder;
//# sourceMappingURL=ImageDraftsRequestBuilder.js.map