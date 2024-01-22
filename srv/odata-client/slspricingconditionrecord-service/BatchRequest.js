"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultSlspricingconditionrecordServicePath = exports.changeset = exports.batch = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var util_1 = require("@sap-cloud-sdk/util");
var index_1 = require("./index");
function batch(first) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    return new core_1.ODataBatchRequestBuilderV2(exports.defaultSlspricingconditionrecordServicePath, (0, util_1.variadicArgumentToArray)(first, rest), map);
}
exports.batch = batch;
function changeset(first) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    return new core_1.ODataBatchChangeSetV2((0, util_1.variadicArgumentToArray)(first, rest));
}
exports.changeset = changeset;
exports.defaultSlspricingconditionrecordServicePath = '/sap/opu/odata/sap/API_SLSPRICINGCONDITIONRECORD_SRV';
var map = { 'A_SlsPrcgCndnRecdSuplmnt': index_1.SlsPrcgCndnRecdSuplmnt, 'A_SlsPrcgCndnRecdValidity': index_1.SlsPrcgCndnRecdValidity, 'A_SlsPrcgCndnRecordScale': index_1.SlsPrcgCndnRecordScale, 'A_SlsPrcgCndnSupplementText': index_1.SlsPrcgCndnSupplementText, 'A_SlsPrcgConditionRecord': index_1.SlsPrcgConditionRecord, 'A_SlsPrcgConditionRecordText': index_1.SlsPrcgConditionRecordText };
//# sourceMappingURL=BatchRequest.js.map