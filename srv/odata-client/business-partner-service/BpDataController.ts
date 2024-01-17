/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BpDataControllerRequestBuilder } from './BpDataControllerRequestBuilder';
import { AllFields, Constructable, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field, FieldBuilder } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "A_BPDataController" of service "API_BUSINESS_PARTNER".
 */
export class BpDataController extends EntityV2 implements BpDataControllerType {
  /**
   * Technical entity name for BpDataController.
   */
  static _entityName = 'A_BPDataController';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
  /**
   * Business Partner Number.
   * Maximum length: 10.
   */
  businessPartner!: string;
  /**
   * BP: Data Controller.
   * Maximum length: 30.
   */
  dataController!: string;
  /**
   * BP: Purpose.
   * Maximum length: 30.
   */
  purposeForPersonalData!: string;
  /**
   * BP: Data Controller Purpose Assignment Status.
   * Maximum length: 1.
   * @nullable
   */
  dataControlAssignmentStatus?: string;
  /**
   * BP: Derivation Indicator for Data Controller (DC).
   * Maximum length: 1.
   * @nullable
   */
  bpDataControllerIsDerived?: string;
  /**
   * BP: Derivation Indicator for Purpose.
   * Maximum length: 1.
   * @nullable
   */
  purposeDerived?: string;
  /**
   * BP: Purpose Type.
   * Maximum length: 1.
   * @nullable
   */
  purposeType?: string;
  /**
   * Business Purpose Completed Flag.
   * Maximum length: 1.
   * @nullable
   */
  businessPurposeFlag?: string;

  /**
   * Returns an entity builder to construct instances of `BpDataController`.
   * @returns A builder that constructs instances of entity type `BpDataController`.
   */
  static builder(): EntityBuilderType<BpDataController, BpDataControllerType> {
    return EntityV2.entityBuilder(BpDataController);
  }

  /**
   * Returns a request builder to construct requests for operations on the `BpDataController` entity type.
   * @returns A `BpDataController` request builder.
   */
  static requestBuilder(): BpDataControllerRequestBuilder {
    return new BpDataControllerRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `BpDataController`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `BpDataController`.
   */
  static customField(fieldName: string): CustomFieldV2<BpDataController> {
    return EntityV2.customFieldSelector(fieldName, BpDataController);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface BpDataControllerType {
  businessPartner: string;
  dataController: string;
  purposeForPersonalData: string;
  dataControlAssignmentStatus?: string | null;
  bpDataControllerIsDerived?: string | null;
  purposeDerived?: string | null;
  purposeType?: string | null;
  businessPurposeFlag?: string | null;
}

export namespace BpDataController {
  const _fieldBuilder: FieldBuilder<Constructable<BpDataController>> = new FieldBuilder(BpDataController);
  /**
   * Static representation of the [[businessPartner]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER = _fieldBuilder.buildEdmTypeField('BusinessPartner', 'Edm.String', false);
  /**
   * Static representation of the [[dataController]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DATA_CONTROLLER = _fieldBuilder.buildEdmTypeField('DataController', 'Edm.String', false);
  /**
   * Static representation of the [[purposeForPersonalData]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURPOSE_FOR_PERSONAL_DATA = _fieldBuilder.buildEdmTypeField('PurposeForPersonalData', 'Edm.String', false);
  /**
   * Static representation of the [[dataControlAssignmentStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DATA_CONTROL_ASSIGNMENT_STATUS = _fieldBuilder.buildEdmTypeField('DataControlAssignmentStatus', 'Edm.String', true);
  /**
   * Static representation of the [[bpDataControllerIsDerived]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BP_DATA_CONTROLLER_IS_DERIVED = _fieldBuilder.buildEdmTypeField('BPDataControllerIsDerived', 'Edm.String', true);
  /**
   * Static representation of the [[purposeDerived]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURPOSE_DERIVED = _fieldBuilder.buildEdmTypeField('PurposeDerived', 'Edm.String', true);
  /**
   * Static representation of the [[purposeType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURPOSE_TYPE = _fieldBuilder.buildEdmTypeField('PurposeType', 'Edm.String', true);
  /**
   * Static representation of the [[businessPurposeFlag]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PURPOSE_FLAG = _fieldBuilder.buildEdmTypeField('BusinessPurposeFlag', 'Edm.String', true);
  /**
   * All fields of the BpDataController entity.
   */
  export const _allFields: Array<EdmTypeField<BpDataController, 'Edm.String', false, true> | EdmTypeField<BpDataController, 'Edm.String', true, true>> = [
    BpDataController.BUSINESS_PARTNER,
    BpDataController.DATA_CONTROLLER,
    BpDataController.PURPOSE_FOR_PERSONAL_DATA,
    BpDataController.DATA_CONTROL_ASSIGNMENT_STATUS,
    BpDataController.BP_DATA_CONTROLLER_IS_DERIVED,
    BpDataController.PURPOSE_DERIVED,
    BpDataController.PURPOSE_TYPE,
    BpDataController.BUSINESS_PURPOSE_FLAG
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<BpDataController> = new AllFields('*', BpDataController);
  /**
   * All key fields of the BpDataController entity.
   */
  export const _keyFields: Array<Field<BpDataController, boolean, boolean>> = [BpDataController.BUSINESS_PARTNER, BpDataController.DATA_CONTROLLER, BpDataController.PURPOSE_FOR_PERSONAL_DATA];
  /**
   * Mapping of all key field names to the respective static field property BpDataController.
   */
  export const _keys: { [keys: string]: Field<BpDataController, boolean, boolean> } = BpDataController._keyFields.reduce((acc: { [keys: string]: Field<BpDataController, boolean, boolean> }, field: Field<BpDataController, boolean, boolean>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
