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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuPaIdentificationRequestBuilder = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var BuPaIdentification_1 = require("./BuPaIdentification");
/**
 * Request builder class for operations supported on the [[BuPaIdentification]] entity.
 */
var BuPaIdentificationRequestBuilder = /** @class */ (function (_super) {
    __extends(BuPaIdentificationRequestBuilder, _super);
    function BuPaIdentificationRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `BuPaIdentification` entity based on its keys.
     * @param businessPartner Key property. See [[BuPaIdentification.businessPartner]].
     * @param bpIdentificationType Key property. See [[BuPaIdentification.bpIdentificationType]].
     * @param bpIdentificationNumber Key property. See [[BuPaIdentification.bpIdentificationNumber]].
     * @returns A request builder for creating requests to retrieve one `BuPaIdentification` entity based on its keys.
     */
    BuPaIdentificationRequestBuilder.prototype.getByKey = function (businessPartner, bpIdentificationType, bpIdentificationNumber) {
        return new core_1.GetByKeyRequestBuilderV2(BuPaIdentification_1.BuPaIdentification, {
            BusinessPartner: businessPartner,
            BPIdentificationType: bpIdentificationType,
            BPIdentificationNumber: bpIdentificationNumber
        });
    };
    /**
     * Returns a request builder for querying all `BuPaIdentification` entities.
     * @returns A request builder for creating requests to retrieve all `BuPaIdentification` entities.
     */
    BuPaIdentificationRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV2(BuPaIdentification_1.BuPaIdentification);
    };
    /**
     * Returns a request builder for creating a `BuPaIdentification` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BuPaIdentification`.
     */
    BuPaIdentificationRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV2(BuPaIdentification_1.BuPaIdentification, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `BuPaIdentification`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BuPaIdentification`.
     */
    BuPaIdentificationRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV2(BuPaIdentification_1.BuPaIdentification, entity);
    };
    BuPaIdentificationRequestBuilder.prototype.delete = function (businessPartnerOrEntity, bpIdentificationType, bpIdentificationNumber) {
        return new core_1.DeleteRequestBuilderV2(BuPaIdentification_1.BuPaIdentification, businessPartnerOrEntity instanceof BuPaIdentification_1.BuPaIdentification ? businessPartnerOrEntity : {
            BusinessPartner: businessPartnerOrEntity,
            BPIdentificationType: bpIdentificationType,
            BPIdentificationNumber: bpIdentificationNumber
        });
    };
    return BuPaIdentificationRequestBuilder;
}(core_1.RequestBuilder));
exports.BuPaIdentificationRequestBuilder = BuPaIdentificationRequestBuilder;
//# sourceMappingURL=BuPaIdentificationRequestBuilder.js.map