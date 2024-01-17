import { CustomerRequestBuilder } from './CustomerRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomFieldV2, EdmTypeField, EntityBuilderType, EntityV2, Field, Link, OrderableEdmTypeField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "A_Customer" of service "API_BUSINESS_PARTNER".
 */
export declare class Customer extends EntityV2 implements CustomerType {
    /**
     * Technical entity name for Customer.
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
     * Authorization Group.
     * Maximum length: 4.
     * @nullable
     */
    authorizationGroup?: string;
    /**
     * Central Billing Block for Customer.
     * Maximum length: 2.
     * @nullable
     */
    billingIsBlockedForCustomer?: string;
    /**
     * Name of Person who Created the Object.
     * Maximum length: 12.
     * @nullable
     */
    createdByUser?: string;
    /**
     * Record Created On.
     * @nullable
     */
    creationDate?: Moment;
    /**
     * Customer Account Group.
     * Maximum length: 4.
     * @nullable
     */
    customerAccountGroup?: string;
    /**
     * Customer Classification.
     * Maximum length: 2.
     * @nullable
     */
    customerClassification?: string;
    /**
     * Customer Full Name.
     * Maximum length: 220.
     * @nullable
     */
    customerFullName?: string;
    /**
     * Customer Full Name.
     * Maximum length: 220.
     * @nullable
     */
    bpCustomerFullName?: string;
    /**
     * Name of Customer.
     * Maximum length: 80.
     * @nullable
     */
    customerName?: string;
    /**
     * Customer Name.
     * Maximum length: 81.
     * @nullable
     */
    bpCustomerName?: string;
    /**
     * Central delivery block for the customer.
     * Maximum length: 2.
     * @nullable
     */
    deliveryIsBlocked?: string;
    /**
     * Attribute 1.
     * Maximum length: 2.
     * @nullable
     */
    freeDefinedAttribute01?: string;
    /**
     * Attribute 2.
     * Maximum length: 2.
     * @nullable
     */
    freeDefinedAttribute02?: string;
    /**
     * Attribute 3.
     * Maximum length: 2.
     * @nullable
     */
    freeDefinedAttribute03?: string;
    /**
     * Attribute 4.
     * Maximum length: 2.
     * @nullable
     */
    freeDefinedAttribute04?: string;
    /**
     * Attribute 5.
     * Maximum length: 2.
     * @nullable
     */
    freeDefinedAttribute05?: string;
    /**
     * Attribute 6.
     * Maximum length: 3.
     * @nullable
     */
    freeDefinedAttribute06?: string;
    /**
     * Attribute 7.
     * Maximum length: 3.
     * @nullable
     */
    freeDefinedAttribute07?: string;
    /**
     * Attribute 8.
     * Maximum length: 3.
     * @nullable
     */
    freeDefinedAttribute08?: string;
    /**
     * Attribute 9.
     * Maximum length: 3.
     * @nullable
     */
    freeDefinedAttribute09?: string;
    /**
     * Attribute 10.
     * Maximum length: 3.
     * @nullable
     */
    freeDefinedAttribute10?: string;
    /**
     * Natural Person.
     * Maximum length: 1.
     * @nullable
     */
    nfPartnerIsNaturalPerson?: string;
    /**
     * Central Order Block for Customer.
     * Maximum length: 2.
     * @nullable
     */
    orderIsBlockedForCustomer?: string;
    /**
     * Central Posting Block.
     * @nullable
     */
    postingIsBlocked?: boolean;
    /**
     * Account Number of Supplier.
     * Maximum length: 10.
     * @nullable
     */
    supplier?: string;
    /**
     * Group Key.
     * Maximum length: 10.
     * @nullable
     */
    customerCorporateGroup?: string;
    /**
     * Account number of the master record with the fiscal address.
     * Maximum length: 10.
     * @nullable
     */
    fiscalAddress?: string;
    /**
     * Industry Key.
     * Maximum length: 4.
     * @nullable
     */
    industry?: string;
    /**
     * Industry Code 1.
     * Maximum length: 10.
     * @nullable
     */
    industryCode1?: string;
    /**
     * Industry Code 2.
     * Maximum length: 10.
     * @nullable
     */
    industryCode2?: string;
    /**
     * Industry Code 3.
     * Maximum length: 10.
     * @nullable
     */
    industryCode3?: string;
    /**
     * Industry Code 4.
     * Maximum length: 10.
     * @nullable
     */
    industryCode4?: string;
    /**
     * Industry Code 5.
     * Maximum length: 10.
     * @nullable
     */
    industryCode5?: string;
    /**
     * International location number  (part 1).
     * Maximum length: 7.
     * @nullable
     */
    internationalLocationNumber1?: string;
    /**
     * International location number (Part 2).
     * Maximum length: 5.
     * @nullable
     */
    internationalLocationNumber2?: string;
    /**
     * Check digit for the international location number.
     * Maximum length: 1.
     * @nullable
     */
    internationalLocationNumber3?: string;
    /**
     * Nielsen ID.
     * Maximum length: 2.
     * @nullable
     */
    nielsenRegion?: string;
    /**
     * Payment Reason.
     * Maximum length: 4.
     * @nullable
     */
    paymentReason?: string;
    /**
     * Tax Type.
     * Maximum length: 2.
     * @nullable
     */
    responsibleType?: string;
    /**
     * Tax Number 1.
     * Maximum length: 16.
     * @nullable
     */
    taxNumber1?: string;
    /**
     * Tax Number 2.
     * Maximum length: 11.
     * @nullable
     */
    taxNumber2?: string;
    /**
     * Tax Number 3.
     * Maximum length: 18.
     * @nullable
     */
    taxNumber3?: string;
    /**
     * Tax Number 4.
     * Maximum length: 18.
     * @nullable
     */
    taxNumber4?: string;
    /**
     * Tax Number 5.
     * Maximum length: 60.
     * @nullable
     */
    taxNumber5?: string;
    /**
     * Tax Number Type.
     * Maximum length: 2.
     * @nullable
     */
    taxNumberType?: string;
    /**
     * VAT Registration Number.
     * Maximum length: 20.
     * @nullable
     */
    vatRegistration?: string;
    /**
     * Central Deletion Flag for Master Record.
     * @nullable
     */
    deletionIndicator?: boolean;
    /**
     * Express train station.
     * Maximum length: 25.
     * @nullable
     */
    expressTrainStationName?: string;
    /**
     * Train station.
     * Maximum length: 25.
     * @nullable
     */
    trainStationName?: string;
    /**
     * City Code.
     * Maximum length: 4.
     * @nullable
     */
    cityCode?: string;
    /**
     * County Code.
     * Maximum length: 3.
     * @nullable
     */
    county?: string;
    /**
     * One-to-many navigation property to the [[CustAddrDepdntExtIdentifier]] entity.
     */
    toCustAddrDepdntExtIdentifier: CustAddrDepdntExtIdentifier[];
    /**
     * One-to-many navigation property to the [[CustAddrDepdntInformation]] entity.
     */
    toCustAddrDepdntInformation: CustAddrDepdntInformation[];
    /**
     * One-to-many navigation property to the [[CustomerCompany]] entity.
     */
    toCustomerCompany: CustomerCompany[];
    /**
     * One-to-many navigation property to the [[CustomerSalesArea]] entity.
     */
    toCustomerSalesArea: CustomerSalesArea[];
    /**
     * One-to-many navigation property to the [[CustomerTaxGrouping]] entity.
     */
    toCustomerTaxGrouping: CustomerTaxGrouping[];
    /**
     * One-to-many navigation property to the [[CustomerText]] entity.
     */
    toCustomerText: CustomerText[];
    /**
     * One-to-many navigation property to the [[CustomerUnloadingPoint]] entity.
     */
    toCustomerUnloadingPoint: CustomerUnloadingPoint[];
    /**
     * One-to-many navigation property to the [[CustUnldgPtAddrDepdntInfo]] entity.
     */
    toCustUnldgPtAddrDepdntInfo: CustUnldgPtAddrDepdntInfo[];
    /**
     * Returns an entity builder to construct instances of `Customer`.
     * @returns A builder that constructs instances of entity type `Customer`.
     */
    static builder(): EntityBuilderType<Customer, CustomerType>;
    /**
     * Returns a request builder to construct requests for operations on the `Customer` entity type.
     * @returns A `Customer` request builder.
     */
    static requestBuilder(): CustomerRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Customer`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Customer`.
     */
    static customField(fieldName: string): CustomFieldV2<Customer>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { CustAddrDepdntExtIdentifier, CustAddrDepdntExtIdentifierType } from './CustAddrDepdntExtIdentifier';
import { CustAddrDepdntInformation, CustAddrDepdntInformationType } from './CustAddrDepdntInformation';
import { CustomerCompany, CustomerCompanyType } from './CustomerCompany';
import { CustomerSalesArea, CustomerSalesAreaType } from './CustomerSalesArea';
import { CustomerTaxGrouping, CustomerTaxGroupingType } from './CustomerTaxGrouping';
import { CustomerText, CustomerTextType } from './CustomerText';
import { CustomerUnloadingPoint, CustomerUnloadingPointType } from './CustomerUnloadingPoint';
import { CustUnldgPtAddrDepdntInfo, CustUnldgPtAddrDepdntInfoType } from './CustUnldgPtAddrDepdntInfo';
export interface CustomerType {
    customer: string;
    authorizationGroup?: string | null;
    billingIsBlockedForCustomer?: string | null;
    createdByUser?: string | null;
    creationDate?: Moment | null;
    customerAccountGroup?: string | null;
    customerClassification?: string | null;
    customerFullName?: string | null;
    bpCustomerFullName?: string | null;
    customerName?: string | null;
    bpCustomerName?: string | null;
    deliveryIsBlocked?: string | null;
    freeDefinedAttribute01?: string | null;
    freeDefinedAttribute02?: string | null;
    freeDefinedAttribute03?: string | null;
    freeDefinedAttribute04?: string | null;
    freeDefinedAttribute05?: string | null;
    freeDefinedAttribute06?: string | null;
    freeDefinedAttribute07?: string | null;
    freeDefinedAttribute08?: string | null;
    freeDefinedAttribute09?: string | null;
    freeDefinedAttribute10?: string | null;
    nfPartnerIsNaturalPerson?: string | null;
    orderIsBlockedForCustomer?: string | null;
    postingIsBlocked?: boolean | null;
    supplier?: string | null;
    customerCorporateGroup?: string | null;
    fiscalAddress?: string | null;
    industry?: string | null;
    industryCode1?: string | null;
    industryCode2?: string | null;
    industryCode3?: string | null;
    industryCode4?: string | null;
    industryCode5?: string | null;
    internationalLocationNumber1?: string | null;
    internationalLocationNumber2?: string | null;
    internationalLocationNumber3?: string | null;
    nielsenRegion?: string | null;
    paymentReason?: string | null;
    responsibleType?: string | null;
    taxNumber1?: string | null;
    taxNumber2?: string | null;
    taxNumber3?: string | null;
    taxNumber4?: string | null;
    taxNumber5?: string | null;
    taxNumberType?: string | null;
    vatRegistration?: string | null;
    deletionIndicator?: boolean | null;
    expressTrainStationName?: string | null;
    trainStationName?: string | null;
    cityCode?: string | null;
    county?: string | null;
    toCustAddrDepdntExtIdentifier: CustAddrDepdntExtIdentifierType[];
    toCustAddrDepdntInformation: CustAddrDepdntInformationType[];
    toCustomerCompany: CustomerCompanyType[];
    toCustomerSalesArea: CustomerSalesAreaType[];
    toCustomerTaxGrouping: CustomerTaxGroupingType[];
    toCustomerText: CustomerTextType[];
    toCustomerUnloadingPoint: CustomerUnloadingPointType[];
    toCustUnldgPtAddrDepdntInfo: CustUnldgPtAddrDepdntInfoType[];
}
export declare namespace Customer {
    /**
     * Static representation of the [[customer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER: EdmTypeField<Customer, "Edm.String", false, true>;
    /**
     * Static representation of the [[authorizationGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AUTHORIZATION_GROUP: EdmTypeField<Customer, "Edm.String", true, true>;
    /**
     * Static representation of the [[billingIsBlockedForCustomer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BILLING_IS_BLOCKED_FOR_CUSTOMER: EdmTypeField<Customer, "Edm.String", true, true>;
    /**
     * Static representation of the [[createdByUser]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_USER: EdmTypeField<Customer, "Edm.String", true, true>;
    /**
     * Static representation of the [[creationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATION_DATE: OrderableEdmTypeField<Customer, "Edm.DateTime", true, true>;
    /**
     * Static representation of the [[customerAccountGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER_ACCOUNT_GROUP: EdmTypeField<Customer, "Edm.String", true, true>;
    /**
     * Static representation of the [[customerClassification]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER_CLASSIFICATION: EdmTypeField<Customer, "Edm.String", true, true>;
    /**
     * Static representation of the [[customerFullName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER_FULL_NAME: EdmTypeField<Customer, "Edm.String", true, true>;
    /**
     * Static representation of the [[bpCustomerFullName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_CUSTOMER_FULL_NAME: EdmTypeField<Customer, "Edm.String", true, true>;
    /**
     * Static representation of the [[customerName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER_NAME: EdmTypeField<Customer, "Edm.String", true, true>;
    /**
     * Static representation of the [[bpCustomerName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BP_CUSTOMER_NAME: EdmTypeField<Customer, "Edm.String", true, true>;
    /**
     * Static representation of the [[deliveryIsBlocked]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DELIVERY_IS_BLOCKED: EdmTypeField<Customer, "Edm.String", true, true>;
    /**
     * Static representation of the [[freeDefinedAttribute01]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FREE_DEFINED_ATTRIBUTE_01: EdmTypeField<Customer, "Edm.String", true, true>;
    /**
     * Static representation of the [[freeDefinedAttribute02]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FREE_DEFINED_ATTRIBUTE_02: EdmTypeField<Customer, "Edm.String", true, true>;
    /**
     * Static representation of the [[freeDefinedAttribute03]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FREE_DEFINED_ATTRIBUTE_03: EdmTypeField<Customer, "Edm.String", true, true>;
    /**
     * Static representation of the [[freeDefinedAttribute04]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FREE_DEFINED_ATTRIBUTE_04: EdmTypeField<Customer, "Edm.String", true, true>;
    /**
     * Static representation of the [[freeDefinedAttribute05]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FREE_DEFINED_ATTRIBUTE_05: EdmTypeField<Customer, "Edm.String", true, true>;
    /**
     * Static representation of the [[freeDefinedAttribute06]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FREE_DEFINED_ATTRIBUTE_06: EdmTypeField<Customer, "Edm.String", true, true>;
    /**
     * Static representation of the [[freeDefinedAttribute07]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FREE_DEFINED_ATTRIBUTE_07: EdmTypeField<Customer, "Edm.String", true, true>;
    /**
     * Static representation of the [[freeDefinedAttribute08]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FREE_DEFINED_ATTRIBUTE_08: EdmTypeField<Customer, "Edm.String", true, true>;
    /**
     * Static representation of the [[freeDefinedAttribute09]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FREE_DEFINED_ATTRIBUTE_09: EdmTypeField<Customer, "Edm.String", true, true>;
    /**
     * Static representation of the [[freeDefinedAttribute10]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FREE_DEFINED_ATTRIBUTE_10: EdmTypeField<Customer, "Edm.String", true, true>;
    /**
     * Static representation of the [[nfPartnerIsNaturalPerson]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NF_PARTNER_IS_NATURAL_PERSON: EdmTypeField<Customer, "Edm.String", true, true>;
    /**
     * Static representation of the [[orderIsBlockedForCustomer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ORDER_IS_BLOCKED_FOR_CUSTOMER: EdmTypeField<Customer, "Edm.String", true, true>;
    /**
     * Static representation of the [[postingIsBlocked]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const POSTING_IS_BLOCKED: EdmTypeField<Customer, "Edm.Boolean", true, true>;
    /**
     * Static representation of the [[supplier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUPPLIER: EdmTypeField<Customer, "Edm.String", true, true>;
    /**
     * Static representation of the [[customerCorporateGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER_CORPORATE_GROUP: EdmTypeField<Customer, "Edm.String", true, true>;
    /**
     * Static representation of the [[fiscalAddress]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FISCAL_ADDRESS: EdmTypeField<Customer, "Edm.String", true, true>;
    /**
     * Static representation of the [[industry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INDUSTRY: EdmTypeField<Customer, "Edm.String", true, true>;
    /**
     * Static representation of the [[industryCode1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INDUSTRY_CODE_1: EdmTypeField<Customer, "Edm.String", true, true>;
    /**
     * Static representation of the [[industryCode2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INDUSTRY_CODE_2: EdmTypeField<Customer, "Edm.String", true, true>;
    /**
     * Static representation of the [[industryCode3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INDUSTRY_CODE_3: EdmTypeField<Customer, "Edm.String", true, true>;
    /**
     * Static representation of the [[industryCode4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INDUSTRY_CODE_4: EdmTypeField<Customer, "Edm.String", true, true>;
    /**
     * Static representation of the [[industryCode5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INDUSTRY_CODE_5: EdmTypeField<Customer, "Edm.String", true, true>;
    /**
     * Static representation of the [[internationalLocationNumber1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INTERNATIONAL_LOCATION_NUMBER_1: EdmTypeField<Customer, "Edm.String", true, true>;
    /**
     * Static representation of the [[internationalLocationNumber2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INTERNATIONAL_LOCATION_NUMBER_2: EdmTypeField<Customer, "Edm.String", true, true>;
    /**
     * Static representation of the [[internationalLocationNumber3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INTERNATIONAL_LOCATION_NUMBER_3: EdmTypeField<Customer, "Edm.String", true, true>;
    /**
     * Static representation of the [[nielsenRegion]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NIELSEN_REGION: EdmTypeField<Customer, "Edm.String", true, true>;
    /**
     * Static representation of the [[paymentReason]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENT_REASON: EdmTypeField<Customer, "Edm.String", true, true>;
    /**
     * Static representation of the [[responsibleType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RESPONSIBLE_TYPE: EdmTypeField<Customer, "Edm.String", true, true>;
    /**
     * Static representation of the [[taxNumber1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TAX_NUMBER_1: EdmTypeField<Customer, "Edm.String", true, true>;
    /**
     * Static representation of the [[taxNumber2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TAX_NUMBER_2: EdmTypeField<Customer, "Edm.String", true, true>;
    /**
     * Static representation of the [[taxNumber3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TAX_NUMBER_3: EdmTypeField<Customer, "Edm.String", true, true>;
    /**
     * Static representation of the [[taxNumber4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TAX_NUMBER_4: EdmTypeField<Customer, "Edm.String", true, true>;
    /**
     * Static representation of the [[taxNumber5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TAX_NUMBER_5: EdmTypeField<Customer, "Edm.String", true, true>;
    /**
     * Static representation of the [[taxNumberType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TAX_NUMBER_TYPE: EdmTypeField<Customer, "Edm.String", true, true>;
    /**
     * Static representation of the [[vatRegistration]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VAT_REGISTRATION: EdmTypeField<Customer, "Edm.String", true, true>;
    /**
     * Static representation of the [[deletionIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DELETION_INDICATOR: EdmTypeField<Customer, "Edm.Boolean", true, true>;
    /**
     * Static representation of the [[expressTrainStationName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXPRESS_TRAIN_STATION_NAME: EdmTypeField<Customer, "Edm.String", true, true>;
    /**
     * Static representation of the [[trainStationName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TRAIN_STATION_NAME: EdmTypeField<Customer, "Edm.String", true, true>;
    /**
     * Static representation of the [[cityCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CITY_CODE: EdmTypeField<Customer, "Edm.String", true, true>;
    /**
     * Static representation of the [[county]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTY: EdmTypeField<Customer, "Edm.String", true, true>;
    /**
     * Static representation of the one-to-many navigation property [[toCustAddrDepdntExtIdentifier]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_CUST_ADDR_DEPDNT_EXT_IDENTIFIER: Link<Customer, CustAddrDepdntExtIdentifier>;
    /**
     * Static representation of the one-to-many navigation property [[toCustAddrDepdntInformation]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_CUST_ADDR_DEPDNT_INFORMATION: Link<Customer, CustAddrDepdntInformation>;
    /**
     * Static representation of the one-to-many navigation property [[toCustomerCompany]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_CUSTOMER_COMPANY: Link<Customer, CustomerCompany>;
    /**
     * Static representation of the one-to-many navigation property [[toCustomerSalesArea]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_CUSTOMER_SALES_AREA: Link<Customer, CustomerSalesArea>;
    /**
     * Static representation of the one-to-many navigation property [[toCustomerTaxGrouping]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_CUSTOMER_TAX_GROUPING: Link<Customer, CustomerTaxGrouping>;
    /**
     * Static representation of the one-to-many navigation property [[toCustomerText]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_CUSTOMER_TEXT: Link<Customer, CustomerText>;
    /**
     * Static representation of the one-to-many navigation property [[toCustomerUnloadingPoint]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_CUSTOMER_UNLOADING_POINT: Link<Customer, CustomerUnloadingPoint>;
    /**
     * Static representation of the one-to-many navigation property [[toCustUnldgPtAddrDepdntInfo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_CUST_UNLDG_PT_ADDR_DEPDNT_INFO: Link<Customer, CustUnldgPtAddrDepdntInfo>;
    /**
     * All fields of the Customer entity.
     */
    const _allFields: Array<EdmTypeField<Customer, 'Edm.String', false, true> | EdmTypeField<Customer, 'Edm.String', true, true> | OrderableEdmTypeField<Customer, 'Edm.DateTime', true, true> | EdmTypeField<Customer, 'Edm.Boolean', true, true> | Link<Customer, CustAddrDepdntExtIdentifier> | Link<Customer, CustAddrDepdntInformation> | Link<Customer, CustomerCompany> | Link<Customer, CustomerSalesArea> | Link<Customer, CustomerTaxGrouping> | Link<Customer, CustomerText> | Link<Customer, CustomerUnloadingPoint> | Link<Customer, CustUnldgPtAddrDepdntInfo>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<Customer>;
    /**
     * All key fields of the Customer entity.
     */
    const _keyFields: Array<Field<Customer, boolean, boolean>>;
    /**
     * Mapping of all key field names to the respective static field property Customer.
     */
    const _keys: {
        [keys: string]: Field<Customer, boolean, boolean>;
    };
}
//# sourceMappingURL=Customer.d.ts.map