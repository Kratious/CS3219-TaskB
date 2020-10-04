// import { Model } from 'objection';
// import knex from '../db/knex';
const { Model } = require('objection');
const knex = require('../db/knex');

Model.knex(knex);

class Todo extends Model {
  static get tableName() {
    return 'todo';
  }
}

module.exports = Todo;
// export default Todo;
