const environment = process.env.NODE_ENV || 'development';
const config = require('../knexfile.js')[environment];

// TODO: add package.json command to migrate and rollback.
// knex migrate:make
// knex migrate:latest
//  --env=test
// knex migrate:rollback

module.exports = require('knex')(config);
