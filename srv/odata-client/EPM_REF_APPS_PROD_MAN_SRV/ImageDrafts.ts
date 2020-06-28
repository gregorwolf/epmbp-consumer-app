/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ImageDraftsRequestBuilder } from './ImageDraftsRequestBuilder';
import { Moment } from 'moment';
import { AllFields, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Field, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "ImageDrafts" of service "EPM_REF_APPS_PROD_MAN_SRV".
 */
export class ImageDrafts extends Entity implements ImageDraftsType {
  /**
   * Technical entity name for ImageDrafts.
   */
  static _entityName = 'ImageDrafts';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for ImageDrafts.
   */
  static _serviceName = 'EPM_REF_APPS_PROD_MAN_SRV';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/sap/opu/odata/sap/EPM_REF_APPS_PROD_MAN_SRV';
  /**
   * Angelegt von.
   * Maximum length: 81.
   */
  createdBy!: string;
  /**
   * Name Bilddatei.
   * Maximum length: 255.
   */
  fileName!: string;
  /**
   * Knotenschlüssel.
   */
  id!: string;
  /**
   * Ist löschbar.
   */
  isDeletable!: boolean;
  /**
   * Ist änderbar.
   */
  isModifiable!: boolean;
  /**
   * Zeitstempel.
   * @nullable
   */
  lastModified?: Moment;
  /**
   * Produkt-ID.
   * Maximum length: 10.
   */
  productId!: string;
  /**
   * MIME-Typ.
   * Maximum length: 100.
   */
  mimeType!: string;
  /**
   * Zeitstempel.
   */
  createdAt!: Moment;

  /**
   * Returns an entity builder to construct instances `ImageDrafts`.
   * @returns A builder that constructs instances of entity type `ImageDrafts`.
   */
  static builder(): EntityBuilderType<ImageDrafts, ImageDraftsTypeForceMandatory> {
    return Entity.entityBuilder(ImageDrafts);
  }

  /**
   * Returns a request builder to construct requests for operations on the `ImageDrafts` entity type.
   * @returns A `ImageDrafts` request builder.
   */
  static requestBuilder(): ImageDraftsRequestBuilder {
    return new ImageDraftsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `ImageDrafts`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `ImageDrafts`.
   */
  static customField(fieldName: string): CustomField<ImageDrafts> {
    return Entity.customFieldSelector(fieldName, ImageDrafts);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
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

export namespace ImageDrafts {
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<ImageDrafts> = new StringField('CreatedBy', ImageDrafts, 'Edm.String');
  /**
   * Static representation of the [[fileName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FILE_NAME: StringField<ImageDrafts> = new StringField('FileName', ImageDrafts, 'Edm.String');
  /**
   * Static representation of the [[id]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ID: StringField<ImageDrafts> = new StringField('Id', ImageDrafts, 'Edm.Guid');
  /**
   * Static representation of the [[isDeletable]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_DELETABLE: BooleanField<ImageDrafts> = new BooleanField('IsDeletable', ImageDrafts, 'Edm.Boolean');
  /**
   * Static representation of the [[isModifiable]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_MODIFIABLE: BooleanField<ImageDrafts> = new BooleanField('IsModifiable', ImageDrafts, 'Edm.Boolean');
  /**
   * Static representation of the [[lastModified]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED: DateField<ImageDrafts> = new DateField('LastModified', ImageDrafts, 'Edm.DateTime');
  /**
   * Static representation of the [[productId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRODUCT_ID: StringField<ImageDrafts> = new StringField('ProductId', ImageDrafts, 'Edm.String');
  /**
   * Static representation of the [[mimeType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MIME_TYPE: StringField<ImageDrafts> = new StringField('MimeType', ImageDrafts, 'Edm.String');
  /**
   * Static representation of the [[createdAt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_AT: DateField<ImageDrafts> = new DateField('CreatedAt', ImageDrafts, 'Edm.DateTime');
  /**
   * All fields of the ImageDrafts entity.
   */
  export const _allFields: Array<StringField<ImageDrafts> | BooleanField<ImageDrafts> | DateField<ImageDrafts>> = [
    ImageDrafts.CREATED_BY,
    ImageDrafts.FILE_NAME,
    ImageDrafts.ID,
    ImageDrafts.IS_DELETABLE,
    ImageDrafts.IS_MODIFIABLE,
    ImageDrafts.LAST_MODIFIED,
    ImageDrafts.PRODUCT_ID,
    ImageDrafts.MIME_TYPE,
    ImageDrafts.CREATED_AT
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<ImageDrafts> = new AllFields('*', ImageDrafts);
  /**
   * All key fields of the ImageDrafts entity.
   */
  export const _keyFields: Array<Field<ImageDrafts>> = [ImageDrafts.ID];
  /**
   * Mapping of all key field names to the respective static field property ImageDrafts.
   */
  export const _keys: { [keys: string]: Field<ImageDrafts> } = ImageDrafts._keyFields.reduce((acc: { [keys: string]: Field<ImageDrafts> }, field: Field<ImageDrafts>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
