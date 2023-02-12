'use strict';

/**
 * test-dinary service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::test-dinary.test-dinary');
