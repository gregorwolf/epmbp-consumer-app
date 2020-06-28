import { CurrenciesRequestBuilder } from './CurrenciesRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "Currencies" of service "EPM_REF_APPS_PROD_MAN_SRV".
 */
export declare class Currencies extends Entity implements CurrenciesType {
    /**
     * Technical entity name for Currencies.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Currencies.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Iso-Code.
     * Maximum length: 3.
     */
    code: string;
    /**
     * Text.
     * Maximum length: 40.
     */
    text: string;
    /**
     * Returns an entity builder to construct instances `Currencies`.
     * @returns A builder that constructs instances of entity type `Currencies`.
     */
    static builder(): EntityBuilderType<Currencies, CurrenciesTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `Currencies` entity type.
     * @returns A `Currencies` request builder.
     */
    static requestBuilder(): CurrenciesRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Currencies`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Currencies`.
     */
    static customField(fieldName: string): CustomField<Currencies>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface CurrenciesType {
    code: string;
    text: string;
}
export interface CurrenciesTypeForceMandatory {
    code: string;
    text: string;
}
export declare namespace Currencies {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CODE: StringField<Currencies>;
    /**
     * Static representation of the [[text]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TEXT: StringField<Currencies>;
    /**
     * All fields of the Currencies entity.
     */
    const _allFields: Array<StringField<Currencies>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<Currencies>;
    /**
     * All key fields of the Currencies entity.
     */
    const _keyFields: Array<Field<Currencies>>;
    /**
     * Mapping of all key field names to the respective static field property Currencies.
     */
    const _keys: {
        [keys: string]: Field<Currencies>;
    };
}
//# sourceMappingURL=Currencies.d.ts.map