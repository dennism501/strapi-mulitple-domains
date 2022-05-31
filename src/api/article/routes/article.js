'use strict';

/**
 * article router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::article.article', {
    config: {
        find: {
            policies: ['global::isAuthenticated'],
            middlewares: ['global::allowed-content']
        }
    }
});
