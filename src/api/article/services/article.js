'use strict';

/**
 * article service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::article.article', ({strapi}) => ({

    async getArticles(ctx) {
        const domain = ctx.query['domain']
        strapi.log.info(`service: ,${domain}`)
        const articles = await strapi.entityService.findMany('api::article.article', {
            filters: { domain: { name: domain}},
            sort: {publishedAt: 'DESC'},
            populate: { domain: true, category: true}
        })

        return articles;
    }
}));
