import { SlsPrcgCndnRecordScaleRequestBuilder } from './SlsPrcgCndnRecordScaleRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field, OneToOneLink, OrderableEdmTypeField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "A_SlsPrcgCndnRecordScale" of service "API_SLSPRICINGCONDITIONRECORD_SRV".
 */
export declare class SlsPrcgCndnRecordScale extends EntityV2 implements SlsPrcgCndnRecordScaleType {
    /**
     * Technical entity name for SlsPrcgCndnRecordScale.
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
     * Current number of the line scale.
     * Maximum length: 4.
     */
    conditionScaleLine: string;
    /**
     * Condition Scale Quantity.
     * @nullable
     */
    conditionScaleQuantity?: BigNumber;
    /**
     * Condition Scale Unit of Measure.
     * Maximum length: 3.
     * @nullable
     */
    conditionScaleQuantityUnit?: string;
    /**
     * Scale Value.
     * @nullable
     */
    conditionScaleAmount?: BigNumber;
    /**
     * Scale Currency.
     * Maximum length: 5.
     * @nullable
     */
    conditionScaleAmountCurrency?: string;
    /**
     * Condition Amount or Percentage.
     * @nullable
     */
    conditionRateValue?: BigNumber;
    /**
     * Condition Unit (Currency or Percentage).
     * Maximum length: 5.
     * @nullable
     */
    conditionRateValueUnit?: string;
    /**
     * Condition Ratio (in Percent or Per Mille).
     * @nullable
     */
    conditionRateRatio?: BigNumber;
    /**
     * Unit of Measure.
     * Maximum length: 3.
     * @nullable
     */
    conditionRateRatioUnit?: string;
    /**
     * Condition Amount or Percentage.
     * @nullable
     */
    conditionRateAmount?: BigNumber;
    /**
     * Condition Unit (Currency or Percentage).
     * Maximum length: 5.
     * @nullable
     */
    conditionCurrency?: string;
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
     * One-to-one navigation property to the [[SlsPrcgConditionRecord]] entity.
     */
    toSlsPrcgConditionRecord?: SlsPrcgConditionRecord | null;
    /**
     * Returns an entity builder to construct instances of `SlsPrcgCndnRecordScale`.
     * @returns A builder that constructs instances of entity type `SlsPrcgCndnRecordScale`.
     */
    static builder(): EntityBuilderType<SlsPrcgCndnRecordScale, SlsPrcgCndnRecordScaleType>;
    /**
     * Returns a request builder to construct requests for operations on the `SlsPrcgCndnRecordScale` entity type.
     * @returns A `SlsPrcgCndnRecordScale` request builder.
     */
    static requestBuilder(): SlsPrcgCndnRecordScaleRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SlsPrcgCndnRecordScale`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SlsPrcgCndnRecordScale`.
     */
    static customField(fieldName: string): CustomFieldV2<SlsPrcgCndnRecordScale>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { SlsPrcgCndnRecdSuplmnt, SlsPrcgCndnRecdSuplmntType } from './SlsPrcgCndnRecdSuplmnt';
import { SlsPrcgConditionRecord, SlsPrcgConditionRecordType } from './SlsPrcgConditionRecord';
export interface SlsPrcgCndnRecordScaleType {
    conditionRecord: string;
    conditionSequentialNumber: string;
    conditionScaleLine: string;
    conditionScaleQuantity?: BigNumber | null;
    conditionScaleQuantityUnit?: string | null;
    conditionScaleAmount?: BigNumber | null;
    conditionScaleAmountCurrency?: string | null;
    conditionRateValue?: BigNumber | null;
    conditionRateValueUnit?: string | null;
    conditionRateRatio?: BigNumber | null;
    conditionRateRatioUnit?: string | null;
    conditionRateAmount?: BigNumber | null;
    conditionCurrency?: string | null;
    eTag?: string | null;
    toSlsPrcgCndnRecdSuplmnt?: SlsPrcgCndnRecdSuplmntType | null;
    toSlsPrcgConditionRecord?: SlsPrcgConditionRecordType | null;
}
export declare namespace SlsPrcgCndnRecordScale {
    /**
     * Static representation of the [[conditionRecord]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONDITION_RECORD: EdmTypeField<SlsPrcgCndnRecordScale, "Edm.String", false, true>;
    /**
     * Static representation of the [[conditionSequentialNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONDITION_SEQUENTIAL_NUMBER: EdmTypeField<SlsPrcgCndnRecordScale, "Edm.String", false, true>;
    /**
     * Static representation of the [[conditionScaleLine]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONDITION_SCALE_LINE: EdmTypeField<SlsPrcgCndnRecordScale, "Edm.String", false, true>;
    /**
     * Static representation of the [[conditionScaleQuantity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONDITION_SCALE_QUANTITY: OrderableEdmTypeField<SlsPrcgCndnRecordScale, "Edm.Decimal", true, true>;
    /**
     * Static representation of the [[conditionScaleQuantityUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONDITION_SCALE_QUANTITY_UNIT: EdmTypeField<SlsPrcgCndnRecordScale, "Edm.String", true, true>;
    /**
     * Static representation of the [[conditionScaleAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONDITION_SCALE_AMOUNT: OrderableEdmTypeField<SlsPrcgCndnRecordScale, "Edm.Decimal", true, true>;
    /**
     * Static representation of the [[conditionScaleAmountCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONDITION_SCALE_AMOUNT_CURRENCY: EdmTypeField<SlsPrcgCndnRecordScale, "Edm.String", true, true>;
    /**
     * Static representation of the [[conditionRateValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONDITION_RATE_VALUE: OrderableEdmTypeField<SlsPrcgCndnRecordScale, "Edm.Decimal", true, true>;
    /**
     * Static representation of the [[conditionRateValueUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONDITION_RATE_VALUE_UNIT: EdmTypeField<SlsPrcgCndnRecordScale, "Edm.String", true, true>;
    /**
     * Static representation of the [[conditionRateRatio]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONDITION_RATE_RATIO: OrderableEdmTypeField<SlsPrcgCndnRecordScale, "Edm.Decimal", true, true>;
    /**
     * Static representation of the [[conditionRateRatioUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONDITION_RATE_RATIO_UNIT: EdmTypeField<SlsPrcgCndnRecordScale, "Edm.String", true, true>;
    /**
     * Static representation of the [[conditionRateAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONDITION_RATE_AMOUNT: OrderableEdmTypeField<SlsPrcgCndnRecordScale, "Edm.Decimal", true, true>;
    /**
     * Static representation of the [[conditionCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONDITION_CURRENCY: EdmTypeField<SlsPrcgCndnRecordScale, "Edm.String", true, true>;
    /**
     * Static representation of the [[eTag]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const E_TAG: EdmTypeField<SlsPrcgCndnRecordScale, "Edm.String", true, true>;
    /**
     * Static representation of the one-to-one navigation property [[toSlsPrcgCndnRecdSuplmnt]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_SLS_PRCG_CNDN_RECD_SUPLMNT: OneToOneLink<SlsPrcgCndnRecordScale, SlsPrcgCndnRecdSuplmnt>;
    /**
     * Static representation of the one-to-one navigation property [[toSlsPrcgConditionRecord]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_SLS_PRCG_CONDITION_RECORD: OneToOneLink<SlsPrcgCndnRecordScale, SlsPrcgConditionRecord>;
    /**
     * All fields of the SlsPrcgCndnRecordScale entity.
     */
    const _allFields: Array<EdmTypeField<SlsPrcgCndnRecordScale, 'Edm.String', false, true> | OrderableEdmTypeField<SlsPrcgCndnRecordScale, 'Edm.Decimal', true, true> | EdmTypeField<SlsPrcgCndnRecordScale, 'Edm.String', true, true> | OneToOneLink<SlsPrcgCndnRecordScale, SlsPrcgCndnRecdSuplmnt> | OneToOneLink<SlsPrcgCndnRecordScale, SlsPrcgConditionRecord>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<SlsPrcgCndnRecordScale>;
    /**
     * All key fields of the SlsPrcgCndnRecordScale entity.
     */
    const _keyFields: Array<Field<SlsPrcgCndnRecordScale, boolean, boolean>>;
    /**
     * Mapping of all key field names to the respective static field property SlsPrcgCndnRecordScale.
     */
    const _keys: {
        [keys: string]: Field<SlsPrcgCndnRecordScale, boolean, boolean>;
    };
}
//# sourceMappingURL=SlsPrcgCndnRecordScale.d.ts.map