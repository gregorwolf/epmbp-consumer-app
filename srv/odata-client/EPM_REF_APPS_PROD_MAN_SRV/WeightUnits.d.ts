import { WeightUnitsRequestBuilder } from './WeightUnitsRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "WeightUnits" of service "EPM_REF_APPS_PROD_MAN_SRV".
 */
export declare class WeightUnits extends Entity implements WeightUnitsType {
    /**
     * Technical entity name for WeightUnits.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for WeightUnits.
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
     * Returns an entity builder to construct instances `WeightUnits`.
     * @returns A builder that constructs instances of entity type `WeightUnits`.
     */
    static builder(): EntityBuilderType<WeightUnits, WeightUnitsTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `WeightUnits` entity type.
     * @returns A `WeightUnits` request builder.
     */
    static requestBuilder(): WeightUnitsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `WeightUnits`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `WeightUnits`.
     */
    static customField(fieldName: string): CustomField<WeightUnits>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface WeightUnitsType {
    unit: string;
    shorttext: string;
    text: string;
}
export interface WeightUnitsTypeForceMandatory {
    unit: string;
    shorttext: string;
    text: string;
}
export declare namespace WeightUnits {
    /**
     * Static representation of the [[unit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const UNIT: StringField<WeightUnits>;
    /**
     * Static representation of the [[shorttext]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SHORTTEXT: StringField<WeightUnits>;
    /**
     * Static representation of the [[text]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TEXT: StringField<WeightUnits>;
    /**
     * All fields of the WeightUnits entity.
     */
    const _allFields: Array<StringField<WeightUnits>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<WeightUnits>;
    /**
     * All key fields of the WeightUnits entity.
     */
    const _keyFields: Array<Field<WeightUnits>>;
    /**
     * Mapping of all key field names to the respective static field property WeightUnits.
     */
    const _keys: {
        [keys: string]: Field<WeightUnits>;
    };
}
//# sourceMappingURL=WeightUnits.d.ts.map