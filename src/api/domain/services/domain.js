'use strict';

/**
 * domain service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::domain.domain', ({strapi}) =>({

    async getDomainContent(ctx) {

        const domain = ctx.query['domain']
        strapi.log.info(`service: ,${domain}`)
        const entities = await strapi.entityService.findMany('api::domain.domain', {
            filters: { name: domain},
            sort: {createdAt: 'DESC'}
        })

        return entities;
    }
}));
