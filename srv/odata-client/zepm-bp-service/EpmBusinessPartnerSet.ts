/*!
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 */

import { EpmBusinessPartnerSetRequestBuilder } from './EpmBusinessPartnerSetRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Selectable, StringField } from '@sap/cloud-sdk-core';

/**
 * This class represents the entity "EPMBusinessPartnerSet" of service "ZEPM_BP_SRV".
 */
export class EpmBusinessPartnerSet extends Entity implements EpmBusinessPartnerSetType {
  /**
   * Technical entity name for EpmBusinessPartnerSet.
   */
  static _entityName = 'EPMBusinessPartnerSet';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for EpmBusinessPartnerSet.
   */
  static _serviceName = 'ZEPM_BP_SRV';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/sap/opu/odata/sap/ZEPM_BP_SRV';
  /**
   * Business Partner ID.
   * Maximum length: 10.
   */
  bpId!: string;
  /**
   * Bus. Part. Role.
   * Maximum length: 3.
   */
  bpRole!: string;
  /**
   * Email.
   * Maximum length: 255.
   */
  emailAddress!: string;
  /**
   * Phone.
   * Maximum length: 30.
   */
  phoneNumber!: string;
  /**
   * Phone.
   * Maximum length: 30.
   */
  faxNumber!: string;
  /**
   * Description.
   * Maximum length: 255.
   */
  webAddress!: string;
  /**
   * Company.
   * Maximum length: 80.
   */
  companyName!: string;
  /**
   * Legal Form.
   * Maximum length: 10.
   */
  legalForm!: string;
  /**
   * Currency Code.
   * Maximum length: 5.
   */
  currencyCode!: string;
  /**
   * City.
   * Maximum length: 40.
   */
  city!: string;
  /**
   * Postal Code.
   * Maximum length: 10.
   */
  postalCode!: string;
  /**
   * Street.
   * Maximum length: 60.
   */
  street!: string;
  /**
   * Building.
   * Maximum length: 10.
   */
  building!: string;
  /**
   * Country.
   * Maximum length: 3.
   */
  country!: string;
  /**
   * Address Type.
   * Maximum length: 2.
   */
  addressType!: string;
  /**
   * Time Stamp.
   */
  addressValStartDate!: Moment;
  /**
   * Time Stamp.
   */
  addressValEndDate!: Moment;
  /**
   * Ident.
   * Maximum length: 10.
   */
  createdBy!: string;
  /**
   * Time Stamp.
   */
  createdAt!: Moment;
  /**
   * Ident.
   * Maximum length: 10.
   */
  changedBy!: string;
  /**
   * Time Stamp.
   */
  changedAt!: Moment;

  /**
   * Returns an entity builder to construct instances `EpmBusinessPartnerSet`.
   * @returns A builder that constructs instances of entity type `EpmBusinessPartnerSet`.
   */
  static builder(): EntityBuilderType<EpmBusinessPartnerSet, EpmBusinessPartnerSetTypeForceMandatory> {
    return Entity.entityBuilder(EpmBusinessPartnerSet);
  }

  /**
   * Returns a request builder to construct requests for operations on the `EpmBusinessPartnerSet` entity type.
   * @returns A `EpmBusinessPartnerSet` request builder.
   */
  static requestBuilder(): EpmBusinessPartnerSetRequestBuilder {
    return new EpmBusinessPartnerSetRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `EpmBusinessPartnerSet`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `EpmBusinessPartnerSet`.
   */
  static customField(fieldName: string): CustomField<EpmBusinessPartnerSet> {
    return Entity.customFieldSelector(fieldName, EpmBusinessPartnerSet);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface EpmBusinessPartnerSetType {
  bpId: string;
  bpRole: string;
  emailAddress: string;
  phoneNumber: string;
  faxNumber: string;
  webAddress: string;
  companyName: string;
  legalForm: string;
  currencyCode: string;
  city: string;
  postalCode: string;
  street: string;
  building: string;
  country: string;
  addressType: string;
  addressValStartDate: Moment;
  addressValEndDate: Moment;
  createdBy: string;
  createdAt: Moment;
  changedBy: string;
  changedAt: Moment;
}

export interface EpmBusinessPartnerSetTypeForceMandatory {
  bpId: string;
  bpRole: string;
  emailAddress: string;
  phoneNumber: string;
  faxNumber: string;
  webAddress: string;
  companyName: string;
  legalForm: string;
  currencyCode: string;
  city: string;
  postalCode: string;
  street: string;
  building: string;
  country: string;
  addressType: string;
  addressValStartDate: Moment;
  addressValEndDate: Moment;
  createdBy: string;
  createdAt: Moment;
  changedBy: string;
  changedAt: Moment;
}

export namespace EpmBusinessPartnerSet {
  /**
   * Static representation of the [[bpId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_ID: StringField<EpmBusinessPartnerSet> = new StringField('BpId', EpmBusinessPartnerSet, 'Edm.String');
  /**
   * Static representation of the [[bpRole]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_ROLE: StringField<EpmBusinessPartnerSet> = new StringField('BpRole', EpmBusinessPartnerSet, 'Edm.String');
  /**
   * Static representation of the [[emailAddress]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMAIL_ADDRESS: StringField<EpmBusinessPartnerSet> = new StringField('EmailAddress', EpmBusinessPartnerSet, 'Edm.String');
  /**
   * Static representation of the [[phoneNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PHONE_NUMBER: StringField<EpmBusinessPartnerSet> = new StringField('PhoneNumber', EpmBusinessPartnerSet, 'Edm.String');
  /**
   * Static representation of the [[faxNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FAX_NUMBER: StringField<EpmBusinessPartnerSet> = new StringField('FaxNumber', EpmBusinessPartnerSet, 'Edm.String');
  /**
   * Static representation of the [[webAddress]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WEB_ADDRESS: StringField<EpmBusinessPartnerSet> = new StringField('WebAddress', EpmBusinessPartnerSet, 'Edm.String');
  /**
   * Static representation of the [[companyName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMPANY_NAME: StringField<EpmBusinessPartnerSet> = new StringField('CompanyName', EpmBusinessPartnerSet, 'Edm.String');
  /**
   * Static representation of the [[legalForm]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LEGAL_FORM: StringField<EpmBusinessPartnerSet> = new StringField('LegalForm', EpmBusinessPartnerSet, 'Edm.String');
  /**
   * Static representation of the [[currencyCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENCY_CODE: StringField<EpmBusinessPartnerSet> = new StringField('CurrencyCode', EpmBusinessPartnerSet, 'Edm.String');
  /**
   * Static representation of the [[city]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CITY: StringField<EpmBusinessPartnerSet> = new StringField('City', EpmBusinessPartnerSet, 'Edm.String');
  /**
   * Static representation of the [[postalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POSTAL_CODE: StringField<EpmBusinessPartnerSet> = new StringField('PostalCode', EpmBusinessPartnerSet, 'Edm.String');
  /**
   * Static representation of the [[street]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STREET: StringField<EpmBusinessPartnerSet> = new StringField('Street', EpmBusinessPartnerSet, 'Edm.String');
  /**
   * Static representation of the [[building]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUILDING: StringField<EpmBusinessPartnerSet> = new StringField('Building', EpmBusinessPartnerSet, 'Edm.String');
  /**
   * Static representation of the [[country]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: StringField<EpmBusinessPartnerSet> = new StringField('Country', EpmBusinessPartnerSet, 'Edm.String');
  /**
   * Static representation of the [[addressType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_TYPE: StringField<EpmBusinessPartnerSet> = new StringField('AddressType', EpmBusinessPartnerSet, 'Edm.String');
  /**
   * Static representation of the [[addressValStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_VAL_START_DATE: DateField<EpmBusinessPartnerSet> = new DateField('AddressValStartDate', EpmBusinessPartnerSet, 'Edm.DateTime');
  /**
   * Static representation of the [[addressValEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_VAL_END_DATE: DateField<EpmBusinessPartnerSet> = new DateField('AddressValEndDate', EpmBusinessPartnerSet, 'Edm.DateTime');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<EpmBusinessPartnerSet> = new StringField('CreatedBy', EpmBusinessPartnerSet, 'Edm.String');
  /**
   * Static representation of the [[createdAt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_AT: DateField<EpmBusinessPartnerSet> = new DateField('CreatedAt', EpmBusinessPartnerSet, 'Edm.DateTime');
  /**
   * Static representation of the [[changedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CHANGED_BY: StringField<EpmBusinessPartnerSet> = new StringField('ChangedBy', EpmBusinessPartnerSet, 'Edm.String');
  /**
   * Static representation of the [[changedAt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CHANGED_AT: DateField<EpmBusinessPartnerSet> = new DateField('ChangedAt', EpmBusinessPartnerSet, 'Edm.DateTime');
  /**
   * All fields of the EpmBusinessPartnerSet entity.
   */
  export const _allFields: Array<StringField<EpmBusinessPartnerSet> | DateField<EpmBusinessPartnerSet>> = [
    EpmBusinessPartnerSet.BP_ID,
    EpmBusinessPartnerSet.BP_ROLE,
    EpmBusinessPartnerSet.EMAIL_ADDRESS,
    EpmBusinessPartnerSet.PHONE_NUMBER,
    EpmBusinessPartnerSet.FAX_NUMBER,
    EpmBusinessPartnerSet.WEB_ADDRESS,
    EpmBusinessPartnerSet.COMPANY_NAME,
    EpmBusinessPartnerSet.LEGAL_FORM,
    EpmBusinessPartnerSet.CURRENCY_CODE,
    EpmBusinessPartnerSet.CITY,
    EpmBusinessPartnerSet.POSTAL_CODE,
    EpmBusinessPartnerSet.STREET,
    EpmBusinessPartnerSet.BUILDING,
    EpmBusinessPartnerSet.COUNTRY,
    EpmBusinessPartnerSet.ADDRESS_TYPE,
    EpmBusinessPartnerSet.ADDRESS_VAL_START_DATE,
    EpmBusinessPartnerSet.ADDRESS_VAL_END_DATE,
    EpmBusinessPartnerSet.CREATED_BY,
    EpmBusinessPartnerSet.CREATED_AT,
    EpmBusinessPartnerSet.CHANGED_BY,
    EpmBusinessPartnerSet.CHANGED_AT
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<EpmBusinessPartnerSet> = new AllFields('*', EpmBusinessPartnerSet);
  /**
   * All key fields of the EpmBusinessPartnerSet entity.
   */
  export const _keyFields: Array<Selectable<EpmBusinessPartnerSet>> = [EpmBusinessPartnerSet.BP_ID];
  /**
   * Mapping of all key field names to the respective static field property EpmBusinessPartnerSet.
   */
  export const _keys: { [keys: string]: Selectable<EpmBusinessPartnerSet> } = EpmBusinessPartnerSet._keyFields.reduce((acc: { [keys: string]: Selectable<EpmBusinessPartnerSet> }, field: Selectable<EpmBusinessPartnerSet>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
