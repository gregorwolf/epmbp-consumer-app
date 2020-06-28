import { ImageDraftsRequestBuilder } from './ImageDraftsRequestBuilder';
import { Moment } from 'moment';
import { AllFields, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Field, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "ImageDrafts" of service "EPM_REF_APPS_PROD_MAN_SRV".
 */
export declare class ImageDrafts extends Entity implements ImageDraftsType {
    /**
     * Technical entity name for ImageDrafts.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for ImageDrafts.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Angelegt von.
     * Maximum length: 81.
     */
    createdBy: string;
    /**
     * Name Bilddatei.
     * Maximum length: 255.
     */
    fileName: string;
    /**
     * Knotenschlüssel.
     */
    id: string;
    /**
     * Ist löschbar.
     */
    isDeletable: boolean;
    /**
     * Ist änderbar.
     */
    isModifiable: boolean;
    /**
     * Zeitstempel.
     * @nullable
     */
    lastModified?: Moment;
    /**
     * Produkt-ID.
     * Maximum length: 10.
     */
    productId: string;
    /**
     * MIME-Typ.
     * Maximum length: 100.
     */
    mimeType: string;
    /**
     * Zeitstempel.
     */
    createdAt: Moment;
    /**
     * Returns an entity builder to construct instances `ImageDrafts`.
     * @returns A builder that constructs instances of entity type `ImageDrafts`.
     */
    static builder(): EntityBuilderType<ImageDrafts, ImageDraftsTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `ImageDrafts` entity type.
     * @returns A `ImageDrafts` request builder.
     */
    static requestBuilder(): ImageDraftsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ImageDrafts`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ImageDrafts`.
     */
    static customField(fieldName: string): CustomField<ImageDrafts>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface ImageDraftsType {
    createdBy: string;
    fileName: string;
    id: string;
    isDeletable: boolean;
    isModifiable: boolean;
    lastModified?: Moment;
    productId: string;
    mimeType: string;
    createdAt: Moment;
}
export interface ImageDraftsTypeForceMandatory {
    createdBy: string;
    fileName: string;
    id: string;
    isDeletable: boolean;
    isModifiable: boolean;
    lastModified: Moment;
    productId: string;
    mimeType: string;
    createdAt: Moment;
}
export declare namespace ImageDrafts {
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<ImageDrafts>;
    /**
     * Static representation of the [[fileName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FILE_NAME: StringField<ImageDrafts>;
    /**
     * Static representation of the [[id]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ID: StringField<ImageDrafts>;
    /**
     * Static representation of the [[isDeletable]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_DELETABLE: BooleanField<ImageDrafts>;
    /**
     * Static representation of the [[isModifiable]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_MODIFIABLE: BooleanField<ImageDrafts>;
    /**
     * Static representation of the [[lastModified]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED: DateField<ImageDrafts>;
    /**
     * Static representation of the [[productId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRODUCT_ID: StringField<ImageDrafts>;
    /**
     * Static representation of the [[mimeType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MIME_TYPE: StringField<ImageDrafts>;
    /**
     * Static representation of the [[createdAt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_AT: DateField<ImageDrafts>;
    /**
     * All fields of the ImageDrafts entity.
     */
    const _allFields: Array<StringField<ImageDrafts> | BooleanField<ImageDrafts> | DateField<ImageDrafts>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<ImageDrafts>;
    /**
     * All key fields of the ImageDrafts entity.
     */
    const _keyFields: Array<Field<ImageDrafts>>;
    /**
     * Mapping of all key field names to the respective static field property ImageDrafts.
     */
    const _keys: {
        [keys: string]: Field<ImageDrafts>;
    };
}
//# sourceMappingURL=ImageDrafts.d.ts.map