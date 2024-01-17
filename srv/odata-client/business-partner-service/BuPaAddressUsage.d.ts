import { BuPaAddressUsageRequestBuilder } from './BuPaAddressUsageRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field, OrderableEdmTypeField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "A_BuPaAddressUsage" of service "API_BUSINESS_PARTNER".
 */
export declare class BuPaAddressUsage extends EntityV2 implements BuPaAddressUsageType {
    /**
     * Technical entity name for BuPaAddressUsage.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Business Partner Number.
     * Maximum length: 10.
     */
    businessPartner: string;
    /**
     * Validity End of a Business Partner Address Usage.
     */
    validityEndDate: Moment;
    /**
     * Address Type.
     * Maximum length: 10.
     */
    addressUsage: string;
    /**
     * Address Number.
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
     * @nullable
     */
    standardUsage?: boolean;
    /**
     * Authorization Group.
     * Maximum length: 4.
     * @nullable
     */
    authorizationGroup?: string;
    /**
     * Returns an entity builder to construct instances of `BuPaAddressUsage`.
     * @returns A builder that constructs instances of entity type `BuPaAddressUsage`.
     */
    static builder(): EntityBuilderType<BuPaAddressUsage, BuPaAddressUsageType>;
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
    static customField(fieldName: string): CustomFieldV2<BuPaAddressUsage>;
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
    validityStartDate?: Moment | null;
    standardUsage?: boolean | null;
    authorizationGroup?: string | null;
}
export declare namespace BuPaAddressUsage {
    /**
     * Static representation of the [[businessPartner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER: EdmTypeField<BuPaAddressUsage, "Edm.String", false, true>;
    /**
     * Static representation of the [[validityEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VALIDITY_END_DATE: OrderableEdmTypeField<BuPaAddressUsage, "Edm.DateTimeOffset", false, true>;
    /**
     * Static representation of the [[addressUsage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_USAGE: EdmTypeField<BuPaAddressUsage, "Edm.String", false, true>;
    /**
     * Static representation of the [[addressId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_ID: EdmTypeField<BuPaAddressUsage, "Edm.String", false, true>;
    /**
     * Static representation of the [[validityStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VALIDITY_START_DATE: OrderableEdmTypeField<BuPaAddressUsage, "Edm.DateTimeOffset", true, true>;
    /**
     * Static representation of the [[standardUsage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STANDARD_USAGE: EdmTypeField<BuPaAddressUsage, "Edm.Boolean", true, true>;
    /**
     * Static representation of the [[authorizationGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AUTHORIZATION_GROUP: EdmTypeField<BuPaAddressUsage, "Edm.String", true, true>;
    /**
     * All fields of the BuPaAddressUsage entity.
     */
    const _allFields: Array<EdmTypeField<BuPaAddressUsage, 'Edm.String', false, true> | OrderableEdmTypeField<BuPaAddressUsage, 'Edm.DateTimeOffset', false, true> | OrderableEdmTypeField<BuPaAddressUsage, 'Edm.DateTimeOffset', true, true> | EdmTypeField<BuPaAddressUsage, 'Edm.Boolean', true, true> | EdmTypeField<BuPaAddressUsage, 'Edm.String', true, true>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<BuPaAddressUsage>;
    /**
     * All key fields of the BuPaAddressUsage entity.
     */
    const _keyFields: Array<Field<BuPaAddressUsage, boolean, boolean>>;
    /**
     * Mapping of all key field names to the respective static field property BuPaAddressUsage.
     */
    const _keys: {
        [keys: string]: Field<BuPaAddressUsage, boolean, boolean>;
    };
}
//# sourceMappingURL=BuPaAddressUsage.d.ts.map