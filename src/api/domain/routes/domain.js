'use strict';

/**
 * domain router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::domain.domain', {
    config: {
        find: {
            policies: ['global::isAuthenticated'],
            middlewares: ['global::allowed-content']
        }
    }
});
