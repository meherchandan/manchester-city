const { Model } = require('objection');
const knex = require('../knex');
// Give the knex instance to objection.
Model.knex(knex);
class Promotions extends Model {
  static get tableName() {
    return 'promotions';
  }
}

module.exports = Promotions;