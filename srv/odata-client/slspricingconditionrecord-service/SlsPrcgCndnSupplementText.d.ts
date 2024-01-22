import { SlsPrcgCndnSupplementTextRequestBuilder } from './SlsPrcgCndnSupplementTextRequestBuilder';
import { AllFields, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field, OneToOneLink } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "A_SlsPrcgCndnSupplementText" of service "API_SLSPRICINGCONDITIONRECORD_SRV".
 */
export declare class SlsPrcgCndnSupplementText extends EntityV2 implements SlsPrcgCndnSupplementTextType {
    /**
     * Technical entity name for SlsPrcgCndnSupplementText.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Number of Condition Record.
     * Maximum length: 10.
     */
    conditionRecord: string;
    /**
     * Sequential number of the condition.
     * Maximum length: 2.
     */
    conditionSequentialNumber: string;
    /**
     * Language Key.
     * Maximum length: 2.
     */
    language: string;
    /**
     * Description.
     * Maximum length: 40.
     * @nullable
     */
    conditionText?: string;
    /**
     * E Tag.
     * Maximum length: 40.
     * @nullable
     */
    eTag?: string;
    /**
     * One-to-one navigation property to the [[SlsPrcgCndnRecdSuplmnt]] entity.
     */
    toSlsPrcgCndnRecdSuplmnt?: SlsPrcgCndnRecdSuplmnt | null;
    /**
     * Returns an entity builder to construct instances of `SlsPrcgCndnSupplementText`.
     * @returns A builder that constructs instances of entity type `SlsPrcgCndnSupplementText`.
     */
    static builder(): EntityBuilderType<SlsPrcgCndnSupplementText, SlsPrcgCndnSupplementTextType>;
    /**
     * Returns a request builder to construct requests for operations on the `SlsPrcgCndnSupplementText` entity type.
     * @returns A `SlsPrcgCndnSupplementText` request builder.
     */
    static requestBuilder(): SlsPrcgCndnSupplementTextRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SlsPrcgCndnSupplementText`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SlsPrcgCndnSupplementText`.
     */
    static customField(fieldName: string): CustomFieldV2<SlsPrcgCndnSupplementText>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { SlsPrcgCndnRecdSuplmnt, SlsPrcgCndnRecdSuplmntType } from './SlsPrcgCndnRecdSuplmnt';
export interface SlsPrcgCndnSupplementTextType {
    conditionRecord: string;
    conditionSequentialNumber: string;
    language: string;
    conditionText?: string | null;
    eTag?: string | null;
    toSlsPrcgCndnRecdSuplmnt?: SlsPrcgCndnRecdSuplmntType | null;
}
export declare namespace SlsPrcgCndnSupplementText {
    /**
     * Static representation of the [[conditionRecord]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONDITION_RECORD: EdmTypeField<SlsPrcgCndnSupplementText, "Edm.String", false, true>;
    /**
     * Static representation of the [[conditionSequentialNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONDITION_SEQUENTIAL_NUMBER: EdmTypeField<SlsPrcgCndnSupplementText, "Edm.String", false, true>;
    /**
     * Static representation of the [[language]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LANGUAGE: EdmTypeField<SlsPrcgCndnSupplementText, "Edm.String", false, true>;
    /**
     * Static representation of the [[conditionText]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONDITION_TEXT: EdmTypeField<SlsPrcgCndnSupplementText, "Edm.String", true, true>;
    /**
     * Static representation of the [[eTag]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const E_TAG: EdmTypeField<SlsPrcgCndnSupplementText, "Edm.String", true, true>;
    /**
     * Static representation of the one-to-one navigation property [[toSlsPrcgCndnRecdSuplmnt]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_SLS_PRCG_CNDN_RECD_SUPLMNT: OneToOneLink<SlsPrcgCndnSupplementText, SlsPrcgCndnRecdSuplmnt>;
    /**
     * All fields of the SlsPrcgCndnSupplementText entity.
     */
    const _allFields: Array<EdmTypeField<SlsPrcgCndnSupplementText, 'Edm.String', false, true> | EdmTypeField<SlsPrcgCndnSupplementText, 'Edm.String', true, true> | OneToOneLink<SlsPrcgCndnSupplementText, SlsPrcgCndnRecdSuplmnt>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<SlsPrcgCndnSupplementText>;
    /**
     * All key fields of the SlsPrcgCndnSupplementText entity.
     */
    const _keyFields: Array<Field<SlsPrcgCndnSupplementText, boolean, boolean>>;
    /**
     * Mapping of all key field names to the respective static field property SlsPrcgCndnSupplementText.
     */
    const _keys: {
        [keys: string]: Field<SlsPrcgCndnSupplementText, boolean, boolean>;
    };
}
//# sourceMappingURL=SlsPrcgCndnSupplementText.d.ts.map