const { Model } = require('objection');
const Password = require('objection-password')();
const knex = require('../knex');
// Give the knex instance to objection.
Model.knex(knex);
class Users extends Password(Model) {
  static get tableName() {
    return 'users';
  }
}

module.exports = Users;