import { BuPaIdentificationRequestBuilder } from './BuPaIdentificationRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field, OrderableEdmTypeField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "A_BuPaIdentification" of service "API_BUSINESS_PARTNER".
 */
export declare class BuPaIdentification extends EntityV2 implements BuPaIdentificationType {
    /**
     * Technical entity name for BuPaIdentification.
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
     * Identification Type.
     * Maximum length: 6.
     */
    bpIdentificationType: string;
    /**
     * Identification Number.
     * Maximum length: 60.
     */
    bpIdentificationNumber: string;
    /**
     * Responsible Institution for ID Number.
     * Maximum length: 40.
     * @nullable
     */
    bpIdnNmbrIssuingInstitute?: string;
    /**
     * Date of Entry for ID Number.
     * @nullable
     */
    bpIdentificationEntryDate?: Moment;
    /**
     * Country/Region in Which ID Number is Valid or Was Assigned.
     * Maximum length: 3.
     * @nullable
     */
    country?: string;
    /**
     * Region (State, Province, County).
     * Maximum length: 3.
     * @nullable
     */
    region?: string;
    /**
     * Validity Start for ID Number.
     * @nullable
     */
    validityStartDate?: Moment;
    /**
     * Validity End for ID Number.
     * @nullable
     */
    validityEndDate?: Moment;
    /**
     * Authorization Group.
     * Maximum length: 4.
     * @nullable
     */
    authorizationGroup?: string;
    /**
     * Returns an entity builder to construct instances of `BuPaIdentification`.
     * @returns A builder that constructs instances of entity type `BuPaIdentification`.
     */
    static builder(): EntityBuilderType<BuPaIdentification, BuPaIdentificationType>;
    /**
     * Returns a request builder to construct requests for operations on the `BuPaIdentification` entity type.
     * @returns A `BuPaIdentification` request builder.
     */
    static requestBuilder(): BuPaIdentificationRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `BuPaIdentification`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `BuPaIdentification`.
     */
    static customField(fieldName: string): CustomFieldV2<BuPaIdentification>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface BuPaIdentificationType {
    businessPartner: string;
    bpIdentificationType: string;
    bpIdentificationNumber: string;
    bpIdnNmbrIssuingInstitute?: string | null;
    bpIdentificationEntryDate?: Moment | null;
    country?: string | null;
    region?: string | null;
    validityStartDate?: Moment | null;
    validityEndDate?: Moment | null;
    authorizationGroup?: string | null;
}
export declare namespace BuPaIdentification {
    /**
     * Static representation of the [[businessPartner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER: EdmTypeField<BuPaIdentification, "Edm.String", false, true>;
    /**
     * Static representation of the [[bpIdentificationType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_IDENTIFICATION_TYPE: EdmTypeField<BuPaIdentification, "Edm.String", false, true>;
    /**
     * Static representation of the [[bpIdentificationNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_IDENTIFICATION_NUMBER: EdmTypeField<BuPaIdentification, "Edm.String", false, true>;
    /**
     * Static representation of the [[bpIdnNmbrIssuingInstitute]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_IDN_NMBR_ISSUING_INSTITUTE: EdmTypeField<BuPaIdentification, "Edm.String", true, true>;
    /**
     * Static representation of the [[bpIdentificationEntryDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_IDENTIFICATION_ENTRY_DATE: OrderableEdmTypeField<BuPaIdentification, "Edm.DateTime", true, true>;
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY: EdmTypeField<BuPaIdentification, "Edm.String", true, true>;
    /**
     * Static representation of the [[region]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REGION: EdmTypeField<BuPaIdentification, "Edm.String", true, true>;
    /**
     * Static representation of the [[validityStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VALIDITY_START_DATE: OrderableEdmTypeField<BuPaIdentification, "Edm.DateTime", true, true>;
    /**
     * Static representation of the [[validityEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VALIDITY_END_DATE: OrderableEdmTypeField<BuPaIdentification, "Edm.DateTime", true, true>;
    /**
     * Static representation of the [[authorizationGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AUTHORIZATION_GROUP: EdmTypeField<BuPaIdentification, "Edm.String", true, true>;
    /**
     * All fields of the BuPaIdentification entity.
     */
    const _allFields: Array<EdmTypeField<BuPaIdentification, 'Edm.String', false, true> | EdmTypeField<BuPaIdentification, 'Edm.String', true, true> | OrderableEdmTypeField<BuPaIdentification, 'Edm.DateTime', true, true>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<BuPaIdentification>;
    /**
     * All key fields of the BuPaIdentification entity.
     */
    const _keyFields: Array<Field<BuPaIdentification, boolean, boolean>>;
    /**
     * Mapping of all key field names to the respective static field property BuPaIdentification.
     */
    const _keys: {
        [keys: string]: Field<BuPaIdentification, boolean, boolean>;
    };
}
//# sourceMappingURL=BuPaIdentification.d.ts.map