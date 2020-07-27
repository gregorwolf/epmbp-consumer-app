namespace my.bookshop;

using cuid from '@sap/cds/common';
using EPM_REF_APPS_PROD_MAN_SRV from '../srv/external/EPM_REF_APPS_PROD_MAN_SRV';


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

@cds.persistence.skip
entity Suppliers as projection on EPM_REF_APPS_PROD_MAN_SRV.Suppliers;
