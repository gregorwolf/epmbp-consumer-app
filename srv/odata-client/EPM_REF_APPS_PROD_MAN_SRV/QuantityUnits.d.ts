import { QuantityUnitsRequestBuilder } from './QuantityUnitsRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "QuantityUnits" of service "EPM_REF_APPS_PROD_MAN_SRV".
 */
export declare class QuantityUnits extends Entity implements QuantityUnitsType {
    /**
     * Technical entity name for QuantityUnits.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for QuantityUnits.
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
     * Returns an entity builder to construct instances `QuantityUnits`.
     * @returns A builder that constructs instances of entity type `QuantityUnits`.
     */
    static builder(): EntityBuilderType<QuantityUnits, QuantityUnitsTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `QuantityUnits` entity type.
     * @returns A `QuantityUnits` request builder.
     */
    static requestBuilder(): QuantityUnitsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `QuantityUnits`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `QuantityUnits`.
     */
    static customField(fieldName: string): CustomField<QuantityUnits>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface QuantityUnitsType {
    unit: string;
    shorttext: string;
    text: string;
}
export interface QuantityUnitsTypeForceMandatory {
    unit: string;
    shorttext: string;
    text: string;
}
export declare namespace QuantityUnits {
    /**
     * Static representation of the [[unit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const UNIT: StringField<QuantityUnits>;
    /**
     * Static representation of the [[shorttext]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SHORTTEXT: StringField<QuantityUnits>;
    /**
     * Static representation of the [[text]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TEXT: StringField<QuantityUnits>;
    /**
     * All fields of the QuantityUnits entity.
     */
    const _allFields: Array<StringField<QuantityUnits>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<QuantityUnits>;
    /**
     * All key fields of the QuantityUnits entity.
     */
    const _keyFields: Array<Field<QuantityUnits>>;
    /**
     * Mapping of all key field names to the respective static field property QuantityUnits.
     */
    const _keys: {
        [keys: string]: Field<QuantityUnits>;
    };
}
//# sourceMappingURL=QuantityUnits.d.ts.map