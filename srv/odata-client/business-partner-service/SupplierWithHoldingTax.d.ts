import { SupplierWithHoldingTaxRequestBuilder } from './SupplierWithHoldingTaxRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field, OrderableEdmTypeField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "A_SupplierWithHoldingTax" of service "API_BUSINESS_PARTNER".
 */
export declare class SupplierWithHoldingTax extends EntityV2 implements SupplierWithHoldingTaxType {
    /**
     * Technical entity name for SupplierWithHoldingTax.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Account Number of Supplier.
     * Maximum length: 10.
     */
    supplier: string;
    /**
     * Company Code.
     * Maximum length: 4.
     */
    companyCode: string;
    /**
     * Indicator for Withholding Tax Type.
     * Maximum length: 2.
     */
    withholdingTaxType: string;
    /**
     * Date on Which Exemption Begins.
     * @nullable
     */
    exemptionDateBegin?: Moment;
    /**
     * Date on Which Exemption Ends.
     * @nullable
     */
    exemptionDateEnd?: Moment;
    /**
     * Reason for Exemption.
     * Maximum length: 2.
     * @nullable
     */
    exemptionReason?: string;
    /**
     * Indicator: Subject to Withholding Tax?.
     * @nullable
     */
    isWithholdingTaxSubject?: boolean;
    /**
     * Type of Recipient.
     * Maximum length: 2.
     * @nullable
     */
    recipientType?: string;
    /**
     * Exemption Certificate Number.
     * Maximum length: 25.
     * @nullable
     */
    withholdingTaxCertificate?: string;
    /**
     * Withholding Tax Code.
     * Maximum length: 2.
     * @nullable
     */
    withholdingTaxCode?: string;
    /**
     * Exemption Rate.
     * @nullable
     */
    withholdingTaxExmptPercent?: BigNumber;
    /**
     * Withholding tax identification number.
     * Maximum length: 16.
     * @nullable
     */
    withholdingTaxNumber?: string;
    /**
     * Authorization Group.
     * Maximum length: 4.
     * @nullable
     */
    authorizationGroup?: string;
    /**
     * Returns an entity builder to construct instances of `SupplierWithHoldingTax`.
     * @returns A builder that constructs instances of entity type `SupplierWithHoldingTax`.
     */
    static builder(): EntityBuilderType<SupplierWithHoldingTax, SupplierWithHoldingTaxType>;
    /**
     * Returns a request builder to construct requests for operations on the `SupplierWithHoldingTax` entity type.
     * @returns A `SupplierWithHoldingTax` request builder.
     */
    static requestBuilder(): SupplierWithHoldingTaxRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SupplierWithHoldingTax`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SupplierWithHoldingTax`.
     */
    static customField(fieldName: string): CustomFieldV2<SupplierWithHoldingTax>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface SupplierWithHoldingTaxType {
    supplier: string;
    companyCode: string;
    withholdingTaxType: string;
    exemptionDateBegin?: Moment | null;
    exemptionDateEnd?: Moment | null;
    exemptionReason?: string | null;
    isWithholdingTaxSubject?: boolean | null;
    recipientType?: string | null;
    withholdingTaxCertificate?: string | null;
    withholdingTaxCode?: string | null;
    withholdingTaxExmptPercent?: BigNumber | null;
    withholdingTaxNumber?: string | null;
    authorizationGroup?: string | null;
}
export declare namespace SupplierWithHoldingTax {
    /**
     * Static representation of the [[supplier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUPPLIER: EdmTypeField<SupplierWithHoldingTax, "Edm.String", false, true>;
    /**
     * Static representation of the [[companyCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMPANY_CODE: EdmTypeField<SupplierWithHoldingTax, "Edm.String", false, true>;
    /**
     * Static representation of the [[withholdingTaxType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WITHHOLDING_TAX_TYPE: EdmTypeField<SupplierWithHoldingTax, "Edm.String", false, true>;
    /**
     * Static representation of the [[exemptionDateBegin]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXEMPTION_DATE_BEGIN: OrderableEdmTypeField<SupplierWithHoldingTax, "Edm.DateTime", true, true>;
    /**
     * Static representation of the [[exemptionDateEnd]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXEMPTION_DATE_END: OrderableEdmTypeField<SupplierWithHoldingTax, "Edm.DateTime", true, true>;
    /**
     * Static representation of the [[exemptionReason]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXEMPTION_REASON: EdmTypeField<SupplierWithHoldingTax, "Edm.String", true, true>;
    /**
     * Static representation of the [[isWithholdingTaxSubject]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_WITHHOLDING_TAX_SUBJECT: EdmTypeField<SupplierWithHoldingTax, "Edm.Boolean", true, true>;
    /**
     * Static representation of the [[recipientType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RECIPIENT_TYPE: EdmTypeField<SupplierWithHoldingTax, "Edm.String", true, true>;
    /**
     * Static representation of the [[withholdingTaxCertificate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WITHHOLDING_TAX_CERTIFICATE: EdmTypeField<SupplierWithHoldingTax, "Edm.String", true, true>;
    /**
     * Static representation of the [[withholdingTaxCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WITHHOLDING_TAX_CODE: EdmTypeField<SupplierWithHoldingTax, "Edm.String", true, true>;
    /**
     * Static representation of the [[withholdingTaxExmptPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WITHHOLDING_TAX_EXMPT_PERCENT: OrderableEdmTypeField<SupplierWithHoldingTax, "Edm.Decimal", true, true>;
    /**
     * Static representation of the [[withholdingTaxNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WITHHOLDING_TAX_NUMBER: EdmTypeField<SupplierWithHoldingTax, "Edm.String", true, true>;
    /**
     * Static representation of the [[authorizationGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AUTHORIZATION_GROUP: EdmTypeField<SupplierWithHoldingTax, "Edm.String", true, true>;
    /**
     * All fields of the SupplierWithHoldingTax entity.
     */
    const _allFields: Array<EdmTypeField<SupplierWithHoldingTax, 'Edm.String', false, true> | OrderableEdmTypeField<SupplierWithHoldingTax, 'Edm.DateTime', true, true> | EdmTypeField<SupplierWithHoldingTax, 'Edm.String', true, true> | EdmTypeField<SupplierWithHoldingTax, 'Edm.Boolean', true, true> | OrderableEdmTypeField<SupplierWithHoldingTax, 'Edm.Decimal', true, true>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<SupplierWithHoldingTax>;
    /**
     * All key fields of the SupplierWithHoldingTax entity.
     */
    const _keyFields: Array<Field<SupplierWithHoldingTax, boolean, boolean>>;
    /**
     * Mapping of all key field names to the respective static field property SupplierWithHoldingTax.
     */
    const _keys: {
        [keys: string]: Field<SupplierWithHoldingTax, boolean, boolean>;
    };
}
//# sourceMappingURL=SupplierWithHoldingTax.d.ts.map