import { BuPaAddressUsageRequestBuilder } from './BuPaAddressUsageRequestBuilder';
import { Moment } from 'moment';
import { AllFields, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Field, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "A_BuPaAddressUsage" of service "API_BUSINESS_PARTNER".
 */
export declare class BuPaAddressUsage extends Entity implements BuPaAddressUsageType {
    /**
     * Technical entity name for BuPaAddressUsage.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for BuPaAddressUsage.
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
     * Validity End of a Business Partner Address Usage.
     */
    validityEndDate: Moment;
    /**
     * Address Type.
     * Business partner attribute, which you can use to distinguish between various addresses by defining the address usage for communication with business partners.
     * Maintain the usage types for addresses (address types) in Customizing.You can create a short description and a name for the address type.When maintaining business partners you can use the function address usage to assign business partner addresses to address types.If necessary, you can set the indicator for multiple use in Customizing.Correspondence addressDelivery address.
     * Maximum length: 10.
     */
    addressUsage: string;
    /**
     * Address Number.
     * Internal key for identifying a Business Address Services address.
     * For more information about the meaning and use of the address number and the Business Address Services concepts, see the function group SZA0 documentation.
     * Maximum length: 10.
     */
    addressId: string;
    /**
     * Validity Start of a Business Partner Address Usage.
     * @nullable
     */
    validityStartDate?: Moment;
    /**
     * Indicator: Standard Address Usage.
     * Establishes which is the standard address for an address usage.
     * Several addresses per period can be assigned to an address usage.If this is the case, then this indicator controls which of the assigned addresses should be the standard address of the relevant usage. This is determined automatically when the address usage is accessed.
     * @nullable
     */
    standardUsage?: boolean;
    /**
     * Authorization Group.
     * You can use authorization groups to stipulate which business partners a user is allowed to process.
     * Use the following authorization object:'Business partners: authorization groups' (B_BUPA_GRP).The system only checks this authorization if you made an entry in the "Authorization group" field for the business partner. Otherwise, any user may process the business partner.
     * Maximum length: 4.
     * @nullable
     */
    authorizationGroup?: string;
    /**
     * Returns an entity builder to construct instances `BuPaAddressUsage`.
     * @returns A builder that constructs instances of entity type `BuPaAddressUsage`.
     */
    static builder(): EntityBuilderType<BuPaAddressUsage, BuPaAddressUsageTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `BuPaAddressUsage` entity type.
     * @returns A `BuPaAddressUsage` request builder.
     */
    static requestBuilder(): BuPaAddressUsageRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `BuPaAddressUsage`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `BuPaAddressUsage`.
     */
    static customField(fieldName: string): CustomField<BuPaAddressUsage>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface BuPaAddressUsageType {
    businessPartner: string;
    validityEndDate: Moment;
    addressUsage: string;
    addressId: string;
    validityStartDate?: Moment;
    standardUsage?: boolean;
    authorizationGroup?: string;
}
export interface BuPaAddressUsageTypeForceMandatory {
    businessPartner: string;
    validityEndDate: Moment;
    addressUsage: string;
    addressId: string;
    validityStartDate: Moment;
    standardUsage: boolean;
    authorizationGroup: string;
}
export declare namespace BuPaAddressUsage {
    /**
     * Static representation of the [[businessPartner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER: StringField<BuPaAddressUsage>;
    /**
     * Static representation of the [[validityEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VALIDITY_END_DATE: DateField<BuPaAddressUsage>;
    /**
     * Static representation of the [[addressUsage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_USAGE: StringField<BuPaAddressUsage>;
    /**
     * Static representation of the [[addressId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_ID: StringField<BuPaAddressUsage>;
    /**
     * Static representation of the [[validityStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VALIDITY_START_DATE: DateField<BuPaAddressUsage>;
    /**
     * Static representation of the [[standardUsage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STANDARD_USAGE: BooleanField<BuPaAddressUsage>;
    /**
     * Static representation of the [[authorizationGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AUTHORIZATION_GROUP: StringField<BuPaAddressUsage>;
    /**
     * All fields of the BuPaAddressUsage entity.
     */
    const _allFields: Array<StringField<BuPaAddressUsage> | DateField<BuPaAddressUsage> | BooleanField<BuPaAddressUsage>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<BuPaAddressUsage>;
    /**
     * All key fields of the BuPaAddressUsage entity.
     */
    const _keyFields: Array<Field<BuPaAddressUsage>>;
    /**
     * Mapping of all key field names to the respective static field property BuPaAddressUsage.
     */
    const _keys: {
        [keys: string]: Field<BuPaAddressUsage>;
    };
}
//# sourceMappingURL=BuPaAddressUsage.d.ts.map