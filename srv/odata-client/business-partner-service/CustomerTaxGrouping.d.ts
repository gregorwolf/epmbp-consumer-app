import { CustomerTaxGroupingRequestBuilder } from './CustomerTaxGroupingRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Field, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "A_CustomerTaxGrouping" of service "API_BUSINESS_PARTNER".
 */
export declare class CustomerTaxGrouping extends Entity implements CustomerTaxGroupingType {
    /**
     * Technical entity name for CustomerTaxGrouping.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for CustomerTaxGrouping.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Customer Number.
     * Gives an alphanumeric key, which clearly identifies the customer or vendor in the SAP system.
     * Maximum length: 10.
     */
    customer: string;
    /**
     * Category Indicator for Tax Codes.
     * This indicator is used to allocate customers and vendors to different tax categories. The system evaluates this information during document entry to assist users in selecting the tax code.
     * Maximum length: 3.
     */
    customerTaxGroupingCode: string;
    /**
     * Number of exemption certificate.
     * The exemption information are displayed while posting a document to help the user find the correct tax code. If the posting date lies within an exemption interval the corresponding tax category will be highlighted.
     * Maximum length: 15.
     * @nullable
     */
    custTaxGrpExemptionCertificate?: string;
    /**
     * Exemption rate.
     * Tax categories
     * The exemption information is used by the system to help the user find the correct tax code while posting a document.The system will not apply the exemption rate to a tax amount previously calculated. This has to be done by defining a special tax code with a reduced percentage rate.Withholding taxThe exemption percentage is applied to the calculated withholding tax amount.
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
     * This field gives the start date of the status of being subjected.
     * @nullable
     */
    custTaxGroupSubjectedStartDate?: Moment;
    /**
     * Subjected until.
     * This field gives the end date of the status of being subjected.
     * @nullable
     */
    custTaxGroupSubjectedEndDate?: Moment;
    /**
     * Returns an entity builder to construct instances `CustomerTaxGrouping`.
     * @returns A builder that constructs instances of entity type `CustomerTaxGrouping`.
     */
    static builder(): EntityBuilderType<CustomerTaxGrouping, CustomerTaxGroupingTypeForceMandatory>;
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
    static customField(fieldName: string): CustomField<CustomerTaxGrouping>;
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
    custTaxGrpExemptionCertificate?: string;
    custTaxGroupExemptionRate?: BigNumber;
    custTaxGroupExemptionStartDate?: Moment;
    custTaxGroupExemptionEndDate?: Moment;
    custTaxGroupSubjectedStartDate?: Moment;
    custTaxGroupSubjectedEndDate?: Moment;
}
export interface CustomerTaxGroupingTypeForceMandatory {
    customer: string;
    customerTaxGroupingCode: string;
    custTaxGrpExemptionCertificate: string;
    custTaxGroupExemptionRate: BigNumber;
    custTaxGroupExemptionStartDate: Moment;
    custTaxGroupExemptionEndDate: Moment;
    custTaxGroupSubjectedStartDate: Moment;
    custTaxGroupSubjectedEndDate: Moment;
}
export declare namespace CustomerTaxGrouping {
    /**
     * Static representation of the [[customer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER: StringField<CustomerTaxGrouping>;
    /**
     * Static representation of the [[customerTaxGroupingCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER_TAX_GROUPING_CODE: StringField<CustomerTaxGrouping>;
    /**
     * Static representation of the [[custTaxGrpExemptionCertificate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUST_TAX_GRP_EXEMPTION_CERTIFICATE: StringField<CustomerTaxGrouping>;
    /**
     * Static representation of the [[custTaxGroupExemptionRate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUST_TAX_GROUP_EXEMPTION_RATE: BigNumberField<CustomerTaxGrouping>;
    /**
     * Static representation of the [[custTaxGroupExemptionStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUST_TAX_GROUP_EXEMPTION_START_DATE: DateField<CustomerTaxGrouping>;
    /**
     * Static representation of the [[custTaxGroupExemptionEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUST_TAX_GROUP_EXEMPTION_END_DATE: DateField<CustomerTaxGrouping>;
    /**
     * Static representation of the [[custTaxGroupSubjectedStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUST_TAX_GROUP_SUBJECTED_START_DATE: DateField<CustomerTaxGrouping>;
    /**
     * Static representation of the [[custTaxGroupSubjectedEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUST_TAX_GROUP_SUBJECTED_END_DATE: DateField<CustomerTaxGrouping>;
    /**
     * All fields of the CustomerTaxGrouping entity.
     */
    const _allFields: Array<StringField<CustomerTaxGrouping> | BigNumberField<CustomerTaxGrouping> | DateField<CustomerTaxGrouping>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<CustomerTaxGrouping>;
    /**
     * All key fields of the CustomerTaxGrouping entity.
     */
    const _keyFields: Array<Field<CustomerTaxGrouping>>;
    /**
     * Mapping of all key field names to the respective static field property CustomerTaxGrouping.
     */
    const _keys: {
        [keys: string]: Field<CustomerTaxGrouping>;
    };
}
//# sourceMappingURL=CustomerTaxGrouping.d.ts.map