namespace my.bookshop;

using cuid from '@sap/cds/common';
using EPM_REF_APPS_PROD_MAN_SRV from '../srv/external/EPM_REF_APPS_PROD_MAN_SRV';
using ZPDCDS_SRV from '../srv/external/ZPDCDS_SRV';

entity Books {
  key ID : Integer;
  title  : String;
  stock  : Integer;
  author : Association to Authors;
  supplier : Association to one Suppliers;
}

entity Authors {
  key ID : Integer;
  name   : String;
  books  : Association to many Books on books.author = $self;
}

entity Orders : cuid {
  book     : Association to Books;
  quantity : Integer;
}

// @cds.persistence.skip
entity Suppliers as projection on EPM_REF_APPS_PROD_MAN_SRV.Suppliers;
entity sdkSuppliers as projection on EPM_REF_APPS_PROD_MAN_SRV.Suppliers;

@cds.persistence.skip:false
@cds.persistence.table
entity Products as projection on EPM_REF_APPS_PROD_MAN_SRV.Products;

entity A_BusinessPartner {
  key BusinessPartner: String(10);
  OrganizationBPName1: String(40);
}

entity SEPMRA_I_Product_E as projection on ZPDCDS_SRV.SEPMRA_I_Product_E;
