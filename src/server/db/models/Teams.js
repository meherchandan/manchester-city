const { Model } = require('objection');
const knex = require('../knex');
// Give the knex instance to objection.
Model.knex(knex);
class Teams extends Model {
  static get tableName() {
    return 'teams';
  }
}

module.exports = Teams;