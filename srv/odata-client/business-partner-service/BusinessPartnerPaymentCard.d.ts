import { BusinessPartnerPaymentCardRequestBuilder } from './BusinessPartnerPaymentCardRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field, OrderableEdmTypeField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "A_BusinessPartnerPaymentCard" of service "API_BUSINESS_PARTNER".
 */
export declare class BusinessPartnerPaymentCard extends EntityV2 implements BusinessPartnerPaymentCardType {
    /**
     * Technical entity name for BusinessPartnerPaymentCard.
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
     * Payment Card ID.
     * Maximum length: 6.
     */
    paymentCardId: string;
    /**
     * Payment Card Type.
     * Maximum length: 4.
     */
    paymentCardType: string;
    /**
     * Payment Cards: Card Number.
     * Maximum length: 25.
     */
    cardNumber: string;
    /**
     * BP: Standard Payment Card.
     * @nullable
     */
    isStandardCard?: boolean;
    /**
     * Description of Credit Card Details.
     * Maximum length: 40.
     * @nullable
     */
    cardDescription?: string;
    /**
     * Payment cards: Valid from.
     * @nullable
     */
    validityDate?: Moment;
    /**
     * Payment Cards: Valid To.
     * @nullable
     */
    validityEndDate?: Moment;
    /**
     * Payment Cards: Name of Cardholder.
     * Maximum length: 40.
     * @nullable
     */
    cardHolder?: string;
    /**
     * Payment cards: Issuing bank.
     * Maximum length: 40.
     * @nullable
     */
    cardIssuingBank?: string;
    /**
     * Payment Cards: Date of Issue.
     * @nullable
     */
    cardIssueDate?: Moment;
    /**
     * Payment Cards: Reason for Payment Card Lock.
     * Maximum length: 2.
     * @nullable
     */
    paymentCardLock?: string;
    /**
     * Masked Payment Card Number ( Digital Payment ).
     * Maximum length: 25.
     * @nullable
     */
    maskedCardNumber?: string;
    /**
     * Returns an entity builder to construct instances of `BusinessPartnerPaymentCard`.
     * @returns A builder that constructs instances of entity type `BusinessPartnerPaymentCard`.
     */
    static builder(): EntityBuilderType<BusinessPartnerPaymentCard, BusinessPartnerPaymentCardType>;
    /**
     * Returns a request builder to construct requests for operations on the `BusinessPartnerPaymentCard` entity type.
     * @returns A `BusinessPartnerPaymentCard` request builder.
     */
    static requestBuilder(): BusinessPartnerPaymentCardRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `BusinessPartnerPaymentCard`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `BusinessPartnerPaymentCard`.
     */
    static customField(fieldName: string): CustomFieldV2<BusinessPartnerPaymentCard>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface BusinessPartnerPaymentCardType {
    businessPartner: string;
    paymentCardId: string;
    paymentCardType: string;
    cardNumber: string;
    isStandardCard?: boolean | null;
    cardDescription?: string | null;
    validityDate?: Moment | null;
    validityEndDate?: Moment | null;
    cardHolder?: string | null;
    cardIssuingBank?: string | null;
    cardIssueDate?: Moment | null;
    paymentCardLock?: string | null;
    maskedCardNumber?: string | null;
}
export declare namespace BusinessPartnerPaymentCard {
    /**
     * Static representation of the [[businessPartner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER: EdmTypeField<BusinessPartnerPaymentCard, "Edm.String", false, true>;
    /**
     * Static representation of the [[paymentCardId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENT_CARD_ID: EdmTypeField<BusinessPartnerPaymentCard, "Edm.String", false, true>;
    /**
     * Static representation of the [[paymentCardType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENT_CARD_TYPE: EdmTypeField<BusinessPartnerPaymentCard, "Edm.String", false, true>;
    /**
     * Static representation of the [[cardNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CARD_NUMBER: EdmTypeField<BusinessPartnerPaymentCard, "Edm.String", false, true>;
    /**
     * Static representation of the [[isStandardCard]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_STANDARD_CARD: EdmTypeField<BusinessPartnerPaymentCard, "Edm.Boolean", true, true>;
    /**
     * Static representation of the [[cardDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CARD_DESCRIPTION: EdmTypeField<BusinessPartnerPaymentCard, "Edm.String", true, true>;
    /**
     * Static representation of the [[validityDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VALIDITY_DATE: OrderableEdmTypeField<BusinessPartnerPaymentCard, "Edm.DateTime", true, true>;
    /**
     * Static representation of the [[validityEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VALIDITY_END_DATE: OrderableEdmTypeField<BusinessPartnerPaymentCard, "Edm.DateTime", true, true>;
    /**
     * Static representation of the [[cardHolder]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CARD_HOLDER: EdmTypeField<BusinessPartnerPaymentCard, "Edm.String", true, true>;
    /**
     * Static representation of the [[cardIssuingBank]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CARD_ISSUING_BANK: EdmTypeField<BusinessPartnerPaymentCard, "Edm.String", true, true>;
    /**
     * Static representation of the [[cardIssueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CARD_ISSUE_DATE: OrderableEdmTypeField<BusinessPartnerPaymentCard, "Edm.DateTime", true, true>;
    /**
     * Static representation of the [[paymentCardLock]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENT_CARD_LOCK: EdmTypeField<BusinessPartnerPaymentCard, "Edm.String", true, true>;
    /**
     * Static representation of the [[maskedCardNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MASKED_CARD_NUMBER: EdmTypeField<BusinessPartnerPaymentCard, "Edm.String", true, true>;
    /**
     * All fields of the BusinessPartnerPaymentCard entity.
     */
    const _allFields: Array<EdmTypeField<BusinessPartnerPaymentCard, 'Edm.String', false, true> | EdmTypeField<BusinessPartnerPaymentCard, 'Edm.Boolean', true, true> | EdmTypeField<BusinessPartnerPaymentCard, 'Edm.String', true, true> | OrderableEdmTypeField<BusinessPartnerPaymentCard, 'Edm.DateTime', true, true>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<BusinessPartnerPaymentCard>;
    /**
     * All key fields of the BusinessPartnerPaymentCard entity.
     */
    const _keyFields: Array<Field<BusinessPartnerPaymentCard, boolean, boolean>>;
    /**
     * Mapping of all key field names to the respective static field property BusinessPartnerPaymentCard.
     */
    const _keys: {
        [keys: string]: Field<BusinessPartnerPaymentCard, boolean, boolean>;
    };
}
//# sourceMappingURL=BusinessPartnerPaymentCard.d.ts.map