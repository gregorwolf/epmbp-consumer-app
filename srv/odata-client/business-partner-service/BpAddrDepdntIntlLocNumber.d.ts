import { BpAddrDepdntIntlLocNumberRequestBuilder } from './BpAddrDepdntIntlLocNumberRequestBuilder';
import { AllFields, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "A_BPAddrDepdntIntlLocNumber" of service "API_BUSINESS_PARTNER".
 */
export declare class BpAddrDepdntIntlLocNumber extends EntityV2 implements BpAddrDepdntIntlLocNumberType {
    /**
     * Technical entity name for BpAddrDepdntIntlLocNumber.
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
     * International location number  (part 1).
     * Maximum length: 7.
     * @nullable
     */
    internationalLocationNumber1?: string;
    /**
     * International location number (Part 2).
     * Maximum length: 5.
     * @nullable
     */
    internationalLocationNumber2?: string;
    /**
     * Check digit for the international location number.
     * Maximum length: 1.
     * @nullable
     */
    internationalLocationNumber3?: string;
    /**
     * Returns an entity builder to construct instances of `BpAddrDepdntIntlLocNumber`.
     * @returns A builder that constructs instances of entity type `BpAddrDepdntIntlLocNumber`.
     */
    static builder(): EntityBuilderType<BpAddrDepdntIntlLocNumber, BpAddrDepdntIntlLocNumberType>;
    /**
     * Returns a request builder to construct requests for operations on the `BpAddrDepdntIntlLocNumber` entity type.
     * @returns A `BpAddrDepdntIntlLocNumber` request builder.
     */
    static requestBuilder(): BpAddrDepdntIntlLocNumberRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `BpAddrDepdntIntlLocNumber`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `BpAddrDepdntIntlLocNumber`.
     */
    static customField(fieldName: string): CustomFieldV2<BpAddrDepdntIntlLocNumber>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface BpAddrDepdntIntlLocNumberType {
    businessPartner: string;
    addressId: string;
    internationalLocationNumber1?: string | null;
    internationalLocationNumber2?: string | null;
    internationalLocationNumber3?: string | null;
}
export declare namespace BpAddrDepdntIntlLocNumber {
    /**
     * Static representation of the [[businessPartner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER: EdmTypeField<BpAddrDepdntIntlLocNumber, "Edm.String", false, true>;
    /**
     * Static representation of the [[addressId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_ID: EdmTypeField<BpAddrDepdntIntlLocNumber, "Edm.String", false, true>;
    /**
     * Static representation of the [[internationalLocationNumber1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INTERNATIONAL_LOCATION_NUMBER_1: EdmTypeField<BpAddrDepdntIntlLocNumber, "Edm.String", true, true>;
    /**
     * Static representation of the [[internationalLocationNumber2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INTERNATIONAL_LOCATION_NUMBER_2: EdmTypeField<BpAddrDepdntIntlLocNumber, "Edm.String", true, true>;
    /**
     * Static representation of the [[internationalLocationNumber3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INTERNATIONAL_LOCATION_NUMBER_3: EdmTypeField<BpAddrDepdntIntlLocNumber, "Edm.String", true, true>;
    /**
     * All fields of the BpAddrDepdntIntlLocNumber entity.
     */
    const _allFields: Array<EdmTypeField<BpAddrDepdntIntlLocNumber, 'Edm.String', false, true> | EdmTypeField<BpAddrDepdntIntlLocNumber, 'Edm.String', true, true>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<BpAddrDepdntIntlLocNumber>;
    /**
     * All key fields of the BpAddrDepdntIntlLocNumber entity.
     */
    const _keyFields: Array<Field<BpAddrDepdntIntlLocNumber, boolean, boolean>>;
    /**
     * Mapping of all key field names to the respective static field property BpAddrDepdntIntlLocNumber.
     */
    const _keys: {
        [keys: string]: Field<BpAddrDepdntIntlLocNumber, boolean, boolean>;
    };
}
//# sourceMappingURL=BpAddrDepdntIntlLocNumber.d.ts.map