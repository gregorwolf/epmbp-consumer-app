import { MainCategoriesRequestBuilder } from './MainCategoriesRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, Link, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "MainCategories" of service "EPM_REF_APPS_PROD_MAN_SRV".
 */
export declare class MainCategories extends Entity implements MainCategoriesType {
    /**
     * Technical entity name for MainCategories.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for MainCategories.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Hauptkategorie.
     * Maximum length: 40.
     */
    id: string;
    /**
     * Hauptkategorie.
     * Maximum length: 40.
     */
    name: string;
    /**
     * One-to-many navigation property to the [[SubCategories]] entity.
     */
    subCategories: SubCategories[];
    /**
     * Returns an entity builder to construct instances `MainCategories`.
     * @returns A builder that constructs instances of entity type `MainCategories`.
     */
    static builder(): EntityBuilderType<MainCategories, MainCategoriesTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `MainCategories` entity type.
     * @returns A `MainCategories` request builder.
     */
    static requestBuilder(): MainCategoriesRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `MainCategories`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `MainCategories`.
     */
    static customField(fieldName: string): CustomField<MainCategories>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { SubCategories, SubCategoriesType } from './SubCategories';
export interface MainCategoriesType {
    id: string;
    name: string;
    subCategories: SubCategoriesType[];
}
export interface MainCategoriesTypeForceMandatory {
    id: string;
    name: string;
    subCategories: SubCategoriesType[];
}
export declare namespace MainCategories {
    /**
     * Static representation of the [[id]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ID: StringField<MainCategories>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<MainCategories>;
    /**
     * Static representation of the one-to-many navigation property [[subCategories]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUB_CATEGORIES: Link<MainCategories, SubCategories>;
    /**
     * All fields of the MainCategories entity.
     */
    const _allFields: Array<StringField<MainCategories> | Link<MainCategories, SubCategories>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<MainCategories>;
    /**
     * All key fields of the MainCategories entity.
     */
    const _keyFields: Array<Field<MainCategories>>;
    /**
     * Mapping of all key field names to the respective static field property MainCategories.
     */
    const _keys: {
        [keys: string]: Field<MainCategories>;
    };
}
//# sourceMappingURL=MainCategories.d.ts.map