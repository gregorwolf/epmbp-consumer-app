using {API_BUSINESS_PARTNER as external} from './external/API_BUSINESS_PARTNER';

service BusinessPartnerService {

  entity BusinessPartner as projection on external.A_BusinessPartner;

  function getAllBusinessPartners() returns String;

}
