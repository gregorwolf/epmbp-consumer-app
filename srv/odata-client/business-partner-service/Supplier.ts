/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SupplierRequestBuilder } from './SupplierRequestBuilder';
import { Moment } from 'moment';
import { AllFields, Constructable, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field, FieldBuilder, Link, OrderableEdmTypeField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "A_Supplier" of service "API_BUSINESS_PARTNER".
 */
export class Supplier extends EntityV2 implements SupplierType {
  /**
   * Technical entity name for Supplier.
   */
  static _entityName = 'A_Supplier';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
  /**
   * Account Number of Supplier.
   * Maximum length: 10.
   */
  supplier!: string;
  /**
   * Account Number of the Alternative Payee.
   * Maximum length: 10.
   * @nullable
   */
  alternativePayeeAccountNumber?: string;
  /**
   * Authorization Group.
   * Maximum length: 4.
   * @nullable
   */
  authorizationGroup?: string;
  /**
   * Permanent Account Number.
   * Maximum length: 40.
   * @nullable
   */
  businessPartnerPanNumber?: string;
  /**
   * Name of Person who Created the Object.
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
   * Customer Number.
   * Maximum length: 10.
   * @nullable
   */
  customer?: string;
  /**
   * Payment Block.
   * @nullable
   */
  paymentIsBlockedForSupplier?: boolean;
  /**
   * Central Posting Block.
   * @nullable
   */
  postingIsBlocked?: boolean;
  /**
   * Centrally imposed purchasing block.
   * @nullable
   */
  purchasingIsBlocked?: boolean;
  /**
   * Supplier Account Group.
   * Maximum length: 4.
   * @nullable
   */
  supplierAccountGroup?: string;
  /**
   * Supplier Full Name.
   * Maximum length: 220.
   * @nullable
   */
  supplierFullName?: string;
  /**
   * Name of Supplier.
   * Maximum length: 80.
   * @nullable
   */
  supplierName?: string;
  /**
   * VAT Registration Number.
   * Maximum length: 20.
   * @nullable
   */
  vatRegistration?: string;
  /**
   * Date of Birth of the Person Subject to Withholding Tax.
   * @nullable
   */
  birthDate?: Moment;
  /**
   * Cocatenated International Location Number.
   * Maximum length: 20.
   * @nullable
   */
  concatenatedInternationalLocNo?: string;
  /**
   * Central Deletion Flag for Master Record.
   * @nullable
   */
  deletionIndicator?: boolean;
  /**
   * Account number of the master record with fiscal address.
   * Maximum length: 10.
   * @nullable
   */
  fiscalAddress?: string;
  /**
   * Industry Key.
   * Maximum length: 4.
   * @nullable
   */
  industry?: string;
  /**
   * International location number  (part 1).
   * Maximum length: 7.
   * @nullable
   */
  internationalLocationNumber1?: string;
  /**
   * International location number (Part 2).
   * Maximum length: 5.
   * @nullable
   */
  internationalLocationNumber2?: string;
  /**
   * Check digit for the international location number.
   * Maximum length: 1.
   * @nullable
   */
  internationalLocationNumber3?: string;
  /**
   * Natural Person.
   * Maximum length: 1.
   * @nullable
   */
  isNaturalPerson?: string;
  /**
   * Payment Reason.
   * Maximum length: 4.
   * @nullable
   */
  paymentReason?: string;
  /**
   * Tax Type.
   * Maximum length: 2.
   * @nullable
   */
  responsibleType?: string;
  /**
   * Validity Date of Certification.
   * @nullable
   */
  suplrQltyInProcmtCertfnValidTo?: Moment;
  /**
   * Supplier's QM System.
   * Maximum length: 4.
   * @nullable
   */
  suplrQualityManagementSystem?: string;
  /**
   * Group Key.
   * Maximum length: 10.
   * @nullable
   */
  supplierCorporateGroup?: string;
  /**
   * Function That Will Be Blocked.
   * Maximum length: 2.
   * @nullable
   */
  supplierProcurementBlock?: string;
  /**
   * Tax Number 1.
   * Maximum length: 16.
   * @nullable
   */
  taxNumber1?: string;
  /**
   * Tax Number 2.
   * Maximum length: 11.
   * @nullable
   */
  taxNumber2?: string;
  /**
   * Tax Number 3.
   * Maximum length: 18.
   * @nullable
   */
  taxNumber3?: string;
  /**
   * Tax Number 4.
   * Maximum length: 18.
   * @nullable
   */
  taxNumber4?: string;
  /**
   * Tax Number 5.
   * Maximum length: 60.
   * @nullable
   */
  taxNumber5?: string;
  /**
   * Tax Number at Responsible Tax Authority.
   * Maximum length: 18.
   * @nullable
   */
  taxNumberResponsible?: string;
  /**
   * Tax Number Type.
   * Maximum length: 2.
   * @nullable
   */
  taxNumberType?: string;
  /**
   * Supplier indicator relevant for proof of delivery.
   * Maximum length: 1.
   * @nullable
   */
  suplrProofOfDelivRlvtCode?: string;
  /**
   * Tax Split.
   * @nullable
   */
  brTaxIsSplit?: boolean;
  /**
   * Instruction Key for Data Medium Exchange.
   * Maximum length: 2.
   * @nullable
   */
  dataExchangeInstructionKey?: string;
  /**
   * One-to-many navigation property to the [[SupplierCompany]] entity.
   */
  toSupplierCompany!: SupplierCompany[];
  /**
   * One-to-many navigation property to the [[SupplierPurchasingOrg]] entity.
   */
  toSupplierPurchasingOrg!: SupplierPurchasingOrg[];
  /**
   * One-to-many navigation property to the [[SupplierText]] entity.
   */
  toSupplierText!: SupplierText[];

  /**
   * Returns an entity builder to construct instances of `Supplier`.
   * @returns A builder that constructs instances of entity type `Supplier`.
   */
  static builder(): EntityBuilderType<Supplier, SupplierType> {
    return EntityV2.entityBuilder(Supplier);
  }

  /**
   * Returns a request builder to construct requests for operations on the `Supplier` entity type.
   * @returns A `Supplier` request builder.
   */
  static requestBuilder(): SupplierRequestBuilder {
    return new SupplierRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `Supplier`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `Supplier`.
   */
  static customField(fieldName: string): CustomFieldV2<Supplier> {
    return EntityV2.customFieldSelector(fieldName, Supplier);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { SupplierCompany, SupplierCompanyType } from './SupplierCompany';
import { SupplierPurchasingOrg, SupplierPurchasingOrgType } from './SupplierPurchasingOrg';
import { SupplierText, SupplierTextType } from './SupplierText';

export interface SupplierType {
  supplier: string;
  alternativePayeeAccountNumber?: string | null;
  authorizationGroup?: string | null;
  businessPartnerPanNumber?: string | null;
  createdByUser?: string | null;
  creationDate?: Moment | null;
  customer?: string | null;
  paymentIsBlockedForSupplier?: boolean | null;
  postingIsBlocked?: boolean | null;
  purchasingIsBlocked?: boolean | null;
  supplierAccountGroup?: string | null;
  supplierFullName?: string | null;
  supplierName?: string | null;
  vatRegistration?: string | null;
  birthDate?: Moment | null;
  concatenatedInternationalLocNo?: string | null;
  deletionIndicator?: boolean | null;
  fiscalAddress?: string | null;
  industry?: string | null;
  internationalLocationNumber1?: string | null;
  internationalLocationNumber2?: string | null;
  internationalLocationNumber3?: string | null;
  isNaturalPerson?: string | null;
  paymentReason?: string | null;
  responsibleType?: string | null;
  suplrQltyInProcmtCertfnValidTo?: Moment | null;
  suplrQualityManagementSystem?: string | null;
  supplierCorporateGroup?: string | null;
  supplierProcurementBlock?: string | null;
  taxNumber1?: string | null;
  taxNumber2?: string | null;
  taxNumber3?: string | null;
  taxNumber4?: string | null;
  taxNumber5?: string | null;
  taxNumberResponsible?: string | null;
  taxNumberType?: string | null;
  suplrProofOfDelivRlvtCode?: string | null;
  brTaxIsSplit?: boolean | null;
  dataExchangeInstructionKey?: string | null;
  toSupplierCompany: SupplierCompanyType[];
  toSupplierPurchasingOrg: SupplierPurchasingOrgType[];
  toSupplierText: SupplierTextType[];
}

export namespace Supplier {
  const _fieldBuilder: FieldBuilder<Constructable<Supplier>> = new FieldBuilder(Supplier);
  /**
   * Static representation of the [[supplier]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPPLIER = _fieldBuilder.buildEdmTypeField('Supplier', 'Edm.String', false);
  /**
   * Static representation of the [[alternativePayeeAccountNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ALTERNATIVE_PAYEE_ACCOUNT_NUMBER = _fieldBuilder.buildEdmTypeField('AlternativePayeeAccountNumber', 'Edm.String', true);
  /**
   * Static representation of the [[authorizationGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AUTHORIZATION_GROUP = _fieldBuilder.buildEdmTypeField('AuthorizationGroup', 'Edm.String', true);
  /**
   * Static representation of the [[businessPartnerPanNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER_PAN_NUMBER = _fieldBuilder.buildEdmTypeField('BusinessPartnerPanNumber', 'Edm.String', true);
  /**
   * Static representation of the [[createdByUser]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_USER = _fieldBuilder.buildEdmTypeField('CreatedByUser', 'Edm.String', true);
  /**
   * Static representation of the [[creationDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATION_DATE = _fieldBuilder.buildEdmTypeField('CreationDate', 'Edm.DateTime', true);
  /**
   * Static representation of the [[customer]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER = _fieldBuilder.buildEdmTypeField('Customer', 'Edm.String', true);
  /**
   * Static representation of the [[paymentIsBlockedForSupplier]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_IS_BLOCKED_FOR_SUPPLIER = _fieldBuilder.buildEdmTypeField('PaymentIsBlockedForSupplier', 'Edm.Boolean', true);
  /**
   * Static representation of the [[postingIsBlocked]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POSTING_IS_BLOCKED = _fieldBuilder.buildEdmTypeField('PostingIsBlocked', 'Edm.Boolean', true);
  /**
   * Static representation of the [[purchasingIsBlocked]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASING_IS_BLOCKED = _fieldBuilder.buildEdmTypeField('PurchasingIsBlocked', 'Edm.Boolean', true);
  /**
   * Static representation of the [[supplierAccountGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPPLIER_ACCOUNT_GROUP = _fieldBuilder.buildEdmTypeField('SupplierAccountGroup', 'Edm.String', true);
  /**
   * Static representation of the [[supplierFullName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPPLIER_FULL_NAME = _fieldBuilder.buildEdmTypeField('SupplierFullName', 'Edm.String', true);
  /**
   * Static representation of the [[supplierName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPPLIER_NAME = _fieldBuilder.buildEdmTypeField('SupplierName', 'Edm.String', true);
  /**
   * Static representation of the [[vatRegistration]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VAT_REGISTRATION = _fieldBuilder.buildEdmTypeField('VATRegistration', 'Edm.String', true);
  /**
   * Static representation of the [[birthDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BIRTH_DATE = _fieldBuilder.buildEdmTypeField('BirthDate', 'Edm.DateTime', true);
  /**
   * Static representation of the [[concatenatedInternationalLocNo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONCATENATED_INTERNATIONAL_LOC_NO = _fieldBuilder.buildEdmTypeField('ConcatenatedInternationalLocNo', 'Edm.String', true);
  /**
   * Static representation of the [[deletionIndicator]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DELETION_INDICATOR = _fieldBuilder.buildEdmTypeField('DeletionIndicator', 'Edm.Boolean', true);
  /**
   * Static representation of the [[fiscalAddress]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FISCAL_ADDRESS = _fieldBuilder.buildEdmTypeField('FiscalAddress', 'Edm.String', true);
  /**
   * Static representation of the [[industry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INDUSTRY = _fieldBuilder.buildEdmTypeField('Industry', 'Edm.String', true);
  /**
   * Static representation of the [[internationalLocationNumber1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INTERNATIONAL_LOCATION_NUMBER_1 = _fieldBuilder.buildEdmTypeField('InternationalLocationNumber1', 'Edm.String', true);
  /**
   * Static representation of the [[internationalLocationNumber2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INTERNATIONAL_LOCATION_NUMBER_2 = _fieldBuilder.buildEdmTypeField('InternationalLocationNumber2', 'Edm.String', true);
  /**
   * Static representation of the [[internationalLocationNumber3]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INTERNATIONAL_LOCATION_NUMBER_3 = _fieldBuilder.buildEdmTypeField('InternationalLocationNumber3', 'Edm.String', true);
  /**
   * Static representation of the [[isNaturalPerson]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_NATURAL_PERSON = _fieldBuilder.buildEdmTypeField('IsNaturalPerson', 'Edm.String', true);
  /**
   * Static representation of the [[paymentReason]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_REASON = _fieldBuilder.buildEdmTypeField('PaymentReason', 'Edm.String', true);
  /**
   * Static representation of the [[responsibleType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RESPONSIBLE_TYPE = _fieldBuilder.buildEdmTypeField('ResponsibleType', 'Edm.String', true);
  /**
   * Static representation of the [[suplrQltyInProcmtCertfnValidTo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPLR_QLTY_IN_PROCMT_CERTFN_VALID_TO = _fieldBuilder.buildEdmTypeField('SuplrQltyInProcmtCertfnValidTo', 'Edm.DateTime', true);
  /**
   * Static representation of the [[suplrQualityManagementSystem]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPLR_QUALITY_MANAGEMENT_SYSTEM = _fieldBuilder.buildEdmTypeField('SuplrQualityManagementSystem', 'Edm.String', true);
  /**
   * Static representation of the [[supplierCorporateGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPPLIER_CORPORATE_GROUP = _fieldBuilder.buildEdmTypeField('SupplierCorporateGroup', 'Edm.String', true);
  /**
   * Static representation of the [[supplierProcurementBlock]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPPLIER_PROCUREMENT_BLOCK = _fieldBuilder.buildEdmTypeField('SupplierProcurementBlock', 'Edm.String', true);
  /**
   * Static representation of the [[taxNumber1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_NUMBER_1 = _fieldBuilder.buildEdmTypeField('TaxNumber1', 'Edm.String', true);
  /**
   * Static representation of the [[taxNumber2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_NUMBER_2 = _fieldBuilder.buildEdmTypeField('TaxNumber2', 'Edm.String', true);
  /**
   * Static representation of the [[taxNumber3]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_NUMBER_3 = _fieldBuilder.buildEdmTypeField('TaxNumber3', 'Edm.String', true);
  /**
   * Static representation of the [[taxNumber4]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_NUMBER_4 = _fieldBuilder.buildEdmTypeField('TaxNumber4', 'Edm.String', true);
  /**
   * Static representation of the [[taxNumber5]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_NUMBER_5 = _fieldBuilder.buildEdmTypeField('TaxNumber5', 'Edm.String', true);
  /**
   * Static representation of the [[taxNumberResponsible]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_NUMBER_RESPONSIBLE = _fieldBuilder.buildEdmTypeField('TaxNumberResponsible', 'Edm.String', true);
  /**
   * Static representation of the [[taxNumberType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_NUMBER_TYPE = _fieldBuilder.buildEdmTypeField('TaxNumberType', 'Edm.String', true);
  /**
   * Static representation of the [[suplrProofOfDelivRlvtCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPLR_PROOF_OF_DELIV_RLVT_CODE = _fieldBuilder.buildEdmTypeField('SuplrProofOfDelivRlvtCode', 'Edm.String', true);
  /**
   * Static representation of the [[brTaxIsSplit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BR_TAX_IS_SPLIT = _fieldBuilder.buildEdmTypeField('BR_TaxIsSplit', 'Edm.Boolean', true);
  /**
   * Static representation of the [[dataExchangeInstructionKey]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DATA_EXCHANGE_INSTRUCTION_KEY = _fieldBuilder.buildEdmTypeField('DataExchangeInstructionKey', 'Edm.String', true);
  /**
   * Static representation of the one-to-many navigation property [[toSupplierCompany]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_SUPPLIER_COMPANY: Link<Supplier, SupplierCompany> = new Link('to_SupplierCompany', Supplier, SupplierCompany);
  /**
   * Static representation of the one-to-many navigation property [[toSupplierPurchasingOrg]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_SUPPLIER_PURCHASING_ORG: Link<Supplier, SupplierPurchasingOrg> = new Link('to_SupplierPurchasingOrg', Supplier, SupplierPurchasingOrg);
  /**
   * Static representation of the one-to-many navigation property [[toSupplierText]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_SUPPLIER_TEXT: Link<Supplier, SupplierText> = new Link('to_SupplierText', Supplier, SupplierText);
  /**
   * All fields of the Supplier entity.
   */
  export const _allFields: Array<EdmTypeField<Supplier, 'Edm.String', false, true> | EdmTypeField<Supplier, 'Edm.String', true, true> | OrderableEdmTypeField<Supplier, 'Edm.DateTime', true, true> | EdmTypeField<Supplier, 'Edm.Boolean', true, true> | Link<Supplier, SupplierCompany> | Link<Supplier, SupplierPurchasingOrg> | Link<Supplier, SupplierText>> = [
    Supplier.SUPPLIER,
    Supplier.ALTERNATIVE_PAYEE_ACCOUNT_NUMBER,
    Supplier.AUTHORIZATION_GROUP,
    Supplier.BUSINESS_PARTNER_PAN_NUMBER,
    Supplier.CREATED_BY_USER,
    Supplier.CREATION_DATE,
    Supplier.CUSTOMER,
    Supplier.PAYMENT_IS_BLOCKED_FOR_SUPPLIER,
    Supplier.POSTING_IS_BLOCKED,
    Supplier.PURCHASING_IS_BLOCKED,
    Supplier.SUPPLIER_ACCOUNT_GROUP,
    Supplier.SUPPLIER_FULL_NAME,
    Supplier.SUPPLIER_NAME,
    Supplier.VAT_REGISTRATION,
    Supplier.BIRTH_DATE,
    Supplier.CONCATENATED_INTERNATIONAL_LOC_NO,
    Supplier.DELETION_INDICATOR,
    Supplier.FISCAL_ADDRESS,
    Supplier.INDUSTRY,
    Supplier.INTERNATIONAL_LOCATION_NUMBER_1,
    Supplier.INTERNATIONAL_LOCATION_NUMBER_2,
    Supplier.INTERNATIONAL_LOCATION_NUMBER_3,
    Supplier.IS_NATURAL_PERSON,
    Supplier.PAYMENT_REASON,
    Supplier.RESPONSIBLE_TYPE,
    Supplier.SUPLR_QLTY_IN_PROCMT_CERTFN_VALID_TO,
    Supplier.SUPLR_QUALITY_MANAGEMENT_SYSTEM,
    Supplier.SUPPLIER_CORPORATE_GROUP,
    Supplier.SUPPLIER_PROCUREMENT_BLOCK,
    Supplier.TAX_NUMBER_1,
    Supplier.TAX_NUMBER_2,
    Supplier.TAX_NUMBER_3,
    Supplier.TAX_NUMBER_4,
    Supplier.TAX_NUMBER_5,
    Supplier.TAX_NUMBER_RESPONSIBLE,
    Supplier.TAX_NUMBER_TYPE,
    Supplier.SUPLR_PROOF_OF_DELIV_RLVT_CODE,
    Supplier.BR_TAX_IS_SPLIT,
    Supplier.DATA_EXCHANGE_INSTRUCTION_KEY,
    Supplier.TO_SUPPLIER_COMPANY,
    Supplier.TO_SUPPLIER_PURCHASING_ORG,
    Supplier.TO_SUPPLIER_TEXT
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<Supplier> = new AllFields('*', Supplier);
  /**
   * All key fields of the Supplier entity.
   */
  export const _keyFields: Array<Field<Supplier, boolean, boolean>> = [Supplier.SUPPLIER];
  /**
   * Mapping of all key field names to the respective static field property Supplier.
   */
  export const _keys: { [keys: string]: Field<Supplier, boolean, boolean> } = Supplier._keyFields.reduce((acc: { [keys: string]: Field<Supplier, boolean, boolean> }, field: Field<Supplier, boolean, boolean>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
