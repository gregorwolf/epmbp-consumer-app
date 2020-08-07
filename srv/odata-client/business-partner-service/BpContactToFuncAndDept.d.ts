import { BpContactToFuncAndDeptRequestBuilder } from './BpContactToFuncAndDeptRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Field, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "A_BPContactToFuncAndDept" of service "API_BUSINESS_PARTNER".
 */
export declare class BpContactToFuncAndDept extends Entity implements BpContactToFuncAndDeptType {
    /**
     * Technical entity name for BpContactToFuncAndDept.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for BpContactToFuncAndDept.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * BP Relationship Number.
     * The business partner relationship number is an internal number that identifies the business partner relationship set.
     * Maximum length: 12.
     */
    relationshipNumber: string;
    /**
     * Business Partner Number.
     * Key identifying a business partner in the SAP system. The key is unique within a client.
     * Maximum length: 10.
     */
    businessPartnerCompany: string;
    /**
     * Business Partner Number.
     * Key identifying a business partner in the SAP system. The key is unique within a client.
     * Maximum length: 10.
     */
    businessPartnerPerson: string;
    /**
     * Validity Date (Valid To).
     */
    validityEndDate: Moment;
    /**
     * Function of partner.
     * Identifies the function that a person has within a company.
     * This is a contact person attribute that you can define in Customizing.Personnel managerSecretary.
     * Maximum length: 4.
     * @nullable
     */
    contactPersonFunction?: string;
    /**
     * Department.
     * Name of the department of a business partner for your internal usage.
     * The name given by the business partner to this particular department may differ from the name that you use. You can enter the name given by the business partner in the field company department.This is a contact person attribute that you can define in Customizing.For your purposes, the department name is "Sales". The business partner names the same department "Sales South".
     * Maximum length: 4.
     * @nullable
     */
    contactPersonDepartment?: string;
    /**
     * Telephone no.: dialling code+number.
     * Telephone number, consisting of dialling code and number, but without country dialling code.
     * If the telephone number consists of a company number and an extension, the extension must be entered in the field extension.Telephone number, as it is dialled from within the country.For the number "01234/567-0" enter the following:Telephone: 01234/567Estension: 0For the number "01234/567-891" enter the following:Telephone: 01234/567Extension: 891For the number "012-345-678" (678 as extension) enter the following:Telepone: 012-345Extension: 678In the following cases enter the complete number (without country dialling code) in the field Telephone:No part of the number can be regarded as an extension.You are not sure which part of the number can be regarded as an extension.
     * Maximum length: 30.
     * @nullable
     */
    phoneNumber?: string;
    /**
     * Telephone no.: Extension.
     * Telephone extension number
     * If the telephone number consists of a company number and an extension, the extension should be entered here.Enter the extension.The following rules apply for the format of telephone and fax numbers:The length of the entries in the field Telephone and Extension (Fax and Extension) cannot be more than 24 characters in total.Leading spaces are not allowed in the field Telephone or Fax or in the field Extension.Valid characters are:Numbers (0123456789)Letters (ABCDEFGHIJKLMNOPQRSTUVWXYZ)Following other characters:  /, (, ), - *, # and " " (space), but not as a leading space.If an + is entered as the first character, the system checks whether the specified number starts with a country code. If so, a warning message is displayed because the country code is automatically determined by the system and should not be stored in the Telephone number (Fax number) field.If an &amp; is entered as the first character, the automatic check and formatting of the telephone number (fax number), as well as the determination of the country code, is suppressed.For the number "01234/567-0" enter the following:Telephone: 01234/567Estension: 0For the number "01234/567-891" enter the following:Telephone: 01234/567Extension: 891For the number "012-345-678" (678 as extension) enter the following:Telepone: 012-345Extension: 678In the following cases enter the complete number (without country dialling code) in the field Telephone:No part of the number can be regarded as an extension.You are not sure which part of the number can be regarded as an extension.
     * Maximum length: 10.
     * @nullable
     */
    phoneNumberExtension?: string;
    /**
     * Fax number: dialling code+number.
     * Fax number, consisting of dialling code and number, but without country dialling code.
     * If the fax number consists of a company number and an extension, the extension must be entered in the field extension.Fax number, as it is to be dialled from within the same country.Enter the following for the number "01234/567-0":Fax: 01234/567Extension: 0Enter the following for the number "01234/567-891":Fax: 01234/567Extension: 891For the number "012-345-678" (678 as extension) enter the following:Fax: 012-345Extension: 678In the following cases, enter the complete number (without country dialing code) in the field Fax:No part of the number can be considered as an extension.You are not sure which part of the number can be considered as an extension.
     * Maximum length: 30.
     * @nullable
     */
    faxNumber?: string;
    /**
     * Fax no.: Extension.
     * Fax extension number
     * If the fax number consists of a company number and an extension, the extension must be entered here.Enter the extensionThe following rules apply for the format of telephone and fax numbers:The length of the entries in the field Telephone and Extension (Fax and Extension) cannot be more than 24 characters in total.Leading spaces are not allowed in the field Telephone or Fax or in the field Extension.Valid characters are:Numbers (0123456789)Letters (ABCDEFGHIJKLMNOPQRSTUVWXYZ)Following other characters:  /, (, ), - *, # and " " (space), but not as a leading space.If an + is entered as the first character, the system checks whether the specified number starts with a country code. If so, a warning message is displayed because the country code is automatically determined by the system and should not be stored in the Telephone number (Fax number) field.If an &amp; is entered as the first character, the automatic check and formatting of the telephone number (fax number), as well as the determination of the country code, is suppressed.Enter the following for the number "01234/567-0":Fax: 01234/567Extension: 0Enter the following for the number "01234/567-891":Fax: 01234/567Extension: 891For the number "012-345-678" (678 as extension) enter the following:Fax: 012-345Extension: 678In the following cases, enter the complete number (without country dialing code) in the field Fax:No part of the number can be considered as an extension.You are not sure which part of the number can be considered as an extension.
     * Maximum length: 10.
     * @nullable
     */
    faxNumberExtension?: string;
    /**
     * Email Address.
     * Internet mail address, also called e-mail address.
     * Example: user.name@company.comThe Internet mail address is used to send mail via the Internet world-wide; the protocol used is SMTP (Simple Mail Transfer Protocol).The Internet mail address format is specified in various RFCs (Internet Request for Comment), including RFCs 821 and 822.This is not an IP address (192.56.30.6).
     * Maximum length: 241.
     * @nullable
     */
    emailAddress?: string;
    /**
     * Business Partner Relationship Category.
     * A relationship may exist between two business partners. The business partner relationship category characterizes the features of the relationship.
     * A distinction is made between a one-way and an undirected business partner relationship category. In a one-way relationship category, the relationship extends from one partner to another, but not vice versa.Marriage (undirected)Employee (one-way)Contact person (one-way).
     * Maximum length: 6.
     * @nullable
     */
    relationshipCategory?: string;
    /**
     * Returns an entity builder to construct instances `BpContactToFuncAndDept`.
     * @returns A builder that constructs instances of entity type `BpContactToFuncAndDept`.
     */
    static builder(): EntityBuilderType<BpContactToFuncAndDept, BpContactToFuncAndDeptTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `BpContactToFuncAndDept` entity type.
     * @returns A `BpContactToFuncAndDept` request builder.
     */
    static requestBuilder(): BpContactToFuncAndDeptRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `BpContactToFuncAndDept`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `BpContactToFuncAndDept`.
     */
    static customField(fieldName: string): CustomField<BpContactToFuncAndDept>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface BpContactToFuncAndDeptType {
    relationshipNumber: string;
    businessPartnerCompany: string;
    businessPartnerPerson: string;
    validityEndDate: Moment;
    contactPersonFunction?: string;
    contactPersonDepartment?: string;
    phoneNumber?: string;
    phoneNumberExtension?: string;
    faxNumber?: string;
    faxNumberExtension?: string;
    emailAddress?: string;
    relationshipCategory?: string;
}
export interface BpContactToFuncAndDeptTypeForceMandatory {
    relationshipNumber: string;
    businessPartnerCompany: string;
    businessPartnerPerson: string;
    validityEndDate: Moment;
    contactPersonFunction: string;
    contactPersonDepartment: string;
    phoneNumber: string;
    phoneNumberExtension: string;
    faxNumber: string;
    faxNumberExtension: string;
    emailAddress: string;
    relationshipCategory: string;
}
export declare namespace BpContactToFuncAndDept {
    /**
     * Static representation of the [[relationshipNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RELATIONSHIP_NUMBER: StringField<BpContactToFuncAndDept>;
    /**
     * Static representation of the [[businessPartnerCompany]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER_COMPANY: StringField<BpContactToFuncAndDept>;
    /**
     * Static representation of the [[businessPartnerPerson]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER_PERSON: StringField<BpContactToFuncAndDept>;
    /**
     * Static representation of the [[validityEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VALIDITY_END_DATE: DateField<BpContactToFuncAndDept>;
    /**
     * Static representation of the [[contactPersonFunction]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONTACT_PERSON_FUNCTION: StringField<BpContactToFuncAndDept>;
    /**
     * Static representation of the [[contactPersonDepartment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONTACT_PERSON_DEPARTMENT: StringField<BpContactToFuncAndDept>;
    /**
     * Static representation of the [[phoneNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PHONE_NUMBER: StringField<BpContactToFuncAndDept>;
    /**
     * Static representation of the [[phoneNumberExtension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PHONE_NUMBER_EXTENSION: StringField<BpContactToFuncAndDept>;
    /**
     * Static representation of the [[faxNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FAX_NUMBER: StringField<BpContactToFuncAndDept>;
    /**
     * Static representation of the [[faxNumberExtension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FAX_NUMBER_EXTENSION: StringField<BpContactToFuncAndDept>;
    /**
     * Static representation of the [[emailAddress]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMAIL_ADDRESS: StringField<BpContactToFuncAndDept>;
    /**
     * Static representation of the [[relationshipCategory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RELATIONSHIP_CATEGORY: StringField<BpContactToFuncAndDept>;
    /**
     * All fields of the BpContactToFuncAndDept entity.
     */
    const _allFields: Array<StringField<BpContactToFuncAndDept> | DateField<BpContactToFuncAndDept>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<BpContactToFuncAndDept>;
    /**
     * All key fields of the BpContactToFuncAndDept entity.
     */
    const _keyFields: Array<Field<BpContactToFuncAndDept>>;
    /**
     * Mapping of all key field names to the respective static field property BpContactToFuncAndDept.
     */
    const _keys: {
        [keys: string]: Field<BpContactToFuncAndDept>;
    };
}
//# sourceMappingURL=BpContactToFuncAndDept.d.ts.map