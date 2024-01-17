import { BpDataControllerRequestBuilder } from './BpDataControllerRequestBuilder';
import { AllFields, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "A_BPDataController" of service "API_BUSINESS_PARTNER".
 */
export declare class BpDataController extends EntityV2 implements BpDataControllerType {
    /**
     * Technical entity name for BpDataController.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Business Partner Number.
     * Maximum length: 10.
     */
    businessPartner: string;
    /**
     * BP: Data Controller.
     * Maximum length: 30.
     */
    dataController: string;
    /**
     * BP: Purpose.
     * Maximum length: 30.
     */
    purposeForPersonalData: string;
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
    static builder(): EntityBuilderType<BpDataController, BpDataControllerType>;
    /**
     * Returns a request builder to construct requests for operations on the `BpDataController` entity type.
     * @returns A `BpDataController` request builder.
     */
    static requestBuilder(): BpDataControllerRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `BpDataController`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `BpDataController`.
     */
    static customField(fieldName: string): CustomFieldV2<BpDataController>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
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
export declare namespace BpDataController {
    /**
     * Static representation of the [[businessPartner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER: EdmTypeField<BpDataController, "Edm.String", false, true>;
    /**
     * Static representation of the [[dataController]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DATA_CONTROLLER: EdmTypeField<BpDataController, "Edm.String", false, true>;
    /**
     * Static representation of the [[purposeForPersonalData]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURPOSE_FOR_PERSONAL_DATA: EdmTypeField<BpDataController, "Edm.String", false, true>;
    /**
     * Static representation of the [[dataControlAssignmentStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DATA_CONTROL_ASSIGNMENT_STATUS: EdmTypeField<BpDataController, "Edm.String", true, true>;
    /**
     * Static representation of the [[bpDataControllerIsDerived]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_DATA_CONTROLLER_IS_DERIVED: EdmTypeField<BpDataController, "Edm.String", true, true>;
    /**
     * Static representation of the [[purposeDerived]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURPOSE_DERIVED: EdmTypeField<BpDataController, "Edm.String", true, true>;
    /**
     * Static representation of the [[purposeType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURPOSE_TYPE: EdmTypeField<BpDataController, "Edm.String", true, true>;
    /**
     * Static representation of the [[businessPurposeFlag]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PURPOSE_FLAG: EdmTypeField<BpDataController, "Edm.String", true, true>;
    /**
     * All fields of the BpDataController entity.
     */
    const _allFields: Array<EdmTypeField<BpDataController, 'Edm.String', false, true> | EdmTypeField<BpDataController, 'Edm.String', true, true>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<BpDataController>;
    /**
     * All key fields of the BpDataController entity.
     */
    const _keyFields: Array<Field<BpDataController, boolean, boolean>>;
    /**
     * Mapping of all key field names to the respective static field property BpDataController.
     */
    const _keys: {
        [keys: string]: Field<BpDataController, boolean, boolean>;
    };
}
//# sourceMappingURL=BpDataController.d.ts.map