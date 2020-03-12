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
/*!
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var cloud_sdk_core_1 = require("@sap/cloud-sdk-core");
var EpmBusinessPartnerSet_1 = require("./EpmBusinessPartnerSet");
/**
 * Request builder class for operations supported on the [[EpmBusinessPartnerSet]] entity.
 */
var EpmBusinessPartnerSetRequestBuilder = /** @class */ (function (_super) {
    __extends(EpmBusinessPartnerSetRequestBuilder, _super);
    function EpmBusinessPartnerSetRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `EpmBusinessPartnerSet` entity based on its keys.
     * @param bpId Key property. See [[EpmBusinessPartnerSet.bpId]].
     * @returns A request builder for creating requests to retrieve one `EpmBusinessPartnerSet` entity based on its keys.
     */
    EpmBusinessPartnerSetRequestBuilder.prototype.getByKey = function (bpId) {
        return new cloud_sdk_core_1.GetByKeyRequestBuilder(EpmBusinessPartnerSet_1.EpmBusinessPartnerSet, { BpId: bpId });
    };
    /**
     * Returns a request builder for querying all `EpmBusinessPartnerSet` entities.
     * @returns A request builder for creating requests to retrieve all `EpmBusinessPartnerSet` entities.
     */
    EpmBusinessPartnerSetRequestBuilder.prototype.getAll = function () {
        return new cloud_sdk_core_1.GetAllRequestBuilder(EpmBusinessPartnerSet_1.EpmBusinessPartnerSet);
    };
    return EpmBusinessPartnerSetRequestBuilder;
}(cloud_sdk_core_1.RequestBuilder));
exports.EpmBusinessPartnerSetRequestBuilder = EpmBusinessPartnerSetRequestBuilder;
//# sourceMappingURL=EpmBusinessPartnerSetRequestBuilder.js.map