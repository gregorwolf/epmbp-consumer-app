using my.bookshop as my from '../db/extended';
using ZEPM_BP_SRV as EPM_BP_API from './external/csn/ZEPM_BP_SRV.json';



service CatalogService {
  entity Books as projection on my.Books;
  entity Authors as projection on my.Authors;
  
  entity Orders as select from my.Orders mixin {
    EPMBusinessPartner: Association to EPMBusinessPartners
      on EPMBusinessPartner.BpId = businessPartner
  } into {
    *,
    EPMBusinessPartner
  };

  @cds.persistence.skip
  entity EPMBusinessPartners as projection on EPM_BP_API.EPMBusinessPartner {
    key BpId,
    CompanyName,
    City,
    Street
  };
};