/*!
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EpmBusinessPartnerSetRequestBuilder } from './EpmBusinessPartnerSetRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Selectable, StringField } from '@sap/cloud-sdk-core';
/**
 * This class represents the entity "EPMBusinessPartnerSet" of service "ZEPM_BP_SRV".
 */
export declare class EpmBusinessPartnerSet extends Entity implements EpmBusinessPartnerSetType {
    /**
     * Technical entity name for EpmBusinessPartnerSet.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EpmBusinessPartnerSet.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Business Partner ID.
     * Maximum length: 10.
     */
    bpId: string;
    /**
     * Bus. Part. Role.
     * Maximum length: 3.
     */
    bpRole: string;
    /**
     * Email.
     * Maximum length: 255.
     */
    emailAddress: string;
    /**
     * Phone.
     * Maximum length: 30.
     */
    phoneNumber: string;
    /**
     * Phone.
     * Maximum length: 30.
     */
    faxNumber: string;
    /**
     * Description.
     * Maximum length: 255.
     */
    webAddress: string;
    /**
     * Company.
     * Maximum length: 80.
     */
    companyName: string;
    /**
     * Legal Form.
     * Maximum length: 10.
     */
    legalForm: string;
    /**
     * Currency Code.
     * Maximum length: 5.
     */
    currencyCode: string;
    /**
     * City.
     * Maximum length: 40.
     */
    city: string;
    /**
     * Postal Code.
     * Maximum length: 10.
     */
    postalCode: string;
    /**
     * Street.
     * Maximum length: 60.
     */
    street: string;
    /**
     * Building.
     * Maximum length: 10.
     */
    building: string;
    /**
     * Country.
     * Maximum length: 3.
     */
    country: string;
    /**
     * Address Type.
     * Maximum length: 2.
     */
    addressType: string;
    /**
     * Time Stamp.
     */
    addressValStartDate: Moment;
    /**
     * Time Stamp.
     */
    addressValEndDate: Moment;
    /**
     * Ident.
     * Maximum length: 10.
     */
    createdBy: string;
    /**
     * Time Stamp.
     */
    createdAt: Moment;
    /**
     * Ident.
     * Maximum length: 10.
     */
    changedBy: string;
    /**
     * Time Stamp.
     */
    changedAt: Moment;
    /**
     * Returns an entity builder to construct instances `EpmBusinessPartnerSet`.
     * @returns A builder that constructs instances of entity type `EpmBusinessPartnerSet`.
     */
    static builder(): EntityBuilderType<EpmBusinessPartnerSet, EpmBusinessPartnerSetTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `EpmBusinessPartnerSet` entity type.
     * @returns A `EpmBusinessPartnerSet` request builder.
     */
    static requestBuilder(): EpmBusinessPartnerSetRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EpmBusinessPartnerSet`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EpmBusinessPartnerSet`.
     */
    static customField(fieldName: string): CustomField<EpmBusinessPartnerSet>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
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
export declare namespace EpmBusinessPartnerSet {
    /**
     * Static representation of the [[bpId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_ID: StringField<EpmBusinessPartnerSet>;
    /**
     * Static representation of the [[bpRole]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_ROLE: StringField<EpmBusinessPartnerSet>;
    /**
     * Static representation of the [[emailAddress]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMAIL_ADDRESS: StringField<EpmBusinessPartnerSet>;
    /**
     * Static representation of the [[phoneNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PHONE_NUMBER: StringField<EpmBusinessPartnerSet>;
    /**
     * Static representation of the [[faxNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FAX_NUMBER: StringField<EpmBusinessPartnerSet>;
    /**
     * Static representation of the [[webAddress]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WEB_ADDRESS: StringField<EpmBusinessPartnerSet>;
    /**
     * Static representation of the [[companyName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMPANY_NAME: StringField<EpmBusinessPartnerSet>;
    /**
     * Static representation of the [[legalForm]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LEGAL_FORM: StringField<EpmBusinessPartnerSet>;
    /**
     * Static representation of the [[currencyCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CURRENCY_CODE: StringField<EpmBusinessPartnerSet>;
    /**
     * Static representation of the [[city]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CITY: StringField<EpmBusinessPartnerSet>;
    /**
     * Static representation of the [[postalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const POSTAL_CODE: StringField<EpmBusinessPartnerSet>;
    /**
     * Static representation of the [[street]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STREET: StringField<EpmBusinessPartnerSet>;
    /**
     * Static representation of the [[building]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUILDING: StringField<EpmBusinessPartnerSet>;
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY: StringField<EpmBusinessPartnerSet>;
    /**
     * Static representation of the [[addressType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_TYPE: StringField<EpmBusinessPartnerSet>;
    /**
     * Static representation of the [[addressValStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_VAL_START_DATE: DateField<EpmBusinessPartnerSet>;
    /**
     * Static representation of the [[addressValEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_VAL_END_DATE: DateField<EpmBusinessPartnerSet>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<EpmBusinessPartnerSet>;
    /**
     * Static representation of the [[createdAt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_AT: DateField<EpmBusinessPartnerSet>;
    /**
     * Static representation of the [[changedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CHANGED_BY: StringField<EpmBusinessPartnerSet>;
    /**
     * Static representation of the [[changedAt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CHANGED_AT: DateField<EpmBusinessPartnerSet>;
    /**
     * All fields of the EpmBusinessPartnerSet entity.
     */
    const _allFields: Array<StringField<EpmBusinessPartnerSet> | DateField<EpmBusinessPartnerSet>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<EpmBusinessPartnerSet>;
    /**
     * All key fields of the EpmBusinessPartnerSet entity.
     */
    const _keyFields: Array<Selectable<EpmBusinessPartnerSet>>;
    /**
     * Mapping of all key field names to the respective static field property EpmBusinessPartnerSet.
     */
    const _keys: {
        [keys: string]: Selectable<EpmBusinessPartnerSet>;
    };
}
//# sourceMappingURL=EpmBusinessPartnerSet.d.ts.map