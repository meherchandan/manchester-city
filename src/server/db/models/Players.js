const { Model } = require('objection');
const knex = require('../knex');
// Give the knex instance to objection.
Model.knex(knex);
class Players extends Model {
  static get tableName() {
    return 'players';
  }
}

module.exports = Players;