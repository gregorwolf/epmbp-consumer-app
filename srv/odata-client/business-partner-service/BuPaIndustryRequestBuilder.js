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
exports.BuPaIndustryRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var BuPaIndustry_1 = require("./BuPaIndustry");
/**
 * Request builder class for operations supported on the [[BuPaIndustry]] entity.
 */
var BuPaIndustryRequestBuilder = /** @class */ (function (_super) {
    __extends(BuPaIndustryRequestBuilder, _super);
    function BuPaIndustryRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `BuPaIndustry` entity based on its keys.
     * @param industrySector Key property. See [[BuPaIndustry.industrySector]].
     * @param industrySystemType Key property. See [[BuPaIndustry.industrySystemType]].
     * @param businessPartner Key property. See [[BuPaIndustry.businessPartner]].
     * @returns A request builder for creating requests to retrieve one `BuPaIndustry` entity based on its keys.
     */
    BuPaIndustryRequestBuilder.prototype.getByKey = function (industrySector, industrySystemType, businessPartner) {
        return new core_1.GetByKeyRequestBuilder(BuPaIndustry_1.BuPaIndustry, {
            IndustrySector: industrySector,
            IndustrySystemType: industrySystemType,
            BusinessPartner: businessPartner
        });
    };
    /**
     * Returns a request builder for querying all `BuPaIndustry` entities.
     * @returns A request builder for creating requests to retrieve all `BuPaIndustry` entities.
     */
    BuPaIndustryRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(BuPaIndustry_1.BuPaIndustry);
    };
    /**
     * Returns a request builder for creating a `BuPaIndustry` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BuPaIndustry`.
     */
    BuPaIndustryRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(BuPaIndustry_1.BuPaIndustry, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `BuPaIndustry`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BuPaIndustry`.
     */
    BuPaIndustryRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(BuPaIndustry_1.BuPaIndustry, entity);
    };
    BuPaIndustryRequestBuilder.prototype.delete = function (industrySectorOrEntity, industrySystemType, businessPartner) {
        return new core_1.DeleteRequestBuilder(BuPaIndustry_1.BuPaIndustry, industrySectorOrEntity instanceof BuPaIndustry_1.BuPaIndustry ? industrySectorOrEntity : {
            IndustrySector: industrySectorOrEntity,
            IndustrySystemType: industrySystemType,
            BusinessPartner: businessPartner
        });
    };
    return BuPaIndustryRequestBuilder;
}(core_1.RequestBuilder));
exports.BuPaIndustryRequestBuilder = BuPaIndustryRequestBuilder;
//# sourceMappingURL=BuPaIndustryRequestBuilder.js.map