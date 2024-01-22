/* checksum : 0aa712fa2bea1eef21c80bd9ade0c07a */
@cds.external : true
@m.IsDefaultEntityContainer : 'true'
@sap.message.scope.supported : 'true'
@sap.supported.formats : 'atom json xlsx'
service API_SLSPRICINGCONDITIONRECORD_SRV {};

@cds.external : true
@cds.persistence.skip : true
@sap.content.version : '1'
@sap.label : 'Condition Supplements'
entity API_SLSPRICINGCONDITIONRECORD_SRV.A_SlsPrcgCndnRecdSuplmnt {
  @sap.display.format : 'UpperCase'
  @sap.label : 'Condition Record No.'
  @sap.quickinfo : 'Number of Condition Record'
  key ConditionRecord : String(10) not null;
  @sap.display.format : 'NonNegative'
  @sap.label : 'Sequent. No. of Cond'
  @sap.quickinfo : 'Sequential number of the condition'
  key ConditionSequentialNumber : String(2) not null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Condition Table'
  ConditionTable : String(3);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Application'
  ConditionApplication : String(2);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Condition Type'
  ConditionType : String(4);
  @sap.display.format : 'Date'
  @sap.label : 'Valid To'
  @sap.quickinfo : 'Valid To Date'
  ConditionValidityEndDate : Date;
  @sap.display.format : 'Date'
  @sap.label : 'Valid From'
  @sap.quickinfo : 'Valid-From Date'
  ConditionValidityStartDate : Date;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Created By'
  @sap.quickinfo : 'Name of Person Responsible for Creating the Object'
  CreatedByUser : String(12);
  @sap.display.format : 'Date'
  @sap.label : 'Created On'
  @sap.quickinfo : 'Record Created On'
  CreationDate : Date;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Text number'
  @sap.quickinfo : 'Number of texts'
  ConditionTextID : String(10);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Scale Type'
  PricingScaleType : String(1);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Scale Base Type'
  PricingScaleBasis : String(1);
  @sap.unit : 'BaseUnit'
  @sap.label : 'Scale Quantity'
  @sap.quickinfo : 'Condition Scale Quantity'
  ConditionScaleQuantity : Decimal(15, 3);
  @sap.label : 'Scale Unit of Meas.'
  @sap.quickinfo : 'Condition Scale Unit of Measure'
  @sap.semantics : 'unit-of-measure'
  ConditionScaleQuantityUnit : String(3);
  @sap.unit : 'ConditionRateValueUnit'
  @sap.label : 'Scale Value'
  ConditionScaleAmount : Decimal(16, 3);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Scale Currency'
  @sap.semantics : 'currency-code'
  ConditionScaleAmountCurrency : String(5);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Calculation Type'
  @sap.quickinfo : 'Calculation Type for Condition'
  ConditionCalculationType : String(1);
  @sap.unit : 'ConditionRateValueUnit'
  @sap.label : 'Condition Amount'
  @sap.quickinfo : 'Condition amount or percentage where no scale exists'
  ConditionRateValue : Decimal(12, 3);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Condition Currency'
  @sap.quickinfo : 'Condition Unit (Currency or Percentage)'
  @sap.semantics : 'currency-code'
  ConditionRateValueUnit : String(5);
  @sap.unit : 'ConditionRateRatioUnit'
  @sap.label : 'Ratio'
  @sap.quickinfo : 'Condition Ratio (in Percent or Per Mille)'
  ConditionRateRatio : Decimal(24, 9);
  @sap.label : 'Unit of Measure'
  @sap.semantics : 'unit-of-measure'
  ConditionRateRatioUnit : String(3);
  @sap.unit : 'ConditionCurrency'
  @sap.label : 'Amount'
  @sap.quickinfo : 'Condition Amount or Percentage'
  ConditionRateAmount : Decimal(24, 9);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Condition Currency'
  @sap.quickinfo : 'Condition Unit (Currency or Percentage)'
  @sap.semantics : 'currency-code'
  ConditionCurrency : String(5);
  @sap.unit : 'ConditionQuantityUnit'
  @sap.label : 'Pricing Unit'
  @sap.quickinfo : 'Condition Pricing Unit'
  ConditionQuantity : Decimal(5, 0);
  @sap.label : 'Unit of Measure'
  @sap.quickinfo : 'Condition Unit'
  @sap.semantics : 'unit-of-measure'
  ConditionQuantityUnit : String(3);
  @sap.label : 'NumeratorForConvers.'
  @sap.quickinfo : 'Numerator for converting condition units to base units'
  ConditionToBaseQtyNmrtr : Decimal(5, 0);
  @sap.label : 'Denom.for Conversion'
  @sap.quickinfo : 'Denominator for converting condition units to base units'
  ConditionToBaseQtyDnmntr : Decimal(5, 0);
  @sap.label : 'Base Unit of Measure'
  @sap.semantics : 'unit-of-measure'
  BaseUnit : String(3);
  @sap.unit : 'ConditionRateValueUnit'
  @sap.label : 'Lower limit'
  @sap.quickinfo : 'Lower limit of the condition rate/amount'
  ConditionLowerLimit : Decimal(12, 3);
  @sap.unit : 'ConditionCurrency'
  @sap.label : 'Amount'
  @sap.quickinfo : 'Condition Amount or Percentage'
  ConditionLowerLimitAmount : Decimal(24, 9);
  @sap.unit : 'ConditionRateRatioUnit'
  @sap.label : 'Ratio'
  @sap.quickinfo : 'Condition Ratio (in Percent or Per Mille)'
  ConditionLowerLimitRatio : Decimal(24, 9);
  @sap.unit : 'ConditionRateValueUnit'
  @sap.label : 'Upper limit'
  @sap.quickinfo : 'Upper limit for the condition rate'
  ConditionUpperLimit : Decimal(12, 3);
  @sap.unit : 'ConditionCurrency'
  @sap.label : 'Amount'
  @sap.quickinfo : 'Condition Amount or Percentage'
  ConditionUpperLimitAmount : Decimal(24, 9);
  @sap.unit : 'ConditionRateRatioUnit'
  @sap.label : 'Ratio'
  @sap.quickinfo : 'Condition Ratio (in Percent or Per Mille)'
  ConditionUpperLimitRatio : Decimal(24, 9);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Condition Currency'
  @sap.quickinfo : 'Condition Currency (for Cumulation Fields)'
  @sap.semantics : 'currency-code'
  ConditionAlternativeCurrency : String(5);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Exclusion'
  @sap.quickinfo : 'Condition exclusion indicator'
  ConditionExclusion : String(1);
  @sap.label : 'Deletion Indicator'
  @sap.quickinfo : 'Deletion Indicator for Condition Record'
  ConditionIsDeleted : Boolean;
  @sap.display.format : 'NonNegative'
  @sap.label : 'Addit. Value Days'
  @sap.quickinfo : 'Additional Value Days'
  AdditionalValueDays : String(2);
  @sap.display.format : 'Date'
  @sap.label : 'Fixed Value Date'
  FixedValueDate : Date;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Terms of Payment'
  @sap.quickinfo : 'Key for Terms of Payment'
  PaymentTerms : String(4);
  @sap.display.format : 'NonNegative'
  @sap.label : 'Max.number.of.orders'
  @sap.quickinfo : 'Maximum number of sales orders per condition record'
  CndnMaxNumberOfSalesOrders : String(2);
  @sap.unit : 'BaseUnit'
  @sap.label : 'Min.cond.base value'
  @sap.quickinfo : 'Minimum condition base value'
  MinimumConditionBasisValue : Decimal(15, 3);
  @sap.unit : 'BaseUnit'
  @sap.label : 'Max.cond.base value'
  @sap.quickinfo : 'Maximum condition base value'
  MaximumConditionBasisValue : Decimal(15, 3);
  @sap.unit : 'ConditionAlternativeCurrency'
  @sap.label : 'Max.condition value'
  @sap.quickinfo : 'Maximum condition value'
  MaximumConditionAmount : Decimal(14, 3);
  @sap.display.format : 'NonNegative'
  @sap.label : 'Incremental scale'
  @sap.quickinfo : 'Number of incremental scale'
  IncrementalScale : String(4);
  @sap.display.format : 'NonNegative'
  @sap.label : 'Pricing scale'
  @sap.quickinfo : 'Scale number for pricing'
  PricingScaleLine : String(4);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Release Status'
  ConditionReleaseStatus : String(1);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Approval Request'
  @sap.quickinfo : 'Approval Request for Price Conditions'
  SalesPriceApprovalRequest : String(10);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Cndn Change Reason'
  @sap.quickinfo : 'Reason for Changing Condition Record'
  ConditionChangeReason : String(3);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Condition Record No.'
  @sap.quickinfo : 'Previously Approved Condition Record'
  PrevApprovedConditionRecord : String(10);
  ETag : String(40);
  @cds.ambiguous : 'missing on condition?'
  to_SlsPrcgCndnRecdValidity : Association to many API_SLSPRICINGCONDITIONRECORD_SRV.A_SlsPrcgCndnRecdValidity {  };
  @cds.ambiguous : 'missing on condition?'
  to_SlsPrcgCndnRecordScale : Association to many API_SLSPRICINGCONDITIONRECORD_SRV.A_SlsPrcgCndnRecordScale {  };
  @cds.ambiguous : 'missing on condition?'
  to_SlsPrcgCndnSupplementText : Association to many API_SLSPRICINGCONDITIONRECORD_SRV.A_SlsPrcgCndnSupplementText {  };
  @cds.ambiguous : 'missing on condition?'
  to_SlsPrcgConditionRecord : Association to API_SLSPRICINGCONDITIONRECORD_SRV.A_SlsPrcgConditionRecord {  };
};

@cds.external : true
@cds.persistence.skip : true
@sap.creatable : 'false'
@sap.deletable : 'false'
@sap.content.version : '1'
@sap.label : 'Condition Record Validity'
entity API_SLSPRICINGCONDITIONRECORD_SRV.A_SlsPrcgCndnRecdValidity {
  @sap.display.format : 'UpperCase'
  @sap.label : 'Condition Record No.'
  @sap.quickinfo : 'Number of Condition Record'
  key ConditionRecord : String(10) not null;
  @sap.display.format : 'Date'
  @sap.label : 'Valid To'
  @sap.quickinfo : 'Validity end date of the condition record'
  key ConditionValidityEndDate : Date not null;
  @sap.display.format : 'Date'
  @sap.label : 'Valid From'
  @sap.quickinfo : 'Validity start date of the condition record'
  ConditionValidityStartDate : Date;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Application'
  ConditionApplication : String(2);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Condition Type'
  ConditionType : String(4);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Release Status'
  ConditionReleaseStatus : String(1);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Departure Ctry/Reg.'
  @sap.quickinfo : 'Departure Country/Region (from which the goods are sent)'
  DepartureCountry : String(3);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Sales Document'
  SalesDocument : String(10);
  @sap.display.format : 'NonNegative'
  @sap.label : 'Sales Document Item'
  SalesDocumentItem : String(6);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Accounting Indicator'
  BillableControl : String(2);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Industry'
  @sap.quickinfo : 'Industry Key'
  Industry : String(4);
  @sap.display.format : 'UpperCase'
  @sap.label : 'City Code'
  CityCode : String(4);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Condition Contract'
  ConditionContract : String(10);
  @sap.display.format : 'UpperCase'
  @sap.label : 'County Code'
  County : String(3);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Customer Project ID'
  @sap.quickinfo : 'Commercial Project ID'
  EngagementProject : String(40);
  @sap.display.format : 'NonNegative'
  @sap.label : 'Internal Object No.'
  @sap.quickinfo : 'Configuration (Internal Object Number)'
  ConfigurationNumber : String(18);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Document type'
  BR_NFDocumentType : String(1);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Dynamic Key Field 1'
  BRSpcfcFreeDefinedField1 : String(40);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Dynamic Key Field 2'
  BRSpcfcFreeDefinedField2 : String(40);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Dynamic Key Field 3'
  BRSpcfcFreeDefinedField3 : String(40);
  @sap.display.format : 'UpperCase'
  @sap.label : 'EAN/UPC'
  @sap.quickinfo : 'International Article Number (EAN/UPC)'
  InternationalArticleNumber : String(18);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Object Type'
  @sap.quickinfo : 'Type of Technical Object'
  TechnicalObjectType : String(10);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Equipment'
  @sap.quickinfo : 'Equipment Number'
  Equipment : String(18);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Customer'
  CustomerHierarchy : String(10);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Incoterms'
  @sap.quickinfo : 'Incoterms (Part 1)'
  IncotermsClassification : String(3);
  @sap.label : 'Incoterms (Part 2)'
  IncotermsTransferLocation : String(28);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Tax Type'
  AccountTaxType : String(2);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Tax Rel. Classif.'
  @sap.quickinfo : 'Tax relevant classification'
  TxRlvnceClassfctnForArgentina : String(10);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Tax Code'
  @sap.quickinfo : 'SD tax code'
  BR_TaxCode : String(2);
  @sap.display.format : 'UpperCase'
  @sap.label : 'LST CST Appl. Code'
  @sap.quickinfo : 'LST CST Applicability Code'
  LocalSalesTaxApplicabilityCode : String(3);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Customer Group'
  CustomerGroup : String(2);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Price Group'
  @sap.quickinfo : 'Customer Price Group'
  CustomerPriceGroup : String(2);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Material Price Grp'
  @sap.quickinfo : 'Material Price Group'
  MaterialPricingGroup : String(2);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Sold-to Party'
  SoldToParty : String(10);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Business Partner'
  @sap.quickinfo : 'Business Partner Number'
  BPForSoldToParty : String(10);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Customer'
  @sap.quickinfo : 'Customer number'
  Customer : String(10);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Business Partner'
  @sap.quickinfo : 'Business Partner Number'
  BPForCustomer : String(10);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Payer'
  PayerParty : String(10);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Business Partner'
  @sap.quickinfo : 'Business Partner Number'
  BPForPayerParty : String(10);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Ship-to Party'
  ShipToParty : String(10);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Business Partner'
  @sap.quickinfo : 'Business Partner Number'
  BPForShipToParty : String(10);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Supplier'
  @sap.quickinfo : 'Supplier''s Account Number'
  Supplier : String(10);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Business Partner'
  @sap.quickinfo : 'Business Partner Number'
  BPForSupplier : String(10);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Dest. Country/Region'
  @sap.quickinfo : 'Destination Country/Region'
  DestinationCountry : String(3);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Material Group'
  MaterialGroup : String(9);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Material'
  @sap.quickinfo : 'Material Number'
  Material : String(40);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Refund Code'
  @sap.quickinfo : 'Returns Refund Code'
  ReturnsRefundExtent : String(3);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Material Group 1'
  AdditionalMaterialGroup1 : String(3);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Material Group 2'
  AdditionalMaterialGroup2 : String(3);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Material Group 3'
  AdditionalMaterialGroup3 : String(3);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Material Group 4'
  AdditionalMaterialGroup4 : String(3);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Material Group 5'
  AdditionalMaterialGroup5 : String(3);
  @sap.display.format : 'NonNegative'
  @sap.label : 'Personnel Number'
  Personnel : String(8);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Price List Type'
  PriceListType : String(2);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Postal Code'
  PostalCode : String(10);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Region'
  @sap.quickinfo : 'Region (State, Province, County)'
  Region : String(3);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Service Organization'
  EngagementProjectServiceOrg : String(5);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Requirement Segment'
  RequirementSegment : String(40);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Stock Segment'
  StockSegment : String(40);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Division'
  Division : String(2);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Commodity Code'
  CommodityCode : String(17);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Control Code'
  @sap.quickinfo : 'Control code for consumption taxes in foreign trade'
  ConsumptionTaxCtrlCode : String(16);
  @sap.display.format : 'NonNegative'
  @sap.label : 'Tax Base'
  @sap.quickinfo : 'Tax Base in Percentage'
  BRSpcfcTaxBasePercentageCode : String(1);
  @sap.display.format : 'NonNegative'
  @sap.label : 'Tax Group'
  @sap.quickinfo : 'Tax Group for Dynamic Tax Exceptions'
  BRSpcfcTxGrpDynTaxExceptions : String(2);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Tax Class.1 Customer'
  @sap.quickinfo : 'Tax Classification 1 for Customer'
  CustomerTaxClassification1 : String(1);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Tax Class.2 Customer'
  @sap.quickinfo : 'Tax Classification 2 for Customer'
  CustomerTaxClassification2 : String(1);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Tax Class.3 Customer'
  @sap.quickinfo : 'Tax Classification 3 for Customer'
  CustomerTaxClassification3 : String(1);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Tax Class.4 Customer'
  @sap.quickinfo : 'Tax Classification 4 for Customer'
  CustomerTaxClassification4 : String(1);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Tax Class.5 Customer'
  @sap.quickinfo : 'Tax Classification 5 for Customer'
  CustomerTaxClassification5 : String(1);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Tax Class.6 Customer'
  @sap.quickinfo : 'Tax Classification 6 for Customer'
  CustomerTaxClassification6 : String(1);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Tax Class.7 Customer'
  @sap.quickinfo : 'Tax Classification 7 for Customer'
  CustomerTaxClassification7 : String(1);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Tax Class.8 Customer'
  @sap.quickinfo : 'Tax Classification 8 for Customer'
  CustomerTaxClassification8 : String(1);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Tax Class.9 Customer'
  @sap.quickinfo : 'Tax Classification 9 for Customer'
  CustomerTaxClassification9 : String(1);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Tax Class. Material'
  @sap.quickinfo : 'Tax Classification of Material'
  ProductTaxClassification1 : String(1);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Tax Class.2 Material'
  @sap.quickinfo : 'Tax Classification 2 for Material'
  ProductTaxClassification2 : String(1);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Tax Class.3 Material'
  @sap.quickinfo : 'Tax Classification 3 for Material'
  ProductTaxClassification3 : String(1);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Tax Class.4 Material'
  @sap.quickinfo : 'Tax Classification 4 for Material'
  ProductTaxClassification4 : String(1);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Tax Class.5 Material'
  @sap.quickinfo : 'Tax Classification 5 for Material'
  ProductTaxClassification5 : String(1);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Tax Class.6 Material'
  @sap.quickinfo : 'Tax Classification 6 for Material'
  ProductTaxClassification6 : String(1);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Tax Class.7 Material'
  @sap.quickinfo : 'Tax Classification 7 for Material'
  ProductTaxClassification7 : String(1);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Tax Class.8 Material'
  @sap.quickinfo : 'Tax Classification 8 for Material'
  ProductTaxClassification8 : String(1);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Tax Class.9 Material'
  @sap.quickinfo : 'Tax Classification 9 for Material'
  ProductTaxClassification9 : String(1);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Trading Contract'
  TradingContract : String(10);
  @sap.display.format : 'NonNegative'
  @sap.label : 'Item Number'
  @sap.quickinfo : 'Item Number of Trading Contract'
  TradingContractItem : String(6);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Tax Jurisdiction'
  TaxJurisdiction : String(15);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Ship from'
  @sap.quickinfo : 'Ship from location (tax region)'
  BRSpcfcTaxDepartureRegion : String(3);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Ship to'
  @sap.quickinfo : 'Ship to location (tax region)'
  BRSpcfcTaxDestinationRegion : String(3);
  @sap.display.format : 'UpperCase'
  @sap.label : 'MnItem MatPricingGrp'
  @sap.quickinfo : 'Material pricing group of main item'
  MainItemMaterialPricingGroup : String(2);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Pricing Ref.Material'
  @sap.quickinfo : 'Pricing reference material of main item'
  MainItemPricingRefMaterial : String(40);
  @sap.label : 'Variant Key'
  @sap.quickinfo : 'Variant Condition Key'
  VariantCondition : String(26);
  @sap.display.format : 'UpperCase'
  @sap.label : 'VAS Charge Code'
  @sap.quickinfo : 'VAS Charge Codes'
  ValueAddedServiceChargeCode : String(3);
  @sap.display.format : 'UpperCase'
  @sap.label : 'SD Document'
  @sap.quickinfo : 'Sales and Distribution Document Number'
  SDDocument : String(10);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Reference Document'
  @sap.quickinfo : 'Document Number of Reference Document'
  ReferenceSDDocument : String(10);
  @sap.display.format : 'NonNegative'
  @sap.label : 'Reference Item'
  @sap.quickinfo : 'Item Number of the Reference Item'
  ReferenceSDDocumentItem : String(6);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Sales Office'
  SalesOffice : String(4);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Sales Group'
  SalesGroup : String(3);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Sales Organization'
  SalesOrganization : String(4);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Sales Org. of Order'
  @sap.quickinfo : 'Sales organization of sales order'
  SalesOrderSalesOrganization : String(4);
  @sap.label : 'Sales Unit'
  @sap.semantics : 'unit-of-measure'
  OrderQuantityUnit : String(3);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Distribution Channel'
  DistributionChannel : String(2);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Document Currency'
  @sap.quickinfo : 'SD Document Currency'
  @sap.semantics : 'currency-code'
  TransactionCurrency : String(5);
  @sap.display.format : 'NonNegative'
  @sap.label : 'WBS Bill Elem.'
  @sap.quickinfo : 'WBS Billing Element'
  WBSElementInternalID : String(24);
  @sap.display.format : 'UpperCase'
  @sap.label : 'WBS Element'
  @sap.quickinfo : 'Work Breakdown Structure Element (WBS Element) Edited'
  WBSElementExternalID : String(24);
  @sap.display.format : 'NonNegative'
  @sap.label : 'WBS Work Packg.'
  @sap.quickinfo : 'WBS Work Package'
  WorkPackage : String(24);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Plant'
  Plant : String(4);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Region of Dlv. Plant'
  @sap.quickinfo : 'Region in which plant is located'
  PlantRegion : String(3);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Work Item ID'
  WorkItem : String(10);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Processing Status'
  @sap.quickinfo : 'Processing status for conditions'
  ConditionProcessingStatus : String(2);
  @sap.display.format : 'Date'
  @sap.label : 'Cndn Pricing Date'
  @sap.quickinfo : 'Condition Pricing Date'
  PricingDate : Date;
  @sap.label : 'Exclusive'
  @sap.quickinfo : 'Indicator condition exclusive'
  ConditionIsExclusive : Boolean;
  @sap.display.format : 'NonNegative'
  @sap.label : 'Scale Base Value'
  @sap.quickinfo : 'Condition Scale Base Value'
  ConditionScaleBasisValue : String(7);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Tax Code'
  @sap.quickinfo : 'Tax on Sales/Purchases Code'
  TaxCode : String(2);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Transaction ID'
  ServiceDocument : String(10);
  @sap.display.format : 'NonNegative'
  @sap.label : 'Item Number in Doc.'
  @sap.quickinfo : 'Shortened Item Number in Document'
  ServiceDocumentItem : String(6);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Overtime Category'
  TimeSheetOvertimeCategory : String(4);
  @sap.label : 'SD Document Category'
  SalesSDDocumentCategory : String(4);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Return Reason'
  ReturnReason : String(3);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Node'
  @sap.quickinfo : 'Product Hierarchy Node'
  ProdUnivHierarchyNode : String(24);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Prod. Hier. Node'
  @sap.quickinfo : 'Product Hierarchy Node'
  ProductHierarchyNode : String(24);
  @sap.display.format : 'UpperCase'
  @sap.label : 'CustomerCondGrp'
  @sap.quickinfo : 'Customer Attribute for Condition Groups'
  CustomerConditionGroup : String(2);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Shipping Type'
  ShippingType : String(2);
  @sap.display.format : 'NonNegative'
  @sap.label : 'Provider Durat.'
  @sap.quickinfo : 'Numerical Value of Duration'
  SubscriptionContractDuration : String(13);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Time Unit'
  @sap.quickinfo : 'IS-T: Unit of Duration for a Telco Contract'
  SubscrpnContrDurationUnit : String(12);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Lock Reason'
  SubscriptionContractLockReason : String(8);
  @sap.display.format : 'NonNegative'
  @sap.label : 'Price Version'
  CrsCtlgMappgPriceVersionNumber : String(4);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Order Type'
  OrderType : String(4);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Sales Document Type'
  SalesDocumentType : String(4);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Order Reason'
  @sap.quickinfo : 'Order Reason (Reason for the Business Transaction)'
  SDDocumentReason : String(3);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Volume Rebate Group'
  @sap.quickinfo : 'Volume rebate group'
  VolumeRebateGroup : String(2);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Valuation Type'
  ValuationType : String(10);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Sales District'
  SalesDistrict : String(6);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Batch'
  @sap.quickinfo : 'Batch Number'
  Batch : String(10);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Supplying Plant'
  @sap.quickinfo : 'Supplying (issuing) plant in case of stock transport order'
  PurgDocSupplyingPlant : String(4);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Usage'
  @sap.quickinfo : 'Usage Indicator'
  MatUsageIndicator : String(3);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Shipping Conditions'
  ShippingCondition : String(2);
  @sap.display.format : 'UpperCase'
  @sap.label : 'County of Dlv.Plant'
  @sap.quickinfo : 'County in which plant is located'
  PlantCounty : String(3);
  @sap.display.format : 'UpperCase'
  @sap.label : 'City of Deliv. Plant'
  @sap.quickinfo : 'City in which plant is located'
  PlantCity : String(4);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Ext. Material Group'
  @sap.quickinfo : 'External Material Group'
  MaterialExternalGroup : String(18);
  @sap.display.format : 'UpperCase'
  @sap.label : 'CH Rt. Nd. ID'
  @sap.quickinfo : 'Customer Hierarchy Root Node ID (Hier ID)'
  CustomerHierarchyRootNode : String(20);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Cust. Hier. Node ID'
  @sap.quickinfo : 'Customer Hierarchy Node ID'
  CustomerHierarchyNodeID : String(40);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Cust. Hier. Nd. Type'
  @sap.quickinfo : 'Customer Hierarchy Node Type'
  CustomerHierarchyNodeType : String(30);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Customer Group 1'
  AdditionalCustomerGroup1 : String(3);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Customer Group 2'
  AdditionalCustomerGroup2 : String(3);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Customer Group 3'
  AdditionalCustomerGroup3 : String(3);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Customer Group 4'
  AdditionalCustomerGroup4 : String(3);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Customer Group 5'
  AdditionalCustomerGroup5 : String(3);
  @sap.display.format : 'NonNegative'
  @sap.label : 'Item (SD)'
  @sap.quickinfo : 'Item number of the SD document'
  SDDocumentItem : String(6);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Billing Category'
  CndnBillingDocumentCategory : String(1);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Country/Region Key'
  Country : String(3);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Contract'
  @sap.quickinfo : 'Contract Number'
  PRAContract : String(10);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Well'
  @sap.quickinfo : 'Well ID number'
  Well : String(15);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Well Completion'
  @sap.quickinfo : 'Well Completion Number'
  WellCompletion : String(5);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Measurement Point'
  @sap.quickinfo : 'Measurement point number'
  MeasurementPoint : String(20);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Formula ID'
  PricingFormulaNumber : String(10);
  ETag : String(40);
  @cds.ambiguous : 'missing on condition?'
  to_SlsPrcgCndnRecdSuplmnt : Association to many API_SLSPRICINGCONDITIONRECORD_SRV.A_SlsPrcgCndnRecdSuplmnt {  };
  @cds.ambiguous : 'missing on condition?'
  to_SlsPrcgConditionRecord : Association to API_SLSPRICINGCONDITIONRECORD_SRV.A_SlsPrcgConditionRecord {  };
};

@cds.external : true
@cds.persistence.skip : true
@sap.content.version : '1'
@sap.label : 'Pricing Scales'
entity API_SLSPRICINGCONDITIONRECORD_SRV.A_SlsPrcgCndnRecordScale {
  @sap.display.format : 'UpperCase'
  @sap.label : 'Condition Record No.'
  @sap.quickinfo : 'Number of Condition Record'
  key ConditionRecord : String(10) not null;
  @sap.display.format : 'NonNegative'
  @sap.label : 'Sequent. No. of Cond'
  @sap.quickinfo : 'Sequential number of the condition'
  key ConditionSequentialNumber : String(2) not null;
  @sap.display.format : 'NonNegative'
  @sap.label : 'Line number'
  @sap.quickinfo : 'Current number of the line scale'
  key ConditionScaleLine : String(4) not null;
  @sap.unit : 'ConditionScaleQuantityUnit'
  @sap.label : 'Scale Quantity'
  @sap.quickinfo : 'Condition Scale Quantity'
  ConditionScaleQuantity : Decimal(15, 3);
  @sap.label : 'Scale Unit of Meas.'
  @sap.quickinfo : 'Condition Scale Unit of Measure'
  @sap.semantics : 'unit-of-measure'
  ConditionScaleQuantityUnit : String(3);
  @sap.unit : 'ConditionScaleAmountCurrency'
  @sap.label : 'Scale Value'
  ConditionScaleAmount : Decimal(16, 3);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Scale Currency'
  @sap.semantics : 'currency-code'
  ConditionScaleAmountCurrency : String(5);
  @sap.unit : 'ConditionRateValueUnit'
  @sap.label : 'Amount'
  @sap.quickinfo : 'Condition Amount or Percentage'
  ConditionRateValue : Decimal(12, 3);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Condition Currency'
  @sap.quickinfo : 'Condition Unit (Currency or Percentage)'
  @sap.semantics : 'currency-code'
  ConditionRateValueUnit : String(5);
  @sap.unit : 'ConditionRateRatioUnit'
  @sap.label : 'Ratio'
  @sap.quickinfo : 'Condition Ratio (in Percent or Per Mille)'
  ConditionRateRatio : Decimal(24, 9);
  @sap.label : 'Unit of Measure'
  @sap.semantics : 'unit-of-measure'
  ConditionRateRatioUnit : String(3);
  @sap.unit : 'ConditionCurrency'
  @sap.label : 'Amount'
  @sap.quickinfo : 'Condition Amount or Percentage'
  ConditionRateAmount : Decimal(24, 9);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Condition Currency'
  @sap.quickinfo : 'Condition Unit (Currency or Percentage)'
  @sap.semantics : 'currency-code'
  ConditionCurrency : String(5);
  ETag : String(40);
  @cds.ambiguous : 'missing on condition?'
  to_SlsPrcgCndnRecdSuplmnt : Association to API_SLSPRICINGCONDITIONRECORD_SRV.A_SlsPrcgCndnRecdSuplmnt {  };
  @cds.ambiguous : 'missing on condition?'
  to_SlsPrcgConditionRecord : Association to API_SLSPRICINGCONDITIONRECORD_SRV.A_SlsPrcgConditionRecord {  };
};

@cds.external : true
@cds.persistence.skip : true
@sap.content.version : '1'
@sap.label : 'Condition Supplement Descriptions'
entity API_SLSPRICINGCONDITIONRECORD_SRV.A_SlsPrcgCndnSupplementText {
  @sap.display.format : 'UpperCase'
  @sap.label : 'Condition Record No.'
  @sap.quickinfo : 'Number of Condition Record'
  key ConditionRecord : String(10) not null;
  @sap.display.format : 'NonNegative'
  @sap.label : 'Sequent. No. of Cond'
  @sap.quickinfo : 'Sequential number of the condition'
  key ConditionSequentialNumber : String(2) not null;
  @sap.label : 'Language Key'
  key Language : String(2) not null;
  @sap.label : 'Description'
  ConditionText : String(40);
  ETag : String(40);
  @cds.ambiguous : 'missing on condition?'
  to_SlsPrcgCndnRecdSuplmnt : Association to API_SLSPRICINGCONDITIONRECORD_SRV.A_SlsPrcgCndnRecdSuplmnt {  };
};

@cds.external : true
@cds.persistence.skip : true
@sap.content.version : '1'
@sap.label : 'Condition Records'
entity API_SLSPRICINGCONDITIONRECORD_SRV.A_SlsPrcgConditionRecord {
  @sap.display.format : 'UpperCase'
  @sap.label : 'Condition Record No.'
  @sap.quickinfo : 'Number of Condition Record'
  key ConditionRecord : String(10) not null;
  @sap.display.format : 'NonNegative'
  @sap.label : 'Sequent. No. of Cond'
  @sap.quickinfo : 'Sequential number of the condition'
  ConditionSequentialNumber : String(2);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Condition Table'
  ConditionTable : String(3);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Application'
  ConditionApplication : String(2);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Condition Type'
  ConditionType : String(4);
  @sap.display.format : 'Date'
  @sap.label : 'Valid To'
  @sap.quickinfo : 'Valid To Date'
  ConditionValidityEndDate : Date;
  @sap.display.format : 'Date'
  @sap.label : 'Valid From'
  @sap.quickinfo : 'Valid-From Date'
  ConditionValidityStartDate : Date;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Created By'
  @sap.quickinfo : 'Name of Person Responsible for Creating the Object'
  CreatedByUser : String(12);
  @sap.display.format : 'Date'
  @sap.label : 'Created On'
  @sap.quickinfo : 'Record Created On'
  CreationDate : Date;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Text number'
  @sap.quickinfo : 'Number of texts'
  ConditionTextID : String(10);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Scale Type'
  PricingScaleType : String(1);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Scale Base Type'
  PricingScaleBasis : String(1);
  @sap.unit : 'ConditionScaleQuantityUnit'
  @sap.label : 'Scale Quantity'
  @sap.quickinfo : 'Condition Scale Quantity'
  ConditionScaleQuantity : Decimal(15, 3);
  @sap.label : 'Scale Unit of Meas.'
  @sap.quickinfo : 'Condition Scale Unit of Measure'
  @sap.semantics : 'unit-of-measure'
  ConditionScaleQuantityUnit : String(3);
  @sap.unit : 'ConditionScaleAmountCurrency'
  @sap.label : 'Scale Value'
  ConditionScaleAmount : Decimal(16, 3);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Scale Currency'
  @sap.semantics : 'currency-code'
  ConditionScaleAmountCurrency : String(5);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Calculation Type'
  @sap.quickinfo : 'Calculation Type for Condition'
  ConditionCalculationType : String(1);
  @sap.unit : 'ConditionRateValueUnit'
  @sap.label : 'Condition Amount'
  @sap.quickinfo : 'Condition amount or percentage where no scale exists'
  ConditionRateValue : Decimal(12, 3);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Condition Currency'
  @sap.quickinfo : 'Condition Unit (Currency or Percentage)'
  @sap.semantics : 'currency-code'
  ConditionRateValueUnit : String(5);
  @sap.unit : 'ConditionRateRatioUnit'
  @sap.label : 'Ratio'
  @sap.quickinfo : 'Condition Ratio (in Percent or Per Mille)'
  ConditionRateRatio : Decimal(24, 9);
  @sap.label : 'Unit of Measure'
  @sap.semantics : 'unit-of-measure'
  ConditionRateRatioUnit : String(3);
  @sap.unit : 'ConditionCurrency'
  @sap.label : 'Amount'
  @sap.quickinfo : 'Condition Amount or Percentage'
  ConditionRateAmount : Decimal(24, 9);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Condition Currency'
  @sap.quickinfo : 'Condition Unit (Currency or Percentage)'
  @sap.semantics : 'currency-code'
  ConditionCurrency : String(5);
  @sap.unit : 'ConditionQuantityUnit'
  @sap.label : 'Pricing Unit'
  @sap.quickinfo : 'Condition Pricing Unit'
  ConditionQuantity : Decimal(5, 0);
  @sap.label : 'Unit of Measure'
  @sap.quickinfo : 'Condition Unit'
  @sap.semantics : 'unit-of-measure'
  ConditionQuantityUnit : String(3);
  @sap.label : 'NumeratorForConvers.'
  @sap.quickinfo : 'Numerator for converting condition units to base units'
  ConditionToBaseQtyNmrtr : Decimal(5, 0);
  @sap.label : 'Denom.for Conversion'
  @sap.quickinfo : 'Denominator for converting condition units to base units'
  ConditionToBaseQtyDnmntr : Decimal(5, 0);
  @sap.label : 'Base Unit of Measure'
  @sap.semantics : 'unit-of-measure'
  BaseUnit : String(3);
  @sap.unit : 'ConditionRateValueUnit'
  @sap.label : 'Lower limit'
  @sap.quickinfo : 'Lower limit of the condition rate/amount'
  ConditionLowerLimit : Decimal(12, 3);
  @sap.unit : 'ConditionCurrency'
  @sap.label : 'Amount'
  @sap.quickinfo : 'Condition Amount or Percentage'
  ConditionLowerLimitAmount : Decimal(24, 9);
  @sap.unit : 'ConditionRateRatioUnit'
  @sap.label : 'Ratio'
  @sap.quickinfo : 'Condition Ratio (in Percent or Per Mille)'
  ConditionLowerLimitRatio : Decimal(24, 9);
  @sap.unit : 'ConditionRateValueUnit'
  @sap.label : 'Upper limit'
  @sap.quickinfo : 'Upper limit for the condition rate'
  ConditionUpperLimit : Decimal(12, 3);
  @sap.unit : 'ConditionCurrency'
  @sap.label : 'Amount'
  @sap.quickinfo : 'Condition Amount or Percentage'
  ConditionUpperLimitAmount : Decimal(24, 9);
  @sap.unit : 'ConditionRateRatioUnit'
  @sap.label : 'Ratio'
  @sap.quickinfo : 'Condition Ratio (in Percent or Per Mille)'
  ConditionUpperLimitRatio : Decimal(24, 9);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Condition Currency'
  @sap.quickinfo : 'Condition Currency (for Cumulation Fields)'
  @sap.semantics : 'currency-code'
  ConditionAlternativeCurrency : String(5);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Exclusion'
  @sap.quickinfo : 'Condition exclusion indicator'
  ConditionExclusion : String(1);
  @sap.label : 'Deletion Indicator'
  @sap.quickinfo : 'Deletion Indicator for Condition Record'
  ConditionIsDeleted : Boolean;
  @sap.display.format : 'NonNegative'
  @sap.label : 'Addit. Value Days'
  @sap.quickinfo : 'Additional Value Days'
  AdditionalValueDays : String(2);
  @sap.display.format : 'Date'
  @sap.label : 'Fixed Value Date'
  FixedValueDate : Date;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Terms of Payment'
  @sap.quickinfo : 'Key for Terms of Payment'
  PaymentTerms : String(4);
  @sap.display.format : 'NonNegative'
  @sap.label : 'Max.number.of.orders'
  @sap.quickinfo : 'Maximum number of sales orders per condition record'
  CndnMaxNumberOfSalesOrders : String(2);
  @sap.unit : 'ConditionQuantityUnit'
  @sap.label : 'Min.cond.base value'
  @sap.quickinfo : 'Minimum condition base value'
  MinimumConditionBasisValue : Decimal(15, 3);
  @sap.unit : 'ConditionQuantityUnit'
  @sap.label : 'Max.cond.base value'
  @sap.quickinfo : 'Maximum condition base value'
  MaximumConditionBasisValue : Decimal(15, 3);
  @sap.unit : 'ConditionAlternativeCurrency'
  @sap.label : 'Max.condition value'
  @sap.quickinfo : 'Maximum condition value'
  MaximumConditionAmount : Decimal(14, 3);
  @sap.display.format : 'NonNegative'
  @sap.label : 'Incremental scale'
  @sap.quickinfo : 'Number of incremental scale'
  IncrementalScale : String(4);
  @sap.display.format : 'NonNegative'
  @sap.label : 'Pricing scale'
  @sap.quickinfo : 'Scale number for pricing'
  PricingScaleLine : String(4);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Release Status'
  ConditionReleaseStatus : String(1);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Approval Request'
  @sap.quickinfo : 'Approval Request for Price Conditions'
  SalesPriceApprovalRequest : String(10);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Cndn Change Reason'
  @sap.quickinfo : 'Reason for Changing Condition Record'
  ConditionChangeReason : String(3);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Condition Record No.'
  @sap.quickinfo : 'Previously Approved Condition Record'
  PrevApprovedConditionRecord : String(10);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Tax Code'
  @sap.quickinfo : 'Tax on Sales/Purchases Code'
  ConditionTaxCode : String(2);
  @sap.display.format : 'UpperCase'
  @sap.label : 'W/Tax Code'
  @sap.quickinfo : 'Withholding Tax Code'
  ConditionWithholdingTaxCode : String(2);
  @sap.display.format : 'UpperCase'
  @sap.label : 'License Number'
  @sap.quickinfo : 'Tax Exemption License Number'
  TaxExemptionLicense : String(24);
  @sap.display.format : 'Date'
  @sap.label : 'License Date'
  @sap.quickinfo : 'Date License Granted'
  LicenseGrantDate : Date;
  ETag : String(40);
  @cds.ambiguous : 'missing on condition?'
  to_SlsPrcgCndnRecdSuplmnt : Association to many API_SLSPRICINGCONDITIONRECORD_SRV.A_SlsPrcgCndnRecdSuplmnt {  };
  @cds.ambiguous : 'missing on condition?'
  to_SlsPrcgCndnRecdValidity : Association to many API_SLSPRICINGCONDITIONRECORD_SRV.A_SlsPrcgCndnRecdValidity {  };
  @cds.ambiguous : 'missing on condition?'
  to_SlsPrcgCndnRecordScale : Association to many API_SLSPRICINGCONDITIONRECORD_SRV.A_SlsPrcgCndnRecordScale {  };
  @cds.ambiguous : 'missing on condition?'
  to_SlsPrcgConditionRecordText : Association to many API_SLSPRICINGCONDITIONRECORD_SRV.A_SlsPrcgConditionRecordText {  };
};

@cds.external : true
@cds.persistence.skip : true
@sap.content.version : '1'
@sap.label : 'Condition Record Descriptions'
entity API_SLSPRICINGCONDITIONRECORD_SRV.A_SlsPrcgConditionRecordText {
  @sap.display.format : 'UpperCase'
  @sap.label : 'Condition Record No.'
  @sap.quickinfo : 'Number of Condition Record'
  key ConditionRecord : String(10) not null;
  @sap.display.format : 'NonNegative'
  @sap.label : 'Sequent. No. of Cond'
  @sap.quickinfo : 'Sequential number of the condition'
  key ConditionSequentialNumber : String(2) not null;
  @sap.label : 'Language Key'
  key Language : String(2) not null;
  @sap.label : 'Description'
  ConditionText : String(40);
  ETag : String(40);
  @cds.ambiguous : 'missing on condition?'
  to_SlsPrcgConditionRecord : Association to API_SLSPRICINGCONDITIONRECORD_SRV.A_SlsPrcgConditionRecord {  };
};

