/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BusinessPartnerPaymentCardRequestBuilder } from './BusinessPartnerPaymentCardRequestBuilder';
import { Moment } from 'moment';
import { AllFields, Constructable, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field, FieldBuilder, OrderableEdmTypeField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "A_BusinessPartnerPaymentCard" of service "API_BUSINESS_PARTNER".
 */
export class BusinessPartnerPaymentCard extends EntityV2 implements BusinessPartnerPaymentCardType {
  /**
   * Technical entity name for BusinessPartnerPaymentCard.
   */
  static _entityName = 'A_BusinessPartnerPaymentCard';
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
   * Payment Card ID.
   * Maximum length: 6.
   */
  paymentCardId!: string;
  /**
   * Payment Card Type.
   * Maximum length: 4.
   */
  paymentCardType!: string;
  /**
   * Payment Cards: Card Number.
   * Maximum length: 25.
   */
  cardNumber!: string;
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
  static builder(): EntityBuilderType<BusinessPartnerPaymentCard, BusinessPartnerPaymentCardType> {
    return EntityV2.entityBuilder(BusinessPartnerPaymentCard);
  }

  /**
   * Returns a request builder to construct requests for operations on the `BusinessPartnerPaymentCard` entity type.
   * @returns A `BusinessPartnerPaymentCard` request builder.
   */
  static requestBuilder(): BusinessPartnerPaymentCardRequestBuilder {
    return new BusinessPartnerPaymentCardRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `BusinessPartnerPaymentCard`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `BusinessPartnerPaymentCard`.
   */
  static customField(fieldName: string): CustomFieldV2<BusinessPartnerPaymentCard> {
    return EntityV2.customFieldSelector(fieldName, BusinessPartnerPaymentCard);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
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

export namespace BusinessPartnerPaymentCard {
  const _fieldBuilder: FieldBuilder<Constructable<BusinessPartnerPaymentCard>> = new FieldBuilder(BusinessPartnerPaymentCard);
  /**
   * Static representation of the [[businessPartner]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER = _fieldBuilder.buildEdmTypeField('BusinessPartner', 'Edm.String', false);
  /**
   * Static representation of the [[paymentCardId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_CARD_ID = _fieldBuilder.buildEdmTypeField('PaymentCardID', 'Edm.String', false);
  /**
   * Static representation of the [[paymentCardType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_CARD_TYPE = _fieldBuilder.buildEdmTypeField('PaymentCardType', 'Edm.String', false);
  /**
   * Static representation of the [[cardNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CARD_NUMBER = _fieldBuilder.buildEdmTypeField('CardNumber', 'Edm.String', false);
  /**
   * Static representation of the [[isStandardCard]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_STANDARD_CARD = _fieldBuilder.buildEdmTypeField('IsStandardCard', 'Edm.Boolean', true);
  /**
   * Static representation of the [[cardDescription]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CARD_DESCRIPTION = _fieldBuilder.buildEdmTypeField('CardDescription', 'Edm.String', true);
  /**
   * Static representation of the [[validityDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VALIDITY_DATE = _fieldBuilder.buildEdmTypeField('ValidityDate', 'Edm.DateTime', true);
  /**
   * Static representation of the [[validityEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VALIDITY_END_DATE = _fieldBuilder.buildEdmTypeField('ValidityEndDate', 'Edm.DateTime', true);
  /**
   * Static representation of the [[cardHolder]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CARD_HOLDER = _fieldBuilder.buildEdmTypeField('CardHolder', 'Edm.String', true);
  /**
   * Static representation of the [[cardIssuingBank]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CARD_ISSUING_BANK = _fieldBuilder.buildEdmTypeField('CardIssuingBank', 'Edm.String', true);
  /**
   * Static representation of the [[cardIssueDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CARD_ISSUE_DATE = _fieldBuilder.buildEdmTypeField('CardIssueDate', 'Edm.DateTime', true);
  /**
   * Static representation of the [[paymentCardLock]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_CARD_LOCK = _fieldBuilder.buildEdmTypeField('PaymentCardLock', 'Edm.String', true);
  /**
   * Static representation of the [[maskedCardNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MASKED_CARD_NUMBER = _fieldBuilder.buildEdmTypeField('MaskedCardNumber', 'Edm.String', true);
  /**
   * All fields of the BusinessPartnerPaymentCard entity.
   */
  export const _allFields: Array<EdmTypeField<BusinessPartnerPaymentCard, 'Edm.String', false, true> | EdmTypeField<BusinessPartnerPaymentCard, 'Edm.Boolean', true, true> | EdmTypeField<BusinessPartnerPaymentCard, 'Edm.String', true, true> | OrderableEdmTypeField<BusinessPartnerPaymentCard, 'Edm.DateTime', true, true>> = [
    BusinessPartnerPaymentCard.BUSINESS_PARTNER,
    BusinessPartnerPaymentCard.PAYMENT_CARD_ID,
    BusinessPartnerPaymentCard.PAYMENT_CARD_TYPE,
    BusinessPartnerPaymentCard.CARD_NUMBER,
    BusinessPartnerPaymentCard.IS_STANDARD_CARD,
    BusinessPartnerPaymentCard.CARD_DESCRIPTION,
    BusinessPartnerPaymentCard.VALIDITY_DATE,
    BusinessPartnerPaymentCard.VALIDITY_END_DATE,
    BusinessPartnerPaymentCard.CARD_HOLDER,
    BusinessPartnerPaymentCard.CARD_ISSUING_BANK,
    BusinessPartnerPaymentCard.CARD_ISSUE_DATE,
    BusinessPartnerPaymentCard.PAYMENT_CARD_LOCK,
    BusinessPartnerPaymentCard.MASKED_CARD_NUMBER
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<BusinessPartnerPaymentCard> = new AllFields('*', BusinessPartnerPaymentCard);
  /**
   * All key fields of the BusinessPartnerPaymentCard entity.
   */
  export const _keyFields: Array<Field<BusinessPartnerPaymentCard, boolean, boolean>> = [BusinessPartnerPaymentCard.BUSINESS_PARTNER, BusinessPartnerPaymentCard.PAYMENT_CARD_ID, BusinessPartnerPaymentCard.PAYMENT_CARD_TYPE, BusinessPartnerPaymentCard.CARD_NUMBER];
  /**
   * Mapping of all key field names to the respective static field property BusinessPartnerPaymentCard.
   */
  export const _keys: { [keys: string]: Field<BusinessPartnerPaymentCard, boolean, boolean> } = BusinessPartnerPaymentCard._keyFields.reduce((acc: { [keys: string]: Field<BusinessPartnerPaymentCard, boolean, boolean> }, field: Field<BusinessPartnerPaymentCard, boolean, boolean>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
