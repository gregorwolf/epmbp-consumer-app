import { SupplierRequestBuilder } from './SupplierRequestBuilder';
import { Moment } from 'moment';
import { AllFields, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Field, Link, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "A_Supplier" of service "API_BUSINESS_PARTNER".
 */
export declare class Supplier extends Entity implements SupplierType {
    /**
     * Technical entity name for Supplier.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Supplier.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Account Number of Supplier.
     * Specifies an alphanumeric key that uniquely identifies the supplier in the SAP system.
     * Maximum length: 10.
     */
    supplier: string;
    /**
     * Account Number of the Alternative Payee.
     * The account number of the vendor with whom automatic payment transactions are carried out.
     * The field is only needed if payments are not to be made directly to the vendor to whom the payable is owed. The same applies to bank collections of receivables.The specification in this field applies to all company codes. There is a further field in which every company code can enter an alternative payee separately. If both fields are filled, the company code specification has priority.
     * Maximum length: 10.
     * @nullable
     */
    alternativePayeeAccountNumber?: string;
    /**
     * Authorization Group.
     * The authorization group allows extended authorization protection for particular objects. The authorization groups are freely definable. The authorization groups usually occur in authorization objects together with an activity.
     * Maximum length: 4.
     * @nullable
     */
    authorizationGroup?: string;
    /**
     * Name of Person who Created the Object.
     * Name with which the user who entered the master record was logged on in the R/3 System.
     * Maximum length: 12.
     * @nullable
     */
    createdByUser?: string;
    /**
     * Date on which the Record Was Created.
     * Date on which the master record, or the part of the master record being viewed, was created.
     * @nullable
     */
    creationDate?: Moment;
    /**
     * Customer Number.
     * Gives an alphanumeric key, which clearly identifies the customer or vendor in the SAP system.
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
     * Indicates that the account is blocked for posting for all company codes.
     * If you set this indicator, the system prevents users from posting items to this account and issues an error message to inform them that the account is blocked.
     * @nullable
     */
    postingIsBlocked?: boolean;
    /**
     * Centrally imposed purchasing block.
     * Indicates whether or not the supplier master record is blocked for all departments (that is, whether or not posting to this record is allowed at all).
     * @nullable
     */
    purchasingIsBlocked?: boolean;
    /**
     * Supplier Account Group.
     * The account group is a classifying feature within vendor master records. The account group determines:
     * the number interval for the account number of the vendor,whether the number is assigned by the user or by the system,which specifications are necessary and/or possible in the master record.
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
     * VAT registration number (VAT reg.no.) of the customer, vendor or your company code.
     * The VAT registration number is used within the EU for tax-exempt deliveries for the "EC sales list". The check rules are defined for each EU country and cannot be changed.
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
     * Indicates that all data in this master record is to be deleted.
     * To delete this data, you have to run the archiving program for Accounts Receivable or Payable. This program will archive all master records marked for deletion provided that there is no dependent data in them.Deletion flags can also be used in the program for deleting master data. You should, however, run this program only to delete test data prior to production startup.
     * @nullable
     */
    deletionIndicator?: boolean;
    /**
     * Account number of the master record with fiscal address.
     * Specifies an additional master record in which the official address is stored.
     * This address is used in Italy for business transactions with the tax office in Italy.
     * Maximum length: 10.
     * @nullable
     */
    fiscalAddress?: string;
    /**
     * Industry key.
     * An industry is a distinct group of companies with the same basic business activity. The industry key is used in selecting data for evaluations (for example, a vendor master data list). You can specify industries such as trade, banking, service, manufacturing, health care, public service, media and so on.
     * The industry field belongs to the general data area of customer and vendor master records.
     * Maximum length: 4.
     * @nullable
     */
    industry?: string;
    /**
     * International location number  (part 1).
     * Here you enter the first 7 digits of the international location number.
     * The International Location Number (ILN) is assigned (in Germany by the Centrale for Coorganisation GmbH)) when a company is founded. It consists of 13 digits, the last digit being the check digit. There are two categories of location numbers:Participants who only need an ILN to cleary and unmistakably identify themselves for communication with the business partner are given a category 1 ILN. This cannot be used to identify articles by means of EAN.Participants who wish to assign the location numbers for their own enterprise areas are given a category 2 ILN. For a category 2 ILN, digits 1 to 7 are described as basis number. This is used as basis for the creation of article numbers (EAN).
     * Maximum length: 7.
     * @nullable
     */
    internationalLocationNumber1?: string;
    /**
     * International location number (Part 2).
     * Here, you enter digits 8-12 of the 13-digit international location number.
     * The international location number (ILN) is assigned when establishing a company (by the "Zentrale für Coorganisation GmbH" in Germany). It consists of 13 digits, the last of which is the check digit. There are two types of international location numbers:Subscribers who only need one ILN to identify themselves in communication with the business partner are given an ILN of type 1. These cannot be used for identifying articles by means of EAN.Subscribers who need to assign location numbers for their own company areas are given an ILN of type 2. Positions 1 through 7 of the ILN type 2 are known as the basis number. This basis number forms the basis for article numbers (EAN).
     * Maximum length: 5.
     * @nullable
     */
    internationalLocationNumber2?: string;
    /**
     * Check digit for the international location number.
     * The check digit is derived from a special check digit procedure from digits of the previous international location numbers. In this way, you can check whether the ILN entered is actually valid.
     * Maximum length: 1.
     * @nullable
     */
    internationalLocationNumber3?: string;
    /**
     * Natural Person.
     * Denotes a natural person.
     * In the following countries, the system needs to know whether the taxpayer is a legal or natural person so that it can check the tax numbers correctly:BrazilBulgariaColombiaCroatiaGreeceItalyMexicoPeruSloveniaThailandUkraineThe flag is also used in conjunction with the Statement of Payments to Natural Persons report, as used in the Czech Republic and in Slovakia. This report only covers customers and vendors for whom you have set this indicator.In South Korea, it is used in conjunction with the Generic Withholding Tax Reporting program.
     * Maximum length: 1.
     * @nullable
     */
    isNaturalPerson?: string;
    /**
     * Tax type.
     * Classification of companies according to tax aspects.
     * Maximum length: 2.
     * @nullable
     */
    responsibleType?: string;
    /**
     * Validity date of certification.
     * Date up to which the certification of the QM-system is valid.
     * @nullable
     */
    suplrQltyInProcmtCertfnValidTo?: Moment;
    /**
     * Supplier's QM system.
     * If a QM system is maintained by the supplier, you can store a description of the QM system here.
     * If a material is activated for QM in procurement, the system initiates the following check whenever purchasing functions are carried out (for example, when a request for a quotation is made or if a purchase order is created):Whether the supplier's verified QM system, according to supplier master record or quality info-record (for a combination of supplier/material) meets the requirements for QM systems as specified in the material masterIn carrying out the check, the system relies on the defined assignments for target QM systems and actual QM systems in the Customizing application.If the check is unsuccessful, a warning message is issued when a request for quotation is initiated and an error message is issued for all other procurement activities.
     * Maximum length: 4.
     * @nullable
     */
    suplrQualityManagementSystem?: string;
    /**
     * Group Key.
     * If the customer or the vendor belongs to a group, you can enter a group key here. The group key is freely assignable.
     * If you create a matchcode using this group key, group evaluations are possible.
     * Maximum length: 10.
     * @nullable
     */
    supplierCorporateGroup?: string;
    /**
     * Function That Will Be Blocked.
     * Key that determines which procurement functions (for example, request for quotation, purchase order, or goods receipt) should be blocked for quality reasons.
     * You can enter a block key in the:Supplier master recordIn this case, the supplier block applies to all materials and plants.Quality info record for QM in procurementIn this case, the supplier block applies to a single material and plant.A block for quality reasons applies only to those materials for which QM in procurement is active.
     * Maximum length: 2.
     * @nullable
     */
    supplierProcurementBlock?: string;
    /**
     * Tax Number 1.
     * Specifies the tax number.
     * Enter the appropriate tax number:Country/Region Tax NumberArgentina  CUIT number or CUIL numberBelgium Enterprise numberBrazil  CNPJ numberBulgaria Unified identification codeChile RUT numberChina VAT registration number (shui wu deng ji hao)Colombia NIT numberCroatia Legal persons: company identification numberNatural persons: JMBG numberCzech Republic  DIC numberFrance SIRET numberGreece Personal IDHungary  Tax numberItaly Fiscal codeKazakhstan RNN (obsolete)Mexico RFC numberNetherlands SI registration number (Aansluitnummer UWV) of chain- liability vendorNorway VAT numberPeru RUC numberPhilippines Taxpayer identification number (see below)Poland NIP numberPortugal  NIF numberRomania Tax numberRussia INNSlovakia  DIC numberSlovenia Tax numberSouth Korea Natural persons: Personal identification numberLegal persons: Corporation IDSpain NIF numberSwitzerland  UID numberTaiwan GUI registration numberThailand Personal IDTurkey Name of business partner's tax officeUkraine Taxpayer identification numberUnited Kingdom Company registration numberUnited States Social security numberVenezuela  RIF numberIn the Philippines, enter the taxpayer identification number with a V or N at the end, as follows:If the business partner is liable to VAT: 999-999-999-999VIf the business partner is not liable to VAT: 999-999-999-999N.
     * Maximum length: 16.
     * @nullable
     */
    taxNumber1?: string;
    /**
     * Tax Number 2.
     * Specifies the tax number.
     * Enter the appropriate tax number:Country/Region Tax NumberArgentina NIP number or CM numberBelgium VAT numberBrazil  CPF numberBulgaria Legal persons: tax numberNatural persons: personal IDCroatia OIB number Czech Republic  ICO numberFrance SIREN numberGreece AFM numberIndia TINItaly  VAT numberKazakhstan BC (Beneficiary Code)Netherlands BSN numberRussia OKPO codeSlovakia  ICO numberSouth Korea VAT registration numberSweden Organization registration numberSwitzerland VAT numberTaiwan Tax registration numberUkraine Legal persons: USREOU numberNatural persons: SRNP numberTurkey Tax numberUnited Kingdom NI numberUnited States Employer identification numberVenezuela NIT number.
     * Maximum length: 11.
     * @nullable
     */
    taxNumber2?: string;
    /**
     * Tax Number 3.
     * Specifies the tax number.
     * Enter the tax number that applies:Country Tax numberArgentina Withholding agent numberBrazil State tax numberBulgaria Social security numberMexico CURP numberKazakhstan BINNetherlands Tax registration number (Loonbelastingnummer) of the chain-liability vendorRussia KPP numberThailand Tax ID     Ukraine VAT registration number.
     * Maximum length: 18.
     * @nullable
     */
    taxNumber3?: string;
    /**
     * Tax Number 4.
     * Specifies the tax number.
     * Enter the appropriate tax number:Country Tax NumberBrazil Municipal tax numberKazakhstan IINRussia OFK number (for public bodies only).
     * Maximum length: 18.
     * @nullable
     */
    taxNumber4?: string;
    /**
     * Tax Number 5.
     * Kazakhstan
     * Specifies the certificate of registration as VAT payer in the following format: XXXXXYYYYYYYZZZZZZZZ, where: XXXXX is the certificate serial number, YYYYYYY is the certificate number and ZZZZZZZZ is the date of certificate issue.
     * Maximum length: 60.
     * @nullable
     */
    taxNumber5?: string;
    /**
     * Tax Number at Responsible Tax Authority.
     * The tax number of the vendor at the responsible tax authority.
     * Maximum length: 18.
     * @nullable
     */
    taxNumberResponsible?: string;
    /**
     * Tax Number Type.
     * Taxes in Argentina:
     * The format and the check of tax number 1 depend on the two-digit tax number type.The tax number type is an identification type for tax in Argentina (for example, 80 for CUIT) and is used for the DGI tax report.
     * Maximum length: 2.
     * @nullable
     */
    taxNumberType?: string;
    /**
     * Supplier indicator relevant for proof of delivery.
     * This indicator controls the process of proof of delivery during the incoming goods process for inbound deliveries. Processing is activating by switching on this indicator in the supplier master and by switching on the corresponding indicator in the delivery item category.
     * There are the following different characteristics:' ':  not relevant for POD'A':  generally relevant for POD'B':  only relevant for POD if differences(Difference between notified quantity and actual quantity received).
     * Maximum length: 1.
     * @nullable
     */
    suplrProofOfDelivRlvtCode?: string;
    /**
     * Tax Split.
     * Tax calculation for Brazil:
     * The IPI tax value is split up for this vendor. 50% of the calculated IPI tax value is posted as deductible input tax, 50% is deducted from the inventory posting or posting to expense account.
     * @nullable
     */
    brTaxIsSplit?: boolean;
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
     * Returns an entity builder to construct instances `Supplier`.
     * @returns A builder that constructs instances of entity type `Supplier`.
     */
    static builder(): EntityBuilderType<Supplier, SupplierTypeForceMandatory>;
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
    static customField(fieldName: string): CustomField<Supplier>;
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
    alternativePayeeAccountNumber?: string;
    authorizationGroup?: string;
    createdByUser?: string;
    creationDate?: Moment;
    customer?: string;
    paymentIsBlockedForSupplier?: boolean;
    postingIsBlocked?: boolean;
    purchasingIsBlocked?: boolean;
    supplierAccountGroup?: string;
    supplierFullName?: string;
    supplierName?: string;
    vatRegistration?: string;
    birthDate?: Moment;
    concatenatedInternationalLocNo?: string;
    deletionIndicator?: boolean;
    fiscalAddress?: string;
    industry?: string;
    internationalLocationNumber1?: string;
    internationalLocationNumber2?: string;
    internationalLocationNumber3?: string;
    isNaturalPerson?: string;
    responsibleType?: string;
    suplrQltyInProcmtCertfnValidTo?: Moment;
    suplrQualityManagementSystem?: string;
    supplierCorporateGroup?: string;
    supplierProcurementBlock?: string;
    taxNumber1?: string;
    taxNumber2?: string;
    taxNumber3?: string;
    taxNumber4?: string;
    taxNumber5?: string;
    taxNumberResponsible?: string;
    taxNumberType?: string;
    suplrProofOfDelivRlvtCode?: string;
    brTaxIsSplit?: boolean;
    toSupplierCompany: SupplierCompanyType[];
    toSupplierPurchasingOrg: SupplierPurchasingOrgType[];
    toSupplierText: SupplierTextType[];
}
export interface SupplierTypeForceMandatory {
    supplier: string;
    alternativePayeeAccountNumber: string;
    authorizationGroup: string;
    createdByUser: string;
    creationDate: Moment;
    customer: string;
    paymentIsBlockedForSupplier: boolean;
    postingIsBlocked: boolean;
    purchasingIsBlocked: boolean;
    supplierAccountGroup: string;
    supplierFullName: string;
    supplierName: string;
    vatRegistration: string;
    birthDate: Moment;
    concatenatedInternationalLocNo: string;
    deletionIndicator: boolean;
    fiscalAddress: string;
    industry: string;
    internationalLocationNumber1: string;
    internationalLocationNumber2: string;
    internationalLocationNumber3: string;
    isNaturalPerson: string;
    responsibleType: string;
    suplrQltyInProcmtCertfnValidTo: Moment;
    suplrQualityManagementSystem: string;
    supplierCorporateGroup: string;
    supplierProcurementBlock: string;
    taxNumber1: string;
    taxNumber2: string;
    taxNumber3: string;
    taxNumber4: string;
    taxNumber5: string;
    taxNumberResponsible: string;
    taxNumberType: string;
    suplrProofOfDelivRlvtCode: string;
    brTaxIsSplit: boolean;
    toSupplierCompany: SupplierCompanyType[];
    toSupplierPurchasingOrg: SupplierPurchasingOrgType[];
    toSupplierText: SupplierTextType[];
}
export declare namespace Supplier {
    /**
     * Static representation of the [[supplier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUPPLIER: StringField<Supplier>;
    /**
     * Static representation of the [[alternativePayeeAccountNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ALTERNATIVE_PAYEE_ACCOUNT_NUMBER: StringField<Supplier>;
    /**
     * Static representation of the [[authorizationGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AUTHORIZATION_GROUP: StringField<Supplier>;
    /**
     * Static representation of the [[createdByUser]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_USER: StringField<Supplier>;
    /**
     * Static representation of the [[creationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATION_DATE: DateField<Supplier>;
    /**
     * Static representation of the [[customer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER: StringField<Supplier>;
    /**
     * Static representation of the [[paymentIsBlockedForSupplier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENT_IS_BLOCKED_FOR_SUPPLIER: BooleanField<Supplier>;
    /**
     * Static representation of the [[postingIsBlocked]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const POSTING_IS_BLOCKED: BooleanField<Supplier>;
    /**
     * Static representation of the [[purchasingIsBlocked]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASING_IS_BLOCKED: BooleanField<Supplier>;
    /**
     * Static representation of the [[supplierAccountGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUPPLIER_ACCOUNT_GROUP: StringField<Supplier>;
    /**
     * Static representation of the [[supplierFullName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUPPLIER_FULL_NAME: StringField<Supplier>;
    /**
     * Static representation of the [[supplierName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUPPLIER_NAME: StringField<Supplier>;
    /**
     * Static representation of the [[vatRegistration]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VAT_REGISTRATION: StringField<Supplier>;
    /**
     * Static representation of the [[birthDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BIRTH_DATE: DateField<Supplier>;
    /**
     * Static representation of the [[concatenatedInternationalLocNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONCATENATED_INTERNATIONAL_LOC_NO: StringField<Supplier>;
    /**
     * Static representation of the [[deletionIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DELETION_INDICATOR: BooleanField<Supplier>;
    /**
     * Static representation of the [[fiscalAddress]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FISCAL_ADDRESS: StringField<Supplier>;
    /**
     * Static representation of the [[industry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INDUSTRY: StringField<Supplier>;
    /**
     * Static representation of the [[internationalLocationNumber1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INTERNATIONAL_LOCATION_NUMBER_1: StringField<Supplier>;
    /**
     * Static representation of the [[internationalLocationNumber2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INTERNATIONAL_LOCATION_NUMBER_2: StringField<Supplier>;
    /**
     * Static representation of the [[internationalLocationNumber3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INTERNATIONAL_LOCATION_NUMBER_3: StringField<Supplier>;
    /**
     * Static representation of the [[isNaturalPerson]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_NATURAL_PERSON: StringField<Supplier>;
    /**
     * Static representation of the [[responsibleType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RESPONSIBLE_TYPE: StringField<Supplier>;
    /**
     * Static representation of the [[suplrQltyInProcmtCertfnValidTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUPLR_QLTY_IN_PROCMT_CERTFN_VALID_TO: DateField<Supplier>;
    /**
     * Static representation of the [[suplrQualityManagementSystem]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUPLR_QUALITY_MANAGEMENT_SYSTEM: StringField<Supplier>;
    /**
     * Static representation of the [[supplierCorporateGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUPPLIER_CORPORATE_GROUP: StringField<Supplier>;
    /**
     * Static representation of the [[supplierProcurementBlock]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUPPLIER_PROCUREMENT_BLOCK: StringField<Supplier>;
    /**
     * Static representation of the [[taxNumber1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TAX_NUMBER_1: StringField<Supplier>;
    /**
     * Static representation of the [[taxNumber2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TAX_NUMBER_2: StringField<Supplier>;
    /**
     * Static representation of the [[taxNumber3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TAX_NUMBER_3: StringField<Supplier>;
    /**
     * Static representation of the [[taxNumber4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TAX_NUMBER_4: StringField<Supplier>;
    /**
     * Static representation of the [[taxNumber5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TAX_NUMBER_5: StringField<Supplier>;
    /**
     * Static representation of the [[taxNumberResponsible]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TAX_NUMBER_RESPONSIBLE: StringField<Supplier>;
    /**
     * Static representation of the [[taxNumberType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TAX_NUMBER_TYPE: StringField<Supplier>;
    /**
     * Static representation of the [[suplrProofOfDelivRlvtCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUPLR_PROOF_OF_DELIV_RLVT_CODE: StringField<Supplier>;
    /**
     * Static representation of the [[brTaxIsSplit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BR_TAX_IS_SPLIT: BooleanField<Supplier>;
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
    const _allFields: Array<StringField<Supplier> | DateField<Supplier> | BooleanField<Supplier> | Link<Supplier, SupplierCompany> | Link<Supplier, SupplierPurchasingOrg> | Link<Supplier, SupplierText>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<Supplier>;
    /**
     * All key fields of the Supplier entity.
     */
    const _keyFields: Array<Field<Supplier>>;
    /**
     * Mapping of all key field names to the respective static field property Supplier.
     */
    const _keys: {
        [keys: string]: Field<Supplier>;
    };
}
//# sourceMappingURL=Supplier.d.ts.map