using my.bookshop as my from '../db/extended';
using EPM_REF_APPS_PROD_MAN_SRV from './external/EPM_REF_APPS_PROD_MAN_SRV';

service CatalogService @(requires: 'authenticated-user'){
  entity Books as projection on my.Books;
  entity Authors as projection on my.Authors;
  /*
  entity Orders as select from my.Orders mixin {
    EPMBusinessPartner: Association to EPMBusinessPartners
      on EPMBusinessPartner.BpId = businessPartner
  } into {
    *,
    EPMBusinessPartner
  };
  */
  @cds.persistence.skip
  entity sdkSuppliers as projection on EPM_REF_APPS_PROD_MAN_SRV.Suppliers;
  @cds.persistence.skip
  entity Suppliers as projection on EPM_REF_APPS_PROD_MAN_SRV.Suppliers;
  @cds.persistence.skip
  entity Products as projection on EPM_REF_APPS_PROD_MAN_SRV.Products;

};