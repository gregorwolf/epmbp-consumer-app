import { DimensionUnitsRequestBuilder } from './DimensionUnitsRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "DimensionUnits" of service "EPM_REF_APPS_PROD_MAN_SRV".
 */
export declare class DimensionUnits extends Entity implements DimensionUnitsType {
    /**
     * Technical entity name for DimensionUnits.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for DimensionUnits.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * ISO-Code.
     * Maximum length: 3.
     */
    unit: string;
    /**
     * Shorttext.
     * Maximum length: 10.
     */
    shorttext: string;
    /**
     * Text.
     * Maximum length: 30.
     */
    text: string;
    /**
     * Returns an entity builder to construct instances `DimensionUnits`.
     * @returns A builder that constructs instances of entity type `DimensionUnits`.
     */
    static builder(): EntityBuilderType<DimensionUnits, DimensionUnitsTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `DimensionUnits` entity type.
     * @returns A `DimensionUnits` request builder.
     */
    static requestBuilder(): DimensionUnitsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `DimensionUnits`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `DimensionUnits`.
     */
    static customField(fieldName: string): CustomField<DimensionUnits>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface DimensionUnitsType {
    unit: string;
    shorttext: string;
    text: string;
}
export interface DimensionUnitsTypeForceMandatory {
    unit: string;
    shorttext: string;
    text: string;
}
export declare namespace DimensionUnits {
    /**
     * Static representation of the [[unit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const UNIT: StringField<DimensionUnits>;
    /**
     * Static representation of the [[shorttext]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SHORTTEXT: StringField<DimensionUnits>;
    /**
     * Static representation of the [[text]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TEXT: StringField<DimensionUnits>;
    /**
     * All fields of the DimensionUnits entity.
     */
    const _allFields: Array<StringField<DimensionUnits>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<DimensionUnits>;
    /**
     * All key fields of the DimensionUnits entity.
     */
    const _keyFields: Array<Field<DimensionUnits>>;
    /**
     * Mapping of all key field names to the respective static field property DimensionUnits.
     */
    const _keys: {
        [keys: string]: Field<DimensionUnits>;
    };
}
//# sourceMappingURL=DimensionUnits.d.ts.map