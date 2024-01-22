import { SlsPrcgConditionRecordTextRequestBuilder } from './SlsPrcgConditionRecordTextRequestBuilder';
import { AllFields, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field, OneToOneLink } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "A_SlsPrcgConditionRecordText" of service "API_SLSPRICINGCONDITIONRECORD_SRV".
 */
export declare class SlsPrcgConditionRecordText extends EntityV2 implements SlsPrcgConditionRecordTextType {
    /**
     * Technical entity name for SlsPrcgConditionRecordText.
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
     * One-to-one navigation property to the [[SlsPrcgConditionRecord]] entity.
     */
    toSlsPrcgConditionRecord?: SlsPrcgConditionRecord | null;
    /**
     * Returns an entity builder to construct instances of `SlsPrcgConditionRecordText`.
     * @returns A builder that constructs instances of entity type `SlsPrcgConditionRecordText`.
     */
    static builder(): EntityBuilderType<SlsPrcgConditionRecordText, SlsPrcgConditionRecordTextType>;
    /**
     * Returns a request builder to construct requests for operations on the `SlsPrcgConditionRecordText` entity type.
     * @returns A `SlsPrcgConditionRecordText` request builder.
     */
    static requestBuilder(): SlsPrcgConditionRecordTextRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SlsPrcgConditionRecordText`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SlsPrcgConditionRecordText`.
     */
    static customField(fieldName: string): CustomFieldV2<SlsPrcgConditionRecordText>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { SlsPrcgConditionRecord, SlsPrcgConditionRecordType } from './SlsPrcgConditionRecord';
export interface SlsPrcgConditionRecordTextType {
    conditionRecord: string;
    conditionSequentialNumber: string;
    language: string;
    conditionText?: string | null;
    eTag?: string | null;
    toSlsPrcgConditionRecord?: SlsPrcgConditionRecordType | null;
}
export declare namespace SlsPrcgConditionRecordText {
    /**
     * Static representation of the [[conditionRecord]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONDITION_RECORD: EdmTypeField<SlsPrcgConditionRecordText, "Edm.String", false, true>;
    /**
     * Static representation of the [[conditionSequentialNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONDITION_SEQUENTIAL_NUMBER: EdmTypeField<SlsPrcgConditionRecordText, "Edm.String", false, true>;
    /**
     * Static representation of the [[language]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LANGUAGE: EdmTypeField<SlsPrcgConditionRecordText, "Edm.String", false, true>;
    /**
     * Static representation of the [[conditionText]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONDITION_TEXT: EdmTypeField<SlsPrcgConditionRecordText, "Edm.String", true, true>;
    /**
     * Static representation of the [[eTag]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const E_TAG: EdmTypeField<SlsPrcgConditionRecordText, "Edm.String", true, true>;
    /**
     * Static representation of the one-to-one navigation property [[toSlsPrcgConditionRecord]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_SLS_PRCG_CONDITION_RECORD: OneToOneLink<SlsPrcgConditionRecordText, SlsPrcgConditionRecord>;
    /**
     * All fields of the SlsPrcgConditionRecordText entity.
     */
    const _allFields: Array<EdmTypeField<SlsPrcgConditionRecordText, 'Edm.String', false, true> | EdmTypeField<SlsPrcgConditionRecordText, 'Edm.String', true, true> | OneToOneLink<SlsPrcgConditionRecordText, SlsPrcgConditionRecord>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<SlsPrcgConditionRecordText>;
    /**
     * All key fields of the SlsPrcgConditionRecordText entity.
     */
    const _keyFields: Array<Field<SlsPrcgConditionRecordText, boolean, boolean>>;
    /**
     * Mapping of all key field names to the respective static field property SlsPrcgConditionRecordText.
     */
    const _keys: {
        [keys: string]: Field<SlsPrcgConditionRecordText, boolean, boolean>;
    };
}
//# sourceMappingURL=SlsPrcgConditionRecordText.d.ts.map