/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BpCreditWorthinessRequestBuilder } from './BpCreditWorthinessRequestBuilder';
import { Moment } from 'moment';
import { AllFields, Constructable, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field, FieldBuilder, OrderableEdmTypeField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "A_BPCreditWorthiness" of service "API_BUSINESS_PARTNER".
 */
export class BpCreditWorthiness extends EntityV2 implements BpCreditWorthinessType {
  /**
   * Technical entity name for BpCreditWorthiness.
   */
  static _entityName = 'A_BPCreditWorthiness';
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
   * Credit Standing.
   * Maximum length: 1.
   * @nullable
   */
  busPartCreditStanding?: string;
  /**
   * Status of Credit Standing Information.
   * Maximum length: 1.
   * @nullable
   */
  bpCreditStandingStatus?: string;
  /**
   * Institute Providing Credit Standing Information.
   * Maximum length: 4.
   * @nullable
   */
  creditRatingAgency?: string;
  /**
   * Additional Credit Standing Information.
   * Maximum length: 50.
   * @nullable
   */
  bpCreditStandingComment?: string;
  /**
   * Date of Credit Standing Information.
   * @nullable
   */
  bpCreditStandingDate?: Moment;
  /**
   * Rating.
   * Maximum length: 3.
   * @nullable
   */
  bpCreditStandingRating?: string;
  /**
   * Status of Legal Proceedings.
   * Maximum length: 2.
   * @nullable
   */
  bpLegalProceedingStatus?: string;
  /**
   * Date of Initiation of Legal Proceedings.
   * @nullable
   */
  bpLglProceedingInitiationDate?: Moment;
  /**
   * Affidavit.
   * @nullable
   */
  businessPartnerIsUnderOath?: boolean;
  /**
   * Date of affidavit.
   * @nullable
   */
  businessPartnerOathDate?: Moment;
  /**
   * Launch Bankruptcy Proceedings.
   * @nullable
   */
  businessPartnerIsBankrupt?: boolean;
  /**
   * Commencement Date of Bankruptcy Proceedings.
   * @nullable
   */
  businessPartnerBankruptcyDate?: Moment;
  /**
   * Foreclosure.
   * @nullable
   */
  bpForeclosureIsInitiated?: boolean;
  /**
   * Date of foreclosure.
   * @nullable
   */
  bpForeclosureDate?: Moment;
  /**
   * Bp Crdt Wrthnss Access Chk Is Active.
   * Maximum length: 1.
   * @nullable
   */
  bpCrdtWrthnssAccessChkIsActive?: string;

  /**
   * Returns an entity builder to construct instances of `BpCreditWorthiness`.
   * @returns A builder that constructs instances of entity type `BpCreditWorthiness`.
   */
  static builder(): EntityBuilderType<BpCreditWorthiness, BpCreditWorthinessType> {
    return EntityV2.entityBuilder(BpCreditWorthiness);
  }

  /**
   * Returns a request builder to construct requests for operations on the `BpCreditWorthiness` entity type.
   * @returns A `BpCreditWorthiness` request builder.
   */
  static requestBuilder(): BpCreditWorthinessRequestBuilder {
    return new BpCreditWorthinessRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `BpCreditWorthiness`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `BpCreditWorthiness`.
   */
  static customField(fieldName: string): CustomFieldV2<BpCreditWorthiness> {
    return EntityV2.customFieldSelector(fieldName, BpCreditWorthiness);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface BpCreditWorthinessType {
  businessPartner: string;
  busPartCreditStanding?: string | null;
  bpCreditStandingStatus?: string | null;
  creditRatingAgency?: string | null;
  bpCreditStandingComment?: string | null;
  bpCreditStandingDate?: Moment | null;
  bpCreditStandingRating?: string | null;
  bpLegalProceedingStatus?: string | null;
  bpLglProceedingInitiationDate?: Moment | null;
  businessPartnerIsUnderOath?: boolean | null;
  businessPartnerOathDate?: Moment | null;
  businessPartnerIsBankrupt?: boolean | null;
  businessPartnerBankruptcyDate?: Moment | null;
  bpForeclosureIsInitiated?: boolean | null;
  bpForeclosureDate?: Moment | null;
  bpCrdtWrthnssAccessChkIsActive?: string | null;
}

export namespace BpCreditWorthiness {
  const _fieldBuilder: FieldBuilder<Constructable<BpCreditWorthiness>> = new FieldBuilder(BpCreditWorthiness);
  /**
   * Static representation of the [[businessPartner]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER = _fieldBuilder.buildEdmTypeField('BusinessPartner', 'Edm.String', false);
  /**
   * Static representation of the [[busPartCreditStanding]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUS_PART_CREDIT_STANDING = _fieldBuilder.buildEdmTypeField('BusPartCreditStanding', 'Edm.String', true);
  /**
   * Static representation of the [[bpCreditStandingStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_CREDIT_STANDING_STATUS = _fieldBuilder.buildEdmTypeField('BPCreditStandingStatus', 'Edm.String', true);
  /**
   * Static representation of the [[creditRatingAgency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREDIT_RATING_AGENCY = _fieldBuilder.buildEdmTypeField('CreditRatingAgency', 'Edm.String', true);
  /**
   * Static representation of the [[bpCreditStandingComment]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_CREDIT_STANDING_COMMENT = _fieldBuilder.buildEdmTypeField('BPCreditStandingComment', 'Edm.String', true);
  /**
   * Static representation of the [[bpCreditStandingDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_CREDIT_STANDING_DATE = _fieldBuilder.buildEdmTypeField('BPCreditStandingDate', 'Edm.DateTime', true);
  /**
   * Static representation of the [[bpCreditStandingRating]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_CREDIT_STANDING_RATING = _fieldBuilder.buildEdmTypeField('BPCreditStandingRating', 'Edm.String', true);
  /**
   * Static representation of the [[bpLegalProceedingStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_LEGAL_PROCEEDING_STATUS = _fieldBuilder.buildEdmTypeField('BPLegalProceedingStatus', 'Edm.String', true);
  /**
   * Static representation of the [[bpLglProceedingInitiationDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_LGL_PROCEEDING_INITIATION_DATE = _fieldBuilder.buildEdmTypeField('BPLglProceedingInitiationDate', 'Edm.DateTime', true);
  /**
   * Static representation of the [[businessPartnerIsUnderOath]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER_IS_UNDER_OATH = _fieldBuilder.buildEdmTypeField('BusinessPartnerIsUnderOath', 'Edm.Boolean', true);
  /**
   * Static representation of the [[businessPartnerOathDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER_OATH_DATE = _fieldBuilder.buildEdmTypeField('BusinessPartnerOathDate', 'Edm.DateTime', true);
  /**
   * Static representation of the [[businessPartnerIsBankrupt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER_IS_BANKRUPT = _fieldBuilder.buildEdmTypeField('BusinessPartnerIsBankrupt', 'Edm.Boolean', true);
  /**
   * Static representation of the [[businessPartnerBankruptcyDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER_BANKRUPTCY_DATE = _fieldBuilder.buildEdmTypeField('BusinessPartnerBankruptcyDate', 'Edm.DateTime', true);
  /**
   * Static representation of the [[bpForeclosureIsInitiated]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_FORECLOSURE_IS_INITIATED = _fieldBuilder.buildEdmTypeField('BPForeclosureIsInitiated', 'Edm.Boolean', true);
  /**
   * Static representation of the [[bpForeclosureDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_FORECLOSURE_DATE = _fieldBuilder.buildEdmTypeField('BPForeclosureDate', 'Edm.DateTime', true);
  /**
   * Static representation of the [[bpCrdtWrthnssAccessChkIsActive]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_CRDT_WRTHNSS_ACCESS_CHK_IS_ACTIVE = _fieldBuilder.buildEdmTypeField('BPCrdtWrthnssAccessChkIsActive', 'Edm.String', true);
  /**
   * All fields of the BpCreditWorthiness entity.
   */
  export const _allFields: Array<EdmTypeField<BpCreditWorthiness, 'Edm.String', false, true> | EdmTypeField<BpCreditWorthiness, 'Edm.String', true, true> | OrderableEdmTypeField<BpCreditWorthiness, 'Edm.DateTime', true, true> | EdmTypeField<BpCreditWorthiness, 'Edm.Boolean', true, true>> = [
    BpCreditWorthiness.BUSINESS_PARTNER,
    BpCreditWorthiness.BUS_PART_CREDIT_STANDING,
    BpCreditWorthiness.BP_CREDIT_STANDING_STATUS,
    BpCreditWorthiness.CREDIT_RATING_AGENCY,
    BpCreditWorthiness.BP_CREDIT_STANDING_COMMENT,
    BpCreditWorthiness.BP_CREDIT_STANDING_DATE,
    BpCreditWorthiness.BP_CREDIT_STANDING_RATING,
    BpCreditWorthiness.BP_LEGAL_PROCEEDING_STATUS,
    BpCreditWorthiness.BP_LGL_PROCEEDING_INITIATION_DATE,
    BpCreditWorthiness.BUSINESS_PARTNER_IS_UNDER_OATH,
    BpCreditWorthiness.BUSINESS_PARTNER_OATH_DATE,
    BpCreditWorthiness.BUSINESS_PARTNER_IS_BANKRUPT,
    BpCreditWorthiness.BUSINESS_PARTNER_BANKRUPTCY_DATE,
    BpCreditWorthiness.BP_FORECLOSURE_IS_INITIATED,
    BpCreditWorthiness.BP_FORECLOSURE_DATE,
    BpCreditWorthiness.BP_CRDT_WRTHNSS_ACCESS_CHK_IS_ACTIVE
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<BpCreditWorthiness> = new AllFields('*', BpCreditWorthiness);
  /**
   * All key fields of the BpCreditWorthiness entity.
   */
  export const _keyFields: Array<Field<BpCreditWorthiness, boolean, boolean>> = [BpCreditWorthiness.BUSINESS_PARTNER];
  /**
   * Mapping of all key field names to the respective static field property BpCreditWorthiness.
   */
  export const _keys: { [keys: string]: Field<BpCreditWorthiness, boolean, boolean> } = BpCreditWorthiness._keyFields.reduce((acc: { [keys: string]: Field<BpCreditWorthiness, boolean, boolean> }, field: Field<BpCreditWorthiness, boolean, boolean>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
