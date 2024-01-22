import { SlsPrcgCndnRecdSuplmntRequestBuilder } from './SlsPrcgCndnRecdSuplmntRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field, Link, OneToOneLink, OrderableEdmTypeField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "A_SlsPrcgCndnRecdSuplmnt" of service "API_SLSPRICINGCONDITIONRECORD_SRV".
 */
export declare class SlsPrcgCndnRecdSuplmnt extends EntityV2 implements SlsPrcgCndnRecdSuplmntType {
    /**
     * Technical entity name for SlsPrcgCndnRecdSuplmnt.
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
     * Condition Table.
     * Maximum length: 3.
     * @nullable
     */
    conditionTable?: string;
    /**
     * Application.
     * Maximum length: 2.
     * @nullable
     */
    conditionApplication?: string;
    /**
     * Condition Type.
     * Maximum length: 4.
     * @nullable
     */
    conditionType?: string;
    /**
     * Valid To Date.
     * @nullable
     */
    conditionValidityEndDate?: Moment;
    /**
     * Valid-From Date.
     * @nullable
     */
    conditionValidityStartDate?: Moment;
    /**
     * Name of Person Responsible for Creating the Object.
     * Maximum length: 12.
     * @nullable
     */
    createdByUser?: string;
    /**
     * Record Created On.
     * @nullable
     */
    creationDate?: Moment;
    /**
     * Number of texts.
     * Maximum length: 10.
     * @nullable
     */
    conditionTextId?: string;
    /**
     * Scale Type.
     * Maximum length: 1.
     * @nullable
     */
    pricingScaleType?: string;
    /**
     * Scale Base Type.
     * Maximum length: 1.
     * @nullable
     */
    pricingScaleBasis?: string;
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
     * Calculation Type for Condition.
     * Maximum length: 1.
     * @nullable
     */
    conditionCalculationType?: string;
    /**
     * Condition amount or percentage where no scale exists.
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
     * Condition Pricing Unit.
     * @nullable
     */
    conditionQuantity?: BigNumber;
    /**
     * Condition Unit.
     * Maximum length: 3.
     * @nullable
     */
    conditionQuantityUnit?: string;
    /**
     * Numerator for converting condition units to base units.
     * @nullable
     */
    conditionToBaseQtyNmrtr?: BigNumber;
    /**
     * Denominator for converting condition units to base units.
     * @nullable
     */
    conditionToBaseQtyDnmntr?: BigNumber;
    /**
     * Base Unit of Measure.
     * Maximum length: 3.
     * @nullable
     */
    baseUnit?: string;
    /**
     * Lower limit of the condition rate/amount.
     * @nullable
     */
    conditionLowerLimit?: BigNumber;
    /**
     * Condition Amount or Percentage.
     * @nullable
     */
    conditionLowerLimitAmount?: BigNumber;
    /**
     * Condition Ratio (in Percent or Per Mille).
     * @nullable
     */
    conditionLowerLimitRatio?: BigNumber;
    /**
     * Upper limit for the condition rate.
     * @nullable
     */
    conditionUpperLimit?: BigNumber;
    /**
     * Condition Amount or Percentage.
     * @nullable
     */
    conditionUpperLimitAmount?: BigNumber;
    /**
     * Condition Ratio (in Percent or Per Mille).
     * @nullable
     */
    conditionUpperLimitRatio?: BigNumber;
    /**
     * Condition Currency (for Cumulation Fields).
     * Maximum length: 5.
     * @nullable
     */
    conditionAlternativeCurrency?: string;
    /**
     * Condition exclusion indicator.
     * Maximum length: 1.
     * @nullable
     */
    conditionExclusion?: string;
    /**
     * Deletion Indicator for Condition Record.
     * @nullable
     */
    conditionIsDeleted?: boolean;
    /**
     * Additional Value Days.
     * Maximum length: 2.
     * @nullable
     */
    additionalValueDays?: string;
    /**
     * Fixed Value Date.
     * @nullable
     */
    fixedValueDate?: Moment;
    /**
     * Key for Terms of Payment.
     * Maximum length: 4.
     * @nullable
     */
    paymentTerms?: string;
    /**
     * Maximum number of sales orders per condition record.
     * Maximum length: 2.
     * @nullable
     */
    cndnMaxNumberOfSalesOrders?: string;
    /**
     * Minimum condition base value.
     * @nullable
     */
    minimumConditionBasisValue?: BigNumber;
    /**
     * Maximum condition base value.
     * @nullable
     */
    maximumConditionBasisValue?: BigNumber;
    /**
     * Maximum condition value.
     * @nullable
     */
    maximumConditionAmount?: BigNumber;
    /**
     * Number of incremental scale.
     * Maximum length: 4.
     * @nullable
     */
    incrementalScale?: string;
    /**
     * Scale number for pricing.
     * Maximum length: 4.
     * @nullable
     */
    pricingScaleLine?: string;
    /**
     * Release Status.
     * Maximum length: 1.
     * @nullable
     */
    conditionReleaseStatus?: string;
    /**
     * Approval Request for Price Conditions.
     * Maximum length: 10.
     * @nullable
     */
    salesPriceApprovalRequest?: string;
    /**
     * Reason for Changing Condition Record.
     * Maximum length: 3.
     * @nullable
     */
    conditionChangeReason?: string;
    /**
     * Previously Approved Condition Record.
     * Maximum length: 10.
     * @nullable
     */
    prevApprovedConditionRecord?: string;
    /**
     * E Tag.
     * Maximum length: 40.
     * @nullable
     */
    eTag?: string;
    /**
     * One-to-many navigation property to the [[SlsPrcgCndnRecdValidity]] entity.
     */
    toSlsPrcgCndnRecdValidity: SlsPrcgCndnRecdValidity[];
    /**
     * One-to-many navigation property to the [[SlsPrcgCndnRecordScale]] entity.
     */
    toSlsPrcgCndnRecordScale: SlsPrcgCndnRecordScale[];
    /**
     * One-to-many navigation property to the [[SlsPrcgCndnSupplementText]] entity.
     */
    toSlsPrcgCndnSupplementText: SlsPrcgCndnSupplementText[];
    /**
     * One-to-one navigation property to the [[SlsPrcgConditionRecord]] entity.
     */
    toSlsPrcgConditionRecord?: SlsPrcgConditionRecord | null;
    /**
     * Returns an entity builder to construct instances of `SlsPrcgCndnRecdSuplmnt`.
     * @returns A builder that constructs instances of entity type `SlsPrcgCndnRecdSuplmnt`.
     */
    static builder(): EntityBuilderType<SlsPrcgCndnRecdSuplmnt, SlsPrcgCndnRecdSuplmntType>;
    /**
     * Returns a request builder to construct requests for operations on the `SlsPrcgCndnRecdSuplmnt` entity type.
     * @returns A `SlsPrcgCndnRecdSuplmnt` request builder.
     */
    static requestBuilder(): SlsPrcgCndnRecdSuplmntRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SlsPrcgCndnRecdSuplmnt`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SlsPrcgCndnRecdSuplmnt`.
     */
    static customField(fieldName: string): CustomFieldV2<SlsPrcgCndnRecdSuplmnt>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { SlsPrcgCndnRecdValidity, SlsPrcgCndnRecdValidityType } from './SlsPrcgCndnRecdValidity';
import { SlsPrcgCndnRecordScale, SlsPrcgCndnRecordScaleType } from './SlsPrcgCndnRecordScale';
import { SlsPrcgCndnSupplementText, SlsPrcgCndnSupplementTextType } from './SlsPrcgCndnSupplementText';
import { SlsPrcgConditionRecord, SlsPrcgConditionRecordType } from './SlsPrcgConditionRecord';
export interface SlsPrcgCndnRecdSuplmntType {
    conditionRecord: string;
    conditionSequentialNumber: string;
    conditionTable?: string | null;
    conditionApplication?: string | null;
    conditionType?: string | null;
    conditionValidityEndDate?: Moment | null;
    conditionValidityStartDate?: Moment | null;
    createdByUser?: string | null;
    creationDate?: Moment | null;
    conditionTextId?: string | null;
    pricingScaleType?: string | null;
    pricingScaleBasis?: string | null;
    conditionScaleQuantity?: BigNumber | null;
    conditionScaleQuantityUnit?: string | null;
    conditionScaleAmount?: BigNumber | null;
    conditionScaleAmountCurrency?: string | null;
    conditionCalculationType?: string | null;
    conditionRateValue?: BigNumber | null;
    conditionRateValueUnit?: string | null;
    conditionRateRatio?: BigNumber | null;
    conditionRateRatioUnit?: string | null;
    conditionRateAmount?: BigNumber | null;
    conditionCurrency?: string | null;
    conditionQuantity?: BigNumber | null;
    conditionQuantityUnit?: string | null;
    conditionToBaseQtyNmrtr?: BigNumber | null;
    conditionToBaseQtyDnmntr?: BigNumber | null;
    baseUnit?: string | null;
    conditionLowerLimit?: BigNumber | null;
    conditionLowerLimitAmount?: BigNumber | null;
    conditionLowerLimitRatio?: BigNumber | null;
    conditionUpperLimit?: BigNumber | null;
    conditionUpperLimitAmount?: BigNumber | null;
    conditionUpperLimitRatio?: BigNumber | null;
    conditionAlternativeCurrency?: string | null;
    conditionExclusion?: string | null;
    conditionIsDeleted?: boolean | null;
    additionalValueDays?: string | null;
    fixedValueDate?: Moment | null;
    paymentTerms?: string | null;
    cndnMaxNumberOfSalesOrders?: string | null;
    minimumConditionBasisValue?: BigNumber | null;
    maximumConditionBasisValue?: BigNumber | null;
    maximumConditionAmount?: BigNumber | null;
    incrementalScale?: string | null;
    pricingScaleLine?: string | null;
    conditionReleaseStatus?: string | null;
    salesPriceApprovalRequest?: string | null;
    conditionChangeReason?: string | null;
    prevApprovedConditionRecord?: string | null;
    eTag?: string | null;
    toSlsPrcgCndnRecdValidity: SlsPrcgCndnRecdValidityType[];
    toSlsPrcgCndnRecordScale: SlsPrcgCndnRecordScaleType[];
    toSlsPrcgCndnSupplementText: SlsPrcgCndnSupplementTextType[];
    toSlsPrcgConditionRecord?: SlsPrcgConditionRecordType | null;
}
export declare namespace SlsPrcgCndnRecdSuplmnt {
    /**
     * Static representation of the [[conditionRecord]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONDITION_RECORD: EdmTypeField<SlsPrcgCndnRecdSuplmnt, "Edm.String", false, true>;
    /**
     * Static representation of the [[conditionSequentialNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONDITION_SEQUENTIAL_NUMBER: EdmTypeField<SlsPrcgCndnRecdSuplmnt, "Edm.String", false, true>;
    /**
     * Static representation of the [[conditionTable]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONDITION_TABLE: EdmTypeField<SlsPrcgCndnRecdSuplmnt, "Edm.String", true, true>;
    /**
     * Static representation of the [[conditionApplication]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONDITION_APPLICATION: EdmTypeField<SlsPrcgCndnRecdSuplmnt, "Edm.String", true, true>;
    /**
     * Static representation of the [[conditionType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONDITION_TYPE: EdmTypeField<SlsPrcgCndnRecdSuplmnt, "Edm.String", true, true>;
    /**
     * Static representation of the [[conditionValidityEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONDITION_VALIDITY_END_DATE: OrderableEdmTypeField<SlsPrcgCndnRecdSuplmnt, "Edm.DateTime", true, true>;
    /**
     * Static representation of the [[conditionValidityStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONDITION_VALIDITY_START_DATE: OrderableEdmTypeField<SlsPrcgCndnRecdSuplmnt, "Edm.DateTime", true, true>;
    /**
     * Static representation of the [[createdByUser]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_USER: EdmTypeField<SlsPrcgCndnRecdSuplmnt, "Edm.String", true, true>;
    /**
     * Static representation of the [[creationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATION_DATE: OrderableEdmTypeField<SlsPrcgCndnRecdSuplmnt, "Edm.DateTime", true, true>;
    /**
     * Static representation of the [[conditionTextId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONDITION_TEXT_ID: EdmTypeField<SlsPrcgCndnRecdSuplmnt, "Edm.String", true, true>;
    /**
     * Static representation of the [[pricingScaleType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRICING_SCALE_TYPE: EdmTypeField<SlsPrcgCndnRecdSuplmnt, "Edm.String", true, true>;
    /**
     * Static representation of the [[pricingScaleBasis]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRICING_SCALE_BASIS: EdmTypeField<SlsPrcgCndnRecdSuplmnt, "Edm.String", true, true>;
    /**
     * Static representation of the [[conditionScaleQuantity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONDITION_SCALE_QUANTITY: OrderableEdmTypeField<SlsPrcgCndnRecdSuplmnt, "Edm.Decimal", true, true>;
    /**
     * Static representation of the [[conditionScaleQuantityUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONDITION_SCALE_QUANTITY_UNIT: EdmTypeField<SlsPrcgCndnRecdSuplmnt, "Edm.String", true, true>;
    /**
     * Static representation of the [[conditionScaleAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONDITION_SCALE_AMOUNT: OrderableEdmTypeField<SlsPrcgCndnRecdSuplmnt, "Edm.Decimal", true, true>;
    /**
     * Static representation of the [[conditionScaleAmountCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONDITION_SCALE_AMOUNT_CURRENCY: EdmTypeField<SlsPrcgCndnRecdSuplmnt, "Edm.String", true, true>;
    /**
     * Static representation of the [[conditionCalculationType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONDITION_CALCULATION_TYPE: EdmTypeField<SlsPrcgCndnRecdSuplmnt, "Edm.String", true, true>;
    /**
     * Static representation of the [[conditionRateValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONDITION_RATE_VALUE: OrderableEdmTypeField<SlsPrcgCndnRecdSuplmnt, "Edm.Decimal", true, true>;
    /**
     * Static representation of the [[conditionRateValueUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONDITION_RATE_VALUE_UNIT: EdmTypeField<SlsPrcgCndnRecdSuplmnt, "Edm.String", true, true>;
    /**
     * Static representation of the [[conditionRateRatio]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONDITION_RATE_RATIO: OrderableEdmTypeField<SlsPrcgCndnRecdSuplmnt, "Edm.Decimal", true, true>;
    /**
     * Static representation of the [[conditionRateRatioUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONDITION_RATE_RATIO_UNIT: EdmTypeField<SlsPrcgCndnRecdSuplmnt, "Edm.String", true, true>;
    /**
     * Static representation of the [[conditionRateAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONDITION_RATE_AMOUNT: OrderableEdmTypeField<SlsPrcgCndnRecdSuplmnt, "Edm.Decimal", true, true>;
    /**
     * Static representation of the [[conditionCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONDITION_CURRENCY: EdmTypeField<SlsPrcgCndnRecdSuplmnt, "Edm.String", true, true>;
    /**
     * Static representation of the [[conditionQuantity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONDITION_QUANTITY: OrderableEdmTypeField<SlsPrcgCndnRecdSuplmnt, "Edm.Decimal", true, true>;
    /**
     * Static representation of the [[conditionQuantityUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONDITION_QUANTITY_UNIT: EdmTypeField<SlsPrcgCndnRecdSuplmnt, "Edm.String", true, true>;
    /**
     * Static representation of the [[conditionToBaseQtyNmrtr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONDITION_TO_BASE_QTY_NMRTR: OrderableEdmTypeField<SlsPrcgCndnRecdSuplmnt, "Edm.Decimal", true, true>;
    /**
     * Static representation of the [[conditionToBaseQtyDnmntr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONDITION_TO_BASE_QTY_DNMNTR: OrderableEdmTypeField<SlsPrcgCndnRecdSuplmnt, "Edm.Decimal", true, true>;
    /**
     * Static representation of the [[baseUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BASE_UNIT: EdmTypeField<SlsPrcgCndnRecdSuplmnt, "Edm.String", true, true>;
    /**
     * Static representation of the [[conditionLowerLimit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONDITION_LOWER_LIMIT: OrderableEdmTypeField<SlsPrcgCndnRecdSuplmnt, "Edm.Decimal", true, true>;
    /**
     * Static representation of the [[conditionLowerLimitAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONDITION_LOWER_LIMIT_AMOUNT: OrderableEdmTypeField<SlsPrcgCndnRecdSuplmnt, "Edm.Decimal", true, true>;
    /**
     * Static representation of the [[conditionLowerLimitRatio]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONDITION_LOWER_LIMIT_RATIO: OrderableEdmTypeField<SlsPrcgCndnRecdSuplmnt, "Edm.Decimal", true, true>;
    /**
     * Static representation of the [[conditionUpperLimit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONDITION_UPPER_LIMIT: OrderableEdmTypeField<SlsPrcgCndnRecdSuplmnt, "Edm.Decimal", true, true>;
    /**
     * Static representation of the [[conditionUpperLimitAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONDITION_UPPER_LIMIT_AMOUNT: OrderableEdmTypeField<SlsPrcgCndnRecdSuplmnt, "Edm.Decimal", true, true>;
    /**
     * Static representation of the [[conditionUpperLimitRatio]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONDITION_UPPER_LIMIT_RATIO: OrderableEdmTypeField<SlsPrcgCndnRecdSuplmnt, "Edm.Decimal", true, true>;
    /**
     * Static representation of the [[conditionAlternativeCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONDITION_ALTERNATIVE_CURRENCY: EdmTypeField<SlsPrcgCndnRecdSuplmnt, "Edm.String", true, true>;
    /**
     * Static representation of the [[conditionExclusion]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONDITION_EXCLUSION: EdmTypeField<SlsPrcgCndnRecdSuplmnt, "Edm.String", true, true>;
    /**
     * Static representation of the [[conditionIsDeleted]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONDITION_IS_DELETED: EdmTypeField<SlsPrcgCndnRecdSuplmnt, "Edm.Boolean", true, true>;
    /**
     * Static representation of the [[additionalValueDays]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDITIONAL_VALUE_DAYS: EdmTypeField<SlsPrcgCndnRecdSuplmnt, "Edm.String", true, true>;
    /**
     * Static representation of the [[fixedValueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FIXED_VALUE_DATE: OrderableEdmTypeField<SlsPrcgCndnRecdSuplmnt, "Edm.DateTime", true, true>;
    /**
     * Static representation of the [[paymentTerms]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENT_TERMS: EdmTypeField<SlsPrcgCndnRecdSuplmnt, "Edm.String", true, true>;
    /**
     * Static representation of the [[cndnMaxNumberOfSalesOrders]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CNDN_MAX_NUMBER_OF_SALES_ORDERS: EdmTypeField<SlsPrcgCndnRecdSuplmnt, "Edm.String", true, true>;
    /**
     * Static representation of the [[minimumConditionBasisValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MINIMUM_CONDITION_BASIS_VALUE: OrderableEdmTypeField<SlsPrcgCndnRecdSuplmnt, "Edm.Decimal", true, true>;
    /**
     * Static representation of the [[maximumConditionBasisValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MAXIMUM_CONDITION_BASIS_VALUE: OrderableEdmTypeField<SlsPrcgCndnRecdSuplmnt, "Edm.Decimal", true, true>;
    /**
     * Static representation of the [[maximumConditionAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MAXIMUM_CONDITION_AMOUNT: OrderableEdmTypeField<SlsPrcgCndnRecdSuplmnt, "Edm.Decimal", true, true>;
    /**
     * Static representation of the [[incrementalScale]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INCREMENTAL_SCALE: EdmTypeField<SlsPrcgCndnRecdSuplmnt, "Edm.String", true, true>;
    /**
     * Static representation of the [[pricingScaleLine]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRICING_SCALE_LINE: EdmTypeField<SlsPrcgCndnRecdSuplmnt, "Edm.String", true, true>;
    /**
     * Static representation of the [[conditionReleaseStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONDITION_RELEASE_STATUS: EdmTypeField<SlsPrcgCndnRecdSuplmnt, "Edm.String", true, true>;
    /**
     * Static representation of the [[salesPriceApprovalRequest]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_PRICE_APPROVAL_REQUEST: EdmTypeField<SlsPrcgCndnRecdSuplmnt, "Edm.String", true, true>;
    /**
     * Static representation of the [[conditionChangeReason]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONDITION_CHANGE_REASON: EdmTypeField<SlsPrcgCndnRecdSuplmnt, "Edm.String", true, true>;
    /**
     * Static representation of the [[prevApprovedConditionRecord]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PREV_APPROVED_CONDITION_RECORD: EdmTypeField<SlsPrcgCndnRecdSuplmnt, "Edm.String", true, true>;
    /**
     * Static representation of the [[eTag]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const E_TAG: EdmTypeField<SlsPrcgCndnRecdSuplmnt, "Edm.String", true, true>;
    /**
     * Static representation of the one-to-many navigation property [[toSlsPrcgCndnRecdValidity]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_SLS_PRCG_CNDN_RECD_VALIDITY: Link<SlsPrcgCndnRecdSuplmnt, SlsPrcgCndnRecdValidity>;
    /**
     * Static representation of the one-to-many navigation property [[toSlsPrcgCndnRecordScale]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_SLS_PRCG_CNDN_RECORD_SCALE: Link<SlsPrcgCndnRecdSuplmnt, SlsPrcgCndnRecordScale>;
    /**
     * Static representation of the one-to-many navigation property [[toSlsPrcgCndnSupplementText]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_SLS_PRCG_CNDN_SUPPLEMENT_TEXT: Link<SlsPrcgCndnRecdSuplmnt, SlsPrcgCndnSupplementText>;
    /**
     * Static representation of the one-to-one navigation property [[toSlsPrcgConditionRecord]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_SLS_PRCG_CONDITION_RECORD: OneToOneLink<SlsPrcgCndnRecdSuplmnt, SlsPrcgConditionRecord>;
    /**
     * All fields of the SlsPrcgCndnRecdSuplmnt entity.
     */
    const _allFields: Array<EdmTypeField<SlsPrcgCndnRecdSuplmnt, 'Edm.String', false, true> | EdmTypeField<SlsPrcgCndnRecdSuplmnt, 'Edm.String', true, true> | OrderableEdmTypeField<SlsPrcgCndnRecdSuplmnt, 'Edm.DateTime', true, true> | OrderableEdmTypeField<SlsPrcgCndnRecdSuplmnt, 'Edm.Decimal', true, true> | EdmTypeField<SlsPrcgCndnRecdSuplmnt, 'Edm.Boolean', true, true> | Link<SlsPrcgCndnRecdSuplmnt, SlsPrcgCndnRecdValidity> | Link<SlsPrcgCndnRecdSuplmnt, SlsPrcgCndnRecordScale> | Link<SlsPrcgCndnRecdSuplmnt, SlsPrcgCndnSupplementText> | OneToOneLink<SlsPrcgCndnRecdSuplmnt, SlsPrcgConditionRecord>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<SlsPrcgCndnRecdSuplmnt>;
    /**
     * All key fields of the SlsPrcgCndnRecdSuplmnt entity.
     */
    const _keyFields: Array<Field<SlsPrcgCndnRecdSuplmnt, boolean, boolean>>;
    /**
     * Mapping of all key field names to the respective static field property SlsPrcgCndnRecdSuplmnt.
     */
    const _keys: {
        [keys: string]: Field<SlsPrcgCndnRecdSuplmnt, boolean, boolean>;
    };
}
//# sourceMappingURL=SlsPrcgCndnRecdSuplmnt.d.ts.map