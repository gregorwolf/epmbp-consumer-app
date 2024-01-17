import { BusinessPartnerRatingRequestBuilder } from './BusinessPartnerRatingRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field, OrderableEdmTypeField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "A_BusinessPartnerRating" of service "API_BUSINESS_PARTNER".
 */
export declare class BusinessPartnerRating extends EntityV2 implements BusinessPartnerRatingType {
    /**
     * Technical entity name for BusinessPartnerRating.
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
     * Rating Procedure.
     * Maximum length: 10.
     */
    businessPartnerRatingProcedure: string;
    /**
     * Valid-to Date for Rating.
     */
    bpRatingValidityEndDate: Moment;
    /**
     * Rating.
     * Maximum length: 10.
     * @nullable
     */
    businessPartnerRatingGrade?: string;
    /**
     * Trend.
     * Maximum length: 2.
     * @nullable
     */
    businessPartnerRatingTrend?: string;
    /**
     * Valid-from Date for Rating.
     * @nullable
     */
    bpRatingValidityStartDate?: Moment;
    /**
     * Entered-on Date for Rating.
     * @nullable
     */
    bpRatingCreationDate?: Moment;
    /**
     * Text for Ratings.
     * Maximum length: 60.
     * @nullable
     */
    businessPartnerRatingComment?: string;
    /**
     * Rating Allowed.
     * @nullable
     */
    businessPartnerRatingIsAllowed?: boolean;
    /**
     * Business Partner Rating is valid on Key Date.
     * @nullable
     */
    bpRatingIsValidOnKeyDate?: boolean;
    /**
     * Key Date of Accessing Business Partner Rating Data.
     * @nullable
     */
    businessPartnerRatingKeyDate?: Moment;
    /**
     * Rating Validity is Expired according to Permitted Period.
     * @nullable
     */
    businessPartnerRatingIsExpired?: boolean;
    /**
     * Returns an entity builder to construct instances of `BusinessPartnerRating`.
     * @returns A builder that constructs instances of entity type `BusinessPartnerRating`.
     */
    static builder(): EntityBuilderType<BusinessPartnerRating, BusinessPartnerRatingType>;
    /**
     * Returns a request builder to construct requests for operations on the `BusinessPartnerRating` entity type.
     * @returns A `BusinessPartnerRating` request builder.
     */
    static requestBuilder(): BusinessPartnerRatingRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `BusinessPartnerRating`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `BusinessPartnerRating`.
     */
    static customField(fieldName: string): CustomFieldV2<BusinessPartnerRating>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface BusinessPartnerRatingType {
    businessPartner: string;
    businessPartnerRatingProcedure: string;
    bpRatingValidityEndDate: Moment;
    businessPartnerRatingGrade?: string | null;
    businessPartnerRatingTrend?: string | null;
    bpRatingValidityStartDate?: Moment | null;
    bpRatingCreationDate?: Moment | null;
    businessPartnerRatingComment?: string | null;
    businessPartnerRatingIsAllowed?: boolean | null;
    bpRatingIsValidOnKeyDate?: boolean | null;
    businessPartnerRatingKeyDate?: Moment | null;
    businessPartnerRatingIsExpired?: boolean | null;
}
export declare namespace BusinessPartnerRating {
    /**
     * Static representation of the [[businessPartner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER: EdmTypeField<BusinessPartnerRating, "Edm.String", false, true>;
    /**
     * Static representation of the [[businessPartnerRatingProcedure]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER_RATING_PROCEDURE: EdmTypeField<BusinessPartnerRating, "Edm.String", false, true>;
    /**
     * Static representation of the [[bpRatingValidityEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_RATING_VALIDITY_END_DATE: OrderableEdmTypeField<BusinessPartnerRating, "Edm.DateTime", false, true>;
    /**
     * Static representation of the [[businessPartnerRatingGrade]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER_RATING_GRADE: EdmTypeField<BusinessPartnerRating, "Edm.String", true, true>;
    /**
     * Static representation of the [[businessPartnerRatingTrend]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER_RATING_TREND: EdmTypeField<BusinessPartnerRating, "Edm.String", true, true>;
    /**
     * Static representation of the [[bpRatingValidityStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_RATING_VALIDITY_START_DATE: OrderableEdmTypeField<BusinessPartnerRating, "Edm.DateTime", true, true>;
    /**
     * Static representation of the [[bpRatingCreationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_RATING_CREATION_DATE: OrderableEdmTypeField<BusinessPartnerRating, "Edm.DateTime", true, true>;
    /**
     * Static representation of the [[businessPartnerRatingComment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER_RATING_COMMENT: EdmTypeField<BusinessPartnerRating, "Edm.String", true, true>;
    /**
     * Static representation of the [[businessPartnerRatingIsAllowed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER_RATING_IS_ALLOWED: EdmTypeField<BusinessPartnerRating, "Edm.Boolean", true, true>;
    /**
     * Static representation of the [[bpRatingIsValidOnKeyDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_RATING_IS_VALID_ON_KEY_DATE: EdmTypeField<BusinessPartnerRating, "Edm.Boolean", true, true>;
    /**
     * Static representation of the [[businessPartnerRatingKeyDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER_RATING_KEY_DATE: OrderableEdmTypeField<BusinessPartnerRating, "Edm.DateTime", true, true>;
    /**
     * Static representation of the [[businessPartnerRatingIsExpired]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER_RATING_IS_EXPIRED: EdmTypeField<BusinessPartnerRating, "Edm.Boolean", true, true>;
    /**
     * All fields of the BusinessPartnerRating entity.
     */
    const _allFields: Array<EdmTypeField<BusinessPartnerRating, 'Edm.String', false, true> | OrderableEdmTypeField<BusinessPartnerRating, 'Edm.DateTime', false, true> | EdmTypeField<BusinessPartnerRating, 'Edm.String', true, true> | OrderableEdmTypeField<BusinessPartnerRating, 'Edm.DateTime', true, true> | EdmTypeField<BusinessPartnerRating, 'Edm.Boolean', true, true>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<BusinessPartnerRating>;
    /**
     * All key fields of the BusinessPartnerRating entity.
     */
    const _keyFields: Array<Field<BusinessPartnerRating, boolean, boolean>>;
    /**
     * Mapping of all key field names to the respective static field property BusinessPartnerRating.
     */
    const _keys: {
        [keys: string]: Field<BusinessPartnerRating, boolean, boolean>;
    };
}
//# sourceMappingURL=BusinessPartnerRating.d.ts.map