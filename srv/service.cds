using my.bookshop as my from '../db/extended';
using EPM_REF_APPS_PROD_MAN_SRV from './external/EPM_REF_APPS_PROD_MAN_SRV';
using ZPDCDS_SRV from './external/ZPDCDS_SRV';

service CatalogService @(requires: 'authenticated-user'){
  entity Books as projection on my.Books;
  entity Authors as projection on my.Authors;
  entity Orders as select from my.Orders mixin {
    SDKBusinessPartner: Association to sdkBusinessPartner
      on SDKBusinessPartner.BusinessPartner = businessPartner
  } into {
    *,
    SDKBusinessPartner
  };
  entity sdkSuppliers as projection on my.sdkSuppliers;
  entity Suppliers as projection on my.Suppliers;
  entity Products as projection on my.Products {
    Id,
    Name,
    MainCategoryId,
    MainCategoryName,
    SubCategoryId,
    SubCategoryName
  };
  entity sdkBusinessPartner as projection on my.A_BusinessPartner;
  entity SEPMRA_I_Product_E as projection on my.SEPMRA_I_Product_E;

};