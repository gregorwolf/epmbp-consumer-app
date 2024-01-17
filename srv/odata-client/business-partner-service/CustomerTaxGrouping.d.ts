import { CustomerTaxGroupingRequestBuilder } from './CustomerTaxGroupingRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field, OrderableEdmTypeField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "A_CustomerTaxGrouping" of service "API_BUSINESS_PARTNER".
 */
export declare class CustomerTaxGrouping extends EntityV2 implements CustomerTaxGroupingType {
    /**
     * Technical entity name for CustomerTaxGrouping.
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
     * Category Indicator for Tax Codes.
     * Maximum length: 3.
     */
    customerTaxGroupingCode: string;
    /**
     * Number of exemption certificate.
     * Maximum length: 15.
     * @nullable
     */
    custTaxGrpExemptionCertificate?: string;
    /**
     * Exemption rate.
     * @nullable
     */
    custTaxGroupExemptionRate?: BigNumber;
    /**
     * Start date of exemption.
     * @nullable
     */
    custTaxGroupExemptionStartDate?: Moment;
    /**
     * End date of exemption.
     * @nullable
     */
    custTaxGroupExemptionEndDate?: Moment;
    /**
     * Subjected from.
     * @nullable
     */
    custTaxGroupSubjectedStartDate?: Moment;
    /**
     * Subjected until.
     * @nullable
     */
    custTaxGroupSubjectedEndDate?: Moment;
    /**
     * Returns an entity builder to construct instances of `CustomerTaxGrouping`.
     * @returns A builder that constructs instances of entity type `CustomerTaxGrouping`.
     */
    static builder(): EntityBuilderType<CustomerTaxGrouping, CustomerTaxGroupingType>;
    /**
     * Returns a request builder to construct requests for operations on the `CustomerTaxGrouping` entity type.
     * @returns A `CustomerTaxGrouping` request builder.
     */
    static requestBuilder(): CustomerTaxGroupingRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CustomerTaxGrouping`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CustomerTaxGrouping`.
     */
    static customField(fieldName: string): CustomFieldV2<CustomerTaxGrouping>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface CustomerTaxGroupingType {
    customer: string;
    customerTaxGroupingCode: string;
    custTaxGrpExemptionCertificate?: string | null;
    custTaxGroupExemptionRate?: BigNumber | null;
    custTaxGroupExemptionStartDate?: Moment | null;
    custTaxGroupExemptionEndDate?: Moment | null;
    custTaxGroupSubjectedStartDate?: Moment | null;
    custTaxGroupSubjectedEndDate?: Moment | null;
}
export declare namespace CustomerTaxGrouping {
    /**
     * Static representation of the [[customer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER: EdmTypeField<CustomerTaxGrouping, "Edm.String", false, true>;
    /**
     * Static representation of the [[customerTaxGroupingCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER_TAX_GROUPING_CODE: EdmTypeField<CustomerTaxGrouping, "Edm.String", false, true>;
    /**
     * Static representation of the [[custTaxGrpExemptionCertificate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUST_TAX_GRP_EXEMPTION_CERTIFICATE: EdmTypeField<CustomerTaxGrouping, "Edm.String", true, true>;
    /**
     * Static representation of the [[custTaxGroupExemptionRate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUST_TAX_GROUP_EXEMPTION_RATE: OrderableEdmTypeField<CustomerTaxGrouping, "Edm.Decimal", true, true>;
    /**
     * Static representation of the [[custTaxGroupExemptionStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUST_TAX_GROUP_EXEMPTION_START_DATE: OrderableEdmTypeField<CustomerTaxGrouping, "Edm.DateTime", true, true>;
    /**
     * Static representation of the [[custTaxGroupExemptionEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUST_TAX_GROUP_EXEMPTION_END_DATE: OrderableEdmTypeField<CustomerTaxGrouping, "Edm.DateTime", true, true>;
    /**
     * Static representation of the [[custTaxGroupSubjectedStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUST_TAX_GROUP_SUBJECTED_START_DATE: OrderableEdmTypeField<CustomerTaxGrouping, "Edm.DateTime", true, true>;
    /**
     * Static representation of the [[custTaxGroupSubjectedEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUST_TAX_GROUP_SUBJECTED_END_DATE: OrderableEdmTypeField<CustomerTaxGrouping, "Edm.DateTime", true, true>;
    /**
     * All fields of the CustomerTaxGrouping entity.
     */
    const _allFields: Array<EdmTypeField<CustomerTaxGrouping, 'Edm.String', false, true> | EdmTypeField<CustomerTaxGrouping, 'Edm.String', true, true> | OrderableEdmTypeField<CustomerTaxGrouping, 'Edm.Decimal', true, true> | OrderableEdmTypeField<CustomerTaxGrouping, 'Edm.DateTime', true, true>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<CustomerTaxGrouping>;
    /**
     * All key fields of the CustomerTaxGrouping entity.
     */
    const _keyFields: Array<Field<CustomerTaxGrouping, boolean, boolean>>;
    /**
     * Mapping of all key field names to the respective static field property CustomerTaxGrouping.
     */
    const _keys: {
        [keys: string]: Field<CustomerTaxGrouping, boolean, boolean>;
    };
}
//# sourceMappingURL=CustomerTaxGrouping.d.ts.map