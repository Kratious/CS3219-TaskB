import { Model } from 'objection';
import knex from '../db/knex';

Model.knex(knex);

class Todo extends Model {
  static get tableName() {
    return 'todo';
  }
}

export default Todo;
