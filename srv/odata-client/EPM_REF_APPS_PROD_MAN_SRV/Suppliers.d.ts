import { SuppliersRequestBuilder } from './SuppliersRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "Suppliers" of service "EPM_REF_APPS_PROD_MAN_SRV".
 */
export declare class Suppliers extends Entity implements SuppliersType {
    /**
     * Technical entity name for Suppliers.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Suppliers.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * ID.
     * Maximum length: 10.
     */
    id: string;
    /**
     * Lieferant.
     * Maximum length: 80.
     */
    name: string;
    /**
     * Phone.
     * Maximum length: 30.
     */
    phone: string;
    /**
     * E-Mail.
     * Maximum length: 255.
     */
    email: string;
    /**
     * Website.
     */
    webAddress: string;
    /**
     * Formatted Address.
     * Maximum length: 129.
     */
    formattedAddress: string;
    /**
     * Name Ansprechpartner.
     * Maximum length: 81.
     */
    formattedContactName: string;
    /**
     * Telefon Ansprechpartner.
     * Maximum length: 30.
     */
    contactPhone1: string;
    /**
     * Fax Ansprechpartner.
     * Maximum length: 30.
     */
    contactPhone2: string;
    /**
     * E-Mail Ansprechpartner.
     * Maximum length: 255.
     */
    contactEmail: string;
    /**
     * Returns an entity builder to construct instances `Suppliers`.
     * @returns A builder that constructs instances of entity type `Suppliers`.
     */
    static builder(): EntityBuilderType<Suppliers, SuppliersTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `Suppliers` entity type.
     * @returns A `Suppliers` request builder.
     */
    static requestBuilder(): SuppliersRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Suppliers`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Suppliers`.
     */
    static customField(fieldName: string): CustomField<Suppliers>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface SuppliersType {
    id: string;
    name: string;
    phone: string;
    email: string;
    webAddress: string;
    formattedAddress: string;
    formattedContactName: string;
    contactPhone1: string;
    contactPhone2: string;
    contactEmail: string;
}
export interface SuppliersTypeForceMandatory {
    id: string;
    name: string;
    phone: string;
    email: string;
    webAddress: string;
    formattedAddress: string;
    formattedContactName: string;
    contactPhone1: string;
    contactPhone2: string;
    contactEmail: string;
}
export declare namespace Suppliers {
    /**
     * Static representation of the [[id]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ID: StringField<Suppliers>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<Suppliers>;
    /**
     * Static representation of the [[phone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PHONE: StringField<Suppliers>;
    /**
     * Static representation of the [[email]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMAIL: StringField<Suppliers>;
    /**
     * Static representation of the [[webAddress]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WEB_ADDRESS: StringField<Suppliers>;
    /**
     * Static representation of the [[formattedAddress]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORMATTED_ADDRESS: StringField<Suppliers>;
    /**
     * Static representation of the [[formattedContactName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORMATTED_CONTACT_NAME: StringField<Suppliers>;
    /**
     * Static representation of the [[contactPhone1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONTACT_PHONE_1: StringField<Suppliers>;
    /**
     * Static representation of the [[contactPhone2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONTACT_PHONE_2: StringField<Suppliers>;
    /**
     * Static representation of the [[contactEmail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONTACT_EMAIL: StringField<Suppliers>;
    /**
     * All fields of the Suppliers entity.
     */
    const _allFields: Array<StringField<Suppliers>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<Suppliers>;
    /**
     * All key fields of the Suppliers entity.
     */
    const _keyFields: Array<Field<Suppliers>>;
    /**
     * Mapping of all key field names to the respective static field property Suppliers.
     */
    const _keys: {
        [keys: string]: Field<Suppliers>;
    };
}
//# sourceMappingURL=Suppliers.d.ts.map