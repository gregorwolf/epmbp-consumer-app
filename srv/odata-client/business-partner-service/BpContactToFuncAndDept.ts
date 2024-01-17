/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BpContactToFuncAndDeptRequestBuilder } from './BpContactToFuncAndDeptRequestBuilder';
import { Moment } from 'moment';
import { AllFields, Constructable, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field, FieldBuilder, OrderableEdmTypeField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "A_BPContactToFuncAndDept" of service "API_BUSINESS_PARTNER".
 */
export class BpContactToFuncAndDept extends EntityV2 implements BpContactToFuncAndDeptType {
  /**
   * Technical entity name for BpContactToFuncAndDept.
   */
  static _entityName = 'A_BPContactToFuncAndDept';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
  /**
   * BP Relationship Number.
   * Maximum length: 12.
   */
  relationshipNumber!: string;
  /**
   * Business Partner Number.
   * Maximum length: 10.
   */
  businessPartnerCompany!: string;
  /**
   * Business Partner Number.
   * Maximum length: 10.
   */
  businessPartnerPerson!: string;
  /**
   * Validity Date (Valid To).
   */
  validityEndDate!: Moment;
  /**
   * Partner's Authority.
   * Maximum length: 1.
   * @nullable
   */
  contactPersonAuthorityType?: string;
  /**
   * Department.
   * Maximum length: 4.
   * @nullable
   */
  contactPersonDepartment?: string;
  /**
   * Department at business partner.
   * Maximum length: 40.
   * @nullable
   */
  contactPersonDepartmentName?: string;
  /**
   * Function of partner.
   * Maximum length: 4.
   * @nullable
   */
  contactPersonFunction?: string;
  /**
   * Function name of partner.
   * Maximum length: 40.
   * @nullable
   */
  contactPersonFunctionName?: string;
  /**
   * Notes for Partner.
   * Maximum length: 40.
   * @nullable
   */
  contactPersonRemarkText?: string;
  /**
   * VIP Partner.
   * Maximum length: 1.
   * @nullable
   */
  contactPersonVipType?: string;
  /**
   * Email Address.
   * Maximum length: 241.
   * @nullable
   */
  emailAddress?: string;
  /**
   * Fax Number: Dialing Code and Number.
   * Maximum length: 30.
   * @nullable
   */
  faxNumber?: string;
  /**
   * Fax no.: Extension.
   * Maximum length: 10.
   * @nullable
   */
  faxNumberExtension?: string;
  /**
   * Telephone No.: Dialing Code and Number.
   * Maximum length: 30.
   * @nullable
   */
  phoneNumber?: string;
  /**
   * Telephone no.: Extension.
   * Maximum length: 10.
   * @nullable
   */
  phoneNumberExtension?: string;
  /**
   * Business Partner Relationship Category.
   * Maximum length: 6.
   * @nullable
   */
  relationshipCategory?: string;

  /**
   * Returns an entity builder to construct instances of `BpContactToFuncAndDept`.
   * @returns A builder that constructs instances of entity type `BpContactToFuncAndDept`.
   */
  static builder(): EntityBuilderType<BpContactToFuncAndDept, BpContactToFuncAndDeptType> {
    return EntityV2.entityBuilder(BpContactToFuncAndDept);
  }

  /**
   * Returns a request builder to construct requests for operations on the `BpContactToFuncAndDept` entity type.
   * @returns A `BpContactToFuncAndDept` request builder.
   */
  static requestBuilder(): BpContactToFuncAndDeptRequestBuilder {
    return new BpContactToFuncAndDeptRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `BpContactToFuncAndDept`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `BpContactToFuncAndDept`.
   */
  static customField(fieldName: string): CustomFieldV2<BpContactToFuncAndDept> {
    return EntityV2.customFieldSelector(fieldName, BpContactToFuncAndDept);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface BpContactToFuncAndDeptType {
  relationshipNumber: string;
  businessPartnerCompany: string;
  businessPartnerPerson: string;
  validityEndDate: Moment;
  contactPersonAuthorityType?: string | null;
  contactPersonDepartment?: string | null;
  contactPersonDepartmentName?: string | null;
  contactPersonFunction?: string | null;
  contactPersonFunctionName?: string | null;
  contactPersonRemarkText?: string | null;
  contactPersonVipType?: string | null;
  emailAddress?: string | null;
  faxNumber?: string | null;
  faxNumberExtension?: string | null;
  phoneNumber?: string | null;
  phoneNumberExtension?: string | null;
  relationshipCategory?: string | null;
}

export namespace BpContactToFuncAndDept {
  const _fieldBuilder: FieldBuilder<Constructable<BpContactToFuncAndDept>> = new FieldBuilder(BpContactToFuncAndDept);
  /**
   * Static representation of the [[relationshipNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RELATIONSHIP_NUMBER = _fieldBuilder.buildEdmTypeField('RelationshipNumber', 'Edm.String', false);
  /**
   * Static representation of the [[businessPartnerCompany]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER_COMPANY = _fieldBuilder.buildEdmTypeField('BusinessPartnerCompany', 'Edm.String', false);
  /**
   * Static representation of the [[businessPartnerPerson]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER_PERSON = _fieldBuilder.buildEdmTypeField('BusinessPartnerPerson', 'Edm.String', false);
  /**
   * Static representation of the [[validityEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VALIDITY_END_DATE = _fieldBuilder.buildEdmTypeField('ValidityEndDate', 'Edm.DateTime', false);
  /**
   * Static representation of the [[contactPersonAuthorityType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTACT_PERSON_AUTHORITY_TYPE = _fieldBuilder.buildEdmTypeField('ContactPersonAuthorityType', 'Edm.String', true);
  /**
   * Static representation of the [[contactPersonDepartment]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTACT_PERSON_DEPARTMENT = _fieldBuilder.buildEdmTypeField('ContactPersonDepartment', 'Edm.String', true);
  /**
   * Static representation of the [[contactPersonDepartmentName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTACT_PERSON_DEPARTMENT_NAME = _fieldBuilder.buildEdmTypeField('ContactPersonDepartmentName', 'Edm.String', true);
  /**
   * Static representation of the [[contactPersonFunction]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTACT_PERSON_FUNCTION = _fieldBuilder.buildEdmTypeField('ContactPersonFunction', 'Edm.String', true);
  /**
   * Static representation of the [[contactPersonFunctionName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTACT_PERSON_FUNCTION_NAME = _fieldBuilder.buildEdmTypeField('ContactPersonFunctionName', 'Edm.String', true);
  /**
   * Static representation of the [[contactPersonRemarkText]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTACT_PERSON_REMARK_TEXT = _fieldBuilder.buildEdmTypeField('ContactPersonRemarkText', 'Edm.String', true);
  /**
   * Static representation of the [[contactPersonVipType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTACT_PERSON_VIP_TYPE = _fieldBuilder.buildEdmTypeField('ContactPersonVIPType', 'Edm.String', true);
  /**
   * Static representation of the [[emailAddress]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMAIL_ADDRESS = _fieldBuilder.buildEdmTypeField('EmailAddress', 'Edm.String', true);
  /**
   * Static representation of the [[faxNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FAX_NUMBER = _fieldBuilder.buildEdmTypeField('FaxNumber', 'Edm.String', true);
  /**
   * Static representation of the [[faxNumberExtension]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FAX_NUMBER_EXTENSION = _fieldBuilder.buildEdmTypeField('FaxNumberExtension', 'Edm.String', true);
  /**
   * Static representation of the [[phoneNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PHONE_NUMBER = _fieldBuilder.buildEdmTypeField('PhoneNumber', 'Edm.String', true);
  /**
   * Static representation of the [[phoneNumberExtension]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PHONE_NUMBER_EXTENSION = _fieldBuilder.buildEdmTypeField('PhoneNumberExtension', 'Edm.String', true);
  /**
   * Static representation of the [[relationshipCategory]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RELATIONSHIP_CATEGORY = _fieldBuilder.buildEdmTypeField('RelationshipCategory', 'Edm.String', true);
  /**
   * All fields of the BpContactToFuncAndDept entity.
   */
  export const _allFields: Array<EdmTypeField<BpContactToFuncAndDept, 'Edm.String', false, true> | OrderableEdmTypeField<BpContactToFuncAndDept, 'Edm.DateTime', false, true> | EdmTypeField<BpContactToFuncAndDept, 'Edm.String', true, true>> = [
    BpContactToFuncAndDept.RELATIONSHIP_NUMBER,
    BpContactToFuncAndDept.BUSINESS_PARTNER_COMPANY,
    BpContactToFuncAndDept.BUSINESS_PARTNER_PERSON,
    BpContactToFuncAndDept.VALIDITY_END_DATE,
    BpContactToFuncAndDept.CONTACT_PERSON_AUTHORITY_TYPE,
    BpContactToFuncAndDept.CONTACT_PERSON_DEPARTMENT,
    BpContactToFuncAndDept.CONTACT_PERSON_DEPARTMENT_NAME,
    BpContactToFuncAndDept.CONTACT_PERSON_FUNCTION,
    BpContactToFuncAndDept.CONTACT_PERSON_FUNCTION_NAME,
    BpContactToFuncAndDept.CONTACT_PERSON_REMARK_TEXT,
    BpContactToFuncAndDept.CONTACT_PERSON_VIP_TYPE,
    BpContactToFuncAndDept.EMAIL_ADDRESS,
    BpContactToFuncAndDept.FAX_NUMBER,
    BpContactToFuncAndDept.FAX_NUMBER_EXTENSION,
    BpContactToFuncAndDept.PHONE_NUMBER,
    BpContactToFuncAndDept.PHONE_NUMBER_EXTENSION,
    BpContactToFuncAndDept.RELATIONSHIP_CATEGORY
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<BpContactToFuncAndDept> = new AllFields('*', BpContactToFuncAndDept);
  /**
   * All key fields of the BpContactToFuncAndDept entity.
   */
  export const _keyFields: Array<Field<BpContactToFuncAndDept, boolean, boolean>> = [BpContactToFuncAndDept.RELATIONSHIP_NUMBER, BpContactToFuncAndDept.BUSINESS_PARTNER_COMPANY, BpContactToFuncAndDept.BUSINESS_PARTNER_PERSON, BpContactToFuncAndDept.VALIDITY_END_DATE];
  /**
   * Mapping of all key field names to the respective static field property BpContactToFuncAndDept.
   */
  export const _keys: { [keys: string]: Field<BpContactToFuncAndDept, boolean, boolean> } = BpContactToFuncAndDept._keyFields.reduce((acc: { [keys: string]: Field<BpContactToFuncAndDept, boolean, boolean> }, field: Field<BpContactToFuncAndDept, boolean, boolean>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
