import { CustAddrDepdntInformationRequestBuilder } from './CustAddrDepdntInformationRequestBuilder';
import { AllFields, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "A_CustAddrDepdntInformation" of service "API_BUSINESS_PARTNER".
 */
export declare class CustAddrDepdntInformation extends EntityV2 implements CustAddrDepdntInformationType {
    /**
     * Technical entity name for CustAddrDepdntInformation.
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
     * Express train station.
     * Maximum length: 25.
     * @nullable
     */
    expressTrainStationName?: string;
    /**
     * Train station.
     * Maximum length: 25.
     * @nullable
     */
    trainStationName?: string;
    /**
     * City Code.
     * Maximum length: 4.
     * @nullable
     */
    cityCode?: string;
    /**
     * County Code.
     * Maximum length: 3.
     * @nullable
     */
    county?: string;
    /**
     * Returns an entity builder to construct instances of `CustAddrDepdntInformation`.
     * @returns A builder that constructs instances of entity type `CustAddrDepdntInformation`.
     */
    static builder(): EntityBuilderType<CustAddrDepdntInformation, CustAddrDepdntInformationType>;
    /**
     * Returns a request builder to construct requests for operations on the `CustAddrDepdntInformation` entity type.
     * @returns A `CustAddrDepdntInformation` request builder.
     */
    static requestBuilder(): CustAddrDepdntInformationRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CustAddrDepdntInformation`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CustAddrDepdntInformation`.
     */
    static customField(fieldName: string): CustomFieldV2<CustAddrDepdntInformation>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface CustAddrDepdntInformationType {
    customer: string;
    addressId: string;
    expressTrainStationName?: string | null;
    trainStationName?: string | null;
    cityCode?: string | null;
    county?: string | null;
}
export declare namespace CustAddrDepdntInformation {
    /**
     * Static representation of the [[customer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER: EdmTypeField<CustAddrDepdntInformation, "Edm.String", false, true>;
    /**
     * Static representation of the [[addressId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_ID: EdmTypeField<CustAddrDepdntInformation, "Edm.String", false, true>;
    /**
     * Static representation of the [[expressTrainStationName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXPRESS_TRAIN_STATION_NAME: EdmTypeField<CustAddrDepdntInformation, "Edm.String", true, true>;
    /**
     * Static representation of the [[trainStationName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TRAIN_STATION_NAME: EdmTypeField<CustAddrDepdntInformation, "Edm.String", true, true>;
    /**
     * Static representation of the [[cityCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CITY_CODE: EdmTypeField<CustAddrDepdntInformation, "Edm.String", true, true>;
    /**
     * Static representation of the [[county]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTY: EdmTypeField<CustAddrDepdntInformation, "Edm.String", true, true>;
    /**
     * All fields of the CustAddrDepdntInformation entity.
     */
    const _allFields: Array<EdmTypeField<CustAddrDepdntInformation, 'Edm.String', false, true> | EdmTypeField<CustAddrDepdntInformation, 'Edm.String', true, true>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<CustAddrDepdntInformation>;
    /**
     * All key fields of the CustAddrDepdntInformation entity.
     */
    const _keyFields: Array<Field<CustAddrDepdntInformation, boolean, boolean>>;
    /**
     * Mapping of all key field names to the respective static field property CustAddrDepdntInformation.
     */
    const _keys: {
        [keys: string]: Field<CustAddrDepdntInformation, boolean, boolean>;
    };
}
//# sourceMappingURL=CustAddrDepdntInformation.d.ts.map