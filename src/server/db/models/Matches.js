const { Model } = require('objection');
const knex = require('../knex');
// Give the knex instance to objection.
Model.knex(knex);
class Matches extends Model {
  static get tableName() {
    return 'matches';
  }
}

module.exports = Matches;