import { CustAddrDepdntExtIdentifierRequestBuilder } from './CustAddrDepdntExtIdentifierRequestBuilder';
import { AllFields, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "A_CustAddrDepdntExtIdentifier" of service "API_BUSINESS_PARTNER".
 */
export declare class CustAddrDepdntExtIdentifier extends EntityV2 implements CustAddrDepdntExtIdentifierType {
    /**
     * Technical entity name for CustAddrDepdntExtIdentifier.
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
     * Business Partner Address Number (from BUT020).
     * Maximum length: 10.
     */
    addressId: string;
    /**
     * Seller-Defined Customer Address ID for EDI.
     * Maximum length: 12.
     * @nullable
     */
    customerExternalRefId?: string;
    /**
     * Returns an entity builder to construct instances of `CustAddrDepdntExtIdentifier`.
     * @returns A builder that constructs instances of entity type `CustAddrDepdntExtIdentifier`.
     */
    static builder(): EntityBuilderType<CustAddrDepdntExtIdentifier, CustAddrDepdntExtIdentifierType>;
    /**
     * Returns a request builder to construct requests for operations on the `CustAddrDepdntExtIdentifier` entity type.
     * @returns A `CustAddrDepdntExtIdentifier` request builder.
     */
    static requestBuilder(): CustAddrDepdntExtIdentifierRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CustAddrDepdntExtIdentifier`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CustAddrDepdntExtIdentifier`.
     */
    static customField(fieldName: string): CustomFieldV2<CustAddrDepdntExtIdentifier>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface CustAddrDepdntExtIdentifierType {
    customer: string;
    addressId: string;
    customerExternalRefId?: string | null;
}
export declare namespace CustAddrDepdntExtIdentifier {
    /**
     * Static representation of the [[customer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER: EdmTypeField<CustAddrDepdntExtIdentifier, "Edm.String", false, true>;
    /**
     * Static representation of the [[addressId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_ID: EdmTypeField<CustAddrDepdntExtIdentifier, "Edm.String", false, true>;
    /**
     * Static representation of the [[customerExternalRefId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER_EXTERNAL_REF_ID: EdmTypeField<CustAddrDepdntExtIdentifier, "Edm.String", true, true>;
    /**
     * All fields of the CustAddrDepdntExtIdentifier entity.
     */
    const _allFields: Array<EdmTypeField<CustAddrDepdntExtIdentifier, 'Edm.String', false, true> | EdmTypeField<CustAddrDepdntExtIdentifier, 'Edm.String', true, true>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<CustAddrDepdntExtIdentifier>;
    /**
     * All key fields of the CustAddrDepdntExtIdentifier entity.
     */
    const _keyFields: Array<Field<CustAddrDepdntExtIdentifier, boolean, boolean>>;
    /**
     * Mapping of all key field names to the respective static field property CustAddrDepdntExtIdentifier.
     */
    const _keys: {
        [keys: string]: Field<CustAddrDepdntExtIdentifier, boolean, boolean>;
    };
}
//# sourceMappingURL=CustAddrDepdntExtIdentifier.d.ts.map