import { BusPartAddrDepdntTaxNmbrRequestBuilder } from './BusPartAddrDepdntTaxNmbrRequestBuilder';
import { AllFields, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "A_BusPartAddrDepdntTaxNmbr" of service "API_BUSINESS_PARTNER".
 */
export declare class BusPartAddrDepdntTaxNmbr extends EntityV2 implements BusPartAddrDepdntTaxNmbrType {
    /**
     * Technical entity name for BusPartAddrDepdntTaxNmbr.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Business Partner Number.
     * Maximum length: 10.
     */
    businessPartner: string;
    /**
     * Address Number.
     * Maximum length: 10.
     */
    addressId: string;
    /**
     * Tax Number Category.
     * Maximum length: 4.
     */
    bpTaxType: string;
    /**
     * Business Partner Tax Number.
     * Maximum length: 20.
     * @nullable
     */
    bpTaxNumber?: string;
    /**
     * Business Partner Tax Number.
     * Maximum length: 60.
     * @nullable
     */
    bpTaxLongNumber?: string;
    /**
     * Authorization Group.
     * Maximum length: 4.
     * @nullable
     */
    authorizationGroup?: string;
    /**
     * Returns an entity builder to construct instances of `BusPartAddrDepdntTaxNmbr`.
     * @returns A builder that constructs instances of entity type `BusPartAddrDepdntTaxNmbr`.
     */
    static builder(): EntityBuilderType<BusPartAddrDepdntTaxNmbr, BusPartAddrDepdntTaxNmbrType>;
    /**
     * Returns a request builder to construct requests for operations on the `BusPartAddrDepdntTaxNmbr` entity type.
     * @returns A `BusPartAddrDepdntTaxNmbr` request builder.
     */
    static requestBuilder(): BusPartAddrDepdntTaxNmbrRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `BusPartAddrDepdntTaxNmbr`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `BusPartAddrDepdntTaxNmbr`.
     */
    static customField(fieldName: string): CustomFieldV2<BusPartAddrDepdntTaxNmbr>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface BusPartAddrDepdntTaxNmbrType {
    businessPartner: string;
    addressId: string;
    bpTaxType: string;
    bpTaxNumber?: string | null;
    bpTaxLongNumber?: string | null;
    authorizationGroup?: string | null;
}
export declare namespace BusPartAddrDepdntTaxNmbr {
    /**
     * Static representation of the [[businessPartner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER: EdmTypeField<BusPartAddrDepdntTaxNmbr, "Edm.String", false, true>;
    /**
     * Static representation of the [[addressId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_ID: EdmTypeField<BusPartAddrDepdntTaxNmbr, "Edm.String", false, true>;
    /**
     * Static representation of the [[bpTaxType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_TAX_TYPE: EdmTypeField<BusPartAddrDepdntTaxNmbr, "Edm.String", false, true>;
    /**
     * Static representation of the [[bpTaxNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_TAX_NUMBER: EdmTypeField<BusPartAddrDepdntTaxNmbr, "Edm.String", true, true>;
    /**
     * Static representation of the [[bpTaxLongNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_TAX_LONG_NUMBER: EdmTypeField<BusPartAddrDepdntTaxNmbr, "Edm.String", true, true>;
    /**
     * Static representation of the [[authorizationGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AUTHORIZATION_GROUP: EdmTypeField<BusPartAddrDepdntTaxNmbr, "Edm.String", true, true>;
    /**
     * All fields of the BusPartAddrDepdntTaxNmbr entity.
     */
    const _allFields: Array<EdmTypeField<BusPartAddrDepdntTaxNmbr, 'Edm.String', false, true> | EdmTypeField<BusPartAddrDepdntTaxNmbr, 'Edm.String', true, true>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<BusPartAddrDepdntTaxNmbr>;
    /**
     * All key fields of the BusPartAddrDepdntTaxNmbr entity.
     */
    const _keyFields: Array<Field<BusPartAddrDepdntTaxNmbr, boolean, boolean>>;
    /**
     * Mapping of all key field names to the respective static field property BusPartAddrDepdntTaxNmbr.
     */
    const _keys: {
        [keys: string]: Field<BusPartAddrDepdntTaxNmbr, boolean, boolean>;
    };
}
//# sourceMappingURL=BusPartAddrDepdntTaxNmbr.d.ts.map