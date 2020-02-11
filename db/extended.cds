using my.bookshop as my from './schema';

extend my.Orders with {
  businessPartner : String(10);
}