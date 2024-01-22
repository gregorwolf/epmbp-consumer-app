using {API_SLSPRICINGCONDITIONRECORD_SRV as external} from './external/API_SLSPRICINGCONDITIONRECORD_SRV';

service ConditionService {

  function getConditionValidityForTable() returns array of String;

}
