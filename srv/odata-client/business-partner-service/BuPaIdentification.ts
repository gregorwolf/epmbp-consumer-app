/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BuPaIdentificationRequestBuilder } from './BuPaIdentificationRequestBuilder';
import { Moment } from 'moment';
import { AllFields, Constructable, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field, FieldBuilder, OrderableEdmTypeField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "A_BuPaIdentification" of service "API_BUSINESS_PARTNER".
 */
export class BuPaIdentification extends EntityV2 implements BuPaIdentificationType {
  /**
   * Technical entity name for BuPaIdentification.
   */
  static _entityName = 'A_BuPaIdentification';
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
   * Identification Type.
   * Maximum length: 6.
   */
  bpIdentificationType!: string;
  /**
   * Identification Number.
   * Maximum length: 60.
   */
  bpIdentificationNumber!: string;
  /**
   * Responsible Institution for ID Number.
   * Maximum length: 40.
   * @nullable
   */
  bpIdnNmbrIssuingInstitute?: string;
  /**
   * Date of Entry for ID Number.
   * @nullable
   */
  bpIdentificationEntryDate?: Moment;
  /**
   * Country/Region in Which ID Number is Valid or Was Assigned.
   * Maximum length: 3.
   * @nullable
   */
  country?: string;
  /**
   * Region (State, Province, County).
   * Maximum length: 3.
   * @nullable
   */
  region?: string;
  /**
   * Validity Start for ID Number.
   * @nullable
   */
  validityStartDate?: Moment;
  /**
   * Validity End for ID Number.
   * @nullable
   */
  validityEndDate?: Moment;
  /**
   * Authorization Group.
   * Maximum length: 4.
   * @nullable
   */
  authorizationGroup?: string;

  /**
   * Returns an entity builder to construct instances of `BuPaIdentification`.
   * @returns A builder that constructs instances of entity type `BuPaIdentification`.
   */
  static builder(): EntityBuilderType<BuPaIdentification, BuPaIdentificationType> {
    return EntityV2.entityBuilder(BuPaIdentification);
  }

  /**
   * Returns a request builder to construct requests for operations on the `BuPaIdentification` entity type.
   * @returns A `BuPaIdentification` request builder.
   */
  static requestBuilder(): BuPaIdentificationRequestBuilder {
    return new BuPaIdentificationRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `BuPaIdentification`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `BuPaIdentification`.
   */
  static customField(fieldName: string): CustomFieldV2<BuPaIdentification> {
    return EntityV2.customFieldSelector(fieldName, BuPaIdentification);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface BuPaIdentificationType {
  businessPartner: string;
  bpIdentificationType: string;
  bpIdentificationNumber: string;
  bpIdnNmbrIssuingInstitute?: string | null;
  bpIdentificationEntryDate?: Moment | null;
  country?: string | null;
  region?: string | null;
  validityStartDate?: Moment | null;
  validityEndDate?: Moment | null;
  authorizationGroup?: string | null;
}

export namespace BuPaIdentification {
  const _fieldBuilder: FieldBuilder<Constructable<BuPaIdentification>> = new FieldBuilder(BuPaIdentification);
  /**
   * Static representation of the [[businessPartner]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER = _fieldBuilder.buildEdmTypeField('BusinessPartner', 'Edm.String', false);
  /**
   * Static representation of the [[bpIdentificationType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_IDENTIFICATION_TYPE = _fieldBuilder.buildEdmTypeField('BPIdentificationType', 'Edm.String', false);
  /**
   * Static representation of the [[bpIdentificationNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_IDENTIFICATION_NUMBER = _fieldBuilder.buildEdmTypeField('BPIdentificationNumber', 'Edm.String', false);
  /**
   * Static representation of the [[bpIdnNmbrIssuingInstitute]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_IDN_NMBR_ISSUING_INSTITUTE = _fieldBuilder.buildEdmTypeField('BPIdnNmbrIssuingInstitute', 'Edm.String', true);
  /**
   * Static representation of the [[bpIdentificationEntryDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_IDENTIFICATION_ENTRY_DATE = _fieldBuilder.buildEdmTypeField('BPIdentificationEntryDate', 'Edm.DateTime', true);
  /**
   * Static representation of the [[country]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY = _fieldBuilder.buildEdmTypeField('Country', 'Edm.String', true);
  /**
   * Static representation of the [[region]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REGION = _fieldBuilder.buildEdmTypeField('Region', 'Edm.String', true);
  /**
   * Static representation of the [[validityStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VALIDITY_START_DATE = _fieldBuilder.buildEdmTypeField('ValidityStartDate', 'Edm.DateTime', true);
  /**
   * Static representation of the [[validityEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VALIDITY_END_DATE = _fieldBuilder.buildEdmTypeField('ValidityEndDate', 'Edm.DateTime', true);
  /**
   * Static representation of the [[authorizationGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AUTHORIZATION_GROUP = _fieldBuilder.buildEdmTypeField('AuthorizationGroup', 'Edm.String', true);
  /**
   * All fields of the BuPaIdentification entity.
   */
  export const _allFields: Array<EdmTypeField<BuPaIdentification, 'Edm.String', false, true> | EdmTypeField<BuPaIdentification, 'Edm.String', true, true> | OrderableEdmTypeField<BuPaIdentification, 'Edm.DateTime', true, true>> = [
    BuPaIdentification.BUSINESS_PARTNER,
    BuPaIdentification.BP_IDENTIFICATION_TYPE,
    BuPaIdentification.BP_IDENTIFICATION_NUMBER,
    BuPaIdentification.BP_IDN_NMBR_ISSUING_INSTITUTE,
    BuPaIdentification.BP_IDENTIFICATION_ENTRY_DATE,
    BuPaIdentification.COUNTRY,
    BuPaIdentification.REGION,
    BuPaIdentification.VALIDITY_START_DATE,
    BuPaIdentification.VALIDITY_END_DATE,
    BuPaIdentification.AUTHORIZATION_GROUP
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<BuPaIdentification> = new AllFields('*', BuPaIdentification);
  /**
   * All key fields of the BuPaIdentification entity.
   */
  export const _keyFields: Array<Field<BuPaIdentification, boolean, boolean>> = [BuPaIdentification.BUSINESS_PARTNER, BuPaIdentification.BP_IDENTIFICATION_TYPE, BuPaIdentification.BP_IDENTIFICATION_NUMBER];
  /**
   * Mapping of all key field names to the respective static field property BuPaIdentification.
   */
  export const _keys: { [keys: string]: Field<BuPaIdentification, boolean, boolean> } = BuPaIdentification._keyFields.reduce((acc: { [keys: string]: Field<BuPaIdentification, boolean, boolean> }, field: Field<BuPaIdentification, boolean, boolean>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
