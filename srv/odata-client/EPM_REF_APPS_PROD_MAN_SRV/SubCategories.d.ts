import { SubCategoriesRequestBuilder } from './SubCategoriesRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, OneToOneLink, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "SubCategories" of service "EPM_REF_APPS_PROD_MAN_SRV".
 */
export declare class SubCategories extends Entity implements SubCategoriesType {
    /**
     * Technical entity name for SubCategories.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for SubCategories.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Kategorie.
     * Maximum length: 40.
     */
    id: string;
    /**
     * Kategorie.
     * Maximum length: 40.
     */
    name: string;
    /**
     * Hauptkategorie.
     * Maximum length: 40.
     */
    mainCategoryId: string;
    /**
     * Hauptkategorie.
     * Maximum length: 40.
     */
    mainCategoryName: string;
    /**
     * One-to-one navigation property to the [[MainCategories]] entity.
     */
    mainCategory: MainCategories;
    /**
     * Returns an entity builder to construct instances `SubCategories`.
     * @returns A builder that constructs instances of entity type `SubCategories`.
     */
    static builder(): EntityBuilderType<SubCategories, SubCategoriesTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `SubCategories` entity type.
     * @returns A `SubCategories` request builder.
     */
    static requestBuilder(): SubCategoriesRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SubCategories`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SubCategories`.
     */
    static customField(fieldName: string): CustomField<SubCategories>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { MainCategories, MainCategoriesType } from './MainCategories';
export interface SubCategoriesType {
    id: string;
    name: string;
    mainCategoryId: string;
    mainCategoryName: string;
    mainCategory: MainCategoriesType;
}
export interface SubCategoriesTypeForceMandatory {
    id: string;
    name: string;
    mainCategoryId: string;
    mainCategoryName: string;
    mainCategory: MainCategoriesType;
}
export declare namespace SubCategories {
    /**
     * Static representation of the [[id]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ID: StringField<SubCategories>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<SubCategories>;
    /**
     * Static representation of the [[mainCategoryId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MAIN_CATEGORY_ID: StringField<SubCategories>;
    /**
     * Static representation of the [[mainCategoryName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MAIN_CATEGORY_NAME: StringField<SubCategories>;
    /**
     * Static representation of the one-to-one navigation property [[mainCategory]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MAIN_CATEGORY: OneToOneLink<SubCategories, MainCategories>;
    /**
     * All fields of the SubCategories entity.
     */
    const _allFields: Array<StringField<SubCategories> | OneToOneLink<SubCategories, MainCategories>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<SubCategories>;
    /**
     * All key fields of the SubCategories entity.
     */
    const _keyFields: Array<Field<SubCategories>>;
    /**
     * Mapping of all key field names to the respective static field property SubCategories.
     */
    const _keys: {
        [keys: string]: Field<SubCategories>;
    };
}
//# sourceMappingURL=SubCategories.d.ts.map