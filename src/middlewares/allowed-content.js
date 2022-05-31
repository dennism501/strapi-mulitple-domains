'use strict';

/**
 * `allowed-content` middleware.
 */

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In allowed-content middleware.');

    await next();
  };
};
