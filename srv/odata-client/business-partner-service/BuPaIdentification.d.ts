import { BuPaIdentificationRequestBuilder } from './BuPaIdentificationRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Field, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "A_BuPaIdentification" of service "API_BUSINESS_PARTNER".
 */
export declare class BuPaIdentification extends Entity implements BuPaIdentificationType {
    /**
     * Technical entity name for BuPaIdentification.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for BuPaIdentification.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Business Partner Number.
     * Key identifying a business partner in the SAP system. The key is unique within a client.
     * Maximum length: 10.
     */
    businessPartner: string;
    /**
     * Identification Type.
     * A document (such as an ID card or driver's license) or an entry in a system of records (such as a commercial register) whose key can be stored as an attribute for a business partner.
     * The identification type is for classifying identification numbers.You can define the identification types and their descriptions in Customizing.You can also specify for which business partner category an ID type should be valid.If necessary, assign the identification type to an Identification Category.You can only assign one identification type to an identification category.
     * Maximum length: 6.
     */
    bpIdentificationType: string;
    /**
     * Identification Number.
     * Number that serves to identify a business partner, such as driver's license, or ID card number.
     * Maximum length: 60.
     */
    bpIdentificationNumber: string;
    /**
     * Responsible Institution for ID Number.
     * Institution that adminsters or assigns an ID number.
     * Maximum length: 40.
     * @nullable
     */
    bpIdnNmbrIssuingInstitute?: string;
    /**
     * Date of Entry for ID Number.
     * Date on which the ID number was registered or assigned by the appropriate authority.
     * @nullable
     */
    bpIdentificationEntryDate?: Moment;
    /**
     * Country in Which ID Number is Valid or Was Assigned.
     * Country in which an ID number was assigned, or in which the number is valid.
     * Maximum length: 3.
     * @nullable
     */
    country?: string;
    /**
     * Region (State, Province, County).
     * In some countries, the region forms part of the address. The meaning depends on the country.
     * The automatic address formatting function prints the region in addresses in the USA, Canada, Italy, Brazil or Australia, and the county in Great Britain.For more information, see the examples in the documentation on the Address Layout Key.Meaning of the regional code in ...Australia       -&gt;  ProvinceBrazil          -&gt;  StateCanada          -&gt;  ProvinceGermany         -&gt;  StateGreat Britain   -&gt;  CountyItaly           -&gt;  ProvinceJapan           -&gt;  PrefectureSwitzerland     -&gt;  CantonUSA             -&gt;  State.
     * Maximum length: 3.
     * @nullable
     */
    region?: string;
    /**
     * Validity Start for ID Number.
     * This date marks the start of validity of an ID number.
     * @nullable
     */
    validityStartDate?: Moment;
    /**
     * Validity End for ID Number.
     * This date marks the end of validity of an ID number.
     * @nullable
     */
    validityEndDate?: Moment;
    /**
     * Authorization Group.
     * You can use authorization groups to stipulate which business partners a user is allowed to process.
     * Use the following authorization object:'Business partners: authorization groups' (B_BUPA_GRP).The system only checks this authorization if you made an entry in the "Authorization group" field for the business partner. Otherwise, any user may process the business partner.
     * Maximum length: 4.
     * @nullable
     */
    authorizationGroup?: string;
    /**
     * Returns an entity builder to construct instances `BuPaIdentification`.
     * @returns A builder that constructs instances of entity type `BuPaIdentification`.
     */
    static builder(): EntityBuilderType<BuPaIdentification, BuPaIdentificationTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `BuPaIdentification` entity type.
     * @returns A `BuPaIdentification` request builder.
     */
    static requestBuilder(): BuPaIdentificationRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `BuPaIdentification`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `BuPaIdentification`.
     */
    static customField(fieldName: string): CustomField<BuPaIdentification>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface BuPaIdentificationType {
    businessPartner: string;
    bpIdentificationType: string;
    bpIdentificationNumber: string;
    bpIdnNmbrIssuingInstitute?: string;
    bpIdentificationEntryDate?: Moment;
    country?: string;
    region?: string;
    validityStartDate?: Moment;
    validityEndDate?: Moment;
    authorizationGroup?: string;
}
export interface BuPaIdentificationTypeForceMandatory {
    businessPartner: string;
    bpIdentificationType: string;
    bpIdentificationNumber: string;
    bpIdnNmbrIssuingInstitute: string;
    bpIdentificationEntryDate: Moment;
    country: string;
    region: string;
    validityStartDate: Moment;
    validityEndDate: Moment;
    authorizationGroup: string;
}
export declare namespace BuPaIdentification {
    /**
     * Static representation of the [[businessPartner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER: StringField<BuPaIdentification>;
    /**
     * Static representation of the [[bpIdentificationType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_IDENTIFICATION_TYPE: StringField<BuPaIdentification>;
    /**
     * Static representation of the [[bpIdentificationNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_IDENTIFICATION_NUMBER: StringField<BuPaIdentification>;
    /**
     * Static representation of the [[bpIdnNmbrIssuingInstitute]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_IDN_NMBR_ISSUING_INSTITUTE: StringField<BuPaIdentification>;
    /**
     * Static representation of the [[bpIdentificationEntryDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_IDENTIFICATION_ENTRY_DATE: DateField<BuPaIdentification>;
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY: StringField<BuPaIdentification>;
    /**
     * Static representation of the [[region]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REGION: StringField<BuPaIdentification>;
    /**
     * Static representation of the [[validityStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VALIDITY_START_DATE: DateField<BuPaIdentification>;
    /**
     * Static representation of the [[validityEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VALIDITY_END_DATE: DateField<BuPaIdentification>;
    /**
     * Static representation of the [[authorizationGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AUTHORIZATION_GROUP: StringField<BuPaIdentification>;
    /**
     * All fields of the BuPaIdentification entity.
     */
    const _allFields: Array<StringField<BuPaIdentification> | DateField<BuPaIdentification>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<BuPaIdentification>;
    /**
     * All key fields of the BuPaIdentification entity.
     */
    const _keyFields: Array<Field<BuPaIdentification>>;
    /**
     * Mapping of all key field names to the respective static field property BuPaIdentification.
     */
    const _keys: {
        [keys: string]: Field<BuPaIdentification>;
    };
}
//# sourceMappingURL=BuPaIdentification.d.ts.map