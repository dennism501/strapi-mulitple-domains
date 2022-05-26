'use strict';

/**
 * `isAuthenticated` policy.
 */

module.exports = (policyContext, config, { strapi }) => {
    // Add your own logic here.
    if(policyContext.state.isAuthenticated){
      strapi.log.info(JSON.stringify(policyContext.state.isAuthenticated));
      return true;
    }
   

    return false;
};
