import { BpContactToFuncAndDeptRequestBuilder } from './BpContactToFuncAndDeptRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field, OrderableEdmTypeField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "A_BPContactToFuncAndDept" of service "API_BUSINESS_PARTNER".
 */
export declare class BpContactToFuncAndDept extends EntityV2 implements BpContactToFuncAndDeptType {
    /**
     * Technical entity name for BpContactToFuncAndDept.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * BP Relationship Number.
     * Maximum length: 12.
     */
    relationshipNumber: string;
    /**
     * Business Partner Number.
     * Maximum length: 10.
     */
    businessPartnerCompany: string;
    /**
     * Business Partner Number.
     * Maximum length: 10.
     */
    businessPartnerPerson: string;
    /**
     * Validity Date (Valid To).
     */
    validityEndDate: Moment;
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
    static builder(): EntityBuilderType<BpContactToFuncAndDept, BpContactToFuncAndDeptType>;
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
    static customField(fieldName: string): CustomFieldV2<BpContactToFuncAndDept>;
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
export declare namespace BpContactToFuncAndDept {
    /**
     * Static representation of the [[relationshipNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RELATIONSHIP_NUMBER: EdmTypeField<BpContactToFuncAndDept, "Edm.String", false, true>;
    /**
     * Static representation of the [[businessPartnerCompany]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER_COMPANY: EdmTypeField<BpContactToFuncAndDept, "Edm.String", false, true>;
    /**
     * Static representation of the [[businessPartnerPerson]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER_PERSON: EdmTypeField<BpContactToFuncAndDept, "Edm.String", false, true>;
    /**
     * Static representation of the [[validityEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VALIDITY_END_DATE: OrderableEdmTypeField<BpContactToFuncAndDept, "Edm.DateTime", false, true>;
    /**
     * Static representation of the [[contactPersonAuthorityType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONTACT_PERSON_AUTHORITY_TYPE: EdmTypeField<BpContactToFuncAndDept, "Edm.String", true, true>;
    /**
     * Static representation of the [[contactPersonDepartment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONTACT_PERSON_DEPARTMENT: EdmTypeField<BpContactToFuncAndDept, "Edm.String", true, true>;
    /**
     * Static representation of the [[contactPersonDepartmentName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONTACT_PERSON_DEPARTMENT_NAME: EdmTypeField<BpContactToFuncAndDept, "Edm.String", true, true>;
    /**
     * Static representation of the [[contactPersonFunction]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONTACT_PERSON_FUNCTION: EdmTypeField<BpContactToFuncAndDept, "Edm.String", true, true>;
    /**
     * Static representation of the [[contactPersonFunctionName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONTACT_PERSON_FUNCTION_NAME: EdmTypeField<BpContactToFuncAndDept, "Edm.String", true, true>;
    /**
     * Static representation of the [[contactPersonRemarkText]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONTACT_PERSON_REMARK_TEXT: EdmTypeField<BpContactToFuncAndDept, "Edm.String", true, true>;
    /**
     * Static representation of the [[contactPersonVipType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONTACT_PERSON_VIP_TYPE: EdmTypeField<BpContactToFuncAndDept, "Edm.String", true, true>;
    /**
     * Static representation of the [[emailAddress]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMAIL_ADDRESS: EdmTypeField<BpContactToFuncAndDept, "Edm.String", true, true>;
    /**
     * Static representation of the [[faxNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FAX_NUMBER: EdmTypeField<BpContactToFuncAndDept, "Edm.String", true, true>;
    /**
     * Static representation of the [[faxNumberExtension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FAX_NUMBER_EXTENSION: EdmTypeField<BpContactToFuncAndDept, "Edm.String", true, true>;
    /**
     * Static representation of the [[phoneNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PHONE_NUMBER: EdmTypeField<BpContactToFuncAndDept, "Edm.String", true, true>;
    /**
     * Static representation of the [[phoneNumberExtension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PHONE_NUMBER_EXTENSION: EdmTypeField<BpContactToFuncAndDept, "Edm.String", true, true>;
    /**
     * Static representation of the [[relationshipCategory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RELATIONSHIP_CATEGORY: EdmTypeField<BpContactToFuncAndDept, "Edm.String", true, true>;
    /**
     * All fields of the BpContactToFuncAndDept entity.
     */
    const _allFields: Array<EdmTypeField<BpContactToFuncAndDept, 'Edm.String', false, true> | OrderableEdmTypeField<BpContactToFuncAndDept, 'Edm.DateTime', false, true> | EdmTypeField<BpContactToFuncAndDept, 'Edm.String', true, true>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<BpContactToFuncAndDept>;
    /**
     * All key fields of the BpContactToFuncAndDept entity.
     */
    const _keyFields: Array<Field<BpContactToFuncAndDept, boolean, boolean>>;
    /**
     * Mapping of all key field names to the respective static field property BpContactToFuncAndDept.
     */
    const _keys: {
        [keys: string]: Field<BpContactToFuncAndDept, boolean, boolean>;
    };
}
//# sourceMappingURL=BpContactToFuncAndDept.d.ts.map