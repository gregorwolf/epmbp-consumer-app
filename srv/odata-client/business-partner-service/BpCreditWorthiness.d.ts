import { BpCreditWorthinessRequestBuilder } from './BpCreditWorthinessRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field, OrderableEdmTypeField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "A_BPCreditWorthiness" of service "API_BUSINESS_PARTNER".
 */
export declare class BpCreditWorthiness extends EntityV2 implements BpCreditWorthinessType {
    /**
     * Technical entity name for BpCreditWorthiness.
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
    static builder(): EntityBuilderType<BpCreditWorthiness, BpCreditWorthinessType>;
    /**
     * Returns a request builder to construct requests for operations on the `BpCreditWorthiness` entity type.
     * @returns A `BpCreditWorthiness` request builder.
     */
    static requestBuilder(): BpCreditWorthinessRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `BpCreditWorthiness`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `BpCreditWorthiness`.
     */
    static customField(fieldName: string): CustomFieldV2<BpCreditWorthiness>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
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
export declare namespace BpCreditWorthiness {
    /**
     * Static representation of the [[businessPartner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER: EdmTypeField<BpCreditWorthiness, "Edm.String", false, true>;
    /**
     * Static representation of the [[busPartCreditStanding]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUS_PART_CREDIT_STANDING: EdmTypeField<BpCreditWorthiness, "Edm.String", true, true>;
    /**
     * Static representation of the [[bpCreditStandingStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_CREDIT_STANDING_STATUS: EdmTypeField<BpCreditWorthiness, "Edm.String", true, true>;
    /**
     * Static representation of the [[creditRatingAgency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREDIT_RATING_AGENCY: EdmTypeField<BpCreditWorthiness, "Edm.String", true, true>;
    /**
     * Static representation of the [[bpCreditStandingComment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_CREDIT_STANDING_COMMENT: EdmTypeField<BpCreditWorthiness, "Edm.String", true, true>;
    /**
     * Static representation of the [[bpCreditStandingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_CREDIT_STANDING_DATE: OrderableEdmTypeField<BpCreditWorthiness, "Edm.DateTime", true, true>;
    /**
     * Static representation of the [[bpCreditStandingRating]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_CREDIT_STANDING_RATING: EdmTypeField<BpCreditWorthiness, "Edm.String", true, true>;
    /**
     * Static representation of the [[bpLegalProceedingStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_LEGAL_PROCEEDING_STATUS: EdmTypeField<BpCreditWorthiness, "Edm.String", true, true>;
    /**
     * Static representation of the [[bpLglProceedingInitiationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_LGL_PROCEEDING_INITIATION_DATE: OrderableEdmTypeField<BpCreditWorthiness, "Edm.DateTime", true, true>;
    /**
     * Static representation of the [[businessPartnerIsUnderOath]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER_IS_UNDER_OATH: EdmTypeField<BpCreditWorthiness, "Edm.Boolean", true, true>;
    /**
     * Static representation of the [[businessPartnerOathDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER_OATH_DATE: OrderableEdmTypeField<BpCreditWorthiness, "Edm.DateTime", true, true>;
    /**
     * Static representation of the [[businessPartnerIsBankrupt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER_IS_BANKRUPT: EdmTypeField<BpCreditWorthiness, "Edm.Boolean", true, true>;
    /**
     * Static representation of the [[businessPartnerBankruptcyDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER_BANKRUPTCY_DATE: OrderableEdmTypeField<BpCreditWorthiness, "Edm.DateTime", true, true>;
    /**
     * Static representation of the [[bpForeclosureIsInitiated]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_FORECLOSURE_IS_INITIATED: EdmTypeField<BpCreditWorthiness, "Edm.Boolean", true, true>;
    /**
     * Static representation of the [[bpForeclosureDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_FORECLOSURE_DATE: OrderableEdmTypeField<BpCreditWorthiness, "Edm.DateTime", true, true>;
    /**
     * Static representation of the [[bpCrdtWrthnssAccessChkIsActive]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_CRDT_WRTHNSS_ACCESS_CHK_IS_ACTIVE: EdmTypeField<BpCreditWorthiness, "Edm.String", true, true>;
    /**
     * All fields of the BpCreditWorthiness entity.
     */
    const _allFields: Array<EdmTypeField<BpCreditWorthiness, 'Edm.String', false, true> | EdmTypeField<BpCreditWorthiness, 'Edm.String', true, true> | OrderableEdmTypeField<BpCreditWorthiness, 'Edm.DateTime', true, true> | EdmTypeField<BpCreditWorthiness, 'Edm.Boolean', true, true>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<BpCreditWorthiness>;
    /**
     * All key fields of the BpCreditWorthiness entity.
     */
    const _keyFields: Array<Field<BpCreditWorthiness, boolean, boolean>>;
    /**
     * Mapping of all key field names to the respective static field property BpCreditWorthiness.
     */
    const _keys: {
        [keys: string]: Field<BpCreditWorthiness, boolean, boolean>;
    };
}
//# sourceMappingURL=BpCreditWorthiness.d.ts.map