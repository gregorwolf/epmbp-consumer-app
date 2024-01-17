import { SupplierRequestBuilder } from './SupplierRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field, Link, OrderableEdmTypeField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "A_Supplier" of service "API_BUSINESS_PARTNER".
 */
export declare class Supplier extends EntityV2 implements SupplierType {
    /**
     * Technical entity name for Supplier.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Account Number of Supplier.
     * Maximum length: 10.
     */
    supplier: string;
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
    toSupplierCompany: SupplierCompany[];
    /**
     * One-to-many navigation property to the [[SupplierPurchasingOrg]] entity.
     */
    toSupplierPurchasingOrg: SupplierPurchasingOrg[];
    /**
     * One-to-many navigation property to the [[SupplierText]] entity.
     */
    toSupplierText: SupplierText[];
    /**
     * Returns an entity builder to construct instances of `Supplier`.
     * @returns A builder that constructs instances of entity type `Supplier`.
     */
    static builder(): EntityBuilderType<Supplier, SupplierType>;
    /**
     * Returns a request builder to construct requests for operations on the `Supplier` entity type.
     * @returns A `Supplier` request builder.
     */
    static requestBuilder(): SupplierRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Supplier`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Supplier`.
     */
    static customField(fieldName: string): CustomFieldV2<Supplier>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
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
export declare namespace Supplier {
    /**
     * Static representation of the [[supplier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUPPLIER: EdmTypeField<Supplier, "Edm.String", false, true>;
    /**
     * Static representation of the [[alternativePayeeAccountNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ALTERNATIVE_PAYEE_ACCOUNT_NUMBER: EdmTypeField<Supplier, "Edm.String", true, true>;
    /**
     * Static representation of the [[authorizationGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AUTHORIZATION_GROUP: EdmTypeField<Supplier, "Edm.String", true, true>;
    /**
     * Static representation of the [[businessPartnerPanNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER_PAN_NUMBER: EdmTypeField<Supplier, "Edm.String", true, true>;
    /**
     * Static representation of the [[createdByUser]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_USER: EdmTypeField<Supplier, "Edm.String", true, true>;
    /**
     * Static representation of the [[creationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATION_DATE: OrderableEdmTypeField<Supplier, "Edm.DateTime", true, true>;
    /**
     * Static representation of the [[customer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER: EdmTypeField<Supplier, "Edm.String", true, true>;
    /**
     * Static representation of the [[paymentIsBlockedForSupplier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENT_IS_BLOCKED_FOR_SUPPLIER: EdmTypeField<Supplier, "Edm.Boolean", true, true>;
    /**
     * Static representation of the [[postingIsBlocked]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const POSTING_IS_BLOCKED: EdmTypeField<Supplier, "Edm.Boolean", true, true>;
    /**
     * Static representation of the [[purchasingIsBlocked]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASING_IS_BLOCKED: EdmTypeField<Supplier, "Edm.Boolean", true, true>;
    /**
     * Static representation of the [[supplierAccountGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUPPLIER_ACCOUNT_GROUP: EdmTypeField<Supplier, "Edm.String", true, true>;
    /**
     * Static representation of the [[supplierFullName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUPPLIER_FULL_NAME: EdmTypeField<Supplier, "Edm.String", true, true>;
    /**
     * Static representation of the [[supplierName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUPPLIER_NAME: EdmTypeField<Supplier, "Edm.String", true, true>;
    /**
     * Static representation of the [[vatRegistration]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VAT_REGISTRATION: EdmTypeField<Supplier, "Edm.String", true, true>;
    /**
     * Static representation of the [[birthDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BIRTH_DATE: OrderableEdmTypeField<Supplier, "Edm.DateTime", true, true>;
    /**
     * Static representation of the [[concatenatedInternationalLocNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONCATENATED_INTERNATIONAL_LOC_NO: EdmTypeField<Supplier, "Edm.String", true, true>;
    /**
     * Static representation of the [[deletionIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DELETION_INDICATOR: EdmTypeField<Supplier, "Edm.Boolean", true, true>;
    /**
     * Static representation of the [[fiscalAddress]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FISCAL_ADDRESS: EdmTypeField<Supplier, "Edm.String", true, true>;
    /**
     * Static representation of the [[industry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INDUSTRY: EdmTypeField<Supplier, "Edm.String", true, true>;
    /**
     * Static representation of the [[internationalLocationNumber1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INTERNATIONAL_LOCATION_NUMBER_1: EdmTypeField<Supplier, "Edm.String", true, true>;
    /**
     * Static representation of the [[internationalLocationNumber2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INTERNATIONAL_LOCATION_NUMBER_2: EdmTypeField<Supplier, "Edm.String", true, true>;
    /**
     * Static representation of the [[internationalLocationNumber3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INTERNATIONAL_LOCATION_NUMBER_3: EdmTypeField<Supplier, "Edm.String", true, true>;
    /**
     * Static representation of the [[isNaturalPerson]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_NATURAL_PERSON: EdmTypeField<Supplier, "Edm.String", true, true>;
    /**
     * Static representation of the [[paymentReason]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENT_REASON: EdmTypeField<Supplier, "Edm.String", true, true>;
    /**
     * Static representation of the [[responsibleType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RESPONSIBLE_TYPE: EdmTypeField<Supplier, "Edm.String", true, true>;
    /**
     * Static representation of the [[suplrQltyInProcmtCertfnValidTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUPLR_QLTY_IN_PROCMT_CERTFN_VALID_TO: OrderableEdmTypeField<Supplier, "Edm.DateTime", true, true>;
    /**
     * Static representation of the [[suplrQualityManagementSystem]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUPLR_QUALITY_MANAGEMENT_SYSTEM: EdmTypeField<Supplier, "Edm.String", true, true>;
    /**
     * Static representation of the [[supplierCorporateGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUPPLIER_CORPORATE_GROUP: EdmTypeField<Supplier, "Edm.String", true, true>;
    /**
     * Static representation of the [[supplierProcurementBlock]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUPPLIER_PROCUREMENT_BLOCK: EdmTypeField<Supplier, "Edm.String", true, true>;
    /**
     * Static representation of the [[taxNumber1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TAX_NUMBER_1: EdmTypeField<Supplier, "Edm.String", true, true>;
    /**
     * Static representation of the [[taxNumber2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TAX_NUMBER_2: EdmTypeField<Supplier, "Edm.String", true, true>;
    /**
     * Static representation of the [[taxNumber3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TAX_NUMBER_3: EdmTypeField<Supplier, "Edm.String", true, true>;
    /**
     * Static representation of the [[taxNumber4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TAX_NUMBER_4: EdmTypeField<Supplier, "Edm.String", true, true>;
    /**
     * Static representation of the [[taxNumber5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TAX_NUMBER_5: EdmTypeField<Supplier, "Edm.String", true, true>;
    /**
     * Static representation of the [[taxNumberResponsible]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TAX_NUMBER_RESPONSIBLE: EdmTypeField<Supplier, "Edm.String", true, true>;
    /**
     * Static representation of the [[taxNumberType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TAX_NUMBER_TYPE: EdmTypeField<Supplier, "Edm.String", true, true>;
    /**
     * Static representation of the [[suplrProofOfDelivRlvtCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUPLR_PROOF_OF_DELIV_RLVT_CODE: EdmTypeField<Supplier, "Edm.String", true, true>;
    /**
     * Static representation of the [[brTaxIsSplit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BR_TAX_IS_SPLIT: EdmTypeField<Supplier, "Edm.Boolean", true, true>;
    /**
     * Static representation of the [[dataExchangeInstructionKey]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DATA_EXCHANGE_INSTRUCTION_KEY: EdmTypeField<Supplier, "Edm.String", true, true>;
    /**
     * Static representation of the one-to-many navigation property [[toSupplierCompany]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_SUPPLIER_COMPANY: Link<Supplier, SupplierCompany>;
    /**
     * Static representation of the one-to-many navigation property [[toSupplierPurchasingOrg]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_SUPPLIER_PURCHASING_ORG: Link<Supplier, SupplierPurchasingOrg>;
    /**
     * Static representation of the one-to-many navigation property [[toSupplierText]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_SUPPLIER_TEXT: Link<Supplier, SupplierText>;
    /**
     * All fields of the Supplier entity.
     */
    const _allFields: Array<EdmTypeField<Supplier, 'Edm.String', false, true> | EdmTypeField<Supplier, 'Edm.String', true, true> | OrderableEdmTypeField<Supplier, 'Edm.DateTime', true, true> | EdmTypeField<Supplier, 'Edm.Boolean', true, true> | Link<Supplier, SupplierCompany> | Link<Supplier, SupplierPurchasingOrg> | Link<Supplier, SupplierText>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<Supplier>;
    /**
     * All key fields of the Supplier entity.
     */
    const _keyFields: Array<Field<Supplier, boolean, boolean>>;
    /**
     * Mapping of all key field names to the respective static field property Supplier.
     */
    const _keys: {
        [keys: string]: Field<Supplier, boolean, boolean>;
    };
}
//# sourceMappingURL=Supplier.d.ts.map