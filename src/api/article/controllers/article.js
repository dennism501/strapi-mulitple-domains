'use strict';

/**
 *  article controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::article.article', ({strapi}) => ({

    async find(ctx){
        strapi.log.info(`controller: ${JSON.stringify(ctx.query['domain'])}`)

        const articles = await strapi.service('api::article.article').getArticles(ctx);

        return articles;
    }
}));
