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
exports.BpDataControllerRequestBuilder = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var BpDataController_1 = require("./BpDataController");
/**
 * Request builder class for operations supported on the [[BpDataController]] entity.
 */
var BpDataControllerRequestBuilder = /** @class */ (function (_super) {
    __extends(BpDataControllerRequestBuilder, _super);
    function BpDataControllerRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `BpDataController` entity based on its keys.
     * @param businessPartner Key property. See [[BpDataController.businessPartner]].
     * @param dataController Key property. See [[BpDataController.dataController]].
     * @param purposeForPersonalData Key property. See [[BpDataController.purposeForPersonalData]].
     * @returns A request builder for creating requests to retrieve one `BpDataController` entity based on its keys.
     */
    BpDataControllerRequestBuilder.prototype.getByKey = function (businessPartner, dataController, purposeForPersonalData) {
        return new core_1.GetByKeyRequestBuilderV2(BpDataController_1.BpDataController, {
            BusinessPartner: businessPartner,
            DataController: dataController,
            PurposeForPersonalData: purposeForPersonalData
        });
    };
    /**
     * Returns a request builder for querying all `BpDataController` entities.
     * @returns A request builder for creating requests to retrieve all `BpDataController` entities.
     */
    BpDataControllerRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV2(BpDataController_1.BpDataController);
    };
    /**
     * Returns a request builder for creating a `BpDataController` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BpDataController`.
     */
    BpDataControllerRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV2(BpDataController_1.BpDataController, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `BpDataController`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BpDataController`.
     */
    BpDataControllerRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV2(BpDataController_1.BpDataController, entity);
    };
    return BpDataControllerRequestBuilder;
}(core_1.RequestBuilder));
exports.BpDataControllerRequestBuilder = BpDataControllerRequestBuilder;
//# sourceMappingURL=BpDataControllerRequestBuilder.js.map