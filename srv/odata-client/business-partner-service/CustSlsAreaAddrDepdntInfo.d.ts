import { CustSlsAreaAddrDepdntInfoRequestBuilder } from './CustSlsAreaAddrDepdntInfoRequestBuilder';
import { AllFields, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "A_CustSlsAreaAddrDepdntInfo" of service "API_BUSINESS_PARTNER".
 */
export declare class CustSlsAreaAddrDepdntInfo extends EntityV2 implements CustSlsAreaAddrDepdntInfoType {
    /**
     * Technical entity name for CustSlsAreaAddrDepdntInfo.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Customer Number.
     * Maximum length: 10.
     */
    customer: string;
    /**
     * Sales Organization.
     * Maximum length: 4.
     */
    salesOrganization: string;
    /**
     * Distribution Channel.
     * Maximum length: 2.
     */
    distributionChannel: string;
    /**
     * Division.
     * Maximum length: 2.
     */
    division: string;
    /**
     * Business Partner Address Number (from BUT020).
     * Maximum length: 10.
     */
    addressId: string;
    /**
     * Incoterms (Part 1).
     * Maximum length: 3.
     * @nullable
     */
    incotermsClassification?: string;
    /**
     * Incoterms Location 1.
     * Maximum length: 70.
     * @nullable
     */
    incotermsLocation1?: string;
    /**
     * Incoterms Location 2.
     * Maximum length: 70.
     * @nullable
     */
    incotermsLocation2?: string;
    /**
     * Location UUID.
     * @nullable
     */
    incotermsSupChnLoc1AddlUuid?: string;
    /**
     * Location UUID.
     * @nullable
     */
    incotermsSupChnLoc2AddlUuid?: string;
    /**
     * Location UUID.
     * @nullable
     */
    incotermsSupChnDvtgLocAddlUuid?: string;
    /**
     * Customer delivery block (sales area).
     * Maximum length: 2.
     * @nullable
     */
    deliveryIsBlocked?: string;
    /**
     * Sales Office.
     * Maximum length: 4.
     * @nullable
     */
    salesOffice?: string;
    /**
     * Sales Group.
     * Maximum length: 3.
     * @nullable
     */
    salesGroup?: string;
    /**
     * Shipping Conditions.
     * Maximum length: 2.
     * @nullable
     */
    shippingCondition?: string;
    /**
     * Delivering Plant (Own or External).
     * Maximum length: 4.
     * @nullable
     */
    supplyingPlant?: string;
    /**
     * Incoterms Version.
     * Maximum length: 4.
     * @nullable
     */
    incotermsVersion?: string;
    /**
     * Returns an entity builder to construct instances of `CustSlsAreaAddrDepdntInfo`.
     * @returns A builder that constructs instances of entity type `CustSlsAreaAddrDepdntInfo`.
     */
    static builder(): EntityBuilderType<CustSlsAreaAddrDepdntInfo, CustSlsAreaAddrDepdntInfoType>;
    /**
     * Returns a request builder to construct requests for operations on the `CustSlsAreaAddrDepdntInfo` entity type.
     * @returns A `CustSlsAreaAddrDepdntInfo` request builder.
     */
    static requestBuilder(): CustSlsAreaAddrDepdntInfoRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CustSlsAreaAddrDepdntInfo`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CustSlsAreaAddrDepdntInfo`.
     */
    static customField(fieldName: string): CustomFieldV2<CustSlsAreaAddrDepdntInfo>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface CustSlsAreaAddrDepdntInfoType {
    customer: string;
    salesOrganization: string;
    distributionChannel: string;
    division: string;
    addressId: string;
    incotermsClassification?: string | null;
    incotermsLocation1?: string | null;
    incotermsLocation2?: string | null;
    incotermsSupChnLoc1AddlUuid?: string | null;
    incotermsSupChnLoc2AddlUuid?: string | null;
    incotermsSupChnDvtgLocAddlUuid?: string | null;
    deliveryIsBlocked?: string | null;
    salesOffice?: string | null;
    salesGroup?: string | null;
    shippingCondition?: string | null;
    supplyingPlant?: string | null;
    incotermsVersion?: string | null;
}
export declare namespace CustSlsAreaAddrDepdntInfo {
    /**
     * Static representation of the [[customer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER: EdmTypeField<CustSlsAreaAddrDepdntInfo, "Edm.String", false, true>;
    /**
     * Static representation of the [[salesOrganization]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_ORGANIZATION: EdmTypeField<CustSlsAreaAddrDepdntInfo, "Edm.String", false, true>;
    /**
     * Static representation of the [[distributionChannel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DISTRIBUTION_CHANNEL: EdmTypeField<CustSlsAreaAddrDepdntInfo, "Edm.String", false, true>;
    /**
     * Static representation of the [[division]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DIVISION: EdmTypeField<CustSlsAreaAddrDepdntInfo, "Edm.String", false, true>;
    /**
     * Static representation of the [[addressId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_ID: EdmTypeField<CustSlsAreaAddrDepdntInfo, "Edm.String", false, true>;
    /**
     * Static representation of the [[incotermsClassification]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INCOTERMS_CLASSIFICATION: EdmTypeField<CustSlsAreaAddrDepdntInfo, "Edm.String", true, true>;
    /**
     * Static representation of the [[incotermsLocation1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INCOTERMS_LOCATION_1: EdmTypeField<CustSlsAreaAddrDepdntInfo, "Edm.String", true, true>;
    /**
     * Static representation of the [[incotermsLocation2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INCOTERMS_LOCATION_2: EdmTypeField<CustSlsAreaAddrDepdntInfo, "Edm.String", true, true>;
    /**
     * Static representation of the [[incotermsSupChnLoc1AddlUuid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INCOTERMS_SUP_CHN_LOC_1_ADDL_UUID: EdmTypeField<CustSlsAreaAddrDepdntInfo, "Edm.Guid", true, true>;
    /**
     * Static representation of the [[incotermsSupChnLoc2AddlUuid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INCOTERMS_SUP_CHN_LOC_2_ADDL_UUID: EdmTypeField<CustSlsAreaAddrDepdntInfo, "Edm.Guid", true, true>;
    /**
     * Static representation of the [[incotermsSupChnDvtgLocAddlUuid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INCOTERMS_SUP_CHN_DVTG_LOC_ADDL_UUID: EdmTypeField<CustSlsAreaAddrDepdntInfo, "Edm.Guid", true, true>;
    /**
     * Static representation of the [[deliveryIsBlocked]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DELIVERY_IS_BLOCKED: EdmTypeField<CustSlsAreaAddrDepdntInfo, "Edm.String", true, true>;
    /**
     * Static representation of the [[salesOffice]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_OFFICE: EdmTypeField<CustSlsAreaAddrDepdntInfo, "Edm.String", true, true>;
    /**
     * Static representation of the [[salesGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_GROUP: EdmTypeField<CustSlsAreaAddrDepdntInfo, "Edm.String", true, true>;
    /**
     * Static representation of the [[shippingCondition]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SHIPPING_CONDITION: EdmTypeField<CustSlsAreaAddrDepdntInfo, "Edm.String", true, true>;
    /**
     * Static representation of the [[supplyingPlant]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUPPLYING_PLANT: EdmTypeField<CustSlsAreaAddrDepdntInfo, "Edm.String", true, true>;
    /**
     * Static representation of the [[incotermsVersion]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INCOTERMS_VERSION: EdmTypeField<CustSlsAreaAddrDepdntInfo, "Edm.String", true, true>;
    /**
     * All fields of the CustSlsAreaAddrDepdntInfo entity.
     */
    const _allFields: Array<EdmTypeField<CustSlsAreaAddrDepdntInfo, 'Edm.String', false, true> | EdmTypeField<CustSlsAreaAddrDepdntInfo, 'Edm.String', true, true> | EdmTypeField<CustSlsAreaAddrDepdntInfo, 'Edm.Guid', true, true>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<CustSlsAreaAddrDepdntInfo>;
    /**
     * All key fields of the CustSlsAreaAddrDepdntInfo entity.
     */
    const _keyFields: Array<Field<CustSlsAreaAddrDepdntInfo, boolean, boolean>>;
    /**
     * Mapping of all key field names to the respective static field property CustSlsAreaAddrDepdntInfo.
     */
    const _keys: {
        [keys: string]: Field<CustSlsAreaAddrDepdntInfo, boolean, boolean>;
    };
}
//# sourceMappingURL=CustSlsAreaAddrDepdntInfo.d.ts.map