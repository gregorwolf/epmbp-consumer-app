import { BuPaIndustryRequestBuilder } from './BuPaIndustryRequestBuilder';
import { AllFields, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "A_BuPaIndustry" of service "API_BUSINESS_PARTNER".
 */
export declare class BuPaIndustry extends EntityV2 implements BuPaIndustryType {
    /**
     * Technical entity name for BuPaIndustry.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Industry.
     * Maximum length: 10.
     */
    industrySector: string;
    /**
     * Industry System.
     * Maximum length: 4.
     */
    industrySystemType: string;
    /**
     * Business Partner Number.
     * Maximum length: 10.
     */
    businessPartner: string;
    /**
     * Industry is Standard for BP in Industry System.
     * Maximum length: 1.
     * @nullable
     */
    isStandardIndustry?: string;
    /**
     * Description.
     * Maximum length: 100.
     * @nullable
     */
    industryKeyDescription?: string;
    /**
     * Returns an entity builder to construct instances of `BuPaIndustry`.
     * @returns A builder that constructs instances of entity type `BuPaIndustry`.
     */
    static builder(): EntityBuilderType<BuPaIndustry, BuPaIndustryType>;
    /**
     * Returns a request builder to construct requests for operations on the `BuPaIndustry` entity type.
     * @returns A `BuPaIndustry` request builder.
     */
    static requestBuilder(): BuPaIndustryRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `BuPaIndustry`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `BuPaIndustry`.
     */
    static customField(fieldName: string): CustomFieldV2<BuPaIndustry>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface BuPaIndustryType {
    industrySector: string;
    industrySystemType: string;
    businessPartner: string;
    isStandardIndustry?: string | null;
    industryKeyDescription?: string | null;
}
export declare namespace BuPaIndustry {
    /**
     * Static representation of the [[industrySector]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INDUSTRY_SECTOR: EdmTypeField<BuPaIndustry, "Edm.String", false, true>;
    /**
     * Static representation of the [[industrySystemType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INDUSTRY_SYSTEM_TYPE: EdmTypeField<BuPaIndustry, "Edm.String", false, true>;
    /**
     * Static representation of the [[businessPartner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER: EdmTypeField<BuPaIndustry, "Edm.String", false, true>;
    /**
     * Static representation of the [[isStandardIndustry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_STANDARD_INDUSTRY: EdmTypeField<BuPaIndustry, "Edm.String", true, true>;
    /**
     * Static representation of the [[industryKeyDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INDUSTRY_KEY_DESCRIPTION: EdmTypeField<BuPaIndustry, "Edm.String", true, true>;
    /**
     * All fields of the BuPaIndustry entity.
     */
    const _allFields: Array<EdmTypeField<BuPaIndustry, 'Edm.String', false, true> | EdmTypeField<BuPaIndustry, 'Edm.String', true, true>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<BuPaIndustry>;
    /**
     * All key fields of the BuPaIndustry entity.
     */
    const _keyFields: Array<Field<BuPaIndustry, boolean, boolean>>;
    /**
     * Mapping of all key field names to the respective static field property BuPaIndustry.
     */
    const _keys: {
        [keys: string]: Field<BuPaIndustry, boolean, boolean>;
    };
}
//# sourceMappingURL=BuPaIndustry.d.ts.map