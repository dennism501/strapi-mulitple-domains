'use strict';

/**
 *  domain controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::domain.domain', ({strapi}) => ({

    async find(ctx) {
        strapi.log.info(`controller: ${JSON.stringify(ctx.query['domain'])}`)

        const entity = await strapi.service('api::domain.domain').getDomainContent(ctx);
        
        return this.transformResponse(entity); 
    }

}));
