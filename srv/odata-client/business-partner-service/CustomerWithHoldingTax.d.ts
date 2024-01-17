import { CustomerWithHoldingTaxRequestBuilder } from './CustomerWithHoldingTaxRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field, OrderableEdmTypeField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "A_CustomerWithHoldingTax" of service "API_BUSINESS_PARTNER".
 */
export declare class CustomerWithHoldingTax extends EntityV2 implements CustomerWithHoldingTaxType {
    /**
     * Technical entity name for CustomerWithHoldingTax.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Customer Number.
     * Maximum length: 10.
     */
    customer: string;
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
     * Withholding Tax Code.
     * Maximum length: 2.
     * @nullable
     */
    withholdingTaxCode?: string;
    /**
     * Indicator: Withholding Tax Agent?.
     * @nullable
     */
    withholdingTaxAgent?: boolean;
    /**
     * Obligated to Withhold Tax From.
     * @nullable
     */
    obligationDateBegin?: Moment;
    /**
     * Obligated to Withhold Tax Until.
     * @nullable
     */
    obligationDateEnd?: Moment;
    /**
     * Withholding tax identification number.
     * Maximum length: 16.
     * @nullable
     */
    withholdingTaxNumber?: string;
    /**
     * Exemption Certificate Number.
     * Maximum length: 25.
     * @nullable
     */
    withholdingTaxCertificate?: string;
    /**
     * Exemption Rate.
     * @nullable
     */
    withholdingTaxExmptPercent?: BigNumber;
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
     * Authorization Group.
     * Maximum length: 4.
     * @nullable
     */
    authorizationGroup?: string;
    /**
     * Returns an entity builder to construct instances of `CustomerWithHoldingTax`.
     * @returns A builder that constructs instances of entity type `CustomerWithHoldingTax`.
     */
    static builder(): EntityBuilderType<CustomerWithHoldingTax, CustomerWithHoldingTaxType>;
    /**
     * Returns a request builder to construct requests for operations on the `CustomerWithHoldingTax` entity type.
     * @returns A `CustomerWithHoldingTax` request builder.
     */
    static requestBuilder(): CustomerWithHoldingTaxRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CustomerWithHoldingTax`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CustomerWithHoldingTax`.
     */
    static customField(fieldName: string): CustomFieldV2<CustomerWithHoldingTax>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface CustomerWithHoldingTaxType {
    customer: string;
    companyCode: string;
    withholdingTaxType: string;
    withholdingTaxCode?: string | null;
    withholdingTaxAgent?: boolean | null;
    obligationDateBegin?: Moment | null;
    obligationDateEnd?: Moment | null;
    withholdingTaxNumber?: string | null;
    withholdingTaxCertificate?: string | null;
    withholdingTaxExmptPercent?: BigNumber | null;
    exemptionDateBegin?: Moment | null;
    exemptionDateEnd?: Moment | null;
    exemptionReason?: string | null;
    authorizationGroup?: string | null;
}
export declare namespace CustomerWithHoldingTax {
    /**
     * Static representation of the [[customer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER: EdmTypeField<CustomerWithHoldingTax, "Edm.String", false, true>;
    /**
     * Static representation of the [[companyCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMPANY_CODE: EdmTypeField<CustomerWithHoldingTax, "Edm.String", false, true>;
    /**
     * Static representation of the [[withholdingTaxType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WITHHOLDING_TAX_TYPE: EdmTypeField<CustomerWithHoldingTax, "Edm.String", false, true>;
    /**
     * Static representation of the [[withholdingTaxCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WITHHOLDING_TAX_CODE: EdmTypeField<CustomerWithHoldingTax, "Edm.String", true, true>;
    /**
     * Static representation of the [[withholdingTaxAgent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WITHHOLDING_TAX_AGENT: EdmTypeField<CustomerWithHoldingTax, "Edm.Boolean", true, true>;
    /**
     * Static representation of the [[obligationDateBegin]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OBLIGATION_DATE_BEGIN: OrderableEdmTypeField<CustomerWithHoldingTax, "Edm.DateTime", true, true>;
    /**
     * Static representation of the [[obligationDateEnd]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OBLIGATION_DATE_END: OrderableEdmTypeField<CustomerWithHoldingTax, "Edm.DateTime", true, true>;
    /**
     * Static representation of the [[withholdingTaxNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WITHHOLDING_TAX_NUMBER: EdmTypeField<CustomerWithHoldingTax, "Edm.String", true, true>;
    /**
     * Static representation of the [[withholdingTaxCertificate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WITHHOLDING_TAX_CERTIFICATE: EdmTypeField<CustomerWithHoldingTax, "Edm.String", true, true>;
    /**
     * Static representation of the [[withholdingTaxExmptPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WITHHOLDING_TAX_EXMPT_PERCENT: OrderableEdmTypeField<CustomerWithHoldingTax, "Edm.Decimal", true, true>;
    /**
     * Static representation of the [[exemptionDateBegin]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXEMPTION_DATE_BEGIN: OrderableEdmTypeField<CustomerWithHoldingTax, "Edm.DateTime", true, true>;
    /**
     * Static representation of the [[exemptionDateEnd]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXEMPTION_DATE_END: OrderableEdmTypeField<CustomerWithHoldingTax, "Edm.DateTime", true, true>;
    /**
     * Static representation of the [[exemptionReason]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXEMPTION_REASON: EdmTypeField<CustomerWithHoldingTax, "Edm.String", true, true>;
    /**
     * Static representation of the [[authorizationGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AUTHORIZATION_GROUP: EdmTypeField<CustomerWithHoldingTax, "Edm.String", true, true>;
    /**
     * All fields of the CustomerWithHoldingTax entity.
     */
    const _allFields: Array<EdmTypeField<CustomerWithHoldingTax, 'Edm.String', false, true> | EdmTypeField<CustomerWithHoldingTax, 'Edm.String', true, true> | EdmTypeField<CustomerWithHoldingTax, 'Edm.Boolean', true, true> | OrderableEdmTypeField<CustomerWithHoldingTax, 'Edm.DateTime', true, true> | OrderableEdmTypeField<CustomerWithHoldingTax, 'Edm.Decimal', true, true>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<CustomerWithHoldingTax>;
    /**
     * All key fields of the CustomerWithHoldingTax entity.
     */
    const _keyFields: Array<Field<CustomerWithHoldingTax, boolean, boolean>>;
    /**
     * Mapping of all key field names to the respective static field property CustomerWithHoldingTax.
     */
    const _keys: {
        [keys: string]: Field<CustomerWithHoldingTax, boolean, boolean>;
    };
}
//# sourceMappingURL=CustomerWithHoldingTax.d.ts.map