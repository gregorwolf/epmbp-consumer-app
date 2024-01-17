/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BusinessPartnerRatingRequestBuilder } from './BusinessPartnerRatingRequestBuilder';
import { Moment } from 'moment';
import { AllFields, Constructable, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field, FieldBuilder, OrderableEdmTypeField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "A_BusinessPartnerRating" of service "API_BUSINESS_PARTNER".
 */
export class BusinessPartnerRating extends EntityV2 implements BusinessPartnerRatingType {
  /**
   * Technical entity name for BusinessPartnerRating.
   */
  static _entityName = 'A_BusinessPartnerRating';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
  /**
   * Business Partner Number.
   * Maximum length: 10.
   */
  businessPartner!: string;
  /**
   * Rating Procedure.
   * Maximum length: 10.
   */
  businessPartnerRatingProcedure!: string;
  /**
   * Valid-to Date for Rating.
   */
  bpRatingValidityEndDate!: Moment;
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
  static builder(): EntityBuilderType<BusinessPartnerRating, BusinessPartnerRatingType> {
    return EntityV2.entityBuilder(BusinessPartnerRating);
  }

  /**
   * Returns a request builder to construct requests for operations on the `BusinessPartnerRating` entity type.
   * @returns A `BusinessPartnerRating` request builder.
   */
  static requestBuilder(): BusinessPartnerRatingRequestBuilder {
    return new BusinessPartnerRatingRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `BusinessPartnerRating`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `BusinessPartnerRating`.
   */
  static customField(fieldName: string): CustomFieldV2<BusinessPartnerRating> {
    return EntityV2.customFieldSelector(fieldName, BusinessPartnerRating);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
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

export namespace BusinessPartnerRating {
  const _fieldBuilder: FieldBuilder<Constructable<BusinessPartnerRating>> = new FieldBuilder(BusinessPartnerRating);
  /**
   * Static representation of the [[businessPartner]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER = _fieldBuilder.buildEdmTypeField('BusinessPartner', 'Edm.String', false);
  /**
   * Static representation of the [[businessPartnerRatingProcedure]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER_RATING_PROCEDURE = _fieldBuilder.buildEdmTypeField('BusinessPartnerRatingProcedure', 'Edm.String', false);
  /**
   * Static representation of the [[bpRatingValidityEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_RATING_VALIDITY_END_DATE = _fieldBuilder.buildEdmTypeField('BPRatingValidityEndDate', 'Edm.DateTime', false);
  /**
   * Static representation of the [[businessPartnerRatingGrade]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER_RATING_GRADE = _fieldBuilder.buildEdmTypeField('BusinessPartnerRatingGrade', 'Edm.String', true);
  /**
   * Static representation of the [[businessPartnerRatingTrend]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER_RATING_TREND = _fieldBuilder.buildEdmTypeField('BusinessPartnerRatingTrend', 'Edm.String', true);
  /**
   * Static representation of the [[bpRatingValidityStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_RATING_VALIDITY_START_DATE = _fieldBuilder.buildEdmTypeField('BPRatingValidityStartDate', 'Edm.DateTime', true);
  /**
   * Static representation of the [[bpRatingCreationDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_RATING_CREATION_DATE = _fieldBuilder.buildEdmTypeField('BPRatingCreationDate', 'Edm.DateTime', true);
  /**
   * Static representation of the [[businessPartnerRatingComment]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER_RATING_COMMENT = _fieldBuilder.buildEdmTypeField('BusinessPartnerRatingComment', 'Edm.String', true);
  /**
   * Static representation of the [[businessPartnerRatingIsAllowed]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER_RATING_IS_ALLOWED = _fieldBuilder.buildEdmTypeField('BusinessPartnerRatingIsAllowed', 'Edm.Boolean', true);
  /**
   * Static representation of the [[bpRatingIsValidOnKeyDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_RATING_IS_VALID_ON_KEY_DATE = _fieldBuilder.buildEdmTypeField('BPRatingIsValidOnKeyDate', 'Edm.Boolean', true);
  /**
   * Static representation of the [[businessPartnerRatingKeyDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER_RATING_KEY_DATE = _fieldBuilder.buildEdmTypeField('BusinessPartnerRatingKeyDate', 'Edm.DateTime', true);
  /**
   * Static representation of the [[businessPartnerRatingIsExpired]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER_RATING_IS_EXPIRED = _fieldBuilder.buildEdmTypeField('BusinessPartnerRatingIsExpired', 'Edm.Boolean', true);
  /**
   * All fields of the BusinessPartnerRating entity.
   */
  export const _allFields: Array<EdmTypeField<BusinessPartnerRating, 'Edm.String', false, true> | OrderableEdmTypeField<BusinessPartnerRating, 'Edm.DateTime', false, true> | EdmTypeField<BusinessPartnerRating, 'Edm.String', true, true> | OrderableEdmTypeField<BusinessPartnerRating, 'Edm.DateTime', true, true> | EdmTypeField<BusinessPartnerRating, 'Edm.Boolean', true, true>> = [
    BusinessPartnerRating.BUSINESS_PARTNER,
    BusinessPartnerRating.BUSINESS_PARTNER_RATING_PROCEDURE,
    BusinessPartnerRating.BP_RATING_VALIDITY_END_DATE,
    BusinessPartnerRating.BUSINESS_PARTNER_RATING_GRADE,
    BusinessPartnerRating.BUSINESS_PARTNER_RATING_TREND,
    BusinessPartnerRating.BP_RATING_VALIDITY_START_DATE,
    BusinessPartnerRating.BP_RATING_CREATION_DATE,
    BusinessPartnerRating.BUSINESS_PARTNER_RATING_COMMENT,
    BusinessPartnerRating.BUSINESS_PARTNER_RATING_IS_ALLOWED,
    BusinessPartnerRating.BP_RATING_IS_VALID_ON_KEY_DATE,
    BusinessPartnerRating.BUSINESS_PARTNER_RATING_KEY_DATE,
    BusinessPartnerRating.BUSINESS_PARTNER_RATING_IS_EXPIRED
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<BusinessPartnerRating> = new AllFields('*', BusinessPartnerRating);
  /**
   * All key fields of the BusinessPartnerRating entity.
   */
  export const _keyFields: Array<Field<BusinessPartnerRating, boolean, boolean>> = [BusinessPartnerRating.BUSINESS_PARTNER, BusinessPartnerRating.BUSINESS_PARTNER_RATING_PROCEDURE, BusinessPartnerRating.BP_RATING_VALIDITY_END_DATE];
  /**
   * Mapping of all key field names to the respective static field property BusinessPartnerRating.
   */
  export const _keys: { [keys: string]: Field<BusinessPartnerRating, boolean, boolean> } = BusinessPartnerRating._keyFields.reduce((acc: { [keys: string]: Field<BusinessPartnerRating, boolean, boolean> }, field: Field<BusinessPartnerRating, boolean, boolean>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
